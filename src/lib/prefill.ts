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

  // Bring the nearest form into view: a mounted form, or the closing
  // estimate band (its form mounts as it nears the screen and reads the
  // saved prefill then).
  const center = window.innerHeight / 2;
  const targets = [
    ...Array.from(document.querySelectorAll<HTMLElement>("[data-lead-form]")),
    ...Array.from(document.querySelectorAll<HTMLElement>("section#estimate")),
  ].filter((el) => el.offsetParent !== null);
  const dist = (el: HTMLElement) => {
    const r = el.getBoundingClientRect();
    return Math.abs(r.top + r.height / 2 - center);
  };
  const target = targets.sort((a, b) => dist(a) - dist(b))[0];
  if (!target) return false;
  target.closest<HTMLElement>("#quote-hero")?.setAttribute("data-open", "");
  const smooth = !matchMedia("(prefers-reduced-motion: reduce)").matches;
  target.scrollIntoView({ behavior: smooth ? "smooth" : "auto", block: "center" });
  window.setTimeout(() => {
    const form = target.matches("[data-lead-form]") ? target : target.querySelector<HTMLElement>("[data-lead-form]");
    form?.querySelector<HTMLElement>("input:not([type=hidden]):not([tabindex='-1'])")?.focus({ preventScroll: true });
  }, 700);
  return true;
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
