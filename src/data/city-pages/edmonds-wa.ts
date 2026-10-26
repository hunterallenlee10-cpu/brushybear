import type { CityPage } from "@/data/types";

const SERVE = "Hunter/Erik: confirm we serve this area";
const PROMISE = "Promise: confirm with Erik";
const PERMIT_HIST =
  "Confirm with the City of Edmonds Planning Division that a straight exterior repaint needs no permit, and check the current status of the Historic Preservation Commission (its city page is marked suspended) and what changes to homes on the Edmonds Register of Historic Places need review.";

const page: CityPage = {
  slug: "edmonds-wa",
  title: "House Painters in Edmonds, WA",
  metaDescription:
    "Edmonds house painters for 1960s ramblers, view homes in the Bowl and older houses near downtown. Salt-air prep, lead-safe work and a written quote up front.",
  h1: "Edmonds house painters for view homes, 1960s ramblers and salt-air siding",
  eyebrow: "Serving Edmonds, WA",
  intro: [
    "Brushy Bear Painters paints homes in Edmonds, from the view streets of the Bowl down to the waterfront and out to Five Corners, Westgate and Perrinville. We're a new company and don't have Edmonds jobs to show you yet. What you get is a walkthrough, a written quote that names every surface, daily updates and a final walkthrough before we call it done.",
    // source: https://en.wikipedia.org/wiki/Edmonds,_Washington (incorporated August 14, 1890; oldest incorporated city in Snohomish County; about 5 miles of Puget Sound shoreline)
    "Edmonds is the oldest incorporated city in Snohomish County, and it sits right on Puget Sound with about five miles of shoreline. That combination shapes almost every paint job here: lots of older homes with layers of paint to deal with, and west-facing walls that take salt air, wind and afternoon sun off the water.",
  ],
  sections: [
    {
      heading: "Edmonds homes and what they mean for prep",
      id: "edmonds-homes",
      confirm: SERVE,
      body: [
        // source: https://censusreporter.org/data/table/?table=B25034&geo_ids=16000US5320750 (ACS 2020-2024 5-year, B25034: 19,479 units; 1960-69 = 24.9%, the largest decade; 1950-79 = 54.7%; built before 1980 = 60.7%)
        {
          type: "p",
          text: "The 1960s were Edmonds' biggest building decade, with about a quarter of today's homes, and roughly 60% of the city's housing was built before 1980, according to Census Bureau estimates. That fits the city's history: most of its large annexations, out to Highway 99, were done by the early 1960s.",
        },
        // source: https://en.wikipedia.org/wiki/Edmonds,_Washington (eastern boundary reached SR 99 by 1959; largest annexations completed by 1963; southern neighborhoods annexed 1995 to 1997)
        { type: "h3", text: "Mid-century ramblers and daylight basements" },
        {
          type: "p",
          text: "Across Edmonds you'll see 1950s and 1960s ramblers, split-levels and daylight-basement homes built into the slopes so the lower floor opens toward the view. These houses typically have wood lap siding or plywood panels, painted wood windows or early aluminum ones, and decades of paint on the trim. Expect careful scraping, wood repair on sills and fascia, and spot priming before finish coats.",
        },
        { type: "h3", text: "Older homes near downtown" },
        {
          type: "p",
          text: "In and around the Bowl and downtown, a few homes go back to the early 1900s, and many have been added onto or rebuilt over the years. Older houses may have original wood windows, shingle siding and decorative trim. That's slow hand work, done in stages, and it gets more care than a quick wash and spray.",
        },
        { type: "h3", text: "Newer view homes and rebuilds" },
        {
          type: "p",
          text: "Rebuilds on view lots tend to have fiber cement siding, big windows and lots of exterior trim. They need less scraping, but every caulk joint and every bit of exposed trim faces the weather, so even coverage and well-sealed edges matter most.",
        },
      ],
    },
    {
      heading: "Salt air, sun off the Sound and shaded ravines",
      id: "edmonds-climate",
      body: [
        {
          type: "p",
          text: "Edmonds faces west over Puget Sound, and that changes how exterior paint wears. Homes on the waterfront and the bluffs get salt air and wind, which leaves a film on siding and windows and wears down coatings faster. West-facing walls also take long afternoon sun with glare off the water, which fades color and dries out deck stain.",
        },
        {
          type: "ul",
          items: [
            "We wash salt and grime off the siding before painting, since paint won't bond well over residue.",
            "Exposed west and south faces may call for a different sheen or a more durable product, which we'll discuss at the walkthrough.",
            "Metal railings, gutters and fasteners near the water get checked for rust, which has to be cleaned and primed.",
          ],
        },
        {
          type: "p",
          text: "Away from the water, some Edmonds streets drop into wooded creek ravines where lots stay shaded and damp. There, moss and mildew on north walls and low siding are the bigger problem. Either way, exteriors belong in the dry season, roughly June through September, and we check moisture before priming.",
        },
      ],
    },
    {
      heading: "Lead paint in Edmonds' older homes",
      id: "edmonds-lead",
      body: [
        {
          type: "p",
          text: "With about 60% of Edmonds homes built before 1980, lead paint is a real possibility on a lot of local houses, usually on trim, windows and doors under newer coats. If your house was built before 1978 and the job will disturb old paint, we follow EPA RRP lead-safe work practices.",
        },
        {
          type: "p",
          text: "That means plastic containment, dust control instead of dry-sanding, and collecting chips so they don't end up in garden beds. Vegetable beds near the foundation get covered and protected.",
        },
      ],
    },
    {
      heading: "Historic homes, HOAs and permits in Edmonds",
      id: "edmonds-permits",
      confirm: PERMIT_HIST,
      body: [
        {
          type: "p",
          text: "Repainting a house usually doesn't need a city permit, but HOAs often require approval for exterior color changes. Some Edmonds subdivisions have covenants, so check yours before choosing colors.",
        },
        // source: https://edmondswa.gov/government/boards_and_commissions/historic_preservation_commission/register_of_historic_places (Edmonds Register of Historic Places; voluntary listing encouraged by the Historic Preservation Commission) and https://edmonds.municipal.codes/ECDC/20.45.020 (listing with owner consent)
        {
          type: "p",
          text: "Edmonds also keeps its own Register of Historic Places. Listing is voluntary and done with the owner's consent. If your house is on the register, especially if you've used the special property tax valuation that comes with it, check with the city's Planning Division before changing exterior colors or materials. We're glad to work from any color guidance you've been given.",
        },
      ],
    },
    {
      heading: "Our painting services in Edmonds",
      id: "edmonds-services",
      body: [
        {
          type: "p",
          text: "Our [exterior painting](/services/exterior-painting) work in Edmonds starts with washing off salt and grime, then scraping, wood repair, caulking and priming before two finish coats. View decks and cedar fences take the most weather, and [deck and fence staining](/services/decks-and-fences-painting) restores them after a full cleaning.",
        },
        {
          type: "p",
          text: "Inside, mid-century homes often have solid wood cabinets and original trim that are worth keeping. [Cabinet painting](/services/cabinet-painting) and [interior painting](/services/interior-painting) can update them without a full remodel. Every job starts with a [written estimate](/estimate).",
        },
        {
          type: "callout",
          title: "When the weather turns",
          text: "If rain or wet siding pushes back your exterior start date, we reschedule first and never charge for the delay.",
          confirm: PROMISE,
        },
      ],
    },
  ],
  neighborhoods: [
    { name: "Downtown Edmonds/the Bowl", note: "View slopes above the ferry dock; older homes and rebuilds.", confirm: SERVE },
    { name: "Five Corners", note: "Mid-century homes around the five-way intersection on the hill.", confirm: SERVE },
    { name: "Westgate", note: "Residential streets around the Westgate shopping area.", confirm: SERVE },
    { name: "Perrinville", note: "North Edmonds near the Lynnwood line; wooded ravines.", confirm: SERVE },
    { name: "Seaview", note: "Hillside streets with Sound and Olympic views.", confirm: SERVE },
    { name: "Sherwood", note: "Established single-family streets.", confirm: SERVE },
    { name: "Firdale", note: "South Edmonds near the King County line.", confirm: SERVE },
    { name: "Lake Ballinger", note: "Southeast Edmonds homes near the lake.", confirm: SERVE },
    { name: "Esperance", note: "Unincorporated area surrounded by Edmonds, with similar homes.", confirm: SERVE },
  ],
  faqs: [
    {
      id: "edmonds-wa-salt-air",
      question: "Does salt air affect exterior paint on Edmonds homes?",
      answer: [
        "Yes, salt air near the water leaves residue on siding and speeds up wear on paint and metal, especially on west-facing walls.",
        "The fix is mostly prep: a thorough wash before painting, rust treatment on metal, and a durable exterior product on exposed sides.",
      ],
    },
    {
      id: "edmonds-wa-historic",
      question: "My Edmonds home is on the local historic register. Can I change the colors?",
      answer: [
        "Possibly, but check with the City of Edmonds Planning Division first, because listed homes can have review requirements for exterior changes.",
        "We'll work from whatever guidance the city gives you, and we schedule the job after any approval is in hand.",
      ],
      confirm: PERMIT_HIST,
    },
    {
      id: "edmonds-wa-lead",
      question: "Is lead paint likely in my 1960s Edmonds rambler?",
      answer: [
        "It's possible, since lead paint wasn't banned for homes until 1978, so treat any pre-1978 house as if it may be present.",
        "We use EPA RRP lead-safe practices whenever a job disturbs old paint in a pre-1978 home, and the containment and cleanup are part of the written quote.",
      ],
    },
    {
      id: "edmonds-wa-best-months",
      question: "When is the best time to paint an exterior in Edmonds?",
      answer: [
        "July and August are the most reliable months, with June and September often workable.",
        "Bluff and waterfront homes can be windy, so we watch the forecast for wind as well as rain. Interior work can be booked any time of year.",
      ],
    },
  ],
  nearby: ["lynnwood-wa", "shoreline-wa", "mill-creek-wa"],
  updatedAt: "2026-10-26",
};

export default page;
