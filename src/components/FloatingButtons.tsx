"use client";

import { useEffect, useState } from "react";
import { MessageCircle, Phone, ArrowUp } from "lucide-react";
import { business } from "@/config/business";
import { whatsappLink } from "@/lib/whatsapp";

export function FloatingButtons() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Floating WhatsApp */}
      <a
        href={whatsappLink("Hello Baba Hariharnath Tiles & Marble House, I want to enquire about tiles/marble.")}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-premium transition-transform hover:scale-105"
      >
        <MessageCircle size={26} />
      </a>

      {/* Floating Call on mobile */}
      <a
        href={business.phoneHref}
        aria-label="Call the shop"
        className="fixed bottom-5 left-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-charcoal text-white shadow-premium transition-transform hover:scale-105 md:hidden"
      >
        <Phone size={22} />
      </a>

      {/* Scroll to top */}
      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Scroll to top"
          className="fixed bottom-24 right-6 z-50 rounded-full border border-stone-200 bg-white p-3 text-charcoal shadow-card hover:bg-marble"
        >
          <ArrowUp size={18} />
        </button>
      )}
    </>
  );
}
