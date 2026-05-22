<<<<<<< HEAD
# Mall Screening — The Mall

A multi-page **static mall experience** built as a front-end screening project. The site presents a luxury lifestyle destination with themed sections for hospitality, entertainment, dining, children’s play, fashion, and events. All pages are client-rendered; there is no backend API.

## Overview

**The Mall** is a React single-page application with route-based sections. Each area reuses shared UI primitives (buttons, media, video, motion) while keeping its own layout, data file, and styles. Content is driven by TypeScript data modules and external image/video CDNs configured through environment variables.

The fashion and product experiences are intentionally **non-transactional**: cards and social-style buttons are display-only and do not redirect to third-party stores or social networks.

## Tech stack

| Layer | Technology |
|--------|------------|
| Framework | React 19, TypeScript |
| Build | Vite 8 |
| Routing | React Router 7 |
| Styling | SCSS modules, Bootstrap 5 |
| Motion | Framer Motion (`Motion.tsx` wrappers), GSAP, Lenis |
| UI | Swiper, React Bootstrap, Lucide React |
| Media | `MediaImage`, `BackgroundVideo` with CDN fallbacks |

## Getting started

### Prerequisites

- Node.js 18+ (LTS recommended)
- npm

### Install and run

```bash
cd mall-screening
npm install
cp .env.example .env
npm run dev
```

The dev server runs at **http://localhost:3000** (`strictPort` is enabled in `vite.config.ts`).

### Other scripts

```bash
npm run build    # TypeScript check + production build → dist/
npm run preview  # Preview production build on port 3000
```

## Environment variables

Copy `.env.example` to `.env`. Base URLs for media and reference sites are centralized in `src/config.ts`:

| Variable | Purpose |
|----------|---------|
| `VITE_UNSPLASH_BASE` | Fallback photography |
| `VITE_PEXELS_VIDEO_BASE` | Stock video |
| `VITE_VIMEO_PLAYER_BASE` | Embedded video player |
| `VITE_ADDRESS_HOTELS_*` | Stay / hospitality assets |
| `VITE_TIMELESS_*` | Restaurant (Timeless / Al Habtoor) CDN & site |
| `VITE_NICKU_BASE` | Kids play (Nickelodeon Universe–style) assets |
| `VITE_HELENA_MAR_BASE` | Fashion — Helena Mar imagery |
| `VITE_PALOMINO_LIFESTYLE_BASE` | Fashion — partner brand imagery |
| `VITE_LUXE_LIVING_BASE` | Fashion — partner brand imagery |

## Routes

| Path | Page | Description |
|------|------|-------------|
| `/` | Home | Hero, stats, leisure grid, experiences, lounge, events preview |
| `/stay` | Stay | Address Hotels–inspired hospitality |
| `/entertainment` | Entertainment | Listing of mall entertainment |
| `/entertainment/:id` | Entertainment detail | Individual experience |
| `/events` | Events | Events calendar / highlights |
| `/kids-play` | Children’s play | Rides, characters, plan visit (Nickelodeon Universe–inspired) |
| `/restaurant` | Dining | Timeless **Al Habtoor** — dark theme, gallery, spaces, features |
| `/fashion-shopping` | Fashion | SS’26 collection, shop-the-inspo, partner brands, store locations |

On `/restaurant`, the global footer is hidden and the navbar uses a dark variant (`app-shell--restaurant`).

## Project structure

```
mall-screening/
├── public/                 # Static assets
├── src/
│   ├── App.tsx             # Router + shell (footer toggle for restaurant)
│   ├── config.ts           # Env-based CDN helpers
│   ├── assets/theme/       # Shared SCSS variables
│   ├── components/
│   │   ├── common/         # Navbar, Footer, MediaImage, BackgroundVideo, CommonButton, Motion
│   │   └── sections/       # Home page sections (Hero, Events, Experiences, …)
│   └── pages/
│       ├── homePage/
│       ├── stayPage/
│       ├── entertainment/
│       ├── events/
│       ├── childrenPlay/
│       ├── restaurant/     # Per-component folders + restaurantData/
│       └── fashionShopping/
├── .env.example
├── vite.config.ts
└── package.json
```

### Page conventions

- **Data**: `*Data.ts` files hold copy, images, and section config.
- **Styles**: Page-level `*Page.scss` plus component SCSS where split (e.g. restaurant).
- **Components**: Reusable pieces under `pages/<name>/components/` (restaurant uses one folder per component).

## Shared components

- **`MediaImage`** — CDN image with Unsplash (or configured) fallback.
- **`BackgroundVideo`** — Autoplaying muted background video with poster.
- **`CommonButton`** — Variants (`primary`, `primary-dark`, `primary-cream`, `outline`, …) for buttons and static labels.
- **`Motion.tsx`** — `FadeUp`, `SlideIn`, `HoverUpAnchor`, etc., built on Framer Motion.

## Notable page behavior

### Restaurant (`/restaurant`)

- Full black/cream **Timeless** theme aligned with Al Habtoor reference content.
- Sections: hero, contacts, image gallery (Swiper), VIP/dining spaces, club card & parking features (video).
- Fixed bottom section nav (contacts → gallery → spaces → amenities).
- No embedded map; reserve uses `tel:` link only.

### Fashion (`/fashion-shopping`)

- Helena Mar–led layout with partner blocks (Palomino, Luxe Living).
- Product grids and sliders are **static** (no Shopify or store redirects).
- Instagram/Facebook controls are **visual-only** buttons (no external navigation).
- Hero “Shop Now” scrolls to the new-season section on the same page.

### Children’s play (`/kids-play`)

- Themed for family entertainment with character cards, rides, and visit planning.

## Build output

Production build emits to `dist/` and is suitable for static hosting (Netlify, Vercel, Azure Static Web Apps, S3, etc.). No server-side rendering is required.

## License

Private screening / assessment project (`"private": true` in `package.json`). Add license terms here if the repository is published.
=======
# The-Mall
Luxury multi-page mall experience built with React, Vite, and TypeScript featuring immersive static UI sections.
>>>>>>> 3def1da377bc1c2e6ddbe4f0012a1979cf523aad
