import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Users, Compass, ShieldCheck, Cpu, Code2, GraduationCap, ArrowUpRight, Globe2 } from 'lucide-react';
import { SectionHeading } from '@/components/common/SectionHeading';
import { Card } from '@/components/common/Card';
import { MagneticButton } from '@/components/common/MagneticButton';
import { BRAND_ASSETS, COMPANY_INFO } from '@/lib/brand';
import { TEAM_MEMBERS } from '@/data/team';
import { GithubIcon, LinkedinIcon } from '@/components/common/SocialIcons';
import { FinalCTA } from '@/components/home/FinalCTA';

export const metadata: Metadata = {
  title: 'About AREVEX TECH STUDIO — Identity & Principles',
  description:
    'AREVEX TECH STUDIO is a multidisciplinary technology studio founded by Muhammad Rayyan, Muhammad Uzair, and Aqsa Wadood, delivering software engineering, AI, and practical education.',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#F7F7F5] dark:bg-charcoal-950 text-charcoal-900 dark:text-warmWhite transition-colors duration-300">
      {/* Header */}
      <section className="pt-24 pb-16 border-b border-gray-200 dark:border-graphite/40 bg-white dark:bg-charcoal-900/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="STUDIO IDENTITY & ROOTS"
            title="We Build What's Next."
            description="AREVEX TECH STUDIO operates at the intersection of high-order software engineering, artificial intelligence, cloud infrastructure, and technical education."
          />
        </div>
      </section>

      {/* Narrative & Visual */}
      <section className="py-20 border-b border-gray-200 dark:border-graphite/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 flex flex-col gap-6 text-base text-gray-700 dark:text-slate-300 leading-relaxed">
              <h2 className="text-3xl font-black text-gray-950 dark:text-white leading-tight">
                Engineering Grounded in Practical Reality.
              </h2>
              <p>
                Too much of the modern software industry is distracted by superficial decoration, fragile abstractions, and generic marketing promises. At Arevex Tech Studio, we believe software must be structurally sound, extraordinarily fast, and dependable under real transactional pressure.
              </p>
              <p>
                Whether developing offline-first point of sale systems that continue processing sales during local power disruptions, or orchestrating multi-agent LLM systems with deterministic tool validation, we build tools that solve genuine business bottlenecks.
              </p>
              <p>
                Simultaneously, through our Technology Academy, we open direct pathways for aspiring engineers to master modern web stacks, Linux system administration, and cloud engineering at accessible rates.
              </p>
            </div>

            <div className="lg:col-span-6 relative h-96 sm:h-[460px] rounded-3xl overflow-hidden border border-gray-200 dark:border-graphite/50 shadow-xl">
              <Image
                src={BRAND_ASSETS.generated.aboutStudio}
                alt="Arevex Creative Studio Atmosphere"
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Authentic Founders Section */}
      <section className="py-20 border-b border-gray-200 dark:border-graphite/40 bg-white dark:bg-charcoal-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="font-mono text-xs uppercase tracking-widest text-slate-700 dark:text-slate-300 font-bold">Leadership</span>
            <h2 className="text-3xl font-black text-gray-950 dark:text-white mt-1">Studio Founders</h2>
            <p className="text-base text-gray-700 dark:text-slate-300 mt-3 font-normal">
              Founded on principles of engineering craftsmanship, design discipline, and technical transparency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {COMPANY_INFO.founders.map((founder) => {
              const hasFormer = 'formerCompany' in founder && founder.formerCompany;
              return (
                <Card key={founder.name} className="flex flex-col justify-between p-8 bg-[#F7F7F5] dark:bg-charcoal-850 border-gray-200 dark:border-graphite/40 shadow-sm hover:shadow-xl transition-all relative overflow-hidden">
                  {hasFormer && (
                    <div className="absolute top-0 right-0 transform translate-x-8 -translate-y-2 rotate-12 bg-gradient-to-r from-amber-500 to-orange-600 text-white text-[10px] font-mono font-bold px-8 py-1 shadow-md">
                      {founder.formerCompany}
                    </div>
                  )}
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-white dark:bg-charcoal-800 border border-gray-200 dark:border-graphite/40 flex items-center justify-center text-charcoal-800 dark:text-slate-muted shadow-sm">
                        <Users className="w-6 h-6" />
                      </div>
                      <div className="flex items-center gap-2">
                        {hasFormer && (
                          <span className="font-mono text-[10px] uppercase px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-700 dark:text-amber-400 font-bold border border-amber-500/30">
                            {founder.formerCompany}
                          </span>
                        )}
                        <span className="font-mono text-[10px] uppercase px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold border border-emerald-500/20">
                          Co-Founder
                        </span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-950 dark:text-white mb-1">{founder.name}</h3>
                    <span className="text-sm font-semibold text-emerald-700 dark:text-emerald-400 block mb-3">
                      {founder.role}
                    </span>
                    <div className="p-2.5 rounded-lg bg-white/60 dark:bg-charcoal-900 border border-gray-200/60 dark:border-graphite/30 text-xs sm:text-sm font-sans text-gray-800 dark:text-slate-200 mb-4">
                      <span className="text-[11px] uppercase text-gray-500 dark:text-slate-400 block font-semibold">Specialization</span>
                      {founder.focus}
                    </div>
                    <p className="text-sm text-gray-700 dark:text-slate-200 leading-relaxed mb-4 font-normal">
                      {founder.bio}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-gray-200 dark:border-graphite/30 w-full flex items-center justify-between text-xs font-mono text-gray-600 dark:text-slate-300">
                    <span>AREVEX LEADERSHIP</span>
                    <span>100% Remote &amp; Global</span>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Global Engineering Specialists & Domain Practice Leads */}
      <section className="py-20 border-b border-gray-200 dark:border-graphite/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-charcoal-800 text-slate-700 dark:text-slate-300 font-mono text-xs font-semibold mb-3 border border-gray-200 dark:border-graphite/40">
                <Globe2 className="w-3.5 h-3.5 text-emerald-500" />
                <span>DISTRIBUTED ENGINEERING ROSTER</span>
              </div>
              <h2 className="text-3xl font-black text-gray-950 dark:text-white">
                Practice Leads &amp; Domain Specialists
              </h2>
              <p className="text-base text-gray-700 dark:text-slate-300 max-w-2xl mt-2 font-normal">
                Our distributed core engineering team brings together technical leaders across the United Kingdom, United Arab Emirates, Germany, Japan, Spain, Egypt, and Pakistan.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TEAM_MEMBERS.filter((m) => !m.isFounder).map((member) => (
              <Card key={member.id} className="flex flex-col justify-between p-6 bg-white dark:bg-charcoal-850 border-gray-200 dark:border-graphite/40 shadow-sm hover:shadow-xl transition-all">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-gray-50 dark:bg-charcoal-900 border border-gray-200 dark:border-graphite/40 text-xs font-mono text-gray-800 dark:text-slate-200 font-medium">
                      <span>{member.flag}</span>
                      <span>{member.location}</span>
                    </span>
                    {member.formerCompany ? (
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/10 text-amber-700 dark:text-amber-400 font-bold border border-amber-500/20">
                        {member.formerCompany}
                      </span>
                    ) : (
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-charcoal-900 text-gray-700 dark:text-slate-300 font-semibold border border-gray-200 dark:border-graphite/30">
                        {member.department}
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-gray-950 dark:text-white mb-0.5">{member.name}</h3>
                  <p className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 mb-3">{member.role}</p>

                  <div className="p-2.5 rounded-lg bg-gray-50 dark:bg-charcoal-900 border border-gray-200/80 dark:border-graphite/30 text-xs font-mono text-gray-800 dark:text-slate-300 mb-3">
                    <span className="text-[10px] uppercase text-gray-500 dark:text-slate-400 block font-semibold mb-0.5">
                      Domain Focus
                    </span>
                    <span>{member.specialization}</span>
                  </div>

                  <p className="text-xs text-gray-600 dark:text-slate-300 leading-relaxed font-normal mb-4">
                    {member.bio}
                  </p>
                </div>

                <div className="pt-3 border-t border-gray-200 dark:border-graphite/30 flex items-center justify-between text-xs font-mono text-gray-500 dark:text-slate-400">
                  <span>AREVEX SPECIALIST</span>
                  <div className="flex items-center gap-2">
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg bg-gray-50 dark:bg-charcoal-900 border border-gray-200 dark:border-graphite/40 text-gray-600 dark:text-slate-muted hover:text-black dark:hover:text-white transition-colors"
                      aria-label={`${member.name} GitHub`}
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg bg-gray-50 dark:bg-charcoal-900 border border-gray-200 dark:border-graphite/40 text-gray-600 dark:text-slate-muted hover:text-black dark:hover:text-white transition-colors"
                      aria-label={`${member.name} LinkedIn`}
                    >
                      <LinkedinIcon className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Working Practices */}
      <section className="py-20 border-b border-gray-200 dark:border-graphite/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="OPERATIONAL VALUES"
            title="How We Execute."
            description="Our working standards ensure that every codebase, cloud deployment, and educational module meets international standards."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {COMPANY_INFO.workingPractices.map((practice, idx) => (
              <div
                key={practice.title}
                className="p-6 rounded-2xl bg-white dark:bg-charcoal-900/60 border border-gray-200 dark:border-graphite/40 flex flex-col justify-between shadow-sm"
              >
                <div>
                  <span className="font-mono text-xs text-slate-700 dark:text-slate-300 font-bold">0{idx + 1}</span>
                  <h3 className="text-lg font-bold text-gray-950 dark:text-white mt-2 mb-2">{practice.title}</h3>
                  <p className="text-sm text-gray-700 dark:text-slate-200 leading-relaxed font-normal">{practice.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </main>
  );
}
