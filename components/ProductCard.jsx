"use client";

import Link from "next/link";
import { useCart } from "../context/CartContext";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="flex h-full flex-col overflow-hidden rounded-xl bg-slate-900/80 ring-1 ring-slate-800/80 shadow-lg shadow-slate-950/60">
      <Link href={`/product/${product.id}`} className="relative block">
        <img
          src={product.image}
          alt={product.name}
          className="h-48 w-full object-cover transition-transform duration-300 hover:scale-[1.03]"
        />
        {product.rating && (
          <span className="absolute right-2 top-2 rounded-full bg-black/70 px-2 py-0.5 text-xs text-yellow-300">
            ★ {product.rating.toFixed(1)}
          </span>
        )}
      </Link>

      <div className="flex flex-1 flex-col px-4 py-3">
        <Link
          href={`/product/${product.id}`}
          className="line-clamp-2 text-sm font-medium text-slate-50"
        >
          {product.name}
        </Link>

        <div className="mt-2 text-base font-semibold text-blue-400">
          Rp {product.price.toLocaleString("id-ID")}
        </div>

        <div className="mt-1 text-xs text-slate-400">
          Stok: {product.stock ?? 0}
        </div>

        <button
          onClick={() => addToCart(product)}
          className="mt-3 w-full rounded-lg bg-blue-600 py-2 text-sm font-medium text-white hover:bg-blue-500"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
