import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { ArrowLeft, ArrowUpRight, CheckCircle2, ChevronRight, HelpCircle } from 'lucide-react';
import { SERVICES_DATA } from '@/data/services';
import { MagneticButton } from '@/components/common/MagneticButton';
import { Card } from '@/components/common/Card';
import { BRAND_ASSETS } from '@/lib/brand';
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
      title: `${service.title} | ARAVEX TECH STUDIO`,
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

  const getServiceImage = (serviceSlug: string) => {
    switch (serviceSlug) {
      case 'web-development':
        return BRAND_ASSETS.generated.serviceWebDev;
      case 'mobile-app-development':
        return BRAND_ASSETS.generated.serviceMobileApp;
      case 'custom-desktop-software':
        return BRAND_ASSETS.generated.serviceDesktop;
      case 'ai-agents':
        return BRAND_ASSETS.generated.serviceAiAgents;
      case 'ai-chatbots':
        return BRAND_ASSETS.generated.serviceAiChatbots;
      case 'whatsapp-automation':
        return BRAND_ASSETS.generated.serviceWhatsapp;
      case 'cloud-engineering':
        return BRAND_ASSETS.generated.serviceCloudAws;
      case 'devops-devsecops':
        return BRAND_ASSETS.generated.cicdPipeline;
      case 'ui-ux-design':
        return BRAND_ASSETS.generated.serviceUiux;
      case 'social-media-management':
        return BRAND_ASSETS.generated.serviceSocial;
      case 'seo-geo':
        return BRAND_ASSETS.generated.serviceSeoGeo;
      case 'business-process-automation':
        return BRAND_ASSETS.generated.serviceAutomation;
      default:
        return BRAND_ASSETS.generated.serviceSoftware;
    }
  };

  return (
    <main className="min-h-screen bg-[#F7F7F5] dark:bg-charcoal-950 text-charcoal-900 dark:text-warmWhite transition-colors duration-300">
      {/* Breadcrumb Navigation */}
      <div className="pt-24 pb-6 border-b border-gray-200 dark:border-graphite/40 bg-white dark:bg-charcoal-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 text-xs font-mono text-gray-500 dark:text-slate-muted">
          <Link href="/" className="hover:text-black dark:hover:text-white transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link href="/services" className="hover:text-black dark:hover:text-white transition-colors">Services</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-gray-950 dark:text-white font-bold">{service.title}</span>
        </div>
      </div>

      {/* Hero Header */}
      <section className="py-16 sm:py-24 border-b border-gray-200 dark:border-graphite/40 bg-white dark:bg-charcoal-900/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-gray-100 dark:bg-charcoal-800 text-gray-700 dark:text-slate-muted border border-gray-200 dark:border-graphite/40 mb-6 font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span className="uppercase">{service.category} Practice</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-gray-950 dark:text-white mb-6">
              {service.title}
            </h1>

            <p className="text-xl sm:text-2xl text-gray-700 dark:text-slate-300 font-light leading-relaxed mb-8">
              {service.tagline}
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <MagneticButton href="/contact" size="md" variant="primary">
                <span>Start a Project</span>
                <ArrowUpRight className="w-4 h-4 ml-1" />
              </MagneticButton>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-sm font-mono text-gray-600 dark:text-slate-muted hover:text-black dark:hover:text-white transition-colors font-bold"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>All Capabilities</span>
              </Link>
            </div>
          </div>

          {/* Architectural Service Showcase */}
          <div className="mt-12 relative h-72 sm:h-96 md:h-[480px] rounded-3xl overflow-hidden border border-gray-200 dark:border-graphite/50 shadow-2xl bg-charcoal-900">
            <Image
              src={service.image || getServiceImage(service.slug)}
              alt={service.title}
              fill
              priority
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white text-xs font-mono">
              <span className="px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20">
                {service.title} • Production Practice
              </span>
              <span className="px-3 py-1.5 rounded-full bg-emerald-500/80 font-bold text-white">
                SLA Guaranteed • Enterprise Caliber
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Overview & Problem / Solution Grid */}
      <section className="py-20 border-b border-gray-200 dark:border-graphite/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-7 flex flex-col gap-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-950 dark:text-white">
                Detailed Practice Scope
              </h2>
              <p className="text-base sm:text-lg text-gray-800 dark:text-slate-200 leading-relaxed font-normal">
                {service.fullDescription}
              </p>

              {/* Problem vs Solution */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
                <div className="p-6 rounded-2xl bg-rose-50 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-900/40">
                  <span className="font-mono text-xs text-rose-600 dark:text-rose-400 uppercase tracking-wider font-bold">
                    The Industry Problem
                  </span>
                  <p className="text-sm text-gray-800 dark:text-rose-200 mt-2 leading-relaxed">
                    {service.problem}
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900/40">
                  <span className="font-mono text-xs text-emerald-600 dark:text-emerald-400 uppercase tracking-wider font-bold">
                    The Aravex Solution
                  </span>
                  <p className="text-sm text-gray-800 dark:text-emerald-200 mt-2 leading-relaxed">
                    {service.solution}
                  </p>
                </div>
              </div>
            </div>

            {/* Sidebar: Deliverables & Tech Stack */}
            <div className="lg:col-span-5 flex flex-col gap-8">
              <Card>
                <h3 className="text-lg font-bold text-gray-950 dark:text-white mb-4">Concrete Deliverables</h3>
                <ul className="flex flex-col gap-3">
                  {service.deliverables.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-gray-800 dark:text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>

              <Card>
                <h3 className="text-lg font-bold text-gray-950 dark:text-white mb-4">Core Technology Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {service.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded-lg text-xs font-mono bg-gray-100 dark:bg-charcoal-800 text-gray-800 dark:text-slate-200 border border-gray-200 dark:border-graphite/40 font-medium"
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
      <section className="py-20 border-b border-gray-200 dark:border-graphite/40 bg-white dark:bg-charcoal-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="font-mono text-xs uppercase tracking-widest text-slate-500 dark:text-slate-muted font-bold">Lifecycle</span>
            <h2 className="text-3xl font-bold text-gray-950 dark:text-white mt-1">Our Engineering Process</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.process.map((step) => (
              <div
                key={step.step}
                className="p-6 rounded-2xl bg-[#F7F7F5] dark:bg-charcoal-950 border border-gray-200 dark:border-graphite/40 flex flex-col justify-between shadow-sm"
              >
                <span className="font-mono text-2xl font-black text-gray-400 dark:text-slate-muted mb-4">
                  {step.step}
                </span>
                <div>
                  <h3 className="font-bold text-base text-gray-950 dark:text-white mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-700 dark:text-slate-300 leading-relaxed font-normal">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      {service.faqs && service.faqs.length > 0 && (
        <section className="py-20 border-b border-gray-200 dark:border-graphite/40">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="font-mono text-xs uppercase tracking-widest text-slate-700 dark:text-slate-300 font-bold">Frequently Asked</span>
              <h2 className="text-3xl font-bold text-gray-950 dark:text-white mt-1">Questions & Answers</h2>
            </div>

            <div className="flex flex-col gap-4">
              {service.faqs.map((faq) => (
                <div
                  key={faq.question}
                  className="p-6 rounded-2xl bg-white dark:bg-charcoal-900/60 border border-gray-200 dark:border-graphite/40 shadow-sm"
                >
                  <div className="flex items-start gap-3">
                    <HelpCircle className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-base text-gray-950 dark:text-white mb-2">{faq.question}</h4>
                      <p className="text-sm sm:text-base text-gray-700 dark:text-slate-200 leading-relaxed font-normal">{faq.answer}</p>
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
