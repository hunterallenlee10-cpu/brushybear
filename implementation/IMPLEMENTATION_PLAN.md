# Brushy Bear Painters: Implementation Plan

Written October 24, 2026. This is the plan only; nothing in it has been built yet.

**How we work:** one phase per turn. At the end of each phase I push to `claude/loving-carson-yh6yyi`, share a Vercel preview link, tick the boxes below and stop for your review. Before each phase I check the Brushy Bear Painters Drive folder for new files (photos, reviews, license numbers, the domain) and update the placeholders from it.

---

## 1. Decisions locked in the brainstorm

You said "use your recs for all 10." Items marked * didn't have a clear pick in my brainstorm message, so I chose them here. Each one is a single-line change if you or Erik want it different.

| # | Decision | What we're doing |
|---|---|---|
| 1 | Master logo | `Keep-this-exact-logo-same-golden-yellow.png` (gold bear holding the brush, wordmark below). The header uses an untouched crop of its wordmark. The favicon and app icon use an untouched crop of the bear's head. The 3D all-caps wordmark is used only on the social-sharing image and in big display moments. The brown-bear files and the older `image (1).png` aren't used. |
| 2* | "Eastside" keyword | Keep the prompt's keyword map: "Eastside" is the regional term on the homepage and service pages. The real overlap with EA Pro is the **cities**, not the word, so avoiding "Eastside" on its own would change nothing. The word lives in one constant (`SITE.regionName`) and reaches every title, H1 and description from there, so it's a one-line swap if the lane call decides otherwise. |
| 3* | Phase 1 cities | Build Bellevue, Kirkland, Redmond, Sammamish and Issaquah as listed. **The city-page copy (Phase 5 below) is scheduled after the Oct 26 – Nov 6 lane decision**, so the expensive copy is only written once. If the decision hasn't come by the time we reach Phase 5, I draft against the listed cities and flag it. |
| 4* | Quote promise | "Written estimate within 24 hours of the walkthrough" (the prompt's wording). It's the safer promise: the Master Plan's sales process aims for same day, so Erik will usually beat it. Marked "confirm with Erik". |
| 5 | Fonts | **Lilita One** for big headlines only (H1 and section H2s, 28 px and up). **Manrope** (variable font) for everything else. Both through `next/font/google`, which self-hosts them, so there's no layout shift and no third-party request. |
| 6 | Signature moments | (1) Hero: the rain stops and sun hits fresh paint (Higgsfield video). (2) A brushstroke that paints in on the headline. (3) The bear in small places. The before/after slider gets built but stays hidden until real job photos exist. |
| 7* | Hero headline | `<h1>` = **"Eastside house painting that holds up to the rain."** It carries the primary phrase and the outcome. Supporting line: "Interiors, exteriors, cabinets and decks in Bellevue, Kirkland, Redmond, Sammamish and Issaquah. One point of contact, a photo update every day, and a clean house every evening." (Promises stay marked "confirm with Erik".) |
| 8 | Photos and n8n | Photo uploads go straight to **Vercel Blob**. The form posts to `N8N_WEBHOOK_URL`. No Brushy Bear n8n workflow exists yet. I found an EA Pro one (`STL-EAPRO-DEMO`), and **the site must never post to it**. Building the Brushy Bear speed-to-lead workflow is outside this project; I'll offer it as a separate task after Phase 3. Until then, previews run with `LEADS_DRY_RUN=true`. |
| 9 | Deploying | I create a Vercel project linked to this GitHub repo in Phase 1. Preview deployments run with `SITE_INDEXABLE=false`. |
| 10 | Higgsfield | **No credits are spent until the company name is locked**, and after that only once you approve each batch's cost. The site is fully usable without these assets: until they exist, the hero uses an illustrated CSS/SVG placeholder. |

**Other recommendations from the brainstorm that are now part of the plan:**
- **The sticker is a design element.** The logo's white die-cut sticker border becomes the shape for the promise badges and buttons, and the bear sits on top of the cinematic images as a sticker. This ties the realistic photos to the cartoon brand.
- **Hero video plays once, then loops.** The rain-to-sun moment plays once, then a 3–4 second sunny loop of swaying trees takes over. The poster image (which is also the main image Google times on mobile, and what reduced-motion visitors see) is the **sunlit last frame**.
- **No scroll-scrubbed frame sequence** at launch. A CSS "paint sweeps in" effect on scroll costs almost nothing in file size.
- **The brushstroke paints behind the headline, not over the words.** The text is visible from the first frame and a gold swipe paints in behind "rain". Fading in the text itself would delay the moment Google counts as the page being loaded and hurt the speed score.
- **The button label is "Get a Free Estimate" everywhere**, never "Instant Estimate".
- **Text-message consent is optional and unchecked.** The privacy page gets a texting section, which carriers require before a business number can be registered for texting.
- **The form adds one optional question** in step 2: "About when was your home built?" (helps flag pre-1978 homes that need lead-safe work).
- **The start-date promise needs a weather exception.** Draft: "We start on the scheduled date or take $250 off. Rain delays don't count, and those reschedule first." Marked "confirm with Erik".
- **Seasonal hero line:** `SITE.season` switches it, e.g. "Booking interiors and cabinets now" in winter and "Summer exterior dates are filling" from February to May.
- **Gallery and About stay out of the sitemap** until they have real content.
- **The footer shows the service area, not a street address.**
- **Logo originals stay out of git.** `/brand-source/` and `/assets-src/` are git-ignored; only optimized copies are committed.

---

## 2. Ground rules (checked at every phase)

- No text, images, reviews, awards, badges, numbers, addresses or warranty terms from eapropainters.com or any competitor.
- Nothing from the Master Plan's private sections goes in the site, metadata, `llms.txt` or code comments: partnership, ownership, money, pricing math, hiring, or the EA Pro relationship. Customer-facing content only.
- Nothing invented: no reviews, ratings, counts, awards, years, job counts, prices or certifications.
- "Licensed, bonded and insured" appears only once `[LNI_NUMBER]` is set. A warranty length appears only once `[WARRANTY_YEARS]` is set.
- AI images are for mood, illustration, the mascot and backgrounds only. They never go in the gallery, the before/after slider, reviews, or anything captioned as our work. No AI-generated people.
- **Placeholder guard:** placeholders and "(confirm)" flags live in the data as typed values, not loose text. On previews they show as a highlighted badge so they're easy to spot. A production build with `SITE_INDEXABLE=true` **fails** if any placeholder or unconfirmed item would appear on a public page.

---

## 3. Stack (versions checked today)

| Package | Version | Use |
|---|---|---|
| Node | 22 | Runtime |
| next | 16.4 (App Router, Turbopack) | Framework, server-rendered pages |
| react / react-dom | 19.3 | UI |
| typescript | latest 5.x | Types (strict mode) |
| tailwindcss + @tailwindcss/turbopack | 4.3 | Styling, through the Turbopack loader that create-next-app 16.4 sets up. Version 4 keeps the design tokens in `globals.css` under `@theme` instead of a config file. |
| motion | 14.x | Only where CSS can't do it (accordion height, slider drag). Most motion is plain CSS. |
| zod | 4.x | One validation schema shared by the form and the API route |
| @vercel/blob | 2.8 | Direct photo uploads from the browser |
| @vercel/analytics | 2.0 | Page views and custom events |
| schema-dts | 2.1 | Type-checked structured data (JSON-LD) |
| sharp | 0.35 | Image processing (Next uses it; also our logo script) |
| vitest, @playwright/test, @axe-core/playwright, @lhci/cli | dev only | Unit tests, end-to-end tests, accessibility, Lighthouse |

The browser for Playwright is already installed in this environment.

**Next.js 16 rules this project follows** (from the docs bundled with the installed version):
- `cacheComponents` is on: pages are static by default. Nothing reads the clock (`new Date()`) during a build; dates come from the data.
- `dynamicParams` is not allowed. Unknown slugs call `notFound()` instead.
- Images use `preload` (not the deprecated `priority`). `images.qualities` is set.
- Linting runs through ESLint directly (`npm run lint`); `next lint` no longer exists.
- `npm run typecheck` runs `next typegen` first, so the generated route types exist.

**Environment variables** (`.env.example` gets committed; real values never are):

| Variable | Where it's used | Notes |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | canonical URLs, og:url, sitemap, robots | Production domain once known. Until then, a placeholder domain, so preview URLs never become canonicals. |
| `SITE_INDEXABLE` | robots.txt, robots meta, placeholder guard | Defaults to `false`. Set to `true` only in Production, at launch. |
| `N8N_WEBHOOK_URL` | `/api/estimate` (server only) | The Brushy Bear workflow. Never EA Pro's. |
| `N8N_WEBHOOK_SECRET` | `/api/estimate` (server only) | Sent as a header so n8n can reject fake posts. |
| `LEADS_DRY_RUN` | `/api/estimate` | `true` on previews: the lead is checked and logged, not sent. |
| `BLOB_READ_WRITE_TOKEN` | `/api/upload` | Added automatically when the Blob store is connected. |
| `NEXT_PUBLIC_GA4_ID` | analytics | Optional. The GA4 script only loads when this is set. |

---

## 4. Phases

Every phase ends with the same steps: typecheck, lint, unit tests and a production build pass; push; Vercel preview; update `CONTENT_TODO.md`; tick this plan; stop.

### Phase 1: Foundation, brand files and first preview
- [x] Set up Next.js 16.4 + TypeScript (strict) + Tailwind 4 + ESLint. Add `.env.example`.
- [x] `src/config/site.ts`: `SITE` holds name, region name, owners, phone/email/domain/hours/L&I/UBI/warranty placeholders, social profiles, `lastUpdated`, season. `isSet()` (in `src/lib/placeholders.ts`) detects unfilled placeholders.
- [x] `src/config/env.ts`: site URL, the indexing switch and the production-deploy check, all read at build time. (Server-only secrets get their own module in Phase 3.)
- [x] `src/config/pages.ts`: a single list of every route with its `live` and `indexable` flags and last-modified date. The sitemap, navigation and footer all read from it, so unbuilt pages are never linked.
- [x] Brand files (`scripts/brand/process-logo.py`):
  - The sticker border is white on a white background, so it couldn't be traced by color. The script finds the artwork's outline and rebuilds the border at its measured width (37 px); artwork pixels are unchanged.
  - Exports: full logo (`public/brand/logo-full.png`), wordmark, and the bear alone in all 3 "Keep-this-exact" poses (`src/assets/brand/`).
  - Icons from the bear head on a forest tile (`scripts/brand/make-icons.py`): `favicon.ico`, `icon.png`, `apple-icon.png`.
  - Interim social-sharing image from the logo files (`scripts/brand/make-og.py`).
  - Checked by eye on cream and forest backgrounds.
- [x] Design tokens in `globals.css` (section 8), the two fonts, paper grain, base styles, and visible focus outlines. A unit test checks contrast straight from `globals.css` (16 checks pass).
- [x] Layout parts:
  - Header: logo, menu (when there are pages to list), and a "Get a Free Estimate" button that stays visible from tablet width up.
  - Mobile bottom bar: Call / Text / Estimate. The page reserves its height so it never covers content.
  - Footer: name/phone/email/service area/hours/L&I/UBI, links to every service and city page (plain text until those pages exist), "Last updated".
  - Skip link, a preview banner, a basic 404 page with the bear, and a `JsonLd` component (business structured data on every page).
- [x] `lib/seo.ts` (builds metadata for each page), `lib/schema.ts`, `app/robots.ts` and `app/sitemap.ts`, gated by `SITE_INDEXABLE`.
- [x] `/styleguide` page for reviewing logo, bear poses, colors, contrast, type, buttons, stickers and placeholders. It's noindex, left out of the sitemap, and returns a 404 once the site is public (`SITE_INDEXABLE=true`).
- [x] Doc templates: `CONTENT_TODO.md` (generated by `npm run content-todo`), `AI_ASSETS.md`, `LAUNCH_CHECKLIST.md` (draft).
- [x] Launch guard (`scripts/check-placeholders.ts`, runs before every build): fails a build with `SITE_INDEXABLE=true` while any required fact is missing. Tested both ways.
- [x] Create the Vercel project, link it to the GitHub repo, set environment variables, and get the first review link.
  - Vercel project `brushybear` in the "leu" team. The repo's default branch is this working branch, so every push deploys to **https://brushybear.vercel.app** (search blocked: robots.txt disallows all, every page is noindex).
  - `SITE_INDEXABLE=false` and `LEADS_DRY_RUN=true` set for Production, Preview and Development.

### Phase 2: Design system and homepage
- [x] Brand components: `Sticker`, `PaintSwipe` and `BrushEdge` (SVG brushstrokes), `BearMascot` (3 poses), `PlaceholderImage`, plus `ServiceArt`: drawn illustrations for the 4 services so cards don't sit empty before the Higgsfield scenes.
- [x] Hero: two-part H1 with a gold paint swipe behind "rain." (CSS, 400 ms, off for reduced motion); seasonal line; estimate button; call link and the licensed line appear once their facts exist. `HeroMedia` shows a hand-drawn Northwest scene where soft rain falls for about two seconds and stops as warm light comes up. Rain and light are GPU-animated overlay layers (moving them off SVG cut main-thread work from 3.0 s to 1.3 s).
- [x] All 10 homepage sections in order. The reviews section and the before/after slider stay hidden until real reviews and real job photos exist.
- [x] Data: `promises.ts` (6), `process.ts` (4 steps), `faq.ts` (10 questions, 6 featured), `home.ts`.
- [x] Homepage structured data: `HousePainter` (every page), `WebSite`, `WebPage` with `dateModified`, `FAQPage`.
- [x] Checked at 375 px, tablet and desktop. No sideways scrolling at any width.

### Phase 3: Estimate form, API and tracking
- [x] `EstimateForm`: step 1 contact details (required), step 2 photos, timeline, home age, notes and texting consent (all optional). Inline errors, focus moves to the first error, hidden spam field and a 3-second minimum fill time. Used on `/estimate` and at the end of every key page (service pages pre-select their service).
- [x] `/api/upload` (Vercel Blob uploads straight from the browser, images only, 10 MB each, same-site only) and `/api/estimate` (zod check, then n8n with a secret header, 5 s timeout and 2 retries; dry-run mode logs a masked copy).
- [x] Success screen with the bear and what happens next; a failure message points people to call or text.
- [x] Tracking: events go to a GA4-ready `dataLayer` and Vercel Analytics. Vercel Analytics loads only once it's enabled in the dashboard (`NEXT_PUBLIC_VERCEL_ANALYTICS=on`), so it never logs a 404. GA4 loads at idle, only if its ID is set.
- [x] `/privacy` with the texting section carriers require.
- [x] Playwright tests: errors and focus, the full two-step send (dry run), service pre-select.
- [x] Vercel Blob store `brushybear-estimate-photos` (Portland region) created and linked.
- [ ] Brushy Bear n8n speed-to-lead workflow: separate task, not built (`LEADS_DRY_RUN=true` until it exists). Never point the site at EA Pro's `STL-EAPRO-DEMO`.

### Phase 4: Services, FAQ, About, Gallery
- [x] `src/data/service-pages/`: 4 pages, about 1,300 words each, with what's included, cost factors (no prices), add-ons, 4–5 FAQs, and 2–4 internal links. Phase 2 services exist in the data with `published: false`.
- [x] `/services` and `/services/[slug]`, breadcrumbs, `Service` + `FAQPage` + `BreadcrumbList` data, links to all 5 city pages, form with the service pre-selected.
- [x] `/faq`: all 10 questions, `FAQPage` data built from the same text.
- [x] `/about`: owners and how we work, photo placeholders (no AI people). Kept out of search until the story is confirmed.
- [x] `/gallery`: service and city filters ready; real jobs only (the data type enforces it). Empty state with the bear; out of search until 6+ jobs.
- [x] 404 with the bear. Unknown service, city and article URLs return a real 404 (`ensureStatic = "navigation"` on the root layout keeps every page static).

### Phase 5: City pages (written before the lane decision, flagged)
- [x] `src/data/city-pages/`: 5 cities, about 1,120–1,390 words each, built from census housing data (sources in code comments), with neighborhoods, HOA/permit notes, climate, 4 FAQs and nearby-city links. Every unverified fact has a `confirm` note.
- [x] `/painters/[city]` with a drawn map, a neighborhoods grid, links to all 4 services, FAQ and form.
- [x] Duplicate-content test: every pair of city pages shares under 10% of 6-word phrases.
- [ ] If the lane decision changes the cities: edit `published` in `cities.ts` and rewrite the copy file. Pages, links, sitemap and structured data follow automatically.

### Phase 6: Articles and crawl controls
- [x] `src/data/articles/`: 3 articles, about 1,480 words each, with "Published" and "Updated" dates, a short-answer box first, 4 FAQs each, and a sticky table of contents on desktop.
- [x] `/articles` and `/articles/[slug]` with `Article` data. Credited to the company until Erik confirms a byline.
- [x] `/llms.txt` built from the same data.
- [x] `robots.ts` (when indexable: allow all, including AI crawlers; block `/api/`) and `sitemap.ts` (indexable pages only, real dates).

### Phase 7: Higgsfield visuals (ready; waiting on the name and your "yes")
- [x] Models checked (`models_explore`) and the batch quoted with `get_cost`: **about 57 credits** of 510.98. Full asset list, prompts and steps are in `AI_ASSETS.md`.
- [x] Code ready: `src/config/hero.ts` + `HeroVideo` (the still loads first; the video only after page load and never with reduced motion, data saver or 2G/3G; intro once, then the loop). `SceneImage` takes scene images and labels them "Illustration". `scripts/optimize-media.sh` compresses everything.
- [ ] Generate, optimize, wire in, log in `AI_ASSETS.md`. **Not done: no credits spent**, per the brief's rule to get your "yes" on the cost first.

### Phase 8: QA, speed and launch docs
- [x] Lighthouse mobile (local production build): Performance **97–99**, Accessibility **100**, Best Practices **100** on the homepage, a service page, a city page, the estimate page and an article. SEO is **100** in public mode (it reads 69 on previews only because they're deliberately hidden from search).
- [x] Core Web Vitals in the lab: no layout shift (0), total blocking time 30–50 ms, main content shown in 2.3–2.7 s on Lighthouse's throttled phone.
- [x] Accessibility (axe, WCAG 2.2 AA) on 11 pages at phone and desktop sizes: no serious issues. Contrast test on the tokens.
- [x] Structured data: 0 errors on the schema.org validator for the homepage, a service page, a city page and an article.
- [x] Unit tests (99): internal links, banned words, prices, word counts, title/description lengths, unique FAQ ids, duplicate city content, contrast. Browser tests (35): form, pages, 404s, layout, accessibility.
- [x] `LAUNCH_CHECKLIST.md`, `CONTENT_TODO.md` (generated), `AI_ASSETS.md`, `COPY_GUIDE.md`, README.

## 5. File tree (planned)

```
/
├─ .env.example  .gitignore  next.config.ts  package.json  tsconfig.json
├─ postcss.config.mjs  eslint.config.mjs  vitest.config.ts  playwright.config.ts  lighthouserc.json
├─ brand-source/          # git-ignored: originals from the Drive folder
├─ assets-src/            # git-ignored: Higgsfield originals
├─ implementation/
│  ├─ IMPLEMENTATION_PLAN.md  CONTENT_TODO.md  AI_ASSETS.md  LAUNCH_CHECKLIST.md
├─ scripts/
│  ├─ brand/process-logo.py        # cut out + crop the master logo (pixels untouched)
│  ├─ optimize-media.sh            # ffmpeg/sharp: MP4, WebM, AVIF, WebP
│  ├─ content-todo.ts              # writes CONTENT_TODO.md from the data flags
│  ├─ check-placeholders.ts        # fails a production build if placeholders would show
│  └─ check-duplicate-content.ts   # flags city pages that are too similar
├─ public/
│  ├─ brand/          # logo-full.png (fixed URL for structured data)
│  ├─ placeholders/   # labeled SVG blocks: 16x9, 4x3, 1x1, 3x4
│  ├─ media/          # Phase 7: hero/, scenes/, mascot/, textures/
│  └─ og-image.png    # 1200x630
├─ tests/  e2e/ (Playwright)  unit/ (Vitest)
└─ src/
   ├─ app/
   │  ├─ layout.tsx  page.tsx  globals.css  not-found.tsx  icon.png  apple-icon.png
   │  ├─ robots.ts  sitemap.ts  llms.txt/route.ts
   │  ├─ services/page.tsx  services/[slug]/page.tsx
   │  ├─ painters/[city]/page.tsx
   │  ├─ estimate/page.tsx  about/page.tsx  gallery/page.tsx  faq/page.tsx  privacy/page.tsx
   │  ├─ articles/page.tsx  articles/[slug]/page.tsx
   │  ├─ styleguide/page.tsx      # preview only
   │  └─ api/estimate/route.ts  api/upload/route.ts
   ├─ assets/brand/  # logo-wordmark, bear-* (imported, so sizes are known)
   ├─ config/   site.ts  env.ts  pages.ts
   ├─ data/     services.ts  cities.ts  faq.ts  articles.ts  gallery.ts  reviews.ts
   │            promises.ts  process.ts  navigation.ts
   ├─ components/
   │  ├─ layout/   Header  Footer  MobileActionBar  SkipLink  Breadcrumbs
   │  ├─ brand/    Logo  Sticker  Brushstroke  BearMascot
   │  ├─ sections/ Hero  Problem  WhyOthersFail  Promises  ServicesGrid  HowItWorks
   │  │            Reviews  ServiceArea(+ServiceAreaMap)  FaqAccordion  CtaBlock
   │  │            CityLinks  ServiceLinks  ArticleBody
   │  ├─ estimate/ EstimateForm  StepContact  StepDetails  PhotoUpload  SuccessScreen
   │  ├─ media/    HeroMedia  BeforeAfterSlider  PlaceholderImage  SmartImage
   │  └─ seo/      JsonLd
   └─ lib/  seo.ts  schema.ts  analytics.ts  validation.ts  placeholders.ts  cn.ts
```

---

## 6. Pages at launch

Title lengths are counted with the brand name included. All titles end in " | Brushy Bear Painters".

| Route | Primary target | Title (chars) | Indexable at launch |
|---|---|---|---|
| `/` | house painters Eastside WA | House Painters on the Eastside, WA (57) | yes |
| `/services` | house painting services Eastside | House Painting Services, Eastside WA (59) | yes |
| `/services/interior-painting` | interior painting Eastside WA | Interior Painting, Eastside WA (53) | yes |
| `/services/exterior-painting` | exterior painting Eastside WA | Exterior Painting, Eastside WA (53) | yes |
| `/services/cabinet-painting` | cabinet painting Eastside WA | Cabinet Painting, Eastside WA (52) | yes |
| `/services/deck-and-fence-staining` | deck and fence staining Eastside WA | Deck & Fence Staining, Eastside WA (57) | yes |
| `/painters/bellevue-wa` (and kirkland, redmond, sammamish, issaquah) | painters [City] WA | House Painters in [City], WA (53–54) | yes |
| `/estimate` | free painting estimate | Free Painting Estimate (45) | yes |
| `/about` | (brand) | About Erik & Hunter (42) | once the story is confirmed |
| `/gallery` | (brand) | Painting Project Gallery (47) | once there are 6+ real jobs |
| `/faq` | painting questions | Painting Questions, Answered (51) | yes |
| `/articles` + 3 articles | each article's question | written per article | yes |
| `/privacy` | none | Privacy Policy (37) | yes |
| 404 | none | Page Not Found | no |
| `/styleguide` | none | none | never (returns 404 once the site is public) |

"Indexable" here means once `SITE_INDEXABLE=true`. Until then, every page is noindex.

---

## 7. Data files and types (summary)

- **`site.ts`**: placeholders are typed (`Placeholder<'PHONE'>`, and so on). `isSet()` decides whether a value appears on the page and in structured data. Anything unset is left out of structured data entirely, never shown as "[PHONE]".
- **`services.ts`**: `{ slug, name, phase, published, primaryKeyword, title, metaDescription, h1, intro, sections[], included[], addOns[], costFactors[], faqs[], image, updatedAt }`
- **`cities.ts`**: `{ slug, name, county, phase, published, wikipediaUrl, title, metaDescription, h1, intro, homes, climate, neighborhoods[{ name, confirm }], hoaPermitNotes[{ text, confirm }], faqs[], nearby[], updatedAt }`
- **`faq.ts`**: `{ id, question, answer, featured, confirmWithErik?, note? }`. Each answer's first sentence answers the question directly.
- **`articles.ts`**: `{ slug, title, description, publishedAt, updatedAt, author, body: Block[] }`. A block is a paragraph, H2, H3, list or callout. Copy stays in typed data; no MDX.
- **`gallery.ts`**: `{ id, service, city, before, after, alt, caption, date, source: 'real-job' }`. The `source` field only accepts `'real-job'`, so an AI image can't be added by mistake.
- **`reviews.ts`**: `{ author, city, rating, text, date, source, url }`. Empty at launch, so the reviews section and review structured data stay off.
- **`promises.ts`** (each `confirmWithErik: true`), **`process.ts`** (4 steps), **`navigation.ts`**.

---

## 8. Design system

**Colors (the four brand colors plus tints)**

| Token | Hex | Use |
|---|---|---|
| `forest` | `#1F4D3A` | Headings, footer, dark sections |
| `cream` | `#F4EDE1` | Page background |
| `cream-50` | `#FAF6EF` | Cards on cream |
| `gold` | `#E9A93B` | Buttons, highlights, brushstrokes |
| `charcoal` | `#2B2B2B` | Body text, outlines |
| `white` | `#FFFFFF` | The sticker border only |

**Contrast** (measured; WCAG AA needs 4.5 for normal text and 3 for large text):

| Pair | Ratio | Rule |
|---|---|---|
| charcoal on cream | 12.17 | Body text ✓ |
| forest on cream / cream on forest | 8.28 | Headings, footer text ✓ |
| charcoal on gold | 6.88 | **Text on gold buttons** ✓ |
| gold on forest | 4.68 | Small accents and large text on green ✓ (just passes) |
| white on gold | 2.06 | ✗ never |
| gold on cream | 1.77 | ✗ never for text. Gold buttons on cream also get a 2 px charcoal outline, which matches the logo's chunky outline too. |

A unit test recalculates these ratios from the tokens, so a color change can't quietly break contrast.

**Type.** Lilita One (one weight) for the H1 and section H2s only, never under 28 px, never for body text, forms or labels. Manrope (400–800) for everything else, with body text at 17–18 px and line height 1.6. Sizes scale smoothly with screen width (`clamp()`), so 375 px phones get a bold headline without odd line breaks.

**Sticker system.** A white border (6–10 px), a 2 px charcoal outline inside it, a soft shadow and a −2° to 2° tilt. Used for promise badges, the "Get a Free Estimate" button, the bear and the city map pins. Used sparingly so it stays special.

**Texture and dividers.** A faint cream paper grain (CSS until the Phase 7 texture arrives) and SVG brush-edge section dividers in forest and gold. One strong idea per section, generous white space, an editorial grid (12 columns on desktop, 4 on mobile).

**Motion.** CSS first. Every transition is under 400 ms and starts within one frame of the user's action. Nothing blocks reading or the estimate button. `prefers-reduced-motion` turns every animation off and shows the finished state.

---

## 9. Brand file processing

The logo files are the artwork on a white background, wrapped in a white sticker border with a soft gray shadow. The border is white on white, so in most places it can't be told apart from the background by color. `process-logo.py`:
1. Finds the artwork: everything inside its black outline.
2. Rebuilds the sticker as the artwork grown outward by the measured border width (37 px on the 2048 px files, measured wherever the shadow shows the edge). The border is flat white in the original, so the rebuilt one matches it.
3. Paints the border pure white, which drops the gray shadow (the site adds its own with CSS), and smooths only the outer edge.
4. With `--part bear` or `--part wordmark`, keeps only that part and rebuilds the border around it, so a crop never slices through the border.

**Artwork pixels are never changed.** If an edge ever looks off, the fallback is Higgsfield's or Adobe's background remover, which still won't redraw anything.

## 10. Estimate form and API

**Step 1 (required):** name, mobile phone, email, address or ZIP, "What do you want painted?" (multi-select: interior, exterior, cabinets, deck/fence, other).
**Step 2 (all optional):** photos (up to 6, images and HEIC, 10 MB each), timeline (ASAP / 1–3 months / 3+ months / just planning), "About when was your home built?" (before 1978 / 1978 or later / not sure), "Anything else?", and the texting consent checkbox (unchecked, not required, with its consent wording saved alongside the lead).
- Step 2 can be skipped with "Send my request". Phone and keyboard input types are set per field (`tel`, `email`, `postal-code`, and so on).
- Errors appear inline under each field, are announced to screen readers, and move focus to the first error.
- Spam protection: a hidden honeypot field, plus rejecting submissions completed in under 3 seconds.
- **`/api/upload`:** returns Vercel Blob upload tokens only for allowed file types and sizes. Each file gets a random file name.
- **`/api/estimate`:** checks the data with the shared zod schema, then sends n8n:
  - the lead, the page it came from, ad-tracking parameters, the referrer, the timestamp, the consent wording and the photo links
  - with the `N8N_WEBHOOK_SECRET` header, a 5 s timeout and 2 retries.
  - In dry-run mode it logs the lead and returns success.
  - On failure the visitor sees "Please call or text us at [PHONE]" and the error is logged.
- **Success screen:** "Thanks! We'll text you within a few minutes during business hours," the bear, and the 3 next steps.

## 11. Higgsfield assets (Phase 7, gated)

| Asset | Plan | Size budget |
|---|---|---|
| Hero still | Realistic image of a craftsman-style Eastside home, the sunlit "after" state | AVIF ≤ 120 KB on mobile |
| Hero intro video (5–6 s) | Image-to-video from the rainy version of the still: the rain stops and light breaks onto fresh paint | MP4 + WebM, ≤ 1.5 MB |
| Hero loop (3–4 s, seamless) | The sunny state, evergreens swaying | ≤ 1 MB (intro + loop ≤ 2.5 MB) |
| Bear poses (5) | Waving, thumbs up, on a ladder, umbrella in the rain (rain-day promise), sleeping (404). Made by reference-image editing from the gold bear so the character stays identical | WebP ≤ 40 KB each |
| Section scenes (4) | Rainy Eastside street, cedar-sided home, bright kitchen with painted cabinets, stained deck at golden hour. One shared color grade | AVIF ≤ 150 KB each at the largest size |
| Brushstroke overlays (2) | Green and gold sweeps on a plain background, then cut out | ≤ 30 KB each |
| Paper texture (1) | Cream paper that tiles seamlessly | ≤ 25 KB |
| Social-sharing image (1) | 3D wordmark + hero visual, 1200×630. Text checked by eye | PNG ≤ 300 KB |

Art direction for every prompt: warm, cinematic and Pacific Northwest (rain, evergreens, cedar, overcast light breaking into gold), our palette only, no text except on the social-sharing image, no brand logos. **Models get picked with `models_explore` at that point**, not from memory, since they change.

---

## 12. SEO, structured data and tracking

**On every page:** a unique title and description built by `lib/seo.ts`; exactly one `<h1>` containing the primary phrase; a canonical URL (https, no www, lowercase, no trailing slash); Open Graph and Twitter `summary_large_image` tags; descriptive alt text; breadcrumbs on inner pages.

**Structured data:**

| Type | Where |
|---|---|
| `HousePainter` (`@id` = `/#business`) | Every page: name, url, logo, phone and email once set, hours once set, `areaServed` = 5 `City` entries with Wikipedia links. No address, no price range, `sameAs` once social profiles exist. |
| `WebSite` + `WebPage` (`dateModified`) | Homepage |
| `Service` (provider = `/#business`) | Each service page |
| `FAQPage` | Every page with an FAQ, generated from the same data the page shows |
| `BreadcrumbList` | Every inner page |
| `Article` | Each article |
| `Review` / `aggregateRating` | **Never**, until real reviews are on the page |

**Internal links:** every city page links to all 4 service pages; every service page links to all 5 city pages; the footer links to all of them; articles link to their related service and the estimate page. A test confirms these links exist.

**Answer engines (Google AI Overviews, ChatGPT and others):** every FAQ answer and section opens with the direct answer. `llms.txt` is generated from the data. The footer shows "Last updated" from `LAST_UPDATED`.

**Indexing switch:** while `SITE_INDEXABLE=false`, every page is noindex and robots.txt blocks everything. Vercel also adds its own noindex header to every preview deployment.

**Tracked events:** `estimate_start`, `estimate_step_2`, `estimate_submit` (with the services picked), `estimate_error`, `call_click`, `text_click` (with the location: header, mobile bar, CTA or footer). They go to Vercel Analytics and to a `window.dataLayer` that GA4 can read later.

## 13. Performance and accessibility budgets

- JavaScript sent to the browser on the homepage ≤ 90 KB compressed. Every section is server-rendered; only the form, accordion, slider, mobile bar and hero video load JavaScript.
- The hero image loads first and at the right size; everything below the fold loads only when scrolled near.
- Nothing shifts the page: fonts, images and the mobile bar all have their space reserved.
- No third-party scripts on first load except analytics (GA4 loads after the page is idle, and only if its ID is set).
- Security headers in `next.config.ts`: `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy` and `frame-ancestors 'none'`.
- WCAG 2.2 AA: keyboard reachable, visible focus, labeled fields, 44 px tap targets, a skip link, alt text, and the contrast rules from section 8.

---

## 14. Risks and open items

| Item | Effect | Handling |
|---|---|---|
| The lane versus EA Pro isn't decided | City list and "Eastside" use could change | Both are driven by data and constants; city copy is scheduled after Nov 6 |
| The name isn't locked | Visuals, logo and domain depend on it | Text uses `SITE.name`; no Higgsfield spend until it's locked |
| No Brushy Bear n8n webhook yet | The form can't send real leads | Dry-run on previews; offer to build the workflow as a separate task |
| A failed webhook could lose a lead | A missed job | Retries, a call/text fallback screen and logged errors. n8n's execution log is the record. |
| Should About mention Erik's other company? | Honesty versus keeping the businesses separate | **A question for you and Erik** (in `CONTENT_TODO.md`). The site never stages the two as rivals. |
| Article author | Bylines help with Google's trust signals | Erik's byline (with last name) once he agrees; the company name until then |
| No real photos or reviews | Thinner trust signals at launch | Promises up front; the gallery and reviews switch on automatically when the data is filled |

---

## 15. Master checklist

- [x] Phase 1: Foundation, brand files, first preview
- [x] Phase 2: Design system and homepage
- [x] Phase 3: Estimate form, API, tracking, privacy
- [x] Phase 4: Services, FAQ, About, Gallery, 404
- [x] Phase 5: City pages (written ahead of the lane decision, every unverified fact flagged)
- [x] Phase 6: Articles, llms.txt, robots, sitemap
- [ ] Phase 7: Higgsfield visuals: code, prompts and quote ready; generation waits for the name and your "yes"
- [x] Phase 8: QA, speed, launch docs, final summary
- [x] Deliverables: Vercel preview with `SITE_INDEXABLE=false` · this plan ticked except Phase 7 generation and the n8n workflow · `LAUNCH_CHECKLIST.md` · `CONTENT_TODO.md` · `AI_ASSETS.md` · final summary
