import Link from "next/link";
import { Wordmark } from "@/components/brand/Logo";
import { Fill } from "@/components/ui/Fill";
import { cityPages, servicePages, type PageEntry } from "@/config/pages";
import { formatDate, phoneHref, SITE } from "@/config/site";
import { cityList } from "@/data/cities";
import { companyNav } from "@/data/navigation";
import { isSet } from "@/lib/placeholders";

function LinkList({ title, items }: { title: string; items: { label: string; href: string; live: boolean }[] }) {
  return (
    <div>
      <h2 className="text-sm font-extrabold uppercase tracking-[0.12em] text-gold">{title}</h2>
      <ul className="mt-4 space-y-2.5">
        {items.map((item) => (
          <li key={item.href}>
            {item.live ? (
              <Link href={item.href} className="underline-offset-4 hover:underline">
                {item.label}
              </Link>
            ) : (
              <span>{item.label}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

const asLinks = (pages: PageEntry[]) => pages.map((p) => ({ label: p.label, href: p.path, live: p.live }));

/**
 * Name, phone, email, service area, hours and license numbers, matching the
 * Google Business Profile exactly. Service-area business: no street address.
 */
export function Footer() {
  const year = SITE.lastUpdated.slice(0, 4);
  const company = companyNav().map((n) => ({ ...n, live: true }));

  return (
    <footer className="on-dark bg-forest text-cream">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 md:grid-cols-2 md:px-8 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <Wordmark className="h-14 w-auto" sizes="200px" />
          <p className="mt-6 max-w-sm text-cream/90">
            House painting for {SITE.regionName} homes. Clean, on time, and built to hold up to Northwest rain.
          </p>
          <dl className="mt-6 space-y-3">
            <div>
              <dt className="sr-only">Phone</dt>
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
            <div>
              <dt className="sr-only">Email</dt>
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
            <div>
              <dt className="font-bold">Hours</dt>
              <dd>
                <Fill value={SITE.hours.display} />
              </dd>
            </div>
            <div>
              <dt className="font-bold">Service area</dt>
              <dd>
                {cityList()}, {SITE.state}. We come to you.
              </dd>
            </div>
          </dl>
        </div>

        <LinkList title="Services" items={asLinks(servicePages())} />
        <LinkList title="Where we paint" items={asLinks(cityPages())} />
        {company.length > 0 && <LinkList title="Company" items={company} />}
      </div>

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
