"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { CaretIcon, CloseIcon, MenuIcon } from "@/components/ui/Icons";
import type { MenuEntry } from "@/data/navigation";

/** Menu for phones and tablets: groups open like an accordion. */
export function MobileMenu({ items }: { items: MenuEntry[] }) {
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

  return (
    <div ref={root} className="lg:hidden">
      <button
        ref={button}
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
        className="inline-flex min-h-11 min-w-11 items-center justify-center gap-1.5 rounded-full border border-line px-4 font-bold text-ink"
      >
        {open ? <CloseIcon className="size-5" /> : <MenuIcon className="size-5" />}
        <span className="text-sm">Menu</span>
      </button>
      <nav
        id={panelId}
        aria-label="Main"
        hidden={!open}
        className="absolute inset-x-0 top-full max-h-[calc(100dvh-5rem)] overflow-y-auto border-b border-line bg-white px-4 pt-2 pb-6 shadow-card"
      >
        <ul className="mx-auto max-w-7xl divide-y divide-line">
          {items.map((item) =>
            item.children ? (
              <li key={item.label}>
                <button
                  type="button"
                  aria-expanded={group === item.label}
                  onClick={() => setGroup(group === item.label ? null : item.label)}
                  className="flex min-h-13 w-full items-center justify-between py-3 text-left text-lg font-bold text-ink"
                >
                  {item.label}
                  <CaretIcon className={`size-5 transition-transform ${group === item.label ? "rotate-180" : ""}`} />
                </button>
                <ul hidden={group !== item.label} className={`pb-3 ${item.wide ? "grid grid-cols-2" : ""}`}>
                  {item.children.map((c) => (
                    <li key={c.href}>
                      <Link href={c.href} onClick={() => setOpen(false)} className="flex min-h-11 items-center pl-3 font-semibold text-ink-soft">
                        {c.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ) : (
              <li key={item.label}>
                <Link href={item.href} onClick={() => setOpen(false)} className="flex min-h-13 items-center py-3 text-lg font-bold text-ink">
                  {item.label}
                </Link>
              </li>
            ),
          )}
        </ul>
        <Link
          href="/estimate"
          onClick={() => setOpen(false)}
          className="mt-4 flex min-h-12 items-center justify-center rounded-full bg-honey font-bold text-ink"
        >
          Get a Free Estimate
        </Link>
      </nav>
    </div>
  );
}
