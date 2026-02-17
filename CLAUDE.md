# jakestarkey.dev

## Stack
- **Next.js 16** (App Router) · **React 19** · **TypeScript 5**
- **Tailwind CSS v4** — config is CSS-only via `@theme` in `src/app/globals.css`, no `tailwind.config.ts`
- **Biome** for linting/formatting (replaces ESLint + Prettier) — run `bun run check`
- **Bun** as package manager — use `bun install`, `bun run dev`, `bun run build`

## Structure
- All source lives in `src/app/` (Next.js App Router)
- Components: `src/app/components/<Name>/<Name>.tsx` (server components by default)
- Client components need `'use client'` — only `Navbar` currently requires it
- Data: `src/data/skills.ts`
- `tsconfig.json` only includes `src/app/**/*` and `src/data/**/*`

## Windows gotchas
- `src/Components/` and `src/components/` are the same path — new components go in `src/app/components/` to avoid collisions
- Use `powershell -Command "..."` for file/dir operations; bash `rm`/`ls` don't work here
- `bun install` will resolve `^` ranges to latest versions

## Commands
- `bun run dev` — start dev server
- `bun run build` — production build (also type-checks)
- `bun run check` — Biome lint + format
