import { BearMascot } from "@/components/brand/BearMascot";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { ConfirmBadge } from "@/components/ui/ConfirmBadge";
import { PAGES } from "@/config/pages";
import { PROMISES } from "@/data/promises";

/** Card colors, in order. Every pair passes AA (see contrast.test.ts). */
const LOOKS = [
  { card: "bg-forest text-cream", figure: "text-gold", body: "text-cream/90" },
  { card: "bg-pale text-forest", figure: "text-forest", body: "text-charcoal" },
  { card: "bg-gold text-charcoal", figure: "text-charcoal", body: "text-charcoal" },
  { card: "bg-sage text-white", figure: "text-white", body: "text-white" },
  { card: "bg-cream-50 text-forest", figure: "text-forest", body: "text-charcoal" },
  { card: "bg-forest-deep text-cream", figure: "text-gold", body: "text-cream/90" },
];

/**
 * The six promises as a stack of bold cards. Each card sticks a little
 * lower than the last, so they pile up as you scroll (plain CSS sticky, no
 * scroll scripts). Big plain numbers first: 24 hrs, 1, $0, $250.
 */
export function PromiseStack({ headingLevel = "h2", showLink = true }: { headingLevel?: "h2" | "h3"; showLink?: boolean }) {
  const H = headingLevel;
  return (
    <section aria-labelledby="promise-title" className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <H id="promise-title" className="font-display text-display-lg text-forest text-balance">
            The Brushy Bear Promise
          </H>
          <p className="mt-4 max-w-md text-lg md:text-xl">
            Six things every customer gets, in plain numbers. The ones about dates and money are written on your quote.
          </p>
          {showLink && (
            <div className="mt-8">
              <ButtonLink href={PAGES.ourPromise.path} variant="secondary">
                Read the fine print
              </ButtonLink>
            </div>
          )}
          <BearMascot pose="umbrella" sizes="200px" className="mt-10 hidden h-auto w-48 -rotate-3 drop-shadow-[0_18px_22px_rgb(31_77_58/0.3)] lg:block" />
        </div>

        <ol className="space-y-5">
          {PROMISES.map((p, i) => {
            const look = LOOKS[i % LOOKS.length];
            return (
              <li
                key={p.id}
                className={`sticky rounded-[1.75rem] border-2 border-charcoal p-6 shadow-[0_0_0_5px_#fff,0_26px_40px_-26px_rgb(22_56_41/0.65)] md:p-8 ${look.card}`}
                style={{ top: `calc(5.5rem + ${i * 0.85}rem)` }}
              >
                <div className="grid items-end gap-4 sm:grid-cols-[minmax(9rem,auto)_1fr] sm:gap-8">
                  <p className={`font-display leading-none ${look.figure}`}>
                    <span className="block text-[clamp(3rem,2rem+4vw,4.75rem)] tracking-tight">{p.figure}</span>
                    <span className="mt-1 block font-sans text-sm font-extrabold tracking-normal">{p.figureLabel}</span>
                  </p>
                  <div>
                    <h3 className="font-display text-[1.6rem] leading-tight">
                      {p.title}
                      <ConfirmBadge note={p.confirm} />
                    </h3>
                    <p className={`mt-2 ${look.body}`}>{p.body}</p>
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
