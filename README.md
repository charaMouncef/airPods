# AirPods Landing Page

An Apple-style product landing page for AirPods, built with React, Vite, and Tailwind CSS. It features an autoplaying video hero, a crossfading AirPods Max colorway gallery, GSAP scroll animations with pinned horizontal cards, a custom loading screen, Lenis smooth scrolling, and a fully responsive layout.

## Tech Stack

| Category | Technology |
| --- | --- |
| Framework | [React 19](https://react.dev/) |
| Build Tool | [Vite 8](https://vite.dev/) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com/) via [@tailwindcss/vite](https://www.npmjs.com/package/@tailwindcss/vite) |
| Animation | [GSAP](https://gsap.com/) + ScrollTrigger + [@gsap/react](https://gsap.com/resources/React/) |
| Smooth Scrolling | [Lenis](https://github.com/darkroomengineering/lenis) |
| Linting | [ESLint 10](https://eslint.org/) with React Hooks and React Refresh plugins |

## Getting Started

### Prerequisites

- Node.js 20.19+ or 22.12+ (recommended)
- npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Starts the Vite dev server with hot module replacement.

### Build

```bash
npm run build
```

Generates a production build in the `dist/` folder.

### Preview

```bash
npm run preview
```

Serves the production build locally.

### Lint

```bash
npm run lint
```

## Project Structure

```
├── public/                        Static assets (images, videos, fonts, icons)
│   ├── features/                  Feature card imagery
│   ├── fonts/                     Custom Regular, Medium, SemiBold, Bold fonts
│   ├── videos/                    Hero video and poster image
│   ├── airpods_*.png              Product and colorway images
│   ├── cart.svg, search.svg       Navbar icons
│   └── logo.svg                   Apple logo / favicon
├── src/
│   ├── main.jsx                   App entry point (mounts <App /> in StrictMode)
│   ├── App.jsx                    Loader gate, Lenis/ScrollTrigger setup, page composition
│   ├── index.css                  Global styles (fonts, Tailwind theme, crossfade keyframes)
│   ├── constants/
│   │   └── index.js               Nav links, colorways, models, feature cards, footer links
│   └── components/
│       ├── Loader.jsx             Initial loading screen with progress bar
│       ├── Navbar.jsx             Fixed Apple-style navigation
│       ├── Hero.jsx               Autoplaying video hero and Buy CTA
│       ├── Hero2.jsx              Crossfading AirPods Max colorway hero
│       ├── Models.jsx             Product model grid
│       ├── Features.jsx           Pinned horizontal scrolling feature cards
│       └── Footer.jsx             Footer links and copyright
└── index.html                     SEO and social media metadata
```

## Features

- **Loading screen** — A progress-bar loader covers the app until fonts are ready and a minimum display time has elapsed.
- **Video hero** — A muted, looping, autoplaying AirPods Pro 3 video with a poster fallback.
- **Crossfading colorways** — Five AirPods Max finishes fade in and out on a 25-second CSS loop.
- **Smooth scrolling** — Lenis is synced with GSAP's ticker so scroll-linked animations stay in step.
- **Pinned horizontal cards** — `Features` pins itself and scrubs the cards horizontally by the computed overflow width, excluding section padding.
- **Responsive design** — Tailwind breakpoints adapt typography, layout, and navigation across screen sizes.
- **Custom theming** — Tailwind v4 `@theme` tokens, custom fonts, and reusable keyframes defined in `src/index.css`.
- **SEO metadata** — `index.html` includes a description, canonical URL, Open Graph, and Twitter card tags.

## How It Works

1. **Loading and setup** — `App.jsx` shows `Loader` until `document.fonts.ready` resolves and the minimum display time has passed, then mounts the page. All sections mount eagerly once loading finishes.
2. **Smooth scrolling** — Lenis is driven from `gsap.ticker` and forwards scroll events to `ScrollTrigger.update`. A `ScrollTrigger.refresh()` runs once the page mounts so trigger positions are measured against the final layout.
3. **Heroes** — `Hero` plays the looping video; `Hero2` stacks five colorway images and uses the `imageFade` keyframes in `src/index.css` to crossfade them at five-second intervals.
4. **Horizontal cards** — `Features` uses `useGSAP` with a ScrollTrigger that pins the section, and scrubs the card track by `cards.scrollWidth - visibleWidth`. Function-based values with `invalidateOnRefresh` recompute the distance on resize, and the start/end are clamped so narrow or very wide viewports can't produce invalid ranges.
5. **Data-driven content** — Navigation links, colorways, model cards, feature cards, and footer links all come from `src/constants/index.js`.
6. **Styling** — Component markup uses Tailwind utility classes directly; global fonts, theme tokens, body styles, and the crossfade keyframes live in `src/index.css`.

## Assets

All static assets are served from `public/`:

- `airpods_5.png`, `airpods_pro_3.png`, and `airpods_max_*.png` — Product and colorway imagery
- `videos/hero.mp4` and `videos/hero.jpg` — Hero video and poster
- `features/` — Five feature card images
- `fonts/` — Custom Regular, Medium, SemiBold, and Bold font files
- `logo.svg`, `cart.svg`, `search.svg` — Icons and favicon

## License

No open-source license is included in this repository. AirPods, the Apple logo, and related product imagery are trademarks of Apple Inc.
