import type { CityPage } from "@/data/types";

const SERVE = "Hunter/Erik: confirm we serve this area";
const PROMISE = "Promise: confirm with Erik";
const HOA_PERMIT =
  "Confirm with City of Bothell Community Development that a straight exterior repaint needs no building permit, and confirm how common HOA color approval is in Canyon Park, North Creek and Thrasher's Corner subdivisions.";

const page: CityPage = {
  slug: "bothell-wa",
  title: "House Painters in Bothell, WA",
  metaDescription:
    "Bothell house painters for 1980s two-stories, new North Creek townhomes and older homes near Main Street. Valley damp, HOA color help and a written quote.",
  h1: "Bothell painters for 1980s two-stories, new townhomes and older homes near downtown",
  eyebrow: "Serving Bothell, WA",
  intro: [
    "Brushy Bear Painters paints the inside and outside of Bothell homes, from the older streets around downtown to the subdivisions up the hills in Canyon Park and Thrasher's Corner. We're a new company, so we don't have a Bothell track record to point to yet. What we can show you is how each job runs: a walkthrough, a written quote that lists every surface, and a final walkthrough with touch-ups done on the spot.",
    // source: https://en.wikipedia.org/wiki/Bothell,_Washington (Bothell sits in King and Snohomish counties; Canyon Park annexed 1992, 2014 annexation of 1,005 acres and about 6,000 residents)
    "Bothell is a city that grew in pieces. It became a two-county city when it annexed Canyon Park in 1992, and it added about 6,000 more residents in a 2014 annexation. The result is a mix: a 1960s rambler near the Sammamish River, a 1980s cedar two-story on Norway Hill and a three-year-old townhome near North Creek can all be in the same zip code, and each one needs a different plan.",
  ],
  sections: [
    {
      heading: "What Bothell's homes need before the first coat",
      id: "bothell-homes",
      confirm: SERVE,
      body: [
        // source: https://censusreporter.org/data/table/?table=B25034&geo_ids=16000US5307380 (ACS 2020-2024 5-year, B25034: 20,533 units; 1980-89 = 19.6%, the largest decade; 2000 or later = 38.9%; built before 1980 = 26.9%)
        {
          type: "p",
          text: "Bothell's housing is younger than most of the Eastside. The 1980s were the busiest building decade, close to 39% of homes went up in 2000 or later, and only about 27% were built before 1980, according to Census Bureau estimates. So the typical Bothell job is less about scraping a century of paint and more about worn first and second coats, sun-faded siding and builder-grade interiors.",
        },
        { type: "h3", text: "1980s and 1990s two-stories" },
        {
          type: "p",
          text: "Many of the subdivisions in Canyon Park, Thrasher's Corner and on the hills north of the river date from the 1980s and 1990s. These houses often have cedar or hardboard lap siding, wood trim and a deck off the back. Hardboard swells at the drip edges and bottom courses once water gets past the paint, and cedar trim splits at the butt joints. The prep is targeted: find the soft spots, replace or seal them, prime bare wood and recaulk before painting.",
          confirm: "Confirm that Canyon Park and Thrasher's Corner subdivisions are mostly 1980s and 1990s homes.",
        },
        { type: "h3", text: "Townhomes and newer construction" },
        // source: https://censusreporter.org/data/table/?table=B25024&geo_ids=16000US5307380 (ACS 2020-2024 5-year, B25024 Units in Structure: 1-unit detached = 53.9%)
        {
          type: "p",
          text: "Only a little over half of Bothell's housing units are detached single-family homes. The rest are townhomes, condos and apartments, many of them built in the last 15 years around North Creek, Canyon Park and the rebuilt downtown. Newer homes usually have fiber cement siding outside and flat builder paint inside that scuffs and won't touch up cleanly.",
        },
        { type: "h3", text: "Older homes near downtown" },
        {
          type: "p",
          text: "The streets closest to Main Street and the river hold most of Bothell's older houses. If yours was built before 1978, plan for lead-safe prep: we follow EPA RRP lead-safe work practices whenever a job disturbs old paint, with containment, dust control and full cleanup of chips.",
        },
      ],
    },
    {
      heading: "Bothell weather: river-valley damp and shaded hillsides",
      id: "bothell-climate",
      body: [
        {
          type: "p",
          text: "Exterior painting in Bothell runs on the dry season, roughly June through September, and the low ground along the Sammamish River and North Creek is usually the last to dry out each spring. Damp mornings in the valley can leave dew on siding well into the day, so we check moisture before we prime instead of going by the calendar.",
        },
        // source: https://en.wikipedia.org/wiki/Bothell,_Washington (glaciers shaped Bothell's seven hills; Nike Hill is the highest point at 510 feet; Norway, Beckstrom and Bloomberg hills named)
        {
          type: "p",
          text: "Bothell also sits on a set of glacier-carved hills, with Nike Hill topping out around 510 feet. North-facing slopes on Norway Hill, Beckstrom Hill and Bloomberg Hill, especially under tall firs, keep siding shaded and wet. That's where moss and mildew grow on the lowest courses and on north walls. On those houses we wash, treat mildew and give the siding dry days before any coating goes on.",
        },
        {
          type: "ul",
          items: [
            "South- and west-facing walls on open hilltop lots fade first and need a closer look at sheen and color.",
            "Decks on shaded lots grow algae and need a full cleaning before stain.",
            "Gutters full of needles overflow onto fascia and trim, which is often where rot starts.",
          ],
        },
      ],
    },
    {
      heading: "Two counties, HOAs and historic landmarks",
      id: "bothell-hoa",
      confirm: HOA_PERMIT,
      body: [
        {
          type: "p",
          text: "Repainting a house usually doesn't need a city permit, but HOAs often require approval for exterior color changes, and many of Bothell's newer subdivisions and townhome communities have one. In a townhome community the association may handle the exterior on its own schedule. In a single-family subdivision you usually paint the outside yourself but need colors approved first. Send us your HOA's rules with your estimate request and we'll build the color submission into the plan.",
        },
        // source: https://en.wikipedia.org/wiki/Bothell,_Washington (about 60% of residents in King County and 40% in Snohomish County; local register created 1987, managed by the Landmark Preservation Board, 15 properties)
        {
          type: "p",
          text: "Bothell is split between King and Snohomish counties, but it's one city, so the permit desk is Bothell City Hall either way. The city also keeps a local register of historic places, overseen by its Landmark Preservation Board. If your home is a listed landmark, check with the city before changing exterior colors or materials.",
          confirm: "Confirm with City of Bothell what exterior changes to a locally registered landmark need Landmark Preservation Board review.",
        },
      ],
    },
    {
      heading: "Painting services for Bothell homes",
      id: "bothell-services",
      body: [
        {
          type: "p",
          text: "For 1980s and 1990s houses, [exterior painting](/services/exterior-painting) means fixing hardboard edges, trim joints and caulk lines before two finish coats. Back decks and cedar fences on shaded lots usually wear out first, and [deck and fence painting and staining](/services/decks-and-fences-painting) starts with a proper cleaning.",
        },
        {
          type: "p",
          text: "Inside newer homes, [interior painting](/services/interior-painting) replaces flat builder paint with a washable finish in halls, kitchens and kids' rooms, and [drywall repair and painting](/services/drywall-painting) handles nail pops and settling cracks first. Townhome communities that repaint as a group can ask about [HOA painting](/services/hoa-painting).",
        },
        {
          type: "callout",
          title: "If the valley stays wet",
          text: "If your siding isn't dry on the start date, we move the exterior and don't charge for the delay.",
          confirm: PROMISE,
        },
        {
          type: "p",
          text: "Want a ballpark first? Try the [instant estimate](/instant-estimate), then book a walkthrough for a [written estimate](/estimate).",
        },
      ],
    },
  ],
  neighborhoods: [
    { name: "Downtown Bothell", note: "Older homes near Main Street beside new apartments and townhomes.", confirm: SERVE },
    { name: "Canyon Park", note: "Annexed in 1992; 1980s and 1990s subdivisions and townhomes.", confirm: SERVE },
    { name: "North Creek", note: "Newer townhomes and homes near the North Creek valley.", confirm: SERVE },
    { name: "Thrasher's Corner/Red Hawk", note: "Subdivisions in north Bothell; ask about HOA color rules.", confirm: SERVE },
    { name: "Westhill", note: "Residential streets on the west side of the city.", confirm: SERVE },
    { name: "Norway Hill", note: "Wooded hillside lots; shaded siding and moss on north walls.", confirm: SERVE },
    { name: "Maywood/Beckstrom Hill", note: "Hillside streets with a mix of home ages.", confirm: SERVE },
    { name: "Bloomberg Hill", note: "Hilltop and slope lots with strong sun on open sides.", confirm: SERVE },
    { name: "Queensborough/Brentwood/Crystal Springs", note: "Established subdivisions in the King County part of Bothell.", confirm: SERVE },
  ],
  faqs: [
    {
      id: "bothell-wa-two-counties",
      question: "Does it matter if my Bothell home is in King County or Snohomish County?",
      answer: [
        "No, for a repaint it doesn't change how we work; Bothell is one city on both sides of the county line.",
        "What matters more is your HOA, if you have one, and the age of the house. Tell us both when you request an estimate.",
      ],
    },
    {
      id: "bothell-wa-hoa",
      question: "Do I need HOA approval to repaint my house in Bothell?",
      answer: [
        "Often yes, if you live in a subdivision with an HOA; many require approval for exterior color changes even when the city needs no permit.",
        "Check your covenants or ask your management company, and send us the approved palette. We schedule the exterior once approval is back.",
      ],
      confirm: HOA_PERMIT,
    },
    {
      id: "bothell-wa-new-home",
      question: "My Bothell house is only 10 years old. Why is the paint already wearing?",
      answer: [
        "Builder paint is usually a single coat of a basic product, so it fades, chalks and scuffs sooner than a full repaint would.",
        "Outside, south and west walls go first. Inside, flat wall paint marks easily and touch-ups flash. A repaint with proper primer where needed and a washable finish fixes both.",
      ],
    },
    {
      id: "bothell-wa-best-months",
      question: "When should I schedule exterior painting in Bothell?",
      answer: [
        "July and August are the most reliable months, with June and September workable when the forecast holds.",
        "Homes in the river valley or on shaded north slopes can need extra dry days after rain. Interior work runs year-round, so fall and winter are a good time for it.",
      ],
    },
  ],
  nearby: ["kenmore-wa", "woodinville-wa", "kirkland-wa", "mill-creek-wa"],
  updatedAt: "2026-10-26",
};

export default page;
