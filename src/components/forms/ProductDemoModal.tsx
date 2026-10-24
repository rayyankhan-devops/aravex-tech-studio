'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, Loader2, Monitor } from 'lucide-react';
import { ProductItem } from '@/types';
import { MagneticButton } from '@/components/common/MagneticButton';

interface ProductDemoModalProps {
  product: ProductItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProductDemoModal({ product, isOpen, onClose }: ProductDemoModalProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    branchesCount: 'Single Location',
    notes: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  if (!isOpen || !product) return null;

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
          company: `${formData.company} (${formData.branchesCount})`,
          service: `Software Demo Request: ${product.title}`,
          budget: 'Commercial Product License',
          description: `Software demo requested for ${product.title} (${product.platform} / ${product.category}). Locations: ${formData.branchesCount}. Notes: ${formData.notes || 'None'}.`,
          preferredContact: 'Email / Video Demo',
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
              <h3 className="text-2xl font-bold">Demo Scheduled</h3>
              <p className="text-sm text-slate-light dark:text-slate-light light:text-charcoal-700 leading-relaxed max-w-sm">
                Thank you for your interest in <strong>{product.title}</strong>. Our product solutions engineer will prepare your demo environment and reach out within 24 hours.
              </p>
              <MagneticButton onClick={handleClose} variant="primary" size="sm" className="mt-4">
                Done
              </MagneticButton>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-slate-muted/20 text-slate-light">
                  <Monitor className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-mono text-xs uppercase tracking-wider text-slate-muted">Software Demo Request</p>
                  <h3 className="text-lg font-bold leading-tight">{product.title}</h3>
                </div>
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
                  <label className="text-xs font-mono text-slate-muted uppercase">Business Email *</label>
                  <input
                    type="email"
                    required
                    placeholder="name@business.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-charcoal-850 dark:bg-charcoal-850 light:bg-gray-50 border border-graphite/40 text-sm focus:outline-none focus:border-slate-muted"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-mono text-slate-muted uppercase">Company Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Your Company"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-charcoal-850 dark:bg-charcoal-850 light:bg-gray-50 border border-graphite/40 text-sm focus:outline-none focus:border-slate-muted"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-mono text-slate-muted uppercase">Operation Scale</label>
                <select
                  value={formData.branchesCount}
                  onChange={(e) => setFormData({ ...formData, branchesCount: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-charcoal-850 dark:bg-charcoal-850 light:bg-gray-50 border border-graphite/40 text-sm focus:outline-none focus:border-slate-muted"
                >
                  <option value="Single Location">Single Location / Pilot</option>
                  <option value="2-5 Branches">2 to 5 Branches</option>
                  <option value="6-20 Branches">6 to 20 Branches (Enterprise)</option>
                  <option value="20+ Multi-Region">20+ Locations (Custom Network)</option>
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-mono text-slate-muted uppercase">Specific Questions or Hardware Requirements</label>
                <textarea
                  rows={2}
                  placeholder="e.g. Need thermal receipt printer integration, existing inventory data migration, etc."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-charcoal-850 dark:bg-charcoal-850 light:bg-gray-50 border border-graphite/40 text-sm focus:outline-none focus:border-slate-muted resize-none"
                />
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
                      <span>Scheduling...</span>
                    </>
                  ) : (
                    <span>Request Live Demo</span>
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
