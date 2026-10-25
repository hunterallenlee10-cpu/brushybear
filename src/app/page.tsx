import { JsonLd } from "@/components/seo/JsonLd";
import { CtaBlock } from "@/components/sections/CtaBlock";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Problem } from "@/components/sections/Problem";
import { PromiseStack } from "@/components/sections/PromiseStack";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { Reviews } from "@/components/sections/Reviews";
import { ServiceArea } from "@/components/sections/ServiceArea";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { ColorPreviewSection, EstimatorSection } from "@/components/sections/ToolSections";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { PAGES } from "@/config/pages";
import { SITE } from "@/config/site";
import { cityList } from "@/data/cities";
import { featuredFaqs } from "@/data/faq";
import { faqSchema, webPageSchema, websiteSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

const TITLE = `House Painters on the ${SITE.regionName}, ${SITE.state}`;
const DESCRIPTION = `Brushy Bear Painters paints interiors, exteriors, cabinets and decks in ${cityList()}, ${SITE.state}. Get a free written estimate.`;

export const metadata = pageMetadata({ title: TITLE, description: DESCRIPTION, path: "/" });

/** Homepage, in the order from the brief. */
export default function HomePage() {
  const faqs = featuredFaqs();
  return (
    <>
      <Hero />
      <TrustStrip />
      <Problem />
      <PromiseStack />
      <ServicesGrid />
      <EstimatorSection />
      <ColorPreviewSection />
      <HowItWorks />
      <Reviews />
      <ServiceArea />

      <section aria-labelledby="faq-title" className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
          <div>
            <SectionHeading id="faq-title" eyebrow="Questions" title="Straight answers before you call." />
            <div className="mt-8">
              <ButtonLink href={PAGES.faq.path} variant="secondary">
                All questions
              </ButtonLink>
            </div>
          </div>
          <FaqAccordion faqs={faqs} />
        </div>
      </section>

      <CtaBlock source="home" />

      <JsonLd
        items={[
          websiteSchema(),
          webPageSchema({ path: "/", title: `${TITLE} | ${SITE.name}`, description: DESCRIPTION, dateModified: SITE.lastUpdated }),
          faqSchema(faqs),
        ]}
      />
    </>
  );
}
