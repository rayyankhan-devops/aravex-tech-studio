import React from 'react';
import type { Metadata } from 'next';
import { ContactForm } from '@/components/forms/ContactForm';
import { ContactStudioChannels } from '@/components/contact/ContactStudioChannels';
import { ShieldCheck, CheckCircle2, Clock, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact ARAVEX TECH STUDIO — Start a Project',
  description:
    'Initiate a new project with Aravex Tech Studio. Specialized in custom software development, POS systems, AI agents, and AWS/GCP cloud engineering.',
};

const CONTACT_FAQS = [
  {
    q: 'How quickly can our project kick off?',
    a: 'Following our initial technical review (usually within 24 hours), we draft an architecture blueprint and fixed-scope sprint plan. Sprints kick off within 5 to 7 business days.',
  },
  {
    q: 'Who will I collaborate with during engineering?',
    a: 'You collaborate directly with senior founding architects (Muhammad Rayyan, Muhammad Uzair, Aqsa Wadood). We do not employ non-technical account managers or junior buffers.',
  },
  {
    q: 'Who owns the intellectual property and code?',
    a: 'You do. 100% of all source code, Docker configs, database schemas, and cloud deployment pipelines belong entirely to you from day one. Zero vendor lock-in.',
  },
  {
    q: 'Can you sign a Mutual NDA before we share specs?',
    a: 'Absolutely. Check the "Request Mutual NDA" box in the project brief form or mention it in your WhatsApp message, and our founders will execute an NDA before technical deep-dives.',
  },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#F7F7F5] dark:bg-charcoal-950 text-charcoal-900 dark:text-warmWhite transition-colors duration-300 relative overflow-hidden">
      {/* Background Architectural Blueprint Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:36px_36px] pointer-events-none" />

      {/* Hero Section */}
      <section className="pt-16 sm:pt-20 pb-8 sm:pb-10 border-b border-gray-200 dark:border-graphite/40 bg-white dark:bg-charcoal-900/60 relative z-10">
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
                COMMISSIONS &amp; ARCHITECTURAL INQUIRIES
              </span>
            </div>

            <div className="flex items-center gap-2 font-sans text-xs text-emerald-600 dark:text-emerald-400 bg-gray-50 dark:bg-charcoal-800 px-3 py-1 rounded-full border border-gray-200 dark:border-graphite/60 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-bold">STATUS: ACCEPTING SELECTIVE CLIENT COMMISSIONS</span>
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

          {/* Clean Trust Indicators Strip */}
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

      {/* Frequently Clarified Questions */}
      <section className="py-8 sm:py-12 border-t border-gray-200 dark:border-graphite/40 bg-white/60 dark:bg-charcoal-900/40 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6 sm:mb-8">
            <div>
              <span className="font-sans text-xs uppercase tracking-wider text-emerald-600 dark:text-emerald-400 font-bold block mb-1">
                PRE-ENGAGEMENT CLARITY
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-gray-950 dark:text-white uppercase tracking-tight">
                Frequently Clarified Questions
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-gray-500 dark:text-slate-400">
              Clear terms before writing a single line of code
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            {CONTACT_FAQS.map((faq, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-white dark:bg-charcoal-900 border border-gray-200 dark:border-graphite/60 shadow-xs hover:border-emerald-500/40 transition-colors"
              >
                <div className="flex items-start gap-3 mb-2">
                  <div className="w-6 h-6 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/20 mt-0.5 text-xs font-bold font-sans">
                    {i + 1}
                  </div>
                  <h3 className="text-base font-bold text-gray-950 dark:text-white leading-snug">
                    {faq.q}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-slate-300 leading-relaxed font-normal pl-9">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
