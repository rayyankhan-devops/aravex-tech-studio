'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { MagneticButton } from '@/components/common/MagneticButton';
import { SERVICES_DATA } from '@/data/services';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: SERVICES_DATA[0].title,
    budget: 'Standard Quote / Flexible',
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
        budget: 'Standard Quote / Flexible',
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
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-gray-900 dark:text-gray-100 flex items-center justify-between">
                <span>Your Full Name <span className="text-rose-500 font-bold">*</span></span>
              </label>
              <input
                type="text"
                required
                placeholder="Muhammad Ali"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3.5 rounded-xl bg-gray-50 dark:bg-charcoal-850 border border-gray-300 dark:border-graphite/70 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-500/20 focus:border-slate-500 dark:focus:border-slate-400 transition-all text-base sm:text-sm font-normal"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-gray-900 dark:text-gray-100 flex items-center justify-between">
                <span>Business Email <span className="text-rose-500 font-bold">*</span></span>
              </label>
              <input
                type="email"
                required
                placeholder="name@company.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3.5 rounded-xl bg-gray-50 dark:bg-charcoal-850 border border-gray-300 dark:border-graphite/70 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-500/20 focus:border-slate-500 dark:focus:border-slate-400 transition-all text-base sm:text-sm font-normal"
              />
            </div>
          </div>

          {/* Row 2: Company & Service */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                Company / Organization
              </label>
              <input
                type="text"
                placeholder="Enterprise or Startup Name"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="w-full px-4 py-3.5 rounded-xl bg-gray-50 dark:bg-charcoal-850 border border-gray-300 dark:border-graphite/70 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-500/20 focus:border-slate-500 dark:focus:border-slate-400 transition-all text-base sm:text-sm font-normal"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-gray-900 dark:text-gray-100 flex items-center justify-between">
                <span>Service Required <span className="text-rose-500 font-bold">*</span></span>
              </label>
              <select
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="w-full px-4 py-3.5 rounded-xl bg-gray-50 dark:bg-charcoal-850 border border-gray-300 dark:border-graphite/70 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-slate-500/20 focus:border-slate-500 dark:focus:border-slate-400 transition-all text-base sm:text-sm font-normal cursor-pointer"
              >
                {SERVICES_DATA.map((s) => (
                  <option key={s.id} value={s.title} className="bg-white dark:bg-charcoal-900 text-gray-900 dark:text-warmWhite">
                    {s.title}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Project Scope & Technical Goals */}
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-semibold text-gray-900 dark:text-gray-100 flex items-center justify-between">
              <span>Project Scope &amp; Technical Goals <span className="text-rose-500 font-bold">*</span></span>
            </label>
            <textarea
              required
              rows={4}
              placeholder="Tell us about what you want to engineer, key architectural requirements, target launch deadline, and team constraints..."
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="w-full px-4 py-3.5 rounded-xl bg-gray-50 dark:bg-charcoal-850 border border-gray-300 dark:border-graphite/70 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-500/20 focus:border-slate-500 dark:focus:border-slate-400 transition-all text-base sm:text-sm font-normal resize-none leading-relaxed"
            />
          </div>

          {/* Row 5: Preferred Contact Method */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
            <div className="flex items-center gap-4">
              <span className="text-sm font-semibold text-gray-900 dark:text-gray-100">Preferred Contact:</span>
              <div className="flex items-center gap-3">
                {['Email', 'WhatsApp', 'Video Call'].map((m) => (
                  <label key={m} className="flex items-center gap-2 text-sm text-gray-800 dark:text-slate-200 cursor-pointer font-medium hover:text-black dark:hover:text-white transition-colors">
                    <input
                      type="radio"
                      name="preferredContact"
                      value={m}
                      checked={formData.preferredContact === m}
                      onChange={(e) => setFormData({ ...formData, preferredContact: e.target.value })}
                      className="w-4 h-4 accent-slate-800 dark:accent-slate-400 cursor-pointer"
                    />
                    <span>{m}</span>
                  </label>
                ))}
              </div>
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
