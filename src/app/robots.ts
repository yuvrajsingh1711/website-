import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    // TODO: REPLACE WITH REAL DOMAIN in src/app/sitemap.ts
    sitemap: "https://www.example.com/sitemap.xml",
  };
}
