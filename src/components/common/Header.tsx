'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';
import { ThemeToggle } from './ThemeToggle';
import { MagneticButton } from './MagneticButton';
import { BRAND_ASSETS } from '@/lib/brand';
import { cn } from '@/lib/utils';

// Products and Work removed from navigation links per request
const NAV_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Internships', href: '/internships', badge: 'Hiring' },
  { name: 'Training', href: '/training' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export function Header() {
  const pathname = usePathname();
  const { theme, mounted } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const isLight = mounted && theme === 'light';

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled
            ? 'py-2.5 sm:py-3 bg-white/95 dark:bg-charcoal-950/95 backdrop-blur-2xl border-b border-emerald-500/20 dark:border-emerald-500/30 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.1)] dark:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)]'
            : 'py-3.5 sm:py-4 bg-white/80 dark:bg-charcoal-950/85 backdrop-blur-xl border-b border-gray-200/80 dark:border-graphite/50 shadow-sm'
        )}
      >
        {/* Subtle luminous ambient glow strip across the top */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-11 sm:h-12">
          {/* Logo with high visibility in both Dark and Light modes */}
          <Link href="/" className="relative flex items-center shrink-0 z-10 focus:outline-none group">
            <div className="relative h-10 sm:h-11 w-40 sm:w-44 xl:w-52 transition-transform duration-300 group-hover:scale-[1.02]">
              {/* Dark mode logo */}
              <Image
                src={BRAND_ASSETS.horizontal.forDarkTheme}
                alt="ARAVEX TECH STUDIO"
                fill
                priority
                className={cn(
                  'object-contain object-left transition-opacity duration-300',
                  isLight ? 'opacity-0 pointer-events-none' : 'opacity-100'
                )}
              />
              {/* Light mode logo */}
              <Image
                src={BRAND_ASSETS.horizontal.forLightTheme}
                alt="ARAVEX TECH STUDIO"
                fill
                priority
                className={cn(
                  'object-contain object-left transition-opacity duration-300',
                  isLight ? 'opacity-100' : 'opacity-0 pointer-events-none'
                )}
              />
            </div>
          </Link>

          {/* Highlighted Desktop Navigation Capsule */}
          <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center justify-center z-10 pointer-events-none">
            <nav className="pointer-events-auto inline-flex items-center gap-1 p-1.5 rounded-full bg-white/95 dark:bg-charcoal-900/95 backdrop-blur-2xl border border-gray-200/90 dark:border-graphite/80 ring-1 ring-emerald-500/25 dark:ring-emerald-400/30 shadow-[0_4px_24px_-4px_rgba(16,185,129,0.18)] dark:shadow-[0_4px_24px_-4px_rgba(16,185,129,0.25)]">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={cn(
                      'relative inline-flex items-center gap-1.5 px-3 py-1.5 text-xs xl:text-sm font-semibold transition-all duration-200 rounded-full whitespace-nowrap',
                      isActive
                        ? 'text-emerald-700 dark:text-emerald-300 bg-emerald-500/15 dark:bg-emerald-500/20 border border-emerald-500/30 shadow-sm font-bold'
                        : 'text-gray-700 dark:text-slate-200 hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5'
                    )}
                  >
                    <span>{link.name}</span>
                    {link.badge && (
                      <span className="text-[9px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30">
                        {link.badge}
                      </span>
                    )}
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Action CTAs & Controls */}
          <div className="hidden sm:flex items-center gap-2.5 xl:gap-3 shrink-0 z-10">
            <ThemeToggle />
            <div className="relative p-[1px] rounded-full bg-gradient-to-r from-emerald-500/40 via-emerald-400/20 to-emerald-500/40 shadow-sm">
              <MagneticButton href="/contact" size="sm" variant="primary">
                <span className="whitespace-nowrap font-bold">Start a Project</span>
                <ArrowUpRight className="w-3.5 h-3.5 shrink-0 ml-1" />
              </MagneticButton>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 sm:hidden z-10">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
              className="w-10 h-10 rounded-full inline-flex items-center justify-center bg-white dark:bg-charcoal-800 border border-gray-300 dark:border-graphite/50 text-charcoal-900 dark:text-slate-light shadow-sm"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] as const }}
            className="fixed inset-0 z-40 bg-white dark:bg-charcoal-950 flex flex-col justify-between pt-24 pb-8 px-6 sm:hidden"
          >
            <div className="flex flex-col gap-4">
              <p className="font-mono text-xs tracking-widest uppercase text-gray-400 dark:text-slate-muted">Navigation</p>
              <div className="flex flex-col gap-2">
                {NAV_LINKS.map((link) => {
                  const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      className={cn(
                        'text-2xl font-semibold py-2 transition-colors border-b border-gray-100 dark:border-graphite/30 flex items-center justify-between',
                        isActive
                          ? 'text-emerald-600 dark:text-emerald-400 font-bold pl-2 border-emerald-500/30'
                          : 'text-gray-700 dark:text-slate-light'
                      )}
                    >
                      <span>{link.name}</span>
                      {link.badge && (
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold border border-emerald-500/20">
                          {link.badge}
                        </span>
                      )}
                    </Link>
                  );
                })}
              </div>
            </div>

            <div className="flex flex-col gap-4 pt-6 border-t border-gray-200 dark:border-graphite/40">
              <MagneticButton href="/contact" size="md" variant="primary" className="w-full text-center">
                <span>Start a Project</span>
                <ArrowUpRight className="w-4 h-4 ml-1" />
              </MagneticButton>
              <div className="flex justify-between items-center text-xs font-mono text-gray-500 dark:text-slate-muted">
                <span>ARAVEX TECH STUDIO</span>
                <span>Global Engineering Group</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
