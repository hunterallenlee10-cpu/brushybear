import type { CityPage } from "@/data/types";

const SERVE = "Hunter/Erik: confirm we serve this area";
const PROMISE = "Promise: confirm with Erik";
const HISTORIC =
  "Confirm with City of Snohomish Planning that the 2003 Historic District Design Standards are still current, that a repaint (including a color change) on a house in the Historic District needs no Design Review Board approval, and that City Hall still keeps historically appropriate paint color examples.";

const page: CityPage = {
  slug: "snohomish-wa",
  title: "House Painters in Snohomish, WA",
  metaDescription:
    "Snohomish, WA painters for Victorian and Craftsman homes in the Historic District and newer houses nearby. Lead-safe prep, historic color help, dry-season work.",
  h1: "Snohomish house painters for Victorians, Craftsman bungalows and Historic District homes",
  eyebrow: "Serving Snohomish, WA",
  intro: [
    "Brushy Bear Painters is a new residential painting company serving Snohomish, from the Victorian and Craftsman houses in the Historic District to the newer homes around Blackmans Lake and up toward Highway 2. We do interior and exterior painting, trim and millwork, cabinets, and deck and fence staining.",
    "Snohomish has more old houses for its size than almost anywhere in the region, and many of them still carry the trim, shingles and wood windows they were built with. Painting them well takes patience, lead-safe practices and an eye for historic color. This page covers what we look for in Snohomish homes, the Historic District standards, and how the river valley weather affects exterior work.",
  ],
  sections: [
    {
      heading: "Snohomish's Historic District and its houses",
      id: "snohomish-homes",
      confirm: SERVE,
      body: [
        // source: https://en.wikipedia.org/wiki/Snohomish,_Washington (26-block historic district established 1973 with design rules; listed on the National Register of Historic Places in 1974; many houses carry plaques with build year and original occupants)
        {
          type: "p",
          text: "Snohomish set up a 26-block historic district with its own design rules in 1973, and the district was listed on the National Register of Historic Places in 1974. Walk the residential streets and you'll see plaques on many houses with the year they were built and the names of the first owners.",
        },
        // source: https://dahp.wa.gov/sites/default/files/Design_Guidelines_Snohomish.pdf (Historic District Design Standards, p. 5: homes date from the 1860s to the present with emphasis on pre-1920; styles include Craftsman Bungalow, Queen Anne Victorian, Shingle, Gothic Revival, Italianate, Colonial Revival and Stick/Eastlake; wood is the predominant material)
        {
          type: "p",
          text: "The city's design standards describe homes in the district dating from the 1860s to today, with most built before 1920, in styles from Queen Anne Victorian and Italianate to Craftsman bungalows and Colonial Revival. Wood is the main material.",
        },
        // source: https://censusreporter.org/data/table/?table=B25034&geo_ids=16000US5365170 (ACS 2024 5-year, B25034: 4,674 units; built 1939 or earlier = 18.2%; before 1980 = 51.6%; 1990 or later = 37.8%)
        {
          type: "p",
          text: "Across the whole city, about 18% of homes were built in 1939 or earlier and just over half before 1980, according to the Census Bureau's 2020 to 2024 American Community Survey. Most of the rest went up from the 1990s on, so the city has plenty of newer homes alongside the old ones.",
        },
        { type: "h3", text: "What Victorian and Craftsman homes need" },
        {
          type: "ul",
          items: [
            "Fish-scale and patterned shingles, brackets, spindles and turned porch posts that have to be scraped and brushed by hand.",
            "Original wood windows with glazing putty that has dried and cracked, and sills that have taken a century of rain.",
            "Many layers of old paint, some of it alligatored down to bare wood on the weather side.",
            "Multi-color schemes with separate body, trim, accent and sash colors, which take more time to cut in cleanly.",
          ],
        },
      ],
    },
    {
      heading: "Painting in the Historic District: what the standards say",
      id: "snohomish-historic",
      confirm: HISTORIC,
      body: [
        // source: https://dahp.wa.gov/sites/default/files/Design_Guidelines_Snohomish.pdf (Appendix A, p. 63: maintenance and repair that replaces existing materials with the same does not require Design Review Board approval; examples of historically appropriate paint colors from several suppliers available at City Hall)
        {
          type: "p",
          text: "The city's Historic District Design Standards treat maintenance and repair that replaces existing materials with the same as pre-approved, without Design Review Board review. The standards also note that City Hall keeps examples of historically appropriate paint colors from several suppliers, which is a good place to start if you want a period color scheme.",
        },
        // source: https://dahp.wa.gov/sites/default/files/Design_Guidelines_Snohomish.pdf (fence and wall standards: masonry surfaces are to remain unpainted; residential standard 12: original wood windows shall be retained and restored when possible; vinyl siding prohibited)
        {
          type: "p",
          text: "A few rules affect painters directly. Unpainted masonry, like brick chimneys and foundations, is meant to stay unpainted. Original wood windows should be kept and restored where possible, which suits us fine: we reglaze, prime and paint them rather than suggest replacements. Vinyl siding isn't allowed in the district, so wood siding repairs are done in wood.",
        },
        {
          type: "p",
          text: "If your plans go beyond painting, such as new siding, a porch rebuild or new windows, check with the city's planning staff first. We'll flag anything in our scope that might need review before it starts.",
        },
      ],
    },
    {
      heading: "Lead-safe work on Snohomish's older homes",
      id: "snohomish-lead",
      body: [
        // source: https://censusreporter.org/data/table/?table=B25034&geo_ids=16000US5365170 (ACS 2024 5-year: 51.6% of Snohomish housing units built before 1980)
        {
          type: "p",
          text: "With more than half the city's homes built before 1980, and many in the Historic District built before 1920, we treat any job that disturbs old paint here as a lead-safe job.",
        },
        {
          type: "ul",
          items: [
            "We follow EPA RRP lead-safe work practices on every pre-1978 home where paint will be disturbed.",
            "Containment goes down under every wall and porch we scrape, and we use wet methods instead of dry sanding.",
            "Old glazing putty and window paint are handled with the same care, since windows are a common lead dust source.",
            "Debris is bagged and removed, and we clean up daily so gardens and walkways stay clear.",
          ],
        },
      ],
    },
    {
      heading: "River valley weather and exterior timing",
      id: "snohomish-climate",
      body: [
        // source: https://en.wikipedia.org/wiki/Snohomish,_Washington (city on the north bank of the Snohomish River where the Pilchuck River joins it; river floods in winter)
        {
          type: "p",
          text: "Snohomish sits where the Pilchuck River meets the Snohomish River, on a low hill above a wide, flat valley. That valley holds fog and heavy dew, especially in late summer and fall, so September mornings often start wet even on dry days. We wait for siding to dry before painting, which can mean later starts and shorter painting days at the end of the season.",
        },
        {
          type: "p",
          text: "Our exterior window here is roughly June through September. Porches, steps and the lowest siding boards near the ground take the most moisture through the winter, and on older houses that's where we find the most rot. Shaded north walls and homes under big trees near Blackmans Lake also see more moss and mildew.",
        },
      ],
    },
    {
      heading: "How we paint Snohomish homes",
      id: "snohomish-services",
      body: [
        {
          type: "p",
          text: "[Exterior painting](/services/exterior-painting) on a historic Snohomish house means hand scraping, wood repair with matching profiles, reglazing windows where needed, priming bare wood and brushing out detailed trim. Newer homes on the edge of town need lighter prep: washing, caulk and even coverage.",
        },
        {
          type: "p",
          text: "Inside, older homes often have original fir trim, wainscoting, built-ins and plaster walls. [Millwork painting](/services/millwork-painting) and [interior painting](/services/interior-painting) cover those, and [custom finishes](/services/custom-painting) can match a period look. For the downtown storefronts and mixed-use buildings, we also take on [commercial painting](/services/commercial-painting).",
          confirm: "Hunter/Erik: confirm we take on commercial storefront work in downtown Snohomish.",
        },
        {
          type: "callout",
          title: "Color help for historic homes",
          text: "We'll brush out large samples on your house so you can see a period color scheme in real light before you commit. Request an [estimate](/estimate) to get started.",
          confirm: PROMISE,
        },
      ],
    },
  ],
  neighborhoods: [
    { name: "Historic District", note: "1860s to 1920s Victorians and bungalows; lead-safe prep and detailed trim.", confirm: SERVE },
    { name: "Downtown / First Street", note: "Historic storefronts and upper-floor apartments along the river.", confirm: SERVE },
    { name: "Midtown", note: "One of the city's design districts, with a mix of homes and businesses.", confirm: SERVE },
    { name: "Pilchuck District", note: "Older and newer homes near the Pilchuck River side of town.", confirm: SERVE },
    { name: "Blackmans Lake", note: "Homes around the lake north of downtown; shade and moss.", confirm: SERVE },
    { name: "Dutch Hill", note: "East bank of the Pilchuck River.", confirm: SERVE },
    { name: "Fobes Hill", note: "Hillside homes on the city's west edge above the valley.", confirm: SERVE },
    { name: "Cathcart", note: "Newer subdivisions with Snohomish addresses in unincorporated county.", confirm: SERVE },
  ],
  faqs: [
    {
      id: "snohomish-historic-approval",
      question: "Do I need approval to repaint my house in the Snohomish Historic District?",
      answer: [
        "Usually not for a straight repaint; the city's Historic District Design Standards treat maintenance that replaces existing materials with the same as pre-approved. Bigger changes, like new siding, windows or porch work, can need Design Review Board review.",
        "Call the city's planning staff before you choose colors if you're unsure. City Hall also keeps examples of historically appropriate paint colors.",
      ],
      confirm: HISTORIC,
    },
    {
      id: "snohomish-wood-windows",
      question: "Can you paint and repair original wood windows on an old Snohomish house?",
      answer: [
        "Yes, we scrape, reglaze, prime and paint original wood windows as part of exterior work on older homes. The city's historic standards prefer keeping original wood windows where possible, and restored sashes last a long time once they're sealed again.",
        "Badly rotted sashes or sills may need a carpenter. We'll point those out at the walkthrough so you know before the job starts.",
      ],
    },
    {
      id: "snohomish-lead-paint",
      question: "Is lead paint a concern on Snohomish's Victorian homes?",
      answer: [
        "Yes, any home built before 1978 can have lead paint, and a house from the 1890s or 1910s almost certainly does under its newer coats.",
        "We follow EPA RRP lead-safe practices on every job that disturbs paint in a pre-1978 home, with containment, wet scraping and full cleanup.",
      ],
    },
    {
      id: "snohomish-best-months",
      question: "When is the best time to paint a house exterior in Snohomish?",
      answer: [
        "The best time is roughly June through September, with July and August the most dependable. Valley fog and dew can delay morning starts in September.",
        "Interior painting and cabinet work can happen any time of year.",
      ],
    },
  ],
  nearby: ["monroe-wa", "mill-creek-wa", "everett-wa", "woodinville-wa"],
  updatedAt: "2026-10-26",
};

export default page;
