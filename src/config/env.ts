/**
 * Public, build-time settings. These are read when the site is built, so
 * changing one on Vercel needs a redeploy. Server-only secrets (the n8n
 * webhook) live in a separate server-only module.
 */

/** Placeholder until the real domain is chosen. `.example` can never resolve. */
const FALLBACK_URL = "https://brushybearpainters.example";

export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || FALLBACK_URL).replace(/\/+$/, "");

/** "production" | "preview" | "development" on Vercel; undefined locally. */
export const VERCEL_ENV = process.env.VERCEL_ENV;

/**
 * Search engines may index the site only when SITE_INDEXABLE is "true" and
 * this isn't a preview deployment. Defaults to off.
 */
export const INDEXABLE = process.env.SITE_INDEXABLE === "true" && VERCEL_ENV !== "preview";
