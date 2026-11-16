'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowLeft,
  ArrowUpRight,
  Check,
  ChevronRight,
  Server,
  Database,
  Cpu,
  Layers,
  CheckCircle2,
  Clock,
  Printer,
  ShieldCheck,
  Zap,
  Monitor,
} from 'lucide-react';
import { ProductItem } from '@/types';
import { Badge } from '@/components/common/Badge';
import { Card } from '@/components/common/Card';
import { ProductDemoModal } from '@/components/forms/ProductDemoModal';
import { BRAND_ASSETS, COMPANY_INFO } from '@/lib/brand';
import { FinalCTA } from '@/components/home/FinalCTA';
import { WhatsAppIcon } from '@/components/common/SocialIcons';

interface ProductDetailViewProps {
  product: ProductItem;
}

export function ProductDetailView({ product }: ProductDetailViewProps) {
  const [modalState, setModalState] = useState<{ mode: 'buy' | 'demo' } | null>(null);

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

  const imageSrc = product.image || getProductImage(product.slug);

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
            <Link href="/products" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
              Products
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            <span className="font-semibold text-gray-900 dark:text-white">{product.title}</span>
          </div>

          <Link
            href="/products"
            className="inline-flex items-center gap-1.5 text-xs text-gray-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors font-sans font-semibold"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>All Products</span>
          </Link>
        </div>
      </nav>

      {/* Hero Header Section */}
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
              {product.category} PLATFORM &bull; COMMERCIAL SPECIFICATION
            </span>
          </div>

          <div className="max-w-3xl">
            <div className="flex items-center gap-2.5 mb-3">
              <Badge status={product.status} />
              <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-gray-100 dark:bg-charcoal-800 text-gray-800 dark:text-slate-200 font-medium">
                {product.platform}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-gray-950 dark:text-white uppercase leading-[1.05]">
              {product.title}.
            </h1>

            <p className="mt-3 text-base sm:text-lg md:text-xl text-gray-600 dark:text-slate-300 font-normal leading-relaxed">
              {product.tagline}
            </p>

            {/* Action Buttons (Strictly NO 30k shown outside the modal box) */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <button
                onClick={() => setModalState({ mode: 'buy' })}
                className="h-11 px-6 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm inline-flex items-center justify-center gap-2 shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer border border-transparent whitespace-nowrap shrink-0"
              >
                <Zap className="w-4 h-4 shrink-0" />
                <span className="whitespace-nowrap">Buy License</span>
              </button>

              <button
                onClick={() => setModalState({ mode: 'demo' })}
                className="h-11 px-6 rounded-full bg-white dark:bg-charcoal-800 border border-gray-300 dark:border-graphite/60 text-sm font-bold text-gray-800 dark:text-slate-200 hover:bg-gray-100 dark:hover:bg-charcoal-700 inline-flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer whitespace-nowrap shrink-0"
              >
                <Monitor className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span className="whitespace-nowrap">Live Demo</span>
              </button>

              <a
                href={`https://wa.me/+923249906944?text=${encodeURIComponent(
                  `Hello Aravex Tech Studio, I want to inquire about ${product.title}.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="h-11 px-5 rounded-full border border-gray-200 dark:border-graphite/40 text-sm font-semibold text-emerald-600 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-950/30 inline-flex items-center justify-center gap-2 transition-colors whitespace-nowrap shrink-0"
              >
                <WhatsAppIcon className="w-4 h-4 shrink-0" />
                <span className="whitespace-nowrap">WhatsApp Desk</span>
              </a>
            </div>
          </div>

          {/* Clean, High-Impact Product Preview Visual */}
          <div className="mt-10 rounded-3xl overflow-hidden border border-gray-200 dark:border-graphite/50 shadow-2xl bg-charcoal-950 relative">
            <div className="px-4 py-2.5 bg-charcoal-900 border-b border-graphite/60 flex items-center justify-between text-xs font-mono text-slate-400">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                <span className="ml-2 font-medium text-slate-300">{product.title} &bull; Production Terminal</span>
              </div>
              <span className="text-emerald-400 text-[11px] font-bold">24-Hour Remote Installation SLA</span>
            </div>

            <div className="relative h-64 sm:h-96 md:h-[420px] lg:h-[460px]">
              <Image
                src={imageSrc}
                alt={product.title}
                fill
                priority
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-white">
                <span className="px-3 py-1.5 rounded-lg bg-black/70 backdrop-blur-md border border-white/15">
                  {product.platform} &bull; {product.specs.offlineSupport ? 'Offline Ready' : 'Cloud Sync'}
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-emerald-500 font-bold text-white shadow-md">
                  100% Client Database Ownership
                </span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3 Core Value Pillars */}
      <section className="py-8 border-b border-gray-200 dark:border-graphite/40 bg-white/50 dark:bg-charcoal-900/20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            <div className="p-5 rounded-2xl bg-white dark:bg-charcoal-900 border border-gray-200 dark:border-graphite/50 space-y-1.5">
              <span className="font-mono text-xs font-bold text-emerald-600 dark:text-emerald-400 block uppercase">
                01. Reliability
              </span>
              <h2 className="text-sm sm:text-base font-bold text-gray-950 dark:text-white">
                {product.specs.offlineSupport ? '100% Offline Capable' : 'Real-Time Cloud Sync'}
              </h2>
              <p className="text-xs text-gray-600 dark:text-slate-300 leading-relaxed">
                Fast local database transactions that keep your business running even during internet outages.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-charcoal-900 border border-gray-200 dark:border-graphite/50 space-y-1.5">
              <span className="font-mono text-xs font-bold text-emerald-600 dark:text-emerald-400 block uppercase">
                02. Hardware Ready
              </span>
              <h2 className="text-sm sm:text-base font-bold text-gray-950 dark:text-white">
                Plug &amp; Play Peripherals
              </h2>
              <p className="text-xs text-gray-600 dark:text-slate-300 leading-relaxed">
                Certified with standard 80mm thermal receipt printers, barcode scanners, and cash drawers.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-charcoal-900 border border-gray-200 dark:border-graphite/50 space-y-1.5">
              <span className="font-mono text-xs font-bold text-emerald-600 dark:text-emerald-400 block uppercase">
                03. Setup Guarantee
              </span>
              <h2 className="text-sm sm:text-base font-bold text-gray-950 dark:text-white">
                24-Hour Remote Installation
              </h2>
              <p className="text-xs text-gray-600 dark:text-slate-300 leading-relaxed">
                An engineer remotely configures database settings, drivers, and guides your team within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content & Specs (Clean 2-Column Split) */}
      <section className="py-12 sm:py-16 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            
            {/* Left Column (7 cols): Architecture & Features */}
            <div className="lg:col-span-7 flex flex-col gap-8">
              
              {/* System Overview */}
              <div>
                <h2 className="text-lg sm:text-xl font-bold text-gray-950 dark:text-white mb-2">
                  System Overview
                </h2>
                <p className="text-sm sm:text-base text-gray-600 dark:text-slate-300 leading-relaxed font-normal">
                  {product.description}
                </p>
              </div>

              {/* Key Features */}
              <div>
                <h3 className="text-base sm:text-lg font-bold text-gray-950 dark:text-white mb-3">
                  Key Features
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm">
                  {product.features.map((feature) => (
                    <div
                      key={feature}
                      className="p-3 rounded-xl bg-white dark:bg-charcoal-900 border border-gray-200 dark:border-graphite/50 flex items-start gap-2.5 text-gray-700 dark:text-slate-300"
                    >
                      <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span className="leading-snug">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Hardware Peripherals */}
              {product.hardwareHighlights && product.hardwareHighlights.length > 0 && (
                <div>
                  <h3 className="text-base font-bold text-gray-950 dark:text-white mb-2.5">
                    Hardware Support
                  </h3>
                  <div className="flex flex-wrap gap-2 text-xs">
                    {product.hardwareHighlights.map((hw) => (
                      <span
                        key={hw}
                        className="px-3 py-1.5 rounded-lg bg-white dark:bg-charcoal-900 border border-gray-200 dark:border-graphite/50 font-medium text-gray-700 dark:text-slate-300"
                      >
                        {hw}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Target Audience */}
              <div>
                <h3 className="text-base font-bold text-gray-950 dark:text-white mb-1.5">
                  Designed For
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
                  {product.targetAudience}
                </p>
              </div>

            </div>

            {/* Right Column (5 cols): Sticky Sidebar */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              
              {/* Commercial Production License Card (Notice: NO 40k shown outside the modal box) */}
              <Card className="rounded-3xl bg-white dark:bg-charcoal-900 border-gray-200 dark:border-graphite/60 shadow-lg p-6 sm:p-8">
                <div className="flex items-center justify-between pb-3 border-b border-gray-100 dark:border-graphite/40 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-gray-900 dark:text-white">
                      Production License
                    </span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold border border-emerald-500/20">
                    PERPETUAL
                  </span>
                </div>

                <div className="space-y-1 mb-4">
                  <h3 className="text-base font-bold text-gray-950 dark:text-white">
                    Lifetime Commercial License
                  </h3>
                  <p className="text-xs text-gray-600 dark:text-slate-300 font-normal">
                    One-time payment with zero monthly subscriptions.
                  </p>
                </div>

                {/* Benefits */}
                <div className="space-y-2 pb-4 border-b border-gray-100 dark:border-graphite/40 text-xs text-gray-700 dark:text-slate-300">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Perpetual license (no monthly fees)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>24-hour remote setup by engineer</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Thermal printer &amp; scanner setup</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>100% client database ownership</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>1 year warranty &amp; free updates</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="mt-5 flex flex-col gap-2.5">
                  <button
                    onClick={() => setModalState({ mode: 'buy' })}
                    className="w-full h-11 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer border border-transparent whitespace-nowrap"
                  >
                    <Zap className="w-4 h-4 shrink-0" />
                    <span className="whitespace-nowrap">Buy License</span>
                  </button>

                  <button
                    onClick={() => setModalState({ mode: 'demo' })}
                    className="w-full h-11 px-4 rounded-xl bg-white dark:bg-charcoal-800 border border-gray-300 dark:border-graphite/60 text-sm font-bold text-gray-800 dark:text-slate-200 hover:bg-gray-100 dark:hover:bg-charcoal-700 flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer whitespace-nowrap"
                  >
                    <Monitor className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                    <span className="whitespace-nowrap">Live Demo</span>
                  </button>

                  <a
                    href="tel:+923249906944"
                    className="w-full text-center py-1.5 text-xs font-mono text-gray-500 hover:text-emerald-600 transition-colors"
                  >
                    Direct Inquiries: +92 324 9906944
                  </a>
                </div>
              </Card>

              {/* Technical Specifications */}
              <Card className="rounded-3xl bg-white dark:bg-charcoal-900 border-gray-200 dark:border-graphite/60 shadow-md p-6">
                <h3 className="text-sm font-bold text-gray-950 dark:text-white mb-3 pb-2 border-b border-gray-100 dark:border-graphite/40 font-mono uppercase tracking-wider">
                  Technical Specifications
                </h3>

                <div className="flex flex-col gap-3 text-xs">
                  {product.specs.database && (
                    <div className="flex items-start gap-2.5">
                      <Database className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <div>
                        <span className="text-[10px] uppercase font-bold text-gray-500 font-mono block">Database</span>
                        <span className="font-semibold text-gray-900 dark:text-white">{product.specs.database}</span>
                      </div>
                    </div>
                  )}

                  {product.specs.stack && (
                    <div className="flex items-start gap-2.5">
                      <Cpu className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <div>
                        <span className="text-[10px] uppercase font-bold text-gray-500 font-mono block">Tech Stack</span>
                        <span className="font-semibold text-gray-900 dark:text-white">{product.specs.stack}</span>
                      </div>
                    </div>
                  )}

                  <div className="flex items-start gap-2.5">
                    <Layers className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[10px] uppercase font-bold text-gray-500 font-mono block">Offline Durability</span>
                      <span className="font-semibold text-gray-900 dark:text-white">
                        {product.specs.offlineSupport ? '100% Offline Capable' : 'Cloud Synchronized'}
                      </span>
                    </div>
                  </div>

                  {product.specs.deployment && (
                    <div className="flex items-start gap-2.5">
                      <Server className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <div>
                        <span className="text-[10px] uppercase font-bold text-gray-500 font-mono block">Deployment</span>
                        <span className="font-semibold text-gray-900 dark:text-white">{product.specs.deployment}</span>
                      </div>
                    </div>
                  )}
                </div>
              </Card>

            </div>

          </div>
        </div>
      </section>

      {/* Embedded One-Time Buy & Demo Modal */}
      <ProductDemoModal
        product={product}
        defaultMode={modalState?.mode || 'buy'}
        isOpen={Boolean(modalState)}
        onClose={() => setModalState(null)}
      />

      <FinalCTA />
    </main>
  );
}
