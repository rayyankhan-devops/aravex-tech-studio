'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, Mail } from 'lucide-react';
import { MagneticButton } from '@/components/common/MagneticButton';
import { COMPANY_INFO } from '@/lib/brand';

export function FinalCTA() {
  return (
    <section className="relative py-28 sm:py-36 bg-charcoal-950 text-warmWhite overflow-hidden border-t border-graphite/40">
      {/* Subtle radial background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-slate-muted/10 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-charcoal-900 border border-graphite/50 mb-8">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-mono text-xs uppercase tracking-widest text-slate-300">
            ACCEPTING NEW CLIENT COMMISSIONS & PARTNERSHIPS
          </span>
        </div>

        <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.02] text-white max-w-4xl">
          HAVE AN IDEA? <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-300 to-slate-500">
            LET’S BUILD IT.
          </span>
        </h2>

        <p className="mt-8 text-base sm:text-xl text-slate-300 max-w-2xl leading-relaxed">
          From custom software platforms and point-of-sale systems to autonomous AI agents and cloud infrastructure — partner with a studio that delivers what’s next.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mt-10">
          <MagneticButton href="/contact" size="lg" variant="primary">
            <span>Start a Project</span>
            <ArrowUpRight className="w-4 h-4 ml-1" />
          </MagneticButton>

          <a
            href={`mailto:${COMPANY_INFO.contact.email}`}
            className="inline-flex items-center gap-2 px-6 py-4 rounded-full text-base font-medium font-mono text-slate-300 hover:text-white border border-graphite/50 hover:border-slate-muted/60 transition-colors"
          >
            <Mail className="w-4 h-4" />
            <span>{COMPANY_INFO.contact.email}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
