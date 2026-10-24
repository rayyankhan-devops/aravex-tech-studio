'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [hoverLabel, setHoverLabel] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(true);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(pointer: fine)');
    const updatePointer = () => setIsTouchDevice(!mediaQuery.matches);
    updatePointer();
    mediaQuery.addEventListener('change', updatePointer);

    if (!mediaQuery.matches) return;

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const onMouseEnter = () => setIsVisible(true);
    const onMouseLeave = () => setIsVisible(false);

    const handleElementHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactiveEl =
        target.closest('a') ||
        target.closest('button') ||
        target.closest('[role="button"]');

      if (interactiveEl) {
        setIsHovering(true);
        const customText = interactiveEl.getAttribute('data-cursor-label');
        setHoverLabel(customText || null);
      } else {
        setIsHovering(false);
        setHoverLabel(null);
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousemove', handleElementHover);
    document.body.addEventListener('mouseenter', onMouseEnter);
    document.body.addEventListener('mouseleave', onMouseLeave);

    return () => {
      mediaQuery.removeEventListener('change', updatePointer);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousemove', handleElementHover);
      document.body.removeEventListener('mouseenter', onMouseEnter);
      document.body.removeEventListener('mouseleave', onMouseLeave);
    };
  }, [isVisible]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <>
      {/* Precision Core Dot with blend mode for crisp dual-theme visibility */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full bg-slate-800 dark:bg-white shadow-[0_0_10px_rgba(100,118,139,0.5)]"
        style={{
          width: 5,
          height: 5,
          transform: 'translate(-50%, -50%)',
        }}
        animate={{
          x: position.x,
          y: position.y,
          scale: isHovering ? 0 : 1,
          opacity: isHovering ? 0 : 1,
        }}
        transition={{ type: 'spring', damping: 35, stiffness: 450, mass: 0.05 }}
      />

      {/* Modern Architectural Reticle / Lens */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] flex items-center justify-center rounded-full border border-slate-600/50 dark:border-white/50 backdrop-blur-[1px]"
        style={{
          transform: 'translate(-50%, -50%)',
        }}
        animate={{
          x: position.x,
          y: position.y,
          width: isHovering ? 56 : 32,
          height: isHovering ? 56 : 32,
          backgroundColor: isHovering ? 'rgba(100, 118, 139, 0.16)' : 'rgba(100, 118, 139, 0.04)',
          borderColor: isHovering ? 'rgba(100, 118, 139, 0.9)' : 'rgba(100, 118, 139, 0.4)',
        }}
        transition={{ type: 'spring', damping: 26, stiffness: 220, mass: 0.15 }}
      >
        {/* Subtle geometric crosshair ticks */}
        {!isHovering && (
          <div className="relative w-full h-full flex items-center justify-center opacity-40">
            <span className="absolute w-[1px] h-2 bg-slate-500 dark:bg-white/70 top-0.5" />
            <span className="absolute w-[1px] h-2 bg-slate-500 dark:bg-white/70 bottom-0.5" />
            <span className="absolute h-[1px] w-2 bg-slate-500 dark:bg-white/70 left-0.5" />
            <span className="absolute h-[1px] w-2 bg-slate-500 dark:bg-white/70 right-0.5" />
          </div>
        )}

        {/* Hover Pill Label */}
        {isHovering && (
          <span className="font-mono text-[9px] uppercase tracking-wider text-slate-800 dark:text-white font-bold select-none">
            {hoverLabel || 'VIEW'}
          </span>
        )}
      </motion.div>
    </>
  );
}
