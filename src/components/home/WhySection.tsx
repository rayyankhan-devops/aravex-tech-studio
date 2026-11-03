'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Cpu,
  Layers,
  ShieldCheck,
  Zap,
  CheckCircle2,
  Terminal,
  Activity,
  Server,
  Lock,
  Pause,
  Play,
} from 'lucide-react';

interface Principle {
  id: string;
  num: string;
  title: string;
  tag: string;
  shortStatement: string;
  metric: string;
  icon: React.ElementType;
}

const PRINCIPLES: Principle[] = [
  {
    id: 'engineering',
    num: '01',
    title: 'Zero-Compromise Engineering',
    tag: 'DISTRIBUTED ARCHITECTURE',
    shortStatement: 'Production-hardened architectures for high throughput, sub-50ms TTFB, and zero jitter.',
    metric: '< 24ms P99 Latency',
    icon: Cpu,
  },
  {
    id: 'design',
    num: '02',
    title: 'Design & Interaction Precision',
    tag: 'FLUID MOTION & ERGONOMICS',
    shortStatement: 'Pixel-perfect typography and fluid 60fps micro-motion engineered with intent.',
    metric: '60 FPS Native Feel',
    icon: Layers,
  },
  {
    id: 'security',
    num: '03',
    title: 'Security by Default',
    tag: 'AUTOMATED DEVSECOPS',
    shortStatement: 'Automated Trivy container audits, hardened credential vaults, and zero-trust gates.',
    metric: '0 Known CVEs Policy',
    icon: ShieldCheck,
  },
  {
    id: 'direct-access',
    num: '04',
    title: 'Direct Architect Collaboration',
    tag: 'ZERO ACCOUNT REPS',
    shortStatement: 'Direct collaboration with hands-on systems leads and founders — never junior intermediaries.',
    metric: '100% Direct Access',
    icon: Zap,
  },
  {
    id: 'self-healing',
    num: '05',
    title: 'Self-Healing Topologies',
    tag: 'MULTI-AZ RESILIENCE',
    shortStatement: 'Automated blue/green deployments with multi-region failover and live health auto-rollbacks.',
    metric: '0s Unplanned Downtime',
    icon: CheckCircle2,
  },
  {
    id: 'clean-code',
    num: '06',
    title: '100% Client IP & Clean Code',
    tag: 'TOTAL OWNERSHIP',
    shortStatement: 'Type-safe modular codebases, strict documentation, and complete IP ownership.',
    metric: '100% Codebase Ownership',
    icon: Terminal,
  },
];

export function WhySection() {
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const [isManualPaused, setIsManualPaused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isSimulatingOutage, setIsSimulatingOutage] = useState(false);
  const [interactiveBounce, setInteractiveBounce] = useState(0);

  const isPaused = isManualPaused || isHovered;

  const activePrinciple = PRINCIPLES[activeIdx];

  // Tripled list for an uninterrupted seamless vertical loop
  const verticalPrinciples = [...PRINCIPLES, ...PRINCIPLES, ...PRINCIPLES];

  return (
    <section
      id="why-aravex"
      className="relative py-14 sm:py-18 bg-[#F7F7F5] dark:bg-charcoal-950 text-charcoal-900 dark:text-warmWhite overflow-hidden border-t border-gray-200 dark:border-graphite/40 transition-colors duration-300"
    >
      {/* Background Architectural Blueprint Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:36px_36px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Theodore-Style Minimalist Eyebrow & Controls */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 shrink-0" aria-hidden="true">
              <span className="w-1.5 h-3 rounded-[2px] bg-[#D45361]" />
              <span className="w-1 h-3 rounded-[2px] bg-[#EA7047]" />
              <span className="w-1 h-3 rounded-[2px] bg-[#ECEB54]" />
              <span className="w-1 h-3 rounded-[2px] bg-[#5CB554]" />
              <span className="w-1 h-3 rounded-[2px] bg-[#4D66EC]" />
            </div>
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-gray-600 dark:text-slate-300 font-bold">
              WHY ARAVEX • ARCHITECTURE CONSOLE
            </span>
          </div>

          <button
            onClick={() => setIsManualPaused((prev) => !prev)}
            className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-white dark:bg-charcoal-900 border border-gray-200 dark:border-graphite/50 text-gray-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors cursor-pointer shadow-xs"
            aria-label={isManualPaused ? 'Resume stream' : 'Pause stream'}
          >
            {isManualPaused ? (
              <>
                <Play className="w-2.5 h-2.5 text-emerald-500" />
                <span>RESUME STREAM</span>
              </>
            ) : isHovered ? (
              <>
                <Pause className="w-2.5 h-2.5 text-amber-500" />
                <span>PAUSED ON HOVER</span>
              </>
            ) : (
              <>
                <Pause className="w-2.5 h-2.5 text-emerald-500" />
                <span>PAUSE ON HOVER</span>
              </>
            )}
          </button>
        </div>

        {/* Section Heading */}
        <div className="max-w-2xl mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-gray-950 dark:text-white uppercase leading-[1.1] mb-2">
            Six Principles. Zero Compromises.
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 dark:text-slate-300 leading-relaxed font-normal">
            Click any principle in the vertical stream to inspect its live architecture telemetry.
          </p>
        </div>

        {/* 2-Column Split: Compact Vertical Gliding Cards (Left) + Compact Terminal HUD (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-start">
          
          {/* Left Column: Compact Vertical Stream */}
          <div
            className="principles-stream-container lg:col-span-6 relative h-[380px] sm:h-[400px] overflow-hidden rounded-2xl p-0.5"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Top and Bottom Soft Gradient Masks */}
            <div className="pointer-events-none absolute top-0 left-0 right-0 h-10 sm:h-12 bg-gradient-to-b from-[#F7F7F5] dark:from-charcoal-950 to-transparent z-10" />
            <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-10 sm:h-12 bg-gradient-to-t from-[#F7F7F5] dark:from-charcoal-950 to-transparent z-10" />

            {/* Seamless Vertical Motion Track */}
            <div
              className="flex flex-col gap-2 py-1 animate-marquee-vertical"
              style={{
                animationPlayState: isPaused ? 'paused' : 'running',
              }}
            >
              {verticalPrinciples.map((p, idx) => {
                const principleIndex = idx % PRINCIPLES.length;
                const isSelected = activeIdx === principleIndex;
                const Icon = p.icon;

                return (
                  <div
                    key={`${p.id}-${idx}`}
                    onClick={() => {
                      setActiveIdx(principleIndex);
                    }}
                    className={`group relative p-3 sm:p-3.5 rounded-xl cursor-pointer transition-all duration-300 border select-none ${
                      isSelected
                        ? 'opacity-100 scale-[1.01] bg-white dark:bg-charcoal-900 border-emerald-500/80 shadow-md ring-1 ring-emerald-500/25 z-20'
                        : 'opacity-35 hover:opacity-85 scale-100 bg-white/50 dark:bg-charcoal-900/40 border-gray-200/80 dark:border-graphite/40 hover:border-gray-300 dark:hover:border-graphite/70'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-start gap-2.5 min-w-0">
                        <div
                          className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-all ${
                            isSelected
                              ? 'bg-emerald-500 text-white shadow-xs'
                              : 'bg-gray-100 dark:bg-charcoal-800 text-gray-600 dark:text-slate-400 group-hover:text-emerald-500'
                          }`}
                        >
                          <Icon className="w-3.5 h-3.5" />
                        </div>

                        <div className="min-w-0">
                          <span className="block font-mono text-[9px] uppercase font-bold text-emerald-600 dark:text-emerald-400 mb-0.5 tracking-wider">
                            {p.tag}
                          </span>
                          <h3 className="text-xs sm:text-sm font-bold text-gray-950 dark:text-white leading-tight mb-0.5">
                            {p.title}
                          </h3>
                          <p className="text-[11px] text-gray-600 dark:text-slate-400 font-normal leading-snug line-clamp-1">
                            {p.shortStatement}
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-col items-end gap-1 shrink-0">
                        <span className="font-mono text-[10px] font-bold text-gray-400 dark:text-slate-500">
                          {p.num}
                        </span>
                        {isSelected && (
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Compact Architecture HUD Console */}
          <div className="lg:col-span-6 lg:sticky lg:top-24">
            <div className="relative rounded-2xl bg-charcoal-950 text-white border border-graphite/70 p-4 sm:p-5 shadow-xl overflow-hidden h-[380px] sm:h-[400px] flex flex-col justify-between">
              
              {/* Console Ambient Glow */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-emerald-500/15 via-teal-500/10 to-transparent rounded-full blur-2xl pointer-events-none" />

              {/* Console Header Bar */}
              <div className="relative z-10 flex items-center justify-between pb-3 border-b border-graphite/60">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="font-mono text-[11px] uppercase tracking-wider text-emerald-400 font-bold">
                    SYSTEM HUD // LIVE TELEMETRY
                  </span>
                </div>

                <div className="font-mono text-[10px] text-slate-400">
                  PRINCIPLE // {activePrinciple.num}
                </div>
              </div>

              {/* Dynamic Interactive Telemetry Stage */}
              <div className="relative z-10 py-3 my-auto">
                <AnimatePresence mode="wait">
                  {activePrinciple.id === 'engineering' && (
                    <motion.div
                      key="hud-engineering"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.25 }}
                      className="flex flex-col gap-4"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="font-mono text-[10px] text-slate-400 uppercase">Edge Response Latency</span>
                          <div className="text-2xl sm:text-3xl font-black text-emerald-400 font-mono mt-0.5">
                            18.4 ms
                          </div>
                        </div>
                        <div className="text-right">
                          <span className="font-mono text-[10px] text-slate-400 uppercase">Throughput</span>
                          <div className="text-lg sm:text-xl font-bold text-white font-mono mt-0.5">
                            50,000+ RPS
                          </div>
                        </div>
                      </div>

                      {/* Animated Concurrency Pulse Visualizer */}
                      <div className="flex items-end gap-1 h-14 pt-2 px-2.5 rounded-xl bg-charcoal-900 border border-graphite/60">
                        {[40, 75, 55, 90, 65, 80, 95, 60, 85, 70, 100, 80, 60, 90, 75, 85, 95, 70, 60, 85].map((h, i) => (
                          <motion.div
                            key={i}
                            animate={{ height: [`${h * 0.4}%`, `${h}%`, `${h * 0.6}%`] }}
                            transition={{ duration: 1.5 + (i % 5) * 0.2, repeat: Infinity, ease: 'easeInOut' }}
                            className="flex-1 rounded-[1px] bg-gradient-to-t from-emerald-600 via-teal-400 to-cyan-300"
                          />
                        ))}
                      </div>

                      <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 pt-1.5 border-t border-graphite/40">
                        <span>P99: 22ms Guaranteed</span>
                        <span className="text-emerald-400">Jitter: 0.12ms</span>
                      </div>
                    </motion.div>
                  )}

                  {activePrinciple.id === 'design' && (
                    <motion.div
                      key="hud-design"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.25 }}
                      className="flex flex-col gap-3"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="font-mono text-[10px] text-slate-400 uppercase">Smoothness</span>
                          <div className="text-2xl sm:text-3xl font-black text-cyan-400 font-mono mt-0.5">
                            60.0 FPS
                          </div>
                        </div>
                        <div className="text-right">
                          <span className="font-mono text-[10px] text-slate-400 uppercase">Frame Time</span>
                          <div className="text-lg sm:text-xl font-bold text-white font-mono mt-0.5">
                            16.6 ms
                          </div>
                        </div>
                      </div>

                      {/* Interactive Tactile Playground */}
                      <div className="p-3.5 rounded-xl bg-charcoal-900 border border-graphite/60 text-center flex flex-col items-center justify-center gap-2">
                        <span className="font-mono text-[10px] text-slate-400">
                          Interactive Spring Physics Micro-Canvas
                        </span>

                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => setInteractiveBounce((prev) => prev + 1)}
                          className="px-4 py-2 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 text-charcoal-950 font-bold font-mono text-[10px] tracking-wider uppercase shadow-md shadow-cyan-500/20 cursor-pointer"
                        >
                          Trigger Motion Spec ({interactiveBounce})
                        </motion.button>

                        <span className="text-[10px] font-mono text-cyan-300">
                          Hardware Accelerated CSS Transform
                        </span>
                      </div>
                    </motion.div>
                  )}

                  {activePrinciple.id === 'security' && (
                    <motion.div
                      key="hud-security"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.25 }}
                      className="flex flex-col gap-3"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="font-mono text-[10px] text-slate-400 uppercase">Container Audits</span>
                          <div className="text-2xl sm:text-3xl font-black text-emerald-400 font-mono mt-0.5">
                            0 CVEs
                          </div>
                        </div>
                        <div className="text-right">
                          <span className="font-mono text-[10px] text-slate-400 uppercase">Security Gate</span>
                          <div className="text-lg sm:text-xl font-bold text-emerald-400 font-mono mt-0.5">
                            PASS
                          </div>
                        </div>
                      </div>

                      {/* Live Security Radar Checklist */}
                      <div className="flex flex-col gap-1.5 p-3 rounded-xl bg-charcoal-900 border border-graphite/60 font-mono text-[11px]">
                        <div className="flex items-center justify-between text-slate-300">
                          <span className="flex items-center gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                            <span>Trivy Container Scan</span>
                          </span>
                          <span className="text-emerald-400 font-bold">100% CLEAN</span>
                        </div>
                        <div className="flex items-center justify-between text-slate-300">
                          <span className="flex items-center gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                            <span>Vault Secrets</span>
                          </span>
                          <span className="text-emerald-400 font-bold">ENCRYPTED</span>
                        </div>
                        <div className="flex items-center justify-between text-slate-300">
                          <span className="flex items-center gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                            <span>RBAC Least Privilege</span>
                          </span>
                          <span className="text-emerald-400 font-bold">ENFORCED</span>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {activePrinciple.id === 'direct-access' && (
                    <motion.div
                      key="hud-direct-access"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.25 }}
                      className="flex flex-col gap-2.5 font-mono text-[11px]"
                    >
                      <span className="text-slate-400 uppercase text-[10px]">Direct Terminal Session</span>
                      
                      <div className="p-3 rounded-xl bg-charcoal-900 border border-graphite/60 flex flex-col gap-1.5 text-slate-300">
                        <div className="text-emerald-400 text-[10px]">
                          &gt; aravex connect --architects --direct
                        </div>
                        <div className="text-slate-400 text-[10px]">
                          [ESTABLISHED] Session opened directly with Systems Leads.
                        </div>
                        <div className="p-2 rounded-lg bg-charcoal-850 border border-graphite/40 text-white mt-0.5 text-[10px]">
                          <span className="text-cyan-400 font-bold">Muhammad Rayyan:</span> &ldquo;Architecting the cache layer for zero downtime.&rdquo;
                        </div>
                        <div className="text-emerald-400 text-[10px] pt-0.5">
                          ✓ Zero account reps. Direct engineer velocity.
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {activePrinciple.id === 'self-healing' && (
                    <motion.div
                      key="hud-self-healing"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.25 }}
                      className="flex flex-col gap-3"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="font-mono text-[10px] text-slate-400 uppercase">Topology Status</span>
                          <div className="text-lg sm:text-xl font-black text-emerald-400 font-mono mt-0.5">
                            {isSimulatingOutage ? 'AUTO-ROUTING (0s DOWNTIME)' : 'ALL NODES HEALTHY'}
                          </div>
                        </div>
                      </div>

                      {/* Interactive Mesh Node Cluster */}
                      <div className="grid grid-cols-3 gap-2 p-2.5 rounded-xl bg-charcoal-900 border border-graphite/60 font-mono text-center">
                        <div className={`p-2 rounded-lg border ${isSimulatingOutage ? 'border-red-500/50 bg-red-500/10 text-red-400' : 'border-emerald-500/50 bg-emerald-500/10 text-emerald-300'}`}>
                          <Server className="w-4 h-4 mx-auto mb-0.5" />
                          <div className="text-[10px] font-bold">Node A (US)</div>
                          <div className="text-[9px] opacity-75">{isSimulatingOutage ? 'DRAINING' : 'PRIMARY'}</div>
                        </div>

                        <div className="p-2 rounded-lg border border-emerald-500/50 bg-emerald-500/10 text-emerald-300">
                          <Server className="w-4 h-4 mx-auto mb-0.5" />
                          <div className="text-[10px] font-bold">Node B (EU)</div>
                          <div className="text-[9px] opacity-75">{isSimulatingOutage ? '100% LOAD' : 'STANDBY'}</div>
                        </div>

                        <div className="p-2 rounded-lg border border-emerald-500/50 bg-emerald-500/10 text-emerald-300">
                          <Server className="w-4 h-4 mx-auto mb-0.5" />
                          <div className="text-[10px] font-bold">Node C (AP)</div>
                          <div className="text-[9px] opacity-75">REDUNDANT</div>
                        </div>
                      </div>

                      <button
                        onClick={() => setIsSimulatingOutage((prev) => !prev)}
                        className="w-full py-1.5 rounded-lg bg-charcoal-850 hover:bg-charcoal-800 border border-graphite/60 text-[10px] font-mono font-bold text-slate-200 hover:text-emerald-400 transition-colors cursor-pointer"
                      >
                        {isSimulatingOutage ? 'Reset Cluster' : 'Simulate Zone Failure'}
                      </button>
                    </motion.div>
                  )}

                  {activePrinciple.id === 'clean-code' && (
                    <motion.div
                      key="hud-clean-code"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.25 }}
                      className="flex flex-col gap-2.5 font-mono"
                    >
                      <span className="text-[10px] text-slate-400 uppercase">Cryptographic IP Certificate</span>

                      <div className="p-3.5 rounded-xl bg-charcoal-900 border border-emerald-500/30 flex flex-col gap-1.5 text-[11px]">
                        <div className="flex items-center justify-between text-emerald-400 pb-1.5 border-b border-graphite/60">
                          <span className="font-bold text-[10px]">VERIFIED REPOSITORY TRANSFER</span>
                          <Lock className="w-3.5 h-3.5" />
                        </div>
                        <div className="text-slate-300 text-[10px]">
                          • 100% Client Intellectual Property Rights
                        </div>
                        <div className="text-slate-300 text-[10px]">
                          • Strict Type-Safety: 0 TypeScript `any` bypasses
                        </div>
                        <div className="text-slate-300 text-[10px]">
                          • Modular Monorepo Architecture &amp; Auto-Docs
                        </div>
                        <div className="pt-1 text-cyan-400 text-[10px]">
                          Complete ownership handed over at every milestone.
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Console Footer */}
              <div className="relative z-10 pt-2.5 border-t border-graphite/60 flex items-center justify-between text-[10px] font-mono text-slate-400">
                <span className="text-emerald-400 font-bold">
                  {activePrinciple.metric}
                </span>
                <span>ARAVEX ENGINE VERIFIED</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
