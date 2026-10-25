import type { StaticImageData } from "next/image";

/**
 * Before/after photos of real Brushy Bear jobs only. `source` must be
 * "real-job": AI images, stock photos and other companies' work can never
 * go here.
 *
 * To add a job: put the photos in src/assets/gallery/, import them below,
 * and add an entry. The gallery and the homepage before/after slider turn
 * on by themselves.
 */
export type GalleryItem = {
  id: string;
  source: "real-job";
  service: "interior-painting" | "exterior-painting" | "cabinet-painting" | "deck-and-fence-staining";
  /** City slug from cities.ts, e.g. "kirkland-wa". */
  city: string;
  before: StaticImageData;
  after: StaticImageData;
  /** What's actually in the photo, plus the city. */
  beforeAlt: string;
  afterAlt: string;
  caption: string;
  /** ISO date the job finished. */
  date: string;
};

export const GALLERY: GalleryItem[] = [];

/** The gallery appears in search once there are this many real jobs. */
export const GALLERY_INDEX_THRESHOLD = 6;

/**
 * Labeled stand-ins shown until real jobs exist. They name the kind of job,
 * never a city or customer, and every one says it's a placeholder.
 */
export const PROJECT_SLOTS = [
  { id: "slot-exterior", service: "exterior-painting", label: "Exterior repaint: real job photos go here" },
  { id: "slot-cabinets", service: "cabinet-painting", label: "Kitchen cabinets: real job photos go here" },
  { id: "slot-deck", service: "deck-and-fence-staining", label: "Cedar deck restain: real job photos go here" },
  { id: "slot-interior", service: "interior-painting", label: "Living room repaint: real job photos go here" },
] as const;
