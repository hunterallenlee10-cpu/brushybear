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
