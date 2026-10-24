const TOKEN = /\[([^\]]+)\]\((\/[^)\s]*)\)|\*\*([^*]+)\*\*/g;

/** Inline copy markup: [text](/internal-path) and **bold**. */
export const INLINE_TOKEN = TOKEN;

/** Copy string without markup (for structured data, meta tags, llms.txt). */
export function plainText(text: string): string {
  return text.replace(TOKEN, (_m, label: string | undefined, _href: string | undefined, bold: string | undefined) => label ?? bold ?? "");
}

/** Every internal link target in a copy string. */
export function linksIn(text: string): string[] {
  return [...text.matchAll(TOKEN)].flatMap((m) => (m[2] ? [m[2]] : []));
}

/** Words in a copy string, markup removed. */
export function wordCount(text: string): number {
  return plainText(text).split(/\s+/).filter(Boolean).length;
}
