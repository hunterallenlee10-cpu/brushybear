import type { ReactNode } from "react";
import { BearMascot } from "@/components/brand/BearMascot";
import { LeadFormCard } from "@/components/lead/LeadFormCard";
import { CheckIcon } from "@/components/ui/Icons";
import { LazyMount } from "@/components/ui/LazyMount";
import { phoneHref, SITE } from "@/config/site";
import { FINAL_CTA } from "@/data/home";
import { PROMISES } from "@/data/promises";
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

const SHORT = PROMISES.map((p) => p.short);

/**
 * The closing band on every key page: a huge "RAIN-READY" watermark, the
 * headline, three promises and the estimate form.
 */
export function CtaBlock({ title = FINAL_CTA.title, intro = FINAL_CTA.intro, source, preselect, id = "estimate" }: Props) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="on-dark relative overflow-hidden bg-forest">
      <p
        aria-hidden="true"
        className="pointer-events-none absolute -top-[0.12em] left-1/2 -translate-x-1/2 font-display text-[clamp(5rem,17vw,16rem)] leading-none whitespace-nowrap text-forest-soft/45 select-none"
      >
        RAIN-READY
      </p>
      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 pt-28 pb-16 md:px-8 md:pt-44 md:pb-24 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <div>
          <h2 id={`${id}-title`} className="font-display text-display-lg text-cream text-balance">
            {title}
          </h2>
          <p className="mt-4 max-w-md text-lg text-cream/90">{intro}</p>
          <ul className="mt-8 space-y-3">
            {[SHORT[0], SHORT[2], SHORT[5]].map((s) => (
              <li key={s} className="flex items-center gap-3 font-extrabold text-cream">
                <CheckIcon className="size-5 shrink-0 text-gold" />
                {s}
              </li>
            ))}
          </ul>
          {isSet(SITE.phone) && (
            <p className="mt-8 text-lg text-cream">
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
          <div className="mt-10 hidden w-44 lg:block">
            <BearMascot pose="roller-shoulder" sizes="176px" className="h-auto w-full" />
          </div>
        </div>
        <div className="self-start">
          <LazyMount minHeight="31rem">
            <LeadFormCard source={source} preselect={preselect} headingLevel="h3" title="Start here" />
          </LazyMount>
        </div>
      </div>
    </section>
  );
}
