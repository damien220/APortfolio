# One-Click Deployment Guide

**For users with no coding experience.**

This guide shows you how to put your portfolio live on the internet with minimal
technical steps. You'll have a public website at a free URL like
`your-portfolio.netlify.app` in about 5 minutes.

---

## Before You Start

You need exactly one thing on your computer:
- **Node.js** installed — download from https://nodejs.org (pick the "LTS" version, run the installer, click Next a few times, done)

That's it. No Git, no GitHub, no terminal expertise required.

---

## Method 1 — Netlify Drop (easiest, truly drag-and-drop)

**Best for:** First-time deploys, no GitHub account, one-time publishing.

### Step 1 — Build your site

1. Open a terminal/command prompt in your portfolio folder:
   - **Windows**: right-click inside the folder → "Open in Terminal"
   - **Mac**: right-click the folder → Services → "New Terminal at Folder"
   - **Linux / VS Code**: open the integrated terminal (`` Ctrl+` ``)

2. Run these two commands (copy-paste each, press Enter):

   ```bash
   npm install
   npm run build
   ```

   The first command installs all the tools the site needs (only required once).
   The second command creates a `dist/` folder — that's your finished website.

3. When it's done, you'll see a message like `✓ 8 page(s) built`. You're ready.

### Step 2 — Drag and drop

1. Go to **https://app.netlify.com/drop**
2. Open your portfolio folder in a file browser
3. **Drag the `dist` folder** onto the big drop zone on the Netlify page

That's it. Netlify will:
- Upload your files (takes ~10 seconds)
- Give you a live URL like `https://amazing-panda-123abc.netlify.app`
- Show the site in your browser immediately

### Step 3 — (Optional) Claim the site

Netlify gives you the URL instantly without an account, but the site will be
deleted after ~1 hour unless you claim it. To keep it permanently:

1. Click the **"Claim this site"** button on the Netlify page
2. Sign up (free) — you can use email or a Google account
3. Your site is now permanently hosted at its URL, free forever

### Step 4 — Updating your site later

When you add new projects or change personal info:
1. Run `npm run build` again
2. Go to your site's Netlify dashboard
3. Find the "Deploys" tab → drag the updated `dist/` folder onto it
4. Done — the new version is live

---

## Method 2 — One-Click Deploy via Vercel (best if you want auto-updates)

**Best for:** Users who want their site to auto-update whenever they edit files
on GitHub's website.

This method takes one extra step (uploading your project to GitHub), but after
that you can edit everything from GitHub's website — no terminal needed ever
again.

### Step 1 — Upload your project to GitHub

1. Sign up for GitHub at https://github.com/signup (free)
2. Once logged in, click the **"+"** in the top-right → **"New repository"**
3. Name it `my-portfolio` (or anything), set it to **Public**, click **Create**
4. On the next page, click **"uploading an existing file"**
5. Drag your entire portfolio folder into the upload zone
   - **Exclude**: `node_modules/`, `dist/`, `.astro/` (these are auto-generated)
6. Scroll down → click **"Commit changes"**

Your code is now on GitHub.

### Step 2 — Deploy with Vercel

1. Go to **https://vercel.com/signup**
2. Click **"Continue with GitHub"** — authorize Vercel to see your repos
3. On the dashboard, click **"Add New..."** → **"Project"**
4. Find `my-portfolio` in the list → click **"Import"**
5. Vercel auto-detects Astro — scroll down and click **"Deploy"**

In ~30 seconds, you'll see a preview screenshot and a live URL like
`https://my-portfolio.vercel.app`.

### Step 3 — Editing your site later (no terminal!)

1. Go to your repo on GitHub
2. Click any file (e.g. `src/siteConfig.ts`)
3. Click the **pencil icon** (top-right of the file) to edit
4. Make changes → scroll down → click **"Commit changes"**
5. Vercel automatically rebuilds and redeploys within ~30 seconds

Same works for adding a new project: click the `src/content/projects/` folder →
**"Add file"** → **"Create new file"** → name it `my-new-project.md` → paste
content (see [`guide.md`](./guide.md) for the format).

---

## Method 3 — One-Click Deploy via Cloudflare Pages

**Best for:** Users who want the fastest performance globally (Cloudflare has
the biggest network).

Steps are the same shape as Method 2:

1. Upload project to GitHub (see Method 2, Step 1)
2. Go to **https://dash.cloudflare.com** → sign up (free)
3. Left sidebar → **Workers & Pages** → **"Create"** → **Pages** tab → **"Connect to Git"**
4. Pick `my-portfolio` from your GitHub repos
5. Build settings:
   - **Framework preset**: Astro (auto-detected)
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
6. Click **"Save and Deploy"**

Live URL: `https://my-portfolio.pages.dev` — auto-updates on every GitHub edit.

---

## Comparison — Which should you pick?

| | Netlify Drop | Vercel | Cloudflare Pages |
|---|---|---|---|
| **GitHub account needed?** | No | Yes | Yes |
| **Terminal commands needed?** | `npm install` + `npm run build` | Only once (to upload) | Only once (to upload) |
| **Auto-updates when editing?** | No (manual re-drop) | Yes | Yes |
| **Free custom domain support?** | Yes | Yes | Yes |
| **Free HTTPS?** | Yes (automatic) | Yes (automatic) | Yes (automatic) |
| **Global speed** | Good | Excellent | Best |
| **Recommended for** | First deploy, just want to see it live | Most users | Speed-sensitive projects |

**Our recommendation:** Start with **Netlify Drop** to see your site live in 2
minutes. Once you're happy with it, upgrade to **Vercel** or **Cloudflare Pages**
for auto-updates.

---

## Adding a Custom Domain (all three platforms)

Your free URL (`yourname.netlify.app`, etc.) works forever. But if you want a
custom domain like `yourname.com`:

### Step 1 — Buy a domain

Any of these registrars work well:
- **Porkbun** — https://porkbun.com (cheap, great UI, ~$10/yr for `.com`)
- **Namecheap** — https://namecheap.com (popular, ~$12/yr)
- **Cloudflare Registrar** — https://dash.cloudflare.com/?to=/:account/registrar (at-cost pricing, requires Cloudflare account)

### Step 2 — Connect it

In your host's dashboard (Netlify / Vercel / Cloudflare):
1. Look for **"Domain settings"** or **"Custom domains"**
2. Click **"Add a custom domain"** → type `yourname.com` → submit
3. The dashboard will show 1–2 DNS records you need to add

At your domain registrar:
1. Find the DNS settings page
2. Add the records exactly as shown
3. Save

### Step 3 — Wait

DNS propagation takes 5–30 minutes (sometimes up to 24 hours, rarely). Once
it's live, your host automatically issues a free HTTPS certificate — no
configuration needed.

---

## Troubleshooting

**"npm: command not found"**
Node.js isn't installed. Download from https://nodejs.org and restart your terminal.

**"Can't find the `dist` folder"**
Run `npm run build` first. The folder appears after a successful build.

**"Drag-and-drop doesn't work on Netlify"**
Make sure you're dragging the `dist` folder itself, not its contents. On some
browsers, dragging individual files fails — drag the whole folder.

**"GitHub won't let me upload — files too large"**
You're probably uploading `node_modules/`. Delete that folder and try again —
it'll regenerate when you run `npm install`.

**"My site shows `Page Not Found` when clicking a link"**
This is a browser cache issue. Hard-refresh with `Ctrl+Shift+R` (Windows/Linux)
or `Cmd+Shift+R` (Mac).

**"Contact form doesn't send emails"**
You need to set up Formspree first. See `guide.md` → "Step 3 — Set Up the Contact Form".

---

## Summary — Absolute Minimum Steps

The fastest path from "I have the code" to "my site is live":

```bash
npm install
npm run build
```

Then:
1. Open https://app.netlify.com/drop
2. Drag the `dist` folder
3. **Done.**

Three steps, ~2 minutes, $0.
