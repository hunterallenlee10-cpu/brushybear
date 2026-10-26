import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "secondary-on-dark";

const BASE =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 py-3 text-base font-bold leading-tight transition-colors duration-200";

const VARIANTS: Record<Variant, string> = {
  // Honey pill with ink text (9.2:1).
  primary: "bg-honey text-ink hover:bg-honey-deep",
  secondary: "border-2 border-pine text-pine hover:bg-pine hover:text-white",
  "secondary-on-dark": "border-2 border-white text-white hover:bg-white hover:text-ink",
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
