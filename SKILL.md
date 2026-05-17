---
name: dhruvi-portfolio-design
description: Use this skill to generate well-branded interfaces and assets for Dhruviben Patel's personal portfolio brand — warm cream paper, terracotta + taupe + gold accents, Instrument Serif paired with DM Sans, calm and considered tone, first-person voice. Use for production portfolio work, throwaway prototypes, slides, or quick visual artifacts.
user-invocable: true
---

Read the `README.md` file at the root of this skill, and explore the other available files:

- `colors_and_type.css` — drop-in stylesheet with all CSS variables (colors, type, spacing, radii, shadows, motion) and semantic element defaults.
- `preview/` — small specimen cards showing each token group in use.
- `assets/` — logos, photos, illustrations (currently sparse; flag substitutions to the user when an icon or image isn't available).
- `ui_kits/portfolio/` — full React JSX recreation of the portfolio in a 3D-Creator-inspired layout. Read the kit's own `README.md` for component map.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc.), copy the assets and `colors_and_type.css` out into the working project and create static HTML files for the user to view. If working on production code, treat the rules in `README.md` (CONTENT FUNDAMENTALS, VISUAL FOUNDATIONS, ICONOGRAPHY) as the canonical brand bible.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask several clarifying questions (audience, surface, tone, length, level of polish), and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

Core voice reminders:

- First-person singular. No "we".
- Sentence case for headings; UPPERCASE only for short tracked eyebrow labels.
- Em-dashes used liberally and unspaced (`a—b`, never `a — b`).
- Receipts over adjectives — "~60% reduction", "200+ concurrent requests".
- No emoji on the website; emoji only permissible in GitHub READMEs.
- No icon library in body content; if icons are essential, substitute Lucide (1.5px stroke, rounded caps) and flag the addition.
