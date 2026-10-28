'use client';

import React from 'react';
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

  return (
    <section id="services" className="relative py-24 sm:py-32 bg-[#F7F7F5] dark:bg-charcoal-950 text-charcoal-900 dark:text-warmWhite overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <SectionHeading
            eyebrow="CORE CAPABILITIES"
            title="Engineered for Precision and Scale."
            description="Our multidisciplinary practice spans software engineering, distributed systems, autonomous AI agents, and product design."
            className="mb-0"
          />
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-mono text-gray-600 dark:text-slate-muted hover:text-black dark:hover:text-white transition-colors duration-200 shrink-0 pb-2 font-bold"
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
                  <Card className="h-full flex flex-col justify-between group-hover:border-slate-500 dark:group-hover:border-slate-muted/60 transition-all duration-300 overflow-hidden">
                    <div>
                      {/* Architectural Capability Thumbnail */}
                      <div className="relative h-44 w-full rounded-xl overflow-hidden mb-5 border border-gray-200 dark:border-graphite/40 bg-charcoal-900">
                        <Image
                          src={service.image || getServiceImage(service.slug)}
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
                          0{index + 1}
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-black dark:group-hover:text-slate-200 transition-colors mb-2.5">
                        {service.title}
                      </h3>

                      <p className="text-sm text-gray-700 dark:text-slate-200 leading-relaxed mb-6 font-normal">
                        {service.shortDescription}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-gray-200 dark:border-graphite/40 flex items-center justify-between text-xs sm:text-sm font-sans text-gray-700 dark:text-slate-300 group-hover:text-black dark:group-hover:text-white transition-colors">
                      <span className="uppercase tracking-wider font-semibold text-xs">{service.category}</span>
                      <span className="flex items-center gap-1 group-hover:translate-x-1 transition-transform font-semibold text-xs sm:text-sm">
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
