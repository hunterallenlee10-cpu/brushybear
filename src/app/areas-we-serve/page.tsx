import Link from "next/link";
import { AreaMap } from "@/components/home/AreaMap";
import { PageHeader } from "@/components/layout/PageHeader";
import { JsonLd } from "@/components/seo/JsonLd";
import { CtaBlock } from "@/components/sections/CtaBlock";
import { ArrowIcon } from "@/components/ui/Icons";
import { cityPath, PAGES } from "@/config/pages";
import { SITE } from "@/config/site";
import { cityPageList } from "@/data/city-pages";
import { breadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Areas We Serve, Eastside & Seattle WA",
  description:
    "Brushy Bear Painters serves 23 cities: Bellevue, Kirkland, Redmond, Sammamish, Issaquah, Bothell, Woodinville, Renton, Seattle, Everett and more. Free estimates.",
  path: PAGES.areas.path,
});

export default function AreasPage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Areas We Serve", path: PAGES.areas.path },
  ];
  const list = cityPageList();
  return (
    <>
      <PageHeader
        crumbs={crumbs}
        eyebrow="Areas we serve"
        title="Painters for the Eastside and greater Seattle"
        intro={[
          `We paint homes, HOA communities and businesses in ${list.length} cities around Lake Washington and north to Everett. Pick your city to see what we look for in local homes, weather and HOA rules.`,
        ]}
        aside={
          <div className="mx-auto hidden w-full max-w-sm lg:block">
            <AreaMap />
          </div>
        }
      />
      <section aria-label="Cities" className="mx-auto max-w-7xl px-4 py-14 md:px-8 md:py-20">
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {list.map(({ city, page }) => (
            <li key={city.slug} className="relative rounded-[var(--radius-card)] bg-white p-6 shadow-card ring-1 ring-ink/5 transition-shadow hover:ring-pine">
              <h2 className="text-xl font-extrabold">
                <Link href={cityPath(city.slug)} className="after:absolute after:inset-0">
                  {city.name}, {SITE.state}
                </Link>
              </h2>
              <p className="mt-2 line-clamp-3 text-ink-soft">{page.metaDescription}</p>
              <span aria-hidden="true" className="mt-4 inline-flex items-center gap-1.5 font-bold text-pine">
                Painting in {city.name} <ArrowIcon />
              </span>
            </li>
          ))}
        </ul>
      </section>
      <CtaBlock source="areas" title="Not sure if we cover your street?" intro="Send your address and we'll let you know, and set up a free walkthrough if you're in our area." />
      <JsonLd items={[breadcrumbSchema(crumbs)]} />
    </>
  );
}
