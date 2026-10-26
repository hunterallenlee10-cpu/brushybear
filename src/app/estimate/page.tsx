import { BearMascot } from "@/components/brand/BearMascot";
import { QuoteCard } from "@/components/estimate/QuoteCard";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { ConfirmBadge } from "@/components/ui/ConfirmBadge";
import { Pill } from "@/components/ui/Pill";
import { PAGES } from "@/config/pages";
import { phoneHref, SITE } from "@/config/site";
import { PROCESS } from "@/data/process";
import { isSet } from "@/lib/placeholders";
import { breadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Free Painting Estimate, Eastside & Seattle",
  description:
    "Request a free painting estimate anywhere on the Eastside or in greater Seattle. One short form, a walkthrough, then a written, itemized quote within 24 hours.",
  path: PAGES.estimate.path,
});

export default function EstimatePage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Free Estimate", path: PAGES.estimate.path },
  ];
  const phone = isSet(SITE.phone) ? SITE.phone : undefined;
  return (
    <>
      <section className="on-dark relative overflow-hidden bg-ink text-white">
        <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_80%_0%,rgb(29_90_67/0.6),transparent_55%)]" />
        <div className="relative mx-auto max-w-7xl px-4 pt-7 pb-16 md:px-8 md:pt-10 md:pb-24">
          <Breadcrumbs items={crumbs} />
          <div className="mt-8 grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
            <div>
              <p className="text-sm font-bold tracking-[0.14em] text-honey uppercase">Free, no obligation</p>
              <h1 className="mt-3 text-display-xl">Get a free painting estimate</h1>
              <p className="mt-6 text-lg text-white/85 md:text-xl">
                Tell us what you want painted. We&apos;ll reach out to set up a walkthrough, then send a written, itemized quote.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <Pill href={PAGES.instantEstimate.path} variant="outline-white" arrow>
                  Want a ballpark first?
                </Pill>
                {phone && (
                  <a href={phoneHref(phone, "tel")} data-event="call_click" data-location="estimate-page" className="font-bold underline decoration-honey decoration-2 underline-offset-4">
                    Or call {phone}
                  </a>
                )}
              </div>
              <h2 className="mt-12 text-xl font-extrabold">How it works</h2>
              <ol className="mt-5 space-y-5">
                {PROCESS.map((s, i) => (
                  <li key={s.title} className="flex gap-4">
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-honey font-extrabold text-ink">{i + 1}</span>
                    <div>
                      <p className="font-bold">
                        {s.title}
                        <ConfirmBadge note={s.confirm} />
                      </p>
                      <p className="text-white/80">{s.body}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
            <div className="relative mx-auto w-full max-w-lg lg:ml-auto">
              <div aria-hidden="true" className="pointer-events-none absolute top-1/2 -left-40 hidden w-36 -translate-y-1/2 xl:block">
                <BearMascot pose="point" sizes="144px" className="h-auto w-full drop-shadow-[0_10px_18px_rgb(0_0_0/0.45)]" />
              </div>
              <QuoteCard source="estimate-page" withNotes fallbackPhone={phone} />
            </div>
          </div>
        </div>
      </section>
      <JsonLd items={[breadcrumbSchema(crumbs)]} />
    </>
  );
}
