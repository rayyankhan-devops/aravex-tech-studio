'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
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
  Award,
  BookOpen,
  Users2,
  FileCheck,
  CreditCard,
} from 'lucide-react';
import { SectionHeading } from '@/components/common/SectionHeading';
import { Card } from '@/components/common/Card';
import { INTERNSHIP_TRACKS, InternshipTrack, InternshipType, PAID_INTERNSHIP_SPECS, UNPAID_INTERNSHIP_SPECS } from '@/data/internships';
import { InternshipCard } from '@/components/internships/InternshipCard';
import { PaidInternshipModal } from '@/components/forms/PaidInternshipModal';
import { UnpaidInternshipModal } from '@/components/forms/UnpaidInternshipModal';
import { BRAND_ASSETS, COMPANY_INFO } from '@/lib/brand';
import { WhatsAppIcon } from '@/components/common/SocialIcons';

type CategoryFilter = 'All' | 'Engineering' | 'Design & Creative' | 'Growth & Marketing' | 'Strategy & Operations';

export default function InternshipsPage() {
  const [activeType, setActiveType] = useState<InternshipType>('paid');
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('All');
  
  // Separate modal states for Paid and Unpaid
  const [paidModalTrack, setPaidModalTrack] = useState<InternshipTrack | null>(null);
  const [unpaidModalTrack, setUnpaidModalTrack] = useState<InternshipTrack | null>(null);

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

  const handleApply = (track: InternshipTrack, type: InternshipType) => {
    if (type === 'paid') {
      setPaidModalTrack(track);
    } else {
      setUnpaidModalTrack(track);
    }
  };

  return (
    <main className="min-h-screen bg-[#F7F7F5] dark:bg-charcoal-950 text-charcoal-900 dark:text-warmWhite transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative pt-16 sm:pt-20 pb-8 sm:pb-10 border-b border-gray-200 dark:border-graphite/40 bg-white dark:bg-charcoal-900/60 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 sm:gap-8 mb-6 sm:mb-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 font-sans text-xs font-bold uppercase tracking-wider mb-3 sm:mb-4">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>ARAVEX TALENT ACCELERATOR • COHORT 2026 OPEN</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-950 dark:text-white tracking-tight leading-[1.05]">
                Forge Real Engineering &amp; Creative Muscle.
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-gray-700 dark:text-slate-300 font-normal leading-relaxed mt-3">
                Structured hands-on tracks for developers and designers. Choose between our fast-track <strong>Paid Internship</strong> with 1-on-1 mentorship and certification, or our competitive <strong>Unpaid Merit Track</strong>.
              </p>
            </div>

            {/* Quick Stats Pill */}
            <div className="flex flex-wrap lg:flex-col gap-3 p-4 sm:p-5 rounded-2xl bg-gray-50 dark:bg-charcoal-950 border border-gray-200 dark:border-graphite/50 text-xs font-sans">
              <div>
                <span className="text-gray-400 dark:text-slate-muted block text-[10px] uppercase">Active Tracks</span>
                <span className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">13 Disciplines</span>
              </div>
              <div>
                <span className="text-gray-400 dark:text-slate-muted block text-[10px] uppercase">Format</span>
                <span className="text-sm sm:text-base font-bold text-emerald-600 dark:text-emerald-400">100% Remote Global</span>
              </div>
              <div>
                <span className="text-gray-400 dark:text-slate-muted block text-[10px] uppercase">Dual Pathways</span>
                <span className="text-sm sm:text-base font-bold text-gray-900 dark:text-white">Paid &amp; Unpaid Tracks</span>
              </div>
            </div>
          </div>

          {/* Bespoke 3D Studio Visual Banner */}
          <div className="relative h-56 sm:h-80 md:h-[380px] rounded-3xl overflow-hidden border border-gray-200 dark:border-graphite/60 shadow-2xl bg-charcoal-900">
            <Image
              src="/assets/generated/internship-studio.png"
              alt="Aravex Talent Accelerator High-Tech Internship Lab"
              fill
              priority
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute top-4 left-4 sm:top-6 sm:left-6 flex items-center gap-2">
              <span className="px-3 py-1.5 rounded-full bg-black/65 backdrop-blur-md border border-white/20 text-xs font-sans font-bold uppercase tracking-wider text-emerald-400 shadow-md">
                ARAVEX LAB • 100% REMOTE
              </span>
            </div>
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5 text-white text-xs font-sans">
              <span className="px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 font-semibold text-emerald-300">
                Production-Grade Engineering &amp; Creative Workstations
              </span>
              <span className="px-3 py-1.5 rounded-full bg-emerald-600/90 backdrop-blur-md border border-emerald-400 text-white font-bold">
                Paid: Rs. 5,000/mo (3 Months) • Unpaid: Merit-Based
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* DUAL PATHWAY SELECTOR & PROGRAM DIRECTORY */}
      <section className="py-8 sm:py-12 border-b border-gray-200 dark:border-graphite/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Main 2 Categories Segmented Control */}
          <div className="mb-6 sm:mb-8 text-center">
            <span className="text-xs font-sans uppercase tracking-wider text-emerald-600 dark:text-emerald-400 font-bold block mb-2">
              SELECT INTERNSHIP PATHWAY
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-950 dark:text-white mb-4">
              Choose Your Internship Model
            </h2>

            {/* Big Segmented Toggle — Strictly Single Line */}
            <div className="inline-flex flex-row flex-nowrap items-center p-1 sm:p-1.5 rounded-2xl bg-gray-200/80 dark:bg-charcoal-900 border border-gray-300/80 dark:border-graphite/50 max-w-2xl w-full shadow-inner">
              <button
                type="button"
                onClick={() => setActiveType('paid')}
                className={`flex-1 py-2.5 sm:py-3 px-2 sm:px-5 rounded-xl font-bold text-xs sm:text-sm transition-all duration-300 flex flex-row flex-nowrap items-center justify-center gap-1.5 sm:gap-2 cursor-pointer whitespace-nowrap ${
                  activeType === 'paid'
                    ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/25 ring-2 ring-emerald-500/30'
                    : 'text-gray-700 dark:text-slate-300 hover:text-black dark:hover:text-white'
                }`}
              >
                <GraduationCap className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                <span className="whitespace-nowrap">Paid Internship</span>
                <span className={`text-[10px] sm:text-[11px] font-sans px-2 sm:px-2.5 py-0.5 rounded-full font-bold whitespace-nowrap shrink-0 ${
                  activeType === 'paid' ? 'bg-black/30 text-white' : 'bg-emerald-500/20 text-emerald-700 dark:text-emerald-300'
                }`}>
                  Rs. 5,000 / mo
                </span>
              </button>

              <button
                type="button"
                onClick={() => setActiveType('unpaid')}
                className={`flex-1 py-2.5 sm:py-3 px-2 sm:px-5 rounded-xl font-bold text-xs sm:text-sm transition-all duration-300 flex flex-row flex-nowrap items-center justify-center gap-1.5 sm:gap-2 cursor-pointer whitespace-nowrap ${
                  activeType === 'unpaid'
                    ? 'bg-charcoal-950 text-white dark:bg-white dark:text-charcoal-950 shadow-lg shadow-black/20 ring-2 ring-gray-400/30'
                    : 'text-gray-700 dark:text-slate-300 hover:text-black dark:hover:text-white'
                }`}
              >
                <Briefcase className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                <span className="whitespace-nowrap">Unpaid Internship</span>
                <span className="text-[10px] sm:text-[11px] font-sans px-2 sm:px-2.5 py-0.5 rounded-full font-bold bg-gray-200 dark:bg-charcoal-800 text-gray-900 dark:text-white whitespace-nowrap shrink-0">
                  100% Free
                </span>
              </button>
            </div>
          </div>

          {/* Dynamic Overview Banner based on Active Category */}
          <AnimatePresence mode="wait">
            {activeType === 'paid' ? (
              <motion.div
                key="paid-banner"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="relative rounded-3xl bg-gradient-to-br from-emerald-950 via-charcoal-900 to-charcoal-950 border border-emerald-500/30 p-8 sm:p-10 mb-12 shadow-2xl text-white overflow-hidden"
              >
                <div className="absolute top-0 right-0 -mr-16 -mt-16 w-72 h-72 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />
                <div className="relative z-10">
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-sans font-bold uppercase tracking-wider">
                      <GraduationCap className="w-4 h-4 text-emerald-400" />
                      <span>PAID ACCELERATED LEARNING &amp; MENTORSHIP PROGRAM</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-sans text-xs px-3 py-1.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 font-bold">
                        Duration: 3 Months
                      </span>
                      <span className="font-sans text-xs px-3.5 py-1.5 rounded-full bg-emerald-500 text-charcoal-950 font-bold shadow-md">
                        Tuition: Rs. 5,000 / Month
                      </span>
                    </div>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-black tracking-tight mb-3">
                    Fast-Track Your Tech Career with Intensive Guidance.
                  </h3>
                  <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal max-w-4xl mb-8">
                    In this 3-month structured program, candidates are given the opportunity to learn on real production architectures, receive full access to our premium engineering courses, weekly 1-on-1 senior mentorship, and guaranteed verified certification upon completion.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                      <GraduationCap className="w-6 h-6 text-emerald-400 mb-2" />
                      <h4 className="font-bold text-sm text-white mb-1">Opportunity to Learn</h4>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        Learn directly by building real-world enterprise applications under senior supervision.
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                      <BookOpen className="w-6 h-6 text-blue-400 mb-2" />
                      <h4 className="font-bold text-sm text-white mb-1">Premium Courses</h4>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        Unrestricted access to ARAVEX masterclasses, full-stack blueprints, and project code.
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                      <Users2 className="w-6 h-6 text-purple-400 mb-2" />
                      <h4 className="font-bold text-sm text-white mb-1">1-on-1 Mentorship</h4>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        Direct code reviews, debugging sessions, and weekly career consultation calls.
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                      <Award className="w-6 h-6 text-amber-400 mb-2" />
                      <h4 className="font-bold text-sm text-white mb-1">Verified Certification</h4>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        Official, tamper-proof completion credentials endorsed by ARAVEX Studio leadership.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="unpaid-banner"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="relative rounded-3xl bg-gradient-to-br from-charcoal-900 via-charcoal-950 to-charcoal-950 border border-graphite/60 p-8 sm:p-10 mb-12 shadow-2xl text-white overflow-hidden"
              >
                <div className="absolute top-0 right-0 -mr-16 -mt-16 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
                <div className="relative z-10">
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-white border border-white/20 text-xs font-sans font-bold uppercase tracking-wider">
                      <Briefcase className="w-4 h-4 text-emerald-400" />
                      <span>MERIT-BASED PRODUCTION PRACTICE TRACK</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-sans text-xs px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-bold">
                        Duration: 3 Months
                      </span>
                      <span className="font-sans text-xs px-3 py-1 rounded-full bg-white/15 text-white border border-white/25 font-bold">
                        Admission: 100% Free
                      </span>
                    </div>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-black tracking-tight mb-3">
                    Ship Live Code on High-Throughput Production Systems.
                  </h3>
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal max-w-4xl mb-8">
                    Geared toward candidates with prior programming foundation who wish to contribute directly to live client systems, Git workflows, and open-source studio software. Top performers receive signed founder recommendation letters.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                      <Terminal className="w-6 h-6 text-emerald-400 mb-2" />
                      <h4 className="font-bold text-sm text-white mb-1">Production Code</h4>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        Submit real pull requests to active repositories powering POS and cloud services.
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                      <Layers className="w-6 h-6 text-blue-400 mb-2" />
                      <h4 className="font-bold text-sm text-white mb-1">Real Git Workflows</h4>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        Experience industrial CI/CD, branch policies, and automated vulnerability scanning.
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                      <Award className="w-6 h-6 text-amber-400 mb-2" />
                      <h4 className="font-bold text-sm text-white mb-1">Founder Recommendation</h4>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        Letter of recommendation and direct client referral for exceptional contributors.
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                      <ShieldCheck className="w-6 h-6 text-purple-400 mb-2" />
                      <h4 className="font-bold text-sm text-white mb-1">Merit Admission</h4>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        Completely free of charge, evaluated strictly on portfolio and code quality.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Discipline Category Filter Pills */}
          <div className="mb-10">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
              <div>
                <span className="text-xs font-sans uppercase tracking-wider text-gray-500 dark:text-slate-400 font-bold">
                  Browse by Specialization ({filteredTracks.length} Available in {activeType === 'paid' ? 'Paid' : 'Unpaid'} Mode)
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2.5 overflow-x-auto no-scrollbar py-1 scroll-smooth">
              {categories.map((cat) => {
                const count =
                  cat === 'All'
                    ? INTERNSHIP_TRACKS.length
                    : INTERNSHIP_TRACKS.filter((t) => t.category === cat).length;
                const isActive = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`inline-flex items-center gap-2.5 px-4 sm:px-5 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer whitespace-nowrap shadow-sm hover:scale-[1.02] active:scale-[0.98] ${
                      isActive
                        ? 'bg-charcoal-950 text-white dark:bg-white dark:text-charcoal-950 font-bold shadow-md ring-2 ring-charcoal-950/20 dark:ring-white/30'
                        : 'bg-white dark:bg-charcoal-900 text-gray-700 dark:text-slate-300 border border-gray-200 dark:border-graphite/60 hover:border-gray-400 dark:hover:border-slate-400 hover:text-black dark:hover:text-white'
                    }`}
                  >
                    <span>{cat}</span>
                    <span
                      className={`inline-flex items-center justify-center px-2 py-0.5 rounded-full text-[11px] font-sans font-bold ${
                        isActive
                          ? 'bg-white/20 text-white dark:bg-black/15 dark:text-black'
                          : 'bg-gray-100 dark:bg-charcoal-800 text-gray-600 dark:text-slate-400'
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Tracks Grid (No Lead, No Tech Stack Boxes) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 items-stretch">
            {filteredTracks.map((track, idx) => (
              <motion.div
                key={track.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (idx % 3) * 0.05, duration: 0.3 }}
                className="h-full flex flex-col"
              >
                <InternshipCard
                  track={track}
                  internshipType={activeType}
                  onApply={handleApply}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Intern at Aravex Section */}
      <section className="py-8 sm:py-12 border-b border-gray-200 dark:border-graphite/40 bg-white dark:bg-charcoal-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="THE ARAVEX DIFFERENCE"
            title="Engineered for Real Career Outcomes."
            description="Whether enrolled in our fast-track Paid Mentorship or our Unpaid Merit Track, our focus is making you truly production-ready."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 rounded-3xl bg-[#F7F7F5] dark:bg-charcoal-950 border border-gray-200 dark:border-graphite/40 flex flex-col justify-between shadow-sm">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-white dark:bg-charcoal-850 border border-gray-200 dark:border-graphite/40 flex items-center justify-center text-emerald-500 mb-6 shadow-sm">
                  <Terminal className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-950 dark:text-white mb-2">
                  Production Codebases
                </h3>
                <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed font-normal">
                  Commit code to real repositories powering live POS registers, autonomous AI graphs, and client cloud systems.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-gray-200 dark:border-graphite/30 text-xs font-sans text-emerald-600 dark:text-emerald-400 font-bold">
                100% Verifiable GitHub Contributions
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-[#F7F7F5] dark:bg-charcoal-950 border border-gray-200 dark:border-graphite/40 flex flex-col justify-between shadow-sm">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-white dark:bg-charcoal-850 border border-gray-200 dark:border-graphite/40 flex items-center justify-center text-emerald-500 mb-6 shadow-sm">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-950 dark:text-white mb-2">
                  Dedicated Mentorship &amp; Courses
                </h3>
                <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed font-normal">
                  Direct line-by-line PR reviews, architecture sessions, and unrestricted access to premium masterclass video libraries.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-gray-200 dark:border-graphite/30 text-xs font-sans text-emerald-600 dark:text-emerald-400 font-bold">
                Weekly 1-on-1 Feedback &amp; Code Reviews
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-[#F7F7F5] dark:bg-charcoal-950 border border-gray-200 dark:border-graphite/40 flex flex-col justify-between shadow-sm">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-white dark:bg-charcoal-850 border border-gray-200 dark:border-graphite/40 flex items-center justify-center text-emerald-500 mb-6 shadow-sm">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-950 dark:text-white mb-2">
                  Official Verification &amp; Referral
                </h3>
                <p className="text-sm text-gray-700 dark:text-slate-200 leading-relaxed font-normal">
                  Verified certification on completion, signed letters of recommendation, and priority introductions to global tech employers.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-gray-200 dark:border-graphite/30 text-xs font-sans text-emerald-600 dark:text-emerald-400 font-bold">
                Lifetime Alumni Support + Founder Endorsement
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Talent Desk CTA */}
      <section className="py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-6 sm:p-10 rounded-3xl bg-charcoal-900 text-white border border-graphite/50 flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 shadow-2xl">
            <div className="max-w-2xl">
              <span className="font-sans text-xs uppercase tracking-wider px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 font-bold border border-emerald-500/20 mb-4 inline-block">
                HAVE QUESTIONS ABOUT PAID OR UNPAID TRACKS?
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">
                Connect Directly with our Admissions Desk.
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mt-3">
                Unsure whether the 3-Month Paid Mentorship or Unpaid Merit Track fits your schedule? Reach out directly via WhatsApp for quick counseling.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3.5 w-full lg:w-auto shrink-0">
              <a
                href={COMPANY_INFO.socials.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-2xl bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold text-sm shadow-xl transition-all whitespace-nowrap shrink-0 hover:scale-[1.02] active:scale-[0.98]"
              >
                <WhatsAppIcon className="w-5 h-5 shrink-0" />
                <span className="whitespace-nowrap">WhatsApp Talent Desk</span>
              </a>

              <Link
                href="/training"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-2xl bg-white text-charcoal-950 hover:bg-warmWhite font-semibold text-sm shadow-xl transition-all whitespace-nowrap shrink-0 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span className="whitespace-nowrap">View Tech Training</span>
                <ArrowUpRight className="w-4 h-4 shrink-0" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Paid Internship Application Modal (with payment proof upload) */}
      <PaidInternshipModal
        isOpen={Boolean(paidModalTrack)}
        onClose={() => setPaidModalTrack(null)}
        track={paidModalTrack}
      />

      {/* Unpaid Internship Application Modal (merit-based, no payment) */}
      <UnpaidInternshipModal
        isOpen={Boolean(unpaidModalTrack)}
        onClose={() => setUnpaidModalTrack(null)}
        track={unpaidModalTrack}
      />
    </main>
  );
}
