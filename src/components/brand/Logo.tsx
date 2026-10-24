import Image from "next/image";
import wordmark from "@/assets/brand/logo-wordmark.png";
import { SITE } from "@/config/site";

/**
 * The "Brushy Bear / Painters" wordmark, cropped from the master logo with its
 * sticker border rebuilt around it. Never redrawn or recolored.
 */
export function Wordmark({ className, sizes = "(min-width: 768px) 190px, 150px" }: { className?: string; sizes?: string }) {
  return <Image src={wordmark} alt={SITE.name} sizes={sizes} className={className} />;
}
