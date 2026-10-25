/**
 * Eight exterior palettes that suit Eastside houses: firs, gray skies and
 * cedar. Named by color, never by paint brand (we don't name brands until
 * Erik confirms what we use). Screen colors are approximate; real samples
 * come to the walkthrough.
 */
export type Palette = {
  id: string;
  name: string;
  body: string;
  trim: string;
  door: string;
  /** Plain words for screen readers and the lead record. */
  words: { body: string; trim: string; door: string };
};

export const PALETTES: Palette[] = [
  { id: "forest-cream", name: "Forest and Cream", body: "#33503f", trim: "#f1eadb", door: "#94603a", words: { body: "deep forest green", trim: "cream", door: "natural wood" } },
  { id: "fog-white", name: "Fog and White", body: "#9ba5a4", trim: "#f5f4ef", door: "#1f3b4d", words: { body: "fog gray", trim: "white", door: "navy" } },
  { id: "charcoal-cedar", name: "Charcoal and Cedar", body: "#3d4042", trim: "#ebe9e3", door: "#a8693c", words: { body: "charcoal", trim: "soft white", door: "cedar" } },
  { id: "sage-ivory", name: "Sage and Ivory", body: "#8f9e87", trim: "#f3efe2", door: "#6c2f2a", words: { body: "sage green", trim: "ivory", door: "deep red" } },
  { id: "navy-white", name: "Harbor Navy", body: "#2d3f52", trim: "#f6f5f0", door: "#c48d33", words: { body: "navy blue", trim: "white", door: "mustard" } },
  { id: "greige-black", name: "Greige and Black", body: "#b9ad9a", trim: "#2f2f2f", door: "#2f2f2f", words: { body: "warm greige", trim: "black", door: "black" } },
  { id: "moss-tan", name: "Moss and Tan", body: "#5f6c47", trim: "#d9ccb0", door: "#7c4027", words: { body: "moss green", trim: "tan", door: "brick red" } },
  { id: "white-black", name: "Farmhouse White", body: "#efede6", trim: "#2f2f2f", door: "#94603a", words: { body: "white", trim: "black", door: "natural wood" } },
];
