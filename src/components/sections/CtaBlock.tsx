import type { ReactNode } from "react";
import { BearMascot } from "@/components/brand/BearMascot";
import { BrushEdge } from "@/components/brand/Brushstroke";
import { LeadFormCard } from "@/components/lead/LeadFormCard";
import { phoneHref, SITE } from "@/config/site";
import { FINAL_CTA } from "@/data/home";
import { isSet } from "@/lib/placeholders";

type Props = {
  title?: ReactNode;
  intro?: ReactNode;
  /** Where the form is, for analytics ("home", "service:interior-painting"...). */
  source: string;
  /** Pre-ticks a service in the form. */
  preselect?: string;
  id?: string;
};

/** The closing call-to-action with the estimate form. Ends every key page. */
export function CtaBlock({ title = FINAL_CTA.title, intro = FINAL_CTA.intro, source, preselect, id = "estimate" }: Props) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="on-dark">
      <BrushEdge color="var(--color-forest)" />
      <div className="bg-forest">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 md:px-8 md:py-24 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <div className="relative">
            <p className="text-sm font-extrabold uppercase tracking-[0.14em] text-gold">{FINAL_CTA.eyebrow}</p>
            <h2 id={`${id}-title`} className="mt-3 font-display text-display-lg text-cream">
              {title}
            </h2>
            <p className="mt-4 max-w-md text-lg text-cream/90">{intro}</p>
            {isSet(SITE.phone) && (
              <p className="mt-6 text-lg text-cream">
                Rather talk?{" "}
                <a href={phoneHref(SITE.phone, "tel")} data-event="call_click" data-location={`cta:${source}`} className="font-extrabold underline decoration-gold decoration-[3px] underline-offset-[6px]">
                  Call
                </a>{" "}
                or{" "}
                <a href={phoneHref(SITE.phone, "sms")} data-event="text_click" data-location={`cta:${source}`} className="font-extrabold underline decoration-gold decoration-[3px] underline-offset-[6px]">
                  text {SITE.phone}
                </a>
              </p>
            )}
            <div className="mt-10 hidden w-48 lg:block">
              <BearMascot pose="thumbs-up" sizes="192px" className="h-auto w-full" />
            </div>
          </div>
          <LeadFormCard source={source} preselect={preselect} headingLevel="h3" title="Start here" />
        </div>
      </div>
    </section>
  );
}
