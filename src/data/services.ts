import { ServiceItem } from '@/types';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'web-development',
    slug: 'web-development',
    title: 'Web Development',
    tagline: 'High-performance, scalable web applications built for speed and reliability.',
    shortDescription:
      'Full-stack web applications, modern portals, and SaaS platforms built for speed, responsiveness, and conversion.',
    fullDescription:
      'We build high-performance web systems using Next.js, React, Node.js, and TypeScript. From enterprise portals to multi-tenant SaaS platforms, our engineering prioritizes semantic markup, server-side performance, instant page transitions, and reliable state management.',
    iconName: 'Globe',
    category: 'engineering',
    image: '/assets/generated/Cinematic Dark Workspace with Web Design Monitor.png',
    problem:
      'Most agencies deliver slow, template-based websites that hurt user experience and search rankings.',
    solution:
      'We build modern web applications with fast load times, clean architecture, and optimized SEO from day one.',
    process: [
      { step: '01', title: 'System Architecture', description: 'Defining data models, caching layers, API boundaries, and component hierarchies.' },
      { step: '02', title: 'Interactive Prototype', description: 'Designing pixel-perfect responsive layouts in Figma with motion specs.' },
      { step: '03', title: 'Full-Stack Engineering', description: 'Next.js App Router implementation with type-safe backend integrations.' },
      { step: '04', title: 'Performance Audits', description: 'Lighthouse 95+ score optimization, bundle splitting, and CDN caching.' },
    ],
    deliverables: [
      'Production-ready Next.js/React codebase',
      'Fully responsive UI across mobile, tablet, and desktop',
      'Integrated headless CMS or custom administration panel',
      'Automated CI/CD deployment pipeline',
      'Complete technical documentation and component library',
    ],
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL', 'Redis', 'Vercel / AWS'],
    faqs: [
      {
        question: 'Do you build custom frontends or use off-the-shelf templates?',
        answer: 'We build completely custom, original web platforms tailored precisely to your brand and technical architecture without third-party template bloat.',
      },
      {
        question: 'How do you ensure search engine indexing and speed?',
        answer: 'Through Next.js server-side rendering (SSR), automated metadata generation, structured JSON-LD schemas, and asset optimization, we consistently achieve strong core web vitals scores.',
      },
    ],
    featured: true,
  },
  {
    id: 'mobile-app-development',
    slug: 'mobile-app-development',
    title: 'Mobile App Development',
    tagline: 'Native-feel iOS and Android applications with smooth, fluid animations.',
    shortDescription:
      'Cross-platform and native mobile apps built with Flutter and React Native for consistent performance, offline sync, and real-time push notifications.',
    fullDescription:
      'We engineer polished mobile experiences that delight users across iOS and Android. Our mobile architecture features offline-first local persistence, reactive state management, hardware integration (camera, biometrics, Bluetooth), and frictionless app store deployments.',
    iconName: 'Smartphone',
    category: 'engineering',
    image: '/assets/generated/Cinematic Developer Workspace with Mobile UI Mockups.png',
    problem:
      'Fragmented codebases, inconsistent frame rates, and battery-draining background processes leave users frustrated and uninstalling mobile apps.',
    solution:
      'We use Flutter and React Native with native bridge optimizations, local caching, and predictive state management to deliver smooth, responsive experiences.',
    process: [
      { step: '01', title: 'User Journey Mapping', description: 'Defining mobile-first touch ergonomics, gesture interactions, and offline fallbacks.' },
      { step: '02', title: 'Component Library', description: 'Custom UI design tokens conforming to iOS Human Interface & Android Material guidelines.' },
      { step: '03', title: 'Client-Side Engineering', description: 'Type-safe state management, secure token storage, and background sync engines.' },
      { step: '04', title: 'App Store Submission', description: 'Complete compliance handling for Apple App Store and Google Play releases.' },
    ],
    deliverables: [
      'iOS and Android production binaries (.ipa & .aab)',
      'Clean modular Flutter / React Native source code',
      'Push notification & deep-linking configuration',
      'Automated TestFlight and Internal Testing tracks',
    ],
    technologies: ['Flutter', 'Dart', 'React Native', 'Swift', 'Kotlin', 'Firebase', 'SQLite'],
    faqs: [
      {
        question: 'Can one codebase genuinely deliver high performance on both iOS and Android?',
        answer: 'Yes. With Flutter and modern React Native architecture, compiled native renderers achieve performance nearly indistinguishable from pure native code while saving 40% in engineering overhead.',
      },
      {
        question: 'Do you handle the App Store and Play Store review processes?',
        answer: 'Yes, we handle all store assets, privacy disclosures, metadata submissions, and compliance review processes end-to-end.',
      },
    ],
    featured: true,
  },
  {
    id: 'custom-desktop-software',
    slug: 'custom-desktop-software',
    title: 'Custom Desktop Software',
    tagline: 'Offline-capable desktop systems for mission-critical operations.',
    shortDescription:
      'Reliable desktop applications for Windows, macOS, and Linux that integrate with POS hardware, thermal printers, barcode scanners, and local databases.',
    fullDescription:
      'When your business needs zero-latency execution, direct hardware control, or offline stability, our desktop engineering delivers. We build Electron and native desktop solutions for retail POS, manufacturing, logistics, and medical management.',
    iconName: 'Monitor',
    category: 'engineering',
    image: '/assets/generated/Cinematic Developer Workspace with Dual Monitors.png',
    problem:
      'Web-only apps fail when internet connections drop, and cannot easily interface with thermal receipt printers, cash drawers, or barcode scanners.',
    solution:
      'Our desktop systems operate offline with local embedded databases, auto-reconnecting sync engines, and driver integrations for retail hardware.',
    process: [
      { step: '01', title: 'Hardware Protocol Audit', description: 'Testing ESC/POS receipt printers, COM/USB barcode scanners, and weighing peripherals.' },
      { step: '02', title: 'Local Architecture', description: 'Designing high-speed SQLite/IndexedDB offline data storage and transaction queues.' },
      { step: '03', title: 'Application Build', description: 'Developing desktop UI with Electron, Node native add-ons, or lightweight C++ wrappers.' },
      { step: '04', title: 'Installer Packaging', description: 'Building signed Windows MSI/EXE and macOS DMG installers with auto-update channels.' },
    ],
    deliverables: [
      'Signed desktop installer packages (Windows & macOS)',
      'Direct thermal printer and serial scanner drivers',
      'Automated background delta sync engine',
      'Local database backup and restore utility',
    ],
    technologies: ['Electron', 'Node.js', 'SQLite', 'C++', 'ESC/POS', 'TypeScript'],
    faqs: [
      {
        question: 'Will the software continue processing sales if the internet goes down completely?',
        answer: 'Absolutely. All sales, inventory changes, and receipts continue running locally. When internet connectivity resumes, the system safely synchronizes pending records.',
      },
    ],
    featured: true,
  },
  {
    id: 'ai-agents',
    slug: 'ai-agents',
    title: 'Artificial Intelligence & AI Agents',
    tagline: 'Autonomous AI agents that execute complex multi-step workflows with precision.',
    shortDescription:
      'Custom LLM orchestration, autonomous agent systems, RAG data pipelines, and decision-making workflows that eliminate repetitive cognitive labor.',
    fullDescription:
      'We engineer production-grade AI agent systems capable of searching enterprise databases, reasoning across unstructured documents, invoking internal APIs, and executing multi-step business decisions with human-in-the-loop safeguards.',
    iconName: 'BrainCircuit',
    category: 'ai',
    image: '/assets/generated/Applied AI Workspace with RAG Workflow.png',
    problem:
      'Off-the-shelf chatbots produce hallucinations, lack internal data access, and cannot execute concrete database actions or multi-step operations.',
    solution:
      'We build domain-specific autonomous agent architectures using LangChain, LlamaIndex, vector databases (Pinecone/pgvector), and deterministic tool-calling frameworks.',
    process: [
      { step: '01', title: 'Knowledge Vectorization', description: 'Ingesting enterprise PDFs, databases, and logs into high-dimensional vector embeddings.' },
      { step: '02', title: 'Agent Graph Architecture', description: 'Configuring multi-agent state machines with distinct roles, critique loops, and tool bindings.' },
      { step: '03', title: 'Guardrails & Verification', description: 'Implementing strict prompt firewalls, schema validations, and hallucination checks.' },
      { step: '04', title: 'Production Deployment', description: 'Scaling LLM inference with response streaming and token usage cost telemetry.' },
    ],
    deliverables: [
      'Custom AI Agent pipeline with deterministic tool execution',
      'Enterprise vector search & RAG ingestion subsystem',
      'Monitoring dashboard for token costs, latency, and agent reasoning traces',
      'API endpoints and web embedding interfaces',
    ],
    technologies: ['Python', 'LangChain', 'OpenAI / Claude API', 'pgvector', 'Pinecone', 'FastAPI', 'Redis'],
    faqs: [
      {
        question: 'How do you prevent the AI agent from making incorrect decisions or hallucinations?',
        answer: 'We enforce strict schema validation (Pydantic/Zod), ground all answers strictly in retrieved source vectors, and require human approval thresholds for sensitive irreversible actions.',
      },
    ],
    featured: true,
  },
  {
    id: 'ai-chatbots',
    slug: 'ai-chatbots',
    title: 'AI Chatbots',
    tagline: 'Context-aware conversational assistants trained strictly on your proprietary data.',
    shortDescription:
      '24/7 automated customer support, lead qualification, and intelligent self-service conversational bots integrated directly into your web portals.',
    fullDescription:
      'Deploy intelligent conversational assistants that resolve up to 75% of incoming customer inquiries instantly. We train custom support bots on your documentation, order systems, and knowledge bases to handle tracking, booking, troubleshooting, and qualification.',
    iconName: 'MessageSquareCode',
    category: 'ai',
    image: '/assets/generated/AI Workflow Command Center.png',
    problem:
      'Human customer support teams are overwhelmed with repetitive FAQs, leading to slow response times, lost leads, and high staffing costs.',
    solution:
      'Our custom AI chatbots provide instant, empathetic, accurate answers 24/7 with seamless escalation to human team members when necessary.',
    process: [
      { step: '01', title: 'Knowledge Extraction', description: 'Aggregating FAQs, return policies, product manuals, and past support tickets.' },
      { step: '02', title: 'Tone & Persona Tuning', description: 'Configuring bot persona to mirror your brand voice precisely.' },
      { step: '03', title: 'Live System Integration', description: 'Connecting bot to CRM, Shopify, or SQL database for real-time order lookups.' },
      { step: '04', title: 'Analytics & Continuous Training', description: 'Logging conversation outcomes to continually improve response precision.' },
    ],
    deliverables: [
      'Custom web chat widget with theme synchronization',
      'CRM & ticketing system integration (Zendesk, Freshdesk, custom CRM)',
      'Real-time analytics dashboard tracking resolution rates',
    ],
    technologies: ['React', 'Next.js', 'FastAPI', 'OpenAI', 'Pinecone', 'WebSockets'],
    faqs: [
      {
        question: 'Can the chatbot look up actual customer order numbers from our database?',
        answer: 'Yes. Through secure API function calling, the bot verifies customer credentials and fetches real-time order statuses, shipping updates, and billing balances.',
      },
    ],
    featured: false,
  },
  {
    id: 'whatsapp-automation',
    slug: 'whatsapp-automation',
    title: 'WhatsApp Business Automation',
    tagline: 'Automated sales pipelines, order tracking, and customer journeys over WhatsApp.',
    shortDescription:
      'Official WhatsApp Cloud API integrations for automated order confirmation, payment reminders, catalog browsing, and instant customer service.',
    fullDescription:
      'Harness the world’s most dominant messaging app as your highest-converting sales and support channel. We implement official Meta WhatsApp Cloud API workflows that automatically confirm orders, dispatch shipping notifications, recover abandoned carts, and close inbound leads.',
    iconName: 'PhoneCall',
    category: 'ai',
    image: '/assets/generated/Automated Messaging Workspace.png',
    problem:
      'Manual WhatsApp customer messaging is chaotic, untracked, slow, and impossible to scale as order volumes exceed a few dozen per day.',
    solution:
      'We link your ecommerce, ERP, or CRM directly to the WhatsApp Business API for instant automated triggers, interactive buttons, and multi-agent team inboxes.',
    process: [
      { step: '01', title: 'Meta Business Verification', description: 'Registering phone numbers and securing Meta green-tick verification approval.' },
      { step: '02', title: 'Message Template Design', description: 'Authoring high-conversion interactive message templates approved by Meta.' },
      { step: '03', title: 'Webhook & ERP Sync', description: 'Wiring webhook triggers to automate order confirmations, invoices, and dispatch alerts.' },
      { step: '04', title: 'Team Inbox Setup', description: 'Configuring shared multi-agent inboxes with automated routing and auto-responders.' },
    ],
    deliverables: [
      'Verified WhatsApp Cloud API integration',
      'Automated transaction notification webhooks',
      'Interactive chat flows with quick-reply buttons and list menus',
      'Unified multi-agent support dashboard',
    ],
    technologies: ['WhatsApp Cloud API', 'Meta Graph API', 'Node.js', 'Webhooks', 'Redis'],
    faqs: [
      {
        question: 'Is this using official WhatsApp APIs or unofficial risky scrapers?',
        answer: 'We only use the official Meta WhatsApp Cloud API, ensuring 100% legal compliance, zero risk of phone number bans, and guaranteed delivery rates.',
      },
    ],
    featured: true,
  },
  {
    id: 'cloud-engineering',
    slug: 'cloud-engineering',
    title: 'Cloud Engineering — AWS / GCP',
    tagline: 'Resilient, high-availability cloud infrastructure built with Terraform and IaC.',
    shortDescription:
      'Architecting, deploying, and managing secure, cost-optimized cloud environments on Amazon Web Services and Google Cloud Platform.',
    fullDescription:
      'We engineer fault-tolerant, auto-scaling cloud architectures that ensure your applications survive traffic surges and hardware disruptions without downtime. Everything is codified through Infrastructure-as-Code (Terraform) for reproducibility and auditability.',
    iconName: 'Cloud',
    category: 'cloud',
    image: '/assets/generated/Cloud Architecture Workspace Blueprint.png',
    problem:
      'Unstructured cloud setups lead to catastrophic unexpected outages, runaway monthly server bills, and security vulnerabilities due to misconfigured permissions.',
    solution:
      'We architect multi-AZ VPC networks, containerized clusters, automated database failovers, and rigorous IAM policies that slash operational costs while bolstering uptime.',
    process: [
      { step: '01', title: 'Cloud Well-Architected Review', description: 'Evaluating current infrastructure across security, reliability, performance, and cost.' },
      { step: '02', title: 'Terraform IaC Blueprinting', description: 'Declaring all VPCs, subnets, clusters, and databases in declarative code.' },
      { step: '03', title: 'Zero-Downtime Migration', description: 'Transferring data and workloads with DNS-level gradual traffic cutovers.' },
      { step: '04', title: 'Observability & Alerting', description: 'Configuring Prometheus, Grafana, and CloudWatch metrics with PagerDuty alerts.' },
    ],
    deliverables: [
      'Complete Terraform infrastructure codebase',
      'Secure VPC with private subnets, NAT gateways, and load balancers',
      'Automated multi-region backups and disaster recovery runbooks',
      'Cloud spending telemetry dashboard with cost-reduction policies',
    ],
    technologies: ['AWS (ECS, EKS, RDS, S3, CloudFront)', 'Google Cloud (GKE, Cloud Run)', 'Terraform', 'Docker'],
    faqs: [
      {
        question: 'Can you help us reduce our existing AWS or GCP cloud spending?',
        answer: 'Yes. Our cloud audits routinely achieve 25% to 50% monthly cost reductions by rightsizing instances, eliminating orphan storage, and implementing automated scaling rules.',
      },
    ],
    featured: true,
  },
  {
    id: 'devops-devsecops',
    slug: 'devops-devsecops',
    title: 'DevOps and DevSecOps',
    tagline: 'Automated CI/CD pipelines with integrated static code analysis and security scans.',
    shortDescription:
      'Streamline code deployment from minutes to seconds with Docker, Kubernetes, GitHub Actions, and automated vulnerability scanning at every commit.',
    fullDescription:
      'We bridge software engineering and operations into an automated, unbreakable pipeline. We containerize applications with Docker, orchestrate deployments with Kubernetes, and embed vulnerability scanning, secret detection, and compliance testing directly into git pull requests.',
    iconName: 'ShieldCheck',
    category: 'cloud',
    image: '/assets/generated/Cinematic CI_CD Workspace Dashboard.png',
    problem:
      'Manual server updates, broken release weekends, leaked credentials in repositories, and vulnerable third-party dependencies trigger major business downtime.',
    solution:
      'We establish zero-touch continuous deployment where passing automated tests and security gates automatically ships code to production in minutes.',
    process: [
      { step: '01', title: 'Containerization', description: 'Creating minimal, multi-stage Dockerfiles with unprivileged user sandboxes.' },
      { step: '02', title: 'Pipeline Automation', description: 'Writing GitHub Actions / GitLab CI workflows for linting, testing, and building.' },
      { step: '03', title: 'Security Gates (DevSecOps)', description: 'Embedding Trivy, SonarQube, and Gitleaks scanning into pull request reviews.' },
      { step: '04', title: 'Kubernetes GitOps', description: 'Deploying with ArgoCD for automated declarative cluster state synchronization.' },
    ],
    deliverables: [
      'Optimized multi-stage Dockerfiles',
      'Automated GitHub Actions CI/CD workflows',
      'Vulnerability scanning & container image signing',
      'Kubernetes Helm charts and manifest repository',
    ],
    technologies: ['Docker', 'Kubernetes', 'GitHub Actions', 'ArgoCD', 'Trivy', 'SonarQube', 'Linux'],
    faqs: [
      {
        question: 'What is the practical difference between DevOps and DevSecOps?',
        answer: 'DevSecOps shifts security left — instead of testing for vulnerabilities right before or after deployment, security scans (secrets, dependencies, SAST) run automatically on every single developer commit.',
      },
    ],
    featured: true,
  },
  {
    id: 'ui-ux-design',
    slug: 'ui-ux-design',
    title: 'UI/UX and Graphic Design',
    tagline: 'Minimalist, architectural digital design engineered for high conversion.',
    shortDescription:
      'Design systems, user research, wireframing, high-fidelity Figma prototypes, and complete brand asset suites that establish instant authority.',
    fullDescription:
      'Great design is not superficial decoration; it is functional clarity. We design cohesive digital interfaces that guide users effortlessly through complex enterprise workflows. Every component, typography choice, and spatial layout adheres to a rigorous design system.',
    iconName: 'Palette',
    category: 'design',
    image: '/assets/generated/Minimalist UX Design Workstation.png',
    problem:
      'Cluttered, amateur interfaces confuse customers, elevate drop-off rates on checkout, and undermine the credibility of otherwise capable tech companies.',
    solution:
      'We create minimalist, architectural design systems that make complex technological tools feel effortless, intuitive, and unmistakably premium.',
    process: [
      { step: '01', title: 'User Research & Journey Mapping', description: 'Identifying key personas, task flows, and cognitive load hurdles.' },
      { step: '02', title: 'Wireframing & Information Architecture', description: 'Structuring screens for maximum visual hierarchy and speed.' },
      { step: '03', title: 'High-Fidelity Design System', description: 'Crafting Figma token libraries, accessible color palettes, and components.' },
      { step: '04', title: 'Developer Handoff', description: 'Providing exact spacing tokens, responsive variants, and animation specs.' },
    ],
    deliverables: [
      'Comprehensive Figma component library & design system',
      'Interactive clickable prototype for testing and investor demos',
      'Responsive mobile, tablet, and desktop layout files',
      'Vector icon sets and brand asset package',
    ],
    technologies: ['Figma', 'FigJam', 'Tokens Studio', 'Framer', 'Adobe Suite'],
    faqs: [
      {
        question: 'Do you provide ready-to-code design specs for our development team?',
        answer: 'Yes, our Figma files include auto-layout tokens, responsive constraints, hover/active states, and direct CSS variable annotations for seamless developer handoff.',
      },
    ],
    featured: false,
  },
  {
    id: 'social-media-management',
    slug: 'social-media-management',
    title: 'Social Media Management',
    tagline: 'Technical thought leadership and strategic brand presence across social platforms.',
    shortDescription:
      'Data-driven social content, technical infographics, developer marketing, and strategic B2B audience engagement across LinkedIn and X/Twitter.',
    fullDescription:
      'We turn technical capabilities into compelling digital presence. Our team produces structured technical articles, architecture infographics, software feature highlights, and strategic community engagement that builds authority and generates high-ticket B2B inquiries.',
    iconName: 'Share2',
    category: 'growth',
    image: '/assets/generated/Modern Content Planning Workspace.png',
    problem:
      'Most tech companies either post generic motivational quotes or remain silent, missing out on direct talent acquisition and corporate client inquiries.',
    solution:
      'We curate authoritative technical content that showcases your real engineering achievements, product milestones, and client wins to key decision-makers.',
    process: [
      { step: '01', title: 'Brand Narrative Strategy', description: 'Defining content pillars around engineering, product innovation, and case studies.' },
      { step: '02', title: 'Asset Production', description: 'Designing clean visual carousels, architecture diagrams, and video snippets.' },
      { step: '03', title: 'Editorial Scheduling', description: 'Consistent multi-channel publication optimized for executive audience timezones.' },
      { step: '04', title: 'Lead Inbound Tracking', description: 'Monitoring engagement, connection inquiries, and inbound contract requests.' },
    ],
    deliverables: [
      'Monthly editorial calendar and visual content pipeline',
      'Architectural diagrams and branded graphic templates',
      'Targeted LinkedIn executive profile optimization',
      'Monthly performance and conversion reports',
    ],
    technologies: ['LinkedIn Campaign Manager', 'Buffer / Notion', 'Figma', 'Canva'],
    faqs: [
      {
        question: 'Can you handle technical content for a specialized B2B software audience?',
        answer: 'Yes. Because our roots are in software engineering and cloud systems, our content writers actually understand software architecture, APIs, and DevOps.',
      },
    ],
    featured: false,
  },
  {
    id: 'seo-geo',
    slug: 'seo-geo',
    title: 'SEO & Generative Engine Optimization',
    tagline: 'Dominate traditional search engines and emerging AI citation models.',
    shortDescription:
      'Technical SEO, Schema markup, programmatic content, and Generative Engine Optimization (GEO) to ensure your brand is cited by ChatGPT, Perplexity, and Google AI.',
    fullDescription:
      'Search has evolved beyond ten blue links. Modern buyers discover solutions via AI engines like Perplexity, ChatGPT Search, and Google Gemini. We optimize your website both for traditional technical SEO ranking and for direct citation in AI-generated answers through structured semantic data.',
    iconName: 'Search',
    category: 'growth',
    image: '/assets/generated/SEO Analytics Workspace Dashboard.png',
    problem:
      'Traditional SEO ignores AI search models. If ChatGPT or Perplexity cannot comprehend your authority, you become invisible to modern buyers.',
    solution:
      'We implement deep structured JSON-LD entity data, semantic content clustering, and technical performance fixes that get your studio indexed and recommended by AI models.',
    process: [
      { step: '01', title: 'Technical SEO Health Audit', description: 'Crawling site for indexing blockers, broken canonicals, and Core Web Vitals.' },
      { step: '02', title: 'Entity & Schema Architecture', description: 'Injecting comprehensive Organization, Service, and Product JSON-LD schemas.' },
      { step: '03', title: 'Generative Engine Tuning (GEO)', description: 'Structuring factual summaries, direct answer tables, and citation anchors.' },
      { step: '04', title: 'Rank & Citation Telemetry', description: 'Tracking traditional keyword rankings and AI citation appearances.' },
    ],
    deliverables: [
      'Full technical SEO audit and resolution implementation',
      'Structured JSON-LD entity markup on all routes',
      'XML sitemap and optimized robots.txt directives',
      'GEO content optimization strategy report',
    ],
    technologies: ['Google Search Console', 'Ahrefs', 'Screaming Frog', 'Schema.org', 'JSON-LD'],
    faqs: [
      {
        question: 'What is Generative Engine Optimization (GEO)?',
        answer: 'GEO is the practice of structuring digital content so that large language models (like ChatGPT, Perplexity, and Claude) cite and recommend your brand when users ask for service recommendations.',
      },
    ],
    featured: true,
  },
  {
    id: 'business-process-automation',
    slug: 'business-process-automation',
    title: 'Business Process Automation',
    tagline: 'Eliminate manual data entry by connecting your ERP, CRM, and accounting.',
    shortDescription:
      'Custom webhook integrations, background ETL jobs, automated invoicing, and paperless operational workflows that save hundreds of labor hours monthly.',
    fullDescription:
      'Stop paying skilled employees to copy data between spreadsheets and isolated software. We engineer automated integration pipelines that sync your POS, ecommerce sales, accounting ledger, and courier dispatches into one seamless, error-free operational engine.',
    iconName: 'Workflow',
    category: 'engineering',
    image: '/assets/generated/Cozy Automation Workflow Workspace.png',
    problem:
      'Siloed software stacks force staff into manual copy-pasting, causing reconciliation errors, duplicate entries, delayed shipments, and massive labor waste.',
    solution:
      'We link all your business tools with reliable, event-driven webhooks, automated data transformations, and instant discrepancy alerts.',
    process: [
      { step: '01', title: 'Workflow Mapping', description: 'Documenting every touchpoint from customer inquiry to ledger reconciliation.' },
      { step: '02', title: 'Integration Architecture', description: 'Designing idempotent webhook handlers with retry queues and failure fallbacks.' },
      { step: '03', title: 'Automation Deployment', description: 'Connecting APIs, payment gateways, courier dispatchers, and inventory balances.' },
      { step: '04', title: 'Monitoring & Logs', description: 'Setting up automated Slack/WhatsApp alerts for any sync anomalies.' },
    ],
    deliverables: [
      'Automated bidirectional sync between business apps',
      'Custom webhook listener microservices with retry logic',
      'Audit log and transaction reconciliation dashboard',
    ],
    technologies: ['Node.js', 'Python', 'Webhooks', 'Zapier / n8n', 'PostgreSQL', 'REST APIs'],
    faqs: [
      {
        question: 'Can you integrate legacy software that does not have a modern cloud API?',
        answer: 'Yes. We build lightweight database connectors or local desktop daemons that safely interface directly with local SQL databases or export queues.',
      },
    ],
    featured: false,
  },
];
