import { PageHeader } from "@/components/layout/PageHeader";
import { JsonLd } from "@/components/seo/JsonLd";
import { CtaBlock } from "@/components/sections/CtaBlock";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { ConfirmBadge } from "@/components/ui/ConfirmBadge";
import { PAGES } from "@/config/pages";
import { SITE } from "@/config/site";
import { PROMISE_FAQS, PROMISES } from "@/data/promises";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

const TITLE = `Our Promise: ${SITE.regionName} House Painting`;
const DESCRIPTION =
  "Our six promises: a written quote in 24 hours, one point of contact, daily photos, a clean house every evening, a rain-day promise, $250 off if we start late.";

export const metadata = pageMetadata({ title: TITLE, description: DESCRIPTION, path: PAGES.ourPromise.path });

/** The six promises, with how each works and its honest limits. */
export default function OurPromisePage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Our Promise", path: PAGES.ourPromise.path },
  ];
  return (
    <>
      <PageHeader
        crumbs={crumbs}
        title={`The Brushy Bear Promise for ${SITE.regionName} house painting`}
        intro={[
          "We're a new company, so we can't point you to a decade of reviews yet. What we can do is put plain numbers in writing and hold ourselves to them.",
        ]}
      />

      <section aria-label="The six promises" className="mx-auto max-w-7xl px-4 pb-16 md:px-8">
        <ol className="divide-y-2 divide-cream-200 border-y-2 border-cream-200">
          {PROMISES.map((p) => (
            <li key={p.id} id={p.id} className="grid gap-6 py-10 md:grid-cols-[16rem_1fr] md:gap-12">
              <p className="font-display leading-none text-forest">
                <span className="block text-[clamp(3.25rem,2.4rem+3vw,5rem)] tracking-tight">{p.figure}</span>
                <span className="mt-2 block font-sans text-base font-extrabold tracking-normal text-charcoal-soft">{p.figureLabel}</span>
              </p>
              <div className="max-w-2xl">
                <h2 className="font-display text-display-md text-forest">
                  {p.title}
                  <ConfirmBadge note={p.confirm} />
                </h2>
                <p className="mt-3 text-lg font-semibold">{p.body}</p>
                {p.details.map((d) => (
                  <p key={d} className="mt-3">
                    {d}
                  </p>
                ))}
                {p.fine && (
                  <p className="mt-4 rounded-xl bg-pale/60 px-4 py-3 text-[0.95rem]">
                    <strong className="font-extrabold text-forest">Fine print: </strong>
                    {p.fine}
                  </p>
                )}
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section aria-labelledby="promise-faq-title" className="mx-auto max-w-7xl px-4 pb-20 md:px-8">
        <h2 id="promise-faq-title" className="font-display text-display-md text-forest">
          Questions about the promises
        </h2>
        <div className="mt-8 max-w-4xl">
          <FaqAccordion faqs={PROMISE_FAQS} />
        </div>
      </section>

      <CtaBlock source="our-promise" />
      <JsonLd items={[breadcrumbSchema(crumbs), faqSchema(PROMISE_FAQS)]} />
    </>
  );
}
