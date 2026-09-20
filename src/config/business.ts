/*
 * ============================================================
 *  CENTRAL BUSINESS CONFIGURATION
 *  👉 EDIT THIS FILE to add your real business details.
 *
 *  REPLACE WITH REAL DETAILS:
 *  - phone: REPLACE WITH REAL PHONE NUMBER (e.g. +91 98765 43210)
 *  - phoneHref: tel: link, e.g. "tel:+919876543210"
 *  - whatsappNumber: REPLACE WITH REAL WHATSAPP NUMBER (country code + number, no +/spaces, e.g. 919876543210)
 *  - email: REPLACE WITH REAL EMAIL
 *  - address: REPLACE WITH REAL SHOP ADDRESS
 *  - mapsEmbedUrl: REPLACE WITH REAL GOOGLE MAPS EMBED (Google Maps > Share > Embed a map > copy src)
 *  - mapsDirectionsUrl: REPLACE WITH REAL GOOGLE MAPS DIRECTIONS LINK
 *  - openingHours: REPLACE WITH REAL OPENING HOURS
 *  - logo: currently text-based. To use an image logo, place it in /public/logo.png
 *          and update `logoImage` below to "/logo.png".
 *  - social: REPLACE WITH REAL SOCIAL MEDIA LINKS
 * ============================================================
 */

export const business = {
  name: "Baba Hariharnath Tiles & Marble House",
  shortName: "Baba Hariharnath",
  tagline: "Tiles & Marble House",
  description:
    "Quality tiles, marble, granite, sanitaryware and surface materials for homes, offices and commercial spaces.",

  // Shop phone number
  phoneDisplay: "+91 82521 32787",
  phoneHref: "tel:+918252132787",

  // WhatsApp number (country code + number, no +/spaces)
  whatsappNumber: "918252132787",
  whatsappDisplay: "+91 82521 32787",

  // TODO: REPLACE WITH REAL EMAIL
  email: "contact@example.com", // placeholder

  // Shop address — Sonpur, near Patna, Bihar
  addressLine1: "Main Road, Near Baba Hariharnath Temple, Sonpur",
  addressLine2: "Dist. Saran, Bihar – 841101 (Near Patna)",
  fullAddress:
    "Baba Hariharnath Tiles & Marble House, Main Road, Near Baba Hariharnath Temple, Sonpur, Dist. Saran, Bihar – 841101",

  // TODO: REPLACE WITH REAL OPENING HOURS
  openingHours: [
    { days: "Monday – Saturday", time: "9:30 AM – 8:00 PM" },
    { days: "Sunday", time: "10:00 AM – 6:00 PM" },
  ],

  // Google Maps — set to Sonpur / Baba Hariharnath Temple area.
  // For exact shop pin: Google Maps → search your shop → Share → Embed a map → paste iframe src here.
  mapsEmbedUrl:
    "https://www.google.com/maps?q=Baba+Hariharnath+Temple,+Sonpur,+Saran,+Bihar+841101&output=embed",

  // TODO: replace with exact shop directions link if needed
  mapsDirectionsUrl: "https://www.google.com/maps/search/?api=1&query=Baba+Hariharnath+Tiles+Marble+House+Sonpur+Saran+Bihar",

  // Logo: text-based by default. To replace with image, add /public/logo.png and set logoImage.
  // TODO: REPLACE WITH REAL BUSINESS LOGO (save as /public/logo.png)
  logoImage: null as string | null, // e.g. "/logo.png"

  // TODO: REPLACE WITH REAL SOCIAL MEDIA LINKS
  social: {
    facebook: "#", // placeholder
    instagram: "#", // placeholder
    youtube: "#", // placeholder
  },
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Gallery", href: "/gallery" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];
