'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { SectionHeading } from '@/components/common/SectionHeading';
import { Card } from '@/components/common/Card';
import { WORK_DATA } from '@/data/work';

export function SelectedWork() {
  const featuredWork = WORK_DATA.filter((w) => w.featured).slice(0, 4);

  return (
    <section id="work" className="relative py-24 sm:py-32 bg-charcoal-900 text-warmWhite overflow-hidden border-t border-graphite/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <SectionHeading
            eyebrow="06 / PORTFOLIO & LABS"
            title="Selected Engineering Work."
            description="Production software, verified cloud pipelines, and internal research initiatives engineered by Arevex Tech Studio."
            className="mb-0"
          />
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-sm font-mono text-slate-muted hover:text-white transition-colors duration-200 shrink-0 pb-2"
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
                <Card className="h-full flex flex-col justify-between group-hover:border-slate-muted/60 transition-all duration-300">
                  <div>
                    <div className="flex items-center justify-between gap-3 mb-6">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-charcoal-800 text-slate-300 border border-graphite/40">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        {project.clientType}
                      </span>
                      <span className="font-mono text-xs text-slate-muted">{project.year}</span>
                    </div>

                    <h3 className="text-2xl font-bold text-white group-hover:text-slate-200 transition-colors mb-3 leading-tight">
                      {project.title}
                    </h3>

                    <p className="text-sm text-slate-400 leading-relaxed mb-6">
                      {project.summary}
                    </p>

                    <div className="flex flex-col gap-2 pt-2 border-t border-graphite/30 mb-6">
                      {project.keyHighlights.slice(0, 3).map((highlight) => (
                        <div key={highlight} className="flex items-center gap-2 text-xs text-slate-400">
                          <CheckCircle2 className="w-3.5 h-3.5 text-slate-muted shrink-0" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-graphite/40 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span key={tech} className="px-2 py-0.5 rounded bg-charcoal-800/80 text-slate-muted">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <span className="inline-flex items-center gap-1 text-slate-muted group-hover:text-white transition-colors">
                      Case Study <ArrowUpRight className="w-3.5 h-3.5" />
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
