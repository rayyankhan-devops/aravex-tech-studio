'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Search,
  Monitor,
  Smartphone,
  Globe,
  Layers,
  ArrowUpRight,
  Check,
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
  CheckCircle2,
  ChevronRight,
  Zap,
} from 'lucide-react';
import { Badge } from '@/components/common/Badge';
import { Card } from '@/components/common/Card';
import { ProductDemoModal } from '@/components/forms/ProductDemoModal';
import { PRODUCTS_DATA } from '@/data/products';
import { ProductItem } from '@/types';
import { BRAND_ASSETS } from '@/lib/brand';
import { FinalCTA } from '@/components/home/FinalCTA';

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

const CATEGORIES = ['All', 'Retail', 'Enterprise', 'Education', 'Operations', 'Healthcare'];

export default function ProductsPage() {
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
      default:
        return BRAND_ASSETS.generated.productsBusiness;
    }
  };

  const filteredProducts = PRODUCTS_DATA.filter((product) => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesSearch =
      searchQuery === '' ||
      product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-[#F7F7F5] dark:bg-charcoal-950 text-charcoal-900 dark:text-warmWhite transition-colors duration-300 relative overflow-hidden">
      {/* Theodore Accent Ribbon */}
      <div className="h-1.5 w-full bg-gradient-to-r from-emerald-500 via-teal-400 via-cyan-400 to-amber-400" />

      {/* Blueprint Architectural Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:36px_36px] pointer-events-none" />

      {/* Clean Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="border-b border-gray-200 dark:border-graphite/40 bg-white/70 dark:bg-charcoal-900/60 backdrop-blur-md py-3 px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-xs font-mono">
          <div className="flex items-center gap-2 text-gray-500 dark:text-slate-400">
            <Link href="/" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            <span className="font-semibold text-gray-900 dark:text-white">Products</span>
          </div>

          <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-semibold">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>{PRODUCTS_DATA.length} Commercial Platforms</span>
          </div>
        </div>
      </nav>

      {/* Clean, Spacious Hero Section */}
      <section className="pt-12 pb-10 sm:pt-16 sm:pb-14 border-b border-gray-200 dark:border-graphite/40 bg-white dark:bg-charcoal-900/40 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex items-center gap-2.5 mb-3">
            <div className="flex items-center gap-1 shrink-0" aria-hidden="true">
              <span className="w-1.5 h-3.5 rounded-[2px] bg-[#D45361]" />
              <span className="w-1 h-3.5 rounded-[2px] bg-[#EA7047]" />
              <span className="w-1 h-3.5 rounded-[2px] bg-[#ECEB54]" />
              <span className="w-1 h-3.5 rounded-[2px] bg-[#5CB554]" />
              <span className="w-1 h-3.5 rounded-[2px] bg-[#4D66EC]" />
            </div>
            <span className="font-mono text-xs uppercase tracking-wider text-slate-700 dark:text-slate-300 font-bold">
              COMMERCIAL SOFTWARE ECOSYSTEM
            </span>
          </div>

          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-gray-950 dark:text-white uppercase leading-[1.05]">
              Software Products.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-400 dark:from-emerald-400 dark:via-teal-300 dark:to-cyan-400">
                Ready to Deploy.
              </span>
            </h1>

            <p className="mt-3 text-base sm:text-lg text-gray-600 dark:text-slate-300 leading-relaxed font-normal">
              Production-tested business software with offline durability, fast hardware integration, and complete data ownership.
            </p>
          </div>

          {/* Minimal Trust Strip */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 mt-5 pt-4 border-t border-gray-200 dark:border-graphite/40 text-xs sm:text-sm text-gray-600 dark:text-slate-300 font-medium">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>Offline Ready</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>Thermal Printer &amp; Barcode Support</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>24h Remote Setup SLA</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>PayFast &amp; Bank Verified</span>
            </div>
          </div>

          {/* Streamlined Filter & Search Row */}
          <div className="mt-8 flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
            {/* Search */}
            <div className="relative w-full md:w-80 shrink-0">
              <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search software systems..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-full bg-gray-50 dark:bg-charcoal-850 border border-gray-300 dark:border-graphite/50 text-sm text-gray-900 dark:text-white placeholder:text-gray-400 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
              />
            </div>

            {/* Category Pills */}
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
              {CATEGORIES.map((c) => {
                const count =
                  c === 'All'
                    ? PRODUCTS_DATA.length
                    : PRODUCTS_DATA.filter((p) => p.category === c).length;
                const isActive = selectedCategory === c;
                return (
                  <button
                    key={c}
                    onClick={() => setSelectedCategory(c)}
                    className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                      isActive
                        ? 'bg-charcoal-950 text-white dark:bg-white dark:text-charcoal-950 shadow-sm font-bold'
                        : 'bg-white dark:bg-charcoal-900 text-gray-600 dark:text-slate-300 border border-gray-200 dark:border-graphite/60 hover:border-gray-400 hover:text-black dark:hover:text-white'
                    }`}
                  >
                    <span>{c}</span>
                    <span className="ml-1.5 opacity-60 font-mono text-[11px]">({count})</span>
                  </button>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      {/* Spacious, Clean Product Grid */}
      <section className="py-12 sm:py-16 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {filteredProducts.length === 0 ? (
            <div className="text-center py-20 rounded-3xl bg-white dark:bg-charcoal-900 border border-gray-200 dark:border-graphite/50 text-gray-500 font-mono text-sm">
              No products found matching your search.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => {
                const ProductIcon = (product.iconName && PRODUCT_ICONS[product.iconName]) || Monitor;
                const imageSrc = product.image || getProductImage(product.slug);

                return (
                  <Card
                    key={product.id}
                    className="flex flex-col justify-between bg-white dark:bg-charcoal-900 border border-gray-200 dark:border-graphite/60 hover:border-emerald-500/60 dark:hover:border-emerald-500/60 shadow-sm hover:shadow-xl transition-all duration-300 rounded-3xl overflow-hidden p-6 group"
                  >
                    <div>
                      {/* Clean Product Visual Preview */}
                      <div className="relative h-48 -mx-6 -mt-6 mb-6 overflow-hidden border-b border-gray-200 dark:border-graphite/50 bg-charcoal-950">
                        <Image
                          src={imageSrc}
                          alt={product.title}
                          fill
                          className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                        {/* Status Badge */}
                        <div className="absolute top-3 left-3">
                          <Badge status={product.status} />
                        </div>

                        {/* Icon */}
                        <div className="absolute top-3 right-3">
                          <span className="p-2 rounded-full bg-black/60 backdrop-blur-md text-emerald-400 border border-white/10 flex items-center justify-center">
                            <ProductIcon className="w-4 h-4" />
                          </span>
                        </div>

                        {/* Bottom Tag */}
                        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs font-mono text-white/95">
                          <span className="px-2.5 py-1 rounded-md bg-black/70 backdrop-blur-md border border-white/10 font-medium">
                            {product.platform}
                          </span>
                          <span className="px-2.5 py-1 rounded-md bg-emerald-500 font-bold text-white text-[11px]">
                            {product.specs.offlineSupport ? 'Offline Ready' : 'Cloud Sync'}
                          </span>
                        </div>
                      </div>

                      {/* Header Info */}
                      <div className="mb-2.5">
                        <div className="flex items-center justify-between gap-2 mb-1">
                          <h2 className="text-xl font-bold text-gray-950 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                            {product.title}
                          </h2>
                          <span className="text-[11px] font-mono text-gray-500 dark:text-slate-400 uppercase font-semibold">
                            {product.category}
                          </span>
                        </div>
                        <p className="text-xs text-emerald-700 dark:text-emerald-400 font-medium">
                          {product.tagline}
                        </p>
                      </div>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-gray-600 dark:text-slate-300 leading-relaxed line-clamp-2 font-normal mb-5">
                        {product.description}
                      </p>
                    </div>

                    {/* Action Bar (Strictly NO 30k shown outside the modal box) */}
                    <div className="pt-4 border-t border-gray-200 dark:border-graphite/40 flex items-center justify-between gap-2">
                      <div className="inline-flex items-center gap-1.5 shrink-0">
                        <button
                          onClick={() => setModalState({ product, mode: 'buy' })}
                          className="h-8 px-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs inline-flex items-center justify-center gap-1.5 whitespace-nowrap shrink-0 transition-all cursor-pointer shadow-xs border border-transparent hover:scale-[1.02] active:scale-[0.98]"
                        >
                          <Zap className="w-3.5 h-3.5 shrink-0" />
                          <span className="whitespace-nowrap">Buy License</span>
                        </button>
                        <button
                          onClick={() => setModalState({ product, mode: 'demo' })}
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
                  </Card>
                );
              })}
            </div>
          )}

        </div>
      </section>

      {/* Embedded One-Time Buy & Demo Modal */}
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
