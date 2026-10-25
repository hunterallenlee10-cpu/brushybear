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
| `OWNER_STORY` | Erik and Hunter's story in their own words (`ABOUT.story` in `src/data/about.ts`) | About page | Both |

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

## Ballpark prices (`src/config/pricing.ts`)

Every rate is a starting guess marked `// TODO: Erik confirm`. The estimator labels its result "Ballpark only, not a quote."

| Item | Current guess |
|---|---|
| Interior | $650-$1,050 per average room (walls + trim), minimum $1,200-$1,800 |
| Exterior | $3.60-$5.80 per sq ft of home, minimum $4,500-$6,500 |
| Cabinets | $140-$220 per door or drawer, minimum $3,000-$4,200 |
| Deck | $3.25-$5.50 per sq ft, minimum $1,200-$1,700 |
| Fence | $9-$15 per linear ft (6 ft, both sides), minimum $900-$1,300 |
| Stories (exterior) | 1 story x0.9, 2 stories x1.0, 3+ x1.25 |
| Condition | Good x1.0, some peeling x1.15, rough x1.35 |

## Color preview (`src/data/palettes.ts`)

Eight palettes named by color, not by paint brand. If Erik wants real brand colors named, swap the names and hex values once he confirms which paint line we use.

## Photos (real only: never stock, AI or another company's work)

| Slot | Where | Who |
|---|---|---|
| Before/after photos of real jobs | `/projects`, home "Before and after", every service page. Add them to `src/data/gallery.ts`; the striped sliders turn into real ones. | Erik |
| Photo of Erik, photo of Hunter | About page | Both |
| Real job photos to replace the illustrated scenes | Service cards, articles, hero (all labeled "Illustration" until then) | Erik |

## Reviews

| Item | Where | Who |
|---|---|---|
| Real Google reviews (with permission) | `src/data/reviews.ts`. The carousel with initial avatars and "Read more" turns on by itself; until then the home page and `/reviews` say plainly that we're new. | Both |
| Review policy ("we ask every customer, we don't filter, we don't pay") | `/reviews` | Hunter |

## Copy marked "confirm" (striped tag on the preview)

| Item | Where | Who |
|---|---|---|
| Typical job lengths and steps for each service | Service page timelines (`src/data/service-timelines.ts`) | Erik |
| City "what we plan around" notes (HOA coverage per city) | City pages (`src/data/city-notes.ts`) | Erik |
| Realtor and property-manager offers (lockbox access, turnovers, recurring scheduling) | `/realtors-property-managers` | Erik |
| Referral terms (one per new customer, paid after job is paid, no limit) | `/refer` | Both |

## Not on the site on purpose

These were in the brief or the competitors' sites, and stay off until they're real:
- Financing partner and financing offers.
- Warranty length (hidden until `WARRANTY_YEARS` is set).
- Review counts, star ratings, project counts, years in business, awards, badges, certifications.
