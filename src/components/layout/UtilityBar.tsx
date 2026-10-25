import { PhoneIcon } from "@/components/ui/Icons";
import { Fill } from "@/components/ui/Fill";
import { phoneHref, SITE } from "@/config/site";
import { cityList } from "@/data/cities";
import { isSet } from "@/lib/placeholders";

/** Thin bar above the header: free estimates, where we work, click-to-call. */
export function UtilityBar() {
  return (
    <div className="on-dark bg-forest-deep text-cream">
      <div className="mx-auto flex min-h-10 max-w-7xl items-center justify-between gap-4 px-4 text-sm md:px-8">
        <p className="font-semibold">
          <span className="text-gold">Free written estimates</span>
          <span className="hidden md:inline"> in {cityList()}</span>
        </p>
        {isSet(SITE.phone) ? (
          <a
            href={phoneHref(SITE.phone, "tel")}
            data-event="call_click"
            data-location="utility_bar"
            className="inline-flex min-h-10 items-center gap-2 font-extrabold hover:underline"
          >
            <PhoneIcon className="size-4" />
            Call {SITE.phone}
          </a>
        ) : (
          <span className="inline-flex items-center gap-2 font-extrabold">
            <PhoneIcon className="size-4" />
            Call <Fill value={SITE.phone} />
          </span>
        )}
      </div>
    </div>
  );
}
