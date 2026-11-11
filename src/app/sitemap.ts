import { MetadataRoute } from 'next';
import { SERVICES_DATA } from '@/data/services';
import { PRODUCTS_DATA } from '@/data/products';
import { COURSES_DATA } from '@/data/training';
import { WORK_DATA } from '@/data/work';

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://aravextechstudio.com';
  const currentDate = new Date().toISOString();

  const staticRoutes: MetadataRoute.Sitemap = [
    '',
    '/services',
    '/products',
    '/internships',
    '/training',
    '/work',
    '/about',
    '/contact',
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

  const trainingRoutes: MetadataRoute.Sitemap = COURSES_DATA.map((course) => ({
    url: `${siteUrl}/training/${course.slug}`,
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

  return [
    ...staticRoutes,
    ...serviceRoutes,
    ...productRoutes,
    ...trainingRoutes,
    ...workRoutes,
  ];
}
