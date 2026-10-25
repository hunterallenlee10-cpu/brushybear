import { PaintSwipe } from "@/components/brand/Brushstroke";
import { LeadFormCard } from "@/components/lead/LeadFormCard";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { LazyMount } from "@/components/ui/LazyMount";
import { ArrowIcon } from "@/components/ui/Icons";
import { SITE } from "@/config/site";
import { cityList } from "@/data/cities";
import { seasonalLine } from "@/data/season";

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

/** The phone version of the hero's form, right under the hero. */
export function MobileQuote() {
  return (
    <section id="quote" aria-label="Free estimate" className="bg-forest-deep px-4 pt-2 pb-10 lg:hidden">
      <LazyMount minHeight="31rem" media="(max-width: 63.99rem)" rootMargin="1200px 0px">
        <LeadFormCard source="home-mobile" title="Get your free estimate" />
      </LazyMount>
    </section>
  );
}
