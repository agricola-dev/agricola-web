# Lessons — Agricola Web (Landing Page)

Patterns, mistakes, and edge cases discovered during development. Updated after every correction.

---

## Patterns to follow

- **GA4 in Vite SPAs**: Use `%VITE_GA_MEASUREMENT_ID%` substitution in `index.html` with a `charAt(0) === '%'` guard so the script silently no-ops when the env var is unset. Set `send_page_view: false` in `gtag('config', ...)` to prevent double-counting — fire page views manually via `useLocation` instead.
- **Scroll depth tracking**: Own it in a single null-returning component (`RouteTracker`) alongside page view tracking. Use a `useRef<Set<number>>` for fired milestones and reset it on route change.

## Mistakes to avoid

- **Using `base: './'` with BrowserRouter**: Relative asset paths resolve correctly from `/` but break from `/privacy` (they resolve to `/privacy/assets/...`). Always use `base: '/'` when using BrowserRouter.

## Edge cases discovered

- **`.htaccess` must land in `dist/`**: Place it in `public/` so Vite copies it during build. Verify after build with `ls dist/.htaccess`.
