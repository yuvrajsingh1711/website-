import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Phone, MessageCircle, ChevronRight, Ruler, Layers, Grid2X2 } from "lucide-react";
import { products, getProduct, relatedProducts } from "@/data/products";
import { business } from "@/config/business";
import { ProductCard } from "@/components/ui";
import QuoteForm from "@/components/QuoteForm";
import { whatsappLink, productEnquiryMessage } from "@/lib/whatsapp";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const p = getProduct(params.slug);
  if (!p) return { title: "Product Not Found" };
  return {
    title: `${p.name} — ${p.category}`,
    description: `${p.name} (${p.category}): ${p.description} Sizes: ${p.sizes.join(", ")}. Enquire at Baba Hariharnath Tiles & Marble House.`,
  };
}

export default function ProductDetailsPage({ params }: { params: { slug: string } }) {
  const product = getProduct(params.slug);
  if (!product) notFound();
  const related = relatedProducts(product);
  const gallery = product.images?.length ? product.images : [product.image];

  return (
    <main className="container-premium py-10">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-stone-500">
        <Link href="/" className="hover:text-charcoal">Home</Link>
        <ChevronRight size={13} />
        <Link href="/products" className="hover:text-charcoal">Products</Link>
        <ChevronRight size={13} />
        <Link href={`/products?category=${encodeURIComponent(product.category)}`} className="hover:text-charcoal">
          {product.category}
        </Link>
        <ChevronRight size={13} />
        <span className="text-charcoal">{product.name}</span>
      </nav>

      <div className="mt-6 grid gap-8 lg:grid-cols-2">
        {/* Gallery */}
        <div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-stone-200 bg-marble shadow-card">
            <Image
              src={gallery[0]}
              alt={`${product.name} - ${product.category} large view`}
              fill
              priority
              sizes="(max-width:1024px) 100vw, 50vw"
              className="object-cover"
            />
            <span className="absolute left-4 top-4 rounded-full bg-charcoal/90 px-3 py-1 text-xs font-semibold text-white">
              {product.category}
            </span>
          </div>
          {gallery.length > 1 && (
            <div className="mt-3 grid grid-cols-3 gap-3">
              {gallery.slice(0, 3).map((src, i) => (
                <div key={i} className="relative aspect-[4/3] overflow-hidden rounded-xl border border-stone-200">
                  <Image src={src} alt={`${product.name} view ${i + 1}`} fill sizes="20vw" loading="lazy" className="object-cover" />
                </div>
              ))}
            </div>
          )}
          <p className="mt-2 text-xs text-stone-500">Placeholder images — replace with real product photos in src/data/products.ts</p>
        </div>

        {/* Info */}
        <div>
          <p className="eyebrow">{product.category}</p>
          <h1 className="mt-2 font-serif text-3xl font-bold leading-tight sm:text-4xl">{product.name}</h1>
          <p className="mt-4 text-[15px] leading-relaxed text-stone-600">{product.description}</p>

          <dl className="mt-6 grid gap-3 sm:grid-cols-3">
            <div className="rounded-2xl border border-stone-200 bg-white p-4">
              <dt className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-stone-500"><Ruler size={14} /> Sizes</dt>
              <dd className="mt-1.5 text-sm font-medium">{product.sizes.join(" • ")}</dd>
            </div>
            <div className="rounded-2xl border border-stone-200 bg-white p-4">
              <dt className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-stone-500"><Layers size={14} /> Finish</dt>
              <dd className="mt-1.5 text-sm font-medium">{product.finish}</dd>
            </div>
            <div className="rounded-2xl border border-stone-200 bg-white p-4">
              <dt className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-stone-500"><Grid2X2 size={14} /> Use</dt>
              <dd className="mt-1.5 text-sm font-medium">{product.application}</dd>
            </div>
          </dl>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              href={whatsappLink(productEnquiryMessage(product.name))}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex-1 !bg-[#25D366] hover:!bg-[#1eb856]"
            >
              <MessageCircle size={16} /> WhatsApp Enquiry
            </a>
            <a href={business.phoneHref} className="btn-primary flex-1">
              <Phone size={16} /> Call to Enquire
            </a>
          </div>
          <p className="mt-3 text-xs leading-relaxed text-stone-500">
            WhatsApp message will be pre-filled: “Hello Baba Hariharnath Tiles &amp; Marble House, I am
            interested in {product.name}. Please share price and availability.”
          </p>
          <Link href="/quote" className="mt-2 inline-block text-sm font-semibold text-bronze-700 hover:underline">
            Or request a detailed quote →
          </Link>
        </div>
      </div>

      {/* Quote */}
      <section className="mt-12 rounded-3xl border border-stone-200 bg-white p-6 shadow-card sm:p-8" aria-label="Enquire about this product">
        <h2 className="font-serif text-2xl font-bold">Enquire about {product.name}</h2>
        <p className="mt-1 text-sm text-stone-600">Fill approximate quantity — we will share price &amp; availability.</p>
        <div className="mt-5">
          <QuoteForm preselectedProduct={product.name} />
        </div>
      </section>

      {/* Related */}
      <section className="mt-12" aria-label="Related products">
        <h2 className="font-serif text-2xl font-bold">Related products</h2>
        <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {related.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>
    </main>
  );
}
