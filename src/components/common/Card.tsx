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
        'relative rounded-2xl p-6 sm:p-8 bg-charcoal-850/80 dark:bg-charcoal-850/80 light:bg-white border border-graphite/40 dark:border-graphite/40 light:border-gray-200 overflow-hidden transition-all duration-300',
        hoverEffect &&
          'hover:border-slate-muted/50 hover:shadow-[0_8px_30px_rgb(0,0,0,0.25)] hover:-translate-y-1',
        className
      )}
    >
      {/* Subtle architectural noise / corner accent */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-slate-muted/5 to-transparent pointer-events-none" />
      {children}
    </div>
  );
}
