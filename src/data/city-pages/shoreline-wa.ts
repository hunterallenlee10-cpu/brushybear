import type { CityPage } from "@/data/types";

const SERVE = "Hunter/Erik: confirm we serve this area";
const PROMISE = "Promise: confirm with Erik";
const HOA_PERMIT =
  "Confirm with City of Shoreline Permit Services that a straight exterior repaint needs no building permit; confirm that the Innis Arden association and The Highlands review exterior colors, and what work on a designated Shoreline landmark requires.";

const page: CityPage = {
  slug: "shoreline-wa",
  title: "House Painters in Shoreline, WA",
  metaDescription:
    "Shoreline, WA house painters for 1950s ramblers and Puget Sound view homes. Lead-safe prep, salt-air washing, moss treatment and dry-season exterior painting.",
  h1: "Shoreline house painters for postwar ramblers and homes above Puget Sound",
  eyebrow: "Serving Shoreline, WA",
  intro: [
    "Brushy Bear Painters is a new residential painting company serving Shoreline homeowners, from Richmond Beach and Innis Arden on the Sound side to Ridgecrest, Briarcrest and North City on the east. We do interior and exterior painting, cabinets, trim, drywall repair, and deck and fence staining.",
    "Most of Shoreline was built in the decade or two after World War II, so the typical house here is a 1950s or 1960s rambler or daylight-basement home that has been painted many times. Add salt air on the west side and tall firs almost everywhere, and the job comes down to careful prep, lead-safe work and good timing. This page covers all three.",
  ],
  sections: [
    {
      heading: "Shoreline is a postwar city, and that sets the prep",
      id: "shoreline-homes",
      confirm: SERVE,
      body: [
        // source: https://censusreporter.org/data/table/?table=B25034&geo_ids=16000US5363960 (ACS 2024 5-year, B25034: 25,289 units; 1950s = 22.9%; 1960s = 17.7%; before 1980 = 65.2%)
        {
          type: "p",
          text: "The 1950s are the single biggest decade for Shoreline housing, with about 23% of homes, and the 1950s and 1960s together account for about 40%, according to the Census Bureau's 2020 to 2024 American Community Survey. About two in three Shoreline homes were built before 1980.",
        },
        // source: https://en.wikipedia.org/wiki/Shoreline,_Washington (from 1950 to 1957 the area was the fastest-growing in the Seattle metro, a 64 percent population increase; incorporated August 31, 1995)
        {
          type: "p",
          text: "Between 1950 and 1957 the area grew faster than anywhere else around Seattle, long before it became a city in 1995. The result is street after street of single-story ramblers, split-levels and daylight-basement houses on generous lots.",
        },
        { type: "h3", text: "What we usually find on a 1950s Shoreline house" },
        {
          type: "ul",
          items: [
            "Several layers of old paint on wood lap siding or cedar shingles, with peeling on the weather side and at the eaves.",
            "Original single-pane wood windows, or vinyl replacements set into old wood trim that needs caulking and paint.",
            "Daylight basements where the lower wall sits close to the ground and stays damp, so the bottom boards rot first.",
            "Later additions with a different siding than the original house, which need their own primer and prep.",
          ],
        },
        { type: "h3", text: "Older estates and newer infill" },
        // source: https://en.wikipedia.org/wiki/The_Highlands_(Seattle) (gated community founded 1907; part of Shoreline since 1995)
        // source: https://en.wikipedia.org/wiki/Shoreline,_Washington (modern Shoreline began in 1890 with the platting of Richmond Beach)
        {
          type: "p",
          text: "A few parts of Shoreline are older. The Highlands is a gated community founded in 1907, and Richmond Beach was platted in 1890. On the other end, newer townhomes and infill houses are going up near the light rail stations and along the main corridors, mostly with fiber cement siding that needs careful caulking more than heavy scraping.",
        },
      ],
    },
    {
      heading: "Lead-safe painting in Shoreline's pre-1978 homes",
      id: "shoreline-lead",
      body: [
        // source: https://censusreporter.org/data/table/?table=B25034&geo_ids=16000US5363960 (ACS 2024 5-year: 65.2% of Shoreline housing units built before 1980)
        {
          type: "p",
          text: "Shoreline has one of the highest shares of pre-1980 housing in the area, so we plan most jobs here as lead-safe jobs. Any home built before 1978 can have lead paint under its newer coats, and a 1950s rambler almost always does somewhere, usually on trim, windows and doors.",
        },
        {
          type: "ul",
          items: [
            "We follow EPA RRP lead-safe work practices whenever we disturb paint in a pre-1978 home.",
            "Plastic goes down under every wall we scrape, and we use wet methods and dust control instead of dry sanding.",
            "Chips are bagged and hauled away, not left in beds and lawns.",
            "Inside, we contain the room and clean up with HEPA vacuums and wet wiping before we pack up.",
          ],
          confirm: "Hunter/Erik: confirm we use HEPA vacuums for interior lead-safe cleanup.",
        },
      ],
    },
    {
      heading: "Salt air, west wind and tall firs",
      id: "shoreline-climate",
      body: [
        {
          type: "p",
          text: "Shoreline's exterior painting season is the dry stretch from about June through September. Within that window, where your house sits makes a big difference.",
        },
        { type: "h3", text: "Richmond Beach, Innis Arden and the Sound side" },
        // source: https://en.wikipedia.org/wiki/Shoreline,_Washington (Richmond Beach occupies the northwest corner of the city, on Puget Sound)
        {
          type: "p",
          text: "Homes on the bluffs above Puget Sound take wind and salt air straight off the water. Salt leaves a film that keeps new paint from bonding, so we wash these houses thoroughly and rinse well before priming. West-facing walls and decks also take the hardest afternoon sun, and they fade and check sooner than the rest of the house.",
        },
        { type: "h3", text: "Shade and moss inland" },
        {
          type: "p",
          text: "Much of Shoreline sits under big Douglas firs and cedars, especially near Boeing Creek, Hamlin Park and the ravines. Shaded roofs drop needles into gutters that overflow onto fascia, north walls grow moss, and siding dries slowly after rain. We treat mildew, clear the worst of the moss and let the wood dry before painting.",
        },
      ],
    },
    {
      heading: "Associations, gated communities and landmarks",
      id: "shoreline-hoa",
      confirm: HOA_PERMIT,
      body: [
        {
          type: "p",
          text: "A straight repaint usually doesn't need a city permit in Shoreline, and most of the city's postwar neighborhoods have no HOA. A few communities are different.",
        },
        // source: https://depts.washington.edu/civilr/Innis%20Arden.shtml (Innis Arden subdivided by William and Bertha Boeing in 1940; governed by a homeowners association)
        {
          type: "p",
          text: "Innis Arden, platted in 1940 on land owned by William and Bertha Boeing, has its own homeowners association, and The Highlands is a private gated community. If you live in either, check the community's rules on exterior colors before you choose, and let us know about gate access so the crew can get in on time.",
        },
        // source: https://en.wikipedia.org/wiki/Shoreline,_Washington (city-designated landmarks include the William E. Boeing House, 1914, in The Highlands)
        {
          type: "p",
          text: "Shoreline also has a short list of designated landmarks, including the 1914 William E. Boeing House in The Highlands. If you own a landmark property, ask the city what review applies before exterior work.",
        },
      ],
    },
    {
      heading: "What we paint in Shoreline",
      id: "shoreline-services",
      body: [
        {
          type: "p",
          text: "Most Shoreline exteriors need a full prep cycle: washing, scraping, wood repair at the bottom courses and fascia, caulking and spot priming before two finish coats. [Exterior painting](/services/exterior-painting) is booked in the dry season, and [deck and fence staining](/services/decks-and-fences-painting) is a common add-on on the Sound side, where decks weather fastest.",
        },
        {
          type: "p",
          text: "Inside, postwar homes often have original wood trim, textured ceilings and kitchens with solid wood cabinets. [Interior painting](/services/interior-painting), [drywall repair and painting](/services/drywall-painting) and [cabinet painting](/services/cabinet-painting) can update a 1950s house without a remodel. Start with an [estimate request](/estimate).",
        },
        {
          type: "callout",
          title: "One point of contact",
          text: "You'll deal with one person from the walkthrough to the final touch-ups, and the written quote lists every surface and prep step.",
          confirm: PROMISE,
        },
      ],
    },
  ],
  neighborhoods: [
    { name: "Richmond Beach", note: "Northwest corner on Puget Sound; salt air and west wind.", confirm: SERVE },
    { name: "Innis Arden", note: "Sound-view homes with their own homeowners association.", confirm: SERVE },
    { name: "The Highlands", note: "Private gated community founded in 1907.", confirm: SERVE },
    { name: "Richmond Highlands", note: "Postwar homes between Aurora and Richmond Beach.", confirm: SERVE },
    { name: "Echo Lake", note: "Mix of older houses and newer multifamily near the lake.", confirm: SERVE },
    { name: "Meridian Park", note: "Established single-family streets in central Shoreline.", confirm: SERVE },
    { name: "Ridgecrest", note: "1950s homes on the east side; plan for lead-safe prep.", confirm: SERVE },
    { name: "Briarcrest", note: "Wooded streets near Hamlin Park; shade and moss.", confirm: SERVE },
    { name: "North City", note: "Postwar houses plus newer townhomes along 15th Avenue NE.", confirm: SERVE },
    { name: "Ballinger", note: "Northeast corner near Lake Ballinger and the county line.", confirm: SERVE },
  ],
  faqs: [
    {
      id: "shoreline-salt-air",
      question: "Does salt air affect exterior paint in Richmond Beach and Innis Arden?",
      answer: [
        "Yes, salt air off Puget Sound leaves a residue on siding that weakens paint adhesion if it isn't washed off first. Homes on the bluffs also take more wind and afternoon sun on their west faces.",
        "We wash and rinse these houses thoroughly before priming, and we may suggest a tougher finish or more frequent maintenance coats on the most exposed walls and decks.",
      ],
    },
    {
      id: "shoreline-lead-paint",
      question: "Does my 1950s Shoreline rambler need lead-safe painting?",
      answer: [
        "Yes, if the work will disturb old paint, a house built before 1978 should be painted with lead-safe practices. Most 1950s homes have lead paint somewhere, often on windows, doors and trim.",
        "We follow EPA RRP practices on those jobs, and we plan containment and cleanup into the schedule and the quote from the start.",
      ],
    },
    {
      id: "shoreline-best-months",
      question: "When should I schedule exterior painting in Shoreline?",
      answer: [
        "Schedule exterior painting for the dry season, roughly June through September, with July and August the most reliable months.",
        "Shaded lots under big firs can stay damp into early summer, so we check moisture before starting. Interior, cabinet and drywall work can be done any time of year.",
      ],
    },
  ],
  nearby: ["seattle-wa", "edmonds-wa", "kenmore-wa", "lynnwood-wa"],
  updatedAt: "2026-10-26",
};

export default page;
