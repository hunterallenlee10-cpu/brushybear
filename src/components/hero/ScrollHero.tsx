import { getImageProps } from "next/image";
import { preload } from "react-dom";
import { HeroCopy } from "@/components/sections/Hero";
import { ScrollHeroCanvas } from "@/components/hero/ScrollHeroCanvas";
import { SkipToEstimate } from "@/components/hero/SkipToEstimate";
import { LeadFormCard } from "@/components/lead/LeadFormCard";
import { LazyMount } from "@/components/ui/LazyMount";
import { SCROLL_HERO } from "@/config/hero";

const WIDE = "(min-width: 768px) and (min-aspect-ratio: 1/1)";
const TALL = "(max-width: 767.98px), (max-aspect-ratio: 1/1)";

/**
 * Art-directed <picture>: 16:9 on wide screens, 9:16 on phones. The poster
 * is the page's LCP, so it gets a preload per shape (each limited to its
 * own media query, so a phone never fetches the wide one) and high priority.
 */
function HeroPicture({ which, className, priority }: { which: "poster" | "final"; className: string; priority?: boolean }) {
  const img = SCROLL_HERO.stills[which];
  const common = { alt: img.alt, sizes: "100vw", quality: priority ? 60 : 70 };
  const {
    props: { srcSet: wide },
  } = getImageProps({ ...common, src: img.wide });
  const {
    props: { srcSet: tall, ...rest },
  } = getImageProps({ ...common, src: img.tall, loading: priority ? "eager" : "lazy" });
  if (priority) {
    preload(rest.src, { as: "image", imageSrcSet: wide, imageSizes: "100vw", media: WIDE, fetchPriority: "high" });
    preload(rest.src, { as: "image", imageSrcSet: tall, imageSizes: "100vw", media: TALL, fetchPriority: "high" });
  }
  return (
    <picture className={className}>
      <source media={WIDE} srcSet={wide} />
      <source srcSet={tall} />
      {/* eslint-disable-next-line jsx-a11y/alt-text */}
      <img {...rest} fetchPriority={priority ? "high" : undefined} className="absolute inset-0 h-full w-full object-cover object-right" />
    </picture>
  );
}

const BEATS = ["Rain-worn.", "Prepped right.", "Painted to last."];

/**
 * The home page hero: a house gets painted as you scroll.
 *
 * The section is about 300vh tall on desktop and 220vh on phones; inside it
 * a sticky, screen-tall stage holds the poster (painted by the server, so
 * there's an image from the first frame), the canvas that scrubs through
 * the frames, the per-beat words, a thin progress bar, a "Skip to estimate"
 * link and, on desktop, the estimate card, which is usable at any point.
 * Visitors who prefer reduced motion get a normal-height hero with the
 * finished house and the headline, and no frames are downloaded.
 */
export function ScrollHero() {
  return (
    <section
      data-scroll-hero
      aria-labelledby="hero-title"
      className="scroll-hero on-dark relative h-[220vh] bg-forest-deep md:h-[300vh]"
    >
      <div className="hero-stage sticky top-[4.25rem] h-[calc(100dvh-4.25rem)] overflow-hidden md:top-[4.5rem] md:h-[calc(100dvh-4.5rem)]">
        <div className="absolute inset-0">
          <HeroPicture which="poster" priority className="motion-reduce:hidden" />
          <HeroPicture which="final" className="hidden motion-reduce:block" />
          <div className="motion-reduce:hidden">
            <ScrollHeroCanvas desktop={SCROLL_HERO.frames.desktop} mobile={SCROLL_HERO.frames.mobile} loopSrc={SCROLL_HERO.loop} />
          </div>
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[linear-gradient(90deg,rgb(22_56_41/0.86)_0%,rgb(22_56_41/0.6)_34%,rgb(22_56_41/0.12)_62%,transparent_80%)] max-md:bg-[linear-gradient(180deg,rgb(22_56_41/0.78)_0%,rgb(22_56_41/0.35)_38%,transparent_60%,rgb(22_56_41/0.55)_100%)]"
          />
        </div>

        {/* Thin progress bar */}
        <div aria-hidden="true" className="absolute inset-x-0 top-0 h-1 bg-cream/15 motion-reduce:hidden">
          <div className="hero-progress h-full origin-left bg-gold" />
        </div>

        <div className="relative mx-auto grid h-full max-w-7xl items-center gap-10 px-4 md:px-8 lg:grid-cols-[1.1fr_1fr] lg:gap-14 max-md:items-start max-md:pt-10">
          <div className="relative">
            {/* One word per beat, fading as the house changes. */}
            {BEATS.map((b, i) => (
              <p
                key={b}
                aria-hidden="true"
                className={`hero-beat hero-beat-${i} absolute inset-x-0 top-1/2 -translate-y-1/2 font-display text-[clamp(3rem,2rem+5vw,6rem)] leading-none text-cream max-md:top-0 max-md:translate-y-0`}
              >
                {b}
              </p>
            ))}
            <div className="hero-final">
              <HeroCopy id="hero-title" />
            </div>
          </div>
          {/* Desktop only, so phones don't hydrate a form they never see. */}
          <div id="quote-hero" className="hidden lg:block">
            <LazyMount minHeight="32.5rem" media="(min-width: 64rem)" rootMargin="0px">
              <LeadFormCard source="home-hero" title="Get your free estimate" />
            </LazyMount>
          </div>
        </div>

        <div className="absolute bottom-4 left-4 md:bottom-6 md:left-8 motion-reduce:hidden">
          <SkipToEstimate />
        </div>
        <span className="absolute right-3 bottom-3 rounded-full bg-charcoal/75 px-2.5 py-0.5 text-xs font-bold text-cream">Illustration</span>
      </div>
      <noscript>
        <style>{`.scroll-hero .hero-final{opacity:1!important}.scroll-hero .hero-beat{display:none}`}</style>
      </noscript>
    </section>
  );
}
