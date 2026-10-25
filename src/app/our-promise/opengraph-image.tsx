import { OG_SIZE, OG_TYPE, renderOg } from "@/lib/og";

export const alt = "Brushy Bear Painters";
export const size = OG_SIZE;
export const contentType = OG_TYPE;

export default function Image() {
  return renderOg({ kicker: "The Brushy Bear Promise", title: "Written quote in 24 hours. Start on time or $250 off." });
}
