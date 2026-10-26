import type { CityPage } from "@/data/types";

const SERVE = "Hunter/Erik: confirm we serve this area";
const PROMISE = "Promise: confirm with Erik";
const PERMIT =
  "Confirm with the City of Clyde Hill building department that a straight interior or exterior repaint (no siding replacement or structural repair) needs no building permit.";

const page: CityPage = {
  slug: "clyde-hill-wa",
  title: "House Painters in Clyde Hill, WA",
  metaDescription:
    "Clyde Hill house painters for 1960s homes and new custom builds. Lead-safe prep, work within city construction hours, and a written scope for every surface.",
  h1: "Clyde Hill house painters for 1960s originals and new custom homes",
  eyebrow: "Serving Clyde Hill, WA",
  intro: [
    "Brushy Bear Painters paints homes in Clyde Hill, the small city on the hill between Bellevue, Medina and Kirkland. We're a new company, so instead of a list of past jobs, we give you a clear written scope, a set daily schedule and a walkthrough at the end where touch-ups get fixed before we leave.",
    // source: https://historylink.org/File/11191 (residents incorporated in March 1953 to keep the 20,000-square-foot minimum lot size; county allowed 6,000 sq ft lots)
    "Clyde Hill incorporated in 1953 largely to keep its large-lot, single-family character, and it still looks that way. Almost every home here is a detached house on a generous lot, and the streets are split between original mid-century homes and much larger new custom builds. Those two kinds of houses need very different painting work, and this page covers both.",
  ],
  sections: [
    {
      heading: "Clyde Hill's homes: mid-century originals and new custom builds",
      id: "clyde-hill-homes",
      confirm: SERVE,
      body: [
        // source: https://censusreporter.org/data/table/?table=B25034&geo_ids=16000US5313365 (ACS 2020-2024 5-year, B25034: 1,254 units; 1960-69 = 35.2%, the largest decade; 1950-79 = 64.7%; built 2000 or later = 20.0%)
        {
          type: "p",
          text: "About two-thirds of Clyde Hill's homes were built in the 1950s, 1960s and 1970s, and the 1960s alone account for roughly a third, according to Census Bureau estimates. About one in five homes went up in 2000 or later, mostly as rebuilds on existing lots. With a city this small the estimates carry a wide margin, but the pattern is easy to see from the street.",
        },
        // source: https://censusreporter.org/data/table/?table=B25024&geo_ids=16000US5313365 (ACS 2020-2024 5-year, B25024: 1-unit detached = 98.2%)
        { type: "h3", text: "The 1950s to 1970s houses" },
        {
          type: "p",
          text: "Clyde Hill's original homes are mostly ramblers, daylight basements and split-levels with wood siding, wide eaves and big picture windows aimed at the lake or the mountains. After 50 or more years they tend to have many layers of paint on trim and siding, tired window glazing, and fascia and soffits that have taken decades of weather. Prep is most of the job: scraping, sanding, wood repair, spot priming and caulking.",
        },
        { type: "h3", text: "New custom homes" },
        {
          type: "p",
          text: "The newer houses are larger, with fiber cement or stucco, painted wood or composite trim, tall entries and a lot of interior millwork: paneled walls, built-ins, coffered ceilings and stair railings. Here the work is about finish quality. Smooth sprayed trim, crisp cut lines at stone and tile, and cabinet finishes that hold up to daily use matter more than scraping.",
        },
      ],
    },
    {
      heading: "Lead-safe painting for Clyde Hill's older homes",
      id: "clyde-hill-lead",
      body: [
        // source: https://censusreporter.org/data/table/?table=B25034&geo_ids=16000US5313365 (ACS 2020-2024 5-year: built before 1980 = 65.6%)
        {
          type: "p",
          text: "Close to two-thirds of Clyde Hill's housing was built before 1980, so many homes here likely have lead paint under newer coats. If your house was built before 1978 and the job will disturb old paint, we treat it as a lead-safe job.",
        },
        {
          type: "ul",
          items: [
            "We follow EPA RRP lead-safe work practices whenever we disturb paint in a pre-1978 home.",
            "Work areas get plastic sheeting and dust control, with no dry-sanding old paint into the air.",
            "Paint chips are collected, not left in planting beds and lawns.",
            "Original wood windows and trim get the same care as the siding, since rubbing surfaces are a common source of lead dust.",
          ],
        },
      ],
    },
    {
      heading: "Weather on the hill: views, wind and sun",
      id: "clyde-hill-climate",
      body: [
        // source: https://en.wikipedia.org/wiki/Clyde_Hill,_Washington (summit 392 feet above sea level; borders Bellevue, Kirkland, Medina, Yarrow Point and Hunts Point)
        {
          type: "p",
          text: "Clyde Hill rises to about 390 feet, and many homes are built to face west toward Lake Washington and Seattle or south toward Mount Rainier. Those view sides are also the sides that take the most afternoon sun and wind. Paint and stain on west and south walls, decks and front doors fade and dry out faster than on the rest of the house.",
        },
        {
          type: "p",
          text: "The dry season, roughly June through September, is when exterior work belongs. On hot afternoons we work the sunny faces earlier in the day so paint doesn't dry too fast and leave lap marks. North walls and lots under large trees stay damp longer, so we check for mildew and moisture there before priming.",
        },
      ],
    },
    {
      heading: "Clyde Hill permits, licenses and work hours",
      id: "clyde-hill-rules",
      confirm: PERMIT,
      body: [
        // source: https://cms2.revize.com/revize/clydehill/Documents/Government/Departments/Building%20and%20Planning/Permits/Building%20Permit/Building%20Project%20Guide%202025.pdf (permits required for all non-exempted construction; business license required for anyone doing business in city limits; construction hours Mon to Fri 7am to 6pm, weekends and holidays 10am to 4pm)
        {
          type: "p",
          text: "Clyde Hill runs its own building department and has clear rules for work in town. The city requires permits for construction that isn't exempt, requires a Clyde Hill business license for anyone doing business in city limits, and sets construction hours of 7am to 6pm on weekdays and 10am to 4pm on weekends and holidays.",
        },
        {
          type: "p",
          text: "A straight repaint usually isn't permitted work, but if we find rot that turns into replacing siding or structural trim, we'll stop and talk with you about whether a permit is needed before going further. Our crew schedule follows the city's hours, and we keep trucks and materials organized so neighbors aren't blocked on narrow streets.",
          confirm: "Hunter/Erik: confirm we hold (or will get) a Clyde Hill business license before any job in city limits.",
        },
      ],
    },
    {
      heading: "What we paint in Clyde Hill",
      id: "clyde-hill-services",
      body: [
        {
          type: "p",
          text: "For original homes, [exterior painting](/services/exterior-painting) starts with lead-safe prep and wood repair on the eaves, fascia and window trim. For new custom homes, [millwork painting](/services/millwork-painting) covers built-ins, paneling, railings and trim, and [cabinet painting](/services/cabinet-painting) gives kitchens and baths a sprayed, durable finish.",
        },
        {
          type: "p",
          text: "Specialty finishes, accent walls and color matching for a remodel fall under [custom painting](/services/custom-painting). Every [written estimate](/estimate) lists each room and surface, so there are no surprises about what's included.",
        },
        {
          type: "callout",
          title: "Respecting your street",
          text: "We work only within Clyde Hill's construction hours, and we leave the site clean and orderly every evening.",
          confirm: PROMISE,
        },
      ],
    },
  ],
  neighborhoods: [
    { name: "Clyde Hill (city limits)", note: "Hilltop and slope streets inside the city; mid-century homes and rebuilds.", confirm: SERVE },
    { name: "Vuecrest", note: "Bellevue neighborhood just south of Clyde Hill, with older homes.", confirm: SERVE },
    { name: "Medina", note: "Lakeside town just west of Clyde Hill.", confirm: SERVE },
    { name: "Yarrow Point", note: "Small point community to the north across SR 520.", confirm: SERVE },
    { name: "Hunts Point", note: "Waterfront point community next to Yarrow Point.", confirm: SERVE },
    { name: "Northwest Bellevue", note: "Older streets between Clyde Hill and downtown Bellevue.", confirm: SERVE },
  ],
  faqs: [
    {
      id: "clyde-hill-wa-permit",
      question: "Do I need a permit to repaint my house in Clyde Hill?",
      answer: [
        "Usually not for a straight repaint, but Clyde Hill requires permits for non-exempt construction, so wood or siding replacement can change that.",
        "If repairs grow beyond trim and small sections, we'll flag it and check with the city before continuing.",
      ],
      confirm: PERMIT,
    },
    {
      id: "clyde-hill-wa-hours",
      question: "What hours can painters work in Clyde Hill?",
      answer: [
        "Clyde Hill's construction hours are 7am to 6pm Monday through Friday and 10am to 4pm on weekends and holidays.",
        "We schedule our crew days inside those hours, and most jobs run on weekdays.",
      ],
    },
    {
      id: "clyde-hill-wa-lead",
      question: "My Clyde Hill house was built in the 1960s. Does it need lead-safe painting?",
      answer: [
        "Yes, if the work will disturb old paint, a home built before 1978 should be painted using lead-safe practices.",
        "We follow EPA RRP lead-safe practices on those jobs, and containment and cleanup are listed in the written quote.",
      ],
    },
    {
      id: "clyde-hill-wa-new-home",
      question: "Do you paint interiors in new custom homes?",
      answer: [
        "Yes, interiors in new custom homes are a good fit for us, including trim, built-ins, paneling and cabinets.",
        "We walk the house with you, agree on sheen and color for each surface, and write it all into the estimate before work starts.",
      ],
    },
  ],
  nearby: ["medina-wa", "bellevue-wa", "kirkland-wa"],
  updatedAt: "2026-10-26",
};

export default page;
