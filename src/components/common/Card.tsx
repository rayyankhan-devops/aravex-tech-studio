import React from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export function Card({ children, className, hoverEffect = true }: CardProps) {
  return (
    <div
      className={cn(
        'relative rounded-2xl p-6 sm:p-8 bg-white dark:bg-charcoal-850/80 border border-gray-200 dark:border-graphite/40 text-charcoal-900 dark:text-warmWhite overflow-hidden transition-all duration-300 shadow-sm dark:shadow-none',
        hoverEffect &&
          'hover:border-slate-400 dark:hover:border-slate-muted/60 hover:shadow-xl hover:-translate-y-1',
        className
      )}
    >
      {/* Subtle corner architectural accent */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-slate-400/5 dark:from-slate-muted/10 to-transparent pointer-events-none" />
      {children}
    </div>
  );
}
