import { publishedCities } from "@/data/cities";
import { publishedServices } from "@/data/services";
import { SITE } from "@/config/site";

/**
 * One list of every route. Navigation, the footer and the sitemap read from
 * here, so a page that isn't built yet is never linked or listed.
 *
 * `live`: the route exists in this build.
 * `indexable`: may be indexed once SITE_INDEXABLE is on.
 */
export type PageEntry = {
  path: string;
  label: string;
  live: boolean;
  indexable: boolean;
  lastModified: string;
};

export const PAGES = {
  home: { path: "/", label: "Home", live: true, indexable: true, lastModified: SITE.lastUpdated },
  services: { path: "/services", label: "Services", live: false, indexable: true, lastModified: SITE.lastUpdated },
  estimate: { path: "/estimate", label: "Free Estimate", live: false, indexable: true, lastModified: SITE.lastUpdated },
  about: { path: "/about", label: "About", live: false, indexable: false, lastModified: SITE.lastUpdated },
  gallery: { path: "/gallery", label: "Gallery", live: false, indexable: false, lastModified: SITE.lastUpdated },
  faq: { path: "/faq", label: "FAQ", live: false, indexable: true, lastModified: SITE.lastUpdated },
  articles: { path: "/articles", label: "Articles", live: false, indexable: true, lastModified: SITE.lastUpdated },
  privacy: { path: "/privacy", label: "Privacy", live: false, indexable: true, lastModified: SITE.lastUpdated },
} satisfies Record<string, PageEntry>;

/** Which data-driven route groups are built yet. */
export const DYNAMIC_LIVE = {
  services: false,
  cities: false,
  articles: false,
};

export const servicePath = (slug: string) => `/services/${slug}`;
export const cityPath = (slug: string) => `/painters/${slug}`;

export function servicePages(): PageEntry[] {
  return publishedServices().map((s) => ({
    path: servicePath(s.slug),
    label: s.name,
    live: DYNAMIC_LIVE.services,
    indexable: true,
    lastModified: s.updatedAt,
  }));
}

export function cityPages(): PageEntry[] {
  return publishedCities().map((c) => ({
    path: cityPath(c.slug),
    label: `${c.name}, ${SITE.state}`,
    live: DYNAMIC_LIVE.cities,
    indexable: true,
    lastModified: c.updatedAt,
  }));
}

/** Where every "Get a Free Estimate" button goes. */
export function estimateHref(): string {
  return PAGES.estimate.live ? PAGES.estimate.path : "/#estimate";
}

/** Every built page that may be indexed at launch. */
export function sitemapPages(): PageEntry[] {
  return [...Object.values(PAGES), ...servicePages(), ...cityPages()].filter(
    (p) => p.live && p.indexable,
  );
}
