'use client';

import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface MagneticButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export function MagneticButton({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className,
  type = 'button',
  disabled = false,
}: MagneticButtonProps) {
  const buttonRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!buttonRef.current || disabled) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
    const x = (clientX - (left + width / 2)) * 0.25;
    const y = (clientY - (top + height / 2)) * 0.25;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const baseStyles =
    'relative inline-flex items-center justify-center font-medium tracking-wide transition-all duration-300 rounded-full select-none overflow-hidden group focus:outline-none focus:ring-2 focus:ring-slate-muted/50 cursor-pointer whitespace-nowrap shrink-0';

  const sizeStyles = {
    sm: 'text-xs sm:text-sm px-4 sm:px-5 py-2 sm:py-2.5 gap-1.5 sm:gap-2 whitespace-nowrap',
    md: 'text-sm px-6 py-3 gap-2 whitespace-nowrap',
    lg: 'text-base px-8 py-4 gap-2.5 whitespace-nowrap',
  };

  const variantStyles = {
    primary:
      'bg-charcoal-950 text-white hover:bg-black dark:bg-warmWhite dark:text-charcoal-900 dark:hover:bg-white shadow-md border border-transparent',
    secondary:
      'bg-gray-100 text-charcoal-900 hover:bg-gray-200 dark:bg-graphite dark:text-warmWhite dark:hover:bg-graphite-light border border-gray-300 dark:border-slate-muted/20',
    outline:
      'bg-transparent text-charcoal-900 dark:text-warmWhite border border-gray-300 dark:border-slate-muted/30 hover:border-slate-500 hover:bg-black/5 dark:hover:bg-slate-muted/10',
    ghost:
      'bg-transparent text-charcoal-900 dark:text-warmWhite hover:bg-black/5 dark:hover:bg-slate-muted/10 border border-transparent',
  };

  const content = (
    <motion.div
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 250, damping: 20 }}
      className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)}
    >
      <span className="relative z-10 flex items-center gap-2 font-semibold whitespace-nowrap shrink-0">{children}</span>
    </motion.div>
  );

  if (href) {
    return (
      <Link href={href} className="inline-block shrink-0">
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className="inline-block bg-transparent p-0 border-0 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {content}
    </button>
  );
}
