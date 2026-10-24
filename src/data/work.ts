import { ProjectItem } from '@/types';

export const WORK_DATA: ProjectItem[] = [
  {
    id: 'ai-customer-intelligence',
    slug: 'ai-customer-intelligence',
    title: 'AI Customer Support & Business Intelligence Platform',
    clientType: 'Internal Product Showcase',
    category: 'AI & Data Engineering',
    year: '2026',
    summary:
      'An enterprise multi-agent intelligence platform that automates customer support ticket resolution while extracting real-time business sentiment and trends from conversations.',
    challenge:
      'Enterprise customer service teams juggle thousands of daily conversations across channels without centralized operational intelligence or automated resolution capabilities.',
    solution:
      'Engineered a multi-tenant agent platform utilizing vector embeddings for instant policy search, automated API-driven resolution, and executive analytical dashboards.',
    architecture:
      'Next.js 15 client connected via WebSockets to a FastAPI agent runtime backed by pgvector, Redis message queues, and encrypted PostgreSQL storage.',
    technologies: ['Next.js', 'TypeScript', 'FastAPI', 'Python', 'pgvector', 'PostgreSQL', 'Docker'],
    keyHighlights: [
      'Multi-agent collaborative reasoning pipeline',
      'Real-time semantic vector retrieval under 80ms',
      'Automated customer sentiment and topic clustering',
      'Interactive executive analytics dashboard',
    ],
    isInternalShowcase: true,
    featured: true,
  },
  {
    id: 'cloud-devsecops-pipeline',
    slug: 'cloud-devsecops-pipeline',
    title: 'AWS DevSecOps Automated Vulnerability Scanning Pipeline',
    clientType: 'Cloud Infrastructure Demonstration',
    category: 'Cloud & DevOps',
    year: '2026',
    summary:
      'End-to-end automated DevSecOps pipeline on AWS that scans code, dependencies, and container images for vulnerabilities before zero-downtime deployment.',
    challenge:
      'Traditional release cycles either compromise on security or slow down release velocity due to tedious manual audit bottlenecks.',
    solution:
      'Implemented automated security gates in GitHub Actions using Trivy, Gitleaks, and SonarQube, paired with Terraform-provisioned AWS ECS infrastructure.',
    architecture:
      'Git Push -> GitHub Actions CI -> Trivy Security Gate -> Amazon ECR Image Signing -> ECS Fargate Blue/Green Deployment -> CloudWatch Telemetry.',
    technologies: ['AWS ECS', 'Terraform', 'Docker', 'GitHub Actions', 'Trivy', 'SonarQube'],
    keyHighlights: [
      '100% automated vulnerability scanning at every commit',
      'Declarative Infrastructure as Code (IaC) via Terraform',
      'Zero-downtime blue/green deployment strategy',
      'Strict least-privilege IAM security isolation',
    ],
    isInternalShowcase: true,
    featured: true,
  },
  {
    id: 'gocart-ecommerce-architecture',
    slug: 'gocart-ecommerce-architecture',
    title: 'GoCart — Resilient Multi-Service Commerce Platform',
    clientType: 'Architecture Case Study',
    category: 'Full-Stack Engineering',
    year: '2026',
    summary:
      'High-throughput ecommerce system designed to handle flash sale traffic spikes through asynchronous event queues and decoupled cart/order microservices.',
    challenge:
      'Monolithic commerce platforms crumble under heavy flash sale loads when checkout database transactions lock catalog browsing.',
    solution:
      'Separated browsing, cart persistence, and payment processing into decoupled services coordinated by Redis queues and PostgreSQL replicas.',
    architecture:
      'Next.js frontend with Edge caching -> Node.js API Gateway -> Redis Session Cache -> Distributed Order Processing Queue -> PostgreSQL.',
    technologies: ['Next.js', 'React', 'Node.js', 'Redis', 'PostgreSQL', 'Docker', 'Kubernetes'],
    keyHighlights: [
      'Sub-50ms catalog response times via edge caching',
      'Zero inventory overselling guarantees during traffic surges',
      'Responsive mobile-first checkout workflow',
      'Fully containerized local-to-cloud reproducibility',
    ],
    isInternalShowcase: true,
    featured: true,
  },
  {
    id: 'blood-bank-management',
    slug: 'blood-bank-management',
    title: 'PulseLink — Critical Blood Bank & Donor Network',
    clientType: 'Healthcare Technology Demonstration',
    category: 'Web & Operations',
    year: '2025',
    summary:
      'Real-time blood component inventory and emergency donor matching system designed to eliminate life-critical delays in hospital transfusions.',
    challenge:
      'Hospitals and regional blood banks rely on fragmented phone trees and manual registers to locate rare blood units during emergency surgeries.',
    solution:
      'Developed a centralized web portal with real-time blood group inventory tracking, donor eligibility verification, and urgent SMS broadcasting.',
    architecture:
      'React frontend with instant filtering, Node.js REST API with role-based access control, and encrypted patient/donor relational database.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB / PostgreSQL', 'Tailwind CSS'],
    keyHighlights: [
      'Instant blood group availability lookups across regional centers',
      'Automated donor cooldown tracking (56-day safety rule)',
      'Emergency geo-targeted donor alert notifications',
      'Audit logs for cross-matching and issuance',
    ],
    isInternalShowcase: true,
    featured: false,
  },
  {
    id: 'devboard-developer-portal',
    slug: 'devboard-developer-portal',
    title: 'DevBoard — Multi-Cloud Engineering Orchestration Console',
    clientType: 'Internal Product Showcase',
    category: 'Cloud & Systems',
    year: '2026',
    summary:
      'A unified engineering dashboard that aggregates Kubernetes cluster health, Docker container logs, CI/CD pipeline runs, and server metrics into one screen.',
    challenge:
      'Engineers lose hours daily context-switching between AWS console, Kubernetes dashboards, CI logs, and third-party monitoring vendors.',
    solution:
      'Built a centralized single-pane-of-glass operations terminal with real-time WebSocket telemetry, container restart actions, and unified log grep.',
    architecture:
      'React dashboard communicating via authenticated WebSockets with a lightweight Golang/Node agent daemon running on cluster nodes.',
    technologies: ['React', 'TypeScript', 'Kubernetes', 'Docker', 'WebSockets', 'Tailwind CSS'],
    keyHighlights: [
      'Unified multi-cluster node telemetry',
      'Live container log streaming with regex search',
      'One-click pod restarts and deployment rollbacks',
      'Custom alert notification webhooks',
    ],
    isInternalShowcase: true,
    featured: true,
  },
  {
    id: 'ai-creative-content-studio',
    slug: 'ai-creative-content-studio',
    title: 'Arevex Content Studio — Automated Video & Media Pipelines',
    clientType: 'AI Product Concept',
    category: 'AI & Automation',
    year: '2026',
    summary:
      'Automated generative pipeline for producing high-converting e-commerce product videos, UGC-style demonstrations, and social shorts.',
    challenge:
      'High video production costs and long turnaround times prevent digital brands from rapidly testing creative hooks and visual angles.',
    solution:
      'Constructed a programmatic media composition engine combining generative scriptwriting, voice synthesis, dynamic captions, and product render overlays.',
    architecture:
      'Python media pipeline leveraging FFmpeg, voice synthesis APIs, and automated composition templates executed on GPU worker queues.',
    technologies: ['Python', 'FFmpeg', 'Generative AI APIs', 'FastAPI', 'Node.js'],
    keyHighlights: [
      'Automated multi-variant video generation from product URLs',
      'Dynamic typography overlays and audio waveforms',
      'High-throughput batch rendering pipeline',
      'Direct social media scheduling export',
    ],
    isInternalShowcase: true,
    featured: false,
  },
];
