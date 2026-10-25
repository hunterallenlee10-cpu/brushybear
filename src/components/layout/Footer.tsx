import Link from "next/link";
import { BearMascot } from "@/components/brand/BearMascot";
import { Wordmark } from "@/components/brand/Logo";
import { Fill, PlaceholderMark } from "@/components/ui/Fill";
import { MailIcon, PhoneIcon, PinIcon, ClockIcon } from "@/components/ui/Icons";
import { cityPages, PAGES, servicePages, type PageEntry } from "@/config/pages";
import { formatDate, phoneHref, SITE } from "@/config/site";
import { cityList } from "@/data/cities";
import { companyNav } from "@/data/navigation";
import { isSet } from "@/lib/placeholders";

function LinkList({ title, items, columns = 1 }: { title: string; items: { label: string; href: string }[]; columns?: 1 | 2 }) {
  return (
    <div>
      <h2 className="font-display text-xl text-gold">{title}</h2>
      <ul className={`mt-4 grid gap-x-8 gap-y-1 ${columns === 2 ? "sm:grid-cols-2" : ""}`}>
        {items.map((item) => (
          <li key={item.href}>
            <Link href={item.href} className="inline-flex min-h-10 items-center text-cream/90 underline-offset-4 hover:text-cream hover:underline">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

const asLinks = (pages: PageEntry[]) => pages.filter((p) => p.live).map((p) => ({ label: p.label, href: p.path }));

const ROW = "grid grid-cols-[1.25rem_1fr] items-start gap-3";

/**
 * Name, phone, email, address and hours, matching the Google Business
 * Profile exactly, plus every service, city and company page.
 */
export function Footer() {
  const year = SITE.lastUpdated.slice(0, 4);
  const address = SITE.address;

  return (
    <footer className="on-dark relative overflow-hidden bg-forest text-cream">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 pt-16 pb-12 md:grid-cols-2 md:px-8 lg:grid-cols-[1.35fr_1fr_1fr_1.4fr]">
        <div>
          <Wordmark className="h-14 w-auto" sizes="200px" />
          <p className="mt-5 max-w-sm text-cream/90">
            {SITE.name}. House painting for {cityList()}, {SITE.state}.
          </p>
          <dl className="mt-6 space-y-3">
            <div className={ROW}>
              <dt className="pt-0.5">
                <PhoneIcon className="size-5 text-gold" />
                <span className="sr-only">Phone</span>
              </dt>
              <dd className="text-lg font-extrabold">
                {isSet(SITE.phone) ? (
                  <a href={phoneHref(SITE.phone, "tel")} data-event="call_click" data-location="footer" className="hover:underline">
                    {SITE.phone}
                  </a>
                ) : (
                  <Fill value={SITE.phone} />
                )}
              </dd>
            </div>
            <div className={ROW}>
              <dt className="pt-0.5">
                <MailIcon className="size-5 text-gold" />
                <span className="sr-only">Email</span>
              </dt>
              <dd>
                {isSet(SITE.email) ? (
                  <a href={`mailto:${SITE.email}`} className="hover:underline">
                    {SITE.email}
                  </a>
                ) : (
                  <Fill value={SITE.email} />
                )}
              </dd>
            </div>
            <div className={ROW}>
              <dt className="pt-0.5">
                <PinIcon className="size-5 text-gold" />
                <span className="sr-only">Address</span>
              </dt>
              <dd>
                <address className="not-italic">
                  {isSet(address) ? (
                    <>
                      {address.street}
                      <br />
                      {address.city}, {SITE.state} {address.zip}
                    </>
                  ) : (
                    <PlaceholderMark value={address} />
                  )}
                </address>
              </dd>
            </div>
            <div className={ROW}>
              <dt className="pt-0.5">
                <ClockIcon className="size-5 text-gold" />
                <span className="sr-only">Hours</span>
              </dt>
              <dd>
                <Fill value={SITE.hours.display} />
              </dd>
            </div>
          </dl>
        </div>

        <LinkList title="Services" items={[...asLinks(servicePages()), { label: "All services", href: PAGES.services.path }]} />
        <LinkList title="Service areas" items={[...asLinks(cityPages()), { label: "Area map", href: PAGES.serviceAreas.path }]} />
        <LinkList title="Company" items={companyNav()} columns={2} />
      </div>

      <BearMascot pose="sleeping" sizes="176px" className="pointer-events-none absolute right-6 bottom-16 hidden h-auto w-44 opacity-90 xl:block" />

      <div className="border-t border-forest-soft bg-forest-deep">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-6 text-sm text-cream/90 md:flex-row md:flex-wrap md:items-center md:justify-between md:px-8">
          <p>
            © {year} {SITE.name}
          </p>
          <p>
            WA L&amp;I contractor reg. <Fill value={SITE.lniNumber} /> · UBI <Fill value={SITE.ubiNumber} />
          </p>
          <p>Last updated: {formatDate(SITE.lastUpdated)}</p>
        </div>
      </div>
    </footer>
  );
}
