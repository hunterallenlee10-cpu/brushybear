# Brushy Bear Painters website

Next.js 16 (App Router, fully static) + TypeScript + Tailwind 4, deployed on Vercel. One job: get Eastside homeowners to request an estimate.

## Commands

| Command | What it does |
|---|---|
| `npm run dev` | Local dev server |
| `npm run build` | Launch check, then a production build |
| `npm run check` | Lint + typecheck + unit tests (copy rules, SEO lengths, contrast, duplicate city content) |
| `npm run test:e2e` | Browser tests against the last build: form, pages, 404s, accessibility (run `npm run build` first) |
| `npm run content-todo` | Regenerates `implementation/CONTENT_TODO.md` from the data |

## Where things live

- **Business facts:** `src/config/site.ts` (phone, license numbers, hours, season, last updated). Unfilled facts are typed placeholders.
- **All copy:** `src/data/` (services, cities, articles, FAQ, promises, home). Rules for writing it: `implementation/COPY_GUIDE.md`.
- **Which pages exist / are indexable:** `src/config/pages.ts`.
- **Search switch:** the `SITE_INDEXABLE` env var (off until launch).
- **Leads:** `src/app/api/estimate/route.ts` → `N8N_WEBHOOK_URL`. Photo uploads: `src/app/api/upload/route.ts` → Vercel Blob.
- **Brand files:** `scripts/brand/` (cut-outs, icons, share image). Originals stay out of git in `brand-source/`.

## Docs

`implementation/IMPLEMENTATION_PLAN.md` · `LAUNCH_CHECKLIST.md` · `CONTENT_TODO.md` · `AI_ASSETS.md` · `COPY_GUIDE.md`
