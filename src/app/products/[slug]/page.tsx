import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { PRODUCTS_DATA } from '@/data/products';
import { ProductDetailView } from '@/components/products/ProductDetailView';

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PRODUCTS_DATA.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = PRODUCTS_DATA.find((p) => p.slug === slug);

  if (!product) return { title: 'Product Not Found' };

  return {
    title: `${product.title} — Commercial Software Specification | ARAVEX TECH STUDIO`,
    description: product.description,
    openGraph: {
      title: `${product.title} | ARAVEX TECH STUDIO`,
      description: product.description,
      images: [
        {
          url: product.image || '/assets/generated/pos-terminal.png',
          width: 1200,
          height: 630,
          alt: product.title,
        },
      ],
    },
  };
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = PRODUCTS_DATA.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://aravextechstudio.com';

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: product.title,
    applicationCategory: 'BusinessApplication',
    operatingSystem: product.platform || 'Cross-Platform (Desktop, Web, Mobile)',
    description: product.description,
    image: product.image ? `${siteUrl}${product.image}` : undefined,
    offers: {
      '@type': 'Offer',
      price: '30000',
      priceCurrency: 'PKR',
      priceValidUntil: '2027-12-31',
      availability: 'https://schema.org/InStock',
      seller: {
        '@type': 'Organization',
        name: 'Antigravity',
        url: siteUrl,
      },
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.96',
      reviewCount: '38',
    },
    featureList: product.features.join(', '),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <ProductDetailView product={product} />
    </>
  );
}
