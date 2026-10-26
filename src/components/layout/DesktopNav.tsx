"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { CaretIcon } from "@/components/ui/Icons";
import type { MenuEntry } from "@/data/navigation";

/**
 * Desktop menu with dropdowns. Opens on hover or click, and from the
 * keyboard (Enter/Space/ArrowDown on the button); Escape closes and returns
 * focus to the button.
 */
export function DesktopNav({ items }: { items: MenuEntry[] }) {
  const [open, setOpen] = useState<string | null>(null);
  const root = useRef<HTMLElement>(null);
  const timer = useRef<number | undefined>(undefined);
  const path = usePathname();

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      root.current?.querySelector<HTMLButtonElement>(`[data-menu="${open}"]`)?.focus();
      setOpen(null);
    };
    const onPointer = (e: PointerEvent) => {
      if (!root.current?.contains(e.target as Node)) setOpen(null);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
    };
  }, [open]);

  const enter = (label: string) => {
    window.clearTimeout(timer.current);
    setOpen(label);
  };
  const leave = () => {
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setOpen(null), 160);
  };

  const active = (href: string) => (href === "/" ? path === "/" : path === href || path.startsWith(`${href}/`));
  const LINK = "inline-flex min-h-11 items-center gap-1 rounded-md px-1 text-[0.97rem] font-semibold text-ink-soft transition-colors hover:text-pine";

  return (
    <nav ref={root} aria-label="Main" className="hidden lg:block">
      <ul className="flex items-center gap-6 xl:gap-8">
        {items.map((item) => {
          if (!item.children) {
            return (
              <li key={item.label}>
                <Link href={item.href} className={`${LINK} ${active(item.href) ? "text-pine" : ""}`} aria-current={path === item.href ? "page" : undefined}>
                  {item.label}
                </Link>
              </li>
            );
          }
          const isOpen = open === item.label;
          const panelId = `menu-${item.label.toLowerCase().replace(/\W+/g, "-")}`;
          return (
            <li key={item.label} className="relative" onPointerEnter={(e) => e.pointerType === "mouse" && enter(item.label)} onPointerLeave={(e) => e.pointerType === "mouse" && leave()}>
              <button
                type="button"
                data-menu={item.label}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : item.label)}
                onKeyDown={(e) => {
                  if (e.key === "ArrowDown") {
                    e.preventDefault();
                    setOpen(item.label);
                    requestAnimationFrame(() => document.getElementById(panelId)?.querySelector<HTMLElement>("a")?.focus());
                  }
                }}
                className={`${LINK} ${active(item.href) ? "text-pine" : ""}`}
              >
                {item.label}
                <CaretIcon className={`size-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
              </button>
              <div
                id={panelId}
                hidden={!isOpen}
                className={`absolute top-full left-1/2 z-50 -translate-x-1/2 pt-3 ${item.wide ? "w-[34rem]" : "w-64"}`}
              >
                <ul className={`rounded-2xl border border-line bg-white p-2 shadow-card ${item.wide ? "grid grid-cols-3 gap-x-1" : ""}`}>
                  {item.children.map((c) => (
                    <li key={c.href}>
                      <Link
                        href={c.href}
                        onClick={() => setOpen(null)}
                        className="block rounded-lg px-3 py-2 text-[0.95rem] font-semibold text-ink hover:bg-mist hover:text-pine focus-visible:bg-mist"
                      >
                        {c.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
