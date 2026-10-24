'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, ArrowUpRight, ShieldCheck, Clock } from 'lucide-react';
import { WhatsAppIcon } from '@/components/common/SocialIcons';
import { COMPANY_INFO } from '@/lib/brand';

export function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);

  const directUrl = COMPANY_INFO.socials.whatsapp;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-auto select-none">
      {/* Floating Interactive Micro-Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="mb-4 w-80 sm:w-96 rounded-2xl bg-white dark:bg-charcoal-900 border border-gray-200 dark:border-graphite/60 shadow-2xl overflow-hidden text-charcoal-900 dark:text-warmWhite"
          >
            {/* Header */}
            <div className="bg-[#075E54] text-white p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center text-white shadow-md">
                  <WhatsAppIcon className="w-6 h-6" />
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-400 border-2 border-[#075E54] rounded-full animate-pulse" />
                </div>
                <div>
                  <h4 className="font-bold text-sm leading-tight">Arevex Engineering Desk</h4>
                  <p className="text-[11px] text-emerald-100/90 flex items-center gap-1 mt-0.5 font-mono">
                    <Clock className="w-3 h-3" /> Usually replies in ~15 mins
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-full hover:bg-white/10 transition-colors text-white"
                aria-label="Close WhatsApp card"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Content Body */}
            <div className="p-4 bg-gray-50/60 dark:bg-charcoal-950/60 text-xs sm:text-sm text-gray-700 dark:text-slate-300 flex flex-col gap-3">
              <div className="p-3.5 rounded-xl bg-white dark:bg-charcoal-900 border border-gray-200 dark:border-graphite/40 shadow-sm leading-relaxed">
                <p className="font-semibold text-gray-900 dark:text-white mb-1">
                  Assalam-o-Alaikum / Hello! 👋
                </p>
                <p>
                  Need an urgent retail POS consultation, custom AI agent pipeline, cloud infrastructure audit, or internship program details?
                </p>
                <p className="mt-2 text-gray-500 dark:text-slate-400 text-xs">
                  Connect directly with our co-founders & engineering leads on official WhatsApp.
                </p>
              </div>

              <div className="flex items-center gap-2 text-[11px] font-mono text-emerald-600 dark:text-emerald-400">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Verified Studio Business Profile</span>
              </div>

              <a
                href={directUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="mt-1 w-full py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <WhatsAppIcon className="w-5 h-5" />
                <span>Open WhatsApp Direct Chat</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Persistent Pulsing Badge & Trigger Button */}
      <div className="flex items-center gap-3">
        {/* Subtle Tooltip Pill (dismissable or toggled) */}
        {!isOpen && showTooltip && (
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white dark:bg-charcoal-900 border border-gray-200 dark:border-graphite/60 shadow-xl text-xs font-mono font-medium text-gray-800 dark:text-slate-200"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Chat with Engineering Lead</span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowTooltip(false);
              }}
              className="text-gray-400 hover:text-gray-600 dark:hover:text-white ml-1"
              aria-label="Dismiss tooltip"
            >
              ×
            </button>
          </motion.div>
        )}

        {/* Floating WhatsApp Action Button */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-[0_8px_30px_rgb(37,211,102,0.4)] border-2 border-white dark:border-charcoal-900 transition-all"
          aria-label="Open WhatsApp conversation with Arevex Tech Studio"
        >
          {/* Breathing Radar Ripple Animation */}
          <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25 pointer-events-none" />

          {isOpen ? (
            <X className="w-7 h-7 sm:w-8 sm:h-8" />
          ) : (
            <WhatsAppIcon className="w-7 h-7 sm:w-8 sm:h-8" />
          )}
        </motion.button>
      </div>
    </div>
  );
}
