import Link from "next/link";
import { Phone, FileText } from "lucide-react";
import { business } from "@/config/business";
import { whatsappLink } from "@/lib/whatsapp";

export default function CTASection() {
  return (
    <section className="container-premium py-14" aria-label="Request a quote">
      <div className="relative overflow-hidden rounded-3xl bg-charcoal px-6 py-12 text-center shadow-premium sm:px-12">
        <div
          className="pointer-events-none absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&w=1400&q=60')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          aria-hidden="true"
        />
        <div className="relative">
          <p className="eyebrow !text-bronze-300">Free Guidance &amp; Quotation</p>
          <h2 className="mx-auto mt-3 max-w-2xl font-serif text-3xl font-bold text-white sm:text-4xl">
            Planning flooring or renovation? Get the right material at the right price.
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-stone-300">
            Share your room size on WhatsApp or request a quote — we will suggest designs,
            calculate quantity and share best price.
          </p>
          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/quote" className="btn-gold">
              <FileText size={16} /> Request a Quote
            </Link>
            <a
              href={whatsappLink("Hello Baba Hariharnath Tiles & Marble House, I want a quote for tiles/marble.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline !border-white/30 !bg-white/10 !text-white hover:!bg-white hover:!text-charcoal"
            >
              WhatsApp Us
            </a>
            <a href={business.phoneHref} className="btn-outline !border-white/30 !bg-transparent !text-white hover:!bg-white hover:!text-charcoal">
              <Phone size={16} /> Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
