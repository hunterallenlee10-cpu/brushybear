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
            <Link href={i.href} className="flex min-h-10 items-center rounded-full border border-line bg-white px-4 font-bold text-ink hover:border-pine hover:bg-pine hover:text-white">
              {i.label}
            </Link>
          ) : (
            <span className="flex min-h-12 items-center rounded-full border border-line px-5 font-extrabold text-pine">{i.label}</span>
          )}
        </li>
      ))}
    </ul>
  );
}

/** Every service page links to every city page. */
export function CityLinks({ serviceName }: { serviceName: string }) {
  return (
    <section aria-labelledby="city-links-title" className="mx-auto max-w-7xl px-4 py-14 md:px-8">
      <h2 id="city-links-title" className="text-display-md text-ink">
        {serviceName} near you
      </h2>
      <p className="mt-3 max-w-2xl">We paint homes across these Eastside and Seattle-area cities. See what we know about painting in yours.</p>
      <PillList items={publishedCities().map((c) => ({ label: `${c.name}, ${SITE.state}`, href: cityPath(c.slug) }))} />
    </section>
  );
}

/** Every city page links to every service page. */
export function ServiceLinks({ cityName }: { cityName: string }) {
  return (
    <section aria-labelledby="service-links-title" className="bg-mist">
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-8">
        <h2 id="service-links-title" className="text-display-md text-ink">
          What we paint in {cityName}
        </h2>
        <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {servicePageList().map(({ service, page }) => {
            const href = servicePath(service.slug);
            const live = isLivePath(href);
            return (
              <li key={service.slug} className="relative rounded-[var(--radius-card)] border border-line bg-white p-6 hover:border-pine">
                <h3 className="text-xl font-extrabold text-pine">
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
