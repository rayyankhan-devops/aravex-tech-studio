'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';
import { SectionHeading } from '@/components/common/SectionHeading';
import { Card } from '@/components/common/Card';
import { WORK_DATA } from '@/data/work';
import { FinalCTA } from '@/components/home/FinalCTA';

const CATEGORIES = [
  'All',
  'Cloud & DevOps Engineering',
  'Custom Systems & Embedded Hardware',
  'Full-Stack Engineering & Scalability',
  'AI & Data Engineering',
  'Enterprise Software & Logistics',
  'Healthcare Software & Web',
];

export default function WorkPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects =
    selectedCategory === 'All'
      ? WORK_DATA
      : WORK_DATA.filter((w) => w.category === selectedCategory);

  return (
    <main className="min-h-screen bg-[#F7F7F5] dark:bg-charcoal-950 text-charcoal-900 dark:text-warmWhite transition-colors duration-300">
      {/* Header */}
      <section className="pt-24 pb-16 border-b border-gray-200 dark:border-graphite/40 bg-white dark:bg-charcoal-900/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="CLIENT ARCHITECTURES & DELIVERABLES"
            title="Selected Engineering Partnerships."
            description="Production software, verified cloud DevSecOps pipelines, offline-first POS systems, and autonomous AI architectures engineered by Arevex Tech Studio."
          />

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 pt-4">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => setSelectedCategory(c)}
                className={`px-4 py-2 rounded-full text-xs font-mono transition-all duration-200 border cursor-pointer ${
                  selectedCategory === c
                    ? 'bg-charcoal-950 text-white dark:bg-warmWhite dark:text-charcoal-900 border-transparent font-bold shadow-sm'
                    : 'bg-white dark:bg-charcoal-850/80 text-gray-700 dark:text-slate-300 border-gray-300 dark:border-graphite/40 hover:border-slate-500'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: (idx % 2) * 0.1 }}
              >
                <Link href={`/work/${project.slug}`} className="block h-full group">
                  <Card className="h-full flex flex-col justify-between bg-white dark:bg-charcoal-850/80 border-gray-200 dark:border-graphite/40 group-hover:border-slate-500 dark:group-hover:border-slate-muted/60 transition-all duration-300 shadow-sm hover:shadow-2xl overflow-hidden p-6 sm:p-7">
                    <div>
                      {/* Visual Project Screenshot Preview */}
                      <div className="relative h-52 sm:h-64 -mx-6 sm:-mx-7 -mt-6 sm:-mt-7 mb-6 overflow-hidden border-b border-gray-200 dark:border-graphite/40">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                        <div className="absolute top-4 left-4">
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-black/60 backdrop-blur-md text-emerald-400 border border-emerald-500/30 font-semibold shadow-md">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                            <span>{project.clientType.split('//')[0]}</span>
                          </span>
                        </div>
                        <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[11px] font-mono text-white/95">
                          <span className="px-2.5 py-1 rounded-md bg-black/70 backdrop-blur-md border border-white/10 font-bold">
                            {project.category}
                          </span>
                          <span className="px-2.5 py-1 rounded-md bg-emerald-500/80 font-bold text-white shadow-sm">
                            {project.metrics}
                          </span>
                        </div>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-black text-gray-950 dark:text-white group-hover:text-black dark:group-hover:text-slate-200 transition-colors mb-3 leading-snug">
                        {project.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-6">
                        {project.summary}
                      </p>

                      <div className="flex flex-col gap-2 pt-2 border-t border-gray-100 dark:border-graphite/30 mb-6">
                        {project.keyHighlights.slice(0, 3).map((highlight) => (
                          <div key={highlight} className="flex items-center gap-2 text-xs text-gray-600 dark:text-slate-400">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                            <span>{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-gray-200 dark:border-graphite/40 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.slice(0, 4).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 rounded bg-gray-100 dark:bg-charcoal-800/80 text-gray-700 dark:text-slate-muted border border-gray-200 dark:border-transparent font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <span className="inline-flex items-center gap-1 text-gray-700 dark:text-slate-muted group-hover:text-black dark:group-hover:text-white transition-colors font-bold">
                        <span>Read Case Study</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-emerald-500" />
                      </span>
                    </div>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </main>
  );
}
