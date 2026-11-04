'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Globe,
  Smartphone,
  Monitor,
  BrainCircuit,
  MessageSquareCode,
  PhoneCall,
  Cloud,
  ShieldCheck,
  Palette,
  Share2,
  Search,
  Workflow,
  ArrowUpRight,
  ArrowLeft,
  CheckCircle2,
  XCircle,
  Copy,
  Check,
  Terminal,
  Shield,
  Clock,
  Sparkles,
  HelpCircle,
  ChevronDown,
  Layers,
  Lock,
  Cpu,
  FileCode2,
} from 'lucide-react';
import { ServiceItem } from '@/types';
import { BRAND_ASSETS, COMPANY_INFO } from '@/lib/brand';
import { WhatsAppIcon } from '@/components/common/SocialIcons';
import { FinalCTA } from '@/components/home/FinalCTA';

interface ServiceDetailViewProps {
  service: ServiceItem;
  relatedServices: ServiceItem[];
}

const ICON_MAP: Record<string, React.ElementType> = {
  Globe,
  Smartphone,
  Monitor,
  BrainCircuit,
  MessageSquareCode,
  PhoneCall,
  Cloud,
  ShieldCheck,
  Palette,
  Share2,
  Search,
  Workflow,
};

// Bespoke production code/spec artifacts tailored to each service
const SERVICE_SNIPPETS: Record<string, { filename: string; language: string; code: string }> = {
  'web-development': {
    filename: 'next.config.ts',
    language: 'typescript',
    code: `import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compiler: { removeConsole: process.env.NODE_ENV === 'production' },
  experimental: {
    serverActions: { bodySizeLimit: '10mb' },
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
  headers: async () => [
    {
      source: '/:path*',
      headers: [
        { key: 'X-DNS-Prefetch-Control', value: 'on' },
        { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
        { key: 'X-Content-Type-Options', value: 'nosniff' },
        { key: 'Referrer-Policy', value: 'origin-when-cross-origin' },
      ],
    },
  ],
};

export default nextConfig;`,
  },
  'mobile-app-development': {
    filename: 'offline_sync_engine.dart',
    language: 'dart',
    code: `class OfflineSyncEngine {
  final Database localDb;
  final ApiClient remoteApi;

  Future<SyncResult> synchronizeDelta() async {
    final pendingChanges = await localDb.getUnsyncedMutations();
    if (pendingChanges.isEmpty) return SyncResult.upToDate();

    for (final mutation in pendingChanges) {
      final response = await remoteApi.pushMutation(mutation);
      if (response.isSuccess) {
        await localDb.markAsSynced(mutation.id, remoteVersion: response.version);
      }
    }
    return SyncResult.success(syncedCount: pendingChanges.length);
  }
}`,
  },
  'custom-desktop-software': {
    filename: 'esc_pos_printer.ts',
    language: 'typescript',
    code: `import { SerialPort } from 'serialport';

export class ThermalPrinterDriver {
  private port: SerialPort;

  async printReceipt(transaction: SaleRecord): Promise<void> {
    const buffer = Buffer.concat([
      Buffer.from([0x1B, 0x40]), // ESC @ Initialize
      Buffer.from([0x1B, 0x61, 0x01]), // Center Align
      Buffer.from(\`\${transaction.storeName}\\n\`),
      Buffer.from([0x1B, 0x61, 0x00]), // Left Align
      Buffer.from(\`Receipt: \${transaction.receiptId}\\n\`),
      Buffer.from(\`Total: PKR \${transaction.total}\\n\`),
      Buffer.from([0x1D, 0x56, 0x41, 0x10]), // Full Cut
    ]);
    await this.port.write(buffer);
  }
}`,
  },
  'ai-agents': {
    filename: 'agent_graph.ts',
    language: 'typescript',
    code: `import { StateGraph, END } from '@langchain/langgraph';

interface AgentState {
  userQuery: string;
  context: Document[];
  toolCalls: ToolInvocation[];
  finalAnswer?: string;
  isVerified: boolean;
}

const workflow = new StateGraph<AgentState>({ channels: stateChannels })
  .addNode('retrieve', async (state) => ({ context: await pgvector.query(state.userQuery) }))
  .addNode('reason', async (state) => await llm.planWithTools(state.context))
  .addNode('verify_guardrails', async (state) => verifyPydanticSchema(state.toolCalls))
  .addEdge('retrieve', 'reason')
  .addConditionalEdges('reason', (state) => state.isVerified ? 'execute' : 'refine')
  .addEdge('execute', END);`,
  },
  'ai-chatbots': {
    filename: 'rag_orchestrator.ts',
    language: 'typescript',
    code: `import { Pinecone } from '@pinecone-database/pinecone';
import { OpenAIStream, StreamingTextResponse } from 'ai';

export async function POST(req: Request) {
  const { messages, sessionToken } = await req.json();
  const query = messages[messages.length - 1].content;
  
  // High-dimensional cosine retrieval (>0.82 threshold)
  const embedding = await generateEmbeddings(query);
  const matchedDocs = await pinecone.index('support-kb').query({
    vector: embedding,
    topK: 4,
    includeMetadata: true,
  });

  return new StreamingTextResponse(
    await runGroundedInference(query, matchedDocs.matches)
  );
}`,
  },
  'whatsapp-automation': {
    filename: 'meta_webhook_handler.ts',
    language: 'typescript',
    code: `import crypto from 'crypto';

export async function verifyMetaSignature(req: Request): Promise<boolean> {
  const signature = req.headers.get('x-hub-signature-256') ?? '';
  const rawBody = await req.text();
  const expectedSignature = 'sha256=' + crypto
    .createHmac('sha256', process.env.META_APP_SECRET!)
    .update(rawBody)
    .digest('hex');

  return crypto.timingSafeEqual(
    Buffer.from(signature),
    Buffer.from(expectedSignature)
  );
}`,
  },
  'cloud-engineering': {
    filename: 'vpc_multi_az.tf',
    language: 'hcl',
    code: `module "production_vpc" {
  source  = "terraform-aws-modules/vpc/aws"
  version = "5.0.0"

  name = "aravex-production-vpc"
  cidr = "10.0.0.0/16"

  azs             = ["us-east-1a", "us-east-1b", "us-east-1c"]
  private_subnets = ["10.0.1.0/24", "10.0.2.0/24", "10.0.3.0/24"]
  public_subnets  = ["10.0.101.0/24", "10.0.102.0/24", "10.0.103.0/24"]

  enable_nat_gateway     = true
  single_nat_gateway     = false
  one_nat_gateway_per_az = true
  enable_vpn_gateway     = false

  tags = { Environment = "Production", Compliance = "SOC2", ManagedBy = "Terraform" }
}`,
  },
  'devops-devsecops': {
    filename: 'ci_cd_pipeline.yml',
    language: 'yaml',
    code: `name: Production Hardening Pipeline
on: [push, pull_request]

jobs:
  security_audit:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Gitleaks Secret Detection
        uses: gitleaks/gitleaks-action@v2
      - name: Trivy Container Vulnerability Scan
        uses: aquasecurity/trivy-action@master
        with:
          scan-type: 'fs,vuln'
          severity: 'CRITICAL,HIGH'
          exit-code: '1'
      - name: Deploy to Kubernetes Cluster via ArgoCD
        if: github.ref == 'refs/heads/main'
        run: argocd app sync production-cluster --prune`,
  },
  'ui-ux-design': {
    filename: 'tokens.config.ts',
    language: 'typescript',
    code: `export const DesignTokens = {
  radii: { sm: '8px', md: '16px', lg: '24px', xl: '32px' },
  elevation: {
    card: '0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px -1px rgba(0, 0, 0, 0.05)',
    overlay: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
  },
  typography: {
    heading: { font: 'Inter, sans-serif', tracking: '-0.03em', weight: 900 },
    code: { font: 'JetBrains Mono, monospace', tracking: '0em', weight: 500 },
  },
} as const;`,
  },
  'social-media-management': {
    filename: 'b2b_editorial_matrix.json',
    language: 'json',
    code: `{
  "targetAudience": "CTOs, VP Engineering, Founders",
  "contentPillars": [
    { "theme": "System Architecture Teardowns", "cadence": "Weekly", "channel": "LinkedIn" },
    { "theme": "Zero-Downtime Migration Case Studies", "cadence": "Bi-Weekly", "channel": "LinkedIn" },
    { "theme": "AI Agent Grounding Benchmarks", "cadence": "Weekly", "channel": "Tech Community" }
  ],
  "conversionGoal": "High-ticket inbound client project inquiries via WhatsApp"
}`,
  },
  'seo-geo': {
    filename: 'structured_data.jsonld',
    language: 'json',
    code: `{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://aravextechstudio.com/#organization",
      "name": "ARAVEX TECH STUDIO",
      "founder": [
        { "@type": "Person", "name": "Muhammad Rayyan", "jobTitle": "Principal Architect" },
        { "@type": "Person", "name": "Muhammad Uzair", "jobTitle": "Amazon Technical Head" }
      ],
      "knowsAbout": ["High-Concurrency Software", "AI Agents", "Cloud Architecture"]
    }
  ]
}`,
  },
  'business-process-automation': {
    filename: 'event_dispatcher.ts',
    language: 'typescript',
    code: `import { Queue, Worker } from 'bullmq';
import { redisConnection } from './redis';

export const reconciliationQueue = new Queue('accounting-sync', { connection: redisConnection });

new Worker('accounting-sync', async (job) => {
  const { transactionId, posPayload } = job.data;
  
  // Idempotent execution guard
  const alreadyProcessed = await redisConnection.get(\`synced:\${transactionId}\`);
  if (alreadyProcessed) return { status: 'already_reconciled' };

  await ledgerClient.postJournalEntry(posPayload);
  await redisConnection.set(\`synced:\${transactionId}\`, '1', 'EX', 86400);
}, { connection: redisConnection });`,
  },
};

export function ServiceDetailView({ service, relatedServices }: ServiceDetailViewProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeStep, setActiveStep] = useState<number>(0);
  const [copiedCode, setCopiedCode] = useState(false);

  const ServiceIcon = ICON_MAP[service.iconName] || Globe;
  const snippet = SERVICE_SNIPPETS[service.slug] || SERVICE_SNIPPETS['web-development'];

  const handleCopyCode = () => {
    navigator.clipboard.writeText(snippet.code);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const getServiceBanner = (slug: string) => {
    switch (slug) {
      case 'web-development':
        return BRAND_ASSETS.generated.serviceWebDev;
      case 'mobile-app-development':
        return BRAND_ASSETS.generated.serviceMobileApp;
      case 'custom-desktop-software':
        return BRAND_ASSETS.generated.serviceDesktop;
      case 'ai-agents':
        return BRAND_ASSETS.generated.serviceAiAgents;
      case 'ai-chatbots':
        return BRAND_ASSETS.generated.serviceAiChatbots;
      case 'whatsapp-automation':
        return BRAND_ASSETS.generated.serviceWhatsapp;
      case 'cloud-engineering':
        return BRAND_ASSETS.generated.serviceCloudAws;
      case 'devops-devsecops':
        return BRAND_ASSETS.generated.cicdPipeline;
      case 'ui-ux-design':
        return BRAND_ASSETS.generated.serviceUiux;
      case 'social-media-management':
        return BRAND_ASSETS.generated.serviceSocial;
      case 'seo-geo':
        return BRAND_ASSETS.generated.serviceSeoGeo;
      case 'business-process-automation':
        return BRAND_ASSETS.generated.serviceAutomation;
      default:
        return BRAND_ASSETS.generated.serviceSoftware;
    }
  };

  const whatsappInquiryUrl = `${COMPANY_INFO.socials.whatsapp.split('?')[0]}?text=${encodeURIComponent(
    `Hello Aravex Tech Studio, I am interested in discussing a project for ${service.title}. Could we schedule a technical scoping call?`
  )}`;

  return (
    <div className="w-full">
      {/* Theodore Accent Ribbon */}
      <div className="h-1.5 w-full bg-gradient-to-r from-emerald-500 via-teal-400 via-cyan-400 to-amber-400" />

      {/* Sub-header Breadcrumb Bar */}
      <div className="pt-16 sm:pt-18 pb-2.5 sm:pb-3 border-b border-gray-200 dark:border-graphite/40 bg-white/80 dark:bg-charcoal-900/60 backdrop-blur-md sticky top-0 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2.5 text-xs text-gray-500 dark:text-slate-400 font-sans">
            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 hover:text-emerald-600 dark:hover:text-emerald-400 font-bold transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>All 12 Capabilities</span>
            </Link>
            <span className="text-gray-300 dark:text-graphite">/</span>
            <span className="uppercase tracking-wider font-semibold text-gray-700 dark:text-slate-300">
              {service.category}
            </span>
            <span className="text-gray-300 dark:text-graphite">/</span>
            <span className="text-gray-950 dark:text-white font-bold">{service.title}</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-sans font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>PRODUCTION PRACTICE VERIFIED</span>
            </span>
          </div>
        </div>
      </div>

      {/* Hero Header Section */}
      <section className="pt-4 pb-8 sm:pt-6 sm:pb-10 border-b border-gray-200 dark:border-graphite/40 bg-gradient-to-b from-white via-[#F7F7F5] to-[#F7F7F5] dark:from-charcoal-900/80 dark:via-charcoal-950 dark:to-charcoal-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            {/* Category Pill with Icon */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-charcoal-900 border border-gray-200 dark:border-graphite/60 shadow-xs mb-3">
              <span className="p-1 rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                <ServiceIcon className="w-4 h-4" />
              </span>
              <span className="text-xs font-sans uppercase tracking-wider text-gray-800 dark:text-slate-200 font-bold">
                {service.category} Practice // Core Discipline
              </span>
            </div>

            {/* Monumental Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-5xl font-black text-gray-950 dark:text-white tracking-tight leading-[1.08] mb-3">
              {service.title}
            </h1>

            {/* Editorial Tagline */}
            <p className="text-base sm:text-xl text-gray-700 dark:text-slate-200 font-normal leading-relaxed mb-4 sm:mb-5 max-w-3xl">
              {service.tagline}
            </p>

            {/* 4 Instant Studio Guarantee Pills */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-5 sm:mb-6 text-xs">
              <div className="p-2.5 sm:p-3 rounded-xl bg-white dark:bg-charcoal-900 border border-gray-200 dark:border-graphite/50 shadow-xs">
                <span className="text-gray-400 dark:text-slate-500 block text-[10px] uppercase font-bold tracking-wider mb-0.5">Velocity</span>
                <span className="font-bold text-gray-900 dark:text-white flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-emerald-500" />
                  <span>1-2 Wk Sprints</span>
                </span>
              </div>
              <div className="p-2.5 sm:p-3 rounded-xl bg-white dark:bg-charcoal-900 border border-gray-200 dark:border-graphite/50 shadow-xs">
                <span className="text-gray-400 dark:text-slate-500 block text-[10px] uppercase font-bold tracking-wider mb-0.5">Ownership</span>
                <span className="font-bold text-gray-900 dark:text-white flex items-center gap-1.5">
                  <Lock className="w-3.5 h-3.5 text-blue-500" />
                  <span>100% IP Handover</span>
                </span>
              </div>
              <div className="p-2.5 sm:p-3 rounded-xl bg-white dark:bg-charcoal-900 border border-gray-200 dark:border-graphite/50 shadow-xs">
                <span className="text-gray-400 dark:text-slate-500 block text-[10px] uppercase font-bold tracking-wider mb-0.5">Reliability</span>
                <span className="font-bold text-gray-900 dark:text-white flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-teal-500" />
                  <span>SLA Contract</span>
                </span>
              </div>
              <div className="p-2.5 sm:p-3 rounded-xl bg-white dark:bg-charcoal-900 border border-gray-200 dark:border-graphite/50 shadow-xs">
                <span className="text-gray-400 dark:text-slate-500 block text-[10px] uppercase font-bold tracking-wider mb-0.5">Oversight</span>
                <span className="font-bold text-gray-900 dark:text-white flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                  <span>Amazon Tech Head</span>
                </span>
              </div>
            </div>

            {/* Action Hub */}
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
              <Link
                href={`/contact?service=${encodeURIComponent(service.slug)}`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-charcoal-950 text-white dark:bg-white dark:text-charcoal-950 hover:bg-emerald-600 dark:hover:bg-emerald-400 dark:hover:text-black font-sans text-xs uppercase tracking-wider font-bold transition-all shadow-xl hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Start a Project Brief</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>

              <a
                href={whatsappInquiryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white font-sans text-xs uppercase tracking-wider font-bold transition-all shadow-md hover:scale-[1.02] active:scale-[0.98]"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>Fast-Track WhatsApp</span>
              </a>

              <a
                href="#spec-terminal"
                className="inline-flex items-center gap-1.5 px-4 py-3 rounded-full bg-white dark:bg-charcoal-900 border border-gray-200 dark:border-graphite/60 hover:border-gray-400 text-gray-700 dark:text-slate-300 font-sans text-xs font-bold transition-colors shadow-xs"
              >
                <Terminal className="w-3.5 h-3.5 text-emerald-500" />
                <span>Inspect Technical Spec</span>
              </a>
            </div>
          </div>

          {/* Architectural 3D Showcase Banner with HUD Reticle */}
          <div className="mt-6 sm:mt-8 relative h-56 sm:h-80 md:h-[380px] lg:h-[420px] rounded-3xl overflow-hidden border border-gray-200 dark:border-graphite/60 shadow-2xl bg-charcoal-950 group">
            <Image
              src={service.image || getServiceBanner(service.slug)}
              alt={service.title}
              fill
              priority
              className="object-cover object-center group-hover:scale-[1.01] transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/30" />

            {/* Top HUD Badges */}
            <div className="absolute top-5 left-5 right-5 flex items-center justify-between gap-3 text-white text-xs">
              <span className="px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 font-sans font-bold uppercase tracking-wider text-[11px] text-emerald-300 shadow-md">
                PRACTICE // {service.slug.toUpperCase()}
              </span>
              <span className="px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 font-sans font-semibold text-[11px] text-slate-200 shadow-md flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span>BENCHMARK VERIFIED</span>
              </span>
            </div>

            {/* Bottom HUD Badges */}
            <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-white text-xs">
              <span className="px-4 py-2 rounded-full bg-black/65 backdrop-blur-md border border-white/20 font-sans font-semibold text-slate-100">
                {service.title} • Production-Grade Delivery
              </span>
              <span className="px-4 py-2 rounded-full bg-emerald-600/90 backdrop-blur-md border border-emerald-400 font-sans font-bold text-white shadow-lg">
                Zero-Compromise Engineering • Direct Partner Review
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* The Architectural Contrast: Industry Pitfalls vs Aravex Standard */}
      <section className="py-8 sm:py-12 border-b border-gray-200 dark:border-graphite/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-5 sm:mb-6">
            <span className="font-sans text-xs uppercase tracking-wider text-emerald-600 dark:text-emerald-400 font-bold block mb-1.5">
              THE ARCHITECTURAL CONTRAST
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-gray-950 dark:text-white tracking-tight">
              Why Generic Agencies Fail Where Aravex Delivers.
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-slate-300 mt-2 leading-relaxed">
              We replace fragile shortcuts and vendor lock-in with hardened, type-safe engineering verified by Amazon Technical Head leadership.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6">
            {/* The Industry Problem Card */}
            <div className="p-5 sm:p-7 rounded-3xl bg-rose-500/[0.04] dark:bg-rose-950/15 border border-rose-500/20 dark:border-rose-900/40 relative overflow-hidden flex flex-col justify-between">
              <div className="absolute top-0 right-0 w-48 h-48 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/20 font-sans text-xs uppercase tracking-wider font-bold mb-4">
                  <XCircle className="w-3.5 h-3.5" />
                  <span>The Industry Problem</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-950 dark:text-white leading-snug mb-3">
                  {service.problem}
                </h3>
                <div className="space-y-2.5 pt-1 text-xs sm:text-sm text-gray-700 dark:text-slate-300">
                  <div className="flex items-start gap-2.5">
                    <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                    <span>Bloated third-party templates causing sluggish performance and memory leaks.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                    <span>Vendor lock-in and obscured proprietary code preventing internal developer handover.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                    <span>Junior developers assigned without senior code audits or automated testing gates.</span>
                  </div>
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-rose-200 dark:border-rose-900/30 text-xs font-sans text-rose-700 dark:text-rose-300 font-semibold">
                Result: Unpredictable downtime, costly rewrites, and lost customer trust.
              </div>
            </div>

            {/* The Aravex Solution Card */}
            <div className="p-5 sm:p-7 rounded-3xl bg-emerald-500/[0.05] dark:bg-emerald-950/20 border border-emerald-500/30 dark:border-emerald-500/30 relative overflow-hidden flex flex-col justify-between shadow-xl">
              <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30 font-sans text-xs uppercase tracking-wider font-bold mb-4">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>The Aravex Engineering Standard</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-950 dark:text-white leading-snug mb-3">
                  {service.solution}
                </h3>
                <div className="space-y-2.5 pt-1 text-xs sm:text-sm text-gray-800 dark:text-slate-200">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>Type-safe, modular architectures designed for concurrency, durability, and sub-second execution.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>Complete, unrestricted intellectual property handover with full git history and documentation.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>Every pull request audited by founding partners (Amazon Technical Head &amp; Principal Architect).</span>
                  </div>
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-emerald-500/20 dark:border-emerald-500/30 text-xs font-sans text-emerald-700 dark:text-emerald-300 font-bold flex items-center justify-between">
                <span>Result: Predictable scale, guaranteed performance, and frictionless ownership.</span>
                <Check className="w-4 h-4 text-emerald-500" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Concrete Deliverables & Interactive Tech Spec Terminal */}
      <section id="spec-terminal" className="py-8 sm:py-12 border-b border-gray-200 dark:border-graphite/40 bg-white dark:bg-charcoal-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
            
            {/* Left Column: Concrete Deliverables */}
            <div className="lg:col-span-5 flex flex-col gap-4 sm:gap-5">
              <div>
                <span className="font-sans text-xs uppercase tracking-wider text-emerald-600 dark:text-emerald-400 font-bold block mb-1.5">
                  VERIFIED OUTPUTS
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-gray-950 dark:text-white tracking-tight">
                  Concrete Deliverables
                </h2>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-slate-300 mt-1.5 leading-relaxed">
                  Every engagement produces tangible production assets, signed-off milestones, and complete documentation.
                </p>
              </div>

              <div className="space-y-2.5">
                {service.deliverables.map((item, idx) => (
                  <div
                    key={item}
                    className="p-3.5 rounded-2xl bg-gray-50 dark:bg-charcoal-950 border border-gray-200 dark:border-graphite/50 flex items-start gap-3 shadow-2xs hover:border-emerald-500/40 transition-colors"
                  >
                    <div className="p-1 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-sans font-bold text-gray-400 dark:text-slate-500 uppercase tracking-wider block mb-0.5">
                        Deliverable {String(idx + 1).padStart(2, '0')}
                      </span>
                      <p className="text-xs sm:text-sm font-bold text-gray-900 dark:text-white leading-snug">
                        {item}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Technologies Grid */}
              <div className="p-4 rounded-2xl bg-[#F7F7F5] dark:bg-charcoal-950 border border-gray-200 dark:border-graphite/50">
                <div className="flex items-center gap-2 mb-2.5">
                  <Cpu className="w-4 h-4 text-emerald-500" />
                  <span className="text-xs uppercase font-sans font-bold tracking-wider text-gray-700 dark:text-slate-300">
                    Primary Tech Stack
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {service.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-xl text-[11px] font-sans font-semibold bg-white dark:bg-charcoal-900 text-gray-800 dark:text-slate-200 border border-gray-200 dark:border-graphite/60 shadow-2xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Sleek Architectural Code Terminal */}
            <div className="lg:col-span-7 flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <span className="font-sans text-xs uppercase tracking-wider text-emerald-600 dark:text-emerald-400 font-bold">
                  PRODUCTION ARTIFACT SPEC
                </span>
                <span className="text-xs text-gray-500 dark:text-slate-400 font-sans">
                  Sample Implementation Pattern
                </span>
              </div>

              <div className="rounded-2xl bg-charcoal-950 text-white border border-graphite/80 overflow-hidden shadow-2xl">
                {/* Terminal Window Header */}
                <div className="flex items-center justify-between px-4 py-3 bg-charcoal-900 border-b border-graphite/70">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1.5" aria-hidden="true">
                      <span className="w-3 h-3 rounded-full bg-red-500/80" />
                      <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                      <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                    </div>
                    <div className="flex items-center gap-1.5 text-xs font-mono text-slate-300">
                      <FileCode2 className="w-3.5 h-3.5 text-emerald-400" />
                      <span>{snippet.filename}</span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={handleCopyCode}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/10 hover:bg-white/15 text-slate-200 text-xs font-sans font-semibold transition-colors cursor-pointer"
                  >
                    {copiedCode ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Spec</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Code Window Body */}
                <div className="p-5 font-mono text-xs leading-relaxed overflow-x-auto text-slate-200 bg-charcoal-950 selection:bg-emerald-500/30">
                  <pre className="tab-4">
                    <code>{snippet.code}</code>
                  </pre>
                </div>

                {/* Terminal Footer Bar */}
                <div className="px-4 py-2.5 bg-charcoal-900/90 border-t border-graphite/70 flex items-center justify-between text-[11px] text-slate-400 font-sans">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span>Linter: 0 Errors • Production Ready</span>
                  </span>
                  <span>UTF-8 • {snippet.language.toUpperCase()}</span>
                </div>
              </div>

              {/* Detailed Practice Scope Statement */}
              <div className="p-6 rounded-2xl bg-gray-50 dark:bg-charcoal-950 border border-gray-200 dark:border-graphite/50 text-sm leading-relaxed text-gray-700 dark:text-slate-300">
                <h4 className="font-bold text-gray-950 dark:text-white mb-2 text-base">
                  Practice Engineering Scope
                </h4>
                <p>{service.fullDescription}</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Sequential 4-Stage Delivery Lifecycle */}
      <section className="py-8 sm:py-12 border-b border-gray-200 dark:border-graphite/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-6 sm:mb-8">
            <span className="font-sans text-xs uppercase tracking-wider text-emerald-600 dark:text-emerald-400 font-bold block mb-2">
              DELIVERY LIFECYCLE
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-950 dark:text-white tracking-tight">
              Our 4-Stage Engineering Process.
            </h2>
            <p className="text-sm sm:text-base text-gray-600 dark:text-slate-300 mt-2 leading-relaxed">
              Every project moves through predictable milestone gates with zero guesswork or radio silence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {service.process.map((step, idx) => {
              const isSelected = activeStep === idx;
              return (
                <div
                  key={step.step}
                  onClick={() => setActiveStep(idx)}
                  className={`p-6 sm:p-7 rounded-3xl border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? 'bg-white dark:bg-charcoal-900 border-emerald-500/60 shadow-xl ring-2 ring-emerald-500/20'
                      : 'bg-[#F7F7F5] dark:bg-charcoal-950 border-gray-200 dark:border-graphite/50 hover:border-gray-300 dark:hover:border-graphite/80'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className={`font-sans text-xs uppercase tracking-wider font-bold px-2.5 py-1 rounded-full ${
                        isSelected
                          ? 'bg-emerald-500 text-white'
                          : 'bg-gray-200 dark:bg-charcoal-800 text-gray-700 dark:text-slate-400'
                      }`}>
                        Stage {step.step}
                      </span>
                      <span className="text-xs font-sans text-gray-400 dark:text-slate-500 font-semibold">
                        Gate {idx + 1}/4
                      </span>
                    </div>

                    <h3 className="font-bold text-lg text-gray-950 dark:text-white mb-2 leading-snug">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-slate-300 leading-relaxed font-normal">
                      {step.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-gray-200/80 dark:border-graphite/40 flex items-center justify-between text-[11px] font-sans font-semibold text-emerald-600 dark:text-emerald-400">
                    <span>Verified Sign-Off</span>
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Founder Technical Pledge Card */}
      <section className="py-8 sm:py-12 border-b border-gray-200 dark:border-graphite/40 bg-gradient-to-r from-emerald-950/10 via-charcoal-950/5 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-6 sm:p-10 rounded-3xl bg-charcoal-900 text-white border border-graphite/70 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-sans font-bold uppercase tracking-wider mb-3">
                <Shield className="w-3.5 h-3.5 text-emerald-400" />
                <span>FOUNDER TECHNICAL PLEDGE</span>
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                Direct Collaboration with Studio Leadership.
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mt-2.5">
                At ARAVEX, you do not talk to account managers or junior buffers. Founding architects{' '}
                <strong className="text-white">Muhammad Rayyan</strong> (Principal Architect) and{' '}
                <strong className="text-white">Muhammad Uzair</strong> (Amazon Technical Head) personally review your architecture, review PRs, and ensure zero-compromise execution.
              </p>
              <div className="flex flex-wrap items-center gap-4 mt-4 text-xs text-slate-300">
                <span className="flex items-center gap-1.5 font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Mutual NDA before line of code 1</span>
                </span>
                <span className="flex items-center gap-1.5 font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Full Git Source Code &amp; CI/CD Handover</span>
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto shrink-0">
              <a
                href={whatsappInquiryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-2xl bg-[#25D366] hover:bg-[#20ba59] text-white font-sans text-xs uppercase tracking-wider font-bold shadow-xl transition-all hover:scale-[1.02]"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>Fast-Track WhatsApp</span>
              </a>

              <Link
                href={`/contact?service=${encodeURIComponent(service.slug)}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl bg-white text-charcoal-950 hover:bg-slate-100 font-sans text-xs uppercase tracking-wider font-bold shadow-xl transition-all hover:scale-[1.02]"
              >
                <span>Request Feasibility Call</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions Accordion */}
      {service.faqs && service.faqs.length > 0 && (
        <section className="py-8 sm:py-12 border-b border-gray-200 dark:border-graphite/40 bg-white dark:bg-charcoal-900/40">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-6 sm:mb-8">
              <span className="font-sans text-xs uppercase tracking-wider text-emerald-600 dark:text-emerald-400 font-bold block mb-2">
                FREQUENTLY ASKED
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-gray-950 dark:text-white tracking-tight">
                Architectural Questions &amp; Answers
              </h2>
              <p className="text-sm text-gray-600 dark:text-slate-300 mt-2">
                Clear answers regarding scoping, technology choices, and commercial deliverables.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              {service.faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={faq.question}
                    className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                      isOpen
                        ? 'bg-[#F7F7F5] dark:bg-charcoal-950 border-emerald-500/40 shadow-sm'
                        : 'bg-white dark:bg-charcoal-900/60 border-gray-200 dark:border-graphite/50 hover:border-gray-300 dark:hover:border-graphite/70'
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 cursor-pointer"
                    >
                      <div className="flex items-center gap-3">
                        <HelpCircle className={`w-5 h-5 shrink-0 transition-colors ${
                          isOpen ? 'text-emerald-500' : 'text-gray-400 dark:text-slate-500'
                        }`} />
                        <h4 className="font-bold text-base sm:text-lg text-gray-950 dark:text-white leading-snug">
                          {faq.question}
                        </h4>
                      </div>
                      <ChevronDown className={`w-5 h-5 shrink-0 text-gray-400 transition-transform duration-300 ${
                        isOpen ? 'rotate-180 text-emerald-500' : ''
                      }`} />
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="px-5 pb-5 sm:px-6 sm:pb-5 text-sm text-gray-700 dark:text-slate-200 leading-relaxed font-normal border-t border-gray-200/60 dark:border-graphite/30 pt-3"
                        >
                          {faq.answer}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            {/* Have a custom question? */}
            <div className="mt-6 text-center">
              <span className="text-xs text-gray-500 dark:text-slate-400 mr-2">
                Have a unique technical constraint or custom requirement?
              </span>
              <a
                href={whatsappInquiryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-emerald-600 dark:text-emerald-400 font-bold hover:underline"
              >
                Ask our founders directly on WhatsApp &rarr;
              </a>
            </div>
          </div>
        </section>
      )}

      {/* Related Capabilities */}
      {relatedServices.length > 0 && (
        <section className="py-8 sm:py-12 border-b border-gray-200 dark:border-graphite/40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6 sm:mb-8">
              <div>
                <span className="font-sans text-xs uppercase tracking-wider text-emerald-600 dark:text-emerald-400 font-bold block mb-2">
                  CROSS-PRACTICE SYNERGY
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-gray-950 dark:text-white tracking-tight">
                  Related Studio Capabilities
                </h2>
              </div>
              <Link
                href="/services"
                className="inline-flex items-center gap-1.5 text-xs font-sans font-bold text-gray-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
              >
                <span>View all 12 capabilities</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedServices.slice(0, 3).map((rel) => {
                const RelIcon = ICON_MAP[rel.iconName] || Globe;
                return (
                  <Link
                    key={rel.id}
                    href={`/services/${rel.slug}`}
                    className="p-6 rounded-3xl bg-white dark:bg-charcoal-900 border border-gray-200 dark:border-graphite/50 hover:border-emerald-500/50 shadow-xs hover:shadow-lg transition-all group flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                          <RelIcon className="w-5 h-5" />
                        </div>
                        <span className="text-[10px] font-sans font-bold uppercase tracking-wider text-gray-400 dark:text-slate-500">
                          {rel.category}
                        </span>
                      </div>
                      <h3 className="font-bold text-lg text-gray-950 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors mb-2">
                        {rel.title}
                      </h3>
                      <p className="text-xs text-gray-600 dark:text-slate-300 line-clamp-2 leading-relaxed">
                        {rel.shortDescription}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-gray-100 dark:border-graphite/40 flex items-center justify-between text-xs font-sans font-bold text-emerald-600 dark:text-emerald-400">
                      <span>Explore Practice</span>
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Final High-Converting CTA */}
      <FinalCTA />
    </div>
  );
}

