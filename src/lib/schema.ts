import type { Article as ArticleSchema, BreadcrumbList, FAQPage, HousePainter, Service, WebPage, WebSite } from "schema-dts";
import { plainText } from "@/lib/text";
import { SITE_URL } from "@/config/env";
import { SITE } from "@/config/site";
import { publishedCities } from "@/data/cities";
import { INDEXABLE } from "@/config/env";
import { isSet, type Fillable } from "@/lib/placeholders";

/**
 * A fact for structured data: the real value, or on preview builds the
 * "[KEY]" placeholder so every field is visibly wired. Public builds never
 * get a placeholder (and the launch check blocks them anyway).
 */
function fact<T>(v: Fillable<T>): T | string | undefined {
  if (isSet(v)) return v;
  return INDEXABLE ? undefined : `[${v.placeholder}]`;
}

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
    ...(fact(SITE.phone) && { telephone: fact(SITE.phone) as string }),
    ...(fact(SITE.email) && { email: fact(SITE.email) as string }),
    ...(isSet(SITE.address)
      ? {
          address: {
            "@type": "PostalAddress" as const,
            streetAddress: SITE.address.street,
            addressLocality: SITE.address.city,
            addressRegion: SITE.state,
            postalCode: SITE.address.zip,
            addressCountry: "US",
          },
        }
      : !INDEXABLE && {
          address: { "@type": "PostalAddress" as const, streetAddress: "[ADDRESS]", addressRegion: SITE.state, addressCountry: "US" },
        }),
    ...(fact(SITE.lniNumber) && {
      hasCredential: {
        "@type": "EducationalOccupationalCredential" as const,
        credentialCategory: "Washington L&I contractor registration",
        identifier: fact(SITE.lniNumber) as string,
      },
    }),
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

/** FAQPage from the same data the page shows, word for word (links stripped). */
export function faqSchema(faqs: { question: string; answer: string[] }[]): FAQPage {
  return {
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer.map(plainText).join(" ") },
    })),
  };
}

/** A service page: what we offer, who provides it, and where. */
export function serviceSchema(opts: { path: string; name: string; description: string }): Service {
  return {
    "@type": "Service",
    "@id": `${abs(opts.path)}#service`,
    name: opts.name,
    serviceType: opts.name,
    description: opts.description,
    url: abs(opts.path),
    provider: { "@id": BUSINESS_ID },
    areaServed: publishedCities().map((c) => ({ "@type": "City" as const, name: `${c.name}, ${SITE.stateName}`, sameAs: c.wikipediaUrl })),
  };
}

export function articleSchema(opts: {
  path: string;
  headline: string;
  description: string;
  datePublished: string;
  dateModified: string;
  authorName?: string;
}): ArticleSchema {
  return {
    "@type": "Article",
    "@id": `${abs(opts.path)}#article`,
    headline: opts.headline,
    description: opts.description,
    url: abs(opts.path),
    mainEntityOfPage: abs(opts.path),
    datePublished: opts.datePublished,
    dateModified: opts.dateModified,
    image: `${SITE_URL}/og-image.jpg`,
    author: opts.authorName ? { "@type": "Person", name: opts.authorName } : { "@id": BUSINESS_ID },
    publisher: { "@id": BUSINESS_ID },
  };
}
