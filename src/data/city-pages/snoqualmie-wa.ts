import type { CityPage } from "@/data/types";

const SERVE = "Hunter/Erik: confirm we serve this area";
const PROMISE = "Promise: confirm with Erik";
const HOA_PERMIT =
  "Confirm with the City of Snoqualmie that a straight exterior repaint needs no building permit; confirm how the Snoqualmie Ridge community association handles exterior color approval and typical review times; confirm whether repainting a building in the Snoqualmie Historic Commercial District needs city review.";

const page: CityPage = {
  slug: "snoqualmie-wa",
  title: "House Painters in Snoqualmie, WA",
  metaDescription:
    "Snoqualmie, WA painters for Snoqualmie Ridge homes and older houses downtown. Planned around heavy rain, valley fog and a short dry season. HOA color help too.",
  h1: "Snoqualmie house painters for Ridge homes, downtown houses and foothill weather",
  eyebrow: "Serving Snoqualmie, WA",
  intro: [
    "Brushy Bear Painters is a new residential painting company serving Snoqualmie, from the subdivisions on Snoqualmie Ridge to the older houses near Railroad Avenue and Kimball Creek. We do interior and exterior painting, cabinets, drywall repair, and deck and fence staining.",
    "Painting in Snoqualmie is a different job than painting in Bellevue or Redmond. The city gets far more rain, the valley fills with fog, and the dry season is shorter. Most homes are on the Ridge and date from the 2000s, while the older town below has houses that have been through floods and, in many cases, raised off the ground. This page covers both, plus how we plan around the weather.",
  ],
  sections: [
    {
      heading: "Two towns in one: Snoqualmie Ridge and the historic downtown",
      id: "snoqualmie-homes",
      confirm: SERVE,
      body: [
        // source: https://censusreporter.org/data/table/?table=B25034&geo_ids=16000US5365205 (ACS 2024 5-year, B25034: 4,774 units; 2000 to 2009 = 52.6%; 2000 or later = 76.5%; built 1939 or earlier = 7.1%)
        {
          type: "p",
          text: "About three quarters of Snoqualmie's homes were built in 2000 or later, and more than half in the 2000s alone, according to the Census Bureau's 2020 to 2024 American Community Survey. A small share, about 7%, dates from 1939 or earlier.",
        },
        { type: "h3", text: "Snoqualmie Ridge" },
        // source: https://en.wikipedia.org/wiki/Snoqualmie,_Washington (city annexed 1,300 acres in the mid-1990s; master-planned Ridge I has 2,250 dwelling units; Ridge II annexed 2004 adds about 1,850 units)
        {
          type: "p",
          text: "Most of that growth is Snoqualmie Ridge, a master-planned community the city annexed in the mid-1990s, with a second phase, Ridge II, added in 2004. Together they hold roughly 4,000 homes. Many are now due for their first or second full repaint: builder caulk has shrunk and cracked, fiber cement and engineered wood siding has faded on the exposed sides, and decks and fences have grayed out.",
        },
        { type: "h3", text: "The older town" },
        // source: https://en.wikipedia.org/wiki/Snoqualmie,_Washington (Snoqualmie Historic Commercial District, built 1889 to 1941, listed as a city landmark in 1997, near Railroad Avenue)
        {
          type: "p",
          text: "Down in the valley, the historic downtown along Railroad Avenue dates from 1889 to 1941 and is a designated city landmark district. The houses around it are older and more varied: wood-sided cottages, mill-era homes and later infill, many with years of paint layers and some with lead underneath.",
        },
      ],
    },
    {
      heading: "Heavy rain, valley fog and a short painting season",
      id: "snoqualmie-climate",
      body: [
        // source: https://en.wikipedia.org/wiki/Snoqualmie,_Washington (average annual precipitation 63.28 inches over about 181 days; November 9.47 in; July 1.24 in and August 1.22 in; December snowfall 3.6 in)
        // source: https://en.wikipedia.org/wiki/Renton,_Washington (average annual precipitation 37.1 inches, for comparison)
        {
          type: "p",
          text: "Snoqualmie averages about 63 inches of precipitation a year, over 180 days of it, compared with about 37 inches in Renton closer to Lake Washington. November alone averages more than 9 inches. July and August are the only reliably dry months, with a little over an inch each, and the city sees some snow most winters.",
        },
        {
          type: "p",
          text: "That makes the exterior window here tighter than on the rest of the Eastside. We aim exteriors at July, August and early September, and we're cautious about starting in June or late September. Wood has to dry out fully after a wet spring before it takes primer, and we check moisture on the siding before we open a can.",
        },
        { type: "h3", text: "Fog in the valley, wind on the Ridge" },
        {
          type: "p",
          text: "Downtown and the valley floor often sit in fog on summer and fall mornings, so siding stays wet until late morning and painting days are shorter. Up on the Ridge, homes are higher and more open. They dry sooner, but south and west walls take more sun and wind, and the paint on those faces fades and chalks first.",
        },
        { type: "h3", text: "Moss and mildew" },
        {
          type: "p",
          text: "With this much rain, moss and mildew grow on any shaded wall, fence or deck, especially on lots backing onto the greenbelts. We wash and treat mildew as standard prep, and we recommend maintenance coats on decks and fences more often than we would in drier parts of the region.",
        },
      ],
    },
    {
      heading: "Raised and flood-repaired homes in the valley",
      id: "snoqualmie-flood-homes",
      body: [
        // source: https://www.valleyrecord.com/news/raising-the-stakes-against-flooding/ (2008: Snoqualmie received state funding to elevate 39 homes and buy out 10 properties; hazard mitigation program began in the mid-1990s)
        // source: https://kingcounty.gov/en/dept/dnrp/nature-recreation/environment-ecology-conservation/flood-services/flood-programs/flood-elevation-program (King County Home Elevation Program funding available only in the Snoqualmie River Basin)
        {
          type: "p",
          text: "The Snoqualmie River floods the valley floor, and for decades the city and King County have helped owners raise homes above flood level. Grant programs going back to the 1990s have funded elevation of dozens of homes in and around downtown, and the county's Home Elevation Program still focuses on the Snoqualmie River basin.",
        },
        {
          type: "p",
          text: "A raised house brings its own paint work: a tall new foundation wall or skirt, new stairs and landings, and new siding or trim pieces next to old ones. We prime new wood and bare patches separately so the finish looks even, and we use ladders or a lift safely on the taller walls.",
          confirm: "Hunter/Erik: confirm we can provide lift access for tall walls on raised homes.",
        },
        {
          type: "p",
          text: "Many of these houses were built long before 1978. When a job will disturb old paint, we follow EPA RRP lead-safe work practices: containment, wet scraping, dust control and full cleanup of chips.",
        },
      ],
    },
    {
      heading: "HOA color approval and permits",
      id: "snoqualmie-hoa",
      confirm: HOA_PERMIT,
      body: [
        {
          type: "p",
          text: "A straight repaint usually doesn't need a city permit, but most Snoqualmie Ridge homes are under a community association with exterior color rules. Plan to get your colors approved before the job is scheduled, and start in spring if you want a July or August date, since the dry window here is short.",
        },
        {
          type: "ol",
          items: [
            "Get your association's design guidelines or approved color palette from the management company or community website.",
            "Choose colors with us. We can brush out large samples so you and the committee see them in real light.",
            "Submit the color names, where each goes on the house, and photos of the samples.",
            "We put you on the schedule once written approval comes back.",
          ],
        },
        {
          type: "p",
          text: "If you own a building in the historic downtown, check with the city before changing exterior colors, since the commercial district is a designated landmark.",
        },
      ],
    },
    {
      heading: "What we paint in Snoqualmie",
      id: "snoqualmie-services",
      body: [
        {
          type: "p",
          text: "For Ridge homes, [exterior painting](/services/exterior-painting) usually means a careful wash, cutting out and replacing failed caulk, spot priming and two finish coats, with extra attention to the sun-beaten sides. With this much rain, [deck and fence staining](/services/decks-and-fences-painting) is the work Ridge owners need most often.",
        },
        {
          type: "p",
          text: "Inside, many 2000s homes still have flat builder paint that marks easily. [Interior painting](/services/interior-painting) replaces it with a washable finish, [drywall repair](/services/drywall-painting) fixes nail pops and settling cracks first, and [cabinet painting](/services/cabinet-painting) updates builder-grade kitchens. Interior work is a good fit for Snoqualmie's long wet season. Request an [estimate](/estimate) any time of year.",
        },
        {
          type: "callout",
          title: "Rain on your start date",
          text: "If the weather turns, we move the start date at no charge. In Snoqualmie we'd rather wait for dry siding than rush a coat that won't last.",
          confirm: PROMISE,
        },
      ],
    },
  ],
  neighborhoods: [
    { name: "Snoqualmie Ridge", note: "Master-planned 1990s and 2000s homes; check association color rules.", confirm: SERVE },
    { name: "Snoqualmie Ridge II", note: "Newer phase annexed in 2004; mostly first repaints and deck work.", confirm: SERVE },
    { name: "Eagle Pointe", note: "Community within Snoqualmie Ridge.", confirm: SERVE },
    { name: "Historic Downtown Snoqualmie", note: "Railroad Avenue landmark district and older houses nearby.", confirm: SERVE },
    { name: "Kimball Creek", note: "Valley-floor homes near downtown; morning fog and damp siding.", confirm: SERVE },
    { name: "Snoqualmie Falls area", note: "Homes near the falls and the river; heavy shade and moisture.", confirm: SERVE },
    { name: "Fall City", note: "Unincorporated community just downriver; rural lots, barns and fences.", confirm: SERVE },
  ],
  faqs: [
    {
      id: "snoqualmie-best-months",
      question: "When is the best time to paint a house exterior in Snoqualmie?",
      answer: [
        "July, August and early September are the most reliable months for exterior painting in Snoqualmie. The city averages about 63 inches of precipitation a year, and those are the only consistently dry stretches.",
        "Valley homes can stay foggy until late morning, so painting days there are shorter. Book early in spring, especially if your association needs to approve colors first.",
      ],
    },
    {
      id: "snoqualmie-ridge-hoa",
      question: "Do I need HOA approval to repaint my Snoqualmie Ridge home?",
      answer: [
        "Most likely, yes; Snoqualmie Ridge homes are generally under a community association that reviews exterior colors. Repainting usually doesn't need a city permit, but the association's approval does.",
        "Send us the approved palette or guidelines with your estimate request, and we'll help with samples and the submission.",
      ],
      confirm: HOA_PERMIT,
    },
    {
      id: "snoqualmie-moss-mildew",
      question: "Why does moss and mildew come back so fast on Snoqualmie houses?",
      answer: [
        "Moss and mildew come back quickly because Snoqualmie gets far more rain than the cities closer to Lake Washington, and shaded walls rarely dry out between October and June.",
        "Washing and mildew treatment before painting slow it down, and a quick wash each spring keeps the paint and stain looking good longer.",
      ],
    },
    {
      id: "snoqualmie-newer-home",
      question: "My Ridge house was built in the 2000s. Does it need repainting?",
      answer: [
        "It may; many 2000s Ridge homes are at the age where caulk, sun-facing siding and deck stain all wear out together. Rub your hand on the south or west wall: if it comes away chalky, or caulk is open at the trim, it's time for a look.",
        "Repainting before bare siding is exposed is much easier than repairing water damage later.",
      ],
    },
  ],
  nearby: ["issaquah-wa", "sammamish-wa", "redmond-wa"],
  updatedAt: "2026-10-26",
};

export default page;
