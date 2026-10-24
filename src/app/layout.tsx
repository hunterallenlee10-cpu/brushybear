import type { Metadata, Viewport } from "next";
import { Lilita_One, Manrope } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { MobileActionBar } from "@/components/layout/MobileActionBar";
import { PreviewBanner } from "@/components/layout/PreviewBanner";
import { SkipLink } from "@/components/layout/SkipLink";
import { JsonLd } from "@/components/seo/JsonLd";
import { SITE_URL } from "@/config/env";
import { SITE } from "@/config/site";
import { businessSchema } from "@/lib/schema";
import "./globals.css";

// Self-hosted at build time: no request to Google, no layout shift.
const manrope = Manrope({ subsets: ["latin"], display: "swap", variable: "--font-manrope" });
const lilita = Lilita_One({ weight: "400", subsets: ["latin"], display: "swap", variable: "--font-lilita" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: SITE.name, template: `%s | ${SITE.name}` },
  applicationName: SITE.name,
};

export const viewport: Viewport = {
  themeColor: "#1f4d3a",
  colorScheme: "light",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-US" data-scroll-behavior="smooth" className={`${manrope.variable} ${lilita.variable}`}>
      <body className="pb-action-bar flex min-h-dvh flex-col antialiased">
        <SkipLink />
        <PreviewBanner />
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <MobileActionBar />
        <JsonLd items={[businessSchema()]} />
      </body>
    </html>
  );
}
