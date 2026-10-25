import { LeadForm, type LeadFormProps } from "@/components/lead/LeadForm";
import { INDEXABLE } from "@/config/env";
import { phoneHref, SITE } from "@/config/site";
import { publishedCities } from "@/data/cities";
import { isSet } from "@/lib/placeholders";

type Props = Pick<LeadFormProps, "source" | "preselect" | "title" | "headingLevel">;

/** The lead form with the business facts it needs filled in on the server. */
export function LeadFormCard(props: Props) {
  const phone = isSet(SITE.phone) ? SITE.phone : undefined;
  return (
    <LeadForm
      {...props}
      preview={!INDEXABLE}
      phone={phone}
      phoneHref={phone ? phoneHref(phone, "tel") : undefined}
      cityNames={Object.fromEntries(publishedCities().map((c) => [c.slug, c.name]))}
    />
  );
}
