'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  Search,
  Monitor,
  Smartphone,
  Globe,
  Layers,
  ArrowUpRight,
  Check,
} from 'lucide-react';
import { SectionHeading } from '@/components/common/SectionHeading';
import { Badge } from '@/components/common/Badge';
import { Card } from '@/components/common/Card';
import { ProductDemoModal } from '@/components/forms/ProductDemoModal';
import { PRODUCTS_DATA } from '@/data/products';
import { ProductItem } from '@/types';
import { BRAND_ASSETS } from '@/lib/brand';
import { FinalCTA } from '@/components/home/FinalCTA';

const PLATFORMS = ['All', 'Desktop', 'Web', 'Mobile', 'Cross-Platform'];
const CATEGORIES = ['All', 'Retail', 'Enterprise', 'Education', 'Healthcare', 'Operations'];

export default function ProductsPage() {
  const [selectedPlatform, setSelectedPlatform] = useState('All');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [modalState, setModalState] = useState<{ product: ProductItem; mode: 'buy' | 'demo' } | null>(null);

  const getProductImage = (slug: string) => {
    switch (slug) {
      case 'point-of-sale':
        return BRAND_ASSETS.generated.posTerminal;
      case 'inventory-mis':
        return BRAND_ASSETS.generated.inventoryWarehouse;
      case 'clinic-appointment':
      case 'clinic-management':
        return BRAND_ASSETS.generated.clinicEmr;
      case 'school-management':
        return BRAND_ASSETS.generated.productSchool;
      case 'learning-management':
        return BRAND_ASSETS.generated.productLms;
      case 'attendance-management':
        return BRAND_ASSETS.generated.productAttendance;
      case 'restaurant-management':
        return BRAND_ASSETS.generated.productRestaurant;
      case 'library-management':
        return BRAND_ASSETS.generated.productLibrary;
      case 'office-management':
        return BRAND_ASSETS.generated.productOffice;
      case 'billing-invoicing':
        return BRAND_ASSETS.generated.productBilling;
      case 'mobile-apps':
        return BRAND_ASSETS.generated.productsMobile;
      default:
        return BRAND_ASSETS.generated.productsBusiness;
    }
  };

  const filteredProducts = PRODUCTS_DATA.filter((product) => {
    const matchesPlatform = selectedPlatform === 'All' || product.platform === selectedPlatform;
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesSearch =
      searchQuery === '' ||
      product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.features.some((f) => f.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesPlatform && matchesCategory && matchesSearch;
  });

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
    <main className="min-h-screen bg-[#F7F7F5] dark:bg-charcoal-950 text-charcoal-900 dark:text-warmWhite transition-colors duration-300">
      {/* Header */}
      <section className="pt-24 pb-16 border-b border-gray-200 dark:border-graphite/40 bg-white dark:bg-charcoal-900/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="SOFTWARE PRODUCTS"
            title="Commercial Software Ecosystem."
            description="Proven retail POS software, multi-warehouse inventory systems, school administration, and biometric attendance suites engineered for resilience."
          />

          {/* Search & Filter Controls */}
          <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between pt-4">
            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 text-gray-400 dark:text-slate-muted absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search products or features..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-full bg-gray-50 dark:bg-charcoal-850 border border-gray-300 dark:border-graphite/40 text-xs font-mono text-gray-900 dark:text-warmWhite placeholder:text-gray-400 dark:placeholder:text-slate-500 focus:outline-none focus:border-slate-500"
              />
            </div>

            {/* Platform Filters */}
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="text-xs font-mono text-gray-500 dark:text-slate-muted mr-1 font-bold">Platform:</span>
              {PLATFORMS.map((p) => (
                <button
                  key={p}
                  onClick={() => setSelectedPlatform(p)}
                  className={`px-3 py-1 rounded-full text-xs font-mono border transition-colors cursor-pointer ${
                    selectedPlatform === p
                      ? 'bg-charcoal-950 text-white dark:bg-warmWhite dark:text-charcoal-900 border-transparent font-bold shadow-sm'
                      : 'bg-white dark:bg-charcoal-850/80 text-gray-700 dark:text-slate-300 border-gray-300 dark:border-graphite/40 hover:border-slate-500'
                  }`}
                >
                  {p}
                </button>
              ))}
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 pt-4">
            <span className="text-xs font-mono text-gray-500 dark:text-slate-muted mr-1 font-bold">Category:</span>
            {CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => setSelectedCategory(c)}
                className={`px-3 py-1 rounded-full text-xs font-mono border transition-colors cursor-pointer ${
                  selectedCategory === c
                    ? 'bg-slate-800 text-white dark:bg-slate-muted dark:text-white border-transparent font-bold shadow-sm'
                    : 'bg-gray-100 dark:bg-charcoal-850/50 text-gray-600 dark:text-slate-400 border-gray-200 dark:border-graphite/30 hover:border-slate-400'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Product Catalog Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-20 text-gray-500 dark:text-slate-muted font-mono text-sm">
              No products found matching your active filter criteria.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <Card
                  key={product.id}
                  className="flex flex-col justify-between bg-white dark:bg-charcoal-850/80 border-gray-200 dark:border-graphite/40 hover:border-slate-500 dark:hover:border-slate-muted/60 shadow-sm hover:shadow-xl overflow-hidden p-6"
                >
                  <div>
                    {/* Visual Preview */}
                    <div className="relative h-44 -mx-6 -mt-6 mb-5 overflow-hidden border-b border-gray-200 dark:border-graphite/40 group">
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
                          Production Build
                        </span>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-gray-950 dark:text-white mb-2 leading-snug">
                      {product.title}
                    </h3>

                    <p className="text-xs font-mono text-slate-600 dark:text-slate-muted uppercase mb-4 font-semibold">
                      Target: {product.category}
                    </p>

                    <p className="text-xs text-gray-600 dark:text-slate-300 leading-relaxed mb-6">
                      {product.description}
                    </p>

                    {/* Features preview */}
                    <div className="flex flex-col gap-2 pt-2 border-t border-gray-100 dark:border-graphite/30 mb-6">
                      {product.features.slice(0, 3).map((f) => (
                        <div key={f} className="flex items-start gap-2 text-xs text-gray-600 dark:text-slate-400">
                          <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-graphite/40">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => setModalState({ product, mode: 'buy' })}
                        className="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-bold hover:underline focus:outline-none cursor-pointer"
                      >
                        Buy License
                      </button>
                      <span className="text-gray-300 dark:text-graphite">|</span>
                      <button
                        onClick={() => setModalState({ product, mode: 'demo' })}
                        className="text-xs font-mono text-gray-700 dark:text-slate-300 font-medium hover:underline focus:outline-none cursor-pointer"
                      >
                        Demo
                      </button>
                    </div>
                    <Link
                      href={`/products/${product.slug}`}
                      className="inline-flex items-center gap-1 text-xs font-mono text-gray-600 dark:text-slate-muted hover:text-black dark:hover:text-white font-semibold"
                    >
                      <span>Specifications</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Product Purchase & Demo Modal */}
      <ProductDemoModal
        product={modalState?.product || null}
        defaultMode={modalState?.mode || 'buy'}
        isOpen={Boolean(modalState)}
        onClose={() => setModalState(null)}
      />

      <FinalCTA />
    </main>
  );
}
