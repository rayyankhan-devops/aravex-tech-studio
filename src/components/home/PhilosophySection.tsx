'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/common/SectionHeading';
import { COMPANY_INFO } from '@/lib/brand';

export function PhilosophySection() {
  return (
    <section className="relative py-24 sm:py-32 bg-[#F7F7F5] dark:bg-charcoal-950 text-charcoal-900 dark:text-warmWhite overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="05 — METHODOLOGY"
          title="Architected for Certainty."
          description="We do not guess, cut corners, or leave codebases in disrepair. Our six-stage engineering lifecycle guarantees predictable milestones and flawless software delivery."
        />

        {/* 6-Stage Polished Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          {COMPANY_INFO.developmentPhilosophy.map((phase, idx) => (
            <motion.div
              key={phase.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="relative p-8 rounded-2xl bg-white dark:bg-charcoal-900/60 border border-gray-200 dark:border-graphite/40 hover:border-slate-500 dark:hover:border-slate-muted/50 transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-xl"
            >
              {/* Step Number with architectural accent */}
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-3xl font-black text-gray-300 dark:text-slate-muted/40 group-hover:text-slate-700 dark:group-hover:text-slate-muted transition-colors">
                  {phase.step}
                </span>
                <span className="w-2.5 h-2.5 rounded-full bg-gray-300 dark:bg-slate-muted/40 group-hover:bg-emerald-500 transition-colors" />
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-black dark:group-hover:text-slate-200 transition-colors">
                  {phase.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-slate-400 leading-relaxed">
                  {phase.description}
                </p>
              </div>

              {/* Progress bar accent */}
              <div className="mt-8 pt-4 border-t border-gray-100 dark:border-graphite/30 flex items-center justify-between text-[11px] font-mono text-gray-500 dark:text-slate-muted font-bold">
                <span>STAGE {phase.step} OF 06</span>
                <span className="text-emerald-600 dark:text-emerald-400">VERIFIED</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
