import type { NextConfig } from "next";

const securityHeaders = [
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), browsing-topics=()" },
  { key: "Content-Security-Policy", value: "frame-ancestors 'none'" },
];

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [60, 75, 85],
  },
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
  // Old paths, and EA-style short paths, all land on the current pages.
  async redirects() {
    const services = [
      "commercial-painting", "exterior-painting", "interior-painting", "custom-painting", "cabinet-painting",
      "millwork-painting", "drywall-painting", "decks-and-fences-painting",
    ];
    return [
      { source: "/faq", destination: "/faqs", permanent: true },
      { source: "/gallery", destination: "/portfolio", permanent: true },
      { source: "/articles", destination: "/blog", permanent: true },
      { source: "/articles/:slug", destination: "/blog/:slug", permanent: true },
      { source: "/painters", destination: "/areas-we-serve", permanent: true },
      { source: "/painters/:city", destination: "/painting-company/:city", permanent: true },
      { source: "/painting-company", destination: "/areas-we-serve", permanent: true },
      { source: "/services/deck-and-fence-staining", destination: "/services/decks-and-fences-painting", permanent: true },
      { source: "/hoa", destination: "/services/hoa-painting", permanent: true },
      { source: "/contact", destination: "/estimate", permanent: false },
      ...services.map((s) => ({ source: `/${s}`, destination: `/services/${s}`, permanent: true })),
    ];
  },
};

export default nextConfig;
