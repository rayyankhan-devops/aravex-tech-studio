'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Compass,
  Layers,
  Code2,
  ShieldCheck,
  Rocket,
  CheckCircle2,
  Users,
  KeyRound,
  Clock,
  ArrowRight,
  Terminal,
  Cpu,
  Sparkles,
  GitBranch,
  Lock,
} from 'lucide-react';

interface Stage {
  id: string;
  step: string;
  shortTitle: string;
  fullTitle: string;
  tag: string;
  cadence: string;
  leadRole: string;
  icon: React.ElementType;
  accentColor: {
    badge: string;
    text: string;
    bg: string;
    border: string;
    glow: string;
    ring: string;
  };
  headline: string;
  description: string;
  studioRule: string;
  deliverables: string[];
  toolchain: string[];
  codeSnippet: {
    filename: string;
    language: string;
    code: string[];
  };
}

const STAGES: Stage[] = [
  {
    id: 'stage-1',
    step: '01',
    shortTitle: 'Discovery & Blueprint',
    fullTitle: 'System Architecture & Technical Blueprinting',
    tag: 'ARCHITECTURE & FEASIBILITY',
    cadence: 'Phase 01 • Days 1 to 5',
    leadRole: 'Lead Systems Architect & Founders',
    icon: Compass,
    accentColor: {
      badge: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/25',
      text: 'text-blue-600 dark:text-blue-400',
      bg: 'bg-blue-500',
      border: 'border-blue-500',
      glow: 'from-blue-500/20 via-blue-500/5 to-transparent',
      ring: 'ring-blue-500/40',
    },
    headline: 'Deterministic Schemas & Architectural Boundary Locks',
    description:
      'We deconstruct your business processes into formal domain boundaries, database schemas, and API contracts. No code is merged until throughput targets, data models, and failover constraints are mathematically established and signed off.',
    studioRule:
      'Rule 01: All database relations, indexes, and API schemas are locked in an RFC spec before UI coding commences.',
    deliverables: [
      'Formal Technical Specification & RFC Document',
      'Database Schema ERD & Migration Blueprint',
      'High-Concurrency Latency & Throughput Targets',
      'Cloud Perimeter & IAM Threat Model',
    ],
    toolchain: ['Prisma / PostgreSQL', 'Mermaid RFCs', 'AWS IaC Blueprints', 'OWASP Threat Modeling'],
    codeSnippet: {
      filename: 'architecture.spec.ts',
      language: 'typescript',
      code: [
        'export interface ProductionSpec {',
        '  architecture: "Multi-Region Cloud" | "Hybrid POS";',
        '  concurrencyTarget: "50,000+ RPS";',
        '  p99LatencyBudget: "< 45ms";',
        '  failoverStrategy: "Automated Blue/Green";',
        '  codebaseOwnership: "100% Client Transferred";',
        '}',
      ],
    },
  },
  {
    id: 'stage-2',
    step: '02',
    shortTitle: 'UI/UX & Design Systems',
    fullTitle: 'Design Systems & High-Fidelity Interaction Prototypes',
    tag: 'DESIGN SYSTEMS & PROTOTYPING',
    cadence: 'Phase 02 • Days 6 to 12',
    leadRole: 'Lead Product Designer & UX Architect',
    icon: Layers,
    accentColor: {
      badge: 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/25',
      text: 'text-purple-600 dark:text-purple-400',
      bg: 'bg-purple-500',
      border: 'border-purple-500',
      glow: 'from-purple-500/20 via-purple-500/5 to-transparent',
      ring: 'ring-purple-500/40',
    },
    headline: 'Architectural Component Tokens & 60fps Micro-Interactions',
    description:
      'We engineer design systems with reusable tokenized primitives, high-fidelity Figma prototypes, and responsive layouts. Every edge-case state (offline warnings, partial payment syncs, validation triggers) is explicitly modeled.',
    studioRule:
      'Rule 02: Every user flow must account for network timeouts, zero-data states, and 300ms mobile network latency.',
    deliverables: [
      'Interactive High-Fidelity Figma Prototype',
      'Design Token Registry (Colors, Spacing, Typography)',
      'Mobile, Tablet & Desktop Responsive Viewport Specs',
      'Micro-Motion & Component Interaction Guidelines',
    ],
    toolchain: ['Figma Enterprise', 'Token Studio', 'Tailwind Typography', 'WCAG 2.1 AA Audits'],
    codeSnippet: {
      filename: 'tokens.designSystem.json',
      language: 'json',
      code: [
        '{',
        '  "typography": { "mono": "JetBrains Mono", "sans": "Inter" },',
        '  "gridColumns": 12,',
        '  "motionEasing": "cubic-bezier(0.16, 1, 0.3, 1)",',
        '  "contrastRatio": "7.2:1 (WCAG AAA)",',
        '  "viewports": ["375px", "768px", "1024px", "1440px"]',
        '}',
      ],
    },
  },
  {
    id: 'stage-3',
    step: '03',
    shortTitle: 'Production Engineering',
    fullTitle: 'Full-Stack Codebase & Continuous Integration',
    tag: 'FULL-STACK PRODUCTION BUILDS',
    cadence: 'Phase 03 • Days 13 to 28',
    leadRole: 'Senior Full-Stack & Systems Engineers',
    icon: Code2,
    accentColor: {
      badge: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/25',
      text: 'text-emerald-600 dark:text-emerald-400',
      bg: 'bg-emerald-500',
      border: 'border-emerald-500',
      glow: 'from-emerald-500/20 via-emerald-500/5 to-transparent',
      ring: 'ring-emerald-500/40',
    },
    headline: 'Type-Safe Distributed Architecture with Weekly Staging Releases',
    description:
      'Writing strict TypeScript across Next.js App Router, Flutter mobile, or desktop runtimes. Daily branch merges undergo automated CI/CD checks, unit tests, and security linter sweeps, producing staging builds every Friday for review.',
    studioRule:
      'Rule 03: Zero PRs merged without 100% strict TypeScript compliance and zero unhandled async Promise rejections.',
    deliverables: [
      'Type-Safe Modular Source Code (100% Client IP)',
      'Automated GitHub Actions CI/CD Branch Pipelines',
      'Weekly Staging Releases on Isolated Cloud Preview URLs',
      'Strict Zod Runtime Validation on All API Boundaries',
    ],
    toolchain: ['Next.js 15 App Router', 'TypeScript 5.6', 'Docker Compose', 'Redis & PostgreSQL', 'GitHub Actions'],
    codeSnippet: {
      filename: 'pipeline.production.ts',
      language: 'typescript',
      code: [
        'export async function deployProductionStage(build: BuildArtifact) {',
        '  await runStrictTypeCheck(); // 0 compiler errors required',
        '  await runAutomatedSecurityAudit(); // 0 CVE gate',
        '  return blueGreenDeploy({',
        '    zeroDowntime: true,',
        '    healthCheckGracePeriodMs: 5000,',
        '  });',
        '}',
      ],
    },
  },
  {
    id: 'stage-4',
    step: '04',
    shortTitle: 'Hardening & QA',
    fullTitle: 'Chaos Failover, Load Testing & Security Auditing',
    tag: 'HARDENING & STRESS TESTING',
    cadence: 'Phase 04 • Days 29 to 35',
    leadRole: 'DevSecOps & Reliability Lead',
    icon: ShieldCheck,
    accentColor: {
      badge: 'bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-500/25',
      text: 'text-amber-600 dark:text-amber-400',
      bg: 'bg-amber-500',
      border: 'border-amber-500',
      glow: 'from-amber-500/20 via-amber-500/5 to-transparent',
      ring: 'ring-amber-500/40',
    },
    headline: 'Extreme High-Concurrency Stress Tests & Zero-CVE Policies',
    description:
      'We simulate real-world catastrophe scenarios: sudden network latency, database connection pooling dropouts, and sudden 10x traffic surges. Automated Trivy scans ensure zero known vulnerabilities before production sign-off.',
    studioRule:
      'Rule 04: Zero known vulnerabilities policy. Production deployment is blocked if any Critical or High CVE exists.',
    deliverables: [
      'High-Concurrency Load Testing Report (k6 / Artillery)',
      'Automated Trivy Container Vulnerability Audit',
      'Multi-Region Failover & Recovery Playbook',
      'End-to-End Regression & Accessibility Pass',
    ],
    toolchain: ['Trivy Container Scanner', 'k6 Concurrency Engine', 'AWS CloudWatch / Datadog', 'OWASP ZAP'],
    codeSnippet: {
      filename: 'trivy.security.audit',
      language: 'bash',
      code: [
        '$ trivy image aravex-app:production --severity CRITICAL,HIGH',
        '2026-11-03T23:15:00Z [INFO] Scanning container dependencies...',
        '✓ Total Packages Scanned: 418',
        '✓ Critical CVEs: 0 | High CVEs: 0',
        '✓ Chaos Failover Test: Service resumed in 1.14s with zero lost transactions.',
      ],
    },
  },
  {
    id: 'stage-5',
    step: '05',
    shortTitle: 'Launch & Handover',
    fullTitle: 'Zero-Downtime Deployment, 100% IP Transfer & SLA',
    tag: 'DEPLOYMENT & TOTAL OWNERSHIP',
    cadence: 'Phase 05 • Day 36 & Beyond',
    leadRole: 'Founding Partners & Technical Leads',
    icon: Rocket,
    accentColor: {
      badge: 'bg-teal-500/10 text-teal-600 dark:text-teal-400 border-teal-500/25',
      text: 'text-teal-600 dark:text-teal-400',
      bg: 'bg-teal-500',
      border: 'border-teal-500',
      glow: 'from-teal-500/20 via-teal-500/5 to-transparent',
      ring: 'ring-teal-500/40',
    },
    headline: 'Zero-Downtime Cutover, Complete Git Handover & Active SLA Support',
    description:
      'Blue/green DNS cutover with zero downtime. 100% intellectual property transfer: you own all Git repositories, container images, AWS IAM credentials, and architecture runbooks, backed by direct founder SLA warranty.',
    studioRule:
      'Rule 05: Client holds 100% administrative keys and Git ownership before final invoice reconciliation.',
    deliverables: [
      'Zero-Downtime Blue/Green Production Cutover',
      '100% Source Code & Git Repository Transfer',
      'Comprehensive Engineering Runbooks & API Docs',
      'Direct Technical SLA & Emergency Response Channel',
    ],
    toolchain: ['AWS Route53 & CloudFront', 'Docker Hub / ECR', 'Swagger / OpenAPI Docs', 'Direct Founder SLA'],
    codeSnippet: {
      filename: 'handover.manifest.md',
      language: 'markdown',
      code: [
        '# Client Handover Verification Manifest',
        '- Git Repository Ownership: Transferred to Client Org ✓',
        '- Cloud IAM Root Credentials: Admin Assigned to Client ✓',
        '- Continuous CI/CD Pipelines: Operational & Monitored ✓',
        '- Technical SLA Warranty: Active (Direct Lead Contact) ✓',
      ],
    },
  },
];

const GUARANTEES = [
  {
    icon: Users,
    title: 'Direct Lead Engineers',
    metric: '100% Direct Access',
    desc: 'Zero account managers or junior buffers. You collaborate directly with senior architects who write and deploy the code.',
    accent: 'emerald',
    badgeClass: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20',
  },
  {
    icon: KeyRound,
    title: '100% Code Ownership',
    metric: '100% Client IP',
    desc: 'All source code, Docker configs, database schemas, and cloud templates belong entirely to you from day one. Zero vendor lock-in.',
    accent: 'blue',
    badgeClass: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20',
  },
  {
    icon: Clock,
    title: 'Weekly Staging Releases',
    metric: 'Every Friday 5 PM',
    desc: 'Inspect tested, working features on live preview URLs at the end of each sprint. Transparent momentum with zero surprise delays.',
    accent: 'purple',
    badgeClass: 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20',
  },
  {
    icon: ShieldCheck,
    title: 'DevSecOps by Default',
    metric: '0 Known CVEs Policy',
    desc: 'Automated dependency audits, secret vaults, least-privilege IAM policies, and encrypted databases baked into the baseline.',
    accent: 'amber',
    badgeClass: 'bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-500/20',
  },
];

export function EngineeringMethodology() {
  const [activeStageIdx, setActiveStageIdx] = useState<number>(0);

  const activeStage = STAGES[activeStageIdx];
  const IconComponent = activeStage.icon;

  return (
    <section className="py-24 sm:py-32 border-b border-gray-200 dark:border-graphite/40 bg-[#F7F7F5] dark:bg-charcoal-950 transition-colors duration-300 relative overflow-hidden">
      {/* Background Blueprint Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Theodore-Style Section Eyebrow with Multi-Color Bar Glyphs */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-2.5">
            <div className="flex items-center gap-1 shrink-0" aria-hidden="true">
              <span className="w-1.5 h-3.5 rounded-[2px] bg-[#D45361]" />
              <span className="w-1 h-3.5 rounded-[2px] bg-[#EA7047]" />
              <span className="w-1 h-3.5 rounded-[2px] bg-[#ECEB54]" />
              <span className="w-1 h-3.5 rounded-[2px] bg-[#5CB554]" />
              <span className="w-1 h-3.5 rounded-[2px] bg-[#4D66EC]" />
            </div>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-gray-600 dark:text-slate-300 font-bold">
              ENGINEERING METHODOLOGY • 5-STAGE LIFECYCLE
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-2 font-mono text-[11px] text-emerald-600 dark:text-emerald-400 bg-white dark:bg-charcoal-900 px-3 py-1 rounded-full border border-gray-200 dark:border-graphite/60 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-bold">CADENCE: 1-WEEK SPRINTS • ZERO BLACK BOXES</span>
          </div>
        </div>

        {/* Section Heading Block */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-950 dark:text-white tracking-tight uppercase leading-[1.08]">
            How We Work — From Blueprint to Production.
          </h2>
          <p className="text-base sm:text-lg text-gray-700 dark:text-slate-300 mt-4 leading-relaxed font-normal">
            A deterministic, sequential delivery lifecycle engineered for zero technical debt, predictable sprint velocity, and complete intellectual property handover.
          </p>
        </div>

        {/* 1. INTERACTIVE SEQUENTIAL PIPELINE STEPPER TRACK */}
        <div className="mb-8">
          <div className="overflow-x-auto pb-4 pt-2 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-none">
            <div className="flex items-center justify-between min-w-[700px] lg:min-w-full relative">
              {/* Connected Background Track Line */}
              <div className="absolute left-6 right-6 top-1/2 -translate-y-1/2 h-[2px] bg-gray-200 dark:bg-graphite/70 z-0" />
              
              {/* Active Progress Fill Line */}
              <div
                className="absolute left-6 top-1/2 -translate-y-1/2 h-[2px] bg-emerald-500 transition-all duration-500 z-0"
                style={{
                  width: `${(activeStageIdx / (STAGES.length - 1)) * 94}%`,
                }}
              />

              {/* 5 Stage Nodes */}
              {STAGES.map((s, idx) => {
                const isSelected = activeStageIdx === idx;
                const isPassed = activeStageIdx > idx;
                const NodeIcon = s.icon;

                return (
                  <button
                    key={s.id}
                    onClick={() => setActiveStageIdx(idx)}
                    type="button"
                    className="relative z-10 flex flex-col items-center group cursor-pointer focus:outline-none touch-manipulation"
                    aria-label={`Select stage ${s.step}: ${s.shortTitle}`}
                  >
                    {/* Node Badge */}
                    <div
                      className={`w-11 h-11 sm:w-13 sm:h-13 rounded-2xl flex items-center justify-center transition-all duration-300 font-mono font-bold text-xs sm:text-sm border ${
                        isSelected
                          ? `${s.accentColor.bg} text-white ${s.accentColor.border} shadow-lg ring-4 ${s.accentColor.ring} scale-110`
                          : isPassed
                          ? 'bg-emerald-500 text-white border-emerald-500'
                          : 'bg-white dark:bg-charcoal-900 text-gray-500 dark:text-slate-400 border-gray-300 dark:border-graphite hover:border-gray-400 dark:hover:border-slate-500'
                      }`}
                    >
                      {isPassed ? (
                        <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6" />
                      ) : (
                        <NodeIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                      )}
                    </div>

                    {/* Step Number & Label */}
                    <div className="mt-2.5 text-center">
                      <span
                        className={`block font-mono text-[10px] sm:text-[11px] font-bold uppercase tracking-wider transition-colors ${
                          isSelected
                            ? s.accentColor.text
                            : 'text-gray-400 dark:text-slate-500 group-hover:text-gray-700 dark:group-hover:text-slate-300'
                        }`}
                      >
                        STAGE {s.step}
                      </span>
                      <span
                        className={`block text-xs sm:text-sm font-bold tracking-tight transition-colors ${
                          isSelected
                            ? 'text-gray-950 dark:text-white'
                            : 'text-gray-600 dark:text-slate-400 group-hover:text-gray-900 dark:group-hover:text-slate-200'
                        }`}
                      >
                        {s.shortTitle}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* 2. ACTIVE STAGE DEEP-DIVE ARCHITECTURAL CONSOLE */}
        <div className="mb-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStage.id}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="relative rounded-3xl bg-white dark:bg-charcoal-900 border border-gray-200 dark:border-graphite/60 shadow-xl overflow-hidden p-6 sm:p-8 lg:p-10"
            >
              {/* Subtle Stage Color Ambient Glow */}
              <div
                className={`absolute -top-24 -right-24 w-80 h-80 rounded-full bg-gradient-to-br ${activeStage.accentColor.glow} blur-3xl pointer-events-none`}
              />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start relative z-10">
                
                {/* Left Column: Stage Narrative, Rule & Lead */}
                <div className="lg:col-span-7 flex flex-col justify-between h-full gap-6">
                  <div>
                    {/* Top Status & Cadence Row */}
                    <div className="flex flex-wrap items-center gap-2.5 mb-4">
                      <span
                        className={`font-mono text-[11px] uppercase tracking-wider px-3 py-1 rounded-full font-bold border ${activeStage.accentColor.badge}`}
                      >
                        STAGE {activeStage.step} • {activeStage.tag}
                      </span>
                      <span className="font-mono text-[11px] text-gray-500 dark:text-slate-400 bg-gray-100 dark:bg-charcoal-800 px-2.5 py-1 rounded-full border border-gray-200 dark:border-graphite/40 font-medium">
                        {activeStage.cadence}
                      </span>
                    </div>

                    {/* Headline & Title */}
                    <h3 className="text-2xl sm:text-3xl font-black text-gray-950 dark:text-white mb-2 leading-tight">
                      {activeStage.fullTitle}
                    </h3>
                    <p className="font-mono text-xs sm:text-sm text-emerald-600 dark:text-emerald-400 font-bold mb-4 uppercase tracking-wide">
                      {activeStage.headline}
                    </p>

                    {/* Deep Narrative */}
                    <p className="text-sm sm:text-base text-gray-700 dark:text-slate-300 leading-relaxed font-normal mb-6">
                      {activeStage.description}
                    </p>

                    {/* Studio Enforced Rule Box */}
                    <div className="p-4 rounded-2xl bg-[#F7F7F5] dark:bg-charcoal-950 border border-gray-200 dark:border-graphite/60 flex items-start gap-3 mb-6">
                      <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/20 mt-0.5">
                        <Lock className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="block font-mono text-[10px] uppercase tracking-wider text-emerald-600 dark:text-emerald-400 font-bold mb-0.5">
                          STUDIO ENFORCEMENT PROTOCOL
                        </span>
                        <p className="text-xs sm:text-sm font-semibold text-gray-900 dark:text-slate-200 leading-snug">
                          {activeStage.studioRule}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Stage Bottom Bar: Responsible Lead + Handover Button */}
                  <div className="pt-6 border-t border-gray-100 dark:border-graphite/40 flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-gray-100 dark:bg-charcoal-800 border border-gray-200 dark:border-graphite/60 flex items-center justify-center text-gray-700 dark:text-slate-300">
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="block font-mono text-[10px] uppercase text-gray-400 dark:text-slate-500 font-bold">
                          DIRECT ACCOUNTABILITY
                        </span>
                        <span className="text-xs sm:text-sm font-bold text-gray-950 dark:text-white">
                          {activeStage.leadRole}
                        </span>
                      </div>
                    </div>

                    {activeStageIdx < STAGES.length - 1 ? (
                      <button
                        onClick={() => setActiveStageIdx(activeStageIdx + 1)}
                        type="button"
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full font-mono text-xs font-bold bg-charcoal-950 text-white dark:bg-white dark:text-charcoal-950 hover:bg-emerald-600 dark:hover:bg-emerald-400 dark:hover:text-black transition-all cursor-pointer shadow-xs"
                      >
                        <span>Next: Stage {STAGES[activeStageIdx + 1].step}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    ) : (
                      <div className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full font-mono text-xs font-bold bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Final Stage • Handover Complete</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Right Column: Verified Deliverables & Interactive Code Artifact Terminal */}
                <div className="lg:col-span-5 flex flex-col gap-5">
                  
                  {/* Verified Deliverables Card */}
                  <div className="p-5 sm:p-6 rounded-2xl bg-[#F7F7F5] dark:bg-charcoal-950 border border-gray-200 dark:border-graphite/60 shadow-xs">
                    <div className="flex items-center justify-between pb-3 mb-3 border-b border-gray-200/80 dark:border-graphite/40">
                      <span className="font-mono text-[11px] uppercase tracking-wider text-gray-500 dark:text-slate-400 font-bold">
                        VERIFIED DELIVERABLES
                      </span>
                      <span className="font-mono text-[10px] text-emerald-600 dark:text-emerald-400 font-bold">
                        4 / 4 SIGN-OFFS
                      </span>
                    </div>

                    <div className="space-y-2.5">
                      {activeStage.deliverables.map((del, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-800 dark:text-slate-200">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span className="font-medium leading-snug">{del}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* High-Tech Code / Spec Artifact Terminal */}
                  <div className="rounded-2xl bg-charcoal-950 text-white border border-graphite/80 overflow-hidden shadow-lg">
                    {/* Terminal Header */}
                    <div className="flex items-center justify-between px-4 py-2.5 bg-charcoal-900 border-b border-graphite/70">
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1.5" aria-hidden="true">
                          <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                          <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                        </div>
                        <span className="font-mono text-[11px] text-slate-300 ml-2">
                          {activeStage.codeSnippet.filename}
                        </span>
                      </div>
                      <span className="font-mono text-[10px] text-emerald-400 font-bold uppercase">
                        ARTIFACT
                      </span>
                    </div>

                    {/* Terminal Code Lines */}
                    <div className="p-4 font-mono text-[11px] sm:text-xs leading-relaxed overflow-x-auto text-slate-300 bg-charcoal-950">
                      {activeStage.codeSnippet.code.map((line, lIdx) => (
                        <div key={lIdx} className="flex gap-3">
                          <span className="text-slate-600 select-none text-right w-4 shrink-0">
                            {lIdx + 1}
                          </span>
                          <span
                            className={
                              line.startsWith('//')
                                ? 'text-slate-500 italic'
                                : line.includes('true') || line.includes('0 CVE')
                                ? 'text-emerald-400 font-bold'
                                : line.includes('export') || line.includes('const')
                                ? 'text-blue-400'
                                : 'text-slate-200'
                            }
                          >
                            {line}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Toolchain Badges */}
                    <div className="p-3 bg-charcoal-900/70 border-t border-graphite/60 flex flex-wrap gap-1.5">
                      {activeStage.toolchain.map((tool) => (
                        <span
                          key={tool}
                          className="px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-charcoal-800 text-slate-300 border border-graphite/50"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* 3. AT-A-GLANCE 5-STAGE SEQUENTIAL PIPELINE CARDS (Skimmable Matrix) */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-6">
            <span className="font-mono text-xs uppercase tracking-wider text-gray-500 dark:text-slate-400 font-bold">
              END-TO-END PIPELINE MATRIX • CLICK ANY STAGE TO INSPECT
            </span>
            <span className="font-mono text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold">
              SEQUENTIAL &bull; DEPENDENCY-CHECKED
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {STAGES.map((s, idx) => {
              const isCurrent = activeStageIdx === idx;
              const StageIcon = s.icon;

              return (
                <div
                  key={`matrix-${s.id}`}
                  onClick={() => setActiveStageIdx(idx)}
                  className={`group relative p-5 rounded-2xl cursor-pointer transition-all duration-300 border flex flex-col justify-between ${
                    isCurrent
                      ? 'bg-white dark:bg-charcoal-900 border-emerald-500 shadow-md ring-2 ring-emerald-500/20'
                      : 'bg-white/60 dark:bg-charcoal-900/50 border-gray-200 dark:border-graphite/50 hover:border-gray-300 dark:hover:border-graphite hover:bg-white dark:hover:bg-charcoal-900'
                  }`}
                >
                  <div>
                    {/* Top Step Number + Icon */}
                    <div className="flex items-center justify-between mb-3">
                      <span
                        className={`font-mono text-xs font-black px-2 py-0.5 rounded ${
                          isCurrent
                            ? 'bg-emerald-500 text-white'
                            : 'bg-gray-100 dark:bg-charcoal-800 text-gray-600 dark:text-slate-400'
                        }`}
                      >
                        {s.step}
                      </span>
                      <StageIcon
                        className={`w-4 h-4 transition-colors ${
                          isCurrent
                            ? 'text-emerald-600 dark:text-emerald-400'
                            : 'text-gray-400 dark:text-slate-500 group-hover:text-emerald-500'
                        }`}
                      />
                    </div>

                    <h4 className="text-sm font-bold text-gray-950 dark:text-white leading-snug mb-1">
                      {s.shortTitle}
                    </h4>
                    <p className="text-[11px] text-gray-600 dark:text-slate-400 line-clamp-2 leading-relaxed font-normal mb-3">
                      {s.headline}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-gray-100 dark:border-graphite/30 flex items-center justify-between text-[10px] font-mono">
                    <span className="text-gray-400 dark:text-slate-500">
                      {s.cadence.split('•')[1] || s.cadence}
                    </span>
                    <span className="text-emerald-600 dark:text-emerald-400 font-bold group-hover:translate-x-0.5 transition-transform">
                      {isCurrent ? 'ACTIVE' : 'INSPECT →'}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 4. HARDENED CLIENT GUARANTEES (THE COMMITMENTS VAULT) */}
        <div className="p-8 sm:p-10 lg:p-12 rounded-3xl bg-white dark:bg-charcoal-900 border border-gray-200 dark:border-graphite/60 shadow-xl relative overflow-hidden">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 pb-6 border-b border-gray-200/80 dark:border-graphite/50">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span className="font-mono text-xs uppercase tracking-widest text-emerald-600 dark:text-emerald-400 font-bold">
                  CLIENT GUARANTEES &amp; SLA COMMITMENTS
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-950 dark:text-white uppercase leading-tight">
                Our Non-Negotiable Engineering Commitments
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-gray-500 dark:text-slate-400 font-mono max-w-sm leading-relaxed">
              Standard contract terms on every single engineering engagement. Zero deviations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {GUARANTEES.map((g, i) => {
              const GIcon = g.icon;
              return (
                <div
                  key={i}
                  className="p-5 rounded-2xl bg-[#F7F7F5] dark:bg-charcoal-950 border border-gray-200/80 dark:border-graphite/50 flex flex-col justify-between hover:border-emerald-500/40 transition-colors"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-white dark:bg-charcoal-850 border border-gray-200 dark:border-graphite/60 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shadow-xs">
                        <GIcon className="w-5 h-5" />
                      </div>
                      <span className={`font-mono text-[10px] font-bold px-2 py-0.5 rounded-full border ${g.badgeClass}`}>
                        {g.metric}
                      </span>
                    </div>

                    <h4 className="font-bold text-base text-gray-950 dark:text-white mb-2 leading-snug">
                      {g.title}
                    </h4>
                    <p className="text-xs text-gray-600 dark:text-slate-300 leading-relaxed font-normal">
                      {g.desc}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-gray-200/60 dark:border-graphite/40 flex items-center gap-1.5 text-[11px] font-mono text-emerald-600 dark:text-emerald-400 font-bold">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Contractually Binding</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}

