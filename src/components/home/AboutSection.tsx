'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Users } from 'lucide-react';
import { SectionHeading } from '@/components/common/SectionHeading';
import { MagneticButton } from '@/components/common/MagneticButton';
import { BRAND_ASSETS, COMPANY_INFO } from '@/lib/brand';

export function AboutSection() {
  return (
    <section id="about" className="relative py-24 sm:py-32 bg-[#F7F7F5] dark:bg-charcoal-950 text-charcoal-900 dark:text-warmWhite overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Visual Studio Atmosphere */}
          <div className="lg:col-span-5 relative h-96 sm:h-[480px] rounded-3xl overflow-hidden border border-gray-200 dark:border-graphite/50 shadow-xl group">
            <Image
              src={BRAND_ASSETS.generated.aboutStudio}
              alt="ARAVEX Technology Studio Atmosphere"
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            
            <div className="absolute top-4 left-4 sm:top-6 sm:left-6 flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-black/65 backdrop-blur-md border border-white/20 text-[11px] font-mono font-bold text-emerald-400 shadow-md">
                ARAVEX TECH STUDIO
              </span>
            </div>

            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-black/70 backdrop-blur-md border border-white/15 text-xs font-mono shadow-md text-white">
              <div className="flex items-center justify-between text-[11px] text-emerald-300 font-bold mb-1">
                <span>INNOVATION LAB</span>
                <span>99.98% UPTIME</span>
              </div>
              <p className="text-warmWhite font-bold text-sm">Minimal. Architectural. Technological.</p>
            </div>
          </div>

          {/* Right Column: Studio Profile & Authentic Founders */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <SectionHeading
              eyebrow="ABOUT US"
              title="A Modern Technology Studio."
              description="Custom software engineering, AI automation, and cloud infrastructure engineered for resilience."
              className="mb-1"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs sm:text-sm text-gray-700 dark:text-slate-300">
              <div className="p-3.5 rounded-xl bg-white dark:bg-charcoal-900 border border-gray-200 dark:border-graphite/40 shadow-sm">
                <span className="font-bold text-gray-950 dark:text-white block mb-1">Production-Grade Software</span>
                <p className="text-gray-600 dark:text-slate-300 leading-relaxed text-xs">
                  Offline-first POS platforms, distributed MIS systems, and scalable cloud infrastructure built to survive network cuts and peak sales.
                </p>
              </div>
              <div className="p-3.5 rounded-xl bg-white dark:bg-charcoal-900 border border-gray-200 dark:border-graphite/40 shadow-sm">
                <span className="font-bold text-gray-950 dark:text-white block mb-1">Practical AI &amp; Education</span>
                <p className="text-gray-600 dark:text-slate-300 leading-relaxed text-xs">
                  Autonomous multi-agent workflows, tool-calling LLM integrations, and affordable 1-month cohorts for aspiring software engineers.
                </p>
              </div>
            </div>

            {/* Authentic Founders */}
            <div className="p-5 rounded-2xl bg-white dark:bg-charcoal-900/70 border border-gray-200 dark:border-graphite/40 mt-1 shadow-sm">
              <div className="flex items-center justify-between mb-3.5">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span className="font-sans text-xs uppercase tracking-wider text-gray-800 dark:text-slate-200 font-bold">
                    Technical Leadership
                  </span>
                </div>
                <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 font-bold">
                  Direct Founder Access
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {COMPANY_INFO.founders.map((founder) => {
                  const initials =
                    founder.name === 'Muhammad Rayyan' ? 'MR' : founder.name === 'Muhammad Uzair' ? 'MU' : 'AW';
                  const gradient =
                    founder.name === 'Muhammad Rayyan'
                      ? 'from-emerald-500 to-teal-700'
                      : founder.name === 'Muhammad Uzair'
                      ? 'from-amber-500 to-orange-600'
                      : 'from-violet-500 to-indigo-700';
                  const topBorder =
                    founder.name === 'Muhammad Rayyan'
                      ? 'border-t-emerald-500'
                      : founder.name === 'Muhammad Uzair'
                      ? 'border-t-amber-500'
                      : 'border-t-violet-500';
                  const hasFormer = 'formerCompany' in founder && founder.formerCompany;

                  return (
                    <div
                      key={founder.name}
                      className={`p-3.5 rounded-xl bg-[#F7F7F5] dark:bg-charcoal-850 border border-gray-200 dark:border-graphite/40 border-t-2 ${topBorder} flex flex-col justify-between gap-2.5 shadow-2xs hover:shadow-md transition-all group`}
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div
                          className={`w-9 h-9 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center text-white font-black text-xs shadow-sm ring-1 ring-white/20`}
                        >
                          {initials}
                        </div>
                        {hasFormer ? (
                          <span className="font-sans text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-amber-500/15 text-amber-800 dark:text-amber-300 font-bold border border-amber-500/30 whitespace-nowrap">
                            Amazon Technical Head
                          </span>
                        ) : (
                          <span className="font-sans text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-gray-200/80 dark:bg-charcoal-800 text-gray-700 dark:text-slate-300 font-bold whitespace-nowrap">
                            Co-Founder
                          </span>
                        )}
                      </div>

                      <div>
                        <span className="font-bold text-sm text-gray-950 dark:text-white block leading-snug group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                          {founder.name}
                        </span>
                        <span className="text-[11px] font-sans text-emerald-600 dark:text-emerald-400 font-semibold block mt-0.5 line-clamp-1">
                          {founder.role.replace('Co-Founder & ', '')}
                        </span>
                      </div>

                      <div className="pt-1.5 border-t border-gray-200/70 dark:border-graphite/30 text-[10px] font-mono text-gray-600 dark:text-slate-300 line-clamp-1">
                        {founder.focus.split(',')[0]}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <MagneticButton href="/about" variant="primary" size="md">
                <span>Learn More About Us</span>
                <ArrowUpRight className="w-4 h-4 ml-1" />
              </MagneticButton>
              <Link
                href="/contact"
                className="text-sm font-mono text-gray-600 dark:text-slate-muted hover:text-black dark:hover:text-white transition-colors font-bold"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
