import React from 'react';
import type { Metadata } from 'next';
import { SectionHeading } from '@/components/common/SectionHeading';
import { COMPANY_INFO } from '@/lib/brand';

export const metadata: Metadata = {
  title: 'Privacy Policy — AREVEX TECH STUDIO',
  description: 'Privacy Policy, data processing disclosures, and security standards of Arevex Tech Studio.',
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-charcoal-950 text-warmWhite">
      <section className="pt-24 pb-16 border-b border-graphite/40 bg-charcoal-900/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="LEGAL & COMPLIANCE"
            title="Privacy Policy"
            description="Last Updated: October 2026. How AREVEX TECH STUDIO collects, manages, and protects technical and personal data."
          />
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-8 text-slate-300 text-sm sm:text-base leading-relaxed">
          <div>
            <h2 className="text-xl font-bold text-white mb-3">1. Scope of Policy</h2>
            <p>
              This Privacy Policy applies to the services, products, educational platforms, and digital properties operated by {COMPANY_INFO.name} (&quot;Arevex&quot;, &quot;we&quot;, &quot;us&quot;). We respect your privacy and adhere to international standards of data minimization and least-privilege access.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white mb-3">2. Information Collection</h2>
            <p>
              When you submit a project inquiry, request a software product demonstration, or apply for enrollment in the Arevex Technology Academy, we collect your name, business email address, company name, telephone/WhatsApp contact details, and project specifications. We do not sell, rent, or trade your contact or business information to third-party advertisers.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white mb-3">3. Client Project Data Confidentiality</h2>
            <p>
              All proprietary codebases, database schemas, API credentials, and internal operational data shared during client software development engagements are governed by strict bilateral Non-Disclosure Agreements (NDAs). Client codebases remain the exclusive intellectual property of the commissioning client upon invoice settlement.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white mb-3">4. Cookies and Analytical Telemetry</h2>
            <p>
              Our website uses essential session cookies for theme preferences (dark/light mode) and privacy-focused telemetry to monitor Core Web Vitals and server uptime. We do not employ intrusive cross-site tracking pixels.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white mb-3">5. Inquiries & Data Rights</h2>
            <p>
              If you wish to access, rectify, or request the deletion of your personal contact records, please contact our data compliance group at <a href={`mailto:${COMPANY_INFO.contact.email}`} className="text-white underline">{COMPANY_INFO.contact.email}</a>.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
