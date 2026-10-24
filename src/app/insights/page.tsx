import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowUpRight, Clock, Calendar, Tag } from 'lucide-react';
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
    <main className="min-h-screen bg-charcoal-950 text-warmWhite">
      {/* Header */}
      <section className="pt-24 pb-16 border-b border-graphite/40 bg-charcoal-900/60">
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
                <Card className="h-full flex flex-col justify-between group-hover:border-slate-muted/60 transition-all duration-300">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 rounded-full text-xs font-mono bg-charcoal-800 text-slate-300 border border-graphite/40">
                        {article.category}
                      </span>
                      <div className="flex items-center gap-3 text-xs font-mono text-slate-muted">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          {article.readTime}
                        </span>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-white group-hover:text-slate-200 transition-colors mb-3 leading-snug">
                      {article.title}
                    </h3>

                    <p className="text-sm text-slate-400 leading-relaxed mb-6">
                      {article.excerpt}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {article.tags.map((t) => (
                        <span key={t} className="px-2 py-0.5 rounded text-[10px] font-mono bg-charcoal-800/80 text-slate-muted">
                          #{t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-graphite/40 flex items-center justify-between text-xs font-mono text-slate-muted group-hover:text-white transition-colors">
                    <span>{article.publishDate} • {article.author}</span>
                    <span className="flex items-center gap-1">
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
