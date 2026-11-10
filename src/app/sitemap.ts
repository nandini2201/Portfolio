import type { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/site-config';

const BASE_URL = siteConfig.url;

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${BASE_URL}/`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
  ];
}
