# Shashank H D — Portfolio

A recruiter-focused software engineering portfolio built to present my experience, projects, skills, and approach to learning through a fast, accessible web experience.

Production: [hdshashank.dev](https://hdshashank.dev)

## Features

- Focused home page with experience, skills, featured projects, and contact sections
- Editorial profile page with chapter-based navigation
- Complete projects archive with expandable project details
- Persistent light and dark themes
- Responsive layouts for desktop, tablet, and mobile
- Keyboard navigation, reduced-motion support, and semantic page structure
- Downloadable résumé, contact links, sitemap, and robots metadata

## Stack

- [Next.js 15](https://nextjs.org/) with the App Router
- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS 4](https://tailwindcss.com/) and PostCSS
- [Simple Icons](https://simpleicons.org/) for technology marks
- npm for dependency and script management
- Vercel for deployment

## Content

Content is separated from presentation where it benefits from structured updates:

- `app/content/experience.ts` — roles, dates, summaries, and experience details
- `app/content/projects.ts` — featured projects and the full project archive
- `app/content/profile.ts` — profile chapters and supporting facts
- `app/components/Skills.tsx` — displayed skills and tools
- `app/components/Connect.tsx` — social and contact links
- `public/shashank_hd_resume.pdf` — résumé served by the download actions

The main routes are:

- `/` — portfolio overview
- `/profile` — personal engineering story
- `/projects` — complete project archive

Some experience, profile, and project details intentionally remain marked as placeholder content until verified copy and media are available.

## Development

### Prerequisites

- Node.js 20 or newer
- npm

### Run locally

```bash
git clone https://github.com/hdshashank/portfolio.git
cd portfolio
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Validate a production build

```bash
npm run typecheck
npm run build
npm start
```

Available scripts:

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the local Next.js development server |
| `npm run typecheck` | Check TypeScript without emitting files |
| `npm run build` | Create an optimized production build |
| `npm start` | Run the production build locally |

## Deployment

The site is configured for deployment on Vercel and uses `https://hdshashank.dev` in its metadata, sitemap, and robots configuration.

To deploy:

1. Import the GitHub repository into Vercel.
2. Use the detected Next.js framework settings.
3. Run the production build with `npm run build`.
4. Attach `hdshashank.dev` as the production domain.

Vercel will build and deploy subsequent changes pushed to the configured production branch.
