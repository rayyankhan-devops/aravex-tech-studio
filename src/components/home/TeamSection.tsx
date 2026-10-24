'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Users, Code2, Cpu, Database, ArrowUpRight } from 'lucide-react';
import { SectionHeading } from '@/components/common/SectionHeading';
import { Card } from '@/components/common/Card';
import { GithubIcon, LinkedinIcon } from '@/components/common/SocialIcons';
import { COMPANY_INFO } from '@/lib/brand';

export function TeamSection() {
  const team = COMPANY_INFO.founders;

  const domainIcons = [Cpu, Code2, Database];

  return (
    <section className="relative py-24 sm:py-32 bg-white dark:bg-charcoal-900 text-charcoal-900 dark:text-warmWhite border-t border-b border-gray-200 dark:border-graphite/40 transition-colors duration-300 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="STUDIO LEADERSHIP & ARCHITECTS"
          title="Meet the Engineering Founders."
          description="Arevex is led by hands-on systems engineers and product architects. We code, design system topologies, and personally oversee our client codebases."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((founder, idx) => {
            const Icon = domainIcons[idx] || Users;
            return (
              <motion.div
                key={founder.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, duration: 0.5 }}
              >
                <Card className="h-full flex flex-col justify-between bg-[#F7F7F5] dark:bg-charcoal-950 border-gray-200 dark:border-graphite/50 p-8 shadow-sm hover:shadow-xl transition-all">
                  <div>
                    {/* Founder Icon & Badge */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-white dark:bg-charcoal-850 border border-gray-200 dark:border-graphite/50 flex items-center justify-center text-charcoal-800 dark:text-slate-light shadow-sm">
                        <Icon className="w-7 h-7" />
                      </div>
                      <span className="font-mono text-xs uppercase px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold border border-emerald-500/20">
                        Co-Founder
                      </span>
                    </div>

                    <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-1">
                      {founder.name}
                    </h3>

                    <p className="font-mono text-xs text-slate-600 dark:text-slate-400 font-bold mb-4">
                      {founder.role}
                    </p>

                    <div className="p-3 rounded-xl bg-white/70 dark:bg-charcoal-900 border border-gray-200 dark:border-graphite/30 text-xs font-mono text-gray-600 dark:text-slate-300 mb-6">
                      <span className="text-[10px] uppercase text-gray-400 dark:text-slate-muted block font-semibold mb-0.5">
                        Specialized Focus
                      </span>
                      <span>{founder.focus}</span>
                    </div>

                    <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-6">
                      {founder.bio}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-gray-200 dark:border-graphite/30 flex items-center justify-between">
                    <span className="font-mono text-xs text-gray-500 dark:text-slate-muted">
                      AREVEX STUDIO LEAD
                    </span>
                    <div className="flex items-center gap-3">
                      <a
                        href={founder.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-white dark:bg-charcoal-850 border border-gray-200 dark:border-graphite/40 text-gray-600 dark:text-slate-muted hover:text-black dark:hover:text-white transition-colors"
                        aria-label="GitHub Profile"
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                      <a
                        href={founder.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-white dark:bg-charcoal-850 border border-gray-200 dark:border-graphite/40 text-gray-600 dark:text-slate-muted hover:text-black dark:hover:text-white transition-colors"
                        aria-label="LinkedIn Profile"
                      >
                        <LinkedinIcon className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
