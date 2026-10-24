import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowLeft, ArrowUpRight, CheckCircle2, ChevronRight, HelpCircle } from 'lucide-react';
import { SERVICES_DATA } from '@/data/services';
import { MagneticButton } from '@/components/common/MagneticButton';
import { Card } from '@/components/common/Card';
import { FinalCTA } from '@/components/home/FinalCTA';

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return SERVICES_DATA.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES_DATA.find((s) => s.slug === slug);

  if (!service) return { title: 'Service Not Found' };

  return {
    title: `${service.title} — Services`,
    description: service.shortDescription,
    openGraph: {
      title: `${service.title} | AREVEX TECH STUDIO`,
      description: service.shortDescription,
    },
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = SERVICES_DATA.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-charcoal-950 text-warmWhite">
      {/* Breadcrumb Navigation */}
      <div className="pt-24 pb-6 border-b border-graphite/40 bg-charcoal-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 text-xs font-mono text-slate-muted">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link href="/services" className="hover:text-white transition-colors">Services</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-white font-medium">{service.title}</span>
        </div>
      </div>

      {/* Hero Header */}
      <section className="py-16 sm:py-24 border-b border-graphite/40 bg-charcoal-900/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-charcoal-800 text-slate-muted border border-graphite/40 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span className="uppercase">{service.category} Practice</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
              {service.title}
            </h1>

            <p className="text-xl sm:text-2xl text-slate-300 font-light leading-relaxed mb-8">
              {service.tagline}
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <MagneticButton href="/contact" size="md" variant="primary">
                <span>Commission This Service</span>
                <ArrowUpRight className="w-4 h-4 ml-1" />
              </MagneticButton>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-sm font-mono text-slate-muted hover:text-white transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>All Capabilities</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Overview & Problem / Solution Grid */}
      <section className="py-20 border-b border-graphite/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-7 flex flex-col gap-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                Detailed Practice Scope
              </h2>
              <p className="text-base text-slate-300 leading-relaxed">
                {service.fullDescription}
              </p>

              {/* Problem vs Solution */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
                <div className="p-6 rounded-2xl bg-rose-950/20 border border-rose-900/40">
                  <span className="font-mono text-xs text-rose-400 uppercase tracking-wider font-semibold">
                    The Industry Problem
                  </span>
                  <p className="text-sm text-rose-200/90 mt-2 leading-relaxed">
                    {service.problem}
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-emerald-950/20 border border-emerald-900/40">
                  <span className="font-mono text-xs text-emerald-400 uppercase tracking-wider font-semibold">
                    The Arevex Solution
                  </span>
                  <p className="text-sm text-emerald-200/90 mt-2 leading-relaxed">
                    {service.solution}
                  </p>
                </div>
              </div>
            </div>

            {/* Sidebar: Deliverables & Tech Stack */}
            <div className="lg:col-span-5 flex flex-col gap-8">
              <Card>
                <h3 className="text-lg font-bold text-white mb-4">Concrete Deliverables</h3>
                <ul className="flex flex-col gap-3">
                  {service.deliverables.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>

              <Card>
                <h3 className="text-lg font-bold text-white mb-4">Core Technology Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {service.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded-lg text-xs font-mono bg-charcoal-800 text-slate-200 border border-graphite/40"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Engineering Process Steps */}
      <section className="py-20 border-b border-graphite/40 bg-charcoal-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="font-mono text-xs uppercase tracking-widest text-slate-muted">Lifecycle</span>
            <h2 className="text-3xl font-bold text-white mt-1">Our Engineering Process</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.process.map((step) => (
              <div
                key={step.step}
                className="p-6 rounded-2xl bg-charcoal-950 border border-graphite/40 flex flex-col justify-between"
              >
                <span className="font-mono text-2xl font-bold text-slate-muted mb-4">
                  {step.step}
                </span>
                <div>
                  <h3 className="font-bold text-base text-white mb-2">{step.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      {service.faqs && service.faqs.length > 0 && (
        <section className="py-20 border-b border-graphite/40">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="font-mono text-xs uppercase tracking-widest text-slate-muted">Frequently Asked</span>
              <h2 className="text-3xl font-bold text-white mt-1">Questions & Answers</h2>
            </div>

            <div className="flex flex-col gap-4">
              {service.faqs.map((faq) => (
                <div
                  key={faq.question}
                  className="p-6 rounded-2xl bg-charcoal-900/60 border border-graphite/40"
                >
                  <div className="flex items-start gap-3">
                    <HelpCircle className="w-5 h-5 text-slate-muted shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-base text-white mb-2">{faq.question}</h4>
                      <p className="text-sm text-slate-300 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <FinalCTA />
    </main>
  );
}
