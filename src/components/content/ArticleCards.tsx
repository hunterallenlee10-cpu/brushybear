import Link from "next/link";
import { SceneImage } from "@/components/media/SceneImage";
import { ArrowIcon } from "@/components/ui/Icons";
import { articlePath, PAGES } from "@/config/pages";
import { ARTICLES } from "@/data/articles";

/** The related service's scene, or the rainy street if an earlier card already used it. */
const sceneFor = (svc: string | undefined, i: number, all: (string | undefined)[]) =>
  !svc || all.indexOf(svc) < i ? "rainy-street" : svc;

/** Latest articles, with the related service's scene as the card image. */
export function ArticleCards() {
  return (
    <section aria-labelledby="articles-title" className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <h2 id="articles-title" className="font-display text-display-lg text-forest">
          Painting guides for Eastside homes
        </h2>
        <Link href={PAGES.articles.path} className="inline-flex min-h-11 items-center gap-2 font-extrabold text-forest underline decoration-gold decoration-[3px] underline-offset-[6px]">
          All articles <ArrowIcon className="size-4" />
        </Link>
      </div>
      <ul className="mt-10 grid gap-8 md:grid-cols-3">
        {ARTICLES.slice(0, 3).map((a, i, list) => (
          <li key={a.slug} className="group relative flex flex-col">
            <SceneImage scene={sceneFor(a.relatedServices[0], i, list.map((x) => x.relatedServices[0]))} ratio="3/2" sizes="(min-width: 768px) 400px, 100vw" />
            <h3 className="mt-4 text-xl leading-snug font-extrabold text-forest">
              <Link href={articlePath(a.slug)} className="after:absolute after:inset-0">
                {a.title}
              </Link>
            </h3>
            <p className="mt-2 line-clamp-3 text-charcoal">{a.summary}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
