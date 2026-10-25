import React from 'react';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'flex flex-col mb-12 md:mb-16',
        align === 'center' ? 'items-center text-center' : 'items-start text-left',
        className
      )}
    >
      {eyebrow && (
        <div className="flex items-center gap-2 mb-3">
          <span className="w-2 h-2 rounded-full bg-emerald-500" />
          <span className="font-mono text-xs uppercase tracking-[0.18em] text-slate-700 dark:text-slate-300 font-bold">
            {eyebrow}
          </span>
        </div>
      )}

      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-gray-950 dark:text-white leading-[1.15]">
        {title}
      </h2>

      {description && (
        <p className="mt-4 text-base sm:text-lg text-gray-700 dark:text-slate-200 max-w-2xl leading-relaxed font-normal">
          {description}
        </p>
      )}
    </div>
  );
}
