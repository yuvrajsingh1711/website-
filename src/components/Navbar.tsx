"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, Phone, FileText } from "lucide-react";
import { business, navLinks } from "@/config/business";

export function Logo({ compact = false }: { compact?: boolean }) {
  // TODO: REPLACE WITH REAL BUSINESS LOGO
  // To use image logo: place file at /public/logo.png and replace this block with <Image src="/logo.png" ... />
  return (
    <Link href="/" className="flex items-center gap-3" aria-label="Baba Hariharnath Tiles & Marble House - Home">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-charcoal text-bronze-300 shadow-card">
        <span className="font-serif text-xl font-bold">B</span>
      </div>
      <div className="leading-tight">
        <p className={`font-serif font-bold text-charcoal ${compact ? "text-base" : "text-lg"}`}>
          Baba Hariharnath
        </p>
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-bronze-600">
          Tiles &amp; Marble House
        </p>
      </div>
    </Link>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-stone-200/70 bg-cream/90 backdrop-blur-md">
      {/* Top strip */}
      <div className="hidden bg-charcoal text-white md:block">
        <div className="container-premium flex items-center justify-between py-1.5 text-xs">
          <p className="tracking-wide text-stone-300">
            Premium Tiles • Marble • Granite • Sanitaryware
          </p>
          <div className="flex items-center gap-4">
            <a href={business.phoneHref} className="inline-flex items-center gap-1.5 hover:text-bronze-300">
              <Phone size={13} /> {business.phoneDisplay}
            </a>
            <span className="text-stone-500">|</span>
            <span className="text-stone-300">{business.openingHours[0].days}: {business.openingHours[0].time}</span>
          </div>
        </div>
      </div>

      <nav className="container-premium flex items-center justify-between py-3" aria-label="Main navigation">
        <Logo />
        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                pathname === l.href
                  ? "bg-charcoal text-white"
                  : "text-charcoal/70 hover:bg-stone-200/60 hover:text-charcoal"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link href="/quote" className="btn-gold ml-3 !px-6 !py-2.5">
            <FileText size={16} /> Get a Quote
          </Link>
        </div>
        <div className="flex items-center gap-2 lg:hidden">
          <Link href="/quote" className="btn-gold !px-4 !py-2 text-xs">
            Get a Quote
          </Link>
          <button
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="rounded-full border border-stone-300 p-2.5 text-charcoal"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-stone-200 bg-white lg:hidden">
          <div className="container-premium flex flex-col gap-1 py-4">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`rounded-xl px-4 py-3 text-sm font-medium ${
                  pathname === l.href ? "bg-charcoal text-white" : "hover:bg-marble"
                }`}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/quote"
              onClick={() => setOpen(false)}
              className="btn-primary mt-2 w-full"
            >
              <FileText size={16} /> Get a Quote
            </Link>
            <a href={business.phoneHref} className="btn-outline mt-2 w-full">
              <Phone size={16} /> Call {business.phoneDisplay}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
