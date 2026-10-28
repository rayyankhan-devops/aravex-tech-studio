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
          <div className="lg:col-span-5 relative h-96 sm:h-[480px] rounded-3xl overflow-hidden border border-gray-200 dark:border-graphite/50 shadow-xl">
            <Image
              src={BRAND_ASSETS.generated.aboutStudio}
              alt="ARAVEX Technology Studio Atmosphere"
              fill
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            
            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-white/90 dark:bg-charcoal-900/90 backdrop-blur-md border border-gray-200 dark:border-graphite/40 text-xs font-mono shadow-md">
              <span className="text-gray-500 dark:text-slate-muted uppercase font-semibold">Studio Philosophy</span>
              <p className="text-gray-900 dark:text-warmWhite font-bold mt-1">Minimal. Architectural. Technological.</p>
            </div>
          </div>

          {/* Right Column: Studio Profile & Authentic Founders */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <SectionHeading
              eyebrow="ABOUT US"
              title="A Modern Technology Studio."
              description="ARAVEX TECH STUDIO connects custom software engineering, intelligent automation, cloud architecture, and practical technology training into a unified operational house."
              className="mb-2"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-700 dark:text-slate-300 leading-relaxed">
              <p>
                We partner with high-growth organizations and regional enterprises to design, develop, and deploy software systems built to withstand high transactional stress, hardware edge constraints, and continuous scale.
              </p>
              <p>
                From point-of-sale platforms operating reliably in offline environments to autonomous AI agents that eliminate operational bottlenecks, every solution reflects our commitment to architectural purity and long-term maintainability.
              </p>
            </div>

            {/* Authentic Founders Preservation */}
            <div className="p-6 rounded-2xl bg-white dark:bg-charcoal-900/70 border border-gray-200 dark:border-graphite/40 mt-2 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <Users className="w-4 h-4 text-emerald-600 dark:text-slate-muted" />
                <span className="font-mono text-xs uppercase tracking-wider text-gray-600 dark:text-slate-muted font-bold">
                  Founding Team
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {COMPANY_INFO.founders.map((founder) => (
                  <div
                    key={founder.name}
                    className="p-3.5 rounded-xl bg-[#F7F7F5] dark:bg-charcoal-850 border border-gray-200 dark:border-graphite/30 flex flex-col justify-between"
                  >
                    <span className="font-bold text-sm text-gray-950 dark:text-white">{founder.name}</span>
                    <span className="font-mono text-[11px] text-gray-500 dark:text-slate-muted mt-1 font-semibold flex items-center justify-between">
                      <span>Co-Founder</span>
                      {'formerCompany' in founder && founder.formerCompany && (
                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-amber-500/10 text-amber-600 dark:text-amber-400 font-bold border border-amber-500/20">
                          {founder.formerCompany}
                        </span>
                      )}
                    </span>
                  </div>
                ))}
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
