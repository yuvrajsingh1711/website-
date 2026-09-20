"use client";

import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { galleryItems, unsplash } from "@/data/site";

const filters = ["All", "Flooring", "Marble", "Granite", "Bathroom", "Kitchen"];

export default function GalleryClient() {
  const [filter, setFilter] = useState("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const items = galleryItems.filter((g) => filter === "All" || g.tag === filter);

  return (
    <div className="mt-8">
      <div className="flex flex-wrap gap-2" role="group" aria-label="Filter gallery">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            aria-pressed={filter === f}
            className={`rounded-full px-4 py-2 text-xs font-semibold ${
              filter === f ? "bg-charcoal text-white" : "border border-stone-300 bg-white hover:border-charcoal"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="mt-6 columns-2 gap-4 md:columns-3 [&>button]:mb-4">
        {items.map((g, i) => (
          <button
            key={g.src + i}
            onClick={() => setLightbox(i)}
            className="group relative block w-full break-inside-avoid overflow-hidden rounded-2xl text-left"
            aria-label={`Open ${g.title}`}
          >
            <Image
              src={unsplash(g.src, 700)}
              alt={`${g.title} — ${g.tag} tile marble design`}
              width={700}
              height={i % 3 === 0 ? 900 : 600}
              loading="lazy"
              className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <span className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent opacity-90" />
            <span className="absolute bottom-3 left-3 right-3">
              <span className="block text-[11px] font-bold uppercase tracking-widest text-bronze-300">{g.tag}</span>
              <span className="block text-sm font-semibold text-white">{g.title}</span>
            </span>
          </button>
        ))}
      </div>

      {lightbox !== null && items[lightbox] && (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-black/85 p-4"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Image preview"
        >
          <button
            className="absolute right-5 top-5 rounded-full bg-white p-2.5 text-charcoal"
            onClick={() => setLightbox(null)}
            aria-label="Close preview"
          >
            <X size={20} />
          </button>
          <div className="relative max-h-[85vh] w-full max-w-3xl overflow-hidden rounded-2xl" onClick={(e) => e.stopPropagation()}>
            <Image
              src={unsplash(items[lightbox].src, 1200)}
              alt={items[lightbox].title}
              width={1200}
              height={800}
              className="max-h-[70vh] w-full object-contain bg-black"
            />
            <div className="bg-white p-4">
              <p className="text-xs font-bold uppercase tracking-widest text-bronze-600">{items[lightbox].tag}</p>
              <p className="font-serif text-lg font-bold">{items[lightbox].title}</p>
            </div>
          </div>
        </div>
      )}

      <p className="mt-4 text-xs text-stone-500">
        Placeholder inspiration photos — replace with real shop / project photos in src/data/site.ts
      </p>
    </div>
  );
}
