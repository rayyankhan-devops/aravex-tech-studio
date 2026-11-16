import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { LegalNav } from '@/components/legal/LegalNav';
import { OfficeAddressCard } from '@/components/legal/OfficeAddressCard';
import { COMPANY_INFO } from '@/lib/brand';
import { CheckCircle2, ShieldAlert, AlertTriangle, RefreshCw, FileText, Wrench } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Return and Refund Policy — ARAVEX TECH STUDIO',
  description: 'Official Return and Refund Policy of Aravex Tech Studio. Conditions for product returns, non-refundable digital goods, and defect resolution.',
};

export default function RefundPage() {
  return (
    <main className="min-h-screen bg-[#F7F7F5] dark:bg-charcoal-950 text-charcoal-900 dark:text-warmWhite transition-colors duration-300 relative overflow-hidden">
      {/* Theodore Accent Ribbon */}
      <div className="h-1.5 w-full bg-gradient-to-r from-emerald-500 via-teal-400 via-cyan-400 to-amber-400" />

      {/* Blueprint Architectural Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:36px_36px] pointer-events-none" />

      {/* Sticky Legal Navigation & Breadcrumbs */}
      <LegalNav currentPath="/refund" pageTitle="Return &amp; Refund Policy" />

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
                COMMERCIAL RETURN &amp; DEFECT RESOLUTION
              </span>
            </div>

            <div className="flex items-center gap-2 font-sans text-xs text-emerald-600 dark:text-emerald-400 bg-gray-50 dark:bg-charcoal-800 px-3 py-1 rounded-full border border-gray-200 dark:border-graphite/60 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-bold">STATUS: PAYFAST &amp; SBP COMPLIANT</span>
            </div>
          </div>

          {/* Heading */}
          <div className="max-w-4xl">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-gray-950 dark:text-white uppercase leading-[1.05]">
              Return &amp; Refund Policy.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-400 dark:from-emerald-400 dark:via-teal-300 dark:to-cyan-400">
                Defect Resolution &amp; SLAs.
              </span>
            </h1>
            <p className="mt-3 text-sm sm:text-base md:text-lg text-gray-700 dark:text-slate-300 max-w-3xl leading-relaxed font-normal">
              Clear, transparent, and binding guidelines governing software return eligibility, non-refundable digital intellectual property, 5-day engineering defect resolution, and dispute escalation.
            </p>
          </div>

          {/* Trust Indicators Strip */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 mt-6 pt-4 border-t border-gray-200 dark:border-graphite/40 text-xs sm:text-sm font-medium text-gray-700 dark:text-slate-300">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>Severe Issue Return Protection</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>Strictly Final on Dispatched Code</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>5-Day Critical Patch SLA</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>Verified Escalation Desk</span>
            </div>
          </div>

        </div>
      </section>

      {/* Main Content Sections */}
      <section className="py-12 sm:py-16 relative z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-8">

          {/* Core Policy Directive Banner */}
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#064e43] to-[#04342d] text-white shadow-lg border border-emerald-500/30">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-md">
                <ShieldAlert className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-emerald-400/20 text-emerald-200 border border-emerald-400/30">
                  CORE COMMERCIAL DIRECTIVE
                </span>
                <h3 className="text-xl font-bold text-white">
                  Severe Issue Return Policy &bull; Strictly No Refunds
                </h3>
                <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed">
                  <strong>Return Eligibility:</strong> A product return or software license revocation is permitted <em>strictly</em> if the software product exhibits a severe or major functional issue that our engineering team cannot resolve or patch within 5 business days.<br className="hidden sm:inline" />
                  <strong>Strictly No Refunds:</strong> Once digital software licenses, binary builds, source code, or training access credentials have been dispatched and delivered, all sales are final and non-refundable.
                </p>
              </div>
            </div>
          </div>

          {/* Card 1 */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-charcoal-900 border border-gray-200 dark:border-graphite/60 shadow-sm transition-colors">
            <div className="flex items-center gap-3 mb-3">
              <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-emerald-500 text-white">01</span>
              <h2 className="text-lg sm:text-xl font-bold text-gray-950 dark:text-white">
                Scope &amp; Intangible Digital Fulfillment
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-gray-700 dark:text-slate-300 leading-relaxed">
              <strong>{COMPANY_INFO.name}</strong> operates as a specialized software engineering studio and advanced technology academy. Because our products (such as Aravex Point of Sale suites, School MIS, Inventory ERP, and custom SaaS platforms) are intangible, digital intellectual property delivered electronically, traditional physical goods return policies do not apply.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-charcoal-900 border border-gray-200 dark:border-graphite/60 shadow-sm transition-colors">
            <div className="flex items-center gap-3 mb-3">
              <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-emerald-500 text-white">02</span>
              <h2 className="text-lg sm:text-xl font-bold text-gray-950 dark:text-white">
                Criteria for Product Returns (Severe or Major Issues Only)
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-gray-700 dark:text-slate-300 leading-relaxed mb-4">
              We stand firmly behind the architectural integrity of our code. A product return request will be evaluated and accepted <strong>only</strong> under the following verifiable conditions:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
              <div className="p-4 rounded-2xl bg-gray-50 dark:bg-charcoal-850 border border-gray-200 dark:border-graphite/40 space-y-1.5">
                <span className="font-bold text-gray-950 dark:text-white block">Severe Functional Defect</span>
                <p className="text-gray-600 dark:text-slate-400 leading-relaxed">
                  The core transaction, billing, or database module fails catastrophically, resulting in persistent data corruption or system crashes under standard operating conditions.
                </p>
              </div>
              <div className="p-4 rounded-2xl bg-gray-50 dark:bg-charcoal-850 border border-gray-200 dark:border-graphite/40 space-y-1.5">
                <span className="font-bold text-gray-950 dark:text-white block">Unresolved Engineering Failure</span>
                <p className="text-gray-600 dark:text-slate-400 leading-relaxed">
                  The client has submitted error logs and reproducible test cases, and our engineering desk has been unable to furnish a working patch or hotfix within <strong>5 business days</strong>.
                </p>
              </div>
              <div className="p-4 rounded-2xl bg-gray-50 dark:bg-charcoal-850 border border-gray-200 dark:border-graphite/40 space-y-1.5">
                <span className="font-bold text-gray-950 dark:text-white block">Major Scope Discrepancy</span>
                <p className="text-gray-600 dark:text-slate-400 leading-relaxed">
                  The delivered binary or system fundamentally diverges from the signed commercial proposal or demonstration specifications agreed in the SOW.
                </p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-charcoal-900 border border-gray-200 dark:border-graphite/60 shadow-sm transition-colors">
            <div className="flex items-center gap-3 mb-3">
              <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-emerald-500 text-white">03</span>
              <h2 className="text-lg sm:text-xl font-bold text-gray-950 dark:text-white">
                Non-Refundable Circumstances
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-gray-700 dark:text-slate-300 leading-relaxed mb-3">
              Refunds will <strong>not</strong> be granted under any of the following circumstances:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-2 text-xs sm:text-sm text-gray-700 dark:text-slate-300">
              <li><strong>Change of Mind:</strong> Change of commercial plans, business restructuring, or subjective personal preferences after software dispatch or code delivery.</li>
              <li><strong>Hardware Incompatibilities:</strong> Failure resulting from unsupported legacy operating systems, third-party printer driver conflicts, or unapproved peripheral hardware.</li>
              <li><strong>Third-Party Alterations:</strong> Issues caused by unauthorized modifications, decompilation, third-party database edits, or malware on client machines.</li>
              <li><strong>Training &amp; Internship Cohorts:</strong> Tuition and enrollment fees are strictly non-refundable once the mentorship batch has commenced or onboarding materials have been released, as seats are limited and mentor resources are committed.</li>
            </ul>
          </div>

          {/* Card 4 */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-charcoal-900 border border-gray-200 dark:border-graphite/60 shadow-sm transition-colors">
            <div className="flex items-center gap-3 mb-3">
              <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-emerald-500 text-white">04</span>
              <h2 className="text-lg sm:text-xl font-bold text-gray-950 dark:text-white">
                Technical Escalation &amp; Resolution Procedure
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-gray-700 dark:text-slate-300 leading-relaxed mb-4">
              If you experience a critical software failure, follow our standardized technical escalation protocol:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
              <div className="p-4 rounded-2xl bg-gray-50 dark:bg-charcoal-850 border border-gray-200 dark:border-graphite/40 space-y-1.5">
                <span className="font-bold text-emerald-600 dark:text-emerald-400 block font-mono">STEP 01</span>
                <span className="font-bold text-gray-950 dark:text-white block">Incident Submission</span>
                <p className="text-gray-600 dark:text-slate-400 leading-relaxed">
                  Email our engineering desk at <a href={`mailto:${COMPANY_INFO.contact.email}`} className="text-emerald-600 dark:text-emerald-400 underline font-semibold">{COMPANY_INFO.contact.email}</a> or WhatsApp <a href="tel:+923249906944" className="text-emerald-600 dark:text-emerald-400 underline font-semibold">+923249906944</a> with your Order ID, system specs, and reproduction screenshots.
                </p>
              </div>
              <div className="p-4 rounded-2xl bg-gray-50 dark:bg-charcoal-850 border border-gray-200 dark:border-graphite/40 space-y-1.5">
                <span className="font-bold text-emerald-600 dark:text-emerald-400 block font-mono">STEP 02</span>
                <span className="font-bold text-gray-950 dark:text-white block">Engineering Audit</span>
                <p className="text-gray-600 dark:text-slate-400 leading-relaxed">
                  A senior systems architect will initiate a remote diagnostic session within 24 hours to inspect the environment, isolate logs, and apply required patches.
                </p>
              </div>
              <div className="p-4 rounded-2xl bg-gray-50 dark:bg-charcoal-850 border border-gray-200 dark:border-graphite/40 space-y-1.5">
                <span className="font-bold text-emerald-600 dark:text-emerald-400 block font-mono">STEP 03</span>
                <span className="font-bold text-gray-950 dark:text-white block">Return Determination</span>
                <p className="text-gray-600 dark:text-slate-400 leading-relaxed">
                  If the defect is confirmed as an unresolvable software flaw attributable to Aravex, your software license will be revoked and a return/credit replacement will be processed.
                </p>
              </div>
            </div>
          </div>

          {/* Official Registered Office Card */}
          <OfficeAddressCard />

        </div>
      </section>
    </main>
  );
}
