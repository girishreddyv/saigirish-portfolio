# Sai Girish Reddy Vadlathala - AI Engineer Portfolio

Production-ready portfolio for AI Engineer, MLOps Engineer, AI Platform Engineer, and Backend AI Systems Engineer roles.

## Stack

- Next.js 16.2.6 with App Router
- React 19
- TypeScript
- Tailwind CSS 4
- Framer Motion
- Secure contact API route with honeypot, timing, validation, rate limiting, and Resend email integration
- SEO metadata, Open Graph image, sitemap, robots.txt, and JSON-LD
- GitHub Actions CI for typecheck, lint, and production build

## Local Setup

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Environment Variables

Copy `.env.example` to `.env.local`.

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_GITHUB_URL=https://github.com/your-username
NEXT_PUBLIC_LINKEDIN_URL=https://www.linkedin.com/in/saigirish-vadlathala-b22434141/
RESEND_API_KEY=your_resend_key
CONTACT_TO_EMAIL=saigirishvadlathala22@gmail.com
CONTACT_FROM_EMAIL=Portfolio <verified-sender@your-domain.com>
```

If `RESEND_API_KEY` is not set, the contact form validates and accepts messages locally but does not send email.

## Production Build

```bash
npm run typecheck
npm run lint
npm run build
```

## Deploy To Vercel

1. Push this repo to GitHub.
2. Import the repo in Vercel.
3. Add the environment variables from `.env.example`.
4. Deploy from the `main` branch.
5. Set `NEXT_PUBLIC_SITE_URL` to the production URL.

## Architecture Overview

- `app/layout.tsx`: metadata, fonts, Open Graph, Twitter card, and root shell
- `app/page.tsx`: portfolio entry
- `components/Portfolio.tsx`: interactive one-page portfolio UI
- `data/profile.ts`: resume-derived structured content
- `app/api/contact/route.ts`: secure contact form handler
- `app/sitemap.ts` and `app/robots.ts`: SEO crawl configuration
- `public/resume/SaiGirish-Resume.pdf`: downloadable resume

## Maintenance

- Update resume content in `data/profile.ts`.
- Replace `public/resume/SaiGirish-Resume.pdf` after resume edits.
- Add `NEXT_PUBLIC_GITHUB_URL` when the GitHub profile or selected project repos are ready.
- Add project screenshots to `public/` and extend the project cards if visual evidence is available.
