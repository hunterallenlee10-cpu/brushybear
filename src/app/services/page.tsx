import { PageHeader } from "@/components/layout/PageHeader";
import { JsonLd } from "@/components/seo/JsonLd";
import { CtaBlock } from "@/components/sections/CtaBlock";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { PAGES } from "@/config/pages";
import { SITE } from "@/config/site";
import { cityList } from "@/data/cities";
import { breadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

const DESCRIPTION = `Interior and exterior painting, cabinet painting, and deck and fence staining in ${cityList()}. Every job gets a custom written quote.`;

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
        eyebrow="Services"
        title={`House painting services on the ${SITE.regionName}`}
        intro={[
          `We paint interiors, exteriors, kitchen cabinets, decks and fences for homes in ${cityList()}. Every job starts with a walkthrough and a custom written quote. No packages, no surprise line items.`,
        ]}
      />
      <div className="-mt-16">
        <ServicesGrid showHeading={false} />
      </div>
      <CtaBlock source="services-hub" />
      <JsonLd items={[breadcrumbSchema(crumbs)]} />
    </>
  );
}
