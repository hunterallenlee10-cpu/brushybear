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
      drawnPos = -1;
    };

    /** Nearest loaded frame to `i`, so the scrub never shows a blank. */
    const nearest = (i: number) => {
      for (let d = 0; d < set.count; d++) {
        if (frames[i - d]) return i - d;
        if (frames[i + d]) return i + d;
      }
      return -1;
    };

    const paint = (img: HTMLImageElement, alpha: number) => {
      const cw = canvas.width;
      const ch = canvas.height;
      // object-fit: cover, anchored right so the house stays clear of the copy.
      const s = Math.max(cw / img.naturalWidth, ch / img.naturalHeight);
      const w = img.naturalWidth * s;
      const h = img.naturalHeight * s;
      ctx.globalAlpha = alpha;
      ctx.drawImage(img, cw - w, (ch - h) / 2, w, h);
    };

    /**
     * Draw position `pos` (a fractional frame index). The two neighbouring
     * frames are blended, so 120 frames scrub as smoothly as twice that.
     */
    let drawnPos = -1;
    const draw = (pos: number) => {
      const lo = Math.floor(pos);
      const a = nearest(lo);
      if (a < 0) return;
      const hi = Math.min(lo + 1, set.count - 1);
      const frac = frames[hi] && a === lo ? pos - lo : 0;
      const key = a + Math.round(frac * 16) / 16;
      if (key === drawnPos && drawn === a) return;
      paint(frames[a]!, 1);
      if (frac > 0.02) paint(frames[hi]!, frac);
      ctx.globalAlpha = 1;
      drawn = a;
      drawnPos = key;
      if (!section.dataset.ready) section.dataset.ready = "1";
    };

    const target = () => {
      const r = section.getBoundingClientRect();
      const total = r.height - window.innerHeight;
      return total > 0 ? clamp(-r.top / total) : 0;
    };

    const smooth = (p: number, a: number, b: number) => {
      const x = clamp((p - a) / (b - a));
      return x * x * (3 - 2 * x);
    };
    let lastP = -1;
    const paintCopy = (p: number) => {
      if (Math.abs(p - lastP) < 0.0005) return;
      lastP = p;
      const st = section.style;
      st.setProperty("--hero-p", p.toFixed(4));
      st.setProperty("--b0", (1 - smooth(p, 0.16, 0.24)).toFixed(3));
      st.setProperty("--b1", (smooth(p, 0.24, 0.32) * (1 - smooth(p, 0.46, 0.54))).toFixed(3));
      st.setProperty("--b2", (smooth(p, 0.54, 0.62) * (1 - smooth(p, 0.72, 0.8))).toFixed(3));
      st.setProperty("--b3", smooth(p, 0.8, 0.9).toFixed(3));
      if (p > 0.8) section.dataset.final = "1";
      else delete section.dataset.final;
    };

    const tick = () => {
      const t = target();
      current += (t - current) * 0.14;
      if (Math.abs(t - current) < 0.0005) current = t;
      paintCopy(current);
      draw(current * (set.count - 1));
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

    // Load frames coarse-first, a few at a time, at low priority. Only the
    // coarse pass (every 8th frame) loads on its own, once the page is idle;
    // the rest waits for the first sign the visitor is scrolling, so people
    // who never scroll never download them.
    const order = loadOrder(set.count);
    const coarse = Math.ceil(set.count / 8);
    let next = 0;
    let limit = coarse;
    let active = 0;
    const pump = () => {
      while (!cancelled && active < 4 && next < Math.min(limit, order.length)) {
        const i = order[next++];
        active++;
        const img = new Image();
        img.decoding = "async";
        (img as HTMLImageElement & { fetchPriority?: string }).fetchPriority = i === 0 ? "high" : "low";
        img.src = `${set.prefix}${pad(i + 1)}.webp`;
        // decode() works off the main thread, so drawing it later is cheap.
        img
          .decode()
          .then(() => {
            if (cancelled) return;
            frames[i] = img;
            // Redraw only if this frame is closer than the stand-in on screen.
            const at = Math.round(current * (set.count - 1));
            if (Math.abs(i - at) < Math.abs(drawn - at)) drawn = -1;
          })
          .catch(() => {})
          .finally(() => {
            active--;
            pump();
          });
      }
    };
    const idle = (fn: () => void) =>
      typeof window.requestIdleCallback === "function"
        ? window.requestIdleCallback(fn, { timeout: 2500 })
        : globalThis.setTimeout(fn, 1200);
    const begin = () => idle(pump);
    const intent = ["scroll", "wheel", "touchstart", "pointerdown", "keydown"] as const;
    const full = () => {
      intent.forEach((ev) => window.removeEventListener(ev, full));
      limit = order.length;
      pump();
    };
    intent.forEach((ev) => window.addEventListener(ev, full, { passive: true, once: true }));
    if (document.readyState === "complete") begin();
    else window.addEventListener("load", begin, { once: true });

    return () => {
      cancelled = true;
      stop();
      io.disconnect();
      ro.disconnect();
      window.removeEventListener("load", begin);
      intent.forEach((ev) => window.removeEventListener(ev, full));
    };
  }, [desktop, mobile, loopSrc]);

  return (
    <>
      <canvas ref={canvasRef} aria-hidden="true" className="hero-canvas absolute inset-0 h-full w-full" />
      <video ref={videoRef} hidden muted loop playsInline aria-hidden="true" className="absolute inset-0 h-full w-full object-cover object-right" />
    </>
  );
}
