import type { CityPage } from "@/data/types";

const SERVE = "Hunter/Erik: confirm we serve this area";
const PROMISE = "Promise: confirm with Erik";
const HOA_PERMIT =
  "Confirm with the City of Redmond that a straight exterior repaint needs no building permit; confirm that the Redmond Ridge and Trilogy associations require exterior color approval, and how common covenant color review is in Redmond subdivisions.";

const page: CityPage = {
  slug: "redmond-wa",
  title: "House Painters in Redmond, WA",
  metaDescription:
    "Painters in Redmond, WA for 1990s and newer homes on Education Hill, Grass Lawn and Redmond Ridge. HOA color approval help, dry-season exteriors and interiors.",
  h1: "Redmond house painters for newer homes, wooded hills and HOA neighborhoods",
  eyebrow: "Now serving Redmond, WA",
  intro: [
    "Brushy Bear Painters is a new residential painting company serving Redmond homeowners, from Education Hill and Grass Lawn to the master-planned streets of Redmond Ridge. We handle interior and exterior painting, cabinet painting, and deck and fence staining.",
    // source: https://censusreporter.org/data/table/?table=B25034&geo_ids=16000US5305210,16000US5335940,16000US5357535 (ACS 2024 1-year: built 2000 or later = Redmond 46.7%, Kirkland 31.8%, Bellevue 28.4%)
    "Redmond's homes are younger than Bellevue's or Kirkland's, and that changes the job. Instead of scraping decades of old paint, the work here is often the first full repaint of a 1990s or 2000s house: failing builder caulk, sun-faded siding, worn deck stain and interior walls that never stood up to daily life. Many Redmond homes also sit inside HOAs with color rules, so planning starts before the first brush.",
  ],
  sections: [
    {
      heading: "Redmond's homes are newer, and that changes the prep",
      id: "redmond-homes",
      body: [
        // source: https://censusreporter.org/data/table/?table=B25034&geo_ids=16000US5357535 (ACS 2024 1-year, B25034 Year Structure Built: 38,240 units; 2000 or later = 46.7%; 2010–2019 = 23.2%; pre-1980 = 22.2%)
        {
          type: "p",
          text: "Nearly half of Redmond's housing units were built in 2000 or later, and only about 22% before 1980, according to the Census Bureau's 2024 American Community Survey. The 2010s alone account for nearly a quarter of the city's housing, with much of the newest building in and around Downtown and Overlake.",
        },
        {
          type: "p",
          text: "Single-family neighborhoods like Education Hill, Grass Lawn and North Redmond filled in mostly from the 1970s through the 1990s, with newer subdivisions added since. Those houses are now at the age where caulk, trim and the original exterior coating all wear out at about the same time.",
          confirm: "Confirm era: Education Hill, Grass Lawn and North Redmond homes are mostly 1970s–1990s with newer subdivisions since.",
        },
        { type: "h3", text: "What a first or second repaint involves" },
        {
          type: "ul",
          items: [
            "Builder caulk at window trim, corner boards and siding joints has often shrunk and cracked. We cut out failed caulk and re-seal before painting.",
            "Fiber cement lap siding is common and durable, but its original finish chalks and fades, especially on south and west walls. A thorough wash and a quality acrylic topcoat bring it back.",
            "Hardboard and other engineered wood siding, used on many 1980s and 1990s homes, swells at the bottom edges once water gets in. We seal or replace damaged pieces before painting.",
            "Cedar and T1-11 on Redmond's older homes need the same scraping and spot priming as older houses anywhere on the Eastside.",
            "Vinyl siding can be painted with a vinyl-safe color. We'll tell you if a dark color would risk warping in the sun.",
          ],
        },
      ],
    },
    {
      heading: "Redmond weather: valley mornings, tall trees and the ridge",
      id: "redmond-climate",
      body: [
        {
          type: "p",
          text: "Redmond's exterior season is the same dry window as the rest of the Eastside, roughly June through September, but the city's terrain splits it into a few different conditions.",
        },
        { type: "h3", text: "The Sammamish Valley floor" },
        {
          type: "p",
          text: "Homes near the river and the valley floor, including parts of Downtown and the Willows/Rose Hill area, can hold morning fog and heavy dew well into the day in late summer and fall. We wait for siding to dry before painting, which usually means later morning starts in September.",
        },
        { type: "h3", text: "Education Hill and other wooded hills" },
        // source: https://www.redmond.gov/978 (Education Hill: hillside overlooking the Sammamish Valley, "a significant number of large trees")
        {
          type: "p",
          text: "The city describes Education Hill as a mature neighborhood on a hillside above the Sammamish Valley, with a significant number of large trees. That shade means moss on north walls, mildew on trim and siding that dries slowly after rain, so washing and mildew treatment are standard prep there.",
        },
        { type: "h3", text: "Idylwood and Lake Sammamish" },
        {
          type: "p",
          text: "Near the north end of Lake Sammamish, Idylwood homes deal with lake moisture on decks, railings and lake-facing trim. Stain and paint on those surfaces wear faster and need maintenance coats more often than the rest of the house.",
        },
        { type: "h3", text: "Redmond Ridge and Novelty Hill" },
        {
          type: "p",
          text: "Up on Redmond Ridge, homes sit higher and more exposed than in town. Open streets can take more wind and sun, and cooler mornings shorten the painting day at both ends of the season.",
        },
      ],
    },
    {
      heading: "HOA color approval in Redmond",
      id: "redmond-hoa",
      confirm: HOA_PERMIT,
      body: [
        {
          type: "p",
          text: "If your Redmond home is in a subdivision with an HOA, plan on getting exterior colors approved before painting starts. Repainting a house usually doesn't need a city permit, but HOAs often require approval for exterior color changes, and many Redmond-area subdivisions built since the 1980s have covenants with an architectural review step.",
        },
        // source: https://historylink.org/File/20220 (Redmond Ridge is in unincorporated King County; the area includes Trilogy at Redmond Ridge)
        {
          type: "p",
          text: "Redmond Ridge, Trilogy at Redmond Ridge and nearby Novelty Hill communities are master-planned neighborhoods in unincorporated King County, not inside Redmond city limits, even though they have Redmond addresses. Any permit questions there go to King County rather than the City of Redmond, and the community associations set their own color rules.",
        },
        { type: "h3", text: "How an HOA color submission usually works" },
        {
          type: "ol",
          items: [
            "Find your HOA's design guidelines or approved color palette, usually on the association website or from the management company.",
            "Choose colors with us. We can brush out large samples on the house so you and the committee see them in real light.",
            "Submit the request with color names, where each color goes, and photos of the samples.",
            "We set the start date once written approval is in hand.",
          ],
        },
      ],
    },
    {
      heading: "Older Redmond homes and lead paint",
      id: "redmond-lead",
      body: [
        // source: https://censusreporter.org/data/table/?table=B25034&geo_ids=16000US5357535 (ACS 2024 1-year: 22.2% of Redmond housing units built before 1980)
        {
          type: "p",
          text: "Redmond has fewer pre-1978 homes than its neighbors, but about one in five housing units dates from before 1980, and lead paint is still possible in any home built before 1978. If yours is one of them and the job will disturb old paint, we use EPA RRP lead-safe work practices: containment, dust control and full cleanup of chips and debris.",
        },
        {
          type: "p",
          text: "Not sure when your house was built? The King County Assessor's property record lists the year built, and it's worth knowing before the walkthrough.",
        },
      ],
    },
    {
      heading: "Matching our services to Redmond homes",
      id: "redmond-services",
      body: [
        {
          type: "p",
          text: "Many newer Redmond houses still have the flat builder paint they came with. [Interior painting](/services/interior-painting) replaces it with a scrubbable finish in the rooms that take the most wear, and we fix nail pops and settling cracks in the drywall as part of prep. Builder-grade kitchens from the 1990s and 2000s are good candidates for cabinet painting, which gives solid boxes a hard, smooth finish without a remodel.",
        },
        {
          type: "p",
          text: "Cedar fences between subdivision lots and backyard decks gray quickly in Redmond's wet winters, so [deck and fence staining](/services/deck-and-fence-staining) is a regular part of keeping a newer home looking cared for. For siding and trim, [exterior painting](/services/exterior-painting) is booked in the dry season, after your HOA approval comes through.",
        },
        {
          type: "callout",
          title: "A written quote within 24 hours",
          text: "After the walkthrough you get a written estimate within 24 hours, and one point of contact from the [estimate](/estimate) to the final touch-ups.",
          confirm: PROMISE,
        },
      ],
    },
  ],
  neighborhoods: [
    { name: "Education Hill", note: "Large, mature trees; plan for shade, moss and mildew.", confirm: SERVE },
    { name: "North Redmond", note: "Subdivisions on the north end of the city.", confirm: SERVE },
    { name: "Grass Lawn", note: "Established single-family streets near Grass Lawn Park.", confirm: SERVE },
    { name: "Overlake", note: "Townhomes, condos and older houses in southwest Redmond.", confirm: SERVE },
    { name: "Idylwood", note: "Near Idylwood Park and the north end of Lake Sammamish.", confirm: SERVE },
    { name: "Bear Creek", note: "Wooded streets on the city's east side.", confirm: SERVE },
    { name: "Willows/Rose Hill", note: "Hillside homes between the Sammamish Valley and Kirkland.", confirm: SERVE },
    { name: "Downtown Redmond", note: "Townhomes and condos; mostly interior work.", confirm: SERVE },
    { name: "Redmond Ridge", note: "Unincorporated King County with Redmond addresses; check your association's color rules.", confirm: SERVE },
  ],
  faqs: [
    {
      id: "redmond-ridge-service",
      question: "Do you work in Redmond Ridge and Trilogy?",
      answer: [
        "Yes, we serve Redmond Ridge and Trilogy at Redmond Ridge along with the rest of the Redmond area.",
        "These communities are in unincorporated King County, so their community associations, not the City of Redmond, are the place to check color rules before exterior painting. Send us your approved palette and we'll plan the job around it.",
      ],
      confirm: "Hunter/Erik: confirm we serve Redmond Ridge and Trilogy at Redmond Ridge.",
    },
    {
      id: "redmond-hoa-colors",
      question: "How do I get HOA approval for exterior paint colors in Redmond?",
      answer: [
        "Submit your proposed colors to your HOA's architectural or design review committee and wait for written approval before painting starts.",
        "Most associations want the color names, which parts of the house each color goes on, and sometimes a photo of a painted sample. Approval can take a few weeks, so start in spring if you want a summer exterior date.",
      ],
      confirm: "Confirm typical Redmond-area HOA approval timelines (\"a few weeks\") and what submissions usually require.",
    },
    {
      id: "redmond-newer-home-repaint",
      question: "My Redmond house was built in the 2000s. Does it need repainting already?",
      answer: [
        "It may, depending on which side of the house you look at. South and west walls fade and chalk first, builder caulk cracks as the house ages, and decks and fences need stain far more often than siding needs paint.",
        "Rub a hand across the siding: if it comes away chalky, or caulk joints are open at the trim, it's time for a walkthrough. Repainting before bare siding is exposed costs less than repairing water damage later.",
      ],
    },
    {
      id: "redmond-best-months",
      question: "When should I schedule exterior painting in Redmond?",
      answer: [
        "Schedule exterior painting for the dry season, roughly June through September, and book the walkthrough in spring if your HOA needs to approve colors first.",
        "Valley-floor homes may need later morning starts in September because of dew and fog, and Redmond Ridge mornings run cooler. Interior painting and cabinet painting can be done any time of year.",
      ],
    },
  ],
  nearby: ["kirkland-wa", "bellevue-wa", "sammamish-wa"],
  updatedAt: "2026-10-24",
};

export default page;
