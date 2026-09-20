import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MessageCircle } from "lucide-react";
import type { Product } from "@/data/products";
import { whatsappLink, productEnquiryMessage } from "@/lib/whatsapp";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  center = true,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}) {
  return (
    <div className={`${center ? "mx-auto text-center" : "text-left"} max-w-2xl`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-3 font-serif text-3xl font-bold leading-tight text-charcoal sm:text-4xl">
        {title}
      </h2>
      {subtitle && <p className="mt-3 text-[15px] leading-relaxed text-stone-600">{subtitle}</p>}
    </div>
  );
}

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="card-premium group flex flex-col transition-transform duration-300 hover:-translate-y-1 hover:shadow-premium">
      <div className="relative aspect-[4/3] overflow-hidden bg-marble">
        <Image
          src={product.image}
          alt={`${product.name} - ${product.category} at Baba Hariharnath Tiles & Marble House`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <span className="absolute left-3 top-3 rounded-full bg-charcoal/90 px-3 py-1 text-[11px] font-semibold text-white backdrop-blur">
          {product.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-serif text-lg font-bold leading-snug text-charcoal">{product.name}</h3>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-stone-600">{product.description}</p>
        <p className="mt-3 text-xs text-stone-500">
          {product.finish} • {product.sizes.slice(0, 2).join(", ")}
        </p>
        <div className="mt-4 flex gap-2">
          <Link
            href={`/products/${product.slug}`}
            className="inline-flex flex-1 items-center justify-center gap-1 rounded-full border border-charcoal/15 px-4 py-2.5 text-xs font-semibold text-charcoal transition-colors hover:border-charcoal hover:bg-charcoal hover:text-white"
            aria-label={`View details of ${product.name}`}
          >
            View Details <ArrowRight size={14} />
          </Link>
          <a
            href={whatsappLink(productEnquiryMessage(product.name))}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-1 items-center justify-center gap-1 rounded-full bg-[#25D366] px-4 py-2.5 text-xs font-semibold text-white transition-opacity hover:opacity-90"
            aria-label={`Enquire about ${product.name} on WhatsApp`}
          >
            <MessageCircle size={14} /> Enquire Now
          </a>
        </div>
      </div>
    </article>
  );
}
