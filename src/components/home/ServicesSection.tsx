'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowUpRight,
  Globe,
  BrainCircuit,
  Cloud,
  Smartphone,
  Monitor,
  Workflow,
  Plus,
  Minus,
  CheckCircle2,
} from 'lucide-react';

interface CoreCapability {
  id: string;
  num: string;
  title: string;
  category: string;
  icon: React.ElementType;
  shortDesc: string;
  fullDesc: string;
  technologies: string[];
  deliverables: string[];
  slug: string;
}

const CORE_CAPABILITIES: CoreCapability[] = [
  {
    id: 'web-dev',
    num: '01',
    title: 'Web Systems & Distributed SaaS',
    category: 'ENGINEERING',
    icon: Globe,
    shortDesc: 'High-performance web applications, enterprise client portals, and multi-tenant SaaS platforms.',
    fullDesc:
      'We engineer high-concurrency web systems using Next.js App Router, reactive caching, and resilient API boundaries. Designed for sub-50ms TTFB and fault-tolerant horizontal scaling under sudden traffic surges.',
    technologies: ['Next.js 15', 'React 19', 'TypeScript', 'Node.js', 'PostgreSQL', 'Redis'],
    deliverables: [
      'Production-grade App Router architecture',
      'Automated CI/CD & zero-downtime deployment',
      'Lighthouse 95+ Core Web Vitals score',
    ],
    slug: 'web-development',
  },
  {
    id: 'ai-agents',
    num: '02',
    title: 'Autonomous AI Agents & RAG',
    category: 'ARTIFICIAL INTELLIGENCE',
    icon: BrainCircuit,
    shortDesc: 'Autonomous multi-agent task pipelines, deterministic tool-calling, and custom enterprise RAG.',
    fullDesc:
      'Multi-agent workflows that automate complex business tasks with deterministic schema validation and strict guardrails. We implement vector retrieval, live tool execution, and continuous observability with zero hallucination risk.',
    technologies: ['LangChain', 'LlamaIndex', 'FastAPI', 'VectorDB', 'OpenAI', 'Anthropic'],
    deliverables: [
      'Autonomous multi-agent routing loop',
      'Enterprise vector search & semantic indexing',
      'Structured JSON schema validation layer',
    ],
    slug: 'ai-agents',
  },
  {
    id: 'cloud-devops',
    num: '03',
    title: 'Cloud Infrastructure & DevSecOps',
    category: 'INFRASTRUCTURE',
    icon: Cloud,
    shortDesc: 'Zero-downtime multi-region AWS topology, automated container scanning, and Terraform IaC.',
    fullDesc:
      'Enterprise cloud topologies engineered with Terraform, AWS ECS/EKS, and automated vulnerability scanning. Blue/green deployments guarantee zero downtime during major version upgrades and traffic spikes.',
    technologies: ['AWS ECS / EKS', 'Terraform', 'Docker', 'Trivy SecAudit', 'GitHub Actions'],
    deliverables: [
      'Modular multi-environment Terraform IaC',
      'Automated CVE vulnerability gates in CI/CD',
      'Multi-AZ failover & auto-scaling policies',
    ],
    slug: 'cloud-engineering',
  },
  {
    id: 'mobile-app',
    num: '04',
    title: 'Cross-Platform Mobile Engineering',
    category: 'MOBILE',
    icon: Smartphone,
    shortDesc: 'Native-feel iOS and Android applications built with Flutter and React Native.',
    fullDesc:
      'Mobile apps engineered for 60fps gesture interactions, offline-first SQLite synchronization, background push services, and compliant releases across Apple App Store and Google Play.',
    technologies: ['Flutter', 'React Native', 'Dart', 'Swift', 'Kotlin', 'SQLite'],
    deliverables: [
      'Universal iOS & Android production builds',
      'Biometric authentication & hardware sync',
      'Real-time push notification pipelines',
    ],
    slug: 'mobile-app-development',
  },
  {
    id: 'desktop-pos',
    num: '05',
    title: 'Custom Desktop & POS Hardware Sync',
    category: 'HARDWARE & SYSTEMS',
    icon: Monitor,
    shortDesc: 'Offline-first desktop clients, POS terminal integrations, and local hardware sync engines.',
    fullDesc:
      'Native desktop applications built with Tauri and Electron. Directly integrates with thermal receipt printers, barcode scanners, and weighing scales with zero-latency local caching.',
    technologies: ['Tauri', 'Rust', 'Electron', 'SQLite', 'WebSockets', 'ESC/POS'],
    deliverables: [
      'Offline-first cashier counter runtime',
      'Direct thermal printer & USB hardware drivers',
      'Distributed multi-branch ledger sync',
    ],
    slug: 'custom-desktop-software',
  },
  {
    id: 'automation',
    num: '06',
    title: 'Business Process & Workflow Automation',
    category: 'AUTOMATION',
    icon: Workflow,
    shortDesc: 'End-to-end operational automation connecting ERP, WhatsApp, payment gateways, and databases.',
    fullDesc:
      'We eliminate manual operational bottlenecks by designing event-driven automation pipelines. From order intake and billing ledger reconciliation to automated WhatsApp client dispatching.',
    technologies: ['Python', 'FastAPI', 'WhatsApp Cloud API', 'Webhooks', 'PostgreSQL'],
    deliverables: [
      'Event-driven webhook orchestrator',
      'Automated reconciliation & invoicing bots',
      'Real-time multi-channel client alerts',
    ],
    slug: 'business-process-automation',
  },
];

export function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState<number>(-1);

  const handlePointerEnter = (idx: number, e: React.PointerEvent) => {
    // Only expand on hover if pointer is a physical desktop mouse
    if (e.pointerType === 'mouse') {
      setActiveIndex(idx);
    }
  };

  const handlePointerLeave = (e: React.PointerEvent) => {
    // Only collapse on pointer leave if pointer is a physical desktop mouse
    if (e.pointerType === 'mouse') {
      setActiveIndex(-1);
    }
  };

  const handleToggle = (idx: number) => {
    setActiveIndex((prev) => (prev === idx ? -1 : idx));
  };

  return (
    <section
      id="services"
      className="relative py-24 sm:py-32 bg-[#F7F7F5] dark:bg-charcoal-950 text-charcoal-900 dark:text-warmWhite overflow-hidden border-b border-gray-200 dark:border-graphite/40 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Theodore-Inspired Minimalist Eyebrow with Multi-Color Bar Glyphs */}
        <div className="flex items-center gap-2.5 mb-8">
          <div className="flex items-center gap-1 shrink-0" aria-hidden="true">
            <span className="w-1.5 h-3.5 rounded-[2px] bg-[#D45361]" />
            <span className="w-1 h-3.5 rounded-[2px] bg-[#EA7047]" />
            <span className="w-1 h-3.5 rounded-[2px] bg-[#ECEB54]" />
            <span className="w-1 h-3.5 rounded-[2px] bg-[#5CB554]" />
            <span className="w-1 h-3.5 rounded-[2px] bg-[#4D66EC]" />
          </div>
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-gray-600 dark:text-slate-300 font-bold">
            CORE CAPABILITIES
          </span>
        </div>

        {/* Theodore 2-Column Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Fixed / Sticky Editorial Statement */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 flex flex-col justify-between gap-6">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-gray-950 dark:text-white uppercase leading-[1.08] mb-6">
                Engineered for High Concurrency, Scale &amp; Autonomous AI.
              </h2>
              <p className="text-base sm:text-lg text-gray-700 dark:text-slate-300 leading-relaxed font-normal mb-8">
                We transform complex business requirements into hardened digital systems. Our multidisciplinary practice specializes in custom software architectures, distributed cloud backends, and deterministic AI agent workflows.
              </p>
            </div>

            <div className="pt-6 border-t border-gray-200 dark:border-graphite/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <Link
                href="/services"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-charcoal-950 text-white dark:bg-white dark:text-charcoal-950 font-mono text-xs uppercase font-bold hover:bg-emerald-600 dark:hover:bg-emerald-400 dark:hover:text-black transition-all shadow-md hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Explore All 12 Capabilities</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>

              <span className="font-mono text-xs text-gray-500 dark:text-slate-400">
                06 Core Disciplines
              </span>
            </div>
          </div>

          {/* Right Column: Theodore-Style Clean Interactive Stacked Panels */}
          <div className="lg:col-span-7 flex flex-col divide-y divide-gray-200 dark:divide-graphite/60 border-t border-b border-gray-200 dark:border-graphite/60">
            {CORE_CAPABILITIES.map((cap, idx) => {
              const isActive = activeIndex === idx;
              const IconComponent = cap.icon;

              return (
                <div
                  key={cap.id}
                  onPointerEnter={(e) => handlePointerEnter(idx, e)}
                  onPointerLeave={handlePointerLeave}
                  className={`group transition-all duration-300 ${
                    isActive
                      ? 'bg-white/95 dark:bg-charcoal-900 shadow-md ring-1 ring-emerald-500/20'
                      : 'hover:bg-white/40 dark:hover:bg-charcoal-900/30'
                  }`}
                >
                  {/* Header Row: Number + Icon + Title + Toggle Button */}
                  <button
                    type="button"
                    onClick={() => handleToggle(idx)}
                    className="w-full text-left py-6 px-4 sm:px-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none touch-manipulation select-none"
                    aria-expanded={isActive}
                  >
                    <div className="flex items-center gap-4 sm:gap-6 min-w-0">
                      <span
                        className={`font-mono text-xs sm:text-sm font-bold transition-colors shrink-0 ${
                          isActive
                            ? 'text-emerald-600 dark:text-emerald-400'
                            : 'text-gray-400 dark:text-slate-500 group-hover:text-emerald-500'
                        }`}
                      >
                        {cap.num}
                      </span>
                      <div className="min-w-0">
                        <span className="block font-mono text-[10px] uppercase tracking-wider text-emerald-600 dark:text-emerald-400 font-bold mb-1">
                          {cap.category}
                        </span>
                        <div className="flex items-center gap-2.5 sm:gap-3 flex-wrap">
                          <div
                            className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center shrink-0 border transition-all duration-300 ${
                              isActive
                                ? 'bg-emerald-500 text-white border-emerald-500 shadow-xs'
                                : 'bg-emerald-500/10 dark:bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border-emerald-500/20 group-hover:bg-emerald-500 group-hover:text-white'
                            }`}
                          >
                            <IconComponent className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                          </div>
                          <h3
                            className={`text-lg sm:text-2xl font-bold transition-colors leading-tight ${
                              isActive
                                ? 'text-emerald-600 dark:text-emerald-400'
                                : 'text-gray-950 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400'
                            }`}
                          >
                            {cap.title}
                          </h3>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 shrink-0">
                      <div
                        className={`w-8 h-8 rounded-full border flex items-center justify-center transition-colors ${
                          isActive
                            ? 'border-emerald-500 bg-emerald-500 text-white shadow-xs'
                            : 'border-gray-300 dark:border-graphite text-gray-600 dark:text-slate-300 group-hover:border-emerald-500 group-hover:text-emerald-500'
                        }`}
                      >
                        {isActive ? (
                          <Minus className="w-4 h-4 text-white" />
                        ) : (
                          <Plus className="w-4 h-4" />
                        )}
                      </div>
                    </div>
                  </button>

                  {/* Smooth Animated Accordion Panel */}
                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-4 sm:px-6 pb-6 pt-1 flex flex-col gap-5 border-t border-gray-100 dark:border-graphite/30">
                          {/* Full Editorial Description */}
                          <p className="text-sm sm:text-base text-gray-700 dark:text-slate-300 leading-relaxed font-normal">
                            {cap.fullDesc}
                          </p>

                          {/* Deliverables Checklist */}
                          <div className="flex flex-col gap-2 pt-1">
                            {cap.deliverables.map((del) => (
                              <div
                                key={del}
                                className="flex items-center gap-2.5 text-xs sm:text-sm text-gray-800 dark:text-slate-200"
                              >
                                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                                <span>{del}</span>
                              </div>
                            ))}
                          </div>

                          {/* Tech Stack Pills & Action Link */}
                          <div className="pt-4 border-t border-gray-100 dark:border-graphite/40 flex flex-wrap items-center justify-between gap-4">
                            <div className="flex flex-wrap gap-1.5">
                              {cap.technologies.map((tech) => (
                                <span
                                  key={tech}
                                  className="px-2.5 py-1 rounded-md bg-gray-100 dark:bg-charcoal-800 text-[11px] font-mono font-medium text-gray-800 dark:text-slate-200 border border-gray-200 dark:border-graphite/40"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>

                            <Link
                              href={`/services/${cap.slug}`}
                              className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 hover:underline group-hover:translate-x-1 transition-transform"
                            >
                              <span>Inspect Architecture Blueprint</span>
                              <ArrowUpRight className="w-3.5 h-3.5" />
                            </Link>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
