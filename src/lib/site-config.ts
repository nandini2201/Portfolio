/**
 * Single source of truth for personal details shown across the site.
 * Update the values here and every section picks them up.
 */
export const siteConfig = {
  name: 'Nandini Jain',
  firstName: 'Nandini',
  role: 'Backend Software Engineer',
  shortRole: 'Backend Engineer',
  tagline:
    'I design and build scalable distributed systems, REST APIs and microservices with Python.',
  location: 'Dubai, UAE',
  email: 'nandiinii.jainn@gmail.com',

  /**
   * Production URL of this site (no trailing slash). Used for canonical
   * links, the sitemap and social previews. Override per environment with
   * NEXT_PUBLIC_SITE_URL.
   */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000',

  /**
   * TODO: add your profiles. While a value is empty, the matching links and
   * cards stay hidden so the site never shows a broken link.
   */
  githubUsername: 'nandini2201',
  linkedinUrl: '',
} as const;

export const githubUrl = siteConfig.githubUsername
  ? `https://github.com/${siteConfig.githubUsername}`
  : '';
