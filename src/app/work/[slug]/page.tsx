import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowLeft, ArrowUpRight, CheckCircle2, ChevronRight, Layers, Cpu, ShieldCheck } from 'lucide-react';
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
      title: `${project.title} | AREVEX TECH STUDIO`,
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
    <main className="min-h-screen bg-charcoal-950 text-warmWhite">
      {/* Breadcrumb Navigation */}
      <div className="pt-24 pb-6 border-b border-graphite/40 bg-charcoal-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 text-xs font-mono text-slate-muted">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link href="/work" className="hover:text-white transition-colors">Work</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-white font-medium">{project.title}</span>
        </div>
      </div>

      {/* Hero Header */}
      <section className="py-16 sm:py-24 border-b border-graphite/40 bg-charcoal-900/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="px-3 py-1 rounded-full text-xs font-mono bg-charcoal-800 text-slate-300 border border-graphite/40">
                {project.clientType}
              </span>
              <span className="font-mono text-xs text-slate-muted">
                {project.category} • {project.year}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6">
              {project.title}
            </h1>

            <p className="text-xl sm:text-2xl text-slate-300 font-light leading-relaxed mb-8">
              {project.summary}
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <MagneticButton href="/contact" size="md" variant="primary">
                <span>Inquire About Similar Architecture</span>
                <ArrowUpRight className="w-4 h-4 ml-1" />
              </MagneticButton>
              <Link
                href="/work"
                className="inline-flex items-center gap-2 text-sm font-mono text-slate-muted hover:text-white transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>All Projects</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Details */}
      <section className="py-20 border-b border-graphite/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column: Challenge, Solution, Architecture */}
            <div className="lg:col-span-8 flex flex-col gap-10">
              <div className="p-8 rounded-2xl bg-charcoal-900/60 border border-graphite/40">
                <span className="font-mono text-xs text-rose-400 uppercase tracking-wider font-semibold">
                  The Technical Challenge
                </span>
                <p className="text-base text-slate-200 mt-3 leading-relaxed">
                  {project.challenge}
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-charcoal-900/60 border border-graphite/40">
                <span className="font-mono text-xs text-emerald-400 uppercase tracking-wider font-semibold">
                  The Engineered Solution
                </span>
                <p className="text-base text-slate-200 mt-3 leading-relaxed">
                  {project.solution}
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Architecture & Topology</h3>
                <div className="p-6 rounded-2xl bg-charcoal-950 border border-graphite/50 font-mono text-sm text-slate-300 leading-relaxed">
                  <div className="flex items-center gap-2 text-slate-muted mb-2 text-xs uppercase tracking-wider">
                    <Layers className="w-4 h-4 text-slate-muted" />
                    <span>System Pipeline</span>
                  </div>
                  {project.architecture}
                </div>
              </div>
            </div>

            {/* Right Column: Highlights & Stack */}
            <div className="lg:col-span-4 flex flex-col gap-6">
              <Card>
                <h3 className="text-lg font-bold text-white mb-4">Key Capabilities</h3>
                <div className="flex flex-col gap-3">
                  {project.keyHighlights.map((h) => (
                    <div key={h} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </Card>

              <Card>
                <h3 className="text-lg font-bold text-white mb-4">Technologies Employed</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1.5 rounded-lg text-xs font-mono bg-charcoal-800 text-slate-200 border border-graphite/40"
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
