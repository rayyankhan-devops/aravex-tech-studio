'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ShieldCheck, Cpu, Layout, MessageSquare, Wrench } from 'lucide-react';
import { SectionHeading } from '@/components/common/SectionHeading';
import { COMPANY_INFO } from '@/lib/brand';

const ICONS = [Cpu, Layout, CheckCircle2, ShieldCheck, MessageSquare, Wrench];

export function WhySection() {
  return (
    <section className="relative py-24 sm:py-32 bg-charcoal-900 text-warmWhite overflow-hidden border-t border-graphite/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="08 / OPERATIONAL PRINCIPLES"
          title="Why Leading Teams Choose Arevex."
          description="We do not rely on marketing buzzwords or boilerplate templates. Our reputation is built on concrete engineering rigor, transparent collaboration, and operational resilience."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {COMPANY_INFO.workingPractices.map((practice, idx) => {
            const Icon = ICONS[idx] || CheckCircle2;
            return (
              <motion.div
                key={practice.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="p-8 rounded-2xl bg-charcoal-950/60 border border-graphite/40 hover:border-slate-muted/50 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-charcoal-850 border border-graphite/40 flex items-center justify-center text-slate-light mb-6">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {practice.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {practice.desc}
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-graphite/30 font-mono text-[11px] text-slate-muted">
                  PRINCIPLE 0{idx + 1}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
