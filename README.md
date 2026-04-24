# NuraBuild Contracting — Fictional UAE Contractor Website Demo

> **⚠️ DISCLAIMER:** This is a **fictional website concept** created for portfolio demonstration purposes. NuraBuild Contracting is **not a real company**. No real clients, projects, testimonials, awards, or company affiliations are represented.

## Live Demo

**https://nurabuild.vercel.app/**

## About

A multi-page, premium light-mode fictional UAE contracting / fit-out / renovation company website. Built as a professional demonstration of how a contractor business can present its services, project scopes, and enquiry flow using modern frontend technologies.

**Built by Yogesh Vadivel** as a portfolio demonstration piece.

## Pages

| Route | Description |
|---|---|
| `/` | Homepage with hero, capability strip, service/project/quality previews |
| `/about` | Company profile, values, and project approach |
| `/services` | Detailed service listings with scope tags and inclusions |
| `/projects` | Fictional concept project cards |
| `/projects/[slug]` | Individual project scope detail pages |
| `/sectors` | Residential, apartment, office, and industrial sectors |
| `/quality-safety` | Quality assurance, safety coordination, and handover process |
| `/contact` | Enquiry form, contact info, and FAQ |

## Tech Stack

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Images:** next/image with remote Pexels stock photos
- **Fonts:** Libre Baskerville (headings) + Manrope (body) via next/font/google
- **Deployment:** Vercel-ready (no backend, no database, no env vars needed)

## Design

- Light-mode warm stone background (#FAF7F2)
- Deep navy text (#0F2433) and bronze accent (#B88746)
- Geometric SVG logo mark
- Blueprint grid and noise texture overlays
- Consistent page hero banners with breadcrumbs
- Active nav state indicators
- Framer Motion page reveals with reduced-motion support

## Features

- Multi-page Next.js App Router with per-page metadata
- Sticky navbar with mobile menu and active route highlighting
- Premium hero section with blueprint grid and architectural spec card
- Capability trust strip with numbered badges
- Numbered service listings with scope tags and "what this includes" detail
- 3 fictional project concept cards with detail pages (clearly labeled as concepts)
- 4 sector cards with relevant services and example scopes
- Quality & safety detail with communication and handover sections
- Statement quote section
- Frontend-only enquiry form with project type dropdown and demo submission
- Contact FAQ section
- Professional footer with fictional disclaimer
- Full SEO metadata and Open Graph tags
- Fully responsive (desktop, tablet, mobile)
- Accessibility: heading hierarchy, alt text, focus states, form labels

## Run Locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build for Production

```bash
npm run build
npm start
```

## Deploy to Vercel

1. Push to a GitHub repository
2. Import into [Vercel](https://vercel.com)
3. No environment variables required
4. Deploy

Or use the Vercel CLI:

```bash
npx vercel
```

## Stock Images

All images are sourced from **Pexels** under the free Pexels License. No copyrighted, branded, or client-owned images are used. See [IMAGE_CREDITS.md](./IMAGE_CREDITS.md) for full attribution.

## Important Notes

- This is a **fictional demo** — no real company or client is represented
- No fake testimonials, client logos, awards, or project completion claims
- All project cards are clearly labeled as "Concept Project"
- Contact form is frontend-only (no data is sent anywhere)
- Yogesh Vadivel appears only in the footer disclaimer, README, metadata, contact FAQ, and image credits
- The website is designed to look like a professional contractor company website, **not** a developer portfolio
