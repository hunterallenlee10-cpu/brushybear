import Link from "next/link";
import { PageHeader } from "@/components/layout/PageHeader";
import { JsonLd } from "@/components/seo/JsonLd";
import { CtaBlock } from "@/components/sections/CtaBlock";
import { articlePath, PAGES } from "@/config/pages";
import { formatDate, SITE } from "@/config/site";
import { ARTICLES } from "@/data/articles";
import { breadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: `Painting Guides for ${SITE.regionName} Homes`,
  description:
    "Practical guides for Eastside homeowners: when to paint an exterior, how Northwest rain and moss break down paint, and painting vs. refacing kitchen cabinets.",
  path: PAGES.articles.path,
});

export default function ArticlesIndex() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Articles", path: PAGES.articles.path },
  ];
  return (
    <>
      <PageHeader
        crumbs={crumbs}
        eyebrow="Guides"
        title={`Painting guides for ${SITE.regionName} homes`}
        intro={["Straight answers about paint, weather and timing in the Northwest, written for homeowners, not other painters."]}
      />
      <ul className="mx-auto grid max-w-7xl gap-8 px-4 pb-20 md:grid-cols-3 md:px-8">
        {ARTICLES.map((a) => (
          <li key={a.slug} className="relative flex flex-col rounded-[var(--radius-sticker)] border-2 border-cream-200 bg-white p-6 hover:border-forest">
            <p className="text-sm font-semibold text-charcoal-soft">
              Updated <time dateTime={a.updatedAt}>{formatDate(a.updatedAt)}</time>
            </p>
            <h2 className="mt-3 font-display text-[1.75rem] leading-tight text-forest">
              <Link href={articlePath(a.slug)} className="after:absolute after:inset-0">
                {a.title}
              </Link>
            </h2>
            <p className="mt-3 text-[1rem]">{a.metaDescription}</p>
          </li>
        ))}
      </ul>
      <CtaBlock source="articles" />
      <JsonLd items={[breadcrumbSchema(crumbs)]} />
    </>
  );
}
