import { business } from "@/config/business";

// Local Business structured data (JSON-LD) for SEO — location set to Sonpur, Saran, Bihar.
// TODO: REPLACE email placeholder with real email in src/config/business.ts.
export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: business.name,
    description: `${business.description} Located in Sonpur, Dist. Saran, Bihar (near Patna).`,
    telephone: business.phoneDisplay,
    email: business.email, // placeholder — REPLACE WITH REAL EMAIL
    address: {
      "@type": "PostalAddress",
      streetAddress: business.addressLine1,
      addressLocality: "Sonpur",
      addressRegion: "Bihar",
      postalCode: "841101",
      addressCountry: "IN",
    },
    areaServed: ["Sonpur", "Saran", "Patna", "Hajipur", "Bihar"],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:30",
        closes: "20:00",
      },
    ],
    priceRange: "₹₹",
    currrency: "INR",
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
