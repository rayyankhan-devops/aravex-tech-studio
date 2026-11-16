import React from 'react';
import Link from 'next/link';
import { Building2, Phone, Mail, MapPin, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '@/lib/brand';

export function OfficeAddressCard() {
  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-charcoal-900 border border-gray-200 dark:border-graphite/60 shadow-lg relative overflow-hidden transition-colors">
      <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-100 dark:border-graphite/40">
        <Building2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
        <h3 className="text-base sm:text-lg font-bold text-gray-950 dark:text-white">
          Registered Local Office &amp; Legal Notices
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm">
        {/* Physical Office Address */}
        <div className="space-y-2">
          <div className="flex items-center gap-1.5 text-xs uppercase font-mono font-bold text-emerald-600 dark:text-emerald-400">
            <MapPin className="w-3.5 h-3.5 shrink-0" />
            <span>Physical Address (Pakistan)</span>
          </div>
          <p className="font-bold text-base text-gray-950 dark:text-white leading-snug">
            Peshawar City, Khyber Pakhtunkhwa
          </p>
          <div className="text-gray-600 dark:text-slate-300 space-y-0.5 text-xs leading-relaxed">
            <p><strong>District:</strong> Peshawar</p>
            <p><strong>Tehsil:</strong> Peshawar City</p>
            <p><strong>State / Province:</strong> Khyber Pakhtunkhwa</p>
            <p><strong>Postal Code:</strong> 25210</p>
            <p><strong>Country:</strong> Pakistan</p>
          </div>
        </div>

        {/* Official Contact Details */}
        <div className="space-y-3">
          <div className="flex items-center gap-1.5 text-xs uppercase font-mono font-bold text-emerald-600 dark:text-emerald-400">
            <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
            <span>Verified Communication Channels</span>
          </div>
          
          <div className="space-y-2 text-xs sm:text-sm">
            <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-gray-50 dark:bg-charcoal-850 border border-gray-200 dark:border-graphite/40">
              <Phone className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <div>
                <span className="text-[10px] uppercase font-bold text-gray-500 dark:text-slate-400 block font-mono">Official Phone &amp; WhatsApp</span>
                <a href="tel:+923249906944" className="font-bold text-gray-950 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                  +923249906944
                </a>
              </div>
            </div>

            <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-gray-50 dark:bg-charcoal-850 border border-gray-200 dark:border-graphite/40">
              <Mail className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <div>
                <span className="text-[10px] uppercase font-bold text-gray-500 dark:text-slate-400 block font-mono">Official Corporate Email</span>
                <a href={`mailto:${COMPANY_INFO.contact.email}`} className="font-bold text-gray-950 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                  {COMPANY_INFO.contact.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-gray-100 dark:border-graphite/40 flex flex-wrap items-center justify-between gap-3 text-xs text-gray-500 dark:text-slate-400 font-mono">
        <span>© {new Date().getFullYear()} {COMPANY_INFO.name}. All legal rights reserved.</span>
        <span>Operating Desk: Mon &ndash; Sat, 09:00 &ndash; 20:00 PKT</span>
      </div>
    </div>
  );
}

