import type { StaticImageData } from "next/image";

/**
 * Higgsfield hero assets (build Phase 7). While this is null the hero shows
 * the illustrated scene. To switch on: put the optimized files in
 * public/media/hero/ and src/assets/hero/, import the still below and fill
 * in the paths. See implementation/AI_ASSETS.md.
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

export const HERO_ASSETS = null as HeroAssets | null;
