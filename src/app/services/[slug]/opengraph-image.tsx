import { getService, publishedServices } from "@/data/services";
import { getServicePage } from "@/data/service-pages";
import { OG_SIZE, OG_TYPE, renderOg } from "@/lib/og";

export const alt = "Brushy Bear Painters service";
export const size = OG_SIZE;
export const contentType = OG_TYPE;

export function generateStaticParams() {
  return publishedServices().map((s) => ({ slug: s.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getService(slug);
  return renderOg({ kicker: service?.name ?? "House painting", title: getServicePage(slug)?.h1 ?? "Eastside house painting" });
}
