'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, Code2, Cpu, Database, Globe2, ShieldCheck, Sparkles, Terminal, Smartphone, Palette } from 'lucide-react';
import { SectionHeading } from '@/components/common/SectionHeading';
import { Card } from '@/components/common/Card';
import { GithubIcon, LinkedinIcon } from '@/components/common/SocialIcons';
import { COMPANY_INFO } from '@/lib/brand';
import { TEAM_MEMBERS, TeamMember } from '@/data/team';

export function TeamSection() {
  const founders = COMPANY_INFO.founders;
  const [selectedDept, setSelectedDept] = useState<string>('All');

  const domainIcons = [Cpu, Code2, Database];

  const departments = [
    'All',
    'Cloud & DevOps',
    'AI & Automation',
    'Software Engineering',
    'Mobile & Design',
  ];

  // Specialists excluding founders for the second grid
  const specialists = TEAM_MEMBERS.filter((m) => !m.isFounder);

  const filteredSpecialists =
    selectedDept === 'All'
      ? specialists
      : specialists.filter((m) => m.department === selectedDept);

  return (
    <section className="relative py-24 sm:py-32 bg-white dark:bg-charcoal-900 text-charcoal-900 dark:text-warmWhite border-t border-b border-gray-200 dark:border-graphite/40 transition-colors duration-300 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section 1: Studio Founders & Architects */}
        <SectionHeading
          eyebrow="LEADERSHIP"
          title="Meet the Engineering Founders."
          description="Hands-on systems architects and product leads who directly design, code, and deliver every client milestone."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {founders.map((founder, idx) => {
            const Icon = domainIcons[idx] || Users;
            const hasFormer = 'formerCompany' in founder && founder.formerCompany;
            return (
              <motion.div
                key={founder.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, duration: 0.5 }}
              >
                <Card className="h-full flex flex-col justify-between bg-[#F7F7F5] dark:bg-charcoal-950 border-gray-200 dark:border-graphite/50 p-7 sm:p-8 shadow-sm hover:shadow-xl transition-all">
                  <div>
                    {/* Founder Icon & Badge */}
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                      <div className="w-13 h-13 rounded-2xl bg-white dark:bg-charcoal-850 border border-gray-200 dark:border-graphite/50 flex items-center justify-center text-charcoal-800 dark:text-slate-light shadow-sm">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div className="flex flex-wrap items-center gap-2">
                        {hasFormer && (
                          <span className="font-mono text-[11px] uppercase px-3 py-1 rounded-full bg-amber-500/15 text-amber-800 dark:text-amber-300 font-bold border border-amber-500/30 flex items-center gap-1.5 shadow-sm whitespace-nowrap">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                            <span>{founder.formerCompany}</span>
                          </span>
                        )}
                        <span className="font-mono text-[11px] uppercase px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold border border-emerald-500/20 whitespace-nowrap">
                          Co-Founder
                        </span>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-950 dark:text-white mb-1">
                      {founder.name}
                    </h3>

                    <p className="text-xs sm:text-sm font-semibold text-emerald-600 dark:text-emerald-400 mb-4">
                      {founder.role}
                    </p>

                    <div className="p-3 rounded-xl bg-white/70 dark:bg-charcoal-900 border border-gray-200 dark:border-graphite/30 text-xs font-mono text-gray-800 dark:text-slate-200 mb-4">
                      <span className="text-[10px] uppercase text-gray-500 dark:text-slate-400 block font-semibold mb-0.5">
                        Core Focus
                      </span>
                      <span>{founder.focus}</span>
                    </div>

                    <p className="text-sm text-gray-700 dark:text-slate-300 leading-relaxed mb-6 font-normal">
                      {founder.bio}
                    </p>
                  </div>

                  <div className="pt-5 border-t border-gray-200 dark:border-graphite/30 flex items-center justify-between">
                    <span className="font-mono text-xs font-semibold text-gray-500 dark:text-slate-400">
                      STUDIO CO-FOUNDER
                    </span>
                    <div className="flex items-center gap-2.5">
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

        {/* Section 2: Global Domain Leads & Specialized Engineers */}
        <div className="pt-8 border-t border-gray-200 dark:border-graphite/40">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-charcoal-800 text-slate-700 dark:text-slate-300 font-mono text-xs font-semibold mb-3 border border-gray-200 dark:border-graphite/40">
                <Globe2 className="w-3.5 h-3.5 text-emerald-500" />
                <span>DISTRIBUTED ENGINEERING ROSTER</span>
              </div>
              <h3 className="text-3xl font-black text-gray-950 dark:text-white">
                Global Practice Leads &amp; Specialists
              </h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-slate-300 max-w-2xl mt-2">
                Distributed talent across the UK, UAE, Germany, Japan, Spain, Egypt, and Pakistan powering specialized practice areas.
              </p>
            </div>

            {/* Department Filter Pills - Standalone Pills */}
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
              {departments.map((dept) => {
                const count =
                  dept === 'All'
                    ? specialists.length
                    : specialists.filter((m) => m.department === dept).length;
                const isActive = selectedDept === dept;
                return (
                  <button
                    key={dept}
                    onClick={() => setSelectedDept(dept)}
                    className={`inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer whitespace-nowrap shadow-sm hover:scale-[1.02] active:scale-[0.98] ${
                      isActive
                        ? 'bg-charcoal-950 text-white dark:bg-white dark:text-charcoal-950 font-bold shadow-md ring-2 ring-charcoal-950/20 dark:ring-white/30'
                        : 'bg-white dark:bg-charcoal-900 text-gray-700 dark:text-slate-300 border border-gray-200 dark:border-graphite/60 hover:border-gray-400 dark:hover:border-slate-400 hover:text-black dark:hover:text-white'
                    }`}
                  >
                    <span>{dept}</span>
                    <span
                      className={`inline-flex items-center justify-center px-1.5 py-0.5 rounded-full text-[10px] font-mono font-bold ${
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

          {/* Specialists Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredSpecialists.map((member, i) => (
                <motion.div
                  key={member.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                >
                  <Card className="h-full flex flex-col justify-between p-6 bg-[#F7F7F5] dark:bg-charcoal-950 border-gray-200 dark:border-graphite/40 hover:border-slate-400 dark:hover:border-slate-500 transition-all shadow-sm">
                    <div>
                      {/* Country & Department Tag */}
                      <div className="flex items-center justify-between mb-4">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white dark:bg-charcoal-850 border border-gray-200 dark:border-graphite/40 text-xs font-mono text-gray-800 dark:text-slate-200 font-medium">
                          <span>{member.flag}</span>
                          <span>{member.location}</span>
                        </span>
                        {member.formerCompany ? (
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/10 text-amber-700 dark:text-amber-400 font-bold border border-amber-500/20">
                            {member.formerCompany}
                          </span>
                        ) : (
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-200 dark:bg-charcoal-800 text-gray-700 dark:text-slate-300 font-semibold">
                            {member.department}
                          </span>
                        )}
                      </div>

                      {/* Name & Role */}
                      <h4 className="text-xl font-bold text-gray-950 dark:text-white mb-0.5">
                        {member.name}
                      </h4>
                      <p className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 mb-3">
                        {member.role}
                      </p>

                      {/* Specialization */}
                      <div className="p-2.5 rounded-lg bg-white/70 dark:bg-charcoal-900 border border-gray-200/80 dark:border-graphite/30 text-xs font-mono text-gray-800 dark:text-slate-300 mb-3">
                        <span className="text-[10px] uppercase text-gray-500 dark:text-slate-400 block font-semibold mb-0.5">
                          Domain Expertise
                        </span>
                        <span>{member.specialization}</span>
                      </div>

                      {/* Bio */}
                      <p className="text-xs text-gray-600 dark:text-slate-300 leading-relaxed font-normal mb-4">
                        {member.bio}
                      </p>
                    </div>

                    {/* Footer Links */}
                    <div className="pt-3 border-t border-gray-200/80 dark:border-graphite/30 flex items-center justify-between text-xs font-mono text-gray-500 dark:text-slate-400">
                      <span>ARAVEX SPECIALIST</span>
                      <div className="flex items-center gap-2">
                        <a
                          href={member.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 rounded-lg bg-white dark:bg-charcoal-850 border border-gray-200 dark:border-graphite/40 text-gray-600 dark:text-slate-muted hover:text-black dark:hover:text-white transition-colors"
                          aria-label={`${member.name} GitHub`}
                        >
                          <GithubIcon className="w-3.5 h-3.5" />
                        </a>
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 rounded-lg bg-white dark:bg-charcoal-850 border border-gray-200 dark:border-graphite/40 text-gray-600 dark:text-slate-muted hover:text-black dark:hover:text-white transition-colors"
                          aria-label={`${member.name} LinkedIn`}
                        >
                          <LinkedinIcon className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  );
}
