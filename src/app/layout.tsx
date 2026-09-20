import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FloatingButtons } from "@/components/FloatingButtons";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import { business } from "@/config/business";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-fraunces", display: "swap" });

export const metadata: Metadata = {
  title: {
    default: "Baba Hariharnath Tiles & Marble House | Tiles, Marble & Granite Shop",
    template: "%s | Baba Hariharnath Tiles & Marble House",
  },
  description:
    "Baba Hariharnath Tiles & Marble House, Sonpur (near Patna), Bihar — trusted tiles shop for floor tiles, wall tiles, bathroom & kitchen tiles, marble, granite, sanitaryware. Explore designs, get a quote on WhatsApp.",
  keywords: [
    "tiles shop",
    "marble shop",
    "granite",
    "floor tiles",
    "wall tiles",
    "bathroom tiles",
    "kitchen tiles",
    "tiles and marble house",
    "tiles and marble near me",
    "tiles shop Sonpur",
    "marble shop Patna",
    "tiles Sonpur Bihar",
  ],
  openGraph: {
    title: "Baba Hariharnath Tiles & Marble House, Sonpur | Premium Tiles & Marble",
    description:
      "Quality tiles, marble, granite & sanitaryware in Sonpur, near Patna (Bihar) for homes, offices and commercial spaces. Browse designs & request a quote.",
    type: "website",
    locale: "en_IN",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${fraunces.variable} font-sans`}>
        <LocalBusinessSchema />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-charcoal focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <Navbar />
        <div id="main-content">{children}</div>
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}
