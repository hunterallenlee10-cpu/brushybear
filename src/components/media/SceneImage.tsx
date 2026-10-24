import Image, { type StaticImageData } from "next/image";
import { PlaceholderImage } from "@/components/media/PlaceholderImage";
import { hasServiceArt, ServiceArt } from "@/components/media/ServiceArt";

/**
 * Mood images for services and sections (Higgsfield, Phase 7). These are
 * illustrations of the kind of work, never captioned as our jobs. Until a
 * scene exists, a drawn brand illustration (or a labeled placeholder) holds
 * its space.
 */
export const SCENES: Record<string, { src: StaticImageData; alt: string } | undefined> = {};

const LABELS: Record<string, string> = {
  "interior-painting": "Interior scene coming",
  "exterior-painting": "Exterior scene coming",
  "cabinet-painting": "Kitchen scene coming",
  "deck-and-fence-staining": "Deck scene coming",
};

type Ratio = "16/9" | "4/3" | "3/2" | "1/1";

export function SceneImage({ scene, ratio = "3/2", sizes = "(min-width: 1024px) 600px, 100vw", preload }: { scene: string; ratio?: Ratio; sizes?: string; preload?: boolean }) {
  const img = SCENES[scene];
  if (!img) {
    if (hasServiceArt(scene)) return <ServiceArt slug={scene} ratio={ratio} />;
    return <PlaceholderImage label={LABELS[scene] ?? "Image coming"} ratio={ratio} />;
  }
  return (
    <div className="relative overflow-hidden rounded-[var(--radius-sticker)]" style={{ aspectRatio: ratio }}>
      <Image src={img.src} alt={img.alt} fill sizes={sizes} className="object-cover" preload={preload} />
    </div>
  );
}
