import type { CityPage } from "@/data/types";

const SERVE = "Hunter/Erik: confirm we serve this area";
const PROMISE = "Promise: confirm with Erik";
const HOA_PERMIT =
  "Confirm with the City of Kenmore that a straight exterior repaint needs no building permit, and confirm how common HOA color approval is in Kenmore subdivisions and townhome communities.";

const page: CityPage = {
  slug: "kenmore-wa",
  title: "House Painters in Kenmore, WA",
  metaDescription:
    "Kenmore house painters for 1950s Uplake homes, 1980s hillside houses and lake-view decks. Lead-safe prep, moss and shade know-how, and a clear written quote.",
  h1: "Kenmore house painters for mid-century homes, 1980s hillsides and lake-view decks",
  eyebrow: "Serving Kenmore, WA",
  intro: [
    "Brushy Bear Painters paints homes in Kenmore, at the north end of Lake Washington, inside and out. We're a new company, so you won't find a list of Kenmore jobs from us yet. You'll get a walkthrough, a written quote that names every surface and every repair we expect, and a final walkthrough where touch-ups get done before we pack up.",
    // source: https://en.wikipedia.org/wiki/Kenmore,_Washington (founded 1901 around a shingle mill; incorporated August 31, 1998; Sammamish River divides the city into north and south halves; rolling hills of glacial till)
    "Kenmore started as a shingle-mill town in 1901 but only became a city in 1998. The Sammamish River splits it in two, and both halves climb from the lake and river onto wooded hills. That means a lot of Kenmore homes deal with slopes, shade and lake weather, and each house needs its own plan.",
  ],
  sections: [
    {
      heading: "Kenmore homes and the prep they need",
      id: "kenmore-homes",
      confirm: SERVE,
      body: [
        // source: https://censusreporter.org/data/table/?table=B25034&geo_ids=16000US5335170 (ACS 2020-2024 5-year, B25034: 9,761 units; 1980-89 = 22.5%, the largest decade; 1950-69 = 22.9%; built before 1980 = 39.6%; 2000 or later = 26.0%)
        {
          type: "p",
          text: "Kenmore's homes come in waves. The 1980s were the biggest building decade, with more than a fifth of today's homes, but another fifth went up in the 1950s and 1960s, and about a quarter in 2000 or later, according to Census Bureau estimates. Roughly 40% of homes were built before 1980.",
        },
        { type: "h3", text: "Mid-century homes in Uplake and nearby" },
        // source: https://historicseattle.org/kenmore-history-uncovered/ (2011 Kenmore and King County survey focused on mid-20th-century houses, including Uplake Terrace; 1955 and 1960 Uplake homes with Cold War shelters) and https://en.wikipedia.org/wiki/Kenmore,_Washington (first Uplake plats sold in 1954)
        {
          type: "p",
          text: "The first Uplake plats were sold in 1954, and a city and county survey in 2011 singled out Uplake Terrace for its mid-century houses. Homes from that era tend to have low-pitched roofs, wide eaves, big windows and wood siding with many coats of paint. Expect scraping, sanding, wood repair at the eaves and sills, and lead-safe practices on anything built before 1978.",
        },
        { type: "h3", text: "1980s hillside houses" },
        {
          type: "p",
          text: "Many 1980s Kenmore homes are two-stories and split-entries on sloped lots, often with cedar or hardboard siding, a big deck and a tall downhill wall. Hardboard swells and flakes at the bottom edges once water gets in, cedar trim splits at the joints, and those tall walls need safe ladder or lift access planned into the quote.",
          confirm: "Hunter/Erik: confirm we can provide lift access for tall downhill walls.",
        },
        { type: "h3", text: "Newer homes and townhomes" },
        {
          type: "p",
          text: "Newer houses and townhomes near downtown Kenmore and along Highway 522 usually have fiber cement siding and builder-grade interior paint. Outside, the work is caulking and even coverage. Inside, it's often swapping flat builder paint for a finish you can wipe clean.",
        },
      ],
    },
    {
      heading: "Lead-safe painting in Kenmore",
      id: "kenmore-lead",
      body: [
        {
          type: "p",
          text: "About two in five Kenmore homes were built before 1980, which includes most of the 1950s and 1960s neighborhoods. Lead paint wasn't banned for homes until 1978, so if your house is older than that and the job will disturb old paint, we treat it as lead-safe work.",
        },
        {
          type: "p",
          text: "We follow EPA RRP lead-safe work practices: containment with plastic sheeting, dust control instead of dry-sanding, and careful collection of chips so they don't end up in lawns, garden beds or the creek behind the house.",
        },
      ],
    },
    {
      heading: "Kenmore weather: south-facing lake slopes, river damp and deep shade",
      id: "kenmore-climate",
      body: [
        {
          type: "p",
          text: "Kenmore wraps around the north end of Lake Washington, so many homes on the hills above downtown face south across the water. Those south walls and decks get strong sun most of the year, and paint and stain on them fade and dry out faster than on the shaded sides.",
        },
        // source: https://en.wikipedia.org/wiki/Kenmore,_Washington (flatlands near water and a swampy, marshy area along Swamp Creek; Saint Edward State Park is 365 acres)
        {
          type: "p",
          text: "Down low, the Sammamish River and the marshy ground along Swamp Creek keep the air damp, especially in the mornings. And on wooded lots, including streets near Saint Edward State Park's 365 acres of forest, tall firs and cedars keep siding in shade. That's where moss, mildew and slow-drying siding show up.",
        },
        {
          type: "ul",
          items: [
            "We schedule exteriors for the dry season, roughly June through September.",
            "Sunny south faces get painted earlier in the day in midsummer so the paint doesn't flash dry.",
            "Shaded and low-lying walls get washed, treated for mildew and checked for moisture before priming.",
          ],
        },
      ],
    },
    {
      heading: "HOAs and permits in Kenmore",
      id: "kenmore-hoa",
      confirm: HOA_PERMIT,
      body: [
        {
          type: "p",
          text: "Repainting a house usually doesn't need a city permit, but HOAs often require approval for exterior color changes. Kenmore has a mix: many older streets have no HOA at all, while some newer subdivisions and townhome communities have covenants or an association that handles the exterior.",
        },
        {
          type: "p",
          text: "If you have an HOA, send us the color rules with your estimate request. We'll help with color names and samples for the submission and set the start date once approval comes back.",
        },
      ],
    },
    {
      heading: "Painting services for Kenmore homes",
      id: "kenmore-services",
      body: [
        {
          type: "p",
          text: "Lake-view decks take the most sun in Kenmore, and shaded decks grow the most algae. [Deck and fence staining](/services/decks-and-fences-painting) starts with a deep clean either way. [Exterior painting](/services/exterior-painting) on mid-century and 1980s homes includes the wood repair and priming that make the topcoat last.",
        },
        {
          type: "p",
          text: "Inside, [interior painting](/services/interior-painting) covers walls, ceilings and trim, and [cabinet painting](/services/cabinet-painting) can give a solid older kitchen a durable new finish. Try the [instant estimate](/instant-estimate) for a rough idea, then book a walkthrough for a [written estimate](/estimate).",
        },
        {
          type: "callout",
          title: "If the weather won't cooperate",
          text: "Weather delays are rescheduled first and never charged. We'd rather wait a day than paint damp siding.",
          confirm: PROMISE,
        },
      ],
    },
  ],
  neighborhoods: [
    { name: "Downtown Kenmore", note: "Newer townhomes and apartments near the lake and Highway 522.", confirm: SERVE },
    { name: "Uplake Terrace", note: "Mid-century homes from the 1950s and 1960s; plan for lead-safe prep.", confirm: SERVE },
    { name: "Inglewood", note: "Established single-family streets with mature trees.", confirm: SERVE },
    { name: "Arrowhead", note: "Single-family streets on the hills; shaded lots and moss.", confirm: SERVE },
    { name: "Upper Moorlands", note: "Hillside homes near Moorlands Park.", confirm: SERVE },
    { name: "Lower Moorlands", note: "Streets below the Moorlands hill toward the lake.", confirm: SERVE },
    { name: "Linwood Heights", note: "Site of a Depression-era settlement; homes from many decades.", confirm: SERVE },
    { name: "Kenlake Vista", note: "Hillside streets; check exposed walls for sun fade.", confirm: SERVE },
    { name: "Northlake Terrace", note: "Residential streets above the north end of the lake.", confirm: SERVE },
    { name: "Northshore Summit", note: "Hilltop streets where open lots take more sun and wind.", confirm: SERVE },
  ],
  faqs: [
    {
      id: "kenmore-wa-best-months",
      question: "When is the best time to paint a house exterior in Kenmore?",
      answer: [
        "July and August are the most reliable months for exterior painting in Kenmore, with June and September often workable.",
        "Homes near the river or under heavy trees may need a few extra dry days after rain. Interior and cabinet work can be scheduled any time of year.",
      ],
    },
    {
      id: "kenmore-wa-uplake",
      question: "My Kenmore house was built in the 1950s. What should I expect?",
      answer: [
        "Expect more prep than on a newer home: many coats of old paint, worn sills and eaves, and lead-safe work practices because the house predates 1978.",
        "We list the scraping, wood repair, priming and containment in the written quote, so you can see exactly what's included.",
      ],
    },
    {
      id: "kenmore-wa-deck",
      question: "Can you restore a sun-faded deck that faces the lake?",
      answer: [
        "Yes, most faded decks can be restored with a thorough cleaning, repairs to any loose or soft boards, and fresh stain.",
        "Decks that face south over the lake wear fastest, so we'll talk through solid versus semi-transparent stain and how often each needs a recoat.",
      ],
    },
    {
      id: "kenmore-wa-hoa",
      question: "Do I need HOA approval to repaint in Kenmore?",
      answer: [
        "Only if your home is in a community with covenants or an HOA; many older Kenmore streets don't have one.",
        "If you do, check the color rules first, and we'll help prepare the submission before scheduling.",
      ],
      confirm: HOA_PERMIT,
    },
  ],
  nearby: ["bothell-wa", "juanita-wa", "shoreline-wa", "woodinville-wa"],
  updatedAt: "2026-10-26",
};

export default page;
