import type { CityPage } from "@/data/types";

const SERVE = "Hunter/Erik: confirm we serve this area";
const PROMISE = "Promise: confirm with Erik";
const HISTORIC =
  "Confirm with City of Everett Planning whether repainting a house in the Rucker-Grand, Norton-Grand or Riverside historic overlay zones needs any review (the Neighborhood Conservation Guidelines include a paint scheme and colors section), and that a straight repaint elsewhere in Everett needs no permit.";

const page: CityPage = {
  slug: "everett-wa",
  title: "House Painters in Everett, WA",
  metaDescription:
    "Everett house painters for early 1900s homes in north Everett, 1980s houses in the south end and historic districts. Lead-safe prep and a written quote.",
  h1: "Everett house painters for century-old homes, historic districts and south-end houses",
  eyebrow: "Serving Everett, WA",
  intro: [
    "Brushy Bear Painters paints homes in Everett, from the old streets of the north end to the subdivisions around Silver Lake. We're a new company, so we won't point to past Everett jobs. We'll show you a written quote that lists every surface, explain the prep your house needs, and walk the job with you at the end.",
    // source: https://en.wikipedia.org/wiki/Everett,_Washington (townsite platted August 1890; incorporated May 4, 1893; lumber mills earned it the nickname "Milltown")
    "Everett was platted in 1890 as a planned mill town and incorporated in 1893, and it still has more pre-1940 houses than most of the cities around it. A 1905 house near Grand Avenue and a 1990s two-story in south Everett are both Everett homes, but they don't share much when it comes to paint.",
  ],
  sections: [
    {
      heading: "Everett's housing: from mill-town homes to 1990s subdivisions",
      id: "everett-homes",
      confirm: SERVE,
      body: [
        // source: https://censusreporter.org/data/table/?table=B25034&geo_ids=16000US5322640 (ACS 2024 1-year, B25034: 48,847 units; built 1939 or earlier = 18.2%; built before 1980 = 50.4%; 1980-99 = 30.5%)
        {
          type: "p",
          text: "Nearly one in five Everett homes was built before 1940, and about half were built before 1980, according to the Census Bureau's 2024 American Community Survey. Another 30% or so went up in the 1980s and 1990s, mostly in the south end of the city.",
        },
        { type: "h3", text: "North Everett's early 1900s houses" },
        {
          type: "p",
          text: "The neighborhoods north of downtown, like Northwest Everett, Bayside, Port Gardner, Riverside and Delta, hold most of the city's oldest homes: Craftsman bungalows, foursquares and Victorian-era houses with wood siding, shingles, deep porches and lots of trim. These houses often carry many coats of paint, some of them lead-based, plus old wood windows and porch parts that have taken a hundred years of rain. Prep is careful hand scraping, wood repair or replacement in kind, and oil or bonding primer where old coatings need it.",
          confirm: "Confirm the north Everett neighborhoods listed are where most pre-1940 homes are.",
        },
        { type: "h3", text: "South Everett's 1970s to 1990s homes" },
        {
          type: "p",
          text: "South of the older core, around Silver Lake, Cascade View and out toward Mill Creek, you'll find 1970s split-levels, 1980s and 1990s two-stories and plenty of townhomes. Those houses usually have plywood or hardboard siding that fails at the bottom edges, and builder-era trim that needs recaulking and spot repair more than heavy scraping.",
        },
        // source: https://censusreporter.org/data/table/?table=B25003&geo_ids=16000US5322640 (ACS 2024 1-year, B25003 Tenure: owner-occupied = 47.0%)
        {
          type: "p",
          text: "Everett also has more renters than owners. If you own a rental duplex or small building, we can schedule interior turnovers and exterior repaints around your tenants.",
          confirm: "Hunter/Erik: confirm we take rental and small multifamily work in Everett.",
        },
      ],
    },
    {
      heading: "Lead-safe painting is standard in older Everett homes",
      id: "everett-lead",
      body: [
        {
          type: "p",
          text: "In a city where half the homes were built before 1980 and almost a fifth before 1940, assume lead paint is present in an older house until a test says otherwise. On a 1910 Everett house it's often on the trim, windows, doors and porch, even if the siding was repainted with latex later.",
        },
        {
          type: "ul",
          items: [
            "We follow EPA RRP lead-safe work practices on every job that disturbs paint in a pre-1978 home.",
            "Ground covers and containment catch chips and dust, and we clean up daily.",
            "We don't dry-sand or torch old paint.",
            "Old wood windows get extra care, since friction surfaces shed lead dust.",
          ],
        },
      ],
    },
    {
      heading: "Everett weather: convergence-zone rain, salt air and river damp",
      id: "everett-climate",
      body: [
        // source: https://en.wikipedia.org/wiki/Everett,_Washington (north end of the Puget Sound Convergence Zone; average annual rainfall about 35.7 inches; city on Port Gardner Peninsula with Port Gardner Bay to the west and Snohomish River delta to the north and east)
        {
          type: "p",
          text: "Everett sits at the north end of the Puget Sound Convergence Zone, where north and south winds meet and can bring sudden heavier showers than the rest of the region. That makes the exterior schedule a little less predictable, so we keep an eye on the forecast and plan exterior work for the dry season, roughly June through September.",
        },
        {
          type: "p",
          text: "The city sits on a peninsula with salt water on one side and the Snohomish River delta on the other. Homes on the bluffs above Port Gardner Bay, in Boulevard Bluffs and Harborview-Seahurst-Glenhaven, get salt air and wind on their west faces. Homes near the river in Lowell and Riverside see damp mornings, and siding there can take longer to dry after rain.",
        },
        {
          type: "ul",
          items: [
            "Wash salt film and mildew off before any coating goes on.",
            "Check siding moisture on shaded and river-side walls, not just the forecast.",
            "Give exposed west faces a closer look for chalking, cracking and failed caulk.",
          ],
        },
      ],
    },
    {
      heading: "Everett's historic overlay zones",
      id: "everett-historic",
      confirm: HISTORIC,
      body: [
        // source: https://everettwa.gov/578/Historic-Overlay-Zones (Rucker-Grand, Norton-Grand and Riverside historic overlay zones; Rucker-Grand covers Rucker and Grand avenues between 10th and 24th streets; design standards and Neighborhood Conservation Guidelines apply)
        {
          type: "p",
          text: "Everett has three historic overlay zones: Rucker-Grand, which covers Rucker and Grand avenues between 10th and 24th streets, Norton-Grand, and Riverside. Design standards and the city's Neighborhood Conservation Guidelines apply in those zones, and the Historical Commission reviews certain exterior projects.",
        },
        // source: https://dahp.wa.gov/sites/default/files/CLG_Training_Everett_Design%20Review%202021.pdf (Everett Historical Commission review in three historic overlay zones is mandatory but not final)
        {
          type: "p",
          text: "If your home is in one of these zones, call Everett Planning before you settle on colors or replace siding, windows or porch parts. We'll match profiles when we repair trim and work from any color guidance the city gives you. Outside the overlay zones, repainting usually doesn't need a city permit, though HOAs in newer south Everett subdivisions often require color approval.",
        },
      ],
    },
    {
      heading: "Painting services for Everett homes",
      id: "everett-services",
      body: [
        {
          type: "p",
          text: "For north Everett's older houses, [exterior painting](/services/exterior-painting) is mostly prep and repair, and [millwork painting](/services/millwork-painting) covers original interior trim, built-in cabinets and stair parts that deserve careful work. [Interior painting](/services/interior-painting) for plaster walls includes patching cracks before paint.",
        },
        {
          type: "p",
          text: "Rental owners and small apartment buildings can ask about [commercial painting](/services/commercial-painting), and townhome communities about [HOA painting](/services/hoa-painting). Start with a [written estimate](/estimate) after a walkthrough.",
        },
        {
          type: "callout",
          title: "Rain on the schedule",
          text: "If a convergence-zone shower soaks your siding on a start day, we move the date and never charge for the delay.",
          confirm: PROMISE,
        },
      ],
    },
  ],
  neighborhoods: [
    { name: "Northwest Everett", note: "Early 1900s homes and part of the city's historic districts.", confirm: SERVE },
    { name: "Port Gardner", note: "Includes Rucker Hill; older homes with views of the bay.", confirm: SERVE },
    { name: "Riverside", note: "Historic overlay zone near the Snohomish River.", confirm: SERVE },
    { name: "Bayside", note: "Older homes near downtown and the waterfront.", confirm: SERVE },
    { name: "Delta", note: "Mostly residential streets north of downtown.", confirm: SERVE },
    { name: "Lowell", note: "Southeast Everett along the river; damp mornings.", confirm: SERVE },
    { name: "Boulevard Bluffs", note: "Bluff-top homes facing Port Gardner Bay; salt air and wind.", confirm: SERVE },
    { name: "Harborview-Seahurst-Glenhaven", note: "Southwest Everett near the water.", confirm: SERVE },
    { name: "View Ridge-Madison", note: "Central Everett single-family streets.", confirm: SERVE },
    { name: "Silver Lake", note: "South Everett homes and townhomes around the lake.", confirm: SERVE },
  ],
  faqs: [
    {
      id: "everett-wa-historic-zone",
      question: "Do I need approval to paint a house in an Everett historic overlay zone?",
      answer: [
        "Check with Everett Planning first, because the Rucker-Grand, Norton-Grand and Riverside overlay zones have design standards and conservation guidelines.",
        "We'll schedule the work after you know what, if anything, needs review, and we'll repair trim to match the original profiles.",
      ],
      confirm: HISTORIC,
    },
    {
      id: "everett-wa-old-house",
      question: "Can you paint a 100-year-old house in north Everett?",
      answer: [
        "Yes, older houses are a good fit for our prep-first process, with lead-safe practices on every pre-1978 home.",
        "Expect more time on scraping, wood repair and priming than on a newer house. The written quote spells out that prep so you can see where the time goes.",
      ],
    },
    {
      id: "everett-wa-rain",
      question: "Does Everett's weather make exterior painting harder?",
      answer: [
        "A little, because Everett sits in the Puget Sound Convergence Zone, where showers can pop up when the rest of the region is dry.",
        "We plan exteriors for the dry season, check siding moisture before each coat and move days when needed instead of painting wet wood.",
      ],
    },
    {
      id: "everett-wa-rentals",
      question: "Do you paint rental homes and duplexes in Everett?",
      answer: [
        "Yes, we paint rental houses, duplexes and small buildings, inside and out.",
        "Tell us about tenant schedules and access when you ask for an estimate, and we'll plan the work around them.",
      ],
      confirm: "Hunter/Erik: confirm we take rental and small multifamily work in Everett.",
    },
  ],
  nearby: ["mill-creek-wa", "snohomish-wa", "lynnwood-wa"],
  updatedAt: "2026-10-26",
};

export default page;
