'use client';

import React from 'react';
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

export function ServicesSection() {
  return (
    <section id="services" className="relative py-24 sm:py-32 bg-charcoal-950 text-warmWhite overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <SectionHeading
            eyebrow="03 / CORE CAPABILITIES"
            title="Engineered for Precision and Scale."
            description="Our multidisciplinary practice spans software engineering, distributed systems, autonomous AI agents, and product design."
            className="mb-0"
          />
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-mono text-slate-muted hover:text-white transition-colors duration-200 shrink-0 pb-2"
          >
            <span>Explore All 12 Capabilities</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 12 Interactive Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_DATA.map((service, index) => {
            const IconComponent = ICON_MAP[service.iconName] || Globe;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
              >
                <Link href={`/services/${service.slug}`} className="block h-full group">
                  <Card className="h-full flex flex-col justify-between group-hover:border-slate-muted/60 transition-all duration-300">
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <div className="w-12 h-12 rounded-xl bg-charcoal-800 border border-graphite/50 flex items-center justify-center text-slate-light group-hover:text-white group-hover:bg-slate-muted/20 transition-colors">
                          <IconComponent className="w-6 h-6" />
                        </div>
                        <span className="font-mono text-xs text-slate-muted">
                          0{index + 1}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-white group-hover:text-slate-200 transition-colors mb-2.5">
                        {service.title}
                      </h3>

                      <p className="text-sm text-slate-400 leading-relaxed mb-6">
                        {service.shortDescription}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-graphite/40 flex items-center justify-between text-xs font-mono text-slate-muted group-hover:text-white transition-colors">
                      <span className="uppercase tracking-wider">{service.category}</span>
                      <span className="flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                        Details <ArrowUpRight className="w-3.5 h-3.5" />
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
  );
}
