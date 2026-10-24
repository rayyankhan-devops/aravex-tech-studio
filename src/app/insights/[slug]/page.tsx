import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowLeft, ArrowUpRight, ChevronRight, Clock, Calendar, CheckCircle2 } from 'lucide-react';
import { INSIGHTS_DATA } from '@/data/insights';
import { Card } from '@/components/common/Card';
import { FinalCTA } from '@/components/home/FinalCTA';

interface InsightPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return INSIGHTS_DATA.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: InsightPageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = INSIGHTS_DATA.find((a) => a.slug === slug);

  if (!article) return { title: 'Article Not Found' };

  return {
    title: `${article.title} — Insights`,
    description: article.excerpt,
    openGraph: {
      title: `${article.title} | AREVEX TECH STUDIO`,
      description: article.excerpt,
    },
  };
}

export default async function InsightDetailPage({ params }: InsightPageProps) {
  const { slug } = await params;
  const article = INSIGHTS_DATA.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-charcoal-950 text-warmWhite">
      {/* Breadcrumbs */}
      <div className="pt-24 pb-6 border-b border-graphite/40 bg-charcoal-900/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 text-xs font-mono text-slate-muted">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link href="/insights" className="hover:text-white transition-colors">Insights</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-white font-medium truncate">{article.title}</span>
        </div>
      </div>

      {/* Header */}
      <section className="py-16 sm:py-24 border-b border-graphite/40 bg-charcoal-900/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-muted mb-6">
            <span className="px-3 py-1 rounded-full bg-charcoal-800 text-slate-300 border border-graphite/40">
              {article.category}
            </span>
            <span>{article.publishDate}</span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {article.readTime}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">
            {article.title}
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 font-light leading-relaxed mb-6">
            {article.excerpt}
          </p>

          <div className="flex items-center justify-between pt-6 border-t border-graphite/40 text-xs font-mono text-slate-muted">
            <span>Authored by: <strong className="text-white font-sans">{article.author}</strong></span>
            <Link href="/insights" className="inline-flex items-center gap-1 hover:text-white">
              <ArrowLeft className="w-3.5 h-3.5" /> All Insights
            </Link>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-20 border-b border-graphite/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12 text-slate-300 leading-relaxed text-base sm:text-lg">
          {article.content.map((section, idx) => (
            <div key={idx} className="flex flex-col gap-6">
              {section.subheading && (
                <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight pt-4">
                  {section.subheading}
                </h2>
              )}

              {section.paragraphs.map((p, pIdx) => (
                <p key={pIdx} className="leading-relaxed">
                  {p}
                </p>
              ))}

              {section.takeaways && section.takeaways.length > 0 && (
                <div className="my-4 p-6 sm:p-8 rounded-2xl bg-charcoal-900 border border-graphite/50">
                  <span className="font-mono text-xs uppercase tracking-wider text-emerald-400 font-bold block mb-4">
                    Architectural Takeaways
                  </span>
                  <div className="flex flex-col gap-3">
                    {section.takeaways.map((item, tIdx) => (
                      <div key={tIdx} className="flex items-start gap-3 text-sm text-slate-200">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}

          {/* Tags */}
          <div className="pt-8 border-t border-graphite/40 flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono text-slate-muted mr-2">Tags:</span>
            {article.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full text-xs font-mono bg-charcoal-900 border border-graphite/40 text-slate-300"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </article>

      <FinalCTA />
    </main>
  );
}
