import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ContactForm } from '@/components/forms/ContactForm';
import { ContactStudioChannels } from '@/components/contact/ContactStudioChannels';
import { ContactFAQs } from '@/components/contact/ContactFAQs';
import { ShieldCheck, CheckCircle2, ChevronRight, Sparkles, MessageSquare } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact ARAVEX TECH STUDIO — Start a Project Brief',
  description:
    'Initiate a new project with Aravex Tech Studio. Connect directly with systems architects for custom software, POS systems, autonomous AI agents, and cloud engineering.',
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#F7F7F5] dark:bg-charcoal-950 text-charcoal-900 dark:text-warmWhite transition-colors duration-300 relative overflow-hidden">
      {/* Theodore Accent Ribbon */}
      <div className="h-1.5 w-full bg-gradient-to-r from-emerald-500 via-teal-400 via-cyan-400 to-amber-400" />

      {/* Background Architectural Blueprint Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:36px_36px] pointer-events-none" />

      {/* Sub-header Breadcrumb Bar */}
      <div className="pt-16 sm:pt-18 pb-2.5 sm:pb-3 border-b border-gray-200 dark:border-graphite/40 bg-white/80 dark:bg-charcoal-900/60 backdrop-blur-md sticky top-0 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-slate-400 font-sans">
            <Link
              href="/"
              className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
            >
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            <span className="font-semibold text-gray-900 dark:text-white">
              Contact &amp; Commissions
            </span>
          </div>

          <div className="flex items-center gap-2 font-mono text-[11px] text-emerald-600 dark:text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Direct Lead Engineer Review (&lt; 24h)</span>
          </div>
        </div>
      </div>

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
                COMMISSIONS &amp; ARCHITECTURAL SCOPE
              </span>
            </div>

            <div className="flex items-center gap-2 font-sans text-xs text-emerald-600 dark:text-emerald-400 bg-gray-50 dark:bg-charcoal-800 px-3 py-1 rounded-full border border-gray-200 dark:border-graphite/60 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-bold">STATUS: ACCEPTING CLIENT COMMISSIONS</span>
            </div>
          </div>

          {/* Heading */}
          <div className="max-w-4xl">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-gray-950 dark:text-white uppercase leading-[1.05]">
              Start a Project.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-400 dark:from-emerald-400 dark:via-teal-300 dark:to-cyan-400">
                Directly with Systems Architects.
              </span>
            </h1>
            <p className="mt-3 text-sm sm:text-base md:text-lg text-gray-700 dark:text-slate-300 max-w-3xl leading-relaxed font-normal">
              Share your technical brief, software scope, or cloud roadmap. You will collaborate directly with our founding engineers to architect, build, and deploy production-hardened systems.
            </p>
          </div>

          {/* Trust Indicators Strip */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 mt-6 pt-4 border-t border-gray-200 dark:border-graphite/40 text-xs sm:text-sm font-medium text-gray-700 dark:text-slate-300">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>Direct Founder Collaboration</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>Fast Initial Review (&lt; 4h)</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>100% Code &amp; IP Ownership</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>Mutual NDA on Request</span>
            </div>
          </div>

        </div>
      </section>

      {/* Main 2-Column Section */}
      <section className="py-8 sm:py-12 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left 7 Cols: Clean & Clear Project Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

            {/* Right 5 Cols: Direct WhatsApp & Studio Channels */}
            <div className="lg:col-span-5 lg:sticky lg:top-24">
              <ContactStudioChannels />
            </div>

          </div>
        </div>
      </section>

      {/* Interactive Dropdown FAQs */}
      <section className="py-12 sm:py-16 border-t border-gray-200 dark:border-graphite/40 bg-white/60 dark:bg-charcoal-900/40 relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
            <span className="font-sans text-xs uppercase tracking-wider text-emerald-600 dark:text-emerald-400 font-bold block mb-1">
              PRE-ENGAGEMENT CLARITY
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-gray-950 dark:text-white uppercase tracking-tight">
              Frequently Clarified Questions
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-gray-600 dark:text-slate-400">
              Clear terms, sprint milestones, and code ownership before writing a single line of code.
            </p>
          </div>

          {/* Interactive Dropdown Accordion Component */}
          <ContactFAQs />
        </div>
      </section>

    </main>
  );
}
