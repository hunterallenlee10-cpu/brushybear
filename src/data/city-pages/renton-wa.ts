import type { CityPage } from "@/data/types";

const SERVE = "Hunter/Erik: confirm we serve this area";
const PROMISE = "Promise: confirm with Erik";
const HOA_PERMIT =
  "Confirm with City of Renton Community and Economic Development that a straight exterior repaint needs no building permit, and confirm which Renton subdivisions (for example on Benson Hill, Talbot Hill and the East Plateau) require HOA color approval.";

const page: CityPage = {
  slug: "renton-wa",
  title: "House Painters in Renton, WA",
  metaDescription:
    "Painters in Renton, WA for wartime Highlands homes, 1960s ramblers and newer hillside houses. Lead-safe prep, dry-season exteriors and HOA color help.",
  h1: "Renton house painters for Highlands cottages, lakeside ramblers and hillside subdivisions",
  eyebrow: "Serving Renton, WA",
  intro: [
    "Brushy Bear Painters is a new residential painting company serving Renton, from Kennydale and the Highlands down to Talbot Hill and Benson Hill. We do interior and exterior painting, cabinets, trim, drywall repair, and deck and fence staining, with a written scope and a walkthrough at the end of every job.",
    "Renton has a wider spread of house ages than most Eastside cities. A small 1940s house built for Boeing workers, a 1960s rambler near the lake and a 2000s two-story on the plateau each need a different amount of scraping, repair and priming. This page covers what we look for in Renton homes, how the lake and the Cedar River valley affect paint, and when lead-safe work and HOA approval come into it.",
  ],
  sections: [
    {
      heading: "Renton's homes span eight decades, so prep varies street to street",
      id: "renton-homes",
      confirm: SERVE,
      body: [
        // source: https://censusreporter.org/data/table/?table=B25034&geo_ids=16000US5357745 (ACS 2024 5-year, B25034: 42,551 units; pre-1980 = 39.1%; 1960s = 12.5%; 1970s = 12.1%; 2000 or later = 30.8%)
        {
          type: "p",
          text: "About 39% of Renton's housing units were built before 1980, and about 31% were built in 2000 or later, according to the Census Bureau's 2020 to 2024 American Community Survey. That split shows up on the ground: older streets close to downtown and the lake, and newer subdivisions on the hills to the south and east.",
        },
        { type: "h3", text: "Wartime and postwar homes in the Highlands" },
        // source: https://renton.hosted.civiclive.com/city_hall/parks_and_recreation/museum/city_history/1940_to_1950 (Boeing's 1941 arrival brought federal housing money; large housing projects in the Highlands)
        // source: https://rentonhousing.org/about-us (first project built about 3,000 dwellings near Boeing and PACCAR; most sold to defense workers in the 1950s; many still standing)
        {
          type: "p",
          text: "When Boeing opened its Renton plant during World War II, the government built large housing projects in the Highlands for plant workers, and many of those small houses and duplexes were sold to their occupants in the 1950s and are still lived in today. On these homes we expect many coats of old paint, simple wood siding and trim that has been patched over the years, and the chance of lead in the bottom layers.",
        },
        { type: "h3", text: "1960s and 1970s ramblers" },
        {
          type: "p",
          text: "Kennydale, the Highlands and the streets around Renton Hill have plenty of ranch houses and split-levels from the 1960s and 1970s. Common issues are T1-11 plywood with soft bottom edges, window sills worn down by decades of rain, and fascia boards that have rotted where gutters overflow. We probe and repair those spots before any primer goes on.",
        },
        { type: "h3", text: "Newer subdivisions on Benson Hill, Talbot Hill and the plateau" },
        // source: https://rentonwa.gov/city_hall/community_and_economic_development/long_range_planning/annexations (Benson Hill Communities annexation, March 1, 2008: 4.2 square miles, 16,272 residents)
        {
          type: "p",
          text: "Benson Hill became part of Renton in 2008, and much of south and east Renton is 1980s through 2000s subdivision housing. These homes usually need their first or second full repaint: fiber cement or hardboard lap siding, cracked builder caulk, and south walls that have faded and chalked.",
        },
      ],
    },
    {
      heading: "Lake Washington, the Cedar River and Renton weather",
      id: "renton-climate",
      body: [
        // source: https://en.wikipedia.org/wiki/Renton,_Washington (average annual precipitation 37.1 inches; November and December about 6 inches each)
        {
          type: "p",
          text: "Renton averages a little over 37 inches of rain a year, with November and December the wettest months, so we book exterior painting for the dry season, roughly June through September. Paint needs dry siding and temperatures above the label minimum through the full drying time, and the shoulder months can't promise that.",
        },
        { type: "h3", text: "Kennydale and the south end of the lake" },
        // source: https://en.wikipedia.org/wiki/Renton,_Washington (Renton straddles the southeast shore of Lake Washington at the mouth of the Cedar River)
        {
          type: "p",
          text: "Homes along the lake in Kennydale and north Renton get more morning dew and damp air than houses up on the hills. Decks, railings and lake-facing trim wear fastest, and mildew shows up on the shaded side. We wash, treat mildew and wait for wood to dry out before coating it.",
        },
        { type: "h3", text: "The Cedar River valley and wooded slopes" },
        {
          type: "p",
          text: "Streets near the Cedar River and along the wooded slopes between downtown and the plateau can hold fog and shade well into the day. North walls there grow moss, siding near the ground stays wet, and paint takes longer to cure. Later morning starts and careful scheduling around shade help the coating set up properly.",
        },
      ],
    },
    {
      heading: "Lead-safe painting for Renton homes built before 1978",
      id: "renton-lead",
      body: [
        // source: https://censusreporter.org/data/table/?table=B25034&geo_ids=16000US5357745 (ACS 2024 5-year: 39.1% of Renton housing units built before 1980; 7.3% before 1950)
        {
          type: "p",
          text: "If your Renton home was built before 1978 and the job will disturb old paint, we treat it as a lead-safe job. That covers roughly two in five homes in the city, including most of the wartime and postwar houses in the Highlands and the older streets near downtown.",
        },
        {
          type: "ul",
          items: [
            "We follow EPA RRP (Renovation, Repair and Painting) lead-safe work practices whenever we disturb paint in a pre-1978 home.",
            "Ground and floors are covered with plastic, and we use wet scraping and dust control instead of dry sanding old paint into the air.",
            "Chips and debris are collected and bagged, not left in the yard or garden.",
            "Windows and doors get extra care, since sashes and jambs that rub are a common source of lead dust inside.",
          ],
        },
        {
          type: "p",
          text: "Not sure when your house was built? The King County Assessor's parcel record lists the year built.",
        },
      ],
    },
    {
      heading: "Permits and HOA color approval in Renton",
      id: "renton-hoa",
      confirm: HOA_PERMIT,
      body: [
        {
          type: "p",
          text: "A straight repaint usually doesn't need a city permit, but many of Renton's newer subdivisions have HOAs that review exterior colors before work starts. That's most common in the planned neighborhoods on Benson Hill, Talbot Hill and the East Plateau.",
        },
        // source: https://kingcounty.gov/en/dept/local-services/buildings-property/development-planning-regulations/regional-planning/annexations/potential-annexation-areas/fairwood (Fairwood voters rejected annexation in 2010; remains urban unincorporated King County)
        {
          type: "p",
          text: "Fairwood homes have Renton addresses but sit in unincorporated King County, so any permit question there goes to the county, and the local association sets color rules. Send us your HOA's approved palette or design guidelines with your estimate request and we'll help put the color submission together, then schedule the start after approval comes back.",
        },
      ],
    },
    {
      heading: "What we paint in Renton",
      id: "renton-services",
      body: [
        {
          type: "p",
          text: "[Exterior painting](/services/exterior-painting) on Renton's older homes means washing, scraping, wood repair, caulking and spot priming before the finish coats. On the newer subdivisions the steps are the same, just lighter, with more attention to caulk joints and faded south walls.",
        },
        {
          type: "p",
          text: "Inside, small Highlands houses and 1960s ramblers often have tired trim, dated paneling and plaster or drywall cracks. [Interior painting](/services/interior-painting) and [drywall repair and painting](/services/drywall-painting) handle those, and [cabinet painting](/services/cabinet-painting) can refresh a solid older kitchen without replacing it. Renton also has a lot of townhome and condo communities, and we take on [HOA painting](/services/hoa-painting) for associations that need a building or a whole complex done.",
        },
        {
          type: "callout",
          title: "Start with a written estimate",
          text: "Request a [walkthrough estimate](/estimate) and you'll get a written scope that lists every surface, the prep steps and the products, or try the [instant estimate](/instant-estimate) for a first ballpark.",
          confirm: PROMISE,
        },
      ],
    },
  ],
  neighborhoods: [
    { name: "Kennydale", note: "North Renton along Lake Washington; damp decks and lake-facing trim.", confirm: SERVE },
    { name: "Renton Highlands", note: "Wartime and postwar houses; plan for lead-safe prep.", confirm: SERVE },
    { name: "North Renton", note: "Older streets near the Boeing plant and the lake.", confirm: SERVE },
    { name: "Renton Hill", note: "Older hillside streets above downtown and the Cedar River.", confirm: SERVE },
    { name: "Talbot Hill", note: "Hillside subdivisions south of downtown; check HOA color rules.", confirm: SERVE },
    { name: "Benson Hill", note: "Annexed in 2008; mostly 1980s and newer subdivisions.", confirm: SERVE },
    { name: "Cascade", note: "Established single-family streets in southeast Renton.", confirm: SERVE },
    { name: "Maplewood", note: "Wooded streets near the Cedar River and Maplewood golf course.", confirm: SERVE },
    { name: "East Plateau", note: "Newer subdivisions east of the Highlands; HOA submissions are common.", confirm: SERVE },
    { name: "Fairwood", note: "Renton addresses in unincorporated King County.", confirm: SERVE },
  ],
  faqs: [
    {
      id: "renton-highlands-lead",
      question: "Does my older Renton Highlands house need lead-safe painting?",
      answer: [
        "Yes, if the job will disturb old paint and the house was built before 1978, it should be painted with lead-safe work practices. Many Highlands homes date from the 1940s and 1950s and still have lead paint under newer coats, especially on trim, windows and doors.",
        "We follow EPA RRP practices on those jobs: containment, wet scraping, dust control and full cleanup of chips. Tell us the year built when you request an estimate so the plan and the quote cover it.",
      ],
    },
    {
      id: "renton-permit-hoa",
      question: "Do I need a permit to repaint my house in Renton?",
      answer: [
        "Repainting a house usually doesn't need a city permit, but HOAs often require approval for exterior color changes. Check your covenants or ask your board before you pick colors, especially in the newer subdivisions on Benson Hill, Talbot Hill and the plateau.",
        "If you live in Fairwood, you're in unincorporated King County, so county rules apply instead of the City of Renton's.",
      ],
      confirm: HOA_PERMIT,
    },
    {
      id: "renton-best-months",
      question: "When is the best time to paint a house exterior in Renton?",
      answer: [
        "The best time is the dry season, roughly June through September, when siding stays dry and temperatures stay above the paint's minimum. July and August are usually the most reliable.",
        "Lakeside homes in Kennydale and shaded lots near the Cedar River can stay damp into June, so we check moisture before we start. Interior and cabinet work runs all year.",
      ],
    },
    {
      id: "renton-condo-hoa",
      question: "Do you paint townhome and condo communities in Renton?",
      answer: [
        "Yes, we take on HOA and multifamily painting in Renton as well as single-family homes.",
        "For an association, we walk the property with the board or manager, write a scope by building, and plan the order of work so residents know when their unit is affected.",
      ],
      confirm: "Hunter/Erik: confirm we take on HOA and multifamily painting in Renton, and that we offer per-building scheduling for associations.",
    },
  ],
  nearby: ["newcastle-wa", "bellevue-wa", "mercer-island-wa", "issaquah-wa"],
  updatedAt: "2026-10-26",
};

export default page;
