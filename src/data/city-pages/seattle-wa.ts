import type { CityPage } from "@/data/types";

const SERVE = "Hunter/Erik: confirm we serve this area";
const PROMISE = "Promise: confirm with Erik";
const LANDMARK =
  "Confirm with Seattle Department of Neighborhoods (Historic Preservation) whether a repaint or a paint color change in the Harvard-Belmont Landmark District, or on a designated City Landmark house, needs a Certificate of Approval.";

const page: CityPage = {
  slug: "seattle-wa",
  title: "House Painters in Seattle, WA",
  metaDescription:
    "Seattle house painters for Craftsman bungalows, Tudors and 1940s Cape Cods. Lead-safe prep for pre-1978 homes, old-growth wood repair and dry-season exteriors.",
  h1: "Seattle house painters for Craftsman bungalows, Tudors and older wood homes",
  eyebrow: "Serving Seattle, WA",
  intro: [
    "Brushy Bear Painters is a new residential painting company based on the Eastside, serving Seattle neighborhoods on the north end and along Lake Washington, from Ballard and Wallingford to Wedgwood, Montlake and Madison Park. We paint interiors and exteriors, trim and millwork, cabinets, and decks and fences.",
    "Seattle has some of the oldest houses in the region, and old houses are where good prep matters most. A 1910s Craftsman in Wallingford, a 1920s Tudor in Montlake and a 1940s Cape Cod in Wedgwood each have their own siding, trim and layers of history under the paint. This page covers what we look for in Seattle homes, lead-safe work, how marine air and big trees affect paint, and when the city's landmark districts come into play.",
  ],
  sections: [
    {
      heading: "Seattle's older housing stock and what it means for prep",
      id: "seattle-homes",
      confirm: SERVE,
      body: [
        // source: https://censusreporter.org/data/table/?table=B25034&geo_ids=16000US5363000 (ACS 2024 5-year, B25034: 393,918 units; built 1939 or earlier = 22.8%; before 1950 = 30.1%; before 1980 = 52.8%)
        {
          type: "p",
          text: "Nearly a quarter of Seattle's housing units were built in 1939 or earlier, and more than half before 1980, according to the Census Bureau's 2020 to 2024 American Community Survey. In the single-family neighborhoods north of the Ship Canal and along the lake, that share is often much higher.",
        },
        { type: "h3", text: "Craftsman bungalows and box houses" },
        // source: https://en.wikipedia.org/wiki/Wallingford,_Seattle (45.9% of housing structures built prior to 1939; typified by 1920s box houses and bungalows)
        {
          type: "p",
          text: "In Wallingford, nearly half of the houses were built before 1939, mostly bungalows and the boxy two-story houses Seattle is known for. Ballard, Ravenna and Queen Anne have plenty of the same. These homes often have deep eaves with exposed rafter tails, tapered porch columns, cedar shingles or narrow lap siding, and original wood windows. Every one of those details means more hand scraping, more caulk and more brush work than a newer house.",
        },
        { type: "h3", text: "Tudors and brick-and-stucco homes" },
        // source: https://en.wikipedia.org/wiki/Montlake,_Seattle (built from 1903 through the early 1930s; mainly Craftsman bungalow and Tudor style)
        {
          type: "p",
          text: "Montlake was largely built between 1903 and the early 1930s, with Craftsman bungalows next to Tudors. Tudors bring half-timbering, stucco panels and leaded or divided-light windows. Stucco needs cracks filled and a breathable masonry coating, and the dark trim boards need careful cutting in so the lines stay crisp.",
        },
        { type: "h3", text: "Old-growth wood worth saving" },
        {
          type: "p",
          text: "Many pre-war Seattle houses were built with tight-grained old-growth fir and cedar that holds up far better than most new lumber. When we find a soft sill or a cracked corner board, we repair it with epoxy filler or a matching piece instead of tearing out sound original wood around it.",
        },
        { type: "h3", text: "1940s Cape Cods in Wedgwood and View Ridge" },
        // source: https://en.wikipedia.org/wiki/Wedgwood,_Seattle (most homes built in the 1940s; Balch and Setzer built 500 homes; Cape Cod style)
        {
          type: "p",
          text: "Further northeast, Wedgwood was built up mostly in the 1940s, with hundreds of Cape Cod style houses. These are simpler to paint than a Craftsman but still carry decades of coats, and many have been resided or added onto, so we often find two or three siding types on one house.",
        },
      ],
    },
    {
      heading: "Lead-safe painting is the norm in Seattle",
      id: "seattle-lead",
      body: [
        // source: https://censusreporter.org/data/table/?table=B25034&geo_ids=16000US5363000 (ACS 2024 5-year: 52.8% of Seattle housing units built before 1980)
        {
          type: "p",
          text: "With more than half of Seattle's homes built before 1980, most of the houses we look at in the city call for lead-safe work. Lead paint was banned for residential use in 1978, and on a 100-year-old house the bottom layers almost always predate that.",
        },
        {
          type: "ul",
          items: [
            "We follow EPA RRP lead-safe work practices on every job that disturbs paint in a pre-1978 home.",
            "Seattle lots are often narrow, so containment matters to the neighbors too. We lay plastic along shared side yards and keep chips and dust on your property.",
            "Wet scraping and dust control replace dry sanding, and debris is bagged and removed.",
            "Original wood windows get special care, since rubbing sashes and sills are one of the most common lead dust sources inside an older home.",
          ],
        },
      ],
    },
    {
      heading: "Marine air, big trees and Seattle's painting season",
      id: "seattle-climate",
      body: [
        {
          type: "p",
          text: "Seattle's exterior season is the dry stretch from roughly June through September. Paint needs dry siding and temperatures above the label minimum through the full drying time, so we plan exteriors around those months and keep interior work for the rest of the year.",
        },
        { type: "h3", text: "Salt air near the Sound" },
        {
          type: "p",
          text: "Homes on the west side of Ballard and Queen Anne catch wind and salt air off Puget Sound. That leaves a film on siding and windows that has to be washed off before painting, or the new coat won't bond. Exposed west walls also fade faster, and we may suggest a more durable finish on those faces.",
        },
        { type: "h3", text: "Lake Washington damp" },
        {
          type: "p",
          text: "In Madison Park, Laurelhurst and Montlake, lake air keeps decks, railings and lake-facing trim damp on summer mornings. We wait for surfaces to dry and check moisture before the first coat.",
        },
        { type: "h3", text: "Street trees, shade and moss" },
        {
          type: "p",
          text: "Mature street trees and tall evergreens shade a lot of north-end lots. Shaded walls grow moss and mildew, gutters back up onto fascia, and siding near the ground stays wet. Washing, mildew treatment and drying time are standard prep on those houses.",
        },
      ],
    },
    {
      heading: "Permits, landmark districts and landmark houses",
      id: "seattle-permits",
      confirm: LANDMARK,
      body: [
        // source: https://www.seattle.gov/sdci/permits/do-you-need-a-permit (painting or cleaning a building usually doesn't require a permit, unless in an environmentally critical area)
        {
          type: "p",
          text: "Painting a house usually doesn't need a Seattle building permit. The city lists painting among projects that typically don't require one, though work still has to meet code, and properties in environmentally critical areas can have extra rules.",
        },
        // source: https://www.seattle.gov/neighborhoods/historic-preservation/historic-districts (Seattle has eight historic districts, including Harvard-Belmont Landmark District)
        // source: https://www.seattle.gov/neighborhoods/historic-preservation/certificate-of-approval (Certificate of Approval required before changes to a building's exterior within the historic districts and to designated features of City Landmarks)
        // source: https://www.seattle.gov/neighborhoods/historic-preservation/historic-districts/harvard-belmont-landmark-district (designated 1980; essentially residential neighborhood)
        {
          type: "p",
          text: "Historic districts are different. Seattle has eight of them, and a Certificate of Approval from the Department of Neighborhoods is required before exterior changes within them. Most are commercial, but the Harvard-Belmont Landmark District on Capitol Hill is mostly homes. Individually designated City Landmark houses also need approval before changes to their protected features.",
        },
        {
          type: "p",
          text: "If your home is in Harvard-Belmont or is a designated landmark, check with the district coordinator before choosing colors. We'll provide color names, sample photos and a written scope for the application, and schedule the work after approval.",
        },
      ],
    },
    {
      heading: "How we paint Seattle homes",
      id: "seattle-services",
      body: [
        {
          type: "p",
          text: "[Exterior painting](/services/exterior-painting) on an older Seattle house starts with washing, hand scraping, sanding edges smooth, wood repair, caulking and priming bare wood. Multi-color Craftsman schemes with separate body, trim, sash and accent colors are common here, and we price and schedule the extra cutting in up front.",
        },
        {
          type: "p",
          text: "Inside, Seattle homes often have original fir trim, built-in cabinets and plaster walls. [Millwork painting](/services/millwork-painting) covers trim, doors and built-ins, [interior painting](/services/interior-painting) covers walls and ceilings, and plaster cracks are repaired as part of prep. For kitchens, [cabinet painting](/services/cabinet-painting) is a good fit for sound older boxes. Have a look at our [FAQs](/faqs) or request an [estimate](/estimate).",
        },
        {
          type: "callout",
          title: "Weather delays",
          text: "If rain moves your exterior start, we reschedule at no charge. Painting wet siding on a 100-year-old house is never worth saving a day.",
          confirm: PROMISE,
        },
      ],
    },
  ],
  neighborhoods: [
    { name: "Ballard", note: "Bungalows and box houses alongside newer townhomes; salt air on the west side.", confirm: SERVE },
    { name: "Wallingford", note: "Nearly half the houses built before 1939; plan for lead-safe prep.", confirm: SERVE },
    { name: "Queen Anne", note: "Older hillside homes with tall walls and views of the Sound.", confirm: SERVE },
    { name: "Capitol Hill", note: "Includes the Harvard-Belmont Landmark District; check approval rules first.", confirm: SERVE },
    { name: "Montlake", note: "1900s to early 1930s Craftsman and Tudor homes along the Ship Canal.", confirm: SERVE },
    { name: "Madison Park", note: "Older homes near Lake Washington; damp decks and trim.", confirm: SERVE },
    { name: "Laurelhurst", note: "Larger lots on the lake with mature trees.", confirm: SERVE },
    { name: "Ravenna", note: "Early 1900s houses around the wooded Ravenna Park ravine.", confirm: SERVE },
    { name: "Wedgwood", note: "Mostly 1940s Cape Cod style homes.", confirm: SERVE },
    { name: "View Ridge", note: "Postwar homes on the hill above Lake Washington.", confirm: SERVE },
  ],
  faqs: [
    {
      id: "seattle-old-growth-siding",
      question: "Should I replace the old siding on my Seattle Craftsman before painting?",
      answer: [
        "Usually not; most original old-growth siding on a Seattle Craftsman can be repaired and repainted. Old-growth fir and cedar are dense and stable, and a few soft boards or split shingles don't mean the whole wall has to go.",
        "At the walkthrough we probe sills, corner boards and the bottom courses, then list specific repairs in the written quote so you can see what's being fixed and why.",
      ],
    },
    {
      id: "seattle-lead-paint",
      question: "Does my 1920s Seattle house have lead paint?",
      answer: [
        "Very likely; a house built in the 1920s almost certainly has lead paint somewhere under the newer coats. Lead paint was used on homes until it was banned for residential use in 1978.",
        "We follow EPA RRP lead-safe practices on every job that disturbs paint in a pre-1978 home, with containment, wet scraping, dust control and full cleanup. If you want certainty before the job, a certified lead inspector can test the paint.",
      ],
    },
    {
      id: "seattle-permit-landmark",
      question: "Do I need a permit to paint my house in Seattle?",
      answer: [
        "No, painting a house usually doesn't need a Seattle building permit. The exception to watch for is historic designation: homes in the Harvard-Belmont Landmark District or designated as City Landmarks need a Certificate of Approval before exterior changes.",
        "If you're not sure whether your house is designated, the Department of Neighborhoods' Historic Preservation Program can tell you.",
      ],
      confirm: LANDMARK,
    },
    {
      id: "seattle-service-area",
      question: "Which Seattle neighborhoods do you serve?",
      answer: [
        "We focus on north Seattle and the neighborhoods along Lake Washington, including Ballard, Wallingford, Queen Anne, Capitol Hill, Montlake, Madison Park, Laurelhurst, Ravenna, Wedgwood and View Ridge.",
        "If you're elsewhere in the city, ask anyway and we'll tell you straight whether we can schedule it.",
      ],
      confirm: "Hunter/Erik: confirm which Seattle neighborhoods we serve and whether we take jobs in south and West Seattle.",
    },
  ],
  nearby: ["shoreline-wa", "mercer-island-wa", "bellevue-wa", "kirkland-wa"],
  updatedAt: "2026-10-26",
};

export default page;
