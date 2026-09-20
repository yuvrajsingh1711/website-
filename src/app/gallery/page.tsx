import type { Metadata } from "next";
import GalleryClient from "./GalleryClient";

export const metadata: Metadata = {
  title: "Gallery — Tile, Marble & Interior Designs",
  description:
    "Gallery of tile designs, marble, granite, bathroom & kitchen designs and flooring inspiration at Baba Hariharnath Tiles & Marble House.",
};

export default function GalleryPage() {
  return (
    <main className="container-premium py-10">
      <p className="eyebrow">Design Gallery</p>
      <h1 className="mt-2 font-serif text-3xl font-bold sm:text-4xl">Tile, marble &amp; interior inspiration</h1>
      <p className="mt-3 max-w-2xl text-[15px] text-stone-600">
        Tap any photo to view. Visit the showroom to see these finishes live — colours look even better in person.
      </p>
      <GalleryClient />
    </main>
  );
}
