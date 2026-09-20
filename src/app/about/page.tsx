import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { BadgeCheck, LayoutGrid, Handshake, Compass, ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "About Baba Hariharnath Tiles & Marble House — a trusted local tiles, marble, granite & sanitaryware shop focused on quality, variety, customer service and reasonable pricing.",
};

export default function AboutPage() {
  return (
    <main>
      <section className="container-premium py-12">
        <p className="eyebrow">About Us</p>
        <h1 className="mt-2 max-w-3xl font-serif text-3xl font-bold leading-tight sm:text-5xl">
          A trusted local destination for tiles, marble &amp; interiors
        </h1>
        <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-stone-600">
          Baba Hariharnath Tiles &amp; Marble House is a trusted local business serving homeowners,
          builders and contractors. We bring a wide range of floor tiles, wall tiles, bathroom &
          kitchen tiles, marble, granite and sanitaryware under one roof — with honest advice and
          reasonable pricing.
        </p>
        <div className="mt-8 overflow-hidden rounded-3xl shadow-premium">
          <Image
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80"
            alt="Tiles and marble showroom display"
            width={1600}
            height={700}
            priority
            className="h-[280px] w-full object-cover sm:h-[380px]"
          />
        </div>
      </section>

      <section className="bg-marble/60 py-14">
        <div className="container-premium">
          <SectionHeading eyebrow="What We Stand For" title="Quality, variety, service & guidance" />
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: BadgeCheck, t: "Quality", d: "We check finish, thickness, shade consistency and durability before recommending any tile, slab or sanitaryware." },
              { icon: LayoutGrid, t: "Variety", d: "From budget-friendly tiles to premium marble-look GVT, Italian marble and granite — options for every room and budget." },
              { icon: Handshake, t: "Customer Service", d: "No rushed selling. We show live pieces, explain pros/cons, help with quantity calculation and support after purchase." },
              { icon: Compass, t: "Expert Guidance", d: "Confused between glossy vs matte, marble vs tile, or sizes? We guide based on room, usage, light and maintenance." },
            ].map((v) => (
              <div key={v.t} className="card-premium p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-charcoal text-bronze-300">
                  <v.icon size={22} />
                </div>
                <h2 className="mt-4 font-serif text-xl font-bold">{v.t}</h2>
                <p className="mt-2 text-sm leading-relaxed text-stone-600">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-premium py-14">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div>
            <p className="eyebrow">How We Help</p>
            <h2 className="mt-2 font-serif text-3xl font-bold">From selection to installation-ready</h2>
            <ol className="mt-6 space-y-4">
              {[
                "Visit or WhatsApp: share room photos / measurements.",
                "See live displays: compare colours & finishes in natural light.",
                "Get transparent quote: per sq.ft pricing with quantity estimate.",
                "Delivery & support: careful loading and guidance for your mason.",
              ].map((s, i) => (
                <li key={i} className="flex gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-bronze-400 font-bold text-charcoal">{i + 1}</span>
                  <p className="pt-1.5 text-[15px] text-stone-700">{s}</p>
                </li>
              ))}
            </ol>
            <div className="mt-6 flex gap-3">
              <Link href="/products" className="btn-primary">Browse Products <ArrowRight size={16} /></Link>
              <Link href="/contact" className="btn-outline">Contact Us</Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=600&q=80",
              "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&q=80",
              "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=600&q=80",
              "https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&w=600&q=80",
            ].map((src, i) => (
              <div key={i} className="relative aspect-square overflow-hidden rounded-2xl">
                <Image src={src} alt={`Showroom inspiration ${i + 1}`} fill loading="lazy" sizes="30vw" className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
}
