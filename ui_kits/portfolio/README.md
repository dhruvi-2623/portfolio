# Portfolio UI Kit

Recreates Dhruviben Patel's portfolio in the visual language of the **3D Creator** layout — giant serif hero heading, scrolling marquee, char-by-char animated About copy, white Services card with rounded top, and sticky-stacking Project cards on a deep warm-chocolate background.

## Files

| File | Purpose |
| --- | --- |
| `index.html` | Entry — loads React, Babel, and the three JSX modules below. |
| `styles.css` | All custom styles for this kit. Imports `../../colors_and_type.css` for tokens. |
| `Components.jsx` | `FadeIn`, `Magnet`, `ContactButton`, `GhostButton`, `AnimatedText` — shared building blocks. |
| `SectionsTop.jsx` | `Hero`, `Marquee`, `About` sections. |
| `SectionsBottom.jsx` | `Services`, `Projects`, `Footer` sections. |
| `image-slot.js` | User-fillable image placeholder web component (drop your portrait + project shots here). |

## How to fill it in

The kit ships with image placeholders. Drag and drop images directly onto each slot in the page:

- **Hero portrait** — top-of-page, 4:5 aspect ratio. Drop a professional headshot here.
- **Project cards (× 3 projects × 3 slots)** — each project has two stacked images on the left + one tall hero shot on the right. Use real screenshots of the chat app, healthcare dashboard, service broker UI, etc.

## Theming notes

- The whole page uses tokens from `colors_and_type.css` — no hard-coded brand colors.
- The Projects section is the one deliberately dark surface (`#2a1f1a` deep chocolate brown) for visual drama, matching the original 3D Creator design but warm-toned.
- The contact-button gradient is `linear-gradient(123deg, #6b2218, #c45c4a, #d97757, #b8860b)` — terracotta-led, replacing the original magenta/purple.
- Hero h1 and About h2 use `linear-gradient(180deg, accent-2 → accent)` clipped to text.

## Adapting content

Replace the constants at the top of each section file:

- `TECH_TILES` in `SectionsTop.jsx` — marquee tiles.
- `SERVICES` in `SectionsBottom.jsx` — skill / service list.
- `PROJECTS` in `SectionsBottom.jsx` — project cards (name, category, link, slot IDs).
- About paragraph — string literal inside `About()` in `SectionsTop.jsx`.
- Hero h1, tagline, and footer — directly in JSX in their respective section files.

## Substitutions flagged

- **No portrait photo** — used `image-slot` placeholder.
- **No project screenshots** — same.
- **Marquee GIFs from the 3D-Creator brief replaced** with styled tech-stack tiles (no GIF assets exist for Dhruvi's projects).
