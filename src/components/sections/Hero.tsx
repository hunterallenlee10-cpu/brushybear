import { BearMascot } from "@/components/brand/BearMascot";
import { PaintSwipe } from "@/components/brand/Brushstroke";
import { HeroMedia } from "@/components/media/HeroMedia";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { estimateHref } from "@/config/pages";
import { phoneHref, SITE } from "@/config/site";
import { cityList } from "@/data/cities";
import { seasonalLine } from "@/data/season";
import { isSet } from "@/lib/placeholders";

/** Homepage hero: outcome headline with the area, one line, the estimate button. */
export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 pt-8 pb-16 md:px-8 md:pt-16 lg:grid-cols-[1.1fr_1fr] lg:gap-16 lg:pb-24">
        <div>
          <p className="text-sm font-extrabold uppercase tracking-[0.14em] text-forest">{seasonalLine()}</p>
          <h1 id="hero-title" className="mt-4 font-display text-display-xl text-forest">
            {SITE.regionName} house painting{" "}
            <span className="text-charcoal">
              that holds up to the <PaintSwipe>rain.</PaintSwipe>
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-lg md:text-xl">
            Interiors, exteriors, cabinets and decks in {cityList()}. One point of contact, a photo update every day,
            and a clean house every evening.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
            <ButtonLink href={estimateHref()} event="estimate_cta" location="hero">
              Get a Free Estimate
            </ButtonLink>
            {isSet(SITE.phone) && (
              <a
                href={phoneHref(SITE.phone, "tel")}
                data-event="call_click"
                data-location="hero"
                className="font-bold text-forest underline decoration-gold decoration-[3px] underline-offset-[6px]"
              >
                or call {SITE.phone}
              </a>
            )}
          </div>
          {isSet(SITE.lniNumber) && (
            <p className="mt-6 text-sm font-semibold text-charcoal-soft">
              Licensed, bonded and insured in {SITE.stateName} · L&amp;I #{SITE.lniNumber}
            </p>
          )}
        </div>

        <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
          <HeroMedia />
          <div className="absolute -bottom-8 -left-3 w-28 rotate-[-6deg] md:-left-8 md:w-40">
            <BearMascot pose="wave" sizes="(min-width: 768px) 160px, 112px" className="h-auto w-full drop-shadow-[0_14px_18px_rgb(43_43_43/0.3)]" />
          </div>
        </div>
      </div>
    </section>
  );
}
