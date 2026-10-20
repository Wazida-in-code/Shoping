<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# shoping

Small Next.js 16 shopping demo (App Router). Plain JavaScript — no TypeScript, tests, lint, or CI exist.

## Commands

- `npm run dev` — dev server (Turbopack; also regenerates the block above)
- `npm run build` / `npm start` — production build / serve
- These three scripts are the entire `package.json` script list. Do not invent or look for `lint` / `test` / `typecheck` commands.

## Next.js 16 specifics (verify in `node_modules/next/dist/docs/`)

- Middleware is now **`src/proxy.js` exporting `proxy()`** — not `middleware.js`. Here it guards `/products/:path` and redirects unauthenticated users to `/sign-in`.
- `next.config.mjs` enables `cacheComponents`, `partialPrefetching`, and `reactCompiler` (uses `babel-plugin-react-compiler`). App Router caching/async defaults differ from older Next — check the bundled docs before assuming.
- Path alias: `@/*` → `./src/*` (`jsconfig.json`), used throughout `src/`.

## App structure

- `src/app/` — pages: `/`, `/products`, `/products/[id]`, `/sign-in`, `/sign-up`; `src/app/api/auth/[...all]/route.js` is the better-auth catch-all (route handlers are under `src/app/api/`, not `src/pages/api/`).
- `src/context/ContextProvider.jsx` — client-side Context API holding the product list; fetched at runtime from `https://fakestoreapi.com/` (fake API — products are never in a database).
- `src/lib/auth.js` / `src/lib/auth-client.js` — better-auth with the MongoDB adapter. MongoDB is used **only** for auth users/sessions.

## Environment

`.env` (gitignored) must define `BETTER_AUTH_SECRET`, `BETTER_AUTH_URL`, and `BETTER_AUTH_MONGODB_URI`; auth and the `/products` proxy redirect fail at runtime without them. Never commit `.env`.

## Styling

- Tailwind CSS **v4, CSS-first**: no `tailwind.config` file. Everything is wired in `src/app/globals.css`: `@import "tailwindcss"`, `@plugin "daisyui"`, `@import "@heroui/styles"` — edited there, compiled by the `@tailwindcss/turbopack` loader rule in `next.config.mjs`.
- Two component libraries coexist: HeroUI (`@heroui/react`) and daisyUI (theme via `data-theme="light"` on `<html>`). Do not add v3-style Tailwind config or `@tailwind directives`.
