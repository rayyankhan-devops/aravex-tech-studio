'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { BRAND_ASSETS } from '@/lib/brand';

export function PageLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Elegant brief loader on first session load
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const } }}
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-charcoal-950 text-warmWhite"
        >
          {/* Subtle architectural grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#23283015_1px,transparent_1px),linear-gradient(to_bottom,#23283015_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

          <motion.div
            initial={{ scale: 0.88, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
            className="relative flex flex-col items-center gap-6"
          >
            {/* Official Monogram */}
            <div className="relative w-20 h-20 md:w-24 md:h-24">
              <Image
                src={BRAND_ASSETS.monogram.transparent}
                alt="Arevex Studio"
                fill
                priority
                className="object-contain drop-shadow-[0_0_25px_rgba(100,118,139,0.25)]"
              />
            </div>

            {/* Subtle animated loader bar */}
            <div className="w-32 h-[2px] bg-charcoal-800 rounded-full overflow-hidden relative">
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{ repeat: Infinity, duration: 1.1, ease: 'easeInOut' }}
                className="w-full h-full bg-slate-muted"
              />
            </div>

            <motion.p
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 0.7, y: 0 }}
              transition={{ delay: 0.2 }}
              className="font-mono text-[10px] tracking-[0.25em] uppercase text-slate-muted"
            >
              AREVEX TECH STUDIO
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
