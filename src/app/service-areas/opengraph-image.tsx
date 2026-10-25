import { OG_SIZE, OG_TYPE, renderOg } from "@/lib/og";

export const alt = "Brushy Bear Painters";
export const size = OG_SIZE;
export const contentType = OG_TYPE;

export default function Image() {
  return renderOg({ kicker: "Service areas", title: "Eastside house painting in five cities" });
}
