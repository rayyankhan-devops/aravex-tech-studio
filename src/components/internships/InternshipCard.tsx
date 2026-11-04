'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  CheckCircle2,
  ArrowUpRight,
  Clock,
  GraduationCap,
  Award,
  BookOpen,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import { InternshipTrack, InternshipType } from '@/data/internships';

interface InternshipCardProps {
  track: InternshipTrack;
  internshipType: InternshipType;
  onApply: (track: InternshipTrack, type: InternshipType) => void;
}

export function InternshipCard({ track, internshipType, onApply }: InternshipCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const isPaid = internshipType === 'paid';

  return (
    <div className="h-full flex flex-col justify-between rounded-2xl bg-white dark:bg-charcoal-900 border border-gray-200/90 dark:border-graphite/50 p-5 sm:p-6 shadow-sm hover:shadow-xl hover:shadow-emerald-950/5 dark:hover:shadow-[0_8px_30px_-10px_rgba(16,185,129,0.12)] hover:border-emerald-500/50 dark:hover:border-emerald-500/40 transition-all duration-300 group">
      <div>
        {/* Top Header: Category & Pricing Pill */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="font-sans text-xs uppercase tracking-wider font-bold px-2.5 py-0.5 rounded-md bg-gray-100 dark:bg-charcoal-800 text-gray-700 dark:text-slate-300 font-bold border border-gray-200/80 dark:border-graphite/40">
            {track.category}
          </span>
          <span
            className={`font-sans text-xs font-bold px-2.5 py-0.5 rounded-full border ${
              isPaid
                ? 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-500/30'
                : 'bg-gray-100 dark:bg-charcoal-800 text-gray-700 dark:text-slate-300 border-gray-200 dark:border-graphite/40'
            }`}
          >
            {isPaid ? 'Rs. 5,000 / mo' : 'Free • Merit'}
          </span>
        </div>

        {/* Track Title */}
        <h3 className="text-lg sm:text-xl font-bold text-gray-950 dark:text-white mb-2 leading-snug group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
          {track.title}
        </h3>

        {/* Concise 1-2 Line Brief */}
        <p className="text-xs sm:text-sm text-gray-600 dark:text-slate-300 line-clamp-2 leading-relaxed mb-3.5 font-normal">
          {track.tagline}
        </p>

        {/* HIGH-VISIBILITY PRICING BANNER */}
        <div
          className={`flex items-center justify-between p-3 rounded-xl border mb-4 transition-colors ${
            isPaid
              ? 'bg-emerald-500/10 dark:bg-emerald-950/40 border-emerald-500/30'
              : 'bg-gray-100 dark:bg-charcoal-950/80 border-gray-200 dark:border-graphite/40'
          }`}
        >
          <div>
            <div className="text-[10px] uppercase font-sans font-bold tracking-wider text-emerald-700 dark:text-emerald-400">
              {isPaid ? 'Cohort Tuition' : 'Merit Track'}
            </div>
            <div className="flex items-baseline gap-1 mt-0.5">
              <span className="text-xl sm:text-2xl font-black text-gray-950 dark:text-white tracking-tight">
                {isPaid ? 'Rs. 5,000' : '100% Free'}
              </span>
              {isPaid && (
                <span className="text-xs font-sans font-bold text-emerald-700 dark:text-emerald-400">
                  / month
                </span>
              )}
            </div>
          </div>
          <div className="text-right">
            <span
              className={`inline-block px-2.5 py-1 rounded-md text-[10px] font-sans font-bold uppercase tracking-wider ${
                isPaid
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30'
              }`}
            >
              {isPaid ? '3 Months' : 'Competitive'}
            </span>
            <div className="text-xs font-sans text-gray-500 dark:text-slate-400 mt-1">
              {isPaid ? 'Mentorship + Cert' : 'Portfolio Review'}
            </div>
          </div>
        </div>

        {/* 3 Crisp, Ultra-Readable Value Points */}
        <div className="p-3 sm:p-3.5 rounded-xl bg-gray-50/80 dark:bg-charcoal-950/70 border border-gray-200/70 dark:border-graphite/30 space-y-2 mb-4">
          {isPaid ? (
            <>
              <div className="flex items-center gap-2 text-xs text-gray-800 dark:text-slate-200">
                <GraduationCap className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>
                  <strong className="text-gray-950 dark:text-white font-semibold">Hands-on Learning:</strong> Real production apps
                </span>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-800 dark:text-slate-200">
                <BookOpen className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                <span>
                  <strong className="text-gray-950 dark:text-white font-semibold">Courses &amp; Mentorship:</strong> Weekly 1-on-1 reviews
                </span>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-800 dark:text-slate-200">
                <Award className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                <span>
                  <strong className="text-gray-950 dark:text-white font-semibold">Verified Certificate:</strong> Official 3-month credential
                </span>
              </div>
            </>
          ) : (
            <>
              <div className="flex items-center gap-2 text-xs text-gray-800 dark:text-slate-200">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                <span>
                  <strong className="text-gray-950 dark:text-white font-semibold">Live Codebase:</strong> Push PRs to production systems
                </span>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-800 dark:text-slate-200">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                <span>
                  <strong className="text-gray-950 dark:text-white font-semibold">Real CI/CD &amp; Git:</strong> Industrial branch workflows
                </span>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-800 dark:text-slate-200">
                <Award className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                <span>
                  <strong className="text-gray-950 dark:text-white font-semibold">Founder Letter:</strong> Recommendation for top performers
                </span>
              </div>
            </>
          )}
        </div>

        {/* Expandable Overview Details */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="overflow-hidden border-t border-gray-100 dark:border-graphite/40 pt-3 mb-3 space-y-3"
            >
              <div>
                <span className="text-[11px] font-sans font-bold uppercase text-gray-900 dark:text-white block mb-1">
                  Key Responsibilities
                </span>
                <ul className="space-y-1">
                  {track.responsibilities.slice(0, 3).map((resp, i) => (
                    <li key={i} className="text-xs text-gray-600 dark:text-slate-300 flex items-start gap-1.5">
                      <span className="text-emerald-500 font-bold">•</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-2.5 rounded-lg bg-emerald-500/5 dark:bg-emerald-950/20 border border-emerald-500/20 text-[11px] text-gray-700 dark:text-slate-300">
                {isPaid ? (
                  <span>
                    <strong>Paid Cohort:</strong> Rs. 5,000 / month (3 Months). Full mentorship, courses, and certificate included.
                  </span>
                ) : (
                  <span>
                    <strong>Merit Track:</strong> Free admission based on GitHub portfolio review. Duration is 3 Months.
                  </span>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Card Action Row */}
      <div className="pt-3 border-t border-gray-100 dark:border-graphite/40 flex items-center justify-between gap-2">
        {/* Duration / Expand Toggle */}
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1 text-xs font-sans text-gray-500 dark:text-slate-400 font-semibold">
            <Clock className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
            <span>3 Mos</span>
          </span>
          <span className="text-gray-300 dark:text-graphite">•</span>
          <button
            type="button"
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:underline inline-flex items-center gap-0.5 cursor-pointer"
          >
            <span>{isExpanded ? 'Less' : 'More'}</span>
            {isExpanded ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
          </button>
        </div>

        {/* Apply CTA Button */}
        <button
          type="button"
          onClick={() => onApply(track, internshipType)}
          className={`px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-1.5 transition-all hover:scale-[1.02] shadow-sm cursor-pointer whitespace-nowrap ${
            isPaid
              ? 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-emerald-600/20'
              : 'bg-charcoal-900 text-white dark:bg-white dark:text-charcoal-950 hover:bg-black dark:hover:bg-warmWhite'
          }`}
        >
          <span>Apply</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
