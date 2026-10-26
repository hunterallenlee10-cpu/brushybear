import type { ReactNode } from "react";
import { QuoteCard } from "@/components/estimate/QuoteCard";
import { CheckIcon } from "@/components/ui/Icons";
import { phoneHref, SITE } from "@/config/site";
import { FINAL_CTA } from "@/data/home";
import { isSet } from "@/lib/placeholders";

type Props = {
  title?: ReactNode;
  intro?: ReactNode;
  /** Where the form is, for analytics ("home", "service:interior-painting"...). */
  source: string;
  /** Preselects a service in the form. */
  preselect?: string;
  id?: string;
};

/** Closing green band with the estimate card (Panda's last section). Ends every key page. */
export function CtaBlock({ title = FINAL_CTA.title, intro = FINAL_CTA.intro, source, preselect, id = "estimate" }: Props) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="on-dark bg-pine text-white">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 md:px-8 md:py-24 lg:grid-cols-[1fr_1fr] lg:gap-16">
        <div>
          <p className="text-sm font-bold tracking-[0.14em] text-white/90 uppercase">{FINAL_CTA.eyebrow}</p>
          <h2 id={`${id}-title`} className="mt-3 text-display-lg">
            {title}
          </h2>
          <p className="mt-4 max-w-md text-lg text-white/90">{intro}</p>
          <ul className="mt-6 space-y-2.5">
            {["Written, itemized quote within 24 hours", "One point of contact from start to finish", "Clean house every evening"].map((t) => (
              <li key={t} className="flex items-center gap-2.5 font-semibold">
                <span className="flex size-6 items-center justify-center rounded-full bg-honey text-ink">
                  <CheckIcon className="size-4" />
                </span>
                {t}
              </li>
            ))}
          </ul>
          {isSet(SITE.phone) && (
            <p className="mt-6 text-lg">
              Rather talk?{" "}
              <a href={phoneHref(SITE.phone, "tel")} data-event="call_click" data-location={`cta:${source}`} className="font-bold underline decoration-honey decoration-2 underline-offset-4">
                Call {SITE.phone}
              </a>
            </p>
          )}
        </div>
        <div className="mx-auto w-full max-w-lg lg:ml-auto">
          <QuoteCard source={source} preselect={preselect} fallbackPhone={isSet(SITE.phone) ? SITE.phone : undefined} />
        </div>
      </div>
    </section>
  );
}
