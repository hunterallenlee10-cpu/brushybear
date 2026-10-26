import type { CityPage } from "@/data/types";

const SERVE = "Hunter/Erik: confirm we serve this area";
const PROMISE = "Promise: confirm with Erik";
const HOURS =
  "Confirm current Mercer Island construction hours (MICC 8.24.020: weekdays 7 a.m. to 7 p.m., Saturdays 9 a.m. to 6 p.m., none on Sundays or holidays), that they cover painting crews and pressure washing, and that a straight repaint needs no city permit.";

const page: CityPage = {
  slug: "mercer-island-wa",
  title: "House Painters in Mercer Island, WA",
  metaDescription:
    "Painters on Mercer Island, WA for postwar ramblers, 1960s homes and new builds. Lead-safe prep, lake-weather planning and crews that keep to island work hours.",
  h1: "Mercer Island house painters for postwar ramblers, 1960s homes and new builds",
  eyebrow: "Serving Mercer Island, WA",
  intro: [
    "Brushy Bear Painters paints Mercer Island homes inside and out. Much of the island was built in the decades after the first floating bridge opened in 1940, so a typical house here is a mid-century home that has been painted many times, sometimes with a newer addition or a full rebuild next door.",
    "We're a new company, so we don't lean on a track record. We lean on a written process: a walkthrough, a quote that lists every surface, lead-safe prep where it applies, and a final walkthrough before we call it done. Here's what that looks like on the island.",
  ],
  sections: [
    {
      heading: "Mercer Island's mid-century housing and what it needs",
      id: "mercer-island-homes",
      confirm: SERVE,
      body: [
        // source: https://censusreporter.org/data/table/?table=B25034&geo_ids=16000US5345005 (ACS 2020-2024 5-year, B25034: 10,609 units; built before 1980 61.3%; 1960-69 23.6%, 1970-79 15.9%, 1950-59 11.5%; 2000 or later 23.0%)
        // source: https://en.wikipedia.org/wiki/Mercer_Island,_Washington (first floating bridge opened 1940; population grew from 1,200 in 1940 to 4,500 in 1950; incorporated 1960)
        {
          type: "p",
          text: "About six in ten Mercer Island homes were built before 1980, and the 1960s were the busiest decade, according to Census Bureau estimates. The island grew from about 1,200 people in 1940 to 4,500 by 1950 once the bridge made it a commuter town, and kept building through the next two decades.",
        },
        { type: "h3", text: "Postwar ramblers and daylight basements" },
        // source: https://mymercerisland.com/mercer-island-neighborhoods/mercerwood/ (Mercerwood was the first Mercer Island development built after WWII; mid-century, contemporary and craftsman homes)
        // source: https://mymercerisland.com/neighborhoods/mercerdale/ (most Mercerdale homes built in the 1950s and 1960s)
        {
          type: "p",
          text: "Neighborhoods like Mercerwood and Mercerdale are full of 1950s and 1960s houses: low-slope roofs, wide eaves, cedar or fir siding, and daylight basements on the hillside lots. On these homes we expect peeling paint on south-facing walls, soft wood at window sills and fascia ends, and original wood windows that need reglazing touch-ups before paint.",
        },
        { type: "h3", text: "Newer homes and rebuilds" },
        {
          type: "p",
          text: "Roughly a quarter of the island's homes have gone up since 2000, many on lots where an older house was replaced. These usually mix fiber cement, stained wood and metal, with big window walls. Prep is lighter, but caulk lines and sheen changes have to be clean because large flat walls show everything.",
        },
      ],
    },
    {
      heading: "Lead-safe work for the island's pre-1978 homes",
      id: "mercer-island-lead",
      body: [
        {
          type: "p",
          text: "With most of the island built before 1980, we assume old paint may contain lead until we know otherwise. Any job that disturbs paint in a pre-1978 home follows EPA RRP (Renovation, Repair and Painting) lead-safe work practices.",
        },
        {
          type: "ul",
          items: [
            "Ground covers under every work area, so chips don't wash downhill into beds or toward the lake.",
            "Wet scraping and dust control instead of dry-sanding old paint into the air.",
            "Extra care on windows, doors and stair rails, the surfaces that rub and make dust.",
            "Daily cleanup and a final check before we pack up.",
          ],
        },
      ],
    },
    {
      heading: "Lake weather, hillsides and island exteriors",
      id: "mercer-island-climate",
      body: [
        // source: https://en.wikipedia.org/wiki/Mercer_Island,_Washington (island about six miles long and up to four miles wide; Pioneer Park 113 acres of forest trails; warm, dry summers)
        {
          type: "p",
          text: "The island is only about four miles across at its widest, so the lake is never far from any house. Shoreline homes and the lake-facing sides of hillside homes take wind-driven rain in winter and reflected sun in summer. Inland, the forested middle of the island, around Pioneer Park and the wooded ravines, keeps a lot of siding in shade.",
        },
        {
          type: "p",
          text: "That means two different problems on the same house: fading and chalking on the sunny, lake-facing walls, and mildew and moss on the shaded side. We wash and treat the shaded walls first and give them time to dry, and we paint the hot west faces in the cooler part of the day.",
        },
        {
          type: "p",
          text: "Exteriors run in the dry season, roughly June through September. If rain interrupts the job, the lost days are rescheduled first and never charged.",
          confirm: PROMISE,
        },
      ],
    },
    {
      heading: "Work hours and permits on Mercer Island",
      id: "mercer-island-rules",
      confirm: HOURS,
      body: [
        // source: https://www.mercerisland.gov/node/2041 (Code Compliance: construction 7 a.m. to 7 p.m. weekdays, 9 a.m. to 6 p.m. Saturdays, no work on Sundays and holidays)
        // source: https://www.mercerisland.gov/sites/default/files/fileattachments/community_planning_amp_development/page/9261/noise_exception_request.pdf (work outside those hours needs a noise exception)
        {
          type: "p",
          text: "Mercer Island allows construction work from 7 a.m. to 7 p.m. on weekdays and 9 a.m. to 6 p.m. on Saturdays, with no work on Sundays or holidays. We plan crew days, pressure washing and sprayer work inside those hours, so your neighbors aren't hearing equipment early on a Saturday.",
        },
        {
          type: "p",
          text: "A repaint with no siding replacement or structural work usually needs no city permit. Some island streets are narrow or steep, so we also plan where the crew parks and where ladders go before day one.",
        },
      ],
    },
    {
      heading: "Painting services for Mercer Island homes",
      id: "mercer-island-services",
      body: [
        {
          type: "p",
          text: "Our [exterior painting](/services/exterior-painting) on mid-century homes covers washing, scraping, wood repair, caulking and priming before finish coats. Lake-facing decks and railings get cleaned and resealed with [deck and fence staining](/services/decks-and-fences-painting).",
        },
        {
          type: "p",
          text: "Inside, [interior painting](/services/interior-painting) covers walls, ceilings, trim and doors. Older homes often have wood paneling, built-ins and solid wood kitchens, which we handle with [millwork painting](/services/millwork-painting) and [cabinet painting](/services/cabinet-painting).",
        },
        {
          type: "p",
          text: "Start with a [free estimate](/estimate) or an [instant estimate](/instant-estimate), and see our [FAQs](/faqs) for how a job runs from start to finish.",
        },
      ],
    },
  ],
  neighborhoods: [
    // source: https://mymercerisland.com/mercer-island-neighborhoods/north-end/ (East Seattle, Mercerdale, First Hill and Madrona Crest are the North End's largest neighborhoods)
    // source: https://en.wikipedia.org/wiki/Mercer_Island,_Washington (East Seattle created in 1887 on the northwest side)
    { name: "East Seattle", note: "The island's first community, on the northwest shore; older homes.", confirm: SERVE },
    { name: "First Hill", note: "North End hillside streets with lake and city views.", confirm: SERVE },
    { name: "Mercerdale", note: "Grid of 1950s and 1960s homes north of Mercerdale Park.", confirm: SERVE },
    { name: "Madrona Crest", note: "North End streets of single-family homes.", confirm: SERVE },
    { name: "Mercerwood", note: "First postwar development on the island; hillside lots.", confirm: SERVE },
    { name: "Shorewood", note: "Apartments and single-family homes on the north end.", confirm: SERVE },
    { name: "Mid-Island", note: "The island's crest, wooded lots near Pioneer Park.", confirm: SERVE },
    // source: https://mymercerisland.com/mercer-island-neighborhoods/south-end-mi/ (Island Point and Island Terrace at the southern tip, views of Lake Washington and Mount Rainier)
    { name: "Island Point and Island Terrace", note: "South tip homes facing the lake and Mount Rainier.", confirm: SERVE },
  ],
  faqs: [
    {
      id: "mercer-island-work-hours",
      question: "What hours can painters work on Mercer Island?",
      answer: [
        "Construction work is allowed from 7 a.m. to 7 p.m. on weekdays and 9 a.m. to 6 p.m. on Saturdays, with none on Sundays or holidays.",
        "We schedule all crew work, including pressure washing, inside those hours.",
      ],
      confirm: HOURS,
    },
    {
      id: "mercer-island-lead-paint",
      question: "Does my 1960s Mercer Island house need lead-safe painting?",
      answer: [
        "Yes, if the work disturbs old paint, a home built before 1978 should be painted with lead-safe work practices.",
        "We follow EPA RRP practices on those jobs: containment, wet methods to keep dust down, and careful cleanup. Let us know your build year when you request an estimate.",
      ],
    },
    {
      id: "mercer-island-best-months",
      question: "When should I book exterior painting on Mercer Island?",
      answer: [
        "Book in winter or spring for a start between June and September, the island's dry season.",
        "Shaded lots and lake-facing walls can stay damp into early summer, so we check moisture before we prime. Interior work runs all year.",
      ],
    },
  ],
  nearby: ["bellevue-wa", "newcastle-wa", "seattle-wa", "renton-wa"],
  updatedAt: "2026-10-26",
};

export default page;
