import { BearMascot } from "@/components/brand/BearMascot";
import { PageHeader } from "@/components/layout/PageHeader";
import { PlaceholderImage } from "@/components/media/PlaceholderImage";
import { JsonLd } from "@/components/seo/JsonLd";
import { CtaBlock } from "@/components/sections/CtaBlock";
import { ProcessSteps } from "@/components/home/HomeSections";
import { ConfirmBadge } from "@/components/ui/ConfirmBadge";
import { PAGES } from "@/config/pages";
import { ABOUT } from "@/data/about";
import { breadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "About Erik & Hunter",
  description:
    "Brushy Bear Painters is a new painting company for the Eastside and Seattle, run by Erik and Hunter Lee: one point of contact, written steps and clean sites daily.",
  path: PAGES.about.path,
  indexable: PAGES.about.indexable,
});

export default function AboutPage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "About", path: PAGES.about.path },
  ];
  return (
    <>
      <PageHeader
        crumbs={crumbs}
        eyebrow={ABOUT.eyebrow}
        title={ABOUT.h1}
        intro={ABOUT.intro}
        aside={
          <div className="mx-auto hidden w-56 lg:block">
            <BearMascot pose="ladder" sizes="224px" className="h-auto w-full" />
          </div>
        }
      />

      <section aria-labelledby="owners-title" className="mx-auto max-w-7xl px-4 py-16 md:px-8">
        <h2 id="owners-title" className="text-display-md text-ink">
          The owners
        </h2>
        <ul className="mt-8 grid gap-10 md:grid-cols-2">
          {ABOUT.owners.map((o) => (
            <li key={o.name}>
              <PlaceholderImage label={o.photoLabel} ratio="4/3" />
              <h3 className="mt-5 text-2xl font-extrabold text-pine">
                {o.name}
                <ConfirmBadge note={o.confirm} />
              </h3>
              <p className="font-semibold text-ink-soft">{o.role}</p>
              <p className="mt-3 text-lg">{o.bio}</p>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="how-we-work-title" className="mx-auto max-w-7xl px-4 pb-16 md:px-8">
        <h2 id="how-we-work-title" className="text-display-md text-ink">
          {ABOUT.how.heading}
        </h2>
        <ul className="mt-8 grid gap-6 sm:grid-cols-2">
          {ABOUT.how.points.map((p) => (
            <li key={p.title} className="rounded-[var(--radius-card)] bg-mist p-6">
              <h3 className="text-xl font-extrabold text-pine">
                {p.title}
                <ConfirmBadge note={"confirm" in p ? p.confirm : undefined} />
              </h3>
              <p className="mt-2">{p.body}</p>
            </li>
          ))}
        </ul>
      </section>

      <ProcessSteps />
      <CtaBlock source="about" />
      <JsonLd items={[breadcrumbSchema(crumbs)]} />
    </>
  );
}
