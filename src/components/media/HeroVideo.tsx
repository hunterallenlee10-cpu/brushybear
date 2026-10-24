"use client";

import { useEffect, useRef, useState } from "react";
import type { HeroAssets } from "@/config/hero";

type NetworkInfo = { saveData?: boolean; effectiveType?: string };

/**
 * Adds the hero video on top of the still, only after the page has loaded,
 * and never for reduced motion, data saver, or 2G/3G connections. The intro
 * plays once, then the loop takes over. If anything fails, the still stays.
 */
export function HeroVideo({ intro, loop }: Pick<HeroAssets, "intro" | "loop">) {
  const [enabled, setEnabled] = useState(false);
  const [phase, setPhase] = useState<"intro" | "loop">("intro");
  const [visible, setVisible] = useState(false);
  const loopRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const net = (navigator as Navigator & { connection?: NetworkInfo }).connection;
    const slow = net?.saveData || /(^|-)(2g|3g)$/.test(net?.effectiveType ?? "");
    if (reduce || slow) return;
    const start = () => setEnabled(true);
    if (document.readyState === "complete") {
      const id = window.setTimeout(start, 300);
      return () => window.clearTimeout(id);
    }
    window.addEventListener("load", start, { once: true });
    return () => window.removeEventListener("load", start);
  }, []);

  if (!enabled) return null;

  const cls = `absolute inset-0 h-full w-full object-cover transition-opacity duration-300 ${visible ? "opacity-100" : "opacity-0"}`;
  return phase === "intro" ? (
    <video
      key="intro"
      className={cls}
      autoPlay
      muted
      playsInline
      preload="auto"
      aria-hidden="true"
      onPlaying={() => setVisible(true)}
      onEnded={() => {
        setPhase("loop");
        requestAnimationFrame(() => loopRef.current?.play().catch(() => undefined));
      }}
      onError={() => setEnabled(false)}
    >
      <source src={intro.webm} type="video/webm" />
      <source src={intro.mp4} type="video/mp4" />
    </video>
  ) : (
    <video ref={loopRef} key="loop" className={cls} autoPlay muted playsInline loop preload="auto" aria-hidden="true" onError={() => setEnabled(false)}>
      <source src={loop.webm} type="video/webm" />
      <source src={loop.mp4} type="video/mp4" />
    </video>
  );
}
