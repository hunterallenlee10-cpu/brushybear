import type { CityPage } from "@/data/types";

const SERVE = "Hunter/Erik: confirm we serve this area";
const PROMISE = "Promise: confirm with Erik";
const HOA_PERMIT =
  "Confirm with the City of Newcastle that a straight repaint needs no permit, and confirm which Newcastle communities (for example Olympus, China Creek, The Reserve, The Trails) have HOAs that review exterior colors.";

const page: CityPage = {
  slug: "newcastle-wa",
  title: "House Painters in Newcastle, WA",
  metaDescription:
    "Painters in Newcastle, WA for hillside homes from the 1980s to today. Help with HOA color approval, sun and shade prep on Cougar Mountain lots, written quotes.",
  h1: "House painters in Newcastle for hillside homes and HOA communities",
  eyebrow: "Serving Newcastle, WA",
  intro: [
    "Brushy Bear Painters paints homes in Newcastle, the city on the west slope of Cougar Mountain between Bellevue and Renton. It's one of the newest cities on the Eastside, and most of its homes are newer still: hillside subdivisions from the late 1980s on, many of them in HOAs.",
    "We're a new company too. What we offer is a clear process: a walkthrough, a written quote that lists every surface, help with HOA paperwork, and a final walkthrough before we call the job done. This page covers Newcastle homes, the hillside weather, and how to plan around both.",
  ],
  sections: [
    {
      heading: "Newcastle homes: mostly built since the late 1980s",
      id: "newcastle-homes",
      confirm: SERVE,
      body: [
        // source: https://censusreporter.org/data/table/?table=B25034&geo_ids=16000US5348645 (ACS 2020-2024 5-year, B25034: 5,723 units; 2010-19 30.3%; 2000 or later 48.6%; 1980-99 33.4%; built before 1980 18.1%)
        // source: https://en.wikipedia.org/wiki/Newcastle,_Washington (incorporated September 30, 1994; housing units 3,117 in 2000, 4,227 in 2010, 5,471 in 2020)
        {
          type: "p",
          text: "Newcastle didn't become a city until 1994, and its housing count has grown by more than half since 2000. Census Bureau estimates put nearly half of today's homes in 2000 or later, and about a third in the 1980s and 1990s. Fewer than one in five predates 1980.",
        },
        { type: "h3", text: "1980s and 1990s subdivisions" },
        // source: https://www.wicklundre.com/article/87/real-estate-activity-olympus-newcastle-may-2014 (Olympus first homes broke ground in 1987; 268 homes)
        {
          type: "p",
          text: "Communities like Olympus, where the first homes broke ground in 1987, are now on their second or third repaint. Expect dried-out caulk at windows and trim, faded and chalky south and west walls, and soft trim or fascia where gutters overflow. Cedar trim and siding on these homes need stain-blocking primer on any bare wood so tannins don't bleed through.",
        },
        { type: "h3", text: "Homes built since 2000" },
        {
          type: "p",
          text: "The newer neighborhoods, including much of China Creek and The Reserve, mostly have fiber cement lap siding, panel accents and composite trim. These homes often go a long time between paint jobs, so the first repaint is usually about faded color and failed caulk at the seams rather than peeling.",
          confirm: "Confirm China Creek and The Reserve are mostly 2000s and newer homes with fiber cement siding.",
        },
        {
          type: "p",
          text: "Older homes near Lake Boren and in the original Newcastle area may date from before 1978. Those get EPA RRP lead-safe work practices whenever old paint is disturbed.",
        },
      ],
    },
    {
      heading: "Hillside sun, shade and Newcastle exteriors",
      id: "newcastle-climate",
      body: [
        // source: https://en.wikipedia.org/wiki/Newcastle,_Washington (Cougar Mountain to the east, Lake Washington to the west; Coal Creek flows through the city from the Issaquah Alps to the lake)
        {
          type: "p",
          text: "Newcastle runs uphill from Lake Washington toward Cougar Mountain, so two houses a few streets apart can weather very differently. View lots facing west take full afternoon sun and wind, which fades paint and dries out deck stain. Lots along Coal Creek, China Creek and the greenbelts sit under tall firs and stay damp and shaded much of the year.",
        },
        {
          type: "ul",
          items: [
            "**West and south walls** on view lots: we talk through sheen and color, and paint them in the cooler part of the day in summer.",
            "**North walls and greenbelt sides**: washing, mildew treatment and enough drying time before primer.",
            "**Decks and railings**: cleaned and resealed before the sun-exposed boards split and gray.",
            "**Downhill walls**: tall faces on sloped lots get planned ladder or lift access at the walkthrough.",
          ],
        },
        {
          type: "p",
          text: "Exteriors run in the dry season, roughly June through September. If rain interrupts the job, the lost days are rescheduled first and never charged.",
          confirm: PROMISE,
        },
      ],
    },
    {
      heading: "HOA color approval in Newcastle",
      id: "newcastle-hoa",
      confirm: HOA_PERMIT,
      body: [
        {
          type: "p",
          text: "A repaint usually doesn't need a city permit, but many Newcastle subdivisions have HOAs that review exterior color changes. Some keep an approved palette, others ask for body, trim and door colors before work starts, and some want a notice even for a same-color repaint.",
        },
        {
          type: "ul",
          items: [
            "We ask for your HOA's rules and form at the walkthrough.",
            "We give you the paint brand, color names and sheens the form asks for.",
            "We can put up large samples so you and the committee see real colors on your siding.",
            "We schedule the start date after approval comes back.",
          ],
        },
      ],
    },
    {
      heading: "Painting services for Newcastle homes",
      id: "newcastle-services",
      body: [
        {
          type: "p",
          text: "Our [exterior painting](/services/exterior-painting) on Newcastle homes covers washing, caulk replacement, trim repair, priming and even coverage on tall hillside walls. Sun-baked decks and greenbelt fences get [deck and fence staining](/services/decks-and-fences-painting).",
        },
        {
          type: "p",
          text: "Inside, [interior painting](/services/interior-painting) handles two-story entries, stairwells and vaulted ceilings, and [cabinet painting](/services/cabinet-painting) can update 1990s and 2000s kitchens without a remodel. Associations planning a community repaint can ask about [HOA painting](/services/hoa-painting).",
        },
        {
          type: "p",
          text: "Request a [free estimate](/estimate) or try the [instant estimate](/instant-estimate). If you have an HOA, send its color rules along with your request.",
        },
      ],
    },
  ],
  neighborhoods: [
    // source: https://en.wikipedia.org/wiki/Newcastle,_Washington (named areas: East and West Olympus, Hazelwood, China Creek, China Falls, Lake Boren, The Reserve at Newcastle, The Trails at Newcastle, Newport Hills; Golf Club at Newcastle, 36 holes on about 350 acres)
    { name: "East and West Olympus", note: "Homes from the late 1980s on; due for repeat repaints.", confirm: SERVE },
    { name: "Hazelwood", note: "Established streets; tell us your build year so we can plan prep.", confirm: SERVE },
    { name: "China Creek", note: "Newer homes along the creek and greenbelt; shade and mildew.", confirm: SERVE },
    { name: "Lake Boren", note: "Homes near the lake and park close to downtown Newcastle.", confirm: SERVE },
    { name: "The Reserve at Newcastle", note: "Newer subdivision; ask us about HOA color submissions.", confirm: SERVE },
    { name: "The Trails at Newcastle", note: "Newer subdivision; we'll ask about color rules at the walkthrough.", confirm: "Confirm The Trails at Newcastle is a newer subdivision with an HOA, then confirm we serve it." },
    { name: "Golf Club area", note: "Hillside homes near the Coal Creek and China Creek courses; big views, strong sun.", confirm: SERVE },
    { name: "Newport Hills", note: "Established homes along the Bellevue border.", confirm: SERVE },
  ],
  faqs: [
    {
      id: "newcastle-hoa-approval",
      question: "Do I need HOA approval to paint my house in Newcastle?",
      answer: [
        "Often, yes. Many Newcastle subdivisions have HOAs, and most require approval before you change exterior colors.",
        "Check your CC&Rs or ask the board. We'll help with the color names, sheens and samples the form asks for, and start after approval comes back.",
      ],
      confirm: HOA_PERMIT,
    },
    {
      id: "newcastle-view-lots",
      question: "Why is the paint on my west wall fading faster than the rest of the house?",
      answer: [
        "West-facing walls on Newcastle view lots take the strongest afternoon sun, and UV breaks down paint faster there than anywhere else on the house.",
        "On a repaint we may suggest a different sheen or a more fade-resistant color for those walls, and we paint them in the cooler part of the day so the coating doesn't dry too fast.",
      ],
    },
    {
      id: "newcastle-steep-lots",
      question: "Can you paint a house on a steep Newcastle lot?",
      answer: [
        "Yes. Tall downhill walls are common here, and we plan ladders or a lift for them at the walkthrough.",
        "Access affects how long the job takes, so it's written into the quote up front.",
      ],
      confirm: "Erik: confirm we have ladders and lift access for tall downhill walls.",
    },
  ],
  nearby: ["bellevue-wa", "renton-wa", "issaquah-wa", "mercer-island-wa"],
  updatedAt: "2026-10-26",
};

export default page;
