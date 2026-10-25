/**
 * Lead form rules shared by the browser and the server. No libraries here,
 * so the form's code stays small enough to sit in the hero. The API route
 * runs the full zod check (src/lib/validation.ts) built from these same
 * constants; tests/unit/lead.test.ts keeps the two in agreement.
 */

export const SERVICE_OPTIONS = [
  { value: "interior", label: "Interior", serviceSlug: "interior-painting" },
  { value: "exterior", label: "Exterior", serviceSlug: "exterior-painting" },
  { value: "cabinets", label: "Cabinets", serviceSlug: "cabinet-painting" },
  { value: "deck-fence", label: "Deck or fence", serviceSlug: "deck-and-fence-staining" },
  { value: "other", label: "Something else", serviceSlug: null },
] as const;

export const CONTACT_OPTIONS = [
  { value: "text", label: "Text" },
  { value: "call", label: "Call" },
  { value: "email", label: "Email" },
] as const;

export const TIMELINE_OPTIONS = [
  { value: "asap", label: "As soon as possible" },
  { value: "1-3-months", label: "In 1-3 months" },
  { value: "3-plus-months", label: "3+ months out" },
  { value: "planning", label: "Just planning" },
] as const;

export const HOME_AGE_OPTIONS = [
  { value: "before-1978", label: "Before 1978" },
  { value: "1978-or-later", label: "1978 or later" },
  { value: "not-sure", label: "Not sure" },
] as const;

/** Saved with the lead as proof of exactly what the person agreed to. */
export const SMS_CONSENT_TEXT =
  "I agree to receive automated text messages from Brushy Bear Painters about my estimate at the phone number provided. Consent is not a condition of purchase. Msg & data rates may apply. Msg frequency varies. Reply HELP for help and STOP to cancel.";

export const MAX_PHOTOS = 6;
export const MAX_PHOTO_BYTES = 10 * 1024 * 1024;
export const PHOTO_TYPES = ["image/jpeg", "image/png", "image/webp", "image/heic", "image/heif"];

export const MESSAGES = {
  services: "Pick at least one.",
  zip: "Please enter a 5-digit ZIP code.",
  name: "Please enter your name.",
  nameLong: "That name is too long.",
  phone: "Please enter a 10-digit phone number.",
  email: "Please enter a valid email address.",
  address: "Please enter your street address.",
  contactMethod: "Pick how you'd like us to reach you.",
  notes: "Please keep this under 1,000 characters.",
} as const;

export type ServiceValue = (typeof SERVICE_OPTIONS)[number]["value"];
export type ContactValue = (typeof CONTACT_OPTIONS)[number]["value"];

const digits = (v: string) => v.replace(/\D/g, "");

export const isZip = (v: string) => /^\d{5}$/.test(v.trim());
export const isPhone = (v: string) => {
  const d = digits(v);
  return d.length === 10 || (d.length === 11 && d.startsWith("1"));
};
export const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()) && v.trim().length <= 120;

export type Step1 = { services: string[]; zip: string };
export type Step2 = { name: string; phone: string; email: string; address: string; contactMethod: string };

/** Step 1: what and where. Returns field errors (empty object = fine). */
export function checkStep1(v: Step1): Record<string, string> {
  const e: Record<string, string> = {};
  if (v.services.length === 0) e.services = MESSAGES.services;
  if (!isZip(v.zip)) e.zip = MESSAGES.zip;
  return e;
}

/** Step 2: who and how to reach them. */
export function checkStep2(v: Step2): Record<string, string> {
  const e: Record<string, string> = {};
  const name = v.name.trim();
  if (name.length < 2) e.name = MESSAGES.name;
  else if (name.length > 80) e.name = MESSAGES.nameLong;
  if (!isPhone(v.phone)) e.phone = MESSAGES.phone;
  if (!isEmail(v.email)) e.email = MESSAGES.email;
  if (v.address.trim().length < 3) e.address = MESSAGES.address;
  if (!CONTACT_OPTIONS.some((o) => o.value === v.contactMethod)) e.contactMethod = MESSAGES.contactMethod;
  return e;
}
