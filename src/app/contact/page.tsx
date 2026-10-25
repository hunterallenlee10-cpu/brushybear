import { PageHeader } from "@/components/layout/PageHeader";
import { LeadFormCard } from "@/components/lead/LeadFormCard";
import { JsonLd } from "@/components/seo/JsonLd";
import { ServiceAreaMap } from "@/components/sections/ServiceAreaMap";
import { Fill, PlaceholderMark } from "@/components/ui/Fill";
import { ClockIcon, MailIcon, PhoneIcon, PinIcon, TextIcon } from "@/components/ui/Icons";
import { PAGES } from "@/config/pages";
import { phoneHref, SITE } from "@/config/site";
import { cityList } from "@/data/cities";
import { isSet } from "@/lib/placeholders";
import { breadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contact Our Eastside House Painters",
  description: `Call, text or email Brushy Bear Painters, house painters for ${cityList()}. Or send our two-step estimate form online.`,
  path: PAGES.contact.path,
});

const ROW = "flex items-start gap-4 rounded-2xl bg-cream-50 p-5";

/** Phone, text, email, hours and address, plus the estimate form. */
export default function ContactPage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Contact", path: PAGES.contact.path },
  ];
  const phone = isSet(SITE.phone) ? SITE.phone : null;
  return (
    <>
      <PageHeader crumbs={crumbs} title={`Contact our ${SITE.regionName} house painters`} intro={["Call, text or email, or send the form. We reply during business hours."]} />
      <div className="mx-auto grid max-w-7xl gap-12 px-4 pb-20 md:px-8 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <div>
          <ul className="space-y-3">
            <li className={ROW}>
              <PhoneIcon className="mt-0.5 size-6 text-forest" />
              <div>
                <p className="font-extrabold text-forest">Call</p>
                {phone ? (
                  <a href={phoneHref(phone, "tel")} data-event="call_click" data-location="contact" className="text-lg underline">
                    {phone}
                  </a>
                ) : (
                  <Fill value={SITE.phone} />
                )}
              </div>
            </li>
            <li className={ROW}>
              <TextIcon className="mt-0.5 size-6 text-forest" />
              <div>
                <p className="font-extrabold text-forest">Text</p>
                {phone ? (
                  <a href={phoneHref(phone, "sms")} data-event="text_click" data-location="contact" className="text-lg underline">
                    {phone}
                  </a>
                ) : (
                  <Fill value={SITE.phone} />
                )}
              </div>
            </li>
            <li className={ROW}>
              <MailIcon className="mt-0.5 size-6 text-forest" />
              <div>
                <p className="font-extrabold text-forest">Email</p>
                {isSet(SITE.email) ? (
                  <a href={`mailto:${SITE.email}`} className="text-lg underline">
                    {SITE.email}
                  </a>
                ) : (
                  <Fill value={SITE.email} />
                )}
              </div>
            </li>
            <li className={ROW}>
              <ClockIcon className="mt-0.5 size-6 text-forest" />
              <div>
                <p className="font-extrabold text-forest">Hours</p>
                <Fill value={SITE.hours.display} />
              </div>
            </li>
            <li className={ROW}>
              <PinIcon className="mt-0.5 size-6 text-forest" />
              <div>
                <p className="font-extrabold text-forest">Address</p>
                <address className="not-italic">
                  {isSet(SITE.address) ? (
                    <>
                      {SITE.address.street}, {SITE.address.city}, {SITE.state} {SITE.address.zip}
                    </>
                  ) : (
                    <PlaceholderMark value={SITE.address} />
                  )}
                </address>
                <p className="text-sm text-charcoal-soft">We come to you: {cityList()}.</p>
              </div>
            </li>
          </ul>
          <div className="mx-auto mt-10 max-w-xs">
            <ServiceAreaMap />
          </div>
        </div>
        <div className="self-start">
          <LeadFormCard source="contact" />
        </div>
      </div>
      <JsonLd items={[breadcrumbSchema(crumbs)]} />
    </>
  );
}
