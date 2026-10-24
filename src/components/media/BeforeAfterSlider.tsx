"use client";

import Image from "next/image";
import { useId, useState } from "react";
import type { GalleryItem } from "@/data/gallery";

/**
 * Drag (or arrow-key) slider between a real job's before and after photos.
 * Uses a native range input, so it works with keyboard, touch and screen
 * readers. Only ever shown with real-job photos from gallery.ts.
 */
export function BeforeAfterSlider({ item }: { item: GalleryItem }) {
  const [pos, setPos] = useState(50);
  const id = useId();
  return (
    <figure className="sticker [--sticker-pad:0.5rem]">
      <div className="sticker-inner relative overflow-hidden" style={{ aspectRatio: `${item.after.width}/${item.after.height}` }}>
        <Image src={item.after} alt={item.afterAlt} fill sizes="(min-width: 1280px) 1200px, 100vw" className="object-cover" />
        <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
          <Image src={item.before} alt={item.beforeAlt} fill sizes="(min-width: 1280px) 1200px, 100vw" className="object-cover" />
        </div>
        <div className="pointer-events-none absolute inset-y-0 w-1 -translate-x-1/2 bg-white shadow-[0_0_0_2px_var(--color-charcoal)]" style={{ left: `${pos}%` }} aria-hidden="true">
          <span className="absolute top-1/2 left-1/2 flex size-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-charcoal bg-gold font-extrabold">
            ↔
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
      <figcaption className="px-2 pt-3 pb-1 text-sm font-semibold text-charcoal-soft">{item.caption}</figcaption>
    </figure>
  );
}
