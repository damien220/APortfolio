# Portfolio — Customization Guide

This guide shows you exactly how to personalize the portfolio with your own data.
You don't need to touch any of the framework code — all personal data is centralized
in **`src/siteConfig.ts`** and **`src/content/projects/*.md`**.

## Quick Reference — Where to edit what

| What you want to change | File to edit |
|---|---|
| Name, tagline, subtitle on home page | `src/siteConfig.ts` → `hero` |
| Bio on about page | `src/siteConfig.ts` → `about.bio` |
| Skills list | `src/siteConfig.ts` → `about.skills` |
| Contact form intro + Formspree ID | `src/siteConfig.ts` → `contact` |
| GitHub / LinkedIn / Twitter links | `src/siteConfig.ts` → `social` |
| Site title (shown in tab + footer + navbar) | `src/siteConfig.ts` → `site.title` |
| Site URL (for SEO / sitemaps) | `src/siteConfig.ts` → `site.url` + `astro.config.mjs` → `site` |
| Nav menu items | `src/siteConfig.ts` → `nav` |
| Add / edit a project | Create or edit a `.md` file in `src/content/projects/` |
| Project images / screenshots | `public/images/` + reference in project frontmatter |

After editing, run `npm run dev` — changes hot-reload instantly.

---

## Step 1 — Update Personal Info

Open `src/siteConfig.ts`. Replace each placeholder:

```ts
hero: {
  name: 'Your Name',                         // → 'Jane Doe'
  tagline: 'Building things that make...',   // → your one-line tagline
  subtitle: 'Developer passionate about...', // → your sub-tagline (optional)
},
```

### Update your bio (About page)

```ts
about: {
  bio: `Hello! I'm a developer who enjoys...`,  // ← replace with your bio
  ...
}
```

The bio uses a template string (backticks) — line breaks are preserved, so you can write multiple paragraphs.

### Update your skills

```ts
skills: [
  { title: 'Languages', items: ['Python', 'Go', 'Rust'] },
  { title: 'Frameworks', items: ['FastAPI', 'React'] },
  { title: 'Tools', items: ['Docker', 'PostgreSQL', 'AWS'] },
],
```

You can add or remove categories freely — the grid adjusts automatically.

---

## Step 2 — Update Social Links

Edit the `social` array in `src/siteConfig.ts`:

```ts
social: [
  { label: 'GitHub',   url: 'https://github.com/janedoe',       icon: 'github' },
  { label: 'LinkedIn', url: 'https://linkedin.com/in/janedoe',  icon: 'linkedin' },
  { label: 'Twitter',  url: 'https://twitter.com/janedoe',      icon: 'twitter' },
  { label: 'Email',    url: 'mailto:jane@example.com',          icon: 'email' },
],
```

Available `icon` values: `github`, `linkedin`, `twitter`, `email`, `website`.

Remove entries you don't use — the footer renders whatever is in the array.

---

## Step 3 — Set Up the Contact Form

The contact form sends messages via [Formspree](https://formspree.io/) (free tier: 50 messages/month, no backend required).

1. Sign up at https://formspree.io
2. Create a new form and copy your form ID (looks like `xabcdefg`)
3. Open `src/siteConfig.ts` and update:

```ts
contact: {
  intro: 'Have a question or want to work together? Send me a message.',
  formspreeId: 'xabcdefg',   // ← your real Formspree ID
},
```

Done — the form will now deliver to your email.

---

## Step 4 — Add a New Project

Each project is a single Markdown file in `src/content/projects/`. The filename (without `.md`) becomes the URL slug — e.g. `my-cool-app.md` → `/projects/my-cool-app`.

### Minimal example

Create `src/content/projects/my-cool-app.md`:

```markdown
---
title: "My Cool App"
description: "A one-line description of what it does (shown on project cards)."
type: "Web App"
tags: ["React", "TypeScript", "PostgreSQL"]
featured: true
liveUrl: "https://my-cool-app.com"
repoUrl: "https://github.com/username/my-cool-app"
date: "2026-04"
---

## Overview

Longer description of your project goes here. What problem does it solve?
Who's it for?

## Key Features

- Feature one
- Feature two
- Feature three

## Technical Decisions

Why did you pick this stack? What was challenging? What would you do differently?
```

### Frontmatter field reference

| Field | Required | Type | Notes |
|---|---|---|---|
| `title` | Yes | string | Shown on card + detail page |
| `description` | Yes | string | One-line summary (card blurb) |
| `type` | Yes | enum | Must be one of: `Web App`, `CLI Tool`, `Library`, `API`, `Mobile App`, `Data/ML` |
| `tags` | Yes | string[] | Tech tags shown on card |
| `featured` | No | boolean | If `true`, appears on home page (defaults to `false`) |
| `image` | No | string | Path like `/images/my-app.png` (see next section) |
| `liveUrl` | No | URL | Shown as "Live Demo" button |
| `repoUrl` | No | URL | Shown as "Source Code" button |
| `date` | Yes | string | `"YYYY-MM"` — used to sort projects |

### Adding a new project type

If you need a type not in the enum (e.g. `Game`, `Plugin`), add it in:

```ts
// src/content.config.ts
type: z.enum(['Web App', 'CLI Tool', 'Library', 'API', 'Mobile App', 'Data/ML', 'Game']),
```

Then restart the dev server.

---

## Step 5 — Add Project Images / Screenshots

1. Create a folder: `public/images/`
2. Drop your screenshot in: `public/images/my-app.png`
3. Reference it in the project frontmatter:

```markdown
---
title: "My Cool App"
image: "/images/my-app.png"
---
```

**Tips:**
- Aspect ratio of **16:9** looks best on project cards
- Recommended size: **1200×675** or larger
- Use `.webp` or `.png` — avoid uncompressed images
- Files in `public/` are served from the site root, so `/images/my-app.png` is the final URL

**No image?** Cards without an `image` field show a colored placeholder with the project's first letter — this is intentional, the site looks fine without images.

---

## Step 6 — Update Site Metadata

Two places need updating when you buy a domain:

1. `src/siteConfig.ts`:

```ts
site: {
  url: 'https://janedoe.com',       // ← your domain
  title: 'Jane Doe',                 // ← shows in tab + navbar logo
  description: 'Full-stack developer building delightful products.',
},
```

2. `astro.config.mjs`:

```js
export default defineConfig({
  site: 'https://janedoe.com',   // ← same domain (used by Astro for sitemap/SEO)
  ...
});
```

---

## Step 7 — Custom Navigation

To add or remove menu items, edit `src/siteConfig.ts`:

```ts
nav: [
  { href: '/',         label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/blog',     label: 'Blog' },    // ← new link
  { href: '/about',    label: 'About' },
  { href: '/contact',  label: 'Contact' },
],
```

If you add a link to a new page, create the corresponding page in `src/pages/` — e.g. `src/pages/blog.astro`.

---

## Running and Deploying

| Command | Purpose |
|---|---|
| `npm run dev` | Start local dev server (http://localhost:4321) |
| `npm run build` | Generate production static site → `dist/` |
| `npm run preview` | Preview the production build locally |

> **Non-technical user?** See **[`deployclick.md`](./deployclick.md)** for a one-click deploy walkthrough that avoids GitHub entirely.

### Option A — Deploy to Cloudflare Pages (free, recommended)

1. Push the repo to GitHub (`git init && git remote add origin ... && git push`)
2. Go to https://dash.cloudflare.com → Workers & Pages → "Create" → Pages → "Connect to Git"
3. Select your repo and use these settings:
   - **Framework preset**: Astro
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Node version**: 22 (add an env var `NODE_VERSION=22` if default fails)
4. Click "Save and Deploy" — deploys in ~1 min, auto-deploys on every git push

### Option B — Deploy to Vercel (free, easiest)

1. Push the repo to GitHub
2. Go to https://vercel.com/new → "Import Git Repository" → select your repo
3. Vercel auto-detects Astro — just click "Deploy"
4. Live in ~30 seconds at `your-project.vercel.app`

### Option C — Deploy to Netlify (free, drag-and-drop supported)

**Git-based:**
1. Push to GitHub
2. Go to https://app.netlify.com → "Add new site" → "Import existing project"
3. Pick GitHub, select repo, click Deploy

**Drag-and-drop (no GitHub needed):**
1. Run `npm run build` locally
2. Go to https://app.netlify.com/drop
3. Drag the generated `dist/` folder onto the page — site live in ~30 seconds

### Custom domain

After deployment, all three platforms let you add a custom domain:

1. Buy a domain from **Namecheap**, **Porkbun**, or **Cloudflare Registrar** (~$10–12/year for `.com`)
2. In your host's dashboard, find "Custom domain" or "Domains" and add it
3. The dashboard will show you DNS records to add at your registrar — typically:
   - An `A` record pointing to the host's IP, OR
   - A `CNAME` record pointing to something like `cname.vercel-dns.com`
4. Wait ~5–30 minutes for DNS propagation — HTTPS is issued automatically by all three hosts

### What to update before deploying

- [ ] `src/siteConfig.ts` → `site.url` set to your real domain
- [ ] `astro.config.mjs` → `site` set to your real domain
- [ ] All placeholder content in `siteConfig.ts` replaced with real data
- [ ] At least 3 real projects added, sample `.md` files deleted
- [ ] Formspree form ID set (if using contact form)

---

## Quick Checklist for Launch

Before going live, run through this:

- [ ] Replaced `Your Name` in `siteConfig.ts`
- [ ] Wrote your own `tagline`, `subtitle`, and `bio`
- [ ] Updated `skills` to reflect your actual stack
- [ ] Replaced social URLs (GitHub, LinkedIn, etc.)
- [ ] Set up Formspree and added real `formspreeId`
- [ ] Deleted the three `sample-*.md` files in `src/content/projects/`
- [ ] Added at least 3 real projects, with 1–2 marked `featured: true`
- [ ] Added screenshots for featured projects
- [ ] Updated `site.url` in both `siteConfig.ts` and `astro.config.mjs`
- [ ] Ran `npm run build` to confirm no errors
- [ ] Deployed to Cloudflare/Vercel and connected custom domain

---

## Troubleshooting

**Project not showing up?**
Check that the `.md` file is inside `src/content/projects/` and that the frontmatter is valid YAML (indentation matters, strings with special chars need quotes).

**"type" error in project frontmatter?**
The `type` field must match exactly one of the allowed values. If you need a new type, update the enum in `src/content.config.ts`.

**Dev server not hot-reloading?**
Stop it (`Ctrl+C`) and restart with `npm run dev`. Astro sometimes needs a restart after schema changes.

**Formspree not delivering?**
Double-check the form ID in `siteConfig.ts` matches the one in your Formspree dashboard. Your first submission requires email confirmation from Formspree.
