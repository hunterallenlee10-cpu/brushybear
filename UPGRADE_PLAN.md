# Brushy Bear Painters: Panda-style upgrade plan

Written October 25, 2026. Phase 1 output: study and plan only, no site code changed yet.

**Branch:** `upgrade/panda-style`, cut from `claude/loving-carson-yh6yyi`. That's the repo's default branch, and pushes to it deploy production at brushybear.vercel.app, so it plays the role of "main": never pushed to. One commit per phase, then one PR into it.

**Approval stops:** (1) this plan, (2) the Higgsfield credit cost before any generation, (3) the keyframes before any video.

---

## 1. What I looked at

All four home pages at 1440x900 and 390x844 (Playwright, full page). Screenshots are in the session scratchpad, not committed.

| Site | Load event (desktop / mobile, this sandbox) | Page height (desktop) | First impression |
|---|---|---|---|
| Brushy Bear (current) | 1.7 s / 0.7 s | 8,600 px | Strong brand, cream + forest, illustrated hero card. No form above the fold, no top bar, flat nav. |
| Panda Exteriors | 3.9 s / 2.6 s | 5,200 px | Dense conversion layout: coral utility bar, mega menu, full-bleed photo hero, form card on the right. |
| HELLO Painting | 3.7 s / 2.8 s | 15,100 px | Dark template hero with a stock-style video, badge row, review count, form card with reCAPTCHA. |
| Sound Painting Solutions | 1.5 s / 1.4 s | 1,200 px (inner scroller) | Blank hero slot at first paint, icon cards, quote form on a separate page. |

## 2. What to borrow from Panda (layout, not look)

Brushy Bear keeps its colors, logo, bear, sticker borders and paper texture. We copy Panda's **structure and density**:

| Panda pattern | Brushy Bear version |
|---|---|
| Utility top bar: "Free Estimates · Call (xxx)" | Thin forest bar above the nav: "Free written estimates · Call [PHONE]" with a click-to-call link (shows a placeholder until the phone is set). The "Preview site" banner stays above it until launch. |
| Mega menu nav | **Services** (4 services, each with one line + a small image) · **About** (Our Promise, Reviews, FAQ, Refer & Earn) · **Service Areas** (5 cities) · **Projects** · **Articles**. Phone + "Get a Free Estimate" on the right. Keyboard: buttons with `aria-expanded`, Esc closes, arrow keys move, focus returns to the trigger. |
| Full-bleed hero, headline left, form card right | The scroll-painted hero (Phase 3). The H1 sits on the left in the negative space; the estimate card sits on the right on desktop and directly under the hero on mobile. |
| Trust strip under the hero | Four items: Licensed, bonded and insured (placeholder until L&I # is set) · Photo update every day · Start on time or $250 off · Written quote in 24 hours. |
| Review carousel with initial avatars and "Read more" | Built and ready, fed from `reviews.ts`. While that's empty (it is), the section shows an honest "We're new. Be one of our first reviews" state. No fake reviews. |
| Image service cards | Four cards with large images (the existing Higgsfield scene art, labeled "Illustration") and a "See how we do it" link. |
| Before/after sliders + "View past projects" | Reusable slider that accepts labeled placeholder images until real job photos exist. |
| Service-area section with a map | The existing drawn SVG map of the 5 cities (fast, no Google Maps script), plus city links. |
| Deep footer | Logo, name, phone, email, service-area address line (no street address: service-area business), hours, L&I/UBI, every service/city/company link. |
| Sticky mobile call/estimate button | Keep the existing Call / Text / Estimate bottom bar (it already reserves space so nothing jumps). |

What we do **not** copy from Panda: coral/lime colors, award badge clusters (we have none and won't fake them), the long "About our team" text wall, the two-checkbox consent block.

## 3. The two Eastside competitors

**HELLO Painting does well:**
- Short form above the fold (name, phone, email, service, message).
- Review count and star rating next to the H1; "600+ projects" counter.
- Dedicated process pages in the main nav.
- Projects named by city ("Issaquah Exterior Painting").

**Sound Painting Solutions does well:**
- Quote form with photo upload and instant booking of the estimate visit.
- Referral program and realtor program pages.
- Real cost articles ("How much does it cost to paint the interior…").
- Badges and a stated warranty on the quote page.

**Where both are weak (our openings):**
- Template builds (Webflow / WordPress + Gravity Forms). Generic, interchangeable.
- Generic heroes: a stock-feel video, a blank slider slot. Nothing about rain, moss or cedar.
- Slower: 2.5–4 s to load on our test, reCAPTCHA and plugin scripts on the form.
- Sound's form is about 20 visible fields on a separate page.
- Neither leads with plain-number guarantees. Nobody says "24 hours", "$250 off" or "a photo every day" above the fold.
- Neither gives a price range before the visit.

**How we beat them without a review count:** be faster, more local and more specific. Fastest form (2 fields to start), plain-number promises up front, a ballpark price tool, a color preview, and city pages that actually talk about rain, shade, moss, cedar and HOAs. Competitors are never named on the site.

## 4. Page map

Existing URLs move with permanent redirects, so nothing already shared breaks.

| Route | Status | Notes |
|---|---|---|
| `/` | Rebuild | Section order below |
| `/services` | Upgrade | Image cards |
| `/services/interior-painting`, `exterior-painting`, `cabinet-painting`, `deck-and-fence-staining` | Upgrade | Add process timeline, prep checklist, typical timeline, price factors + estimator link, FAQ (existing copy kept) |
| `/service-areas` | New | Map + 5 city cards |
| `/service-areas/[city]` (5) | Move + upgrade | From `/painters/[city]` (308 redirect). Add local notes block: rain, shade, moss, cedar siding, HOAs |
| `/our-promise` | New | Six promises, details and fine print |
| `/reviews` | New | Honest empty state + "Leave us a Google review" (placeholder link) |
| `/projects` | New | Before/after gallery with placeholder images; `/gallery` redirects here |
| `/refer` | New | Refer & Earn, reward amount = placeholder |
| `/realtors-property-managers` | New | Pre-listing paint, turnovers, one contact, photo updates |
| `/about` | Upgrade | Story slot for Erik and Hunter, bear mascot |
| `/contact` | New | Phone, text, email, hours, short form |
| `/estimate` | Keep | Full 2-step form + estimator + color preview |
| `/articles`, `/articles/[slug]` | Keep | Existing 3 articles unchanged |
| `/faq`, `/privacy` | Keep | FAQ answers unchanged; privacy gets the new SMS consent wording |
| `/api/lead` | New | Replaces `/api/estimate` (kept as an alias so nothing in flight breaks) |

## 5. Home page sections (in order)

1. Utility bar
2. Nav (mega menu)
3. Scroll hero: Rain-worn → Prepped right → Painted to last → H1 "Eastside house painting that holds up to the rain." + estimate card. "Skip to estimate" link always visible.
4. Trust strip
5. Estimate form (the hero card on desktop; a full section on mobile so it's reachable without finishing the scroll)
6. "Northwest weather is hard on a house" (kept)
7. The Brushy Bear Promise card stack
8. Services cards
9. Ballpark price estimator
10. Exterior color preview
11. Before/after projects + "View past projects"
12. How it works, 4 steps (existing process data)
13. Reviews (empty state for now)
14. Service areas map + city links
15. FAQ (existing answers) with FAQPage schema
16. Articles (3 cards)
17. Final CTA band with a huge "RAIN-READY" watermark
18. Footer

The current "Most ways of getting a house painted let you down" section is dropped from the home page; its point now lives in the promise stack.

## 6. Components

**Layout:** `UtilityBar`, `MegaMenu` (desktop) + upgraded `MobileMenu` (accordion groups), `Footer` (deeper), `MobileActionBar` (kept), `PreviewBanner` (kept).

**Hero:** `ScrollHero` (client: sticky canvas, eased scrub, coarse-then-fine frame loading, poster first, DPR ≤ 2, reduced-motion static image, per-beat overlay copy, progress bar, skip link), `HeroEstimateCard`.

**Conversion:**
- `LeadForm`: 2 steps. Step 1: service + ZIP. Step 2: name, phone, email, address, optional photos, preferred contact (call / text / email), SMS consent.
- Success and error states. `BookingEmbed` (placeholder slot, reads `NEXT_PUBLIC_BOOKING_URL`).
- `/api/lead` → `LEAD_WEBHOOK_URL` (falls back to the current `N8N_WEBHOOK_URL`, so the Vercel setup keeps working).

**Sales tools:**
- `PromiseStack` (big numbers: 24 hrs, 1, daily, every evening, rain, $250).
- `PriceEstimator` (reads `config/pricing.ts`, every rate marked `// TODO: Erik confirm`).
- `ColorPreview`: SVG craftsman house with body / trim / door layers and 8 Pacific Northwest palettes. "Use this palette in my estimate" pre-fills the form notes.

**Proof (honest):** `TrustStrip`, `ReviewCarousel` (initial avatars, "Read more"; renders only real reviews) + `ReviewsEmptyState`, `BeforeAfterSlider` (accepts placeholder images), `ProjectCard`.

**Content:** `ServiceCard`, `ServiceAreaSection` (map + links), `LocalNotes` (city page block), `ProcessTimeline`, `ArticleCards`, `FinalCtaBand` (watermark).

**SEO:** per-page `pageMetadata`, `HousePainter` JSON-LD (placeholders for phone, license, hours), `FAQPage` wherever an FAQ renders, sitemap updated for new routes, an OG image per page type, noindex kept.

## 7. Design rules applied

- **Palette:** forest `#1f4d3a`, sage `#5d7a69`, mist `#9fbcab`, pale `#cbdcd1` on warm cream `#f4ede1`.
- **Accent:** the logo's own gold (`#e9a93b`, already the button color) for every CTA. Charcoal text on it measures 6.9:1. The `#E0A43A` fallback isn't needed because the logo has a warm color. Every new pairing is added to the contrast test.
- **Contrast limits:** sage `#5d7a69` on cream is only 4.05:1, so sage is for large text, icons and backgrounds (white on sage is 4.72:1), never small body text. Forest on cream is 8.3:1 and forest on pale is 6.7:1.
- **Type:** Lilita One (sturdy display) for headlines, Manrope for body. Both are already self-hosted, so no new font weight to load. Panda-style density means tighter section padding than today, with generous line spacing kept.
- **Photos:** every photo slot uses the existing striped `PlaceholderImage`, routed through `next/image` once real files exist.
- **Copy:** short, specific, tradesperson voice. No em dashes. The existing banned-word test is extended with "elevate" variants and an em-dash check.

## 8. Things that change existing rules (flagging for your OK)

1. **Prices on the site.** `COPY_GUIDE.md` and a unit test currently forbid any dollar figure except "$250 off". The estimator needs price ranges. Plan: allow dollar amounts only inside the estimator, which reads them from `config/pricing.ts`. Every result is labeled "Ballpark only. Your written quote is free." All rates are marked `// TODO: Erik confirm` and listed in `PLACEHOLDERS.md`.
2. **Promise wording.** You asked to keep the six promises worded as they are now. The current titles are: "Written estimate in 24 hours", "One point of contact", "A photo update every day", "A clean house every evening", "Rain-day promise", "We start on time" (body: "...or take $250 off"). I'll keep those titles and bodies as is, and use the short forms from your brief only as the big-number labels on the cards and trust strip.
3. **Form order flips.** Today step 1 is contact details. Your 2-step spec puts service + ZIP first. That lowers the first-step effort, but step 1 alone isn't a lead. I'll send a "partial" ping to the webhook after step 1 only if you want it; default is off.
4. **City URLs move** from `/painters/[city]` to `/service-areas/[city]`, and `/gallery` moves to `/projects`. All with permanent redirects.
5. **The current hero video** (rain-to-sun loop) gets replaced by the scroll hero. Its files stay in the repo as a fallback until the new hero ships.

## 9. Build order after approval (one commit each)

| Phase | What ships |
|---|---|
| 2a | Tokens (sage/mist/pale), utility bar, mega menu, deeper footer, new routes and redirects, `PLACEHOLDERS.md` |
| 2b | `LeadForm` + `/api/lead` + booking slot, trust strip, promise stack + `/our-promise` |
| 2c | Price estimator + `config/pricing.ts`, color preview |
| 2d | Service pages, city pages, projects, reviews, refer, realtors, about, contact |
| 3 | Higgsfield: `balance` + `models_explore` → **stop with the credit cost** → beat 1, then beats 2–4 from it, plus 9:16 versions → **stop with the keyframes** → three 5 s transitions → ffmpeg frames, poster, loop → `ScrollHero` + `/hero/*` cache headers. If Higgsfield fails: ffmpeg push-in + crossfades from the approved keyframes. |
| 4 | Playwright screenshots of every page at both sizes; hero at 0/33/66/100%; console errors; form → API on every form; Lighthouse on home + one service page (targets: Perf 90+, A11y 95+, SEO 100 in public mode); PR + Vercel preview. |

**Note on SEO 100:** previews are deliberately noindex, which Lighthouse scores as an SEO failure. I'll run the SEO check on a local production build with indexing switched on (the same method the last QA pass used) and report both numbers.
