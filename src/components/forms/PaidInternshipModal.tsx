'use client';

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  CheckCircle2,
  Loader2,
  GraduationCap,
  ArrowRight,
  ArrowLeft,
  UploadCloud,
  Copy,
  Check,
  Building2,
  Smartphone,
  FileText,
  AlertCircle,
  Eye,
  Award,
  BookOpen,
  Users2,
  Clock,
  ShieldCheck,
  CreditCard,
  Trash2,
} from 'lucide-react';
import { InternshipTrack } from '@/data/internships';
import { PAYMENT_ACCOUNTS, PaymentAccount } from '@/lib/paymentConfig';
import { WhatsAppIcon } from '@/components/common/SocialIcons';

interface PaidInternshipModalProps {
  track: InternshipTrack | null;
  isOpen: boolean;
  onClose: () => void;
}

type ModalStep = 'details' | 'payment' | 'success';

export function PaidInternshipModal({ track, isOpen, onClose }: PaidInternshipModalProps) {
  const [step, setStep] = useState<ModalStep>('details');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    education: '',
    portfolioUrl: '',
    motivation: '',
  });

  const [selectedAccountId, setSelectedAccountId] = useState<string>(PAYMENT_ACCOUNTS[0]?.id || 'bank-meezan');
  const [copiedField, setCopiedField] = useState<string | null>(null);

  // File Upload / Screenshot State
  const [screenshotFile, setScreenshotFile] = useState<File | null>(null);
  const [screenshotPreview, setScreenshotPreview] = useState<string | null>(null);
  const [screenshotBase64, setScreenshotBase64] = useState<string>('');
  const [transactionId, setTransactionId] = useState('');
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [applicationId, setApplicationId] = useState<string>('');

  if (!isOpen || !track) return null;

  const handleCopy = (text: string, fieldId: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldId);
    setTimeout(() => {
      setCopiedField(null);
    }, 2000);
  };

  const handleProceedToPayment = (e: React.FormEvent) => {
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
      setErrorMsg('Please provide your WhatsApp Number for cohort communication.');
      return;
    }
    if (!formData.portfolioUrl.trim()) {
      setErrorMsg('Please enter your GitHub, Portfolio, or LinkedIn URL.');
      return;
    }

    setStep('payment');
  };

  const processSelectedFile = (file: File) => {
    setErrorMsg(null);

    if (file.size > 10 * 1024 * 1024) {
      setErrorMsg('Receipt screenshot must be under 10MB.');
      return;
    }

    setScreenshotFile(file);

    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      setScreenshotBase64(result);
      if (file.type.startsWith('image/')) {
        setScreenshotPreview(result);
      } else {
        setScreenshotPreview(null);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleFileDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      processSelectedFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      processSelectedFile(e.target.files[0]);
    }
  };

  const handleFinalSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    if (!transactionId.trim()) {
      setErrorMsg('Please enter the Transaction Reference ID from your payment receipt.');
      return;
    }

    if (!screenshotBase64) {
      setErrorMsg('Please upload a screenshot or photo of your transfer receipt.');
      return;
    }

    setLoading(true);

    try {
      const payload = {
        internshipType: 'Paid',
        monthlyFee: 'Rs. 5,000 / Month',
        duration: '2 Months',
        trackId: track.id,
        trackTitle: track.title,
        category: track.category,
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        city: formData.city.trim() || 'Not specified',
        education: formData.education.trim() || 'Not specified',
        portfolioUrl: formData.portfolioUrl.trim(),
        motivation: formData.motivation.trim(),
        transactionId: transactionId.trim(),
        screenshotBase64,
        screenshotName: screenshotFile?.name || 'receipt.png',
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

      setApplicationId(data.applicationId || `ARVX-PAID-${Math.floor(1000 + Math.random() * 9000)}`);
      setStep('success');
    } catch (err: any) {
      setErrorMsg(err.message || 'Submission error. Please try again or WhatsApp our admissions desk.');
    } finally {
      setLoading(false);
    }
  };

  const resetAndClose = () => {
    setStep('details');
    setErrorMsg(null);
    setScreenshotFile(null);
    setScreenshotPreview(null);
    setScreenshotBase64('');
    setTransactionId('');
    onClose();
  };

  const selectedAccount = PAYMENT_ACCOUNTS.find((acc) => acc.id === selectedAccountId) || PAYMENT_ACCOUNTS[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 overflow-y-auto bg-black/80 backdrop-blur-md">
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 12 }}
        className="relative w-full max-w-2xl bg-white dark:bg-charcoal-900 border border-gray-200 dark:border-graphite/50 rounded-3xl shadow-2xl overflow-hidden my-auto"
      >
        {/* Modal Header */}
        <div className="p-6 border-b border-gray-100 dark:border-graphite/40 bg-gradient-to-r from-emerald-500/10 via-teal-500/5 to-transparent relative">
          <button
            onClick={resetAndClose}
            className="absolute top-5 right-5 p-2 rounded-full text-gray-500 hover:text-black dark:text-slate-400 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-charcoal-800 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="font-sans text-xs uppercase tracking-wider px-3 py-1 rounded-full bg-emerald-600 text-white font-bold shadow-sm">
              PAID INTERNSHIP • 3 MONTHS COHORT
            </span>
            <span className="font-sans text-xs font-bold px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-800 dark:text-emerald-300 border border-emerald-500/30">
              Rs. 5,000 / Month
            </span>
          </div>

          <h2 className="text-xl sm:text-2xl font-black text-gray-950 dark:text-white leading-tight">
            {track.title}
          </h2>

          {/* Quick Value Strip */}
          <div className="flex flex-wrap items-center gap-3 mt-2.5 text-xs text-gray-600 dark:text-slate-300 font-medium">
            <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-semibold">
              <CheckCircle2 className="w-3.5 h-3.5" /> Opportunity to Learn
            </span>
            <span>•</span>
            <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-semibold">
              <CheckCircle2 className="w-3.5 h-3.5" /> Premium Courses
            </span>
            <span>•</span>
            <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-semibold">
              <CheckCircle2 className="w-3.5 h-3.5" /> 1-on-1 Mentorship
            </span>
            <span>•</span>
            <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-semibold">
              <CheckCircle2 className="w-3.5 h-3.5" /> Verified Certificate
            </span>
          </div>

          {/* 2-Step Visual Progress Bar */}
          {step !== 'success' && (
            <div className="grid grid-cols-2 gap-2 mt-5">
              <div
                className={`py-2 px-3 rounded-xl text-center text-xs font-bold transition-all ${
                  step === 'details'
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'bg-emerald-500/15 text-emerald-700 dark:text-emerald-300'
                }`}
              >
                1. Candidate Details
              </div>
              <div
                className={`py-2 px-3 rounded-xl text-center text-xs font-bold transition-all ${
                  step === 'payment'
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'bg-gray-100 dark:bg-charcoal-800 text-gray-500 dark:text-slate-400'
                }`}
              >
                2. Payment &amp; Screenshot
              </div>
            </div>
          )}
        </div>

        {/* Modal Body */}
        <div className="p-6 max-h-[75vh] overflow-y-auto no-scrollbar">
          {errorMsg && (
            <div className="mb-5 p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 text-red-700 dark:text-red-400 text-xs sm:text-sm flex items-start gap-2.5">
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
              <span>{errorMsg}</span>
            </div>
          )}

          {/* STEP 1: CANDIDATE DETAILS */}
          {step === 'details' && (
            <form onSubmit={handleProceedToPayment} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-sans uppercase tracking-wider text-gray-700 dark:text-slate-300 mb-1 font-bold">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Bilal Ahmed"
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
                    placeholder="bilal@example.com"
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
                    placeholder="+92 300 1234567"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-gray-50 dark:bg-charcoal-950 border border-gray-200 dark:border-graphite/40 text-sm text-gray-900 dark:text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                  />
                  <span className="text-[10px] text-gray-500 dark:text-slate-400 mt-0.5 block">
                    Used for mentor coordination and cohort Slack/WhatsApp group.
                  </span>
                </div>

                <div>
                  <label className="block text-xs font-sans uppercase tracking-wider text-gray-700 dark:text-slate-300 mb-1 font-bold">
                    GitHub / Portfolio / LinkedIn <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="url"
                    required
                    placeholder="https://github.com/yourhandle"
                    value={formData.portfolioUrl}
                    onChange={(e) => setFormData({ ...formData, portfolioUrl: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-gray-50 dark:bg-charcoal-950 border border-gray-200 dark:border-graphite/40 text-sm text-gray-900 dark:text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                  />
                  <span className="text-[10px] text-gray-500 dark:text-slate-400 mt-0.5 block">
                    Helps mentors gauge your baseline skills before onboarding.
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-sans uppercase tracking-wider text-gray-700 dark:text-slate-300 mb-1 font-bold">
                    City &amp; Country
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Lahore, Pakistan"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-gray-50 dark:bg-charcoal-950 border border-gray-200 dark:border-graphite/40 text-sm text-gray-900 dark:text-white focus:outline-none focus:border-emerald-500"
                  />
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

              {/* Bottom Summary Bar */}
              <div className="p-4 rounded-2xl bg-emerald-500/10 dark:bg-emerald-950/30 border border-emerald-500/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-4">
                <div>
                  <span className="text-xs uppercase font-sans text-emerald-800 dark:text-emerald-300 font-bold block">
                    Monthly Fee
                  </span>
                  <span className="text-xl font-black text-gray-950 dark:text-white">
                    Rs. 5,000 <span className="text-xs font-normal text-gray-600 dark:text-slate-300">/ Month (3 Months Program)</span>
                  </span>
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/20 transition-all cursor-pointer"
                >
                  <span>Continue to Payment Proof</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}

          {/* STEP 2: PAYMENT INSTRUCTIONS & SCREENSHOT PROOF */}
          {step === 'payment' && (
            <form onSubmit={handleFinalSubmit} className="space-y-5">
              {/* Instructions Callout */}
              <div className="p-3.5 rounded-xl bg-emerald-500/10 dark:bg-emerald-950/20 border border-emerald-500/30 text-xs text-emerald-900 dark:text-emerald-300">
                <p className="font-semibold mb-0.5">Payment Instructions:</p>
                <p className="leading-relaxed">
                  Transfer <strong>Rs. 5,000</strong> (1st month fee) to any account below. After completing transfer, enter your Transaction ID and upload the receipt screenshot.
                </p>
              </div>

              {/* Account Selection */}
              <div>
                <label className="block text-xs font-sans uppercase tracking-wider text-gray-700 dark:text-slate-300 mb-2 font-bold">
                  Choose Bank / Wallet Account:
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {PAYMENT_ACCOUNTS.map((acc) => (
                    <button
                      key={acc.id}
                      type="button"
                      onClick={() => setSelectedAccountId(acc.id)}
                      className={`p-3 rounded-xl text-left border transition-all cursor-pointer ${
                        selectedAccountId === acc.id
                          ? 'bg-emerald-500/10 border-emerald-500 text-gray-950 dark:text-white font-bold shadow-sm ring-1 ring-emerald-500'
                          : 'bg-gray-50 dark:bg-charcoal-950 border-gray-200 dark:border-graphite/40 text-gray-700 dark:text-slate-400 hover:border-gray-400'
                      }`}
                    >
                      <div className="flex items-center gap-1.5 text-xs">
                        {acc.type === 'bank' ? (
                          <Building2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        ) : (
                          <Smartphone className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        )}
                        <span className="truncate">{acc.name}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Selected Account Card with Easy 1-Click Copy */}
              <div className="p-4 rounded-2xl bg-gray-50 dark:bg-charcoal-950 border border-gray-200 dark:border-graphite/50 text-xs sm:text-sm space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-gray-500 dark:text-slate-400">Account Title:</span>
                  <span className="font-bold text-gray-950 dark:text-white">{selectedAccount.title}</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-gray-500 dark:text-slate-400">Account / Mobile Number:</span>
                  <div className="flex items-center gap-2">
                    <span className="font-mono font-bold text-gray-950 dark:text-white">{selectedAccount.accountNumber}</span>
                    <button
                      type="button"
                      onClick={() => handleCopy(selectedAccount.accountNumber, 'acc')}
                      className="px-2 py-1 rounded bg-white dark:bg-charcoal-800 border border-gray-200 dark:border-graphite/40 text-[11px] font-sans font-bold text-emerald-600 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 flex items-center gap-1 cursor-pointer"
                      title="Copy Account Number"
                    >
                      {copiedField === 'acc' ? <Check className="w-3 h-3 text-emerald-500" /> : <Copy className="w-3 h-3" />}
                      <span>{copiedField === 'acc' ? 'Copied' : 'Copy'}</span>
                    </button>
                  </div>
                </div>

                {selectedAccount.iban && (
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 dark:text-slate-400">IBAN:</span>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs text-gray-950 dark:text-white truncate max-w-[200px] sm:max-w-none">{selectedAccount.iban}</span>
                      <button
                        type="button"
                        onClick={() => handleCopy(selectedAccount.iban!, 'iban')}
                        className="px-2 py-1 rounded bg-white dark:bg-charcoal-800 border border-gray-200 dark:border-graphite/40 text-[11px] font-sans font-bold text-emerald-600 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 flex items-center gap-1 cursor-pointer"
                        title="Copy IBAN"
                      >
                        {copiedField === 'iban' ? <Check className="w-3 h-3 text-emerald-500" /> : <Copy className="w-3 h-3" />}
                        <span>{copiedField === 'iban' ? 'Copied' : 'Copy'}</span>
                      </button>
                    </div>
                  </div>
                )}

                {selectedAccount.raastId && (
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 dark:text-slate-400">Raast ID:</span>
                    <div className="flex items-center gap-2">
                      <span className="font-mono font-bold text-emerald-600 dark:text-emerald-400">{selectedAccount.raastId}</span>
                      <button
                        type="button"
                        onClick={() => handleCopy(selectedAccount.raastId!, 'raast')}
                        className="px-2 py-1 rounded bg-white dark:bg-charcoal-800 border border-gray-200 dark:border-graphite/40 text-[11px] font-sans font-bold text-emerald-600 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 flex items-center gap-1 cursor-pointer"
                        title="Copy Raast ID"
                      >
                        {copiedField === 'raast' ? <Check className="w-3 h-3 text-emerald-500" /> : <Copy className="w-3 h-3" />}
                        <span>{copiedField === 'raast' ? 'Copied' : 'Copy'}</span>
                      </button>
                    </div>
                  </div>
                )}

                <div className="pt-2 border-t border-gray-200 dark:border-graphite/40 text-[11px] text-gray-600 dark:text-slate-400">
                  {selectedAccount.instructions}
                </div>
              </div>

              {/* Transaction ID Input */}
              <div>
                <label className="block text-xs font-sans uppercase tracking-wider text-gray-700 dark:text-slate-300 mb-1 font-bold">
                  Transaction Reference ID <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. 8492049182 or TRX-4928"
                  value={transactionId}
                  onChange={(e) => setTransactionId(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-gray-50 dark:bg-charcoal-950 border border-gray-200 dark:border-graphite/40 text-sm font-sans text-gray-900 dark:text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                />
              </div>

              {/* Upload Screenshot Box */}
              <div>
                <label className="block text-xs font-sans uppercase tracking-wider text-gray-700 dark:text-slate-300 mb-1 font-bold">
                  Upload Payment Screenshot / Receipt <span className="text-red-500">*</span>
                </label>
                <input
                  type="file"
                  ref={fileInputRef}
                  accept="image/png,image/jpeg,image/webp,application/pdf"
                  onChange={handleFileSelect}
                  className="hidden"
                />

                {!screenshotFile ? (
                  <div
                    onDragOver={(e) => {
                      e.preventDefault();
                      setIsDragging(true);
                    }}
                    onDragLeave={() => setIsDragging(false)}
                    onDrop={handleFileDrop}
                    onClick={() => fileInputRef.current?.click()}
                    className={`border-2 border-dashed rounded-2xl p-5 text-center cursor-pointer transition-all ${
                      isDragging
                        ? 'border-emerald-500 bg-emerald-500/10'
                        : 'border-gray-300 dark:border-graphite/60 bg-gray-50 dark:bg-charcoal-950/60 hover:border-emerald-500 hover:bg-emerald-500/5'
                    }`}
                  >
                    <UploadCloud className="w-7 h-7 text-emerald-500 mx-auto mb-1.5" />
                    <p className="text-xs sm:text-sm font-bold text-gray-900 dark:text-white">
                      Click to choose receipt screenshot or drag &amp; drop
                    </p>
                    <p className="text-[11px] text-gray-500 dark:text-slate-400 mt-0.5">
                      Supports JPG, PNG, WEBP, or PDF (up to 10MB)
                    </p>
                  </div>
                ) : (
                  <div className="p-3.5 rounded-2xl bg-gray-50 dark:bg-charcoal-950 border border-gray-200 dark:border-graphite/50 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      {screenshotPreview ? (
                        <div className="relative w-12 h-12 rounded-lg overflow-hidden border border-gray-200 dark:border-graphite/50 shrink-0">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src={screenshotPreview} alt="Receipt preview" className="w-full h-full object-cover" />
                        </div>
                      ) : (
                        <FileText className="w-8 h-8 text-emerald-500 shrink-0" />
                      )}
                      <div className="min-w-0">
                        <span className="text-xs font-bold text-gray-900 dark:text-white block truncate max-w-[200px] sm:max-w-[280px]">
                          {screenshotFile.name}
                        </span>
                        <span className="text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold">
                          {(screenshotFile.size / 1024).toFixed(1)} KB • Ready to submit
                        </span>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        setScreenshotFile(null);
                        setScreenshotPreview(null);
                        setScreenshotBase64('');
                      }}
                      className="p-1.5 rounded-lg text-red-500 hover:bg-red-50 dark:hover:bg-red-950/30 flex items-center gap-1 text-xs font-bold cursor-pointer"
                      title="Remove file"
                    >
                      <Trash2 className="w-4 h-4" />
                      <span className="hidden sm:inline">Remove</span>
                    </button>
                  </div>
                )}
              </div>

              {/* Final Submit & Back Buttons */}
              <div className="pt-2 flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => setStep('details')}
                  className="px-4 py-2.5 rounded-xl border border-gray-200 dark:border-graphite/50 text-gray-700 dark:text-slate-300 text-xs sm:text-sm font-bold flex items-center gap-1.5 hover:bg-gray-100 dark:hover:bg-charcoal-800 transition-colors cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back</span>
                </button>

                <button
                  type="submit"
                  disabled={loading}
                  className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-lg shadow-emerald-600/20 transition-all cursor-pointer"
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
          )}

          {/* STEP 3: SUCCESS CONFIRMATION */}
          {step === 'success' && (
            <div className="py-6 text-center space-y-5">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-500 border border-emerald-500/30 flex items-center justify-center mx-auto shadow-lg">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div>
                <span className="font-sans text-xs uppercase tracking-wider text-emerald-600 dark:text-emerald-400 font-bold block mb-1">
                  Payment Proof Recorded
                </span>
                <h3 className="text-2xl font-black text-gray-950 dark:text-white">
                  Application Submitted Successfully!
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-slate-300 max-w-md mx-auto mt-2">
                  Your application for <strong>{track.title}</strong> (3 Months Paid Cohort) has been registered. Our admissions desk will verify your payment and send onboarding instructions within 24 hours.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-gray-50 dark:bg-charcoal-950 border border-gray-200 dark:border-graphite/40 max-w-sm mx-auto text-left space-y-1.5 text-xs font-sans">
                <div className="flex justify-between">
                  <span className="text-gray-500 dark:text-slate-400">Application Ref:</span>
                  <span className="font-bold text-emerald-600 dark:text-emerald-400">{applicationId}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500 dark:text-slate-400">Cohort Duration:</span>
                  <span className="font-bold text-gray-900 dark:text-white">3 Months</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500 dark:text-slate-400">Monthly Fee:</span>
                  <span className="font-bold text-gray-900 dark:text-white">Rs. 5,000 / Month</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500 dark:text-slate-400">Status:</span>
                  <span className="text-amber-600 dark:text-amber-400 font-bold">Verification Pending</span>
                </div>
              </div>

              {/* Fast-Track WhatsApp Verification */}
              <div className="pt-2">
                <a
                  href={`https://wa.me/923000000000?text=Hello%20Aravex%20Admissions%2C%20I%20have%20submitted%20my%20Paid%20Internship%20application%20for%20${encodeURIComponent(track.title)}.%20Ref%3A%20${applicationId}%2C%20Transaction%20ID%3A%20${transactionId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-xs sm:text-sm shadow-md transition-all hover:scale-[1.02]"
                >
                  <WhatsAppIcon className="w-5 h-5" />
                  <span>Send Receipt on WhatsApp for Instant Approval</span>
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
