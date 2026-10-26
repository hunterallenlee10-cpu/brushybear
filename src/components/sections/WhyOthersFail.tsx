import { BrushEdge } from "@/components/brand/Brushstroke";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { WHY_OTHERS_FAIL } from "@/data/home";

/** Dark section: DIY, the cheapest bid, the big outfit. */
export function WhyOthersFail() {
  return (
    <section aria-labelledby="others-title" className="on-dark">
      <BrushEdge color="var(--color-forest)" />
      <div className="bg-forest">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
          <SectionHeading id="others-title" eyebrow={WHY_OTHERS_FAIL.eyebrow} title={WHY_OTHERS_FAIL.title} onDark />
          <ul className="mt-12 grid gap-6 md:grid-cols-3">
            {WHY_OTHERS_FAIL.items.map((item) => (
              <li key={item.who} className="rounded-[var(--radius-sticker)] border-2 border-forest-soft bg-forest-deep p-6 md:p-8">
                <p className="text-sm font-extrabold uppercase tracking-[0.12em] text-gold">{item.who}</p>
                <h3 className="mt-3 font-display text-display-md text-cream">{item.line}</h3>
                <p className="mt-3 text-cream/90">{item.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <BrushEdge color="var(--color-forest)" flip />
    </section>
  );
}
