'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';
import { SectionHeading } from '@/components/common/SectionHeading';
import { Card } from '@/components/common/Card';
import { WORK_DATA } from '@/data/work';

export function SelectedWork() {
  const featuredWork = WORK_DATA.filter((w) => w.featured).slice(0, 4);

  return (
    <section id="work" className="relative py-24 sm:py-32 bg-white dark:bg-charcoal-900 text-charcoal-900 dark:text-warmWhite overflow-hidden border-t border-b border-gray-200 dark:border-graphite/40 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <SectionHeading
            eyebrow="06 / CLIENT WORK & ARCHITECTURES"
            title="Selected Engineering Partnerships."
            description="Verified production software, high-speed retail checkout clusters, and automated DevSecOps pipelines engineered by Arevex Tech Studio."
            className="mb-0"
          />
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-sm font-mono text-gray-600 dark:text-slate-muted hover:text-black dark:hover:text-white transition-colors duration-200 shrink-0 pb-2 font-bold"
          >
            <span>View All Engineering Showcases</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Portfolio Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredWork.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
            >
              <Link href={`/work/${project.slug}`} className="block h-full group">
                <Card className="h-full flex flex-col justify-between bg-[#F7F7F5] dark:bg-charcoal-950/60 border-gray-200 dark:border-graphite/40 group-hover:border-slate-500 dark:group-hover:border-slate-muted/60 transition-all duration-300 shadow-sm hover:shadow-2xl overflow-hidden p-6 sm:p-7">
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

                    <p className="text-sm sm:text-base text-gray-700 dark:text-slate-200 leading-relaxed mb-6 font-normal">
                      {project.summary}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.technologies.slice(0, 5).map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-md text-xs font-mono bg-white dark:bg-charcoal-850 text-gray-800 dark:text-slate-200 border border-gray-200 dark:border-graphite/40 font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-200 dark:border-graphite/30 flex items-center justify-between">
                    <span className="text-xs sm:text-sm font-sans text-gray-600 dark:text-slate-300 font-medium">
                      {project.clientType.split('//')[1] || project.year}
                    </span>
                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-gray-950 dark:text-white group-hover:translate-x-1 transition-transform duration-200">
                      <span>Explore Architecture</span>
                      <ArrowUpRight className="w-4 h-4 text-emerald-500" />
                    </span>
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
