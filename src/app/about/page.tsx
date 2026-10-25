import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Users, Compass, ShieldCheck, Cpu, Code2, GraduationCap, ArrowUpRight } from 'lucide-react';
import { SectionHeading } from '@/components/common/SectionHeading';
import { Card } from '@/components/common/Card';
import { MagneticButton } from '@/components/common/MagneticButton';
import { BRAND_ASSETS, COMPANY_INFO } from '@/lib/brand';
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
            {COMPANY_INFO.founders.map((founder) => (
              <Card key={founder.name} className="flex flex-col justify-between p-8 bg-[#F7F7F5] dark:bg-charcoal-850 border-gray-200 dark:border-graphite/40 shadow-sm hover:shadow-xl transition-all">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-white dark:bg-charcoal-800 border border-gray-200 dark:border-graphite/40 flex items-center justify-center text-charcoal-800 dark:text-slate-muted shadow-sm">
                      <Users className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-[10px] uppercase px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold border border-emerald-500/20">
                      Co-Founder
                    </span>
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
                  <span>Karachi & Global</span>
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
