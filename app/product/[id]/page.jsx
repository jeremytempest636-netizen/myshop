"use client";

import { useParams, useRouter } from "next/navigation";
import { useProducts } from "../../../context/ProductsContext";
import { useCart } from "../../../context/CartContext";

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { products } = useProducts();
  const { addToCart } = useCart();

  const product = products.find((p) => p.id === Number(params.id));

  if (!product) {
    return (
      <div className="py-10 text-center text-slate-300">
        Produk tidak ditemukan.
      </div>
    );
  }

  return (
    <div className="grid gap-8 py-4 md:grid-cols-2">
      <div>
        <img
          src={product.image}
          alt={product.name}
          className="w-full rounded-xl border border-slate-800 object-cover"
        />
      </div>

      <div>
        <button
          onClick={() => router.back()}
          className="mb-4 text-sm text-slate-400 hover:text-blue-400"
        >
          ← Kembali
        </button>

        <h1 className="text-2xl font-semibold text-slate-50">
          {product.name}
        </h1>

        <div className="mt-2 text-lg font-semibold text-blue-400">
          Rp {product.price.toLocaleString("id-ID")}
        </div>

        <div className="mt-1 text-sm text-slate-400">
          Kategori: {product.category}
        </div>
        <div className="mt-1 text-sm text-slate-400">
          Rating: ★ {product.rating ?? 0}
        </div>
        <div className="mt-1 text-sm text-slate-400">
          Stok tersedia: {product.stock ?? 0}
        </div>

        <p className="mt-4 text-sm leading-relaxed text-slate-300">
          {product.description}
        </p>

        <button
          onClick={() => addToCart(product)}
          className="mt-6 w-full rounded-lg bg-blue-600 py-3 text-sm font-medium text-white hover:bg-blue-500"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
