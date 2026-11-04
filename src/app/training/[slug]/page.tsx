'use client';

import React, { useState, use } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowUpRight, CheckCircle2, ChevronRight, Clock, Tag, BookOpen } from 'lucide-react';
import { COURSES_DATA } from '@/data/training';
import { Card } from '@/components/common/Card';
import { MagneticButton } from '@/components/common/MagneticButton';
import { EnrollmentModal } from '@/components/forms/EnrollmentModal';
import { BRAND_ASSETS } from '@/lib/brand';
import { FinalCTA } from '@/components/home/FinalCTA';

interface TrainingDetailPageProps {
  params: Promise<{ slug: string }>;
}

export default function TrainingCourseDetailPage({ params }: TrainingDetailPageProps) {
  const { slug } = use(params);
  const course = COURSES_DATA.find((c) => c.slug === slug);
  const [modalOpen, setModalOpen] = useState(false);

  if (!course) {
    notFound();
  }

  const getCourseImage = (courseSlug: string) => {
    switch (courseSlug) {
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
    <main className="min-h-screen bg-[#F7F7F5] dark:bg-charcoal-950 text-charcoal-900 dark:text-warmWhite transition-colors duration-300">
      {/* Breadcrumb Navigation */}
      <div className="pt-16 sm:pt-18 pb-2.5 sm:pb-3 border-b border-gray-200 dark:border-graphite/40 bg-white dark:bg-charcoal-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 text-xs font-sans text-gray-500 dark:text-slate-muted">
          <Link href="/" className="hover:text-black dark:hover:text-white transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link href="/training" className="hover:text-black dark:hover:text-white transition-colors">Training</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-gray-950 dark:text-white font-bold">{course.title}</span>
        </div>
      </div>

      {/* Hero Header */}
      <section className="pt-4 pb-8 sm:pt-6 sm:pb-10 border-b border-gray-200 dark:border-graphite/40 bg-white dark:bg-charcoal-900/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 mb-3 sm:mb-4">
              <span className="px-3 py-1 rounded-full text-xs font-sans bg-gray-100 dark:bg-charcoal-800 text-gray-800 dark:text-slate-300 border border-gray-200 dark:border-graphite/40 font-semibold">
                {course.category}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-sans bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/30 font-bold">
                {course.feePKR}
              </span>
              <span className="font-sans text-xs text-gray-500 dark:text-slate-muted font-bold">
                {course.duration}
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-gray-950 dark:text-white mb-3 sm:mb-4">
              {course.title}
            </h1>

            <p className="text-sm sm:text-lg text-gray-700 dark:text-slate-300 font-normal leading-relaxed mb-5 sm:mb-6">
              {course.shortDescription}
            </p>

            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <MagneticButton onClick={() => setModalOpen(true)} size="md" variant="primary">
                <span>Enroll in Upcoming Cohort</span>
                <ArrowUpRight className="w-4 h-4 ml-1" />
              </MagneticButton>
              <Link
                href="/training"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-sans text-gray-600 dark:text-slate-muted hover:text-black dark:hover:text-white transition-colors font-bold"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>All Courses</span>
              </Link>
            </div>
          </div>

          {/* Practical Syllabus & Code Lab Showcase */}
          <div className="mt-6 sm:mt-8 relative h-56 sm:h-80 md:h-[380px] lg:h-[420px] rounded-3xl overflow-hidden border border-gray-200 dark:border-graphite/50 shadow-2xl bg-charcoal-900">
            <Image
              src={course.image || getCourseImage(course.slug)}
              alt={course.title}
              fill
              priority
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-white text-xs font-sans">
              <span className="px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 font-medium">
                {course.title} • Syllabus &amp; Lab Architecture
              </span>
              <span className="px-3 py-1.5 rounded-full bg-emerald-500/90 font-bold text-white self-start sm:self-auto">
                Live Production Capstone Included
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Course Overview & Curriculum */}
      <section className="py-8 sm:py-12 border-b border-gray-200 dark:border-graphite/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Left Column: Overview, Outcomes, Curriculum */}
            <div className="lg:col-span-7 flex flex-col gap-8">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-950 dark:text-white mb-3">Course Overview</h2>
                <p className="text-sm sm:text-base text-gray-800 dark:text-slate-200 leading-relaxed font-normal">
                  {course.overview}
                </p>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-950 dark:text-white mb-3">What You Will Master</h3>
                <div className="flex flex-col gap-2.5">
                  {course.learningOutcomes.map((outcome) => (
                    <div key={outcome} className="flex items-start gap-3 text-xs sm:text-sm text-gray-800 dark:text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                      <span>{outcome}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 4-Week Curriculum Breakdown */}
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-950 dark:text-white mb-4">Week-by-Week Syllabus</h3>
                <div className="flex flex-col gap-3.5">
                  {course.curriculum.map((module) => (
                    <div
                      key={module.week}
                      className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-charcoal-900/60 border border-gray-200 dark:border-graphite/40 shadow-xs"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-sans text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                          {module.week}
                        </span>
                        <BookOpen className="w-4 h-4 text-gray-400 dark:text-slate-muted" />
                      </div>
                      <h4 className="text-base font-bold text-gray-950 dark:text-white mb-2.5">
                        {module.title}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {module.topics.map((t) => (
                          <span
                            key={t}
                            className="px-2.5 py-1 rounded text-xs font-sans bg-gray-100 dark:bg-charcoal-800 text-gray-700 dark:text-slate-300 font-medium"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Prerequisites & Cohort Details */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <Card>
                <h3 className="text-lg font-bold text-gray-950 dark:text-white mb-4 pb-3 border-b border-gray-200 dark:border-graphite/40">
                  Cohort Enrollment Details
                </h3>

                <div className="flex flex-col gap-3.5 text-xs font-sans">
                  <div>
                    <span className="text-gray-500 dark:text-slate-muted block mb-1 font-bold">Target Audience</span>
                    <p className="text-gray-700 dark:text-slate-300 font-sans text-sm">{course.targetAudience}</p>
                  </div>

                  <div className="pt-3 border-t border-gray-200 dark:border-graphite/30">
                    <span className="text-gray-500 dark:text-slate-muted block mb-1 font-bold">Prerequisites</span>
                    <p className="text-gray-700 dark:text-slate-300 font-sans text-sm">{course.prerequisites}</p>
                  </div>

                  <div className="pt-3 border-t border-gray-200 dark:border-graphite/30 flex justify-between items-center">
                    <span className="text-gray-500 dark:text-slate-muted font-bold">Course Fee</span>
                    <span className="text-base font-bold text-emerald-600 dark:text-emerald-400">{course.feePKR}</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-gray-500 dark:text-slate-muted font-bold">Batch Status</span>
                    <span className="text-gray-900 dark:text-slate-200 font-semibold">{course.enrollmentStatus}</span>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-200 dark:border-graphite/40">
                  <MagneticButton onClick={() => setModalOpen(true)} size="sm" variant="primary" className="w-full text-center">
                    <span>Apply for Enrollment</span>
                    <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
                  </MagneticButton>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Enrollment Modal */}
      <EnrollmentModal
        course={course}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />

      <FinalCTA />
    </main>
  );
}
