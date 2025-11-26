"use client";

import Link from "next/link";
import { useAuth } from "../../context/AuthContext";

export default function UserDashboard() {
  const { user } = useAuth();

  if (!user) {
    return (
      <div className="py-12 text-center text-slate-300">
        Kamu belum login.
      </div>
    );
  }

  if (user.role !== "user") {
    return (
      <div className="py-12 text-center text-slate-300">
        Halaman ini hanya untuk pembeli (role: user).
      </div>
    );
  }

  return (
    <div className="py-4">
      <h1 className="text-xl font-semibold text-slate-50">
        Selamat datang, {user.email} 👋
      </h1>
      <p className="mt-1 text-sm text-slate-400">Akun Pembeli</p>

      <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        <Link
          href="/"
          className="rounded-lg bg-slate-900/60 p-4 border border-slate-800 hover:border-blue-500 transition"
        >
          <h2 className="font-medium">Belanja Produk</h2>
          <p className="text-xs mt-1 text-slate-400">
            Lihat semua produk yang tersedia.
          </p>
        </Link>

        <Link
          href="/cart"
          className="rounded-lg bg-slate-900/60 p-4 border border-slate-800 hover:border-blue-500 transition"
        >
          <h2 className="font-medium">Keranjang Belanja</h2>
          <p className="text-xs mt-1 text-slate-400">
            Lihat dan lanjutkan pembayaran.
          </p>
        </Link>

        <div className="rounded-lg bg-slate-900/60 p-4 border border-slate-800">
          <h2 className="font-medium">Riwayat Pesanan</h2>
          <p className="text-xs mt-1 text-slate-400">
            (Belum tersedia – versi demo tanpa backend.)
          </p>
        </div>
      </div>
    </div>
  );
}
