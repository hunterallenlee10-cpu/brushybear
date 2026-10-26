"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState, type ComponentProps } from "react";
import type { EstimateForm as EstimateFormType } from "@/components/estimate/EstimateForm";

type Props = ComponentProps<typeof EstimateFormType>;

const EstimateForm = dynamic(() => import("@/components/estimate/EstimateForm").then((m) => m.EstimateForm), {
  ssr: false,
  loading: () => <FormShell />,
});

/** Same frame and height as the form's first step, so nothing shifts when it loads. */
function FormShell({ onStart }: { onStart?: () => void }) {
  return (
    <div className="min-h-[36rem] rounded-[var(--radius-sticker)] border-2 border-charcoal bg-cream-50 p-6 text-charcoal shadow-[0_0_0_6px_#fff] md:p-8">
      <p className="text-sm font-extrabold uppercase tracking-[0.12em] text-forest">Step 1 of 2</p>
      <div className="mt-2 flex gap-2" aria-hidden="true">
        <span className="h-1.5 flex-1 rounded-full bg-gold" />
        <span className="h-1.5 flex-1 rounded-full bg-cream-200" />
      </div>
      <p className="mt-5 text-2xl font-extrabold text-forest">How do we reach you?</p>
      <button
        type="button"
        onClick={onStart}
        className="mt-6 flex min-h-13 w-full items-center justify-center rounded-full border-2 border-charcoal bg-gold px-6 py-3 text-lg font-extrabold text-charcoal hover:bg-gold-deep"
      >
        Start your free estimate
      </button>
    </div>
  );
}

/**
 * The estimate form for the bottom of long pages. Its JavaScript (form,
 * validation, photo uploads) loads only when the visitor scrolls near it or
 * taps the button, so it never slows down the top of the page.
 */
export function LazyEstimateForm(props: Props) {
  const [load, setLoad] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || load) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLoad(true);
          io.disconnect();
        }
      },
      { rootMargin: "900px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [load]);

  return <div ref={ref}>{load ? <EstimateForm {...props} /> : <FormShell onStart={() => setLoad(true)} />}</div>;
}
