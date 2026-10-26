import Link from "next/link";
import { Wordmark } from "@/components/brand/Logo";
import { Fill } from "@/components/ui/Fill";
import { MailIcon, PhoneIcon } from "@/components/ui/Icons";
import { cityPath, PAGES, servicePath } from "@/config/pages";
import { phoneHref, SITE } from "@/config/site";
import { publishedCities } from "@/data/cities";
import { companyNav } from "@/data/navigation";
import { publishedServices } from "@/data/services";
import { isSet } from "@/lib/placeholders";

const HEAD = "text-sm font-bold uppercase tracking-[0.14em] text-honey";
const LINK = "text-white/80 transition-colors hover:text-white";

/** Black footer (Panda) with EA's columns: contact, services, company, areas. */
export function Footer() {
  const year = SITE.lastUpdated.slice(0, 4);
  return (
    <footer className="on-dark bg-ink text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 pt-16 pb-12 md:px-8 lg:grid-cols-[1.25fr_1fr_1fr_1.4fr]">
        <div>
          <Link href="/" className="inline-block rounded-lg" aria-label={`${SITE.name} home`}>
            <Wordmark className="h-14 w-auto" sizes="200px" />
          </Link>
          <h2 className={`${HEAD} mt-8`}>Contact</h2>
          <ul className="mt-4 space-y-3 text-white/85">
            <li>Hours: <Fill value={SITE.hours.display} /></li>
            <li className="flex items-center gap-2">
              <PhoneIcon className="size-4 text-honey" />
              {isSet(SITE.phone) ? (
                <a href={phoneHref(SITE.phone, "tel")} data-event="call_click" data-location="footer" className="font-bold text-white hover:underline">
                  {SITE.phone}
                </a>
              ) : (
                <Fill value={SITE.phone} />
              )}
            </li>
            <li className="flex items-center gap-2">
              <MailIcon className="size-4 text-honey" />
              {isSet(SITE.email) ? (
                <a href={`mailto:${SITE.email}`} className="hover:underline">
                  {SITE.email}
                </a>
              ) : (
                <Fill value={SITE.email} />
              )}
            </li>
            <li>
              Contractor reg. no. <Fill value={SITE.lniNumber} />
            </li>
            <li>
              WA UBI # <Fill value={SITE.ubiNumber} />
            </li>
          </ul>
        </div>

        <div>
          <h2 className={HEAD}>Services</h2>
          <ul className="mt-4 space-y-2.5">
            {publishedServices().map((s) => (
              <li key={s.slug}>
                <Link href={servicePath(s.slug)} className={LINK}>
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className={HEAD}>Company</h2>
          <ul className="mt-4 space-y-2.5">
            {companyNav().map((n) => (
              <li key={n.href}>
                <Link href={n.href} className={LINK}>
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className={HEAD}>
            <Link href={PAGES.areas.path} className="hover:underline">
              Areas We Serve
            </Link>
          </h2>
          <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2.5 sm:grid-cols-3 lg:grid-cols-2">
            {publishedCities().map((c) => (
              <li key={c.slug}>
                <Link href={cityPath(c.slug)} className={LINK}>
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-6 text-sm text-white/70 md:flex-row md:items-center md:justify-between md:px-8">
          <p>
            © {year} {SITE.name}. All rights reserved.
          </p>
          <p className="flex gap-5">
            <Link href={PAGES.privacy.path} className="hover:text-white">
              Privacy &amp; Terms
            </Link>
            <Link href={PAGES.estimate.path} className="hover:text-white">
              Free Estimate
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
