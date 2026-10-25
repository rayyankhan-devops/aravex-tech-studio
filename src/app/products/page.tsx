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
              <Search className="w-4 h-4 text-gray-400 dark:text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search products or features..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-full bg-gray-50 dark:bg-charcoal-850 border border-gray-300 dark:border-graphite/40 text-sm font-sans text-gray-900 dark:text-warmWhite placeholder:text-gray-400 dark:placeholder:text-slate-400 focus:outline-none focus:border-slate-500 shadow-sm"
              />
            </div>

            {/* Platform Filters - Standalone Pills */}
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
              <span className="text-xs font-semibold text-gray-700 dark:text-slate-300 mr-1 uppercase tracking-wider shrink-0">Platform:</span>
              {PLATFORMS.map((p) => {
                const count =
                  p === 'All'
                    ? PRODUCTS_DATA.length
                    : PRODUCTS_DATA.filter((item) => item.platform === p).length;
                const isActive = selectedPlatform === p;
                return (
                  <button
                    key={p}
                    onClick={() => setSelectedPlatform(p)}
                    className={`inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer whitespace-nowrap shadow-sm hover:scale-[1.02] active:scale-[0.98] ${
                      isActive
                        ? 'bg-charcoal-950 text-white dark:bg-white dark:text-charcoal-950 font-bold shadow-md ring-2 ring-charcoal-950/20 dark:ring-white/30'
                        : 'bg-white dark:bg-charcoal-900 text-gray-700 dark:text-slate-300 border border-gray-200 dark:border-graphite/60 hover:border-gray-400 dark:hover:border-slate-400 hover:text-black dark:hover:text-white'
                    }`}
                  >
                    <span>{p}</span>
                    <span
                      className={`inline-flex items-center justify-center px-1.5 py-0.5 rounded-full text-[10px] font-mono font-bold ${
                        isActive
                          ? 'bg-white/20 text-white dark:bg-black/15 dark:text-black'
                          : 'bg-gray-100 dark:bg-charcoal-800 text-gray-600 dark:text-slate-400'
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Category Filter Pills - Standalone Pills */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pt-4 pb-1">
            <span className="text-xs font-semibold text-gray-700 dark:text-slate-300 mr-1 uppercase tracking-wider shrink-0">Category:</span>
            {CATEGORIES.map((c) => {
              const count =
                c === 'All'
                  ? PRODUCTS_DATA.length
                  : PRODUCTS_DATA.filter((item) => item.category === c).length;
              const isActive = selectedCategory === c;
              return (
                <button
                  key={c}
                  onClick={() => setSelectedCategory(c)}
                  className={`inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer whitespace-nowrap shadow-sm hover:scale-[1.02] active:scale-[0.98] ${
                    isActive
                      ? 'bg-charcoal-950 text-white dark:bg-white dark:text-charcoal-950 font-bold shadow-md ring-2 ring-charcoal-950/20 dark:ring-white/30'
                      : 'bg-white dark:bg-charcoal-900 text-gray-700 dark:text-slate-300 border border-gray-200 dark:border-graphite/60 hover:border-gray-400 dark:hover:border-slate-400 hover:text-black dark:hover:text-white'
                  }`}
                >
                  <span>{c}</span>
                  <span
                    className={`inline-flex items-center justify-center px-1.5 py-0.5 rounded-full text-[10px] font-mono font-bold ${
                      isActive
                        ? 'bg-white/20 text-white dark:bg-black/15 dark:text-black'
                        : 'bg-gray-100 dark:bg-charcoal-800 text-gray-600 dark:text-slate-400'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Product Catalog Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Flagship Hardware & Enterprise Software Showcase Banner */}
          <div className="relative rounded-3xl bg-white dark:bg-charcoal-900 border border-gray-200 dark:border-graphite/50 overflow-hidden mb-16 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 sm:p-12">
              <div className="lg:col-span-7 flex flex-col gap-6">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/30 font-bold">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    FLAGSHIP COMMERCIAL ENGINE
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-gray-100 dark:bg-charcoal-850 text-gray-800 dark:text-slate-200 border border-gray-200 dark:border-graphite/40 font-semibold">
                    <Monitor className="w-3.5 h-3.5" />
                    <span>Desktop + Cloud Edge</span>
                  </span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-black text-gray-950 dark:text-white tracking-tight leading-tight">
                  Arevex Retail POS &amp; Enterprise Operations Hub.
                </h2>

                <p className="text-base text-gray-700 dark:text-slate-200 leading-relaxed max-w-xl font-normal">
                  Engineered for extreme transactional velocity, dual-screen cashier displays, ESC/POS thermal printing, and 100% offline-ready operations with automated cloud ledger synchronization.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="flex items-start gap-2 text-sm text-gray-700 dark:text-slate-300">
                    <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                    <span>Sub-second barcode scan &amp; billing</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-gray-700 dark:text-slate-300">
                    <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                    <span>100% Offline SQLite database failover</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-gray-700 dark:text-slate-300">
                    <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                    <span>Integrated thermal ESC/POS printing</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-gray-700 dark:text-slate-300">
                    <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                    <span>Multi-branch inventory ledger sync</span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-4">
                  <button
                    onClick={() => setModalState({ product: PRODUCTS_DATA[0], mode: 'buy' })}
                    className="px-6 py-3 rounded-full bg-charcoal-900 text-white dark:bg-white dark:text-charcoal-950 font-bold text-sm shadow-md hover:bg-black dark:hover:bg-warmWhite transition-all hover:scale-[1.02] cursor-pointer"
                  >
                    Buy Commercial License
                  </button>
                  <button
                    onClick={() => setModalState({ product: PRODUCTS_DATA[0], mode: 'demo' })}
                    className="px-6 py-3 rounded-full border border-gray-300 dark:border-graphite/60 text-sm font-semibold text-gray-800 dark:text-slate-200 hover:bg-gray-100 dark:hover:bg-charcoal-850 transition-colors cursor-pointer"
                  >
                    Schedule Live Demo
                  </button>
                  <Link
                    href="/products/point-of-sale"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-gray-700 dark:text-slate-200 hover:text-black dark:hover:text-white transition-colors ml-1"
                  >
                    <span>Architecture Specs</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5 relative h-72 sm:h-96 rounded-2xl overflow-hidden border border-gray-200 dark:border-graphite/40 shadow-xl group">
                <Image
                  src={BRAND_ASSETS.generated.posTerminal}
                  alt="Arevex Commercial POS & Enterprise Workstation"
                  fill
                  priority
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-white/95">
                  <span className="px-2.5 py-1 rounded-md bg-black/70 backdrop-blur-md border border-white/10 font-medium">
                    AREVEX Enterprise Station
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-emerald-500/80 font-bold text-white shadow-sm">
                    100% Production Ready
                  </span>
                </div>
              </div>
            </div>
          </div>

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

                    <p className="text-xs uppercase tracking-wider text-emerald-600 dark:text-emerald-400 font-bold mb-3">
                      Target: {product.category}
                    </p>

                    <p className="text-sm text-gray-700 dark:text-slate-200 leading-relaxed mb-5 font-normal">
                      {product.description}
                    </p>

                    {/* Features preview */}
                    <div className="flex flex-col gap-2 pt-2 border-t border-gray-100 dark:border-graphite/30 mb-6">
                      {product.features.slice(0, 3).map((f) => (
                        <div key={f} className="flex items-start gap-2 text-sm text-gray-700 dark:text-slate-300">
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
                        className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 hover:underline focus:outline-none cursor-pointer"
                      >
                        Buy License
                      </button>
                      <span className="text-gray-300 dark:text-graphite">|</span>
                      <button
                        onClick={() => setModalState({ product, mode: 'demo' })}
                        className="text-sm font-semibold text-gray-800 dark:text-slate-200 hover:underline focus:outline-none cursor-pointer"
                      >
                        Demo
                      </button>
                    </div>
                    <Link
                      href={`/products/${product.slug}`}
                      className="inline-flex items-center gap-1 text-sm font-semibold text-gray-700 dark:text-slate-200 hover:text-black dark:hover:text-white"
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
