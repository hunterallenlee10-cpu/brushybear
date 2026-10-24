"use client";

import { useEffect } from "react";
import { track } from "@/lib/analytics";

/**
 * One listener for every tracked link: anything with data-event (Call, Text
 * and estimate buttons) reports a click with its data-location.
 */
export function AnalyticsListener() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const el = (e.target as Element | null)?.closest<HTMLElement>("[data-event]");
      if (!el?.dataset.event) return;
      track(el.dataset.event, { location: el.dataset.location ?? "unknown" });
    };
    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, []);
  return null;
}
