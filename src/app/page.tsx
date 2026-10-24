import { BearMascot } from "@/components/brand/BearMascot";
import { JsonLd } from "@/components/seo/JsonLd";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { estimateHref } from "@/config/pages";
import { phoneHref, SITE } from "@/config/site";
import { cityList } from "@/data/cities";
import { seasonalLine } from "@/data/season";
import { isSet } from "@/lib/placeholders";
import { webPageSchema, websiteSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

const TITLE = `House Painters on the ${SITE.regionName}, ${SITE.state}`;
const DESCRIPTION = `Brushy Bear Painters paints interiors, exteriors, cabinets and decks in ${cityList()}, ${SITE.state}. Get a free written estimate.`;

export const metadata = pageMetadata({ title: TITLE, description: DESCRIPTION, path: "/" });

/**
 * Phase 1 homepage: the hero only. The full 10-section homepage is built in
 * Phase 2.
 */
export default function HomePage() {
  return (
    <>
      <section className="mx-auto grid max-w-7xl items-center gap-10 px-4 pt-10 pb-16 md:grid-cols-[1.25fr_1fr] md:px-8 md:pt-20 md:pb-24">
        <div>
          <p className="text-sm font-extrabold uppercase tracking-[0.14em] text-forest">{seasonalLine()}</p>
          <h1 className="mt-4 font-display text-display-xl text-forest">
            {SITE.regionName} house painting <span className="text-charcoal">that holds up to the rain.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg md:text-xl">
            Interiors, exteriors, cabinets and decks in {cityList()}. One point of contact, a photo update every
            day, and a clean house every evening.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-5">
            <ButtonLink href={estimateHref()} event="estimate_cta" location="hero">
              Get a Free Estimate
            </ButtonLink>
            {isSet(SITE.phone) && (
              <a href={phoneHref(SITE.phone, "tel")} data-event="call_click" data-location="hero" className="font-bold text-forest underline decoration-gold decoration-[3px] underline-offset-[6px]">
                or call {SITE.phone}
              </a>
            )}
          </div>
        </div>
        <div className="mx-auto w-64 md:w-full md:max-w-sm">
          <BearMascot pose="brush" sizes="(min-width: 768px) 384px, 256px" className="h-auto w-full drop-shadow-[0_18px_24px_rgb(43_43_43/0.28)]" preload />
        </div>
      </section>

      <section id="estimate" className="bg-cream-50 px-4 py-16 text-center md:px-8">
        <h2 className="font-display text-display-md text-forest">Get a free estimate</h2>
        <p className="mx-auto mt-3 max-w-md text-charcoal-soft">The estimate form arrives in build Phase 3.</p>
      </section>

      <JsonLd
        items={[
          websiteSchema(),
          webPageSchema({ path: "/", title: `${TITLE} | ${SITE.name}`, description: DESCRIPTION, dateModified: SITE.lastUpdated }),
        ]}
      />
    </>
  );
}
