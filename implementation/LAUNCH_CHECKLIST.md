# Launch checklist

Work top to bottom. Nothing goes public until the company is licensed, bonded and insured. The launch check (`scripts/check-placeholders.ts`, run before every build) **fails a public build** while any item in sections 1–2 is open, so the site can't go live half-finished.

## 1. Decisions and facts (see `CONTENT_TODO.md`)
- [ ] Lane versus EA Pro decided; Phase 1 cities and the "Eastside" search term confirmed (`SITE.regionName`, `src/data/cities.ts`)
- [ ] Company name locked (if it changes: `SITE.name`, logo files, icons, share image)
- [ ] Every required fact filled in `src/config/site.ts`: phone, email, domain, hours (display text **and** `hours.schema`), L&I number, UBI number
- [ ] Warranty length set, or left hidden on purpose
- [ ] Footer name, phone and service area match the Google Business Profile exactly

## 2. Copy to confirm
- [ ] Work through `CONTENT_TODO.md` section 4 (119 items at handoff). For each: check it, fix the copy in `src/data/` if needed, delete the `confirm` note, then run `npm run content-todo`
- [ ] Privacy policy reviewed by the business attorney (texting section included)
- [ ] EPA RRP lead-safe firm certification in place (the site says we follow lead-safe practices)
- [ ] About page: decide whether to mention Erik's other company; set `PAGES.about.indexable = true` in `src/config/pages.ts` once the story is confirmed
- [ ] Article author: set `AUTHOR_NAME` in `src/app/articles/[slug]/page.tsx` if Erik takes the byline

## 3. Real content
- [ ] Real before/after job photos in `src/data/gallery.ts` (6+ jobs puts the gallery in search automatically)
- [ ] Real team photos on About (no AI people)
- [ ] Real reviews in `src/data/reviews.ts`, with permission (the section and review data switch on by themselves)
- [ ] Social profile URLs in `SITE.social`
- [x] Higgsfield batch generated and live (`AI_ASSETS.md`)
- [ ] Check the Drive folder one last time for anything new

## 4. Leads
- [ ] Brushy Bear n8n speed-to-lead workflow live (separate from EA Pro's; never point the site at `STL-EAPRO-DEMO`)
- [ ] `N8N_WEBHOOK_URL` and `N8N_WEBHOOK_SECRET` set in Vercel Production; the workflow checks the `x-brushybear-secret` header
- [ ] `LEADS_DRY_RUN` set to `false` (or removed) in Production
- [x] Vercel Blob store connected for photo uploads (`brushybear-estimate-photos`, Portland region)
- [ ] Send a test lead from a phone, with a photo; confirm the text arrives within a minute and the photo link opens

## 5. Analytics
- [ ] Vercel dashboard → project → Analytics → Enable, then set `NEXT_PUBLIC_VERCEL_ANALYTICS=on` (the script only loads once enabled)
- [ ] Optional: GA4 property created and `NEXT_PUBLIC_GA4_ID` set (it reads the same events)

## 6. Domain
- [ ] Domain bought and added to the Vercel project
- [ ] The www version redirects to the bare domain (https only)
- [ ] `NEXT_PUBLIC_SITE_URL` set to `https://<domain>` in Production
- [ ] Optional: move the Vercel project out of the "leu" team into a Brushy Bear team, and make the GitHub repo private

## 7. Go public
- [ ] `SITE_INDEXABLE=true` in Vercel **Production only**, then redeploy (the launch check must pass)
- [ ] `https://<domain>/robots.txt` allows crawling and points to the sitemap
- [ ] Pages no longer carry `noindex` (view source on the homepage)
- [ ] The preview banner and `/styleguide` are gone (both switch off automatically)
- [ ] Google Rich Results Test passes for the homepage, one service page, one city page and one article
- [ ] Lighthouse on mobile: 95+ in all four categories on the homepage, a service page, a city page, the estimate page and an article

## 8. Search engines
- [ ] Google Search Console: verify the domain, submit `sitemap.xml`, request indexing for the homepage, services hub, 4 service pages and 5 city pages
- [ ] Bing Webmaster Tools: import from Search Console, then submit the sitemap
- [ ] Google Business Profile: website link set to the homepage
- [ ] Same name, phone and service area on Apple Business Connect, Bing Places, Facebook, Yelp and Nextdoor

## 9. After launch
- [ ] Record each Phase 1 city's Google Maps ranking (baseline), then check weekly
- [ ] Update `SITE.lastUpdated` (and the page's `updatedAt`) whenever content changes
- [ ] Switch `SITE.season` each season (it changes the hero line)
- [ ] Phase 2 cities: add copy in `src/data/city-pages/`, set `published: true` in `cities.ts`
