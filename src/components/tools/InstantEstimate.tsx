"use client";

import { useId, useState } from "react";
import { ballpark, CONDITION, formatUsd, PRICING, type Condition, type ProjectType, type Stories } from "@/config/pricing";

const TYPES = Object.keys(PRICING) as ProjectType[];

/**
 * EA-style instant estimate: pick the project, size, stories and condition,
 * and see a ballpark range right away. Rates live in config/pricing.ts.
 */
export function InstantEstimate() {
  const uid = useId();
  const [type, setType] = useState<ProjectType>("exterior");
  const p = PRICING[type];
  const [sizes, setSizes] = useState<Record<ProjectType, number>>(
    Object.fromEntries(TYPES.map((t) => [t, PRICING[t].unit.default])) as Record<ProjectType, number>,
  );
  const [stories, setStories] = useState<Stories>(2);
  const [condition, setCondition] = useState<Condition>("fair");
  const size = sizes[type];
  const { low, high } = ballpark({ type, size, stories, condition });
  const pct = ((size - p.unit.min) / (p.unit.max - p.unit.min)) * 100;

  const CHIP = "inline-flex min-h-11 cursor-pointer items-center rounded-full border px-4 font-semibold transition-colors has-[:checked]:border-pine has-[:checked]:bg-pine has-[:checked]:text-white has-[:focus-visible]:outline-3 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-ink";

  return (
    <div className="grid overflow-hidden rounded-[1.75rem] bg-white shadow-card ring-1 ring-ink/5 lg:grid-cols-[1.4fr_1fr]">
      <div className="space-y-7 p-6 md:p-8">
        <fieldset>
          <legend className="text-lg font-extrabold">1. What are we painting?</legend>
          <div className="mt-3 flex flex-wrap gap-2.5">
            {TYPES.map((t) => (
              <label key={t} className={`${CHIP} border-line`}>
                <input type="radio" name={`${uid}-type`} value={t} checked={type === t} onChange={() => setType(t)} className="sr-only" />
                {PRICING[t].label}
              </label>
            ))}
          </div>
        </fieldset>

        <div>
          <label htmlFor={`${uid}-size`} className="flex items-baseline justify-between gap-4 text-lg font-extrabold">
            2. How big is it?
            <span className="text-base font-bold text-pine">
              {size.toLocaleString("en-US")} {size === 1 ? p.unit.name : p.unit.plural}
            </span>
          </label>
          <input
            id={`${uid}-size`}
            type="range"
            min={p.unit.min}
            max={p.unit.max}
            step={p.unit.step}
            value={size}
            onChange={(e) => setSizes((s) => ({ ...s, [type]: Number(e.target.value) }))}
            className="mt-4 h-2 w-full cursor-pointer appearance-none rounded-full accent-pine"
            style={{ background: `linear-gradient(90deg, var(--color-pine) ${pct}%, var(--color-line) ${pct}%)` }}
          />
          <div className="mt-1 flex justify-between text-sm text-ink-soft">
            <span>{p.unit.min.toLocaleString("en-US")}</span>
            <span>{p.unit.max.toLocaleString("en-US")}</span>
          </div>
        </div>

        {p.usesStories && (
          <fieldset>
            <legend className="text-lg font-extrabold">3. How many stories?</legend>
            <div className="mt-3 flex flex-wrap gap-2.5">
              {([1, 2, 3] as Stories[]).map((n) => (
                <label key={n} className={`${CHIP} border-line`}>
                  <input type="radio" name={`${uid}-stories`} checked={stories === n} onChange={() => setStories(n)} className="sr-only" />
                  {n === 3 ? "3 stories" : `${n} stor${n === 1 ? "y" : "ies"}`}
                </label>
              ))}
            </div>
          </fieldset>
        )}

        <fieldset>
          <legend className="text-lg font-extrabold">{p.usesStories ? "4" : "3"}. What shape is the old paint in?</legend>
          <div className="mt-3 grid gap-2.5 sm:grid-cols-3">
            {(Object.keys(CONDITION) as Condition[]).map((c) => (
              <label key={c} className={`${CHIP} flex-col items-start rounded-2xl border-line py-3`}>
                <input type="radio" name={`${uid}-condition`} checked={condition === c} onChange={() => setCondition(c)} className="sr-only" />
                <span>{CONDITION[c].label}</span>
                <span className="text-sm font-normal opacity-80">{CONDITION[c].detail}</span>
              </label>
            ))}
          </div>
        </fieldset>
      </div>

      <div className="on-dark flex flex-col justify-center bg-pine p-6 text-white md:p-8">
        <p className="text-sm font-bold tracking-[0.14em] uppercase">Your rough estimate</p>
        <p className="mt-2 text-[clamp(2.25rem,1.6rem+2.5vw,3.25rem)] leading-none font-extrabold" aria-live="polite">
          {formatUsd(low)} <span className="text-white/70">to</span> {formatUsd(high)}
        </p>
        <p className="mt-4 text-white/90">{p.includes}</p>
        <p className="mt-4 rounded-2xl bg-pine-deep px-4 py-3 text-sm text-white/90">
          A ballpark only, for typical Eastside homes. Your written quote comes after a free walkthrough, and that&apos;s the price you pay.
        </p>
        <a href="#quote" className="mt-6 inline-flex min-h-12 items-center justify-center rounded-full bg-honey px-6 font-bold text-ink hover:bg-honey-deep">
          Get my exact price
        </a>
      </div>
    </div>
  );
}
