import type { Thing } from "schema-dts";

/**
 * Server-rendered structured data. Several items go out as one @graph.
 * "<" is escaped so content can never close the script tag early.
 */
export function JsonLd({ items }: { items: Thing[] }) {
  const data = { "@context": "https://schema.org", "@graph": items };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
