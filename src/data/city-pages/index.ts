import { publishedCities, type City } from "@/data/cities";
import type { CityPage } from "@/data/types";
import bellevue from "./bellevue-wa";
import issaquah from "./issaquah-wa";
import kirkland from "./kirkland-wa";
import redmond from "./redmond-wa";
import sammamish from "./sammamish-wa";

/** Page copy for each Phase 1 city, keyed by slug. */
export const CITY_PAGES: Record<string, CityPage> = Object.fromEntries(
  [bellevue, kirkland, redmond, sammamish, issaquah].map((p) => [p.slug, p]),
);

export const getCityPage = (slug: string): CityPage | undefined => CITY_PAGES[slug];

/** Published cities that have page copy. */
export function cityPageList(): { city: City; page: CityPage }[] {
  return publishedCities().flatMap((city) => {
    const page = CITY_PAGES[city.slug];
    return page ? [{ city, page }] : [];
  });
}
