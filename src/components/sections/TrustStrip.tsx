import { PlaceholderMark } from "@/components/ui/Fill";
import { CalendarIcon, CameraIcon, ClockIcon, ShieldIcon } from "@/components/ui/Icons";
import { ConfirmBadge } from "@/components/ui/ConfirmBadge";
import { SITE } from "@/config/site";
import { PROMISES } from "@/data/promises";
import { isSet } from "@/lib/placeholders";

const promise = (id: string) => PROMISES.find((p) => p.id === id)!;

/**
 * Four plain facts under the hero. The license line turns real once the
 * L&I number is set; until then it's a striped placeholder (and the launch
 * check blocks a public build).
 */
export function TrustStrip() {
  const items = [
    { Icon: CameraIcon, p: promise("daily-photos") },
    { Icon: CalendarIcon, p: promise("start-date") },
    { Icon: ClockIcon, p: promise("estimate-24h") },
  ];
  return (
    <section aria-label="Why homeowners pick us" className="border-y border-cream-200 bg-cream-50">
      <ul className="mx-auto grid max-w-7xl grid-cols-2 gap-x-6 gap-y-5 px-4 py-6 md:px-8 lg:grid-cols-4">
        <li className="flex items-center gap-3">
          <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-forest text-cream">
            <ShieldIcon className="size-5" />
          </span>
          <span className="text-[0.95rem] leading-snug font-extrabold text-forest">
            Licensed, bonded and insured
            <span className="block text-sm font-semibold text-charcoal-soft">
              {isSet(SITE.lniNumber) ? <>WA L&amp;I #{SITE.lniNumber}</> : <PlaceholderMark value={SITE.lniNumber} />}
            </span>
          </span>
        </li>
        {items.map(({ Icon, p }) => (
          <li key={p.id} className="flex items-center gap-3">
            <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-pale text-forest">
              <Icon className="size-5" />
            </span>
            <span className="text-[0.95rem] leading-snug font-extrabold text-forest">
              {p.short}
              <ConfirmBadge note={p.confirm} />
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
