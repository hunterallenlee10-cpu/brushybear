import type { ReactNode } from "react";
// A small WebP of the gold brushstroke (public/media), so it loads instantly.
const brushGoldSmall = "/media/brush-gold-swipe.webp";

/**
 * A gold paint swipe (a real brushstroke texture) that paints in behind a
 * few words of a headline. The text is visible from the first frame; only
 * the swipe animates (CSS clip, 400 ms, instant for reduced motion).
 */
export function PaintSwipe({ children, variant = "highlight" }: { children: ReactNode; variant?: "highlight" | "underline" }) {
  // "underline" sits under the word (for light text on dark backgrounds);
  // "highlight" sits behind it (for dark text on cream).
  const pos = variant === "underline" ? "-bottom-[0.12em] h-[0.28em]" : "bottom-[0.02em] h-[0.7em]";
  return (
    <span className={`relative isolate inline-block whitespace-nowrap ${variant === "underline" ? "text-gold" : ""}`}>
      <span
        aria-hidden="true"
        className={`paint-swipe-img pointer-events-none absolute -inset-x-[6%] -z-10 bg-[length:100%_100%] bg-no-repeat ${pos}`}
        style={{ backgroundImage: `url(${brushGoldSmall})` }}
      />
      <span className="relative">{children}</span>
    </span>
  );
}

// A hand-painted edge: uneven bumps across the full 1440-unit width.
const EDGE_Y = [30, 24, 33, 22, 29, 35, 25, 31, 21, 28, 34, 23, 30, 26, 33, 24, 29, 22, 31];
const EDGE_PATH = (() => {
  const step = 1440 / (EDGE_Y.length - 1);
  let d = `M0 48V${EDGE_Y[0]}`;
  for (let i = 1; i < EDGE_Y.length; i++) {
    const x = i * step;
    const cx = x - step / 2;
    d += `Q${cx.toFixed(1)} ${(EDGE_Y[i - 1] + EDGE_Y[i]) / 2 - 6 + (i % 3) * 4} ${x.toFixed(1)} ${EDGE_Y[i]}`;
  }
  return `${d}V48Z`;
})();

/**
 * A rough, hand-painted edge between two sections. Put it at the top of a
 * colored section; `color` is that section's background.
 */
export function BrushEdge({ color, flip = false, className = "" }: { color: string; flip?: boolean; className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1440 48"
      preserveAspectRatio="none"
      className={`-mb-px block h-6 w-full md:h-10 ${flip ? "-mt-px rotate-180" : ""} ${className}`}
    >
      <path fill={color} d={EDGE_PATH} />
    </svg>
  );
}
