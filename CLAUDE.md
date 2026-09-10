# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Morgan Trotter's personal portfolio site — a single-page Vue 3 app built with Vite, deployed to GitHub Pages at morgantrotter.com.

## Commands

```
npm run dev           # start Vite dev server
npm run build          # production build to dist/
npm run preview        # preview the production build
npm run lint            # eslint .
npm run lint:fix        # eslint . --fix
npm run format          # prettier --write .
npm run check-format    # prettier --check .
```

There is no test suite/framework configured in this repo.

A Husky pre-commit hook runs `npx lint-staged`, which runs Prettier on staged `*.{js,ts,vue,css,scss,json,md}` and ESLint `--fix` on staged `*.{js,ts,vue}`.

## Architecture

- Single-page app: `src/main.js` mounts `src/App.vue`, which renders one page as a stack of section components in order: `NavBar`, `Hero`, `WorkGrid`, `Capabilities`, `About`, `Contact` (`src/App.vue`). There is no router — navigation is same-page anchor links (`#hero`, `#work`, `#about`, `#contact`) matched by `scroll-margin-top` rules in `src/style.css`.
- Each section lives in one self-contained `src/components/*.vue` file using `<script setup>` with `<style scoped>` — no shared component library or composables layer.
- Styling is plain CSS (no Tailwind at runtime, despite `prettier-plugin-tailwindcss` being installed — that plugin only auto-sorts class-name strings and has no config file). All visual design flows from CSS custom properties defined once in `src/styles/tokens.css` (colors, fonts, radius, layout width, gutter) and imported globally via `src/style.css`. Tokens auto-switch for dark mode via `@media (prefers-color-scheme: dark)` — there is no manual theme toggle. When adding UI, reuse existing tokens (`--ink`, `--paper`, `--surface`, `--line`, `--accent`, `--accent-ink`, `--font-display`, `--font-body`, `--font-mono`, `--radius`, `--col-max`, `--gutter`) rather than hardcoding colors/fonts.
- The `.section` class (`src/style.css`) is the shared content-width/gutter wrapper each section's outer element uses to align to the page's max column width.
- Static assets referenced by content (project images, résumé PDF) live in `src/assets/` (imported/bundled) and `public/` (served as-is, e.g. `resume.pdf`, `favicon.png`, `CNAME`).
- Deployment: pushing to `main` triggers `.github/workflows/deploy.yml`, which builds with Node 20.19.0 and publishes `dist/` to GitHub Pages via `peaceiris/actions-gh-pages`, preserving the custom domain via `public/CNAME`.
