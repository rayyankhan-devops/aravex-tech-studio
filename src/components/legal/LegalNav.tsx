'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronRight, ShieldCheck } from 'lucide-react';

interface LegalNavProps {
  currentPath: '/terms' | '/privacy' | '/refund' | '/shipping';
  pageTitle: string;
}

const LEGAL_TABS = [
  { href: '/terms', label: 'Terms of Service' },
  { href: '/privacy', label: 'Privacy Policy' },
  { href: '/refund', label: 'Return & Refund' },
  { href: '/shipping', label: 'Shipping & Service' },
];

export function LegalNav({ currentPath, pageTitle }: LegalNavProps) {
  return (
    <div className="pt-16 sm:pt-18 pb-3 border-b border-gray-200 dark:border-graphite/40 bg-white/80 dark:bg-charcoal-900/60 backdrop-blur-md sticky top-0 z-20 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center justify-between gap-3">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-slate-400 font-sans">
          <Link
            href="/"
            className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
          >
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
          <span className="text-gray-500 dark:text-slate-400">Legal Compliance</span>
          <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
          <span className="font-semibold text-gray-900 dark:text-white">
            {pageTitle}
          </span>
        </div>

        {/* Legal Switcher Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
          {LEGAL_TABS.map((tab) => {
            const isActive = currentPath === tab.href;
            return (
              <Link
                key={tab.href}
                href={tab.href}
                className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                  isActive
                    ? 'bg-emerald-500 text-white shadow-xs font-bold'
                    : 'bg-gray-100 dark:bg-charcoal-800 text-gray-600 dark:text-slate-400 hover:text-gray-950 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-charcoal-700'
                }`}
              >
                {tab.label}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

