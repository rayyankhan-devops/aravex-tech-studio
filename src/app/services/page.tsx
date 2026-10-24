'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Globe,
  Smartphone,
  Monitor,
  BrainCircuit,
  MessageSquareCode,
  PhoneCall,
  Cloud,
  ShieldCheck,
  Palette,
  Share2,
  Search,
  Workflow,
  ArrowUpRight,
} from 'lucide-react';
import { SectionHeading } from '@/components/common/SectionHeading';
import { Card } from '@/components/common/Card';
import { SERVICES_DATA } from '@/data/services';
import { FinalCTA } from '@/components/home/FinalCTA';

const ICON_MAP: Record<string, React.ElementType> = {
  Globe,
  Smartphone,
  Monitor,
  BrainCircuit,
  MessageSquareCode,
  PhoneCall,
  Cloud,
  ShieldCheck,
  Palette,
  Share2,
  Search,
  Workflow,
};

const CATEGORIES = [
  { id: 'all', label: 'All Capabilities' },
  { id: 'engineering', label: 'Software Engineering' },
  { id: 'ai', label: 'Artificial Intelligence' },
  { id: 'cloud', label: 'Cloud & DevOps' },
  { id: 'growth', label: 'Growth & GEO' },
  { id: 'design', label: 'UI/UX Design' },
];

export default function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredServices =
    selectedCategory === 'all'
      ? SERVICES_DATA
      : SERVICES_DATA.filter((s) => s.category === selectedCategory);

  return (
    <main className="min-h-screen bg-charcoal-950 text-warmWhite">
      {/* Services Header */}
      <section className="pt-24 pb-16 border-b border-graphite/40 bg-charcoal-900/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="CAPABILITIES & SERVICES"
            title="Full-Spectrum Engineering Practice."
            description="We engineer high-throughput web systems, offline POS software, autonomous AI agent pipelines, and secure cloud environments on AWS and GCP."
          />

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 pt-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-mono transition-all duration-200 border ${
                  selectedCategory === cat.id
                    ? 'bg-warmWhite text-charcoal-900 border-transparent font-bold shadow-md'
                    : 'bg-charcoal-850/80 text-slate-300 border-graphite/40 hover:border-slate-muted'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service, index) => {
              const IconComponent = ICON_MAP[service.iconName] || Globe;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: (index % 3) * 0.05 }}
                >
                  <Link href={`/services/${service.slug}`} className="block h-full group">
                    <Card className="h-full flex flex-col justify-between group-hover:border-slate-muted/60 transition-all duration-300">
                      <div>
                        <div className="flex items-center justify-between mb-6">
                          <div className="w-12 h-12 rounded-xl bg-charcoal-800 border border-graphite/50 flex items-center justify-center text-slate-light group-hover:text-white group-hover:bg-slate-muted/20 transition-colors">
                            <IconComponent className="w-6 h-6" />
                          </div>
                          <span className="font-mono text-xs text-slate-muted">
                            0{SERVICES_DATA.findIndex((s) => s.id === service.id) + 1}
                          </span>
                        </div>

                        <h3 className="text-xl font-bold text-white group-hover:text-slate-200 transition-colors mb-2.5">
                          {service.title}
                        </h3>

                        <p className="text-sm text-slate-400 leading-relaxed mb-6">
                          {service.shortDescription}
                        </p>

                        <div className="flex flex-wrap gap-1.5 mb-6">
                          {service.technologies.slice(0, 3).map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-0.5 rounded text-[10px] font-mono bg-charcoal-800 text-slate-muted"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="pt-4 border-t border-graphite/40 flex items-center justify-between text-xs font-mono text-slate-muted group-hover:text-white transition-colors">
                        <span className="uppercase tracking-wider">{service.category}</span>
                        <span className="flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                          Explore Scope <ArrowUpRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </Card>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <FinalCTA />
    </main>
  );
}
