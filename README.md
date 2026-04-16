# APortfolio

A fast, customizable, static portfolio website built with Astro. Designed to
showcase personal projects with minimal setup and zero ongoing hosting cost.

---

## Purpose

This project exists to give developers (and anyone with creative work) a
professional place to showcase their projects on the web — without the cost,
maintenance, and complexity of a full web application.

It's opinionated about what matters for a portfolio:

- **Load instantly** — pre-rendered HTML, no client-side JavaScript required
- **Work offline-first** — no external fonts, no tracking, no CDN dependencies
- **Respect the reader's time** — recruiters spend <30 seconds scanning; the
  design reflects that with a featured-first home page and a filterable grid
- **Be easy to maintain** — all personal data lives in one config file; adding
  a new project is one Markdown file

---

## Support This Project

If you find this useful, consider supporting its development. Your contributions help keep the project maintained, fund new features, and cover infrastructure costs.

### Donate

[![Buy Me A Coffee](https://img.shields.io/badge/Buy_Me_A_Coffee-Support-FFDD00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black)](https://buymeacoffee.com/ashrafalnas)
[![Patreon](https://img.shields.io/badge/Patreon-Support-F96854?style=for-the-badge&logo=patreon&logoColor=white)](https://www.patreon.com/c/unrealpatr/)

| Platform            | Type                         | Link                                                                      |
| ------------------- | ---------------------------- | ------------------------------------------------------------------------- |
| **Buy Me a Coffee** | One-time or monthly support  | [buymeacoffee.com/{{BMC_USERNAME}}](https://buymeacoffee.com/ashrafalnas) |
| **Patreon**         | Recurring monthly membership | [patreon.com/{{PATREON_USERNAME}}](https://www.patreon.com/c/unrealpatr/) |

---

## Who it's for

| User                                               | How to use it                                                                                    |
| -------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| **Developer with some Astro/Node.js experience**   | Clone, edit `src/siteConfig.ts`, write `.md` project files, deploy via Git — full control        |
| **Developer new to the stack**                     | Follow [`guide.md`](./guide.md) step-by-step — no framework knowledge needed                     |
| **Non-technical user (designer, writer, student)** | Follow [`deployclick.md`](./deployclick.md) — run two commands, drag-and-drop, done in 2 minutes |

---

## What You Get Out of the Box

- **5 pages**: Home, Projects listing, Project detail, About, Contact
- **Filterable project grid** by project type (Web App, CLI Tool, Library, API, Mobile App, Data/ML)
- **Featured projects** surfaced on the home page
- **Dark / light mode** with system preference detection + manual toggle
- **Mobile-responsive** layout with adaptive typography
- **Contact form** powered by Formspree (no backend needed)
- **Social links** in the footer (GitHub, LinkedIn, Twitter, Email, Website)
- **Accessible**: semantic HTML, `prefers-reduced-motion` support, ARIA labels
- **404 page** styled to match the rest of the site

## Performance Profile

- **0 KB** of client-side JavaScript by default (only a ~1 KB theme-toggle script)
- **No external network requests** — system fonts, local CSS, no analytics
- **~5 KB** total CSS (Gzipped smaller)
- Pages build in under 1 second on modern hardware

---

## Tech Stack

| Layer        | Choice                              | Why                                                           |
| ------------ | ----------------------------------- | ------------------------------------------------------------- |
| Framework    | [Astro](https://astro.build)        | Zero-JS by default, content collections, islands architecture |
| Content      | Markdown + Zod schema               | Type-safe project entries, writable by anyone                 |
| Styles       | Plain CSS with custom properties    | No preprocessor, native dark mode, tiny bundle                |
| Hosting      | Cloudflare Pages / Vercel / Netlify | Free tier, automatic HTTPS, global CDN                        |
| Contact form | Formspree                           | No backend, free 50 submissions/month                         |

Full rationale for these choices is documented in [`plan.md`](./plan.md).

---

## Project Structure

```text
APortfolio/
├── public/                     # Static files served from site root
│   ├── favicon.svg
│   └── images/                 # Add your project screenshots here
├── src/
│   ├── siteConfig.ts           # ← Personal data (name, bio, social, etc.)
│   ├── content.config.ts       # Project schema (Zod)
│   ├── content/projects/       # ← Your projects (one .md file each)
│   │   ├── sample-web-app.md
│   │   ├── sample-cli-tool.md
│   │   └── sample-api.md
│   ├── layouts/
│   │   └── BaseLayout.astro    # HTML shell, fonts, theme script
│   ├── components/
│   │   ├── Navbar.astro        # Sticky nav + dark/light toggle
│   │   ├── Footer.astro        # Social links + copyright
│   │   ├── Hero.astro          # Landing hero + CTA buttons
│   │   ├── ProjectCard.astro   # Card with image, type, tags
│   │   └── ProjectGrid.astro   # Responsive grid + client-side filter
│   ├── pages/
│   │   ├── index.astro         # Home: hero + featured projects
│   │   ├── about.astro         # About + skills
│   │   ├── contact.astro       # Contact form
│   │   ├── 404.astro           # Not found
│   │   └── projects/
│   │       ├── index.astro     # All projects with filter bar
│   │       └── [slug].astro    # Individual project detail page
│   └── styles/
│       └── global.css          # CSS variables, dark mode, utilities
├── astro.config.mjs
├── package.json
├── tsconfig.json
├── plan.md                     # Architectural decisions + implementation log
├── guide.md                    # Customization instructions for developers
├── deployclick.md              # One-click deployment for non-technical users
└── README.md                   # This file
```

---

## Quick Start

```bash
npm install
npm run dev
```

The site opens at `http://localhost:4321/`. Edits hot-reload instantly.

### Commands

| Command           | Action                               |
| ----------------- | ------------------------------------ |
| `npm install`     | Install dependencies (once)          |
| `npm run dev`     | Start dev server at `localhost:4321` |
| `npm run build`   | Build production site → `dist/`      |
| `npm run preview` | Preview the production build locally |

---

## Customization

**All personal data lives in [`src/siteConfig.ts`](./src/siteConfig.ts).**
Edit that one file to set your name, tagline, bio, skills, social links, and
contact form ID. Projects are Markdown files in `src/content/projects/`.

For a full walkthrough — including how to add projects, images, and a custom
domain — see [`guide.md`](./guide.md).

### Most common edits

| What                  | Where                                                |
| --------------------- | ---------------------------------------------------- |
| Your name and tagline | `src/siteConfig.ts` → `hero`                         |
| Your bio              | `src/siteConfig.ts` → `about.bio`                    |
| Your skills           | `src/siteConfig.ts` → `about.skills`                 |
| Social links          | `src/siteConfig.ts` → `social`                       |
| Add a project         | Create `src/content/projects/your-project.md`        |
| Project screenshots   | Drop into `public/images/`, reference in frontmatter |

---

## Deployment

The site is static — it deploys to any static host for free.

- **Non-technical?** See [`deployclick.md`](./deployclick.md) — drag-and-drop to
  Netlify, or connect a GitHub repo to Vercel/Cloudflare via web UI only.
- **Comfortable with Git?** See [`guide.md`](./guide.md) → "Running and
  Deploying" section for Cloudflare Pages, Vercel, and Netlify setup.

Custom domains are supported on all three hosts (free HTTPS included).

---

## Documentation Map

| File                                 | Audience                     | Purpose                             |
| ------------------------------------ | ---------------------------- | ----------------------------------- |
| [`README.md`](./README.md)           | Everyone                     | Overview (this file)                |
| [`guide.md`](./guide.md)             | Developers / content editors | Detailed customization instructions |
| [`deployclick.md`](./deployclick.md) | Non-technical users          | One-click deployment walkthrough    |

---

## License

This project is yours to use, modify, and deploy freely. No attribution required.
