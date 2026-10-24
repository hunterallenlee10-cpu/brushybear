import { SITE, type Season } from "@/config/site";

/** The hero's seasonal line, switched by SITE.season. */
const LINES: Record<Season, string> = {
  winter: "Now booking interiors and cabinets.",
  spring: "Summer exterior dates are filling. Book your walkthrough now.",
  summer: "Exterior season is here. Ask about open dates.",
  fall: "Now booking fall interiors and cabinets.",
};

export const seasonalLine = () => LINES[SITE.season];
