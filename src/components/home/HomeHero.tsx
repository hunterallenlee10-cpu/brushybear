import { getImageProps } from "next/image";
import { preload } from "react-dom";
import { QuoteCard } from "@/components/estimate/QuoteCard";
import { CalendarIcon, ClipboardIcon, CameraIcon } from "@/components/ui/Icons";
import { Pill } from "@/components/ui/Pill";
import { PAGES } from "@/config/pages";
import { HERO_IMAGE } from "@/config/hero";
import { SITE } from "@/config/site";
import { HOME_HERO } from "@/data/home";
import { isSet } from "@/lib/placeholders";

const WIDE = "(min-width: 768px)";

/** Three round seals where Panda shows its award badges: our promises, not awards. */
const SEALS = [
  { icon: ClipboardIcon, top: "24-hour", bottom: "written quote" },
  { icon: CameraIcon, top: "Daily", bottom: "photo updates" },
  { icon: CalendarIcon, top: "On time", bottom: "or $250 off" },
];

/**
 * Panda's hero: dark photo, big headline and seals on the left, the white
 * estimate card on the right. The photo is the LCP image: preloaded per
 * shape (wide for desktop, tall for phones) at high priority.
 */
export function HomeHero() {
  const common = { alt: HERO_IMAGE.alt, sizes: "100vw", quality: 60 };
  const {
    props: { srcSet: wide },
  } = getImageProps({ ...common, src: HERO_IMAGE.wide });
  const {
    props: { srcSet: tall, ...rest },
  } = getImageProps({ ...common, src: HERO_IMAGE.tall, loading: "eager" });
  preload(rest.src, { as: "image", imageSrcSet: wide, imageSizes: "100vw", media: WIDE, fetchPriority: "high" });
  preload(rest.src, { as: "image", imageSrcSet: tall, imageSizes: "100vw", media: "(max-width: 767.98px)", fetchPriority: "high" });

  return (
    <section aria-labelledby="hero-title" className="on-dark relative isolate overflow-hidden bg-ink text-white">
      <picture>
        <source media={WIDE} srcSet={wide} />
        {/* eslint-disable-next-line jsx-a11y/alt-text */}
        <img {...rest} srcSet={tall} fetchPriority="high" className="absolute inset-0 -z-20 h-full w-full object-cover object-[70%_center]" />
      </picture>
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgb(12_26_20/0.92)_0%,rgb(12_26_20/0.78)_45%,rgb(12_26_20/0.35)_100%)] max-md:bg-[linear-gradient(180deg,rgb(12_26_20/0.85)_0%,rgb(12_26_20/0.7)_55%,rgb(12_26_20/0.9)_100%)]" />

      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 md:px-8 md:py-16 lg:grid-cols-[1.15fr_1fr] lg:gap-16 lg:py-20">
        <div>
          <h1 id="hero-title" className="text-display-xl text-white">
            {HOME_HERO.title}
          </h1>
          <p className="mt-5 max-w-xl text-lg font-semibold text-white/90 md:text-xl">{HOME_HERO.intro}</p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Pill href={PAGES.instantEstimate.path} variant="outline-white" arrow event="instant_estimate_cta" location="hero">
              Get an Instant Estimate
            </Pill>
            {isSet(SITE.phone) && (
              <Pill href={`tel:${SITE.phone}`} variant="white" event="call_click" location="hero">
                Call {SITE.phone}
              </Pill>
            )}
          </div>

          <div className="mt-9 border-y border-white/20 py-6">
            <ul className="grid max-w-lg grid-cols-3 gap-3">
              {SEALS.map(({ icon: Icon, top, bottom }) => (
                <li key={top} className="flex flex-col items-center text-center">
                  <span className="flex size-[4.75rem] flex-col items-center justify-center rounded-full border-2 border-honey bg-ink/60 text-honey ring-4 ring-honey/20 md:size-24">
                    <Icon className="size-7 md:size-8" />
                  </span>
                  <span className="mt-2 text-sm leading-tight font-bold text-white">
                    {top}
                    <span className="block font-semibold text-white/80">{bottom}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div id="quote" className="mx-auto w-full max-w-lg lg:ml-auto">
          <QuoteCard source="home-hero" />
        </div>
      </div>
      <span className="absolute right-3 bottom-3 rounded-full bg-ink/70 px-2.5 py-0.5 text-xs font-semibold text-white">Illustration</span>
    </section>
  );
}
