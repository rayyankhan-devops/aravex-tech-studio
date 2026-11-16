import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { LegalNav } from '@/components/legal/LegalNav';
import { OfficeAddressCard } from '@/components/legal/OfficeAddressCard';
import { COMPANY_INFO } from '@/lib/brand';
import { CheckCircle2, Clock, Users, Laptop, ShieldCheck, Mail, Phone, Zap } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Shipping and Service Delivery Policy — ARAVEX TECH STUDIO',
  description: 'Digital service fulfillment timeline, 24-hour mentor assignment, and software installation commitments of Aravex Tech Studio.',
};

export default function ShippingPage() {
  return (
    <main className="min-h-screen bg-[#F7F7F5] dark:bg-charcoal-950 text-charcoal-900 dark:text-warmWhite transition-colors duration-300 relative overflow-hidden">
      {/* Theodore Accent Ribbon */}
      <div className="h-1.5 w-full bg-gradient-to-r from-emerald-500 via-teal-400 via-cyan-400 to-amber-400" />

      {/* Blueprint Architectural Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:36px_36px] pointer-events-none" />

      {/* Sticky Legal Navigation & Breadcrumbs */}
      <LegalNav currentPath="/shipping" pageTitle="Shipping &amp; Service Policy" />

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
                SERVICE FULFILLMENT &amp; DELIVERY STANDARDS
              </span>
            </div>

            <div className="flex items-center gap-2 font-sans text-xs text-emerald-600 dark:text-emerald-400 bg-gray-50 dark:bg-charcoal-800 px-3 py-1 rounded-full border border-gray-200 dark:border-graphite/60 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-bold">STATUS: 24-HOUR SLA GUARANTEED</span>
            </div>
          </div>

          {/* Heading */}
          <div className="max-w-4xl">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-gray-950 dark:text-white uppercase leading-[1.05]">
              Shipping &amp; Service Policy.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-400 dark:from-emerald-400 dark:via-teal-300 dark:to-cyan-400">
                100% Digital Delivery.
              </span>
            </h1>
            <p className="mt-3 text-sm sm:text-base md:text-lg text-gray-700 dark:text-slate-300 max-w-3xl leading-relaxed font-normal">
              Deterministic fulfillment protocol: zero physical transit, guaranteed 24-hour mentor allocation for cohorts, and rapid 24-hour engineering installation for commercial software products.
            </p>
          </div>

          {/* Trust Indicators Strip */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 mt-6 pt-4 border-t border-gray-200 dark:border-graphite/40 text-xs sm:text-sm font-medium text-gray-700 dark:text-slate-300">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>24-Hour Fulfillment Commitment</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>Zero Physical Shipping Fees</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>Cryptographic Delivery Verification</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>Peshawar Operations Support Desk</span>
            </div>
          </div>

        </div>
      </section>

      {/* Main Content Sections */}
      <section className="py-12 sm:py-16 relative z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-8">

          {/* 24-Hour Guarantee Card */}
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#064e43] to-[#04342d] text-white shadow-lg border border-emerald-500/30">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-md">
                <Clock className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-emerald-400/20 text-emerald-200 border border-emerald-400/30">
                  GUARANTEED SERVICE SLA
                </span>
                <h3 className="text-xl font-bold text-white">
                  24-Hour Fulfillment Commitment
                </h3>
                <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed">
                  After payment verification, within <strong>24 hours</strong> you will receive a dedicated mentor for guidance and onboarding (for technical training &amp; internship cohorts) or direct remote engineering assistance for software installation and configuration (for commercial POS suites &amp; enterprise systems).
                </p>
              </div>
            </div>
          </div>

          {/* Card 1 */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-charcoal-900 border border-gray-200 dark:border-graphite/60 shadow-sm transition-colors">
            <div className="flex items-center gap-3 mb-3">
              <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-emerald-500 text-white">01</span>
              <h2 className="text-lg sm:text-xl font-bold text-gray-950 dark:text-white">
                100% Digital Delivery Model (No Physical Shipping)
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-gray-700 dark:text-slate-300 leading-relaxed">
              <strong>{COMPANY_INFO.name}</strong> operates strictly as an advanced software engineering firm and technical education provider. All deliverables, software applications, database schemas, course cohorts, and mentorship sessions are fulfilled <strong>100% electronically</strong>. There are no physical shipments, postal deliveries, or courier shipping fees.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-charcoal-900 border border-gray-200 dark:border-graphite/60 shadow-sm transition-colors">
            <div className="flex items-center gap-3 mb-3">
              <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-emerald-500 text-white">02</span>
              <h2 className="text-lg sm:text-xl font-bold text-gray-950 dark:text-white">
                Fulfillment Timelines by Service Division
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              {/* Mentorship & Training */}
              <div className="p-5 rounded-2xl bg-gray-50 dark:bg-charcoal-850 border border-gray-200 dark:border-graphite/40 space-y-3">
                <div className="flex items-center gap-2.5 text-emerald-600 dark:text-emerald-400 font-bold">
                  <Users className="w-5 h-5" />
                  <h4>Technical Training &amp; Mentorship</h4>
                </div>
                <p className="text-xs sm:text-sm leading-relaxed text-gray-700 dark:text-slate-300">
                  Within <strong>24 hours</strong> of tuition or enrollment fee confirmation, you will be assigned a personal senior mentor. You will receive:
                </p>
                <ul className="list-disc list-inside space-y-1 text-xs text-gray-600 dark:text-slate-400 pl-1">
                  <li>Direct WhatsApp &amp; Discord onboarding introduction</li>
                  <li>GitHub organization &amp; private lab repository access</li>
                  <li>Complete cohort roadmap and lecture calendar</li>
                  <li>Initial 1-on-1 setup diagnostic session</li>
                </ul>
              </div>

              {/* Commercial Software & POS */}
              <div className="p-5 rounded-2xl bg-gray-50 dark:bg-charcoal-850 border border-gray-200 dark:border-graphite/40 space-y-3">
                <div className="flex items-center gap-2.5 text-blue-600 dark:text-blue-400 font-bold">
                  <Laptop className="w-5 h-5" />
                  <h4>Commercial Software &amp; POS Systems</h4>
                </div>
                <p className="text-xs sm:text-sm leading-relaxed text-gray-700 dark:text-slate-300">
                  Within <strong>24 hours</strong> of license or setup deposit verification, our engineering team initiates remote installation:
                </p>
                <ul className="list-disc list-inside space-y-1 text-xs text-gray-600 dark:text-slate-400 pl-1">
                  <li>Direct encrypted software binary download links</li>
                  <li>Database connection string &amp; schema configuration</li>
                  <li>Thermal receipt printer &amp; barcode scanner driver setup</li>
                  <li>30-minute live operator walkthrough for your staff</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-charcoal-900 border border-gray-200 dark:border-graphite/60 shadow-sm transition-colors">
            <div className="flex items-center gap-3 mb-3">
              <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-emerald-500 text-white">03</span>
              <h2 className="text-lg sm:text-xl font-bold text-gray-950 dark:text-white">
                Delivery Channels &amp; Verification Protocol
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-gray-700 dark:text-slate-300 leading-relaxed mb-3">
              Delivery is executed across official, verified corporate channels:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-2 text-xs sm:text-sm text-gray-700 dark:text-slate-300">
              <li><strong>Official Studio Email:</strong> Dispatched exclusively from <code>info@aravextechstudio.com</code> with cryptographic verification.</li>
              <li><strong>Official WhatsApp Business:</strong> Fast-track coordination from our verified desk at <code>+92 324 9906944</code>.</li>
              <li><strong>Cloud Storage &amp; Git:</strong> Secure private repositories hosted on GitHub with multi-factor authentication locks.</li>
            </ul>
          </div>

          {/* Card 4 */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-charcoal-900 border border-gray-200 dark:border-graphite/60 shadow-sm transition-colors">
            <div className="flex items-center gap-3 mb-3">
              <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-emerald-500 text-white">04</span>
              <h2 className="text-lg sm:text-xl font-bold text-gray-950 dark:text-white">
                Delivery Escalations &amp; Fast-Track Support
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-gray-700 dark:text-slate-300 leading-relaxed">
              If you have completed your payment and have not received your mentor allocation or installation schedule within 24 hours due to banking clearance delays, contact our operations desk immediately at <a href="tel:+923249906944" className="text-emerald-600 dark:text-emerald-400 font-bold underline">+923249906944</a> or <a href={`mailto:${COMPANY_INFO.contact.email}`} className="text-emerald-600 dark:text-emerald-400 font-bold underline">{COMPANY_INFO.contact.email}</a> for immediate manual clearance.
            </p>
          </div>

          {/* Official Registered Office Card */}
          <OfficeAddressCard />

        </div>
      </section>
    </main>
  );
}
