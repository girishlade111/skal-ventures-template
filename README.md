# Skal Ventures Template

A modern, visually striking landing page template for an investment / venture-capital brand, originally generated with [v0.app](https://v0.app). It pairs a WebGL-powered interactive particle hero with a clean dark editorial layout — a reusable starting point for any startup, fund, or agency site.

## What It Does

- **Hero landing page for "Skal Ventures"** — a fictional investment firm pitching "perpetual investment strategies that outperform the market".
- **Interactive GPU particle background** — thousands of WebGL points rendered with React Three Fiber and custom GLSL shaders; the field reacts when you hover the CTA button.
- **Live shader playground** — hidden [leva](https://github.com/pmndrs/leva) controls (top-right) let you tune speed, noise, focus, aperture, vignette and point size in real time.
- **Responsive header** with mobile menu, light/dark theme toggle (next-themes), and smooth-scroll navigation.
- **Sentient serif typography** (self-hosted woff files) + Geist Mono for body text.

## Features

- WebGL particle system with custom shaders (`pointMaterial`, `simulationMaterial`, `vignetteShader`)
- Interactive hover state that perturbs the particle field via the CTA button
- Leva GUI for tweaking every visual parameter live
- Dark mode with `next-themes` + CSS variables
- shadcn/ui component library (button, dialogs, tooltips, forms, charts-ready)
- Tailwind CSS v4 styling with custom fonts
- Fully client-side; no backend, no API routes, no database — static-export friendly

## Tech Stack

- **Framework:** Next.js 15 (App Router, static export) + React 19 + TypeScript
- **3D / WebGL:** Three.js, `@react-three/fiber`, `@react-three/drei`, `r3f-perf`, `maath`
- **UI:** shadcn/ui, Radix UI primitives, Tailwind CSS v4, `lucide-react` icons
- **Controls:** `leva` (hidden debug panel)
- **Fonts:** Geist Mono (Google), Sentient (self-hosted)
- **Package manager:** pnpm (lockfile committed); npm works too

## Quick Start

```bash
# clone
git clone https://github.com/girishlade111/skal-ventures-template.git
cd skal-ventures-template

# install (pnpm recommended; npm --legacy-peer-deps also works)
pnpm install
# or: npm install --legacy-peer-deps

# run locally
pnpm dev
# open http://localhost:3000
```

Tip: press the tiny gear icon (top-right corner) to open the Leva panel and experiment with the particle system.

## Project Structure

```
app/                  # Next.js App Router (layout, page, globals.css)
components/
  gl/                 # WebGL scene: canvas, particles, GLSL shaders
  ui/                 # shadcn/ui primitives
  hero.tsx            # Hero section with interactive CTA
  header.tsx          # Top nav + theme toggle
  mobile-menu.tsx     # Mobile drawer
public/               # Fonts (Sentient woff), placeholder images
styles/               # Extra styles
next.config.ts        # Static export config (output: 'export', unoptimized images)
```

## Environment Variables

None — the site is fully static and needs no secrets or env vars.

## Deployment

The app is statically exported (`output: 'export'` in `next.config.ts`), so it can be hosted anywhere that serves static files:

- **GitHub Pages:** this repo is published via the `gh-pages` branch → live at `https://girishlade111.github.io/skal-ventures-template/`
  - Note: `basePath: '/skal-ventures-template'` is set in `next.config.ts` for the subpath deploy. Remove `basePath` (keep `output: 'export'`) when deploying to a root domain or Vercel.
- **Vercel / Netlify / Cloudflare Pages:** `pnpm build` produces `out/` — point your host at it.

## License

Free to use and adapt. Attributions: Three.js, React Three Fiber, shadcn/ui, leva.

---

Built by Girish Lade — [ladestack.in](https://ladestack.in)
