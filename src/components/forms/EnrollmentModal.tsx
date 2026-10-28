'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, Loader2, GraduationCap } from 'lucide-react';
import { CourseItem } from '@/types';
import { MagneticButton } from '@/components/common/MagneticButton';

interface EnrollmentModalProps {
  course: CourseItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export function EnrollmentModal({ course, isOpen, onClose }: EnrollmentModalProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneWhatsApp: '',
    experienceLevel: 'Beginner',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  if (!isOpen || !course) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.fullName,
          email: formData.email,
          company: `Student (WhatsApp: ${formData.phoneWhatsApp})`,
          service: `Training Enrollment: ${course.title}`,
          budget: course.feePKR,
          description: `Enrollment Application for ${course.title} (${course.duration}). Experience Level: ${formData.experienceLevel}. WhatsApp Phone: ${formData.phoneWhatsApp}. Fee: ${course.feePKR}.`,
          preferredContact: 'WhatsApp',
        }),
      });

      setSuccess(true);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setSuccess(false);
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose}
          className="fixed inset-0 bg-black/60 dark:bg-charcoal-950/80 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 15 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 15 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] as const }}
          className="relative w-full max-w-lg rounded-2xl bg-white dark:bg-charcoal-900 border border-gray-200 dark:border-graphite/50 p-6 sm:p-8 shadow-2xl z-10 text-gray-900 dark:text-warmWhite"
        >
          <button
            onClick={handleClose}
            aria-label="Close modal"
            className="absolute top-5 right-5 p-2 rounded-full text-gray-500 hover:text-black dark:text-slate-muted dark:hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {success ? (
            <div className="flex flex-col items-center text-center py-8 gap-4">
              <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold">Enrollment Submitted</h3>
              <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed max-w-sm">
                Your application for <strong>{course.title}</strong> has been registered. Our training coordinator will reach out to you via WhatsApp with batch schedules and fee payment instructions.
              </p>
              <MagneticButton onClick={handleClose} variant="primary" size="sm" className="mt-4">
                Done
              </MagneticButton>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="flex items-center gap-3.5">
                <div className="p-3 rounded-xl bg-gray-100 dark:bg-slate-muted/20 text-gray-800 dark:text-slate-light border border-gray-200 dark:border-transparent shrink-0">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-emerald-600 dark:text-emerald-400 font-bold">Course Enrollment</p>
                  <h3 className="text-xl font-bold leading-tight text-gray-950 dark:text-white">{course.title}</h3>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-gray-50 dark:bg-charcoal-850 border border-gray-200 dark:border-graphite/40 flex justify-between items-center text-sm">
                <span className="text-gray-700 dark:text-slate-300 font-medium">Cohort Duration: <strong className="text-gray-950 dark:text-white">{course.duration}</strong></span>
                <span className="text-emerald-600 dark:text-emerald-400 font-bold text-base">{course.feePKR}</span>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-gray-900 dark:text-gray-100 flex items-center justify-between">
                  <span>Full Name <span className="text-rose-500 font-bold">*</span></span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-4 py-3 sm:py-3.5 rounded-xl bg-gray-50 dark:bg-charcoal-850 border border-gray-300 dark:border-graphite/70 text-base sm:text-sm text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-500/20 focus:border-slate-500 dark:focus:border-slate-400 transition-all"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-semibold text-gray-900 dark:text-gray-100 flex items-center justify-between">
                    <span>Email Address <span className="text-rose-500 font-bold">*</span></span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="you@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 sm:py-3.5 rounded-xl bg-gray-50 dark:bg-charcoal-850 border border-gray-300 dark:border-graphite/70 text-base sm:text-sm text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-500/20 focus:border-slate-500 dark:focus:border-slate-400 transition-all"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-semibold text-gray-900 dark:text-gray-100 flex items-center justify-between">
                    <span>WhatsApp Number <span className="text-rose-500 font-bold">*</span></span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+92 300 1234567"
                    value={formData.phoneWhatsApp}
                    onChange={(e) => setFormData({ ...formData, phoneWhatsApp: e.target.value })}
                    className="w-full px-4 py-3 sm:py-3.5 rounded-xl bg-gray-50 dark:bg-charcoal-850 border border-gray-300 dark:border-graphite/70 text-base sm:text-sm text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-500/20 focus:border-slate-500 dark:focus:border-slate-400 transition-all"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-gray-900 dark:text-gray-100">Programming Experience Level</label>
                <select
                  value={formData.experienceLevel}
                  onChange={(e) => setFormData({ ...formData, experienceLevel: e.target.value })}
                  className="w-full px-4 py-3 sm:py-3.5 rounded-xl bg-gray-50 dark:bg-charcoal-850 border border-gray-300 dark:border-graphite/70 text-base sm:text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-slate-500/20 focus:border-slate-500 dark:focus:border-slate-400 transition-all cursor-pointer"
                >
                  <option value="Beginner" className="bg-white dark:bg-charcoal-900">Beginner (No prior coding experience)</option>
                  <option value="Intermediate" className="bg-white dark:bg-charcoal-900">Intermediate (Some programming knowledge)</option>
                  <option value="Advanced" className="bg-white dark:bg-charcoal-900">Advanced (Working developer / CS student)</option>
                </select>
              </div>

              <div className="pt-2 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={handleClose}
                  className="px-5 py-3 rounded-full text-sm font-semibold text-gray-700 dark:text-slate-300 hover:text-black dark:hover:text-white transition-colors"
                >
                  Cancel
                </button>
                <MagneticButton type="submit" disabled={loading} variant="primary" size="md">
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <span>Confirm Enrollment</span>
                  )}
                </MagneticButton>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
