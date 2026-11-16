import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { LegalNav } from '@/components/legal/LegalNav';
import { OfficeAddressCard } from '@/components/legal/OfficeAddressCard';
import { COMPANY_INFO } from '@/lib/brand';
import { CheckCircle2, ShieldCheck, Scale, FileText, CreditCard, Clock, Lock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Terms of Service — ARAVEX TECH STUDIO',
  description: 'Commercial Terms of Service, payment compliance, service SLAs, and intellectual property terms of Aravex Tech Studio.',
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#F7F7F5] dark:bg-charcoal-950 text-charcoal-900 dark:text-warmWhite transition-colors duration-300 relative overflow-hidden">
      {/* Theodore Accent Ribbon */}
      <div className="h-1.5 w-full bg-gradient-to-r from-emerald-500 via-teal-400 via-cyan-400 to-amber-400" />

      {/* Blueprint Architectural Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:36px_36px] pointer-events-none" />

      {/* Sticky Legal Navigation & Breadcrumbs */}
      <LegalNav currentPath="/terms" pageTitle="Terms of Service" />

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
                COMMERCIAL TERMS &amp; REGULATORY FRAMEWORK
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
              Terms of Service.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-400 dark:from-emerald-400 dark:via-teal-300 dark:to-cyan-400">
                Transparent &amp; Deterministic.
              </span>
            </h1>
            <p className="mt-3 text-sm sm:text-base md:text-lg text-gray-700 dark:text-slate-300 max-w-3xl leading-relaxed font-normal">
              Standard commercial terms governing software engineering contracts, commercial software product licenses, digital payment processing, 24-hour service delivery SLAs, and technology training cohorts.
            </p>
          </div>

          {/* Trust Indicators Strip */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 mt-6 pt-4 border-t border-gray-200 dark:border-graphite/40 text-xs sm:text-sm font-medium text-gray-700 dark:text-slate-300">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>100% Client Code Ownership</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>24-Hour Service Fulfillment SLA</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>PCI-DSS Card Security Compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>Mutual NDA Protected</span>
            </div>
          </div>

        </div>
      </section>

      {/* Main Content Sections */}
      <section className="py-12 sm:py-16 relative z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-8">

          {/* Card 1 */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-charcoal-900 border border-gray-200 dark:border-graphite/60 shadow-sm transition-colors">
            <div className="flex items-center gap-3 mb-3">
              <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-emerald-500 text-white">01</span>
              <h2 className="text-lg sm:text-xl font-bold text-gray-950 dark:text-white">
                Acceptance &amp; Binding Agreement
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-gray-700 dark:text-slate-300 leading-relaxed">
              These Terms of Service (&quot;Terms&quot;) constitute a legally binding agreement between you (&quot;Client&quot;, &quot;User&quot;, &quot;Student&quot;, or &quot;Subscriber&quot;) and <strong>{COMPANY_INFO.name}</strong> (&quot;Aravex Tech Studio&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;). By accessing our website, initiating a software project brief, purchasing commercial software products, or enrolling in technical cohorts, you agree to these Terms, along with our <Link href="/privacy" className="text-emerald-600 dark:text-emerald-400 underline font-semibold">Privacy Policy</Link>, <Link href="/refund" className="text-emerald-600 dark:text-emerald-400 underline font-semibold">Return &amp; Refund Policy</Link>, and <Link href="/shipping" className="text-emerald-600 dark:text-emerald-400 underline font-semibold">Shipping &amp; Service Policy</Link>.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-charcoal-900 border border-gray-200 dark:border-graphite/60 shadow-sm transition-colors">
            <div className="flex items-center gap-3 mb-3">
              <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-emerald-500 text-white">02</span>
              <h2 className="text-lg sm:text-xl font-bold text-gray-950 dark:text-white">
                Scope of Services &amp; Statement of Work (SOW)
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-gray-700 dark:text-slate-300 leading-relaxed mb-3">
              Aravex Tech Studio provides bespoke engineering solutions across three primary divisions:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
              <div className="p-3.5 rounded-2xl bg-gray-50 dark:bg-charcoal-850 border border-gray-200 dark:border-graphite/40">
                <span className="font-bold text-gray-950 dark:text-white block mb-1">Custom Software</span>
                <span className="text-gray-600 dark:text-slate-400">Distributed SaaS, web apps, mobile systems, autonomous AI agents, and AWS/GCP cloud pipelines.</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-gray-50 dark:bg-charcoal-850 border border-gray-200 dark:border-graphite/40">
                <span className="font-bold text-gray-950 dark:text-white block mb-1">Commercial Products</span>
                <span className="text-gray-600 dark:text-slate-400">Offline-first POS suites, School MIS, Inventory ERP, and TimeTrack platforms.</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-gray-50 dark:bg-charcoal-850 border border-gray-200 dark:border-graphite/40">
                <span className="font-bold text-gray-950 dark:text-white block mb-1">Technical Academy</span>
                <span className="text-gray-600 dark:text-slate-400">4-week hands-on practical cohorts and 3-month engineering mentorships.</span>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-charcoal-900 border border-gray-200 dark:border-graphite/60 shadow-sm transition-colors">
            <div className="flex items-center gap-3 mb-3">
              <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-emerald-500 text-white">03</span>
              <h2 className="text-lg sm:text-xl font-bold text-gray-950 dark:text-white">
                Payment Processing &amp; Official Banking Channels
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-gray-700 dark:text-slate-300 leading-relaxed mb-3">
              All transactions are settled in Pakistani Rupees (PKR) or agreed international currencies (USD). Our verified payment rails include:
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-2 text-xs sm:text-sm text-gray-700 dark:text-slate-300">
              <li><strong>Online Payment Gateway (PayFast):</strong> Debit and credit cards are processed through State Bank of Pakistan-licensed gateway <strong>PayFast</strong> with 256-bit PCI-DSS encryption.</li>
              <li><strong>Meezan Digital Centre:</strong> Account Title: <code>MUHAMMAD RAYAN</code>, Account No: <code>00300116267985</code>, IBAN: <code>PK76MEZN0000300116267985</code>.</li>
              <li><strong>Askari Bank Limited:</strong> Account Title: <code>MUHAMMAD RAYYAN</code>, Account No: <code>08980200009092</code>, IBAN: <code>PK73ASCM0008980200009092</code>.</li>
              <li><strong>Easypaisa Mobile Wallet:</strong> Account Title: <code>MUHAMMAD RAYYAN</code>, Mobile: <code>03355013206</code>.</li>
            </ul>
          </div>

          {/* Card 4 */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-charcoal-900 border border-gray-200 dark:border-graphite/60 shadow-sm transition-colors">
            <div className="flex items-center gap-3 mb-3">
              <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-emerald-500 text-white">04</span>
              <h2 className="text-lg sm:text-xl font-bold text-gray-950 dark:text-white">
                Service Delivery &amp; 24-Hour Fulfillment Commitment
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-gray-700 dark:text-slate-300 leading-relaxed mb-3">
              As articulated in our <Link href="/shipping" className="text-emerald-600 dark:text-emerald-400 font-semibold underline">Shipping &amp; Service Policy</Link>, all deliverables are 100% digital. Within <strong>24 hours</strong> of payment clearance:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/30">
                <span className="font-bold text-gray-950 dark:text-white block mb-1">Mentor Allocation (&lt; 24h)</span>
                <span className="text-gray-700 dark:text-slate-300">Cohort students and mentorship interns receive personal senior engineer allocation, GitHub lab invites, and syllabus onboarding.</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-blue-500/10 border border-blue-500/30">
                <span className="font-bold text-gray-950 dark:text-white block mb-1">Software Installation (&lt; 24h)</span>
                <span className="text-gray-700 dark:text-slate-300">Software buyers receive binary packages, database connection scripts, and live remote technical installation support.</span>
              </div>
            </div>
          </div>

          {/* Card 5 */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-charcoal-900 border border-gray-200 dark:border-graphite/60 shadow-sm transition-colors">
            <div className="flex items-center gap-3 mb-3">
              <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-emerald-500 text-white">05</span>
              <h2 className="text-lg sm:text-xl font-bold text-gray-950 dark:text-white">
                Strict Return &amp; Refund Terms
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-gray-700 dark:text-slate-300 leading-relaxed mb-2">
              In accordance with our <Link href="/refund" className="text-emerald-600 dark:text-emerald-400 font-semibold underline">Return &amp; Refund Policy</Link>:
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-2 text-xs sm:text-sm text-gray-700 dark:text-slate-300">
              <li><strong>Return Eligibility:</strong> Returns or license revocations are permitted <strong>strictly</strong> if the delivered software exhibits a severe or major functional defect that our engineering team cannot resolve or patch within 5 business days.</li>
              <li><strong>No Refund Principle:</strong> Because digital software binaries, source code, and mentorship resources represent non-recoverable intellectual assets, settled fees are non-refundable once delivered.</li>
            </ul>
          </div>

          {/* Card 6 */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-charcoal-900 border border-gray-200 dark:border-graphite/60 shadow-sm transition-colors">
            <div className="flex items-center gap-3 mb-3">
              <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-emerald-500 text-white">06</span>
              <h2 className="text-lg sm:text-xl font-bold text-gray-950 dark:text-white">
                Intellectual Property &amp; 100% Client Code Ownership
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-gray-700 dark:text-slate-300 leading-relaxed">
              Upon complete settlement of agreed invoice milestones, the commissioning client receives <strong>100% ownership</strong> of all custom source code, database architectures, and deployment scripts created under the SOW. Aravex retains ownership of pre-existing core libraries and educational frameworks, granting client perpetual, non-exclusive rights for their use.
            </p>
          </div>

          {/* Card 7 */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-charcoal-900 border border-gray-200 dark:border-graphite/60 shadow-sm transition-colors">
            <div className="flex items-center gap-3 mb-3">
              <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-emerald-500 text-white">07</span>
              <h2 className="text-lg sm:text-xl font-bold text-gray-950 dark:text-white">
                Governing Law &amp; Jurisdiction
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-gray-700 dark:text-slate-300 leading-relaxed">
              These Terms shall be governed by and construed in accordance with the <strong>laws of the Islamic Republic of Pakistan</strong>. Any legal dispute or claim arising out of commercial engagements that cannot be settled amicably shall be submitted to the exclusive jurisdiction of the competent courts of <strong>Peshawar, Khyber Pakhtunkhwa, Pakistan</strong>.
            </p>
          </div>

          {/* Official Registered Office Card */}
          <OfficeAddressCard />

        </div>
      </section>
    </main>
  );
}
