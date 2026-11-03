'use client';

import React, { useState, useEffect } from 'react';
import {
  Mail,
  MapPin,
  Clock,
  ArrowUpRight,
  ShieldCheck,
  Check,
  Copy,
  MessageSquare,
  Lock,
  Globe2,
  Sparkles,
  Cpu,
  Code2,
  BrainCircuit,
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
  const [localTime, setLocalTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Studio Timezone: UTC+5 (Asia/Karachi)
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Karachi',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      setLocalTime(new Intl.DateTimeFormat('en-US', options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(COMPANY_INFO.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="flex flex-col gap-6">
      
      {/* 1. STUDIO OPERATIONS & TELEMETRY RADAR CARD */}
      <div className="rounded-3xl bg-white/95 dark:bg-charcoal-900/90 border border-gray-200/90 dark:border-graphite/60 p-6 sm:p-7 shadow-xl relative overflow-hidden backdrop-blur-xl">
        {/* Decorative Top Accent */}
        <div className="flex items-center justify-between pb-4 mb-5 border-b border-gray-200/80 dark:border-graphite/40">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 shrink-0" aria-hidden="true">
              <span className="w-1.5 h-3 rounded-[2px] bg-[#D45361]" />
              <span className="w-1 h-3 rounded-[2px] bg-[#EA7047]" />
              <span className="w-1 h-3 rounded-[2px] bg-[#ECEB54]" />
              <span className="w-1 h-3 rounded-[2px] bg-[#5CB554]" />
              <span className="w-1 h-3 rounded-[2px] bg-[#4D66EC]" />
            </div>
            <span className="font-mono text-xs uppercase tracking-wider text-gray-500 dark:text-slate-400 font-bold">
              STUDIO TELEMETRY // DISPATCH
            </span>
          </div>

          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full font-mono text-[10px] font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/25">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
            <span>ONLINE</span>
          </span>
        </div>

        {/* Live Studio Time & Coordinates */}
        <div className="grid grid-cols-2 gap-3 p-3.5 rounded-2xl bg-[#F7F7F5] dark:bg-charcoal-850 border border-gray-200/80 dark:border-graphite/50 mb-5 text-xs font-mono">
          <div>
            <span className="text-gray-400 dark:text-slate-500 block text-[10px] uppercase font-bold">
              STUDIO TIME (UTC+5)
            </span>
            <span className="font-bold text-gray-950 dark:text-white text-sm">
              {localTime || 'Loading...'}
            </span>
          </div>
          <div>
            <span className="text-gray-400 dark:text-slate-500 block text-[10px] uppercase font-bold">
              AVAILABILITY
            </span>
            <span className="font-bold text-emerald-600 dark:text-emerald-400 text-sm">
              Q4 / Q1 Open
            </span>
          </div>
        </div>

        {/* Direct Channels List */}
        <div className="space-y-4">
          
          {/* Email with Click to Copy */}
          <div className="flex items-start justify-between gap-3 p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-charcoal-850/60 transition-colors">
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/20 mt-0.5">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-gray-500 dark:text-slate-400 font-bold block">
                  OFFICIAL INBOX
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
              className="p-2 rounded-lg text-gray-500 hover:text-emerald-600 dark:text-slate-400 dark:hover:text-emerald-400 bg-gray-100 dark:bg-charcoal-800 border border-gray-200 dark:border-graphite/50 transition-all cursor-pointer shrink-0"
              title="Copy Email to Clipboard"
              aria-label="Copy Email"
            >
              {copied ? (
                <Check className="w-4 h-4 text-emerald-500" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
            </button>
          </div>

          {/* Location */}
          <div className="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-charcoal-850/60 transition-colors">
            <div className="w-9 h-9 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0 border border-blue-500/20 mt-0.5">
              <Globe2 className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-gray-500 dark:text-slate-400 font-bold block">
                GLOBAL TOPOLOGY
              </span>
              <span className="text-sm font-bold text-gray-950 dark:text-white block">
                Remote-First Studio • Global Clients
              </span>
              <span className="text-xs text-gray-500 dark:text-slate-400 font-normal">
                Serving founders in PK, US, UK, and UAE
              </span>
            </div>
          </div>

          {/* Turnaround Time */}
          <div className="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-charcoal-850/60 transition-colors">
            <div className="w-9 h-9 rounded-lg bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center shrink-0 border border-purple-500/20 mt-0.5">
              <Clock className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-gray-500 dark:text-slate-400 font-bold block">
                SLA TURNAROUND
              </span>
              <span className="text-sm font-bold text-gray-950 dark:text-white block">
                Under 24 Hours Guaranteed
              </span>
              <span className="text-xs text-emerald-600 dark:text-emerald-400 font-mono font-medium">
                Initial technical triage typically in &lt; 4 hours
              </span>
            </div>
          </div>

        </div>

        {/* Social Ecosystem Links Dock */}
        <div className="mt-6 pt-5 border-t border-gray-200/80 dark:border-graphite/40">
          <span className="text-[10px] font-mono uppercase tracking-wider text-gray-400 dark:text-slate-500 font-bold block mb-3">
            VERIFIED STUDIO CHANNELS
          </span>
          <div className="flex items-center gap-2">
            <a
              href={COMPANY_INFO.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-gray-100 dark:bg-charcoal-800 text-gray-700 dark:text-slate-300 hover:text-black dark:hover:text-white border border-gray-200 dark:border-graphite/60 transition-all hover:scale-105"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={COMPANY_INFO.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-gray-100 dark:bg-charcoal-800 text-gray-700 dark:text-slate-300 hover:text-black dark:hover:text-white border border-gray-200 dark:border-graphite/60 transition-all hover:scale-105"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={COMPANY_INFO.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-gray-100 dark:bg-charcoal-800 text-gray-700 dark:text-slate-300 hover:text-black dark:hover:text-white border border-gray-200 dark:border-graphite/60 transition-all hover:scale-105"
              aria-label="Instagram"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>
            <a
              href={COMPANY_INFO.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-gray-100 dark:bg-charcoal-800 text-gray-700 dark:text-slate-300 hover:text-black dark:hover:text-white border border-gray-200 dark:border-graphite/60 transition-all hover:scale-105"
              aria-label="Facebook"
            >
              <FacebookIcon className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* 2. DIRECT WHATSAPP VIP FAST-TRACK ROUTE */}
      <a
        href={COMPANY_INFO.socials.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative p-6 sm:p-7 rounded-3xl bg-gradient-to-br from-[#064e43] via-[#053d34] to-[#032621] text-white shadow-xl border border-emerald-500/30 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-950/40 hover:scale-[1.01]"
      >
        {/* Corner Ambient Glow */}
        <div className="absolute top-0 right-0 w-36 h-36 bg-emerald-400/10 rounded-full blur-2xl pointer-events-none group-hover:scale-150 transition-transform duration-500" />

        <div className="flex items-start justify-between gap-4 relative z-10">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#25D366] text-white flex items-center justify-center shadow-lg ring-4 ring-emerald-500/20 shrink-0">
              <WhatsAppIcon className="w-7 h-7" />
            </div>

            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="font-mono text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-emerald-400/20 text-emerald-300 border border-emerald-400/30">
                  FASTEST ROUTE
                </span>
                <span className="font-mono text-[11px] text-emerald-200">
                  &lt; 30 Min Response
                </span>
              </div>

              <h4 className="text-base sm:text-lg font-black tracking-tight text-white leading-tight">
                Direct WhatsApp Channel
              </h4>
              <p className="text-xs text-emerald-100/90 leading-relaxed font-normal mt-1 max-w-xs">
                Need immediate architectural guidance or urgent pricing? Message Muhammad Rayyan directly.
              </p>
            </div>
          </div>

          <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-emerald-200 group-hover:bg-emerald-500 group-hover:text-white transition-all shrink-0 mt-1">
            <ArrowUpRight className="w-4 h-4" />
          </div>
        </div>
      </a>

      {/* 3. DIRECT FOUNDER ACCOUNTABILITY (ZERO ACCOUNT EXECUTIVES) */}
      <div className="p-6 sm:p-7 rounded-3xl bg-white/95 dark:bg-charcoal-900/90 border border-gray-200/90 dark:border-graphite/60 shadow-xl backdrop-blur-xl">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-2 h-2 rounded-full bg-emerald-500" />
          <span className="font-mono text-[10px] uppercase font-bold tracking-wider text-emerald-600 dark:text-emerald-400">
            OUR TECHNICAL PLEDGE
          </span>
        </div>

        <h4 className="text-base sm:text-lg font-black text-gray-950 dark:text-white tracking-tight leading-tight mb-2">
          Direct Lead Engineers — Zero Salespeople
        </h4>
        <p className="text-xs text-gray-600 dark:text-slate-300 leading-relaxed font-normal mb-5">
          You will never be handed off to a commission-driven account rep or junior liaison. Your brief is reviewed by the founding engineering leads who architect and ship the code.
        </p>

        {/* 3 Founders Mini Avatars Row */}
        <div className="pt-4 border-t border-gray-100 dark:border-graphite/40 space-y-2.5">
          <div className="flex items-center justify-between text-xs font-mono">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-md bg-emerald-500 text-white flex items-center justify-center text-[10px] font-bold">
                MR
              </div>
              <span className="font-bold text-gray-900 dark:text-white">Muhammad Rayyan</span>
            </div>
            <span className="text-[10px] text-gray-400 dark:text-slate-500">Principal Architect</span>
          </div>

          <div className="flex items-center justify-between text-xs font-mono">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-md bg-amber-500 text-white flex items-center justify-center text-[10px] font-bold">
                MU
              </div>
              <span className="font-bold text-gray-900 dark:text-white">Muhammad Uzair</span>
            </div>
            <span className="text-[10px] text-amber-600 dark:text-amber-400 font-bold">Ex-Amazon Lead</span>
          </div>

          <div className="flex items-center justify-between text-xs font-mono">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-md bg-purple-500 text-white flex items-center justify-center text-[10px] font-bold">
                AW
              </div>
              <span className="font-bold text-gray-900 dark:text-white">Aqsa Wadood</span>
            </div>
            <span className="text-[10px] text-purple-600 dark:text-purple-400 font-bold">AI &amp; RAG Lead</span>
          </div>
        </div>

        {/* Security & Confidentiality Pills */}
        <div className="mt-5 pt-4 border-t border-gray-100 dark:border-graphite/40 flex flex-wrap gap-2 text-[10px] font-mono font-bold text-gray-600 dark:text-slate-400">
          <span className="inline-flex items-center gap-1">
            <Lock className="w-3 h-3 text-emerald-500" />
            <span>Mutual NDA on Request</span>
          </span>
          <span>&bull;</span>
          <span className="inline-flex items-center gap-1">
            <ShieldCheck className="w-3 h-3 text-emerald-500" />
            <span>100% Code Ownership</span>
          </span>
        </div>
      </div>

    </div>
  );
}

