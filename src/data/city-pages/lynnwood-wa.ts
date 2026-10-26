import type { CityPage } from "@/data/types";

const SERVE = "Hunter/Erik: confirm we serve this area";
const PROMISE = "Promise: confirm with Erik";

const page: CityPage = {
  slug: "lynnwood-wa",
  title: "House Painters in Lynnwood, WA",
  metaDescription:
    "Painters in Lynnwood, WA for 1960s ramblers, split-levels and newer townhomes. Lead-safe prep, convergence-zone rain planning and a written quote on every job.",
  h1: "House painters in Lynnwood for 1960s ramblers, split-levels and newer townhomes",
  eyebrow: "Serving Lynnwood, WA",
  intro: [
    "Brushy Bear Painters paints Lynnwood homes inside and out. Most of the houses here went up after the city incorporated in 1959, and a lot of them are on their fourth or fifth coat of paint, so prep is where the job is won or lost.",
    "We're a new company, and we run every job the same way: a walkthrough, a written quote that lists every surface, and a walkthrough again at the end. This page covers what Lynnwood houses tend to need, how south Snohomish County weather affects exterior work, and how to plan around both.",
  ],
  sections: [
    {
      heading: "What Lynnwood's housing stock means for prep",
      id: "lynnwood-homes",
      confirm: SERVE,
      body: [
        // source: https://censusreporter.org/data/table/?table=B25034&geo_ids=16000US5340840 (ACS 2020-2024 5-year, B25034: 17,012 units; 1960-69 22.1%, 1970-79 17.9%, 1950-59 10.5%; built before 1980 52.6%)
        {
          type: "p",
          text: "About half of Lynnwood's homes were built before 1980, and the 1960s were the busiest decade of all, according to Census Bureau estimates. That lines up with the city's history: Lynnwood incorporated in 1959 and more than doubled in population over the next ten years.",
        },
        // source: https://en.wikipedia.org/wiki/Lynnwood,_Washington (incorporated April 23, 1959; population 7,207 in 1960 and 16,919 in 1970; Alderwood Mall opened 1979 and sparked an early-1980s residential boom)
        { type: "h3", text: "Ramblers and split-levels from the 1960s and 1970s" },
        {
          type: "p",
          text: "On these houses we usually find wood lap or plywood siding with years of paint layers, single-pane or early aluminum windows with tired glazing and sills, and fascia boards that have soaked up water where gutters overflowed. Split-levels add a lower story that sits close to the ground, so the bottom courses of siding often need more scraping and some board replacement.",
        },
        { type: "h3", text: "1980s and 1990s homes and newer townhomes" },
        // source: https://censusreporter.org/data/table/?table=B25034&geo_ids=16000US5340840 (ACS 2020-2024 5-year: 1980-89 11.9%, 1990-99 15.2%, 2000 or later 20.3%)
        {
          type: "p",
          text: "Roughly a quarter of the city's homes date from the 1980s and 1990s, built after Alderwood Mall opened in 1979 and pulled growth to the east side of town. About one in five went up in 2000 or later, including the apartments and townhomes around City Center. Those newer buildings often have fiber cement siding and long runs of trim, where the work is careful caulking and even coverage more than scraping.",
        },
      ],
    },
    {
      heading: "Lead-safe painting for pre-1978 Lynnwood homes",
      id: "lynnwood-lead",
      body: [
        {
          type: "p",
          text: "If your Lynnwood home was built before 1978, we treat any work that disturbs old paint as lead-safe work. Lead paint was banned for homes in 1978, and with so many Lynnwood houses from the 1950s, 1960s and 1970s, it is often still there under newer coats on trim, windows and doors.",
        },
        {
          type: "ul",
          items: [
            "We follow EPA RRP (Renovation, Repair and Painting) lead-safe work practices on pre-1978 homes.",
            "Ground under the work area is covered so chips don't end up in garden beds or the lawn.",
            "We keep dust down with wet methods and avoid dry-sanding old paint into the air.",
            "Window sashes and door jambs get extra attention, since surfaces that rub are a common source of lead dust.",
          ],
        },
      ],
    },
    {
      heading: "Convergence-zone rain and Lynnwood exteriors",
      id: "lynnwood-climate",
      body: [
        // source: https://en.wikipedia.org/wiki/Puget_Sound_Convergence_Zone (zone most often sets up over central and south Snohomish County; Lynnwood named among usual locations)
        // source: https://en.wikipedia.org/wiki/Lynnwood,_Washington (city sits on a plateau 300 to 600 feet above Puget Sound)
        {
          type: "p",
          text: "Lynnwood sits in the usual path of the Puget Sound Convergence Zone, where winds from both sides of the Olympics meet and stir up showers over south Snohomish County. A forecast that says dry for Seattle doesn't always mean dry here, so we check the local forecast each morning and keep a buffer in exterior schedules.",
        },
        {
          type: "p",
          text: "Exteriors run in the dry season, roughly June through September. Paint needs dry siding and temperatures above the label minimum, usually 35 to 50°F, through the full drying time. North walls, siding under big cedars, and homes near the wooded ravines like Lund's Gulch and Scriber Creek stay damp longest, so those get washed, treated for mildew and checked with a moisture meter before primer goes on.",
        },
        {
          type: "p",
          text: "If a shower interrupts your job, the lost days are rescheduled first and never charged.",
          confirm: PROMISE,
        },
      ],
    },
    {
      heading: "Painting services for Lynnwood homes",
      id: "lynnwood-services",
      body: [
        {
          type: "p",
          text: "Our [exterior painting](/services/exterior-painting) on older Lynnwood houses starts with the prep they need: washing, scraping, wood repair, new caulk and spot priming. For townhome and condo communities, [HOA painting](/services/hoa-painting) covers building-by-building schedules and resident notices.",
        },
        {
          type: "p",
          text: "Inside, 1960s and 1970s homes often have textured ceilings, dated wood paneling and solid wood kitchen cabinets. [Interior painting](/services/interior-painting) covers walls, ceilings, trim and doors, and [cabinet painting](/services/cabinet-painting) can update a sound kitchen without new boxes. Cedar fences and decks get cleaned and sealed with [deck and fence painting and staining](/services/decks-and-fences-painting).",
        },
        {
          type: "p",
          text: "Book a [free estimate](/estimate) or start with an [instant estimate](/instant-estimate). Tell us the year your house was built so we can plan the prep.",
        },
      ],
    },
  ],
  neighborhoods: [
    // source: https://en.wikipedia.org/wiki/Lynnwood,_Washington (Alderwood Manor planned community from 1917; Cedar Valley and Scriber Lake early homestead areas)
    { name: "Alderwood", note: "Homes around the mall area that grew after 1979.", confirm: SERVE },
    { name: "Cedar Valley", note: "Older streets in one of the area's early homestead valleys.", confirm: SERVE },
    { name: "Scriber Lake", note: "Central Lynnwood near the nature park; shaded, damp lots.", confirm: SERVE },
    { name: "Lynndale", note: "West Lynnwood streets near Lynndale Park and its tall trees.", confirm: SERVE },
    { name: "Meadowdale", note: "Northwest side toward the Sound and Lund's Gulch.", confirm: SERVE },
    { name: "Hall Lake", note: "South end near the Edmonds and Mountlake Terrace lines.", confirm: SERVE },
    { name: "City Center", note: "Newer apartments and townhomes near the light rail station.", confirm: SERVE },
    // source: https://en.wikipedia.org/wiki/Lynnwood,_Washington (town grew in the late 1940s around Highway 99 and 196th Street SW)
    { name: "Highway 99 corridor", note: "Where the town started; older homes mixed with apartments.", confirm: SERVE },
  ],
  faqs: [
    {
      id: "lynnwood-lead-paint",
      question: "Does my 1960s Lynnwood house need lead-safe painting?",
      answer: [
        "Yes, if the work will disturb old paint, a house built before 1978 should be painted with lead-safe work practices. Many Lynnwood ramblers and split-levels from that era still have lead paint under newer coats.",
        "We follow EPA RRP practices on those jobs: containment, dust control and careful cleanup. Tell us your home's build year when you request an estimate.",
      ],
    },
    {
      id: "lynnwood-best-months",
      question: "When is the best time to paint a house exterior in Lynnwood?",
      answer: [
        "July and August are the most reliable months, and the wider window runs roughly June through September.",
        "Convergence-zone showers can pop up even in summer, so we watch the local forecast closely and leave room in the schedule. Interior and cabinet work runs all year.",
      ],
    },
    {
      id: "lynnwood-townhomes",
      question: "Do you paint townhome and condo buildings in Lynnwood?",
      answer: [
        "Yes, we take on townhome and condo exteriors through our HOA and commercial painting services.",
        "Board approvals, resident notices and a building-by-building schedule are part of the plan, and all of it is written into the quote.",
      ],
      confirm: "Hunter/Erik: confirm we take on multi-building townhome and condo exteriors in Lynnwood.",
    },
  ],
  nearby: ["edmonds-wa", "mill-creek-wa", "shoreline-wa", "bothell-wa"],
  updatedAt: "2026-10-26",
};

export default page;
