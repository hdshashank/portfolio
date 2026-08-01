# Shashank H D — Portfolio

A dark, minimal, recruiter-focused portfolio built with Next.js and TypeScript.

## Run locally

Install Node.js 20 or newer, then run:

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Content updates

The page content currently lives in `app/page.tsx`. Update the `projects` and `skills` arrays near the top of that file, and replace the Merck placeholder when work details are ready.

The résumé download expects `public/resume.pdf`. Copy the current résumé there before running or deploying the site.

## Production check

```bash
npm run build
npm run typecheck
npm start
```

The project is ready for a later GitHub + Vercel deployment and already uses `https://hdshashank.dev` in its metadata, sitemap, and robots configuration.
