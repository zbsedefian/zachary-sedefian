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
    writing/*.md
    courses/*.md
    news/*.md
  content.config.ts            # Zod schemas for the collections above
  data/
    site.ts                    # site title, nav links, social links, research areas
  layouts/BaseLayout.astro     # <head>, meta/OG/Twitter tags, JSON-LD, skip link
  pages/                       # one file per route (see below)
  styles/global.css            # design tokens, reset, typography, utility classes
  utils/                       # dates.ts, labels.ts, semester.ts
```

Routes: `/` (bio + news list), `/teaching/`,
`/writing/` (+ `/writing/[slug]/`), `/contact/`, `/404`. Research links out to
Google Scholar and CV links straight to the PDF; `/research/`, `/cv/` and `/news/`
redirect (see `astro.config.mjs`).

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

**Writing** (`src/content/writing/my-article.md`): `title`, `category`
(`academic` | `journalism` | `essay` | `book-review` | `interview`),
`publication`, `date`, `status` (`published` | `forthcoming`), `excerpt`,
`link` (optional external URL), `tags`, `featured`.

**Course** (`src/content/courses/my-course.md`): `courseNumber`, `title`,
`institution`, `semester` (e.g. `"Fall 2026"` — used for sorting), and
`syllabus` (optional link to a PDF in `public/syllabi/`).

**News** (`src/content/news/my-update.md`): `date` in frontmatter, and a
single sentence as the Markdown body (links and italics allowed). All news
items are listed on the home page.

All frontmatter is validated against the Zod schemas in
[`src/content.config.ts`](src/content.config.ts) — `npm run build` will fail
loudly if a required field is missing or misspelled.

## Customization

- **Site metadata, nav, social links:** [`src/data/site.ts`](src/data/site.ts).
  Several `SOCIAL_LINKS` entries are placeholder URLs (`.../TODO`) — replace
  them with real profile URLs when accounts are confirmed.
- **CV:** replace `public/cv/zachary-sedefian-cv.pdf` directly to update it.
- **Google Scholar link:** `SCHOLAR_URL` in `src/data/site.ts`.
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
