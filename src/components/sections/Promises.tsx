import { Sticker } from "@/components/brand/Sticker";
import { BeforeAfterSlider } from "@/components/media/BeforeAfterSlider";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { ConfirmBadge } from "@/components/ui/ConfirmBadge";
import { GALLERY } from "@/data/gallery";
import { SOLUTION } from "@/data/home";
import { PROMISES } from "@/data/promises";

const TILTS = [-2, 1.5, -1, 2, -1.5, 1];

/** Our promises as sticker badges, plus a real before/after once one exists. */
export function Promises() {
  const featured = GALLERY[0];
  return (
    <section aria-labelledby="promises-title" className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
      <SectionHeading id="promises-title" eyebrow={SOLUTION.eyebrow} title={SOLUTION.title} intro={<p>{SOLUTION.intro}</p>} />
      <ul className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {PROMISES.map((p, i) => (
          <Sticker key={p.id} as="li" tilt={TILTS[i % TILTS.length]} innerClassName="h-full bg-cream-50 px-6 py-7">
            <h3 className="font-display text-[1.75rem] leading-tight text-forest">
              {p.title}
              <ConfirmBadge note={p.confirm} />
            </h3>
            <p className="mt-3">{p.body}</p>
          </Sticker>
        ))}
      </ul>
      {featured && (
        <div className="mt-16">
          <BeforeAfterSlider item={featured} />
        </div>
      )}
    </section>
  );
}
