"use client";

import Image from "next/image";
import { useId, useState } from "react";
import { SlideIcon } from "@/components/ui/Icons";
import type { GalleryItem } from "@/data/gallery";

type Props =
  | { item: GalleryItem; placeholder?: never }
  /** A labeled stand-in until real job photos exist. Never stock or AI. */
  | { item?: never; placeholder: { label: string; ratio?: string } };

function StandIn({ label, tone }: { label: string; tone: "before" | "after" }) {
  return (
    <div
      role="img"
      aria-label={`Placeholder: ${tone} photo, ${label}`}
      className={`absolute inset-0 flex items-end p-5 ${
        tone === "before"
          ? "bg-[repeating-linear-gradient(-45deg,#c9c4b8_0_16px,#bdb7aa_16px_32px)]"
          : "bg-[repeating-linear-gradient(-45deg,var(--color-pale)_0_16px,var(--color-mist)_16px_32px)]"
      }`}
    >
      <span className={`text-xs font-extrabold uppercase tracking-[0.1em] text-charcoal ${tone === "before" ? "" : "ml-auto text-right"}`}>
        {tone === "before" ? "Before" : "After"} photo
        <span className="block font-semibold normal-case tracking-normal">{label}</span>
      </span>
    </div>
  );
}

/**
 * Drag (or arrow-key) slider between before and after. A native range
 * input, so keyboard, touch and screen readers all work. Real-job photos
 * from gallery.ts, or labeled placeholders until those exist.
 */
export function BeforeAfterSlider(props: Props) {
  const [pos, setPos] = useState(50);
  const id = useId();
  const item = props.item;
  const ratio = item ? `${item.after.width}/${item.after.height}` : (props.placeholder?.ratio ?? "4/3");
  return (
    <figure className="sticker [--sticker-pad:0.5rem]">
      <div className="sticker-inner relative overflow-hidden" style={{ aspectRatio: ratio }}>
        {item ? (
          <Image src={item.after} alt={item.afterAlt} fill sizes="(min-width: 1280px) 600px, 100vw" className="object-cover" />
        ) : (
          <StandIn label={props.placeholder!.label} tone="after" />
        )}
        <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
          {item ? (
            <Image src={item.before} alt={item.beforeAlt} fill sizes="(min-width: 1280px) 600px, 100vw" className="object-cover" />
          ) : (
            <StandIn label={props.placeholder!.label} tone="before" />
          )}
        </div>
        <div className="pointer-events-none absolute inset-y-0 w-1 -translate-x-1/2 bg-white shadow-[0_0_0_2px_var(--color-charcoal)]" style={{ left: `${pos}%` }} aria-hidden="true">
          <span className="absolute top-1/2 left-1/2 flex size-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-charcoal bg-gold">
            <SlideIcon className="size-5" />
          </span>
        </div>
        <span className="absolute top-3 left-3 rounded-full bg-charcoal px-3 py-1 text-xs font-bold text-cream">Before</span>
        <span className="absolute top-3 right-3 rounded-full bg-gold px-3 py-1 text-xs font-bold text-charcoal">After</span>
        <label htmlFor={id} className="sr-only">
          Drag to compare before and after
        </label>
        <input
          id={id}
          type="range"
          min={0}
          max={100}
          value={pos}
          onChange={(e) => setPos(Number(e.target.value))}
          className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
        />
      </div>
      <figcaption className="px-2 pt-3 pb-1 text-sm font-semibold text-charcoal-soft">{item ? item.caption : props.placeholder!.label}</figcaption>
    </figure>
  );
}
