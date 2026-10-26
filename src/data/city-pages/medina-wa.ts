import type { CityPage } from "@/data/types";

const SERVE = "Hunter/Erik: confirm we serve this area";
const PROMISE = "Promise: confirm with Erik";
const CITY_RULES =
  "Confirm with City of Medina Development Services that a repaint with no siding or structural work needs no building permit or Construction Activity Permit, and that the 8 a.m. to 5 p.m. Monday to Saturday window applies to painting crews.";

const page: CityPage = {
  slug: "medina-wa",
  title: "House Painters in Medina, WA",
  metaDescription:
    "Painters in Medina, WA for waterfront homes, 1920s estates and new custom builds. Fine-finish interiors, lake-exposure exterior prep and work within city hours.",
  h1: "Painters in Medina for lakefront homes, older estates and custom builds",
  eyebrow: "Serving Medina, WA",
  intro: [
    "Brushy Bear Painters paints homes in Medina, the small city on the Lake Washington peninsula between Seattle and Bellevue. Houses here range from 1920s estates and 1950s ramblers to large custom homes finished in the last few years, and each one needs its own prep plan.",
    "We're a new company, and we keep things simple: a walkthrough, a written quote that names every surface and product, and crews that follow Medina's work hours and keep the site tidy. This page covers Medina's housing, the lake weather, and the city rules that shape a paint job here.",
  ],
  sections: [
    {
      heading: "Medina homes, from 1920s estates to new custom builds",
      id: "medina-homes",
      confirm: SERVE,
      body: [
        // source: https://en.wikipedia.org/wiki/Medina,_Washington (platted 1914, incorporated August 19, 1955; first mansions built in the 1920s, nicknamed the "Gold Coast")
        // source: https://censusreporter.org/data/table/?table=B25034&geo_ids=16000US5344725 (ACS 2020-2024 5-year, B25034: about 1,090 units; built before 1980 57.6%; 1949 or earlier 12.8%; 2000 or later 20.5%; small sample, wide margins of error)
        {
          type: "p",
          text: "Medina's housing is older than its reputation suggests. Census Bureau estimates put more than half of the city's homes before 1980, and roughly one in eight before 1950. At the same time, about one in five has been built since 2000, often on lots where an older house came down.",
        },
        { type: "h3", text: "Older estates and mid-century homes" },
        {
          type: "p",
          text: "The first large homes went up along the shoreline in the 1920s, and much of the rest of the city filled in after World War II. On these houses we expect old-growth wood siding and trim with many paint layers, original windows and built-ins worth saving, and plaster walls inside that need careful patching rather than a quick skim. Any pre-1978 home gets EPA RRP lead-safe work practices whenever old paint is disturbed.",
        },
        { type: "h3", text: "New custom homes" },
        {
          type: "p",
          text: "Newer Medina homes tend to have long runs of painted millwork, tall ceilings, large window walls and mixed exterior materials like fiber cement, stucco, stone and stained wood. The prep is lighter, but the finish standard is higher: tight caulk lines, no lap marks under raking light, and sprayed or brushed trim to match the original finish.",
        },
      ],
    },
    {
      heading: "Lake exposure and Medina exteriors",
      id: "medina-climate",
      body: [
        // source: https://en.wikipedia.org/wiki/Medina,_Washington (peninsula in Lake Washington, water on all sides except the Clyde Hill and Hunts Point borders; 1.44 sq mi land)
        {
          type: "p",
          text: "Medina has Lake Washington on almost every side, so no house here is far from the water. Lake-facing walls take wind-driven rain in winter and strong reflected sun in summer, and waterfront decks and docks stay damp longer in the morning than you'd expect from the forecast.",
        },
        {
          type: "ul",
          items: [
            "**West- and south-facing walls** fade and chalk first, so we talk through sheen and color choices for those sides.",
            "**Stained wood** on decks, railings and boathouses needs regular recoating; we clean, brighten and reseal it rather than painting over a failing finish.",
            "**Shaded walls under large trees** grow mildew, which gets washed and treated before any primer.",
          ],
        },
        {
          type: "p",
          text: "Exteriors are scheduled in the dry season, roughly June through September, when siding stays dry and temperatures stay above the paint's label minimum. Interior and millwork projects run all year.",
        },
        {
          type: "p",
          text: "If rain interrupts an exterior job, the lost days are rescheduled first and never charged.",
          confirm: PROMISE,
        },
      ],
    },
    {
      heading: "Medina city rules: work hours, trees and job sites",
      id: "medina-rules",
      confirm: CITY_RULES,
      body: [
        // source: https://www.medina-wa.gov/node/16951 (construction allowed Monday to Saturday 8:00 a.m. to 5:00 p.m.; no work on Sunday and observed holidays; encroachment into right of way and construction vehicle intrusions listed as compliance issues)
        {
          type: "p",
          text: "Medina limits construction work to Monday through Saturday, 8 a.m. to 5 p.m., with no work on Sundays or observed holidays. We plan our crew days inside those hours, including setup, pressure washing and cleanup, and we keep trucks and materials out of the city right of way.",
        },
        // source: https://en.wikipedia.org/wiki/Medina,_Washington (tree protection codified since 1972, one of the most extensive codes in the region; Tree City USA since 2006)
        // source: https://www.medina-wa.gov/node/16951 (cutting down trees without a permit listed as a compliance issue)
        {
          type: "p",
          text: "Medina has protected trees by code since 1972, and removing a tree without a permit is a code violation. We don't cut or limb trees to make room for ladders. We work around them, tie back branches where we can, and tell you before the job if a branch against the siding needs an arborist.",
        },
        // source: https://www.medina-wa.gov/sites/default/files/fileattachments/development_services/page/17820/cap-26-005_stamped.pdf (example Medina Construction Activity Permit conditions for a permitted residential project)
        {
          type: "p",
          text: "Larger permitted projects in Medina carry a Construction Activity Permit with site conditions. A repaint usually doesn't, but if your painting is part of a remodel that has one, send it to us and we'll follow its conditions too.",
        },
      ],
    },
    {
      heading: "Painting services for Medina homes",
      id: "medina-services",
      body: [
        {
          type: "p",
          text: "Inside, [interior painting](/services/interior-painting) and [millwork painting](/services/millwork-painting) cover walls, ceilings, paneled rooms, built-ins and stair rails, with floors and furniture protected throughout. [Cabinet painting](/services/cabinet-painting) is done with a durable sprayed finish, and [custom painting](/services/custom-painting) covers accent finishes and specialty work.",
        },
        {
          type: "p",
          text: "Outside, [exterior painting](/services/exterior-painting) starts with washing, repairs, caulking and priming, and [deck and fence staining](/services/decks-and-fences-painting) covers lakeside decks and railings. Drywall repairs after a remodel are handled with [drywall painting and patching](/services/drywall-painting).",
        },
        {
          type: "p",
          text: "To start, request a [free estimate](/estimate). We walk the house with you and put the full scope in writing.",
        },
      ],
    },
  ],
  neighborhoods: [
    // source: https://www.medina-wa.gov/node/2533 (city parks: Fairweather Nature Preserve in Northpoint, Medina Beach Park at 501 Evergreen Point Road, Medina Park at NE 12th St and 82nd Ave NE, Viewpoint Park, Points Loop Trail)
    { name: "Evergreen Point", note: "North peninsula along Evergreen Point Road; lake on both sides.", confirm: SERVE },
    { name: "Northpoint", note: "Wooded streets around Fairweather Nature Preserve; shade and mildew.", confirm: SERVE },
    { name: "West Medina waterfront", note: "The 1920s \"Gold Coast\" shoreline; older estates and docks.", confirm: SERVE },
    { name: "Medina Beach and City Hall area", note: "Lakeside homes near the public beach on Evergreen Point Road.", confirm: SERVE },
    { name: "Medina Park area", note: "Inland streets around the park at NE 12th Street and 82nd Avenue NE.", confirm: SERVE },
    { name: "Points Loop", note: "Homes along the city trail near SR 520.", confirm: "Confirm the Points Loop Trail runs near SR 520 in Medina, then confirm we serve this area." },
    { name: "Medina Heights", note: "Inland homes toward the Clyde Hill border.", confirm: "Confirm \"Medina Heights\" is a name locals use for this part of Medina, then confirm we serve it." },
  ],
  faqs: [
    {
      id: "medina-work-hours",
      question: "What hours can painters work in Medina?",
      answer: [
        "Medina allows construction work Monday through Saturday from 8 a.m. to 5 p.m., with no work on Sundays or observed holidays.",
        "We schedule every crew day inside those hours, so plan on a few more working days than the same job might take somewhere with longer hours.",
      ],
      confirm: CITY_RULES,
    },
    {
      id: "medina-permit",
      question: "Do I need a permit to repaint my house in Medina?",
      answer: [
        "A straight repaint usually doesn't need a building permit, but Medina's work hours, tree rules and right-of-way rules still apply.",
        "If painting is part of a remodel with its own permit, its conditions cover our crew as well. Check with the city if you're unsure.",
      ],
      confirm: CITY_RULES,
    },
    {
      id: "medina-trees",
      question: "Will you trim trees to reach my siding?",
      answer: [
        "No, we don't cut trees or limbs; Medina's tree code requires permits for tree removal and we leave that work to you and an arborist.",
        "We plan ladders around trees and flag any branch that's touching the house at the walkthrough, so you have time to deal with it before we start.",
      ],
    },
    {
      id: "medina-lead-paint",
      question: "My Medina house was built in the 1950s. Does that change the job?",
      answer: [
        "Yes, a house built before 1978 gets lead-safe work practices any time old paint is disturbed.",
        "That means containment, dust control and careful cleanup under the EPA RRP rule. It also usually means more scraping and wood repair than on a newer home, which the written quote spells out.",
      ],
    },
  ],
  nearby: ["clyde-hill-wa", "bellevue-wa", "kirkland-wa"],
  updatedAt: "2026-10-26",
};

export default page;
