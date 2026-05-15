# Deployment Guide

## Recommended: GitHub + Vercel

1. Create a GitHub repository.
2. Push this project to the repository.
3. Import the repository in Vercel.
4. Add the environment variables from `.env.example`.
5. Deploy from the `main` branch.
6. Set `NEXT_PUBLIC_SITE_URL` to the final production URL and redeploy once.

## Environment Variables

```bash
NEXT_PUBLIC_SITE_URL=https://your-production-domain.com
NEXT_PUBLIC_GITHUB_URL=https://github.com/your-username
NEXT_PUBLIC_LINKEDIN_URL=https://www.linkedin.com/in/saigirish-vadlathala-b22434141/
RESEND_API_KEY=your_resend_api_key
CONTACT_TO_EMAIL=saigirishvadlathala22@gmail.com
CONTACT_FROM_EMAIL=Portfolio <verified-sender@your-domain.com>
```

## CI/CD

The workflow in `.github/workflows/ci.yml` runs:

- `npm ci`
- `npm run typecheck`
- `npm run lint`
- `npm run build`

Vercel can then auto-deploy successful pushes to `main`.

## Contact Form

The contact form works without a paid backend. For actual email delivery, create a Resend API key and use a verified sending address.

Without `RESEND_API_KEY`, submissions validate successfully in local/dev mode but are only logged by the API route.
