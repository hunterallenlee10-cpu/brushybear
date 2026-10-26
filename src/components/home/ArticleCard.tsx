import Link from "next/link";
import { SceneImage } from "@/components/media/SceneImage";
import { ArrowIcon } from "@/components/ui/Icons";
import { articlePath } from "@/config/pages";
import { formatDate } from "@/config/site";
import type { Article } from "@/data/types";

const SCENE_BY_SERVICE: Record<string, string> = {
  "exterior-painting": "exterior-painting",
  "interior-painting": "interior-painting",
  "cabinet-painting": "cabinet-painting",
  "decks-and-fences-painting": "decks-and-fences-painting",
};
const FALLBACK = ["rainy-street", "exterior-painting", "cabinet-painting", "interior-painting"];

/** Blog card: image, date, title, short summary. Each card in a row gets a different image. */
export function ArticleCard({ article, index = 0 }: { article: Article; index?: number }) {
  const first = article.relatedServices.map((s) => SCENE_BY_SERVICE[s]).find(Boolean);
  const scene = index === 1 && first === "exterior-painting" ? "rainy-street" : (first ?? FALLBACK[index % FALLBACK.length]);
  const href = articlePath(article.slug);
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[var(--radius-card)] bg-white shadow-card ring-1 ring-ink/5">
      <Link href={href} tabIndex={-1} aria-hidden="true" className="block [&_div]:rounded-none">
        <SceneImage scene={scene} ratio="16/9" sizes="(min-width: 768px) 400px, 100vw" />
      </Link>
      <div className="flex flex-1 flex-col p-6">
        <p className="text-sm font-semibold text-ink-soft">{formatDate(article.publishedAt)}</p>
        <h3 className="mt-2 text-xl leading-snug font-extrabold">
          <Link href={href} className="hover:text-pine">
            {article.title}
          </Link>
        </h3>
        <p className="mt-3 line-clamp-3 flex-1 text-ink-soft">{article.summary}</p>
        <Link href={href} className="mt-5 inline-flex items-center gap-1.5 font-bold text-pine hover:underline">
          Read more<span className="sr-only">: {article.title}</span> <ArrowIcon />
        </Link>
      </div>
    </article>
  );
}
