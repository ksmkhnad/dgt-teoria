# DGT Teoría

Trilingual (ES / EN / RU) practice app for the Spanish DGT driving-theory exam. Built with Next.js 14 (App Router), TypeScript, Tailwind, deployed as a fully static export to Cloudflare Pages.

## Stack

- Next.js 14 static export (`output: "export"`)
- Tailwind CSS + Manrope / JetBrains Mono via `next/font`
- localStorage for progress, XP, streak, hearts (no backend)
- Duolingo-style lesson mechanics + Swiss-geometric visual language

## Content

- 103 practice questions across 8 sections, each with ES / EN / RU translations, grounded in the DGT free manual "Manual del Permiso B en Lectura Fácil" (2024) plus updates from Igor's 2025 theory course
- 67-term trilingual glossary with search and category filter
- Reference tables: speed limits, BAC by driver category, ITV schedule, signal priority, P.A.S. accident protocol, ADAS acronyms
- Mock exam (30 questions, 30 min, ≤3 wrong to pass — real DGT rules)
- Spaced-repetition of wrong answers

## Local development

```bash
npm install
npm run dev       # http://localhost:3000
npm run build     # static export to `out/`
npm run typecheck
```

## Deployment

Automatic on push to `main` via `.github/workflows/deploy.yml` → Cloudflare Pages project `dgt-teoria`. Required GitHub secrets:

- `CLOUDFLARE_API_TOKEN` — token with `Pages:Edit` permission
- `CLOUDFLARE_ACCOUNT_ID` — from Cloudflare dashboard sidebar

## Roadmap

- Real auth (Supabase + Google/Apple/email) — placeholders shipped in onboarding
- Sign-image extraction from source PDF (script exists at `scripts/extract-manual.mjs`)
- Remaining chapters: T4, T6, T9, T13, T14, T15, T16, T17, Anexo Puntos
