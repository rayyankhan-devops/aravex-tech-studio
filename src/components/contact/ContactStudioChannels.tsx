'use client';

import React, { useState } from 'react';
import {
  Mail,
  Clock,
  ArrowUpRight,
  ShieldCheck,
  Check,
  Copy,
  Users,
  Lock,
  Globe2,
} from 'lucide-react';
import { COMPANY_INFO } from '@/lib/brand';
import {
  GithubIcon,
  LinkedinIcon,
  FacebookIcon,
  InstagramIcon,
  WhatsAppIcon,
} from '@/components/common/SocialIcons';

export function ContactStudioChannels() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(COMPANY_INFO.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col gap-5">
      
      {/* 1. DIRECT WHATSAPP FAST-TRACK (Top Priority Channel) */}
      <a
        href={COMPANY_INFO.socials.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="group p-6 rounded-3xl bg-gradient-to-br from-[#064e43] to-[#04342d] text-white shadow-lg border border-emerald-500/30 transition-all hover:scale-[1.01] flex flex-col justify-between"
      >
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-[#25D366] text-white flex items-center justify-center shadow-md shrink-0">
              <WhatsAppIcon className="w-7 h-7" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-0.5">
                <span className="font-sans text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-emerald-400/20 text-emerald-200 border border-emerald-400/30">
                  FASTEST RESPONSE
                </span>
              </div>
              <h4 className="text-base sm:text-lg font-bold text-white">
                Chat on WhatsApp
              </h4>
            </div>
          </div>

          <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-emerald-200 group-hover:bg-emerald-500 group-hover:text-white transition-colors shrink-0">
            <ArrowUpRight className="w-4 h-4" />
          </div>
        </div>

        <p className="text-xs text-emerald-100/90 leading-relaxed">
          Need an immediate answer, quick pricing, or architecture consult? Message our principal architects directly. Replies typically in &lt; 30 minutes.
        </p>
      </a>

      {/* 2. DIRECT EMAIL & LOCATION CARD */}
      <div className="p-6 rounded-3xl bg-white dark:bg-charcoal-900 border border-gray-200 dark:border-graphite/60 shadow-md space-y-5">
        
        {/* Email */}
        <div className="flex items-center justify-between gap-3 pb-4 border-b border-gray-100 dark:border-graphite/40">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/20">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-sans uppercase tracking-wider text-gray-500 dark:text-slate-400 font-bold block">
                DIRECT INBOX
              </span>
              <a
                href={`mailto:${COMPANY_INFO.contact.email}`}
                className="text-sm sm:text-base font-bold text-gray-950 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
              >
                {COMPANY_INFO.contact.email}
              </a>
            </div>
          </div>

          <button
            onClick={handleCopyEmail}
            type="button"
            className="p-2 rounded-lg text-gray-500 hover:text-emerald-600 dark:text-slate-400 dark:hover:text-emerald-400 bg-gray-50 dark:bg-charcoal-850 border border-gray-200 dark:border-graphite/50 transition-colors cursor-pointer shrink-0"
            title="Copy email to clipboard"
          >
            {copied ? (
              <Check className="w-4 h-4 text-emerald-500" />
            ) : (
              <Copy className="w-4 h-4" />
            )}
          </button>
        </div>

        {/* Response Guarantee */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center shrink-0 border border-purple-500/20">
            <Clock className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[10px] font-sans uppercase tracking-wider text-gray-500 dark:text-slate-400 font-bold block">
              RESPONSE TIME
            </span>
            <span className="text-sm font-bold text-gray-950 dark:text-white block">
              Under 24 Hours Guaranteed
            </span>
            <span className="text-xs text-emerald-600 dark:text-emerald-400 font-medium">
              Initial review typically in under 4 hours
            </span>
          </div>
        </div>

        {/* Global Remote */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0 border border-blue-500/20">
            <Globe2 className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[10px] font-sans uppercase tracking-wider text-gray-500 dark:text-slate-400 font-bold block">
              LOCATION
            </span>
            <span className="text-sm font-bold text-gray-950 dark:text-white block">
              100% Remote-First • Global Clients
            </span>
            <span className="text-xs text-gray-500 dark:text-slate-400">
              Serving founders across PK, US, UK, and UAE
            </span>
          </div>
        </div>

      </div>

      {/* 3. SPEAK DIRECTLY WITH FOUNDERS */}
      <div className="p-6 rounded-3xl bg-white dark:bg-charcoal-900 border border-gray-200 dark:border-graphite/60 shadow-md">
        <div className="flex items-center gap-2 mb-2">
          <Users className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
          <h4 className="text-sm font-bold text-gray-950 dark:text-white">
            Direct Lead Engineers — Zero Salespeople
          </h4>
        </div>
        <p className="text-xs text-gray-600 dark:text-slate-300 leading-relaxed mb-4">
          You talk directly with founding partners who write and deploy the code:
        </p>

        <div className="space-y-2 pt-2 border-t border-gray-100 dark:border-graphite/40 text-xs">
          <div className="flex items-center justify-between">
            <span className="font-bold text-gray-900 dark:text-white">Muhammad Rayyan</span>
            <span className="text-[11px] text-gray-500 dark:text-slate-400">Principal Architect</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-bold text-gray-900 dark:text-white">Muhammad Uzair</span>
            <span className="text-[11px] text-amber-600 dark:text-amber-400 font-semibold">Amazon Technical Head</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-bold text-gray-900 dark:text-white">Aqsa Wadood</span>
            <span className="text-[11px] text-purple-600 dark:text-purple-400 font-semibold">AI &amp; RAG Lead</span>
          </div>
        </div>

        <div className="mt-4 pt-3 border-t border-gray-100 dark:border-graphite/40 flex items-center gap-4 text-[11px] text-gray-500 dark:text-slate-400">
          <span className="flex items-center gap-1">
            <Lock className="w-3.5 h-3.5 text-emerald-500" />
            <span>Mutual NDA on Request</span>
          </span>
          <span>&bull;</span>
          <span className="flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
            <span>100% Code Ownership</span>
          </span>
        </div>
      </div>

      {/* 4. OFFICIAL SOCIAL LINKS */}
      <div className="p-4 rounded-2xl bg-white dark:bg-charcoal-900 border border-gray-200 dark:border-graphite/60 flex items-center justify-between">
        <span className="text-xs font-sans uppercase tracking-wider font-bold text-gray-500 dark:text-slate-400">
          Follow Our Work
        </span>
        <div className="flex items-center gap-2">
          <a
            href={COMPANY_INFO.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-gray-50 dark:bg-charcoal-800 text-gray-700 dark:text-slate-300 hover:text-black dark:hover:text-white border border-gray-200 dark:border-graphite/60 transition-colors"
            aria-label="GitHub"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href={COMPANY_INFO.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-gray-50 dark:bg-charcoal-800 text-gray-700 dark:text-slate-300 hover:text-black dark:hover:text-white border border-gray-200 dark:border-graphite/60 transition-colors"
            aria-label="LinkedIn"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <a
            href={COMPANY_INFO.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-gray-50 dark:bg-charcoal-800 text-gray-700 dark:text-slate-300 hover:text-black dark:hover:text-white border border-gray-200 dark:border-graphite/60 transition-colors"
            aria-label="Instagram"
          >
            <InstagramIcon className="w-4 h-4" />
          </a>
          <a
            href={COMPANY_INFO.socials.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-gray-50 dark:bg-charcoal-800 text-gray-700 dark:text-slate-300 hover:text-black dark:hover:text-white border border-gray-200 dark:border-graphite/60 transition-colors"
            aria-label="Facebook"
          >
            <FacebookIcon className="w-4 h-4" />
          </a>
        </div>
      </div>

    </div>
  );
}
