import { HomeHero } from "@/components/home/HomeHero";
import {
  AboutBand,
  AreaBand,
  GetStarted,
  LocalServices,
  ProcessSteps,
  ServiceCards,
  Updates,
  WhyUs,
  WorkBand,
} from "@/components/home/HomeSections";
import { PromiseBand } from "@/components/home/PromiseBand";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { JsonLd } from "@/components/seo/JsonLd";
import { Pill } from "@/components/ui/Pill";
import { Title } from "@/components/ui/Title";
import { PAGES } from "@/config/pages";
import { SITE } from "@/config/site";
import { featuredFaqs } from "@/data/faq";
import { faqSchema, webPageSchema, websiteSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

const TITLE = "House Painters, Eastside & Seattle WA";
const DESCRIPTION =
  "Interior, exterior, cabinet, millwork, drywall, deck, HOA and commercial painting in Bellevue, Kirkland, Redmond, Seattle and 19 more cities. Free estimates.";

export const metadata = pageMetadata({ title: TITLE, description: DESCRIPTION, path: "/" });

/**
 * Home page: Panda Exteriors' layout, carrying EA Pro Painters' sections and services.
 */
export default function HomePage() {
  const faqs = featuredFaqs();
  return (
    <>
      <HomeHero />
      <LocalServices />
      <PromiseBand />
      <ServiceCards />
      <WorkBand />
      <ProcessSteps />
      <AreaBand />
      <WhyUs />
      <GetStarted />
      <Updates />

      <section aria-labelledby="faq-title" className="bg-mist py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 md:px-8 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
          <div>
            <Title id="faq-title" align="left" eyebrow="FAQs" title="Questions homeowners ask us" />
            <div className="mt-8">
              <Pill href={PAGES.faq.path} variant="outline">
                All FAQs
              </Pill>
            </div>
          </div>
          <FaqAccordion faqs={faqs} />
        </div>
      </section>

      <AboutBand />

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
