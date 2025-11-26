"use client";

export default function SearchBar({ value, onChange }) {
  return (
    <input
      type="text"
      placeholder="Search products..."
      className="w-full rounded-lg bg-slate-900/60 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 outline-none ring-1 ring-slate-800 focus:ring-2 focus:ring-blue-500"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
