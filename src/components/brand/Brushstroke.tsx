import type { ReactNode } from "react";

/**
 * A gold paint swipe that paints in behind a few words of a headline.
 * The text is visible from the first frame; only the swipe animates
 * (CSS, 400 ms, off for reduced motion).
 */
export function PaintSwipe({ children, color = "var(--color-gold)" }: { children: ReactNode; color?: string }) {
  return (
    <span className="relative isolate inline-block whitespace-nowrap">
      <svg
        aria-hidden="true"
        viewBox="0 0 300 60"
        preserveAspectRatio="none"
        className="paint-swipe pointer-events-none absolute -inset-x-[4%] bottom-[0.02em] -z-10 h-[0.62em] w-[108%]"
      >
        <path
          d="M6 38 C 50 24, 96 30, 140 27 S 230 20, 294 30"
          fill="none"
          stroke={color}
          strokeWidth="34"
          strokeLinecap="round"
          pathLength={1}
        />
        <path d="M18 47 C 70 40, 140 44, 210 39 S 270 37, 288 41" fill="none" stroke={color} strokeWidth="6" strokeLinecap="round" opacity="0.55" pathLength={1} />
      </svg>
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
