import type { Confirmable } from "@/data/types";

/**
 * "At a glance" notes at the top of each city page: rain, shade, moss,
 * siding and HOAs. Every note summarizes a fact already on that city's page
 * (with its source or confirm note there); nothing new is claimed here.
 */
export type LocalNote = Confirmable & { topic: "Rain" | "Shade" | "Moss" | "Siding" | "HOAs" | "Sun"; text: string };

export const CITY_NOTES: Record<string, LocalNote[]> = {
  "bellevue-wa": [
    { topic: "Rain", text: "Lakeside homes in West Bellevue and Newport see more morning damp than homes inland." },
    { topic: "Shade", text: "Fir- and cedar-shaded lots around Bridle Trails and Cougar Mountain dry slowly after rain." },
    { topic: "Moss", text: "Moss and mildew show up first on north walls and low siding under trees." },
    { topic: "Siding", text: "1950s ramblers have layered paint on wood lap siding; 1970s homes often have T1-11 plywood." },
    { topic: "HOAs", text: "Hillside subdivisions often need body, trim and door colors approved before work starts.", confirm: "Confirm which Bellevue subdivisions require HOA color approval." },
  ],
  "kirkland-wa": [
    { topic: "Sun", text: "West-facing walls and decks on the lake slopes take long afternoon sun and water glare." },
    { topic: "Shade", text: "Finn Hill lots under tall firs stay shaded most of the day, so siding stays damp." },
    { topic: "Moss", text: "Moss grows on north walls and low rows of siding; we wash, treat and dry before priming." },
    { topic: "Siding", text: "1970s homes are often cedar lap, shakes or T1-11; newer townhomes are mostly fiber cement." },
    { topic: "HOAs", text: "In many townhome and condo communities the association paints the outside itself.", confirm: "Confirm how common HOA-managed exteriors are in Kirkland communities." },
  ],
  "redmond-wa": [
    { topic: "Rain", text: "The valley floor near the river holds fog and heavy dew well into late-summer mornings." },
    { topic: "Shade", text: "Education Hill's big trees mean slow-drying siding and mildew on trim." },
    { topic: "Moss", text: "Washing and mildew treatment are standard prep on shaded Redmond walls." },
    { topic: "Siding", text: "Most homes are newer; cedar fences and decks between lots gray fast in wet winters." },
    { topic: "HOAs", text: "Many subdivisions built since the 1980s have covenants with color review.", confirm: "Confirm how common HOA color review is in Redmond subdivisions." },
  ],
  "sammamish-wa": [
    { topic: "Rain", text: "Most of the plateau gets 40 to 50 inches of rain a year, more than the lake cities." },
    { topic: "Shade", text: "Tall Douglas firs and cedars on most lots keep siding damp longer than the calendar suggests." },
    { topic: "Moss", text: "Every exterior starts with washing, mildew treatment and drying time before primer." },
    { topic: "Siding", text: "Mostly cedar lap, shingle or board-and-batten, or fiber cement on newer homes." },
    { topic: "HOAs", text: "A large share of homes are in an HOA, so colors usually need approval first.", confirm: "Confirm the share of Sammamish homes in HOAs." },
  ],
  "issaquah-wa": [
    { topic: "Rain", text: "The city sits near the 50-inch rain line, wetter than Bellevue and Kirkland." },
    { topic: "Shade", text: "Homes on Squak and Cougar slopes sit under second-growth forest and stay damp." },
    { topic: "Moss", text: "Moss and mildew grow fast on north walls, under eaves and on fences by greenbelts." },
    { topic: "Siding", text: "Olde Town has old wood siding with many paint layers; the Highlands are mostly fiber cement." },
    { topic: "HOAs", text: "Most newer hillside communities review colors; most Olde Town houses have no HOA.", confirm: "Confirm HOA coverage in Issaquah hillside communities." },
  ],
};
