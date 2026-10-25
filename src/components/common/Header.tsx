'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';
import { ThemeToggle } from './ThemeToggle';
import { MagneticButton } from './MagneticButton';
import { BRAND_ASSETS } from '@/lib/brand';
import { cn } from '@/lib/utils';

const NAV_LINKS = [
  { name: 'Services', href: '/services' },
  { name: 'Products', href: '/products' },
  { name: 'Internships', href: '/internships', badge: 'Hiring' },
  { name: 'Academy', href: '/academy' },
  { name: 'Work', href: '/work' },
  { name: 'About', href: '/about' },
  { name: 'Insights', href: '/insights' },
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
            ? 'py-2.5 sm:py-3 bg-white/90 dark:bg-charcoal-950/90 backdrop-blur-md border-b border-gray-200/80 dark:border-graphite/40 shadow-sm'
            : 'py-4 sm:py-5 bg-transparent'
        )}
      >
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-11 sm:h-12">
          {/* Logo with high visibility in both Dark and Light modes */}
          <Link href="/" className="relative flex items-center shrink-0 z-10 focus:outline-none group">
            <div className="relative h-10 sm:h-11 w-40 sm:w-44 xl:w-52 transition-transform duration-300 group-hover:scale-[1.02]">
              {/* Dark mode logo (rendered when theme is dark) */}
              <Image
                src={BRAND_ASSETS.horizontal.forDarkTheme}
                alt="AREVEX TECH STUDIO"
                fill
                priority
                className={cn(
                  'object-contain object-left transition-opacity duration-300',
                  isLight ? 'opacity-0 pointer-events-none' : 'opacity-100'
                )}
              />
              {/* Light mode logo (rendered when theme is light) */}
              <Image
                src={BRAND_ASSETS.horizontal.forLightTheme}
                alt="AREVEX TECH STUDIO"
                fill
                priority
                className={cn(
                  'object-contain object-left transition-opacity duration-300',
                  isLight ? 'opacity-100' : 'opacity-0 pointer-events-none'
                )}
              />
            </div>
          </Link>

          {/* Desktop Navigation Links — Mathematically Centered */}
          <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center justify-center z-10 pointer-events-none">
            <nav className="pointer-events-auto inline-flex items-center gap-0.5 xl:gap-1 p-1 rounded-full bg-black/5 dark:bg-charcoal-900/70 backdrop-blur-md border border-gray-200/90 dark:border-graphite/50 shadow-sm">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={cn(
                      'relative inline-flex items-center gap-1.5 px-3 xl:px-3.5 py-1.5 text-xs xl:text-sm font-medium transition-all duration-200 rounded-full whitespace-nowrap',
                      isActive
                        ? 'text-charcoal-950 dark:text-warmWhite bg-white dark:bg-charcoal-800 shadow-sm font-semibold'
                        : 'text-gray-700 dark:text-slate-200 hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5'
                    )}
                  >
                    <span>{link.name}</span>
                    {link.badge && (
                      <span className="text-[9px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30">
                        {link.badge}
                      </span>
                    )}
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Action CTAs & Controls (Aligned 40px Heights) */}
          <div className="hidden sm:flex items-center gap-2.5 xl:gap-3 shrink-0 z-10">
            <ThemeToggle />
            <MagneticButton href="/contact" size="sm" variant="primary">
              <span className="whitespace-nowrap font-semibold">Start a Project</span>
              <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
            </MagneticButton>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 sm:hidden z-10">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
              className="w-10 h-10 rounded-full inline-flex items-center justify-center bg-gray-100 dark:bg-charcoal-800/80 border border-gray-300 dark:border-graphite/40 text-charcoal-800 dark:text-slate-light"
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
                          ? 'text-black dark:text-white font-bold pl-2 border-slate-muted'
                          : 'text-gray-600 dark:text-slate-light'
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
                <span>AREVEX TECH STUDIO</span>
                <span>PKR / USD</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
