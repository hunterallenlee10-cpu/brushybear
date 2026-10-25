"use client";

/**
 * Always-visible way past the scroll animation. On desktop it puts the
 * cursor in the hero's estimate card; on phones it jumps to the form right
 * under the hero. Without JavaScript it's a plain link to #quote.
 */
export function SkipToEstimate() {
  const go = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const card = document.querySelector<HTMLElement>("#quote-hero [data-lead-form]");
    const target = card && card.offsetParent !== null ? card : document.querySelector<HTMLElement>("#quote [data-lead-form]");
    if (!target) return;
    e.preventDefault();
    // Opens the hero's card drawer (desktop) before focusing it.
    target.closest<HTMLElement>("#quote-hero")?.setAttribute("data-open", "");
    target.scrollIntoView({ block: "center", behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
    target.querySelector<HTMLElement>("input:not([tabindex='-1'])")?.focus({ preventScroll: true });
  };
  return (
    <a
      href="#quote"
      onClick={go}
      className="inline-flex min-h-11 items-center gap-2 rounded-full border-2 border-cream/80 bg-forest-deep/70 px-4 text-sm font-extrabold text-cream backdrop-blur-sm hover:bg-forest-deep"
    >
      Skip to estimate
    </a>
  );
}
