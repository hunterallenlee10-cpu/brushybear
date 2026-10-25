"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { CaretIcon, CloseIcon, MenuIcon } from "@/components/ui/Icons";
import type { MainNavEntry } from "@/data/navigation";

/**
 * Menu for phones and tablets: groups fold open in place. Closes on link
 * tap, Escape, or tapping outside.
 */
export function MobileMenu({ entries, estimateHref }: { entries: MainNavEntry[]; estimateHref: string }) {
  const [open, setOpen] = useState(false);
  const [group, setGroup] = useState<string | null>(null);
  const panelId = useId();
  const root = useRef<HTMLDivElement>(null);
  const button = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        button.current?.focus();
      }
    };
    const onPointer = (e: PointerEvent) => {
      if (!root.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
    };
  }, [open]);

  const done = () => setOpen(false);

  return (
    <div ref={root} className="lg:hidden">
      <button
        ref={button}
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
        className="inline-flex min-h-11 min-w-11 items-center justify-center gap-1.5 rounded-full border-2 border-forest px-3 font-bold text-forest"
      >
        {open ? <CloseIcon /> : <MenuIcon />}
        <span className="text-sm">Menu</span>
      </button>
      <nav
        id={panelId}
        aria-label="Main"
        hidden={!open}
        className="absolute inset-x-0 top-full max-h-[calc(100dvh-7rem)] overflow-y-auto border-b border-cream-200 bg-cream-50 px-4 pt-2 pb-6 shadow-[0_24px_40px_-24px_rgb(31_77_58/0.5)]"
      >
        <ul className="mx-auto max-w-7xl divide-y divide-cream-200">
          {entries.map((entry) =>
            entry.kind === "link" ? (
              <li key={entry.href}>
                <Link href={entry.href} onClick={done} className="flex min-h-13 items-center text-lg font-bold text-forest">
                  {entry.label}
                </Link>
              </li>
            ) : (
              <li key={entry.label}>
                <button
                  type="button"
                  aria-expanded={group === entry.label}
                  onClick={() => setGroup((g) => (g === entry.label ? null : entry.label))}
                  className="flex min-h-13 w-full items-center justify-between text-lg font-bold text-forest"
                >
                  {entry.label}
                  <CaretIcon className={`size-4 transition-transform ${group === entry.label ? "rotate-180" : ""}`} />
                </button>
                <ul hidden={group !== entry.label} className="pb-3 pl-3">
                  {entry.links.map((l) => (
                    <li key={l.href}>
                      <Link href={l.href} onClick={done} className="flex min-h-11 items-center font-semibold text-charcoal">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                  <li>
                    <Link href={entry.href} onClick={done} className="flex min-h-11 items-center font-extrabold text-forest underline decoration-gold decoration-2 underline-offset-4">
                      {entry.allLabel}
                    </Link>
                  </li>
                </ul>
              </li>
            ),
          )}
        </ul>
        <Link
          href={estimateHref}
          onClick={done}
          data-event="estimate_cta"
          data-location="mobile_menu"
          className="mt-4 flex min-h-12 items-center justify-center rounded-full border-2 border-charcoal bg-gold px-6 font-extrabold text-charcoal"
        >
          Get a Free Estimate
        </Link>
      </nav>
    </div>
  );
}
