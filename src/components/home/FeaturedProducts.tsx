'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight, Check, Monitor, Smartphone, Globe, Layers } from 'lucide-react';
import { SectionHeading } from '@/components/common/SectionHeading';
import { Badge } from '@/components/common/Badge';
import { MagneticButton } from '@/components/common/MagneticButton';
import { ProductDemoModal } from '@/components/forms/ProductDemoModal';
import { PRODUCTS_DATA } from '@/data/products';
import { BRAND_ASSETS } from '@/lib/brand';
import { ProductItem } from '@/types';

export function FeaturedProducts() {
  const [selectedProductForDemo, setSelectedProductForDemo] = useState<ProductItem | null>(null);

  const featured = PRODUCTS_DATA.filter((p) => p.featured).slice(0, 6);

  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case 'Desktop':
        return <Monitor className="w-3.5 h-3.5" />;
      case 'Mobile':
        return <Smartphone className="w-3.5 h-3.5" />;
      case 'Web':
        return <Globe className="w-3.5 h-3.5" />;
      default:
        return <Layers className="w-3.5 h-3.5" />;
    }
  };

  return (
    <section id="products" className="relative py-24 sm:py-32 bg-white dark:bg-charcoal-900 text-charcoal-900 dark:text-warmWhite overflow-hidden border-t border-b border-gray-200 dark:border-graphite/40 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <SectionHeading
            eyebrow="04 / SOFTWARE ECOSYSTEM"
            title="Commercial Software Products."
            description="Purpose-built operational platforms designed for extreme transaction throughput, local hardware synchronization, and multi-branch intelligence."
            className="mb-0"
          />
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-sm font-mono text-gray-600 dark:text-slate-muted hover:text-black dark:hover:text-white transition-colors duration-200 shrink-0 pb-2 font-bold"
          >
            <span>View Full Product Catalog</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Featured Showcase Hero Card */}
        <div className="relative rounded-3xl bg-gray-50 dark:bg-charcoal-950 border border-gray-200 dark:border-graphite/50 overflow-hidden mb-12 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 sm:p-12">
            <div className="lg:col-span-7 flex flex-col gap-6">
              <div className="flex flex-wrap items-center gap-3">
                <Badge status={featured[0].status} />
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-white dark:bg-charcoal-850 text-gray-800 dark:text-slate-300 border border-gray-200 dark:border-graphite/40 shadow-sm">
                  {getPlatformIcon(featured[0].platform)}
                  <span>{featured[0].platform}</span>
                </span>
                <span className="font-mono text-xs text-gray-500 dark:text-slate-muted uppercase tracking-wider font-semibold">
                  {featured[0].category} Category
                </span>
              </div>

              <h3 className="text-3xl sm:text-4xl font-black text-gray-950 dark:text-white tracking-tight leading-tight">
                {featured[0].title}
              </h3>

              <p className="text-base text-gray-700 dark:text-slate-300 leading-relaxed max-w-xl">
                {featured[0].description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {featured[0].features.slice(0, 4).map((f) => (
                  <div key={f} className="flex items-start gap-2 text-xs text-gray-600 dark:text-slate-400">
                    <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-4">
                <MagneticButton
                  onClick={() => setSelectedProductForDemo(featured[0])}
                  variant="primary"
                  size="md"
                >
                  <span>Request Live Demo</span>
                </MagneticButton>
                <Link
                  href={`/products/${featured[0].slug}`}
                  className="inline-flex items-center gap-1.5 text-sm font-mono text-gray-600 dark:text-slate-muted hover:text-black dark:hover:text-white transition-colors font-bold"
                >
                  <span>Technical Specifications</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 relative h-64 sm:h-80 lg:h-96 rounded-2xl overflow-hidden border border-gray-200 dark:border-graphite/40 shadow-md">
              <Image
                src={BRAND_ASSETS.generated.productsBusiness}
                alt="Arevex Software Interface"
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>
          </div>
        </div>

        {/* Secondary Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.slice(1).map((product) => (
            <div
              key={product.id}
              className="p-6 rounded-2xl bg-gray-50 dark:bg-charcoal-950/60 border border-gray-200 dark:border-graphite/40 hover:border-slate-500 dark:hover:border-slate-muted/50 transition-all duration-300 flex flex-col justify-between shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <Badge status={product.status} />
                  <span className="inline-flex items-center gap-1 text-xs font-mono text-gray-500 dark:text-slate-muted font-semibold">
                    {getPlatformIcon(product.platform)}
                    <span>{product.platform}</span>
                  </span>
                </div>

                <h4 className="text-xl font-bold text-gray-950 dark:text-white mb-2 leading-snug">
                  {product.title}
                </h4>

                <p className="text-xs text-gray-600 dark:text-slate-400 leading-relaxed mb-6">
                  {product.tagline}
                </p>

                <div className="flex flex-col gap-2 pt-2 border-t border-gray-200 dark:border-graphite/30 mb-6">
                  {product.features.slice(0, 3).map((feat) => (
                    <div key={feat} className="flex items-start gap-2 text-xs text-gray-600 dark:text-slate-400">
                      <span className="w-1 h-1 rounded-full bg-slate-400 dark:bg-slate-muted shrink-0 mt-1.5" />
                      <span className="line-clamp-1">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-graphite/40">
                <button
                  onClick={() => setSelectedProductForDemo(product)}
                  className="text-xs font-mono text-gray-900 dark:text-warmWhite font-bold hover:underline focus:outline-none"
                >
                  Schedule Demo
                </button>
                <Link
                  href={`/products/${product.slug}`}
                  className="inline-flex items-center gap-1 text-xs font-mono text-gray-600 dark:text-slate-muted hover:text-black dark:hover:text-white font-semibold"
                >
                  <span>Overview</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Demo Request Modal */}
      <ProductDemoModal
        product={selectedProductForDemo}
        isOpen={!!selectedProductForDemo}
        onClose={() => setSelectedProductForDemo(null)}
      />
    </section>
  );
}
