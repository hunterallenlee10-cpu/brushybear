import { PageHeader } from "@/components/layout/PageHeader";
import { JsonLd } from "@/components/seo/JsonLd";
import { CtaBlock } from "@/components/sections/CtaBlock";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { ConfirmBadge } from "@/components/ui/ConfirmBadge";
import { CameraIcon, ClockIcon, HouseIcon, KeyIcon } from "@/components/ui/Icons";
import { estimateHref, PAGES } from "@/config/pages";
import { SITE } from "@/config/site";
import { cityList } from "@/data/cities";
import { breadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Painting for Realtors & Managers",
  description: `Pre-listing paint and rental turnovers in ${cityList()}. Written quote in 24 hours, daily photo updates, one contact.`,
  path: PAGES.realtors.path,
});

const CONFIRM = "Erik: confirm we offer this for realtors and property managers";

const OFFERS = [
  {
    Icon: HouseIcon,
    title: "Pre-listing paint",
    body: "Fresh neutral walls, trim and front doors before photos. Tell us the listing date and we'll say straight away if we can make it.",
  },
  {
    Icon: KeyIcon,
    title: "Rental turnovers",
    body: "Walls, trim and touch-ups between tenants. Lockbox access is fine; you don't need to be there.",
  },
  {
    Icon: CameraIcon,
    title: "Photos instead of site visits",
    body: "A photo update at the end of each day, so you can check progress from the office or another showing.",
  },
  {
    Icon: ClockIcon,
    title: "Fast written quotes",
    body: "A written, itemized quote within 24 hours of the walkthrough, ready to send to a seller or an owner.",
  },
];

/** For agents and managers: speed, access and photos. */
export default function RealtorsPage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Realtors & Property Managers", path: PAGES.realtors.path },
  ];
  return (
    <>
      <PageHeader
        crumbs={crumbs}
        title={`House painting for ${SITE.regionName} realtors and property managers`}
        intro={[
          `You need paint done on a date, without babysitting the job. We work in ${cityList()}, send a photo update every day, and give you one person to call.`,
        ]}
      >
        <div className="mt-8">
          <ButtonLink href={estimateHref()} event="estimate_cta" location="realtors">
            Get a Free Estimate
          </ButtonLink>
        </div>
      </PageHeader>
      <section aria-label="What we offer" className="mx-auto max-w-7xl px-4 pb-16 md:px-8">
        <ul className="grid gap-6 sm:grid-cols-2">
          {OFFERS.map(({ Icon, title, body }) => (
            <li key={title} className="rounded-[1.5rem] border-2 border-cream-200 bg-cream-50 p-6">
              <span className="flex size-12 items-center justify-center rounded-full bg-forest text-cream">
                <Icon className="size-6" />
              </span>
              <h2 className="mt-4 text-xl font-extrabold text-forest">
                {title}
                <ConfirmBadge note={CONFIRM} />
              </h2>
              <p className="mt-2">{body}</p>
            </li>
          ))}
        </ul>
        <p className="mt-8 max-w-3xl text-lg">
          Managing several properties? Ask about scheduling recurring turnovers. Every job still gets its own written quote.
          <ConfirmBadge note={CONFIRM} />
        </p>
      </section>
      <CtaBlock source="realtors" title="Have a listing or a turnover coming up?" />
      <JsonLd items={[breadcrumbSchema(crumbs)]} />
    </>
  );
}
