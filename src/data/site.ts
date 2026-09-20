export const testimonials = [
  {
    name: "Ramesh Kumar",
    location: "Local Homeowner",
    text: "Bahut badhiya variety hai tiles aur marble me. Rate bhi sahi laga aur design samjhane me madad ki. Mera poora ghar ka flooring yahin se liya.",
  },
  {
    name: "Priya Singh",
    location: "Kitchen Renovation",
    text: "Kitchen aur bathroom tiles ke liye best collection. Glossy finish aur colours photos se bhi sundar lage. Staff ne measurement me bhi guide kiya.",
  },
  {
    name: "Amit Verma",
    location: "Shop Owner",
    text: "Meri dukaan ka flooring aur elevation tiles yahin se liye. Strong quality, timely delivery aur sahi quotation mila. Trusted shop hai.",
  },
  {
    name: "Sunita Devi",
    location: "New Home Construction",
    text: "Marble aur granite dono ka accha stock hai. Humne pooja room ke liye Makrana marble liya — highly satisfied with quality and dealing.",
  },
];

export const faqs = [
  {
    q: "What types of tiles do you sell?",
    a: "We sell floor tiles, wall tiles, bathroom tiles, kitchen tiles, outdoor / terrace tiles, parking tiles and staircase step tiles in all popular sizes and finishes.",
  },
  {
    q: "Do you sell marble and granite?",
    a: "Yes. We stock marble (Carrara look, Makrana, Italian grey and more) and granite (Absolute Black, Tan Brown, Black Galaxy and more) in slabs and cut sizes for flooring, kitchen counters, stairs and pooja rooms.",
  },
  {
    q: "Can I request a quotation?",
    a: "Yes. Use the Get a Quote form, call us, or send a WhatsApp message with your product name and approximate quantity (sq.ft / pieces). We will share price and availability quickly.",
  },
  {
    q: "Do you have bathroom and kitchen tiles?",
    a: "Yes. We have complete bathroom wall + floor combos and kitchen backsplash + floor tiles with anti-skid and easy-clean options. Visit the store to see live displays.",
  },
  {
    q: "How can I contact the shop?",
    a: "You can call, WhatsApp, email, or visit the shop directly. See the Contact page for phone, address, opening hours and map directions.",
  },
  {
    q: "Do you help with selecting designs and quantity?",
    a: "Yes. Bring your room measurements or floor plan photo on WhatsApp and we will guide you on design selection and approximate quantity so there is minimum wastage.",
  },
];

export const galleryItems = [
  { src: "photo-1600607687939-ce8a6c25118c", title: "Premium Living Flooring", tag: "Flooring" },
  { src: "photo-1618221195710-dd6b41faaea6", title: "Italian Marble Living Room", tag: "Marble" },
  { src: "photo-1584622650111-993a426fbf0a", title: "Modern Bathroom Design", tag: "Bathroom" },
  { src: "photo-1556911220-bff31c812dba", title: "Modular Kitchen Backsplash", tag: "Kitchen" },
  { src: "photo-1541123437800-1bb1317badc2", title: "Carrara Marble Texture", tag: "Marble" },
  { src: "photo-1600566753086-00f18fb6b3ea", title: "Elegant Bath Interiors", tag: "Bathroom" },
  { src: "photo-1600210492486-724fe5c67fb0", title: "Hall Flooring Ideas", tag: "Flooring" },
  { src: "photo-1600585154340-be6161a56a0c", title: "Granite Counter Inspiration", tag: "Granite" },
  { src: "photo-1616486338812-3dadae4b4ace", title: "Bedroom Tile Styling", tag: "Flooring" },
  { src: "photo-1620626011761-996317b8d101", title: "Anti-skid Bath Floor", tag: "Bathroom" },
  { src: "photo-1604709177225-055f99402ea3", title: "Kitchen Flooring", tag: "Kitchen" },
  { src: "photo-1600121848594-d8644e57abab", title: "Staircase Stone Work", tag: "Flooring" },
];

export function unsplash(id: string, w = 800): string {
  return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;
}
