import { SectionHeading } from "@/components/sections/SectionHeading";
import { PROBLEMS } from "@/data/home";

/** "Northwest weather is hard on a house." Editorial two-column list. */
export function Problem() {
  return (
    <section aria-labelledby="problem-title" className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
        <SectionHeading id="problem-title" eyebrow={PROBLEMS.eyebrow} title={PROBLEMS.title} intro={<p>{PROBLEMS.intro}</p>} />
        <ol className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
          {PROBLEMS.items.map((item, i) => (
            <li key={item.title} className="border-t-[3px] border-forest pt-5">
              <span className="font-display text-display-md text-gold" aria-hidden="true">
                0{i + 1}
              </span>
              <h3 className="mt-2 text-xl font-extrabold text-forest">{item.title}</h3>
              <p className="mt-2 text-charcoal">{item.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
