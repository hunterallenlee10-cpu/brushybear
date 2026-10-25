/**
 * Ballpark price ranges for the estimator. EVERY number in this file is a
 * starting guess for Eastside residential work in 2026 and must be checked
 * by Erik before launch. Change a number here and the estimator follows.
 *
 * How a range is built:
 *   size × rate (low and high), × stories (exterior only), × condition,
 *   then raised to the minimum job and rounded to the nearest $100.
 *
 * This is the only file allowed to hold dollar rates (the copy test bans
 * prices everywhere else).
 */

export type ProjectType = "interior" | "exterior" | "cabinets" | "deck" | "fence";
export type Condition = "good" | "fair" | "rough";
export type Stories = 1 | 2 | 3;

type Rate = {
  label: string;
  /** What the size input measures. */
  unit: { name: string; plural: string; min: number; max: number; step: number; default: number };
  /** Dollars per unit, low and high. */
  rate: [low: number, high: number];
  /** Smallest job we'd quote, low and high. */
  minimum: [low: number, high: number];
  /** Whether stories change the price. */
  usesStories: boolean;
  /** Service value in the lead form (lead-rules.ts). */
  formService: "interior" | "exterior" | "cabinets" | "deck-fence";
  /** What's in the number, in one line. */
  includes: string;
};

export const PRICING: Record<ProjectType, Rate> = {
  interior: {
    label: "Interior rooms",
    unit: { name: "room", plural: "rooms", min: 1, max: 15, step: 1, default: 3 },
    rate: [650, 1050], // TODO: Erik confirm (per average 12x12 room, walls + trim, two coats)
    minimum: [1200, 1800], // TODO: Erik confirm
    usesStories: false,
    formService: "interior",
    includes: "Walls and trim in average-size rooms, two coats, furniture moved and covered.",
  },
  exterior: {
    label: "Whole-house exterior",
    unit: { name: "sq ft of home", plural: "sq ft of home", min: 800, max: 5000, step: 100, default: 2400 },
    rate: [3.6, 5.8], // TODO: Erik confirm (per sq ft of finished floor area)
    minimum: [4500, 6500], // TODO: Erik confirm
    usesStories: true,
    formService: "exterior",
    includes: "Wash, scrape, spot-prime, caulk, two coats on siding and trim.",
  },
  cabinets: {
    label: "Kitchen cabinets",
    unit: { name: "door or drawer", plural: "doors and drawers", min: 10, max: 70, step: 1, default: 30 },
    rate: [140, 220], // TODO: Erik confirm (per door or drawer front, both sides of doors)
    minimum: [3000, 4200], // TODO: Erik confirm
    usesStories: false,
    formService: "cabinets",
    includes: "Degrease, sand, prime and spray a hard enamel; boxes brushed and rolled.",
  },
  deck: {
    label: "Deck staining",
    unit: { name: "sq ft of deck", plural: "sq ft of deck", min: 100, max: 1200, step: 25, default: 350 },
    rate: [3.25, 5.5], // TODO: Erik confirm (per sq ft of deck surface, rails included)
    minimum: [1200, 1700], // TODO: Erik confirm
    usesStories: false,
    formService: "deck-fence",
    includes: "Clean, brighten, light sanding where needed, one or two coats of stain.",
  },
  fence: {
    label: "Fence staining",
    unit: { name: "linear ft of fence", plural: "linear ft of fence", min: 25, max: 500, step: 5, default: 120 },
    rate: [9, 15], // TODO: Erik confirm (per linear ft, 6 ft tall, both sides)
    minimum: [900, 1300], // TODO: Erik confirm
    usesStories: false,
    formService: "deck-fence",
    includes: "Clean and stain both sides of a 6-foot fence.",
  },
};

/** Height adds ladder and staging time. Exterior only. */
export const STORY_FACTOR: Record<Stories, number> = {
  1: 0.9, // TODO: Erik confirm
  2: 1, // TODO: Erik confirm
  3: 1.25, // TODO: Erik confirm
};

/** More failing paint means more scraping, priming and repair. */
export const CONDITION: Record<Condition, { label: string; detail: string; factor: number }> = {
  good: { label: "Good", detail: "Faded or dated, little peeling", factor: 1 }, // TODO: Erik confirm
  fair: { label: "Some peeling", detail: "Peeling spots, cracked caulk", factor: 1.15 }, // TODO: Erik confirm
  rough: { label: "Rough", detail: "Lots of peeling, soft wood, moss", factor: 1.35 }, // TODO: Erik confirm
};

export type EstimateInput = { type: ProjectType; size: number; stories: Stories; condition: Condition };

const round100 = (n: number) => Math.round(n / 100) * 100;

/** The ballpark range, in whole dollars. */
export function ballpark({ type, size, stories, condition }: EstimateInput): { low: number; high: number } {
  const p = PRICING[type];
  const s = p.usesStories ? STORY_FACTOR[stories] : 1;
  const c = CONDITION[condition].factor;
  const low = Math.max(p.minimum[0], size * p.rate[0] * s * c);
  const high = Math.max(p.minimum[1], size * p.rate[1] * s * c);
  return { low: round100(low), high: round100(Math.max(high, low + 300)) };
}

export const formatUsd = (n: number) => `$${n.toLocaleString("en-US")}`;
