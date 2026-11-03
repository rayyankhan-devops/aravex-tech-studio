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
} from 'lucide-react';
import { CourseItem } from '@/types';
import { MagneticButton } from '@/components/common/MagneticButton';
import { PAYMENT_ACCOUNTS, PaymentAccount } from '@/lib/paymentConfig';

interface EnrollmentModalProps {
  course: CourseItem | null;
  isOpen: boolean;
  onClose: () => void;
}

type ModalStep = 'details' | 'payment' | 'success';

export function EnrollmentModal({ course, isOpen, onClose }: EnrollmentModalProps) {
  const [step, setStep] = useState<ModalStep>('details');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneWhatsApp: '',
    experienceLevel: 'Beginner',
  });

  const [selectedAccountId, setSelectedAccountId] = useState<string>(PAYMENT_ACCOUNTS[0]?.id || 'bank-meezan');
  const [copiedField, setCopiedField] = useState<string | null>(null);

  // File Upload / Dropbox State
  const [screenshotFile, setScreenshotFile] = useState<File | null>(null);
  const [screenshotPreview, setScreenshotPreview] = useState<string | null>(null);
  const [screenshotBase64, setScreenshotBase64] = useState<string>('');
  const [transactionId, setTransactionId] = useState('');
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [registrationId, setRegistrationId] = useState<string>('');

  if (!isOpen || !course) return null;

  const handleCopy = (text: string, fieldId: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldId);
    setTimeout(() => {
      setCopiedField(null);
    }, 2000);
  };

  // Step 1: Proceed to Payment & Dropbox Screen
  const handleProceedToPayment = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    if (!formData.fullName.trim() || !formData.email.trim() || !formData.phoneWhatsApp.trim()) {
      setErrorMsg('Please complete all required fields.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setErrorMsg('Please provide a valid email address.');
      return;
    }

    setStep('payment');
  };

  // File handling for the Dropbox
  const processSelectedFile = (file: File) => {
    setErrorMsg(null);

    // Limit to 10MB
    if (file.size > 10 * 1024 * 1024) {
      setErrorMsg('Payment receipt file must be under 10MB.');
      return;
    }

    setScreenshotFile(file);

    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      setScreenshotPreview(result);
      setScreenshotBase64(result);
    };
    reader.readAsDataURL(file);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      processSelectedFile(e.target.files[0]);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      processSelectedFile(e.dataTransfer.files[0]);
    }
  };

  const removeFile = (e: React.MouseEvent) => {
    e.stopPropagation();
    setScreenshotFile(null);
    setScreenshotPreview(null);
    setScreenshotBase64('');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  // Step 2: Submit Enrollment & Payment Proof to Google Sheets
  const handleFinalSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    if (!screenshotBase64 && !screenshotFile) {
      setErrorMsg('Please upload a screenshot of your payment receipt before submitting.');
      return;
    }

    setLoading(true);

    try {
      const res = await fetch('/api/training/enroll', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: formData.fullName.trim(),
          email: formData.email.trim(),
          phoneWhatsApp: formData.phoneWhatsApp.trim(),
          experienceLevel: formData.experienceLevel,
          courseId: course.id,
          courseTitle: course.title,
          courseFee: course.feePKR,
          courseDuration: course.duration,
          transactionId: transactionId.trim() || undefined,
          screenshotBase64: screenshotBase64,
          screenshotName: screenshotFile ? screenshotFile.name : `${formData.fullName.replace(/\s+/g, '_')}_receipt.png`,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Failed to submit enrollment.');
      }

      setRegistrationId(data.enrollmentId || `ARVX-TRN-2026-${Math.floor(1000 + Math.random() * 9000)}`);
      setStep('success');
    } catch (err: any) {
      console.error(err);
      setErrorMsg(err.message || 'An unexpected error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setStep('details');
    setErrorMsg(null);
    setScreenshotFile(null);
    setScreenshotPreview(null);
    setScreenshotBase64('');
    setTransactionId('');
    onClose();
  };

  const activeAccount = PAYMENT_ACCOUNTS.find((a) => a.id === selectedAccountId) || PAYMENT_ACCOUNTS[0];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose}
          className="fixed inset-0 bg-black/75 dark:bg-charcoal-950/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 15 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 15 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] as const }}
          className="relative w-full max-w-xl rounded-3xl bg-white dark:bg-charcoal-900 border border-gray-200 dark:border-graphite/60 p-6 sm:p-8 shadow-2xl z-10 text-gray-900 dark:text-warmWhite my-6 max-h-[90vh] overflow-y-auto"
        >
          {/* Close Button */}
          <button
            onClick={handleClose}
            aria-label="Close modal"
            className="absolute top-5 right-5 p-2 rounded-full text-gray-500 hover:text-black dark:text-slate-muted dark:hover:text-white transition-colors bg-gray-100 dark:bg-charcoal-800/80 hover:bg-gray-200"
          >
            <X className="w-5 h-5" />
          </button>

          {/* STEP 1: CANDIDATE INFORMATION */}
          {step === 'details' && (
            <form onSubmit={handleProceedToPayment} className="flex flex-col gap-5">
              <div className="flex items-center gap-3.5 pr-8">
                <div className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 shrink-0">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-600 dark:text-emerald-400 font-bold">
                      Step 1 of 2 • Candidate Details
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold leading-tight text-gray-950 dark:text-white">
                    {course.title}
                  </h3>
                </div>
              </div>

              {/* Course Overview Ribbon */}
              <div className="p-4 rounded-2xl bg-gray-50 dark:bg-charcoal-850 border border-gray-200 dark:border-graphite/40 flex justify-between items-center text-sm">
                <div>
                  <span className="text-xs uppercase text-gray-500 dark:text-slate-400 block font-semibold">Cohort Duration</span>
                  <span className="font-bold text-gray-950 dark:text-white">{course.duration}</span>
                </div>
                <div className="text-right">
                  <span className="text-xs uppercase text-gray-500 dark:text-slate-400 block font-semibold">Cohort Fee</span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold text-lg">{course.feePKR}</span>
                </div>
              </div>

              {errorMsg && (
                <div className="p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-600 dark:text-rose-400 text-xs flex items-center gap-2 font-medium">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              {/* Full Name */}
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-gray-900 dark:text-gray-100 flex items-center justify-between">
                  <span>Full Name <span className="text-rose-500 font-bold">*</span></span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rayyan Khan"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-charcoal-850 border border-gray-300 dark:border-graphite/70 text-sm text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
                />
              </div>

              {/* Email and WhatsApp Grid */}
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
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-charcoal-850 border border-gray-300 dark:border-graphite/70 text-sm text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
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
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-charcoal-850 border border-gray-300 dark:border-graphite/70 text-sm text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
                  />
                </div>
              </div>

              {/* Experience Level */}
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-gray-900 dark:text-gray-100">Programming Experience Level</label>
                <select
                  value={formData.experienceLevel}
                  onChange={(e) => setFormData({ ...formData, experienceLevel: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-charcoal-850 border border-gray-300 dark:border-graphite/70 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all cursor-pointer"
                >
                  <option value="Beginner" className="bg-white dark:bg-charcoal-900">Beginner (No prior coding experience)</option>
                  <option value="Intermediate" className="bg-white dark:bg-charcoal-900">Intermediate (Some programming knowledge)</option>
                  <option value="Advanced" className="bg-white dark:bg-charcoal-900">Advanced (Working developer / CS student)</option>
                </select>
              </div>

              {/* Action Buttons */}
              <div className="pt-3 flex items-center justify-between gap-3 border-t border-gray-100 dark:border-graphite/40">
                <button
                  type="button"
                  onClick={handleClose}
                  className="px-5 py-3 rounded-full text-sm font-semibold text-gray-700 dark:text-slate-300 hover:text-black dark:hover:text-white transition-colors"
                >
                  Cancel
                </button>
                <MagneticButton type="submit" variant="primary" size="md">
                  <span>Confirm Enrollment</span>
                  <ArrowRight className="w-4 h-4 ml-1.5" />
                </MagneticButton>
              </div>
            </form>
          )}

          {/* STEP 2: PAYMENT & SCREENSHOT DROPBOX */}
          {step === 'payment' && (
            <form onSubmit={handleFinalSubmit} className="flex flex-col gap-5">
              {/* Back navigation & header */}
              <div className="flex items-center justify-between pr-8">
                <button
                  type="button"
                  onClick={() => {
                    setErrorMsg(null);
                    setStep('details');
                  }}
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-gray-500 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back to Details</span>
                </button>
                <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-600 dark:text-emerald-400 font-bold px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                  Step 2 of 2 • Payment Dropbox
                </span>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold leading-tight text-gray-950 dark:text-white">
                  Pay Fee &amp; Upload Receipt
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-slate-300 mt-1">
                  Transfer <strong className="text-emerald-600 dark:text-emerald-400">{course.feePKR}</strong> for <strong>{course.title}</strong>, then drop your payment screenshot below to be saved to Google Sheet.
                </p>
              </div>

              {errorMsg && (
                <div className="p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-600 dark:text-rose-400 text-xs flex items-center gap-2 font-medium">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              {/* Payment Account Method Selector */}
              <div className="rounded-2xl border border-gray-200 dark:border-graphite/50 bg-gray-50/70 dark:bg-charcoal-950/60 p-4">
                <div className="flex items-center gap-2 mb-3 pb-2 border-b border-gray-200 dark:border-graphite/40">
                  <Building2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span className="text-xs uppercase font-bold tracking-wider text-gray-800 dark:text-slate-200">
                    Official Fee Payment Accounts
                  </span>
                </div>

                {/* Account Tab Switcher */}
                <div className="grid grid-cols-3 gap-1.5 p-1 rounded-xl bg-gray-200/70 dark:bg-charcoal-850 mb-3 text-xs font-semibold">
                  {PAYMENT_ACCOUNTS.map((acc) => (
                    <button
                      key={acc.id}
                      type="button"
                      onClick={() => setSelectedAccountId(acc.id)}
                      className={`py-1.5 px-2 rounded-lg transition-all text-center truncate ${
                        selectedAccountId === acc.id
                          ? 'bg-white dark:bg-charcoal-700 text-gray-950 dark:text-white shadow-sm font-bold'
                          : 'text-gray-600 dark:text-slate-400 hover:text-black dark:hover:text-white'
                      }`}
                    >
                      {acc.name}
                    </button>
                  ))}
                </div>

                {/* Active Account Details with 1-Click Copy */}
                <div className="flex flex-col gap-2 text-xs font-mono">
                  {/* Account Title */}
                  <div className="flex items-center justify-between p-2 rounded-lg bg-white dark:bg-charcoal-900 border border-gray-200 dark:border-graphite/40">
                    <span className="text-gray-500 dark:text-slate-400 font-sans">Account Title:</span>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-gray-950 dark:text-white">{activeAccount.title}</span>
                      <button
                        type="button"
                        onClick={() => handleCopy(activeAccount.title, 'title')}
                        className="p-1 rounded hover:bg-gray-100 dark:hover:bg-charcoal-800 text-gray-500 hover:text-black dark:hover:text-white"
                        title="Copy Account Title"
                      >
                        {copiedField === 'title' ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                      </button>
                    </div>
                  </div>

                  {/* Account Number / Mobile */}
                  <div className="flex items-center justify-between p-2 rounded-lg bg-white dark:bg-charcoal-900 border border-gray-200 dark:border-graphite/40">
                    <span className="text-gray-500 dark:text-slate-400 font-sans">
                      {activeAccount.type === 'wallet' ? 'Mobile Number:' : 'Account No:'}
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-emerald-600 dark:text-emerald-400 text-sm tracking-wide">
                        {activeAccount.accountNumber}
                      </span>
                      <button
                        type="button"
                        onClick={() => handleCopy(activeAccount.accountNumber.replace(/-/g, ''), 'number')}
                        className="p-1 rounded hover:bg-gray-100 dark:hover:bg-charcoal-800 text-gray-500 hover:text-black dark:hover:text-white"
                        title="Copy Account Number"
                      >
                        {copiedField === 'number' ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                      </button>
                    </div>
                  </div>

                  {/* IBAN if bank */}
                  {activeAccount.iban && (
                    <div className="flex items-center justify-between p-2 rounded-lg bg-white dark:bg-charcoal-900 border border-gray-200 dark:border-graphite/40">
                      <span className="text-gray-500 dark:text-slate-400 font-sans">IBAN:</span>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-gray-950 dark:text-white text-[11px] truncate max-w-[180px] sm:max-w-none">
                          {activeAccount.iban}
                        </span>
                        <button
                          type="button"
                          onClick={() => handleCopy(activeAccount.iban!, 'iban')}
                          className="p-1 rounded hover:bg-gray-100 dark:hover:bg-charcoal-800 text-gray-500 hover:text-black dark:hover:text-white"
                          title="Copy IBAN"
                        >
                          {copiedField === 'iban' ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Raast ID if bank */}
                  {activeAccount.raastId && (
                    <div className="flex items-center justify-between p-2 rounded-lg bg-white dark:bg-charcoal-900 border border-gray-200 dark:border-graphite/40">
                      <span className="text-gray-500 dark:text-slate-400 font-sans">Raast ID (0% fee):</span>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-emerald-600 dark:text-emerald-400">{activeAccount.raastId}</span>
                        <button
                          type="button"
                          onClick={() => handleCopy(activeAccount.raastId!, 'raast')}
                          className="p-1 rounded hover:bg-gray-100 dark:hover:bg-charcoal-800 text-gray-500 hover:text-black dark:hover:text-white"
                          title="Copy Raast ID"
                        >
                          {copiedField === 'raast' ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                        </button>
                      </div>
                    </div>
                  )}
                </div>

                <p className="text-[11px] text-gray-500 dark:text-slate-400 mt-2 font-sans italic">
                  💡 {activeAccount.instructions}
                </p>
              </div>

              {/* THE DROPBOX / UPLOAD AREA */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-gray-900 dark:text-gray-100 flex items-center justify-between">
                  <span>Upload Payment Screenshot <span className="text-rose-500 font-bold">*</span></span>
                  <span className="text-xs font-mono text-gray-500 dark:text-slate-400 font-normal">PNG, JPG, WEBP (Max 10MB)</span>
                </label>

                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/png,image/jpeg,image/jpg,image/webp,application/pdf"
                  onChange={handleFileChange}
                  className="hidden"
                />

                {!screenshotPreview ? (
                  <div
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                    onClick={() => fileInputRef.current?.click()}
                    className={`relative flex flex-col items-center justify-center p-6 sm:p-8 rounded-2xl border-2 border-dashed cursor-pointer transition-all ${
                      isDragging
                        ? 'border-emerald-500 bg-emerald-500/10 scale-[1.01]'
                        : 'border-gray-300 dark:border-graphite/70 bg-gray-50 dark:bg-charcoal-850 hover:border-emerald-500/70 hover:bg-gray-100/70 dark:hover:bg-charcoal-800'
                    }`}
                  >
                    <div className="w-12 h-12 rounded-2xl bg-white dark:bg-charcoal-900 border border-gray-200 dark:border-graphite/40 flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-3 shadow-sm">
                      <UploadCloud className="w-6 h-6 animate-pulse" />
                    </div>
                    <p className="text-sm font-bold text-gray-900 dark:text-white text-center">
                      Click to browse or drag &amp; drop payment screenshot here
                    </p>
                    <p className="text-xs text-gray-500 dark:text-slate-400 text-center mt-1">
                      Drop transaction receipt, Easypaisa/JazzCash confirmation, or banking slip
                    </p>
                  </div>
                ) : (
                  <div className="relative rounded-2xl border border-emerald-500/40 bg-emerald-500/5 dark:bg-emerald-950/10 p-4 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3.5 overflow-hidden">
                      {/* Thumbnail Preview */}
                      <div className="relative w-16 h-16 rounded-xl overflow-hidden border border-emerald-500/30 bg-black/20 shrink-0">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={screenshotPreview}
                          alt="Payment Screenshot Preview"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="overflow-hidden">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                          <p className="text-xs font-bold text-gray-950 dark:text-white truncate">
                            {screenshotFile ? screenshotFile.name : 'payment-receipt.png'}
                          </p>
                        </div>
                        <p className="text-[11px] font-mono text-gray-500 dark:text-slate-400 mt-0.5">
                          {screenshotFile ? `${(screenshotFile.size / 1024).toFixed(1)} KB` : 'Attached'} • Ready to upload
                        </p>
                        <button
                          type="button"
                          onClick={() => fileInputRef.current?.click()}
                          className="text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold hover:underline mt-1"
                        >
                          Change Screenshot
                        </button>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={removeFile}
                      aria-label="Remove screenshot"
                      className="p-2 rounded-full hover:bg-rose-500/10 text-gray-400 hover:text-rose-500 transition-colors shrink-0"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                )}
              </div>

              {/* Transaction ID / Reference (Optional) */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-gray-700 dark:text-slate-300 flex items-center justify-between">
                  <span>Transaction ID / Ref (Optional)</span>
                  <span className="text-[10px] font-mono text-gray-400">e.g. TRX-9823412 or Sender Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter TID if available on your banking slip"
                  value={transactionId}
                  onChange={(e) => setTransactionId(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-gray-50 dark:bg-charcoal-850 border border-gray-300 dark:border-graphite/70 text-xs text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all font-mono"
                />
              </div>

              {/* Action Buttons */}
              <div className="pt-3 flex items-center justify-between gap-3 border-t border-gray-100 dark:border-graphite/40">
                <button
                  type="button"
                  onClick={() => setStep('details')}
                  className="px-4 py-2.5 rounded-full text-xs font-semibold text-gray-700 dark:text-slate-300 hover:text-black dark:hover:text-white transition-colors"
                >
                  Back
                </button>
                <MagneticButton
                  type="submit"
                  disabled={loading || !screenshotPreview}
                  variant="primary"
                  size="md"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Uploading to Google Sheet...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Enrollment &amp; Receipt</span>
                      <UploadCloud className="w-4 h-4 ml-1.5" />
                    </>
                  )}
                </MagneticButton>
              </div>
            </form>
          )}

          {/* STEP 3: SUCCESS STATE */}
          {step === 'success' && (
            <div className="flex flex-col items-center text-center py-6 sm:py-8 gap-4">
              <div className="w-16 h-16 rounded-3xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div className="space-y-1">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                  Data Stored in Google Sheet
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-950 dark:text-white pt-2">
                  Enrollment &amp; Payment Submitted!
                </h3>
              </div>

              {/* Reference ID Pill */}
              <div className="p-3 px-5 rounded-2xl bg-gray-50 dark:bg-charcoal-850 border border-gray-200 dark:border-graphite/50 flex items-center gap-3 text-xs font-mono">
                <span className="text-gray-500 dark:text-slate-400">Registration ID:</span>
                <strong className="text-emerald-600 dark:text-emerald-400 font-bold text-sm">{registrationId}</strong>
                <button
                  type="button"
                  onClick={() => handleCopy(registrationId, 'regId')}
                  className="p-1 rounded hover:bg-gray-200 dark:hover:bg-charcoal-700 text-gray-500 hover:text-black dark:hover:text-white"
                  title="Copy Registration ID"
                >
                  {copiedField === 'regId' ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              <p className="text-xs sm:text-sm text-gray-600 dark:text-slate-300 leading-relaxed max-w-md">
                Your payment screenshot and candidate application for <strong>{course.title}</strong> have been received and recorded in our central records. Our training coordinator will verify the transaction and send cohort onboarding credentials to your WhatsApp (<strong>{formData.phoneWhatsApp}</strong>) within 12-24 business hours.
              </p>

              <MagneticButton onClick={handleClose} variant="primary" size="md" className="mt-2">
                Done
              </MagneticButton>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
