import Link from "next/link";
import { Wordmark } from "@/components/brand/Logo";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { PhoneIcon } from "@/components/ui/Icons";
import { estimateHref } from "@/config/pages";
import { phoneHref, SITE } from "@/config/site";
import { mainNav } from "@/data/navigation";
import { isSet } from "@/lib/placeholders";

/** Sticky header. On desktop the estimate button is always in view. */
export function Header() {
  const nav = mainNav();
  return (
    <header className="sticky top-0 z-40 border-b border-cream-200 bg-cream/95">
      <div className="relative mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between gap-4 px-4 md:h-20 md:px-8">
        <Link href="/" className="shrink-0 rounded-lg">
          <Wordmark className="h-11 w-auto md:h-[3.25rem]" />
        </Link>

        {nav.length > 0 && (
          <nav aria-label="Main" className="hidden lg:block">
            <ul className="flex items-center gap-7">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="font-bold text-forest underline-offset-[6px] decoration-gold decoration-[3px] hover:underline">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}

        <div className="flex items-center gap-4">
          {isSet(SITE.phone) && (
            <a
              href={phoneHref(SITE.phone, "tel")}
              data-event="call_click"
              data-location="header"
              className="hidden items-center gap-2 font-bold text-forest xl:inline-flex"
            >
              <PhoneIcon />
              {SITE.phone}
            </a>
          )}
          {/* Phones use the bottom action bar instead. */}
          <div className="hidden md:block">
            <ButtonLink href={estimateHref()} event="estimate_cta" location="header">
              Get a Free Estimate
            </ButtonLink>
          </div>
          {nav.length > 0 && <MobileMenu items={nav} />}
        </div>
      </div>
    </header>
  );
}
