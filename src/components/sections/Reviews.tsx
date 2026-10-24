import { SectionHeading } from "@/components/sections/SectionHeading";
import { cityList } from "@/data/cities";
import { REVIEWS } from "@/data/reviews";

/**
 * Real reviews only. Renders nothing while reviews.ts is empty, so there's
 * never an empty "testimonials" block or made-up quotes.
 */
export function Reviews() {
  if (REVIEWS.length === 0) return null;
  return (
    <section aria-labelledby="reviews-title" className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
      <SectionHeading id="reviews-title" eyebrow="Reviews" title={`What homeowners in ${cityList()} say`} />
      <ul className="mt-12 grid gap-8 md:grid-cols-3">
        {REVIEWS.slice(0, 6).map((r) => (
          <li key={`${r.author}-${r.date}`} className="rounded-[var(--radius-sticker)] bg-cream-50 p-6">
            <p aria-label={`${r.rating} out of 5 stars`} className="text-lg text-gold">
              {"★".repeat(r.rating)}
              <span className="text-cream-200">{"★".repeat(5 - r.rating)}</span>
            </p>
            <blockquote className="mt-3">“{r.text}”</blockquote>
            <p className="mt-4 text-sm font-bold text-forest">
              {r.author}, {r.city} ·{" "}
              <a href={r.url} className="underline" rel="noopener" target="_blank">
                {r.source}
              </a>
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
