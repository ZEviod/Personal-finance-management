"""
Minimal backend server with simple auth (no third-party libs).
Run with: python -m backend.app.server

Endpoints:
- POST /signup  {username, password}
- POST /signin  {username, password} -> {token}
- POST /transactions  (Authorization: Bearer <token>) -> save transaction
- GET /transactions  (Authorization: Bearer <token>) -> list transactions

This implementation stores users and transactions in SQLite and issues a simple HMAC-based token.
"""
import json
from http.server import BaseHTTPRequestHandler, HTTPServer
import urllib.parse as urlparse
from typing import Tuple
import hashlib
import hmac
import os
import base64
import secrets

from . import db

HOST = "127.0.0.1"
PORT = 8000

# Secret key for signing tokens. In production keep this secret; here we generate or load from file.
SECRET_FILE = os.path.join(os.path.dirname(__file__), "secret.key")


def load_or_create_secret() -> bytes:
    if os.path.exists(SECRET_FILE):
        return open(SECRET_FILE, "rb").read()
    else:
        s = secrets.token_bytes(32)
        open(SECRET_FILE, "wb").write(s)
        return s


SECRET = load_or_create_secret()


def hash_password(password: str, salt: bytes = None) -> Tuple[bytes, bytes]:
    if salt is None:
        salt = secrets.token_bytes(16)
    # PBKDF2 with SHA256
    pwdhash = hashlib.pbkdf2_hmac("sha256", password.encode("utf-8"), salt, 100_000)
    return pwdhash, salt


def verify_password(password: str, pwdhash: bytes, salt: bytes) -> bool:
    test_hash = hashlib.pbkdf2_hmac("sha256", password.encode("utf-8"), salt, 100_000)
    return hmac.compare_digest(test_hash, pwdhash)


def make_token(user_id: int) -> str:
    # token = base64(user_id:signature)
    msg = str(user_id).encode("utf-8")
    sig = hmac.new(SECRET, msg, hashlib.sha256).digest()
    token = base64.urlsafe_b64encode(msg + b":" + sig).decode("utf-8")
    return token


def parse_token(token: str) -> int:
    try:
        raw = base64.urlsafe_b64decode(token.encode("utf-8"))
        parts = raw.split(b":", 1)
        if len(parts) != 2:
            return -1
        user_id = int(parts[0].decode("utf-8"))
        sig = parts[1]
        expected = hmac.new(SECRET, parts[0], hashlib.sha256).digest()
        if hmac.compare_digest(sig, expected):
            return user_id
        return -1
    except Exception:
        return -1


class Handler(BaseHTTPRequestHandler):
    def _set_headers(self, status=200, content_type="application/json"):
        self.send_response(status)
        self.send_header("Content-type", content_type)
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type, Authorization")
        self.end_headers()

    def do_OPTIONS(self):
        self._set_headers()

    def do_POST(self):
        length = int(self.headers.get("Content-Length", 0))
        body = self.rfile.read(length) if length else b""
        path = urlparse.urlparse(self.path).path
        try:
            data = json.loads(body.decode("utf-8")) if body else {}
        except Exception:
            data = {}

        if path == "/signup":
            username = data.get("username")
            password = data.get("password")
            if not username or not password:
                self._set_headers(400)
                self.wfile.write(json.dumps({"error": "username and password required"}).encode())
                return
            pwdhash, salt = hash_password(password)
            uid = db.create_user(username, pwdhash, salt)
            if uid == -1:
                self._set_headers(409)
                self.wfile.write(json.dumps({"error": "username exists"}).encode())
                return
            token = make_token(uid)
            self._set_headers(201)
            self.wfile.write(json.dumps({"token": token}).encode())
            return

        if path == "/signin":
            username = data.get("username")
            password = data.get("password")
            if not username or not password:
                self._set_headers(400)
                self.wfile.write(json.dumps({"error": "username and password required"}).encode())
                return
            row = db.get_user_by_username(username)
            if not row:
                self._set_headers(401)
                self.wfile.write(json.dumps({"error": "invalid credentials"}).encode())
                return
            if verify_password(password, row["password_hash"], row["salt"]):
                token = make_token(row["id"])
                self._set_headers(200)
                self.wfile.write(json.dumps({"token": token}).encode())
                return
            else:
                self._set_headers(401)
                self.wfile.write(json.dumps({"error": "invalid credentials"}).encode())
                return

        if path == "/transactions":
            auth = self.headers.get("Authorization", "")
            if not auth.startswith("Bearer "):
                self._set_headers(401)
                self.wfile.write(json.dumps({"error": "missing token"}).encode())
                return
            token = auth.split(" ", 1)[1]
            user_id = parse_token(token)
            if user_id < 0:
                self._set_headers(401)
                self.wfile.write(json.dumps({"error": "invalid token"}).encode())
                return
            # create transaction
            title = data.get("title")
            amount = float(data.get("amount") or 0)
            date = data.get("date")
            category = data.get("category")
            tid = db.add_transaction(user_id, title, amount, date, category)
            self._set_headers(201)
            self.wfile.write(json.dumps({"id": tid}).encode())
            return

        # default
        self._set_headers(404)
        self.wfile.write(json.dumps({"error": "not found"}).encode())

    def do_GET(self):
        path = urlparse.urlparse(self.path).path
        if path == "/me":
            auth = self.headers.get("Authorization", "")
            if not auth.startswith("Bearer "):
                self._set_headers(401)
                self.wfile.write(json.dumps({"error": "missing token"}).encode())
                return
            token = auth.split(" ", 1)[1]
            user_id = parse_token(token)
            if user_id < 0:
                self._set_headers(401)
                self.wfile.write(json.dumps({"error": "invalid token"}).encode())
                return
            row = db.get_user_by_id(user_id)
            if not row:
                self._set_headers(404)
                self.wfile.write(json.dumps({"error": "user not found"}).encode())
                return
            self._set_headers(200)
            self.wfile.write(json.dumps({"id": row["id"], "username": row["username"]}).encode())
            return
        if path == "/transactions":
            auth = self.headers.get("Authorization", "")
            if not auth.startswith("Bearer "):
                self._set_headers(401)
                self.wfile.write(json.dumps({"error": "missing token"}).encode())
                return
            token = auth.split(" ", 1)[1]
            user_id = parse_token(token)
            if user_id < 0:
                self._set_headers(401)
                self.wfile.write(json.dumps({"error": "invalid token"}).encode())
                return
            rows = db.get_transactions_for_user(user_id)
            self._set_headers(200)
            self.wfile.write(json.dumps({"transactions": rows}).encode())
            return
        self._set_headers(404)
        self.wfile.write(json.dumps({"error": "not found"}).encode())


def run():
    db.init_db()
    server = HTTPServer((HOST, PORT), Handler)
    print(f"Server running at http://{HOST}:{PORT}")
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        server.server_close()


if __name__ == "__main__":
    run()
