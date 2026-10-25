import { ArticleCards } from "@/components/content/ArticleCards";
import { ProjectsSection } from "@/components/proof/ProjectsSection";
import { ReviewsSection } from "@/components/proof/ReviewsSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { CtaBlock } from "@/components/sections/CtaBlock";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { Hero, MobileQuote } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Problem } from "@/components/sections/Problem";
import { PromiseStack } from "@/components/sections/PromiseStack";
import { ServiceArea } from "@/components/sections/ServiceArea";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { ColorPreviewSection, EstimatorSection } from "@/components/sections/ToolSections";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { PAGES } from "@/config/pages";
import { SITE } from "@/config/site";
import { cityList } from "@/data/cities";
import { featuredFaqs } from "@/data/faq";
import { faqSchema, webPageSchema, websiteSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

const TITLE = `House Painters on the ${SITE.regionName}, ${SITE.state}`;
const DESCRIPTION = `Brushy Bear Painters paints interiors, exteriors, cabinets and decks in ${cityList()}, ${SITE.state}. Get a free written estimate.`;

export const metadata = pageMetadata({ title: TITLE, description: DESCRIPTION, path: "/", ownOgImage: true });

/** Homepage, in the order from the upgrade brief (UPGRADE_PLAN.md section 5). */
export default function HomePage() {
  const faqs = featuredFaqs();
  return (
    <>
      <Hero />
      <TrustStrip />
      <MobileQuote />
      <Problem />
      <PromiseStack />
      <ServicesGrid />
      <EstimatorSection />
      <ColorPreviewSection />
      <ProjectsSection />
      <HowItWorks />
      <ReviewsSection />
      <ServiceArea />

      <section aria-labelledby="faq-title" className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
          <div>
            <h2 id="faq-title" className="font-display text-display-lg text-forest">
              Straight answers before you call.
            </h2>
            <div className="mt-8">
              <ButtonLink href={PAGES.faq.path} variant="secondary">
                All questions
              </ButtonLink>
            </div>
          </div>
          <FaqAccordion faqs={faqs} />
        </div>
      </section>

      <ArticleCards />
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
