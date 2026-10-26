"use client";

import { useRef, type ReactNode } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@/components/ui/Icons";

/**
 * A row of cards that scrolls sideways (snap), with Panda's round prev/next
 * buttons. Swipe works on phones; the buttons work with keyboard and mouse.
 */
export function Slider({ label, children }: { label: string; children: ReactNode }) {
  const track = useRef<HTMLUListElement>(null);
  const go = (dir: 1 | -1) => {
    const el = track.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("li");
    const step = card ? card.offsetWidth + 24 : el.clientWidth * 0.8;
    const max = el.scrollWidth - el.clientWidth - 4;
    if (dir === 1 && el.scrollLeft >= max) el.scrollTo({ left: 0, behavior: "smooth" });
    else if (dir === -1 && el.scrollLeft <= 4) el.scrollTo({ left: max, behavior: "smooth" });
    else el.scrollBy({ left: dir * step, behavior: "smooth" });
  };
  const BTN = "flex size-11 items-center justify-center rounded-full bg-white text-ink shadow-card transition-colors hover:bg-honey";
  return (
    <div role="region" aria-roledescription="carousel" aria-label={label}>
      <div className="flex justify-end gap-2">
        <button type="button" onClick={() => go(-1)} className={BTN} aria-label="Previous">
          <ChevronLeftIcon />
        </button>
        <button type="button" onClick={() => go(1)} className={BTN} aria-label="Next">
          <ChevronRightIcon />
        </button>
      </div>
      <ul
        ref={track}
        tabIndex={0}
        className="mt-5 rounded-[var(--radius-card)] focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-honey flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {children}
      </ul>
    </div>
  );
}
