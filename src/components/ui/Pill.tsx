import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowIcon } from "@/components/ui/Icons";

export type PillVariant = "honey" | "ink" | "white" | "pine" | "outline-white" | "outline";

const VARIANTS: Record<PillVariant, string> = {
  honey: "bg-honey text-ink hover:bg-honey-deep",
  ink: "bg-ink text-white hover:bg-pine-deep",
  white: "bg-white text-ink hover:bg-mist",
  pine: "bg-pine text-white hover:bg-pine-deep",
  "outline-white": "border-2 border-white text-white hover:bg-white hover:text-ink",
  outline: "border-2 border-pine text-pine hover:bg-pine hover:text-white",
};

/** Panda's rounded pill button, as a link. tel:/mailto: use a plain <a>. */
export function Pill({
  href,
  children,
  variant = "honey",
  size = "md",
  arrow = false,
  className = "",
  event,
  location,
}: {
  href: string;
  children: ReactNode;
  variant?: PillVariant;
  size?: "sm" | "md" | "lg";
  arrow?: boolean;
  className?: string;
  event?: string;
  location?: string;
}) {
  const sz = size === "sm" ? "min-h-10 px-5 text-sm" : size === "lg" ? "min-h-14 px-8 text-lg" : "min-h-12 px-6";
  const cls = `inline-flex items-center justify-center gap-2 rounded-full font-bold transition-colors ${sz} ${VARIANTS[variant]} ${className}`;
  const data = { "data-event": event, "data-location": location };
  const body = (
    <>
      {children}
      {arrow && <ArrowIcon />}
    </>
  );
  if (/^(tel|sms|mailto):/.test(href)) {
    return (
      <a href={href} className={cls} {...data}>
        {body}
      </a>
    );
  }
  return (
    <Link href={href} className={cls} {...data}>
      {body}
    </Link>
  );
}
