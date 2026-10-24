"use client";

import { track as vercelTrack } from "@vercel/analytics";

type Props = Record<string, string | number | boolean | null>;

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

/**
 * One call records an event in Vercel Analytics and pushes it to a GA4-ready
 * dataLayer. Events: estimate_cta, estimate_start, estimate_step_2,
 * estimate_submit, estimate_error, call_click, text_click.
 */
export function track(event: string, props: Props = {}) {
  try {
    vercelTrack(event, props);
  } catch {
    // Analytics must never break the page.
  }
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...props });
}
