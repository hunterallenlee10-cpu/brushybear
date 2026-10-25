"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useId, useState } from "react";
import { ArrowIcon } from "@/components/ui/Icons";
import { ballpark, CONDITION, formatUsd, PRICING, type Condition, type ProjectType, type Stories } from "@/config/pricing";
import { track } from "@/lib/analytics";
import { sendPrefill } from "@/lib/prefill";

const TYPES = Object.keys(PRICING) as ProjectType[];
const SEG =
  "flex min-h-11 cursor-pointer items-center justify-center rounded-full border-2 px-4 text-[0.95rem] font-bold transition-colors has-[:focus-visible]:outline-3 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-charcoal";
const on = "border-forest bg-forest text-cream";
const off = "border-charcoal/20 bg-white text-charcoal hover:border-forest";

/**
 * Ballpark price tool. Every rate comes from src/config/pricing.ts. The
 * result is labeled as a ballpark and hands off to the free written quote.
 */
export function PriceEstimator({ initialType = "exterior" }: { initialType?: ProjectType }) {
  const uid = useId();
  const router = useRouter();
  const [type, setType] = useState<ProjectType>(initialType);
  const [sizes, setSizes] = useState<Record<ProjectType, number>>(
    () => Object.fromEntries(TYPES.map((t) => [t, PRICING[t].unit.default])) as Record<ProjectType, number>,
  );
  const [stories, setStories] = useState<Stories>(2);
  const [condition, setCondition] = useState<Condition>("fair");
  const [handedOff, setHandedOff] = useState(false);

  const p = PRICING[type];
  const size = sizes[type];
  const range = ballpark({ type, size, stories, condition });
  const summary = `${p.label}, ${size.toLocaleString("en-US")} ${size === 1 ? p.unit.name : p.unit.plural}${p.usesStories ? `, ${stories} ${stories === 1 ? "story" : "stories"}` : ""}, ${CONDITION[condition].label.toLowerCase()}: ${formatUsd(range.low)} to ${formatUsd(range.high)}`;

  const setSize = (v: number) => setSizes((s) => ({ ...s, [type]: Math.min(p.unit.max, Math.max(p.unit.min, Math.round(v / p.unit.step) * p.unit.step || p.unit.min)) }));

  const handOff = () => {
    track("estimator_handoff", { type, low: range.low, high: range.high });
    const found = sendPrefill({ services: [p.formService], ballpark: summary });
    setHandedOff(found);
    if (!found) router.push("/estimate");
  };

  return (
    <div className="grid overflow-hidden rounded-[1.75rem] border-2 border-charcoal bg-cream-50 shadow-[0_0_0_5px_#fff,0_30px_50px_-30px_rgb(22_56_41/0.6)] lg:grid-cols-[1.25fr_1fr]">
      <form className="space-y-6 p-5 sm:p-8" onSubmit={(e) => e.preventDefault()}>
        <fieldset>
          <legend className="font-extrabold text-forest">What&apos;s the project?</legend>
          <div className="mt-3 flex flex-wrap gap-2">
            {TYPES.map((t) => (
              <label key={t} className={`${SEG} ${type === t ? on : off}`}>
                <input type="radio" name={`${uid}-type`} className="sr-only" checked={type === t} onChange={() => setType(t)} />
                {PRICING[t].label}
              </label>
            ))}
          </div>
        </fieldset>

        <div>
          <div className="flex items-baseline justify-between gap-4">
            <label htmlFor={`${uid}-size`} className="font-extrabold text-forest">
              About how many {p.unit.plural}?
            </label>
            <input
              type="number"
              aria-label={`Number of ${p.unit.plural}`}
              min={p.unit.min}
              max={p.unit.max}
              step={p.unit.step}
              value={size}
              onChange={(e) => setSize(Number(e.target.value))}
              className="min-h-11 w-28 rounded-xl border-2 border-charcoal/30 bg-white px-3 text-right font-extrabold tabular-nums text-charcoal focus:border-forest focus:outline-none"
            />
          </div>
          <input
            id={`${uid}-size`}
            type="range"
            min={p.unit.min}
            max={p.unit.max}
            step={p.unit.step}
            value={size}
            onChange={(e) => setSize(Number(e.target.value))}
            className="mt-3 h-11 w-full cursor-pointer accent-forest"
          />
          <div className="flex justify-between text-sm font-semibold text-charcoal-soft tabular-nums">
            <span>{p.unit.min.toLocaleString("en-US")}</span>
            <span>{p.unit.max.toLocaleString("en-US")}</span>
          </div>
        </div>

        {p.usesStories && (
          <fieldset>
            <legend className="font-extrabold text-forest">Stories</legend>
            <div className="mt-3 grid grid-cols-3 gap-2">
              {([1, 2, 3] as Stories[]).map((s) => (
                <label key={s} className={`${SEG} ${stories === s ? on : off}`}>
                  <input type="radio" name={`${uid}-stories`} className="sr-only" checked={stories === s} onChange={() => setStories(s)} />
                  {s}
                  {s === 3 ? "+" : ""} {s === 1 ? "story" : "stories"}
                </label>
              ))}
            </div>
          </fieldset>
        )}

        <fieldset>
          <legend className="font-extrabold text-forest">Condition of the old paint</legend>
          <div className="mt-3 grid gap-2 sm:grid-cols-3">
            {(Object.keys(CONDITION) as Condition[]).map((c) => (
              <label
                key={c}
                className={`flex min-h-16 cursor-pointer flex-col justify-center rounded-2xl border-2 px-4 py-2 transition-colors has-[:focus-visible]:outline-3 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-charcoal ${condition === c ? on : off}`}
              >
                <input type="radio" name={`${uid}-cond`} className="sr-only" checked={condition === c} onChange={() => setCondition(c)} />
                <span className="font-extrabold">{CONDITION[c].label}</span>
                <span className={`text-sm ${condition === c ? "text-cream/90" : "text-charcoal-soft"}`}>{CONDITION[c].detail}</span>
              </label>
            ))}
          </div>
        </fieldset>
      </form>

      <div className="on-dark flex flex-col justify-between gap-8 bg-forest p-5 text-cream sm:p-8">
        <div aria-live="polite">
          <p className="font-extrabold text-gold">Ballpark range</p>
          <p className="mt-2 font-display text-[clamp(2.25rem,1.6rem+2.6vw,3.5rem)] leading-[1.05] tabular-nums">
            {formatUsd(range.low)}
            <span className="block text-[0.55em] text-cream/90">to {formatUsd(range.high)}</span>
          </p>
          <p className="mt-4 text-[0.95rem] text-cream/90">{p.includes}</p>
        </div>
        <div>
          <p className="rounded-xl bg-forest-deep px-4 py-3 text-sm text-cream/90">
            <strong className="text-cream">Ballpark only, not a quote.</strong> Repairs, colors, access and prep change the number.
            Your written quote is free and itemized.
          </p>
          <button
            type="button"
            onClick={handOff}
            className="mt-4 flex min-h-13 w-full items-center justify-center gap-2 rounded-full border-2 border-charcoal bg-gold px-6 py-3 text-lg font-extrabold text-charcoal shadow-[0_0_0_4px_#fff] transition-[transform,background-color] hover:bg-gold-deep active:scale-[0.98]"
          >
            Get a Free Estimate <ArrowIcon />
          </button>
          <p role="status" className="mt-2 min-h-5 text-center text-sm text-cream/90">
            {handedOff ? "Added to your estimate request." : (
              <>
                Or see <Link href="/our-promise" className="underline">our promises</Link> first.
              </>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}
