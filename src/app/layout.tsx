import type { Metadata } from 'next';
import './globals.css';
import { siteConfig } from '@/lib/site-config';
import ThemeContextProvider from './context/ThemeContext';

const pageTitle = `${siteConfig.name} | ${siteConfig.role}`;
const pageDescription =
  'Backend software engineer based in Dubai, building scalable distributed systems, REST APIs and microservices with Python, FastAPI, PostgreSQL, Redis and Docker.';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: '/',
  },
  title: {
    default: pageTitle,
    template: `%s | ${siteConfig.name}`,
  },
  description: `${pageDescription} Explore my experience and projects.`,
  keywords: [
    siteConfig.name,
    'Backend Software Engineer',
    'Backend Engineer Dubai',
    'Python Developer',
    'FastAPI Developer',
    'Python',
    'FastAPI',
    'Flask',
    'Django',
    'PostgreSQL',
    'Redis',
    'Microservices',
    'Distributed Systems',
    'REST APIs',
  ],
  authors: [
    {
      name: siteConfig.name,
      url: siteConfig.url,
    },
  ],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: pageTitle,
    description: pageDescription,
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                var savedTheme = localStorage.getItem('theme');
                document.documentElement.dataset.theme =
                  savedTheme === 'dark' ? 'dark' : 'light';
              } catch (_) {
                document.documentElement.dataset.theme = 'light';
              }
              try {
                var savedScene = localStorage.getItem('portfolio-hero-scene');
                var allowedScenes = {
                  london: 1,
                  mountain: 1,
                  beach: 1,
                  space: 1,
                };
                document.documentElement.dataset.heroScene =
                  savedScene && allowedScenes[savedScene]
                    ? savedScene
                    : 'london';
              } catch (_) {
                document.documentElement.dataset.heroScene = 'london';
              }
              try {
                var savedMotion = localStorage.getItem('portfolio-hero-motion');
                var reduceMotion = window.matchMedia(
                  '(prefers-reduced-motion: reduce)'
                ).matches;
                if (savedMotion === 'on' || savedMotion === 'off') {
                  document.documentElement.dataset.heroMotion = savedMotion;
                } else {
                  document.documentElement.dataset.heroMotion = reduceMotion
                    ? 'off'
                    : 'on';
                }
              } catch (_) {
                document.documentElement.dataset.heroMotion = 'on';
              }
            `,
          }}
        />
      </head>
      <body suppressHydrationWarning>
        <ThemeContextProvider>{children}</ThemeContextProvider>
      </body>
    </html>
  );
}
