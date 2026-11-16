'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { WhatsAppIcon } from '@/components/common/SocialIcons';
import { COMPANY_INFO } from '@/lib/brand';

export function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);

  const directUrl = COMPANY_INFO.socials.whatsapp;

  return (
    <aside
      aria-label="WhatsApp Contact"
      className="fixed bottom-6 left-6 z-50 flex items-center gap-3 pointer-events-auto select-none"
    >
      {/* Floating WhatsApp Action Anchor Link (Docked on Left) */}
      <motion.a
        href={directUrl}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center shadow-[0_8px_30px_rgb(37,211,102,0.4)] border-2 border-white dark:border-charcoal-900 transition-all cursor-pointer shrink-0"
        aria-label="Open WhatsApp conversation with Aravex Tech Studio"
      >
        {/* Breathing Radar Ripple Animation */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25 pointer-events-none" />
        <WhatsAppIcon className="w-7 h-7 sm:w-8 sm:h-8" />
      </motion.a>

      {/* Subtle Tooltip Pill (Floats to the right of the button) */}
      {showTooltip && (
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white dark:bg-charcoal-900 border border-gray-200 dark:border-graphite/60 shadow-xl text-xs font-mono font-medium text-gray-800 dark:text-slate-200"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
          <a
            href={directUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors whitespace-nowrap"
          >
            Chat with Engineering Lead
          </a>
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setShowTooltip(false);
            }}
            className="text-gray-400 hover:text-gray-600 dark:hover:text-white ml-1 text-sm leading-none cursor-pointer"
            aria-label="Dismiss tooltip"
          >
            ×
          </button>
        </motion.div>
      )}
    </aside>
  );
}
