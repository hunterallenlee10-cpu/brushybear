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
| Services and cities | The site now lists EA Pro Painters' nine services (including commercial and HOA) and all 23 of its cities. Confirm Brushy Bear takes on every one of them. | Both | Service and city pages (each also has its own confirm notes). |
| Instant estimate prices | Check every rate, minimum and factor in src/config/pricing.ts (each marked TODO: Erik confirm). These ranges show on /instant-estimate. | Erik | The instant estimate page going public. |
| Recommended companies | Which local roofers, gutter, carpentry, pressure washing, window and flooring companies do we recommend (with their OK)? Fill src/data/recommended.ts. | Both | The /recommended-companies page (kept out of search until filled). |
| Company name | Lock the final name after the Secretary of State, L&I, USPTO, domain and social-handle checks. | Both | All Higgsfield spending (build Phase 7), the domain and the Google Business Profile. |
| About page | Should the About page mention that Erik also owns another painting company? (The site never presents the two as competitors.) | Both | About page copy (build Phase 4). |
| Article author | Will Erik put his full name on the articles as the author? If not, they're credited to the company. | Erik | Article bylines and Article structured data (build Phase 6). |
| Erik's experience | How many years has Erik painted on the Eastside? (Shown on About only once confirmed.) | Erik |  |
| Quote promise | Confirm the promise wording: "Written estimate within 24 hours of the walkthrough." | Erik |  |
| Start-date promise | Confirm: "We start on the scheduled date or take $250 off. Rain delays don't count, and those reschedule first." | Erik |  |
| Warranty | How many years is the workmanship warranty, and what does it cover? (Hidden until set.) | Both |  |
| n8n workflow | Connect Brushy Bear-only email, Twilio and (optional) Vapi accounts to the speed-to-lead workflow, fill its Settings, then publish it (see N8N_WORKFLOW.md). | Hunter | Live form submissions (the form runs in test mode until then). |

## 3. Photos, reviews and profiles

| Topic | Question | Who | Blocks |
|---|---|---|---|
| Job photos | Real before/after photos from finished jobs, named by service and city. 6+ jobs turns the gallery on in search. | Erik |  |
| Team photos | Real photos of Erik and Hunter (and the crew lead) for the About page. No AI people, ever. | Both |  |
| Reviews | Real Google reviews, with permission to show them. The reviews section turns on automatically once added. | Both |  |
| Social profiles | Facebook, Instagram, Nextdoor and other profile URLs once created (added to structured data). | Hunter |  |

## 4. Copy marked "confirm"

Each item is marked in the site's data with a `confirm` note and shows a striped **confirm** tag on the preview site. Check it, fix the copy if needed, then delete the note. A public build fails while any remain.

**402 items on 40 pages.**

### Homepage: promises (6)

| Item | What to check |
|---|---|
| Written estimate in 24 hours | Promise: confirm with Erik before launch |
| One point of contact | Promise: confirm with Erik before launch |
| A photo update every day | Promise: confirm with Erik before launch |
| A clean house every evening | Promise: confirm with Erik before launch |
| Rain-day promise | Promise: confirm with Erik before launch |
| We start on time | Promise: confirm with Erik before launch (amount and terms) |

### Homepage: how it works (4)

| Item | What to check |
|---|---|
| Request a free estimate | Promise: confirm with Erik before launch |
| Color selection | Erik: confirm we bring or paint color samples for every job |
| Project starting | Promise: confirm with Erik before launch |
| Quality inspection & warranty | Erik: confirm the warranty terms (length shows from WARRANTY_YEARS in site.ts) |

### Homepage: what makes us different (3)

| Item | What to check |
|---|---|
| Written quote in 24 hours | Promise: confirm with Erik before launch |
| A photo update every day | Promise: confirm with Erik before launch |
| A clean house every evening | Promise: confirm with Erik before launch |

### Homepage: why Brushy Bear (2)

| Item | What to check |
|---|---|
| Why Brushy Bear? | Erik: confirm the written warranty |
| Why Brushy Bear? | Erik: confirm color consultation is included |

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

### Service: commercial-painting (8)

| Item | What to check |
|---|---|
| The commercial spaces we paint | Hunter/Erik: confirm the list of commercial space types we take on and the size of job we're set up for |
| Structural steel, tanks, floor coatings and other industrial coatings  | Erik: confirm we don't take on industrial coatings, epoxy floors or structural steel |
| How we keep your business running during the job | Erik: confirm we offer evening, overnight and weekend shifts on commercial jobs, and any extra charge for them |
| Paperwork property managers ask for | Hunter/Erik: confirm which of these we can provide today: certificates of insurance naming the client as additional insured, W-9, contractor registration details, written phase schedules, and whether we bid prevailing-wage or union jobs |
| Do you paint after hours or on weekends? | Erik: confirm after-hours and weekend availability on commercial jobs |
| Can you provide a certificate of insurance? | Hunter: confirm our commercial insurance coverage and that we can issue COIs naming additional insureds |
| Will you bid from our spec or RFP? | Hunter/Erik: confirm we bid formal RFPs and spec jobs, and whether we take prevailing-wage work |
| How long does a commercial repaint take? | Erik: confirm typical commercial job lengths we can quote |

### Service: exterior-painting (4)

| Item | What to check |
|---|---|
| Summer still brings the odd rainy day. When it does, we wait it out ra | Promise: confirm the rain-day promise with Erik (weather delays rescheduled first and never charged) |
| How long an exterior paint job takes | Erik: confirm typical exterior job length (about 1–2 weeks of working days) and the daily photo update promise |
| Repainting a house usually doesn't need a city permit, but HOAs often  | Verify: repainting needs no city permit in Bellevue, Kirkland, Redmond, Sammamish and Issaquah, and HOA color approval is common |
| What if my house was built before 1978? | Erik: confirm our exterior lead-safe steps on pre-1978 homes |

### Service: interior-painting (5)

| Item | What to check |
|---|---|
| Lead-safe painting in homes built before 1978 | Erik: confirm the lead-safe steps listed here match what we do on pre-1978 interior jobs |
| Living at home while we paint | Promise: confirm with Erik (one point of contact, daily photo update, home left clean every evening, we move and cover heavy furniture) |
| A single bedroom is often a one- or two-day job. A full main floor or  | Erik: confirm typical interior durations (one bedroom in 1–2 days) and that every estimate lists expected working days |
| How long does an interior painting job take? | Erik: confirm typical interior durations and that estimates list working days |
| Do I need to move my furniture before you paint? | Promise: confirm with Erik that we move and cover heavy furniture |

### Service: custom-painting (5)

| Item | What to check |
|---|---|
| We paint designs built from lines, curves and blocks of color. Detaile | Erik: confirm what level of design work we take on (stripes, shapes, arches, simple murals) and what we refer out |
| Limewash and other specialty finishes | Erik: confirm we offer limewash and which specialty finishes and brands we're comfortable using |
| Front doors are exterior work and do best in dry, mild weather. If you | Erik: confirm whether we paint front doors outside the dry season (for example, by taking the door off and painting it in a controlled space) |
| Will you paint just one accent wall? | Hunter: confirm we take single-wall jobs and whether a minimum charge applies |
| Can you limewash painted drywall? | Erik: confirm our limewash process on painted drywall |

### Service: cabinet-painting (5)

| Item | What to check |
|---|---|
| How we paint cabinets, step by step | Erik: confirm our standard cabinet process (where doors are sprayed, how boxes are finished, number of topcoats, cure time before rehanging) |
| What your kitchen is like during the job | Erik: confirm typical cabinet job length (several days to about a week) and how much of the kitchen stays usable |
| Oak's open grain still shows through paint unless it's filled first, s | Erik: confirm grain filling on oak and filling old hardware holes are options we offer |
| Will I see brush marks on my cabinets? | Erik: confirm doors are always sprayed and how boxes and face frames are finished |
| Can I use my kitchen while you paint the cabinets? | Erik: confirm what stays usable during a cabinet job and the typical length |

### Service: millwork-painting (4)

| Item | What to check |
|---|---|
| Changing stained wood trim to paint | Erik: confirm the primers we use over stained and varnished trim, and whether we offer grain filling on oak trim |
| Doors can be painted in place or taken down and sprayed for a smoother | Erik: confirm when we remove and spray doors versus brushing and rolling them in place |
| How soon can I use the doors and shelves after painting? | Erik: confirm the cure and wait times we give customers for the trim enamel we use |
| What if my home was built before 1978? | Erik: confirm our lead-safe (RRP) steps for interior trim on pre-1978 homes |

### Service: drywall-painting (7)

| Item | What to check |
|---|---|
| Small holes get filled with patching compound. Larger holes get a patc | Erik: confirm the largest drywall repair we handle in-house (for example, cutting in a new section) versus referring to a drywall contractor |
| Matching texture so patches don't show | Erik: confirm which textures we match in-house and the tools we use (spray rig, aerosol texture, hand tools) |
| We're happy to coordinate with your contractor or drywall installer on | Hunter/Erik: confirm we take on painting for new construction and remodels, and whether we hang drywall ourselves or only finish and paint |
| Can you match my wall texture? | Erik: confirm the textures we can match |
| How long does drywall repair take before you can paint? | Erik: confirm the typical number of visits for small versus large drywall repairs |
| Do you paint new drywall after a remodel? | Hunter/Erik: confirm we take on new-drywall paint jobs for remodels and additions |
| Do you remove popcorn ceilings? | Erik: confirm whether we offer popcorn ceiling removal and how we handle asbestos testing |

### Service: decks-and-fences-painting (4)

| Item | What to check |
|---|---|
| Staining needs dry weather and dry wood | Erik: confirm we check wood moisture (with a meter when in doubt) before staining |
| If rain moves in, we reschedule instead of staining damp wood, and wea | Promise: confirm the rain-day promise with Erik (weather delays rescheduled first and never charged) |
| As a rough guide, semi-transparent stain on a deck floor often needs a | Erik: confirm the typical restain intervals we tell customers |
| How long does deck staining take? | Erik: confirm the typical deck staining timeline (2–4 days) |

### Service: hoa-painting (8)

| Item | What to check |
|---|---|
| Before the vote: scope, colors and approvals | Hunter/Erik: confirm we attend board or owners meetings, and whether we provide large sample boards or paint test areas on a building |
| Phasing a community repaint | Hunter: confirm we price HOA work per building, per phase or as one total, and that we'll plan multi-year repaint cycles |
| Keeping residents informed | Hunter/Erik: confirm who prints and delivers resident notices (us or management) and how far ahead they go out |
| Each building gets washed, scraped and caulked, and bare wood gets pri | Erik: confirm our process for rot found mid-job on HOA work (photos, written change order, who approves) |
| Insurance and paperwork for HOA boards | Hunter: confirm we can provide certificates of insurance naming the HOA and management company as additional insured, plus a W-9 and contractor registration details |
| Will you present to our HOA board? | Hunter/Erik: confirm we attend board meetings, including evening meetings |
| Can you price the work by building or by phase? | Hunter: confirm our HOA pricing options |
| Can you name our HOA on your certificate of insurance? | Hunter: confirm our coverage and that we can add the HOA and manager as additional insureds |

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

### City: bothell-wa (15)

| Item | What to check |
|---|---|
| What Bothell's homes need before the first coat | Hunter/Erik: confirm we serve this area |
| Many of the subdivisions in Canyon Park, Thrasher's Corner and on the  | Confirm that Canyon Park and Thrasher's Corner subdivisions are mostly 1980s and 1990s homes. |
| Two counties, HOAs and historic landmarks | Confirm with City of Bothell Community Development that a straight exterior repaint needs no building permit, and confirm how common HOA color approval is in Canyon Park, North Creek and Thrasher's Corner subdivisions. |
| Bothell is split between King and Snohomish counties, but it's one cit | Confirm with City of Bothell what exterior changes to a locally registered landmark need Landmark Preservation Board review. |
| If the valley stays wet | Promise: confirm with Erik |
| Downtown Bothell | Hunter/Erik: confirm we serve this area |
| Canyon Park | Hunter/Erik: confirm we serve this area |
| North Creek | Hunter/Erik: confirm we serve this area |
| Thrasher's Corner/Red Hawk | Hunter/Erik: confirm we serve this area |
| Westhill | Hunter/Erik: confirm we serve this area |
| Norway Hill | Hunter/Erik: confirm we serve this area |
| Maywood/Beckstrom Hill | Hunter/Erik: confirm we serve this area |
| Bloomberg Hill | Hunter/Erik: confirm we serve this area |
| Queensborough/Brentwood/Crystal Springs | Hunter/Erik: confirm we serve this area |
| Do I need HOA approval to repaint my house in Bothell? | Confirm with City of Bothell Community Development that a straight exterior repaint needs no building permit, and confirm how common HOA color approval is in Canyon Park, North Creek and Thrasher's Corner subdivisions. |

### City: clyde-hill-wa (11)

| Item | What to check |
|---|---|
| Clyde Hill's homes: mid-century originals and new custom builds | Hunter/Erik: confirm we serve this area |
| Clyde Hill permits, licenses and work hours | Confirm with the City of Clyde Hill building department that a straight interior or exterior repaint (no siding replacement or structural repair) needs no building permit. |
| A straight repaint usually isn't permitted work, but if we find rot th | Hunter/Erik: confirm we hold (or will get) a Clyde Hill business license before any job in city limits. |
| Respecting your street | Promise: confirm with Erik |
| Clyde Hill (city limits) | Hunter/Erik: confirm we serve this area |
| Vuecrest | Hunter/Erik: confirm we serve this area |
| Medina | Hunter/Erik: confirm we serve this area |
| Yarrow Point | Hunter/Erik: confirm we serve this area |
| Hunts Point | Hunter/Erik: confirm we serve this area |
| Northwest Bellevue | Hunter/Erik: confirm we serve this area |
| Do I need a permit to repaint my house in Clyde Hill? | Confirm with the City of Clyde Hill building department that a straight interior or exterior repaint (no siding replacement or structural repair) needs no building permit. |

### City: edmonds-wa (13)

| Item | What to check |
|---|---|
| Edmonds homes and what they mean for prep | Hunter/Erik: confirm we serve this area |
| Historic homes, HOAs and permits in Edmonds | Confirm with the City of Edmonds Planning Division that a straight exterior repaint needs no permit, and check the current status of the Historic Preservation Commission (its city page is marked suspended) and what changes to homes on the Edmonds Register of Historic Places need review. |
| When the weather turns | Promise: confirm with Erik |
| Downtown Edmonds/the Bowl | Hunter/Erik: confirm we serve this area |
| Five Corners | Hunter/Erik: confirm we serve this area |
| Westgate | Hunter/Erik: confirm we serve this area |
| Perrinville | Hunter/Erik: confirm we serve this area |
| Seaview | Hunter/Erik: confirm we serve this area |
| Sherwood | Hunter/Erik: confirm we serve this area |
| Firdale | Hunter/Erik: confirm we serve this area |
| Lake Ballinger | Hunter/Erik: confirm we serve this area |
| Esperance | Hunter/Erik: confirm we serve this area |
| My Edmonds home is on the local historic register. Can I change the colors? | Confirm with the City of Edmonds Planning Division that a straight exterior repaint needs no permit, and check the current status of the Historic Preservation Commission (its city page is marked suspended) and what changes to homes on the Edmonds Register of Historic Places need review. |

### City: everett-wa (17)

| Item | What to check |
|---|---|
| Everett's housing: from mill-town homes to 1990s subdivisions | Hunter/Erik: confirm we serve this area |
| The neighborhoods north of downtown, like Northwest Everett, Bayside,  | Confirm the north Everett neighborhoods listed are where most pre-1940 homes are. |
| Everett also has more renters than owners. If you own a rental duplex  | Hunter/Erik: confirm we take rental and small multifamily work in Everett. |
| Everett's historic overlay zones | Confirm with City of Everett Planning whether repainting a house in the Rucker-Grand, Norton-Grand or Riverside historic overlay zones needs any review (the Neighborhood Conservation Guidelines include a paint scheme and colors section), and that a straight repaint elsewhere in Everett needs no permit. |
| Rain on the schedule | Promise: confirm with Erik |
| Northwest Everett | Hunter/Erik: confirm we serve this area |
| Port Gardner | Hunter/Erik: confirm we serve this area |
| Riverside | Hunter/Erik: confirm we serve this area |
| Bayside | Hunter/Erik: confirm we serve this area |
| Delta | Hunter/Erik: confirm we serve this area |
| Lowell | Hunter/Erik: confirm we serve this area |
| Boulevard Bluffs | Hunter/Erik: confirm we serve this area |
| Harborview-Seahurst-Glenhaven | Hunter/Erik: confirm we serve this area |
| View Ridge-Madison | Hunter/Erik: confirm we serve this area |
| Silver Lake | Hunter/Erik: confirm we serve this area |
| Do I need approval to paint a house in an Everett historic overlay zone? | Confirm with City of Everett Planning whether repainting a house in the Rucker-Grand, Norton-Grand or Riverside historic overlay zones needs any review (the Neighborhood Conservation Guidelines include a paint scheme and colors section), and that a straight repaint elsewhere in Everett needs no permit. |
| Do you paint rental homes and duplexes in Everett? | Hunter/Erik: confirm we take rental and small multifamily work in Everett. |

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

### City: juanita-wa (11)

| Item | What to check |
|---|---|
| Juanita homes: 1960s subdivisions, condos and infill | Hunter/Erik: confirm we serve this area |
| HOAs, condo associations and Kirkland permits | Confirm with the City of Kirkland that a straight exterior repaint in Juanita needs no building permit, and confirm how common HOA color approval and HOA-managed exteriors are in Juanita subdivisions, townhomes and condos. |
| Every day on site | Promise: confirm with Erik |
| South Juanita | Hunter/Erik: confirm we serve this area |
| North Juanita | Hunter/Erik: confirm we serve this area |
| Juanita Village | Hunter/Erik: confirm we serve this area |
| Juanita Bay | Hunter/Erik: confirm we serve this area |
| Forbes Creek | Hunter/Erik: confirm we serve this area |
| Edith Moulton Park area | Hunter/Erik: confirm we serve this area |
| Finn Hill (east slope) | Hunter/Erik: confirm we serve this area |
| Totem Lake | Hunter/Erik: confirm we serve this area |

### City: kenmore-wa (15)

| Item | What to check |
|---|---|
| Kenmore homes and the prep they need | Hunter/Erik: confirm we serve this area |
| Many 1980s Kenmore homes are two-stories and split-entries on sloped l | Hunter/Erik: confirm we can provide lift access for tall downhill walls. |
| HOAs and permits in Kenmore | Confirm with the City of Kenmore that a straight exterior repaint needs no building permit, and confirm how common HOA color approval is in Kenmore subdivisions and townhome communities. |
| If the weather won't cooperate | Promise: confirm with Erik |
| Downtown Kenmore | Hunter/Erik: confirm we serve this area |
| Uplake Terrace | Hunter/Erik: confirm we serve this area |
| Inglewood | Hunter/Erik: confirm we serve this area |
| Arrowhead | Hunter/Erik: confirm we serve this area |
| Upper Moorlands | Hunter/Erik: confirm we serve this area |
| Lower Moorlands | Hunter/Erik: confirm we serve this area |
| Linwood Heights | Hunter/Erik: confirm we serve this area |
| Kenlake Vista | Hunter/Erik: confirm we serve this area |
| Northlake Terrace | Hunter/Erik: confirm we serve this area |
| Northshore Summit | Hunter/Erik: confirm we serve this area |
| Do I need HOA approval to repaint in Kenmore? | Confirm with the City of Kenmore that a straight exterior repaint needs no building permit, and confirm how common HOA color approval is in Kenmore subdivisions and townhome communities. |

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

### City: lynnwood-wa (11)

| Item | What to check |
|---|---|
| What Lynnwood's housing stock means for prep | Hunter/Erik: confirm we serve this area |
| If a shower interrupts your job, the lost days are rescheduled first a | Promise: confirm with Erik |
| Alderwood | Hunter/Erik: confirm we serve this area |
| Cedar Valley | Hunter/Erik: confirm we serve this area |
| Scriber Lake | Hunter/Erik: confirm we serve this area |
| Lynndale | Hunter/Erik: confirm we serve this area |
| Meadowdale | Hunter/Erik: confirm we serve this area |
| Hall Lake | Hunter/Erik: confirm we serve this area |
| City Center | Hunter/Erik: confirm we serve this area |
| Highway 99 corridor | Hunter/Erik: confirm we serve this area |
| Do you paint townhome and condo buildings in Lynnwood? | Hunter/Erik: confirm we take on multi-building townhome and condo exteriors in Lynnwood. |

### City: medina-wa (12)

| Item | What to check |
|---|---|
| Medina homes, from 1920s estates to new custom builds | Hunter/Erik: confirm we serve this area |
| If rain interrupts an exterior job, the lost days are rescheduled firs | Promise: confirm with Erik |
| Medina city rules: work hours, trees and job sites | Confirm with City of Medina Development Services that a repaint with no siding or structural work needs no building permit or Construction Activity Permit, and that the 8 a.m. to 5 p.m. Monday to Saturday window applies to painting crews. |
| Evergreen Point | Hunter/Erik: confirm we serve this area |
| Northpoint | Hunter/Erik: confirm we serve this area |
| West Medina waterfront | Hunter/Erik: confirm we serve this area |
| Medina Beach and City Hall area | Hunter/Erik: confirm we serve this area |
| Medina Park area | Hunter/Erik: confirm we serve this area |
| Points Loop | Confirm the Points Loop Trail runs near SR 520 in Medina, then confirm we serve this area. |
| Medina Heights | Confirm "Medina Heights" is a name locals use for this part of Medina, then confirm we serve it. |
| What hours can painters work in Medina? | Confirm with City of Medina Development Services that a repaint with no siding or structural work needs no building permit or Construction Activity Permit, and that the 8 a.m. to 5 p.m. Monday to Saturday window applies to painting crews. |
| Do I need a permit to repaint my house in Medina? | Confirm with City of Medina Development Services that a repaint with no siding or structural work needs no building permit or Construction Activity Permit, and that the 8 a.m. to 5 p.m. Monday to Saturday window applies to painting crews. |

### City: mercer-island-wa (12)

| Item | What to check |
|---|---|
| Mercer Island's mid-century housing and what it needs | Hunter/Erik: confirm we serve this area |
| Exteriors run in the dry season, roughly June through September. If ra | Promise: confirm with Erik |
| Work hours and permits on Mercer Island | Confirm current Mercer Island construction hours (MICC 8.24.020: weekdays 7 a.m. to 7 p.m., Saturdays 9 a.m. to 6 p.m., none on Sundays or holidays), that they cover painting crews and pressure washing, and that a straight repaint needs no city permit. |
| East Seattle | Hunter/Erik: confirm we serve this area |
| First Hill | Hunter/Erik: confirm we serve this area |
| Mercerdale | Hunter/Erik: confirm we serve this area |
| Madrona Crest | Hunter/Erik: confirm we serve this area |
| Mercerwood | Hunter/Erik: confirm we serve this area |
| Shorewood | Hunter/Erik: confirm we serve this area |
| Mid-Island | Hunter/Erik: confirm we serve this area |
| Island Point and Island Terrace | Hunter/Erik: confirm we serve this area |
| What hours can painters work on Mercer Island? | Confirm current Mercer Island construction hours (MICC 8.24.020: weekdays 7 a.m. to 7 p.m., Saturdays 9 a.m. to 6 p.m., none on Sundays or holidays), that they cover painting crews and pressure washing, and that a straight repaint needs no city permit. |

### City: mill-creek-wa (15)

| Item | What to check |
|---|---|
| Mill Creek homes and where they are in the repaint cycle | Hunter/Erik: confirm we serve this area |
| Older Mill Creek homes often have cedar lap or shingle siding, and som | Erik: confirm hardboard lap siding is common on Mill Creek's 1980s and 1990s homes. |
| MCCA and HOA paint approval in Mill Creek | Confirm current MCCA Architectural Control Committee rules at mcca.info: all exterior paint (body, trim, doors, outbuildings) needs an application, same-color full repaints included, partial same-color maintenance painting exempt, approvals about two weeks and up to a month. |
| Some neighborhoods sit outside MCCA and run their own review, includin | Confirm with each association that The Parks, Parkside, River Crossing and Mill Creek Highlands run their own paint approval, and confirm current lead times. |
| If rain interrupts the job, the lost days are rescheduled first and ne | Promise: confirm with Erik |
| Original Mill Creek (east of SR 527) | Hunter/Erik: confirm we serve this area |
| Mill Creek Highlands | Hunter/Erik: confirm we serve this area |
| The Parks | Hunter/Erik: confirm we serve this area |
| Parkside | Hunter/Erik: confirm we serve this area |
| River Crossing | Hunter/Erik: confirm we serve this area |
| Heatherwood | Confirm Heatherwood's location and which association covers it, then confirm we serve it. |
| Thomas Lake | Hunter/Erik: confirm we serve this area |
| Town Center and East Gateway | Hunter/Erik: confirm we serve this area |
| Do I need MCCA approval to repaint my Mill Creek house the same color? | Confirm current MCCA Architectural Control Committee rules at mcca.info: all exterior paint (body, trim, doors, outbuildings) needs an application, same-color full repaints included, partial same-color maintenance painting exempt, approvals about two weeks and up to a month. |
| When should I start planning a summer exterior in Mill Creek? | Confirm MCCA and other Mill Creek HOAs don't review interior work. |

### City: monroe-wa (13)

| Item | What to check |
|---|---|
| Monroe's housing: an old town core and a 1990s boom | Hunter/Erik: confirm we serve this area |
| The newer neighborhoods on the hills north of town and around Fryeland | Confirm that Monroe's 1990s and newer subdivisions are mostly fiber cement or composite siding. |
| Low ground near the rivers and Lake Tye can sit in fog and heavy dew o | Erik: confirm valley fog and morning dew match what we see on Monroe jobs. |
| Exteriors run in the dry season, roughly June through September, and w | Promise: confirm with Erik |
| HOAs, downtown and permits in Monroe | Confirm with the City of Monroe that a straight repaint needs no permit, and that its Downtown Design Guidelines apply to commercial buildings in the downtown core rather than houses. |
| Historic downtown | Hunter/Erik: confirm we serve this area |
| Fryelands | Hunter/Erik: confirm we serve this area |
| Lake Tye | Hunter/Erik: confirm we serve this area |
| North hills | Hunter/Erik: confirm we serve this area |
| Fairgrounds area | Hunter/Erik: confirm we serve this area |
| Chain Lake Road | Confirm the Chain Lake Road area is inside or next to Monroe city limits, then confirm we serve it. |
| Woods Creek | Confirm the Woods Creek area is part of our Monroe service area. |
| Skykomish riverside | Hunter/Erik: confirm we serve this area |

### City: newcastle-wa (14)

| Item | What to check |
|---|---|
| Newcastle homes: mostly built since the late 1980s | Hunter/Erik: confirm we serve this area |
| The newer neighborhoods, including much of China Creek and The Reserve | Confirm China Creek and The Reserve are mostly 2000s and newer homes with fiber cement siding. |
| Exteriors run in the dry season, roughly June through September. If ra | Promise: confirm with Erik |
| HOA color approval in Newcastle | Confirm with the City of Newcastle that a straight repaint needs no permit, and confirm which Newcastle communities (for example Olympus, China Creek, The Reserve, The Trails) have HOAs that review exterior colors. |
| East and West Olympus | Hunter/Erik: confirm we serve this area |
| Hazelwood | Hunter/Erik: confirm we serve this area |
| China Creek | Hunter/Erik: confirm we serve this area |
| Lake Boren | Hunter/Erik: confirm we serve this area |
| The Reserve at Newcastle | Hunter/Erik: confirm we serve this area |
| The Trails at Newcastle | Confirm The Trails at Newcastle is a newer subdivision with an HOA, then confirm we serve it. |
| Golf Club area | Hunter/Erik: confirm we serve this area |
| Newport Hills | Hunter/Erik: confirm we serve this area |
| Do I need HOA approval to paint my house in Newcastle? | Confirm with the City of Newcastle that a straight repaint needs no permit, and confirm which Newcastle communities (for example Olympus, China Creek, The Reserve, The Trails) have HOAs that review exterior colors. |
| Can you paint a house on a steep Newcastle lot? | Erik: confirm we have ladders and lift access for tall downhill walls. |

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

### City: renton-wa (15)

| Item | What to check |
|---|---|
| Renton's homes span eight decades, so prep varies street to street | Hunter/Erik: confirm we serve this area |
| Permits and HOA color approval in Renton | Confirm with City of Renton Community and Economic Development that a straight exterior repaint needs no building permit, and confirm which Renton subdivisions (for example on Benson Hill, Talbot Hill and the East Plateau) require HOA color approval. |
| Start with a written estimate | Promise: confirm with Erik |
| Kennydale | Hunter/Erik: confirm we serve this area |
| Renton Highlands | Hunter/Erik: confirm we serve this area |
| North Renton | Hunter/Erik: confirm we serve this area |
| Renton Hill | Hunter/Erik: confirm we serve this area |
| Talbot Hill | Hunter/Erik: confirm we serve this area |
| Benson Hill | Hunter/Erik: confirm we serve this area |
| Cascade | Hunter/Erik: confirm we serve this area |
| Maplewood | Hunter/Erik: confirm we serve this area |
| East Plateau | Hunter/Erik: confirm we serve this area |
| Fairwood | Hunter/Erik: confirm we serve this area |
| Do I need a permit to repaint my house in Renton? | Confirm with City of Renton Community and Economic Development that a straight exterior repaint needs no building permit, and confirm which Renton subdivisions (for example on Benson Hill, Talbot Hill and the East Plateau) require HOA color approval. |
| Do you paint townhome and condo communities in Renton? | Hunter/Erik: confirm we take on HOA and multifamily painting in Renton, and that we offer per-building scheduling for associations. |

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

### City: seattle-wa (15)

| Item | What to check |
|---|---|
| Seattle's older housing stock and what it means for prep | Hunter/Erik: confirm we serve this area |
| Permits, landmark districts and landmark houses | Confirm with Seattle Department of Neighborhoods (Historic Preservation) whether a repaint or a paint color change in the Harvard-Belmont Landmark District, or on a designated City Landmark house, needs a Certificate of Approval. |
| Weather delays | Promise: confirm with Erik |
| Ballard | Hunter/Erik: confirm we serve this area |
| Wallingford | Hunter/Erik: confirm we serve this area |
| Queen Anne | Hunter/Erik: confirm we serve this area |
| Capitol Hill | Hunter/Erik: confirm we serve this area |
| Montlake | Hunter/Erik: confirm we serve this area |
| Madison Park | Hunter/Erik: confirm we serve this area |
| Laurelhurst | Hunter/Erik: confirm we serve this area |
| Ravenna | Hunter/Erik: confirm we serve this area |
| Wedgwood | Hunter/Erik: confirm we serve this area |
| View Ridge | Hunter/Erik: confirm we serve this area |
| Do I need a permit to paint my house in Seattle? | Confirm with Seattle Department of Neighborhoods (Historic Preservation) whether a repaint or a paint color change in the Harvard-Belmont Landmark District, or on a designated City Landmark house, needs a Certificate of Approval. |
| Which Seattle neighborhoods do you serve? | Hunter/Erik: confirm which Seattle neighborhoods we serve and whether we take jobs in south and West Seattle. |

### City: shoreline-wa (14)

| Item | What to check |
|---|---|
| Shoreline is a postwar city, and that sets the prep | Hunter/Erik: confirm we serve this area |
| Lead-safe painting in Shoreline's pre-1978 homes | Hunter/Erik: confirm we use HEPA vacuums for interior lead-safe cleanup. |
| Associations, gated communities and landmarks | Confirm with City of Shoreline Permit Services that a straight exterior repaint needs no building permit; confirm that the Innis Arden association and The Highlands review exterior colors, and what work on a designated Shoreline landmark requires. |
| One point of contact | Promise: confirm with Erik |
| Richmond Beach | Hunter/Erik: confirm we serve this area |
| Innis Arden | Hunter/Erik: confirm we serve this area |
| The Highlands | Hunter/Erik: confirm we serve this area |
| Richmond Highlands | Hunter/Erik: confirm we serve this area |
| Echo Lake | Hunter/Erik: confirm we serve this area |
| Meridian Park | Hunter/Erik: confirm we serve this area |
| Ridgecrest | Hunter/Erik: confirm we serve this area |
| Briarcrest | Hunter/Erik: confirm we serve this area |
| North City | Hunter/Erik: confirm we serve this area |
| Ballinger | Hunter/Erik: confirm we serve this area |

### City: snohomish-wa (13)

| Item | What to check |
|---|---|
| Snohomish's Historic District and its houses | Hunter/Erik: confirm we serve this area |
| Painting in the Historic District: what the standards say | Confirm with City of Snohomish Planning that the 2003 Historic District Design Standards are still current, that a repaint (including a color change) on a house in the Historic District needs no Design Review Board approval, and that City Hall still keeps historically appropriate paint color examples. |
| Inside, older homes often have original fir trim, wainscoting, built-i | Hunter/Erik: confirm we take on commercial storefront work in downtown Snohomish. |
| Color help for historic homes | Promise: confirm with Erik |
| Historic District | Hunter/Erik: confirm we serve this area |
| Downtown / First Street | Hunter/Erik: confirm we serve this area |
| Midtown | Hunter/Erik: confirm we serve this area |
| Pilchuck District | Hunter/Erik: confirm we serve this area |
| Blackmans Lake | Hunter/Erik: confirm we serve this area |
| Dutch Hill | Hunter/Erik: confirm we serve this area |
| Fobes Hill | Hunter/Erik: confirm we serve this area |
| Cathcart | Hunter/Erik: confirm we serve this area |
| Do I need approval to repaint my house in the Snohomish Historic District? | Confirm with City of Snohomish Planning that the 2003 Historic District Design Standards are still current, that a repaint (including a color change) on a house in the Historic District needs no Design Review Board approval, and that City Hall still keeps historically appropriate paint color examples. |

### City: snoqualmie-wa (12)

| Item | What to check |
|---|---|
| Two towns in one: Snoqualmie Ridge and the historic downtown | Hunter/Erik: confirm we serve this area |
| A raised house brings its own paint work: a tall new foundation wall o | Hunter/Erik: confirm we can provide lift access for tall walls on raised homes. |
| HOA color approval and permits | Confirm with the City of Snoqualmie that a straight exterior repaint needs no building permit; confirm how the Snoqualmie Ridge community association handles exterior color approval and typical review times; confirm whether repainting a building in the Snoqualmie Historic Commercial District needs city review. |
| Rain on your start date | Promise: confirm with Erik |
| Snoqualmie Ridge | Hunter/Erik: confirm we serve this area |
| Snoqualmie Ridge II | Hunter/Erik: confirm we serve this area |
| Eagle Pointe | Hunter/Erik: confirm we serve this area |
| Historic Downtown Snoqualmie | Hunter/Erik: confirm we serve this area |
| Kimball Creek | Hunter/Erik: confirm we serve this area |
| Snoqualmie Falls area | Hunter/Erik: confirm we serve this area |
| Fall City | Hunter/Erik: confirm we serve this area |
| Do I need HOA approval to repaint my Snoqualmie Ridge home? | Confirm with the City of Snoqualmie that a straight exterior repaint needs no building permit; confirm how the Snoqualmie Ridge community association handles exterior color approval and typical review times; confirm whether repainting a building in the Snoqualmie Historic Commercial District needs city review. |

### City: woodinville-wa (16)

| Item | What to check |
|---|---|
| Woodinville's homes: 1980s cedar and newer subdivisions | Hunter/Erik: confirm we serve this area |
| City limits, HOAs and landmarks | Confirm with the City of Woodinville that a straight exterior repaint needs no building permit; confirm which Woodinville subdivisions (for example in the Wellington and West Ridge areas) require HOA color approval, and whether exterior work on a designated Woodinville landmark needs city review. |
| A Woodinville mailing address doesn't always mean you're inside the ci | Confirm that Hollywood Hill and the large-lot areas north and east of the city are in unincorporated King County. |
| Inside, homes from the 1980s and 1990s often have oak trim and oak cab | Hunter/Erik: confirm we take on commercial work such as tasting rooms and shops in Woodinville. |
| A written scope for every building | Promise: confirm with Erik |
| West Wellington | Hunter/Erik: confirm we serve this area |
| East Wellington | Hunter/Erik: confirm we serve this area |
| Upper West Ridge | Hunter/Erik: confirm we serve this area |
| Lower West Ridge | Hunter/Erik: confirm we serve this area |
| Reinwood Leota | Hunter/Erik: confirm we serve this area |
| Woodinville Heights | Hunter/Erik: confirm we serve this area |
| Wedge | Hunter/Erik: confirm we serve this area |
| Town Center | Hunter/Erik: confirm we serve this area |
| Hollywood Hill | Hunter/Erik: confirm we serve this area |
| Do you paint barns, sheds and long fence lines on acreage? | Hunter/Erik: confirm we paint barns and outbuildings, and that we quote each structure separately. |
| Do I need a permit or HOA approval to repaint in Woodinville? | Confirm with the City of Woodinville that a straight exterior repaint needs no building permit; confirm which Woodinville subdivisions (for example in the Wellington and West Ridge areas) require HOA color approval, and whether exterior work on a designated Woodinville landmark needs city review. |

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
