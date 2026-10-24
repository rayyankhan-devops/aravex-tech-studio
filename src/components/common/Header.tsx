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
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu upon navigation
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Determine which logo variant to use
  // Light mode -> dark logo; Dark mode -> light/transparent logo
  const currentLogo =
    mounted && theme === 'light'
      ? BRAND_ASSETS.mark.transparentForLight
      : BRAND_ASSETS.horizontal.transparentDark;

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled
            ? 'py-3.5 bg-charcoal-950/80 dark:bg-charcoal-950/85 light:bg-warmWhite/90 backdrop-blur-md border-b border-graphite/40 dark:border-graphite/40 light:border-gray-200 shadow-sm'
            : 'py-5 bg-transparent'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative flex items-center gap-3 group focus:outline-none">
            <div className="relative h-9 md:h-10 w-32 md:w-40 transition-transform duration-300 group-hover:scale-[1.02]">
              <Image
                src={currentLogo}
                alt="AREVEX TECH STUDIO"
                fill
                priority
                className="object-contain object-left"
              />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 px-4 py-1.5 rounded-full bg-charcoal-900/60 dark:bg-charcoal-900/60 light:bg-white/80 backdrop-blur-md border border-graphite/40 dark:border-graphite/40 light:border-gray-200">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    'relative px-3.5 py-1.5 text-xs xl:text-sm font-medium transition-colors duration-200 rounded-full',
                    isActive
                      ? 'text-warmWhite dark:text-warmWhite light:text-charcoal-900 bg-graphite/50 dark:bg-graphite/50 light:bg-gray-100 font-semibold'
                      : 'text-slate-light dark:text-slate-light light:text-charcoal-700 hover:text-white dark:hover:text-white light:hover:text-black'
                  )}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Action CTAs & Controls */}
          <div className="hidden sm:flex items-center gap-3">
            <ThemeToggle />
            <MagneticButton href="/contact" size="sm" variant="primary">
              <span>Start a Project</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </MagneticButton>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 sm:hidden">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
              className="p-2 rounded-lg bg-charcoal-800/80 dark:bg-charcoal-800/80 light:bg-gray-100 border border-graphite/40 text-slate-light"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Animated Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] as const }}
            className="fixed inset-0 z-40 bg-charcoal-950/98 dark:bg-charcoal-950/98 light:bg-warmWhite flex flex-col justify-between pt-24 pb-8 px-6 sm:hidden"
          >
            <div className="flex flex-col gap-4">
              <p className="font-mono text-xs tracking-widest uppercase text-slate-muted">Navigation</p>
              <div className="flex flex-col gap-2">
                {NAV_LINKS.map((link) => {
                  const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      className={cn(
                        'text-2xl font-semibold py-2 transition-colors border-b border-graphite/30',
                        isActive
                          ? 'text-white dark:text-white light:text-black font-bold pl-2 border-slate-muted'
                          : 'text-slate-light dark:text-slate-light light:text-charcoal-700'
                      )}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </div>
            </div>

            <div className="flex flex-col gap-4 pt-6 border-t border-graphite/40">
              <MagneticButton href="/contact" size="md" variant="primary" className="w-full text-center">
                <span>Start a Project</span>
                <ArrowUpRight className="w-4 h-4 ml-1" />
              </MagneticButton>
              <div className="flex justify-between items-center text-xs font-mono text-slate-muted">
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
