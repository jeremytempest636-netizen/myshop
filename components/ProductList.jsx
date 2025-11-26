"use client";

import ProductCard from "./ProductCard";

export default function ProductList({ products }) {
  if (!products.length) {
    return (
      <p className="mt-10 text-center text-sm text-slate-400">
        Produk tidak ditemukan. Coba kata kunci lain.
      </p>
    );
  }

  return (
    <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}
