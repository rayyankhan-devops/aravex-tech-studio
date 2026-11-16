import { MetadataRoute } from 'next';
import { SERVICES_DATA } from '@/data/services';
import { PRODUCTS_DATA } from '@/data/products';
import { COURSES_DATA } from '@/data/training';
import { WORK_DATA } from '@/data/work';

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://aravextechstudio.com';
  const currentDate = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { route: '', priority: 1.0, changeFrequency: 'daily' as const },
    { route: '/products', priority: 0.9, changeFrequency: 'daily' as const },
    { route: '/services', priority: 0.9, changeFrequency: 'weekly' as const },
    { route: '/training', priority: 0.85, changeFrequency: 'weekly' as const },
    { route: '/internships', priority: 0.85, changeFrequency: 'weekly' as const },
    { route: '/work', priority: 0.8, changeFrequency: 'weekly' as const },
    { route: '/about', priority: 0.8, changeFrequency: 'monthly' as const },
    { route: '/contact', priority: 0.8, changeFrequency: 'monthly' as const },
    { route: '/privacy', priority: 0.5, changeFrequency: 'yearly' as const },
    { route: '/terms', priority: 0.5, changeFrequency: 'yearly' as const },
    { route: '/refund', priority: 0.5, changeFrequency: 'yearly' as const },
    { route: '/shipping', priority: 0.5, changeFrequency: 'yearly' as const },
  ].map((item) => ({
    url: `${siteUrl}${item.route}`,
    lastModified: currentDate,
    changeFrequency: item.changeFrequency,
    priority: item.priority,
  }));

  const serviceRoutes: MetadataRoute.Sitemap = SERVICES_DATA.map((service) => ({
    url: `${siteUrl}/services/${service.slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  const productRoutes: MetadataRoute.Sitemap = PRODUCTS_DATA.map((product) => ({
    url: `${siteUrl}/products/${product.slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.85,
  }));

  const trainingRoutes: MetadataRoute.Sitemap = COURSES_DATA.map((course) => ({
    url: `${siteUrl}/training/${course.slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.75,
  }));

  const workRoutes: MetadataRoute.Sitemap = WORK_DATA.map((project) => ({
    url: `${siteUrl}/work/${project.slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [
    ...staticRoutes,
    ...serviceRoutes,
    ...productRoutes,
    ...trainingRoutes,
    ...workRoutes,
  ];
}
