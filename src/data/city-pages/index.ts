import { publishedCities, type City } from "@/data/cities";
import type { CityPage } from "@/data/types";
import bellevue from "./bellevue-wa";
import bothell from "./bothell-wa";
import clydeHill from "./clyde-hill-wa";
import edmonds from "./edmonds-wa";
import everett from "./everett-wa";
import issaquah from "./issaquah-wa";
import juanita from "./juanita-wa";
import kenmore from "./kenmore-wa";
import kirkland from "./kirkland-wa";
import lynnwood from "./lynnwood-wa";
import medina from "./medina-wa";
import mercerIsland from "./mercer-island-wa";
import millCreek from "./mill-creek-wa";
import monroe from "./monroe-wa";
import newcastle from "./newcastle-wa";
import redmond from "./redmond-wa";
import renton from "./renton-wa";
import sammamish from "./sammamish-wa";
import seattle from "./seattle-wa";
import shoreline from "./shoreline-wa";
import snohomish from "./snohomish-wa";
import snoqualmie from "./snoqualmie-wa";
import woodinville from "./woodinville-wa";

/** Page copy for every service-area city, keyed by slug. */
export const CITY_PAGES: Record<string, CityPage> = Object.fromEntries(
  [
    bellevue,
    bothell,
    clydeHill,
    edmonds,
    everett,
    issaquah,
    juanita,
    kenmore,
    kirkland,
    lynnwood,
    medina,
    mercerIsland,
    millCreek,
    monroe,
    newcastle,
    redmond,
    renton,
    sammamish,
    seattle,
    shoreline,
    snohomish,
    snoqualmie,
    woodinville,
  ].map((p) => [p.slug, p]),
);

export const getCityPage = (slug: string): CityPage | undefined =>
  CITY_PAGES[slug];

/** Published cities that have page copy, A to Z. */
export function cityPageList(): { city: City; page: CityPage }[] {
  return publishedCities().flatMap((city) => {
    const page = CITY_PAGES[city.slug];
    return page ? [{ city, page }] : [];
  });
}
