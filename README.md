# Dhruviben Patel — Portfolio Design System

A design system distilled from a single-page personal portfolio: warm paper-like background, terracotta + taupe + gold accents, a serif/sans pairing (Instrument Serif + DM Sans), and softly-shadowed cards with left-border accent stripes.

This is a **personal portfolio brand**, not a product brand — the design language is tuned for an individual presenting themselves as a software engineer. Calm, considered, hand-crafted feel; minimal chrome; content first.

## Sources

This system was reverse-engineered from the user's own portfolio repository:

- **GitHub** — [`dhruvi-2623/portfolio`](https://github.com/dhruvi-2623/portfolio)
  - `index.html` — single-page SPA-style portfolio with hash routing
  - `README.md` — GitHub profile readme

There were no separate Figma files or design tokens — the tokens here were lifted directly from the CSS custom properties at the top of `index.html`. If you want to do a better job designing for this brand, explore the live repo for the most current source of truth.

## Quick Index

| File | What's inside |
| --- | --- |
| `README.md` | This file — context, content fundamentals, visual foundations, iconography |
| `SKILL.md` | Agent skill manifest — invoke this system as a skill |
| `colors_and_type.css` | All CSS variables (colors, type, spacing, shadows, radii, motion) + semantic element defaults |
| `preview/` | 12 small HTML cards shown in the Design System tab (3 color groups, 2 type groups, 3 spacing groups, 4 component groups) |
| `assets/` | Logos, photos, icons, brand assets — currently empty; the portfolio has no logo/photo assets to copy |
| `ui_kits/portfolio/` | React JSX recreation of the portfolio in 3D-Creator-inspired layout. See its own `README.md`. |
| `ui_kits/portfolio/index.html` | Live interactive portfolio page (hero, marquee, about, services, projects, footer) |

---

## CONTENT FUNDAMENTALS

The portfolio reads like a thoughtful, slightly understated personal letter — first-person, confident but not boastful, technical but never jargon-soaked.

### Voice & tone
- **First person, singular.** "I build...", "I'm focused on...", "I've built...". The brand is one person, and the voice never pretends otherwise. No "we", no royal plural.
- **Direct address only when warm.** "Let's connect!", "I'd love to hear from you." reserved for the contact section. Most of the site speaks _at_ the reader, not _to_ them.
- **Quietly confident.** "Shipping software that works in the real world." "Full-stack web and end-to-end ownership—from idea to production." Claims are concrete and outcome-oriented, not adjective-stuffed.
- **Receipts over adjectives.** Impact is quoted with percentages: "reduced manual operational effort by ~60%", "improved API performance by ~40%", "automated test coverage to ~85%". The `~` is intentional — honest approximation rather than fake precision.

### Casing
- **Sentence case for headings.** "Crafting software that ships", "A selection of my work", "Get in touch". Never Title Case.
- **UPPERCASE for eyebrows only.** Small section labels like `ABOUT ME`, `FEATURED PROJECTS`, `LET'S CONNECT` — always with wide tracking (`letter-spacing: 0.12em`).
- **Mixed for proper nouns.** "ASP.NET Core Web API", "Socket.IO", "MongoDB". Respect each technology's own capitalization.

### Punctuation & dashes
- **Em-dash heavy.** Used liberally for asides and rhythm: "Full-stack web and end-to-end ownership—from idea to production." Never spaced (no " — ").
- **Middle dot · for inline meta.** Locations and dates in headers: "Houston, Texas · Open to Work", "Software Engineer · iOS (SwiftUI) + Full-Stack".
- **Oxford comma — yes.** "React, Node.js, ASP.NET Core, MongoDB/SQL, and Azure."
- **Numbers + units stay together.** "~60%", "200+ concurrent requests", "1 yr 2 mos".

### Vocabulary patterns
- **Verbs of building:** _built, shipped, designed, implemented, integrated, optimized, modernized._ Avoid passive ("was created").
- **Phrases that recur:** "end-to-end ownership", "in the real world", "AI-augmented", "clean architecture", "performance-focused", "production-ready".
- **No buzzword stacking.** Tech is listed in pill form (`React  TypeScript  Redux`) rather than woven into prose. Prose stays human; the chips carry the keyword density.

### Emoji & icons
- **No emoji on the website itself.** Only the GitHub README uses 👋 and 👨‍💻 (a different surface with different conventions).
- **No icon glyphs in body text.** Section labels never lead with a symbol. The visual rhythm comes from a 24px gradient bar before the eyebrow text, not an emoji.

### Examples — say it like this

> **Hero tagline**
> "Software Engineer · AI-Augmented Full-Stack (React, Node.js, .NET)"
>
> **Intro paragraph**
> "I build AI-augmented full-stack web applications with React, Node.js, ASP.NET Core, MongoDB/SQL, and Azure—combining modern AI-to-code workflows (Cursor, design handoff) with clean architecture, performance (code-splitting), and production-ready delivery."
>
> **Project bullet**
> "Improved API performance by ~40% through query optimization, indexing, and pagination."
>
> **CTA**
> "View my work" / "Get in touch" — short, verb-led, two-word ideal.

### Don't write
- ❌ "We are passionate about..." — there is no we.
- ❌ "Cutting-edge", "synergy", "leverage" — corporate filler.
- ❌ "🚀 Shipping fast!" — no emoji on-site.
- ❌ "Boost your productivity 10x with..." — this is a portfolio, not a marketing landing page.

---

## VISUAL FOUNDATIONS

The whole system feels like a **letterpress-printed résumé page**: warm cream paper, terracotta ink, generous breathing room, a single serif headline face paired with a clean sans.

### Color
- **Warm neutrals, not grey.** Background is `#faf7f4` (cream), surface is pure white, text is `#1e1b18` (warm near-black, never `#000`). Everything sits in the warm half of the wheel.
- **One primary, two supports.** Terracotta `#c45c4a` is the brand. Taupe `#8b7355` and dark gold `#b8860b` are used sparingly to add depth — on alternating left-border accents on cards, gradient text endpoints, soft-fill pill chips.
- **Soft fills are translucent.** `accent-soft`, `accent-2-soft`, `gold-soft` are all rgba at ~12–14% alpha so they overlay cleanly on the warm bg without muddying it.
- **No dark mode.** The portfolio has no dark theme; the warm-paper palette is the whole identity.

### Type
- **Serif for display, sans for everything else.** `Instrument Serif` (Regular only) for hero H1, section titles, and the site logo. `DM Sans` 400/500/600/700 for body, nav, buttons, pills, meta.
- **Display headlines get a gradient text fill.** Hero H1 uses `linear-gradient(135deg, var(--text), var(--accent-2))` clipped to text. Subtle, only on the very top.
- **Tight tracking on serif (`-0.02em`), wide tracking on uppercase eyebrows (`+0.12em`).** Standard tracking on body.
- **Generous line-height.** Body at 1.6, intro paragraphs at 1.65. Reads like a book, not a UI.
- **Numbered scales are restrained.** No tiny secondary text below 0.72rem. No giant 5rem display either — 3.5rem is the ceiling.

### Spacing & layout
- **900px max-width container.** Single-column, centered. There is no multi-column layout anywhere; even cards stack vertically rather than gridding side-by-side (except the 4-up About value cards on wide screens).
- **Section padding: 3rem vertical, 1.5rem horizontal.** Generous, never cramped.
- **Auto-fill minmax grids** for value cards (`minmax(240px, 1fr)`) — flexes naturally.
- **No fixed elements except the header** (sticky, with backdrop-blur). Footer is bottom-of-flow, not fixed.

### Backgrounds
- **No imagery in backgrounds.** No textures, no patterns, no full-bleed photos, no hand-drawn illustrations, no SVG noise. The cream paper does all the work.
- **Subtle directional gradients** for the hero and "Let's Connect" block: `linear-gradient(165deg, ...)` between `--bg` and `--bg-warm` — almost imperceptible, but adds a sense of light direction.
- **Section-alt-bg trick:** alternate sections get `linear-gradient(180deg, rgba(253,248,245,0.6) 0%, transparent 100%)` with `border-radius: 16px` and side-margins. Creates a "card within the page" feel without a harsh container.

### Cards
- **White surface, 1px hairline border, 16px radius, 3px colored left-border.** The left-border-accent is the signature card pattern. **This is one of the few places we permit a left-border-accent treatment** — it's brand-correct here because the rest of the page also leads with vertical accent bars (the gradient bar before eyebrows).
- **Cycling left-border colors** on the About value cards: accent → accent-2 → gold → accent. Rhythmic, not random.
- **Default shadow:** `0 2px 12px rgba(30,27,24,0.06)` — barely there, like the card is resting on paper.
- **Hover shadow:** `0 8px 28px rgba(30,27,24,0.10)` — lifts a touch more.

### Borders & shadows
- **All borders 1px solid `#e8e2dc`** (a warm neutral, tinted off cream). Never harsher.
- **Two-level shadow system** — `shadow` (rest) and `shadow-hover` (lift). No deep modal shadows, no inset shadows, no neon glows.
- **Buttons get the lightest shadow** (`0 1px 4px rgba(30,27,24,0.04)` on secondary).

### Corner radii
- **10px** for buttons and small chips.
- **16px** for cards and the hero block.
- **999px (pill)** for badges, tech-pills, the "Open to work" badge.

### Hover states
- **Links:** `color: var(--accent-dark)` + underline.
- **Buttons:** `transform: translateY(-2px)` lift + shadow upgrade. Primary keeps its gradient; secondary swaps border-color to terracotta and tints the text.
- **Cards:** `translateY(-2px)` or `-3px`, shadow upgrades from `shadow` to `shadow-hover`. No color change.
- **Skill pills:** border becomes terracotta, text becomes terracotta, `translateY(-1px)`.
- **Nav links:** color shifts to terracotta. The active route is terracotta + semibold.
- All hover transitions use **0.2s** with default easing.

### Press states
- The portfolio does not define explicit `:active` styles — it relies on the natural opacity dip browsers apply. If you add one, **soften the existing hover** (e.g. drop the translateY back to 0, deepen the shadow) rather than introducing a new color.

### Transparency & blur
- **One blur, used once.** The sticky header has `background: rgba(250,247,244,0.92)` + `backdrop-filter: blur(12px)`. Content underneath softly diffuses through.
- **Soft fills are always rgba**, never solid pastels. This keeps the cream paper visible through them.

### Animation
- **Fade + lift on view change.** Each routed view animates in with `opacity 0 → 1` and `translateY(10px → 0)` over `0.45s ease`.
- **Staggered item entrance** — children with `.animate-item` cascade 60ms apart (`fadeInUp`, 0.5s ease).
- **No bounces, springs, or scale pulses.** Motion is restrained and decorous. Everything eases out; nothing overshoots.
- **No looping ambient animation.** Nothing pulses or breathes after entrance.

### Imagery (when used)
- The current site has no photography. If you add any: **warm-tinted, slightly desaturated, paper-grain feel.** Avoid cool blue/cyan tones. Avoid high-contrast B&W. Think 35mm film, warm window light.

### Layout rules
- **Single 900px content column** centered with `1.5rem` side gutters. Mobile-first; nothing breaks below 320px.
- **Sticky header** is the only chrome above content. No tabs, breadcrumbs, side rails, FABs.
- **Section eyebrow** (24px terracotta-to-taupe gradient bar + uppercase tracked label) is the universal section opener. Use it everywhere.

---

## ICONOGRAPHY

**The portfolio uses essentially no icons.** This is intentional and part of the brand voice — text and color do the navigational work; iconography would feel ornate.

What you _will_ find:

- **A 24px × 2px gradient bar** (`linear-gradient(90deg, var(--accent), var(--accent-2))`) used as a decorative lead-in to every section eyebrow. This is the closest thing to an icon in the system. It's drawn with CSS (`::before` on `.sec-label`), not an SVG file.
- **A horizontal hairline divider** at the top of the hero (`linear-gradient(90deg, transparent, var(--border), transparent)`) — also CSS-drawn.
- **Shields.io badges in the GitHub README only.** These are colored rectangle SVGs from `img.shields.io` representing Portfolio / LinkedIn / Email. They never appear on the site itself.
- **Emoji 👋 and 👨‍💻** only in the GitHub `README.md`. Not on the site. Do not introduce emoji into HTML/JSX outputs.
- **No icon font, no SVG sprite, no Lucide/Heroicons/FontAwesome import.** The repo has zero icon dependencies.

### If you need icons for a derivative artifact
If the design genuinely needs glyphs (e.g. you're building a settings screen or a richer dashboard view from this brand) **use [Lucide](https://lucide.dev) as a flagged substitution.** Lucide's 1.5px stroke, rounded line-caps, and 24×24 grid match the calm, hand-letter feel of the brand better than fill-style alternatives. Document the addition in your file header so the user can swap if they want a different set.

```html
<!-- Flagged substitution: Lucide via CDN -->
<script src="https://unpkg.com/lucide@latest"></script>
```

Color icons in `var(--text-muted)` at rest, `var(--accent)` on hover/active. Don't tint them gold or taupe — those colors are reserved for left-border accents.
