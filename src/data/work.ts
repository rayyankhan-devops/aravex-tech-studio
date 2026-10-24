export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  clientType: string;
  category: string;
  year: string;
  summary: string;
  challenge: string;
  solution: string;
  architecture: string;
  technologies: string[];
  keyHighlights: string[];
  image: string;
  featured: boolean;
  metrics: string;
}

export const WORK_DATA: ProjectItem[] = [
  {
    id: 'cloud-devsecops-pipeline',
    slug: 'cloud-devsecops-pipeline',
    title: 'AWS DevSecOps Automated Vulnerability Scanning & Blue/Green Pipeline',
    clientType: 'Enterprise Cloud Partnership // CloudScale Logistics UK',
    category: 'Cloud & DevOps Engineering',
    year: '2026',
    image: '/assets/generated/cicd-pipeline.png',
    summary:
      'End-to-end automated DevSecOps continuous deployment pipeline on AWS ECS with zero-downtime blue/green execution, cryptographic image signing, and automated Trivy vulnerability gates.',
    challenge:
      'CloudScale Logistics UK suffered from high-friction 45-minute manual release cycles where security checks were either skipped or created severe deployment bottlenecks across regional fulfillment depots.',
    solution:
      'Arevex Tech Studio engineered an automated Infrastructure as Code (IaC) pipeline in Terraform. Every commit triggers automated container SAST scanning, dependency vulnerability audit, and zero-downtime ECS task cutover with rollback telemetry.',
    architecture:
      'Git Push -> GitHub Actions CI -> Trivy Vulnerability Gate -> AWS ECR Signed Image -> ECS Fargate Blue/Green -> CloudWatch Alarm Auto-Rollback.',
    technologies: ['AWS ECS', 'Terraform', 'Docker', 'GitHub Actions', 'Trivy', 'SonarQube', 'Datadog'],
    keyHighlights: [
      '100% automated vulnerability screening on every pull request',
      'Deployment cycle dropped from 45 minutes to 3.2 minutes',
      'Zero downtime blue/green container switchover with automated health rollback',
      'Strict least-privilege IAM and encrypted secret segregation',
    ],
    metrics: '93% Faster CI/CD • 0 CVE Security Rating',
    featured: true,
  },
  {
    id: 'point-of-sale-retail-cluster',
    slug: 'retail-point-of-sale-cluster',
    title: 'Arevex Offline-First Retail POS & Barcode Billing Engine',
    clientType: 'Retail Supermarket Modernization // Al-Noor Hypermarket Group',
    category: 'Custom Systems & Embedded Hardware',
    year: '2026',
    image: '/assets/generated/pos-terminal.png',
    summary:
      'High-speed point-of-sale engine powering 14 supermarket branches with sub-second barcode lookups, direct thermal ESC/POS receipt generation, and zero-latency offline buffering.',
    challenge:
      'Local power and internet fluctuations caused cashier queues to halt. Conflicting price tiers and manual receipt reconciliation led to lost inventory and customer frustration during peak hours.',
    solution:
      'Designed an air-gapped local SQLite engine paired with native Electron serial drivers for cash drawers and thermal printers, synchronized with AWS PostgreSQL using optimistic lock reconciliation.',
    architecture:
      'Electron + React Native Serial Client -> Local SQLite Database -> Bidirectional WebSockets Sync Daemon -> Central PostgreSQL Cluster.',
    technologies: ['Electron', 'React', 'TypeScript', 'SQLite', 'PostgreSQL', 'Node Native Serial', 'Tailwind CSS'],
    keyHighlights: [
      '100% continuous cashier checkout operation during internet outages',
      'Sub-0.4s barcode scanning and receipt printer trigger',
      'Automated shift closing, drawer audit, and multi-tax compliance',
      'Unified multi-branch executive pricing management',
    ],
    metrics: '14 Stores • 0s Downtime • 2.4M Transactions',
    featured: true,
  },
  {
    id: 'gocart-ecommerce-architecture',
    slug: 'gocart-ecommerce-architecture',
    title: 'GoCart — Resilient Multi-Service Commerce Architecture',
    clientType: 'E-Commerce Infrastructure // GoCart Commerce Dubai',
    category: 'Full-Stack Engineering & Scalability',
    year: '2026',
    image: '/assets/generated/project-gocart.png',
    summary:
      'Decoupled Next.js 15 and Redis session architecture built to withstand extreme flash sale traffic surges of over 40,000 concurrent sessions without a single dropped cart.',
    challenge:
      'Legacy monolithic storefront crashed during annual Black Friday promotions when concurrent database checkout writes locked product catalog queries.',
    solution:
      'Separated catalog browsing into globally distributed edge CDN workers, decoupled cart persistence into Redis atomic locks, and routed payments via idempotent background processing queues.',
    architecture:
      'Next.js 15 App Router Edge CDN -> Redis Session Lock Queue -> Decoupled Microservice Workers -> PostgreSQL Read Replicas.',
    technologies: ['Next.js 15', 'React 19', 'TypeScript', 'Redis', 'PostgreSQL', 'Docker', 'AWS Fargate'],
    keyHighlights: [
      'Sub-40ms Time to First Byte (TTFB) across GCC and international traffic',
      'Zero cart lock contention or inventory overselling under 40k concurrent shoppers',
      'Seamless multi-currency payments via Stripe and local merchant rails',
      'Automated warehouse fulfillment and WhatsApp tracking integration',
    ],
    metrics: '40,000 Peak Users • <40ms TTFB • 0 Dropped Carts',
    featured: true,
  },
  {
    id: 'ai-customer-intelligence',
    slug: 'ai-customer-intelligence',
    title: 'Autonomous Multi-Agent Customer Support & Intelligence Platform',
    clientType: 'AI Engineering Partnership // OmniVentures Global Singapore',
    category: 'AI & Data Engineering',
    year: '2026',
    image: '/assets/generated/service-ai.png',
    summary:
      'Enterprise multi-agent autonomous system that resolves 65% of customer support tickets without human intervention while performing deterministic policy validation and sentiment clustering.',
    challenge:
      'OmniVentures faced rising support staff costs and customer churn due to inconsistent human responses across email, live chat, and WhatsApp.',
    solution:
      'Architected a collaborative multi-agent DAG engine in FastAPI with vector retrieval for company knowledge, schema-enforced tool execution for refunds and order lookups, and human-in-the-loop escalation gates.',
    architecture:
      'Next.js 15 Client -> WebSocket Gateway -> FastAPI Agent Runtime (LangGraph) -> pgvector Semantic Search -> PostgreSQL Audit Vault.',
    technologies: ['FastAPI', 'Python', 'LangGraph', 'pgvector', 'PostgreSQL', 'Redis', 'Next.js 15'],
    keyHighlights: [
      '65% automated first-contact resolution with zero hallucinations',
      'Sub-120ms vector retrieval latency on over 500,000 policy tokens',
      'Strict Zod/Pydantic schema validation preventing unauthorized tool execution',
      'Real-time executive sentiment radar and topic anomaly alerts',
    ],
    metrics: '65% Automated Resolution • 0 Hallucinations',
    featured: true,
  },
  {
    id: 'inventory-mis-warehouse',
    slug: 'inventory-mis-warehouse',
    title: 'Centralized Multi-Warehouse Inventory & Logistics MIS',
    clientType: 'Supply Chain Operations // Vendus Distribution Network',
    category: 'Enterprise Software & Logistics',
    year: '2025',
    image: '/assets/generated/inventory-warehouse.png',
    summary:
      'Enterprise inventory management and accounting ledger synchronizing 5 regional distribution warehouses, RFID dispatch scanning, batch expiry tracking, and purchase order cycles.',
    challenge:
      'Conflicting spreadsheets and manual inventory reconciliations resulted in frequent stockouts, expired pharmaceutical batches, and untracked warehouse transit damages.',
    solution:
      'Engineered a centralized real-time inventory management console with automated low-stock reorder drafts, batch traceability from container unboxing to retail dispatch, and live gross margin tracking.',
    architecture:
      'Next.js Dashboard -> Node.js Microservices -> PostgreSQL Distributed Cluster with Redis Cache -> Barcode Scanner API Integration.',
    technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'Redis', 'Tailwind CSS', 'Docker'],
    keyHighlights: [
      'Real-time inventory visibility across 5 warehouses and 18,490 active SKUs',
      'Batch and expiry early warning notifications eliminating expired stock losses',
      'Automated landed cost calculation and purchase order comparison history',
      '100% audit accuracy across internal stock transfers and vendor receipts',
    ],
    metrics: '5 Warehouses • 18,490 SKUs • 100% Audit Precision',
    featured: false,
  },
  {
    id: 'mediflow-clinic-emr',
    slug: 'mediflow-clinic-emr',
    title: 'MediFlow — Clinical Management & Electronic Health Records (EMR)',
    clientType: 'Healthcare Technology // MediFlow Specialty Clinics Islamabad',
    category: 'Healthcare Software & Web',
    year: '2025',
    image: '/assets/generated/clinic-emr.png',
    summary:
      'Digital outpatient clinic administration platform integrating doctor scheduling, electronic prescription generation, vital signs tracking, and automated WhatsApp patient appointment reminders.',
    challenge:
      'Overcrowded clinic waiting rooms, lost paper prescription slips, and delayed doctor access to longitudinal patient visit histories compromised patient care.',
    solution:
      'Built a streamlined web and tablet EMR suite enabling doctors to retrieve complete patient medical histories in two clicks, generate structured digital prescriptions, and dispatch PDF copies to patient WhatsApp in real time.',
    architecture:
      'React Tablet UI -> Node.js Secure Healthcare API -> Encrypted PostgreSQL -> WhatsApp Cloud API Webhook Integration.',
    technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'WhatsApp Cloud API', 'Docker'],
    keyHighlights: [
      '70% reduction in average patient waiting room congestion',
      'One-click digital prescription generation with automated drug dosage checks',
      'Automated WhatsApp appointment confirmations and 24-hour reminder broadcasts',
      'Strict HIPAA-aligned patient data encryption at rest and in transit',
    ],
    metrics: '70% Reduced Wait Times • 100% Digital Prescriptions',
    featured: false,
  },
];
