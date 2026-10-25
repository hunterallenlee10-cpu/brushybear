import { PageHeader } from "@/components/layout/PageHeader";
import { JsonLd } from "@/components/seo/JsonLd";
import { CtaBlock } from "@/components/sections/CtaBlock";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { EstimatorSection } from "@/components/sections/ToolSections";
import { PAGES } from "@/config/pages";
import { SITE } from "@/config/site";
import { cityList } from "@/data/cities";
import { breadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

const DESCRIPTION = `Interior, exterior, cabinet painting and deck staining in ${cityList()}. A free, itemized written quote for every job.`;

export const metadata = pageMetadata({
  title: `House Painting Services, ${SITE.regionName} ${SITE.state}`,
  description: DESCRIPTION,
  path: PAGES.services.path,
});

export default function ServicesHub() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Services", path: PAGES.services.path },
  ];
  return (
    <>
      <PageHeader
        crumbs={crumbs}
        title={`House painting services on the ${SITE.regionName}`}
        intro={[
          `We paint interiors, exteriors, kitchen cabinets, decks and fences for homes in ${cityList()}. Every job starts with a walkthrough and a custom written quote. No packages, no surprise line items.`,
        ]}
      />
      <div className="-mt-16">
        <ServicesGrid showHeading={false} />
      </div>
      <EstimatorSection />
      <CtaBlock source="services-hub" />
      <JsonLd items={[breadcrumbSchema(crumbs)]} />
    </>
  );
}
