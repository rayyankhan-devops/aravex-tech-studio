'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, ArrowUpRight } from 'lucide-react';

interface FAQItem {
  q: string;
  a: string;
  category?: string;
}

const FAQS: FAQItem[] = [
  {
    q: 'How quickly can our project kick off?',
    a: 'Following our initial technical review (usually within 24 hours), we draft an architecture blueprint and fixed-scope sprint plan. Production sprints typically kick off within 5 to 7 business days.',
    category: 'Timeline',
  },
  {
    q: 'Who will I collaborate with during engineering?',
    a: 'You collaborate directly with senior founding architects (Muhammad Rayyan, Muhammad Uzair, Aqsa Wadood). We do not employ non-technical account managers or junior buffers — you talk directly with the engineers writing and deploying your code.',
    category: 'Team',
  },
  {
    q: 'Who owns the intellectual property and code?',
    a: 'You do. 100% of all source code, Docker configurations, database schemas, and cloud deployment pipelines belong entirely to you from day one. Zero vendor lock-in, zero recurring licensing fees.',
    category: 'IP & Legal',
  },
  {
    q: 'Can you sign a Mutual NDA before we share specs?',
    a: 'Absolutely. We routinely execute mutual non-disclosure agreements (NDAs) prior to technical deep-dives, PRD reviews, or infrastructure audits to guarantee full confidentiality.',
    category: 'Confidentiality',
  },
  {
    q: 'Can we schedule a 1-on-1 Google Meet consultation before starting?',
    a: 'Yes! You can book a direct 30-minute Google Meet discovery session with our founding architects on Calendly (https://calendly.com/aravextechstudio/30min) to evaluate technical feasibility, architectural choices, and fixed-scope delivery.',
    category: 'Consultation',
  },
  {
    q: 'What is your engagement model and milestone payment structure?',
    a: 'We operate on transparent, milestone-driven sprints. Pricing is fixed-scope with payments split across deterministic cutovers: Blueprint Approval, Staging Delivery, and Final Handover.',
    category: 'Pricing',
  },
];

export function ContactFAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="w-full space-y-3">
      {FAQS.map((faq, idx) => {
        const isOpen = openIndex === idx;

        return (
          <div
            key={idx}
            className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
              isOpen
                ? 'bg-white dark:bg-charcoal-900 border-emerald-500/50 shadow-md ring-1 ring-emerald-500/10'
                : 'bg-white/70 dark:bg-charcoal-900/60 border-gray-200 dark:border-graphite/50 hover:border-gray-300 dark:hover:border-graphite hover:bg-white dark:hover:bg-charcoal-900'
            }`}
          >
            <button
              type="button"
              onClick={() => toggle(idx)}
              className="w-full px-5 sm:px-6 py-4.5 sm:py-5 flex items-center justify-between gap-4 text-left cursor-pointer transition-colors"
              aria-expanded={isOpen}
            >
              <div className="flex items-center gap-3.5 sm:gap-4 min-w-0">
                <span
                  className={`font-mono text-xs font-bold w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                    isOpen
                      ? 'bg-emerald-500 text-white shadow-xs'
                      : 'bg-gray-100 dark:bg-charcoal-800 text-gray-500 dark:text-slate-400'
                  }`}
                >
                  {String(idx + 1).padStart(2, '0')}
                </span>

                <div className="min-w-0">
                  {faq.category && (
                    <span className="text-[10px] font-sans uppercase tracking-wider font-bold text-emerald-600 dark:text-emerald-400 block mb-0.5">
                      {faq.category}
                    </span>
                  )}
                  <h3 className="text-sm sm:text-base font-bold text-gray-950 dark:text-white leading-snug">
                    {faq.q}
                  </h3>
                </div>
              </div>

              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                  isOpen
                    ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400'
                    : 'bg-gray-100 dark:bg-charcoal-800 text-gray-400 dark:text-slate-500'
                }`}
              >
                <ChevronDown className="w-4 h-4" />
              </motion.div>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-1 sm:pl-[68px] text-xs sm:text-sm text-gray-600 dark:text-slate-300 leading-relaxed border-t border-gray-100 dark:border-graphite/30">
                    <p>{faq.a}</p>

                    {faq.q.includes('Google Meet') && (
                      <div className="mt-3">
                        <a
                          href="https://calendly.com/aravextechstudio/30min"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 font-semibold text-xs text-blue-600 dark:text-blue-400 hover:underline"
                        >
                          <span>Open Calendly 30-Min Booking</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

