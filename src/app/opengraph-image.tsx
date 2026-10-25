import { OG_SIZE, OG_TYPE, renderOg } from "@/lib/og";

export const alt = "Brushy Bear Painters";
export const size = OG_SIZE;
export const contentType = OG_TYPE;

export default function Image() {
  return renderOg({ kicker: "Free written estimate", title: "Eastside house painting that holds up to the rain." });
}
