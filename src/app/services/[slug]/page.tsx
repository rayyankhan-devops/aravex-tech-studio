import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { SERVICES_DATA } from '@/data/services';
import { ServiceDetailView } from '@/components/services/ServiceDetailView';

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return SERVICES_DATA.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES_DATA.find((s) => s.slug === slug);

  if (!service) return { title: 'Service Not Found' };

  return {
    title: `${service.title} — Services | ARAVEX TECH STUDIO`,
    description: service.shortDescription,
    openGraph: {
      title: `${service.title} | ARAVEX TECH STUDIO`,
      description: service.shortDescription,
    },
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = SERVICES_DATA.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  // Find 3 complementary services: prefer same category first, then others
  const relatedServices = SERVICES_DATA
    .filter((s) => s.slug !== slug)
    .sort((a, b) => {
      if (a.category === service.category && b.category !== service.category) return -1;
      if (b.category === service.category && a.category !== service.category) return 1;
      return 0;
    })
    .slice(0, 3);

  return (
    <main className="min-h-screen bg-[#F7F7F5] dark:bg-charcoal-950 text-charcoal-900 dark:text-warmWhite transition-colors duration-300">
      <ServiceDetailView service={service} relatedServices={relatedServices} />
    </main>
  );
}
