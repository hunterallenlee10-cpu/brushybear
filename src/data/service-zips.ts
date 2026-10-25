/**
 * ZIP codes for the five launch cities. The form uses them to tell people
 * right away whether they're in our area (we still take the request if
 * not). Confirm with Erik before launch: whether to include 98053 (much
 * of it is unincorporated King County east of Redmond) and the PO-box-only
 * ZIPs (98009, 98015, 98073, 98083).
 */
export const SERVICE_ZIPS: Record<string, string> = {
  "98004": "bellevue-wa",
  "98005": "bellevue-wa",
  "98006": "bellevue-wa",
  "98007": "bellevue-wa",
  "98008": "bellevue-wa",
  "98009": "bellevue-wa",
  "98015": "bellevue-wa",
  "98033": "kirkland-wa",
  "98034": "kirkland-wa",
  "98083": "kirkland-wa",
  "98052": "redmond-wa",
  "98053": "redmond-wa",
  "98073": "redmond-wa",
  "98074": "sammamish-wa",
  "98075": "sammamish-wa",
  "98027": "issaquah-wa",
  "98029": "issaquah-wa",
};

/** City slug for a ZIP, or undefined if it's outside the launch area. */
export const cityForZip = (zip: string): string | undefined => SERVICE_ZIPS[zip.trim()];
