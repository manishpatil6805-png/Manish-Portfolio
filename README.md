# Karma Patil — Portfolio

A React + Vite personal portfolio site.

## Editing your content (no code knowledge needed)

Everything you'd ever want to change — your name, bio, education, skills,
project descriptions, links, email, phone, socials — lives in **one file**:

```
src/data/content.js
```

Open that file, change the text between the quotes, save, and the site
updates automatically. You never need to open any other file to update
your info.

Things you'll probably want to fill in before publishing:

- `profile.socials` — swap in your real GitHub / LinkedIn URLs
- `profile.resumeUrl` — add a link once you upload your resume PDF (put the
  PDF in the `public/` folder and reference it as `/YourResume.pdf`)
- `projects[].links.code` / `links.live` — add your GitHub repo and
  live-demo links for VAULT and Smart Campus Helpdesk

## Running it locally

```bash
npm install
npm run dev
```

Then open the URL it prints (usually `http://localhost:5173`).

## Building for production

```bash
npm run build
```

This creates a `dist/` folder you can deploy anywhere static (Vercel,
Netlify, GitHub Pages).

## Deploying to Vercel (same host as the reference site)

1. Push this folder to a GitHub repo.
2. Go to vercel.com → New Project → import the repo.
3. Framework preset: Vite. Build command `npm run build`, output directory
   `dist`. Deploy.

## Project structure

```
src/
  data/content.js     <- EDIT THIS for all text/links/skills/projects
  components/         <- page sections (design/layout, rarely needs edits)
  index.css           <- design system (colors, type, spacing)
  App.jsx             <- assembles the page
```
