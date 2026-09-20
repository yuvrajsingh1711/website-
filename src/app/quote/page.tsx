import type { Metadata } from "next";
import { Phone, MessageCircle } from "lucide-react";
import QuoteForm from "@/components/QuoteForm";
import { business } from "@/config/business";
import { faqs } from "@/data/site";
import { whatsappLink } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Get a Quote — Tiles, Marble & Granite Price",
  description:
    "Request a free quotation for floor tiles, wall tiles, bathroom tiles, marble, granite & sanitaryware at Baba Hariharnath Tiles & Marble House.",
};

export default function QuotePage() {
  return (
    <main className="container-premium py-10">
      <p className="eyebrow">Free Quotation</p>
      <h1 className="mt-2 font-serif text-3xl font-bold sm:text-4xl">Request a quote in 1 minute</h1>
      <p className="mt-3 max-w-2xl text-[15px] text-stone-600">
        Fill approximate quantity (sq.ft / boxes / slabs). We will call/WhatsApp you back with price
        &amp; availability. Prefer chatting?{" "}
        <a
          href={whatsappLink("Hello, I want a quote for tiles/marble.")}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-green-700 underline-offset-4 hover:underline"
        >
          WhatsApp us directly
        </a>.
      </p>

      <div className="mt-8 grid gap-6 lg:grid-cols-5">
        <div className="card-premium p-6 sm:p-8 lg:col-span-3">
          <QuoteForm />
        </div>
        <aside className="space-y-4 lg:col-span-2">
          <div className="rounded-2xl bg-charcoal p-6 text-white">
            <h2 className="font-serif text-xl font-bold">Need help measuring?</h2>
            <p className="mt-2 text-sm leading-relaxed text-stone-300">
              Measure length × width of each room (in feet). Example: 12 × 10 ft room = 120 sq.ft.
              Add 10% extra for cutting wastage. Send photos on WhatsApp for design suggestions.
            </p>
            <div className="mt-4 flex flex-col gap-2">
              <a href={business.phoneHref} className="btn-gold w-full"><Phone size={16} /> Call {business.phoneDisplay}</a>
              <a
                href={whatsappLink("Hello, please help me calculate quantity for my rooms.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline w-full !border-white/30 !bg-white/10 !text-white hover:!bg-white hover:!text-charcoal"
              >
                <MessageCircle size={16} /> Ask on WhatsApp
              </a>
            </div>
          </div>
          <div className="card-premium p-6">
            <h2 className="font-serif text-lg font-bold">Quote FAQs</h2>
            <ul className="mt-3 space-y-3 text-sm text-stone-600">
              {faqs.slice(0, 4).map((f) => (
                <li key={f.q}>
                  <p className="font-semibold text-charcoal">{f.q}</p>
                  <p className="mt-0.5">{f.a}</p>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </main>
  );
}
