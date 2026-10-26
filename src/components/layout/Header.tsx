import Link from "next/link";
import { Wordmark } from "@/components/brand/Logo";
import { DesktopNav } from "@/components/layout/DesktopNav";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { PhoneIcon } from "@/components/ui/Icons";
import { PAGES } from "@/config/pages";
import { phoneHref, SITE } from "@/config/site";
import { mainNav } from "@/data/navigation";
import { isSet } from "@/lib/placeholders";

/** Thin strip above the header, like Panda's: one line, centered. */
function TopStrip() {
  return (
    <div className="bg-pine text-white">
      <p className="mx-auto max-w-7xl px-4 py-2 text-center text-[0.8rem] font-semibold tracking-wide md:text-sm">
        Free written estimates across the Eastside and greater Seattle
        <span className="hidden sm:inline">
          {" · "}
          <Link href={PAGES.instantEstimate.path} className="underline decoration-honey decoration-2 underline-offset-4 hover:text-honey">
            Get an instant price range
          </Link>
        </span>
      </p>
    </div>
  );
}

/** Panda-style header: logo left, menu in the middle, pill buttons right. */
export function Header() {
  const nav = mainNav();
  const phone = isSet(SITE.phone) ? SITE.phone : null;
  return (
    <>
      <TopStrip />
      <header className="sticky top-0 z-40 border-b border-line bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/85">
        <div className="relative mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between gap-4 px-4 md:h-[5.5rem] md:px-8">
          <Link href="/" className="shrink-0 rounded-lg" aria-label={`${SITE.name} home`}>
            <Wordmark preload />
          </Link>

          <DesktopNav items={nav} />

          <div className="flex items-center gap-3">
            {phone ? (
              <a
                href={phoneHref(phone, "tel")}
                data-event="call_click"
                data-location="header"
                className="hidden min-h-11 items-center gap-2 rounded-full bg-pine px-5 font-bold text-white transition-colors hover:bg-pine-deep xl:inline-flex"
              >
                <PhoneIcon className="size-4" />
                {phone}
              </a>
            ) : null}
            <Link
              href={PAGES.estimate.path}
              data-event="estimate_cta"
              data-location="header"
              className="hidden min-h-11 items-center rounded-full bg-honey px-5 font-bold text-ink transition-colors hover:bg-honey-deep md:inline-flex"
            >
              Free Estimate
            </Link>
            <MobileMenu items={nav} />
          </div>
        </div>
      </header>
    </>
  );
}
