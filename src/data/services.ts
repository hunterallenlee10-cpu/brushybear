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

export const SERVICES: Service[] = [
  { slug: "interior-painting", name: "Interior Painting", shortName: "Interiors", phase: 1, published: true, updatedAt: "2026-10-24" },
  { slug: "exterior-painting", name: "Exterior Painting", shortName: "Exteriors", phase: 1, published: true, updatedAt: "2026-10-24" },
  { slug: "cabinet-painting", name: "Cabinet Painting", shortName: "Cabinets", phase: 1, published: true, updatedAt: "2026-10-24" },
  { slug: "deck-and-fence-staining", name: "Deck and Fence Staining", shortName: "Decks & fences", phase: 1, published: true, updatedAt: "2026-10-24" },
  // Phase 2 services: data only, no pages yet.
  { slug: "popcorn-ceiling-removal", name: "Popcorn Ceiling Removal", shortName: "Popcorn ceilings", phase: 2, published: false, updatedAt: "2026-10-24" },
  { slug: "wallpaper-removal", name: "Wallpaper Removal", shortName: "Wallpaper removal", phase: 2, published: false, updatedAt: "2026-10-24" },
  { slug: "limewash", name: "Limewash", shortName: "Limewash", phase: 2, published: false, updatedAt: "2026-10-24" },
  { slug: "garage-floors", name: "Garage Floor Coatings", shortName: "Garage floors", phase: 2, published: false, updatedAt: "2026-10-24" },
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
