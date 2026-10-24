'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { SectionHeading } from '@/components/common/SectionHeading';
import { Card } from '@/components/common/Card';
import { WORK_DATA } from '@/data/work';
import { FinalCTA } from '@/components/home/FinalCTA';

const CATEGORIES = ['All', 'AI & Data Engineering', 'Cloud & DevOps', 'Full-Stack Engineering', 'Web & Operations', 'Cloud & Systems'];

export default function WorkPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects =
    selectedCategory === 'All'
      ? WORK_DATA
      : WORK_DATA.filter((w) => w.category === selectedCategory);

  return (
    <main className="min-h-screen bg-charcoal-950 text-warmWhite">
      {/* Header */}
      <section className="pt-24 pb-16 border-b border-graphite/40 bg-charcoal-900/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="PORTFOLIO & CASE STUDIES"
            title="Selected Engineering Projects."
            description="Verified software systems, cloud pipelines, and internal engineering concepts built with architectural precision. Authentic proof of capability."
          />

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 pt-4">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => setSelectedCategory(c)}
                className={`px-4 py-2 rounded-full text-xs font-mono transition-all duration-200 border ${
                  selectedCategory === c
                    ? 'bg-warmWhite text-charcoal-900 border-transparent font-bold'
                    : 'bg-charcoal-850/80 text-slate-300 border-graphite/40 hover:border-slate-muted'
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

      <FinalCTA />
    </main>
  );
}
