"use client";

import { useMemo, useState } from "react";
import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";
import ProductList from "../components/ProductList";
import { useProducts } from "../context/ProductsContext";

export default function Home() {
  const [search, setSearch] = useState("");
  const [active, setActive] = useState("All");
  const { products } = useProducts();

  const categories = useMemo(
    () => [...new Set(products.map((p) => p.category))],
    [products]
  );

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const matchSearch = p.name
        .toLowerCase()
        .includes(search.toLowerCase());
      const matchCategory =
        active === "All" || p.category === active;
      return matchSearch && matchCategory;
    });
  }, [products, search, active]);

  return (
    <section>
      <div className="mb-6">
        <h1 className="text-xl font-semibold text-slate-50">
          Explore Products
        </h1>
        <p className="mt-1 text-sm text-slate-400">
          Mini e-commerce: listing, search, filter, cart, checkout, auth,
          dan admin UI.
        </p>
      </div>

      <SearchBar value={search} onChange={setSearch} />
      <CategoryFilter
        categories={categories}
        active={active}
        setActive={setActive}
      />
      <ProductList products={filtered} />
    </section>
  );
}
