# Gus Adi — Personal Developer Portfolio

Single-page personal developer portfolio built with **Astro 5**, **TypeScript**, **Tailwind CSS v4**, and **Lucide Astro** following a low-contrast Terminal User Interface (TUI) design system (`DESIGN.md`).

---

## 1. Tech Stack

- **Framework:** Astro v5 (Static-first)
- **Language:** TypeScript (strict)
- **Styling:** Tailwind CSS v4 (`@tailwindcss/vite`) + CSS Custom Properties
- **Icons:** `lucide-astro`
- **Deployment Target:** Vercel (Static Output)

---

## 2. Commands

| Command | Action |
|---|---|
| `npm install` | Install project dependencies |
| `npm run dev` | Start local development server at `http://localhost:4321` |
| `npm run check` | Run `astro check` for TypeScript and Astro diagnostics |
| `npm run build` | Build production static site to `./dist/` |
| `npm run preview` | Preview production build locally |

---

## 3. Updating Portfolio Content

All portfolio content and translations are separated from UI components inside `src/data/`:

- **`src/data/profile.ts`**:
  - `profile`: Name, role, headline, bio, `githubUsername` (`GusAdiHub`), `email` (`gusplet123@gmail.com`), `linkedinUrl`, and `cvUrl`.
  - **Adding CV PDF**: Place your PDF inside `public/` (e.g. `public/cv_gus_adi.pdf`) and set `cvUrl.id` / `cvUrl.en` to `'/cv_gus_adi.pdf'`. The download buttons in Hero and Contact will automatically activate.
  - **Adding LinkedIn**: Set `linkedinUrl` to your verified public profile URL.
  - `projects`: Update `repoUrl`, `demoUrl`, `image` (place screenshots in `public/projects/`), or add new verified projects.
  - `techCategories`: Update technology items and `[core]` / `[exploring]` levels.
  - `experiences`: Add verified education, work, or organization timeline items.
- **`src/data/i18n.ts`**:
  - Centralized bilingual (`id` and `en`) UI dictionary.

---

## 4. GitHub Integration & Caching (`src/components/GitHubActivity.astro`)

- **Public Profile Endpoint**: `https://api.github.com/users/GusAdiHub`
  - Fields used: `public_repos`, `followers`, `public_gists`.
  - Unauthenticated rate limit: 60 requests/hour per IP.
- **Public Contributions Endpoint**: `https://github-contributions-api.jogruber.de/v4/GusAdiHub?y=last`
  - Fields used: `total.lastYear`, `contributions[]{ date, count, level }`.
- **Caching & Fallback**:
  - Responses are cached in `localStorage` (`gh_stats_v1_GusAdiHub`, `gh_contrib_v1_GusAdiHub`) with a **1-hour TTL** (`3,600,000 ms`).
  - Requests enforce an **8-second timeout** (`AbortController`).
  - No secrets or tokens are shipped to the client.
  - If rate-limited or offline, no fake data is generated; an explicit terminal warning and direct link to `@GusAdiHub` on GitHub are displayed.

---

## 5. Deployment (Vercel)

1. Push the repository to GitHub.
2. Import the project in Vercel.
3. Framework Preset: **Astro** (`npm run build`, output directory `dist`).
4. Deploy. No environment variables are required for the static MVP.
