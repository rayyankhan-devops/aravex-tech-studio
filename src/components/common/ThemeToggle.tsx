'use client';

import React from 'react';
import { useTheme } from '@/context/ThemeContext';
import { Sun, Moon } from 'lucide-react';

export function ThemeToggle({ className = '' }: { className?: string }) {
  const { theme, toggleTheme, mounted } = useTheme();

  if (!mounted) {
    return (
      <div
        className={`w-10 h-10 rounded-full bg-gray-200 dark:bg-charcoal-800/40 border border-gray-300 dark:border-charcoal-700/50 shrink-0 ${className}`}
      />
    );
  }

  return (
    <button
      onClick={toggleTheme}
      type="button"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      className={`relative w-10 h-10 rounded-full inline-flex items-center justify-center shrink-0 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-slate-400 dark:focus:ring-slate-muted/50 cursor-pointer shadow-sm ${
        theme === 'dark'
          ? 'bg-charcoal-800/90 hover:bg-charcoal-700 text-amber-300 border border-graphite/60 hover:scale-105'
          : 'bg-white hover:bg-gray-100 text-slate-800 border border-gray-300 hover:scale-105'
      } ${className}`}
    >
      {theme === 'dark' ? (
        <Sun className="w-4 h-4 transition-transform duration-300 rotate-0 hover:rotate-45" />
      ) : (
        <Moon className="w-4 h-4 transition-transform duration-300 rotate-0 hover:-rotate-12 text-slate-700" />
      )}
    </button>
  );
}
