import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  /** Slight tilt in degrees (-3 to 3 looks hand-placed). */
  tilt?: number;
  className?: string;
  innerClassName?: string;
  as?: "div" | "li" | "article";
};

/**
 * The logo's die-cut sticker as a container: white border, charcoal outline,
 * soft shadow. Used for promise badges and other small moments.
 */
export function Sticker({ children, tilt = 0, className = "", innerClassName = "", as: Tag = "div" }: Props) {
  return (
    <Tag className={`sticker ${className}`} style={tilt ? { rotate: `${tilt}deg` } : undefined}>
      <div className={`sticker-inner ${innerClassName}`}>{children}</div>
    </Tag>
  );
}
