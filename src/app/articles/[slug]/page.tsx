import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ContentSections, sectionId } from "@/components/content/ContentSections";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { PageHeader } from "@/components/layout/PageHeader";
import { JsonLd } from "@/components/seo/JsonLd";
import { CtaBlock } from "@/components/sections/CtaBlock";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { RichText } from "@/components/ui/RichText";
import { articlePath, estimateHref, isLivePath, PAGES, servicePath } from "@/config/pages";
import { formatDate, SITE } from "@/config/site";
import { ARTICLES, getArticle } from "@/data/articles";
import { getService } from "@/data/services";
import { articleSchema, breadcrumbSchema, faqSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

/** Byline: the company until Erik confirms a personal byline (CONTENT_TODO). */
const AUTHOR_NAME: string | undefined = undefined;

export function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

function load(slug: string) {
  const article = getArticle(slug);
  if (!article) notFound();
  return article;
}

export async function generateMetadata({ params }: PageProps<"/articles/[slug]">): Promise<Metadata> {
  const a = load((await params).slug);
  const meta = pageMetadata({ title: a.seoTitle, description: a.metaDescription, path: articlePath(a.slug) });
  return { ...meta, openGraph: { ...meta.openGraph, type: "article", publishedTime: a.publishedAt, modifiedTime: a.updatedAt } };
}

export default async function ArticlePage({ params }: PageProps<"/articles/[slug]">) {
  const a = load((await params).slug);
  const path = articlePath(a.slug);
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Articles", path: PAGES.articles.path },
    { name: a.title, path },
  ];
  const related = a.relatedServices.map((s) => getService(s)).filter((s) => s !== undefined);
  const more = ARTICLES.filter((x) => x.slug !== a.slug);

  return (
    <>
      <PageHeader crumbs={crumbs} eyebrow="Homeowner guide" title={a.title}>
        <p className="mt-6 text-sm font-semibold text-charcoal-soft">
          By {AUTHOR_NAME ?? `the ${SITE.name} team`} · Published <time dateTime={a.publishedAt}>{formatDate(a.publishedAt)}</time> · Updated{" "}
          <time dateTime={a.updatedAt}>{formatDate(a.updatedAt)}</time>
        </p>
      </PageHeader>

      <div className="mx-auto grid max-w-7xl gap-12 px-4 pb-16 md:px-8 lg:grid-cols-[minmax(0,48rem)_17rem] lg:justify-between">
        <article className="min-w-0">
          <div className="rounded-[var(--radius-sticker)] border-2 border-forest bg-cream-50 p-6 md:p-8">
            <p className="text-sm font-extrabold uppercase tracking-[0.12em] text-forest">The short answer</p>
            <p className="mt-3 text-lg md:text-xl">
              <RichText text={a.summary} />
            </p>
          </div>
          <ContentSections sections={a.sections} className="mt-14" />
          {a.faqs && a.faqs.length > 0 && (
            <section aria-labelledby="article-faq-title" className="mt-14">
              <h2 id="article-faq-title" className="font-display text-display-md text-forest">
                Quick questions
              </h2>
              <div className="mt-6">
                <FaqAccordion faqs={a.faqs} />
              </div>
            </section>
          )}
        </article>
        <nav aria-label="In this guide" className="hidden lg:sticky lg:top-28 lg:block lg:self-start">
          <p className="text-sm font-extrabold uppercase tracking-[0.12em] text-forest">In this guide</p>
          <ol className="mt-4 space-y-3 border-l-[3px] border-gold pl-4">
            {a.sections.map((s) => (
              <li key={s.heading}>
                <a href={`#${s.id ?? sectionId(s.heading)}`} className="font-semibold text-charcoal hover:text-forest hover:underline">
                  {s.heading}
                </a>
              </li>
            ))}
          </ol>
          <div className="mt-8">
            <ButtonLink href={estimateHref()} event="estimate_cta" location={`article-toc:${a.slug}`}>
              Get a Free Estimate
            </ButtonLink>
          </div>
        </nav>
      </div>

      <aside aria-label="Related" className="bg-cream-50">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-2 md:px-8">
          {related.length > 0 && (
            <div>
              <h2 className="text-xl font-extrabold text-forest">Related services</h2>
              <ul className="mt-4 space-y-2">
                {related.map((s) => (
                  <li key={s.slug}>
                    {isLivePath(servicePath(s.slug)) ? (
                      <Link href={servicePath(s.slug)} className="font-semibold text-forest underline decoration-gold decoration-2 underline-offset-4">
                        {s.name}
                      </Link>
                    ) : (
                      s.name
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}
          <div>
            <h2 className="text-xl font-extrabold text-forest">More guides</h2>
            <ul className="mt-4 space-y-2">
              {more.map((x) => (
                <li key={x.slug}>
                  <Link href={articlePath(x.slug)} className="font-semibold text-forest underline decoration-gold decoration-2 underline-offset-4">
                    {x.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </aside>

      <CtaBlock source={`article:${a.slug}`} preselect={a.relatedServices[0]} />

      <JsonLd
        items={[
          articleSchema({ path, headline: a.title, description: a.metaDescription, datePublished: a.publishedAt, dateModified: a.updatedAt, authorName: AUTHOR_NAME }),
          breadcrumbSchema(crumbs),
          ...(a.faqs?.length ? [faqSchema(a.faqs)] : []),
        ]}
      />
    </>
  );
}
