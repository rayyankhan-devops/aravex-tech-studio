'use client';

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  CheckCircle2,
  Loader2,
  Monitor,
  Building2,
  Smartphone,
  Zap,
  Lock,
  ArrowRight,
  ArrowLeft,
  Check,
  Copy,
  UploadCloud,
  FileText,
  AlertCircle,
  Trash2,
} from 'lucide-react';
import { ProductItem } from '@/types';
import { WhatsAppIcon } from '@/components/common/SocialIcons';
import { PAYMENT_ACCOUNTS } from '@/lib/paymentConfig';

interface ProductDemoModalProps {
  product: ProductItem | null;
  isOpen: boolean;
  onClose: () => void;
  defaultMode?: 'buy' | 'demo';
}

type ModalMode = 'buy' | 'demo';

export function ProductDemoModal({
  product,
  isOpen,
  onClose,
  defaultMode = 'buy',
}: ProductDemoModalProps) {
  const [mode, setMode] = useState<ModalMode>(defaultMode);
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [deploymentModel, setDeploymentModel] = useState<'cloud' | 'onpremise'>('onpremise');
  const [selectedAccountId, setSelectedAccountId] = useState<string>(PAYMENT_ACCOUNTS[0]?.id || 'bank-meezan');
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    city: '',
    notes: '',
  });

  // Payment proof & transaction state (matching PaidInternshipModal)
  const [transactionId, setTransactionId] = useState('');
  const [screenshotFile, setScreenshotFile] = useState<File | null>(null);
  const [screenshotPreview, setScreenshotPreview] = useState<string | null>(null);
  const [screenshotBase64, setScreenshotBase64] = useState<string>('');
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [orderReceipt, setOrderReceipt] = useState<{
    orderId: string;
    licenseKey: string;
    totalAmount: string;
    transactionId?: string;
    accountName?: string;
  } | null>(null);

  if (!isOpen || !product) return null;

  // Single unified one-time commercial license price
  const ONE_TIME_PRICE_PKR = 'PKR 30,000';
  const ONE_TIME_PRICE_USD = '$105';

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(label);
    setTimeout(() => setCopiedField(null), 2000);
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

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    if (step === 1) {
      setStep(2);
    } else if (step === 2) {
      if (!formData.fullName.trim()) {
        setErrorMsg('Please enter your Name.');
        return;
      }
      if (!formData.company.trim()) {
        setErrorMsg('Please enter your Business or Store Name.');
        return;
      }
      if (!formData.phone.trim()) {
        setErrorMsg('Please enter your WhatsApp Mobile Number.');
        return;
      }
      if (!formData.email.trim() || !formData.email.includes('@')) {
        setErrorMsg('Please provide a valid Email Address.');
        return;
      }
      setStep(3);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    if (mode === 'buy') {
      if (!transactionId.trim()) {
        setErrorMsg('Please enter the Transaction Reference ID from your payment transfer receipt.');
        return;
      }
      if (!screenshotBase64) {
        setErrorMsg('Please upload a screenshot or photo of your payment transfer receipt.');
        return;
      }
    } else {
      if (!formData.fullName.trim() || !formData.company.trim() || !formData.phone.trim() || !formData.email.trim()) {
        setErrorMsg('Please fill in your Name, Business Name, WhatsApp, and Email.');
        return;
      }
    }

    setLoading(true);

    try {
      const generatedOrderId = `ARV-ORD-2026-${Math.floor(1000 + Math.random() * 9000)}`;
      const generatedKey = `ARVX-${product.id.slice(0, 3).toUpperCase()}-30K-${Math.floor(1000 + Math.random() * 9000)}-LIFETIME`;
      const selectedAccount = PAYMENT_ACCOUNTS.find((a) => a.id === selectedAccountId) || PAYMENT_ACCOUNTS[0];

      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.fullName.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim(),
          company: `${formData.company.trim()} (${formData.city.trim() || 'Pakistan'})`,
          service:
            mode === 'buy'
              ? `One-Time Commercial License: ${product.title} (PKR 30,000)`
              : `Guided Live Demo: ${product.title}`,
          budget: mode === 'buy' ? `${ONE_TIME_PRICE_PKR} (Trx: ${transactionId.trim()})` : 'Free Demo',
          preferredContact: formData.phone ? `WhatsApp (${formData.phone.trim()})` : 'Email',
          transactionId: mode === 'buy' ? transactionId.trim() : '',
          screenshotBase64: mode === 'buy' ? screenshotBase64 : '',
          screenshotName: mode === 'buy' ? screenshotFile?.name || 'receipt.png' : '',
          orderId: generatedOrderId,
          licenseKey: generatedKey,
          paymentAccount: mode === 'buy' ? `${selectedAccount.name} (${selectedAccount.title})` : '',
          deploymentModel: deploymentModel === 'onpremise' ? 'Local Desktop Offline' : 'Cloud Multi-Branch',
          description:
            mode === 'buy'
              ? `[COMMERCIAL LICENSE PURCHASE]
Product: ${product.title}
Amount: ${ONE_TIME_PRICE_PKR} (${ONE_TIME_PRICE_USD})
Order ID: ${generatedOrderId}
License Key: ${generatedKey}
Payment Rail: ${selectedAccount.name} (${selectedAccount.title})
Transaction Ref ID: ${transactionId.trim()}
Deployment: ${deploymentModel === 'onpremise' ? 'Local Desktop Offline' : 'Cloud Multi-Branch'}
Store / Business: ${formData.company.trim()}
City / Hardware: ${formData.city.trim() || 'N/A'}
Client Name: ${formData.fullName.trim()}
WhatsApp Mobile: ${formData.phone.trim()}
Email Address: ${formData.email.trim()}
Receipt File: ${screenshotFile?.name || 'receipt.png'}`
              : `[LIVE OPERATOR DEMO REQUEST]
Product: ${product.title}
Client Name: ${formData.fullName.trim()}
Store / Company: ${formData.company.trim()}
WhatsApp Mobile: ${formData.phone.trim()}
Email: ${formData.email.trim()}
City / Notes: ${formData.city.trim() || 'N/A'}`,
        }),
      });

      setOrderReceipt({
        orderId: generatedOrderId,
        licenseKey: generatedKey,
        totalAmount: `${ONE_TIME_PRICE_PKR} (${ONE_TIME_PRICE_USD})`,
        transactionId: transactionId.trim(),
        accountName: selectedAccount.name,
      });
      setSuccess(true);
    } catch (err: any) {
      console.error(err);
      setErrorMsg(err.message || 'Submission failed. Please check your connection or contact our WhatsApp desk.');
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setSuccess(false);
    setOrderReceipt(null);
    setErrorMsg(null);
    setScreenshotFile(null);
    setScreenshotPreview(null);
    setScreenshotBase64('');
    setTransactionId('');
    setStep(1);
    onClose();
  };

  const selectedAccount = PAYMENT_ACCOUNTS.find((acc) => acc.id === selectedAccountId) || PAYMENT_ACCOUNTS[0];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] as const }}
          className="relative w-full max-w-xl bg-white dark:bg-charcoal-900 border border-gray-200 dark:border-graphite/70 rounded-3xl shadow-2xl overflow-hidden z-10 my-4"
        >
          {/* Top Theodore Brand Accent Ribbon */}
          <div className="h-1.5 w-full bg-gradient-to-r from-emerald-500 via-teal-400 via-cyan-400 to-amber-400" />

          {/* Modal Header */}
          <div className="p-5 sm:p-6 pb-4 border-b border-gray-200 dark:border-graphite/40 flex items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-600 dark:text-emerald-400 font-bold">
                  {mode === 'buy' ? 'One-Time Buy • Lifetime License' : 'Interactive Product Walkthrough'}
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-gray-950 dark:text-white leading-tight">
                {product.title}
              </h2>
            </div>

            <button
              onClick={handleClose}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-charcoal-800 transition-colors text-gray-400 hover:text-black dark:hover:text-white cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Mode Switcher Tabs */}
          {!success && (
            <div className="px-5 sm:px-6 bg-gray-50 dark:bg-charcoal-950 border-b border-gray-200 dark:border-graphite/40 grid grid-cols-2 text-xs sm:text-sm font-semibold">
              <button
                type="button"
                onClick={() => {
                  setMode('buy');
                  setStep(1);
                  setErrorMsg(null);
                }}
                className={`py-3 border-b-2 flex items-center justify-center gap-2 cursor-pointer transition-all ${
                  mode === 'buy'
                    ? 'border-emerald-500 text-emerald-600 dark:text-emerald-400 font-bold bg-white dark:bg-charcoal-900/60'
                    : 'border-transparent text-gray-500 hover:text-black dark:hover:text-white'
                }`}
              >
                <Zap className="w-4 h-4 shrink-0" />
                <span className="whitespace-nowrap">Buy License</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setMode('demo');
                  setErrorMsg(null);
                }}
                className={`py-3 border-b-2 flex items-center justify-center gap-2 cursor-pointer transition-all ${
                  mode === 'demo'
                    ? 'border-emerald-500 text-emerald-600 dark:text-emerald-400 font-bold bg-white dark:bg-charcoal-900/60'
                    : 'border-transparent text-gray-500 hover:text-black dark:hover:text-white'
                }`}
              >
                <Monitor className="w-4 h-4 shrink-0" />
                <span className="whitespace-nowrap">Live Demo</span>
              </button>
            </div>
          )}

          {/* Multi-Step Progress Tracker (For Buy Mode) */}
          {mode === 'buy' && !success && (
            <div className="px-5 sm:px-6 pt-3.5 pb-2.5 bg-white dark:bg-charcoal-900 border-b border-gray-100 dark:border-graphite/40">
              <div className="flex items-center justify-between text-[11px] font-mono mb-2">
                <span className={step >= 1 ? 'font-bold text-emerald-600 dark:text-emerald-400' : 'text-gray-400'}>
                  1. License &amp; Scope
                </span>
                <span className={step >= 2 ? 'font-bold text-emerald-600 dark:text-emerald-400' : 'text-gray-400'}>
                  2. Business Details
                </span>
                <span className={step >= 3 ? 'font-bold text-emerald-600 dark:text-emerald-400' : 'text-gray-400'}>
                  3. Payment &amp; Proof
                </span>
              </div>
              <div className="w-full h-1.5 bg-gray-100 dark:bg-charcoal-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-emerald-500 transition-all duration-300 rounded-full"
                  style={{ width: step === 1 ? '33.3%' : step === 2 ? '66.6%' : '100%' }}
                />
              </div>
            </div>
          )}

          {/* Modal Content Body */}
          <div className="p-5 sm:p-6 max-h-[72vh] overflow-y-auto">
            {errorMsg && (
              <div className="mb-4 p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-700 dark:text-red-400 text-xs flex items-start gap-2">
                <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                <span>{errorMsg}</span>
              </div>
            )}

            {!success ? (
              mode === 'buy' ? (
                /* MULTI-STEP BUY WIZARD */
                <div>
                  {/* STEP 1: LICENSE & SCOPE */}
                  {step === 1 && (
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="space-y-4"
                    >
                      {/* One-Time Price Summary Box */}
                      <div className="p-4 sm:p-5 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-between">
                        <div>
                          <span className="text-[10px] uppercase font-mono font-bold px-2 py-0.5 rounded bg-emerald-500 text-white">
                            ONE-TIME BUY
                          </span>
                          <h3 className="text-base font-bold text-gray-950 dark:text-white mt-1">
                            Lifetime Commercial License
                          </h3>
                          <p className="text-xs text-gray-600 dark:text-slate-300">
                            Perpetual ownership &bull; Zero monthly subscriptions
                          </p>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-black text-emerald-600 dark:text-emerald-400 font-mono">
                            {ONE_TIME_PRICE_PKR}
                          </div>
                          <div className="text-[11px] text-gray-500 font-mono">
                            {ONE_TIME_PRICE_USD}
                          </div>
                        </div>
                      </div>

                      {/* Inclusions Checklist */}
                      <div className="p-3.5 rounded-2xl bg-gray-50 dark:bg-charcoal-950 border border-gray-200 dark:border-graphite/40 space-y-1.5 text-xs text-gray-700 dark:text-slate-300">
                        <span className="font-mono text-[10px] uppercase font-bold text-gray-500 block mb-1">
                          PACKAGE INCLUDES
                        </span>
                        <div className="flex items-center gap-2">
                          <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                          <span>Perpetual lifetime license (no recurring fees)</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                          <span>24-hour remote installation &amp; walkthrough</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                          <span>Thermal printer &amp; barcode scanner setup</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                          <span>100% client database ownership</span>
                        </div>
                      </div>

                      {/* Deployment Choice */}
                      <div>
                        <label className="block text-xs uppercase font-mono font-bold text-gray-600 dark:text-slate-300 mb-2">
                          Deployment Model
                        </label>
                        <div className="grid grid-cols-2 gap-2 text-xs">
                          <button
                            type="button"
                            onClick={() => setDeploymentModel('onpremise')}
                            className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer ${
                              deploymentModel === 'onpremise'
                                ? 'bg-emerald-500/15 border-emerald-500 font-bold text-gray-950 dark:text-white ring-1 ring-emerald-500/30'
                                : 'bg-gray-50 dark:bg-charcoal-950 border-gray-200 dark:border-graphite/40 text-gray-600 dark:text-slate-400'
                            }`}
                          >
                            <span className="block font-bold text-gray-950 dark:text-white">Local Desktop</span>
                            <span className="text-[10px] text-gray-500 block">Works 100% offline</span>
                          </button>

                          <button
                            type="button"
                            onClick={() => setDeploymentModel('cloud')}
                            className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer ${
                              deploymentModel === 'cloud'
                                ? 'bg-emerald-500/15 border-emerald-500 font-bold text-gray-950 dark:text-white ring-1 ring-emerald-500/30'
                              : 'bg-gray-50 dark:bg-charcoal-950 border-gray-200 dark:border-graphite/40 text-gray-600 dark:text-slate-400'
                            }`}
                          >
                            <span className="block font-bold text-gray-950 dark:text-white">Cloud Multi-Branch</span>
                            <span className="text-[10px] text-gray-500 block">Online store sync</span>
                          </button>
                        </div>
                      </div>

                      {/* Step 1 Actions */}
                      <div className="pt-3 border-t border-gray-100 dark:border-graphite/40 flex justify-end">
                        <button
                          type="button"
                          onClick={() => setStep(2)}
                          className="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center gap-1.5 shadow-md transition-all hover:scale-[1.02] cursor-pointer"
                        >
                          <span>Next: Business Details</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </motion.div>
                  )}

                  {/* STEP 2: BUSINESS & CONTACT DETAILS */}
                  {step === 2 && (
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="space-y-3.5"
                    >
                      <div className="text-xs text-gray-600 dark:text-slate-300">
                        Enter your business and contact information for the official license certificate and remote installation:
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                        <div>
                          <label className="block font-semibold text-gray-900 dark:text-gray-100 mb-1">
                            Your Name <span className="text-rose-500">*</span>
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="e.g. Tariq Khan"
                            value={formData.fullName}
                            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                            className="w-full px-3.5 py-2.5 rounded-xl bg-gray-50 dark:bg-charcoal-950 border border-gray-300 dark:border-graphite/70 text-gray-900 dark:text-white text-xs focus:outline-none focus:border-emerald-500"
                          />
                        </div>

                        <div>
                          <label className="block font-semibold text-gray-900 dark:text-gray-100 mb-1">
                            Business / Store Name <span className="text-rose-500">*</span>
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="e.g. Al-Noor Supermarket"
                            value={formData.company}
                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                            className="w-full px-3.5 py-2.5 rounded-xl bg-gray-50 dark:bg-charcoal-950 border border-gray-300 dark:border-graphite/70 text-gray-900 dark:text-white text-xs focus:outline-none focus:border-emerald-500"
                          />
                        </div>

                        <div>
                          <label className="block font-semibold text-gray-900 dark:text-gray-100 mb-1">
                            WhatsApp Mobile <span className="text-rose-500">*</span>
                          </label>
                          <input
                            type="tel"
                            required
                            placeholder="+92 324 9906944"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full px-3.5 py-2.5 rounded-xl bg-gray-50 dark:bg-charcoal-950 border border-gray-300 dark:border-graphite/70 text-gray-900 dark:text-white text-xs focus:outline-none focus:border-emerald-500"
                          />
                        </div>

                        <div>
                          <label className="block font-semibold text-gray-900 dark:text-gray-100 mb-1">
                            Email Address <span className="text-rose-500">*</span>
                          </label>
                          <input
                            type="email"
                            required
                            placeholder="tariq@store.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full px-3.5 py-2.5 rounded-xl bg-gray-50 dark:bg-charcoal-950 border border-gray-300 dark:border-graphite/70 text-gray-900 dark:text-white text-xs focus:outline-none focus:border-emerald-500"
                          />
                        </div>

                        <div className="sm:col-span-2">
                          <label className="block font-semibold text-gray-900 dark:text-gray-100 mb-1">
                            City &amp; Hardware Notes (Optional)
                          </label>
                          <input
                            type="text"
                            placeholder="e.g. Peshawar • Have Xprinter XP-N160I 80mm printer"
                            value={formData.city}
                            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                            className="w-full px-3.5 py-2.5 rounded-xl bg-gray-50 dark:bg-charcoal-950 border border-gray-300 dark:border-graphite/70 text-gray-900 dark:text-white text-xs focus:outline-none focus:border-emerald-500"
                          />
                        </div>
                      </div>

                      {/* Step 2 Actions */}
                      <div className="pt-3 border-t border-gray-100 dark:border-graphite/40 flex items-center justify-between">
                        <button
                          type="button"
                          onClick={() => setStep(1)}
                          className="px-4 py-2 text-xs font-semibold text-gray-600 dark:text-slate-300 hover:text-black dark:hover:text-white flex items-center gap-1 cursor-pointer"
                        >
                          <ArrowLeft className="w-3.5 h-3.5" />
                          <span>Back</span>
                        </button>

                        <button
                          type="button"
                          onClick={handleNextStep}
                          className="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center gap-1.5 shadow-md transition-all hover:scale-[1.02] cursor-pointer"
                        >
                          <span>Next: Payment &amp; Proof</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </motion.div>
                  )}

                  {/* STEP 3: PAYMENT & PROOF (EXACT LIKE PAID INTERNSHIP) */}
                  {step === 3 && (
                    <motion.div
                      key="step3"
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="space-y-4"
                    >
                      {/* Payment Instructions Callout */}
                      <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-xs text-emerald-900 dark:text-emerald-300">
                        <p className="font-semibold mb-0.5">Payment Instructions:</p>
                        <p className="leading-relaxed">
                          Transfer <strong>{ONE_TIME_PRICE_PKR}</strong> to any verified account below. After completing transfer, enter your Transaction ID and upload the receipt screenshot.
                        </p>
                      </div>

                      {/* Account Selection */}
                      <div>
                        <label className="block text-xs uppercase font-mono font-bold text-gray-600 dark:text-slate-300 mb-2">
                          Choose Bank / Wallet Account:
                        </label>
                        <div className="grid grid-cols-3 gap-2">
                          {PAYMENT_ACCOUNTS.map((acc) => (
                            <button
                              key={acc.id}
                              type="button"
                              onClick={() => setSelectedAccountId(acc.id)}
                              className={`p-2.5 rounded-xl text-left border transition-all cursor-pointer ${
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
                                <span className="truncate text-[11px] sm:text-xs">{acc.name}</span>
                              </div>
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Selected Account Card with 1-Click Copy */}
                      <div className="p-3.5 rounded-2xl bg-gray-50 dark:bg-charcoal-950 border border-gray-200 dark:border-graphite/50 text-xs space-y-2">
                        {selectedAccount.bankName && (
                          <div className="flex items-center justify-between">
                            <span className="text-gray-500">Bank / Provider:</span>
                            <span className="font-bold text-gray-950 dark:text-white">{selectedAccount.bankName}</span>
                          </div>
                        )}
                        <div className="flex items-center justify-between">
                          <span className="text-gray-500">Account Title:</span>
                          <span className="font-bold text-gray-950 dark:text-white">{selectedAccount.title}</span>
                        </div>

                        <div className="flex items-center justify-between">
                          <span className="text-gray-500">Account / Mobile:</span>
                          <div className="flex items-center gap-2">
                            <span className="font-mono font-bold text-gray-950 dark:text-white">{selectedAccount.accountNumber}</span>
                            <button
                              type="button"
                              onClick={() => handleCopy(selectedAccount.accountNumber, 'acc')}
                              className="px-2 py-0.5 rounded bg-white dark:bg-charcoal-800 border border-gray-200 dark:border-graphite/40 text-[10px] font-bold text-emerald-600 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 flex items-center gap-1 cursor-pointer"
                            >
                              {copiedField === 'acc' ? <Check className="w-3 h-3 text-emerald-500" /> : <Copy className="w-3 h-3" />}
                              <span>{copiedField === 'acc' ? 'Copied' : 'Copy'}</span>
                            </button>
                          </div>
                        </div>

                        {selectedAccount.iban && (
                          <div className="flex items-center justify-between">
                            <span className="text-gray-500">IBAN:</span>
                            <div className="flex items-center gap-2">
                              <span className="font-mono text-[11px] text-gray-950 dark:text-white truncate max-w-[170px] sm:max-w-none">{selectedAccount.iban}</span>
                              <button
                                type="button"
                                onClick={() => handleCopy(selectedAccount.iban!, 'iban')}
                                className="px-2 py-0.5 rounded bg-white dark:bg-charcoal-800 border border-gray-200 dark:border-graphite/40 text-[10px] font-bold text-emerald-600 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 flex items-center gap-1 cursor-pointer"
                              >
                                {copiedField === 'iban' ? <Check className="w-3 h-3 text-emerald-500" /> : <Copy className="w-3 h-3" />}
                                <span>{copiedField === 'iban' ? 'Copied' : 'Copy'}</span>
                              </button>
                            </div>
                          </div>
                        )}

                        <div className="pt-1.5 border-t border-gray-200 dark:border-graphite/40 text-[11px] text-gray-600 dark:text-slate-400">
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
                          className="w-full px-3.5 py-2.5 rounded-xl bg-gray-50 dark:bg-charcoal-950 border border-gray-200 dark:border-graphite/40 text-xs font-sans text-gray-900 dark:text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
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
                            className={`border-2 border-dashed rounded-2xl p-4 text-center cursor-pointer transition-all ${
                              isDragging
                                ? 'border-emerald-500 bg-emerald-500/10'
                                : 'border-gray-300 dark:border-graphite/60 bg-gray-50 dark:bg-charcoal-950/60 hover:border-emerald-500 hover:bg-emerald-500/5'
                            }`}
                          >
                            <UploadCloud className="w-6 h-6 text-emerald-500 mx-auto mb-1" />
                            <p className="text-xs font-bold text-gray-900 dark:text-white">
                              Click to choose receipt screenshot or drag &amp; drop
                            </p>
                            <p className="text-[10px] text-gray-500 dark:text-slate-400 mt-0.5">
                              Supports JPG, PNG, WEBP, or PDF (up to 10MB)
                            </p>
                          </div>
                        ) : (
                          <div className="p-3 rounded-2xl bg-gray-50 dark:bg-charcoal-950 border border-gray-200 dark:border-graphite/50 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              {screenshotPreview ? (
                                <div className="relative w-10 h-10 rounded-lg overflow-hidden border border-gray-200 dark:border-graphite/50 shrink-0">
                                  {/* eslint-disable-next-line @next/next/no-img-element */}
                                  <img src={screenshotPreview} alt="Receipt preview" className="w-full h-full object-cover" />
                                </div>
                              ) : (
                                <FileText className="w-7 h-7 text-emerald-500 shrink-0" />
                              )}
                              <div className="min-w-0">
                                <span className="text-xs font-bold text-gray-900 dark:text-white block truncate max-w-[180px] sm:max-w-[240px]">
                                  {screenshotFile.name}
                                </span>
                                <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold">
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
                              className="p-1 rounded-lg text-red-500 hover:bg-red-50 dark:hover:bg-red-950/30 flex items-center gap-1 text-xs font-bold cursor-pointer"
                              title="Remove file"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                              <span className="hidden sm:inline text-[11px]">Remove</span>
                            </button>
                          </div>
                        )}
                      </div>

                      {/* Summary & Submit Action */}
                      <div className="pt-3 border-t border-gray-100 dark:border-graphite/40 flex items-center justify-between">
                        <div>
                          <div className="text-[10px] text-gray-500 font-mono">TOTAL ONE-TIME:</div>
                          <div className="text-xl font-black text-emerald-600 dark:text-emerald-400 font-mono">
                            {ONE_TIME_PRICE_PKR}
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          <button
                            type="button"
                            onClick={() => setStep(2)}
                            className="px-3.5 py-2 text-xs font-semibold text-gray-600 dark:text-slate-300 hover:text-black dark:hover:text-white cursor-pointer"
                          >
                            Back
                          </button>

                          <button
                            type="button"
                            onClick={handleSubmit}
                            disabled={loading}
                            className="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center gap-1.5 shadow-md transition-all hover:scale-[1.02] cursor-pointer disabled:opacity-50"
                          >
                            {loading ? (
                              <>
                                <Loader2 className="w-3.5 h-3.5 animate-spin" />
                                <span>Verifying &amp; Recording...</span>
                              </>
                            ) : (
                              <>
                                <Lock className="w-3.5 h-3.5" />
                                <span>Confirm Order &amp; Proof</span>
                              </>
                            )}
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>
              ) : (
                /* LIVE DEMO SCHEDULING FORM */
                <form onSubmit={handleSubmit} className="space-y-3.5 text-xs">
                  <div className="text-xs text-gray-600 dark:text-slate-300">
                    Schedule a 30-minute 1-on-1 walkthrough with our senior software architect:
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block font-semibold text-gray-900 dark:text-gray-100 mb-1">
                        Your Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Tariq Khan"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-gray-50 dark:bg-charcoal-950 border border-gray-300 dark:border-graphite/70 text-gray-900 dark:text-white text-xs focus:outline-none focus:border-emerald-500"
                      />
                    </div>

                    <div>
                      <label className="block font-semibold text-gray-900 dark:text-gray-100 mb-1">
                        Business / Store <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Al-Noor Store"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-gray-50 dark:bg-charcoal-950 border border-gray-300 dark:border-graphite/70 text-gray-900 dark:text-white text-xs focus:outline-none focus:border-emerald-500"
                      />
                    </div>

                    <div>
                      <label className="block font-semibold text-gray-900 dark:text-gray-100 mb-1">
                        WhatsApp Phone <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+92 324 9906944"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-gray-50 dark:bg-charcoal-950 border border-gray-300 dark:border-graphite/70 text-gray-900 dark:text-white text-xs focus:outline-none focus:border-emerald-500"
                      />
                    </div>

                    <div>
                      <label className="block font-semibold text-gray-900 dark:text-gray-100 mb-1">
                        Email Address <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="tariq@store.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-gray-50 dark:bg-charcoal-950 border border-gray-300 dark:border-graphite/70 text-gray-900 dark:text-white text-xs focus:outline-none focus:border-emerald-500"
                      />
                    </div>
                  </div>

                  <div className="pt-3 border-t border-gray-100 dark:border-graphite/40 flex justify-end">
                    <button
                      type="submit"
                      disabled={loading}
                      className="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center gap-1.5 shadow-md transition-all hover:scale-[1.02] cursor-pointer disabled:opacity-50"
                    >
                      {loading ? (
                        <>
                          <Loader2 className="w-3.5 h-3.5 animate-spin" />
                          <span>Scheduling...</span>
                        </>
                      ) : (
                        <>
                          <span>Confirm Demo Request</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )
            ) : (
              /* ORDER RECEIPT & SUCCESS STATE */
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-4 text-center max-w-md mx-auto"
              >
                <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-500 mx-auto mb-3">
                  <CheckCircle2 className="w-7 h-7" />
                </div>

                <span className="font-mono text-[10px] uppercase font-bold px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                  {mode === 'buy' ? 'Payment Proof Recorded • Under Verification' : 'Demo Scheduled'}
                </span>

                <h3 className="text-xl font-black text-gray-950 dark:text-white mt-2 mb-1">
                  {mode === 'buy' ? 'Order & Payment Submitted!' : 'Walkthrough Confirmed!'}
                </h3>

                <p className="text-xs text-gray-600 dark:text-slate-300 mb-4">
                  Thank you, <strong className="text-gray-900 dark:text-white">{formData.fullName}</strong>. Your license order and payment proof for{' '}
                  <strong className="text-gray-900 dark:text-white">{product.title}</strong> have been recorded in our ledger.
                </p>

                {orderReceipt && (
                  <div className="p-3.5 rounded-xl bg-gray-50 dark:bg-charcoal-950 border border-gray-200 dark:border-graphite/40 text-xs font-mono text-left mb-4 space-y-1.5">
                    <div className="flex justify-between border-b border-gray-200 dark:border-graphite/20 pb-1">
                      <span className="text-gray-500">Order ID:</span>
                      <span className="font-bold text-gray-900 dark:text-white">{orderReceipt.orderId}</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-200 dark:border-graphite/20 pb-1">
                      <span className="text-gray-500">License Key:</span>
                      <span className="font-bold text-emerald-600 dark:text-emerald-400">{orderReceipt.licenseKey}</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-200 dark:border-graphite/20 pb-1">
                      <span className="text-gray-500">Total Amount:</span>
                      <span className="font-bold text-gray-900 dark:text-white">{orderReceipt.totalAmount}</span>
                    </div>
                    {orderReceipt.transactionId && (
                      <div className="flex justify-between border-b border-gray-200 dark:border-graphite/20 pb-1">
                        <span className="text-gray-500">Trx Ref ID:</span>
                        <span className="font-bold text-emerald-600 dark:text-emerald-400">{orderReceipt.transactionId}</span>
                      </div>
                    )}
                    {orderReceipt.accountName && (
                      <div className="flex justify-between">
                        <span className="text-gray-500">Payment Account:</span>
                        <span className="font-bold text-gray-900 dark:text-white">{orderReceipt.accountName}</span>
                      </div>
                    )}
                  </div>
                )}

                <div className="flex flex-col sm:flex-row gap-2.5 w-full">
                  <a
                    href={`https://wa.me/+923249906944?text=${encodeURIComponent(
                      `Hello Aravex Tech Studio, I have purchased a commercial license for ${product.title} for PKR 30,000 (Order ID: ${orderReceipt?.orderId || 'NEW'}, Trx ID: ${orderReceipt?.transactionId || 'N/A'}). My store name is ${formData.company}.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2.5 px-3 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-md cursor-pointer transition-all"
                  >
                    <WhatsAppIcon className="w-3.5 h-3.5" />
                    <span>WhatsApp Desk (+923249906944)</span>
                  </a>

                  <button
                    onClick={handleClose}
                    className="py-2.5 px-4 rounded-xl bg-gray-100 dark:bg-charcoal-800 text-gray-800 dark:text-white font-bold text-xs cursor-pointer hover:bg-gray-200 dark:hover:bg-charcoal-700 transition-colors"
                  >
                    Close
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
