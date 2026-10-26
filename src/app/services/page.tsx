import { BearMascot } from "@/components/brand/BearMascot";
import { ServiceCards } from "@/components/home/HomeSections";
import { PageHeader } from "@/components/layout/PageHeader";
import { JsonLd } from "@/components/seo/JsonLd";
import { CtaBlock } from "@/components/sections/CtaBlock";
import { PAGES } from "@/config/pages";
import { breadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

const DESCRIPTION =
  "Commercial, exterior, interior, custom, cabinet, millwork, drywall, deck and fence, and HOA painting across the Eastside and Seattle. Free written estimates.";

export const metadata = pageMetadata({
  title: "Painting Services, Eastside & Seattle WA",
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
        title="House painting services on the Eastside and in Seattle"
        intro={[
          "We paint homes inside and out, plus cabinets, trim and millwork, drywall, decks and fences, custom finishes, HOA communities and commercial spaces. Every job starts with a walkthrough and a written, itemized quote.",
        ]}
        aside={
          <div className="mx-auto hidden w-52 lg:block xl:w-60">
            <BearMascot pose="roller-shoulder" sizes="240px" preload className="h-auto w-full drop-shadow-[0_14px_24px_rgb(0_0_0/0.45)]" />
          </div>
        }
      />
      <ServiceCards heading={false} />
      <CtaBlock source="services-hub" />
      <JsonLd items={[breadcrumbSchema(crumbs)]} />
    </>
  );
}
