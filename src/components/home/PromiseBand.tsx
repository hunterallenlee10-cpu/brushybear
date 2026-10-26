import { Slider } from "@/components/home/Slider";
import { ConfirmBadge } from "@/components/ui/ConfirmBadge";
import { StarRow } from "@/components/home/StarRow";
import { PROMISES } from "@/data/promises";
import { REVIEWS } from "@/data/reviews";

/**
 * Panda's green testimonial band. Shows real reviews once there are any;
 * until then it shows the six Brushy Bear promises (never sample reviews).
 */
export function PromiseBand() {
  const hasReviews = REVIEWS.length > 0;
  return (
    <section aria-labelledby="promise-band-title" className="on-dark bg-pine py-16 text-white md:py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 md:px-8 lg:grid-cols-[1fr_1.6fr] lg:items-center [&>*]:min-w-0">
        <div>
          <h2 id="promise-band-title" className="text-display-lg">
            {hasReviews ? "What Our Customers Say" : "The Brushy Bear Promise"}
          </h2>
          <p className="mt-4 text-lg text-white/90">
            {hasReviews
              ? "Real reviews from homeowners we've painted for."
              : "Six things every customer gets, written into your quote. We're a new company, so these are how we earn reviews."}
          </p>
        </div>
        <Slider label={hasReviews ? "Customer reviews" : "Our promises"}>
          {hasReviews
            ? REVIEWS.map((r) => (
                <li key={r.url + r.author} className="w-[85%] shrink-0 snap-start rounded-[var(--radius-card)] bg-white p-7 text-ink sm:w-[22rem]">
                  <StarRow rating={r.rating} />
                  <p className="mt-4">{r.text}</p>
                  <p className="mt-5 font-bold">
                    {r.author}, {r.city}
                    <span className="block text-sm font-semibold text-ink-soft">via {r.source}</span>
                  </p>
                </li>
              ))
            : PROMISES.map((p, i) => (
                <li key={p.id} className="flex w-[85%] shrink-0 snap-start flex-col rounded-[var(--radius-card)] bg-white p-7 text-ink sm:w-[22rem]">
                  <span className="text-sm font-bold tracking-[0.14em] text-pine-bright uppercase">Promise {i + 1} of 6</span>
                  <h3 className="mt-2 text-2xl font-extrabold text-pine">
                    {p.title}
                    <ConfirmBadge note={p.confirm} />
                  </h3>
                  <p className="mt-3 text-ink-soft">{p.body}</p>
                </li>
              ))}
        </Slider>
      </div>
    </section>
  );
}
