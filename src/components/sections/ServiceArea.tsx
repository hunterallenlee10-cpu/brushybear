import Link from "next/link";
import { ServiceAreaMap } from "@/components/sections/ServiceAreaMap";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { cityPath, isLivePath } from "@/config/pages";
import { SITE } from "@/config/site";
import { cityList, publishedCities } from "@/data/cities";
import { SERVICE_AREA } from "@/data/home";

/** The 5 Phase 1 cities, linked, with a drawn map. */
export function ServiceArea() {
  return (
    <section id="service-area" aria-labelledby="area-title" className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
      <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
        <div>
          <SectionHeading id="area-title" eyebrow={SERVICE_AREA.eyebrow} title={`Painters for ${cityList()}`} intro={<p>{SERVICE_AREA.intro}</p>} />
          <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {publishedCities().map((c) => {
              const href = cityPath(c.slug);
              return (
                <li key={c.slug}>
                  {isLivePath(href) ? (
                    <Link href={href} className="flex min-h-12 items-center rounded-full border-2 border-forest px-4 font-extrabold text-forest hover:bg-forest hover:text-cream">
                      {c.name}, {SITE.state}
                    </Link>
                  ) : (
                    <span className="flex min-h-12 items-center rounded-full border-2 border-cream-200 px-4 font-extrabold text-forest">
                      {c.name}, {SITE.state}
                    </span>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="mx-auto w-full max-w-md">
          <ServiceAreaMap />
        </div>
      </div>
    </section>
  );
}
