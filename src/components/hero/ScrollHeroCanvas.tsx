"use client";

import { useEffect, useRef } from "react";

export type FrameSet = {
  /** e.g. "/hero/v1/desktop/f-" → f-001.webp ... */
  prefix: string;
  count: number;
  width: number;
  height: number;
};

type Props = {
  desktop: FrameSet;
  mobile: FrameSet;
  /** Short muted loop for slow connections / data saver. */
  loopSrc: string;
};

const pad = (n: number) => String(n).padStart(3, "0");
const clamp = (n: number, a = 0, b = 1) => Math.min(b, Math.max(a, n));

/** Which frames to fetch first: every 8th, then every 4th, 2nd, then the rest. */
function loadOrder(count: number): number[] {
  const seen = new Set<number>();
  const order: number[] = [];
  for (const step of [8, 4, 2, 1]) {
    for (let i = 0; i < count; i += step) {
      if (!seen.has(i)) {
        seen.add(i);
        order.push(i);
      }
    }
  }
  if (!seen.has(count - 1)) order.push(count - 1);
  return order;
}

/**
 * The painting scroll. Draws pre-cut WebP frames onto a canvas as the
 * visitor scrolls through the hero section, and fades the overlay copy per
 * beat. No scroll listener: an IntersectionObserver starts a rAF loop only
 * while the hero is on screen, and the loop eases toward the scroll
 * position. Frames load coarse-first, so the scrub works early and sharpens
 * as the rest arrive. Under the canvas, the poster is already painted by
 * the server; reduced-motion visitors never load frames (CSS shows the
 * finished house instead).
 */
export function ScrollHeroCanvas({ desktop, mobile, loopSrc }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const section = canvas?.closest<HTMLElement>("[data-scroll-hero]");
    if (!canvas || !section) return;
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const conn = (navigator as Navigator & { connection?: { saveData?: boolean; effectiveType?: string } }).connection;
    const slow = conn?.saveData || /(^|-)(2g|3g)$/.test(conn?.effectiveType ?? "");
    const set = matchMedia("(min-width: 768px) and (min-aspect-ratio: 1/1)").matches ? desktop : mobile;

    // Slow or data-saver connections get the short loop instead of the frames.
    if (slow) {
      const v = videoRef.current;
      if (v) {
        v.src = loopSrc;
        v.hidden = false;
        v.play().catch(() => {});
      }
      section.dataset.mode = "loop";
      return;
    }

    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    const frames: (HTMLImageElement | null)[] = new Array(set.count).fill(null);
    let cancelled = false;
    let drawn = -1;
    let current = 0; // eased progress 0..1
    let raf = 0;
    let running = false;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const { clientWidth: w, clientHeight: h } = canvas;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      drawn = -1;
    };

    /** Nearest loaded frame to `i`, so the scrub never shows a blank. */
    const nearest = (i: number) => {
      for (let d = 0; d < set.count; d++) {
        if (frames[i - d]) return i - d;
        if (frames[i + d]) return i + d;
      }
      return -1;
    };

    const draw = (i: number) => {
      const k = nearest(i);
      if (k < 0 || k === drawn) return;
      const img = frames[k]!;
      const cw = canvas.width;
      const ch = canvas.height;
      // object-fit: cover, anchored right so the house stays clear of the copy.
      const s = Math.max(cw / img.naturalWidth, ch / img.naturalHeight);
      const w = img.naturalWidth * s;
      const h = img.naturalHeight * s;
      ctx.drawImage(img, cw - w, (ch - h) / 2, w, h);
      drawn = k;
      if (!section.dataset.ready) section.dataset.ready = "1";
    };

    const target = () => {
      const r = section.getBoundingClientRect();
      const total = r.height - window.innerHeight;
      return total > 0 ? clamp(-r.top / total) : 0;
    };

    const tick = () => {
      const t = target();
      current += (t - current) * 0.14;
      if (Math.abs(t - current) < 0.0005) current = t;
      section.style.setProperty("--hero-p", current.toFixed(4));
      draw(Math.round(current * (set.count - 1)));
      raf = running ? requestAnimationFrame(tick) : 0;
    };

    const start = () => {
      if (running) return;
      running = true;
      raf = requestAnimationFrame(tick);
    };
    const stop = () => {
      running = false;
      cancelAnimationFrame(raf);
    };

    const io = new IntersectionObserver(([e]) => (e.isIntersecting ? start() : stop()), { rootMargin: "100px 0px" });
    io.observe(section);
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    resize();

    // Load frames coarse-first, a few at a time, at low priority.
    const order = loadOrder(set.count);
    let next = 0;
    const loadOne = (): Promise<void> | undefined => {
      if (cancelled || next >= order.length) return;
      const i = order[next++];
      return new Promise<void>((done) => {
        const img = new Image();
        img.decoding = "async";
        (img as HTMLImageElement & { fetchPriority?: string }).fetchPriority = i === 0 ? "high" : "low";
        img.onload = () => {
          frames[i] = img;
          if (i === 0 || drawn < 0) drawn = -1;
          done();
        };
        img.onerror = () => done();
        img.src = `${set.prefix}${pad(i + 1)}.webp`;
      }).then(() => loadOne());
    };
    // Start after the page's own load, so frames never compete with the poster.
    const begin = () => {
      for (let k = 0; k < 6; k++) loadOne();
    };
    if (document.readyState === "complete") begin();
    else window.addEventListener("load", begin, { once: true });

    return () => {
      cancelled = true;
      stop();
      io.disconnect();
      ro.disconnect();
      window.removeEventListener("load", begin);
    };
  }, [desktop, mobile, loopSrc]);

  return (
    <>
      <canvas ref={canvasRef} aria-hidden="true" className="hero-canvas absolute inset-0 h-full w-full" />
      <video ref={videoRef} hidden muted loop playsInline aria-hidden="true" className="absolute inset-0 h-full w-full object-cover object-right" />
    </>
  );
}
