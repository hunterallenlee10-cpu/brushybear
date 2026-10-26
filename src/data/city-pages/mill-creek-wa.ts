import type { CityPage } from "@/data/types";

const SERVE = "Hunter/Erik: confirm we serve this area";
const PROMISE = "Promise: confirm with Erik";
const MCCA =
  "Confirm current MCCA Architectural Control Committee rules at mcca.info: all exterior paint (body, trim, doors, outbuildings) needs an application, same-color full repaints included, partial same-color maintenance painting exempt, approvals about two weeks and up to a month.";

const page: CityPage = {
  slug: "mill-creek-wa",
  title: "House Painters in Mill Creek, WA",
  metaDescription:
    "Painters in Mill Creek, WA for 1980s and 1990s planned-community homes. Help with MCCA and HOA paint applications, cedar trim prep and a written quote.",
  h1: "House painters in Mill Creek for HOA neighborhoods and 1980s to 2000s homes",
  eyebrow: "Serving Mill Creek, WA",
  intro: [
    "Brushy Bear Painters paints homes in Mill Creek, the master-planned city built around a golf course and country club in south Snohomish County. Much of the city is covered by homeowners associations, so an exterior paint job here usually starts with an application, not a ladder.",
    "We're a new company, and we work from a written plan on every job: a walkthrough, a quote that lists every surface, help with your HOA paperwork, and a start date set after approval comes back. Here's what Mill Creek homes need and how we fit the work around association rules.",
  ],
  sections: [
    {
      heading: "Mill Creek homes and where they are in the repaint cycle",
      id: "mill-creek-homes",
      confirm: SERVE,
      body: [
        // source: https://en.wikipedia.org/wiki/Mill_Creek,_Washington (golf course and country club construction began early 1975; first homes by 1976; incorporated September 30, 1983; Thomas Lake area annexed 2005; final phase of original development completed 2003)
        // source: https://censusreporter.org/data/table/?table=B25034&geo_ids=16000US5345865 (ACS 2020-2024 5-year, B25034: 9,224 units; 1980-89 23.2%, 1990-99 23.8%, 2000-09 22.6%, 2010-19 14.6%; built before 1980 14.8%)
        {
          type: "p",
          text: "Mill Creek is a young city. The first homes went up in the mid-1970s around the new golf course, and about seven in ten of today's homes were built between 1980 and 2009, according to Census Bureau estimates. Only about one in seven predates 1980.",
        },
        {
          type: "p",
          text: "That puts most houses here on their second or third exterior repaint. The common problems are predictable: original caulk at windows and trim corners that has dried out and split, cedar trim and fascia with soft spots where water sat, faded south and west walls, and garage doors and entry doors that took the most weather.",
        },
        { type: "h3", text: "Cedar, hardboard and fiber cement" },
        {
          type: "p",
          text: "Older Mill Creek homes often have cedar lap or shingle siding, and some 1980s and 1990s houses have hardboard lap siding, which swells at the bottom edges once water gets past the paint. Newer homes in the annexed areas lean toward fiber cement. We check each type at the walkthrough and write repairs into the quote before any paint is bought.",
          confirm: "Erik: confirm hardboard lap siding is common on Mill Creek's 1980s and 1990s homes.",
        },
        {
          type: "p",
          text: "Homes built before 1978 get EPA RRP lead-safe work practices whenever old paint is disturbed.",
        },
      ],
    },
    {
      heading: "MCCA and HOA paint approval in Mill Creek",
      id: "mill-creek-hoa",
      confirm: MCCA,
      body: [
        // source: https://mcca.info/?page_id=8 (Architectural Control Committee reviews all exterior paint: body, trim, doors, outbuildings, and siding; approvals often take about two weeks, up to a month)
        // source: https://mcca.info/?page_id=120 (same-color repaints need an application; maintenance painting on a portion of the house in the same colors does not)
        {
          type: "p",
          text: "If your home is in the Mill Creek Community Association (MCCA), its Architectural Control Committee reviews all exterior paint: body, trim, doors and outbuildings. Even a full repaint in the same colors needs an application. Touching up part of the house in the same colors does not.",
        },
        {
          type: "p",
          text: "MCCA says approvals often take about two weeks and can take up to a month. Townhome and condo communities inside MCCA have their own sub-association process as well, so check both.",
        },
        // source: https://lynettethomas.com/blog/understanding-mill-creeks-planned-communities-and-hoas (The Parks, Parkside and River Crossing have their own boards and approval processes; River Crossing asks for submission at least 21 days before work)
        // source: https://www.millcreekhighlands.org/acc (Mill Creek Highlands, 192 homes around Highlands Park, requires ACC approval before painting)
        {
          type: "p",
          text: "Some neighborhoods sit outside MCCA and run their own review, including Mill Creek Highlands, The Parks, Parkside and River Crossing. Their rules and timelines differ, so we ask which association covers your address at the first call.",
          confirm: "Confirm with each association that The Parks, Parkside, River Crossing and Mill Creek Highlands run their own paint approval, and confirm current lead times.",
        },
        { type: "h3", text: "How we help with the application" },
        {
          type: "ul",
          items: [
            "We get your association's current form and any color rules at the walkthrough.",
            "We give you the paint brand, color names and sheens the form asks for, plus which color goes where.",
            "We can bring large color samples so you can see them on your own siding before you submit.",
            "We set your start date after approval is in hand, so nothing gets painted twice.",
          ],
        },
      ],
    },
    {
      heading: "Mill Creek weather and exterior scheduling",
      id: "mill-creek-climate",
      body: [
        // source: https://en.wikipedia.org/wiki/Puget_Sound_Convergence_Zone (zone most often sets up over central and south Snohomish County; Mill Creek named among usual locations)
        // source: https://en.wikipedia.org/wiki/Mill_Creek,_Washington (North Creek forms the western city limit; wetlands along North Creek and Penny Creek)
        {
          type: "p",
          text: "Mill Creek sits in the usual path of the Puget Sound Convergence Zone, which can bring showers to south Snohomish County when Seattle stays dry. Homes near the North Creek and Penny Creek wetlands, and those under the mature trees around the golf course, hold morning moisture longer than open lots.",
        },
        {
          type: "p",
          text: "We paint exteriors in the dry season, roughly June through September, and wash and treat mildew on shaded walls first so they have time to dry. Because HOA approval adds two to four weeks, the best plan is to get your estimate in late winter or spring, submit colors, and hold a summer start date.",
        },
        {
          type: "p",
          text: "If rain interrupts the job, the lost days are rescheduled first and never charged.",
          confirm: PROMISE,
        },
      ],
    },
    {
      heading: "Painting services for Mill Creek homes",
      id: "mill-creek-services",
      body: [
        {
          type: "p",
          text: "Our [exterior painting](/services/exterior-painting) here centers on what 30- and 40-year-old homes need: caulk replacement, trim repair, priming bare wood and even coverage on large two-story walls. Fences and decks along greenbelts get [deck and fence staining](/services/decks-and-fences-painting).",
        },
        {
          type: "p",
          text: "Inside, [interior painting](/services/interior-painting) covers walls, ceilings, trim and doors, and [cabinet painting](/services/cabinet-painting) can update 1990s oak cabinets without a remodel. Associations planning a community-wide repaint can look at our [HOA painting](/services/hoa-painting) service.",
        },
        {
          type: "p",
          text: "Request a [free estimate](/estimate) to get started. Mention which association your home is in so we can bring the right form.",
        },
      ],
    },
  ],
  neighborhoods: [
    // source: https://en.wikipedia.org/wiki/Mill_Creek,_Washington (original plat east of SR 527 is 21 neighborhood subdivisions named for trees; Town Center opened 2004; Thomas Lake annexed 2005; East Gateway construction began 2012)
    { name: "Original Mill Creek (east of SR 527)", note: "Tree-named divisions around the golf course; MCCA review.", confirm: SERVE },
    { name: "Mill Creek Highlands", note: "About 192 homes around Highlands Park with their own ACC.", confirm: SERVE },
    { name: "The Parks", note: "Separate association with its own architectural review.", confirm: SERVE },
    { name: "Parkside", note: "Separate HOA outside MCCA.", confirm: SERVE },
    { name: "River Crossing", note: "Own board; plan on a 21-day lead time for submissions.", confirm: SERVE },
    { name: "Heatherwood", note: "Established homes on the city's west side.", confirm: "Confirm Heatherwood's location and which association covers it, then confirm we serve it." },
    { name: "Thomas Lake", note: "Northeast corner of the city, annexed in 2005.", confirm: SERVE },
    { name: "Town Center and East Gateway", note: "Townhomes and condos near the 2004 town center.", confirm: SERVE },
  ],
  faqs: [
    {
      id: "mill-creek-same-color",
      question: "Do I need MCCA approval to repaint my Mill Creek house the same color?",
      answer: [
        "Yes, MCCA asks for an application for a full exterior repaint even in the same colors. Touch-up painting on part of the house in the existing colors doesn't need one.",
        "Approval often takes about two weeks and can take up to a month, so submit before you lock in a start date.",
      ],
      confirm: MCCA,
    },
    {
      id: "mill-creek-which-hoa",
      question: "How do I know which HOA covers my home in Mill Creek?",
      answer: [
        "Check your CC&Rs or closing papers, which name the association; if you're unsure, call MCCA and they can tell you whether your address is in one of their divisions.",
        "Several neighborhoods, like Mill Creek Highlands and The Parks, have their own associations with separate forms.",
      ],
    },
    {
      id: "mill-creek-timeline",
      question: "When should I start planning a summer exterior in Mill Creek?",
      answer: [
        "Start in late winter or early spring. That leaves time for the estimate, color samples and HOA approval before the June to September painting season.",
        "Interior and cabinet work doesn't need HOA approval in most cases and runs all year.",
      ],
      confirm: "Confirm MCCA and other Mill Creek HOAs don't review interior work.",
    },
  ],
  nearby: ["bothell-wa", "lynnwood-wa", "everett-wa", "snohomish-wa"],
  updatedAt: "2026-10-26",
};

export default page;
