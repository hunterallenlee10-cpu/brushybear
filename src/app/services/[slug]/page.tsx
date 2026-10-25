import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Sticker } from "@/components/brand/Sticker";
import { ContentSections } from "@/components/content/ContentSections";
import { CityLinks } from "@/components/content/RelatedLinks";
import { PageHeader } from "@/components/layout/PageHeader";
import { SceneImage } from "@/components/media/SceneImage";
import { JsonLd } from "@/components/seo/JsonLd";
import { CtaBlock } from "@/components/sections/CtaBlock";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { RichText } from "@/components/ui/RichText";
import { estimateHref, PAGES, servicePath } from "@/config/pages";
import { getService } from "@/data/services";
import { getServicePage, servicePageList } from "@/data/service-pages";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { ServiceTimeline } from "@/components/content/ServiceTimeline";
import { ProjectsSection } from "@/components/proof/ProjectsSection";
import { ColorPreviewSection, EstimatorSection } from "@/components/sections/ToolSections";
import { CheckIcon } from "@/components/ui/Icons";
import type { ProjectType } from "@/config/pricing";

const ESTIMATOR_TYPE: Record<string, ProjectType> = {
  "interior-painting": "interior",
  "exterior-painting": "exterior",
  "cabinet-painting": "cabinets",
  "deck-and-fence-staining": "deck",
};

export function generateStaticParams() {
  return servicePageList().map(({ service }) => ({ slug: service.slug }));
}

function load(slug: string) {
  const service = getService(slug);
  const page = getServicePage(slug);
  if (!service || !page) notFound();
  return { service, page };
}

export async function generateMetadata({ params }: PageProps<"/services/[slug]">): Promise<Metadata> {
  const { page } = load((await params).slug);
  return pageMetadata({ title: page.title, description: page.metaDescription, path: servicePath(page.slug) , ownOgImage: true });
}

export default async function ServicePage({ params }: PageProps<"/services/[slug]">) {
  const { service, page } = load((await params).slug);
  const path = servicePath(service.slug);
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Services", path: PAGES.services.path },
    { name: service.name, path },
  ];

  return (
    <>
      <PageHeader crumbs={crumbs} eyebrow={page.eyebrow} title={page.h1} intro={page.intro} aside={<SceneImage scene={service.slug} ratio="4/3" preload />}>
        <div className="mt-8">
          <ButtonLink href={estimateHref()} event="estimate_cta" location={`service:${service.slug}`}>
            Get a Free Estimate
          </ButtonLink>
        </div>
      </PageHeader>

      <div className="mx-auto grid max-w-7xl gap-14 px-4 pb-16 md:px-8 lg:grid-cols-[1fr_22rem] lg:gap-16">
        <div className="min-w-0">
          <ContentSections sections={page.sections} />

          <section aria-labelledby="cost-title" className="mt-14">
            <h2 id="cost-title" className="font-display text-display-md text-forest">
              What affects the cost
            </h2>
            <p className="mt-4 text-lg">Every job gets its own written quote. These are the things that move the number:</p>
            <dl className="mt-6 grid gap-5 sm:grid-cols-2">
              {page.costFactors.map((c) => (
                <div key={c.factor} className="rounded-[var(--radius-sticker)] bg-cream-50 p-5">
                  <dt className="font-extrabold text-forest">{c.factor}</dt>
                  <dd className="mt-1.5">
                    <RichText text={c.detail} />
                  </dd>
                </div>
              ))}
            </dl>
          </section>

          <section aria-labelledby="addons-title" className="mt-14">
            <h2 id="addons-title" className="font-display text-display-md text-forest">
              Add-ons that pair well
            </h2>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2">
              {page.addOns.map((a) => (
                <li key={a.name} className="rounded-[var(--radius-sticker)] border-2 border-cream-200 p-5">
                  <p className="font-extrabold text-forest">{a.name}</p>
                  <p className="mt-1">
                    <RichText text={a.why} />
                  </p>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <aside className="lg:sticky lg:top-28 lg:self-start">
          <Sticker innerClassName="bg-cream-50 p-6">
            <h2 className="text-xl font-extrabold text-forest">What&apos;s included</h2>
            <ul className="mt-4 space-y-3">
              {page.included.map((item) => (
                <li key={item} className="flex gap-3">
                  <CheckIcon className="mt-1 size-5 shrink-0 text-forest" />
                  <span>
                    <RichText text={item} />
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <ButtonLink href={estimateHref()} event="estimate_cta" location={`service-aside:${service.slug}`} className="w-full">
                Get a Free Estimate
              </ButtonLink>
            </div>
          </Sticker>
        </aside>
      </div>

      <ServiceTimeline slug={service.slug} serviceName={service.name} />
      <EstimatorSection initialType={ESTIMATOR_TYPE[service.slug]} title={`What does ${service.name.toLowerCase()} cost? Get a ballpark.`} />
      {service.slug === "exterior-painting" && <ColorPreviewSection />}

      <section aria-labelledby="service-faq-title" className="mx-auto max-w-7xl px-4 py-14 md:px-8">
        <h2 id="service-faq-title" className="font-display text-display-md text-forest">
          {service.name} questions
        </h2>
        <div className="mt-8 max-w-4xl">
          <FaqAccordion faqs={page.faqs} />
        </div>
      </section>

      <ProjectsSection />
      <CityLinks serviceName={service.name} />

      <CtaBlock source={`service:${service.slug}`} preselect={service.slug} title={`Get a free ${service.name.toLowerCase()} estimate.`} />

      <JsonLd
        items={[
          serviceSchema({ path, name: service.name, description: page.metaDescription }),
          breadcrumbSchema(crumbs),
          faqSchema(page.faqs),
        ]}
      />
    </>
  );
}
