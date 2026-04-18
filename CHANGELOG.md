# Changelog

## 0.4.1 - 2026-04-18

### Changed
- Change contact email from `dumelang@agricola-app.com` to `support@agricola-app.com`

---

## 0.4.0 — 2026-04-18

### Added
- `src/pages/DeleteAccountPage.tsx` — dedicated account deletion page at `/delete-account`
- Step-by-step in-app deletion guide (4 steps)
- Data deletion and retention disclosures
- Email contact card linking to `dumelang@agricola-app.com` for manual deletion requests
- "Delete Account" link added to Footer alongside Privacy and Terms

---

## 0.3.0 — 2026-04-09

### Added
- Full favicon set: `favicon.ico` (16+32 px multi-size), `favicon-16x16.png`, `favicon-32x32.png`, `apple-touch-icon.png` (180×180), `android-chrome-192x192.png`, `android-chrome-512x512.png`
- `public/site.webmanifest` — web app manifest with name, theme color, and icon references
- Updated `index.html` favicon links: replaced single JPEG reference with proper multi-size ICO, PNG, apple-touch-icon, and manifest link tags

---

## 0.2.0 — 2026-04-09

### Added
- GA4 analytics via `VITE_GA_MEASUREMENT_ID` env variable (injected at build time)
- `src/lib/analytics.ts` — typed wrappers: `trackPageView`, `trackCTAClick`, `trackScrollDepth`
- `src/components/RouteTracker.tsx` — SPA page view tracking on route change + scroll depth milestones (25/50/75/90%)
- CTA click tracking on all download buttons (Hero, DownloadCTA) and Navbar Get App buttons
- `.env.example` documenting required env variable
- GitHub Actions build step now injects `GA_MEASUREMENT_ID` secret as `VITE_GA_MEASUREMENT_ID`

---

## 0.1.0 — 2026-04-08

### Added
- Meta description tag for search engine visibility
- Open Graph tags (title, description, image, url, type, site_name, locale)
- Twitter Card tags (summary_large_image with title, description, image)
- Canonical URL (`<link rel="canonical">`)
- Theme color meta tag
- `robots.txt` allowing all crawlers with sitemap reference
- `sitemap.xml` with site URL
- JSON-LD structured data (Organization + SoftwareApplication schemas)
- Hero images (`hero-farm.jpg`, `hero-cattle.jpg`)
