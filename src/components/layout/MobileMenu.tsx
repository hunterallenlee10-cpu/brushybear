"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { CloseIcon, MenuIcon } from "@/components/ui/Icons";
import type { NavItem } from "@/data/navigation";

/** Menu for phones and tablets. Closes on link tap, Escape, or tapping outside. */
export function MobileMenu({ items }: { items: NavItem[] }) {
  const [open, setOpen] = useState(false);
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
        className="inline-flex min-h-11 min-w-11 items-center justify-center gap-1.5 rounded-full border-2 border-forest px-3 font-bold text-forest"
      >
        {open ? <CloseIcon /> : <MenuIcon />}
        <span className="text-sm">Menu</span>
      </button>
      <nav
        id={panelId}
        aria-label="Main"
        hidden={!open}
        className="absolute inset-x-0 top-full border-b border-cream-200 bg-cream-50 px-4 pb-6 pt-2 shadow-[0_24px_40px_-24px_rgb(43_43_43/0.5)]"
      >
        <ul className="mx-auto max-w-7xl divide-y divide-cream-200">
          {items.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex min-h-12 items-center text-lg font-bold text-forest"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
