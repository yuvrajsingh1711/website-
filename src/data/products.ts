/*
 * ============================================================
 *  CENTRAL PRODUCT DATA
 *  👉 ADD / EDIT PRODUCTS HERE. All product pages read from this file.
 *  - To replace placeholder images: put your photos in /public/products/
 *    e.g. /public/products/carrara-marble.jpg and set image: "/products/carrara-marble.jpg"
 *  - slug must be unique (used in URL: /products/<slug>)
 * ============================================================
 */

export type ProductCategory =
  | "Floor Tiles"
  | "Wall Tiles"
  | "Bathroom Tiles"
  | "Kitchen Tiles"
  | "Outdoor Tiles"
  | "Parking Tiles"
  | "Marble"
  | "Granite"
  | "Sanitaryware"
  | "Staircase/Step Tiles";

export interface Product {
  slug: string;
  name: string;
  category: ProductCategory;
  // TODO: REPLACE WITH REAL PRODUCT IMAGES — save in /public/products/ and update paths
  image: string;
  images?: string[];
  description: string;
  sizes: string[];
  finish: string;
  application: string;
  featured?: boolean;
  priceHint?: string;
}

export const categories: ProductCategory[] = [
  "Floor Tiles",
  "Wall Tiles",
  "Bathroom Tiles",
  "Kitchen Tiles",
  "Outdoor Tiles",
  "Parking Tiles",
  "Marble",
  "Granite",
  "Sanitaryware",
  "Staircase/Step Tiles",
];

const u = (id: string, w = 900) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const products: Product[] = [
  {
    slug: "carrara-white-marble",
    name: "Premium Carrara White Marble",
    category: "Marble",
    image: u("photo-1541123437800-1bb1317badc2"),
    images: [
      u("photo-1541123437800-1bb1317badc2"),
      u("photo-1618221195710-dd6b41faaea6"),
      u("photo-1600607687939-ce8a6c25118c"),
    ],
    description:
      "Classic Italian-look Carrara white marble with soft grey veining. Ideal for premium flooring, walls, countertops and pooja rooms. Mirror polish finish.",
    sizes: ["2x4 ft", "4x4 ft", "Slabs"],
    finish: "Polished",
    application: "Flooring / Wall / Countertop",
    featured: true,
  },
  {
    slug: "italian-grey-marble",
    name: "Italian Grey Marble Slab",
    category: "Marble",
    image: u("photo-1618221195710-dd6b41faaea6"),
    images: [u("photo-1618221195710-dd6b41faaea6"), u("photo-1600210492486-724fe5c67fb0")],
    description:
      "Elegant grey marble with natural movement. Perfect for living rooms, lobbies and feature walls seeking a premium hotel look.",
    sizes: ["3x5 ft Slab", "4x6 ft Slab"],
    finish: "Polished",
    application: "Flooring / Feature Wall",
    featured: true,
  },
  {
    slug: "absolute-black-granite",
    name: "Absolute Black Granite",
    category: "Granite",
    image: u("photo-1600585154340-be6161a56a0c"),
    images: [u("photo-1600585154340-be6161a56a0c")],
    description:
      "Jet-black, highly durable granite for kitchen countertops, staircases and exterior cladding. Stain and scratch resistant.",
    sizes: ["8x3 ft Slab", "Custom cut"],
    finish: "Polished / Flamed",
    application: "Kitchen Counter / Stairs / Exterior",
    featured: true,
  },
  {
    slug: "tan-brown-granite",
    name: "Tan Brown Granite",
    category: "Granite",
    image: u("photo-1600607687939-ce8a6c25118c"),
    images: [u("photo-1600607687939-ce8a6c25118c")],
    description:
      "Rich brown-black granite with tan speckles. Popular for flooring, thresholds and kitchen platforms across Indian homes.",
    sizes: ["Slabs", "2x2 ft", "2x4 ft"],
    finish: "Polished",
    application: "Flooring / Kitchen / Thresholds",
  },
  {
    slug: "glossy-ivory-floor-tile-24x48",
    name: "Ivory Glossy Floor Tile 24x48",
    category: "Floor Tiles",
    image: u("photo-1600210492486-724fe5c67fb0"),
    images: [u("photo-1600210492486-724fe5c67fb0")],
    description:
      "Large-format glossy vitrified floor tile in warm ivory. Makes rooms look bigger and brighter. Low maintenance, ideal for halls and bedrooms.",
    sizes: ["24x48 inch", "32x64 inch"],
    finish: "High Gloss",
    application: "Living / Bedroom / Hall",
    featured: true,
  },
  {
    slug: "marble-look-verona-beige",
    name: "Verona Beige Marble-Look Tile",
    category: "Floor Tiles",
    image: u("photo-1616486338812-3dadae4b4ace"),
    images: [u("photo-1616486338812-3dadae4b4ace")],
    description:
      "Marble-look porcelain tile with beige veining. Get the marble feel at tile practicality — no polishing needed.",
    sizes: ["24x24 inch", "24x48 inch"],
    finish: "Glossy",
    application: "Flooring / Wall",
    featured: true,
  },
  {
    slug: "wooden-plank-tile",
    name: "Natural Wooden Plank Tile",
    category: "Floor Tiles",
    image: u("photo-1586023492125-27b2c045efd7"),
    images: [u("photo-1586023492125-27b2c045efd7")],
    description:
      "Wood-finish matte tile for bedrooms and offices. Warm wooden look without termite or water issues.",
    sizes: ["8x48 inch", "12x48 inch"],
    finish: "Matte Wood",
    application: "Bedroom / Office",
  },
  {
    slug: "3d-moroccan-wall-tile",
    name: "Moroccan Art Wall Tile",
    category: "Wall Tiles",
    image: u("photo-1502005229762-cf1b2da7c5d6"),
    images: [u("photo-1502005229762-cf1b2da7c5d6")],
    description:
      "Designer decorative wall tile with Moroccan pattern. Perfect for TV walls, pooja background and feature walls.",
    sizes: ["12x18 inch", "12x24 inch"],
    finish: "Satin Decor",
    application: "Feature Wall / TV Wall",
    featured: true,
  },
  {
    slug: "subway-glossy-white",
    name: "Classic White Subway Tile",
    category: "Wall Tiles",
    image: u("photo-1493809842364-78817add7ffb"),
    images: [u("photo-1493809842364-78817add7ffb")],
    description:
      "Timeless glossy subway tile for kitchens, balconies and commercial walls. Easy to clean and always in style.",
    sizes: ["4x12 inch", "3x12 inch"],
    finish: "Glossy",
    application: "Kitchen / Balcony / Shops",
  },
  {
    slug: "aqua-bathroom-combo",
    name: "Aqua Blue Bathroom Wall Combo",
    category: "Bathroom Tiles",
    image: u("photo-1584622650111-993a426fbf0a"),
    images: [
      u("photo-1584622650111-993a426fbf0a"),
      u("photo-1620626011761-996317b8d101"),
    ],
    description:
      "Water-inspired bathroom wall + floor combo with anti-skid floor tile. Complete 7x4 bathroom set guidance available in store.",
    sizes: ["12x24 inch Wall", "12x12 inch Floor"],
    finish: "Glossy Wall / Anti-skid Floor",
    application: "Bathroom Wall & Floor",
    featured: true,
  },
  {
    slug: "stone-texture-bath-tile",
    name: "Stone Texture Anti-Skid Bath Tile",
    category: "Bathroom Tiles",
    image: u("photo-1620626011761-996317b8d101"),
    images: [u("photo-1620626011761-996317b8d101")],
    description:
      "Rustic stone-texture anti-skid tile for safe, stylish bathroom flooring. Stain-resistant and easy to maintain.",
    sizes: ["12x12 inch", "16x16 inch"],
    finish: "Matte Anti-skid",
    application: "Bathroom Floor",
  },
  {
    slug: "kitchen-backprint-leaf",
    name: "Leaf Green Kitchen Backsplash Tile",
    category: "Kitchen Tiles",
    image: u("photo-1556911220-bff31c812dba"),
    images: [u("photo-1556911220-bff31c812dba")],
    description:
      "Fresh green kitchen backsplash tile with easy-wipe glossy surface. Oil and masala stains clean in one wipe.",
    sizes: ["12x18 inch", "12x24 inch"],
    finish: "High Gloss",
    application: "Kitchen Wall / Backsplash",
    featured: true,
  },
  {
    slug: "kitchen-floor-matt-beige",
    name: "Beige Matte Kitchen Floor Tile",
    category: "Kitchen Tiles",
    image: u("photo-1604709177225-055f99402ea3"),
    images: [u("photo-1604709177225-055f99402ea3")],
    description:
      "Heavy-duty matte kitchen floor tile with anti-skid grip. Handles heavy vessels and daily washing.",
    sizes: ["16x16 inch", "24x24 inch"],
    finish: "Matte Anti-skid",
    application: "Kitchen Floor",
  },
  {
    slug: "terrace-cool-outdoor-tile",
    name: "Terrace Cool Outdoor Tile",
    category: "Outdoor Tiles",
    image: u("photo-1600566753086-00f18fb6b3ea"),
    images: [u("photo-1600566753086-00f18fb6b3ea")],
    description:
      "Weather-proof outdoor tile for terrace, balcony and Veranda. Heat-reflective, anti-skid and rain-safe.",
    sizes: ["16x16 inch", "24x24 inch"],
    finish: "Matte Heavy Duty",
    application: "Terrace / Balcony / Veranda",
  },
  {
    slug: "stone-cladding-exterior",
    name: "Natural Stone Elevation Cladding",
    category: "Outdoor Tiles",
    image: u("photo-1600585154526-990dced4db0d"),
    images: [u("photo-1600585154526-990dced4db0d")],
    description:
      "Front elevation stone-cladding look tile. Gives premium bungalow look, withstands sun and rain.",
    sizes: ["12x24 inch", "18x36 inch"],
    finish: "Rustic Matte",
    application: "Exterior Elevation",
  },
  {
    slug: "heavy-duty-parking-tile",
    name: "Heavy-Duty Parking Tile",
    category: "Parking Tiles",
    image: u("photo-1560448204-e02f11c3d0e2"),
    images: [u("photo-1560448204-e02f11c3d0e2")],
    description:
      "16mm thick heavy-duty parking tile for cars, bikes and driveways. Load-bearing and anti-skid.",
    sizes: ["16x16 inch (16mm)", "24x24 inch"],
    finish: "Heavy Duty Matte",
    application: "Parking / Driveway / Ramp",
  },
  {
    slug: "chequered-parking-combo",
    name: "Chequered Driveway Combo",
    category: "Parking Tiles",
    image: u("photo-1522708323590-d24dbb6b0267"),
    images: [u("photo-1522708323590-d24dbb6b0267")],
    description:
      "Classic chequered driveway tile in terracotta + grey. Traditional, strong and budget-friendly.",
    sizes: ["12x12 inch", "16x16 inch"],
    finish: "Anti-skid",
    application: "Driveway / Courtyard",
  },
  {
    slug: "one-piece-wall-hung-wc",
    name: "One-Piece Wall-Hung WC + Basin Set",
    category: "Sanitaryware",
    image: u("photo-1584622781564-1d987f7333c1"),
    images: [u("photo-1584622781564-1d987f7333c1")],
    description:
      "Premium one-piece closet with soft-close seat + wall-hung basin. Water-saving flush, easy-clean ceramic.",
    sizes: ["Standard", "Wall-hung"],
    finish: "Glossy Ceramic",
    application: "Bathroom Sanitary",
    featured: true,
  },
  {
    slug: "designer-basin-mixer-set",
    name: "Designer Table-Top Basin Set",
    category: "Sanitaryware",
    image: u("photo-1600566752355-35792bedcfea"),
    images: [u("photo-1600566752355-35792bedcfea")],
    description:
      "Round table-top designer basin with tall mixer tap. Hotel-style luxury for modern bathrooms.",
    sizes: ["16 inch dia", "18 inch dia"],
    finish: "Glossy",
    application: "Wash Basin",
  },
  {
    slug: "anti-skid-step-nosing",
    name: "Step Nosing Staircase Tile",
    category: "Staircase/Step Tiles",
    image: u("photo-1600121848594-d8644e57abab"),
    images: [u("photo-1600121848594-d8644e57abab")],
    description:
      "Staircase step tile with grooved nosing for extra grip. Safe for elders and kids, ideal for homes and shops.",
    sizes: ["12x36 inch", "12x48 inch"],
    finish: "Matte Anti-skid",
    application: "Stairs / Steps",
  },
  {
    slug: "granite-step-black-galaxy",
    name: "Black Galaxy Granite Steps",
    category: "Staircase/Step Tiles",
    image: u("photo-1631679706909-1844bbd07221"),
    images: [u("photo-1631679706909-1844bbd07221")],
    description:
      "Black galaxy granite readymade steps with golden speckles. Premium entrance and indoor staircase solution.",
    sizes: ["3 ft / 4 ft / 5 ft"],
    finish: "Polished",
    application: "Stairs / Entrance",
  },
  {
    slug: "rustic-brick-cladding",
    name: "Rustic Brick Wall Cladding",
    category: "Wall Tiles",
    image: u("photo-1615873968403-89e068629265"),
    images: [u("photo-1615873968403-89e068629265")],
    description:
      "Exposed brick-look cladding for boundary walls, shops and cafes. No painting needed.",
    sizes: ["8x24 inch"],
    finish: "Rustic",
    application: "Boundary / Commercial Wall",
  },
  {
    slug: "calacatta-gold-floor-32x64",
    name: "Calacatta Gold GVT 32x64",
    category: "Floor Tiles",
    image: u("photo-1615971677499-5467cbab01c0"),
    images: [u("photo-1615971677499-5467cbab01c0")],
    description:
      "Large-slab Calacatta gold-vein glazed vitrified tile. Zero joints look for luxury halls and showrooms.",
    sizes: ["32x64 inch"],
    finish: "High Gloss GVT",
    application: "Hall / Showroom / Lobby",
    featured: true,
  },
  {
    slug: "makrana-white-marble",
    name: "Makrana White Marble",
    category: "Marble",
    image: u("photo-1618220179428-22790b461013"),
    images: [u("photo-1618220179428-22790b461013")],
    description:
      "Authentic Makrana white marble — the stone of the Taj Mahal. Cool underfoot, long life, re-polishable.",
    sizes: ["Slabs", "2x2 ft", "Cut to size"],
    finish: "Polished / Honed",
    application: "Flooring / Mandir / Stairs",
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function relatedProducts(product: Product, count = 4): Product[] {
  const sameCat = products.filter(
    (p) => p.category === product.category && p.slug !== product.slug
  );
  const others = products.filter(
    (p) => p.category !== product.category && p.slug !== product.slug
  );
  return [...sameCat, ...others].slice(0, count);
}
