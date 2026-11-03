import React from 'react';
import Image from 'next/image';
import type { Metadata } from 'next';
import {
  Users,
  ShieldCheck,
  BrainCircuit,
  GraduationCap,
  CheckCircle2,
  Cpu,
  Code2,
  ArrowUpRight,
} from 'lucide-react';
import { SectionHeading } from '@/components/common/SectionHeading';
import { Card } from '@/components/common/Card';
import { BRAND_ASSETS, COMPANY_INFO } from '@/lib/brand';
import { GithubIcon, LinkedinIcon } from '@/components/common/SocialIcons';
import { EngineeringMethodology } from '@/components/about/EngineeringMethodology';
import { FinalCTA } from '@/components/home/FinalCTA';

export const metadata: Metadata = {
  title: 'About ARAVEX TECH STUDIO — Identity & Principles',
  description:
    'ARAVEX TECH STUDIO is a multidisciplinary technology studio founded by Muhammad Rayyan, Muhammad Uzair, and Aqsa Wadood, delivering software engineering, AI, and practical education.',
};

const FOUNDER_META: Record<
  string,
  {
    initials: string;
    avatarGradient: string;
    accentBorder: string;
    glowShadow: string;
    icon: React.ElementType;
    tagColor: string;
    skills: string[];
    keyWins: string[];
  }
> = {
  'Muhammad Rayyan': {
    initials: 'MR',
    avatarGradient: 'from-emerald-500 via-teal-600 to-emerald-800',
    accentBorder: 'border-t-emerald-500 hover:border-emerald-500/60',
    glowShadow: 'group-hover:shadow-emerald-950/15 dark:group-hover:shadow-[0_12px_40px_-10px_rgba(16,185,129,0.18)]',
    icon: Cpu,
    tagColor: 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-500/25',
    skills: ['Distributed Systems', 'POS Hardware', 'Multi-Region Cloud', 'DevSecOps'],
    keyWins: [
      'Engineered offline-first POS engine processing thousands of daily sales',
      'Architects multi-region cloud backends with 99.98% guaranteed uptime',
    ],
  },
  'Muhammad Uzair': {
    initials: 'MU',
    avatarGradient: 'from-amber-500 via-orange-600 to-amber-700',
    accentBorder: 'border-t-amber-500 hover:border-amber-500/60',
    glowShadow: 'group-hover:shadow-amber-950/15 dark:group-hover:shadow-[0_12px_40px_-10px_rgba(245,158,11,0.18)]',
    icon: Code2,
    tagColor: 'bg-amber-500/10 text-amber-700 dark:text-amber-300 border-amber-500/25',
    skills: ['Full-Stack Next.js', 'Desktop Software', 'Enterprise MIS', 'High-Scale Systems'],
    keyWins: [
      'Former Amazon Technical Head bringing industrial rigor to client software',
      'Directs full product lifecycle across web, mobile, and desktop runtimes',
    ],
  },
  'Aqsa Wadood': {
    initials: 'AW',
    avatarGradient: 'from-violet-500 via-purple-600 to-indigo-800',
    accentBorder: 'border-t-violet-500 hover:border-violet-500/60',
    glowShadow: 'group-hover:shadow-purple-950/15 dark:group-hover:shadow-[0_12px_40px_-10px_rgba(168,85,247,0.18)]',
    icon: BrainCircuit,
    tagColor: 'bg-violet-500/10 text-violet-700 dark:text-violet-300 border-violet-500/25',
    skills: ['Autonomous AI Agents', 'Vector RAG', 'Multi-Agent Graphs', 'Deterministic Tool Calling'],
    keyWins: [
      'Directs AI research orchestration and enterprise vector retrieval pipelines',
      'Architects reliable AI agents with zero hallucinations and validated execution',
    ],
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#F7F7F5] dark:bg-charcoal-950 text-charcoal-900 dark:text-warmWhite transition-colors duration-300">
      {/* Header */}
      <section className="pt-24 pb-16 border-b border-gray-200 dark:border-graphite/40 bg-white dark:bg-charcoal-900/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="ABOUT ARAVEX"
            title="We Build What's Next."
            description="We build intelligent software, reliable infrastructure, and practical education programs."
          />
        </div>
      </section>

      {/* Narrative & Visual */}
      <section className="py-20 border-b border-gray-200 dark:border-graphite/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left: Structured, ultra-readable narrative */}
            <div className="lg:col-span-6 flex flex-col gap-6">
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-emerald-600 dark:text-emerald-400 font-bold block mb-2">
                  OUR MISSION &amp; CRAFTSMANSHIP
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-gray-950 dark:text-white leading-tight">
                  Software Engineered for Real-World Impact.
                </h2>
                <p className="text-base text-gray-600 dark:text-slate-300 mt-3 leading-relaxed font-normal">
                  We don&apos;t build tech for buzzwords. We engineer fast, dependable digital systems and accessible education programs that solve genuine business bottlenecks.
                </p>
              </div>

              {/* 3 Clear, Digestible Pillars */}
              <div className="space-y-3.5">
                {/* Pillar 1 */}
                <div className="p-4 rounded-2xl bg-white dark:bg-charcoal-900 border border-gray-200 dark:border-graphite/50 shadow-sm flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-gray-950 dark:text-white leading-snug">
                      Resilient Production Systems
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-slate-300 mt-1 leading-relaxed">
                      From offline-first Point-of-Sale registers that continue processing sales during power cuts, to scalable cloud architectures that guarantee 99.98% uptime.
                    </p>
                  </div>
                </div>

                {/* Pillar 2 */}
                <div className="p-4 rounded-2xl bg-white dark:bg-charcoal-900 border border-gray-200 dark:border-graphite/50 shadow-sm flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 shrink-0">
                    <BrainCircuit className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-gray-950 dark:text-white leading-snug">
                      Practical AI Agents &amp; Automation
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-slate-300 mt-1 leading-relaxed">
                      Autonomous AI workflows that integrate with live APIs, query vector databases, and execute deterministic actions without hallucinations.
                    </p>
                  </div>
                </div>

                {/* Pillar 3 */}
                <div className="p-4 rounded-2xl bg-white dark:bg-charcoal-900 border border-gray-200 dark:border-graphite/50 shadow-sm flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 shrink-0">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-gray-950 dark:text-white leading-snug">
                      Accessible Tech Education
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-slate-300 mt-1 leading-relaxed">
                      Bridging the gap between university theory and production code through hands-on 1-month training cohorts and mentored internships.
                    </p>
                  </div>
                </div>
              </div>

              {/* 2 Quick Value Badges */}
              <div className="flex flex-wrap items-center gap-2 pt-1 font-mono text-xs">
                <span className="px-3 py-1.5 rounded-full bg-gray-100 dark:bg-charcoal-850 text-gray-800 dark:text-slate-300 border border-gray-200 dark:border-graphite/40 font-semibold flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  <span>No Salespeople — Direct Engineer Access</span>
                </span>
                <span className="px-3 py-1.5 rounded-full bg-gray-100 dark:bg-charcoal-850 text-gray-800 dark:text-slate-300 border border-gray-200 dark:border-graphite/40 font-semibold flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  <span>100% Code Ownership</span>
                </span>
              </div>
            </div>

            {/* Right: Bespoke 3D Studio Architecture Showcase */}
            <div className="lg:col-span-6 relative h-[440px] sm:h-[520px] rounded-3xl overflow-hidden border border-gray-200 dark:border-graphite/50 shadow-2xl bg-charcoal-900 group">
              <Image
                src={BRAND_ASSETS.generated.aboutStudio}
                alt="ARAVEX TECH STUDIO — High-Tech Engineering & Architectural Lab"
                fill
                priority
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              {/* Studio Badge Top */}
              <div className="absolute top-4 left-4 sm:top-6 sm:left-6 flex items-center gap-2">
                <span className="px-3.5 py-1.5 rounded-full bg-black/65 backdrop-blur-md border border-white/20 text-xs font-mono font-bold text-emerald-400 shadow-md">
                  ARAVEX TECH STUDIO • HEADQUARTERS
                </span>
              </div>

              {/* Studio Highlights Bottom */}
              <div className="absolute bottom-6 left-6 right-6 p-4 sm:p-5 rounded-2xl bg-black/65 backdrop-blur-md border border-white/15 text-white shadow-xl">
                <div className="flex items-center justify-between text-xs font-mono mb-2">
                  <span className="text-emerald-400 font-bold uppercase tracking-wider">Engineering Philosophy</span>
                  <span className="text-slate-300 font-semibold">Remote • Global Reach</span>
                </div>
                <p className="text-sm sm:text-base font-bold text-white leading-snug">
                  Precision Systems. Architectural Rigor. Real Possibilities.
                </p>
                <div className="flex items-center gap-3 mt-3 pt-3 border-t border-white/10 text-[11px] font-mono text-slate-300">
                  <span>Uptime: <strong className="text-emerald-400">99.98%</strong></span>
                  <span>•</span>
                  <span>Products: <strong className="text-white">10+ Active</strong></span>
                  <span>•</span>
                  <span>Disciplines: <strong className="text-white">12 Core</strong></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Authentic Founders Section */}
      <section className="py-20 border-b border-gray-200 dark:border-graphite/40 bg-white dark:bg-charcoal-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="font-mono text-xs uppercase tracking-widest text-emerald-600 dark:text-emerald-400 font-bold block mb-2">
              TECHNICAL LEADERSHIP
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-950 dark:text-white">
              Meet the Studio Founders
            </h2>
            <p className="text-sm sm:text-base text-gray-600 dark:text-slate-300 mt-3 font-normal leading-relaxed">
              Direct technical architects, former Big Tech engineering leads, and autonomous AI researchers crafting battle-tested systems.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {COMPANY_INFO.founders.map((founder) => {
              const meta = FOUNDER_META[founder.name] || {
                initials: founder.name.split(' ').map((n) => n[0]).join(''),
                avatarGradient: 'from-emerald-500 to-teal-700',
                accentBorder: 'border-t-emerald-500',
                glowShadow: 'group-hover:shadow-emerald-950/15',
                icon: Users,
                tagColor: 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-500/25',
                skills: founder.focus.split(',').map((s) => s.trim()),
                keyWins: ['Leads studio technical architecture', 'Direct client systems delivery'],
              };
              const FounderIcon = meta.icon;
              const hasFormer = 'formerCompany' in founder && founder.formerCompany;

              return (
                <div
                  key={founder.name}
                  className={`group relative flex flex-col justify-between rounded-3xl bg-[#FBFBFA] dark:bg-charcoal-900 border border-gray-200/90 dark:border-graphite/50 border-t-4 ${meta.accentBorder} p-7 sm:p-8 shadow-sm hover:shadow-2xl ${meta.glowShadow} hover:-translate-y-1 transition-all duration-300 overflow-hidden`}
                >
                  <div>
                    {/* Card Top: Monogram Avatar + Status Badges */}
                    <div className="flex items-start justify-between gap-3 mb-6">
                      {/* Stylized Initials Monogram with Mini Tech Badge */}
                      <div className="relative">
                        <div
                          className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${meta.avatarGradient} flex items-center justify-center text-white font-black text-xl tracking-wider shadow-lg shadow-black/20 ring-2 ring-white dark:ring-charcoal-800`}
                        >
                          {meta.initials}
                        </div>
                        <div className="absolute -bottom-1 -right-1 p-1 rounded-lg bg-white dark:bg-charcoal-800 border border-gray-200 dark:border-graphite/60 text-gray-800 dark:text-slate-200 shadow-sm flex items-center justify-center">
                          <FounderIcon className="w-3.5 h-3.5" />
                        </div>
                      </div>

                      {/* Prominent Badges */}
                      <div className="flex flex-col items-end gap-1.5">
                        {hasFormer && (
                          <span className="font-mono text-[11px] uppercase px-3 py-1 rounded-full bg-amber-500/15 text-amber-800 dark:text-amber-300 font-black border border-amber-500/30 flex items-center gap-1.5 shadow-sm whitespace-nowrap">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                            <span>Ex-Amazon Tech Head</span>
                          </span>
                        )}
                        <span className="font-mono text-[11px] uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-gray-100 dark:bg-charcoal-800 text-gray-700 dark:text-slate-300 font-bold border border-gray-200 dark:border-graphite/40 whitespace-nowrap">
                          Co-Founder
                        </span>
                      </div>
                    </div>

                    {/* Founder Name & Role */}
                    <h3 className="text-2xl font-black text-gray-950 dark:text-white mb-1 tracking-tight group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      {founder.name}
                    </h3>
                    <span className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 block mb-4 uppercase tracking-wider">
                      {founder.role}
                    </span>

                    {/* Bio */}
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-5 font-normal">
                      {founder.bio}
                    </p>

                    {/* EASY TO CATCH: Core Technical Superpowers */}
                    <div className="mb-5">
                      <span className="text-[10px] uppercase font-mono font-bold tracking-wider text-gray-500 dark:text-slate-400 block mb-2">
                        Core Technical Superpowers
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {meta.skills.map((skill) => (
                          <span
                            key={skill}
                            className={`font-mono text-[11px] font-bold px-2.5 py-1 rounded-lg border ${meta.tagColor} shadow-2xs whitespace-nowrap`}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* 2 Quick Verifiable Impact Bullets */}
                    <div className="p-3 rounded-2xl bg-gray-100/70 dark:bg-charcoal-950/70 border border-gray-200/70 dark:border-graphite/30 space-y-2 mb-6 text-xs text-gray-700 dark:text-slate-300">
                      {meta.keyWins.map((win, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                          <span className="leading-snug">{win}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Bottom: Direct Connect & Verification */}
                  <div className="pt-4 border-t border-gray-200/80 dark:border-graphite/40 flex items-center justify-between text-xs font-mono">
                    <span className="text-gray-500 dark:text-slate-400 font-semibold flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-500" />
                      <span>Direct Technical Lead</span>
                    </span>

                    <div className="flex items-center gap-2">
                      <a
                        href={founder.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-xl bg-white dark:bg-charcoal-800 border border-gray-200 dark:border-graphite/40 text-gray-700 dark:text-slate-300 hover:text-black dark:hover:text-white hover:scale-105 transition-all shadow-sm cursor-pointer"
                        aria-label={`${founder.name} GitHub`}
                        title={`${founder.name} GitHub`}
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                      <a
                        href={founder.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-xl bg-white dark:bg-charcoal-800 border border-gray-200 dark:border-graphite/40 text-gray-700 dark:text-slate-300 hover:text-black dark:hover:text-white hover:scale-105 transition-all shadow-sm cursor-pointer"
                        aria-label={`${founder.name} LinkedIn`}
                        title={`${founder.name} LinkedIn`}
                      >
                        <LinkedinIcon className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>



      {/* HOW WE WORK: Engineering Lifecycle & Studio Commitments */}
      <EngineeringMethodology />

      <FinalCTA />
    </main>
  );
}
