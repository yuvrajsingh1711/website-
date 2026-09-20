"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Search } from "lucide-react";
import { products, categories } from "@/data/products";
import { ProductCard } from "@/components/ui";

export default function ProductsClient() {
  const params = useSearchParams();
  const initialCat = params.get("category") ?? "All";
  const [category, setCategory] = useState(initialCat);
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return products.filter((p) => {
      const matchCat = category === "All" || p.category === category;
      const matchQ =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q);
      return matchCat && matchQ;
    });
  }, [category, query]);

  return (
    <div className="mt-8">
      {/* Search + filter */}
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
        <label className="relative flex-1" aria-label="Search products">
          <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search products — e.g. marble, bathroom, wooden…"
            className="w-full rounded-full border border-stone-300 bg-white py-3 pl-11 pr-4 text-sm focus:border-bronze-400 focus:outline-none focus:ring-2 focus:ring-bronze-200"
          />
        </label>
      </div>

      <div className="mt-4 flex flex-wrap gap-2" role="group" aria-label="Filter by category">
        {["All", ...categories].map((c) => (
          <button
            key={c}
            onClick={() => setCategory(c)}
            aria-pressed={category === c}
            className={`rounded-full px-4 py-2 text-xs font-semibold transition-colors ${
              category === c
                ? "bg-charcoal text-white"
                : "border border-stone-300 bg-white text-charcoal/70 hover:border-charcoal"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <p className="mt-5 text-sm text-stone-500" role="status">
        Showing {filtered.length} of {products.length} products
        {category !== "All" ? ` in ${category}` : ""}
        {query ? ` for “${query}”` : ""}
      </p>

      {filtered.length === 0 ? (
        <div className="mt-8 rounded-2xl border border-stone-200 bg-white p-10 text-center">
          <p className="font-serif text-xl font-bold">No products found</p>
          <p className="mt-2 text-sm text-stone-600">Try a different search or category — or ask us on WhatsApp, we may have it in store.</p>
          <button onClick={() => { setQuery(""); setCategory("All"); }} className="btn-outline mt-5">
            Clear Filters
          </button>
        </div>
      ) : (
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      )}

      <div className="mt-10 rounded-2xl bg-sand p-6 text-sm text-stone-700">
        <p className="font-semibold text-charcoal">Can&apos;t find your design?</p>
        <p className="mt-1">
          We keep rotating stock. Send a photo/reference on WhatsApp and we will arrange it or suggest the closest match.{" "}
          <a href="/quote" className="font-semibold text-bronze-700 underline-offset-4 hover:underline">Request a quote →</a>
        </p>
      </div>
    </div>
  );
}
