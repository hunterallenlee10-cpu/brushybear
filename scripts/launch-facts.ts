import { SITE } from "@/config/site";
import { isSet, type Fillable } from "@/lib/placeholders";

/**
 * The business facts the site needs before it can go public, where each one
 * shows, and whether it blocks launch. Shared by content-todo.ts and
 * check-placeholders.ts.
 */
export type Fact = {
  key: string;
  label: string;
  value: Fillable<string | number>;
  shows: string;
  requiredForLaunch: boolean;
};

export const FACTS: Fact[] = [
  { key: "PHONE", label: "Business phone", value: SITE.phone, shows: "Header, footer, mobile Call/Text bar, structured data", requiredForLaunch: true },
  { key: "EMAIL", label: "Business email", value: SITE.email, shows: "Footer, structured data", requiredForLaunch: true },
  { key: "DOMAIN", label: "Website domain", value: SITE.domain, shows: "Canonical URLs, sitemap (also set NEXT_PUBLIC_SITE_URL)", requiredForLaunch: true },
  { key: "HOURS", label: "Business hours", value: SITE.hours.display, shows: "Footer (also fill SITE.hours.schema for structured data)", requiredForLaunch: true },
  { key: "LNI_NUMBER", label: "WA L&I contractor registration no.", value: SITE.lniNumber, shows: "Footer; turns on the \"Licensed, bonded and insured\" line", requiredForLaunch: true },
  { key: "UBI_NUMBER", label: "WA UBI number", value: SITE.ubiNumber, shows: "Footer", requiredForLaunch: true },
  { key: "WARRANTY_YEARS", label: "Warranty length (years)", value: SITE.warrantyYears, shows: "Hidden until set", requiredForLaunch: false },
];

export const missingFacts = () => FACTS.filter((f) => !isSet(f.value));
