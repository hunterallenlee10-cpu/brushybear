import Link from "next/link";
import { PageHeader } from "@/components/layout/PageHeader";
import { JsonLd } from "@/components/seo/JsonLd";
import { CtaBlock } from "@/components/sections/CtaBlock";
import { ServiceAreaMap } from "@/components/sections/ServiceAreaMap";
import { ArrowIcon } from "@/components/ui/Icons";
import { cityPath, PAGES } from "@/config/pages";
import { SITE } from "@/config/site";
import { cityList } from "@/data/cities";
import { cityPageList } from "@/data/city-pages";
import { SERVICE_AREA } from "@/data/home";
import { breadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

const TITLE = `${SITE.regionName} Painting Service Areas`;
const DESCRIPTION = `House painting in ${cityList()}, ${SITE.state}. What we plan around in each city: rain, shade, moss, cedar siding and HOA rules.`;

export const metadata = pageMetadata({ title: TITLE, description: DESCRIPTION, path: PAGES.serviceAreas.path , ownOgImage: true });

/** The five cities on one map, each linking to its own local page. */
export default function ServiceAreasPage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Service Areas", path: PAGES.serviceAreas.path },
  ];
  const cities = cityPageList();
  return (
    <>
      <PageHeader
        crumbs={crumbs}
        title={`${SITE.regionName} house painting in ${cityList()}`}
        intro={[SERVICE_AREA.intro]}
        aside={
          <div className="mx-auto w-full max-w-sm">
            <ServiceAreaMap />
          </div>
        }
      />

      <section aria-labelledby="cities-title" className="mx-auto max-w-7xl px-4 pb-20 md:px-8">
        <h2 id="cities-title" className="font-display text-display-md text-forest">
          Pick your city
        </h2>
        <ul className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {cities.map(({ city, page }) => (
            <li key={city.slug}>
              <Link
                href={cityPath(city.slug)}
                className="group flex h-full flex-col justify-between gap-6 rounded-[var(--radius-sticker)] border-2 border-cream-200 bg-cream-50 p-6 transition-colors hover:border-forest"
              >
                <span>
                  <span className="block font-display text-3xl text-forest">
                    {city.name}, {SITE.state}
                  </span>
                  <span className="mt-2 block text-charcoal-soft">{page.h1}</span>
                </span>
                <span className="inline-flex items-center gap-2 font-extrabold text-forest">
                  Painting in {city.name} <ArrowIcon className="size-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <CtaBlock source="service-areas" />
      <JsonLd items={[breadcrumbSchema(crumbs)]} />
    </>
  );
}
