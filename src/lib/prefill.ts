"use client";

/**
 * Lets the color preview and price estimator hand their result to the lead
 * form ("Use this palette in my estimate"). Kept in sessionStorage too, so
 * a form on another page (/estimate) picks it up.
 */
export type Prefill = {
  services?: string[];
  palette?: string;
  ballpark?: string;
};

const KEY = "bb-prefill";
export const PREFILL_EVENT = "bb:prefill";

export function sendPrefill(p: Prefill) {
  const merged = { ...readPrefill(), ...p };
  try {
    sessionStorage.setItem(KEY, JSON.stringify(merged));
  } catch {
    // Private mode or storage blocked: the event below still works on this page.
  }
  window.dispatchEvent(new CustomEvent<Prefill>(PREFILL_EVENT, { detail: merged }));

  // Bring the visible form into view and put the cursor in it.
  const form = Array.from(document.querySelectorAll<HTMLElement>("[data-lead-form]")).find((el) => el.offsetParent !== null);
  if (form) {
    form.scrollIntoView({ behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "center" });
    window.setTimeout(() => form.querySelector<HTMLElement>("input:not([type=hidden]):not([tabindex='-1'])")?.focus({ preventScroll: true }), 500);
    return true;
  }
  return false;
}

export function readPrefill(): Prefill {
  try {
    return JSON.parse(sessionStorage.getItem(KEY) || "{}") as Prefill;
  } catch {
    return {};
  }
}

export function clearPrefill(key: keyof Prefill) {
  const p = readPrefill();
  delete p[key];
  try {
    sessionStorage.setItem(KEY, JSON.stringify(p));
  } catch {
    // ignore
  }
}
