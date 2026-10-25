'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, Mail, MapPin } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';
import { BRAND_ASSETS, COMPANY_INFO } from '@/lib/brand';
import {
  GithubIcon,
  LinkedinIcon,
  TwitterXIcon,
  FacebookIcon,
  InstagramIcon,
  TikTokIcon,
} from '@/components/common/SocialIcons';
import { cn } from '@/lib/utils';

export function Footer() {
  const { theme, mounted } = useTheme();
  const isLight = mounted && theme === 'light';

  return (
    <footer className="relative bg-[#F0F0EB] dark:bg-charcoal-950 text-charcoal-900 dark:text-warmWhite border-t border-gray-200 dark:border-graphite/40 overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-gray-200 dark:border-graphite/40">
          {/* Brand Column */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            <Link href="/" className="inline-block relative h-11 sm:h-12 w-52 sm:w-60">
              <Image
                src={BRAND_ASSETS.horizontal.forDarkTheme}
                alt="AREVEX TECH STUDIO"
                fill
                className={cn(
                  'object-contain object-left transition-opacity duration-300',
                  isLight ? 'opacity-0 pointer-events-none' : 'opacity-100'
                )}
              />
              <Image
                src={BRAND_ASSETS.horizontal.forLightTheme}
                alt="AREVEX TECH STUDIO"
                fill
                className={cn(
                  'object-contain object-left transition-opacity duration-300',
                  isLight ? 'opacity-100' : 'opacity-0 pointer-events-none'
                )}
              />
            </Link>
            <p className="text-sm sm:text-base text-gray-700 dark:text-slate-200 max-w-sm leading-relaxed font-normal">
              {COMPANY_INFO.subheadline}
            </p>
            <div className="flex flex-wrap items-center gap-2.5 pt-2">
              <a
                href={COMPANY_INFO.socials.x}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (formerly Twitter)"
                className="p-2.5 rounded-full bg-white dark:bg-charcoal-900 border border-gray-200 dark:border-graphite/40 text-gray-600 dark:text-slate-muted hover:text-black dark:hover:text-white transition-colors shadow-sm hover:scale-105"
              >
                <TwitterXIcon className="w-4 h-4" />
              </a>
              <a
                href={COMPANY_INFO.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="p-2.5 rounded-full bg-white dark:bg-charcoal-900 border border-gray-200 dark:border-graphite/40 text-gray-600 dark:text-slate-muted hover:text-black dark:hover:text-white transition-colors shadow-sm hover:scale-105"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href={COMPANY_INFO.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="p-2.5 rounded-full bg-white dark:bg-charcoal-900 border border-gray-200 dark:border-graphite/40 text-gray-600 dark:text-slate-muted hover:text-black dark:hover:text-white transition-colors shadow-sm hover:scale-105"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={COMPANY_INFO.socials.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="p-2.5 rounded-full bg-white dark:bg-charcoal-900 border border-gray-200 dark:border-graphite/40 text-gray-600 dark:text-slate-muted hover:text-black dark:hover:text-white transition-colors shadow-sm hover:scale-105"
              >
                <TikTokIcon className="w-4 h-4" />
              </a>
              <a
                href={COMPANY_INFO.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-2.5 rounded-full bg-white dark:bg-charcoal-900 border border-gray-200 dark:border-graphite/40 text-gray-600 dark:text-slate-muted hover:text-black dark:hover:text-white transition-colors shadow-sm hover:scale-105"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={COMPANY_INFO.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2.5 rounded-full bg-white dark:bg-charcoal-900 border border-gray-200 dark:border-graphite/40 text-gray-600 dark:text-slate-muted hover:text-black dark:hover:text-white transition-colors shadow-sm hover:scale-105"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Capabilities */}
          <div className="flex flex-col gap-3">
            <p className="text-xs uppercase tracking-wider text-gray-900 dark:text-white font-bold">
              Capabilities
            </p>
            <ul className="flex flex-col gap-2 text-sm text-gray-700 dark:text-slate-200">
              <li>
                <Link href="/services/web-development" className="hover:text-black dark:hover:text-white transition-colors">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/services/ai-agents" className="hover:text-black dark:hover:text-white transition-colors">
                  AI & AI Agents
                </Link>
              </li>
              <li>
                <Link href="/services/cloud-engineering" className="hover:text-black dark:hover:text-white transition-colors">
                  Cloud Engineering
                </Link>
              </li>
              <li>
                <Link href="/services/devops-devsecops" className="hover:text-black dark:hover:text-white transition-colors">
                  DevSecOps & CI/CD
                </Link>
              </li>
              <li>
                <Link href="/services/custom-desktop-software" className="hover:text-black dark:hover:text-white transition-colors">
                  Desktop & POS Systems
                </Link>
              </li>
              <li>
                <Link href="/services" className="inline-flex items-center gap-1 text-xs text-gray-600 dark:text-slate-300 pt-1 hover:text-black dark:hover:text-white font-bold">
                  View All 12 Services <ArrowUpRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Products & Academy */}
          <div className="flex flex-col gap-3">
            <p className="text-xs uppercase tracking-wider text-gray-900 dark:text-white font-bold">
              Products & Academy
            </p>
            <ul className="flex flex-col gap-2 text-sm text-gray-700 dark:text-slate-200">
              <li>
                <Link href="/products/point-of-sale" className="hover:text-black dark:hover:text-white transition-colors">
                  Arevex POS
                </Link>
              </li>
              <li>
                <Link href="/products/inventory-mis" className="hover:text-black dark:hover:text-white transition-colors">
                  Inventory & MIS
                </Link>
              </li>
              <li>
                <Link href="/products/school-management" className="hover:text-black dark:hover:text-white transition-colors">
                  School Management
                </Link>
              </li>
              <li>
                <Link href="/academy" className="hover:text-black dark:hover:text-white transition-colors">
                  Technology Academy
                </Link>
              </li>
              <li>
                <Link href="/work" className="hover:text-black dark:hover:text-white transition-colors">
                  Selected Work
                </Link>
              </li>
              <li>
                <Link href="/insights" className="hover:text-black dark:hover:text-white transition-colors">
                  Technical Insights
                </Link>
              </li>
            </ul>
          </div>

          {/* Studio & Contact */}
          <div className="flex flex-col gap-3">
            <p className="text-xs uppercase tracking-wider text-gray-900 dark:text-white font-bold">
              Studio & Inquiries
            </p>
            <div className="flex flex-col gap-2.5 text-sm text-gray-700 dark:text-slate-200">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                <span>100% Remote • Global Delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <a href={`mailto:${COMPANY_INFO.contact.email}`} className="hover:underline font-semibold text-gray-950 dark:text-white">
                  {COMPANY_INFO.contact.email}
                </a>
              </div>
              <div className="pt-2">
                <p className="text-xs text-gray-600 dark:text-slate-400 font-mono uppercase mb-1 font-bold">Founders</p>
                <p className="text-xs sm:text-sm text-gray-900 dark:text-slate-200 font-semibold">
                  {COMPANY_INFO.founders.map((f) => f.name).join(' • ')}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-gray-600 dark:text-slate-300">
          <div>
            © {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-black dark:hover:text-white transition-colors font-medium">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-black dark:hover:text-white transition-colors font-medium">
              Terms of Service
            </Link>

          </div>
        </div>
      </div>
    </footer>
  );
}
