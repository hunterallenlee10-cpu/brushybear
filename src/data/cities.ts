/**
 * Service-area cities. Phase 1 cities get pages (copy arrives in build
 * Phase 5, after the lane decision). Phase 2 and 3 cities are listed for
 * planning only: no pages, no copy, not in structured data.
 */
export type City = {
  slug: string;
  name: string;
  /** Business rollout phase from the Master Plan. */
  phase: 1 | 2 | 3;
  published: boolean;
  /** Used as `sameAs` in structured data so search engines know which city. */
  wikipediaUrl: string;
  updatedAt: string;
};

const wiki = (page: string) => `https://en.wikipedia.org/wiki/${page}`;

export const CITIES: City[] = [
  { slug: "bellevue-wa", name: "Bellevue", phase: 1, published: true, wikipediaUrl: wiki("Bellevue,_Washington"), updatedAt: "2026-10-24" },
  { slug: "kirkland-wa", name: "Kirkland", phase: 1, published: true, wikipediaUrl: wiki("Kirkland,_Washington"), updatedAt: "2026-10-24" },
  { slug: "redmond-wa", name: "Redmond", phase: 1, published: true, wikipediaUrl: wiki("Redmond,_Washington"), updatedAt: "2026-10-24" },
  { slug: "sammamish-wa", name: "Sammamish", phase: 1, published: true, wikipediaUrl: wiki("Sammamish,_Washington"), updatedAt: "2026-10-24" },
  { slug: "issaquah-wa", name: "Issaquah", phase: 1, published: true, wikipediaUrl: wiki("Issaquah,_Washington"), updatedAt: "2026-10-24" },
  // Phase 2
  { slug: "bothell-wa", name: "Bothell", phase: 2, published: false, wikipediaUrl: wiki("Bothell,_Washington"), updatedAt: "2026-10-24" },
  { slug: "woodinville-wa", name: "Woodinville", phase: 2, published: false, wikipediaUrl: wiki("Woodinville,_Washington"), updatedAt: "2026-10-24" },
  { slug: "mercer-island-wa", name: "Mercer Island", phase: 2, published: false, wikipediaUrl: wiki("Mercer_Island,_Washington"), updatedAt: "2026-10-24" },
  { slug: "renton-wa", name: "Renton", phase: 2, published: false, wikipediaUrl: wiki("Renton,_Washington"), updatedAt: "2026-10-24" },
  { slug: "newcastle-wa", name: "Newcastle", phase: 2, published: false, wikipediaUrl: wiki("Newcastle,_Washington"), updatedAt: "2026-10-24" },
  // Phase 3
  { slug: "seattle-wa", name: "Seattle", phase: 3, published: false, wikipediaUrl: wiki("Seattle"), updatedAt: "2026-10-24" },
  { slug: "shoreline-wa", name: "Shoreline", phase: 3, published: false, wikipediaUrl: wiki("Shoreline,_Washington"), updatedAt: "2026-10-24" },
  { slug: "lynnwood-wa", name: "Lynnwood", phase: 3, published: false, wikipediaUrl: wiki("Lynnwood,_Washington"), updatedAt: "2026-10-24" },
  { slug: "edmonds-wa", name: "Edmonds", phase: 3, published: false, wikipediaUrl: wiki("Edmonds,_Washington"), updatedAt: "2026-10-24" },
  { slug: "everett-wa", name: "Everett", phase: 3, published: false, wikipediaUrl: wiki("Everett,_Washington"), updatedAt: "2026-10-24" },
  { slug: "mill-creek-wa", name: "Mill Creek", phase: 3, published: false, wikipediaUrl: wiki("Mill_Creek,_Washington"), updatedAt: "2026-10-24" },
  { slug: "snohomish-wa", name: "Snohomish", phase: 3, published: false, wikipediaUrl: wiki("Snohomish,_Washington"), updatedAt: "2026-10-24" },
  { slug: "snoqualmie-wa", name: "Snoqualmie", phase: 3, published: false, wikipediaUrl: wiki("Snoqualmie,_Washington"), updatedAt: "2026-10-24" },
];

export const publishedCities = () => CITIES.filter((c) => c.published);
export const getCity = (slug: string) => CITIES.find((c) => c.slug === slug && c.published);

/** "Bellevue, Kirkland, Redmond, Sammamish and Issaquah" */
export function cityList(cities = publishedCities()): string {
  const names = cities.map((c) => c.name);
  return names.length < 2 ? names.join("") : `${names.slice(0, -1).join(", ")} and ${names.at(-1)}`;
}
