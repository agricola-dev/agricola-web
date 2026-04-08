# Changelog

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
