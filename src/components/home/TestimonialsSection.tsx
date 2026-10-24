'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, CheckCircle2, Building2, MapPin } from 'lucide-react';
import { SectionHeading } from '@/components/common/SectionHeading';
import { Card } from '@/components/common/Card';
import { TESTIMONIALS_DATA } from '@/data/testimonials';

export function TestimonialsSection() {
  return (
    <section className="relative py-24 sm:py-32 bg-[#F7F7F5] dark:bg-charcoal-950 text-charcoal-900 dark:text-warmWhite border-t border-b border-gray-200 dark:border-graphite/40 transition-colors duration-300 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="CLIENT VOICES & PROOF"
          title="Engineered for High-Stakes Operations."
          description="Hear from retail directors, enterprise CTOs, and healthcare administrators running their mission-critical operations on Arevex software and cloud infrastructure."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS_DATA.map((t, idx) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (idx % 3) * 0.1, duration: 0.5 }}
            >
              <Card className="h-full flex flex-col justify-between bg-white dark:bg-charcoal-900 border-gray-200 dark:border-graphite/40 shadow-sm hover:shadow-xl transition-all">
                <div>
                  {/* Top Bar: Stars & Project Tag */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className="font-mono text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold border border-emerald-500/20">
                      Verified Client
                    </span>
                  </div>

                  {/* Project Tag */}
                  <div className="mb-4">
                    <span className="font-mono text-xs text-slate-500 dark:text-slate-muted block font-semibold">
                      {t.projectTag}
                    </span>
                  </div>

                  {/* Quote */}
                  <p className="text-sm sm:text-base text-gray-700 dark:text-slate-300 leading-relaxed italic mb-6">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>

                {/* Author Info */}
                <div className="pt-4 border-t border-gray-100 dark:border-graphite/30 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full bg-gradient-to-tr ${t.avatarBg} flex items-center justify-center text-white font-bold text-sm shadow-md`}>
                      {t.name.split(' ').map((n) => n[0]).join('')}
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-gray-900 dark:text-white leading-tight">
                        {t.name}
                      </h4>
                      <p className="text-xs text-gray-500 dark:text-slate-muted leading-tight mt-0.5">
                        {t.role}, {t.company}
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
