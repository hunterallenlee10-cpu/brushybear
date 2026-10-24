import Script from "next/script";

/**
 * Google Analytics 4, only when NEXT_PUBLIC_GA4_ID is set. Loads when the
 * browser is idle, so it never slows the first view. It reads the same
 * dataLayer our events go into.
 */
export function Ga4() {
  const id = process.env.NEXT_PUBLIC_GA4_ID;
  if (!id) return null;
  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${id}`} strategy="lazyOnload" />
      <Script id="ga4-init" strategy="lazyOnload">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${id}');`}
      </Script>
    </>
  );
}
