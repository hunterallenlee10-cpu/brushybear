import Image from "next/image";
import { HeroScene, RainLayer } from "@/components/media/HeroScene";
import { HeroVideo } from "@/components/media/HeroVideo";
import { HERO_ASSETS } from "@/config/hero";

/**
 * The hero visual inside a sticker frame.
 *
 * With Higgsfield assets (Phase 7): the sunlit still loads first as the
 * main image, then the video fades in over it after page load.
 *
 * Without them: the illustrated scene plus two overlay layers. Soft rain
 * falls for about two seconds and stops as warm light comes up. Both layers
 * animate only transform/opacity, so the GPU handles them. Reduced-motion
 * visitors see the sunny end state.
 */
export function HeroMedia() {
  return (
    <div className="sticker relative -rotate-1 [--sticker-pad:0.5rem] md:[--sticker-pad:0.625rem]">
      <div className="sticker-inner relative overflow-hidden">
        {HERO_ASSETS ? (
          <div className="relative aspect-[16/11]">
            <Image
              src={HERO_ASSETS.still}
              alt={HERO_ASSETS.alt}
              fill
              preload
              sizes="(min-width: 1024px) 600px, 100vw"
              className="object-cover"
            />
            <HeroVideo intro={HERO_ASSETS.intro} loop={HERO_ASSETS.loop} />
          </div>
        ) : (
          <>
            <HeroScene />
            <div aria-hidden="true" className="hero-glow pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_82%_16%,rgb(246_207_122/0.95),rgb(242_196_107/0.45)_26%,transparent_62%)]" />
            <div aria-hidden="true" className="hero-rain pointer-events-none absolute inset-0 overflow-hidden">
              <div className="hero-rain-sheet absolute inset-x-0 -top-full h-[200%]">
                <RainLayer />
                <RainLayer />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
