import type { CityPage } from "@/data/types";

const SERVE = "Hunter/Erik: confirm we serve this area";
const PROMISE = "Promise: confirm with Erik";
const HOA_PERMIT =
  "Confirm with the City of Woodinville that a straight exterior repaint needs no building permit; confirm which Woodinville subdivisions (for example in the Wellington and West Ridge areas) require HOA color approval, and whether exterior work on a designated Woodinville landmark needs city review.";

const page: CityPage = {
  slug: "woodinville-wa",
  title: "House Painters in Woodinville, WA",
  metaDescription:
    "Woodinville, WA painters for 1980s cedar homes, newer subdivisions and acreage with barns and fences. Valley fog timing, HOA color help and lead-safe prep.",
  h1: "Woodinville house painters for 1980s cedar homes, hillside subdivisions and acreage",
  eyebrow: "Serving Woodinville, WA",
  intro: [
    "Brushy Bear Painters is a new residential painting company serving Woodinville, from the subdivisions in Wellington and West Ridge to the acreage on Hollywood Hill and the streets around Lake Leota. We do interior and exterior painting, cabinets, drywall repair, and deck, fence and outbuilding staining.",
    "Woodinville's homes skew toward the 1980s and later, many with cedar siding and big decks, and plenty sit on larger lots with fences, barns and sheds that need paint or stain too. Between the Sammamish Valley fog and the tall firs on the hills, timing and prep matter as much as the paint itself. This page covers what we look for in Woodinville homes and how we plan the work.",
  ],
  sections: [
    {
      heading: "Woodinville's homes: 1980s cedar and newer subdivisions",
      id: "woodinville-homes",
      confirm: SERVE,
      body: [
        // source: https://censusreporter.org/data/table/?table=B25034&geo_ids=16000US5379590 (ACS 2024 5-year, B25034: 5,626 units; 1980s = 23.8%, the largest single decade; 2000 or later = 43.7%; before 1980 = 19.5%)
        {
          type: "p",
          text: "The 1980s are the biggest single decade for Woodinville housing, with nearly a quarter of homes, and about 44% were built in 2000 or later, according to the Census Bureau's 2020 to 2024 American Community Survey. Only about one in five homes inside city limits predates 1980.",
        },
        // source: https://en.wikipedia.org/wiki/Woodinville,_Washington (incorporated 1993; city defines eleven neighborhoods including East and West Wellington, Upper and Lower West Ridge, Reinwood Leota, Woodinville Heights)
        {
          type: "p",
          text: "Much of that 1980s building happened before Woodinville became a city in 1993, when subdivisions filled in the hills west and north of the valley. Those houses are now on their third or fourth paint cycle, and the original trim and siding are showing their age.",
        },
        { type: "h3", text: "What 1980s Woodinville homes usually need" },
        {
          type: "ul",
          items: [
            "Cedar lap or bevel siding that has weathered unevenly, with checking and gray patches on the sunny sides. It needs a good wash, light sanding and a primer suited to cedar so tannins don't bleed through.",
            "Hardboard siding, common in that era, that swells at the bottom edges once water gets in. We seal or replace damaged pieces before painting.",
            "T1-11 panels on garages and lower walls with soft bottom edges.",
            "Large decks and railings that take a lot of weather and need regular staining.",
          ],
        },
        { type: "h3", text: "Newer homes" },
        {
          type: "p",
          text: "The 2000s and 2010s homes in town and on the ridges are more likely to have fiber cement siding and composite trim. They need less scraping but careful caulking and even coverage, since fiber cement shows lap marks and missed joints.",
        },
      ],
    },
    {
      heading: "Valley fog, tall firs and Woodinville's painting season",
      id: "woodinville-climate",
      body: [
        {
          type: "p",
          text: "Woodinville's exterior season is the same dry stretch as the rest of the Eastside, roughly June through September. Paint needs dry wood and temperatures above the label minimum through the full drying time.",
        },
        { type: "h3", text: "The Sammamish Valley floor" },
        {
          type: "p",
          text: "Homes near the valley floor, the river and the farmland around the wineries can sit in fog and heavy dew on late summer and fall mornings. We wait until siding is dry before painting, which often means later morning starts in September and a shorter painting day.",
        },
        { type: "h3", text: "Wooded hills" },
        {
          type: "p",
          text: "On the hills in Wellington, West Ridge and around Lake Leota, many lots sit under tall Douglas firs and cedars. North walls grow moss, gutters clog and overflow onto fascia, and decks stay damp for days after rain. Washing, mildew treatment and drying time are standard prep on those houses.",
        },
        { type: "h3", text: "Open acreage" },
        {
          type: "p",
          text: "Homes on open pasture land take full sun and wind. South and west walls, barn sides and fence lines fade and dry out fastest, and stain on those surfaces needs refreshing more often than paint on the house.",
        },
      ],
    },
    {
      heading: "Lead-safe work on older Woodinville homes",
      id: "woodinville-lead",
      body: [
        // source: https://censusreporter.org/data/table/?table=B25034&geo_ids=16000US5379590 (ACS 2024 5-year: 19.5% of Woodinville housing units built before 1980; 1970s = 12.5%)
        {
          type: "p",
          text: "About one in five Woodinville homes was built before 1980, most of them in the 1970s, and older farmhouses and ramblers on the county land around the city can be older still. Any home built before 1978 can have lead paint under newer coats.",
        },
        {
          type: "p",
          text: "When a job will disturb old paint on a pre-1978 home, we follow EPA RRP lead-safe work practices: plastic containment, wet scraping instead of dry sanding, dust control and full cleanup of chips and debris. Barns and outbuildings of that age get the same care.",
        },
      ],
    },
    {
      heading: "City limits, HOAs and landmarks",
      id: "woodinville-hoa",
      confirm: HOA_PERMIT,
      body: [
        {
          type: "p",
          text: "A straight repaint usually doesn't need a city permit, but many Woodinville subdivisions built since the 1980s have HOAs that review exterior colors. Send us your association's palette or guidelines with your estimate request, and we'll help put together the color submission and schedule after approval.",
        },
        {
          type: "p",
          text: "A Woodinville mailing address doesn't always mean you're inside the city. Hollywood Hill and much of the large-lot land to the north and east are in unincorporated King County, so county rules apply there. The King County parcel viewer will tell you which side of the line you're on.",
          confirm: "Confirm that Hollywood Hill and the large-lot areas north and east of the city are in unincorporated King County.",
        },
        // source: https://en.wikipedia.org/wiki/Woodinville,_Washington (city-designated landmarks: Hollywood Farm, 1910; Hollywood Schoolhouse, 1912; Woodinville School, 1936)
        {
          type: "p",
          text: "Woodinville also has a few designated landmarks, including Hollywood Farm, the Hollywood Schoolhouse and the old Woodinville School. If you own or manage one of them, ask the city what review applies before exterior painting.",
        },
      ],
    },
    {
      heading: "What we paint in Woodinville",
      id: "woodinville-services",
      body: [
        {
          type: "p",
          text: "[Exterior painting](/services/exterior-painting) on a 1980s Woodinville house usually means washing, sanding weathered cedar, replacing swollen hardboard, caulking and priming before two finish coats. On larger lots, [deck, fence and outbuilding staining](/services/decks-and-fences-painting) is often as big a part of the job as the house.",
        },
        {
          type: "p",
          text: "Inside, homes from the 1980s and 1990s often have oak trim and oak cabinets that owners want to brighten. [Millwork painting](/services/millwork-painting) handles trim, doors and stair rails, [cabinet painting](/services/cabinet-painting) updates oak kitchens without a remodel, and [interior painting](/services/interior-painting) covers walls and ceilings. For tasting rooms and shops in town, we also take on [commercial painting](/services/commercial-painting).",
          confirm: "Hunter/Erik: confirm we take on commercial work such as tasting rooms and shops in Woodinville.",
        },
        {
          type: "callout",
          title: "A written scope for every building",
          text: "If your property has a house, a barn and a fence line, the [written estimate](/estimate) lists each one separately so you can choose what to do now and what to leave for next year.",
          confirm: PROMISE,
        },
      ],
    },
  ],
  neighborhoods: [
    { name: "West Wellington", note: "Established subdivisions on the hill west of downtown; tall trees and moss.", confirm: SERVE },
    { name: "East Wellington", note: "Single-family streets near the Wellington area hills.", confirm: SERVE },
    { name: "Upper West Ridge", note: "Newer homes on the hill above the Sammamish Valley.", confirm: SERVE },
    { name: "Lower West Ridge", note: "Homes on the lower slopes closer to the valley floor; morning fog.", confirm: SERVE },
    { name: "Reinwood Leota", note: "Wooded streets in the north end near Lake Leota.", confirm: SERVE },
    { name: "Woodinville Heights", note: "One of the city's eleven defined neighborhoods.", confirm: SERVE },
    { name: "Wedge", note: "One of the city's eleven defined neighborhoods.", confirm: SERVE },
    { name: "Town Center", note: "Townhomes and apartments near downtown; mostly interior work.", confirm: SERVE },
    { name: "Hollywood Hill", note: "Acreage and equestrian lots with Woodinville addresses; barns and fences.", confirm: SERVE },
  ],
  faqs: [
    {
      id: "woodinville-cedar-siding",
      question: "Can you paint the weathered cedar siding on my 1980s Woodinville house?",
      answer: [
        "Yes, weathered cedar can be painted once it's cleaned, the loose gray fibers are sanded off and it's primed with a stain-blocking primer. Skipping the primer lets cedar tannins bleed through light colors as brown streaks.",
        "Boards with deep splits or soft ends get replaced first. We note those at the walkthrough so they're in the written quote.",
      ],
    },
    {
      id: "woodinville-barns-fences",
      question: "Do you paint barns, sheds and long fence lines on acreage?",
      answer: [
        "Yes, we paint and stain barns, sheds, outbuildings and fences along with the house.",
        "We quote each structure separately, so you can do the house this year and the barn next year if that works better.",
      ],
      confirm: "Hunter/Erik: confirm we paint barns and outbuildings, and that we quote each structure separately.",
    },
    {
      id: "woodinville-hoa-permit",
      question: "Do I need a permit or HOA approval to repaint in Woodinville?",
      answer: [
        "Repainting a house usually doesn't need a city permit, but HOAs often require approval for exterior color changes. Many subdivisions in Wellington and West Ridge have covenants, so check with your board before choosing colors.",
        "If your property is outside city limits in unincorporated King County, county rules apply instead.",
      ],
      confirm: HOA_PERMIT,
    },
    {
      id: "woodinville-best-months",
      question: "When should I schedule exterior painting in Woodinville?",
      answer: [
        "Schedule exterior painting for the dry season, roughly June through September, with July and August the most reliable.",
        "Valley-floor homes may need later morning starts in September because of fog and dew. Interior and cabinet work can be done any time of year.",
      ],
    },
  ],
  nearby: ["bothell-wa", "kirkland-wa", "redmond-wa", "kenmore-wa"],
  updatedAt: "2026-10-26",
};

export default page;
