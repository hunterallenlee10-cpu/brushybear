import type { MetadataRoute } from "next";
import { SITE_URL } from "@/config/env";
import { sitemapPages } from "@/config/pages";

/**
 * Every built page that may be indexed, with its real last-modified date
 * (fixed dates from the data, never "now"). robots.txt only points here
 * once the site is indexable.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return sitemapPages().map((p) => ({
    url: p.path === "/" ? `${SITE_URL}/` : `${SITE_URL}${p.path}`,
    lastModified: p.lastModified,
  }));
}
