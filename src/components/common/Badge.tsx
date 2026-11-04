import React from 'react';
import { ProductStatus } from '@/types';
import { cn } from '@/lib/utils';

interface BadgeProps {
  status: ProductStatus | string;
  className?: string;
}

export function Badge({ status, className }: BadgeProps) {
  let badgeStyles = 'bg-charcoal-800 text-slate-300 border-charcoal-700';

  if (status === 'Live') {
    badgeStyles = 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30';
  } else if (status === 'Demo') {
    badgeStyles = 'bg-sky-500/10 text-sky-400 border-sky-500/30';
  } else if (status === 'In Development') {
    badgeStyles = 'bg-amber-500/10 text-amber-400 border-amber-500/30';
  } else if (status === 'Planned') {
    badgeStyles = 'bg-purple-500/10 text-purple-400 border-purple-500/30';
  }

  return (
    <span
      className={cn(
        'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-sans font-bold border tracking-wider uppercase',
        badgeStyles,
        className
      )}
    >
      <span className="w-1.5 h-1.5 rounded-full mr-1.5 bg-current animate-pulse" />
      {status}
    </span>
  );
}
