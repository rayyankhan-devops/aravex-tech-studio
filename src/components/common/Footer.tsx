'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, Mail, MapPin } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterXIcon } from '@/components/common/SocialIcons';
import { useTheme } from '@/context/ThemeContext';
import { BRAND_ASSETS, COMPANY_INFO } from '@/lib/brand';

export function Footer() {
  const { theme, mounted } = useTheme();

  // Full logo for footer
  const footerLogo =
    mounted && theme === 'light'
      ? BRAND_ASSETS.mark.transparentForLight
      : BRAND_ASSETS.horizontal.transparentDark;

  return (
    <footer className="relative bg-charcoal-950 dark:bg-charcoal-950 light:bg-warmWhite-muted text-warmWhite dark:text-warmWhite light:text-charcoal-900 border-t border-graphite/40 dark:border-graphite/40 light:border-gray-200 overflow-hidden transition-colors duration-300">
      {/* Subtle ambient light gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-slate-muted/5 dark:bg-slate-muted/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-graphite/40 dark:border-graphite/40 light:border-gray-200">
          {/* Brand Column */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            <Link href="/" className="inline-block relative h-10 w-44">
              <Image
                src={footerLogo}
                alt="AREVEX TECH STUDIO"
                fill
                className="object-contain object-left"
              />
            </Link>
            <p className="text-sm text-slate-muted dark:text-slate-light light:text-charcoal-700 max-w-sm leading-relaxed">
              {COMPANY_INFO.subheadline}
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={COMPANY_INFO.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-2.5 rounded-full bg-charcoal-900 dark:bg-charcoal-900 light:bg-white border border-graphite/40 text-slate-muted hover:text-white dark:hover:text-white light:hover:text-black transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={COMPANY_INFO.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2.5 rounded-full bg-charcoal-900 dark:bg-charcoal-900 light:bg-white border border-graphite/40 text-slate-muted hover:text-white dark:hover:text-white light:hover:text-black transition-colors"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={COMPANY_INFO.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter / X"
                className="p-2.5 rounded-full bg-charcoal-900 dark:bg-charcoal-900 light:bg-white border border-graphite/40 text-slate-muted hover:text-white dark:hover:text-white light:hover:text-black transition-colors"
              >
                <TwitterXIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Services Links */}
          <div className="flex flex-col gap-3">
            <p className="font-mono text-xs uppercase tracking-wider text-slate-muted dark:text-slate-muted light:text-charcoal-500 font-semibold">
              Capabilities
            </p>
            <ul className="flex flex-col gap-2 text-sm text-slate-light dark:text-slate-light light:text-charcoal-700">
              <li>
                <Link href="/services/web-development" className="hover:text-white dark:hover:text-white light:hover:text-black transition-colors">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/services/ai-agents" className="hover:text-white dark:hover:text-white light:hover:text-black transition-colors">
                  AI & AI Agents
                </Link>
              </li>
              <li>
                <Link href="/services/cloud-engineering" className="hover:text-white dark:hover:text-white light:hover:text-black transition-colors">
                  Cloud Engineering
                </Link>
              </li>
              <li>
                <Link href="/services/devops-devsecops" className="hover:text-white dark:hover:text-white light:hover:text-black transition-colors">
                  DevSecOps & CI/CD
                </Link>
              </li>
              <li>
                <Link href="/services/custom-desktop-software" className="hover:text-white dark:hover:text-white light:hover:text-black transition-colors">
                  Desktop & POS Systems
                </Link>
              </li>
              <li>
                <Link href="/services" className="inline-flex items-center gap-1 text-xs text-slate-muted pt-1 hover:text-white dark:hover:text-white light:hover:text-black">
                  View All 12 Services <ArrowUpRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Software Products & Academy */}
          <div className="flex flex-col gap-3">
            <p className="font-mono text-xs uppercase tracking-wider text-slate-muted dark:text-slate-muted light:text-charcoal-500 font-semibold">
              Products & Academy
            </p>
            <ul className="flex flex-col gap-2 text-sm text-slate-light dark:text-slate-light light:text-charcoal-700">
              <li>
                <Link href="/products/point-of-sale" className="hover:text-white dark:hover:text-white light:hover:text-black transition-colors">
                  Arevex POS
                </Link>
              </li>
              <li>
                <Link href="/products/inventory-mis" className="hover:text-white dark:hover:text-white light:hover:text-black transition-colors">
                  Inventory & MIS
                </Link>
              </li>
              <li>
                <Link href="/products/school-management" className="hover:text-white dark:hover:text-white light:hover:text-black transition-colors">
                  School Management
                </Link>
              </li>
              <li>
                <Link href="/academy" className="hover:text-white dark:hover:text-white light:hover:text-black transition-colors">
                  Technology Academy
                </Link>
              </li>
              <li>
                <Link href="/work" className="hover:text-white dark:hover:text-white light:hover:text-black transition-colors">
                  Selected Work
                </Link>
              </li>
              <li>
                <Link href="/insights" className="hover:text-white dark:hover:text-white light:hover:text-black transition-colors">
                  Technical Insights
                </Link>
              </li>
            </ul>
          </div>

          {/* Studio & Contact */}
          <div className="flex flex-col gap-3">
            <p className="font-mono text-xs uppercase tracking-wider text-slate-muted dark:text-slate-muted light:text-charcoal-500 font-semibold">
              Studio & Inquiries
            </p>
            <div className="flex flex-col gap-2.5 text-sm text-slate-light dark:text-slate-light light:text-charcoal-700">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-slate-muted shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.locations.primary} & International Remote Delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-slate-muted shrink-0" />
                <a href={`mailto:${COMPANY_INFO.contact.email}`} className="hover:underline">
                  {COMPANY_INFO.contact.email}
                </a>
              </div>
              <div className="pt-2">
                <p className="text-xs text-slate-muted font-mono uppercase mb-1">Founders</p>
                <p className="text-xs text-slate-300 dark:text-slate-300 light:text-charcoal-800">
                  {COMPANY_INFO.founders.map((f) => f.name).join(' • ')}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-muted">
          <div>
            © {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-white dark:hover:text-white light:hover:text-black transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white dark:hover:text-white light:hover:text-black transition-colors">
              Terms of Service
            </Link>
            <Link href="/contact" className="hover:text-white dark:hover:text-white light:hover:text-black transition-colors">
              Security & Compliance
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
