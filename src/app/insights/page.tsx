import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowUpRight, Clock } from 'lucide-react';
import { SectionHeading } from '@/components/common/SectionHeading';
import { Card } from '@/components/common/Card';
import { INSIGHTS_DATA } from '@/data/insights';
import { FinalCTA } from '@/components/home/FinalCTA';

export const metadata: Metadata = {
  title: 'Engineering Insights & Architectural Papers — AREVEX',
  description:
    'Deep architectural analysis on autonomous AI agents, DevSecOps pipelines, offline-first POS systems, and Generative Engine Optimization.',
};

export default function InsightsPage() {
  return (
    <main className="min-h-screen bg-[#F7F7F5] dark:bg-charcoal-950 text-charcoal-900 dark:text-warmWhite transition-colors duration-300">
      {/* Header */}
      <section className="pt-24 pb-16 border-b border-gray-200 dark:border-graphite/40 bg-white dark:bg-charcoal-900/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="ENGINEERING INSIGHTS & PAPERS"
            title="Technical Insights."
            description="Deep analysis, architectural patterns, and production retrospectives authored by the Arevex engineering team."
          />
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {INSIGHTS_DATA.map((article) => (
              <Link key={article.id} href={`/insights/${article.slug}`} className="block h-full group">
                <Card className="h-full flex flex-col justify-between bg-white dark:bg-charcoal-850/80 border-gray-200 dark:border-graphite/40 group-hover:border-slate-500 dark:group-hover:border-slate-muted/60 transition-all duration-300 shadow-sm hover:shadow-xl">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 rounded-full text-xs font-mono bg-gray-100 dark:bg-charcoal-800 text-gray-800 dark:text-slate-300 border border-gray-200 dark:border-graphite/40 font-semibold">
                        {article.category}
                      </span>
                      <div className="flex items-center gap-3 text-xs font-mono text-gray-500 dark:text-slate-muted">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          {article.readTime}
                        </span>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-950 dark:text-white group-hover:text-black dark:group-hover:text-slate-200 transition-colors mb-3 leading-snug">
                      {article.title}
                    </h3>

                    <p className="text-sm text-gray-600 dark:text-slate-400 leading-relaxed mb-6">
                      {article.excerpt}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {article.tags.map((t) => (
                        <span key={t} className="px-2 py-0.5 rounded text-[10px] font-mono bg-gray-100 dark:bg-charcoal-800/80 text-gray-600 dark:text-slate-muted font-medium">
                          #{t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-200 dark:border-graphite/40 flex items-center justify-between text-xs font-mono text-gray-500 dark:text-slate-muted group-hover:text-black dark:group-hover:text-white transition-colors">
                    <span>{article.publishDate} • {article.author}</span>
                    <span className="flex items-center gap-1 font-bold">
                      Read Paper <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </main>
  );
}
