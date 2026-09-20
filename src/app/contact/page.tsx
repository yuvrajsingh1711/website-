import type { Metadata } from "next";
import { Phone, MessageCircle, Mail, MapPin, Clock, Navigation } from "lucide-react";
import { business } from "@/config/business";
import ContactForm from "@/components/ContactForm";
import { whatsappLink } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Contact Us — Visit Our Tiles & Marble Shop",
  description:
    "Contact Baba Hariharnath Tiles & Marble House: phone, WhatsApp, email, address, opening hours & map. Send an enquiry for tiles, marble, granite & sanitaryware.",
};

export default function ContactPage() {
  return (
    <main className="container-premium py-10">
      <p className="eyebrow">Contact Us</p>
      <h1 className="mt-2 font-serif text-3xl font-bold sm:text-4xl">Visit, call or WhatsApp us</h1>
      <p className="mt-3 max-w-2xl text-[15px] text-stone-600">
        Call or WhatsApp us on <strong>+91 82521 32787</strong>. Email is still a{" "}
        <strong>placeholder</strong> — update it in{" "}
        <code className="rounded bg-stone-200 px-1.5 py-0.5 text-xs">src/config/business.ts</code>.
      </p>

      <div className="mt-8 grid gap-6 lg:grid-cols-5">
        <div className="space-y-4 lg:col-span-2">
          {[
            { icon: Phone, label: "Phone", value: business.phoneDisplay, href: business.phoneHref },
            { icon: MessageCircle, label: "WhatsApp", value: business.whatsappDisplay, href: whatsappLink("Hello Baba Hariharnath Tiles & Marble House, I have an enquiry.") },
            { icon: Mail, label: "Email (placeholder)", value: business.email, href: `mailto:${business.email}` },
            { icon: MapPin, label: "Address", value: business.fullAddress },
          ].map((c) => (
            <div key={c.label} className="card-premium flex gap-4 p-5">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-charcoal text-bronze-300">
                <c.icon size={18} />
              </span>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-stone-500">{c.label}</p>
                {c.href ? (
                  <a href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="mt-1 block text-[15px] font-semibold text-charcoal hover:text-bronze-700">
                    {c.value}
                  </a>
                ) : (
                  <p className="mt-1 text-[15px] font-semibold">{c.value}</p>
                )}
              </div>
            </div>
          ))}
          <div className="card-premium p-5">
            <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-stone-500">
              <Clock size={14} /> Opening Hours (placeholder)
            </p>
            <ul className="mt-2 space-y-1 text-sm">
              {business.openingHours.map((h) => (
                <li key={h.days} className="flex justify-between gap-4">
                  <span>{h.days}</span><span className="font-semibold">{h.time}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <a href={business.phoneHref} className="btn-primary"><Phone size={16} /> Call</a>
            <a href={whatsappLink("Hello, I want to enquire.")} target="_blank" rel="noopener noreferrer" className="btn-primary !bg-[#25D366] hover:!bg-[#1eb856]">
              <MessageCircle size={16} /> WhatsApp
            </a>
            <a href={business.mapsDirectionsUrl} target="_blank" rel="noopener noreferrer" className="btn-outline col-span-2">
              <Navigation size={16} /> Get Directions
            </a>
          </div>
        </div>

        <div className="lg:col-span-3">
          <div className="card-premium p-6 sm:p-8">
            <h2 className="font-serif text-2xl font-bold">Send an enquiry</h2>
            <p className="mt-1 text-sm text-stone-600">We usually reply within shop hours.</p>
            <div className="mt-5">
              <ContactForm />
            </div>
          </div>
          <div className="mt-6 overflow-hidden rounded-2xl border border-stone-200 shadow-card">
            <p className="bg-charcoal px-5 py-3 text-xs font-bold uppercase tracking-widest text-bronze-300">
              Find us on Google Maps (placeholder embed — replace URL in business.ts)
            </p>
            {/* TODO: REPLACE WITH REAL GOOGLE MAPS EMBED */}
            <iframe
              title="Shop location on Google Maps"
              src={business.mapsEmbedUrl}
              className="h-[320px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
