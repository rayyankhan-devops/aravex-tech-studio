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
import { BRAND_ASSETS } from '@/lib/brand';
import { FinalCTA } from '@/components/home/FinalCTA';

export default function AcademyPage() {
  const [selectedCourse, setSelectedCourse] = useState<CourseItem | null>(null);

  const getCourseImage = (slug: string) => {
    switch (slug) {
      case 'artificial-intelligence':
        return BRAND_ASSETS.generated.courseAi;
      case 'web-development':
        return BRAND_ASSETS.generated.courseWeb;
      case 'mobile-development':
        return BRAND_ASSETS.generated.courseMobile;
      case 'devops-engineering':
        return BRAND_ASSETS.generated.courseDevops;
      case 'cloud-engineering':
        return BRAND_ASSETS.generated.courseCloud;
      case 'linux-system-administration':
        return BRAND_ASSETS.generated.courseLinux;
      case 'computer-networking':
        return BRAND_ASSETS.generated.courseNetworking;
      case 'git-and-github':
        return BRAND_ASSETS.generated.courseGit;
      case 'project-management':
        return BRAND_ASSETS.generated.courseManagement;
      default:
        return BRAND_ASSETS.generated.academyHero;
    }
  };

  return (
    <main className="min-h-screen bg-[#F7F7F5] dark:bg-charcoal-950 text-charcoal-900 dark:text-warmWhite transition-colors duration-300">
      {/* Header */}
      <section className="pt-24 pb-16 border-b border-gray-200 dark:border-graphite/40 bg-white dark:bg-charcoal-900/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="AREVEX TECHNOLOGY ACADEMY"
            title="Practical, Industry-Grade Engineering Courses."
            description="Intensive 1-month technical cohorts for developers, students, and engineers. Hands-on projects, real deployments, and direct mentorship from industry practitioners."
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
                className="group flex flex-col justify-between bg-white dark:bg-charcoal-850/80 border-gray-200 dark:border-graphite/40 hover:border-slate-500 dark:hover:border-slate-muted/60 shadow-sm hover:shadow-xl overflow-hidden"
              >
                <div>
                  {/* Course Curriculum & Syllabus Architectural Visual */}
                  <div className="relative h-44 w-full rounded-xl overflow-hidden mb-5 border border-gray-200 dark:border-graphite/40 bg-charcoal-900">
                    <Image
                      src={getCourseImage(course.slug)}
                      alt={course.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-black/60 backdrop-blur-md text-white border border-white/20 font-bold uppercase">
                      {course.category}
                    </div>
                    <div className="absolute bottom-2.5 right-3 font-mono text-xs text-emerald-400 bg-black/60 backdrop-blur-sm px-2.5 py-0.5 rounded border border-emerald-500/30 font-bold">
                      {course.feePKR}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-950 dark:text-white mb-2 leading-snug group-hover:text-black dark:group-hover:text-slate-200 transition-colors">
                    {course.title}
                  </h3>

                  <p className="text-sm text-gray-700 dark:text-slate-200 leading-relaxed mb-5 font-normal">
                    {course.shortDescription}
                  </p>

                  <div className="flex flex-col gap-2 pt-2 border-t border-gray-100 dark:border-graphite/30 mb-6">
                    <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-slate-300 font-medium">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-slate-300 font-medium">
                      <Tag className="w-3.5 h-3.5" />
                      <span>{course.enrollmentStatus}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-graphite/40">
                  <button
                    onClick={() => setSelectedCourse(course)}
                    className="text-sm font-semibold text-gray-950 dark:text-white hover:underline focus:outline-none cursor-pointer"
                  >
                    Enroll Now
                  </button>
                  <Link
                    href={`/academy/${course.slug}`}
                    className="inline-flex items-center gap-1 text-sm font-semibold text-gray-700 dark:text-slate-200 hover:text-black dark:hover:text-white"
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
