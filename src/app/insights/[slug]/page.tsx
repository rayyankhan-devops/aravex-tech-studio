import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowLeft, ArrowUpRight, ChevronRight, Clock, CheckCircle2 } from 'lucide-react';
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
    <main className="min-h-screen bg-[#F7F7F5] dark:bg-charcoal-950 text-charcoal-900 dark:text-warmWhite transition-colors duration-300">
      {/* Breadcrumbs */}
      <div className="pt-24 pb-6 border-b border-gray-200 dark:border-graphite/40 bg-white dark:bg-charcoal-900/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 text-xs font-mono text-gray-500 dark:text-slate-muted">
          <Link href="/" className="hover:text-black dark:hover:text-white transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link href="/insights" className="hover:text-black dark:hover:text-white transition-colors">Insights</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-gray-950 dark:text-white font-bold truncate">{article.title}</span>
        </div>
      </div>

      {/* Header */}
      <section className="py-16 sm:py-24 border-b border-gray-200 dark:border-graphite/40 bg-white dark:bg-charcoal-900/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-gray-500 dark:text-slate-muted mb-6">
            <span className="px-3 py-1 rounded-full bg-gray-100 dark:bg-charcoal-800 text-gray-800 dark:text-slate-300 border border-gray-200 dark:border-graphite/40 font-semibold">
              {article.category}
            </span>
            <span>{article.publishDate}</span>
            <span>•</span>
            <span className="flex items-center gap-1 font-semibold">
              <Clock className="w-3.5 h-3.5" />
              {article.readTime}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-gray-950 dark:text-white mb-6 leading-tight">
            {article.title}
          </h1>

          <p className="text-lg sm:text-xl text-gray-700 dark:text-slate-300 font-light leading-relaxed mb-6">
            {article.excerpt}
          </p>

          <div className="flex items-center justify-between pt-6 border-t border-gray-200 dark:border-graphite/40 text-xs font-mono text-gray-500 dark:text-slate-muted">
            <span>Authored by: <strong className="text-gray-900 dark:text-white font-sans">{article.author}</strong></span>
            <Link href="/insights" className="inline-flex items-center gap-1 hover:text-black dark:hover:text-white font-bold">
              <ArrowLeft className="w-3.5 h-3.5" /> All Insights
            </Link>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-20 border-b border-gray-200 dark:border-graphite/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12 text-gray-800 dark:text-slate-300 leading-relaxed text-base sm:text-lg">
          {article.content.map((section, idx) => (
            <div key={idx} className="flex flex-col gap-6">
              {section.subheading && (
                <h2 className="text-2xl sm:text-3xl font-black text-gray-950 dark:text-white tracking-tight pt-4">
                  {section.subheading}
                </h2>
              )}

              {section.paragraphs.map((p, pIdx) => (
                <p key={pIdx} className="leading-relaxed">
                  {p}
                </p>
              ))}

              {section.takeaways && section.takeaways.length > 0 && (
                <div className="my-4 p-6 sm:p-8 rounded-2xl bg-white dark:bg-charcoal-900 border border-gray-200 dark:border-graphite/50 shadow-md">
                  <span className="font-mono text-xs uppercase tracking-wider text-emerald-600 dark:text-emerald-400 font-bold block mb-4">
                    Architectural Takeaways
                  </span>
                  <div className="flex flex-col gap-3">
                    {section.takeaways.map((item, tIdx) => (
                      <div key={tIdx} className="flex items-start gap-3 text-sm text-gray-800 dark:text-slate-200 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}

          {/* Tags */}
          <div className="pt-8 border-t border-gray-200 dark:border-graphite/40 flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono text-gray-500 dark:text-slate-muted mr-2 font-bold">Tags:</span>
            {article.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full text-xs font-mono bg-white dark:bg-charcoal-900 border border-gray-200 dark:border-graphite/40 text-gray-700 dark:text-slate-300 shadow-sm"
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
