import type { CityPage } from "@/data/types";

const SERVE = "Hunter/Erik: confirm we serve this area";
const PROMISE = "Promise: confirm with Erik";
const HOA_PERMIT =
  "Confirm with City of Bellevue Development Services that a straight repaint (no siding replacement) needs no building permit, and confirm which Bellevue subdivisions (for example on Cougar Mountain/Lakemont) require HOA color approval.";

const page: CityPage = {
  slug: "bellevue-wa",
  title: "House Painters in Bellevue, WA",
  metaDescription:
    "Painters in Bellevue, WA for 1950s ramblers, lakeside homes and hillside houses. Lead-safe prep, dry-season exteriors and HOA color help. Get a written quote.",
  h1: "House painters in Bellevue for mid-century ramblers, lake homes and hillside houses",
  eyebrow: "Serving Bellevue, WA",
  intro: [
    "Brushy Bear Painters is a residential painting company for Bellevue homeowners who want interior and exterior painting done on schedule, prepped properly and finished with a walkthrough. We're a new Eastside company, so we'll earn our name here one house at a time, using the same written steps on every job.",
    "Bellevue is a harder city to paint than it looks. A rambler in Lake Hills, a 1990s two-story on Cougar Mountain and a house near the water in Newport each need different prep, different coatings and a different schedule. This page covers what we look for in Bellevue homes, how the weather here affects paint, and what to sort out with your HOA before an exterior starts.",
  ],
  sections: [
    {
      heading: "What Bellevue's housing stock means for your paint job",
      id: "bellevue-homes",
      body: [
        // source: https://censusreporter.org/data/table/?table=B25034&geo_ids=16000US5305210 (ACS 2024 1-year, B25034 Year Structure Built: 69,039 units; 1950–1999 = 69.4%; pre-1980 = 43.4%)
        {
          type: "p",
          text: "Most of Bellevue's homes were built between 1950 and 2000, and the age of your house decides most of the prep. About 43% of the city's housing units were built before 1980, and another 28% went up in the 1980s and 1990s, according to the Census Bureau's 2024 American Community Survey.",
        },
        { type: "h3", text: "Mid-century ramblers and split-levels" },
        // source: https://old.seattletimes.com/special/centennial/august/burbs.html (Lake Hills opened 1955) and https://pcad.lib.washington.edu/building/12771 (Lake Hills housing tract, ranch and split-level houses)
        {
          type: "p",
          text: "Lake Hills was laid out as a planned subdivision starting in the mid-1950s, mostly ranch and split-level houses, and many other east and central Bellevue streets have homes from the same decades. On these houses we usually find several layers of old paint on wood lap siding and trim, window sills that have taken decades of rain, and fascia boards softened at the ends. Expect more scraping, more wood repair and more spot priming than on a newer house.",
        },
        { type: "h3", text: "1970s plywood siding" },
        {
          type: "p",
          text: "Plenty of 1970s Bellevue homes were sided with T1-11, a grooved plywood panel. It holds paint well while it's sealed, but the bottom edges and the grooves soak up water once the coating fails. We probe those edges, replace soft sections and prime bare plywood before the finish coats go on.",
        },
        { type: "h3", text: "Newer hillside and infill homes" },
        {
          type: "p",
          text: "Homes on the Cougar Mountain/Lakemont hillsides, and the newer houses that replace older ramblers across the city, are more likely to have fiber cement lap siding, cedar accents and composite trim. Fiber cement needs less scraping, but it shows every missed caulk joint and every lap mark, so the work is careful washing, caulking and even coverage.",
          confirm: "Confirm that Cougar Mountain/Lakemont homes in Bellevue are mostly 1980s or newer.",
        },
      ],
    },
    {
      heading: "Lead-safe painting for Bellevue's pre-1978 homes",
      id: "bellevue-lead",
      body: [
        // source: https://censusreporter.org/data/table/?table=B25034&geo_ids=16000US5305210 (ACS 2024 1-year: 43.4% of Bellevue housing units built before 1980)
        {
          type: "p",
          text: "If your Bellevue home was built before 1978, we treat any job that disturbs the old paint as a lead-safe job. Lead paint was banned for residential use in 1978, and with roughly two in five Bellevue housing units built before 1980, many local homes still have it under newer coats.",
        },
        {
          type: "ul",
          items: [
            "We follow EPA RRP (Renovation, Repair and Painting) lead-safe work practices on every job that disturbs paint in a pre-1978 home.",
            "Work areas are contained with plastic sheeting, and we keep dust down instead of dry-sanding old paint into the air.",
            "Paint chips are contained and collected, not left in your flower beds or lawn.",
            "Windows, doors and interior trim get the same care as siding, since surfaces that rub, like window sashes, are a common source of lead dust.",
          ],
        },
      ],
    },
    {
      heading: "Bellevue weather and your exterior paint",
      id: "bellevue-climate",
      body: [
        {
          type: "p",
          text: "Bellevue's exterior painting window is the dry season, roughly June through September, and we plan every exterior around it. Paint needs dry siding and temperatures above the label minimum, usually 35–50°F, through the full drying time, and from October to May that's hard to count on.",
        },
        { type: "h3", text: "Lake air, shade and moss" },
        {
          type: "p",
          text: "Homes near Lake Washington in West Bellevue and Newport, and along the west shore of Lake Sammamish, see more morning dampness than homes inland. Lots under tall Douglas firs and cedars, common around Bridle Trails and on parts of Cougar Mountain, stay shaded and slow to dry. That's where moss and mildew show up first: north walls, shaded trim and the lowest rows of siding near the ground. We wash those areas, treat mildew before painting and give the surface time to dry out.",
        },
        { type: "h3", text: "Sun and wind on the hills" },
        {
          type: "p",
          text: "On view lots in Somerset and on Cougar Mountain, south- and west-facing walls take strong afternoon sun and wind. Paint on those faces fades and chalks faster, and deck stain dries out. We may suggest a different sheen or stain type for the exposed sides, and on hot August days we paint them in the cooler part of the day so the coating doesn't dry too fast.",
        },
      ],
    },
    {
      heading: "HOA approval and permits in Bellevue",
      id: "bellevue-hoa",
      confirm: HOA_PERMIT,
      body: [
        {
          type: "p",
          text: "Repainting a house usually doesn't need a city permit, but HOAs often require approval for exterior color changes. In Bellevue that's most common in planned subdivisions on the hills, where a homeowners association or architectural committee reviews body, trim and door colors before work starts.",
        },
        {
          type: "p",
          text: "If you have an HOA, send us its color rules or approved palette with your estimate request. We'll help you put together color names, sample photos and a short scope for the submission, and we'll set the start date after approval comes back. If wood repairs grow beyond trim and small sections of siding, we'll flag it before the scope changes, since larger repairs can bring their own requirements.",
        },
      ],
    },
    {
      heading: "How we paint Bellevue homes",
      id: "bellevue-services",
      body: [
        {
          type: "p",
          text: "For Bellevue's older houses, [exterior painting](/services/exterior-painting) starts with the prep they need: washing, scraping, sanding, wood repair, caulking and priming before any finish coat. On newer homes the same steps are lighter, but they're never skipped.",
        },
        {
          type: "p",
          text: "Inside, mid-century homes often have wood paneling, textured ceilings and solid wood kitchen cabinets that are sound but tired. [Interior painting](/services/interior-painting) covers walls, ceilings and trim, and [cabinet painting](/services/cabinet-painting) can give a sturdy 1960s kitchen a durable new finish without replacing the boxes. Every [written estimate](/estimate) spells out which rooms and surfaces are included.",
        },
        {
          type: "callout",
          title: "If it rains on your start date",
          text: "Weather delays are rescheduled first and never charged. Bellevue's dry season is short, so we would rather move a day than paint wet siding.",
          confirm: PROMISE,
        },
      ],
    },
  ],
  neighborhoods: [
    { name: "Lake Hills", note: "Mid-1950s ranch and split-level homes; plan for lead-safe prep.", confirm: SERVE },
    { name: "Crossroads", note: "Mid-century houses mixed with townhomes and condos.", confirm: SERVE },
    { name: "Northeast Bellevue", note: "Established single-family streets with mature trees.", confirm: SERVE },
    { name: "Bridle Trails", note: "Larger wooded lots near the state park; shade and moss.", confirm: SERVE },
    { name: "Woodridge", note: "Hillside single-family streets in south-central Bellevue.", confirm: SERVE },
    { name: "Eastgate/Factoria", note: "Older homes near I-90 alongside newer redevelopment.", confirm: SERVE },
    { name: "Somerset", note: "View lots on the hill south of I-90; strong sun on west faces.", confirm: SERVE },
    { name: "Newport", note: "Hillside and lakeside homes near Lake Washington.", confirm: SERVE },
    { name: "West Lake Sammamish", note: "Homes along the lake's west shore; damp decks and trim.", confirm: SERVE },
    { name: "Cougar Mountain/Lakemont", note: "Hillside subdivisions; ask us about HOA color submissions.", confirm: SERVE },
  ],
  faqs: [
    {
      id: "bellevue-permit-hoa",
      question: "Do I need a permit to repaint my house in Bellevue?",
      answer: [
        "Repainting a house usually doesn't need a city permit, but HOAs often require approval for exterior color changes. If your Bellevue home is in a subdivision with an HOA, check your covenants or ask the board before you choose colors.",
        "We can help you prepare the color submission, and we schedule the start date after you have approval in hand.",
      ],
      confirm: HOA_PERMIT,
    },
    {
      id: "bellevue-lead-paint",
      question: "Does my 1960s Bellevue house need lead-safe painting?",
      answer: [
        "Yes, if the job will disturb old paint, a house built before 1978 should be painted using lead-safe work practices. Many of Bellevue's 1950s, 1960s and 1970s homes still have lead paint under newer coats, especially on trim, windows and doors.",
        "We follow EPA RRP lead-safe practices on every job that disturbs paint in a pre-1978 home: containment, dust control and careful collection of chips and debris. Tell us the year your house was built when you request an estimate so we can plan for it.",
      ],
    },
    {
      id: "bellevue-best-months",
      question: "When is the best time to paint a house exterior in Bellevue?",
      answer: [
        "The best time is the dry season, roughly June through September, when siding stays dry and temperatures stay above the paint's minimum. July and August are usually the most reliable months.",
        "Shaded north walls and lake-facing sides can stay damp into June, so we check the siding before we start. Interior and cabinet work runs all year, which makes fall and winter a good time for indoor projects.",
      ],
    },
    {
      id: "bellevue-hillside-homes",
      question: "Do you paint homes in Somerset and on Cougar Mountain?",
      answer: [
        "Yes, hillside neighborhoods like Somerset and Cougar Mountain/Lakemont are part of the Bellevue area we serve.",
        "Hillside homes bring a few extra steps: tall walls on the downhill side that need safe ladder or lift access, sun-faded west and south faces, and decks that take a lot of weather. We note all of that at the walkthrough so the written quote covers it.",
      ],
      confirm: "Hunter/Erik: confirm we serve Somerset and Cougar Mountain/Lakemont, and that we can provide lift access for tall downhill walls.",
    },
  ],
  nearby: ["kirkland-wa", "redmond-wa", "issaquah-wa"],
  updatedAt: "2026-10-24",
};

export default page;
