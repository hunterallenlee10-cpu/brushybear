import { PageHeader } from "@/components/layout/PageHeader";
import { JsonLd } from "@/components/seo/JsonLd";
import { CtaBlock } from "@/components/sections/CtaBlock";
import { PAGES } from "@/config/pages";
import { RECOMMENDED } from "@/data/recommended";
import { breadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Recommended Companies",
  description:
    "Local trades Brushy Bear Painters trusts for the work around a paint job: roofing, gutters, siding repair, pressure washing and more on the Eastside and in Seattle.",
  path: PAGES.recommended.path,
  indexable: PAGES.recommended.indexable,
});

export default function RecommendedPage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Recommended Companies", path: PAGES.recommended.path },
  ];
  return (
    <>
      <PageHeader
        crumbs={crumbs}
        eyebrow="Trades we trust"
        title="Recommended companies"
        intro={[
          "A paint job often turns up other work: a roof that needs attention, gutters that overflow, siding that needs replacing. These are the local companies we send customers to. We don't get paid for recommending them.",
        ]}
      />
      <section aria-label="Companies" className="mx-auto max-w-7xl px-4 py-14 md:px-8 md:py-20">
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {RECOMMENDED.map((r) => (
            <li key={r.trade} className="rounded-[var(--radius-card)] border border-dashed border-ink/25 bg-mist p-6">
              <p className="text-sm font-bold tracking-[0.14em] text-pine-bright uppercase">{r.trade}</p>
              <p className="mt-2 text-xl font-extrabold">
                <span className="placeholder-mark">[{r.placeholder}]</span>
              </p>
              <p className="mt-2 text-ink-soft">{r.why}</p>
            </li>
          ))}
        </ul>
      </section>
      <CtaBlock source="recommended" />
      <JsonLd items={[breadcrumbSchema(crumbs)]} />
    </>
  );
}
