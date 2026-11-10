# Nandini Jain | Portfolio

Personal portfolio of Nandini Jain, Backend Software Engineer based in Dubai, UAE.

The hero is a switchable scene engine, fully animated, with moving vehicles, ambient lighting, and day/night themes.

Based on the open-source portfolio by [Andrew Baisden](https://github.com/andrewbaisden/andrew-baisden-portfolio).

## Getting started

This repo uses **pnpm**. See `AGENTS.md` for stack, testing, and contribution rules.

```shell
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Updating your details

- `src/lib/site-config.ts`: name, role, tagline, location, email, GitHub username and LinkedIn URL. GitHub and LinkedIn links stay hidden until those two values are filled in.
- `src/app/components/AboutProfileText/AboutProfileText.tsx`: the About cards (profile, experience, education).
- `src/app/components/SocialMediaCarousel/SocialMediaCarousel.tsx`: project cards. Add an `href` to a project to make its card link to a live demo or repository.
- `src/app/components/TechStack/TechStack.tsx`: tech stack.
- `src/app/img/profile-picture.png`: profile photo (currently an initials placeholder, 800×800).

## Environment

Copy `.env.example` to `.env.local`.

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Public URL of the deployed site, used for SEO metadata and the sitemap |
| `RESEND_API_KEY` | Lets the contact form send email through [Resend](https://resend.com) |
| `CONTACT_FROM_EMAIL` / `CONTACT_TO_EMAIL` | Optional sender and recipient overrides for the contact form |
| `GITHUB_TOKEN` | Optional; lists your pinned repositories on the GitHub card |

## Scripts

| Command | What it does |
| --- | --- |
| `pnpm dev` | Next.js dev server |
| `pnpm build` | Production build |
| `pnpm start` | Serve the production build |
| `pnpm lint` | Biome check |
| `pnpm typecheck` | TypeScript `--noEmit` |
| `pnpm test` | Vitest unit / component tests |
| `pnpm test:e2e` | Playwright smokes |
