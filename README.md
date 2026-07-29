# zacharysedefian.com

Personal academic website for Zachary B. Sedefian — political scientist and
adjunct lecturer. Built with [Astro](https://astro.build), TypeScript, and
Markdown content collections. No client-side framework, no CSS framework:
just static HTML/CSS with a small amount of vanilla JS for progressive
enhancement (the Research page filters).

## Tech stack

- **Astro 7** (static output — every page is prerendered to plain HTML)
- **TypeScript** (strict mode)
- **Astro Content Layer API** for typed Markdown collections
- **Vanilla CSS** with custom properties for design tokens (no Tailwind/Bootstrap)
- **@astrojs/sitemap** for `sitemap-index.xml`
- **@astrojs/rss** for the `/rss.xml` news feed

## Project structure

```text
public/
  cv/zachary-sedefian-cv.pdf   # downloadable CV (binary — replace directly)
  robots.txt
  CNAME                        # GitHub Pages custom-domain file
src/
  assets/images/               # source images — imported via astro:assets for optimization
  components/                  # Navbar, Footer, cards, Button, Tag, Breadcrumbs, etc.
  content/
    publications/*.md
    writing/*.md
    courses/*.md
    news/*.md
    projects/*.md
  content.config.ts            # Zod schemas for the 5 collections above
  data/
    site.ts                    # site title, nav links, social links, research areas
    cv.ts                      # structured CV sections that aren't collections
  layouts/BaseLayout.astro     # <head>, meta/OG/Twitter tags, JSON-LD, skip link
  pages/                       # one file per route (see below)
  styles/global.css            # design tokens, reset, typography, utility classes
  utils/                       # dates.ts, labels.ts, semester.ts
```

Routes: `/`, `/research/` (+ `/research/[slug]/`), `/teaching/` (+ `/teaching/[slug]/`),
`/writing/` (+ `/writing/[slug]/`), `/news/` (+ `/news/[slug]/`), `/projects/`,
`/cv/`, `/contact/`, `/rss.xml`, `/404`.

## Getting started

```bash
npm install
npm run dev        # http://localhost:4321
```

| Command             | Action                                      |
| -------------------- | -------------------------------------------- |
| `npm run dev`        | Start the local dev server                   |
| `npm run build`      | Production build to `dist/`                  |
| `npm run preview`    | Preview the production build locally         |
| `npx astro check`    | Run the TypeScript/Astro type checker         |

## Adding content

All page content lives in `src/content/<collection>/*.md` as frontmatter +
Markdown body. Add a new file, fill in the frontmatter fields below, and the
corresponding index/detail pages pick it up automatically — no page code
changes needed.

**Publication** (`src/content/publications/my-new-paper.md`):

```md
---
title: "My New Paper"
authors: ["Zachary Sedefian"]
type: peer-reviewed-article # | working-paper | conference-paper | book-review
journal: "Journal Name"      # or `venue:` for conference papers
year: 2027
status: forthcoming          # | published | in-preparation | under-review
abstract: "One-paragraph abstract."
doi: "10.xxxx/xxxxx"          # optional
tags: ["topic one", "topic two"]
featured: true                # shows on the home page
citation: "Full citation string."
---

Optional long-form body content rendered below the abstract.
```

**Writing** (`src/content/writing/my-article.md`): `title`, `category`
(`academic` | `journalism` | `essay` | `book-review` | `interview`),
`publication`, `date`, `status` (`published` | `forthcoming`), `excerpt`,
`link` (optional external URL), `tags`, `featured`.

**Course** (`src/content/courses/my-course.md`): `courseNumber`, `title`,
`institution`, `semester` (e.g. `"Fall 2026"` — used for sorting), `role`,
`description`, `syllabus` (optional link), `readings` (optional array).

**News** (`src/content/news/my-update.md`): `title`, `date`, `summary`,
`link` (optional), `tags`. News items automatically appear in `/rss.xml`.

**Project** (`src/content/projects/my-project.md`): `title`, `category`
(`research` | `book` | `presentation` | `dataset`), `status` (optional),
`date` (optional), `description`, `link` (optional), `featured`.

All frontmatter is validated against the Zod schemas in
[`src/content.config.ts`](src/content.config.ts) — `npm run build` will fail
loudly if a required field is missing or misspelled.

## Customization

- **Site metadata, nav, social links:** [`src/data/site.ts`](src/data/site.ts).
  Several `SOCIAL_LINKS` entries are placeholder URLs (`.../TODO`) — replace
  them with real profile URLs when accounts are confirmed.
- **CV page content:** [`src/data/cv.ts`](src/data/cv.ts) (education, honors,
  languages, professional experience). The downloadable PDF itself is
  `public/cv/zachary-sedefian-cv.pdf` — replace that file directly to update it.
- **Colors, fonts, spacing:** CSS custom properties at the top of
  [`src/styles/global.css`](src/styles/global.css).
- **Portrait photo:** `src/assets/images/`. Images here are imported through
  `astro:assets` for automatic resizing/format conversion at build time —
  don't move new photos into `public/` if you want that optimization.

## Deployment

The site builds to fully static HTML (`site` is set in
[`astro.config.mjs`](astro.config.mjs)), so it can be hosted anywhere that
serves static files.

### Cloudflare Pages

1. Connect this repository in the Cloudflare dashboard, or deploy from the
   CLI with `npx wrangler pages deploy dist`.
2. Build command: `npm run build`. Build output directory: `dist`.
3. [`wrangler.toml`](wrangler.toml) already points `pages_build_output_dir`
   at `dist` for CLI deploys.
4. Add `zacharysedefian.com` as a custom domain in the Pages project settings.

### GitHub Pages

1. In the repo settings, set **Pages → Source** to **GitHub Actions**.
2. Push to `main` — [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)
   builds with the official `withastro/action` and deploys via
   `actions/deploy-pages`.
3. `public/CNAME` already contains `zacharysedefian.com` for the custom
   domain; point its DNS at GitHub Pages, or delete the file to use the
   default `<user>.github.io` URL instead.

Only run one of these two at a time in DNS — both can build from the same
repo, but a domain can only point at one host.
