'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  Check,
  Monitor,
  Smartphone,
  Globe,
  Layers,
  Store,
  Boxes,
  GraduationCap,
  BookOpen,
  Library,
  UserCheck,
  Building2,
  Receipt,
  Stethoscope,
  UtensilsCrossed,
  Briefcase,
  Sparkles,
  Zap,
} from 'lucide-react';
import { SectionHeading } from '@/components/common/SectionHeading';
import { Badge } from '@/components/common/Badge';
import { MagneticButton } from '@/components/common/MagneticButton';
import { ProductDemoModal } from '@/components/forms/ProductDemoModal';
import { PRODUCTS_DATA } from '@/data/products';
import { BRAND_ASSETS } from '@/lib/brand';
import { ProductItem } from '@/types';

const PRODUCT_ICONS: Record<string, React.ElementType> = {
  Store,
  Boxes,
  GraduationCap,
  BookOpen,
  Library,
  UserCheck,
  Building2,
  Receipt,
  Stethoscope,
  UtensilsCrossed,
  Smartphone,
  Briefcase,
  Monitor,
};

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
    <section id="products" className="relative py-12 sm:py-16 bg-white dark:bg-charcoal-900 text-charcoal-900 dark:text-warmWhite overflow-hidden border-t border-b border-gray-200 dark:border-graphite/40 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-4 sm:gap-6">
          <div>
            <div className="flex items-center gap-2.5 mb-2.5">
              <div className="flex items-center gap-1 shrink-0" aria-hidden="true">
                <span className="w-1.5 h-3.5 rounded-[2px] bg-[#D45361]" />
                <span className="w-1 h-3.5 rounded-[2px] bg-[#EA7047]" />
                <span className="w-1 h-3.5 rounded-[2px] bg-[#ECEB54]" />
                <span className="w-1 h-3.5 rounded-[2px] bg-[#5CB554]" />
                <span className="w-1 h-3.5 rounded-[2px] bg-[#4D66EC]" />
              </div>
              <span className="font-sans text-xs uppercase tracking-wider text-slate-800 dark:text-slate-200 font-bold">
                PROPRIETARY COMMERCIAL SOFTWARE
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-gray-950 dark:text-white leading-[1.1]">
              Commercial Software Products.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-400 dark:from-emerald-400 dark:via-teal-300 dark:to-cyan-400">
                Ready to Deploy.
              </span>
            </h2>
            <p className="mt-2.5 text-sm sm:text-base text-gray-700 dark:text-slate-300 max-w-2xl leading-relaxed font-normal">
              Ready-to-deploy business software for retail checkout, multi-warehouse inventory, and school operations.
            </p>
          </div>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-sans text-emerald-600 dark:text-emerald-400 hover:underline transition-colors duration-200 shrink-0 pb-1 font-bold"
          >
            <span>View Full Product Catalog ({PRODUCTS_DATA.length} Systems)</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Featured Showcase Hero Card */}
        <div className="relative rounded-3xl bg-gray-50 dark:bg-charcoal-950 border border-gray-200 dark:border-graphite/50 overflow-hidden mb-6 sm:mb-8 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center p-6 sm:p-8">
            <div className="lg:col-span-7 flex flex-col gap-6">
              <div className="flex flex-wrap items-center gap-3">
                <Badge status={featured[0].status} />
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-sans font-medium bg-white dark:bg-charcoal-850 text-gray-800 dark:text-slate-300 border border-gray-200 dark:border-graphite/40 shadow-sm">
                  {getPlatformIcon(featured[0].platform)}
                  <span>{featured[0].platform}</span>
                </span>
                <span className="font-sans text-xs text-gray-500 dark:text-slate-muted uppercase tracking-wider font-bold">
                  {featured[0].category} Category
                </span>
              </div>

              <h3 className="text-3xl sm:text-4xl font-black text-gray-950 dark:text-white tracking-tight leading-tight">
                {featured[0].title}
              </h3>

              <p className="text-base text-gray-800 dark:text-slate-200 leading-relaxed max-w-xl font-normal">
                {featured[0].description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {featured[0].features.slice(0, 4).map((f) => (
                  <div key={f} className="flex items-start gap-2 text-sm text-gray-700 dark:text-slate-200">
                    <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-4">
                <button
                  onClick={() => setSelectedProductForModal({ product: featured[0], mode: 'buy' })}
                  className="h-10 px-5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm inline-flex items-center justify-center gap-2 shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer border border-transparent whitespace-nowrap shrink-0"
                >
                  <Zap className="w-4 h-4 shrink-0" />
                  <span className="whitespace-nowrap">Buy License</span>
                </button>
                <button
                  onClick={() => setSelectedProductForModal({ product: featured[0], mode: 'demo' })}
                  className="h-10 px-5 rounded-full bg-white dark:bg-charcoal-800 border border-gray-300 dark:border-graphite/60 text-xs sm:text-sm font-bold text-gray-800 dark:text-slate-200 hover:bg-gray-100 dark:hover:bg-charcoal-700 inline-flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer whitespace-nowrap shrink-0"
                >
                  <Monitor className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span className="whitespace-nowrap">Live Demo</span>
                </button>
                <Link
                  href={`/products/${featured[0].slug}`}
                  className="h-10 inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-gray-700 dark:text-slate-200 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors ml-1"
                >
                  <span>Technical Specs</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 relative h-64 sm:h-80 lg:h-96 rounded-2xl overflow-hidden border border-gray-200 dark:border-graphite/40 shadow-xl group">
              <Image
                src={BRAND_ASSETS.generated.posTerminal}
                alt="Aravex POS Hardware & Cashier Terminal"
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
          {featured.slice(1).map((product) => {
            const ProductIcon = (product.iconName && PRODUCT_ICONS[product.iconName]) || Monitor;

            return (
              <div
                key={product.id}
                className="p-6 rounded-2xl bg-gray-50 dark:bg-charcoal-950/60 border border-gray-200 dark:border-graphite/40 hover:border-slate-500 dark:hover:border-slate-muted/50 transition-all duration-300 flex flex-col justify-between shadow-sm overflow-hidden"
              >
                <div>
                  {/* Visual Thumbnail */}
                  <div className="relative h-44 -mx-6 -mt-6 mb-5 overflow-hidden border-b border-gray-200 dark:border-graphite/40 group">
                    <Image
                      src={product.image || getProductImage(product.slug)}
                      alt={product.title}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    <div className="absolute top-3 left-3">
                      <Badge status={product.status} />
                    </div>
                    <div className="absolute top-3 right-3">
                      <span className="p-1.5 rounded-full bg-black/65 backdrop-blur-md text-emerald-400 border border-emerald-500/30 shadow flex items-center justify-center">
                        <ProductIcon className="w-3.5 h-3.5" />
                      </span>
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

                  <p className="text-xs sm:text-sm text-gray-700 dark:text-slate-300 leading-relaxed mb-4">
                    {product.tagline}
                  </p>

                  <div className="flex flex-col gap-1.5 pt-2 border-t border-gray-200 dark:border-graphite/30 mb-5">
                    {product.features.slice(0, 2).map((feat) => (
                      <div key={feat} className="flex items-start gap-2 text-xs text-gray-700 dark:text-slate-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0 mt-1.5" />
                        <span className="line-clamp-1">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-200 dark:border-graphite/40 flex items-center justify-between gap-2">
                  <div className="inline-flex items-center gap-1.5 shrink-0">
                    <button
                      onClick={() => setSelectedProductForModal({ product, mode: 'buy' })}
                      className="h-8 px-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs inline-flex items-center justify-center gap-1.5 whitespace-nowrap shrink-0 transition-all cursor-pointer shadow-xs border border-transparent hover:scale-[1.02] active:scale-[0.98]"
                    >
                      <Zap className="w-3.5 h-3.5 shrink-0" />
                      <span className="whitespace-nowrap">Buy License</span>
                    </button>
                    <button
                      onClick={() => setSelectedProductForModal({ product, mode: 'demo' })}
                      className="h-8 px-3 rounded-full bg-white dark:bg-charcoal-800 border border-gray-300 dark:border-graphite/60 text-xs font-bold text-gray-800 dark:text-slate-200 hover:bg-gray-100 dark:hover:bg-charcoal-700 inline-flex items-center justify-center gap-1.5 whitespace-nowrap shrink-0 transition-all cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
                    >
                      <Monitor className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                      <span className="whitespace-nowrap">Live Demo</span>
                    </button>
                  </div>
                  <Link
                    href={`/products/${product.slug}`}
                    className="h-8 inline-flex items-center gap-1 text-xs font-semibold text-gray-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors shrink-0 whitespace-nowrap"
                  >
                    <span>Specs</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
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
