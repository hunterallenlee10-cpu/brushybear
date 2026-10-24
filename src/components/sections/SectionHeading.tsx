import type { ReactNode } from "react";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  id?: string;
  align?: "left" | "center";
  onDark?: boolean;
  className?: string;
};

/** Eyebrow + display H2 + optional intro. Every section uses this. */
export function SectionHeading({ eyebrow, title, intro, id, align = "left", onDark = false, className = "" }: Props) {
  const center = align === "center";
  return (
    <div className={`${center ? "mx-auto text-center" : ""} max-w-3xl ${className}`}>
      {eyebrow && (
        <p className={`text-sm font-extrabold uppercase tracking-[0.14em] ${onDark ? "text-gold" : "text-forest"}`}>{eyebrow}</p>
      )}
      <h2 id={id} className={`mt-3 font-display text-display-lg ${onDark ? "text-cream" : "text-forest"}`}>
        {title}
      </h2>
      {intro && <div className={`mt-4 text-lg md:text-xl ${onDark ? "text-cream/90" : "text-charcoal"}`}>{intro}</div>}
    </div>
  );
}
