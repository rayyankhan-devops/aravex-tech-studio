'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowUpRight,
  Clock,
  Tag,
  BrainCircuit,
  Globe,
  Smartphone,
  Terminal,
  Cloud,
  HardDrive,
  Network,
  GitBranch,
  Kanban,
  GraduationCap,
} from 'lucide-react';
import { SectionHeading } from '@/components/common/SectionHeading';
import { MagneticButton } from '@/components/common/MagneticButton';
import { EnrollmentModal } from '@/components/forms/EnrollmentModal';
import { COURSES_DATA } from '@/data/training';
import { BRAND_ASSETS } from '@/lib/brand';
import { CourseItem } from '@/types';

const COURSE_ICONS: Record<string, React.ElementType> = {
  BrainCircuit,
  Globe,
  Smartphone,
  Terminal,
  Cloud,
  HardDrive,
  Network,
  GitBranch,
  Kanban,
  GraduationCap,
};

export function TrainingSection() {
  const [selectedCourseForEnrollment, setSelectedCourseForEnrollment] = useState<CourseItem | null>(null);

  const displayedCourses = COURSES_DATA.slice(0, 6);

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
        return BRAND_ASSETS.generated.trainingHero;
    }
  };

  return (
    <section id="training" className="relative py-10 sm:py-14 bg-[#F7F7F5] dark:bg-charcoal-950 text-charcoal-900 dark:text-warmWhite overflow-hidden border-t border-gray-200 dark:border-graphite/40 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 sm:mb-8 gap-4 sm:gap-6">
          <SectionHeading
            eyebrow="TECHNOLOGY TRAINING"
            title="Practical Engineering Training."
            description="Hands-on 1-month cohorts bridging academic theory with real production engineering."
            className="mb-0"
          />
          <Link
            href="/training"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-sans text-gray-600 dark:text-slate-muted hover:text-black dark:hover:text-white transition-colors duration-200 shrink-0 pb-1 font-bold"
          >
            <span>View All 9 Technical Courses</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Training Atmosphere Banner */}
        <div className="relative rounded-3xl bg-white dark:bg-charcoal-900 border border-gray-200 dark:border-graphite/50 overflow-hidden mb-6 sm:mb-8 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center p-6 sm:p-8">
            <div className="lg:col-span-7 flex flex-col gap-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs sm:text-sm font-semibold bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/30">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span>Affordable Technology Education: PKR 1,000 – 2,000 / Month</span>
              </div>

              <h3 className="text-3xl sm:text-4xl font-black text-gray-950 dark:text-white tracking-tight">
                Empowering the Next Generation of Engineers.
              </h3>

              <p className="text-sm sm:text-base text-gray-700 dark:text-slate-200 leading-relaxed max-w-xl font-normal">
                We believe elite technology training should be accessible to ambitious students and developers across Pakistan. Our curriculum avoids abstract lectures, prioritizing live code repositories, cloud deployments, and direct industry mentorship.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <MagneticButton href="/training" variant="primary" size="md">
                  <span>Explore Curriculum</span>
                  <ArrowUpRight className="w-4 h-4 ml-1" />
                </MagneticButton>
                <span className="text-xs sm:text-sm text-gray-600 dark:text-slate-300">
                  * Scheduling subject to enrollment cohort confirmation
                </span>
              </div>
            </div>

            <div className="lg:col-span-5 relative h-64 sm:h-80 rounded-2xl overflow-hidden border border-gray-200 dark:border-graphite/40 shadow-md">
              <Image
                src={BRAND_ASSETS.generated.trainingHero}
                alt="Aravex Training Tech Lab"
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>
          </div>
        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedCourses.map((course) => {
            const CourseIcon = (course.iconName && COURSE_ICONS[course.iconName]) || GraduationCap;

            return (
              <div
                key={course.id}
                className="group flex flex-col justify-between rounded-2xl bg-white dark:bg-charcoal-900 border border-gray-200/90 dark:border-graphite/50 p-5 shadow-sm hover:shadow-xl hover:shadow-emerald-950/5 dark:hover:shadow-[0_8px_30px_-10px_rgba(16,185,129,0.12)] hover:border-emerald-500/50 dark:hover:border-emerald-500/40 transition-all duration-300 overflow-hidden"
              >
                <div>
                  {/* 16:9 Thumbnail Header */}
                  <div className="relative h-40 w-full rounded-xl overflow-hidden mb-3.5 border border-gray-200/80 dark:border-graphite/40 bg-charcoal-950">
                    <Image
                      src={course.image || getCourseImage(course.slug)}
                      alt={course.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

                    {/* Category Tag */}
                    <div className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-md text-[10px] font-sans bg-black/60 backdrop-blur-md text-white border border-white/20 font-bold uppercase tracking-wider">
                      {course.category}
                    </div>

                    {/* Tech Icon */}
                    <div className="absolute top-2.5 right-2.5">
                      <span className="p-1.5 rounded-lg bg-black/65 backdrop-blur-md text-emerald-400 border border-emerald-500/30 shadow-sm flex items-center justify-center">
                        <CourseIcon className="w-3.5 h-3.5" />
                      </span>
                    </div>

                    {/* Pricing Tag */}
                    <div className="absolute bottom-2.5 right-2.5 px-2.5 py-1 rounded-md text-xs font-sans font-bold text-emerald-300 bg-black/75 backdrop-blur-md border border-emerald-500/40 shadow-sm">
                      {course.feePKR}
                    </div>

                    {/* Duration Tag */}
                    <div className="absolute bottom-2.5 left-2.5 flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-sans font-medium text-slate-200 bg-black/60 backdrop-blur-md border border-white/10">
                      <Clock className="w-3 h-3 text-emerald-400" />
                      <span>4 Weeks</span>
                    </div>
                  </div>

                  {/* Course Title */}
                  <h4 className="text-base sm:text-lg font-bold text-gray-950 dark:text-white mb-1.5 leading-snug group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors line-clamp-1">
                    {course.title}
                  </h4>

                  {/* Short 2-Line Description */}
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-3 line-clamp-2 font-normal">
                    {course.shortDescription}
                  </p>

                  {/* 2 Quick Highlights */}
                  <div className="p-2.5 rounded-xl bg-gray-50/80 dark:bg-charcoal-950/70 border border-gray-200/70 dark:border-graphite/30 space-y-1.5 mb-3.5 text-xs text-gray-700 dark:text-slate-300">
                    {course.learningOutcomes.slice(0, 2).map((item, i) => (
                      <div key={i} className="flex items-start gap-1.5">
                        <span className="text-emerald-500 font-bold">•</span>
                        <span className="line-clamp-1">{item}</span>
                      </div>
                    ))}
                    <div className="flex items-center justify-between pt-1 border-t border-gray-200/60 dark:border-graphite/40 text-[10px] font-mono text-gray-500 dark:text-slate-400">
                      <span>Batch: <strong className="text-emerald-600 dark:text-emerald-400">{course.enrollmentStatus}</strong></span>
                      <span>Certificate</span>
                    </div>
                  </div>
                </div>

                {/* Card Action Row */}
                <div className="pt-3 border-t border-gray-100 dark:border-graphite/40 flex items-center justify-between gap-3">
                  <Link
                    href={`/training/${course.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-gray-600 dark:text-slate-400 hover:text-black dark:hover:text-white transition-colors"
                  >
                    <span>Curriculum</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </Link>

                  <button
                    onClick={() => setSelectedCourseForEnrollment(course)}
                    className="px-4 py-2 rounded-xl text-xs sm:text-sm font-bold bg-emerald-600 hover:bg-emerald-700 text-white flex items-center gap-1.5 shadow-sm shadow-emerald-600/20 hover:scale-[1.02] transition-all cursor-pointer whitespace-nowrap"
                  >
                    <span>Enroll Now</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
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
