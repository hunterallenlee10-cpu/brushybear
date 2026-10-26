import { ARTICLES } from "@/data/articles";
import { publishedCities } from "@/data/cities";
import { GALLERY, GALLERY_INDEX_THRESHOLD } from "@/data/gallery";
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
  services: { path: "/services", label: "Services", live: true, indexable: true, lastModified: SITE.lastUpdated },
  estimate: { path: "/estimate", label: "Free Estimate", live: true, indexable: true, lastModified: SITE.lastUpdated },
  // Indexed once Erik and Hunter confirm the story (see CONTENT_TODO.md).
  about: { path: "/about", label: "About", live: true, indexable: false, lastModified: SITE.lastUpdated },
  // Indexed once there are enough real jobs to be worth a search visit.
  gallery: { path: "/gallery", label: "Gallery", live: true, indexable: GALLERY.length >= GALLERY_INDEX_THRESHOLD, lastModified: SITE.lastUpdated },
  faq: { path: "/faq", label: "FAQ", live: true, indexable: true, lastModified: SITE.lastUpdated },
  articles: { path: "/articles", label: "Articles", live: true, indexable: true, lastModified: SITE.lastUpdated },
  privacy: { path: "/privacy", label: "Privacy", live: true, indexable: true, lastModified: SITE.lastUpdated },
} satisfies Record<string, PageEntry>;

/** Which data-driven route groups are built yet. */
export const DYNAMIC_LIVE = {
  services: true,
  cities: true,
  articles: true,
};

export const servicePath = (slug: string) => `/services/${slug}`;
export const cityPath = (slug: string) => `/painters/${slug}`;
export const articlePath = (slug: string) => `/articles/${slug}`;

/** True if an internal link points at a page that exists in this build. */
export function isLivePath(href: string): boolean {
  const path = href.split("#")[0] || "/";
  if (path === "/") return true;
  if (Object.values(PAGES).some((p) => p.live && p.path === path)) return true;
  const [, group, slug, extra] = path.split("/");
  if (!slug || extra !== undefined) return false;
  if (group === "services") return DYNAMIC_LIVE.services && publishedServices().some((s) => s.slug === slug);
  if (group === "painters") return DYNAMIC_LIVE.cities && publishedCities().some((c) => c.slug === slug);
  if (group === "articles") return DYNAMIC_LIVE.articles && ARTICLES.some((a) => a.slug === slug);
  return false;
}

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

export function articlePages(): PageEntry[] {
  return ARTICLES.map((a) => ({
    path: articlePath(a.slug),
    label: a.title,
    live: DYNAMIC_LIVE.articles,
    indexable: true,
    lastModified: a.updatedAt,
  }));
}

/** Every built page that may be indexed at launch. */
export function sitemapPages(): PageEntry[] {
  return [...Object.values(PAGES), ...servicePages(), ...cityPages(), ...articlePages()].filter(
    (p) => p.live && p.indexable,
  );
}
