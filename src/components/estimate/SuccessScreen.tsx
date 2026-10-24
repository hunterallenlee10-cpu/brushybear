import Image from "next/image";
import bearBrush from "@/assets/brand/bear-brush.png";

/** What happens next, after a request is sent. A little bear humor is fine here. */
export function SuccessScreen({ firstName }: { firstName: string }) {
  return (
    <div className="grid items-center gap-6 sm:grid-cols-[1fr_8rem]">
      <div>
        <h3 data-success-heading tabIndex={-1} className="font-display text-display-md text-forest focus:outline-none">
          Got it{firstName ? `, ${firstName}` : ""}! Your request is in good paws.
        </h3>
        <p className="mt-3 text-lg">We&apos;ll text you within a few minutes during business hours.</p>
        <ol className="mt-5 space-y-3">
          {[
            "We text or call to set up a walkthrough at a time that works for you.",
            "We visit, measure and talk colors.",
            "Your written, itemized quote arrives within 24 hours of the walkthrough.",
          ].map((t, i) => (
            <li key={t} className="flex gap-3">
              <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-forest text-sm font-extrabold text-cream">{i + 1}</span>
              <span>{t}</span>
            </li>
          ))}
        </ol>
      </div>
      <Image src={bearBrush} alt="" sizes="128px" className="mx-auto hidden h-auto w-32 sm:block" />
    </div>
  );
}
