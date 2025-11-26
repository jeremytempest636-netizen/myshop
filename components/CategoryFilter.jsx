"use client";

const base =
  "rounded-full border px-4 py-1.5 text-xs sm:text-sm transition";

export default function CategoryFilter({ categories, active, setActive }) {
  const all = ["All", ...categories];

  return (
    <div className="mt-4 flex flex-wrap gap-2">
      {all.map((cat) => {
        const isActive = cat === active;
        return (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={
              base +
              " " +
              (isActive
                ? "border-blue-500 bg-blue-600 text-white shadow-md shadow-blue-500/30"
                : "border-slate-700 bg-slate-900 text-slate-200 hover:border-blue-500 hover:text-blue-300")
            }
          >
            {cat}
          </button>
        );
      })}
    </div>
  );
}
