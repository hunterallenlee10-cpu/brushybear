import { SectionHeading } from "@/components/sections/SectionHeading";
import { ConfirmBadge } from "@/components/ui/ConfirmBadge";
import { PROCESS } from "@/data/process";

/** The 4 steps, as a numbered path. */
export function HowItWorks() {
  return (
    <section aria-labelledby="how-title" className="bg-cream-50">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
        <SectionHeading id="how-title" eyebrow="How it works" title="Four steps, no surprises." />
        <ol className="relative mt-12 grid gap-10 md:grid-cols-4 md:gap-8">
          {/* The brush line connecting the steps (desktop). */}
          <span aria-hidden="true" className="absolute top-8 right-[12%] left-[12%] hidden h-1.5 rounded-full bg-gold md:block" />
          {PROCESS.map((step, i) => (
            <li key={step.title} className="relative flex gap-5 md:flex-col md:gap-0">
              <span className="sticker relative z-10 flex size-16 shrink-0 items-center justify-center rounded-full font-display text-3xl text-forest [--sticker-pad:0.25rem]">
                <span className="sticker-inner flex size-full items-center justify-center rounded-full bg-cream">{i + 1}</span>
              </span>
              <div className="md:mt-6">
                <h3 className="text-xl font-extrabold text-forest">
                  {step.title}
                  <ConfirmBadge note={step.confirm} />
                </h3>
                <p className="mt-2">{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
