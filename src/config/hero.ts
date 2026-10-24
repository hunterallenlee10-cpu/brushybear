import type { StaticImageData } from "next/image";
import heroStill from "@/assets/hero/still.jpg";

/**
 * Higgsfield hero assets (see implementation/AI_ASSETS.md). Set to null to
 * fall back to the hand-drawn illustrated scene. The still is the loop's
 * first frame, so it lines up exactly with the video that fades in over it.
 */
export type HeroAssets = {
  /** Sunlit final frame: the main image Google times, and what reduced-motion visitors see. */
  still: StaticImageData;
  alt: string;
  /** Plays once: the rain stops and light comes up. */
  intro: { mp4: string; webm: string };
  /** Then loops: sunny, evergreens swaying. */
  loop: { mp4: string; webm: string };
};

export const HERO_ASSETS = {
  still: heroStill,
  alt: "Illustration: a freshly painted craftsman house among tall evergreens as the rain clears and warm light comes through",
  intro: { mp4: "/media/hero/intro.mp4", webm: "/media/hero/intro.webm" },
  loop: { mp4: "/media/hero/loop.mp4", webm: "/media/hero/loop.webm" },
} as HeroAssets | null;
