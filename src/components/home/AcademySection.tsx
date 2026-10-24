'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, Clock, Tag } from 'lucide-react';
import { SectionHeading } from '@/components/common/SectionHeading';
import { MagneticButton } from '@/components/common/MagneticButton';
import { EnrollmentModal } from '@/components/forms/EnrollmentModal';
import { COURSES_DATA } from '@/data/academy';
import { BRAND_ASSETS } from '@/lib/brand';
import { CourseItem } from '@/types';

export function AcademySection() {
  const [selectedCourseForEnrollment, setSelectedCourseForEnrollment] = useState<CourseItem | null>(null);

  const displayedCourses = COURSES_DATA.slice(0, 6);

  return (
    <section id="academy" className="relative py-24 sm:py-32 bg-[#F7F7F5] dark:bg-charcoal-950 text-charcoal-900 dark:text-warmWhite overflow-hidden border-t border-gray-200 dark:border-graphite/40 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <SectionHeading
            eyebrow="09 / TECHNOLOGY ACADEMY"
            title="Practical Engineering Training."
            description="Accessible, industry-focused short courses engineered to bridge academic theory and real-world production software. Fast-paced 1-month cohorts."
            className="mb-0"
          />
          <Link
            href="/academy"
            className="inline-flex items-center gap-2 text-sm font-mono text-gray-600 dark:text-slate-muted hover:text-black dark:hover:text-white transition-colors duration-200 shrink-0 pb-2 font-bold"
          >
            <span>View All 9 Technical Courses</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Academy Atmosphere Banner */}
        <div className="relative rounded-3xl bg-white dark:bg-charcoal-900 border border-gray-200 dark:border-graphite/50 overflow-hidden mb-12 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 sm:p-12">
            <div className="lg:col-span-7 flex flex-col gap-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/30 font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span>Affordable Technology Education: PKR 1,000 – 2,000 / Month</span>
              </div>

              <h3 className="text-3xl sm:text-4xl font-black text-gray-950 dark:text-white tracking-tight">
                Empowering the Next Generation of Engineers.
              </h3>

              <p className="text-sm sm:text-base text-gray-700 dark:text-slate-300 leading-relaxed max-w-xl">
                We believe elite technology training should be accessible to ambitious students and developers across Pakistan. Our curriculum avoids abstract lectures, prioritizing live code repositories, cloud deployments, and direct industry mentorship.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <MagneticButton href="/academy" variant="primary" size="md">
                  <span>Explore Curriculum</span>
                  <ArrowUpRight className="w-4 h-4 ml-1" />
                </MagneticButton>
                <span className="text-xs font-mono text-gray-500 dark:text-slate-muted">
                  * Scheduling subject to enrollment cohort confirmation
                </span>
              </div>
            </div>

            <div className="lg:col-span-5 relative h-64 sm:h-80 rounded-2xl overflow-hidden border border-gray-200 dark:border-graphite/40 shadow-md">
              <Image
                src={BRAND_ASSETS.generated.academyHero}
                alt="Arevex Academy Tech Lab"
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>
          </div>
        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedCourses.map((course) => (
            <div
              key={course.id}
              className="p-6 rounded-2xl bg-white dark:bg-charcoal-900/60 border border-gray-200 dark:border-graphite/40 hover:border-slate-500 dark:hover:border-slate-muted/50 transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-mono bg-gray-100 dark:bg-charcoal-800 text-gray-700 dark:text-slate-300 border border-gray-200 dark:border-graphite/40 font-semibold">
                    {course.category}
                  </span>
                  <span className="font-mono text-xs font-bold text-emerald-600 dark:text-emerald-400">
                    {course.feePKR}
                  </span>
                </div>

                <h4 className="text-lg font-bold text-gray-950 dark:text-white mb-2 leading-snug">
                  {course.title}
                </h4>

                <p className="text-xs text-gray-600 dark:text-slate-400 leading-relaxed mb-6">
                  {course.shortDescription}
                </p>

                <div className="flex items-center gap-4 text-xs font-mono text-gray-500 dark:text-slate-muted pt-2 border-t border-gray-100 dark:border-graphite/30 mb-6">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Tag className="w-3.5 h-3.5" />
                    <span>{course.enrollmentStatus}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-graphite/40">
                <button
                  onClick={() => setSelectedCourseForEnrollment(course)}
                  className="text-xs font-mono text-gray-900 dark:text-warmWhite font-bold hover:underline focus:outline-none"
                >
                  Enroll Now
                </button>
                <Link
                  href={`/academy/${course.slug}`}
                  className="inline-flex items-center gap-1 text-xs font-mono text-gray-600 dark:text-slate-muted hover:text-black dark:hover:text-white font-semibold"
                >
                  <span>Syllabus</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Enrollment Modal */}
      <EnrollmentModal
        course={selectedCourseForEnrollment}
        isOpen={!!selectedCourseForEnrollment}
        onClose={() => setSelectedCourseForEnrollment(null)}
      />
    </section>
  );
}
