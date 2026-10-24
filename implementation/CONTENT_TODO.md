# Content to-do for Erik and Hunter

Generated from the site's data on 2026-10-24 by `npm run content-todo`. Don't edit by hand: answer an item, update the data, then re-run the script.

## 1. Business facts (placeholders)

Set these in `src/config/site.ts`. A launch build fails while any required one is missing.

| Fact | Status | Where it shows | Needed for launch |
|---|---|---|---|
| Business phone | ❌ `[PHONE]` | Header, footer, mobile Call/Text bar, structured data | Yes |
| Business email | ❌ `[EMAIL]` | Footer, structured data | Yes |
| Website domain | ❌ `[DOMAIN]` | Canonical URLs, sitemap (also set NEXT_PUBLIC_SITE_URL) | Yes |
| Business hours | ❌ `[HOURS]` | Footer (also fill SITE.hours.schema for structured data) | Yes |
| WA L&I contractor registration no. | ❌ `[LNI_NUMBER]` | Footer; turns on the "Licensed, bonded and insured" line | Yes |
| WA UBI number | ❌ `[UBI_NUMBER]` | Footer | Yes |
| Warranty length (years) | ❌ `[WARRANTY_YEARS]` | Hidden until set | No |

## 2. Decisions

| Topic | Question | Who | Blocks |
|---|---|---|---|
| Lane versus EA Pro | Which lane does Brushy Bear take (area, price point, services or overflow)? Do the 5 Phase 1 cities stay as listed? | Both | City-page copy (build Phase 5) and whether "Eastside" stays the main regional search term. |
| Company name | Lock the final name after the Secretary of State, L&I, USPTO, domain and social-handle checks. | Both | All Higgsfield spending (build Phase 7), the domain and the Google Business Profile. |
| About page | Should the About page mention that Erik also owns another painting company? (The site never presents the two as competitors.) | Both | About page copy (build Phase 4). |
| Article author | Will Erik put his full name on the articles as the author? If not, they're credited to the company. | Erik | Article bylines and Article structured data (build Phase 6). |
| Erik's experience | How many years has Erik painted on the Eastside? (Shown on About only once confirmed.) | Erik |  |
| Quote promise | Confirm the promise wording: "Written estimate within 24 hours of the walkthrough." | Erik |  |
| Start-date promise | Confirm: "We start on the scheduled date or take $250 off. Rain delays don't count, and those reschedule first." | Erik |  |
| Warranty | How many years is the workmanship warranty, and what does it cover? (Hidden until set.) | Both |  |
| n8n workflow | Build the Brushy Bear speed-to-lead workflow (separate from EA Pro's) so the form can send real leads. | Hunter | Live form submissions (the form runs in test mode until then). |

## 3. Photos, reviews and profiles

| Topic | Question | Who | Blocks |
|---|---|---|---|
| Job photos | Real before/after photos from finished jobs, named by service and city. 6+ jobs turns the gallery on in search. | Erik |  |
| Team photos | Real photos of Erik and Hunter (and the crew lead) for the About page. No AI people, ever. | Both |  |
| Reviews | Real Google reviews, with permission to show them. The reviews section turns on automatically once added. | Both |  |
| Social profiles | Facebook, Instagram, Nextdoor and other profile URLs once created (added to structured data). | Hunter |  |

## 4. Content marked "(confirm)"

None yet. Service, city, FAQ and promise copy arrives in build Phases 2–6; every unverified fact in it is listed here automatically.
