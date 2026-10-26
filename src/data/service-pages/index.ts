import { publishedServices, type Service } from "@/data/services";
import type { ServicePage } from "@/data/types";
import cabinetPainting from "./cabinet-painting";
import commercialPainting from "./commercial-painting";
import customPainting from "./custom-painting";
import decksAndFencesPainting from "./decks-and-fences-painting";
import drywallPainting from "./drywall-painting";
import exteriorPainting from "./exterior-painting";
import hoaPainting from "./hoa-painting";
import interiorPainting from "./interior-painting";
import millworkPainting from "./millwork-painting";

/** Page copy for each launch service, keyed by slug. */
export const SERVICE_PAGES: Record<string, ServicePage> = Object.fromEntries(
  [
    commercialPainting,
    exteriorPainting,
    interiorPainting,
    customPainting,
    cabinetPainting,
    millworkPainting,
    drywallPainting,
    decksAndFencesPainting,
    hoaPainting,
  ].map((p) => [p.slug, p]),
);

export const getServicePage = (slug: string): ServicePage | undefined => SERVICE_PAGES[slug];

/** Published services that have page copy, in menu order. */
export function servicePageList(): { service: Service; page: ServicePage }[] {
  return publishedServices().flatMap((service) => {
    const page = SERVICE_PAGES[service.slug];
    return page ? [{ service, page }] : [];
  });
}
