"use client";

import Link from "next/link";
import { useCart } from "../../context/CartContext";

export default function CartPage() {
  const { cart, total, updateQty, removeFromCart } = useCart();

  if (!cart.length) {
    return (
      <div className="py-10 text-center">
        <p className="text-sm text-slate-300">
          Keranjang masih kosong.
        </p>
        <Link
          href="/"
          className="mt-4 inline-block rounded-lg bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-500"
        >
          Belanja sekarang
        </Link>
      </div>
    );
  }

  return (
    <div className="grid gap-8 py-4 md:grid-cols-[2fr_1fr]">
      <div className="space-y-4">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex gap-4 rounded-xl bg-slate-900/80 p-3 ring-1 ring-slate-800"
          >
            <img
              src={item.image}
              alt={item.name}
              className="h-20 w-20 rounded-md object-cover"
            />
            <div className="flex flex-1 flex-col justify-between">
              <div>
                <p className="text-sm font-medium text-slate-50">
                  {item.name}
                </p>
                <p className="mt-1 text-sm text-blue-400">
                  Rp {item.price.toLocaleString("id-ID")}
                </p>
              </div>
              <div className="mt-2 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => updateQty(item.id, item.qty - 1)}
                    className="h-7 w-7 rounded-full bg-slate-800 text-sm text-slate-200"
                  >
                    -
                  </button>
                  <span className="w-8 text-center text-sm">
                    {item.qty}
                  </span>
                  <button
                    onClick={() => updateQty(item.id, item.qty + 1)}
                    className="h-7 w-7 rounded-full bg-slate-800 text-sm text-slate-200"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-xs text-red-400 hover:text-red-300"
                >
                  Hapus
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <aside className="rounded-xl bg-slate-900/80 p-4 ring-1 ring-slate-800">
        <h2 className="text-sm font-semibold text-slate-100">
          Ringkasan Belanja
        </h2>
        <div className="mt-3 flex justify-between text-sm text-slate-300">
          <span>Total</span>
          <span className="font-semibold text-blue-400">
            Rp {total.toLocaleString("id-ID")}
          </span>
        </div>
        <Link
          href="/checkout"
          className="mt-4 block rounded-lg bg-blue-600 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-500"
        >
          Checkout
        </Link>
      </aside>
    </div>
  );
}
