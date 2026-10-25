"use client";

import { useState } from "react";
import { CheckIcon } from "@/components/ui/Icons";

/** Copies a link from this site (path) to the clipboard, or opens the share sheet on phones. */
export function CopyLink({ path, label }: { path: string; label: string }) {
  const [done, setDone] = useState(false);
  const go = async () => {
    const url = new URL(path, window.location.origin).toString();
    try {
      if (navigator.share && matchMedia("(pointer: coarse)").matches) {
        await navigator.share({ url, title: "Brushy Bear Painters" });
      } else {
        await navigator.clipboard.writeText(url);
        setDone(true);
      }
    } catch {
      // Share sheet dismissed or clipboard blocked: nothing to do.
    }
  };
  return (
    <button type="button" onClick={go} className="inline-flex min-h-12 items-center gap-2 rounded-full border-2 border-forest px-6 font-extrabold text-forest hover:bg-pale">
      {done ? (
        <>
          <CheckIcon /> Link copied
        </>
      ) : (
        label
      )}
    </button>
  );
}
