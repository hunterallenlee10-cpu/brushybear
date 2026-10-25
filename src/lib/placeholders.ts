/**
 * Business facts we don't have yet (phone, license numbers, ...) are stored
 * as typed placeholders, not loose "[PHONE]" strings. That lets the site hide
 * or flag them, and lets the launch check fail if any would go live.
 */
export type PlaceholderKey =
  | "PHONE"
  | "EMAIL"
  | "DOMAIN"
  | "HOURS"
  | "LNI_NUMBER"
  | "UBI_NUMBER"
  | "WARRANTY_YEARS"
  | "ADDRESS"
  | "GOOGLE_REVIEW_URL"
  | "REFERRAL_REWARD";

export type Placeholder = { readonly placeholder: PlaceholderKey };

/** A value that is either real or still a placeholder. */
export type Fillable<T = string> = T | Placeholder;

export function placeholder(key: PlaceholderKey): Placeholder {
  return { placeholder: key };
}

export function isPlaceholder(value: unknown): value is Placeholder {
  return typeof value === "object" && value !== null && "placeholder" in value;
}

/** True once a real value has replaced the placeholder. */
export function isSet<T>(value: Fillable<T>): value is T {
  return !isPlaceholder(value);
}

/** The real value, or the bracketed key for preview display ("[PHONE]"). */
export function display(value: Fillable<string | number>): string {
  return isPlaceholder(value) ? `[${value.placeholder}]` : String(value);
}
