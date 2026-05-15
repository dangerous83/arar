# Quantix — AI Automation SaaS Landing Page

A premium dark-futuristic landing page built with **Vite + React 18 + Tailwind CSS + Framer Motion + GSAP ScrollTrigger**, featuring an interactive **Spline 3D hero** that animates in response to scroll.

## Quick start

```bash
npm install
npm run dev          # http://localhost:5173
npm run build        # outputs to dist/
npm run preview      # serves the production build locally
```

## Deploying to Vercel

The repo includes [`vercel.json`](./vercel.json) configured for Vite. To deploy a preview:

1. Sign in to [vercel.com](https://vercel.com) and click **Add New → Project**.
2. Import `dangerous83/arar`.
3. Vercel auto-detects Vite. The framework, build command (`npm run build`), and output directory (`dist`) are already in `vercel.json` — accept the defaults.
4. Every push to `claude/install-ui-ux-repo-7Ol3y` gets its own **preview URL**; merges to `main` deploy to production.

The 3D Spline scene will load correctly there (unlike in this remote sandbox, where the Spline CDN is unreachable).

## Scroll-driven 3D Spline interactivity

The hero pins for three viewport-heights of scroll while three text panels scrub over the 3D scene. As you scroll, a single GSAP `ScrollTrigger` pushes a `0 → 1` progress value into the Spline scene via three mechanisms (`src/components/Hero.jsx`, `applyProgressToSpline`):

1. **Scene variables** — if your Spline scene exposes any of these variables (Spline editor → **Variables** panel), they get the live progress value:
   - `progress`
   - `scroll`
   - `scrollProgress`
   - `ScrollY`

   Bind these inside Spline (e.g. drive a camera angle, an object's Y position, a material property) and they will react to scroll automatically.

2. **Camera zoom** — `splineApp.setZoom(1 + progress * 0.35)` dollies the camera in.

3. **Scene root rotation** — the first top-level object named `Scene`, `Root`, `Main`, or `Group` is rotated on Y and X to keep the scene visually engaged even if no variables are exposed.

To extend, edit `applyProgressToSpline` in [`src/components/Hero.jsx`](./src/components/Hero.jsx). The full `splineApp` API is available — call `splineApp.findObjectByName('YourObject')` to grab any named object and tween its `position` / `rotation` / `scale` with scroll progress.

## Project structure

```
src/
├── App.jsx
├── main.jsx
├── index.css                  # tailwind layers + design tokens
└── components/
    ├── Navbar.jsx             # sticky glass nav, mobile drawer
    ├── Hero.jsx               # pinned Spline hero + scroll-driven 3D
    ├── SafeBoundary.jsx       # graceful Spline fetch-failure handling
    ├── DashboardPreview.jsx   # glassmorphism dashboard mockup
    ├── TrustedLogos.jsx
    ├── Features.jsx           # 3+2 feature grid with custom SVG visuals
    ├── FinalCTA.jsx
    └── Footer.jsx
```

## License

MIT
