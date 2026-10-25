"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  /** Height reserved until mounted, so nothing below it moves. */
  minHeight: string;
  /** Only mount when this media query matches (e.g. phones only). */
  media?: string;
  /** How far ahead of the viewport to mount. */
  rootMargin?: string;
};

/**
 * Mounts heavy interactive parts (forms, tools) only when they get near
 * the screen. Keeps the home page's start-up work small, which is what
 * Lighthouse's Total Blocking Time measures. The space is reserved up front.
 */
export function LazyMount({ children, minHeight, media, rootMargin = "800px 0px" }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || show) return;
    if (media && !matchMedia(media).matches) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setShow(true);
          io.disconnect();
        }
      },
      { rootMargin },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [show, media, rootMargin]);

  return (
    <div ref={ref} style={show ? undefined : { minHeight }}>
      {show ? children : null}
    </div>
  );
}
