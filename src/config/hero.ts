import finalTall from "@/assets/hero/scroll/final-tall.jpg";
import finalWide from "@/assets/hero/scroll/final-wide.jpg";
import posterTall from "@/assets/hero/scroll/poster-tall.jpg";
import posterWide from "@/assets/hero/scroll/poster-wide.jpg";

/**
 * The painting scroll on the home page (components/hero/ScrollHero.tsx),
 * made with Higgsfield (see implementation/AI_ASSETS.md) and cut by
 * scripts/hero/build-frames.sh. Frames and the loop live under
 * /public/hero/<version>/ and are cached for a year (next.config.ts), so a
 * new cut must ship under a new version folder. The poster is the first
 * frame; the final still is what reduced-motion visitors see.
 */
const V = "/hero/v1";

export const SCROLL_HERO = {
  stills: {
    poster: {
      wide: posterWide,
      tall: posterTall,
      alt: "Illustration: a two-story craftsman house in the rain, its gray paint peeling and moss on the shaded wall",
    },
    final: {
      wide: finalWide,
      tall: finalTall,
      alt: "Illustration: the same craftsman house freshly painted deep forest green with white trim, wet pavement shining in late sun",
    },
  },
  frames: {
    desktop: { prefix: `${V}/desktop/f-`, count: 120, width: 1920, height: 1080 },
    mobile: { prefix: `${V}/mobile/f-`, count: 96, width: 720, height: 1280 },
  },
  loop: `${V}/hero.mp4`,
};
