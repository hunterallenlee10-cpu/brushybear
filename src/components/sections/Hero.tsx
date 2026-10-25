import Image from "next/image";
import type { ReactNode } from "react";
import { PaintSwipe } from "@/components/brand/Brushstroke";
import { LeadFormCard } from "@/components/lead/LeadFormCard";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { ArrowIcon } from "@/components/ui/Icons";
import { HERO_ASSETS } from "@/config/hero";
import { SITE } from "@/config/site";
import { cityList } from "@/data/cities";
import { seasonalLine } from "@/data/season";

export const HERO_H1 = `${SITE.regionName} house painting that holds up to the rain.`;

/** The headline block, shared by the static hero and the scroll hero's last beat. */
export function HeroCopy({ as: H = "h1", id }: { as?: "h1" | "p"; id?: string }) {
  return (
    <div>
      <p className="font-extrabold text-gold">{seasonalLine()}</p>
      <H id={id} className="mt-3 font-display text-[clamp(2.4rem,1.6rem+3vw,4.1rem)] leading-[1.02] text-cream text-balance">
        {SITE.regionName} house painting that holds up to the <PaintSwipe variant="underline">rain.</PaintSwipe>
      </H>
      <p className="mt-5 max-w-xl text-lg text-cream md:text-xl">
        Interiors, exteriors, cabinets and decks in {cityList()}. Written quote in 24 hours.
      </p>
      <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3">
        <ButtonLink href="#quote" event="estimate_cta" location="hero" className="lg:hidden">
          Get a Free Estimate
        </ButtonLink>
        <a href="#ballpark" className="inline-flex min-h-11 items-center gap-2 font-extrabold text-cream underline decoration-gold decoration-[3px] underline-offset-[6px]">
          Want a number first? See a ballpark <ArrowIcon className="size-4" />
        </a>
      </div>
    </div>
  );
}

/**
 * Full-bleed hero: headline on the left, the estimate card on the right
 * (desktop). On phones the card sits in its own section right below.
 * `background` lets the scroll hero swap in its canvas; by default it's the
 * sunlit still.
 */
export function Hero({ background }: { background?: ReactNode }) {
  return (
    <section aria-labelledby="hero-title" className="on-dark relative isolate overflow-hidden bg-forest-deep">
      <div className="absolute inset-0 -z-10">
        {background ??
          (HERO_ASSETS && (
            <Image src={HERO_ASSETS.still} alt={HERO_ASSETS.alt} fill preload quality={60} sizes="100vw" className="object-cover object-[65%_50%]" />
          ))}
        <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(90deg,rgb(22_56_41/0.92)_0%,rgb(22_56_41/0.78)_38%,rgb(22_56_41/0.25)_70%,rgb(22_56_41/0.1)_100%)] max-lg:bg-[linear-gradient(180deg,rgb(22_56_41/0.55)_0%,rgb(22_56_41/0.88)_60%)]" />
      </div>
      <div className="mx-auto grid min-h-[min(46rem,calc(100dvh-7rem))] max-w-7xl items-center gap-10 px-4 py-14 md:px-8 lg:grid-cols-[1.1fr_1fr] lg:gap-14 lg:py-16">
        <HeroCopy id="hero-title" />
        <div id="quote-hero" className="hidden lg:block">
          <LeadFormCard source="home-hero" title="Get your free estimate" />
        </div>
      </div>
      <span className="absolute right-3 bottom-3 rounded-full bg-charcoal/75 px-2.5 py-0.5 text-xs font-bold text-cream">Illustration</span>
    </section>
  );
}

/** The phone version of the hero's form, right under the hero. */
export function MobileQuote() {
  return (
    <section id="quote" aria-label="Free estimate" className="bg-forest-deep px-4 pt-2 pb-10 lg:hidden">
      <LeadFormCard source="home-mobile" title="Get your free estimate" />
    </section>
  );
}
