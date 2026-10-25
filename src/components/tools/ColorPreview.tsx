"use client";

import { useRouter } from "next/navigation";
import { useId, useState } from "react";
import { CraftsmanHouse } from "@/components/tools/CraftsmanHouse";
import { ArrowIcon, CheckIcon } from "@/components/ui/Icons";
import { PALETTES } from "@/data/palettes";
import { track } from "@/lib/analytics";
import { sendPrefill } from "@/lib/prefill";

/**
 * Try a palette on a drawn Eastside craftsman, then carry it into the
 * estimate form. Swatches are a native radio group (arrow keys work).
 */
export function ColorPreview() {
  const uid = useId();
  const router = useRouter();
  const [id, setId] = useState(PALETTES[0].id);
  const [handedOff, setHandedOff] = useState(false);
  const palette = PALETTES.find((p) => p.id === id)!;

  const use = () => {
    track("palette_handoff", { palette: palette.id });
    const found = sendPrefill({ services: ["exterior"], palette: palette.name });
    setHandedOff(found);
    if (!found) router.push("/estimate");
  };

  return (
    <div className="grid gap-6 lg:grid-cols-[1.45fr_1fr] lg:gap-10">
      <div className="self-start overflow-hidden rounded-[1.75rem] border-2 border-charcoal bg-white shadow-[0_0_0_5px_#fff,0_30px_50px_-30px_rgb(22_56_41/0.6)]">
        <CraftsmanHouse palette={palette} className="block h-auto w-full" />
      </div>

      <div className="flex flex-col">
        <fieldset>
          <legend className="font-extrabold text-forest">Pick a palette</legend>
          <div className="mt-3 grid grid-cols-2 gap-2.5">
            {PALETTES.map((p) => {
              const active = p.id === id;
              return (
                <label
                  key={p.id}
                  className={`flex min-h-14 cursor-pointer items-center gap-3 rounded-2xl border-2 px-3 py-2 transition-colors has-[:focus-visible]:outline-3 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-charcoal ${
                    active ? "border-forest bg-pale" : "border-charcoal/15 bg-white hover:border-forest"
                  }`}
                >
                  <input
                    type="radio"
                    name={`${uid}-palette`}
                    value={p.id}
                    checked={active}
                    onChange={() => {
                      setId(p.id);
                      setHandedOff(false);
                    }}
                    className="sr-only"
                  />
                  <span aria-hidden="true" className="flex shrink-0 overflow-hidden rounded-lg border border-charcoal/25">
                    <span className="h-9 w-5" style={{ background: p.body }} />
                    <span className="h-9 w-2.5" style={{ background: p.trim }} />
                    <span className="h-9 w-2.5" style={{ background: p.door }} />
                  </span>
                  <span className="text-sm leading-tight font-bold text-charcoal">{p.name}</span>
                  {active && <CheckIcon className="ml-auto size-4 shrink-0 text-forest" />}
                </label>
              );
            })}
          </div>
        </fieldset>

        <p className="mt-4 text-sm text-charcoal-soft">
          Siding: {palette.words.body}. Trim: {palette.words.trim}. Door: {palette.words.door}. Screen colors are close, not exact; we bring
          real samples to the walkthrough.
        </p>

        <button
          type="button"
          onClick={use}
          className="mt-5 flex min-h-13 w-full items-center justify-center gap-2 rounded-full border-2 border-charcoal bg-gold px-6 py-3 text-lg font-extrabold text-charcoal shadow-[0_0_0_4px_#fff,0_14px_24px_-14px_rgb(43_43_43/0.7)] transition-[transform,background-color] hover:bg-gold-deep active:scale-[0.98]"
        >
          Use this palette in my estimate <ArrowIcon />
        </button>
        <p role="status" className="mt-2 min-h-5 text-center text-sm font-semibold text-forest">
          {handedOff ? `${palette.name} added to your estimate request.` : ""}
        </p>
      </div>
    </div>
  );
}
