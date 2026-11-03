'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  CheckCircle2,
  Send,
  User,
  Mail,
  Phone,
  MapPin,
  Link2,
  GraduationCap,
  FileText,
  Clock,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  ShieldCheck,
  Award,
} from 'lucide-react';
import { InternshipTrack } from '@/data/internships';
import { WhatsAppIcon } from '@/components/common/SocialIcons';

interface InternshipModalProps {
  isOpen: boolean;
  onClose: () => void;
  track: InternshipTrack | null;
}

export function InternshipModal({ isOpen, onClose, track }: InternshipModalProps) {
  const [currentStep, setCurrentStep] = useState<1 | 2 | 3>(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    education: '',
    portfolioUrl: '',
    resumeUrl: '',
    experienceLevel: 'Student / Intermediate Projects',
    availability: 'Immediate (Within 7 Days)',
    motivation: '',
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [refId, setRefId] = useState('');
  const [error, setError] = useState<string | null>(null);

  if (!isOpen || !track) return null;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (error) setError(null);
  };

  const validateStep1 = () => {
    if (!formData.name.trim()) return 'Please provide your full name.';
    if (!formData.email.trim() || !formData.email.includes('@')) return 'Please provide a valid email address.';
    if (!formData.phone.trim()) return 'Please provide your WhatsApp or phone number.';
    if (!formData.city.trim()) return 'Please provide your city and country.';
    return null;
  };

  const validateStep2 = () => {
    if (!formData.portfolioUrl.trim()) return 'Please provide your GitHub, Portfolio, or Behance link.';
    if (!formData.education.trim()) return 'Please specify your degree, university, or self-taught status.';
    return null;
  };

  const handleNext = () => {
    if (currentStep === 1) {
      const err = validateStep1();
      if (err) {
        setError(err);
        return;
      }
      setError(null);
      setCurrentStep(2);
    } else if (currentStep === 2) {
      const err = validateStep2();
      if (err) {
        setError(err);
        return;
      }
      setError(null);
      setCurrentStep(3);
    }
  };

  const handleBack = () => {
    setError(null);
    if (currentStep === 2) setCurrentStep(1);
    if (currentStep === 3) setCurrentStep(2);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.motivation.trim()) {
      setError('Please briefly mention what you want to build and learn.');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const res = await fetch('/api/internships', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          trackId: track.id,
          trackTitle: track.title,
          category: track.category,
          ...formData,
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Failed to submit application');

      setRefId(data.applicationId || `ARVX-INT-${Math.floor(1000 + Math.random() * 9000)}`);
      setSubmitted(true);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'An error occurred while submitting.');
    } finally {
      setLoading(false);
    }
  };

  const resetAndClose = () => {
    setSubmitted(false);
    setError(null);
    setCurrentStep(1);
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={resetAndClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Dialog Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] as const }}
          className="relative w-full max-w-2xl rounded-3xl bg-white dark:bg-charcoal-900 border border-gray-200/90 dark:border-graphite/70 shadow-2xl overflow-hidden z-10 my-6 text-charcoal-900 dark:text-warmWhite ring-1 ring-emerald-500/20"
        >
          {/* Top Progress & Step Bar */}
          <div className="relative bg-gray-50/90 dark:bg-charcoal-950/90 border-b border-gray-200/80 dark:border-graphite/50 p-5 sm:p-6">
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="font-mono text-[10px] uppercase px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 font-bold border border-emerald-500/25">
                    {track.category}
                  </span>
                  <span className="font-mono text-xs text-gray-500 dark:text-slate-400">
                    Cohort 2026 • 100% Remote
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl font-black text-gray-950 dark:text-white leading-tight">
                  {track.title}
                </h2>
              </div>

              <button
                type="button"
                onClick={resetAndClose}
                className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-charcoal-800 transition-colors text-gray-500 dark:text-slate-400 hover:text-black dark:hover:text-white"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Visual Step Indicator (3 Steps) */}
            {!submitted && (
              <div className="flex items-center justify-between gap-2 pt-2">
                <div className="flex-1 flex items-center gap-2">
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                      currentStep >= 1
                        ? 'bg-emerald-500 text-white shadow-sm'
                        : 'bg-gray-200 dark:bg-charcoal-800 text-gray-600 dark:text-slate-400'
                    }`}
                  >
                    1
                  </div>
                  <span className="text-xs font-semibold hidden sm:inline text-gray-700 dark:text-slate-300">
                    Profile
                  </span>
                </div>

                <div className={`flex-1 h-1 rounded-full transition-all ${currentStep >= 2 ? 'bg-emerald-500' : 'bg-gray-200 dark:bg-charcoal-800'}`} />

                <div className="flex-1 flex items-center justify-center gap-2">
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                      currentStep >= 2
                        ? 'bg-emerald-500 text-white shadow-sm'
                        : 'bg-gray-200 dark:bg-charcoal-800 text-gray-600 dark:text-slate-400'
                    }`}
                  >
                    2
                  </div>
                  <span className="text-xs font-semibold hidden sm:inline text-gray-700 dark:text-slate-300">
                    Proof of Work
                  </span>
                </div>

                <div className={`flex-1 h-1 rounded-full transition-all ${currentStep >= 3 ? 'bg-emerald-500' : 'bg-gray-200 dark:bg-charcoal-800'}`} />

                <div className="flex-1 flex items-center justify-end gap-2">
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                      currentStep === 3
                        ? 'bg-emerald-500 text-white shadow-sm'
                        : 'bg-gray-200 dark:bg-charcoal-800 text-gray-600 dark:text-slate-400'
                    }`}
                  >
                    3
                  </div>
                  <span className="text-xs font-semibold hidden sm:inline text-gray-700 dark:text-slate-300">
                    Goals
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Modal Content */}
          <div className="p-5 sm:p-7 max-h-[72vh] overflow-y-auto">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-600 dark:text-rose-400 text-xs sm:text-sm font-medium flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                    <span>{error}</span>
                  </motion.div>
                )}

                {/* Step 1: Candidate Basics */}
                {currentStep === 1 && (
                  <motion.div
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    className="space-y-4"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-gray-800 dark:text-slate-200 uppercase tracking-wider mb-1.5">
                          Full Name <span className="text-emerald-500">*</span>
                        </label>
                        <div className="relative">
                          <User className="w-4 h-4 text-gray-400 dark:text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                          <input
                            type="text"
                            name="name"
                            required
                            placeholder="e.g. Bilal Ahmed"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full pl-10 pr-4 py-2.5 sm:py-3 rounded-xl bg-gray-50 dark:bg-charcoal-950 border border-gray-300 dark:border-graphite/70 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/25 focus:border-emerald-500 transition-all"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-gray-800 dark:text-slate-200 uppercase tracking-wider mb-1.5">
                          Email Address <span className="text-emerald-500">*</span>
                        </label>
                        <div className="relative">
                          <Mail className="w-4 h-4 text-gray-400 dark:text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                          <input
                            type="email"
                            name="email"
                            required
                            placeholder="bilal@example.com"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full pl-10 pr-4 py-2.5 sm:py-3 rounded-xl bg-gray-50 dark:bg-charcoal-950 border border-gray-300 dark:border-graphite/70 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/25 focus:border-emerald-500 transition-all"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-gray-800 dark:text-slate-200 uppercase tracking-wider mb-1.5">
                          WhatsApp / Phone <span className="text-emerald-500">*</span>
                        </label>
                        <div className="relative">
                          <Phone className="w-4 h-4 text-gray-400 dark:text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                          <input
                            type="tel"
                            name="phone"
                            required
                            placeholder="+92 300 1234567"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full pl-10 pr-4 py-2.5 sm:py-3 rounded-xl bg-gray-50 dark:bg-charcoal-950 border border-gray-300 dark:border-graphite/70 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/25 focus:border-emerald-500 transition-all"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-gray-800 dark:text-slate-200 uppercase tracking-wider mb-1.5">
                          Current City &amp; Country <span className="text-emerald-500">*</span>
                        </label>
                        <div className="relative">
                          <MapPin className="w-4 h-4 text-gray-400 dark:text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                          <input
                            type="text"
                            name="city"
                            required
                            placeholder="e.g. Islamabad, London, Toronto"
                            value={formData.city}
                            onChange={handleChange}
                            className="w-full pl-10 pr-4 py-2.5 sm:py-3 rounded-xl bg-gray-50 dark:bg-charcoal-950 border border-gray-300 dark:border-graphite/70 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/25 focus:border-emerald-500 transition-all"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 flex justify-end">
                      <button
                        type="button"
                        onClick={handleNext}
                        className="px-6 py-2.5 rounded-xl bg-charcoal-900 text-white dark:bg-white dark:text-charcoal-950 text-sm font-bold flex items-center gap-2 hover:bg-black dark:hover:bg-warmWhite transition-all hover:scale-[1.02] shadow-sm cursor-pointer"
                      >
                        <span>Continue to Proof of Work</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* Step 2: Proof of Work */}
                {currentStep === 2 && (
                  <motion.div
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    className="space-y-4"
                  >
                    <div>
                      <label className="block text-xs font-bold text-gray-800 dark:text-slate-200 uppercase tracking-wider mb-1.5">
                        GitHub / Portfolio / Behance URL <span className="text-emerald-500">*</span>
                      </label>
                      <div className="relative">
                        <Link2 className="w-4 h-4 text-gray-400 dark:text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="url"
                          name="portfolioUrl"
                          required
                          placeholder="https://github.com/yourhandle or portfolio link"
                          value={formData.portfolioUrl}
                          onChange={handleChange}
                          className="w-full pl-10 pr-4 py-2.5 sm:py-3 rounded-xl bg-gray-50 dark:bg-charcoal-950 border border-gray-300 dark:border-graphite/70 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/25 focus:border-emerald-500 transition-all"
                        />
                      </div>
                      <p className="text-[11px] text-gray-500 dark:text-slate-400 mt-1">
                        We review every submitted repository, Figma file, or live link.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-gray-800 dark:text-slate-200 uppercase tracking-wider mb-1.5">
                          Education / Self-Taught Status <span className="text-emerald-500">*</span>
                        </label>
                        <div className="relative">
                          <GraduationCap className="w-4 h-4 text-gray-400 dark:text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                          <input
                            type="text"
                            name="education"
                            required
                            placeholder="e.g. FAST / NUST / Self-Taught Developer"
                            value={formData.education}
                            onChange={handleChange}
                            className="w-full pl-10 pr-4 py-2.5 sm:py-3 rounded-xl bg-gray-50 dark:bg-charcoal-950 border border-gray-300 dark:border-graphite/70 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/25 focus:border-emerald-500 transition-all"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-gray-800 dark:text-slate-200 uppercase tracking-wider mb-1.5">
                          Resume / CV URL (Optional)
                        </label>
                        <div className="relative">
                          <FileText className="w-4 h-4 text-gray-400 dark:text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                          <input
                            type="url"
                            name="resumeUrl"
                            placeholder="https://drive.google.com/..."
                            value={formData.resumeUrl}
                            onChange={handleChange}
                            className="w-full pl-10 pr-4 py-2.5 sm:py-3 rounded-xl bg-gray-50 dark:bg-charcoal-950 border border-gray-300 dark:border-graphite/70 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/25 focus:border-emerald-500 transition-all"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 flex items-center justify-between">
                      <button
                        type="button"
                        onClick={handleBack}
                        className="px-4 py-2.5 rounded-xl border border-gray-300 dark:border-graphite/60 text-xs font-semibold text-gray-700 dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-charcoal-800 transition-all flex items-center gap-1.5 cursor-pointer"
                      >
                        <ArrowLeft className="w-3.5 h-3.5" />
                        <span>Back</span>
                      </button>

                      <button
                        type="button"
                        onClick={handleNext}
                        className="px-6 py-2.5 rounded-xl bg-charcoal-900 text-white dark:bg-white dark:text-charcoal-950 text-sm font-bold flex items-center gap-2 hover:bg-black dark:hover:bg-warmWhite transition-all hover:scale-[1.02] shadow-sm cursor-pointer"
                      >
                        <span>Continue to Goals</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* Step 3: Goals & Timeline */}
                {currentStep === 3 && (
                  <motion.div
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    className="space-y-4"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-gray-800 dark:text-slate-200 uppercase tracking-wider mb-1.5">
                          Earliest Availability
                        </label>
                        <select
                          name="availability"
                          value={formData.availability}
                          onChange={handleChange}
                          className="w-full px-3.5 py-2.5 sm:py-3 rounded-xl bg-gray-50 dark:bg-charcoal-950 border border-gray-300 dark:border-graphite/70 text-gray-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/25 focus:border-emerald-500 transition-all cursor-pointer"
                        >
                          <option>Immediate (Within 7 Days)</option>
                          <option>Next 2 Weeks</option>
                          <option>Next Month / Upcoming Cohort</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-gray-800 dark:text-slate-200 uppercase tracking-wider mb-1.5">
                          Experience Level
                        </label>
                        <select
                          name="experienceLevel"
                          value={formData.experienceLevel}
                          onChange={handleChange}
                          className="w-full px-3.5 py-2.5 sm:py-3 rounded-xl bg-gray-50 dark:bg-charcoal-950 border border-gray-300 dark:border-graphite/70 text-gray-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/25 focus:border-emerald-500 transition-all cursor-pointer"
                        >
                          <option>Student / Intermediate Projects</option>
                          <option>Junior Contributor (1-2 Projects Built)</option>
                          <option>Experienced Self-Starter</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-800 dark:text-slate-200 uppercase tracking-wider mb-1.5">
                        What would you like to build and master during this track? <span className="text-emerald-500">*</span>
                      </label>
                      <textarea
                        name="motivation"
                        rows={3}
                        required
                        placeholder="Tell us about a project you enjoyed building or specific technologies you want to master..."
                        value={formData.motivation}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 sm:py-3 rounded-xl bg-gray-50 dark:bg-charcoal-950 border border-gray-300 dark:border-graphite/70 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/25 focus:border-emerald-500 transition-all resize-none"
                      />
                    </div>

                    {/* Pre-submit Candidate Summary Box */}
                    <div className="p-3.5 rounded-2xl bg-gray-50 dark:bg-charcoal-950 border border-gray-200 dark:border-graphite/50 text-xs text-gray-600 dark:text-slate-300 flex items-center justify-between gap-4">
                      <div className="flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
                        <span>Mentorship lead: <strong className="text-gray-900 dark:text-white">{track.mentor}</strong></span>
                      </div>
                      <span className="font-mono text-emerald-600 dark:text-emerald-400 font-bold">100% Remote</span>
                    </div>

                    <div className="pt-4 flex items-center justify-between">
                      <button
                        type="button"
                        onClick={handleBack}
                        className="px-4 py-2.5 rounded-xl border border-gray-300 dark:border-graphite/60 text-xs font-semibold text-gray-700 dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-charcoal-800 transition-all flex items-center gap-1.5 cursor-pointer"
                      >
                        <ArrowLeft className="w-3.5 h-3.5" />
                        <span>Back</span>
                      </button>

                      <button
                        type="submit"
                        disabled={loading}
                        className="px-7 py-3 rounded-xl bg-charcoal-900 text-white dark:bg-white dark:text-charcoal-950 text-sm font-bold flex items-center gap-2 hover:bg-black dark:hover:bg-warmWhite transition-all hover:scale-[1.02] shadow-md disabled:opacity-50 cursor-pointer"
                      >
                        {loading ? (
                          <span>Transmitting Application...</span>
                        ) : (
                          <>
                            <span>Submit Application</span>
                            <Send className="w-4 h-4" />
                          </>
                        )}
                      </button>
                    </div>
                  </motion.div>
                )}
              </form>
            ) : (
              /* Success Confirmation Screen */
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-6 flex flex-col items-center text-center max-w-lg mx-auto"
              >
                <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border-2 border-emerald-500/30 flex items-center justify-center text-emerald-500 mb-4 shadow-xl">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <span className="font-mono text-[11px] uppercase px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold border border-emerald-500/20 mb-2">
                  Application Logged Successfully
                </span>

                <h3 className="text-xl sm:text-2xl font-black text-gray-950 dark:text-white mb-2">
                  Welcome to the Aravex Talent Pipeline!
                </h3>

                <p className="text-xs sm:text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-5">
                  Thank you, <strong className="text-gray-900 dark:text-white">{formData.name}</strong>. Your candidate file for the <strong className="text-gray-900 dark:text-white">{track.title}</strong> track has been securely recorded.
                </p>

                <div className="w-full p-4 rounded-2xl bg-gray-50 dark:bg-charcoal-950 border border-gray-200 dark:border-graphite/40 text-xs font-mono text-left mb-5 space-y-2">
                  <div className="flex justify-between border-b border-gray-200 dark:border-graphite/20 pb-2">
                    <span className="text-gray-400 dark:text-slate-400">Application ID:</span>
                    <span className="font-bold text-gray-900 dark:text-white">{refId}</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-200 dark:border-graphite/20 pb-2">
                    <span className="text-gray-400 dark:text-slate-400">Format:</span>
                    <span className="font-bold text-emerald-600 dark:text-emerald-400">100% Remote</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-200 dark:border-graphite/20 pb-2">
                    <span className="text-gray-400 dark:text-slate-400">Review Window:</span>
                    <span className="text-gray-900 dark:text-white">3 to 5 Business Days</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400 dark:text-slate-400">Endorsement:</span>
                    <span className="font-bold text-emerald-600 dark:text-emerald-400">Lifetime Support &amp; Recommendation</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 w-full">
                  <a
                    href={`https://wa.me/923000000000?text=${encodeURIComponent(
                      `Hello Aravex Tech Studio, I have submitted my internship application for ${track.title} (Ref ID: ${refId}). My name is ${formData.name}.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs font-mono flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
                  >
                    <WhatsAppIcon className="w-4 h-4" />
                    <span>Confirm via WhatsApp</span>
                  </a>

                  <button
                    type="button"
                    onClick={resetAndClose}
                    className="flex-1 py-2.5 px-4 rounded-xl bg-gray-100 dark:bg-charcoal-800 text-gray-800 dark:text-white font-bold text-xs font-mono hover:bg-gray-200 dark:hover:bg-charcoal-700 transition-colors cursor-pointer"
                  >
                    Done &amp; Close
                  </button>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
