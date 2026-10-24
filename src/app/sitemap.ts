import { MetadataRoute } from 'next';
import { SERVICES_DATA } from '@/data/services';
import { PRODUCTS_DATA } from '@/data/products';
import { COURSES_DATA } from '@/data/academy';
import { WORK_DATA } from '@/data/work';
import { INSIGHTS_DATA } from '@/data/insights';

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://arevex.tech';
  const currentDate = new Date().toISOString();

  const staticRoutes: MetadataRoute.Sitemap = [
    '',
    '/services',
    '/products',
    '/academy',
    '/work',
    '/about',
    '/contact',
    '/insights',
    '/privacy',
    '/terms',
  ].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: 'weekly',
    priority: route === '' ? 1.0 : 0.8,
  }));

  const serviceRoutes: MetadataRoute.Sitemap = SERVICES_DATA.map((service) => ({
    url: `${siteUrl}/services/${service.slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  const productRoutes: MetadataRoute.Sitemap = PRODUCTS_DATA.map((product) => ({
    url: `${siteUrl}/products/${product.slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  const academyRoutes: MetadataRoute.Sitemap = COURSES_DATA.map((course) => ({
    url: `${siteUrl}/academy/${course.slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  const workRoutes: MetadataRoute.Sitemap = WORK_DATA.map((project) => ({
    url: `${siteUrl}/work/${project.slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  const insightRoutes: MetadataRoute.Sitemap = INSIGHTS_DATA.map((article) => ({
    url: `${siteUrl}/insights/${article.slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  return [
    ...staticRoutes,
    ...serviceRoutes,
    ...productRoutes,
    ...academyRoutes,
    ...workRoutes,
    ...insightRoutes,
  ];
}
