import { MetadataRoute } from 'next';
import { projectsData } from '@/lib/projectsData';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://guibus.dev';
  const locales = ['en', 'pt'];
  
  const routes = ['', '#methodology', '#services', '#projects', '#contact'];
  
  const staticPages = locales.flatMap((locale) =>
    routes.map((route) => ({
      url: `${baseUrl}/${locale}${route}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: route === '' ? 1 : 0.8,
    }))
  );

  const projectPages = locales.flatMap((locale) =>
    projectsData.map((project) => ({
      url: `${baseUrl}/${locale}/project/${project.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }))
  );

  return [...staticPages, ...projectPages];
}
