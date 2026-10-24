# Launch checklist

Draft from build Phase 1; finalized in Phase 8. Work top to bottom. Nothing goes public until the company is licensed, bonded and insured.

## 1. Business facts
- [ ] Fill every required item in `implementation/CONTENT_TODO.md` section 1 (`src/config/site.ts`): phone, email, domain, hours (display text and `hours.schema`), L&I number, UBI number
- [ ] Warranty length set, or left hidden on purpose
- [ ] Every "(confirm)" item in `CONTENT_TODO.md` answered, and the data updated
- [ ] Footer name, phone and service area match the Google Business Profile exactly

## 2. Real content
- [ ] Real before/after job photos in `src/data/gallery.ts` (6+ jobs puts the gallery in search)
- [ ] Real team photos on About (no AI people)
- [ ] Real reviews in `src/data/reviews.ts`, with permission
- [ ] Social profile URLs in `SITE.social`
- [ ] Check the Drive folder one last time for anything new

## 3. Leads
- [ ] Brushy Bear n8n speed-to-lead workflow live (separate from EA Pro's)
- [ ] `N8N_WEBHOOK_URL` and `N8N_WEBHOOK_SECRET` set in Vercel Production
- [ ] `LEADS_DRY_RUN` removed or `false` in Production
- [ ] Vercel Blob store connected for photo uploads
- [ ] Send a test lead from a phone; confirm the text arrives within a minute

## 4. Domain
- [ ] Domain bought and added to the Vercel project
- [ ] The www version redirects to the bare domain (https only)
- [ ] `NEXT_PUBLIC_SITE_URL` set to `https://<domain>` in Production

## 5. Go public
- [ ] `SITE_INDEXABLE=true` in Vercel Production only, then redeploy (the launch check must pass)
- [ ] `https://<domain>/robots.txt` allows crawling and points to the sitemap
- [ ] Pages no longer carry `noindex` (view source on the homepage)
- [ ] Rich Results Test passes for the homepage, one service page and one city page

## 6. Search engines
- [ ] Google Search Console: verify the domain, submit `sitemap.xml`, request indexing for the homepage, services and city pages
- [ ] Bing Webmaster Tools: import from Search Console or verify, then submit the sitemap
- [ ] Google Business Profile: website link set to the homepage
- [ ] GA4 property created and `NEXT_PUBLIC_GA4_ID` set (optional)

## 7. After launch
- [ ] Record each Phase 1 city's Google Maps ranking (baseline)
- [ ] Update `SITE.lastUpdated` whenever content changes
- [ ] Switch `SITE.season` each season (hero line)
