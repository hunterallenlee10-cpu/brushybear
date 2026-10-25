import { z } from "zod";
import {
  CONTACT_OPTIONS,
  HOME_AGE_OPTIONS,
  isEmail,
  isPhone,
  MAX_PHOTOS,
  MESSAGES,
  SERVICE_OPTIONS,
  TIMELINE_OPTIONS,
} from "@/lib/lead-rules";

/**
 * The server's check of a lead (zod), built from the same constants and
 * messages as the browser's quick check in lead-rules.ts. Only the API
 * route imports this file, so zod never ships to the browser.
 */

export {
  CONTACT_OPTIONS,
  HOME_AGE_OPTIONS,
  MAX_PHOTO_BYTES,
  MAX_PHOTOS,
  PHOTO_TYPES,
  SERVICE_OPTIONS,
  SMS_CONSENT_TEXT,
  TIMELINE_OPTIONS,
} from "@/lib/lead-rules";

const values = <T extends readonly { value: string }[]>(opts: T) =>
  opts.map((o) => o.value) as unknown as [T[number]["value"], ...T[number]["value"][]];

/** Photos must be in our own Blob store; no other URLs get forwarded. */
const photoUrl = z
  .url()
  .refine((u) => {
    const { protocol, hostname } = new URL(u);
    return protocol === "https:" && hostname.endsWith(".public.blob.vercel-storage.com");
  }, "Unexpected photo link.");

export const leadSchema = z.object({
  // Step 1
  services: z.array(z.enum(values(SERVICE_OPTIONS))).min(1, MESSAGES.services),
  zip: z.string().trim().regex(/^\d{5}$/, MESSAGES.zip),
  // Step 2
  name: z.string().trim().min(2, MESSAGES.name).max(80, MESSAGES.nameLong),
  phone: z.string().trim().refine(isPhone, MESSAGES.phone),
  email: z.string().trim().refine(isEmail, MESSAGES.email),
  address: z.string().trim().min(3, MESSAGES.address).max(160),
  contactMethod: z.enum(values(CONTACT_OPTIONS), MESSAGES.contactMethod),
  smsConsent: z.boolean(),
  photoUrls: z.array(photoUrl).max(MAX_PHOTOS),
  photoUploadFailed: z.boolean().optional(),
  // Optional extras
  timeline: z.enum(values(TIMELINE_OPTIONS)).optional(),
  homeAge: z.enum(values(HOME_AGE_OPTIONS)).optional(),
  notes: z.string().trim().max(1000, MESSAGES.notes).optional(),
  /** From the color preview, e.g. "Forest & Cream". */
  palette: z.string().trim().max(80).optional(),
  /** From the price estimator, e.g. "Exterior, 2 stories, 2,500 sq ft: $9,800-$14,200". */
  ballpark: z.string().trim().max(200).optional(),
  // Where it came from
  source: z.string().max(80),
  page: z.string().max(300),
  referrer: z.string().max(500).optional(),
  utm: z.record(z.string().max(40), z.string().max(200)).optional(),
});

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
