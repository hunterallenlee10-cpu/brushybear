import Link from "next/link";
import { cityPath, isLivePath, servicePath } from "@/config/pages";
import { SITE } from "@/config/site";
import { publishedCities } from "@/data/cities";
import { servicePageList } from "@/data/service-pages";

function PillList({ items }: { items: { label: string; href: string }[] }) {
  return (
    <ul className="mt-6 flex flex-wrap gap-3">
      {items.map((i) => (
        <li key={i.href}>
          {isLivePath(i.href) ? (
            <Link href={i.href} className="flex min-h-12 items-center rounded-full border-2 border-forest bg-white px-5 font-extrabold text-forest hover:bg-forest hover:text-cream">
              {i.label}
            </Link>
          ) : (
            <span className="flex min-h-12 items-center rounded-full border-2 border-cream-200 px-5 font-extrabold text-forest">{i.label}</span>
          )}
        </li>
      ))}
    </ul>
  );
}

/** Every service page links to all 5 city pages. */
export function CityLinks({ serviceName }: { serviceName: string }) {
  return (
    <section aria-labelledby="city-links-title" className="mx-auto max-w-7xl px-4 py-14 md:px-8">
      <h2 id="city-links-title" className="font-display text-display-md text-forest">
        {serviceName} near you
      </h2>
      <p className="mt-3 max-w-2xl">We paint homes across these {SITE.regionName} cities. See what we know about painting in yours.</p>
      <PillList items={publishedCities().map((c) => ({ label: `Painters in ${c.name}, ${SITE.state}`, href: cityPath(c.slug) }))} />
    </section>
  );
}

/** Every city page links to all 4 service pages. */
export function ServiceLinks({ cityName }: { cityName: string }) {
  return (
    <section aria-labelledby="service-links-title" className="bg-cream-50">
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-8">
        <h2 id="service-links-title" className="font-display text-display-md text-forest">
          What we paint in {cityName}
        </h2>
        <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {servicePageList().map(({ service, page }) => {
            const href = servicePath(service.slug);
            const live = isLivePath(href);
            return (
              <li key={service.slug} className="relative rounded-[var(--radius-sticker)] border-2 border-cream-200 bg-white p-6 hover:border-forest">
                <h3 className="text-xl font-extrabold text-forest">
                  {live ? (
                    <Link href={href} className="after:absolute after:inset-0">
                      {service.name}
                    </Link>
                  ) : (
                    service.name
                  )}
                </h3>
                <p className="mt-2 text-[1rem]">{page.cardSummary}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
