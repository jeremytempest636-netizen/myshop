"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuth } from "../../../context/AuthContext";

export default function LoginPage() {
  const { login } = useAuth();
  const router = useRouter();
  const [email, setEmail] = useState("admin@myshop.com");
  const [password, setPassword] = useState("admin123");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const user = await login(email, password);
      if (user.role === "admin") {
        router.push("/admin");
      } else {
        router.push("/user");
      }
    } catch (err) {
      setError(err.message || "Login gagal");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto max-w-md py-8">
      <h1 className="text-lg font-semibold text-slate-50">
        Login
      </h1>
      <p className="mt-1 text-sm text-slate-400">
        Akun demo:
        <br />
        <span className="text-xs">
          Admin: <code>admin@myshop.com</code> / <code>admin123</code>
        </span>
        <br />
        <span className="text-xs">
          User: <code>user@myshop.com</code> / <code>user123</code>
        </span>
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-4 space-y-3 rounded-xl bg-slate-900/80 p-4 ring-1 ring-slate-800"
      >
        {error && (
          <p className="rounded bg-red-500/20 px-3 py-2 text-xs text-red-300">
            {error}
          </p>
        )}

        <input
          placeholder="Email"
          type="email"
          className="w-full rounded-lg bg-slate-950/70 px-3 py-2 text-sm text-slate-100 ring-1 ring-slate-800 focus:ring-2 focus:ring-blue-500"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeholder="Password"
          type="password"
          className="w-full rounded-lg bg-slate-950/70 px-3 py-2 text-sm text-slate-100 ring-1 ring-slate-800 focus:ring-2 focus:ring-blue-500"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-lg bg-blue-600 py-2.5 text-sm font-medium text-white hover:bg-blue-500 disabled:opacity-60"
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        <p className="text-center text-xs text-slate-400">
          Hanya UI, tidak ada backend beneran. Cocok untuk portofolio.
        </p>
      </form>

      <p className="mt-3 text-center text-xs text-slate-500">
        (Opsional){" "}
        <Link
          href="/auth/register"
          className="text-blue-400 hover:text-blue-300"
        >
          Register
        </Link>
      </p>
    </div>
  );
}
