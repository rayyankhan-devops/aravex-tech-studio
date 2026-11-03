'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Star,
  CheckCircle2,
  MapPin,
  Building2,
  Zap,
  ArrowLeft,
  ArrowRight,
  Quote,
} from 'lucide-react';
import { TESTIMONIALS_DATA } from '@/data/testimonials';

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const total = TESTIMONIALS_DATA.length;
  const activeTestimonial = TESTIMONIALS_DATA[activeIndex];

  const nextTestimonial = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % total);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + total) % total);
  };

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 30 : -30,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: 'spring' as const, stiffness: 320, damping: 32 },
        opacity: { duration: 0.25 },
      },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -30 : 30,
      opacity: 0,
      transition: {
        x: { type: 'spring' as const, stiffness: 320, damping: 32 },
        opacity: { duration: 0.18 },
      },
    }),
  };

  return (
    <section
      id="testimonials"
      className="relative py-16 sm:py-20 bg-[#F7F7F5] dark:bg-charcoal-950 text-charcoal-900 dark:text-warmWhite overflow-hidden border-b border-gray-200 dark:border-graphite/40 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Theodore-Inspired Minimalist Eyebrow */}
        <div className="flex items-center gap-2.5 mb-6">
          <div className="flex items-center gap-1 shrink-0" aria-hidden="true">
            <span className="w-1.5 h-3 rounded-[2px] bg-[#D45361]" />
            <span className="w-1 h-3 rounded-[2px] bg-[#EA7047]" />
            <span className="w-1 h-3 rounded-[2px] bg-[#ECEB54]" />
            <span className="w-1 h-3 rounded-[2px] bg-[#5CB554]" />
            <span className="w-1 h-3 rounded-[2px] bg-[#4D66EC]" />
          </div>
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-gray-600 dark:text-slate-300 font-bold">
            CLIENT TESTIMONIALS
          </span>
        </div>

        {/* Section Heading & Navigation Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 lg:mb-10 gap-5">
          <div className="max-w-2xl">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-gray-950 dark:text-white uppercase leading-[1.1] mb-2.5">
              Trusted by Engineering Leads &amp; Operations Directors.
            </h2>
            <p className="text-sm sm:text-base text-gray-600 dark:text-slate-300 leading-relaxed font-normal">
              Direct verification from retail hypermarkets, healthcare networks, and logistics enterprises running production workloads on ARAVEX systems.
            </p>
          </div>

          {/* Theodore-Style Navigation Controls */}
          <div className="flex items-center gap-2.5 shrink-0 self-start md:self-end">
            <div className="font-mono text-xs font-bold text-gray-500 dark:text-slate-400 mr-1.5">
              <span className="text-emerald-600 dark:text-emerald-400 font-black">
                0{activeIndex + 1}
              </span>
              <span> / 0{total}</span>
            </div>

            <button
              onClick={prevTestimonial}
              aria-label="Previous client testimonial"
              className="w-9 h-9 rounded-full bg-white dark:bg-charcoal-900 border border-gray-200 dark:border-graphite/60 text-gray-800 dark:text-slate-200 hover:text-emerald-600 dark:hover:text-emerald-400 hover:border-emerald-500 transition-all shadow-sm flex items-center justify-center cursor-pointer active:scale-95"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={nextTestimonial}
              aria-label="Next client testimonial"
              className="w-9 h-9 rounded-full bg-charcoal-950 text-white dark:bg-white dark:text-charcoal-950 hover:bg-emerald-600 dark:hover:bg-emerald-400 transition-all shadow-md flex items-center justify-center cursor-pointer active:scale-95"
            >
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Theodore 2-Column Split: Single Active Testimonial (Left) + Graphic Showcase (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          
          {/* Left Side: Single Active Testimonial Card */}
          <div className="lg:col-span-7 relative">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={activeTestimonial.id}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="flex flex-col justify-between p-5 sm:p-6 rounded-2xl bg-white/90 dark:bg-charcoal-900/90 border border-gray-200/90 dark:border-graphite/60 shadow-sm"
              >
                {/* Quotation */}
                <div className="mb-4">
                  <Quote className="w-5 h-5 text-emerald-500/40 mb-2" />
                  <p className="text-sm sm:text-base md:text-lg text-gray-900 dark:text-white font-normal leading-relaxed italic">
                    &ldquo;{activeTestimonial.quote}&rdquo;
                  </p>
                </div>

                {/* Client Credentials & Impact Badge */}
                <div className="pt-4 border-t border-gray-100 dark:border-graphite/40 flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <h3 className="font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-gray-950 dark:text-white">
                      {activeTestimonial.name}
                    </h3>
                    <p className="text-xs text-gray-600 dark:text-slate-300 mt-0.5">
                      {activeTestimonial.role},{' '}
                      <strong className="text-gray-900 dark:text-white font-semibold">
                        {activeTestimonial.company}
                      </strong>
                    </p>
                    <div className="flex items-center gap-1.5 text-[11px] text-gray-500 dark:text-slate-400 font-mono mt-0.5">
                      <MapPin className="w-2.5 h-2.5 text-emerald-500" />
                      <span>{activeTestimonial.location}</span>
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-[11px] font-mono font-bold text-emerald-700 dark:text-emerald-300">
                    <Zap className="w-3 h-3 text-emerald-500" />
                    <span>{activeTestimonial.highlightMetric}</span>
                  </div>
                </div>

                {/* Quick Slide Dots */}
                <div className="flex items-center gap-1.5 pt-4 mt-4 border-t border-gray-100 dark:border-graphite/30">
                  {TESTIMONIALS_DATA.map((t, idx) => (
                    <button
                      key={t.id}
                      onClick={() => {
                        setDirection(idx > activeIndex ? 1 : -1);
                        setActiveIndex(idx);
                      }}
                      aria-label={`Go to testimonial ${idx + 1}`}
                      className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                        activeIndex === idx
                          ? 'w-6 bg-emerald-500'
                          : 'w-1.5 bg-gray-300 dark:bg-charcoal-700 hover:bg-gray-400 dark:hover:bg-charcoal-600'
                      }`}
                    />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Side: Theodore-Style Graphic Showcase Card with Multi-Color Bars */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-sm">
              <AnimatePresence custom={direction} mode="wait">
                <motion.div
                  key={activeTestimonial.id}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="relative p-5 sm:p-6 rounded-2xl bg-white dark:bg-charcoal-900 border border-gray-200/90 dark:border-graphite/70 shadow-md flex flex-col justify-between overflow-hidden"
                >
                  {/* Top Bar with Theodore Signature Multi-Color Bars */}
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <div className="flex items-center gap-1" aria-hidden="true">
                      <span className="w-2.5 h-6 rounded-xs bg-[#D45361]" />
                      <span className="w-2 h-6 rounded-xs bg-[#EA7047]" />
                      <span className="w-1.5 h-6 rounded-xs bg-[#ECEB54]" />
                      <span className="w-1 h-6 rounded-xs bg-[#5CB554]" />
                      <span className="w-0.5 h-6 rounded-xs bg-[#4D66EC]" />
                    </div>

                    <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-500/10 dark:bg-emerald-500/15 border border-emerald-500/30 text-[10px] font-mono font-bold text-emerald-700 dark:text-emerald-300">
                      <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                      <span>{activeTestimonial.clientType}</span>
                    </div>

                    <div className="flex items-center gap-1" aria-hidden="true">
                      <span className="w-0.5 h-6 rounded-xs bg-[#4D66EC]" />
                      <span className="w-1 h-6 rounded-xs bg-[#5CB554]" />
                      <span className="w-1.5 h-6 rounded-xs bg-[#ECEB54]" />
                      <span className="w-2 h-6 rounded-xs bg-[#EA7047]" />
                      <span className="w-2.5 h-6 rounded-xs bg-[#D45361]" />
                    </div>
                  </div>

                  {/* Client Portrait & Monogram Block */}
                  <div className="flex flex-col items-center text-center mb-4">
                    <div
                      className={`w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-tr ${activeTestimonial.avatarBg} text-white font-bold text-lg sm:text-xl flex items-center justify-center shadow-md ring-2 ring-emerald-500/20 mb-3`}
                    >
                      {activeTestimonial.name
                        .split(' ')
                        .map((n) => n[0])
                        .join('')}
                    </div>

                    <h4 className="text-base sm:text-lg font-bold text-gray-950 dark:text-white leading-tight">
                      {activeTestimonial.name}
                    </h4>

                    <p className="text-xs text-gray-600 dark:text-slate-300 font-medium mt-0.5">
                      {activeTestimonial.role}
                    </p>

                    <div className="flex items-center gap-1.5 mt-1 font-mono text-[11px] text-gray-500 dark:text-slate-400">
                      <span className="font-semibold text-gray-800 dark:text-slate-200">
                        {activeTestimonial.company}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-0.5">
                        <MapPin className="w-2.5 h-2.5 text-emerald-500" />
                        {activeTestimonial.location}
                      </span>
                    </div>

                    {/* Star Rating */}
                    <div className="flex items-center gap-0.5 mt-2.5">
                      {[...Array(activeTestimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-3.5 h-3.5 fill-amber-400 text-amber-400 drop-shadow-sm"
                        />
                      ))}
                    </div>
                  </div>

                  {/* Bottom Verification & Project Scope Tag */}
                  <div className="pt-3 border-t border-gray-100 dark:border-graphite/40 flex flex-col gap-1 text-center text-[11px] font-mono">
                    <span className="text-gray-500 dark:text-slate-400">
                      Verified Milestone:
                    </span>
                    <span className="font-bold text-gray-900 dark:text-white px-2.5 py-1 rounded-md bg-gray-100 dark:bg-charcoal-800 border border-gray-200 dark:border-graphite/50 truncate">
                      {activeTestimonial.projectTag}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </div>

        {/* Bottom Trust Metric Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mt-10 pt-8 border-t border-gray-200 dark:border-graphite/50">
          <div className="p-3 sm:p-4 rounded-xl bg-white/70 dark:bg-charcoal-900/60 border border-gray-200/80 dark:border-graphite/40 text-center">
            <span className="text-xl sm:text-2xl font-black text-gray-950 dark:text-white block">
              4.98
            </span>
            <span className="text-[11px] text-gray-600 dark:text-slate-400 font-mono uppercase tracking-wider mt-0.5 block">
              Client Satisfaction
            </span>
          </div>

          <div className="p-3 sm:p-4 rounded-xl bg-white/70 dark:bg-charcoal-900/60 border border-gray-200/80 dark:border-graphite/40 text-center">
            <span className="text-xl sm:text-2xl font-black text-emerald-600 dark:text-emerald-400 block">
              100%
            </span>
            <span className="text-[11px] text-gray-600 dark:text-slate-400 font-mono uppercase tracking-wider mt-0.5 block">
              On-Time Delivery
            </span>
          </div>

          <div className="p-3 sm:p-4 rounded-xl bg-white/70 dark:bg-charcoal-900/60 border border-gray-200/80 dark:border-graphite/40 text-center">
            <span className="text-xl sm:text-2xl font-black text-gray-950 dark:text-white block">
              14+
            </span>
            <span className="text-[11px] text-gray-600 dark:text-slate-400 font-mono uppercase tracking-wider mt-0.5 block">
              Deployments
            </span>
          </div>

          <div className="p-3 sm:p-4 rounded-xl bg-white/70 dark:bg-charcoal-900/60 border border-gray-200/80 dark:border-graphite/40 text-center">
            <span className="text-xl sm:text-2xl font-black text-teal-600 dark:text-teal-400 block">
              0s
            </span>
            <span className="text-[11px] text-gray-600 dark:text-slate-400 font-mono uppercase tracking-wider mt-0.5 block">
              Offline Downtime
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
