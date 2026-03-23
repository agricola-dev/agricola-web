# Agricola Web — project context for Claude

## What it is
React marketing landing page for the Agricola platform, deployed at agricola-app.com. Static site — no backend integration, no authentication, no API calls.

---

## Tech stack

- **React** 19 + **TypeScript** 5.9
- **Vite** 7.2 (build + dev server)
- **Tailwind CSS** 3.4 (with shadcn theme)
- **shadcn/ui** (40+ Radix-based components)
- **React Hook Form** + **Zod** (form validation)
- **Recharts** (data visualisation)
- **Lucide React** (icons)

---

## Directory layout

```
src/
  sections/              — page sections (Hero, Features, HowItWorks, etc.)
  components/
    ui/                  — shadcn/ui components (button, card, dialog, etc.)
  hooks/
    useIsMobile.ts       — responsive breakpoint hook
  lib/
    utils.ts             — utility functions (clsx class merging)
  types/                 — TypeScript type definitions
  App.tsx                — root component, composes sections with scroll-reveal
  App.css                — app-specific styles
  index.css              — global styles (Tailwind directives)
  main.tsx               — entry point
index.html               — HTML entry point
tailwind.config.js       — Tailwind theme + plugins
vite.config.ts           — Vite build/dev config
postcss.config.js        — PostCSS config
components.json          — shadcn/ui config
```

---

## Conventions

- **Component imports**: `import { Button } from '@/components/ui/button'`
- **Sections**: each file in `src/sections/` is a self-contained page section, composed in `App.tsx`
- **Styling**: Tailwind utility classes; shadcn components use `cn()` for class merging
- **No state management library** — component-local `useState` only

---

## Scripts

```
npm run dev      — start dev server
npm run build    — TypeScript check + Vite build
npm run lint     — ESLint
npm run preview  — preview production build
```
