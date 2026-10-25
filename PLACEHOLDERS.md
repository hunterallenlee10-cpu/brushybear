# Placeholders for Hunter and Erik

Everything below shows on the preview as a striped `[KEY]` badge or a labeled stand-in. Nothing here is invented: each one waits for a real fact. A production build with `SITE_INDEXABLE=true` fails while a required one is still empty (`scripts/check-placeholders.ts`).

Where to fill business facts: `src/config/site.ts`. Env vars: Vercel project settings.

## Business facts (`src/config/site.ts`)

| Key | What we need | Where it shows | Who |
|---|---|---|---|
| `PHONE` | Business phone | Utility bar, footer, mobile Call/Text bar, contact page, structured data | Hunter |
| `EMAIL` | Business email | Footer, contact page, structured data | Hunter |
| `DOMAIN` | Website domain (also set `NEXT_PUBLIC_SITE_URL`) | Canonicals, sitemap | Hunter |
| `HOURS` | Business hours (plus `SITE.hours.schema`) | Footer, contact page, structured data | Both |
| `ADDRESS` | Mailing or office address (street, city, ZIP). No fake storefront. | Footer, contact page, structured data | Both |
| `LNI_NUMBER` | WA L&I contractor registration number | Footer, trust strip ("Licensed, bonded and insured" turns on when set) | Erik |
| `UBI_NUMBER` | WA UBI number | Footer | Erik |
| `WARRANTY_YEARS` | Workmanship warranty length | Hidden until set | Both |
| `GOOGLE_REVIEW_URL` | "Leave us a review" link from the Google Business Profile | Reviews page, reviews section | Hunter |
| `REFERRAL_REWARD` | What a referrer gets | Refer & Earn page | Both |

## Environment variables (Vercel project settings)

| Variable | What it does | Status |
|---|---|---|
| `NEXT_PUBLIC_BOOKING_URL` | Cal.com / Calendly / Google booking page shown on the form's thank-you screen ("Book your walkthrough"). Until set, the slot says we'll reach out to pick a time. | Not set |
| `LEAD_WEBHOOK_URL` / `LEAD_WEBHOOK_SECRET` | Where `/api/lead` sends each lead (the Brushy Bear n8n workflow). The old `N8N_WEBHOOK_URL` / `N8N_WEBHOOK_SECRET` still work as a fallback, and are already set in Production. | Fallback in use |
| `LEADS_DRY_RUN` | `true` = leads are checked and logged, not sent. Set `false` in Production at go-live. | `true` |

## Promises (each still marked "confirm with Erik")

All six keep their current wording. Erik confirms each one, plus the fine print on `/our-promise`:
- Written estimate in 24 hours (fine print: big jobs may take longer, with a date given at the walkthrough)
- One point of contact
- A photo update every day
- A clean house every evening (fine print: mid-coat rooms may stay taped overnight)
- Rain-day promise ($0 for weather delays)
- We start on time or $250 off (amount and terms)

## Service-area ZIPs (`src/data/service-zips.ts`)

The form says "in our area" for these ZIPs. Erik confirms whether to include 98053 (much of it is unincorporated King County) and the PO-box ZIPs (98009, 98015, 98073, 98083).
