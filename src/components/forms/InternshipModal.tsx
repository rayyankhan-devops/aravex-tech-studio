'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  CheckCircle2,
  Send,
  Building2,
  Calendar,
  MapPin,
  User,
  Mail,
  Phone,
  Link2,
  FileText,
  Sparkles,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';
import { InternshipTrack } from '@/data/internships';
import { WhatsAppIcon } from '@/components/common/SocialIcons';
import { COMPANY_INFO } from '@/lib/brand';

interface InternshipModalProps {
  isOpen: boolean;
  onClose: () => void;
  track: InternshipTrack | null;
}

export function InternshipModal({ isOpen, onClose, track }: InternshipModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: 'Karachi, Pakistan',
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch('/api/internships', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          trackId: track.id,
          trackTitle: track.title,
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
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={resetAndClose}
          className="fixed inset-0 bg-black/75 backdrop-blur-md"
        />

        {/* Modal Dialog Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] as const }}
          className="relative w-full max-w-3xl rounded-3xl bg-white dark:bg-charcoal-900 border border-gray-200 dark:border-graphite/60 shadow-2xl overflow-hidden z-10 my-8 text-charcoal-900 dark:text-warmWhite"
        >
          {/* Header Banner */}
          <div className="p-6 sm:p-8 bg-gray-50/80 dark:bg-charcoal-950/80 border-b border-gray-200 dark:border-graphite/40 flex items-start justify-between">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="font-mono text-xs uppercase px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold border border-emerald-500/20">
                  {track.category}
                </span>
                <span className="font-mono text-xs text-gray-500 dark:text-slate-muted">
                  {track.department} • {track.mode}
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-gray-950 dark:text-white leading-tight">
                {track.title}
              </h2>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-slate-300 mt-1 max-w-xl">
                {track.tagline}
              </p>
            </div>

            <button
              onClick={resetAndClose}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-charcoal-800 transition-colors text-gray-500 dark:text-slate-muted hover:text-black dark:hover:text-white"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Content */}
          <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                {/* Track Highlights Ribbon */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-2xl bg-gray-50 dark:bg-charcoal-950 border border-gray-200 dark:border-graphite/40 text-sm">
                  <div>
                    <span className="text-gray-500 dark:text-slate-400 block uppercase text-xs font-semibold">Duration</span>
                    <span className="font-bold text-gray-950 dark:text-white">{track.duration}</span>
                  </div>
                  <div>
                    <span className="text-gray-500 dark:text-slate-400 block uppercase text-xs font-semibold">Openings</span>
                    <span className="font-bold text-emerald-600 dark:text-emerald-400">{track.openings} Seats Available</span>
                  </div>
                  <div>
                    <span className="text-gray-500 dark:text-slate-400 block uppercase text-xs font-semibold">Format</span>
                    <span className="font-bold text-gray-950 dark:text-white">{track.mode}</span>
                  </div>
                  <div>
                    <span className="text-gray-500 dark:text-slate-400 block uppercase text-xs font-semibold">Perks</span>
                    <span className="font-bold text-gray-950 dark:text-white">Stipend + Cert</span>
                  </div>
                </div>

                {error && (
                  <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-600 dark:text-rose-400 text-sm font-medium">
                    {error}
                  </div>
                )}

                {/* Section 1: Candidate Contact Info */}
                <div>
                  <h3 className="text-base font-bold text-gray-950 dark:text-white mb-3 flex items-center gap-2">
                    <User className="w-4 h-4 text-emerald-500" />
                    <span>01 / Personal &amp; Contact Information</span>
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 dark:text-gray-100 mb-1.5">
                        Full Name <span className="text-rose-500 font-bold">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="e.g. Bilal Ahmed"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 sm:py-3.5 rounded-xl bg-gray-50 dark:bg-charcoal-950 border border-gray-300 dark:border-graphite/70 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-slate-400 text-base sm:text-sm font-normal focus:outline-none focus:ring-2 focus:ring-slate-500/20 focus:border-slate-500 dark:focus:border-slate-400 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 dark:text-gray-100 mb-1.5">
                        Email Address <span className="text-rose-500 font-bold">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="bilal@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 sm:py-3.5 rounded-xl bg-gray-50 dark:bg-charcoal-950 border border-gray-300 dark:border-graphite/70 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-slate-400 text-base sm:text-sm font-normal focus:outline-none focus:ring-2 focus:ring-slate-500/20 focus:border-slate-500 dark:focus:border-slate-400 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 dark:text-gray-100 mb-1.5">
                        WhatsApp / Contact Phone <span className="text-rose-500 font-bold">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        placeholder="+92 300 1234567"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 sm:py-3.5 rounded-xl bg-gray-50 dark:bg-charcoal-950 border border-gray-300 dark:border-graphite/70 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-slate-400 text-base sm:text-sm font-normal focus:outline-none focus:ring-2 focus:ring-slate-500/20 focus:border-slate-500 dark:focus:border-slate-400 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 dark:text-gray-100 mb-1.5">
                        Current City &amp; Country <span className="text-rose-500 font-bold">*</span>
                      </label>
                      <input
                        type="text"
                        name="city"
                        required
                        placeholder="Karachi, Pakistan"
                        value={formData.city}
                        onChange={handleChange}
                        className="w-full px-4 py-3 sm:py-3.5 rounded-xl bg-gray-50 dark:bg-charcoal-950 border border-gray-300 dark:border-graphite/70 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-slate-400 text-base sm:text-sm font-normal focus:outline-none focus:ring-2 focus:ring-slate-500/20 focus:border-slate-500 dark:focus:border-slate-400 transition-all"
                      />
                    </div>
                  </div>
                </div>

                {/* Section 2: Portfolio, University & Experience */}
                <div>
                  <h3 className="text-base font-bold text-gray-950 dark:text-white mb-3 flex items-center gap-2">
                    <Link2 className="w-4 h-4 text-emerald-500" />
                    <span>02 / Proof of Work &amp; Availability</span>
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 dark:text-gray-100 mb-1.5">
                        University / Degree / Self-Taught Status <span className="text-rose-500 font-bold">*</span>
                      </label>
                      <input
                        type="text"
                        name="education"
                        required
                        placeholder="e.g. FAST NUCES / Self-Taught Developer"
                        value={formData.education}
                        onChange={handleChange}
                        className="w-full px-4 py-3 sm:py-3.5 rounded-xl bg-gray-50 dark:bg-charcoal-950 border border-gray-300 dark:border-graphite/70 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-slate-400 text-base sm:text-sm font-normal focus:outline-none focus:ring-2 focus:ring-slate-500/20 focus:border-slate-500 dark:focus:border-slate-400 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 dark:text-gray-100 mb-1.5">
                        GitHub / Portfolio / Behance / LinkedIn URL <span className="text-rose-500 font-bold">*</span>
                      </label>
                      <input
                        type="url"
                        name="portfolioUrl"
                        required
                        placeholder="https://github.com/yourhandle"
                        value={formData.portfolioUrl}
                        onChange={handleChange}
                        className="w-full px-4 py-3 sm:py-3.5 rounded-xl bg-gray-50 dark:bg-charcoal-950 border border-gray-300 dark:border-graphite/70 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-slate-400 text-base sm:text-sm font-normal focus:outline-none focus:ring-2 focus:ring-slate-500/20 focus:border-slate-500 dark:focus:border-slate-400 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 dark:text-gray-100 mb-1.5">
                        Resume / CV Link (Google Drive / Dropbox)
                      </label>
                      <input
                        type="url"
                        name="resumeUrl"
                        placeholder="https://drive.google.com/..."
                        value={formData.resumeUrl}
                        onChange={handleChange}
                        className="w-full px-4 py-3 sm:py-3.5 rounded-xl bg-gray-50 dark:bg-charcoal-950 border border-gray-300 dark:border-graphite/70 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-slate-400 text-base sm:text-sm font-normal focus:outline-none focus:ring-2 focus:ring-slate-500/20 focus:border-slate-500 dark:focus:border-slate-400 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 dark:text-gray-100 mb-1.5">
                        Earliest Availability <span className="text-rose-500 font-bold">*</span>
                      </label>
                      <select
                        name="availability"
                        value={formData.availability}
                        onChange={handleChange}
                        className="w-full px-4 py-3 sm:py-3.5 rounded-xl bg-gray-50 dark:bg-charcoal-950 border border-gray-300 dark:border-graphite/70 text-gray-900 dark:text-white text-base sm:text-sm font-normal focus:outline-none focus:ring-2 focus:ring-slate-500/20 focus:border-slate-500 dark:focus:border-slate-400 transition-all cursor-pointer"
                      >
                        <option>Immediate (Within 7 Days)</option>
                        <option>Next 2 Weeks</option>
                        <option>Next Month / Upcoming Cohort</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Section 3: Motivation */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 dark:text-gray-100 mb-1.5">
                    Why Arevex Tech Studio? Tell us what you want to build and learn <span className="text-rose-500 font-bold">*</span>
                  </label>
                  <textarea
                    name="motivation"
                    rows={3}
                    required
                    placeholder="Briefly describe your passions, what projects you've created, and how you want to grow during this track..."
                    value={formData.motivation}
                    onChange={handleChange}
                    className="w-full px-4 py-3 sm:py-3.5 rounded-xl bg-gray-50 dark:bg-charcoal-950 border border-gray-300 dark:border-graphite/70 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-slate-400 text-base sm:text-sm font-normal focus:outline-none focus:ring-2 focus:ring-slate-500/20 focus:border-slate-500 dark:focus:border-slate-400 transition-all resize-none leading-relaxed"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-gray-200 dark:border-graphite/40">
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-slate-300 font-medium">
                    <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Mentorship overseen by Rayyan, Uzair &amp; Aqsa</span>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-charcoal-900 text-white dark:bg-white dark:text-charcoal-950 font-bold text-sm sm:text-base flex items-center justify-center gap-2 hover:bg-black dark:hover:bg-warmWhite transition-all disabled:opacity-50 shadow-md cursor-pointer hover:scale-[1.02]"
                  >
                    {loading ? (
                      <span>Transmitting Application...</span>
                    ) : (
                      <>
                        <span>Submit Application for {track.title.split(' ')[0]}</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            ) : (
              /* Success Confirmation Screen */
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-10 flex flex-col items-center text-center max-w-lg mx-auto"
              >
                <div className="w-20 h-20 rounded-3xl bg-emerald-500/10 border-2 border-emerald-500/30 flex items-center justify-center text-emerald-500 mb-6 shadow-xl">
                  <CheckCircle2 className="w-10 h-10" />
                </div>

                <span className="font-mono text-xs uppercase px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold border border-emerald-500/20 mb-3">
                  Application Logged Successfully
                </span>

                <h3 className="text-2xl sm:text-3xl font-black text-gray-950 dark:text-white mb-2">
                  Welcome to the Arevex Pipeline!
                </h3>

                <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-6">
                  Thank you, <strong className="text-gray-900 dark:text-white">{formData.name}</strong>. Your candidate file for the <strong className="text-gray-900 dark:text-white">{track.title}</strong> track has been securely recorded.
                </p>

                <div className="w-full p-4 rounded-2xl bg-gray-50 dark:bg-charcoal-950 border border-gray-200 dark:border-graphite/40 text-xs font-mono text-left mb-6 space-y-2">
                  <div className="flex justify-between border-b border-gray-200 dark:border-graphite/20 pb-2">
                    <span className="text-gray-400 dark:text-slate-muted">Application ID:</span>
                    <span className="font-bold text-gray-900 dark:text-white">{refId}</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-200 dark:border-graphite/20 pb-2">
                    <span className="text-gray-400 dark:text-slate-muted">Track Format:</span>
                    <span className="font-bold text-emerald-600 dark:text-emerald-400">{track.mode}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400 dark:text-slate-muted">Review Window:</span>
                    <span className="text-gray-900 dark:text-white">3 to 5 Business Days</span>
                  </div>
                </div>

                <p className="text-xs text-gray-500 dark:text-slate-muted mb-8 leading-relaxed">
                  Our engineering founders personally review every single submitted portfolio and repository. If shortlisted, you will be invited to a 20-minute technical discovery call via Google Meet / WhatsApp.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 w-full">
                  <a
                    href={`https://wa.me/923000000000?text=${encodeURIComponent(
                      `Hello Arevex Tech Studio, I have submitted my internship application for ${track.title} (Ref ID: ${refId}). My name is ${formData.name}.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs font-mono flex items-center justify-center gap-2 shadow-md transition-all"
                  >
                    <WhatsAppIcon className="w-4 h-4" />
                    <span>WhatsApp Application Confirmation</span>
                  </a>

                  <button
                    onClick={resetAndClose}
                    className="flex-1 py-3 px-4 rounded-xl bg-gray-100 dark:bg-charcoal-800 text-gray-800 dark:text-white font-bold text-xs font-mono hover:bg-gray-200 dark:hover:bg-charcoal-700 transition-colors"
                  >
                    Done & Return to Tracks
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
