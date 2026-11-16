import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { LegalNav } from '@/components/legal/LegalNav';
import { OfficeAddressCard } from '@/components/legal/OfficeAddressCard';
import { COMPANY_INFO } from '@/lib/brand';
import { CheckCircle2, ShieldCheck, Lock, CreditCard, EyeOff, Server, Database } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy — ARAVEX TECH STUDIO',
  description: '100% Data Privacy, PCI-DSS payment compliance, and strict confidentiality policies of Aravex Tech Studio.',
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#F7F7F5] dark:bg-charcoal-950 text-charcoal-900 dark:text-warmWhite transition-colors duration-300 relative overflow-hidden">
      {/* Theodore Accent Ribbon */}
      <div className="h-1.5 w-full bg-gradient-to-r from-emerald-500 via-teal-400 via-cyan-400 to-amber-400" />

      {/* Blueprint Architectural Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:36px_36px] pointer-events-none" />

      {/* Sticky Legal Navigation & Breadcrumbs */}
      <LegalNav currentPath="/privacy" pageTitle="Privacy Policy" />

      {/* Hero Section */}
      <section className="pt-10 sm:pt-14 pb-8 sm:pb-10 border-b border-gray-200 dark:border-graphite/40 bg-white dark:bg-charcoal-900/40 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Eyebrow & Live Status Row */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
            <div className="flex items-center gap-2.5">
              <div className="flex items-center gap-1 shrink-0" aria-hidden="true">
                <span className="w-1.5 h-3.5 rounded-[2px] bg-[#D45361]" />
                <span className="w-1 h-3.5 rounded-[2px] bg-[#EA7047]" />
                <span className="w-1 h-3.5 rounded-[2px] bg-[#ECEB54]" />
                <span className="w-1 h-3.5 rounded-[2px] bg-[#5CB554]" />
                <span className="w-1 h-3.5 rounded-[2px] bg-[#4D66EC]" />
              </div>
              <span className="font-sans text-xs uppercase tracking-wider text-slate-800 dark:text-slate-200 font-bold">
                DATA PRIVACY &amp; CONFIDENTIALITY GUARANTEE
              </span>
            </div>

            <div className="flex items-center gap-2 font-sans text-xs text-emerald-600 dark:text-emerald-400 bg-gray-50 dark:bg-charcoal-800 px-3 py-1 rounded-full border border-gray-200 dark:border-graphite/60 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-bold">PRIVACY: 100% ZERO-DATA-SALE GUARANTEE</span>
            </div>
          </div>

          {/* Heading */}
          <div className="max-w-4xl">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-gray-950 dark:text-white uppercase leading-[1.05]">
              Privacy Policy.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-400 dark:from-emerald-400 dark:via-teal-300 dark:to-cyan-400">
                100% Security Standards.
              </span>
            </h1>
            <p className="mt-3 text-sm sm:text-base md:text-lg text-gray-700 dark:text-slate-300 max-w-3xl leading-relaxed font-normal">
              How ARAVEX TECH STUDIO collects, manages, and safeguards client technical briefs, payment card security, personal data, and operational credentials across all software and training initiatives.
            </p>
          </div>

          {/* Trust Indicators Strip */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 mt-6 pt-4 border-t border-gray-200 dark:border-graphite/40 text-xs sm:text-sm font-medium text-gray-700 dark:text-slate-300">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>Zero Cardholder CVV Storage</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>PCI-DSS PayFast Gateway Compliance</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>Bilateral NDA Code Protection</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>Zero Third-Party Advertising Pixels</span>
            </div>
          </div>

        </div>
      </section>

      {/* Main Content Sections */}
      <section className="py-12 sm:py-16 relative z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-8">

          {/* 100% Privacy Card */}
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#064e43] to-[#04342d] text-white shadow-lg border border-emerald-500/30">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-md">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-emerald-400/20 text-emerald-200 border border-emerald-400/30">
                  EXECUTIVE PRIVACY DIRECTIVE
                </span>
                <h3 className="text-xl font-bold text-white mt-1">
                  100% Confidentiality &amp; Data Minimization
                </h3>
                <p className="text-xs sm:text-sm text-emerald-100/90 mt-1 leading-relaxed">
                  We guarantee 100% privacy protection across every digital interaction. Your project specifications, client contact records, and payment confirmations are never traded, sold, rented, or distributed to any third party for marketing or advertising purposes.
                </p>
              </div>
            </div>
          </div>

          {/* Card 1 */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-charcoal-900 border border-gray-200 dark:border-graphite/60 shadow-sm transition-colors">
            <div className="flex items-center gap-3 mb-3">
              <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-emerald-500 text-white">01</span>
              <h2 className="text-lg sm:text-xl font-bold text-gray-950 dark:text-white">
                Scope &amp; Data Stewardship
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-gray-700 dark:text-slate-300 leading-relaxed">
              This Privacy Policy applies to all digital assets, commercial software suites, and technical education platforms operated by <strong>{COMPANY_INFO.name}</strong> (&quot;Aravex&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;). We adhere strictly to data minimization, role-based access control, and bilateral NDAs.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-charcoal-900 border border-gray-200 dark:border-graphite/60 shadow-sm transition-colors">
            <div className="flex items-center gap-3 mb-3">
              <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-emerald-500 text-white">02</span>
              <h2 className="text-lg sm:text-xl font-bold text-gray-950 dark:text-white">
                Information Collected &amp; Purpose of Processing
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-gray-700 dark:text-slate-300 leading-relaxed mb-3">
              We collect information strictly required to deliver bespoke software, configure production environments, and process cohort enrollments:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
              <div className="p-3.5 rounded-2xl bg-gray-50 dark:bg-charcoal-850 border border-gray-200 dark:border-graphite/40">
                <span className="font-bold text-gray-950 dark:text-white block mb-1">Corporate Client Data</span>
                <span className="text-gray-600 dark:text-slate-400">Business names, work emails, mobile numbers (+92 324 9906944 communication channel), and technical software architectural briefs.</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-gray-50 dark:bg-charcoal-850 border border-gray-200 dark:border-graphite/40">
                <span className="font-bold text-gray-950 dark:text-white block mb-1">Tuition &amp; Invoicing Data</span>
                <span className="text-gray-600 dark:text-slate-400">Transaction confirmation IDs, bank slips for Meezan Bank or Askari Bank wires, and Easypaisa reference numbers.</span>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-charcoal-900 border border-gray-200 dark:border-graphite/60 shadow-sm transition-colors">
            <div className="flex items-center gap-3 mb-3">
              <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-emerald-500 text-white">03</span>
              <h2 className="text-lg sm:text-xl font-bold text-gray-950 dark:text-white">
                Payment Card Security &amp; PCI-DSS Gateway Compliance
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-gray-700 dark:text-slate-300 leading-relaxed mb-3">
              All online credit and debit card transactions are processed securely through licensed, PCI-DSS Level 1 certified gateway partners (including <strong>PayFast</strong> by APPS and 1Link).
            </p>
            <div className="p-4 rounded-2xl bg-gray-50 dark:bg-charcoal-850 border border-gray-200 dark:border-graphite/40 space-y-2 text-xs">
              <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold">
                <Lock className="w-4 h-4" />
                <span>Zero Cardholder Data Storage Architecture</span>
              </div>
              <p className="text-gray-700 dark:text-slate-300 leading-relaxed">
                ARAVEX TECH STUDIO never intercepts, views, captures, or retains payment card numbers, CVV2/CVC security codes, or banking PINs on our servers. All sensitive card processing is conducted over 256-bit TLS/SSL encrypted sessions managed directly by certified payment processors.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-charcoal-900 border border-gray-200 dark:border-graphite/60 shadow-sm transition-colors">
            <div className="flex items-center gap-3 mb-3">
              <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-emerald-500 text-white">04</span>
              <h2 className="text-lg sm:text-xl font-bold text-gray-950 dark:text-white">
                Client Code Confidentiality &amp; NDA Standards
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-gray-700 dark:text-slate-300 leading-relaxed">
              All proprietary codebases, database schemas, API keys, and operational credentials shared with our senior architects are guarded by strict bilateral Non-Disclosure Agreements (NDAs). Custom code remains the 100% exclusive intellectual property of the commissioning client upon invoice clearance.
            </p>
          </div>

          {/* Card 5 */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-charcoal-900 border border-gray-200 dark:border-graphite/60 shadow-sm transition-colors">
            <div className="flex items-center gap-3 mb-3">
              <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-emerald-500 text-white">05</span>
              <h2 className="text-lg sm:text-xl font-bold text-gray-950 dark:text-white">
                Data Subject Rights &amp; Rectification
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-gray-700 dark:text-slate-300 leading-relaxed">
              You retain the right to inspect, update, or petition for the complete erasure of your personal contact records from our active intake systems at any time. To exercise these rights, submit a formal request to our compliance desk at <a href={`mailto:${COMPANY_INFO.contact.email}`} className="text-emerald-600 dark:text-emerald-400 font-semibold underline">{COMPANY_INFO.contact.email}</a>.
            </p>
          </div>

          {/* Official Registered Office Card */}
          <OfficeAddressCard />

        </div>
      </section>
    </main>
  );
}
