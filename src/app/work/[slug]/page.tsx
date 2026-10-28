import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { ArrowLeft, ArrowUpRight, CheckCircle2, ChevronRight, Layers } from 'lucide-react';
import { WORK_DATA } from '@/data/work';
import { Card } from '@/components/common/Card';
import { MagneticButton } from '@/components/common/MagneticButton';
import { FinalCTA } from '@/components/home/FinalCTA';

interface WorkPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return WORK_DATA.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: WorkPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = WORK_DATA.find((w) => w.slug === slug);

  if (!project) return { title: 'Project Not Found' };

  return {
    title: `${project.title} — Case Study`,
    description: project.summary,
    openGraph: {
      title: `${project.title} | ARAVEX TECH STUDIO`,
      description: project.summary,
    },
  };
}

export default async function WorkDetailPage({ params }: WorkPageProps) {
  const { slug } = await params;
  const project = WORK_DATA.find((w) => w.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#F7F7F5] dark:bg-charcoal-950 text-charcoal-900 dark:text-warmWhite transition-colors duration-300">
      {/* Breadcrumb Navigation */}
      <div className="pt-24 pb-6 border-b border-gray-200 dark:border-graphite/40 bg-white dark:bg-charcoal-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 text-xs font-mono text-gray-500 dark:text-slate-muted">
          <Link href="/" className="hover:text-black dark:hover:text-white transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link href="/work" className="hover:text-black dark:hover:text-white transition-colors">Work</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-gray-950 dark:text-white font-bold">{project.title}</span>
        </div>
      </div>

      {/* Hero Header */}
      <section className="py-16 sm:py-24 border-b border-gray-200 dark:border-graphite/40 bg-white dark:bg-charcoal-900/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="px-3 py-1 rounded-full text-xs font-mono bg-gray-100 dark:bg-charcoal-800 text-gray-800 dark:text-slate-300 border border-gray-200 dark:border-graphite/40 font-semibold">
                {project.clientType}
              </span>
              <span className="font-mono text-xs text-gray-500 dark:text-slate-muted font-bold">
                {project.category} • {project.year}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-gray-950 dark:text-white mb-6">
              {project.title}
            </h1>

            <p className="text-xl sm:text-2xl text-gray-700 dark:text-slate-300 font-light leading-relaxed mb-8">
              {project.summary}
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <MagneticButton href="/contact" size="md" variant="primary">
                <span>Start a Similar Project</span>
                <ArrowUpRight className="w-4 h-4 ml-1" />
              </MagneticButton>
              <Link
                href="/work"
                className="inline-flex items-center gap-2 text-sm font-mono text-gray-600 dark:text-slate-muted hover:text-black dark:hover:text-white transition-colors font-bold"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>All Projects</span>
              </Link>
            </div>
          </div>

          {/* Architectural System Screenshot / Pipeline Diagram */}
          <div className="mt-12 relative h-72 sm:h-96 md:h-[480px] rounded-3xl overflow-hidden border border-gray-200 dark:border-graphite/50 shadow-2xl">
            <Image
              src={project.image}
              alt={project.title}
              fill
              priority
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white text-xs font-mono">
              <span className="px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20">
                {project.clientType}
              </span>
              <span className="px-3 py-1.5 rounded-full bg-emerald-500/80 font-bold text-white">
                {project.metrics}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Details */}
      <section className="py-20 border-b border-gray-200 dark:border-graphite/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column: Challenge, Solution, Architecture */}
            <div className="lg:col-span-8 flex flex-col gap-10">
              <div className="p-8 rounded-2xl bg-rose-50/70 dark:bg-charcoal-900/60 border border-rose-200 dark:border-graphite/40 shadow-sm">
                <span className="font-mono text-xs text-rose-600 dark:text-rose-400 uppercase tracking-wider font-bold">
                  The Technical Challenge
                </span>
                <p className="text-base text-gray-800 dark:text-slate-200 mt-3 leading-relaxed">
                  {project.challenge}
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-emerald-50/70 dark:bg-charcoal-900/60 border border-emerald-200 dark:border-graphite/40 shadow-sm">
                <span className="font-mono text-xs text-emerald-600 dark:text-emerald-400 uppercase tracking-wider font-bold">
                  The Engineered Solution
                </span>
                <p className="text-base text-gray-800 dark:text-slate-200 mt-3 leading-relaxed">
                  {project.solution}
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-950 dark:text-white mb-4">Architecture & Topology</h3>
                <div className="p-6 rounded-2xl bg-white dark:bg-charcoal-950 border border-gray-200 dark:border-graphite/50 font-mono text-sm text-gray-900 dark:text-slate-200 leading-relaxed shadow-sm">
                  <div className="flex items-center gap-2 text-gray-600 dark:text-slate-400 mb-2 text-xs uppercase tracking-wider font-bold">
                    <Layers className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    <span>System Pipeline</span>
                  </div>
                  {project.architecture}
                </div>
              </div>
            </div>

            {/* Right Column: Highlights & Stack */}
            <div className="lg:col-span-4 flex flex-col gap-6">
              <Card>
                <h3 className="text-lg font-bold text-gray-950 dark:text-white mb-4">Key Capabilities</h3>
                <div className="flex flex-col gap-3">
                  {project.keyHighlights.map((h) => (
                    <div key={h} className="flex items-start gap-2.5 text-sm text-gray-800 dark:text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </Card>

              <Card>
                <h3 className="text-lg font-bold text-gray-950 dark:text-white mb-4">Technologies Employed</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1.5 rounded-lg text-xs font-mono bg-gray-100 dark:bg-charcoal-800 text-gray-800 dark:text-slate-200 border border-gray-200 dark:border-graphite/40 font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <FinalCTA />
    </main>
  );
}
