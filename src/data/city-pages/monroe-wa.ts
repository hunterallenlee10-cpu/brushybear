import type { CityPage } from "@/data/types";

const SERVE = "Hunter/Erik: confirm we serve this area";
const PROMISE = "Promise: confirm with Erik";

const page: CityPage = {
  slug: "monroe-wa",
  title: "House Painters in Monroe, WA",
  metaDescription:
    "Painters in Monroe, WA for early-1900s homes near downtown and 1990s to 2010s subdivisions. Lead-safe prep, valley-weather scheduling and a written quote.",
  h1: "House painters in Monroe for old town homes and newer subdivisions",
  eyebrow: "Serving Monroe, WA",
  intro: [
    "Brushy Bear Painters paints homes in Monroe, where the Skykomish and Snoqualmie rivers meet at the edge of the Cascade foothills. The city has two very different kinds of houses: a small core of early-1900s homes near downtown, and a much larger ring of subdivisions built since 1990.",
    "We're a new company, and every job runs on the same written steps: a walkthrough, a quote that lists every surface, prep matched to your house, and a final walkthrough. This page covers what each kind of Monroe home needs, and how the valley weather shapes an exterior schedule.",
  ],
  sections: [
    {
      heading: "Monroe's housing: an old town core and a 1990s boom",
      id: "monroe-homes",
      confirm: SERVE,
      body: [
        // source: https://censusreporter.org/data/table/?table=B25034&geo_ids=16000US5346685 (ACS 2020-2024 5-year, B25034: 6,367 units; 1990-99 28.0%; 2000 or later 41.4%; 1939 or earlier 8.8%; built before 1980 22.1%; compare Lynnwood 1.2% and Mill Creek 0.9% built 1939 or earlier at geo_ids 16000US5340840 and 16000US5345865)
        // source: https://en.wikipedia.org/wiki/Monroe,_Washington (population 4,278 in 1990 and 13,795 in 2000; incorporated 1902; early 20th-century downtown buildings)
        {
          type: "p",
          text: "Monroe roughly tripled in population during the 1990s, and its housing shows it. Census Bureau estimates put about seven in ten Monroe homes in 1990 or later. Yet close to one in eleven was built in 1939 or earlier, a far bigger share of very old homes than Lynnwood or Mill Creek.",
        },
        { type: "h3", text: "Early-1900s homes near downtown" },
        {
          type: "p",
          text: "The older houses near Main Street date from the years after the town incorporated in 1902. They usually have old-growth wood siding, tall wood windows, porches with turned posts or railings, and many layers of paint, some of it lead-based. These homes need careful scraping, wood repair rather than replacement where we can, and primer chosen for bare old wood.",
        },
        { type: "h3", text: "1990s to 2010s subdivisions" },
        {
          type: "p",
          text: "The newer neighborhoods on the hills north of town and around Fryelands are mostly two-story homes with fiber cement or composite lap siding and cedar accents. The 1990s homes are now due for a second or third repaint: failed caulk, faded south walls, and trim that has taken water at corners and garage doors.",
          confirm: "Confirm that Monroe's 1990s and newer subdivisions are mostly fiber cement or composite siding.",
        },
      ],
    },
    {
      heading: "Lead-safe painting for Monroe's oldest homes",
      id: "monroe-lead",
      body: [
        {
          type: "p",
          text: "Any Monroe home built before 1978 gets lead-safe work practices whenever we disturb old paint, and for the pre-1940 houses near downtown, we assume lead is present. Lead paint was banned for homes in 1978, and the oldest houses often have it in the bottom layers on siding, trim, porches and windows.",
        },
        {
          type: "ul",
          items: [
            "We follow EPA RRP (Renovation, Repair and Painting) lead-safe work practices on pre-1978 homes.",
            "Ground covers and containment keep chips out of yards and gardens.",
            "Wet scraping and dust control replace dry-sanding of old paint.",
            "Porch floors, railings and window sashes get extra care because they wear and make dust.",
          ],
        },
      ],
    },
    {
      heading: "River valley weather and Monroe exteriors",
      id: "monroe-climate",
      body: [
        // source: https://en.wikipedia.org/wiki/Monroe,_Washington (about 48 inches of precipitation a year vs Everett's 33; 177 precipitation days; south and east edges along the Skykomish in the 100-year flood hazard zone)
        {
          type: "p",
          text: "Monroe gets noticeably more rain than the cities on the Sound: about 48 inches a year, compared with about 33 in Everett. That can mean a shorter, less predictable painting season.",
        },
        {
          type: "p",
          text: "Low ground near the rivers and Lake Tye can sit in fog and heavy dew on cool mornings, especially as fall comes on. Siding that looks dry at noon may have been wet at 8 a.m. We wait for walls to dry before priming, start on the sunny sides, and save shaded walls for the warmest part of the day.",
          confirm: "Erik: confirm valley fog and morning dew match what we see on Monroe jobs.",
        },
        {
          type: "p",
          text: "Exteriors run in the dry season, roughly June through September, and we leave extra buffer days in Monroe schedules. If rain interrupts the job, the lost days are rescheduled first and never charged.",
          confirm: PROMISE,
        },
      ],
    },
    {
      heading: "HOAs, downtown and permits in Monroe",
      id: "monroe-hoa",
      confirm: "Confirm with the City of Monroe that a straight repaint needs no permit, and that its Downtown Design Guidelines apply to commercial buildings in the downtown core rather than houses.",
      body: [
        {
          type: "p",
          text: "A house repaint usually doesn't need a city permit, but many of Monroe's newer subdivisions have HOAs that review exterior color changes. Send us your association's rules with your estimate request, and we'll help you put together color names and samples for the submission.",
        },
        // source: https://monroewa.gov/DocumentCenter/View/16791/Mean-Bean---Downtown-Design-Standards (Downtown Design Guidelines focus on the design character of the historic commercial center)
        {
          type: "p",
          text: "For storefronts and buildings in the historic downtown, the city's Downtown Design Guidelines can affect exterior changes. Business owners can ask us about [commercial painting](/services/commercial-painting) and we'll check what applies before colors are chosen.",
        },
      ],
    },
    {
      heading: "Painting services for Monroe homes",
      id: "monroe-services",
      body: [
        {
          type: "p",
          text: "Our [exterior painting](/services/exterior-painting) covers both ends of Monroe's housing: patient prep and wood repair on old town homes, and caulk, trim repair and even coverage on newer two-stories. Rural lots with long fence lines and decks are a good fit for [deck and fence staining](/services/decks-and-fences-painting).",
        },
        {
          type: "p",
          text: "Inside, [interior painting](/services/interior-painting) covers walls, ceilings, trim and doors, and older homes with original woodwork can get [millwork painting](/services/millwork-painting). [Cabinet painting](/services/cabinet-painting) updates builder-grade kitchens in the 1990s and 2000s homes.",
        },
        {
          type: "p",
          text: "Get started with a [free estimate](/estimate) or an [instant estimate](/instant-estimate), and tell us roughly when your house was built.",
        },
      ],
    },
  ],
  neighborhoods: [
    // source: https://en.wikipedia.org/wiki/Monroe,_Washington (historic downtown; Fryelands residential and industrial area in western Monroe; Lake Tye Park 64.5 acres; northern hills annexed in the 2000s; fairgrounds northwest of downtown; flood hazard zone along the Skykomish)
    { name: "Historic downtown", note: "Early-1900s homes near Main Street; plan for lead-safe prep.", confirm: SERVE },
    { name: "Fryelands", note: "Residential streets in west Monroe near Lake Tye.", confirm: SERVE },
    { name: "Lake Tye", note: "Homes around the park and lake on the west edge of town.", confirm: SERVE },
    { name: "North hills", note: "Subdivisions on the hills annexed in the 2000s.", confirm: SERVE },
    { name: "Fairgrounds area", note: "Neighborhoods near the Evergreen State Fairgrounds, northwest of downtown.", confirm: SERVE },
    { name: "Chain Lake Road", note: "Homes along the road on the north side of town.", confirm: "Confirm the Chain Lake Road area is inside or next to Monroe city limits, then confirm we serve it." },
    { name: "Woods Creek", note: "East side homes along Woods Creek Road; wooded and damp.", confirm: "Confirm the Woods Creek area is part of our Monroe service area." },
    { name: "Skykomish riverside", note: "South and east edge near the river; fog and moisture.", confirm: SERVE },
  ],
  faqs: [
    {
      id: "monroe-old-house",
      question: "Can you paint an old house near downtown Monroe?",
      answer: [
        "Yes, early-1900s homes are a good fit for us, and they get lead-safe prep, wood repair and primers suited to old bare wood.",
        "Expect more prep time than on a newer house. The written quote spells out how much scraping and repair we plan for.",
      ],
    },
    {
      id: "monroe-rain",
      question: "Does Monroe's extra rain change when you paint?",
      answer: [
        "Yes, we aim for July and August and keep buffer days in every Monroe exterior schedule.",
        "Monroe averages more rain than the cities on the Sound, and valley mornings can be damp even in summer, so we check that siding is dry before we prime.",
      ],
    },
    {
      id: "monroe-hoa",
      question: "Do I need HOA approval to paint my house in Monroe?",
      answer: [
        "If your home is in a subdivision with an HOA, you probably need approval to change exterior colors.",
        "Check your CC&Rs or ask the board, and get approval before you set a start date. We can help with the color names and samples the form asks for.",
      ],
    },
  ],
  nearby: ["snohomish-wa", "woodinville-wa", "mill-creek-wa"],
  updatedAt: "2026-10-26",
};

export default page;
