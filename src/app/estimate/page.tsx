import { BearMascot } from "@/components/brand/BearMascot";
import { LeadFormCard } from "@/components/lead/LeadFormCard";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { ColorPreviewSection, EstimatorSection } from "@/components/sections/ToolSections";
import { ConfirmBadge } from "@/components/ui/ConfirmBadge";
import { PAGES } from "@/config/pages";
import { phoneHref, SITE } from "@/config/site";
import { cityList } from "@/data/cities";
import { PROCESS } from "@/data/process";
import { isSet } from "@/lib/placeholders";
import { breadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Free Painting Estimate",
  description: `Free painting estimate in ${cityList()}. Two quick steps, then a walkthrough and a written quote within 24 hours.`,
  path: PAGES.estimate.path,
  ownOgImage: true,
});

export default function EstimatePage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Free Estimate", path: PAGES.estimate.path },
  ];
  return (
    <>
      <div className="mx-auto max-w-7xl px-4 pt-8 pb-20 md:px-8 md:pt-12">
        <Breadcrumbs items={crumbs} />
        <div className="mt-8 grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.14em] text-forest">Free, no obligation</p>
            <h1 className="mt-3 font-display text-display-lg text-forest md:text-display-xl">Get a free {SITE.regionName} painting estimate</h1>
            <p className="mt-6 text-lg md:text-xl">
              Tell us what you want painted. WeWe&apos;ll text you within a few minutes during business hours to set up aapos;ll reach out within a few minutes during business hours to set up a
              walkthrough, then send a written, itemized quote.
            </p>
            {isSet(SITE.phone) && (
              <p className="mt-4 text-lg">
                Rather talk?{" "}
                <a href={phoneHref(SITE.phone, "tel")} data-event="call_click" data-location="estimate-page" className="font-extrabold text-forest underline decoration-gold decoration-[3px] underline-offset-[6px]">
                  Call or text {SITE.phone}
                </a>
              </p>
            )}
            <h2 className="mt-12 text-xl font-extrabold text-forest">What happens next</h2>
            <ol className="mt-5 space-y-5">
              {PROCESS.map((s, i) => (
                <li key={s.title} className="flex gap-4">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-forest font-extrabold text-cream">{i + 1}</span>
                  <div>
                    <p className="font-extrabold">
                      {s.title}
                      <ConfirmBadge note={s.confirm} />
                    </p>
                    <p className="text-[1rem]">{s.body}</p>
                  </div>
                </li>
              ))}
            </ol>
            <div className="mt-10 hidden w-40 lg:block">
              <BearMascot pose="wave" sizes="160px" className="h-auto w-full" />
            </div>
          </div>
          <div className="on-dark rounded-[calc(var(--radius-sticker)+0.5rem)] bg-forest p-4 md:p-8">
            <LeadFormCard source="estimate-page" />
          </div>
        </div>
      </div>
      <EstimatorSection title="Want a number first? Here's a ballpark." />
      <ColorPreviewSection />
      <JsonLd items={[breadcrumbSchema(crumbs)]} />
    </>
  );
}
