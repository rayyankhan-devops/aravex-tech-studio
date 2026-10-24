import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowLeft, ArrowUpRight, Check, ChevronRight, Server, Database, Cpu, Layers } from 'lucide-react';
import { PRODUCTS_DATA } from '@/data/products';
import { Badge } from '@/components/common/Badge';
import { Card } from '@/components/common/Card';
import { MagneticButton } from '@/components/common/MagneticButton';
import { FinalCTA } from '@/components/home/FinalCTA';

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
    title: `${product.title} — Software Products`,
    description: product.description,
    openGraph: {
      title: `${product.title} | AREVEX TECH STUDIO`,
      description: product.description,
    },
  };
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = PRODUCTS_DATA.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#F7F7F5] dark:bg-charcoal-950 text-charcoal-900 dark:text-warmWhite transition-colors duration-300">
      {/* Breadcrumb Navigation */}
      <div className="pt-24 pb-6 border-b border-gray-200 dark:border-graphite/40 bg-white dark:bg-charcoal-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 text-xs font-mono text-gray-500 dark:text-slate-muted">
          <Link href="/" className="hover:text-black dark:hover:text-white transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link href="/products" className="hover:text-black dark:hover:text-white transition-colors">Products</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-gray-950 dark:text-white font-bold">{product.title}</span>
        </div>
      </div>

      {/* Hero Header */}
      <section className="py-16 sm:py-24 border-b border-gray-200 dark:border-graphite/40 bg-white dark:bg-charcoal-900/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <Badge status={product.status} />
              <span className="px-3 py-1 rounded-full text-xs font-mono bg-gray-100 dark:bg-charcoal-800 text-gray-800 dark:text-slate-300 border border-gray-200 dark:border-graphite/40 font-semibold">
                {product.platform}
              </span>
              <span className="font-mono text-xs text-gray-500 dark:text-slate-muted uppercase font-bold">
                {product.category}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-gray-950 dark:text-white mb-6">
              {product.title}
            </h1>

            <p className="text-xl sm:text-2xl text-gray-700 dark:text-slate-300 font-light leading-relaxed mb-8">
              {product.tagline}
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <MagneticButton href="/contact" size="md" variant="primary">
                <span>Request Commercial License / Demo</span>
                <ArrowUpRight className="w-4 h-4 ml-1" />
              </MagneticButton>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 text-sm font-mono text-gray-600 dark:text-slate-muted hover:text-black dark:hover:text-white transition-colors font-bold"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>All Products</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications & Architecture Grid */}
      <section className="py-20 border-b border-gray-200 dark:border-graphite/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column: Full Product Description & Key Features */}
            <div className="lg:col-span-7 flex flex-col gap-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-950 dark:text-white mb-4">Product Architecture & Scope</h2>
                <p className="text-base text-gray-700 dark:text-slate-300 leading-relaxed">
                  {product.description}
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-950 dark:text-white mb-4">Target Audience</h3>
                <p className="text-sm text-gray-700 dark:text-slate-300 bg-white dark:bg-charcoal-900/60 p-4 rounded-xl border border-gray-200 dark:border-graphite/40 shadow-sm">
                  {product.targetAudience}
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-950 dark:text-white mb-4">Complete Feature Set</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {product.features.map((feat) => (
                    <div
                      key={feat}
                      className="p-3.5 rounded-xl bg-white dark:bg-charcoal-900/40 border border-gray-200 dark:border-graphite/30 flex items-start gap-2.5 text-xs sm:text-sm text-gray-700 dark:text-slate-300 shadow-sm"
                    >
                      <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Technical System Specs Card */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <Card>
                <h3 className="text-lg font-bold text-gray-950 dark:text-white mb-6 pb-3 border-b border-gray-200 dark:border-graphite/40">
                  Technical Specifications
                </h3>

                <div className="flex flex-col gap-5 text-xs font-mono">
                  {product.specs.database && (
                    <div className="flex items-start gap-3">
                      <Database className="w-4 h-4 text-gray-500 dark:text-slate-muted shrink-0 mt-0.5" />
                      <div>
                        <span className="text-gray-500 dark:text-slate-muted block font-bold">Database Layer</span>
                        <span className="text-gray-900 dark:text-slate-200 font-semibold">{product.specs.database}</span>
                      </div>
                    </div>
                  )}

                  {product.specs.stack && (
                    <div className="flex items-start gap-3">
                      <Cpu className="w-4 h-4 text-gray-500 dark:text-slate-muted shrink-0 mt-0.5" />
                      <div>
                        <span className="text-gray-500 dark:text-slate-muted block font-bold">Core Stack</span>
                        <span className="text-gray-900 dark:text-slate-200 font-semibold">{product.specs.stack}</span>
                      </div>
                    </div>
                  )}

                  <div className="flex items-start gap-3">
                    <Layers className="w-4 h-4 text-gray-500 dark:text-slate-muted shrink-0 mt-0.5" />
                    <div>
                      <span className="text-gray-500 dark:text-slate-muted block font-bold">Offline Functionality</span>
                      <span className="text-gray-900 dark:text-slate-200 font-semibold">
                        {product.specs.offlineSupport ? '100% Offline Capable' : 'Cloud Synchronized'}
                      </span>
                    </div>
                  </div>

                  {product.specs.deployment && (
                    <div className="flex items-start gap-3">
                      <Server className="w-4 h-4 text-gray-500 dark:text-slate-muted shrink-0 mt-0.5" />
                      <div>
                        <span className="text-gray-500 dark:text-slate-muted block font-bold">Deployment Environment</span>
                        <span className="text-gray-900 dark:text-slate-200 font-semibold">{product.specs.deployment}</span>
                      </div>
                    </div>
                  )}
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200 dark:border-graphite/40">
                  <MagneticButton href="/contact" size="sm" variant="primary" className="w-full text-center">
                    <span>Schedule Deployment Consultation</span>
                    <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
                  </MagneticButton>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <FinalCTA />
    </main>
  );
}
