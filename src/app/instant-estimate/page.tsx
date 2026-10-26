import { QuoteCard } from "@/components/estimate/QuoteCard";
import { PageHeader } from "@/components/layout/PageHeader";
import { JsonLd } from "@/components/seo/JsonLd";
import { InstantEstimate } from "@/components/tools/InstantEstimate";
import { PAGES } from "@/config/pages";
import { phoneHref, SITE } from "@/config/site";
import { isSet } from "@/lib/placeholders";
import { breadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Instant Painting Estimate, Eastside & Seattle",
  description:
    "Get an instant ballpark price for interior, exterior, cabinet, deck or fence painting. Answer a few questions, see a range, then book a free written quote.",
  path: PAGES.instantEstimate.path,
});

export default function InstantEstimatePage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Instant Estimate", path: PAGES.instantEstimate.path },
  ];
  const phone = isSet(SITE.phone) ? SITE.phone : undefined;
  return (
    <>
      <PageHeader
        crumbs={crumbs}
        eyebrow="Why wait?"
        title="Get an instant painting estimate"
        intro={["Answer a few questions and see a rough price range for your project in under two minutes. When you're ready, book a free walkthrough for an exact, written quote."]}
      />
      <section aria-label="Estimate calculator" className="mx-auto max-w-7xl px-4 py-14 md:px-8 md:py-20">
        <InstantEstimate />
      </section>
      <section id="quote" aria-labelledby="quote-title" className="on-dark bg-ink py-16 text-white md:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 md:px-8 lg:grid-cols-2">
          <div>
            <h2 id="quote-title" className="text-display-lg">
              Turn your range into a <span className="text-honey">written quote</span>
            </h2>
            <p className="mt-4 max-w-md text-lg text-white/85">
              We visit, measure, check for repairs and talk colors. Your itemized quote arrives within 24 hours of the walkthrough.
            </p>
            {phone && (
              <p className="mt-6 text-lg">
                <a href={phoneHref(phone, "tel")} className="font-bold underline decoration-honey decoration-2 underline-offset-4">
                  Or call {phone}
                </a>
              </p>
            )}
          </div>
          <div className="mx-auto w-full max-w-lg lg:ml-auto">
            <QuoteCard source="instant-estimate" title="Get Your Exact Price" fallbackPhone={phone} />
          </div>
        </div>
      </section>
      <JsonLd items={[breadcrumbSchema(crumbs)]} />
    </>
  );
}
