'use client';

import React, { useState } from 'react';
import {
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Lock,
  Globe,
  BrainCircuit,
  Cloud,
  Smartphone,
  Monitor,
  Workflow,
  ShieldCheck,
  RefreshCw,
} from 'lucide-react';

const DISCIPLINES = [
  { id: 'web', label: 'Web & Distributed SaaS', icon: Globe },
  { id: 'ai', label: 'Autonomous AI & RAG', icon: BrainCircuit },
  { id: 'cloud', label: 'Cloud & DevSecOps', icon: Cloud },
  { id: 'mobile', label: 'Mobile iOS / Android', icon: Smartphone },
  { id: 'pos', label: 'Commercial POS & ERP', icon: Monitor },
  { id: 'automation', label: 'Workflow Automation', icon: Workflow },
];

const BUDGET_OPTIONS = [
  'Flexible / Discovery',
  '$1,000 – $3,000 (MVP)',
  '$3,000 – $8,000 (Production)',
  '$8,000+ (Enterprise)',
];

const CHANNELS = ['WhatsApp', 'Email', 'Google Meet'];

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: DISCIPLINES[0].label,
    budget: BUDGET_OPTIONS[1],
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
        ? `${formData.description}\n\n[CLIENT NOTE: Please execute Mutual NDA prior to technical architecture review]`
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
        budget: BUDGET_OPTIONS[1],
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
    <div className="w-full rounded-3xl bg-white dark:bg-charcoal-900 border border-gray-200 dark:border-graphite/60 p-6 sm:p-10 shadow-xl transition-all">
      {status === 'success' ? (
        <div className="flex flex-col items-center text-center py-12 px-4 gap-4">
          <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shadow-sm">
            <CheckCircle2 className="w-8 h-8" />
          </div>

          <div>
            <span className="font-sans text-xs uppercase tracking-wider text-emerald-600 dark:text-emerald-400 font-bold block mb-1">
              INQUIRY RECEIVED
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-gray-950 dark:text-white">
              Thank You! We&apos;ll Be in Touch Shortly.
            </h3>
          </div>

          <p className="text-sm sm:text-base text-gray-600 dark:text-slate-300 max-w-md leading-relaxed">
            {successMessage ||
              'Your inquiry has been routed directly to our lead engineering group. We typically review briefs and respond within 4 to 24 business hours.'}
          </p>

          <button
            type="button"
            onClick={() => setStatus('idle')}
            className="mt-4 inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-sans text-xs uppercase tracking-wider font-bold bg-charcoal-950 text-white dark:bg-white dark:text-charcoal-950 hover:bg-emerald-600 dark:hover:bg-emerald-400 dark:hover:text-black transition-colors cursor-pointer"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Send Another Message</span>
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-7">
          
          {/* Header */}
          <div className="pb-4 border-b border-gray-200 dark:border-graphite/40">
            <h3 className="text-xl sm:text-2xl font-black text-gray-950 dark:text-white">
              Project Specification Brief
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-slate-300 mt-1">
              Fill out this quick form or reach out directly via WhatsApp for immediate response.
            </p>
          </div>

          {status === 'error' && (
            <div className="flex items-center gap-3 p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-600 dark:text-rose-400 text-sm">
              <AlertCircle className="w-5 h-5 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          {/* 1. Service / Category Selection */}
          <div className="space-y-2.5">
            <label className="text-xs font-sans uppercase tracking-wider font-bold text-gray-900 dark:text-gray-100 flex items-center justify-between">
              <span>What do you need built? <span className="text-rose-500">*</span></span>
              <span className="text-gray-400 dark:text-slate-500 font-normal lowercase">click to select</span>
            </label>

            <div className="flex flex-wrap gap-2">
              {DISCIPLINES.map((d) => {
                const isSelected = formData.service === d.label;
                const DIcon = d.icon;
                return (
                  <button
                    key={d.id}
                    type="button"
                    onClick={() => setFormData({ ...formData, service: d.label })}
                    className={`px-3.5 py-2 rounded-xl text-xs font-semibold border transition-all flex items-center gap-2 cursor-pointer ${
                      isSelected
                        ? 'bg-emerald-500 text-white border-emerald-500 shadow-sm'
                        : 'bg-gray-50 dark:bg-charcoal-850 border-gray-200 dark:border-graphite/60 text-gray-700 dark:text-slate-300 hover:border-gray-300 dark:hover:border-slate-500'
                    }`}
                  >
                    <DIcon className="w-3.5 h-3.5" />
                    <span>{d.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 2. Contact Info (Name + Email + Company) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-sans uppercase tracking-wider font-bold text-gray-900 dark:text-gray-100">
                Your Name <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Tariq Mehmood"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-charcoal-850 border border-gray-200 dark:border-graphite/70 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 text-sm"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-sans uppercase tracking-wider font-bold text-gray-900 dark:text-gray-100">
                Work Email <span className="text-rose-500">*</span>
              </label>
              <input
                type="email"
                required
                placeholder="name@company.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-charcoal-850 border border-gray-200 dark:border-graphite/70 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 text-sm"
              />
            </div>

            <div className="sm:col-span-2 flex flex-col gap-1.5">
              <label className="text-xs font-sans uppercase tracking-wider font-bold text-gray-900 dark:text-gray-100 flex items-center justify-between">
                <span>Company / Project Name</span>
                <span className="text-gray-400 font-normal lowercase">optional</span>
              </label>
              <input
                type="text"
                placeholder="Startup, Enterprise, or Brand"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-charcoal-850 border border-gray-200 dark:border-graphite/70 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 text-sm"
              />
            </div>
          </div>

          {/* 3. Project Scope Textarea */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-sans uppercase tracking-wider font-bold text-gray-900 dark:text-gray-100 flex items-center justify-between">
              <span>Tell us about your project <span className="text-rose-500">*</span></span>
              <span className="text-gray-400 dark:text-slate-500 font-normal lowercase">scope, goals, timeline</span>
            </label>
            <textarea
              required
              rows={4}
              placeholder="Tell us what you want to engineer: e.g. An offline-first retail POS system, a Next.js customer portal with AWS deployment, an autonomous AI customer support agent..."
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="w-full px-4 py-3.5 rounded-xl bg-gray-50 dark:bg-charcoal-850 border border-gray-200 dark:border-graphite/70 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 text-sm resize-none leading-relaxed"
            />
          </div>

          {/* 4. Budget Range Selector */}
          <div className="space-y-2">
            <label className="text-xs font-sans uppercase tracking-wider font-bold text-gray-900 dark:text-gray-100">
              Estimated Budget
            </label>
            <div className="flex flex-wrap gap-2">
              {BUDGET_OPTIONS.map((b) => {
                const isSelected = formData.budget === b;
                return (
                  <button
                    key={b}
                    type="button"
                    onClick={() => setFormData({ ...formData, budget: b })}
                    className={`px-3.5 py-1.5 rounded-lg text-xs font-medium border transition-colors cursor-pointer ${
                      isSelected
                        ? 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-500 font-bold'
                        : 'bg-gray-50 dark:bg-charcoal-850 text-gray-700 dark:text-slate-300 border-gray-200 dark:border-graphite/60 hover:border-gray-300'
                    }`}
                  >
                    {b}
                  </button>
                );
              })}
            </div>
          </div>

          {/* 5. Preferred Channel & NDA */}
          <div className="p-4 rounded-xl bg-gray-50 dark:bg-charcoal-850 border border-gray-200 dark:border-graphite/60 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <span className="text-xs font-sans uppercase tracking-wider font-bold text-gray-600 dark:text-slate-400">
                Reply via:
              </span>
              <div className="flex items-center gap-2">
                {CHANNELS.map((ch) => (
                  <button
                    key={ch}
                    type="button"
                    onClick={() => setFormData({ ...formData, preferredContact: ch })}
                    className={`px-3 py-1 rounded-md text-xs font-semibold transition-colors cursor-pointer ${
                      formData.preferredContact === ch
                        ? 'bg-emerald-500 text-white'
                        : 'bg-white dark:bg-charcoal-800 text-gray-700 dark:text-slate-300 border border-gray-200 dark:border-graphite/50'
                    }`}
                  >
                    {ch}
                  </button>
                ))}
              </div>
            </div>

            <label className="flex items-center gap-2 cursor-pointer select-none text-xs text-gray-700 dark:text-slate-300 font-medium">
              <input
                type="checkbox"
                checked={formData.needsNDA}
                onChange={(e) => setFormData({ ...formData, needsNDA: e.target.checked })}
                className="w-4 h-4 rounded text-emerald-600 focus:ring-emerald-500 accent-emerald-500 cursor-pointer"
              />
              <span className="flex items-center gap-1">
                <Lock className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                <span>Request Mutual NDA</span>
              </span>
            </label>
          </div>

          {/* Action Row */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
            <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-slate-400">
              <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>Strict confidentiality &bull; Direct technical review &bull; Zero spam</span>
            </div>

            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-sans text-xs uppercase tracking-wider font-bold bg-charcoal-950 text-white dark:bg-emerald-500 dark:text-charcoal-950 hover:bg-emerald-600 dark:hover:bg-emerald-400 transition-colors shadow-md cursor-pointer disabled:opacity-60"
            >
              {status === 'loading' ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Submitting...</span>
                </>
              ) : (
                <>
                  <span>Submit Inquiry</span>
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
