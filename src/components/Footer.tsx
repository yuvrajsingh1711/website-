import Link from "next/link";
import { Phone, Mail, MapPin, Clock, Globe, Camera, Play } from "lucide-react";
import { business, navLinks } from "@/config/business";
import { categories } from "@/data/products";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-stone-300" aria-label="Footer">
      <div className="container-premium grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-serif text-xl font-bold text-white">Baba Hariharnath</p>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-bronze-300">
            Tiles &amp; Marble House
          </p>
          <p className="mt-4 text-sm leading-relaxed text-stone-400">
            {business.description} Visit our showroom to explore live displays of tiles,
            marble, granite and sanitaryware.
          </p>
          <div className="mt-4 flex gap-2">
            <a href={business.social.facebook} aria-label="Facebook" className="rounded-full bg-white/10 p-2.5 hover:bg-bronze-400 hover:text-charcoal">
              <Globe size={16} />
            </a>
            <a href={business.social.instagram} aria-label="Instagram" className="rounded-full bg-white/10 p-2.5 hover:bg-bronze-400 hover:text-charcoal">
              <Camera size={16} />
            </a>
            <a href={business.social.youtube} aria-label="YouTube" className="rounded-full bg-white/10 p-2.5 hover:bg-bronze-400 hover:text-charcoal">
              <Play size={16} />
            </a>
          </div>
        </div>

        <nav aria-label="Quick links">
          <p className="text-sm font-bold uppercase tracking-widest text-white">Quick Links</p>
          <ul className="mt-4 space-y-2 text-sm">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-bronze-300">{l.label}</Link>
              </li>
            ))}
            <li>
              <Link href="/quote" className="hover:text-bronze-300">Get a Quote</Link>
            </li>
          </ul>
        </nav>

        <div>
          <p className="text-sm font-bold uppercase tracking-widest text-white">Top Categories</p>
          <ul className="mt-4 space-y-2 text-sm">
            {categories.slice(0, 6).map((c) => (
              <li key={c}>
                <Link href={`/products?category=${encodeURIComponent(c)}`} className="hover:text-bronze-300">
                  {c}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-bold uppercase tracking-widest text-white">Contact</p>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex gap-2">
              <Phone size={16} className="mt-0.5 shrink-0 text-bronze-300" />
              <a href={business.phoneHref} className="hover:text-bronze-300">{business.phoneDisplay}</a>
            </li>
            <li className="flex gap-2">
              <Mail size={16} className="mt-0.5 shrink-0 text-bronze-300" />
              <a href={`mailto:${business.email}`} className="hover:text-bronze-300">{business.email}</a>
            </li>
            <li className="flex gap-2">
              <MapPin size={16} className="mt-0.5 shrink-0 text-bronze-300" />
              <span>{business.addressLine1}, {business.addressLine2}</span>
            </li>
            <li className="flex gap-2">
              <Clock size={16} className="mt-0.5 shrink-0 text-bronze-300" />
              <span>{business.openingHours[0].days}: {business.openingHours[0].time}</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-premium flex flex-col items-center justify-between gap-2 py-5 text-xs text-stone-500 sm:flex-row">
          <p>© {new Date().getFullYear()} {business.name}. All rights reserved.</p>
          <p>Tiles • Marble • Granite • Sanitaryware</p>
        </div>
      </div>
    </footer>
  );
}
