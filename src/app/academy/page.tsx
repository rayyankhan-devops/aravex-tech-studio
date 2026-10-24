'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Clock, Tag, ArrowUpRight, GraduationCap, CheckCircle2 } from 'lucide-react';
import { SectionHeading } from '@/components/common/SectionHeading';
import { Card } from '@/components/common/Card';
import { MagneticButton } from '@/components/common/MagneticButton';
import { EnrollmentModal } from '@/components/forms/EnrollmentModal';
import { COURSES_DATA } from '@/data/academy';
import { CourseItem } from '@/types';
import { FinalCTA } from '@/components/home/FinalCTA';

export default function AcademyPage() {
  const [selectedCourse, setSelectedCourse] = useState<CourseItem | null>(null);

  return (
    <main className="min-h-screen bg-[#F7F7F5] dark:bg-charcoal-950 text-charcoal-900 dark:text-warmWhite transition-colors duration-300">
      {/* Header */}
      <section className="pt-24 pb-16 border-b border-gray-200 dark:border-graphite/40 bg-white dark:bg-charcoal-900/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="AREVEX TECHNOLOGY ACADEMY"
            title="Practical, Industry-Grade Engineering Courses."
            description="High-velocity 1-month technical cohorts designed for developers, students, and engineers. Rigorous code repositories, real production deployments, and direct mentorship."
          />

          <div className="p-4 rounded-2xl bg-gray-50 dark:bg-charcoal-850/80 border border-gray-200 dark:border-graphite/40 flex flex-wrap items-center justify-between gap-4 mt-6 shadow-sm">
            <div className="flex items-center gap-3">
              <GraduationCap className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <span className="text-xs sm:text-sm font-mono text-gray-800 dark:text-slate-300">
                Accessible Cohort Fees: <strong className="text-emerald-600 dark:text-emerald-400">PKR 1,000 – 2,000 per month</strong>
              </span>
            </div>
            <span className="text-xs font-mono text-gray-500 dark:text-slate-muted">
              * Cohort batch timing confirmed upon minimum registration threshold
            </span>
          </div>
        </div>
      </section>

      {/* Courses Catalog Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {COURSES_DATA.map((course) => (
              <Card
                key={course.id}
                className="flex flex-col justify-between bg-white dark:bg-charcoal-850/80 border-gray-200 dark:border-graphite/40 hover:border-slate-500 dark:hover:border-slate-muted/60 shadow-sm hover:shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full text-xs font-mono bg-gray-100 dark:bg-charcoal-800 text-gray-800 dark:text-slate-300 border border-gray-200 dark:border-graphite/40 font-semibold">
                      {course.category}
                    </span>
                    <span className="font-mono text-sm font-bold text-emerald-600 dark:text-emerald-400">
                      {course.feePKR}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-950 dark:text-white mb-2 leading-snug">
                    {course.title}
                  </h3>

                  <p className="text-xs text-gray-600 dark:text-slate-400 leading-relaxed mb-6">
                    {course.shortDescription}
                  </p>

                  <div className="flex flex-col gap-2 pt-2 border-t border-gray-100 dark:border-graphite/30 mb-6">
                    <div className="flex items-center gap-2 text-xs font-mono text-gray-500 dark:text-slate-muted">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-mono text-gray-500 dark:text-slate-muted">
                      <Tag className="w-3.5 h-3.5" />
                      <span>{course.enrollmentStatus}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-graphite/40">
                  <button
                    onClick={() => setSelectedCourse(course)}
                    className="text-xs font-mono text-gray-900 dark:text-warmWhite font-bold hover:underline focus:outline-none cursor-pointer"
                  >
                    Enroll Now
                  </button>
                  <Link
                    href={`/academy/${course.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-mono text-gray-600 dark:text-slate-muted hover:text-black dark:hover:text-white font-semibold"
                  >
                    <span>Curriculum</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enrollment Modal */}
      <EnrollmentModal
        course={selectedCourse}
        isOpen={!!selectedCourse}
        onClose={() => setSelectedCourse(null)}
      />

      <FinalCTA />
    </main>
  );
}
