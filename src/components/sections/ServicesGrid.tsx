import Link from "next/link";
import { SceneImage } from "@/components/media/SceneImage";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { isLivePath, servicePath } from "@/config/pages";
import { SITE } from "@/config/site";
import { ADD_ONS } from "@/data/services";
import { servicePageList } from "@/data/service-pages";

type Props = { showHeading?: boolean };

/** The 4 launch services as cards, with add-ons mentioned underneath. */
export function ServicesGrid({ showHeading = true }: Props) {
  const services = servicePageList();
  return (
    <section aria-labelledby={showHeading ? "services-title" : undefined} className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
      {showHeading && (
        <SectionHeading
          id="services-title"
          eyebrow="Services"
          title={`What we paint on the ${SITE.regionName}`}
          intro={<p>Four things, done well, with a custom written quote for each job.</p>}
        />
      )}
      <ul className="mt-12 grid gap-8 sm:grid-cols-2">
        {services.map(({ service, page }) => {
          const href = servicePath(service.slug);
          const live = isLivePath(href);
          return (
            <li key={service.slug} className="group relative flex flex-col">
              <SceneImage scene={service.slug} ratio="3/2" />
              <h3 className="mt-5 font-display text-display-md text-forest">
                {live ? (
                  <Link href={href} className="after:absolute after:inset-0">
                    {service.name}
                  </Link>
                ) : (
                  service.name
                )}
              </h3>
              <p className="mt-2 max-w-prose">{page.cardSummary}</p>
              {live && (
                <span aria-hidden="true" className="mt-3 font-extrabold text-forest underline decoration-gold decoration-[3px] underline-offset-[6px] group-hover:decoration-forest">
                  See {service.shortName.toLowerCase()} →
                </span>
              )}
            </li>
          );
        })}
      </ul>
      <p className="mt-12 rounded-[var(--radius-sticker)] bg-cream-50 px-6 py-5 text-charcoal">
        <strong className="font-extrabold text-forest">Add to any job:</strong> {ADD_ONS.join(", ").toLowerCase()}.
      </p>
    </section>
  );
}
