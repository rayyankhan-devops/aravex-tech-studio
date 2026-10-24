'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { MagneticButton } from '@/components/common/MagneticButton';
import { SERVICES_DATA } from '@/data/services';

const BUDGET_OPTIONS = [
  'PKR 250k – 500k ($1k – $2k)',
  'PKR 500k – 1.5M ($2k – $5k)',
  'PKR 1.5M – 4M ($5k – $15k)',
  'PKR 4M+ ($15k+ Enterprise)',
];

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: SERVICES_DATA[0].title,
    budget: BUDGET_OPTIONS[1],
    description: '',
    preferredContact: 'Email',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
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
        service: SERVICES_DATA[0].title,
        budget: BUDGET_OPTIONS[1],
        description: '',
        preferredContact: 'Email',
      });
    } catch (err: any) {
      setStatus('error');
      setErrorMessage(err.message || 'Something went wrong. Please try again.');
    }
  };

  return (
    <div className="w-full rounded-2xl bg-white dark:bg-charcoal-900/90 border border-gray-200 dark:border-graphite/40 p-6 sm:p-10 shadow-xl transition-colors duration-300">
      {status === 'success' ? (
        <div className="flex flex-col items-center text-center py-12 gap-4">
          <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-bold text-gray-950 dark:text-warmWhite">
            Inquiry Received
          </h3>
          <p className="text-gray-600 dark:text-slate-light max-w-md leading-relaxed text-sm">
            {successMessage}
          </p>
          <MagneticButton
            variant="outline"
            size="sm"
            onClick={() => setStatus('idle')}
            className="mt-4"
          >
            Send Another Inquiry
          </MagneticButton>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          {status === 'error' && (
            <div className="flex items-center gap-3 p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-600 dark:text-rose-400 text-sm">
              <AlertCircle className="w-5 h-5 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          {/* Row 1: Name & Business Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="flex flex-col gap-2">
              <label className="text-xs font-mono uppercase tracking-wider text-gray-700 dark:text-slate-300 font-bold">
                Your Full Name *
              </label>
              <input
                type="text"
                required
                placeholder="Muhammad Ali"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-charcoal-850 border border-gray-300 dark:border-graphite/40 text-gray-900 dark:text-warmWhite placeholder:text-gray-400 dark:placeholder:text-slate-600 focus:outline-none focus:border-slate-muted transition-colors text-sm"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-mono uppercase tracking-wider text-gray-700 dark:text-slate-300 font-bold">
                Business Email *
              </label>
              <input
                type="email"
                required
                placeholder="name@company.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-charcoal-850 border border-gray-300 dark:border-graphite/40 text-gray-900 dark:text-warmWhite placeholder:text-gray-400 dark:placeholder:text-slate-600 focus:outline-none focus:border-slate-muted transition-colors text-sm"
              />
            </div>
          </div>

          {/* Row 2: Company & Service */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="flex flex-col gap-2">
              <label className="text-xs font-mono uppercase tracking-wider text-gray-700 dark:text-slate-300 font-bold">
                Company / Organization
              </label>
              <input
                type="text"
                placeholder="Enterprise or Startup Name"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-charcoal-850 border border-gray-300 dark:border-graphite/40 text-gray-900 dark:text-warmWhite placeholder:text-gray-400 dark:placeholder:text-slate-600 focus:outline-none focus:border-slate-muted transition-colors text-sm"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-mono uppercase tracking-wider text-gray-700 dark:text-slate-300 font-bold">
                Service Required *
              </label>
              <select
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-charcoal-850 border border-gray-300 dark:border-graphite/40 text-gray-900 dark:text-warmWhite focus:outline-none focus:border-slate-muted transition-colors text-sm"
              >
                {SERVICES_DATA.map((s) => (
                  <option key={s.id} value={s.title} className="bg-white dark:bg-charcoal-900 text-gray-900 dark:text-warmWhite">
                    {s.title}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Row 3: Budget Range */}
          <div className="flex flex-col gap-2.5">
            <label className="text-xs font-mono uppercase tracking-wider text-gray-700 dark:text-slate-300 font-bold">
              Estimated Project Budget
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {BUDGET_OPTIONS.map((opt) => (
                <button
                  type="button"
                  key={opt}
                  onClick={() => setFormData({ ...formData, budget: opt })}
                  className={`px-3.5 py-2.5 rounded-xl text-xs font-mono border text-left transition-all ${
                    formData.budget === opt
                      ? 'bg-slate-800 text-white dark:bg-slate-muted/30 dark:border-slate-muted dark:text-warmWhite font-bold shadow-sm'
                      : 'bg-gray-50 dark:bg-charcoal-850/50 border-gray-300 dark:border-graphite/30 text-gray-700 dark:text-slate-light hover:border-slate-500'
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>

          {/* Row 4: Project Scope */}
          <div className="flex flex-col gap-2">
            <label className="text-xs font-mono uppercase tracking-wider text-gray-700 dark:text-slate-300 font-bold">
              Project Scope & Technical Goals *
            </label>
            <textarea
              required
              rows={4}
              placeholder="Tell us about what you want to engineer, key architectural requirements, target launch deadline, and team constraints..."
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-charcoal-850 border border-gray-300 dark:border-graphite/40 text-gray-900 dark:text-warmWhite placeholder:text-gray-400 dark:placeholder:text-slate-600 focus:outline-none focus:border-slate-muted transition-colors text-sm resize-none"
            />
          </div>

          {/* Row 5: Preferred Contact Method */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-gray-600 dark:text-slate-muted font-bold">Preferred Contact:</span>
              {['Email', 'WhatsApp', 'Video Call'].map((m) => (
                <label key={m} className="flex items-center gap-1.5 text-xs text-gray-700 dark:text-slate-light cursor-pointer font-medium">
                  <input
                    type="radio"
                    name="preferredContact"
                    value={m}
                    checked={formData.preferredContact === m}
                    onChange={(e) => setFormData({ ...formData, preferredContact: e.target.value })}
                    className="accent-slate-700 dark:accent-slate-muted"
                  />
                  <span>{m}</span>
                </label>
              ))}
            </div>

            <MagneticButton
              type="submit"
              disabled={status === 'loading'}
              variant="primary"
              size="md"
            >
              {status === 'loading' ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Submitting...</span>
                </>
              ) : (
                <>
                  <span>Transmit Inquiry</span>
                  <Send className="w-4 h-4" />
                </>
              )}
            </MagneticButton>
          </div>
        </form>
      )}
    </div>
  );
}
