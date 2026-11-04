'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function PageLoader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState('INITIALIZING ARCHITECTURE');

  useEffect(() => {
    // Prevent background scrolling while loader is active
    document.body.style.overflow = 'hidden';

    // Calibrated progress simulation synchronized with the 2.5s SVG animation
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        // Non-linear organic acceleration (~1.9s total)
        const increment =
          prev < 30
            ? Math.floor(Math.random() * 4 + 2)
            : prev < 75
            ? Math.floor(Math.random() * 6 + 3)
            : Math.floor(Math.random() * 5 + 2);

        return Math.min(prev + increment, 100);
      });
    }, 45);

    return () => {
      clearInterval(interval);
      document.body.style.overflow = '';
    };
  }, []);

  useEffect(() => {
    if (progress < 25) {
      setStatusText('INITIALIZING DISTRIBUTED CORE');
    } else if (progress < 55) {
      setStatusText('SYNCHRONIZING ARAVEX ASSETS');
    } else if (progress < 85) {
      setStatusText('CALIBRATING HIGH-CONCURRENCY MESH');
    } else if (progress < 100) {
      setStatusText('FINALIZING PRODUCTION GATES');
    } else {
      setStatusText('ARAVEX TECH STUDIO // READY');
      const timer = setTimeout(() => {
        setLoading(false);
        document.body.style.overflow = '';
      }, 350);
      return () => clearTimeout(timer);
    }
  }, [progress]);

  // Format progress as 3-digit padded number: 004%, 042%, 100%
  const formattedProgress = progress.toString().padStart(3, '0');

  return (
    <AnimatePresence mode="wait">
      {loading && (
        <motion.div
          key="page-loader"
          initial={{ opacity: 1 }}
          exit={{
            y: '-100%',
            transition: {
              duration: 0.85,
              ease: [0.76, 0, 0.24, 1], // Luxury cubic-bezier shutter exit
            },
          }}
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-[#090A0C] text-[#F7F7F5] select-none overflow-hidden"
        >
          {/* Layer 1: Architectural Blueprint Grid with Radial Vignette */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#23283025_1px,transparent_1px),linear-gradient(to_bottom,#23283025_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_50%,#000_65%,transparent_100%)] pointer-events-none" />

          {/* Layer 2: Ambient Luminous Halo */}
          <motion.div
            animate={{
              scale: [1, 1.25, 1],
              opacity: [0.2, 0.45, 0.2],
            }}
            transition={{
              duration: 3.2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-slate-500/20 via-emerald-500/15 to-transparent blur-[120px] pointer-events-none"
          />

          {/* Layer 3: Architectural Reticle Viewport Corners */}
          <div className="absolute top-6 left-6 font-sans text-[10px] text-slate-500 tracking-wider uppercase font-semibold flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>ARAVEX // HUD_V2.0</span>
          </div>
          <div className="absolute top-6 right-6 font-sans text-[10px] text-slate-500 tracking-wider uppercase font-semibold">
            LATENCY &lt; 15MS
          </div>
          <div className="absolute bottom-6 left-6 font-sans text-[10px] text-slate-600 tracking-wider uppercase font-semibold hidden sm:block">
            100% DISTRIBUTED ARCHITECTURE
          </div>
          <div className="absolute bottom-6 right-6 font-sans text-[10px] text-slate-600 tracking-wider uppercase font-semibold hidden sm:block">
            BUILD / AUTOMATE / LAUNCH
          </div>

          {/* Layer 4: Central Stage — Animated Brand Loader from Package */}
          <div className="relative flex flex-col items-center gap-6 sm:gap-8 z-10 w-full max-w-3xl px-4">
            {/* Center Vector Animation Capsule */}
            <div className="relative w-full aspect-[2048/682] max-h-[220px] sm:max-h-[260px] flex items-center justify-center">
              {/* Dynamic ambient backdrop illumination */}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-slate-400/10 to-transparent blur-3xl pointer-events-none rounded-full" />
              
              {/* Official Animated SVG Loader */}
              <img
                src="/aravex-loading-animation.svg"
                alt="ARAVEX TECH STUDIO"
                className="w-full h-full object-contain filter drop-shadow-[0_0_24px_rgba(16,185,129,0.22)]"
              />
            </div>

            {/* Layer 5: Calibrated Metric Progress Bar & Status Readout */}
            <div className="w-72 sm:w-96 flex flex-col items-center gap-3.5">
              {/* Telemetry Bar Track */}
              <div className="w-full h-[2px] bg-charcoal-800 rounded-full overflow-hidden relative">
                <motion.div
                  className="h-full bg-gradient-to-r from-slate-400 via-emerald-400 to-warmWhite rounded-full"
                  style={{ width: `${progress}%` }}
                  transition={{ ease: 'easeOut', duration: 0.1 }}
                />
              </div>

              {/* Digital Coordinate & Percentage Counters */}
              <div className="w-full flex items-center justify-between font-mono text-[11px] text-slate-400">
                <span className="flex items-center gap-1.5 text-slate-500">
                  <span className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" />
                  <span>CALIBRATING</span>
                </span>
                <span className="font-bold text-warmWhite tracking-wider font-mono">
                  {formattedProgress}%
                </span>
              </div>

              {/* Animated Terminal Status Sub-Label */}
              <div className="flex items-center gap-2 pt-0.5">
                <span className="font-sans text-[10px] tracking-wider uppercase font-semibold text-slate-400 text-center">
                  {statusText}
                </span>
                <span className="w-1 h-3 bg-emerald-500 animate-pulse inline-block" />
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
