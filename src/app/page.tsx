import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import {
  Phone,
  FileText,
  ArrowRight,
  BadgeCheck,
  LayoutGrid,
  Handshake,
  Wallet,
  Truck,
  Ruler,
  Star,
  MapPin,
  MessageCircle,
  ChevronRight,
} from "lucide-react";
import { business } from "@/config/business";
import { products, categories } from "@/data/products";
import { testimonials, faqs, galleryItems, unsplash } from "@/data/site";
import { SectionHeading, ProductCard } from "@/components/ui";
import CTASection from "@/components/CTASection";
import { whatsappLink } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Premium Tiles & Marble for Beautiful Spaces",
  description:
    "Baba Hariharnath Tiles & Marble House: floor tiles, wall tiles, bathroom & kitchen tiles, marble, granite & sanitaryware. Visit our tiles and marble shop near you for best designs & price.",
};

const categoryImages: Record<string, string> = {
  "Floor Tiles": unsplash("photo-1600210492486-724fe5c67fb0", 600),
  "Wall Tiles": unsplash("photo-1502005229762-cf1b2da7c5d6", 600),
  "Bathroom Tiles": unsplash("photo-1584622650111-993a426fbf0a", 600),
  "Kitchen Tiles": unsplash("photo-1556911220-bff31c812dba", 600),
  "Outdoor Tiles": unsplash("photo-1600566753086-00f18fb6b3ea", 600),
  "Parking Tiles": unsplash("photo-1560448204-e02f11c3d0e2", 600),
  Marble: unsplash("photo-1541123437800-1bb1317badc2", 600),
  Granite: unsplash("photo-1600585154340-be6161a56a0c", 600),
  Sanitaryware: unsplash("photo-1584622781564-1d987f7333c1", 600),
  "Staircase/Step Tiles": unsplash("photo-1600121848594-d8644e57abab", 600),
};

export default function HomePage() {
  const featured = products.filter((p) => p.featured).slice(0, 6);
  const marbleGranite = products.filter((p) => p.category === "Marble" || p.category === "Granite").slice(0, 4);

  return (
    <main>
      {/* HERO */}
      <section className="relative overflow-hidden bg-charcoal text-white" aria-label="Hero">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1800&q=80"
            alt="Premium tiles and marble showroom interior — floor tiles, wall tiles and marble designs"
            fill
            priority
            className="object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/70 to-charcoal/20" />
        </div>
        <div className="container-premium relative py-20 sm:py-28 lg:py-32">
          <div className="max-w-2xl">
            <p className="reveal eyebrow !text-bronze-300">Baba Hariharnath Tiles &amp; Marble House</p>
            <h1 className="reveal reveal-delay-1 mt-4 font-serif text-4xl font-bold leading-[1.1] sm:text-5xl lg:text-6xl">
              Premium Tiles &amp; Marble for Beautiful Spaces
            </h1>
            <p className="reveal reveal-delay-2 mt-5 max-w-xl text-[15px] leading-relaxed text-stone-300 sm:text-base">
              Quality tiles, marble, granite and sanitaryware for homes, offices and commercial
              spaces — with honest guidance, wide variety and reasonable pricing.
            </p>
            <div className="reveal reveal-delay-3 mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/products" className="btn-gold">
                View Products <ArrowRight size={16} />
              </Link>
              <Link href="/quote" className="btn-outline !border-white/30 !bg-white/10 !text-white hover:!bg-white hover:!text-charcoal">
                <FileText size={16} /> Get a Quote
              </Link>
              <a href={business.phoneHref} className="btn-outline !border-white/30 !bg-transparent !text-white hover:!bg-white hover:!text-charcoal">
                <Phone size={16} /> Call Now
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-xs text-stone-300">
              <span className="inline-flex items-center gap-1.5"><BadgeCheck size={14} className="text-bronze-300" /> Genuine Quality</span>
              <span className="inline-flex items-center gap-1.5"><LayoutGrid size={14} className="text-bronze-300" /> 500+ Designs In Store</span>
              <span className="inline-flex items-center gap-1.5"><Wallet size={14} className="text-bronze-300" /> Fair Price</span>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="container-premium py-16" aria-label="Why choose us">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="A trusted local tiles & marble house"
          subtitle="We focus on what matters for your home: genuine material, right design guidance and fair pricing — without confusing claims."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: BadgeCheck, t: "Quality First", d: "Handpicked tiles, marble & granite with proper finish, thickness and durability checks." },
            { icon: LayoutGrid, t: "Wide Variety", d: "Floor, wall, bathroom, kitchen, outdoor, parking tiles plus marble, granite & sanitaryware." },
            { icon: Handshake, t: "Customer Service", d: "Patient guidance, live display viewing, measurement help and after-sale support." },
            { icon: Wallet, t: "Reasonable Pricing", d: "Transparent quotation per sq.ft / slab with options for every budget." },
          ].map((f) => (
            <div key={f.t} className="card-premium p-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-bronze-100 text-bronze-700">
                <f.icon size={22} />
              </div>
              <h3 className="mt-4 font-serif text-lg font-bold">{f.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-stone-600">{f.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="bg-marble/60 py-16" aria-label="Product categories">
        <div className="container-premium">
          <SectionHeading
            eyebrow="Categories"
            title="Everything for floors, walls & bathrooms"
            subtitle="Browse 10 specialist categories. Tap any category to filter products."
          />
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {categories.map((c) => (
              <Link
                key={c}
                href={`/products?category=${encodeURIComponent(c)}`}
                className="card-premium group"
                aria-label={`Browse ${c}`}
              >
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={categoryImages[c]}
                    alt={`${c} designs at tiles shop`}
                    fill
                    sizes="(max-width:640px) 50vw, 20vw"
                    loading="lazy"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent" />
                  <p className="absolute bottom-3 left-3 right-3 text-sm font-semibold text-white">{c}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="container-premium py-16" aria-label="Featured products">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <SectionHeading
            center={false}
            eyebrow="Featured"
            title="Most loved products"
            subtitle="Customer-favourite tiles, marble & granite — ready to view in store."
          />
          <Link href="/products" className="btn-outline shrink-0">
            All Products <ArrowRight size={16} />
          </Link>
        </div>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>

      {/* MARBLE & GRANITE SHOWCASE */}
      <section className="bg-charcoal py-16 text-white" aria-label="Marble and granite showcase">
        <div className="container-premium">
          <p className="eyebrow !text-bronze-300">Marble &amp; Granite Showcase</p>
          <div className="mt-3 flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
            <h2 className="max-w-2xl font-serif text-3xl font-bold sm:text-4xl">
              Natural stone that makes your home feel premium for decades
            </h2>
            <Link href="/products?category=Marble" className="btn-gold shrink-0">
              Explore Stone <ArrowRight size={16} />
            </Link>
          </div>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {marbleGranite.map((p) => (
              <Link key={p.slug} href={`/products/${p.slug}`} className="group overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10 hover:ring-bronze-300/60">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image src={p.image} alt={`${p.name} marble granite`} fill sizes="25vw" loading="lazy" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-4">
                  <p className="text-[11px] font-semibold uppercase tracking-widest text-bronze-300">{p.category}</p>
                  <p className="mt-1 font-serif font-bold">{p.name}</p>
                  <p className="mt-1 inline-flex items-center gap-1 text-xs text-stone-300">View stone <ChevronRight size={14} /></p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="container-premium py-16" aria-label="Customer benefits">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="relative overflow-hidden rounded-3xl shadow-premium">
            <Image
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80"
              alt="Beautiful tiled living space flooring ideas"
              width={900}
              height={700}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <p className="eyebrow">Customer Benefits</p>
            <h2 className="mt-3 font-serif text-3xl font-bold sm:text-4xl">Buy with confidence, not confusion</h2>
            <ul className="mt-6 space-y-4">
              {[
                { icon: Ruler, t: "Free measurement guidance", d: "Send room size on WhatsApp — we calculate boxes/slabs to avoid wastage." },
                { icon: Truck, t: "Safe handling & delivery", d: "Careful loading for tiles, marble slabs and sanitaryware to your site." },
                { icon: BadgeCheck, t: "Genuine grade & finish", d: "We show you actual slab/tile, not just catalogue photos, before billing." },
                { icon: MessageCircle, t: "WhatsApp support", d: "Share designs, get prices and track your quotation quickly on WhatsApp." },
              ].map((b) => (
                <li key={b.t} className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-charcoal text-bronze-300">
                    <b.icon size={18} />
                  </span>
                  <div>
                    <p className="font-semibold">{b.t}</p>
                    <p className="text-sm text-stone-600">{b.d}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link href="/quote" className="btn-primary">Get a Quote</Link>
              <Link href="/gallery" className="btn-outline">View Gallery</Link>
            </div>
          </div>
        </div>
      </section>

      {/* POPULAR DESIGNS STRIP */}
      <section className="bg-marble/60 py-16" aria-label="Popular tile designs">
        <div className="container-premium">
          <SectionHeading eyebrow="Design Inspiration" title="Popular tile & flooring looks" subtitle="A glimpse of what customers love — see hundreds more live in the showroom." />
          <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {galleryItems.slice(0, 4).map((g) => (
              <div key={g.src} className="relative aspect-[3/4] overflow-hidden rounded-2xl">
                <Image src={unsplash(g.src, 600)} alt={`${g.title} - ${g.tag} design`} fill loading="lazy" sizes="25vw" className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3">
                  <p className="text-[11px] font-bold uppercase tracking-widest text-bronze-300">{g.tag}</p>
                  <p className="text-sm font-semibold text-white">{g.title}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 text-center">
            <Link href="/gallery" className="btn-outline">Open Full Gallery</Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="container-premium py-16" aria-label="Customer testimonials">
        <SectionHeading eyebrow="Testimonials" title="What our customers say" />
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {testimonials.map((t) => (
            <figure key={t.name} className="card-premium p-6">
              <div className="flex gap-1 text-bronze-400" aria-label="5 star rating">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={15} fill="currentColor" />
                ))}
              </div>
              <blockquote className="mt-3 text-[15px] leading-relaxed text-stone-700">“{t.text}”</blockquote>
              <figcaption className="mt-4 text-sm">
                <span className="font-bold text-charcoal">{t.name}</span>
                <span className="text-stone-500"> — {t.location}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="container-premium pb-16" aria-label="Frequently asked questions">
        <SectionHeading eyebrow="FAQ" title="Common questions" />
        <div className="mx-auto mt-8 max-w-3xl space-y-3">
          {faqs.slice(0, 5).map((f) => (
            <details key={f.q} className="card-premium group px-5 py-4">
              <summary className="cursor-pointer list-none font-semibold text-charcoal marker:hidden [&::-webkit-details-marker]:hidden">
                <span className="flex items-center justify-between gap-4">
                  {f.q}
                  <ChevronRight size={18} className="shrink-0 transition-transform group-open:rotate-90" />
                </span>
              </summary>
              <p className="mt-2 text-sm leading-relaxed text-stone-600">{f.a}</p>
            </details>
          ))}
          <div className="text-center">
            <Link href="/quote" className="text-sm font-semibold text-bronze-600 underline-offset-4 hover:underline">
              Still have a question? Request a quote →
            </Link>
          </div>
        </div>
      </section>

      <CTASection />

      {/* CONTACT / LOCATION */}
      <section className="container-premium pb-16" aria-label="Contact and location">
        <div className="grid gap-6 rounded-3xl border border-stone-200 bg-white p-6 shadow-card sm:p-8 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Visit Our Shop</p>
            <h2 className="mt-2 font-serif text-2xl font-bold sm:text-3xl">{business.name}</h2>
            <p className="mt-3 flex items-start gap-2 text-sm text-stone-600">
              <MapPin size={16} className="mt-0.5 shrink-0 text-bronze-600" />
              {business.fullAddress} (placeholder — replace with real address)
            </p>
            <p className="mt-2 text-sm text-stone-600">Open: {business.openingHours[0].days} {business.openingHours[0].time}</p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <a href={business.phoneHref} className="btn-primary flex-1"><Phone size={16} /> Call</a>
              <a href={whatsappLink("Hello, I want directions to your shop.")} target="_blank" rel="noopener noreferrer" className="btn-primary flex-1 !bg-[#25D366] hover:!bg-[#1eb856]">WhatsApp</a>
              <a href={business.mapsDirectionsUrl} target="_blank" rel="noopener noreferrer" className="btn-outline flex-1">Get Directions</a>
            </div>
            <Link href="/contact" className="mt-4 inline-flex text-sm font-semibold text-bronze-600 hover:underline">
              Full contact details →
            </Link>
          </div>
          <div className="overflow-hidden rounded-2xl border border-stone-200">
            {/* TODO: REPLACE WITH REAL GOOGLE MAPS EMBED — set URL in src/config/business.ts */}
            <iframe
              title="Shop location map (placeholder)"
              src={business.mapsEmbedUrl}
              className="h-[280px] w-full lg:h-full lg:min-h-[320px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
