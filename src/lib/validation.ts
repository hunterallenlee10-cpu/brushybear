import { z } from "zod";

/** One set of rules, used by the form (instant errors) and the API (the real check). */

/** The lead form's "Project type" choices: the nine services plus "other". */
export const SERVICE_OPTIONS = [
  { value: "exterior", label: "Exterior Painting", serviceSlug: "exterior-painting" },
  { value: "interior", label: "Interior Painting", serviceSlug: "interior-painting" },
  { value: "cabinets", label: "Cabinet Painting", serviceSlug: "cabinet-painting" },
  { value: "deck-fence", label: "Decks and Fences", serviceSlug: "decks-and-fences-painting" },
  { value: "millwork", label: "Millwork Painting", serviceSlug: "millwork-painting" },
  { value: "drywall", label: "Drywall Painting", serviceSlug: "drywall-painting" },
  { value: "custom", label: "Custom Painting", serviceSlug: "custom-painting" },
  { value: "commercial", label: "Commercial Painting", serviceSlug: "commercial-painting" },
  { value: "hoa", label: "HOA Painting", serviceSlug: "hoa-painting" },
  { value: "other", label: "Something else", serviceSlug: null },
] as const;

export const TIMELINE_OPTIONS = [
  { value: "asap", label: "As soon as possible" },
  { value: "1-3-months", label: "In 1–3 months" },
  { value: "3-plus-months", label: "3+ months out" },
  { value: "planning", label: "Just planning" },
] as const;

export const HOME_AGE_OPTIONS = [
  { value: "before-1978", label: "Before 1978" },
  { value: "1978-or-later", label: "1978 or later" },
  { value: "not-sure", label: "Not sure" },
] as const;

/** Saved with the lead as proof of what the person agreed to. */
export const SMS_CONSENT_TEXT =
  "Yes, text me about my estimate. Message and data rates may apply. Message frequency varies. Reply STOP to opt out. Consent isn't required to get an estimate.";

export const MAX_PHOTOS = 6;
export const MAX_PHOTO_BYTES = 10 * 1024 * 1024;
export const PHOTO_TYPES = ["image/jpeg", "image/png", "image/webp", "image/heic", "image/heif"];

const digits = (v: string) => v.replace(/\D/g, "");
const values = <T extends readonly { value: string }[]>(opts: T) =>
  opts.map((o) => o.value) as unknown as [T[number]["value"], ...T[number]["value"][]];

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name.").max(80, "That name is too long."),
  phone: z
    .string()
    .trim()
    .refine((v) => {
      const d = digits(v);
      return d.length === 10 || (d.length === 11 && d.startsWith("1"));
    }, "Please enter a 10-digit phone number."),
  email: z.string().trim().max(120).pipe(z.email("Please enter a valid email address.")),
  location: z.string().trim().min(3, "Please enter your address or ZIP code.").max(160),
  services: z.array(z.enum(values(SERVICE_OPTIONS))).min(1, "Please choose a project type."),
});

/** Photos must be in our own Blob store; no other URLs get forwarded. */
const photoUrl = z
  .url()
  .refine((u) => {
    const { protocol, hostname } = new URL(u);
    return protocol === "https:" && hostname.endsWith(".public.blob.vercel-storage.com");
  }, "Unexpected photo link.");

export const detailsSchema = z.object({
  timeline: z.enum(values(TIMELINE_OPTIONS)).optional(),
  homeAge: z.enum(values(HOME_AGE_OPTIONS)).optional(),
  notes: z.string().trim().max(1000, "Please keep this under 1,000 characters.").optional(),
  smsConsent: z.boolean(),
  photoUrls: z.array(photoUrl).max(MAX_PHOTOS),
  photoUploadFailed: z.boolean().optional(),
});

export const leadSchema = contactSchema.extend(detailsSchema.shape).extend({
  /** Where the form sat ("home", "estimate-page", "service:exterior-painting"...). */
  source: z.string().max(80),
  page: z.string().max(300),
  referrer: z.string().max(500).optional(),
  utm: z.record(z.string().max(40), z.string().max(200)).optional(),
});

export type ContactInput = z.infer<typeof contactSchema>;
export type Lead = z.infer<typeof leadSchema>;

/** First error message per field, for inline display. */
export function fieldErrors(error: z.ZodError): Record<string, string> {
  const out: Record<string, string> = {};
  for (const issue of error.issues) {
    const key = String(issue.path[0] ?? "form");
    if (!out[key]) out[key] = issue.message;
  }
  return out;
}
