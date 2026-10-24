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

## 4. Copy marked "confirm"

Each item is marked in the site's data with a `confirm` note and shows a striped **confirm** tag on the preview site. Check it, fix the copy if needed, then delete the note. A public build fails while any remain.

**119 items on 15 pages.**

### Homepage: promises (6)

| Item | What to check |
|---|---|
| Written estimate in 24 hours | Promise: confirm with Erik before launch |
| One point of contact | Promise: confirm with Erik before launch |
| A photo update every day | Promise: confirm with Erik before launch |
| A clean house every evening | Promise: confirm with Erik before launch |
| Rain-day promise | Promise: confirm with Erik before launch |
| We start on time | Promise: confirm with Erik before launch (amount and terms) |

### Homepage: how it works (2)

| Item | What to check |
|---|---|
| Walkthrough and written quote | Promise: confirm with Erik before launch |
| We paint | Promise: confirm with Erik before launch |

### FAQ (8)

| Item | What to check |
|---|---|
| How do your estimates work, and how fast will I get a price? | Erik: confirm before launch: 24-hour quote promise |
| How long does an interior or exterior paint job take? | Erik: confirm before launch: typical job lengths |
| Do you paint in the rain? | Erik: confirm before launch: rain-day promise |
| My home was built before 1978. Is it safe to paint? | Confirm EPA RRP firm certification and a certified renovator are in place before launch |
| What do I need to do before you start? | Erik: confirm before launch: homeowner prep list |
| What kind of paint do you use? | Erik: which paint lines and brands do we use? (Add them here once confirmed.) |
| Do you guarantee your work? | Warranty: confirm terms; the length appears here once set in site.ts |
| How do payment and deposits work? | Erik: confirm before launch: deposit amount and payment methods |

### About (3)

| Item | What to check |
|---|---|
| Erik | Erik: confirm bio wording, years of experience and last name (photo coming) |
| Hunter Lee | Hunter: confirm bio wording (photo coming) |
| You always know what's next | Promise: confirm with Erik before launch |

### Service: interior-painting (5)

| Item | What to check |
|---|---|
| Lead-safe painting in homes built before 1978 | Erik: confirm the lead-safe steps listed here match what we do on pre-1978 interior jobs |
| Living at home while we paint | Promise: confirm with Erik (one point of contact, daily photo update, home left clean every evening, we move and cover heavy furniture) |
| A single bedroom is often a one- or two-day job. A full main floor or  | Erik: confirm typical interior durations (one bedroom in 1–2 days) and that every estimate lists expected working days |
| How long does an interior painting job take? | Erik: confirm typical interior durations and that estimates list working days |
| Do I need to move my furniture before you paint? | Promise: confirm with Erik that we move and cover heavy furniture |

### Service: exterior-painting (4)

| Item | What to check |
|---|---|
| Summer still brings the odd rainy day. When it does, we wait it out ra | Promise: confirm the rain-day promise with Erik (weather delays rescheduled first and never charged) |
| How long an exterior paint job takes | Erik: confirm typical exterior job length (about 1–2 weeks of working days) and the daily photo update promise |
| Repainting a house usually doesn't need a city permit, but HOAs often  | Verify: repainting needs no city permit in Bellevue, Kirkland, Redmond, Sammamish and Issaquah, and HOA color approval is common |
| What if my house was built before 1978? | Erik: confirm our exterior lead-safe steps on pre-1978 homes |

### Service: cabinet-painting (5)

| Item | What to check |
|---|---|
| How we paint cabinets, step by step | Erik: confirm our standard cabinet process (where doors are sprayed, how boxes are finished, number of topcoats, cure time before rehanging) |
| What your kitchen is like during the job | Erik: confirm typical cabinet job length (several days to about a week) and how much of the kitchen stays usable |
| Oak's open grain still shows through paint unless it's filled first, s | Erik: confirm grain filling on oak and filling old hardware holes are options we offer |
| Will I see brush marks on my cabinets? | Erik: confirm doors are always sprayed and how boxes and face frames are finished |
| Can I use my kitchen while you paint the cabinets? | Erik: confirm what stays usable during a cabinet job and the typical length |

### Service: deck-and-fence-staining (4)

| Item | What to check |
|---|---|
| Staining needs dry weather and dry wood | Erik: confirm we check wood moisture (with a meter when in doubt) before staining |
| If rain moves in, we reschedule instead of staining damp wood, and wea | Promise: confirm the rain-day promise with Erik (weather delays rescheduled first and never charged) |
| As a rough guide, semi-transparent stain on a deck floor often needs a | Erik: confirm the typical restain intervals we tell customers |
| How long does deck staining take? | Erik: confirm the typical deck staining timeline (2–4 days) |

### City: bellevue-wa (15)

| Item | What to check |
|---|---|
| Homes on the Cougar Mountain/Lakemont hillsides, and the newer houses  | Confirm that Cougar Mountain/Lakemont homes in Bellevue are mostly 1980s or newer. |
| HOA approval and permits in Bellevue | Confirm with City of Bellevue Development Services that a straight repaint (no siding replacement) needs no building permit, and confirm which Bellevue subdivisions (for example on Cougar Mountain/Lakemont) require HOA color approval. |
| If it rains on your start date | Promise: confirm with Erik |
| Lake Hills | Hunter/Erik: confirm we serve this area |
| Crossroads | Hunter/Erik: confirm we serve this area |
| Northeast Bellevue | Hunter/Erik: confirm we serve this area |
| Bridle Trails | Hunter/Erik: confirm we serve this area |
| Woodridge | Hunter/Erik: confirm we serve this area |
| Eastgate/Factoria | Hunter/Erik: confirm we serve this area |
| Somerset | Hunter/Erik: confirm we serve this area |
| Newport | Hunter/Erik: confirm we serve this area |
| West Lake Sammamish | Hunter/Erik: confirm we serve this area |
| Cougar Mountain/Lakemont | Hunter/Erik: confirm we serve this area |
| Do I need a permit to repaint my house in Bellevue? | Confirm with City of Bellevue Development Services that a straight repaint (no siding replacement) needs no building permit, and confirm which Bellevue subdivisions (for example on Cougar Mountain/Lakemont) require HOA color approval. |
| Do you paint homes in Somerset and on Cougar Mountain? | Hunter/Erik: confirm we serve Somerset and Cougar Mountain/Lakemont, and that we can provide lift access for tall downhill walls. |

### City: kirkland-wa (13)

| Item | What to check |
|---|---|
| Townhomes, condos and HOAs in Kirkland | Confirm with the City of Kirkland that a straight exterior repaint needs no building permit, and confirm how common HOA-managed exteriors and HOA color approval are in Kirkland townhome, condo and single-family communities. |
| What you'll see each day | Promise: confirm with Erik |
| Finn Hill | Hunter/Erik: confirm we serve this area |
| Juanita | Hunter/Erik: confirm we serve this area |
| Totem Lake | Hunter/Erik: confirm we serve this area |
| North Rose Hill | Hunter/Erik: confirm we serve this area |
| South Rose Hill/Bridle Trails | Hunter/Erik: confirm we serve this area |
| Central Houghton | Hunter/Erik: confirm we serve this area |
| Lakeview | Hunter/Erik: confirm we serve this area |
| Market | Hunter/Erik: confirm we serve this area |
| Norkirk | Hunter/Erik: confirm we serve this area |
| Highlands | Hunter/Erik: confirm we serve this area |
| Can you paint my Kirkland townhome if the HOA handles the exterior? | Confirm that Kirkland HOAs typically don't require approval for interior painting; keep the wording general if unsure. |

### City: redmond-wa (14)

| Item | What to check |
|---|---|
| Single-family neighborhoods like Education Hill, Grass Lawn and North  | Confirm era: Education Hill, Grass Lawn and North Redmond homes are mostly 1970s–1990s with newer subdivisions since. |
| HOA color approval in Redmond | Confirm with the City of Redmond that a straight exterior repaint needs no building permit; confirm that the Redmond Ridge and Trilogy associations require exterior color approval, and how common covenant color review is in Redmond subdivisions. |
| A written quote within 24 hours | Promise: confirm with Erik |
| Education Hill | Hunter/Erik: confirm we serve this area |
| North Redmond | Hunter/Erik: confirm we serve this area |
| Grass Lawn | Hunter/Erik: confirm we serve this area |
| Overlake | Hunter/Erik: confirm we serve this area |
| Idylwood | Hunter/Erik: confirm we serve this area |
| Bear Creek | Hunter/Erik: confirm we serve this area |
| Willows/Rose Hill | Hunter/Erik: confirm we serve this area |
| Downtown Redmond | Hunter/Erik: confirm we serve this area |
| Redmond Ridge | Hunter/Erik: confirm we serve this area |
| Do you work in Redmond Ridge and Trilogy? | Hunter/Erik: confirm we serve Redmond Ridge and Trilogy at Redmond Ridge. |
| How do I get HOA approval for exterior paint colors in Redmond? | Confirm typical Redmond-area HOA approval timelines ("a few weeks") and what submissions usually require. |

### City: sammamish-wa (15)

| Item | What to check |
|---|---|
| If rain interrupts your exterior job, the lost days are rescheduled fi | Promise: confirm with Erik |
| Repainting a house usually doesn't need a city permit, but HOAs often  | Confirm with the City of Sammamish (sammamish.us) that repainting a house needs no permit, and that most Sammamish subdivisions have HOAs. |
| Larger communities such as Klahanie, Trossachs and the Sahalee-area as | Confirm the Klahanie, Trossachs and Sahalee-area HOA rules: architectural review for exterior colors, approved palettes, typical approval time, and whether same-color repaints need approval. |
| To get started, book a [free estimate](/estimate). We walk the house w | Promise: confirm with Erik |
| While we work, you have one point of contact, a photo update every day | Promise: confirm with Erik |
| Klahanie | Hunter/Erik: confirm we serve this area |
| Trossachs | Hunter/Erik: confirm we serve this area |
| Pine Lake | Hunter/Erik: confirm we serve this area |
| Beaver Lake | Hunter/Erik: confirm we serve this area |
| Sahalee | Hunter/Erik: confirm we serve this area |
| Inglewood | Hunter/Erik: confirm we serve this area |
| East Lake Sammamish | Hunter/Erik: confirm we serve this area |
| Sammamish Town Center | Hunter/Erik: confirm we serve this area |
| Do I need HOA approval to paint my house in Sammamish? | Confirm typical Sammamish HOA approval rules (Klahanie, Trossachs, Sahalee), including same-color repaints. |
| Can you paint a tall two-story house in Sammamish? | Erik: confirm we have the ladders and staging for tall two-story exteriors and interior stairwells. |

### City: issaquah-wa (19)

| Item | What to check |
|---|---|
| About one in six Issaquah homes was built before 1980. Many of them ar | Confirm where most pre-1980 Issaquah homes are (Olde Town, valley floor, lower Squak and Cougar slopes). The one-in-six figure is verified (ACS B25034). |
| Here the job is usually a first or second repaint: shrunken caulk at f | Confirm which Issaquah townhome communities (Highlands, Talus) have HOA-managed exterior painting. |
| Conditions also change with elevation inside the city. The valley floo | Erik: confirm these Issaquah microclimate notes (valley fog, shaded slopes, Highlands wind and snow) match what you see in the field. |
| When rain stops an exterior job, those days are rescheduled first, and | Promise: confirm with Erik |
| Repainting a house usually doesn't need a city permit, but HOAs often  | Confirm with the City of Issaquah (issaquahwa.gov) that exterior repainting needs no permit, including in Olde Town. |
| The Issaquah Highlands has an architectural review process for exterio | Confirm the Issaquah Highlands, Talus and Montreux rules: architectural review for exterior colors, sample board requirement and typical review time. |
| Olde Town works differently. Most houses there have no HOA, so color i | Confirm that most Olde Town homes have no HOA, and what Issaquah's historic landmark rules say about exterior paint and color changes. |
| Start with a [free estimate](/estimate). After the walkthrough you get | Promise: confirm with Erik |
| Olde Town | Hunter/Erik: confirm we serve this area |
| Gilman and Newport Way | Hunter/Erik: confirm we serve this area |
| Issaquah Highlands | Hunter/Erik: confirm we serve this area |
| Talus | Hunter/Erik: confirm we serve this area |
| Montreux | Hunter/Erik: confirm we serve this area |
| Squak Mountain | Hunter/Erik: confirm we serve this area |
| Cougar Mountain | Hunter/Erik: confirm we serve this area |
| Tiger Mountain foothills | Hunter/Erik: confirm we serve this area |
| Providence Point | Hunter/Erik: confirm we serve this area |
| Can I pick any paint color for my Issaquah Highlands home? | Confirm Issaquah Highlands (and Talus, Montreux) require approval for exterior color changes. |
| Do I need a permit to repaint my house in Issaquah? | Confirm with the City of Issaquah that repainting needs no permit, and the landmark rules for exterior changes. |

### Article: best-time-to-paint-house-exterior-eastside (3)

| Item | What to check |
|---|---|
| It also leaves time for colors and HOA approval. Repainting a house us | Verify the permit wording for Bellevue, Kirkland, Redmond, Sammamish and Issaquah, and whether 'a few weeks' is a fair typical HOA review time. |
| We do walkthroughs year-round and send a written quote within 24 hours | Promise: confirm with Erik (24-hour written quote; walkthroughs offered year-round) |
| When it rains mid-job | Promise: confirm with Erik |

### Article: cabinet-painting-vs-refacing-eastside (3)

| Item | What to check |
|---|---|
| Why this question comes up so often on the Eastside | Hunter/Erik: confirm these soft generalizations (1980s–2000s oak kitchens in Redmond, Sammamish and Issaquah subdivisions; thermofoil/laminate common in Bellevue and Kirkland condos and townhomes; condo rules on work hours and spraying) |
| What living through a cabinet paint job is like | Erik: confirm our cabinet process (typical timeline of about one to two weeks for an average kitchen; whether doors are sprayed in a shop or on site; fridge access during the job) |
| How do you paint kitchen cabinets? | Erik: confirm our cabinet process |
