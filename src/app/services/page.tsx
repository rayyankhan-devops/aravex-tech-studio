'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
import { BRAND_ASSETS } from '@/lib/brand';
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

  const getServiceImage = (slug: string) => {
    switch (slug) {
      case 'web-development':
        return BRAND_ASSETS.generated.serviceWebDev;
      case 'mobile-app-development':
        return BRAND_ASSETS.generated.serviceMobileApp;
      case 'custom-desktop-software':
        return BRAND_ASSETS.generated.serviceDesktop;
      case 'ai-agents':
        return BRAND_ASSETS.generated.serviceAiAgents;
      case 'ai-chatbots':
        return BRAND_ASSETS.generated.serviceAiChatbots;
      case 'whatsapp-automation':
        return BRAND_ASSETS.generated.serviceWhatsapp;
      case 'cloud-engineering':
        return BRAND_ASSETS.generated.serviceCloudAws;
      case 'devops-devsecops':
        return BRAND_ASSETS.generated.cicdPipeline;
      case 'ui-ux-design':
        return BRAND_ASSETS.generated.serviceUiux;
      case 'social-media-management':
        return BRAND_ASSETS.generated.serviceSocial;
      case 'seo-geo':
        return BRAND_ASSETS.generated.serviceSeoGeo;
      case 'business-process-automation':
        return BRAND_ASSETS.generated.serviceAutomation;
      default:
        return BRAND_ASSETS.generated.serviceSoftware;
    }
  };

  const filteredServices =
    selectedCategory === 'all'
      ? SERVICES_DATA
      : SERVICES_DATA.filter((s) => s.category === selectedCategory);

  return (
    <main className="min-h-screen bg-[#F7F7F5] dark:bg-charcoal-950 text-charcoal-900 dark:text-warmWhite transition-colors duration-300">
      {/* Services Header */}
      <section className="pt-24 pb-16 border-b border-gray-200 dark:border-graphite/40 bg-white dark:bg-charcoal-900/60">
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
                className={`px-4 py-2 rounded-full text-xs font-mono transition-all duration-200 border cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-charcoal-950 text-white dark:bg-warmWhite dark:text-charcoal-900 border-transparent font-bold shadow-md'
                    : 'bg-white dark:bg-charcoal-850/80 text-gray-700 dark:text-slate-300 border-gray-300 dark:border-graphite/40 hover:border-slate-500'
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
                    <Card className="h-full flex flex-col justify-between bg-white dark:bg-charcoal-850/80 border-gray-200 dark:border-graphite/40 group-hover:border-slate-500 dark:group-hover:border-slate-muted/60 transition-all duration-300 shadow-sm hover:shadow-xl overflow-hidden">
                      <div>
                        {/* Architectural Service Visual Thumbnail */}
                        <div className="relative h-44 w-full rounded-xl overflow-hidden mb-5 border border-gray-200 dark:border-graphite/40 bg-charcoal-900">
                          <Image
                            src={getServiceImage(service.slug)}
                            alt={service.title}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                          <div className="absolute top-3 left-3 w-9 h-9 rounded-lg bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white">
                            <IconComponent className="w-5 h-5" />
                          </div>
                          <div className="absolute bottom-2.5 right-3 font-mono text-[10px] text-white/90 bg-black/60 backdrop-blur-sm px-2.5 py-0.5 rounded border border-white/10 uppercase tracking-widest font-bold">
                            0{SERVICES_DATA.findIndex((s) => s.id === service.id) + 1}
                          </div>
                        </div>

                        <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-black dark:group-hover:text-slate-200 transition-colors mb-2.5">
                          {service.title}
                        </h3>

                        <p className="text-sm text-gray-600 dark:text-slate-400 leading-relaxed mb-6">
                          {service.shortDescription}
                        </p>

                        <div className="flex flex-wrap gap-1.5 mb-6">
                          {service.technologies.slice(0, 3).map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-0.5 rounded text-[10px] font-mono bg-gray-100 dark:bg-charcoal-800 text-gray-600 dark:text-slate-muted border border-gray-200 dark:border-transparent font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="pt-4 border-t border-gray-200 dark:border-graphite/40 flex items-center justify-between text-xs font-mono text-gray-500 dark:text-slate-muted group-hover:text-black dark:group-hover:text-white transition-colors">
                        <span className="uppercase tracking-wider font-semibold">{service.category}</span>
                        <span className="flex items-center gap-1 group-hover:translate-x-1 transition-transform font-bold">
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
