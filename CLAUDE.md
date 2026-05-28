# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm install      # install deps
npm run dev      # Vite dev server at http://localhost:5173
npm run build    # production build to ./dist
npm run preview  # serve the built site locally
```

There is no lint, type-check, or test setup in this repo — none of those commands exist. Don't suggest running them.

## Architecture

Single-page React site (Vite + React 18, JavaScript, no TypeScript) deployed as a static SPA to Cloudflare Pages.

- **Routing**: `src/main.jsx` mounts `BrowserRouter` and defines all routes inline. The site has a `Home` page that links to three "package" detail pages (`/fullstack-embed`, `/devops-overhaul`, `/scaling-readiness`) plus a `/why` page. There is no nested layout component — each page imports `Header` and `Footer` itself.
- **SPA fallback**: `wrangler.jsonc` sets `assets.not_found_handling: "single-page-application"` so any unknown path serves `index.html` — required for React Router to handle `/why`, `/fullstack-embed`, etc. on direct load/refresh. Do NOT also add a `public/_redirects` file: Workers reads both and treats them as a conflicting infinite-loop rule, failing the deploy. Any non-Cloudflare hosting target would need its own equivalent rewrite.
- **Shared config**: `src/config.js` exports `BOOKING_URL` (Cal.com link) and `EMAIL`. Every CTA and the footer pull from here — change in one place. (Note: the README mentions these living in `src/App.jsx`, but that file does not exist; `src/config.js` is the source of truth.)
- **Package metadata**: The list of packages (slug, name, blurb, price pills, accent color) is defined as an array at the top of `src/pages/Home.jsx`. The slug must match the route path in `main.jsx` and the corresponding page filename in `src/pages/`. To add a package, edit all three places.
- **Styling**: One global stylesheet at `src/styles.css`. No CSS framework. Light/dark themes are driven by CSS custom properties under `:root` and `@media (prefers-color-scheme: dark)` — there is no theme toggle. Per-package accent colors use `package-card--{accent}` modifier classes.

## Deploy

Cloudflare Workers (static assets), configured via `wrangler.jsonc` at the repo root. The dashboard "Create application" flow uses:

- **Project name**: `nickfixdev-site` (must match `name` in `wrangler.jsonc`)
- **Build command**: `npm run build`
- **Deploy command**: `npx wrangler deploy`

`wrangler deploy` reads `wrangler.jsonc`, uploads `./dist` as static assets, and serves `index.html` for unknown paths (SPA mode). Pushes to the default branch redeploy automatically once Git is connected.

The README still describes the older Pages flow (framework preset "Vite", output dir `dist`) — that flow no longer exists in Cloudflare's UI; everything is now Workers.
