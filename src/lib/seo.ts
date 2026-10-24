import type { Metadata } from "next";
import { INDEXABLE } from "@/config/env";
import { SITE } from "@/config/site";

/** Interim share image; replaced by the Higgsfield version in build Phase 7. */
export const OG_IMAGE = {
  url: "/og-image.png",
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
};

/**
 * Metadata for one page: unique title and description, self-referencing
 * canonical, Open Graph and Twitter tags, and the robots rule. Every page
 * is noindex until SITE_INDEXABLE is on.
 */
export function pageMetadata({ title, description, path, indexable = true }: PageMeta): Metadata {
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
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [OG_IMAGE.url],
    },
  };
}
