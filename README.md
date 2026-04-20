# nickfix-site

Single-page marketing site for nickfix, built with Vite + React.

## Commands

```bash
npm install      # install deps
npm run dev      # start dev server (http://localhost:5173)
npm run build    # production build to ./dist
npm run preview  # serve the built site locally
```

## Updating the booking URL

The Cal.com booking URL and contact email live as constants at the top of [src/App.jsx](src/App.jsx):

```js
export const BOOKING_URL = 'https://cal.com/nickfix/intro'
export const EMAIL = 'hello@nickfix.dev'
```

Change them in one place and both CTAs + the footer update.

## Deploying to Cloudflare Pages

1. Push this repo to GitHub.
2. In the Cloudflare dashboard → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
3. Pick the repo. Build settings:
   - **Framework preset**: Vite
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Node version**: 20 (set `NODE_VERSION=20` as an env var if needed)
4. Deploy. Cloudflare will give you a `*.pages.dev` URL.
5. Add your custom domain under the project's **Custom domains** tab:
   - Add `nickfix.dev` and `www.nickfix.dev`.
   - If the domain is already on Cloudflare, DNS records are created automatically.
   - Otherwise, point your registrar's nameservers at Cloudflare first.

## Stack

- Vite + React 18 (JavaScript)
- No runtime CSS framework — hand-rolled CSS with custom properties
- `prefers-color-scheme` for light/dark (no toggle)
- System font stack
