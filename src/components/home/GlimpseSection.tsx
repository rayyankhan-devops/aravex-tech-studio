'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Terminal,
  Cpu,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Database,
  ArrowRight,
  Wifi,
  Sparkles,
} from 'lucide-react';
import { SectionHeading } from '@/components/common/SectionHeading';
import { Card } from '@/components/common/Card';
import { COMPANY_INFO } from '@/lib/brand';

type GlimpseTab = 'pos' | 'ai' | 'cloud' | 'attendance';

export function GlimpseSection() {
  const [activeTab, setActiveTab] = useState<GlimpseTab>('pos');

  return (
    <section className="relative py-20 sm:py-28 bg-[#F0F0EB] dark:bg-charcoal-900 border-t border-b border-gray-200 dark:border-graphite/40 transition-colors duration-300 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <SectionHeading
            eyebrow="LIVE SYSTEM TELEMETRY"
            title="A Glimpse into Our Architecture."
            description="Inspect simulated runtime interfaces across our retail POS engines, autonomous AI agent pipelines, cloud security gates, and biometric synchronization."
            className="mb-0"
          />

          {/* Interactive Tab Switcher */}
          <div className="flex flex-wrap items-center gap-2 bg-white dark:bg-charcoal-950 p-1.5 rounded-full border border-gray-200 dark:border-graphite/50 shadow-sm">
            <button
              onClick={() => setActiveTab('pos')}
              className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all ${
                activeTab === 'pos'
                  ? 'bg-charcoal-900 text-white dark:bg-white dark:text-charcoal-900 font-bold shadow-sm'
                  : 'text-gray-600 dark:text-slate-muted hover:text-black dark:hover:text-white'
              }`}
            >
              Arevex POS
            </button>
            <button
              onClick={() => setActiveTab('ai')}
              className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all ${
                activeTab === 'ai'
                  ? 'bg-charcoal-900 text-white dark:bg-white dark:text-charcoal-900 font-bold shadow-sm'
                  : 'text-gray-600 dark:text-slate-muted hover:text-black dark:hover:text-white'
              }`}
            >
              AI Agent Graph
            </button>
            <button
              onClick={() => setActiveTab('cloud')}
              className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all ${
                activeTab === 'cloud'
                  ? 'bg-charcoal-900 text-white dark:bg-white dark:text-charcoal-900 font-bold shadow-sm'
                  : 'text-gray-600 dark:text-slate-muted hover:text-black dark:hover:text-white'
              }`}
            >
              AWS DevSecOps
            </button>
            <button
              onClick={() => setActiveTab('attendance')}
              className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all ${
                activeTab === 'attendance'
                  ? 'bg-charcoal-900 text-white dark:bg-white dark:text-charcoal-900 font-bold shadow-sm'
                  : 'text-gray-600 dark:text-slate-muted hover:text-black dark:hover:text-white'
              }`}
            >
              Biometric Sync
            </button>
          </div>
        </div>

        {/* Live Interactive Terminal Window */}
        <div className="rounded-3xl bg-white dark:bg-charcoal-950 border border-gray-200 dark:border-graphite/60 overflow-hidden shadow-2xl transition-colors duration-300">
          {/* Terminal Top Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-graphite/40 bg-gray-50/70 dark:bg-charcoal-900/60 font-mono text-xs text-gray-500 dark:text-slate-muted">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
              <span className="ml-3 font-semibold text-gray-700 dark:text-slate-300">
                runtime-arevex://{activeTab}-node.telemetry
              </span>
            </div>
            <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>LIVE EDGE NODE</span>
            </div>
          </div>

          {/* Interactive Screen Display */}
          <div className="p-6 sm:p-10 font-mono text-xs sm:text-sm">
            <AnimatePresence mode="wait">
              {activeTab === 'pos' && (
                <motion.div
                  key="pos"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="flex flex-col gap-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pb-6 border-b border-gray-200 dark:border-graphite/40">
                    <div className="p-4 rounded-xl bg-gray-50 dark:bg-charcoal-900 border border-gray-200 dark:border-graphite/30">
                      <span className="text-gray-500 dark:text-slate-muted text-[11px] block uppercase">Register State</span>
                      <span className="font-bold text-gray-900 dark:text-white text-base">Terminal #04 (Lane 2)</span>
                    </div>
                    <div className="p-4 rounded-xl bg-gray-50 dark:bg-charcoal-900 border border-gray-200 dark:border-graphite/30">
                      <span className="text-gray-500 dark:text-slate-muted text-[11px] block uppercase">Network Mode</span>
                      <span className="font-bold text-emerald-600 dark:text-emerald-400 text-base flex items-center gap-1.5">
                        <Wifi className="w-4 h-4" /> 100% Offline Buffer Ready
                      </span>
                    </div>
                    <div className="p-4 rounded-xl bg-gray-50 dark:bg-charcoal-900 border border-gray-200 dark:border-graphite/30">
                      <span className="text-gray-500 dark:text-slate-muted text-[11px] block uppercase">Printer Driver</span>
                      <span className="font-bold text-gray-900 dark:text-white text-base">ESC/POS Thermal COM3 (Ready)</span>
                    </div>
                  </div>

                  {/* Simulated Receipt Cart Items */}
                  <div className="flex flex-col gap-2">
                    <div className="flex justify-between py-1 text-gray-500 dark:text-slate-muted text-xs border-b border-gray-100 dark:border-graphite/20">
                      <span>SKU / ITEM DESCRIPTION</span>
                      <span>QTY • RATE • AMOUNT</span>
                    </div>
                    <div className="flex justify-between py-2 text-gray-800 dark:text-slate-200">
                      <span>[SKU-84920] Olpers Pure Milk 1000ml</span>
                      <span>2 × PKR 290 = PKR 580</span>
                    </div>
                    <div className="flex justify-between py-2 text-gray-800 dark:text-slate-200">
                      <span>[SKU-10294] Tapal Danedar Tea Pouch 950g</span>
                      <span>1 × PKR 1,450 = PKR 1,450</span>
                    </div>
                    <div className="flex justify-between py-2 text-gray-800 dark:text-slate-200">
                      <span>[SKU-39481] Dawn Bread Large White</span>
                      <span>1 × PKR 210 = PKR 210</span>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-gray-100 dark:bg-charcoal-900 border border-gray-200 dark:border-graphite/40 flex flex-wrap justify-between items-center gap-4">
                    <span className="text-gray-600 dark:text-slate-300">TOTAL PAYABLE (INCL. GST)</span>
                    <span className="text-xl sm:text-2xl font-bold text-emerald-600 dark:text-emerald-400">
                      PKR 2,240.00
                    </span>
                  </div>
                </motion.div>
              )}

              {activeTab === 'ai' && (
                <motion.div
                  key="ai"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="flex flex-col gap-4 text-xs sm:text-sm"
                >
                  <div className="p-4 rounded-xl bg-gray-50 dark:bg-charcoal-900 border border-gray-200 dark:border-graphite/40 flex items-center justify-between">
                    <span className="font-bold text-gray-900 dark:text-white flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-amber-500" />
                      Multi-Agent Pipeline Graph
                    </span>
                    <span className="text-xs text-gray-500 dark:text-slate-muted">Lat: 138ms • Cost: $0.0014</span>
                  </div>

                  <div className="space-y-3 font-mono text-xs">
                    <div className="p-3 rounded-lg bg-gray-100/60 dark:bg-charcoal-850 text-gray-750 dark:text-slate-300">
                      <span className="text-blue-600 dark:text-blue-400 font-bold">[00:00.02] Query Ingestion:</span> &quot;Customer requesting return authorization for Order #ARX-9284.&quot;
                    </div>
                    <div className="p-3 rounded-lg bg-gray-100/60 dark:bg-charcoal-850 text-gray-750 dark:text-slate-300">
                      <span className="text-purple-600 dark:text-purple-400 font-bold">[00:00.06] Vector Retrieval:</span> Cosine similarity lookup in pgvector (3 match clusters returned, threshold 0.89).
                    </div>
                    <div className="p-3 rounded-lg bg-gray-100/60 dark:bg-charcoal-850 text-gray-750 dark:text-slate-300">
                      <span className="text-emerald-600 dark:text-emerald-400 font-bold">[00:00.11] Schema Validation:</span> Pydantic schema verified return eligibility: <strong>Within 14-day policy window</strong>.
                    </div>
                    <div className="p-3 rounded-lg bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-500/30 text-emerald-700 dark:text-emerald-300 font-bold">
                      [00:00.14] Resolution Dispatched: Return label auto-generated and dispatched via WhatsApp Webhook.
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'cloud' && (
                <motion.div
                  key="cloud"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="flex flex-col gap-4 text-xs sm:text-sm"
                >
                  <div className="p-4 rounded-xl bg-gray-50 dark:bg-charcoal-900 border border-gray-200 dark:border-graphite/40 flex items-center justify-between">
                    <span className="font-bold text-gray-900 dark:text-white flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-emerald-500" />
                      AWS DevSecOps Automated Gate
                    </span>
                    <span className="text-emerald-600 dark:text-emerald-400 font-bold text-xs">PIPELINE PASSED</span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                    <div className="p-3 rounded-xl bg-gray-100/60 dark:bg-charcoal-850">
                      <span className="text-gray-500 dark:text-slate-muted text-[11px] block">Trivy Scan</span>
                      <span className="font-bold text-emerald-600 dark:text-emerald-400">0 Critical CVEs</span>
                    </div>
                    <div className="p-3 rounded-xl bg-gray-100/60 dark:bg-charcoal-850">
                      <span className="text-gray-500 dark:text-slate-muted text-[11px] block">Gitleaks Audit</span>
                      <span className="font-bold text-emerald-600 dark:text-emerald-400">Clean (No Secrets)</span>
                    </div>
                    <div className="p-3 rounded-xl bg-gray-100/60 dark:bg-charcoal-850">
                      <span className="text-gray-500 dark:text-slate-muted text-[11px] block">Terraform Plan</span>
                      <span className="font-bold text-gray-900 dark:text-white">0 Drift Detected</span>
                    </div>
                    <div className="p-3 rounded-xl bg-gray-100/60 dark:bg-charcoal-850">
                      <span className="text-gray-500 dark:text-slate-muted text-[11px] block">ECS Blue/Green</span>
                      <span className="font-bold text-emerald-600 dark:text-emerald-400">100% Traffic Switched</span>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'attendance' && (
                <motion.div
                  key="attendance"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="flex flex-col gap-4 text-xs sm:text-sm"
                >
                  <div className="p-4 rounded-xl bg-gray-50 dark:bg-charcoal-900 border border-gray-200 dark:border-graphite/40 flex items-center justify-between">
                    <span className="font-bold text-gray-900 dark:text-white flex items-center gap-2">
                      <Clock className="w-4 h-4 text-blue-500" />
                      ZKTeco Biometric Socket Daemon
                    </span>
                    <span className="text-xs text-emerald-600 dark:text-emerald-400 font-bold">4 Devices Connected</span>
                  </div>

                  <div className="flex flex-col gap-2">
                    <div className="p-2.5 rounded-lg bg-gray-100/60 dark:bg-charcoal-850 flex justify-between items-center text-xs">
                      <span>[DEV-01 Main Gate] Emp #1042 — Muhammad Usman</span>
                      <span className="text-emerald-600 dark:text-emerald-400 font-bold">08:54:12 AM (On Time)</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-gray-100/60 dark:bg-charcoal-850 flex justify-between items-center text-xs">
                      <span>[DEV-02 Factory 3] Emp #2109 — Zainab Bibi</span>
                      <span className="text-emerald-600 dark:text-emerald-400 font-bold">08:58:30 AM (Grace Applied)</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-gray-100/60 dark:bg-charcoal-850 flex justify-between items-center text-xs">
                      <span>[DEV-03 Warehouse] Emp #0821 — Bilal Ahmed</span>
                      <span className="text-amber-600 dark:text-amber-400 font-bold">09:12:05 AM (Late 12m)</span>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Global Studio Metric Counters */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-8">
          {COMPANY_INFO.metrics.map((m) => (
            <div
              key={m.label}
              className="p-5 rounded-2xl bg-white dark:bg-charcoal-950 border border-gray-200 dark:border-graphite/40 text-center flex flex-col justify-between shadow-sm"
            >
              <span className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white tracking-tight">
                {m.value}
              </span>
              <span className="font-mono text-[11px] text-gray-500 dark:text-slate-muted uppercase mt-2">
                {m.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
