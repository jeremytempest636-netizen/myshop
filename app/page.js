"use client";

import { useState } from "react";
import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";
import ProductList from "../components/ProductList";
import { products } from "../data/products";

export default function Home() {
  const [search, setSearch] = useState("");
  const [active, setActive] = useState("All");

  const categories = [...new Set(products.map((p) => p.category))];

  const filtered = products.filter((p) => {
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase());
    const matchCategory = active === "All" || p.category === active;
    return matchSearch && matchCategory;
  });

  return (
    <div className="space-y-8">
      {/* Hero */}
      <section className="mt-2 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-500 px-6 py-8 text-white shadow-lg">
        <h1 className="text-2xl md:text-3xl font-bold">
          Modern E-Commerce Frontend for Your Portfolio
        </h1>
        <p className="mt-2 text-sm md:text-base text-blue-100 max-w-xl">
          Built with Next.js and Tailwind CSS, showcasing product listing,
          search, filters, cart, checkout, auth UI, and admin pages.
        </p>
        <div className="mt-4 flex flex-wrap gap-3 text-xs md:text-sm">
          <span className="rounded-full bg-white/10 px-3 py-1">
            ✅ Product listing & detail
          </span>
          <span className="rounded-full bg
-white/10 px-3 py-1">
            ✅ Cart & Checkout
          </span>
          <span className="rounded-full bg-white/10 px-3 py-1">
            ✅ Auth & Admin UI
          </span>
        </div>
      </section>

      <section>
        <SearchBar onSearch={setSearch} />
        <CategoryFilter
          categories={categories}
          active={active}
          setActive={setActive}
        />
        <ProductList products={filtered} />
      </section>
    </div>
  );
}
