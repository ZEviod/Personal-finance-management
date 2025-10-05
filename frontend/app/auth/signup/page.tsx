"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { API_BASE, saveToken } from "../../../lib/utils";

export default function SignupPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState<string | null>(null);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    const res = await fetch(`${API_BASE}/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });
    const body = await res.json().catch(() => ({}));
    if (res.ok && body.token) {
      saveToken(body.token);
      setMessage("Signed up and signed in");
      setTimeout(() => router.push("/"), 900);
    } else {
      setMessage(body.error || "Failed to sign up");
    }
  }

  const router = useRouter();

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded shadow">
      <h1 className="text-2xl font-bold mb-4">Sign up</h1>
      <form onSubmit={submit} className="space-y-3">
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="username"
          className="w-full p-2 border"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
          className="w-full p-2 border"
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          Sign up
        </button>
      </form>
      {message && <p className="mt-3">{message}</p>}
    </div>
  );
}
