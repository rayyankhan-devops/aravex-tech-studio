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
  const [demoProduct, setDemoProduct] = useState<ProductItem | null>(null);

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
    <main className="min-h-screen bg-charcoal-950 text-warmWhite">
      {/* Header */}
      <section className="pt-24 pb-16 border-b border-graphite/40 bg-charcoal-900/60">
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
              <Search className="w-4 h-4 text-slate-muted absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search products or features..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-full bg-charcoal-850 border border-graphite/40 text-xs font-mono text-warmWhite placeholder:text-slate-500 focus:outline-none focus:border-slate-muted"
              />
            </div>

            {/* Platform Filters */}
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="text-xs font-mono text-slate-muted mr-1">Platform:</span>
              {PLATFORMS.map((p) => (
                <button
                  key={p}
                  onClick={() => setSelectedPlatform(p)}
                  className={`px-3 py-1 rounded-full text-xs font-mono border transition-colors ${
                    selectedPlatform === p
                      ? 'bg-warmWhite text-charcoal-900 border-transparent font-bold'
                      : 'bg-charcoal-850/80 text-slate-300 border-graphite/40 hover:border-slate-muted'
                  }`}
                >
                  {p}
                </button>
              ))}
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 pt-4">
            <span className="text-xs font-mono text-slate-muted mr-1">Category:</span>
            {CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => setSelectedCategory(c)}
                className={`px-3 py-1 rounded-full text-xs font-mono border transition-colors ${
                  selectedCategory === c
                    ? 'bg-slate-muted text-white border-transparent font-semibold'
                    : 'bg-charcoal-850/50 text-slate-400 border-graphite/30 hover:border-slate-muted/50'
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
            <div className="text-center py-20 text-slate-muted font-mono text-sm">
              No products found matching your active filter criteria.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <Card
                  key={product.id}
                  className="flex flex-col justify-between hover:border-slate-muted/60"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <Badge status={product.status} />
                      <span className="inline-flex items-center gap-1 text-xs font-mono text-slate-muted">
                        {getPlatformIcon(product.platform)}
                        <span>{product.platform}</span>
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2 leading-snug">
                      {product.title}
                    </h3>

                    <p className="text-xs font-mono text-slate-muted uppercase mb-4">
                      Target: {product.category}
                    </p>

                    <p className="text-xs text-slate-300 leading-relaxed mb-6">
                      {product.description}
                    </p>

                    {/* Features preview */}
                    <div className="flex flex-col gap-2 pt-2 border-t border-graphite/30 mb-6">
                      {product.features.slice(0, 3).map((f) => (
                        <div key={f} className="flex items-start gap-2 text-xs text-slate-400">
                          <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-graphite/40">
                    <button
                      onClick={() => setDemoProduct(product)}
                      className="text-xs font-mono text-warmWhite hover:underline focus:outline-none"
                    >
                      Request Demo
                    </button>
                    <Link
                      href={`/products/${product.slug}`}
                      className="inline-flex items-center gap-1 text-xs font-mono text-slate-muted hover:text-white"
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

      {/* Demo Modal */}
      <ProductDemoModal
        product={demoProduct}
        isOpen={!!demoProduct}
        onClose={() => setDemoProduct(null)}
      />

      <FinalCTA />
    </main>
  );
}
