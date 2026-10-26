import type { ReactNode } from "react";

/**
 * Panda-style section title: a small eyebrow, the title, and an optional
 * second line in the accent color ("About **Our Team**").
 */
export function Title({
  eyebrow,
  title,
  accent,
  intro,
  id,
  align = "center",
  dark = false,
  as: H = "h2",
  className = "",
}: {
  eyebrow?: string;
  title: ReactNode;
  accent?: ReactNode;
  intro?: ReactNode;
  id?: string;
  align?: "center" | "left";
  dark?: boolean;
  as?: "h1" | "h2";
  className?: string;
}) {
  const center = align === "center";
  return (
    <div className={`${center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"} ${className}`}>
      {eyebrow && (
        <p className={`text-sm font-bold uppercase tracking-[0.16em] ${dark ? "text-white/90" : "text-pine-bright"}`}>{eyebrow}</p>
      )}
      <H id={id} className={`${eyebrow ? "mt-2" : ""} text-display-lg ${dark ? "text-white" : "text-ink"}`}>
        {title}
        {accent && (
          <>
            {" "}
            <span className={`block ${dark ? "text-honey" : "text-pine"}`}>{accent}</span>
          </>
        )}
      </H>
      {intro && <div className={`mt-4 text-lg ${dark ? "text-white/85" : "text-ink-soft"}`}>{intro}</div>}
    </div>
  );
}
