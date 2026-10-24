# Brushy Bear Painters: copy guide

Everyone who writes copy for this site (people or AI) follows this page.

## The business (customer-facing facts only)
- **Brushy Bear Painters**: a new residential painting company serving the Eastside of the Seattle area, Washington. A service-area business (no storefront; we come to you).
- Owners: **Erik** (field operations and estimates; years of Eastside painting experience, exact number unconfirmed) and **Hunter Lee** (marketing and customer experience).
- Launch cities: Bellevue, Kirkland, Redmond, Sammamish, Issaquah.
- Launch services: interior painting, exterior painting, cabinet painting, deck and fence staining.
- Add-ons with any job: pressure washing, wood rot repair, drywall repair, trim and millwork, color consultation.
- Season: exterior work runs in the dry season, roughly June to September. Interiors and cabinets all year.
- Pricing: a custom written quote for every job. No packages, no tiers, **no prices or dollar amounts anywhere** (the one exception is the start-date promise's "$250 off", which only appears in the promises data).
- Estimates are **free** ("Get a Free Estimate" is the site-wide button).
- Process: (1) request an estimate, (2) walkthrough and a written quote within 24 hours, (3) we paint, with a photo update and cleanup every day, (4) final walkthrough and touch-ups.
- Every job follows the same written steps: protect floors, furniture and landscaping; prep (wash, scrape, sand, repair, caulk, prime); paint; daily cleanup; crew-lead quality check; final walkthrough with touch-ups fixed on the spot.
- Pre-1978 homes: lead-safe work practices (EPA RRP) on every job that disturbs old paint.

### Promises (all still "confirm with Erik"; use them, but each use carries a confirm note)
- Written estimate within 24 hours of the walkthrough
- One point of contact and a photo update every day
- Daily cleanup: the home is left clean every evening
- Rain-day promise: weather delays are rescheduled first and never charged
- Start-date promise: "We start on the scheduled date or take $250 off. Rain delays don't count, and those reschedule first."
- Warranty: **length unknown. Never state a length or say "warranty-backed" with a number.**

## Voice
- Friendly, plain-spoken, dependable: a neighbor who happens to be a great painter.
- Lead with what the homeowner gets: a clean job, done on time, that holds up in Northwest rain. Not company size.
- Short sentences. Concrete details over adjectives.
- **Banned words**: premier, unparalleled, elevate, transform your space, top-notch, best-in-class, state-of-the-art, cutting-edge, world-class, seamless, unmatched, second to none, look no further, nestled, boasts, "we pride ourselves".
- No bear puns in headings or body copy. (Light bear humor only in microcopy like the 404 page.)
- Use "we" for the company and "you" for the homeowner.

## Answer-first (for Google AI Overviews, ChatGPT and other answer engines)
- The **first sentence** of every FAQ answer and every section answers the question or states the point directly. Detail comes after.
- Prefer specific, checkable statements ("Exterior paint needs dry surfaces and temperatures above the label minimum, usually 35–50°F") over vague ones.

## Honesty rules (hard)
- Never invent: reviews, ratings, review counts, awards, years in business, number of jobs, prices, certifications, licenses, team size, or "trusted by X homeowners".
- Never claim jobs, reviews or history in a specific city. We're new.
- Never say "licensed, bonded and insured" in copy (the site adds it automatically once the license number exists).
- Never mention EA Pro Painters or any other company by name. Never copy or paraphrase text from eapropainters.com or any competitor site.
- Never name specific paint brands as what we use (unconfirmed). Talking about paint *types* (acrylic, alkyd, waterborne enamel, solid vs semi-transparent stain) is fine.
- Local facts you're not sure of (a neighborhood we serve, an HOA rule, a permit rule, a housing-age figure) go in, but the item gets a `confirm` note that says exactly what to verify. Housing facts you verified from a reliable public source can skip the note; cite the source in the `confirm`-free item's code comment instead (`// source: ...`).
- Never say a city requires or doesn't require a permit unless verified. Default wording: "Repainting a house usually doesn't need a city permit, but HOAs often require approval for exterior color changes" with a confirm note.

## Formatting inside copy strings
- Internal links: `[link text](/services/exterior-painting)`. Allowed targets: `/services`, `/services/<slug>` (interior-painting, exterior-painting, cabinet-painting, deck-and-fence-staining), `/painters/<city>-wa` (bellevue, kirkland, redmond, sammamish, issaquah), `/estimate`, `/faq`, `/about`, `/gallery`, `/articles/<slug>`.
- Bold: `**text**`. No other markdown, no HTML, no external links.
- Use straight ASCII quotes in code strings; typographic apostrophes are fine inside text (’), but be consistent within a file.

## SEO basics
- One H1 per page containing the page's primary phrase. Title tag part 30–37 characters (the site adds " | Brushy Bear Painters", 23 characters, for 50–60 total). Meta description 150–160 characters.
- Use the city or service naturally. No keyword stuffing: a phrase reads like a person wrote it or it doesn't go in.
- Each city page must be genuinely different: different housing stock, neighborhoods, terrain, climate details, HOA situation. Not a template with the name swapped.
