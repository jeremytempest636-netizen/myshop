"use client";

import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useProducts } from "../../context/ProductsContext";

export default function AdminPage() {
  const { user } = useAuth();
  const { products, addProduct, removeProduct } = useProducts();

  const [form, setForm] = useState({
    name: "",
    price: "",
    category: "",
    image: "",
    description: "",
    stock: "",
    rating: "",
  });

  if (!user) {
    return (
      <div className="py-8 text-center text-sm text-slate-300">
        Kamu harus login sebagai admin untuk mengakses halaman ini.
      </div>
    );
  }

  if (user.role !== "admin") {
    return (
      <div className="py-8 text-center text-sm text-red-300">
        Akses ditolak. Hanya admin yang boleh membuka halaman ini.
      </div>
    );
  }

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addProduct(form);
    setForm({
      name: "",
      price: "",
      category: "",
      image: "",
      description: "",
      stock: "",
      rating: "",
    });
  };

  return (
    <div className="py-4">
      <h1 className="text-lg font-semibold text-slate-50">
        Admin – Manage Products
      </h1>
      <p className="mt-1 text-sm text-slate-400">
        Tambah & hapus produk (data hanya di memori, cocok untuk demo
        portofolio).
      </p>

      {/* Form tambah produk */}
      <form
        onSubmit={handleSubmit}
        className="mt-4 grid gap-3 rounded-xl bg-slate-900/80 p-4 ring-1 ring-slate-800 md:grid-cols-2"
      >
        <input
          name="name"
          placeholder="Nama produk"
          className="rounded-lg bg-slate-950/70 px-3 py-2 text-sm text-slate-100 ring-1 ring-slate-800 focus:ring-2 focus:ring-blue-500"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          name="price"
          placeholder="Harga (contoh: 199000)"
          className="rounded-lg bg-slate-950/70 px-3 py-2 text-sm text-slate-100 ring-1 ring-slate-800 focus:ring-2 focus:ring-blue-500"
          value={form.price}
          onChange={handleChange}
          required
        />
        <input
          name="category"
          placeholder="Kategori (Fashion, Electronics, dll)"
          className="rounded-lg bg-slate-950/70 px-3 py-2 text-sm text-slate-100 ring-1 ring-slate-800 focus:ring-2 focus:ring-blue-500"
          value={form.category}
          onChange={handleChange}
        />
        <input
          name="image"
          placeholder="URL gambar (opsional)"
          className="rounded-lg bg-slate-950/70 px-3 py-2 text-sm text-slate-100 ring-1 ring-slate-800 focus:ring-2 focus:ring-blue-500"
          value={form.image}
          onChange={handleChange}
        />
        <input
          name="stock"
          placeholder="Stok (contoh: 10)"
          className="rounded-lg bg-slate-950/70 px-3 py-2 text-sm text-slate-100 ring-1 ring-slate-800 focus:ring-2 focus:ring-blue-500"
          value={form.stock}
          onChange={handleChange}
        />
        <input
          name="rating"
          placeholder="Rating (contoh: 4.5)"
          className="rounded-lg bg-slate-950/70 px-3 py-2 text-sm text-slate-100 ring-1 ring-slate-800 focus:ring-2 focus:ring-blue-500"
          value={form.rating}
          onChange={handleChange}
        />
        <textarea
          name="description"
          placeholder="Deskripsi produk"
          rows={3}
          className="md:col-span-2 rounded-lg bg-slate-950/70 px-3 py-2 text-sm text-slate-100 ring-1 ring-slate-800 focus:ring-2 focus:ring-blue-500"
          value={form.description}
          onChange={handleChange}
        />

        <button
          type="submit"
          className="md:col-span-2 rounded-lg bg-blue-600 py-2.5 text-sm font-medium text-white hover:bg-blue-500"
        >
          Tambah Produk
        </button>
      </form>

      {/* Tabel produk */}
      <div className="mt-6 overflow-hidden rounded-xl bg-slate-900/80 ring-1 ring-slate-800">
        <table className="min-w-full text-left text-xs sm:text-sm">
          <thead className="bg-slate-900/90 text-slate-300">
            <tr>
              <th className="px-3 py-2">ID</th>
              <th className="px-3 py-2">Nama</th>
              <th className="px-3 py-2">Kategori</th>
              <th className="px-3 py-2">Harga</th>
              <th className="px-3 py-2">Stok</th>
              <th className="px-3 py-2">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p) => (
              <tr
                key={p.id}
                className="border-t border-slate-800/70 text-slate-200"
              >
                <td className="px-3 py-2 text-xs text-slate-400">
                  {p.id}
                </td>
                <td className="px-3 py-2">{p.name}</td>
                <td className="px-3 py-2">{p.category}</td>
                <td className="px-3 py-2 text-blue-400">
                  Rp {p.price.toLocaleString("id-ID")}
                </td>
                <td className="px-3 py-2">{p.stock ?? "-"}</td>
                <td className="px-3 py-2">
                  <button
                    onClick={() => removeProduct(p.id)}
                    className="rounded bg-red-600 px-3 py-1 text-xs text-white hover:bg-red-500"
                  >
                    Hapus
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
