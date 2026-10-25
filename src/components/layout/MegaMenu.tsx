"use client";

import Link from "next/link";
import { useCallback, useEffect, useId, useRef, useState, type KeyboardEvent, type ReactNode } from "react";
import { CaretIcon } from "@/components/ui/Icons";

export type MegaEntry = { label: string; href?: string; panel?: ReactNode };

/**
 * Desktop menu. Groups open on click, Enter/Space, ArrowDown, or mouse
 * hover. Inside a panel the arrow keys move between links; Escape closes
 * and returns focus to the button; tabbing out closes. Panels are rendered
 * on the server and stay `hidden` (out of the tab order) while closed.
 */
export function MegaMenu({ entries }: { entries: MegaEntry[] }) {
  const [open, setOpen] = useState<number | null>(null);
  const uid = useId();
  const nav = useRef<HTMLElement>(null);
  const buttons = useRef<(HTMLButtonElement | null)[]>([]);
  const panels = useRef<(HTMLDivElement | null)[]>([]);
  const hoverTimer = useRef<number | undefined>(undefined);

  const close = useCallback((refocus?: number) => {
    setOpen(null);
    if (refocus !== undefined) buttons.current[refocus]?.focus();
  }, []);

  const links = (i: number) => Array.from(panels.current[i]?.querySelectorAll<HTMLAnchorElement>("a[href]") ?? []);

  useEffect(() => {
    if (open === null) return;
    const onPointer = (e: PointerEvent) => {
      if (!nav.current?.contains(e.target as Node)) setOpen(null);
    };
    document.addEventListener("pointerdown", onPointer);
    return () => document.removeEventListener("pointerdown", onPointer);
  }, [open]);

  useEffect(() => () => window.clearTimeout(hoverTimer.current), []);

  const onButtonKey = (i: number) => (e: KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setOpen(i);
      requestAnimationFrame(() => links(i)[0]?.focus());
    } else if (e.key === "Escape") {
      close(i);
    }
  };

  const onPanelKey = (i: number) => (e: KeyboardEvent<HTMLDivElement>) => {
    const list = links(i);
    const at = list.indexOf(document.activeElement as HTMLAnchorElement);
    if (e.key === "Escape") {
      e.preventDefault();
      close(i);
    } else if (e.key === "ArrowDown" || e.key === "ArrowRight") {
      e.preventDefault();
      list[(at + 1) % list.length]?.focus();
    } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
      e.preventDefault();
      if (at <= 0) buttons.current[i]?.focus();
      else list[at - 1]?.focus();
    } else if (e.key === "Home") {
      e.preventDefault();
      list[0]?.focus();
    } else if (e.key === "End") {
      e.preventDefault();
      list.at(-1)?.focus();
    }
  };

  const hover = (i: number | null) => (e: React.PointerEvent) => {
    if (e.pointerType !== "mouse") return;
    window.clearTimeout(hoverTimer.current);
    hoverTimer.current = window.setTimeout(() => setOpen(i), i === null ? 160 : 60);
  };

  return (
    <nav
      ref={nav}
      aria-label="Main"
      className="hidden lg:block"
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) setOpen(null);
      }}
    >
      <ul className="flex items-center gap-1 xl:gap-2">
        {entries.map((entry, i) => {
          if (!entry.panel) {
            return (
              <li key={entry.label}>
                <Link href={entry.href!} className="flex min-h-11 items-center rounded-full px-3 font-bold text-forest hover:bg-pale/70">
                  {entry.label}
                </Link>
              </li>
            );
          }
          const panelId = `${uid}-panel-${i}`;
          const isOpen = open === i;
          return (
            <li key={entry.label} onPointerEnter={hover(i)} onPointerLeave={hover(null)}>
              <button
                ref={(el) => {
                  buttons.current[i] = el;
                }}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : i)}
                onKeyDown={onButtonKey(i)}
                className={`flex min-h-11 items-center gap-1.5 rounded-full px-3 font-bold text-forest transition-colors hover:bg-pale/70 ${isOpen ? "bg-pale" : ""}`}
              >
                {entry.label}
                <CaretIcon className={`size-3.5 transition-transform duration-200 ease-paint ${isOpen ? "rotate-180" : ""}`} />
              </button>
              <div
                id={panelId}
                ref={(el) => {
                  panels.current[i] = el;
                }}
                hidden={!isOpen}
                onKeyDown={onPanelKey(i)}
                onClick={(e) => {
                  if ((e.target as HTMLElement).closest("a")) setOpen(null);
                }}
                className="mega-panel absolute inset-x-0 top-full border-y border-cream-200 bg-cream-50 shadow-[0_28px_40px_-28px_rgb(31_77_58/0.45)]"
              >
                <div className="mx-auto max-w-7xl px-8 py-8">{entry.panel}</div>
              </div>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
