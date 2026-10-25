'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Code2,
  Cpu,
  Layers,
  GraduationCap,
  Users,
  CheckCircle2,
  ArrowUpRight,
  Sparkles,
  Briefcase,
  Terminal,
  ShieldCheck,
  Clock,
  Compass,
} from 'lucide-react';
import { SectionHeading } from '@/components/common/SectionHeading';
import { Card } from '@/components/common/Card';
import { MagneticButton } from '@/components/common/MagneticButton';
import { INTERNSHIP_TRACKS, InternshipTrack } from '@/data/internships';
import { InternshipModal } from '@/components/forms/InternshipModal';
import { BRAND_ASSETS, COMPANY_INFO } from '@/lib/brand';
import { WhatsAppIcon } from '@/components/common/SocialIcons';

type CategoryFilter = 'All' | 'Engineering' | 'Design & Creative' | 'Growth & Marketing' | 'Strategy & Operations';

export default function InternshipsPage() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('All');
  const [activeModalTrack, setActiveModalTrack] = useState<InternshipTrack | null>(null);

  const categories: CategoryFilter[] = [
    'All',
    'Engineering',
    'Design & Creative',
    'Growth & Marketing',
    'Strategy & Operations',
  ];

  const filteredTracks =
    selectedCategory === 'All'
      ? INTERNSHIP_TRACKS
      : INTERNSHIP_TRACKS.filter((t) => t.category === selectedCategory);

  return (
    <main className="min-h-screen bg-[#F7F7F5] dark:bg-charcoal-950 text-charcoal-900 dark:text-warmWhite transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 sm:pb-24 border-b border-gray-200 dark:border-graphite/40 bg-white dark:bg-charcoal-900/60 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 font-mono text-xs font-bold uppercase tracking-wider mb-6">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>AREVEX TALENT ACCELERATOR • COHORT 2026 OPEN</span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-950 dark:text-white tracking-tight leading-[1.05]">
                Forge Real Engineering &amp; Creative Muscle.
              </h1>
              <p className="text-lg sm:text-xl text-gray-700 dark:text-slate-300 font-normal leading-relaxed mt-4">
                No coffee-fetching. No dummy to-do apps. Work directly alongside our co-founders on production Next.js apps, offline-first POS systems, autonomous AI agents, and high-ticket international client deliverables.
              </p>
            </div>

            {/* Quick Stats Pill */}
            <div className="flex flex-wrap lg:flex-col gap-4 p-5 rounded-2xl bg-gray-50 dark:bg-charcoal-950 border border-gray-200 dark:border-graphite/50 text-xs font-mono">
              <div>
                <span className="text-gray-400 dark:text-slate-muted block text-[10px] uppercase">Active Tracks</span>
                <span className="text-xl font-bold text-gray-900 dark:text-white">12 Disciplines</span>
              </div>
              <div>
                <span className="text-gray-400 dark:text-slate-muted block text-[10px] uppercase">Format</span>
                <span className="text-base font-bold text-emerald-600 dark:text-emerald-400">100% Remote / Hybrid</span>
              </div>
              <div>
                <span className="text-gray-400 dark:text-slate-muted block text-[10px] uppercase">Mentorship</span>
                <span className="text-base font-bold text-gray-900 dark:text-white">Direct Co-Founder 1-on-1</span>
              </div>
            </div>
          </div>

          {/* Visual Studio Atmosphere Banner */}
          <div className="relative h-64 sm:h-96 md:h-[420px] rounded-3xl overflow-hidden border border-gray-200 dark:border-graphite/60 shadow-xl">
            <Image
              src={BRAND_ASSETS.generated.internshipStudio}
              alt="Arevex Talent Accelerator Studio Workstations"
              fill
              priority
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white text-xs font-mono">
              <span className="px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20">
                Arevex Lab • Karachi &amp; Global Remote
              </span>
              <span className="hidden sm:inline-block px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-emerald-400">
                Stipend + Certificate of Engineering Excellence
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter & Track Directory */}
      <section className="py-20 border-b border-gray-200 dark:border-graphite/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <SectionHeading
              eyebrow="SELECT YOUR DISCIPLINE"
              title="12 Specialized Internship Tracks."
              description="Each track is engineered around an authentic studio capability. Select your focus area and submit your portfolio to enter our review pipeline."
              className="mb-0"
            />

            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-white dark:bg-charcoal-900 border border-gray-200 dark:border-graphite/50 shadow-sm">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-xl text-sm font-medium transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-charcoal-900 text-white dark:bg-white dark:text-charcoal-950 font-semibold shadow-sm'
                      : 'text-gray-700 dark:text-slate-300 hover:text-black dark:hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Tracks Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTracks.map((track, idx) => (
              <motion.div
                key={track.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (idx % 3) * 0.1, duration: 0.4 }}
              >
                <Card className="h-full flex flex-col justify-between bg-white dark:bg-charcoal-900 border-gray-200 dark:border-graphite/40 p-6 sm:p-7 shadow-sm hover:shadow-2xl transition-all duration-300">
                  <div>
                    {/* Top Row: Category & Openings */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-[11px] uppercase px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold border border-emerald-500/20">
                        {track.category}
                      </span>
                      <span className="font-mono text-xs text-gray-500 dark:text-slate-muted">
                        {track.openings} Seats • {track.mode}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-gray-950 dark:text-white mb-2 leading-snug">
                      {track.title}
                    </h3>

                    <p className="text-sm text-gray-700 dark:text-slate-200 leading-relaxed mb-4 font-normal">
                      {track.overview}
                    </p>

                    {/* Mentor Badge */}
                    <div className="p-3 rounded-xl bg-gray-50 dark:bg-charcoal-950 border border-gray-200/80 dark:border-graphite/40 text-xs sm:text-sm font-sans mb-4">
                      <span className="text-[11px] uppercase text-gray-500 dark:text-slate-400 block font-semibold mb-0.5">
                        Track Lead &amp; Mentor
                      </span>
                      <span className="font-bold text-gray-900 dark:text-white">{track.mentor}</span>
                      <span className="text-gray-600 dark:text-slate-400 block text-xs mt-0.5">
                        {track.mentorRole}
                      </span>
                    </div>

                    {/* Key Learning Highlights */}
                    <div className="space-y-1.5 mb-6">
                      <span className="text-xs uppercase tracking-wider text-gray-600 dark:text-slate-400 block font-bold">
                        Core Competencies
                      </span>
                      {track.learningOutcomes.slice(0, 2).map((item, i) => (
                        <div key={i} className="flex items-start gap-2 text-sm text-gray-800 dark:text-slate-200">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Button */}
                  <div className="pt-4 border-t border-gray-100 dark:border-graphite/30 flex items-center justify-between">
                    <div className="text-xs font-semibold text-gray-600 dark:text-slate-400">
                      {track.duration}
                    </div>

                    <button
                      onClick={() => setActiveModalTrack(track)}
                      className="px-4 py-2.5 rounded-xl bg-charcoal-900 text-white dark:bg-white dark:text-charcoal-950 text-sm font-semibold flex items-center gap-1.5 hover:bg-black dark:hover:bg-warmWhite transition-all hover:scale-[1.02] shadow-sm cursor-pointer"
                    >
                      <span>Apply for Track</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Intern at Arevex Section */}
      <section className="py-20 border-b border-gray-200 dark:border-graphite/40 bg-white dark:bg-charcoal-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="THE AREVEX DIFFERENCE"
            title="Why This Is Unlike Any Other Tech Internship."
            description="We built the Talent Accelerator to cultivate elite developers and designers capable of standing on the international engineering stage."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-[#F7F7F5] dark:bg-charcoal-950 border border-gray-200 dark:border-graphite/40 flex flex-col justify-between shadow-sm">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-white dark:bg-charcoal-850 border border-gray-200 dark:border-graphite/40 flex items-center justify-center text-emerald-500 mb-6 shadow-sm">
                  <Terminal className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-950 dark:text-white mb-2">
                  Production Codebases
                </h3>
                <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
                  You commit to real repositories. Your code will power point-of-sale registers, autonomous multi-agent graphs, and client cloud deployments with thousands of daily users.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-gray-200 dark:border-graphite/30 text-xs font-mono text-emerald-600 dark:text-emerald-400 font-bold">
                100% Verifiable GitHub Contributions
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-[#F7F7F5] dark:bg-charcoal-950 border border-gray-200 dark:border-graphite/40 flex flex-col justify-between shadow-sm">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-white dark:bg-charcoal-850 border border-gray-200 dark:border-graphite/40 flex items-center justify-center text-emerald-500 mb-6 shadow-sm">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-950 dark:text-white mb-2">
                  Direct Founder Mentorship
                </h3>
                <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
                  No layers of middle managers. You receive line-by-line PR reviews and architecture guidance directly from Muhammad Rayyan, Muhammad Uzair, and Aqsa Wadood.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-gray-200 dark:border-graphite/30 text-xs font-mono text-emerald-600 dark:text-emerald-400 font-bold">
                Weekly 1-on-1 Architecture Reviews
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-[#F7F7F5] dark:bg-charcoal-950 border border-gray-200 dark:border-graphite/40 flex flex-col justify-between shadow-sm">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-white dark:bg-charcoal-850 border border-gray-200 dark:border-graphite/40 flex items-center justify-center text-emerald-500 mb-6 shadow-sm">
                  <Briefcase className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-950 dark:text-white mb-2">
                  Fast-Track to Full-Time
                </h3>
                <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
                  Top performing interns who demonstrate relentless problem-solving, architectural purity, and on-time execution are directly offered junior engineering roles at Arevex.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-gray-200 dark:border-graphite/30 text-xs font-mono text-emerald-600 dark:text-emerald-400 font-bold">
                Merit Stipend + Permanent Placement
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp & Academy Direct Bridge CTA */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-3xl bg-charcoal-900 text-white border border-graphite/50 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl">
            <div className="max-w-2xl">
              <span className="font-mono text-xs uppercase px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 font-bold border border-emerald-500/20 mb-4 inline-block">
                HAVE QUESTIONS BEFORE APPLYING?
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">
                Connect Directly with our Mentors.
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mt-3">
                Unsure which track fits your background best? Reach out directly via WhatsApp for guidance or explore our accessible Technology Academy courses.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
              <a
                href={COMPANY_INFO.socials.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold font-mono text-xs flex items-center justify-center gap-2 shadow-lg transition-all"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>WhatsApp Talent Desk</span>
              </a>

              <Link
                href="/academy"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white text-charcoal-950 hover:bg-warmWhite font-bold font-mono text-xs flex items-center justify-center gap-2 transition-all"
              >
                <span>View Tech Academy</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Internship Application Modal */}
      <InternshipModal
        isOpen={Boolean(activeModalTrack)}
        onClose={() => setActiveModalTrack(null)}
        track={activeModalTrack}
      />
    </main>
  );
}
