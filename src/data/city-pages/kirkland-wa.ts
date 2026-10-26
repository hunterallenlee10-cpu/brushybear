import type { CityPage } from "@/data/types";

const SERVE = "Hunter/Erik: confirm we serve this area";
const PROMISE = "Promise: confirm with Erik";
const HOA_PERMIT =
  "Confirm with the City of Kirkland that a straight exterior repaint needs no building permit, and confirm how common HOA-managed exteriors and HOA color approval are in Kirkland townhome, condo and single-family communities.";

const page: CityPage = {
  slug: "kirkland-wa",
  title: "House Painters in Kirkland, WA",
  metaDescription:
    "House painters in Kirkland, WA for 1970s cedar homes, lake-view decks and new townhomes. Prep for Finn Hill shade and moss, lead-safe work on pre-1978 homes.",
  h1: "Kirkland painters for lakeside homes, wooded Finn Hill lots and new townhomes",
  eyebrow: "Painting homes in Kirkland, WA",
  intro: [
    "Brushy Bear Painters provides interior painting, exterior painting, cabinet painting and deck staining for Kirkland homeowners, from the lake slopes of Houghton to the wooded streets of Finn Hill. We're a new company, and we run every job on the same written steps so you know what's happening at your house each day.",
    // source: https://www.kirklandwa.gov/Government/City-Managers-Office/History-of-Kirkland (Houghton joined Kirkland in 1968) and https://www.kingcounty.gov/exec/news/release/2011/May/27kirkland.aspx (Finn Hill, North Juanita and Kingsgate annexed June 1, 2011; more than 31,000 residents)
    "Kirkland grew in big steps. The city joined with Houghton in 1968 and annexed Finn Hill, North Juanita and Kingsgate in 2011, adding more than 31,000 residents. That's why one Kirkland street can have a 1970s split-level with plywood siding and the next a row of new townhomes with fiber cement. Each one needs its own plan.",
  ],
  sections: [
    {
      heading: "Kirkland homes and what they need from a painter",
      id: "kirkland-homes",
      body: [
        // source: https://censusreporter.org/data/table/?table=B25034&geo_ids=16000US5335940 (ACS 2024 1-year, B25034 Year Structure Built: 41,910 units; 1970–1979 = 25.2%, the largest decade; pre-1980 = 40.4%)
        {
          type: "p",
          text: "The 1970s are Kirkland's biggest building decade. About a quarter of the city's housing units date from 1970 to 1979, and roughly 40% were built before 1980, according to the Census Bureau's 2024 American Community Survey.",
        },
        { type: "h3", text: "1970s cedar and plywood homes" },
        {
          type: "p",
          text: "Many of these houses are split-levels and two-stories with cedar lap siding, cedar shakes or T1-11 plywood panels. Cedar takes paint and stain well, but it splits and cups once the finish fails, and the end grain at corners and butt joints wicks water. T1-11 fails from the bottom edge up. On these homes the time goes into scraping, feathering sanded edges, replacing soft boards and priming bare wood, because the topcoat only lasts as long as what's under it.",
        },
        { type: "h3", text: "Older homes near the lake" },
        {
          type: "p",
          text: "Closer to Lake Washington, in Lakeview, Market, Norkirk and Central Houghton, some of Kirkland's oldest houses stand next to recent rebuilds. Older homes may have original wood windows, decorative trim and many layers of paint, so the prep is detailed hand work rather than a quick wash and spray.",
        },
        { type: "h3", text: "New townhomes and infill" },
        {
          type: "p",
          text: "Newer townhomes and infill houses, common around Totem Lake and downtown, usually have fiber cement siding and factory-primed trim. The exterior is often still on its first builder coat, and interiors commonly have flat builder-grade wall paint that scuffs easily and won't take a clean touch-up. That's a frequent reason to repaint a fairly new home sooner than you'd expect.",
        },
      ],
    },
    {
      heading: "Kirkland weather: west sun on the lake slopes, shade on Finn Hill",
      id: "kirkland-climate",
      body: [
        {
          type: "p",
          text: "Exterior painting in Kirkland belongs in the dry season, roughly June through September, but where your house sits on the hill matters almost as much as the month.",
        },
        {
          type: "p",
          text: "Much of Kirkland slopes west down to Lake Washington. West-facing walls, doors and decks in neighborhoods like Lakeview, Market and Houghton get long afternoon sun and glare off the water, which fades color and breaks down deck stain faster. Homes right at the shoreline also deal with morning dampness and mildew on the lake side.",
        },
        {
          type: "p",
          text: "Finn Hill is the opposite. Tall Douglas firs and cedars, especially around Big Finn Hill Park and O.O. Denny Park, keep many lots in shade most of the day. Siding stays damp, moss grows on north walls and low rows of siding, and needles pile up in gutters and on decks. Painting over moss or damp wood is the fastest way to get peeling a year later, so on those homes we wash, treat mildew, clear debris and let the siding dry before priming.",
        },
        { type: "h3", text: "What we check before a Kirkland exterior starts" },
        {
          type: "ul",
          items: [
            "Moisture in the siding on the shaded side, after a few dry days.",
            "Soft wood at the bottom of T1-11 panels, corner boards and window trim.",
            "Open caulk joints on lake-facing and west-facing walls.",
            "Gray, dried-out deck boards and railings that need cleaning before stain.",
          ],
        },
      ],
    },
    {
      heading: "Lead paint in older Kirkland homes",
      id: "kirkland-lead",
      body: [
        {
          type: "p",
          text: "Homes built before 1978 can contain lead paint, and in Kirkland that includes many 1970s houses, not just the oldest homes near downtown. Lead paint wasn't banned for residential use until 1978, so a house built in 1975 may still have it on trim, windows and doors even if the siding was repainted later.",
        },
        {
          type: "p",
          text: "We follow EPA RRP lead-safe work practices on every job that disturbs old paint in a pre-1978 home. That means containing the work area, keeping dust down and collecting paint chips instead of letting them fall into lawns and garden beds, which matters if you have kids, pets or a vegetable garden.",
        },
      ],
    },
    {
      heading: "Townhomes, condos and HOAs in Kirkland",
      id: "kirkland-hoa",
      confirm: HOA_PERMIT,
      body: [
        {
          type: "p",
          text: "In Kirkland, the first question is often who controls the exterior. Repainting a house usually doesn't need a city permit, but HOAs often require approval for exterior color changes, and in many townhome and condo communities the association paints the exterior itself.",
        },
        {
          type: "p",
          text: "If you own a townhome or condo, the association usually maintains and paints the outside on its own schedule while you handle the inside. In a single-family subdivision with an HOA, you usually paint the exterior yourself but need colors approved first. Check your covenants or ask your management company before you pick colors, and we'll plan the exterior around the approval.",
        },
        // source: https://www.kirklandwa.gov/Government/City-Managers-Office/KAN (13 neighborhood associations, independent nonprofits) and https://kirklandwa.qscend.com/ourkirkland/knowledgebase/article/546 (the city doesn't keep HOA information)
        {
          type: "p",
          text: "Kirkland's 13 neighborhood associations, like Finn Hill or Central Houghton, are community groups, not HOAs. Color rules come from your HOA's covenants, if you have one.",
        },
      ],
    },
    {
      heading: "Our services for Kirkland homes",
      id: "kirkland-services",
      body: [
        {
          type: "p",
          text: "Lake-view decks and cedar fences take more weather in Kirkland than almost anything else on the property and often wear out well before the siding does. [Deck and fence staining](/services/decks-and-fences-painting) starts with a thorough cleaning, then the right solid or semi-transparent stain for the wood's condition.",
        },
        {
          type: "p",
          text: "For 1970s cedar and T1-11 houses, [exterior painting](/services/exterior-painting) includes the repairs that make paint last: replacing soft trim, sealing butt joints and priming bare wood. For townhomes and newer houses with tired builder paint, [interior painting](/services/interior-painting) swaps flat walls for a washable finish in kitchens, halls and kids' rooms.",
        },
        {
          type: "callout",
          title: "What you'll see each day",
          text: "One point of contact, a photo update every day, and a home left clean every evening.",
          confirm: PROMISE,
        },
        {
          type: "p",
          text: "Every job starts with a walkthrough and a [written estimate](/estimate), and ends with a final walkthrough where touch-ups are fixed on the spot.",
        },
      ],
    },
  ],
  neighborhoods: [
    { name: "Finn Hill", note: "Heavily wooded lots; plan for moss, needles and shaded siding.", confirm: SERVE },
    { name: "Juanita", note: "Homes around Juanita Bay and up the hill toward Finn Hill.", confirm: SERVE },
    { name: "Totem Lake", note: "Newer townhomes and condos beside older single-family streets.", confirm: SERVE },
    { name: "North Rose Hill", note: "Single-family streets east of I-405 from several eras.", confirm: SERVE },
    { name: "South Rose Hill/Bridle Trails", note: "Wooded lots near Bridle Trails State Park.", confirm: SERVE },
    { name: "Central Houghton", note: "Mostly single-family homes in the former city of Houghton.", confirm: SERVE },
    { name: "Lakeview", note: "West-facing lake slopes with strong afternoon sun.", confirm: SERVE },
    { name: "Market", note: "Some of Kirkland's oldest homes, north of downtown.", confirm: SERVE },
    { name: "Norkirk", note: "Established streets and rebuilds near downtown.", confirm: SERVE },
    { name: "Highlands", note: "Quiet residential streets between downtown and I-405.", confirm: SERVE },
  ],
  faqs: [
    {
      id: "kirkland-best-months",
      question: "What months are best for exterior painting in Kirkland?",
      answer: [
        "July and August are the most dependable months for exterior painting in Kirkland, and June and September usually work when the forecast cooperates.",
        "Shaded Finn Hill homes may need several dry days after the last rain before the siding is ready. Sunny west-facing walls near the lake paint best in the morning, before they heat up. Interiors and cabinets can be scheduled any time of year.",
      ],
    },
    {
      id: "kirkland-finn-hill-moss",
      question: "My Finn Hill house is shaded and mossy. Can it still be painted?",
      answer: [
        "Yes, a shaded, mossy house can be painted, but the moss and mildew have to come off and the siding has to dry first.",
        "We wash the siding, treat mildew, clear needles from the work area and replace any soft boards we find. Trimming branches that touch the house helps new paint dry and last longer, and we'll point out where that would help.",
      ],
    },
    {
      id: "kirkland-townhome-hoa",
      question: "Can you paint my Kirkland townhome if the HOA handles the exterior?",
      answer: [
        "Yes, we can paint the inside of a townhome or condo whenever you're ready; the outside is usually up to your association.",
        "Interior painting and cabinet painting usually don't need HOA approval, but some communities have rules about work hours, parking or common areas. Share those with us before we schedule so the crew follows them from day one.",
      ],
      confirm: "Confirm that Kirkland HOAs typically don't require approval for interior painting; keep the wording general if unsure.",
    },
    {
      id: "kirkland-1970s-lead",
      question: "My Kirkland house was built in the 1970s. Do I need to worry about lead paint?",
      answer: [
        "If your house was built before 1978, assume lead paint may be present until a test says otherwise. About a quarter of Kirkland's housing dates from the 1970s, so this applies to a lot of local homes.",
        "We use EPA RRP lead-safe practices whenever a job disturbs old paint in a pre-1978 home, and the containment and cleanup are part of the written quote.",
      ],
    },
  ],
  nearby: ["bellevue-wa", "redmond-wa"],
  updatedAt: "2026-10-24",
};

export default page;
