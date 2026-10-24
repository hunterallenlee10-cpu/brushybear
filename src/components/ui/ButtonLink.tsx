import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "secondary-on-dark";

const BASE =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 py-3 text-base font-extrabold leading-tight tracking-[-0.005em] transition-[transform,background-color,color,box-shadow] duration-200 ease-paint";

const VARIANTS: Record<Variant, string> = {
  // Gold with charcoal text (6.9:1), charcoal outline and a white sticker ring.
  primary:
    "border-2 border-charcoal bg-gold text-charcoal shadow-[0_0_0_4px_#fff,0_14px_24px_-14px_rgb(43_43_43/0.7)] hover:-translate-y-0.5 hover:bg-gold-deep active:translate-y-0",
  secondary: "border-2 border-forest text-forest hover:bg-forest hover:text-cream",
  "secondary-on-dark": "border-2 border-cream text-cream hover:bg-cream hover:text-forest",
};

type Props = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  /** Read by the analytics listener (build Phase 3). */
  event?: string;
  location?: string;
};

/** A link styled as a button. tel:, sms: and mailto: use a plain <a>. */
export function ButtonLink({ href, children, variant = "primary", className = "", event, location }: Props) {
  const cls = `${BASE} ${VARIANTS[variant]} ${className}`;
  const data = { "data-event": event, "data-location": location };
  if (/^(tel|sms|mailto):/.test(href)) {
    return (
      <a href={href} className={cls} {...data}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls} {...data}>
      {children}
    </Link>
  );
}
