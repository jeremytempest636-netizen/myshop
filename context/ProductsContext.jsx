"use client";

import { createContext, useContext, useState } from "react";
import { products as initialProducts } from "../data/products";

const ProductsContext = createContext(null);

export function ProductsProvider({ children }) {
  const [products, setProducts] = useState(initialProducts);

  const addProduct = (data) => {
    const newId =
      products.length > 0 ? Math.max(...products.map((p) => p.id)) + 1 : 1;

    const newProduct = {
      id: newId,
      name: data.name,
      price: Number(data.price) || 0,
      category: data.category || "Others",
      image: data.image || "https://via.placeholder.com/400x300",
      description: data.description || "",
      rating: Number(data.rating) || 0,
      stock: Number(data.stock) || 0,
    };

    setProducts((prev) => [...prev, newProduct]);
  };

  const removeProduct = (id) => {
    setProducts((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <ProductsContext.Provider value={{ products, addProduct, removeProduct }}>
      {children}
    </ProductsContext.Provider>
  );
}

export function useProducts() {
  const ctx = useContext(ProductsContext);
  if (!ctx) throw new Error("useProducts must be used inside <ProductsProvider>");
  return ctx;
}
