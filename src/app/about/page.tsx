import { BearMascot } from "@/components/brand/BearMascot";
import { PageHeader } from "@/components/layout/PageHeader";
import { PlaceholderImage } from "@/components/media/PlaceholderImage";
import { JsonLd } from "@/components/seo/JsonLd";
import { CtaBlock } from "@/components/sections/CtaBlock";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { ConfirmBadge } from "@/components/ui/ConfirmBadge";
import { PAGES } from "@/config/pages";
import { ABOUT } from "@/data/about";
import { breadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "About Erik & Hunter",
  description:
    "Brushy Bear Painters is a new Eastside house painting company run by Erik and Hunter Lee: one point of contact, written steps on every job, and clean sites daily.",
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
            <BearMascot pose="roller-up" sizes="224px" className="h-auto w-full" />
          </div>
        }
      />

      <section aria-labelledby="owners-title" className="mx-auto max-w-7xl px-4 pb-16 md:px-8">
        <h2 id="owners-title" className="font-display text-display-md text-forest">
          The owners
        </h2>
        <ul className="mt-8 grid gap-10 md:grid-cols-2">
          {ABOUT.owners.map((o) => (
            <li key={o.name}>
              <PlaceholderImage label={o.photoLabel} ratio="4/3" />
              <h3 className="mt-5 text-2xl font-extrabold text-forest">
                {o.name}
                <ConfirmBadge note={o.confirm} />
              </h3>
              <p className="font-semibold text-charcoal-soft">{o.role}</p>
              <p className="mt-3 text-lg">{o.bio}</p>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="how-we-work-title" className="mx-auto max-w-7xl px-4 pb-16 md:px-8">
        <h2 id="how-we-work-title" className="font-display text-display-md text-forest">
          {ABOUT.how.heading}
        </h2>
        <ul className="mt-8 grid gap-6 sm:grid-cols-2">
          {ABOUT.how.points.map((p) => (
            <li key={p.title} className="border-t-[3px] border-forest pt-4">
              <h3 className="text-xl font-extrabold text-forest">
                {p.title}
                <ConfirmBadge note={"confirm" in p ? p.confirm : undefined} />
              </h3>
              <p className="mt-2">{p.body}</p>
            </li>
          ))}
        </ul>
      </section>

      <HowItWorks />
      <CtaBlock source="about" />
      <JsonLd items={[breadcrumbSchema(crumbs)]} />
    </>
  );
}
