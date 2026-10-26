import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ContentSections } from "@/components/content/ContentSections";
import { ServiceLinks } from "@/components/content/RelatedLinks";
import { PageHeader } from "@/components/layout/PageHeader";
import { JsonLd } from "@/components/seo/JsonLd";
import { CtaBlock } from "@/components/sections/CtaBlock";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { ServiceAreaMap } from "@/components/sections/ServiceAreaMap";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { ConfirmBadge } from "@/components/ui/ConfirmBadge";
import { cityPath, estimateHref, isLivePath } from "@/config/pages";
import { SITE } from "@/config/site";
import { getCity } from "@/data/cities";
import { cityPageList, getCityPage } from "@/data/city-pages";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return cityPageList().map(({ city }) => ({ city: city.slug }));
}

function load(slug: string) {
  const city = getCity(slug);
  const page = getCityPage(slug);
  if (!city || !page) notFound();
  return { city, page };
}

export async function generateMetadata({ params }: PageProps<"/painters/[city]">): Promise<Metadata> {
  const { page } = load((await params).city);
  return pageMetadata({ title: page.title, description: page.metaDescription, path: cityPath(page.slug) });
}

export default async function CityPage({ params }: PageProps<"/painters/[city]">) {
  const { city, page } = load((await params).city);
  const path = cityPath(city.slug);
  const crumbs = [
    { name: "Home", path: "/" },
    { name: `Painters in ${city.name}, ${SITE.state}`, path },
  ];
  const nearby = page.nearby.map((s) => getCity(s)).filter((c) => c !== undefined);

  return (
    <>
      <PageHeader
        crumbs={crumbs}
        eyebrow={page.eyebrow}
        title={page.h1}
        intro={page.intro}
        aside={
          <div className="mx-auto hidden w-full max-w-xs lg:block">
            <ServiceAreaMap />
          </div>
        }
      >
        <div className="mt-8">
          <ButtonLink href={estimateHref()} event="estimate_cta" location={`city:${city.slug}`}>
            Get a Free Estimate
          </ButtonLink>
        </div>
      </PageHeader>

      <div className="mx-auto max-w-7xl px-4 pb-16 md:px-8">
        <ContentSections sections={page.sections} className="max-w-3xl" />
      </div>

      <section aria-labelledby="hoods-title" className="mx-auto max-w-7xl px-4 pb-16 md:px-8">
        <h2 id="hoods-title" className="font-display text-display-md text-forest">
          Neighborhoods we serve in {city.name}
        </h2>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {page.neighborhoods.map((n) => (
            <li key={n.name} className="rounded-[var(--radius-sticker)] border-2 border-cream-200 bg-white p-5">
              <p className="font-extrabold text-forest">
                {n.name}
                <ConfirmBadge note={n.confirm} />
              </p>
              {n.note && <p className="mt-1 text-[1rem] text-charcoal-soft">{n.note}</p>}
            </li>
          ))}
        </ul>
      </section>

      <ServiceLinks cityName={city.name} />

      <section aria-labelledby="city-faq-title" className="mx-auto max-w-7xl px-4 py-14 md:px-8">
        <h2 id="city-faq-title" className="font-display text-display-md text-forest">
          Painting in {city.name}: common questions
        </h2>
        <div className="mt-8 max-w-4xl">
          <FaqAccordion faqs={page.faqs} />
        </div>
        {nearby.length > 0 && (
          <p className="mt-10 text-lg">
            <span className="font-extrabold text-forest">Nearby: </span>
            {nearby.map((c, i) => {
              const href = cityPath(c.slug);
              return (
                <span key={c.slug}>
                  {i > 0 && " · "}
                  {isLivePath(href) ? (
                    <Link href={href} className="font-semibold text-forest underline decoration-gold decoration-2 underline-offset-4">
                      Painters in {c.name}
                    </Link>
                  ) : (
                    `Painters in ${c.name}`
                  )}
                </span>
              );
            })}
          </p>
        )}
      </section>

      <CtaBlock source={`city:${city.slug}`} title={`Get a free estimate in ${city.name}.`} />

      <JsonLd items={[breadcrumbSchema(crumbs), faqSchema(page.faqs)]} />
    </>
  );
}
