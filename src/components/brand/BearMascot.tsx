import Image, { type StaticImageData } from "next/image";
import bearLadder from "@/assets/brand/bear-ladder.png";
import bearSleeping from "@/assets/brand/bear-sleeping.png";
import bearThumbsUp from "@/assets/brand/bear-thumbs-up.png";
import bearUmbrella from "@/assets/brand/bear-umbrella.png";
import bearClipboard from "@/assets/brand/bear-clipboard.png";
import bearPoint from "@/assets/brand/bear-point.png";
import bearSwatches from "@/assets/brand/bear-swatches.png";
import bearWave from "@/assets/brand/bear-wave.png";
import bearBrush from "@/assets/brand/logo-bear-brush.png";
import bearRollerUp from "@/assets/brand/logo-bear-roller.png";
import bearRollerShoulder from "@/assets/brand/logo-bear-roller-shoulder.png";

/**
 * The gold bear. brush / roller-up / roller-shoulder are cut from the three
 * logo files in the "Brushy Bear Painters" Drive folder; wave, thumbs-up, ladder, umbrella and sleeping were made with
 * Higgsfield using the logo bear as the reference, as were point, clipboard
 * and swatches (see AI_ASSETS.md).
 */
const POSES = {
  brush: bearBrush,
  "roller-up": bearRollerUp,
  "roller-shoulder": bearRollerShoulder,
  wave: bearWave,
  "thumbs-up": bearThumbsUp,
  ladder: bearLadder,
  umbrella: bearUmbrella,
  sleeping: bearSleeping,
  point: bearPoint,
  clipboard: bearClipboard,
  swatches: bearSwatches,
} satisfies Record<string, StaticImageData>;

export type BearPose = keyof typeof POSES;
export const BEAR_POSES = Object.keys(POSES) as BearPose[];

type Props = {
  pose?: BearPose;
  /** Decorative by default; pass alt text only when the bear carries meaning. */
  alt?: string;
  sizes: string;
  className?: string;
  preload?: boolean;
};

export function BearMascot({ pose = "brush", alt = "", sizes, className, preload }: Props) {
  return <Image src={POSES[pose]} alt={alt} sizes={sizes} className={className} preload={preload} />;
}
