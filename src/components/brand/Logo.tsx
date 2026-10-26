import Image from "next/image";
import bearRoller from "@/assets/brand/logo-bear-roller.png";
import { SITE } from "@/config/site";

type Props = {
  /** "light" for white backgrounds, "dark" for the ink footer and dark bands. */
  tone?: "light" | "dark";
  /** Bear height and type size. */
  size?: "sm" | "md" | "lg";
  className?: string;
  /** Load the bear right away, without preloading (the hero photo keeps top priority). */
  preload?: boolean;
};

const SIZES = {
  sm: { bear: "h-11", name: "text-[1.45rem]", sub: "text-[0.7rem]", px: "48px" },
  md: { bear: "h-14 md:h-[4.25rem]", name: "text-[1.55rem] md:text-[1.9rem]", sub: "text-[0.72rem] md:text-[0.82rem]", px: "(min-width: 768px) 72px, 56px" },
  lg: { bear: "h-24", name: "text-[2.35rem]", sub: "text-[1rem]", px: "104px" },
};

/**
 * The Brushy Bear lockup: the logo bear (cut from the master logo files)
 * beside the name set in Fredoka. "Brushy Bear" in pine, "PAINTERS" in
 * honey, the same two colors as the logo.
 */
export function Wordmark({ tone = "light", size = "md", className = "", preload = false }: Props) {
  const s = SIZES[size];
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <Image src={bearRoller} alt="" sizes={s.px} loading={preload ? "eager" : "lazy"} className={`${s.bear} w-auto shrink-0 drop-shadow-[0_2px_3px_rgb(12_26_20/0.25)]`} />
      <span aria-hidden="true" className="flex flex-col leading-none">
        <span className={`font-brand font-bold whitespace-nowrap tracking-[-0.01em] ${s.name} ${tone === "dark" ? "text-white" : "text-pine"}`}>Brushy Bear</span>
        <span className={`mt-0.5 font-brand font-semibold tracking-[0.32em] ${s.sub} ${tone === "dark" ? "text-honey" : "text-honey-text"}`}>PAINTERS</span>
      </span>
      <span className="sr-only">{SITE.name}</span>
    </span>
  );
}
