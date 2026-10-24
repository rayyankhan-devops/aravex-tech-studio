import React from 'react';
import type { Metadata } from 'next';
import { SectionHeading } from '@/components/common/SectionHeading';
import { COMPANY_INFO } from '@/lib/brand';

export const metadata: Metadata = {
  title: 'Terms of Service — AREVEX TECH STUDIO',
  description: 'Terms of Service and commercial client engagement frameworks for Arevex Tech Studio.',
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-charcoal-950 text-warmWhite">
      <section className="pt-24 pb-16 border-b border-graphite/40 bg-charcoal-900/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="COMMERCIAL TERMS"
            title="Terms of Service"
            description="Last Updated: October 2026. Standard terms governing software engineering, software product licensing, and academy training."
          />
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-8 text-slate-300 text-sm sm:text-base leading-relaxed">
          <div>
            <h2 className="text-xl font-bold text-white mb-3">1. Agreement to Terms</h2>
            <p>
              By accessing the website, engaging engineering services, requesting software demos, or enrolling in academy courses operated by {COMPANY_INFO.name}, you agree to be bound by these Terms of Service.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white mb-3">2. Engineering Engagements & Statement of Work</h2>
            <p>
              All custom software development, cloud infrastructure, AI agent development, and DevOps contracts are executed under formal Statements of Work (SOW) defining sprint milestones, deliverables, payment schedules, and acceptance criteria.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white mb-3">3. Intellectual Property Rights</h2>
            <p>
              Upon receipt of full contract payment, all custom code produced specifically for the client becomes the property of the client, excluding Arevex core foundational libraries and open-source packages which remain under their respective licenses.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white mb-3">4. Commercial Software Products</h2>
            <p>
              Arevex software products (including Arevex POS, MIS, School MIS, and TimeTrack) are provided under commercial software licenses or SaaS subscriptions. Reverse engineering, unauthorized redistribution, or cracking of licensing keys is strictly prohibited.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white mb-3">5. Technology Academy Policies</h2>
            <p>
              Academy course fees (PKR 1,000–2,000 per month) cover 4-week cohort instruction, assignment reviews, and digital course completion credentials. Course batches and schedules are confirmed upon meeting minimum cohort registration requirements.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white mb-3">6. Governing Law</h2>
            <p>
              These terms shall be governed by and construed in accordance with the applicable laws of Pakistan and international arbitration standards where cross-border agreements apply.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
