import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://aravextechstudio.com';

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
      {
        userAgent: [
          'GPTBot',
          'ChatGPT-User',
          'PerplexityBot',
          'Google-Extended',
          'ClaudeBot',
          'Applebot-Extended',
          'Amazonbot',
          'Bytespider',
          'CCBot',
        ],
        allow: ['/', '/services/', '/products/', '/training/', '/about/', '/work/'],
        disallow: ['/api/'],
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
