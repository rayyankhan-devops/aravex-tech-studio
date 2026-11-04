'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight, Shield, Sparkles, Cpu, Activity, Zap, CheckCircle2, ArrowDown } from 'lucide-react';
import { MagneticButton } from '@/components/common/MagneticButton';
import { useTheme } from '@/context/ThemeContext';
import { BRAND_ASSETS } from '@/lib/brand';

export function HeroSection() {
  const { theme, mounted } = useTheme();
  const isLight = mounted && theme === 'light';

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section className="relative min-h-[75svh] lg:min-h-[72svh] flex flex-col justify-between pt-18 sm:pt-22 pb-5 sm:pb-6 overflow-hidden bg-[#F8F9FA] dark:bg-charcoal-950 text-charcoal-900 dark:text-warmWhite transition-colors duration-300">
      {/* Dynamic Ambient Background Artwork */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src={BRAND_ASSETS.generated.heroCinema}
          alt="ARAVEX Architectural Geometry"
          fill
          priority
          className="object-cover object-center opacity-10 dark:opacity-25 scale-105 transition-all duration-1000"
        />
        {/* Soft radial glow in corner */}
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-emerald-500/10 dark:bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-teal-500/10 dark:bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#F8F9FA] via-transparent to-[#F8F9FA]/60 dark:from-charcoal-950 dark:via-transparent dark:to-charcoal-950/80" />
      </div>

      {/* Main Expansive 2-Column Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-14 items-center">
          
          {/* Left Column: Focused, Punchy & Expanded Typography (7 cols) */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col items-start gap-4 sm:gap-5"
          >
            {/* Studio Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/90 dark:bg-charcoal-900/90 border border-gray-200/90 dark:border-graphite/70 shadow-sm backdrop-blur-md ring-1 ring-emerald-500/20"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="font-sans text-[11px] sm:text-xs uppercase tracking-wider text-gray-800 dark:text-slate-200 font-bold">
                ARAVEX TECH STUDIO • SYSTEMS ARCHITECTURE & AI
              </span>
            </motion.div>

            {/* Main Headline - Expansive, Crisp, Shorter Vertical Footprint */}
            <motion.h1
              variants={itemVariants}
              className="text-3xl sm:text-5xl lg:text-5xl xl:text-6xl font-black tracking-tight leading-[1.08] text-gray-950 dark:text-white"
            >
              Engineering Digital Systems{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-400 dark:from-emerald-400 dark:via-teal-300 dark:to-cyan-400">
                for High Concurrency.
              </span>
            </motion.h1>

            {/* Crisp, Breathable Statement */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-gray-700 dark:text-slate-300 font-normal max-w-xl leading-relaxed"
            >
              We design and ship custom enterprise software, autonomous AI agent pipelines, and hardened cloud infrastructure with Amazon technical leadership and zero-compromise reliability.
            </motion.p>

            {/* Action Row */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-3.5 pt-1"
            >
              <div className="relative p-[1px] rounded-full bg-gradient-to-r from-emerald-500/50 via-teal-400/30 to-emerald-500/50 shadow-md">
                <MagneticButton href="/contact" size="md" variant="primary">
                  <span className="font-bold">Start a Project</span>
                  <ArrowUpRight className="w-4 h-4 ml-1.5" />
                </MagneticButton>
              </div>

              <MagneticButton href="/services" size="md" variant="outline">
                <span className="font-semibold">Explore Services</span>
              </MagneticButton>
            </motion.div>

            {/* Horizontal Trust Metrics - Replaces Congested Vertical Badges */}
            <motion.div
              variants={itemVariants}
              className="pt-4 mt-1 border-t border-gray-200/90 dark:border-graphite/40 w-full flex flex-wrap items-center gap-y-2 gap-x-6 text-xs sm:text-sm font-medium text-gray-600 dark:text-slate-300"
            >
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>99.98% System Uptime</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>Amazon Technical Leadership</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>Global Remote Delivery</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Animated High Concurrency Visual (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.85, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            {/* Ambient Multi-layered Radiant Glows */}
            <motion.div
              animate={{
                scale: [1, 1.06, 1],
                opacity: [0.35, 0.65, 0.35],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute -inset-3 bg-gradient-to-tr from-emerald-500/30 via-teal-400/25 to-cyan-500/30 rounded-3xl blur-2xl pointer-events-none"
            />

            {/* Floating Frame Container */}
            <motion.div
              animate={{
                y: [-4, 6, -4],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="relative rounded-3xl p-2 sm:p-2.5 bg-gradient-to-b from-white/90 via-emerald-50/40 to-white/90 dark:from-charcoal-850/90 dark:via-charcoal-900/80 dark:to-charcoal-950/95 border border-emerald-500/30 dark:border-emerald-500/30 shadow-2xl backdrop-blur-xl group overflow-hidden"
            >
              {/* Corner Architectural Bracket Accents */}
              <div className="absolute top-4 left-4 z-20 font-mono text-[10px] text-emerald-500 dark:text-emerald-400 font-bold tracking-widest pointer-events-none opacity-80">
                [SYS//CORE-01]
              </div>
              <div className="absolute top-4 right-4 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-charcoal-950/80 backdrop-blur-md border border-emerald-500/30 font-mono text-[10px] text-emerald-400 shadow-lg">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                <span className="font-semibold">CONCURRENCY 64K</span>
              </div>

              {/* Main Visual Image Wrapper */}
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-charcoal-950">
                <Image
                  src={BRAND_ASSETS.generated.concurrencySystems}
                  alt="Engineering Digital Systems for High Concurrency"
                  fill
                  priority
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 42vw"
                />

                {/* Animated Diagonal Light Sweep / Scanner Beam */}
                <motion.div
                  initial={{ x: '-150%' }}
                  animate={{ x: '250%' }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    repeatDelay: 2,
                  }}
                  className="absolute inset-y-0 w-36 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent skew-x-12 pointer-events-none"
                />

                {/* Bottom Architectural Telemetry Bar */}
                <div className="absolute inset-x-3 bottom-3 z-20 p-2.5 sm:p-3 rounded-xl bg-charcoal-950/85 dark:bg-charcoal-950/90 backdrop-blur-md border border-emerald-500/25 shadow-xl flex items-center justify-between">
                  <div className="flex items-center gap-2 font-mono text-white text-[11px] sm:text-xs">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="font-bold tracking-tight">Zero-Lock Concurrency Engine</span>
                  </div>
                  <div className="flex items-center gap-2 font-mono text-[10px] sm:text-[11px] text-emerald-400 font-semibold">
                    <span className="px-1.5 py-0.5 rounded bg-emerald-500/15 border border-emerald-500/30">
                      p99 &lt; 0.8ms
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* Compact Bottom Bar */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex justify-between items-center text-xs font-sans text-gray-600 dark:text-slate-300 pt-3">
        <div className="flex items-center gap-2 font-mono">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
          <span>GLOBAL TECH STUDIO • PRODUCTION VERIFIED</span>
        </div>

        <a
          href="#intro-statement"
          aria-label="Scroll to content"
          className="flex items-center gap-1.5 text-gray-700 dark:text-slate-300 hover:text-black dark:hover:text-white transition-colors duration-200 font-semibold"
        >
          <span>EXPLORE</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
        </a>
      </div>
    </section>
  );
}
