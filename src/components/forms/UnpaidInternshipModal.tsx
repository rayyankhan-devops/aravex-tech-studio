'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  CheckCircle2,
  Loader2,
  Briefcase,
  ArrowRight,
  ShieldCheck,
  AlertCircle,
  Award,
  Link2,
} from 'lucide-react';
import { InternshipTrack } from '@/data/internships';
import { WhatsAppIcon } from '@/components/common/SocialIcons';

interface UnpaidInternshipModalProps {
  track: InternshipTrack | null;
  isOpen: boolean;
  onClose: () => void;
}

export function UnpaidInternshipModal({ track, isOpen, onClose }: UnpaidInternshipModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    education: '',
    portfolioUrl: '',
    experienceLevel: 'Student / Intermediate Projects',
    motivation: '',
  });

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [applicationId, setApplicationId] = useState<string>('');
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen || !track) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    if (!formData.name.trim()) {
      setErrorMsg('Please enter your Full Name.');
      return;
    }

    if (!formData.email.trim() || !formData.email.includes('@')) {
      setErrorMsg('Please provide a valid Email Address.');
      return;
    }

    if (!formData.phone.trim()) {
      setErrorMsg('Please provide your WhatsApp or Phone number.');
      return;
    }

    if (!formData.portfolioUrl.trim()) {
      setErrorMsg('Please provide your GitHub profile, Portfolio, or project URL.');
      return;
    }

    setLoading(true);

    try {
      const payload = {
        internshipType: 'Unpaid',
        fee: 'Free (Merit-Based)',
        duration: '3 Months',
        trackId: track.id,
        trackTitle: track.title,
        category: track.category,
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        city: formData.city.trim() || 'Not specified',
        education: formData.education.trim() || 'Not specified',
        portfolioUrl: formData.portfolioUrl.trim(),
        experienceLevel: formData.experienceLevel,
        motivation: formData.motivation.trim(),
      };

      const res = await fetch('/api/internships', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.message || 'Failed to submit application.');
      }

      setApplicationId(data.applicationId || `ARVX-UNP-${Math.floor(1000 + Math.random() * 9000)}`);
      setIsSuccess(true);
    } catch (err: any) {
      setErrorMsg(err.message || 'Submission error. Please try again or WhatsApp our admissions desk.');
    } finally {
      setLoading(false);
    }
  };

  const resetAndClose = () => {
    setIsSuccess(false);
    setErrorMsg(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 overflow-y-auto bg-black/80 backdrop-blur-md">
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 12 }}
        className="relative w-full max-w-2xl bg-white dark:bg-charcoal-900 border border-gray-200 dark:border-graphite/50 rounded-3xl shadow-2xl overflow-hidden my-auto"
      >
        {/* Header */}
        <div className="p-6 border-b border-gray-100 dark:border-graphite/40 bg-gradient-to-r from-charcoal-900/5 via-slate-500/5 to-transparent relative">
          <button
            onClick={resetAndClose}
            className="absolute top-5 right-5 p-2 rounded-full text-gray-500 hover:text-black dark:text-slate-400 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-charcoal-800 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="font-sans text-xs uppercase tracking-wider px-3 py-1 rounded-full bg-charcoal-950 text-white dark:bg-white dark:text-charcoal-950 font-bold shadow-sm">
              UNPAID INTERNSHIP • MERIT TRACK
            </span>
            <span className="font-sans text-xs font-bold px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20">
              100% Free • Remote
            </span>
          </div>

          <h2 className="text-xl sm:text-2xl font-black text-gray-950 dark:text-white leading-tight">
            {track.title}
          </h2>

          <div className="flex flex-wrap items-center gap-3 mt-2 text-xs text-gray-600 dark:text-slate-300 font-medium">
            <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-semibold">
              <CheckCircle2 className="w-3.5 h-3.5" /> Production Codebase
            </span>
            <span>•</span>
            <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-semibold">
              <CheckCircle2 className="w-3.5 h-3.5" /> Real Git Workflows
            </span>
            <span>•</span>
            <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-semibold">
              <CheckCircle2 className="w-3.5 h-3.5" /> Founder Recommendation
            </span>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 max-h-[75vh] overflow-y-auto no-scrollbar">
          {errorMsg && (
            <div className="mb-5 p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 text-red-700 dark:text-red-400 text-xs sm:text-sm flex items-start gap-2.5">
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
              <span>{errorMsg}</span>
            </div>
          )}

          {!isSuccess ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-sans uppercase tracking-wider text-gray-700 dark:text-slate-300 mb-1 font-bold">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Fatima Tariq"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-gray-50 dark:bg-charcoal-950 border border-gray-200 dark:border-graphite/40 text-sm text-gray-900 dark:text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-sans uppercase tracking-wider text-gray-700 dark:text-slate-300 mb-1 font-bold">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="fatima@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-gray-50 dark:bg-charcoal-950 border border-gray-200 dark:border-graphite/40 text-sm text-gray-900 dark:text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-sans uppercase tracking-wider text-gray-700 dark:text-slate-300 mb-1 font-bold">
                    WhatsApp Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+92 300 9876543"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-gray-50 dark:bg-charcoal-950 border border-gray-200 dark:border-graphite/40 text-sm text-gray-900 dark:text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-sans uppercase tracking-wider text-gray-700 dark:text-slate-300 mb-1 font-bold">
                    City &amp; Country
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Islamabad, Pakistan"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-gray-50 dark:bg-charcoal-950 border border-gray-200 dark:border-graphite/40 text-sm text-gray-900 dark:text-white focus:outline-none focus:border-emerald-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-sans uppercase tracking-wider text-gray-700 dark:text-slate-300 mb-1 font-bold">
                    GitHub / Portfolio / Project URL <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="url"
                    required
                    placeholder="https://github.com/yourhandle or portfolio"
                    value={formData.portfolioUrl}
                    onChange={(e) => setFormData({ ...formData, portfolioUrl: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-gray-50 dark:bg-charcoal-950 border border-gray-200 dark:border-graphite/40 text-sm text-gray-900 dark:text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                  />
                  <span className="text-[10px] text-gray-500 dark:text-slate-400 mt-0.5 block">
                    Essential for merit evaluation of your previous code/work.
                  </span>
                </div>

                <div>
                  <label className="block text-xs font-sans uppercase tracking-wider text-gray-700 dark:text-slate-300 mb-1 font-bold">
                    Education / Degree (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. BSCS Student / Graduate"
                    value={formData.education}
                    onChange={(e) => setFormData({ ...formData, education: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-gray-50 dark:bg-charcoal-950 border border-gray-200 dark:border-graphite/40 text-sm text-gray-900 dark:text-white focus:outline-none focus:border-emerald-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-sans uppercase tracking-wider text-gray-700 dark:text-slate-300 mb-1 font-bold">
                  Brief Overview of Past Projects / Experience
                </label>
                <textarea
                  rows={3}
                  placeholder="Tell us briefly about the projects you have built, tech stack you are familiar with, and your learning goals..."
                  value={formData.motivation}
                  onChange={(e) => setFormData({ ...formData, motivation: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-gray-50 dark:bg-charcoal-950 border border-gray-200 dark:border-graphite/40 text-sm text-gray-900 dark:text-white focus:outline-none focus:border-emerald-500 resize-none"
                />
              </div>

              {/* Merit Policy Reassurance */}
              <div className="p-3.5 rounded-xl bg-gray-50 dark:bg-charcoal-950 border border-gray-200 dark:border-graphite/40 text-xs text-gray-600 dark:text-slate-300 space-y-1">
                <p>
                  <strong>Admission Policy:</strong> Unpaid tracks are evaluated on merit based on your GitHub commits and project repositories. Shortlisted candidates are contacted within 3-5 business days.
                </p>
              </div>

              {/* Submit Button */}
              <div className="pt-2 flex justify-end">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full sm:w-auto px-7 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/20 transition-all cursor-pointer"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Submitting Application...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Application</span>
                      <CheckCircle2 className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          ) : (
            /* SUCCESS CONFIRMATION */
            <div className="py-6 text-center space-y-5">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-500 border border-emerald-500/30 flex items-center justify-center mx-auto shadow-lg">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div>
                <span className="font-sans text-xs uppercase tracking-wider text-emerald-600 dark:text-emerald-400 font-bold block mb-1">
                  Application Submitted
                </span>
                <h3 className="text-2xl font-black text-gray-950 dark:text-white">
                  Application Under Merit Review
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-slate-300 max-w-md mx-auto mt-2">
                  Thank you for applying to the <strong>{track.title}</strong> (Unpaid Merit Track). Our engineering leads will review your portfolio and GitHub profile within 3-5 business days.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-gray-50 dark:bg-charcoal-950 border border-gray-200 dark:border-graphite/40 max-w-sm mx-auto text-left space-y-1.5 text-xs font-sans">
                <div className="flex justify-between">
                  <span className="text-gray-500 dark:text-slate-400">Application Ref:</span>
                  <span className="font-bold text-emerald-600 dark:text-emerald-400">{applicationId}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500 dark:text-slate-400">Track Type:</span>
                  <span className="font-bold text-gray-900 dark:text-white">Unpaid • Merit Track</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500 dark:text-slate-400">Cohort Duration:</span>
                  <span className="font-bold text-gray-900 dark:text-white">3 Months</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500 dark:text-slate-400">Status:</span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold">Under Review</span>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={`https://wa.me/923000000000?text=Hello%20Aravex%2C%20I%20have%20submitted%20my%20Merit%20Internship%20application%20for%20${encodeURIComponent(track.title)}.%20Ref%3A%20${applicationId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-xs sm:text-sm shadow-md transition-all hover:scale-[1.02]"
                >
                  <WhatsAppIcon className="w-5 h-5" />
                  <span>Inquire via WhatsApp</span>
                </a>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={resetAndClose}
                  className="text-xs text-gray-500 dark:text-slate-400 hover:text-black dark:hover:text-white underline cursor-pointer"
                >
                  Done &amp; Close
                </button>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}
