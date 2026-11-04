'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, Mail, Sparkles, ShieldCheck } from 'lucide-react';
import { WhatsAppIcon } from '@/components/common/SocialIcons';
import { COMPANY_INFO } from '@/lib/brand';

export function FinalCTA() {
  return (
    <section className="relative py-12 sm:py-16 bg-[#F7F7F5] dark:bg-charcoal-950 text-charcoal-900 dark:text-warmWhite overflow-hidden border-t border-gray-200 dark:border-graphite/40 transition-colors duration-300">
      {/* Background Architectural Blueprint Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:36px_36px] pointer-events-none" />

      {/* Subtle emerald/cyan radial background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[380px] bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-cyan-500/10 blur-[130px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* Theodore Eyebrow with Multi-Color Bar Glyphs */}
        <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white dark:bg-charcoal-900 border border-gray-200 dark:border-graphite/60 mb-5 shadow-xs">
          <div className="flex items-center gap-1 shrink-0" aria-hidden="true">
            <span className="w-1.5 h-3 rounded-[2px] bg-[#D45361]" />
            <span className="w-1 h-3 rounded-[2px] bg-[#EA7047]" />
            <span className="w-1 h-3 rounded-[2px] bg-[#ECEB54]" />
            <span className="w-1 h-3 rounded-[2px] bg-[#5CB554]" />
            <span className="w-1 h-3 rounded-[2px] bg-[#4D66EC]" />
          </div>
          <span className="font-sans text-xs uppercase tracking-wider text-emerald-600 dark:text-emerald-400 font-bold">
            NOW ACCEPTING SELECTIVE CLIENT COMMISSIONS
          </span>
        </div>

        {/* Big Impact Headline */}
        <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] text-gray-950 dark:text-white max-w-4xl uppercase">
          HAVE AN IDEA? <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-400 dark:from-emerald-400 dark:via-teal-300 dark:to-cyan-400">
            LET’S ARCHITECT IT.
          </span>
        </h2>

        <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-700 dark:text-slate-300 max-w-2xl leading-relaxed font-normal">
          From custom web platforms and offline POS systems to autonomous AI agents and zero-downtime cloud infrastructure — partner directly with lead systems architects who deliver.
        </p>

        {/* 3 High-Impact Action CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-6 sm:mt-8">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full font-sans text-xs uppercase tracking-wider font-bold bg-charcoal-950 text-white dark:bg-white dark:text-charcoal-950 hover:bg-emerald-600 dark:hover:bg-emerald-400 dark:hover:text-black transition-all shadow-xl hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Start a Project Brief</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>

          <a
            href={COMPANY_INFO.socials.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full font-sans text-xs uppercase tracking-wider font-bold bg-[#075E54] text-white hover:bg-[#065047] transition-all shadow-md hover:scale-[1.02] active:scale-[0.98]"
          >
            <WhatsAppIcon className="w-4 h-4 text-emerald-300" />
            <span>Fast-Track WhatsApp</span>
          </a>

          <a
            href={`mailto:${COMPANY_INFO.contact.email}`}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs font-sans font-semibold text-gray-700 dark:text-slate-300 hover:text-black dark:hover:text-white bg-white dark:bg-charcoal-900 border border-gray-200 dark:border-graphite/60 hover:border-gray-400 dark:hover:border-slate-500 transition-colors shadow-xs"
          >
            <Mail className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span>{COMPANY_INFO.contact.email}</span>
          </a>
        </div>

        {/* Under-CTA Trust Badges */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mt-8 pt-5 border-t border-gray-200/80 dark:border-graphite/40 font-sans text-xs text-gray-500 dark:text-slate-400 font-medium">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span>Direct Lead Engineers • Zero Account Reps</span>
          </span>
          <span>&bull;</span>
          <span>100% Code &amp; IP Ownership</span>
          <span>&bull;</span>
          <span>Mutual NDA Ready</span>
        </div>

      </div>
    </section>
  );
}
