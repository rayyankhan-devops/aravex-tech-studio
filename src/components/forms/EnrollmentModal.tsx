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
          service: `Academy Enrollment: ${course.title}`,
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
          className="fixed inset-0 bg-charcoal-950/80 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 15 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 15 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] as const }}
          className="relative w-full max-w-lg rounded-2xl bg-charcoal-900 dark:bg-charcoal-900 light:bg-white border border-graphite/50 p-6 sm:p-8 shadow-2xl z-10 text-warmWhite dark:text-warmWhite light:text-charcoal-900"
        >
          <button
            onClick={handleClose}
            aria-label="Close modal"
            className="absolute top-5 right-5 p-2 rounded-full text-slate-muted hover:text-white dark:hover:text-white light:hover:text-black transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {success ? (
            <div className="flex flex-col items-center text-center py-8 gap-4">
              <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold">Enrollment Submitted</h3>
              <p className="text-sm text-slate-light dark:text-slate-light light:text-charcoal-700 leading-relaxed max-w-sm">
                Your application for <strong>{course.title}</strong> has been registered. Our academy coordinator will reach out to you via WhatsApp with batch schedules and fee payment instructions.
              </p>
              <MagneticButton onClick={handleClose} variant="primary" size="sm" className="mt-4">
                Done
              </MagneticButton>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-slate-muted/20 text-slate-light">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-mono text-xs uppercase tracking-wider text-slate-muted">Course Enrollment</p>
                  <h3 className="text-lg font-bold leading-tight">{course.title}</h3>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-charcoal-850 dark:bg-charcoal-850 light:bg-gray-100 border border-graphite/30 flex justify-between items-center text-xs font-mono">
                <span>Duration: {course.duration}</span>
                <span className="text-emerald-400 font-bold">{course.feePKR}</span>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-mono text-slate-muted uppercase">Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-charcoal-850 dark:bg-charcoal-850 light:bg-gray-50 border border-graphite/40 text-sm focus:outline-none focus:border-slate-muted"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-mono text-slate-muted uppercase">Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="you@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-charcoal-850 dark:bg-charcoal-850 light:bg-gray-50 border border-graphite/40 text-sm focus:outline-none focus:border-slate-muted"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-mono text-slate-muted uppercase">WhatsApp Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+92 300 1234567"
                    value={formData.phoneWhatsApp}
                    onChange={(e) => setFormData({ ...formData, phoneWhatsApp: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-charcoal-850 dark:bg-charcoal-850 light:bg-gray-50 border border-graphite/40 text-sm focus:outline-none focus:border-slate-muted"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-mono text-slate-muted uppercase">Programming Experience</label>
                <select
                  value={formData.experienceLevel}
                  onChange={(e) => setFormData({ ...formData, experienceLevel: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-charcoal-850 dark:bg-charcoal-850 light:bg-gray-50 border border-graphite/40 text-sm focus:outline-none focus:border-slate-muted"
                >
                  <option value="Beginner">Beginner (No prior coding experience)</option>
                  <option value="Intermediate">Intermediate (Some programming knowledge)</option>
                  <option value="Advanced">Advanced (Working developer / Computer Science student)</option>
                </select>
              </div>

              <div className="pt-2 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={handleClose}
                  className="px-4 py-2.5 rounded-full text-xs font-mono text-slate-muted hover:text-white transition-colors"
                >
                  Cancel
                </button>
                <MagneticButton type="submit" disabled={loading} variant="primary" size="sm">
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
