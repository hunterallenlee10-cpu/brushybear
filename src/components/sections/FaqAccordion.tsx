import { ConfirmBadge } from "@/components/ui/ConfirmBadge";
import { RichText } from "@/components/ui/RichText";
import type { Faq } from "@/data/types";

/**
 * Native <details> accordion: no JavaScript, keyboard and screen-reader
 * friendly, and the answers are in the HTML for search engines. The visible
 * text matches the FAQPage structured data word for word.
 */
export function FaqAccordion({ faqs, headingLevel = "h3" }: { faqs: Faq[]; headingLevel?: "h2" | "h3" }) {
  const H = headingLevel;
  return (
    <div className="divide-y-2 divide-cream-200 border-y-2 border-cream-200">
      {faqs.map((f) => (
        <details key={f.id} id={`faq-${f.id}`} className="group">
          <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-6 py-5 [&::-webkit-details-marker]:hidden">
            <H className="text-lg font-extrabold text-forest md:text-xl">{f.question}</H>
            <span
              aria-hidden="true"
              className="flex size-9 shrink-0 items-center justify-center rounded-full border-2 border-forest text-xl font-bold text-forest transition-transform duration-200 group-open:rotate-45"
            >
              +
            </span>
          </summary>
          <div className="max-w-3xl space-y-3 pb-6">
            {f.answer.map((para, i) => (
              <p key={i}>
                <RichText text={para} />
                {i === 0 && <ConfirmBadge note={f.confirm} />}
              </p>
            ))}
          </div>
        </details>
      ))}
    </div>
  );
}
