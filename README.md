# Baba Hariharnath Tiles & Marble House — Website
Premium, responsive business website built with **Next.js 14, React, TypeScript, Tailwind CSS** and **lucide-react**.

## How to run locally

Node v20 is required. This Mac had no Node, so it was installed to `~/.node` — if `node` is not found, run:

```bash
export PATH="$HOME/.node/bin:$PATH"
```

Then:

```bash
cd baba-hariharnath-tiles
npm install
npm run dev
```

Open http://localhost:3000

Production check:

```bash
npm run build
npm start
```

## Pages

- `/` — Home (hero, why us, categories, featured, marble showcase, benefits, designs, testimonials, FAQ, CTA, contact/map)
- `/products` — Search + category filter grid
- `/products/[slug]` — Details with gallery, sizes/finish/application, WhatsApp + call, related products, enquiry form
- `/about` — Quality / Variety / Service / Guidance
- `/gallery` — Masonry grid + lightbox with tag filter
- `/contact` — Contact cards, form, map embed
- `/quote` — Quote request form with validation + WhatsApp handover

## Exactly which files to edit for real business details

All placeholders are marked with `TODO: REPLACE` comments.

| What | File |
|---|---|
| Phone, WhatsApp, email, address, hours, Google Maps embed + directions, logo, social links | `src/config/business.ts` |
| WhatsApp number logic | `src/lib/whatsapp.ts` (reads from business.ts) |
| Products (add/edit: name, category, image, sizes, finish, application) | `src/data/products.ts` — save photos in `public/products/` e.g. `/products/carrara.jpg` |
| Testimonials, FAQs, gallery images | `src/data/site.ts` |
| Logo: currently text-based. Add `public/logo.png` and update `logoImage` in `business.ts` + `src/components/Navbar.tsx` | `src/components/Navbar.tsx` |
| Domain for sitemap/robots | `src/app/sitemap.ts`, `src/app/robots.ts` |
| Colours/fonts | `tailwind.config.ts`, `src/app/globals.css` |
| SEO titles/descriptions | each `page.tsx` `metadata` + `src/app/layout.tsx` |

### WhatsApp

Placeholder: `919999999999` in `src/config/business.ts` (`whatsappNumber`).
Pre-filled message format: `Hello Baba Hariharnath Tiles & Marble House, I am interested in [PRODUCT NAME]. Please share price and availability.`

### Google Maps

1. Google Maps → search shop → Share → Embed a map → copy iframe `src`
2. Paste into `mapsEmbedUrl` in `src/config/business.ts`
3. Set `mapsDirectionsUrl` to Share → directions link.

## Notes

- Images are currently Unsplash placeholders (see `TODO: REPLACE WITH REAL PRODUCT IMAGES`). Lazy-loaded via `next/image`.
- Forms use frontend validation only (success message + WhatsApp handover). Connect backend later if needed.
- Local Business JSON-LD schema is in `src/components/LocalBusinessSchema.tsx` (placeholders inside).
- No fake functionality: every button links to a real page, `tel:`, `wa.me`, map URL or working form.
