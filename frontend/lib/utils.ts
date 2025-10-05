export const API_BASE =
  process.env.NEXT_PUBLIC_API_BASE || "http://127.0.0.1:8000";

export function saveToken(token: string) {
  if (typeof window !== "undefined") {
    localStorage.setItem("pfm_token", token);
  }
}

export function getToken(): string | null {
  if (typeof window === "undefined") return null;
  return localStorage.getItem("pfm_token");
}

export async function apiFetch(path: string, opts: RequestInit = {}) {
  const url = `${API_BASE}${path}`;
  const token = getToken();
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    ...((opts.headers as Record<string, string>) || {}),
  };
  if (token) headers["Authorization"] = `Bearer ${token}`;
  const res = await fetch(url, { ...opts, headers });
  const text = await res.text();
  try {
    return { ok: res.ok, status: res.status, body: JSON.parse(text) };
  } catch {
    return { ok: res.ok, status: res.status, body: text };
  }
}

export async function getCurrentUser() {
  const res = await apiFetch('/me', { method: 'GET' });
  if (res.ok && res.body && res.body.username) return res.body;
  return null;
}

export function signOut() {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('pfm_token');
    window.location.href = '/';
  }
}
