import type { Metadata } from "next";
import { Suspense } from "react";
import ProductsClient from "./ProductsClient";

export const metadata: Metadata = {
  title: "Products — Floor Tiles, Wall Tiles, Marble, Granite & Sanitaryware",
  description:
    "Browse floor tiles, wall tiles, bathroom & kitchen tiles, outdoor & parking tiles, marble, granite, sanitaryware and staircase tiles at Baba Hariharnath Tiles & Marble House.",
};

export default function ProductsPage() {
  return (
    <main className="container-premium py-10">
      <p className="eyebrow">Our Collection</p>
      <h1 className="mt-2 font-serif text-3xl font-bold sm:text-4xl">
        Tiles, Marble, Granite &amp; Sanitaryware
      </h1>
      <p className="mt-3 max-w-2xl text-[15px] text-stone-600">
        Search designs, filter by category and enquire instantly on WhatsApp.
        All photos are placeholders — visit the showroom to see live displays.
      </p>
      <Suspense fallback={<p className="mt-8 text-sm text-stone-500">Loading products…</p>}>
        <ProductsClient />
      </Suspense>
    </main>
  );
}
