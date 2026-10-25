import type { Metadata } from "next";
import { INDEXABLE } from "@/config/env";
import { SITE } from "@/config/site";

/** Share image: the hero still with the real logo (scripts/brand/make-og.py). */
export const OG_IMAGE = {
  url: "/og-image.jpg",
  width: 1200,
  height: 630,
  alt: `${SITE.name}: house painting on the ${SITE.regionName}`,
};

type PageMeta = {
  /** Page-specific part of the title; " | Brushy Bear Painters" is added. */
  title: string;
  /** About 150–160 characters. */
  description: string;
  /** Path for the canonical URL, e.g. "/services/interior-painting". */
  path: string;
  /** False keeps this page out of search even after launch. */
  indexable?: boolean;
  /** True when the route has its own opengraph-image file. */
  ownOgImage?: boolean;
};

/**
 * Metadata for one page: unique title and description, self-referencing
 * canonical, Open Graph and Twitter tags, and the robots rule. Every page
 * is noindex until SITE_INDEXABLE is on.
 */
export function pageMetadata({ title, description, path, indexable = true, ownOgImage = false }: PageMeta): Metadata {
  const fullTitle = `${title} | ${SITE.name}`;
  const index = INDEXABLE && indexable;
  return {
    title: { absolute: fullTitle },
    description,
    alternates: { canonical: path },
    robots: index
      ? {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        }
      : { index: false, follow: false },
    openGraph: {
      type: "website",
      locale: "en_US",
      siteName: SITE.name,
      title: fullTitle,
      description,
      url: path,
      // Routes with their own opengraph-image file get it automatically;
      // the rest point at the site-wide one generated at /opengraph-image.
      ...(!ownOgImage && { images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: OG_IMAGE.alt }] }),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
}
