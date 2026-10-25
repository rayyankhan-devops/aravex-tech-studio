'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  CheckCircle2,
  Loader2,
  Monitor,
  CreditCard,
  Building2,
  ShieldCheck,
  Zap,
  Download,
  Lock,
  ArrowRight,
  Sparkles,
  Layers,
  Calendar,
  Check,
} from 'lucide-react';
import { ProductItem } from '@/types';
import { WhatsAppIcon } from '@/components/common/SocialIcons';
import { COMPANY_INFO } from '@/lib/brand';

interface ProductDemoModalProps {
  product: ProductItem | null;
  isOpen: boolean;
  onClose: () => void;
  defaultMode?: 'buy' | 'demo';
}

type ModalMode = 'buy' | 'demo';
type LicenseTier = 'single' | 'multi' | 'enterprise';
type PaymentMethod = 'card' | 'bank' | 'wallet' | 'wire';

export function ProductDemoModal({
  product,
  isOpen,
  onClose,
  defaultMode = 'buy',
}: ProductDemoModalProps) {
  const [mode, setMode] = useState<ModalMode>(defaultMode);
  const [selectedTier, setSelectedTier] = useState<LicenseTier>('single');
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('card');
  const [deploymentModel, setDeploymentModel] = useState<'cloud' | 'onpremise'>('cloud');

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    city: '',
    taxId: '',
    notes: '',
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [orderReceipt, setOrderReceipt] = useState<{
    orderId: string;
    licenseKey: string;
    totalAmount: string;
  } | null>(null);

  if (!isOpen || !product) return null;

  const tiers: Record<LicenseTier, {
    name: string;
    pricePKR: string;
    priceUSD: string;
    popular?: boolean;
    features: string[];
  }> = {
    single: {
      name: 'Single Branch / Workstation',
      pricePKR: 'PKR 45,000',
      priceUSD: '$180',
      popular: false,
      features: [
        'Single store terminal deployment',
        'Offline-first SQLite local caching',
        'Thermal ESC/POS receipt driver included',
        '1 Year of core software updates',
      ],
    },
    multi: {
      name: 'Multi-Branch Network (Up to 5 Branches)',
      pricePKR: 'PKR 125,000',
      priceUSD: '$490',
      popular: true,
      features: [
        'Up to 5 concurrent retail/office branches',
        'Automated cloud synchronization engine',
        'Consolidated executive analytics dashboard',
        'Priority WhatsApp engineering support',
      ],
    },
    enterprise: {
      name: 'Enterprise Unlimited Custom Cluster',
      pricePKR: 'PKR 280,000',
      priceUSD: '$1,100',
      popular: false,
      features: [
        'Unlimited branch & register licenses',
        'Full private on-premise or cloud hosting',
        'Custom hardware biometric & barcode integration',
        'Dedicated SLA & direct architect access',
      ],
    },
  };

  const currentTier = tiers[selectedTier];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const generatedOrderId = `ARV-ORD-2026-${Math.floor(1000 + Math.random() * 9000)}`;
      const generatedKey = `ARVX-${product.id.slice(0, 3).toUpperCase()}-${selectedTier.toUpperCase()}-${Math.floor(1000 + Math.random() * 9000)}-LIFETIME`;

      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.fullName,
          email: formData.email,
          company: `${formData.company} (${formData.city})`,
          service:
            mode === 'buy'
              ? `Direct License Order: ${product.title} (${currentTier.name})`
              : `Guided Live Demo: ${product.title}`,
          budget: `${currentTier.pricePKR} (${currentTier.priceUSD})`,
          description: `Action: ${mode.toUpperCase()}. Product: ${product.title}. Tier: ${currentTier.name}. Deployment: ${deploymentModel}. Payment Method: ${paymentMethod}. Phone: ${formData.phone}. Notes: ${formData.notes || 'None'}. Provisional Order ID: ${generatedOrderId}.`,
          preferredContact: formData.phone ? `WhatsApp (${formData.phone})` : 'Email',
        }),
      });

      setOrderReceipt({
        orderId: generatedOrderId,
        licenseKey: generatedKey,
        totalAmount: `${currentTier.pricePKR} (${currentTier.priceUSD})`,
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
    setOrderReceipt(null);
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] as const }}
          className="relative w-full max-w-3xl rounded-3xl bg-white dark:bg-charcoal-900 border border-gray-200 dark:border-graphite/60 shadow-2xl overflow-hidden z-10 my-8 text-charcoal-900 dark:text-warmWhite"
        >
          {/* Header */}
          <div className="p-6 sm:p-8 bg-gray-50/80 dark:bg-charcoal-950/80 border-b border-gray-200 dark:border-graphite/40 flex items-start justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="font-mono text-xs uppercase px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold border border-emerald-500/20">
                  {product.category} SOFTWARE
                </span>
                <span className="font-mono text-xs text-gray-500 dark:text-slate-muted">
                  {product.platform} • 100% Tested
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-gray-950 dark:text-white leading-tight">
                {product.title}
              </h2>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-slate-300 mt-1 max-w-xl">
                {product.tagline}
              </p>
            </div>

            <button
              onClick={handleClose}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-charcoal-800 transition-colors text-gray-500 dark:text-slate-muted hover:text-black dark:hover:text-white"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Mode Switcher Tabs */}
          {!success && (
            <div className="px-6 sm:px-8 pt-4 pb-0 bg-white dark:bg-charcoal-900 border-b border-gray-200 dark:border-graphite/40 flex gap-6">
              <button
                type="button"
                onClick={() => setMode('buy')}
                className={`pb-3.5 text-sm sm:text-base font-bold border-b-2 flex items-center gap-2 transition-colors ${
                  mode === 'buy'
                    ? 'border-emerald-500 text-emerald-600 dark:text-emerald-400'
                    : 'border-transparent text-gray-500 dark:text-slate-muted hover:text-black dark:hover:text-white'
                }`}
              >
                <Zap className="w-4 h-4" />
                <span>Buy Commercial License (Instant Checkout)</span>
              </button>
              <button
                type="button"
                onClick={() => setMode('demo')}
                className={`pb-3.5 text-sm sm:text-base font-bold border-b-2 flex items-center gap-2 transition-colors ${
                  mode === 'demo'
                    ? 'border-emerald-500 text-emerald-600 dark:text-emerald-400'
                    : 'border-transparent text-gray-500 dark:text-slate-muted hover:text-black dark:hover:text-white'
                }`}
              >
                <Monitor className="w-4 h-4" />
                <span>Schedule 1-on-1 Guided Demo</span>
              </button>
            </div>
          )}

          {/* Modal Content */}
          <div className="p-6 sm:p-8 max-h-[72vh] overflow-y-auto">
            {!success ? (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                {mode === 'buy' && (
                  <>
                    {/* License Tier Selector */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 dark:text-gray-100 mb-2.5">
                        Select Software License Tier
                      </label>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                        {(['single', 'multi', 'enterprise'] as LicenseTier[]).map((tierKey) => {
                          const t = tiers[tierKey];
                          const isSelected = selectedTier === tierKey;
                          return (
                            <div
                              key={tierKey}
                              onClick={() => setSelectedTier(tierKey)}
                              className={`cursor-pointer p-4 rounded-2xl border transition-all flex flex-col justify-between ${
                                isSelected
                                  ? 'bg-emerald-500/10 border-emerald-500 dark:border-emerald-400 shadow-md ring-2 ring-emerald-500/40'
                                  : 'bg-gray-50 dark:bg-charcoal-950 border-gray-200 dark:border-graphite/40 hover:border-gray-400 dark:hover:border-graphite/70'
                              }`}
                            >
                              <div>
                                <div className="flex items-center justify-between mb-2">
                                  <span className="text-xs uppercase font-bold text-gray-600 dark:text-slate-300">
                                    {tierKey}
                                  </span>
                                  {t.popular && (
                                    <span className="text-[10px] uppercase px-2 py-0.5 rounded-full bg-emerald-500 text-white font-bold tracking-wide">
                                      Most Popular
                                    </span>
                                  )}
                                </div>
                                <h4 className="font-bold text-sm sm:text-base text-gray-950 dark:text-white leading-snug mb-2">
                                  {t.name}
                                </h4>
                                <div className="text-xl sm:text-2xl font-black text-emerald-600 dark:text-emerald-400">
                                  {t.pricePKR}
                                </div>
                                <div className="text-xs text-gray-600 dark:text-slate-300 font-medium">
                                  {t.priceUSD} • Lifetime License
                                </div>
                              </div>

                              <ul className="mt-3 pt-3 border-t border-gray-200 dark:border-graphite/30 space-y-1.5 text-xs text-gray-700 dark:text-slate-200">
                                {t.features.map((f, i) => (
                                  <li key={i} className="flex items-start gap-1.5">
                                    <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                                    <span>{f}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Deployment Preference */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 dark:text-gray-100 mb-2">
                        Deployment Infrastructure
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <label
                          className={`p-4 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                            deploymentModel === 'cloud'
                              ? 'bg-emerald-500/10 border-emerald-500 text-gray-900 dark:text-white font-semibold ring-1 ring-emerald-500/30'
                              : 'bg-white dark:bg-charcoal-950 border-gray-200 dark:border-graphite/40 text-gray-700 dark:text-slate-300'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <input
                              type="radio"
                              name="deployment"
                              checked={deploymentModel === 'cloud'}
                              onChange={() => setDeploymentModel('cloud')}
                              className="w-4 h-4 text-emerald-500 focus:ring-emerald-500"
                            />
                            <div>
                              <div className="text-sm font-bold text-gray-950 dark:text-white">Managed Cloud Infrastructure (AWS)</div>
                              <div className="text-xs text-gray-600 dark:text-slate-300 mt-0.5">
                                Auto backups, multi-device mobile sync, 99.98% SLA
                              </div>
                            </div>
                          </div>
                        </label>

                        <label
                          className={`p-4 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                            deploymentModel === 'onpremise'
                              ? 'bg-emerald-500/10 border-emerald-500 text-gray-900 dark:text-white font-semibold ring-1 ring-emerald-500/30'
                              : 'bg-white dark:bg-charcoal-950 border-gray-200 dark:border-graphite/40 text-gray-700 dark:text-slate-300'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <input
                              type="radio"
                              name="deployment"
                              checked={deploymentModel === 'onpremise'}
                              onChange={() => setDeploymentModel('onpremise')}
                              className="w-4 h-4 text-emerald-500 focus:ring-emerald-500"
                            />
                            <div>
                              <div className="text-sm font-bold text-gray-950 dark:text-white">On-Premise / Local Desktop Offline</div>
                              <div className="text-xs text-gray-600 dark:text-slate-300 mt-0.5">
                                Air-gapped local database, works without internet
                              </div>
                            </div>
                          </div>
                        </label>
                      </div>
                    </div>

                    {/* Payment Method Selector */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 dark:text-gray-100 mb-2">
                        Preferred Payment Method
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                        {[
                          { id: 'card', label: 'Credit / Debit Card', icon: CreditCard },
                          { id: 'bank', label: 'Corporate Bank Transfer', icon: Building2 },
                          { id: 'wallet', label: 'JazzCash / Easypaisa', icon: Zap },
                          { id: 'wire', label: 'International Wire / Stripe', icon: ShieldCheck },
                        ].map((m) => {
                          const Icon = m.icon;
                          const isSel = paymentMethod === m.id;
                          return (
                            <button
                              type="button"
                              key={m.id}
                              onClick={() => setPaymentMethod(m.id as PaymentMethod)}
                              className={`p-3.5 rounded-xl border flex flex-col items-center justify-center gap-1.5 text-center transition-all ${
                                isSel
                                  ? 'bg-emerald-500/10 border-emerald-500 text-emerald-600 dark:text-emerald-400 font-bold ring-1 ring-emerald-500/30'
                                  : 'bg-gray-50 dark:bg-charcoal-950 border-gray-200 dark:border-graphite/40 text-gray-700 dark:text-slate-300 hover:text-black dark:hover:text-white'
                              }`}
                            >
                              <Icon className="w-5 h-5" />
                              <span className="text-xs font-semibold">{m.label}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </>
                )}

                {/* Buyer / Client Contact Information */}
                <div>
                  <h3 className="text-base font-bold text-gray-950 dark:text-white mb-3 flex items-center gap-1.5">
                    <span>
                      {mode === 'buy' ? 'Licensee & Billing Details' : 'Contact Information for Guided Demo'}
                    </span>
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 dark:text-gray-100 mb-1.5">
                        Representative Name <span className="text-rose-500 font-bold">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Tariq Al-Mansoor"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full px-4 py-3 sm:py-3.5 rounded-xl bg-gray-50 dark:bg-charcoal-950 border border-gray-300 dark:border-graphite/70 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-slate-400 text-base sm:text-sm font-normal focus:outline-none focus:ring-2 focus:ring-slate-500/20 focus:border-slate-500 dark:focus:border-slate-400 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 dark:text-gray-100 mb-1.5">
                        Business / Store Name <span className="text-rose-500 font-bold">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Al-Noor Supermarket Network"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-3 sm:py-3.5 rounded-xl bg-gray-50 dark:bg-charcoal-950 border border-gray-300 dark:border-graphite/70 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-slate-400 text-base sm:text-sm font-normal focus:outline-none focus:ring-2 focus:ring-slate-500/20 focus:border-slate-500 dark:focus:border-slate-400 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 dark:text-gray-100 mb-1.5">
                        Business Email <span className="text-rose-500 font-bold">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="tariq@alnoor.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 sm:py-3.5 rounded-xl bg-gray-50 dark:bg-charcoal-950 border border-gray-300 dark:border-graphite/70 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-slate-400 text-base sm:text-sm font-normal focus:outline-none focus:ring-2 focus:ring-slate-500/20 focus:border-slate-500 dark:focus:border-slate-400 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 dark:text-gray-100 mb-1.5">
                        WhatsApp / Contact Mobile <span className="text-rose-500 font-bold">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+92 300 1234567"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 sm:py-3.5 rounded-xl bg-gray-50 dark:bg-charcoal-950 border border-gray-300 dark:border-graphite/70 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-slate-400 text-base sm:text-sm font-normal focus:outline-none focus:ring-2 focus:ring-slate-500/20 focus:border-slate-500 dark:focus:border-slate-400 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 dark:text-gray-100 mb-1.5">
                        City &amp; Country <span className="text-rose-500 font-bold">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Dubai, London, New York, Singapore"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className="w-full px-4 py-3 sm:py-3.5 rounded-xl bg-gray-50 dark:bg-charcoal-950 border border-gray-300 dark:border-graphite/70 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-slate-400 text-base sm:text-sm font-normal focus:outline-none focus:ring-2 focus:ring-slate-500/20 focus:border-slate-500 dark:focus:border-slate-400 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 dark:text-gray-100 mb-1.5">
                        NTN / Tax ID (Optional for Invoicing)
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. 7489201-3"
                        value={formData.taxId}
                        onChange={(e) => setFormData({ ...formData, taxId: e.target.value })}
                        className="w-full px-4 py-3 sm:py-3.5 rounded-xl bg-gray-50 dark:bg-charcoal-950 border border-gray-300 dark:border-graphite/70 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-slate-400 text-base sm:text-sm font-normal focus:outline-none focus:ring-2 focus:ring-slate-500/20 focus:border-slate-500 dark:focus:border-slate-400 transition-all"
                      />
                    </div>
                  </div>
                </div>

                {/* Additional Hardware Notes */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 dark:text-gray-100 mb-1.5">
                    Specific Hardware / Printer Models / Custom Requirements
                  </label>
                  <textarea
                    rows={2}
                    placeholder="e.g. We have 3 Xprinter XP-N160I USB thermal printers, barcode guns, and need Urdu receipt support..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-4 py-3 sm:py-3.5 rounded-xl bg-gray-50 dark:bg-charcoal-950 border border-gray-300 dark:border-graphite/70 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-slate-400 text-base sm:text-sm font-normal focus:outline-none focus:ring-2 focus:ring-slate-500/20 focus:border-slate-500 dark:focus:border-slate-400 transition-all resize-none leading-relaxed"
                  />
                </div>

                {/* Order Summary & Submit Button */}
                <div className="pt-4 border-t border-gray-200 dark:border-graphite/40 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    {mode === 'buy' ? (
                      <div>
                        <div className="text-xs text-gray-500 dark:text-slate-400 font-medium">Total Payable:</div>
                        <div className="text-2xl sm:text-3xl font-black text-emerald-600 dark:text-emerald-400">
                          {currentTier.pricePKR}{' '}
                          <span className="text-xs font-normal text-gray-500 dark:text-slate-400">
                            ({currentTier.priceUSD})
                          </span>
                        </div>
                      </div>
                    ) : (
                      <div className="text-xs font-mono text-gray-500 dark:text-slate-muted">
                        Live 1-on-1 Interactive Walkthrough
                      </div>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-charcoal-900 text-white dark:bg-white dark:text-charcoal-950 font-bold text-sm sm:text-base flex items-center justify-center gap-2 hover:bg-black dark:hover:bg-warmWhite transition-all disabled:opacity-50 shadow-lg shadow-emerald-500/10 hover:scale-[1.02] cursor-pointer"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Processing Order...</span>
                      </>
                    ) : mode === 'buy' ? (
                      <>
                        <Lock className="w-4 h-4 text-emerald-500" />
                        <span>Authorize Purchase &amp; Reserve License</span>
                      </>
                    ) : (
                      <>
                        <span>Confirm 1-on-1 Demo Request</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            ) : (
              /* Success / Instant Receipt State */
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-8 flex flex-col items-center text-center max-w-lg mx-auto"
              >
                <div className="w-20 h-20 rounded-3xl bg-emerald-500/10 border-2 border-emerald-500/30 flex items-center justify-center text-emerald-500 mb-6 shadow-xl">
                  <CheckCircle2 className="w-10 h-10" />
                </div>

                <span className="font-mono text-xs uppercase px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold border border-emerald-500/20 mb-3">
                  {mode === 'buy' ? 'Commercial Order Provisional Confirmation' : 'Demo Request Confirmed'}
                </span>

                <h3 className="text-2xl sm:text-3xl font-black text-gray-950 dark:text-white mb-2">
                  {mode === 'buy' ? 'License Reserved & Provisioned!' : 'Demo Scheduled with Engineering Lead!'}
                </h3>

                <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-6">
                  Thank you, <strong className="text-gray-900 dark:text-white">{formData.fullName}</strong>. Your license order for{' '}
                  <strong className="text-gray-900 dark:text-white">{product.title}</strong> has been received by Arevex Tech Studio.
                </p>

                {orderReceipt && (
                  <div className="w-full p-4 rounded-2xl bg-gray-50 dark:bg-charcoal-950 border border-gray-200 dark:border-graphite/40 text-xs font-mono text-left mb-6 space-y-2">
                    <div className="flex justify-between border-b border-gray-200 dark:border-graphite/20 pb-2">
                      <span className="text-gray-400 dark:text-slate-muted">Provisional Order:</span>
                      <span className="font-bold text-gray-900 dark:text-white">{orderReceipt.orderId}</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-200 dark:border-graphite/20 pb-2">
                      <span className="text-gray-400 dark:text-slate-muted">License Key:</span>
                      <span className="font-bold text-emerald-600 dark:text-emerald-400">
                        {orderReceipt.licenseKey}
                      </span>
                    </div>
                    <div className="flex justify-between border-b border-gray-200 dark:border-graphite/20 pb-2">
                      <span className="text-gray-400 dark:text-slate-muted">Total License Fee:</span>
                      <span className="font-bold text-gray-900 dark:text-white">{orderReceipt.totalAmount}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400 dark:text-slate-muted">Onboarding SLA:</span>
                      <span className="text-emerald-600 dark:text-emerald-400">&lt; 2 Hours</span>
                    </div>
                  </div>
                )}

                <p className="text-xs text-gray-500 dark:text-slate-muted mb-8 leading-relaxed">
                  Our co-founders and systems engineering team will personally contact you via WhatsApp and Email within 2 business hours to configure your database connection strings, printer drivers, and provide binary installer links.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 w-full">
                  <a
                    href={`https://wa.me/923000000000?text=${encodeURIComponent(
                      `Hello Arevex Tech Studio, I have placed an order for ${product.title} (Order ID: ${orderReceipt?.orderId || 'NEW'}). My business name is ${formData.company}.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs font-mono flex items-center justify-center gap-2 shadow-md transition-all"
                  >
                    <WhatsAppIcon className="w-4 h-4" />
                    <span>Confirm Order on WhatsApp</span>
                  </a>

                  <button
                    onClick={handleClose}
                    className="flex-1 py-3 px-4 rounded-xl bg-gray-100 dark:bg-charcoal-800 text-gray-800 dark:text-white font-bold text-xs font-mono hover:bg-gray-200 dark:hover:bg-charcoal-700 transition-colors"
                  >
                    Close &amp; Return
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
