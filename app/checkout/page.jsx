"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "../../context/CartContext";

export default function CheckoutPage() {
  const router = useRouter();
  const { cart, total, clearCart } = useCart();
  const [loading, setLoading] = useState(false);

  if (!cart.length) {
    return (
      <div className="py-10 text-center text-sm text-slate-300">
        Keranjang kosong. Tambahkan produk terlebih dahulu.
      </div>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      clearCart();
      setLoading(false);
      alert("Pesanan berhasil dibuat (dummy).");
      router.push("/");
    }, 1200);
  };

  return (
    <div className="grid gap-8 py-4 md:grid-cols-[2fr_1fr]">
      <form onSubmit={handleSubmit} className="space-y-4">
        <h1 className="text-lg font-semibold text-slate-50">
          Checkout
        </h1>

        <div className="rounded-xl bg-slate-900/80 p-4 ring-1 ring-slate-800">
          <h2 className="text-sm font-semibold text-slate-100">
            Alamat Pengiriman
          </h2>
          <div className="mt-3 space-y-3 text-sm">
            <input
              required
              placeholder="Nama lengkap"
              className="w-full rounded-lg bg-slate-950/70 px-3 py-2 text-sm text-slate-100 ring-1 ring-slate-800 focus:ring-2 focus:ring-blue-500"
            />
            <input
              required
              placeholder="No. HP"
              className="w-full rounded-lg bg-slate-950/70 px-3 py-2 text-sm text-slate-100 ring-1 ring-slate-800 focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              required
              placeholder="Alamat lengkap"
              rows={3}
              className="w-full rounded-lg bg-slate-950/70 px-3 py-2 text-sm text-slate-100 ring-1 ring-slate-800 focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="rounded-xl bg-slate-900/80 p-4 ring-1 ring-slate-800">
          <h2 className="text-sm font-semibold text-slate-100">
            Metode Pembayaran
          </h2>
          <div className="mt-3 space-y-2 text-sm text-slate-200">
            <label className="flex items-center gap-2">
              <input type="radio" name="pay" defaultChecked />
              <span>Transfer Bank (mock)</span>
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" name="pay" />
              <span>COD (Bayar di tempat)</span>
            </label>
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-lg bg-blue-600 py-2.5 text-sm font-medium text-white hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {loading ? "Memproses..." : "Buat Pesanan"}
        </button>
      </form>

      <aside className="rounded-xl bg-slate-900/80 p-4 ring-1 ring-slate-800">
        <h2 className="text-sm font-semibold text-slate-100">
          Ringkasan Order
        </h2>
        <div className="mt-3 space-y-2 text-sm text-slate-300">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex justify-between text-xs sm:text-sm"
            >
              <span>
                {item.name} × {item.qty}
              </span>
              <span>
                Rp {(item.price * item.qty).toLocaleString("id-ID")}
              </span>
            </div>
          ))}

          <div className="mt-4 flex justify-between border-t border-slate-800 pt-3 text-sm">
            <span>Total</span>
            <span className="font-semibold text-blue-400">
              Rp {total.toLocaleString("id-ID")}
            </span>
          </div>
        </div>
      </aside>
    </div>
  );
}
