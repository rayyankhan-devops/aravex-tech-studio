import React from 'react';
import type { Metadata } from 'next';
import { Mail, MapPin, Clock, MessageSquare, ArrowUpRight } from 'lucide-react';
import { SectionHeading } from '@/components/common/SectionHeading';
import { ContactForm } from '@/components/forms/ContactForm';
import { Card } from '@/components/common/Card';
import { COMPANY_INFO } from '@/lib/brand';
import {
  GithubIcon,
  LinkedinIcon,
  TwitterXIcon,
  FacebookIcon,
  InstagramIcon,
  TikTokIcon,
  WhatsAppIcon,
} from '@/components/common/SocialIcons';

export const metadata: Metadata = {
  title: 'Contact AREVEX TECH STUDIO — Start a Project',
  description:
    'Initiate a new project with Arevex Tech Studio. Specialized in custom software development, POS systems, AI agents, and AWS/GCP cloud engineering.',
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#F7F7F5] dark:bg-charcoal-950 text-charcoal-900 dark:text-warmWhite transition-colors duration-300">
      {/* Header */}
      <section className="pt-24 pb-16 border-b border-gray-200 dark:border-graphite/40 bg-white dark:bg-charcoal-900/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="PROJECT INQUIRIES"
            title="Start a Project."
            description="Tell us about your technical requirements, operational bottlenecks, or software vision. Our principal engineers will review your brief and schedule an initial discovery consultation."
          />
        </div>
      </section>

      {/* Main Form & Contact Info Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left: Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

            {/* Right: Direct Channels & Studio Information */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <Card className="bg-white dark:bg-charcoal-850/80 border-gray-200 dark:border-graphite/40 shadow-sm">
                <h3 className="text-xl font-bold text-gray-950 dark:text-white mb-6 pb-3 border-b border-gray-200 dark:border-graphite/40">
                  Direct Communications
                </h3>

                <div className="flex flex-col gap-5 text-sm">
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-emerald-600 dark:text-slate-muted shrink-0 mt-0.5" />
                    <div>
                      <span className="font-mono text-xs text-gray-500 dark:text-slate-muted block uppercase font-bold">Client Inquiries</span>
                      <a href={`mailto:${COMPANY_INFO.contact.email}`} className="text-gray-900 dark:text-white hover:underline font-semibold">
                        {COMPANY_INFO.contact.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-emerald-600 dark:text-slate-muted shrink-0 mt-0.5" />
                    <div>
                      <span className="font-mono text-xs text-gray-500 dark:text-slate-muted block uppercase font-bold">Studio Base</span>
                      <span className="text-gray-700 dark:text-slate-300">
                        {COMPANY_INFO.locations.primary} (Global Remote Engineering)
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-emerald-600 dark:text-slate-muted shrink-0 mt-0.5" />
                    <div>
                      <span className="font-mono text-xs text-gray-500 dark:text-slate-muted block uppercase font-bold">Response Commitment</span>
                      <span className="text-gray-700 dark:text-slate-300">Within 24 business hours</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200 dark:border-graphite/40">
                  <span className="font-mono text-xs text-gray-500 dark:text-slate-muted block uppercase mb-3 font-bold">Official Social Channels</span>
                  <div className="flex flex-wrap items-center gap-2.5">
                    <a
                      href={COMPANY_INFO.socials.x}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-gray-100 dark:bg-charcoal-800 text-gray-700 dark:text-slate-muted hover:text-black dark:hover:text-white transition-colors hover:scale-105"
                      aria-label="X (formerly Twitter)"
                    >
                      <TwitterXIcon className="w-4 h-4" />
                    </a>
                    <a
                      href={COMPANY_INFO.socials.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-gray-100 dark:bg-charcoal-800 text-gray-700 dark:text-slate-muted hover:text-black dark:hover:text-white transition-colors hover:scale-105"
                      aria-label="Facebook"
                    >
                      <FacebookIcon className="w-4 h-4" />
                    </a>
                    <a
                      href={COMPANY_INFO.socials.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-gray-100 dark:bg-charcoal-800 text-gray-700 dark:text-slate-muted hover:text-black dark:hover:text-white transition-colors hover:scale-105"
                      aria-label="Instagram"
                    >
                      <InstagramIcon className="w-4 h-4" />
                    </a>
                    <a
                      href={COMPANY_INFO.socials.tiktok}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-gray-100 dark:bg-charcoal-800 text-gray-700 dark:text-slate-muted hover:text-black dark:hover:text-white transition-colors hover:scale-105"
                      aria-label="TikTok"
                    >
                      <TikTokIcon className="w-4 h-4" />
                    </a>
                    <a
                      href={COMPANY_INFO.socials.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-gray-100 dark:bg-charcoal-800 text-gray-700 dark:text-slate-muted hover:text-black dark:hover:text-white transition-colors hover:scale-105"
                      aria-label="GitHub"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                    <a
                      href={COMPANY_INFO.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-gray-100 dark:bg-charcoal-800 text-gray-700 dark:text-slate-muted hover:text-black dark:hover:text-white transition-colors hover:scale-105"
                      aria-label="LinkedIn"
                    >
                      <LinkedinIcon className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </Card>

              {/* Direct WhatsApp Fast Track Card */}
              <a
                href={COMPANY_INFO.socials.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 rounded-2xl bg-[#075E54] text-white flex items-center justify-between shadow-lg hover:bg-[#065047] transition-all hover:scale-[1.01]"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-full bg-[#25D366] flex items-center justify-center text-white shadow-md">
                    <WhatsAppIcon className="w-7 h-7" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">Need Instant Scoping?</h4>
                    <p className="text-xs text-emerald-100 font-mono mt-0.5">
                      Chat directly with our co-founders on WhatsApp
                    </p>
                  </div>
                </div>
                <ArrowUpRight className="w-5 h-5 text-emerald-300" />
              </a>

              <Card className="bg-white dark:bg-charcoal-850/80 border-gray-200 dark:border-graphite/40 shadow-sm">
                <div className="flex items-start gap-3">
                  <MessageSquare className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-gray-950 dark:text-white text-base">Direct Technical Interview</h4>
                    <p className="text-xs text-gray-600 dark:text-slate-300 mt-1 leading-relaxed">
                      You will speak directly with a technical founder or lead architect, never an aggressive sales commission representative.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
