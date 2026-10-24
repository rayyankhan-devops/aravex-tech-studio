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
  const [selectedProductForModal, setSelectedProductForModal] = useState<{
    product: ProductItem;
    mode: 'buy' | 'demo';
  } | null>(null);

  const featured = PRODUCTS_DATA.filter((p) => p.featured).slice(0, 6);

  const getProductImage = (slug: string) => {
    switch (slug) {
      case 'point-of-sale':
        return BRAND_ASSETS.generated.posTerminal;
      case 'inventory-mis':
        return BRAND_ASSETS.generated.inventoryWarehouse;
      case 'clinic-appointment':
      case 'clinic-management':
        return BRAND_ASSETS.generated.clinicEmr;
      case 'mobile-apps':
        return BRAND_ASSETS.generated.productsMobile;
      default:
        return BRAND_ASSETS.generated.productsBusiness;
    }
  };

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

              <div className="flex flex-wrap items-center gap-3 pt-4">
                <MagneticButton
                  onClick={() => setSelectedProductForModal({ product: featured[0], mode: 'buy' })}
                  variant="primary"
                  size="md"
                >
                  <span>Buy Commercial License</span>
                </MagneticButton>
                <button
                  onClick={() => setSelectedProductForModal({ product: featured[0], mode: 'demo' })}
                  className="px-4 py-2.5 rounded-full border border-gray-300 dark:border-graphite/60 text-xs font-mono font-bold hover:bg-gray-100 dark:hover:bg-charcoal-850 transition-colors"
                >
                  Schedule Demo
                </button>
                <Link
                  href={`/products/${featured[0].slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-gray-600 dark:text-slate-muted hover:text-black dark:hover:text-white transition-colors font-bold ml-1"
                >
                  <span>Technical Specs</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 relative h-64 sm:h-80 lg:h-96 rounded-2xl overflow-hidden border border-gray-200 dark:border-graphite/40 shadow-xl group">
              <Image
                src={BRAND_ASSETS.generated.posTerminal}
                alt="Arevex POS Hardware & Cashier Terminal"
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[11px] font-mono text-white/90">
                <span className="px-2.5 py-1 rounded-md bg-black/70 backdrop-blur-md border border-white/10">
                  Dual Screen Touch POS + Thermal ESC/POS
                </span>
                <span className="px-2 py-1 rounded-md bg-emerald-500/80 font-bold text-white">
                  Live Hardware Ready
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Secondary Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.slice(1).map((product) => (
            <div
              key={product.id}
              className="p-6 rounded-2xl bg-gray-50 dark:bg-charcoal-950/60 border border-gray-200 dark:border-graphite/40 hover:border-slate-500 dark:hover:border-slate-muted/50 transition-all duration-300 flex flex-col justify-between shadow-sm overflow-hidden"
            >
              <div>
                {/* Visual Thumbnail */}
                <div className="relative h-40 -mx-6 -mt-6 mb-5 overflow-hidden border-b border-gray-200 dark:border-graphite/40 group">
                  <Image
                    src={getProductImage(product.slug)}
                    alt={product.title}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <div className="absolute top-3 left-3">
                    <Badge status={product.status} />
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] font-mono text-white/90">
                    <span className="flex items-center gap-1 font-semibold">
                      {getPlatformIcon(product.platform)}
                      <span>{product.platform}</span>
                    </span>
                    <span className="px-2 py-0.5 rounded bg-emerald-500/80 font-bold text-white text-[10px]">
                      Verified Codebase
                    </span>
                  </div>
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
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setSelectedProductForModal({ product, mode: 'buy' })}
                    className="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-bold hover:underline focus:outline-none"
                  >
                    Buy License
                  </button>
                  <span className="text-gray-300 dark:text-graphite">|</span>
                  <button
                    onClick={() => setSelectedProductForModal({ product, mode: 'demo' })}
                    className="text-xs font-mono text-gray-700 dark:text-slate-300 font-medium hover:underline focus:outline-none"
                  >
                    Demo
                  </button>
                </div>
                <Link
                  href={`/products/${product.slug}`}
                  className="inline-flex items-center gap-1 text-xs font-mono text-gray-600 dark:text-slate-muted hover:text-black dark:hover:text-white font-semibold"
                >
                  <span>Specs</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Product Purchase & Demo Modal */}
      <ProductDemoModal
        product={selectedProductForModal?.product || null}
        defaultMode={selectedProductForModal?.mode || 'buy'}
        isOpen={Boolean(selectedProductForModal)}
        onClose={() => setSelectedProductForModal(null)}
      />
    </section>
  );
}
