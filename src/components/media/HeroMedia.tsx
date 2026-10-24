import { HeroScene } from "@/components/media/HeroScene";

/**
 * The hero visual inside a sticker frame. Today: the illustrated scene.
 * Phase 7 adds the Higgsfield still + video here (still as the main image,
 * video only after load, never with reduced motion or data saver).
 */
export function HeroMedia() {
  return (
    <div className="sticker relative -rotate-1 [--sticker-pad:0.5rem] md:[--sticker-pad:0.625rem]">
      <div className="sticker-inner overflow-hidden">
        <HeroScene />
      </div>
    </div>
  );
}
