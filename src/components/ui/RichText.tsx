import Link from "next/link";
import { Fragment, type ReactNode } from "react";
import { isLivePath } from "@/config/pages";
import { INLINE_TOKEN as TOKEN } from "@/lib/text";

/**
 * Renders copy strings with two inline formats: [text](/internal-path) and
 * **bold**. Links to pages that aren't built yet render as plain text, so a
 * preview never has broken links.
 */
export function RichText({ text }: { text: string }) {
  const out: ReactNode[] = [];
  let last = 0;
  let i = 0;
  for (const m of text.matchAll(TOKEN)) {
    if (m.index > last) out.push(text.slice(last, m.index));
    if (m[1] !== undefined) {
      const [label, href] = [m[1], m[2]];
      out.push(
        isLivePath(href) ? (
          <Link key={i++} href={href} className="font-semibold text-forest underline decoration-gold decoration-2 underline-offset-4 hover:decoration-forest">
            {label}
          </Link>
        ) : (
          <Fragment key={i++}>{label}</Fragment>
        ),
      );
    } else {
      out.push(
        <strong key={i++} className="font-extrabold">
          {m[3]}
        </strong>,
      );
    }
    last = m.index + m[0].length;
  }
  if (last < text.length) out.push(text.slice(last));
  return <>{out}</>;
}
