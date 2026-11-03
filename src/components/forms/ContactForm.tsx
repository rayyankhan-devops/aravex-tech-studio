'use client';

import React, { useState } from 'react';
import {
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Sparkles,
  ShieldCheck,
  Lock,
  ArrowRight,
  RefreshCw,
  Globe,
  BrainCircuit,
  Cloud,
  Smartphone,
  Monitor,
  Workflow,
} from 'lucide-react';
import { MagneticButton } from '@/components/common/MagneticButton';
import { SERVICES_DATA } from '@/data/services';

const DISCIPLINES = [
  { id: 'web', label: 'Web & Distributed SaaS', icon: Globe },
  { id: 'ai', label: 'Autonomous AI Agents', icon: BrainCircuit },
  { id: 'cloud', label: 'Cloud Infrastructure & AWS', icon: Cloud },
  { id: 'mobile', label: 'Mobile iOS / Android', icon: Smartphone },
  { id: 'pos', label: 'Commercial POS & ERP', icon: Monitor },
  { id: 'automation', label: 'Workflow Automation', icon: Workflow },
];

const BUDGET_BRACKETS = [
  { id: 'flexible', label: 'Flexible / Discovery', tier: 'Early architecture' },
  { id: 'starter', label: 'Rs. 300k – 750k ($1k – $2.5k)', tier: 'MVP & Core features' },
  { id: 'growth', label: 'Rs. 750k – 2.0M ($2.5k – $7k)', tier: 'Production-ready platform' },
  { id: 'enterprise', label: 'Rs. 2.0M+ ($7k+ Enterprise)', tier: 'Distributed enterprise suite' },
];

const CHANNELS = [
  { id: 'WhatsApp', label: 'WhatsApp', badge: 'Fastest' },
  { id: 'Email', label: 'Official Email', badge: 'Standard' },
  { id: 'Video Call', label: 'Google Meet', badge: 'Consultation' },
];

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: DISCIPLINES[0].label,
    budget: BUDGET_BRACKETS[1].label,
    description: '',
    preferredContact: 'WhatsApp',
    needsNDA: false,
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const finalDescription = formData.needsNDA
        ? `${formData.description}\n\n[CLIENT SECURITY FLAG: Mutual Non-Disclosure Agreement (NDA) requested prior to architectural deep dive]`
        : formData.description;

      const payload = {
        name: formData.name,
        email: formData.email,
        company: formData.company,
        service: formData.service,
        budget: formData.budget,
        description: finalDescription,
        preferredContact: formData.preferredContact,
      };

      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Failed to submit form.');
      }

      setStatus('success');
      setSuccessMessage(data.message);
      setFormData({
        name: '',
        email: '',
        company: '',
        service: DISCIPLINES[0].label,
        budget: BUDGET_BRACKETS[1].label,
        description: '',
        preferredContact: 'WhatsApp',
        needsNDA: false,
      });
    } catch (err: any) {
      setStatus('error');
      setErrorMessage(err.message || 'Something went wrong. Please try again.');
    }
  };

  return (
    <div className="w-full rounded-3xl bg-white/95 dark:bg-charcoal-900/90 border border-gray-200/90 dark:border-graphite/60 p-6 sm:p-10 shadow-2xl relative overflow-hidden backdrop-blur-xl transition-colors duration-300">
      {/* Top Architectural Decorative Bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-500" />

      {status === 'success' ? (
        <div className="flex flex-col items-center text-center py-16 px-4 gap-5">
          <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shadow-lg ring-4 ring-emerald-500/10">
            <CheckCircle2 className="w-8 h-8" />
          </div>

          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-emerald-600 dark:text-emerald-400 font-bold block mb-1">
              DISPATCH VERIFIED // RECORD #ARX-{Math.floor(1000 + Math.random() * 9000)}
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-gray-950 dark:text-white tracking-tight">
              Project Brief Dispatched.
            </h3>
          </div>

          <p className="text-sm sm:text-base text-gray-600 dark:text-slate-300 max-w-lg leading-relaxed font-normal">
            {successMessage ||
              'Your specifications have been routed directly to our lead engineering group. We will review your technical brief and initiate contact within 24 business hours.'}
          </p>

          <div className="p-4 rounded-2xl bg-[#F7F7F5] dark:bg-charcoal-850 border border-gray-200 dark:border-graphite/60 max-w-md w-full text-left space-y-2 text-xs font-mono">
            <div className="flex justify-between text-gray-500 dark:text-slate-400">
              <span>Review Cadence:</span>
              <span className="text-gray-950 dark:text-white font-bold">&lt; 4 Hours (Avg)</span>
            </div>
            <div className="flex justify-between text-gray-500 dark:text-slate-400">
              <span>Accountability:</span>
              <span className="text-emerald-600 dark:text-emerald-400 font-bold">Principal Architects</span>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setStatus('idle')}
            className="mt-4 inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-mono text-xs font-bold bg-charcoal-950 text-white dark:bg-white dark:text-charcoal-950 hover:bg-emerald-600 dark:hover:bg-emerald-400 dark:hover:text-black transition-all cursor-pointer shadow-sm"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Transmit Another Brief</span>
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-8">
          
          {/* Header Status inside Form */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-gray-200/80 dark:border-graphite/40">
            <div>
              <span className="font-mono text-xs uppercase tracking-wider text-emerald-600 dark:text-emerald-400 font-bold block mb-1">
                PROJECT SPECIFICATION BRIEF
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-gray-950 dark:text-white tracking-tight">
                Tell Us What You Want to Engineer
              </h3>
            </div>
            <span className="font-mono text-[11px] text-gray-500 dark:text-slate-400 bg-gray-100 dark:bg-charcoal-800 px-3 py-1 rounded-full border border-gray-200 dark:border-graphite/40 font-semibold">
              ● DIRECT FOUNDER DESK
            </span>
          </div>

          {status === 'error' && (
            <div className="flex items-center gap-3 p-4 rounded-2xl bg-rose-500/10 border border-rose-500/30 text-rose-600 dark:text-rose-400 text-xs sm:text-sm">
              <AlertCircle className="w-5 h-5 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          {/* SECTION 1: Service / Discipline Chips Selector */}
          <div className="space-y-3">
            <label className="text-xs font-mono uppercase tracking-wider text-gray-700 dark:text-slate-300 font-bold flex items-center justify-between">
              <span>1. Select Primary Discipline <span className="text-rose-500">*</span></span>
              <span className="text-gray-400 dark:text-slate-500 font-normal normal-case">Pick the closest category</span>
            </label>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {DISCIPLINES.map((d) => {
                const isSelected = formData.service === d.label;
                const DIcon = d.icon;
                return (
                  <button
                    key={d.id}
                    type="button"
                    onClick={() => setFormData({ ...formData, service: d.label })}
                    className={`p-3 rounded-2xl text-left border transition-all duration-200 flex items-center gap-2.5 cursor-pointer touch-manipulation ${
                      isSelected
                        ? 'bg-emerald-500/10 dark:bg-emerald-500/15 border-emerald-500/70 text-emerald-700 dark:text-emerald-300 shadow-xs ring-1 ring-emerald-500/30'
                        : 'bg-gray-50/80 dark:bg-charcoal-850/60 border-gray-200 dark:border-graphite/50 text-gray-700 dark:text-slate-300 hover:border-gray-300 dark:hover:border-graphite hover:bg-white dark:hover:bg-charcoal-850'
                    }`}
                  >
                    <div
                      className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 text-xs ${
                        isSelected
                          ? 'bg-emerald-500 text-white'
                          : 'bg-gray-200 dark:bg-charcoal-800 text-gray-600 dark:text-slate-400'
                      }`}
                    >
                      <DIcon className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs font-bold leading-tight line-clamp-1">
                      {d.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* SECTION 2: Name & Business Email */}
          <div className="space-y-3">
            <label className="text-xs font-mono uppercase tracking-wider text-gray-700 dark:text-slate-300 font-bold block">
              2. Your Contact Information <span className="text-rose-500">*</span>
            </label>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <span className="text-xs font-medium text-gray-600 dark:text-slate-400">Full Name</span>
                <input
                  type="text"
                  required
                  placeholder="e.g. Tariq Mehmood"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-charcoal-850 border border-gray-300 dark:border-graphite/70 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 dark:focus:border-emerald-400 transition-all text-sm font-normal"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <span className="text-xs font-medium text-gray-600 dark:text-slate-400">Business Email</span>
                <input
                  type="email"
                  required
                  placeholder="name@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-charcoal-850 border border-gray-300 dark:border-graphite/70 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 dark:focus:border-emerald-400 transition-all text-sm font-normal"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5 pt-1">
              <span className="text-xs font-medium text-gray-600 dark:text-slate-400">
                Company / Organization <span className="text-gray-400 font-normal">(Optional)</span>
              </span>
              <input
                type="text"
                placeholder="Enterprise, Startup, or Brand Name"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-charcoal-850 border border-gray-300 dark:border-graphite/70 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 dark:focus:border-emerald-400 transition-all text-sm font-normal"
              />
            </div>
          </div>

          {/* SECTION 3: Budget Brackets Selector */}
          <div className="space-y-3">
            <label className="text-xs font-mono uppercase tracking-wider text-gray-700 dark:text-slate-300 font-bold flex items-center justify-between">
              <span>3. Anticipated Investment Bracket</span>
              <span className="text-gray-400 dark:text-slate-500 font-normal normal-case">Helps us architect within scope</span>
            </label>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {BUDGET_BRACKETS.map((b) => {
                const isSelected = formData.budget === b.label;
                return (
                  <button
                    key={b.id}
                    type="button"
                    onClick={() => setFormData({ ...formData, budget: b.label })}
                    className={`p-3 rounded-2xl text-left border transition-all cursor-pointer touch-manipulation flex flex-col justify-between ${
                      isSelected
                        ? 'bg-emerald-500/10 dark:bg-emerald-500/15 border-emerald-500/70 text-emerald-700 dark:text-emerald-300 ring-1 ring-emerald-500/30'
                        : 'bg-gray-50/80 dark:bg-charcoal-850/60 border-gray-200 dark:border-graphite/50 text-gray-700 dark:text-slate-300 hover:border-gray-300 dark:hover:border-graphite'
                    }`}
                  >
                    <span className="text-xs font-bold">{b.label}</span>
                    <span className="text-[10px] font-mono text-gray-400 dark:text-slate-500 mt-0.5">
                      {b.tier}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* SECTION 4: Project Scope & Technical Goals */}
          <div className="space-y-2">
            <label className="text-xs font-mono uppercase tracking-wider text-gray-700 dark:text-slate-300 font-bold flex items-center justify-between">
              <span>4. Scope &amp; Architecture Requirements <span className="text-rose-500">*</span></span>
              <span className="text-gray-400 dark:text-slate-500 font-normal normal-case">Be as technical as needed</span>
            </label>
            <textarea
              required
              rows={4}
              placeholder="What are you looking to engineer? E.g., Offline retail POS with SQLite sync, Autonomous customer service agent on WhatsApp, Next.js client portal with AWS ECS deployment..."
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="w-full px-4 py-3.5 rounded-2xl bg-gray-50 dark:bg-charcoal-850 border border-gray-300 dark:border-graphite/70 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 dark:focus:border-emerald-400 transition-all text-sm font-normal resize-none leading-relaxed"
            />
          </div>

          {/* SECTION 5: Preferred Channel & Mutual NDA Toggle */}
          <div className="p-4 rounded-2xl bg-gray-50 dark:bg-charcoal-850/80 border border-gray-200 dark:border-graphite/50 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            
            {/* Preferred Channel */}
            <div className="flex flex-col gap-1.5">
              <span className="text-xs font-mono uppercase tracking-wider text-gray-600 dark:text-slate-400 font-bold">
                Preferred Channel:
              </span>
              <div className="flex flex-wrap items-center gap-2">
                {CHANNELS.map((ch) => {
                  const isCh = formData.preferredContact === ch.id;
                  return (
                    <button
                      key={ch.id}
                      type="button"
                      onClick={() => setFormData({ ...formData, preferredContact: ch.id })}
                      className={`px-3 py-1 rounded-full text-xs font-mono font-bold transition-all cursor-pointer border ${
                        isCh
                          ? 'bg-emerald-500 text-white border-emerald-500 shadow-xs'
                          : 'bg-white dark:bg-charcoal-800 text-gray-700 dark:text-slate-300 border-gray-300 dark:border-graphite hover:border-gray-400'
                      }`}
                    >
                      <span>{ch.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* NDA Checkbox Toggle */}
            <label className="flex items-center gap-2.5 cursor-pointer select-none text-xs text-gray-700 dark:text-slate-300 pt-2 sm:pt-0 border-t sm:border-t-0 border-gray-200 dark:border-graphite/40">
              <input
                type="checkbox"
                checked={formData.needsNDA}
                onChange={(e) => setFormData({ ...formData, needsNDA: e.target.checked })}
                className="w-4 h-4 rounded text-emerald-600 focus:ring-emerald-500 accent-emerald-500 cursor-pointer"
              />
              <span className="flex items-center gap-1 font-mono font-semibold">
                <Lock className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                <span>Request Mutual NDA</span>
              </span>
            </label>
          </div>

          {/* Bottom Action Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-gray-200/80 dark:border-graphite/40">
            <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-slate-400 font-mono">
              <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>Strict privacy &bull; No marketing spam &bull; Direct founder review</span>
            </div>

            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full font-mono text-xs uppercase font-bold bg-charcoal-950 text-white dark:bg-emerald-500 dark:text-charcoal-950 hover:bg-emerald-600 dark:hover:bg-emerald-400 transition-all shadow-md hover:scale-[1.02] active:scale-[0.98] disabled:opacity-60 cursor-pointer"
            >
              {status === 'loading' ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Transmitting Brief...</span>
                </>
              ) : (
                <>
                  <span>Dispatch Project Brief</span>
                  <Send className="w-4 h-4" />
                </>
              )}
            </button>
          </div>

        </form>
      )}
    </div>
  );
}
