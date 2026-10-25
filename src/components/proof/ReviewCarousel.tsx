"use client";

import { useRef, useState } from "react";
import { NextIcon, PrevIcon, StarIcon } from "@/components/ui/Icons";
import type { Review } from "@/data/reviews";

const AVATAR = ["bg-forest text-cream", "bg-gold text-charcoal", "bg-sage text-white", "bg-pale text-forest"];

function Card({ r, i }: { r: Review; i: number }) {
  const [open, setOpen] = useState(false);
  const long = r.text.length > 220;
  return (
    <li className="flex w-[85%] shrink-0 snap-start flex-col rounded-[1.5rem] border-2 border-cream-200 bg-cream-50 p-6 sm:w-[46%] lg:w-[31.5%]">
      <div className="flex items-center gap-3">
        <span aria-hidden="true" className={`flex size-11 items-center justify-center rounded-full font-display text-xl ${AVATAR[i % AVATAR.length]}`}>
          {r.author.trim().charAt(0).toUpperCase()}
        </span>
        <div>
          <p className="font-extrabold text-forest">{r.author}</p>
          <p className="text-sm text-charcoal-soft">{r.city}</p>
        </div>
      </div>
      <p className="mt-4 flex gap-0.5 text-gold" role="img" aria-label={`${r.rating} out of 5 stars`}>
        {Array.from({ length: 5 }, (_, k) => (
          <StarIcon key={k} className={`size-5 ${k < r.rating ? "" : "opacity-30"}`} />
        ))}
      </p>
      <blockquote className={`mt-3 ${open ? "" : "line-clamp-4"}`}>{r.text}</blockquote>
      <div className="mt-auto flex items-center justify-between pt-4 text-sm font-bold">
        {long ? (
          <button type="button" aria-expanded={open} onClick={() => setOpen((v) => !v)} className="min-h-11 text-forest underline">
            {open ? "Show less" : "Read more"}
          </button>
        ) : (
          <span />
        )}
        <a href={r.url} rel="noopener" target="_blank" className="min-h-11 content-center text-charcoal-soft underline">
          {r.source}
        </a>
      </div>
    </li>
  );
}

/**
 * Real reviews only (from reviews.ts), in a swipeable row with buttons.
 * Initial avatars, never stock faces.
 */
export function ReviewCarousel({ reviews }: { reviews: Review[] }) {
  const track = useRef<HTMLUListElement>(null);
  const move = (dir: 1 | -1) => track.current?.scrollBy({ left: dir * track.current.clientWidth * 0.8, behavior: "smooth" });
  return (
    <div>
      <ul ref={track} className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 [scrollbar-width:thin]">
        {reviews.map((r, i) => (
          <Card key={`${r.author}-${r.date}`} r={r} i={i} />
        ))}
      </ul>
      <div className="mt-4 flex gap-3">
        <button type="button" onClick={() => move(-1)} className="flex size-12 items-center justify-center rounded-full border-2 border-forest text-forest hover:bg-pale">
          <PrevIcon />
          <span className="sr-only">Previous reviews</span>
        </button>
        <button type="button" onClick={() => move(1)} className="flex size-12 items-center justify-center rounded-full border-2 border-forest text-forest hover:bg-pale">
          <NextIcon />
          <span className="sr-only">Next reviews</span>
        </button>
      </div>
    </div>
  );
}
