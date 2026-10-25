import { getCity, publishedCities } from "@/data/cities";
import { OG_SIZE, OG_TYPE, renderOg } from "@/lib/og";

export const alt = "Brushy Bear Painters service area";
export const size = OG_SIZE;
export const contentType = OG_TYPE;

export function generateStaticParams() {
  return publishedCities().map((c) => ({ city: c.slug }));
}

export default async function Image({ params }: { params: Promise<{ city: string }> }) {
  const { city } = await params;
  const c = getCity(city);
  return renderOg({ kicker: c ? `${c.name}, WA` : "Eastside, WA", title: c ? `House painters in ${c.name}` : "Eastside house painting" });
}
