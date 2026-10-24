import type { MetadataRoute } from "next";
import { INDEXABLE, SITE_URL } from "@/config/env";

/**
 * Until launch: block everything. After launch: allow all crawlers, including
 * AI search crawlers (GPTBot, OAI-SearchBot, PerplexityBot, Google-Extended,
 * Bingbot), and keep them out of /api/.
 */
export default function robots(): MetadataRoute.Robots {
  if (!INDEXABLE) {
    return { rules: { userAgent: "*", disallow: "/" } };
  }
  return {
    rules: { userAgent: "*", allow: "/", disallow: "/api/" },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
