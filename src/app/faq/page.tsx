import { PageHeader } from "@/components/layout/PageHeader";
import { JsonLd } from "@/components/seo/JsonLd";
import { CtaBlock } from "@/components/sections/CtaBlock";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { PAGES } from "@/config/pages";
import { FAQS } from "@/data/faq";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Painting Questions, Answered",
  description:
    "How estimates work, how long painting takes, the best season for exteriors, rain, prep and repairs, lead-safe work, paint, warranty and payment, answered.",
  path: PAGES.faq.path,
});

export default function FaqPage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "FAQ", path: PAGES.faq.path },
  ];
  return (
    <>
      <PageHeader
        crumbs={crumbs}
        eyebrow="FAQ"
        title="Painting questions, answered"
        intro={["The questions homeowners ask us most, with the answer first. Don't see yours? Ask us when you request an estimate."]}
      />
      <div className="mx-auto max-w-7xl px-4 pb-20 md:px-8">
        <div className="max-w-4xl">
          <FaqAccordion faqs={FAQS} headingLevel="h2" />
        </div>
      </div>
      <CtaBlock source="faq" />
      <JsonLd items={[breadcrumbSchema(crumbs), faqSchema(FAQS)]} />
    </>
  );
}
