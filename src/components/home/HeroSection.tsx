'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowDown, Shield, Sparkles, Cpu } from 'lucide-react';
import { MagneticButton } from '@/components/common/MagneticButton';
import { BRAND_ASSETS, COMPANY_INFO } from '@/lib/brand';

export function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const lineVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section className="relative min-h-[100svh] flex flex-col justify-between pt-32 pb-12 overflow-hidden bg-charcoal-950 text-warmWhite">
      {/* Background Hero Artwork */}
      <div className="absolute inset-0 z-0">
        <Image
          src={BRAND_ASSETS.generated.heroCinema}
          alt="AREVEX Architectural Geometry"
          fill
          priority
          className="object-cover object-center opacity-40 dark:opacity-35 light:opacity-20 scale-105 transition-transform duration-1000"
        />
        {/* Cinematic gradient overlays for ultra-high readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/75 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-950 via-charcoal-950/60 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-muted/10 via-transparent to-transparent" />
      </div>

      {/* Floating Monogram Watermark Subtle Motion */}
      <motion.div
        animate={{
          y: [0, -12, 0],
          opacity: [0.08, 0.15, 0.08],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-1/4 right-8 lg:right-24 w-72 h-72 md:w-96 md:h-96 pointer-events-none select-none z-0 hidden sm:block"
      >
        <Image
          src={BRAND_ASSETS.monogram.transparent}
          alt=""
          fill
          className="object-contain"
        />
      </motion.div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl flex flex-col items-start gap-6"
        >
          {/* Studio Tag Pill */}
          <motion.div
            variants={lineVariants}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-charcoal-900/80 border border-graphite/60 backdrop-blur-md"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-mono text-xs uppercase tracking-widest text-slate-300">
              AREVEX TECH STUDIO • GLOBAL ENGINEERING
            </span>
          </motion.div>

          {/* Primary Editorial Headline */}
          <motion.h1
            variants={lineVariants}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[0.98] text-white"
          >
            <span className="block font-sans text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-slate-400">
              WE BUILD
            </span>
            <span className="block font-sans tracking-tight">
              WHAT’S NEXT.
            </span>
          </motion.h1>

          {/* Supporting Statement */}
          <motion.p
            variants={lineVariants}
            className="text-lg sm:text-xl md:text-2xl text-slate-300 dark:text-slate-300 light:text-charcoal-800 font-light max-w-2xl leading-relaxed mt-2"
          >
            {COMPANY_INFO.subheadline}
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            variants={lineVariants}
            className="flex flex-wrap items-center gap-4 pt-4"
          >
            <MagneticButton href="/contact" size="lg" variant="primary">
              <span>Start a Project</span>
              <ArrowUpRight className="w-4 h-4 ml-1" />
            </MagneticButton>

            <MagneticButton href="/work" size="lg" variant="outline">
              <span>Explore Our Work</span>
            </MagneticButton>
          </motion.div>

          {/* Trust Matrix Badges */}
          <motion.div
            variants={lineVariants}
            className="pt-8 grid grid-cols-2 sm:grid-cols-3 gap-6 border-t border-graphite/40 w-full max-w-xl text-xs font-mono text-slate-400"
          >
            <div className="flex items-center gap-2">
              <Cpu className="w-4 h-4 text-slate-muted shrink-0" />
              <span>Full-Stack & POS</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-slate-muted shrink-0" />
              <span>AI Agents & RAG</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-slate-muted shrink-0" />
              <span>AWS & DevSecOps</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Restrained Scroll Indicator */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex justify-between items-center text-xs font-mono text-slate-muted">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-slate-muted" />
          <span>EST. 2024 / ARCHITECTURAL ENGINEERING</span>
        </div>

        <a
          href="#intro-statement"
          aria-label="Scroll to content"
          className="flex items-center gap-2 text-slate-muted hover:text-white transition-colors duration-200"
        >
          <span>SCROLL DOWN</span>
          <motion.div
            animate={{ y: [0, 4, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          >
            <ArrowDown className="w-3.5 h-3.5" />
          </motion.div>
        </a>
      </div>
    </section>
  );
}
