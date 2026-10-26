/**
 * Services. Phase 1 (this file's first version) holds names and slugs only;
 * full page copy arrives in build Phase 4. A service gets a page only when
 * `published` is true.
 */
export type Service = {
  slug: string;
  name: string;
  /** Short label for cards and menus. */
  shortName: string;
  /** Business rollout phase from the Master Plan (1 = launch). */
  phase: 1 | 2 | 3;
  published: boolean;
  updatedAt: string;
};

// Same services, same order as EA Pro Painters' menu.
export const SERVICES: Service[] = [
  { slug: "commercial-painting", name: "Commercial Painting", shortName: "Commercial", phase: 1, published: true, updatedAt: "2026-10-26" },
  { slug: "exterior-painting", name: "Exterior Painting", shortName: "Exteriors", phase: 1, published: true, updatedAt: "2026-10-26" },
  { slug: "interior-painting", name: "Interior Painting", shortName: "Interiors", phase: 1, published: true, updatedAt: "2026-10-26" },
  { slug: "custom-painting", name: "Custom Painting", shortName: "Custom", phase: 1, published: true, updatedAt: "2026-10-26" },
  { slug: "cabinet-painting", name: "Cabinet Painting", shortName: "Cabinets", phase: 1, published: true, updatedAt: "2026-10-26" },
  { slug: "millwork-painting", name: "Millwork Painting", shortName: "Millwork", phase: 1, published: true, updatedAt: "2026-10-26" },
  { slug: "drywall-painting", name: "Drywall Painting", shortName: "Drywall", phase: 1, published: true, updatedAt: "2026-10-26" },
  { slug: "decks-and-fences-painting", name: "Decks and Fences Painting", shortName: "Decks & fences", phase: 1, published: true, updatedAt: "2026-10-26" },
  { slug: "hoa-painting", name: "HOA Painting", shortName: "HOA", phase: 1, published: true, updatedAt: "2026-10-26" },
];

/** Offered with any job from day one; mentioned on pages, no pages of their own. */
export const ADD_ONS = [
  "Pressure washing",
  "Wood rot repair",
  "Drywall repair",
  "Trim and millwork",
  "Color consultation",
] as const;

export const publishedServices = () => SERVICES.filter((s) => s.published);
export const getService = (slug: string) => SERVICES.find((s) => s.slug === slug && s.published);
