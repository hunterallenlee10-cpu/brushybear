import { placeholder, type Fillable } from "@/lib/placeholders";

export type Season = "winter" | "spring" | "summer" | "fall";

/**
 * Every customer-facing business fact lives here. Change a value once and it
 * updates the header, footer, structured data, metadata and llms.txt.
 */
export const SITE = {
  /** Working name; final pick depends on the name checks. */
  name: "Brushy Bear Painters",
  shortName: "Brushy Bear",
  /** The regional search term. One-line swap if the lane decision changes it. */
  regionName: "Eastside",
  state: "WA",
  stateName: "Washington",

  owners: [
    { name: "Erik", role: "Field operations and estimates" },
    { name: "Hunter Lee", role: "Marketing and customer experience" },
  ],

  /** Shown as typed; the tel: and sms: links strip everything but digits. */
  phone: placeholder("PHONE") as Fillable,
  email: placeholder("EMAIL") as Fillable,
  /** Bare domain, e.g. "brushybearpainters.com". */
  domain: placeholder("DOMAIN") as Fillable,
  hours: {
    /** Footer text, e.g. "Mon–Fri 7 am–6 pm". */
    display: placeholder("HOURS") as Fillable,
    /** schema.org format, e.g. ["Mo-Fr 07:00-18:00"]. Empty = left out. */
    schema: [] as string[],
  },
  /** Washington L&I contractor registration number. */
  lniNumber: placeholder("LNI_NUMBER") as Fillable,
  ubiNumber: placeholder("UBI_NUMBER") as Fillable,
  /**
   * Mailing or office address for the footer and structured data, e.g.
   * { street: "...", city: "Bellevue", zip: "98004" }. A service-area
   * business can use a mailing address; never a fake storefront.
   */
  address: placeholder("ADDRESS") as Fillable<{ street: string; city: string; zip: string }>,
  /** "Leave us a review" link from the Google Business Profile. */
  googleReviewUrl: placeholder("GOOGLE_REVIEW_URL") as Fillable,
  /** What a referrer gets, e.g. "a $100 Visa gift card". Shown on /refer. */
  referralReward: placeholder("REFERRAL_REWARD") as Fillable,
  /** Hidden everywhere until set. */
  warrantyYears: placeholder("WARRANTY_YEARS") as Fillable<number>,

  /** Added to structured data `sameAs` once the profiles exist. */
  social: [] as { name: string; url: string }[],

  /** Switches the seasonal hero line. Set by hand; no clocks at build time. */
  season: "fall" as Season,

  /** Drives the footer's "Last updated" and the homepage dateModified. */
  lastUpdated: "2026-10-24",
} as const;

/** "October 24, 2026" — formatted without Date (prerender-safe). */
export function formatDate(iso: string): string {
  const [y, m, d] = iso.split("-").map(Number);
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
  ];
  return `${months[m - 1]} ${d}, ${y}`;
}

/** Digits only, for tel: and sms: links. */
export function phoneHref(phone: string, scheme: "tel" | "sms"): string {
  const digits = phone.replace(/[^\d+]/g, "");
  return `${scheme}:${digits.startsWith("+") ? digits : `+1${digits}`}`;
}
