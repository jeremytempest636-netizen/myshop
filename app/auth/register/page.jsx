"use client";

import Link from "next/link";

export default function RegisterPage() {
  return (
    <div className="mx-auto max-w-md py-8">
      <h1 className="text-lg font-semibold text-slate-50">
        Register
      </h1>
      <p className="mt-1 text-sm text-slate-400">
        Hanya UI, tidak ada backend. Cocok untuk portofolio.
      </p>

      <form className="mt-4 space-y-3 rounded-xl bg-slate-900/80 p-4 ring-1 ring-slate-800">
        <input
          placeholder="Nama lengkap"
          className="w-full rounded-lg bg-slate-950/70 px-3 py-2 text-sm text-slate-100 ring-1 ring-slate-800 focus:ring-2 focus:ring-blue-500"
        />
        <input
          placeholder="Email"
          type="email"
          className="w-full rounded-lg bg-slate-950/70 px-3 py-2 text-sm text-slate-100 ring-1 ring-slate-800 focus:ring-2 focus:ring-blue-500"
        />
        <input
          placeholder="Password"
          type="password"
          className="w-full rounded-lg bg-slate-950/70 px-3 py-2 text-sm text-slate-100 ring-1 ring-slate-800 focus:ring-2 focus:ring-blue-500"
        />
        <button className="w-full rounded-lg bg-blue-600 py-2.5 text-sm font-medium text-white hover:bg-blue-500">
          Register (dummy)
        </button>
        <p className="text-center text-xs text-slate-400">
          Sudah punya akun?{" "}
          <Link
            href="/auth/login"
            className="text-blue-400 hover:text-blue-300"
          >
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}
