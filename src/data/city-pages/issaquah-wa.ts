import type { CityPage } from "@/data/types";

const SERVE = "Hunter/Erik: confirm we serve this area";
const PROMISE = "Promise: confirm with Erik";

const page: CityPage = {
  slug: "issaquah-wa",
  title: "House Painters in Issaquah, WA",
  metaDescription:
    "Painters in Issaquah, WA for Olde Town houses and hillside homes: interior and exterior painting, lead-safe prep on older homes, HOA color help. Free estimate.",
  h1: "Issaquah, WA painters for Olde Town houses and hillside homes",
  eyebrow: "Serving Issaquah, from Olde Town to the Highlands",
  intro: [
    "Brushy Bear Painters paints Issaquah homes inside and out, from early-1900s houses near Front Street to newer homes in the Issaquah Highlands. Few Eastside towns mix housing ages like this: old wood houses that need lead-safe prep, hillside communities with design rules, and mountain weather that shifts from one neighborhood to the next.",
    "We start with a walkthrough of your house and a custom written quote. Exteriors go on the calendar for the dry season, roughly June to September. Interiors and cabinets are year-round.",
  ],
  sections: [
    {
      heading: "Issaquah's homes, from Olde Town to the Highlands",
      id: "homes",
      body: [
        // source: https://en.wikipedia.org/wiki/Issaquah,_Washington (incorporated April 29, 1892; briefly named Gilman; began as a mining town)
        // source: https://historylink.org/File/23507 (Gilman-era houses, early-1900s homes in and near the historic downtown)
        // source: https://censusreporter.org/data/table/?table=B25034&geo_ids=16000US5333805 (ACS 2020-2024 5-year, table B25034: 57% built 2000 or later)
        {
          type: "p",
          text: "Issaquah is two housing markets in one town. It began as a coal-mining and timber town, incorporated in 1892 when it was called Gilman, and Olde Town, the historic core around Front Street, still has houses from the early 1900s. At the same time, more than half of the city's homes have been built since 2000, much of that in planned communities on the hills.",
        },
        {
          type: "h3",
          text: "Older homes: lead-safe prep comes first",
        },
        // source: https://censusreporter.org/data/table/?table=B25034&geo_ids=16000US5333805 (ACS 2020-2024 5-year: about 17% built before 1980)
        {
          type: "p",
          text: "About one in six Issaquah homes was built before 1980. Many of them are in and around Olde Town, on the older streets of the valley floor and on the lower slopes of Squak and Cougar mountains.",
          confirm: "Confirm where most pre-1980 Issaquah homes are (Olde Town, valley floor, lower Squak and Cougar slopes). The one-in-six figure is verified (ACS B25034).",
        },
        {
          type: "p",
          text: "If your home was built before 1978, its older paint layers may contain lead. Any job that disturbs that paint, such as scraping, sanding or replacing trim, follows lead-safe work practices under the EPA's RRP rule: plastic containment, dust control, careful cleanup and proper disposal of paint chips.",
        },
        {
          type: "p",
          text: "Old wood siding usually has many layers of paint, cracked top coats and rot at board ends and windowsills. We scrape and sand to a sound surface, repair rotted wood (an add-on with any job) and prime bare wood.",
        },
        {
          type: "h3",
          text: "Newer homes: the hillside communities",
        },
        // source: https://casestudies.uli.org/?p=27107 (Issaquah Highlands: started 1996, opened 1998)
        {
          type: "p",
          text: "The Issaquah Highlands, where construction began in 1996 and the first homes were finished in 1998, and newer communities like Talus and Montreux on Cougar Mountain are a different job. Siding is often fiber cement, trim runs long, and many streets are rows of townhomes with shared walls.",
        },
        {
          type: "p",
          text: "Here the job is usually a first or second repaint: shrunken caulk at fiber-cement seams, faded south and west faces, and trim corners that have taken in water. In many townhome communities the association paints exteriors on a shared schedule, so check before planning an exterior.",
          confirm: "Confirm which Issaquah townhome communities (Highlands, Talus) have HOA-managed exterior painting.",
        },
      ],
    },
    {
      heading: "Mountain weather and paint in Issaquah",
      id: "climate",
      body: [
        // source: https://aqua.kingcounty.gov/dnrp/library/dnrp-directors-office/climate/1111-kc-precipitation-map.pdf (King County average annual precipitation map: Issaquah near the 50-inch line, Bellevue and Kirkland under 40, higher totals on the hills to the south and east)
        {
          type: "p",
          text: "Issaquah is wetter than the Eastside cities to its west. King County's precipitation map puts the city near the 50-inch line for average yearly rain, compared with under 40 inches for Bellevue and Kirkland, and the totals climb quickly on Squak, Tiger and Cougar mountains.",
        },
        {
          type: "p",
          text: "Conditions also change with elevation inside the city. The valley floor along Issaquah Creek holds cold air and fog on fall mornings. Homes on the slopes of Squak and Cougar sit under tall second-growth forest, so walls stay shaded and damp. The Highlands, up on Grand Ridge, take more wind and see snow more often than downtown.",
          confirm: "Erik: confirm these Issaquah microclimate notes (valley fog, shaded slopes, Highlands wind and snow) match what you see in the field.",
        },
        {
          type: "p",
          text: "So we wait for fog and dew to burn off, start on the sides that dry first, and leave shaded walls until they are dry all the way through. Exterior painting runs roughly June through September; outside that window, Issaquah rarely gives paint the dry days and warm nights it needs to cure.",
        },
        {
          type: "p",
          text: "Moss and mildew grow fast here, especially on north walls, under eaves and on fences along wooded greenbelts. Washing and mildew treatment are part of prep, and pressure washing can be added to any job.",
        },
        {
          type: "p",
          text: "When rain stops an exterior job, those days are rescheduled first, and a weather delay never costs you extra.",
          confirm: PROMISE,
        },
      ],
    },
    {
      heading: "Issaquah HOA and design review",
      id: "hoa",
      body: [
        {
          type: "p",
          text: "Repainting a house usually doesn't need a city permit, but HOAs often require approval for exterior color changes. In Issaquah, that covers most of the newer hillside communities.",
          confirm: "Confirm with the City of Issaquah (issaquahwa.gov) that exterior repainting needs no permit, including in Olde Town.",
        },
        {
          type: "p",
          text: "The Issaquah Highlands has an architectural review process for exterior changes, and Talus and Montreux have design guidelines of their own. Expect to submit body, trim and door colors, sometimes with a sample board, and allow time for review before you book a start date.",
          confirm: "Confirm the Issaquah Highlands, Talus and Montreux rules: architectural review for exterior colors, sample board requirement and typical review time.",
        },
        {
          type: "p",
          text: "Olde Town works differently. Most houses there have no HOA, so color is up to you. A few historic buildings in town are designated city landmarks; if yours is one of them, check with the city before changing the exterior.",
          confirm: "Confirm that most Olde Town homes have no HOA, and what Issaquah's historic landmark rules say about exterior paint and color changes.",
        },
      ],
    },
    {
      heading: "Painting services for Issaquah homes",
      id: "services",
      body: [
        {
          type: "p",
          text: "On older Olde Town and valley homes, [exterior painting](/services/exterior-painting) starts with lead-safe scraping, wood repair and primer on bare wood. On newer homes in the Highlands, Talus and Montreux, it is mostly cleaning, recaulking and a careful repaint in colors your HOA has approved.",
        },
        {
          type: "p",
          text: "Inside, [interior painting](/services/interior-painting) here tends to mean patching plaster and old trim in older houses, or replacing flat builder paint on tall stairwells and open-plan walls in newer ones. Kitchen cabinets can be painted instead of replaced.",
        },
        {
          type: "p",
          text: "Fences along greenbelts and decks on the shady side of a hill wear out fast here. [Deck and fence staining](/services/decks-and-fences-painting) after a thorough cleaning keeps the wood sealed through the wet season.",
        },
        {
          type: "p",
          text: "Start with a [free estimate](/estimate). After the walkthrough you get a written quote within 24 hours, and once work begins, one point of contact who sends you a photo update every day.",
          confirm: PROMISE,
        },
      ],
    },
  ],
  neighborhoods: [
    { name: "Olde Town", note: "The historic core around Front Street, with early-1900s houses.", confirm: SERVE },
    { name: "Gilman and Newport Way", note: "Older and mid-century homes west of downtown.", confirm: SERVE },
    // source: https://casestudies.uli.org/?p=27107 (first homes opened 1998)
    { name: "Issaquah Highlands", note: "Planned community on Grand Ridge, first homes in 1998.", confirm: SERVE },
    { name: "Talus", note: "Hillside townhomes and homes on Cougar Mountain's lower slopes.", confirm: SERVE },
    { name: "Montreux", note: "Larger homes on Cougar Mountain above the valley.", confirm: SERVE },
    { name: "Squak Mountain", note: "Wooded lots where walls stay shaded much of the year.", confirm: SERVE },
    { name: "Cougar Mountain", note: "Homes on the Issaquah side under heavy tree cover.", confirm: SERVE },
    { name: "Tiger Mountain foothills", note: "Lower slopes east of town, where rain totals run highest.", confirm: SERVE },
    { name: "Providence Point", note: "Condo community; ask your association about exterior work.", confirm: SERVE },
  ],
  faqs: [
    {
      id: "issaquah-older-home-lead",
      question: "Can you safely paint an older Issaquah home that may have lead paint?",
      answer: [
        "Yes, when the work follows lead-safe practices. Any home built before 1978 may have lead in its older paint layers, and many Olde Town and valley houses are that old.",
        "On those homes, any job that disturbs old paint follows the EPA's RRP lead-safe work practices: containment, dust control, careful cleanup and proper disposal.",
      ],
    },
    {
      id: "issaquah-highlands-colors",
      question: "Can I pick any paint color for my Issaquah Highlands home?",
      answer: [
        "Usually not without approval. The Issaquah Highlands and most other hillside communities in Issaquah review exterior color changes before work starts.",
        "Get your colors approved first, then schedule the painting. We can help you choose colors that fit the guidelines and give you the color names and paint details the application asks for.",
      ],
      confirm: "Confirm Issaquah Highlands (and Talus, Montreux) require approval for exterior color changes.",
    },
    {
      id: "issaquah-rain-season",
      question: "Is Issaquah too rainy for exterior painting?",
      answer: [
        "No, but the window is shorter than in the lower, drier parts of the Eastside. Plan exterior painting between June and September, when surfaces stay dry and nights stay warm enough for paint to cure.",
        "Homes on shaded mountain slopes do best in the middle of that window, July and August, when drying is most reliable.",
      ],
    },
    {
      id: "issaquah-permit-repaint",
      question: "Do I need a permit to repaint my house in Issaquah?",
      answer: [
        "Repainting a house usually doesn't need a city permit, but HOAs often require approval for exterior color changes.",
        "In Issaquah that mostly affects the Highlands, Talus, Montreux and other planned communities. If your home is a designated historic landmark, check with the city before changing its exterior.",
      ],
      confirm: "Confirm with the City of Issaquah that repainting needs no permit, and the landmark rules for exterior changes.",
    },
  ],
  nearby: ["sammamish-wa", "bellevue-wa"],
  updatedAt: "2026-10-24",
};

export default page;
