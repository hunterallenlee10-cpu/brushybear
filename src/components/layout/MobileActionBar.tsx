import Link from "next/link";
import { BrushIcon, PhoneIcon, TextIcon } from "@/components/ui/Icons";
import { estimateHref } from "@/config/pages";
import { phoneHref, SITE } from "@/config/site";
import { isSet } from "@/lib/placeholders";

const ITEM = "flex min-h-14 flex-col items-center justify-center gap-0.5 text-sm font-extrabold";

/**
 * Fixed bottom bar on phones: Call, Text, Estimate. The body reserves its
 * height (pb-action-bar), so it never covers content or shifts the page.
 */
export function MobileActionBar() {
  const phone = isSet(SITE.phone) ? SITE.phone : null;
  return (
    <nav
      aria-label="Quick contact"
      className="on-dark fixed inset-x-0 bottom-0 z-40 border-t-2 border-charcoal bg-forest pb-[env(safe-area-inset-bottom)] md:hidden"
    >
      <ul className="grid grid-cols-3">
        <li>
          {phone ? (
            <a href={phoneHref(phone, "tel")} data-event="call_click" data-location="mobile_bar" className={`${ITEM} text-cream`}>
              <PhoneIcon />
              Call
            </a>
          ) : (
            <span className={`${ITEM} text-cream/85`} title="Phone number not set yet" aria-disabled="true">
              <PhoneIcon />
              Call
            </span>
          )}
        </li>
        <li className="border-x border-forest-soft">
          {phone ? (
            <a href={phoneHref(phone, "sms")} data-event="text_click" data-location="mobile_bar" className={`${ITEM} text-cream`}>
              <TextIcon />
              Text
            </a>
          ) : (
            <span className={`${ITEM} text-cream/85`} title="Phone number not set yet" aria-disabled="true">
              <TextIcon />
              Text
            </span>
          )}
        </li>
        <li>
          <Link href={estimateHref()} data-event="estimate_cta" data-location="mobile_bar" className={`${ITEM} bg-gold text-charcoal`}>
            <BrushIcon />
            Estimate
          </Link>
        </li>
      </ul>
    </nav>
  );
}
