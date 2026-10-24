'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Cpu, Cloud, Layers, GraduationCap } from 'lucide-react';
import { COMPANY_INFO } from '@/lib/brand';

export function IntroStatement() {
  const pillars = [
    { title: 'Software Engineering', icon: Code2, desc: 'Web apps, cross-platform mobile, and desktop POS software.' },
    { title: 'Artificial Intelligence', icon: Cpu, desc: 'Autonomous LLM agents, tool-calling pipelines, and RAG systems.' },
    { title: 'Cloud Infrastructure', icon: Cloud, desc: 'Terraform IaC, AWS/GCP architecture, and DevSecOps pipelines.' },
    { title: 'Commercial Products', icon: Layers, desc: 'Point of sale, multi-warehouse inventory, and school MIS systems.' },
    { title: 'Practical Education', icon: GraduationCap, desc: 'Accessible technology courses empowering future engineers.' },
  ];

  return (
    <section id="intro-statement" className="relative py-24 sm:py-32 bg-charcoal-900 text-warmWhite overflow-hidden border-b border-graphite/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-12 lg:gap-16">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-slate-muted" />
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-slate-muted font-bold">
              02 / CORE PHILOSOPHY
            </span>
          </div>

          {/* Oversized Editorial Typography */}
          <div className="max-w-5xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.2] text-slate-300">
              <span className="font-semibold text-white">
                {COMPANY_INFO.introStatement}
              </span>{' '}
              At Arevex Tech Studio, we bridge high-velocity software engineering, autonomous artificial intelligence, bulletproof cloud infrastructure, and practical technical education into one cohesive studio.
            </h2>
          </div>

          {/* 5 Interconnected Strategic Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 pt-8">
            {pillars.map((p, idx) => {
              const Icon = p.icon;
              return (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  className="p-5 rounded-xl bg-charcoal-850/60 border border-graphite/40 hover:border-slate-muted/40 transition-colors flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2 rounded-lg bg-charcoal-800 text-slate-light">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="font-mono text-xs text-slate-muted">0{idx + 1}</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm text-white mb-1.5">{p.title}</h3>
                    <p className="text-xs text-slate-400 leading-relaxed">{p.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
