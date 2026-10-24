import type { BreadcrumbList, HousePainter, WebPage, WebSite } from "schema-dts";
import { SITE_URL } from "@/config/env";
import { SITE } from "@/config/site";
import { publishedCities } from "@/data/cities";
import { isSet } from "@/lib/placeholders";

/** Stable IDs so other structured data can point at the business. */
export const BUSINESS_ID = `${SITE_URL}/#business`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

const abs = (path: string) => (path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path}`);

/**
 * The business, on every page. A service-area business: no street address,
 * no price range. Phone, email and hours appear only once they're real.
 * Never add aggregateRating or Review until real reviews are on the page.
 */
export function businessSchema(): HousePainter {
  return {
    "@type": "HousePainter",
    "@id": BUSINESS_ID,
    name: SITE.name,
    url: `${SITE_URL}/`,
    logo: `${SITE_URL}/brand/logo-full.png`,
    image: `${SITE_URL}/brand/logo-full.png`,
    ...(isSet(SITE.phone) && { telephone: SITE.phone }),
    ...(isSet(SITE.email) && { email: SITE.email }),
    ...(SITE.hours.schema.length > 0 && { openingHours: SITE.hours.schema }),
    areaServed: publishedCities().map((c) => ({
      "@type": "City" as const,
      name: `${c.name}, ${SITE.stateName}`,
      sameAs: c.wikipediaUrl,
    })),
    ...(SITE.social.length > 0 && { sameAs: SITE.social.map((s) => s.url) }),
  };
}

/** Homepage only. */
export function websiteSchema(): WebSite {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: `${SITE_URL}/`,
    name: SITE.name,
    publisher: { "@id": BUSINESS_ID },
  };
}

export function webPageSchema(opts: { path: string; title: string; description: string; dateModified: string }): WebPage {
  return {
    "@type": "WebPage",
    "@id": `${abs(opts.path)}#webpage`,
    url: abs(opts.path),
    name: opts.title,
    description: opts.description,
    dateModified: opts.dateModified,
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": BUSINESS_ID },
  };
}

/** Matches the visible breadcrumbs on inner pages. */
export function breadcrumbSchema(items: { name: string; path: string }[]): BreadcrumbList {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: abs(item.path),
    })),
  };
}
