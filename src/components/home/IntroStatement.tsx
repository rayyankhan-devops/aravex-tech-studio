'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ArrowUpRight, Sparkles, Layers, Cpu, Cloud, ShoppingBag, Terminal, Pause, Play, GitBranch } from 'lucide-react';
import { BRAND_ASSETS } from '@/lib/brand';

export function IntroStatement() {
  const [isManualPaused, setIsManualPaused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const isPaused = isManualPaused || isHovered;

  const pillars = [
    {
      badge: '01',
      title: 'Software Engineering',
      tagline: 'High-Concurrency Systems',
      image: BRAND_ASSETS.generated.categoryIcons.softwareEng,
      desc: 'Full-stack web, high-performance mobile, and custom desktop platforms engineered for speed.',
      chips: ['Next.js App Router', 'Flutter & React Native', 'PostgreSQL & Redis'],
      icon: Cpu,
      gradient: 'from-emerald-500/20 via-teal-500/10 to-transparent',
      borderColor: 'group-hover:border-emerald-500/50',
    },
    {
      badge: '02',
      title: 'Artificial Intelligence',
      tagline: 'Deterministic Autonomous Systems',
      image: BRAND_ASSETS.generated.categoryIcons.aiIntelligence,
      desc: 'Autonomous multi-agent workflows, enterprise RAG pipelines, and automated customer operations.',
      chips: ['Autonomous Multi-Agents', 'Enterprise RAG Pipelines', 'WhatsApp & CRM Sync'],
      icon: Sparkles,
      gradient: 'from-teal-500/20 via-cyan-500/10 to-transparent',
      borderColor: 'group-hover:border-teal-500/50',
    },
    {
      badge: '03',
      title: 'Cloud Infrastructure',
      tagline: 'Hardened Zero-Downtime AWS',
      image: BRAND_ASSETS.generated.categoryIcons.cloudInfra,
      desc: 'Resilient multi-region cloud topology, automated CI/CD pipelines, and proactive DevSecOps.',
      chips: ['Terraform IaC', 'AWS ECS & Kubernetes', 'Trivy Automated SecAudits'],
      icon: Cloud,
      gradient: 'from-cyan-500/20 via-blue-500/10 to-transparent',
      borderColor: 'group-hover:border-cyan-500/50',
    },
    {
      badge: '04',
      title: 'Ready-to-Deploy Systems',
      tagline: 'Turnkey Business Software',
      image: BRAND_ASSETS.generated.categoryIcons.commercialProducts,
      desc: 'Pre-built, production-tested software: offline-first retail POS, multi-branch inventory, and enterprise ERP.',
      chips: ['Offline-First POS', 'Warehouse Inventory', 'Turnkey ERP Suites'],
      icon: ShoppingBag,
      gradient: 'from-emerald-500/20 via-blue-500/10 to-transparent',
      borderColor: 'group-hover:border-emerald-500/50',
    },
    {
      badge: '05',
      title: 'DevOps & Automation',
      tagline: 'Continuous Delivery & Containerization',
      image: BRAND_ASSETS.generated.cicdPipeline || BRAND_ASSETS.generated.categoryIcons.cloudInfra,
      desc: 'Automated GitHub Actions CI/CD, Docker containerization, Kubernetes clustering, and zero-downtime rollouts.',
      chips: ['Automated CI/CD', 'Docker & Kubernetes', 'Zero-Downtime Rollouts'],
      icon: GitBranch,
      gradient: 'from-teal-500/20 via-emerald-500/10 to-transparent',
      borderColor: 'group-hover:border-teal-500/50',
    },
  ];

  // Quadruple the pillars array to create an uninterrupted infinite loop across any viewport
  const marqueePillars = [...pillars, ...pillars, ...pillars, ...pillars];

  return (
    <section
      id="intro-statement"
      className="relative py-10 sm:py-14 bg-white dark:bg-charcoal-900 text-charcoal-900 dark:text-warmWhite overflow-hidden border-b border-gray-200 dark:border-graphite/40 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:gap-6 mb-6 sm:mb-8">
          
          {/* Top Control & Status Row */}
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span className="font-sans text-xs uppercase tracking-wider text-emerald-600 dark:text-emerald-400 font-bold">
                STUDIO PILLARS • CONTINUOUS DISCOVERY
              </span>
            </div>

            {/* Dynamic Pause / Play Visual Cue */}
            <button
              onClick={() => setIsManualPaused((prev) => !prev)}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-sans font-semibold bg-gray-100 dark:bg-charcoal-800 border border-gray-200 dark:border-graphite/50 text-gray-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors cursor-pointer"
              aria-label={isManualPaused ? 'Resume auto-scrolling' : 'Pause auto-scrolling'}
            >
              {isManualPaused ? (
                <>
                  <Play className="w-3 h-3 text-emerald-500" />
                  <span>RESUME GLIDE</span>
                </>
              ) : isHovered ? (
                <>
                  <Pause className="w-3 h-3 text-amber-500" />
                  <span>PAUSED ON HOVER</span>
                </>
              ) : (
                <>
                  <Pause className="w-3 h-3 text-emerald-500" />
                  <span>PAUSE ON HOVER ACTIVE</span>
                </>
              )}
            </button>
          </div>

          {/* Heading Block */}
          <div className="max-w-4xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-gray-950 dark:text-white leading-[1.15]">
              Built for Performance.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-400 dark:from-emerald-400 dark:via-teal-300 dark:to-cyan-400">
                Unified in One Studio.
              </span>
            </h2>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-gray-600 dark:text-slate-300 max-w-2xl leading-relaxed">
              We bridge software engineering, autonomous AI, cloud infrastructure, ready-to-deploy enterprise systems, and automated DevOps into a high-velocity, synchronized practice.
            </p>
          </div>
        </div>
      </div>

      {/* Auto-Scrolling Continuous Infinite Marquee Track */}
      <div
        className="studio-marquee-container relative w-full overflow-hidden py-3"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Soft Left and Right Edge Gradient Masks */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-36 bg-gradient-to-r from-white dark:from-charcoal-900 to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-36 bg-gradient-to-l from-white dark:from-charcoal-900 to-transparent z-10" />

        {/* Continuous Hardware-Accelerated Marquee Strip */}
        <div
          className="flex items-stretch gap-5 sm:gap-6 w-max pl-4 animate-marquee-horizontal"
          style={{
            animationPlayState: isPaused ? 'paused' : 'running',
          }}
        >
          {marqueePillars.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={`${p.title}-${idx}`}
                className={`group relative w-[300px] sm:w-[340px] shrink-0 p-5 sm:p-6 rounded-2xl bg-[#F7F7F5] dark:bg-charcoal-850/80 border border-gray-200 dark:border-graphite/60 ${p.borderColor} transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-2xl hover:shadow-emerald-500/10 hover:-translate-y-1 overflow-hidden select-none`}
              >
                {/* Background Ambient Glow */}
                <div
                  className={`absolute -top-12 -right-12 w-36 h-36 rounded-full bg-gradient-to-br ${p.gradient} blur-2xl group-hover:scale-125 transition-transform duration-500 pointer-events-none`}
                />

                <div>
                  {/* Top Bar: 3D Artwork Thumbnail + Numeric Badge */}
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl p-1 bg-gradient-to-br from-emerald-500/40 via-teal-400/30 to-cyan-500/40 shadow-md ring-1 ring-emerald-500/30 group-hover:ring-emerald-400 transition-all duration-500 shrink-0">
                      <div className="relative w-full h-full rounded-xl overflow-hidden bg-charcoal-950">
                        <Image
                          src={p.image}
                          alt={p.title}
                          fill
                          className="object-cover object-center transition-transform duration-500 group-hover:scale-110"
                          sizes="80px"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col items-end gap-1.5">
                      <span className="font-mono text-xs font-bold text-gray-500 dark:text-slate-400 px-2.5 py-0.5 rounded-md bg-white dark:bg-charcoal-800 border border-gray-200 dark:border-graphite/60 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 group-hover:border-emerald-500/40 transition-colors">
                        {p.badge}
                      </span>
                      <span className="inline-flex items-center gap-1 text-[11px] font-mono text-emerald-600 dark:text-emerald-400 font-semibold">
                        <Icon className="w-3 h-3" />
                        <span>ACTIVE</span>
                      </span>
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <div className="mb-3">
                    <h3 className="font-black text-base sm:text-lg text-gray-950 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors leading-tight">
                      {p.title}
                    </h3>
                    <p className="font-sans text-[11px] text-emerald-700 dark:text-emerald-400 font-bold uppercase tracking-wider mt-0.5">
                      {p.tagline}
                    </p>
                  </div>

                  {/* Editorial Description */}
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-slate-300 leading-relaxed font-normal mb-4">
                    {p.desc}
                  </p>
                </div>

                {/* Bottom Tech Pills */}
                <div className="pt-3 border-t border-gray-200/80 dark:border-graphite/40">
                  <div className="flex flex-wrap gap-1.5">
                    {p.chips.map((chip) => (
                      <span
                        key={chip}
                        className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/90 dark:bg-charcoal-900 border border-gray-200 dark:border-graphite/50 text-gray-700 dark:text-slate-300 font-medium"
                      >
                        {chip}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
