'use client';

import React from 'react';
import { useTheme } from '@/context/ThemeContext';
import { Sun, Moon } from 'lucide-react';

export function ThemeToggle({ className = '' }: { className?: string }) {
  const { theme, toggleTheme, mounted } = useTheme();

  if (!mounted) {
    return <div className={`w-9 h-9 rounded-full bg-charcoal-800/40 border border-charcoal-700/50 ${className}`} />;
  }

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      className={`relative p-2 rounded-full transition-colors duration-300 focus:outline-none focus:ring-1 focus:ring-slate-muted/50 ${
        theme === 'dark'
          ? 'bg-charcoal-800/80 hover:bg-charcoal-700 text-slate-300 border border-graphite/40'
          : 'bg-warmWhite-muted hover:bg-warmWhite-dark text-charcoal-800 border border-gray-300'
      } ${className}`}
    >
      {theme === 'dark' ? (
        <Sun className="w-4 h-4 transition-transform duration-300 hover:rotate-45" />
      ) : (
        <Moon className="w-4 h-4 transition-transform duration-300 hover:-rotate-12" />
      )}
    </button>
  );
}
