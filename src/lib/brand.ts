/**
 * AREVEX TECH STUDIO — Official Brand Registry & Palette
 * 
 * Strict Brand Guidelines:
 * Never regenerate, recolor, redraw, distort or replace the original logo or monogram.
 * Use the appropriate variant automatically based on theme and viewport context.
 */

export const BRAND_COLORS = {
  charcoal: '#0F1114',
  deepGraphite: '#2A2F36',
  mutedSlateBlue: '#64768B',
  warmWhite: '#F7F7F5',
  surfaceDark: '#14171C',
  borderDark: '#232830',
  borderLight: '#E5E7EB',
  surfaceLight: '#FFFFFF',
} as const;

export const BRAND_ASSETS = {
  // Official Logos - configured for optimal contrast across themes
  horizontal: {
    // For Dark Theme (dark background): Use official uploaded logo
    forDarkTheme: '/assets/branding/arevex-tech-studio-logo-dark.png',
    // For Light Theme (light background): Use charcoal/black transparent logo
    forLightTheme: '/assets/branding/logo-horizontal-transparent.png',
    
    // Backwards-compatible aliases
    dark: '/assets/branding/arevex-tech-studio-logo-dark.png',
    light: '/assets/branding/logo-horizontal-transparent.png',
    transparentDark: '/assets/branding/arevex-tech-studio-logo-dark.png',
    transparentLight: '/assets/branding/logo-horizontal-transparent.png',
    officialUpload: '/assets/branding/AREVEX Tech Studio Logo.png',
  },
  vertical: {
    dark: '/assets/branding/logo-vertical-light.png',
    light: '/assets/branding/logo-vertical-dark.png',
    transparent: '/assets/branding/logo-vertical-transparent.png',
  },
  monogram: {
    // For Dark Theme: Use warm-white monogram
    forDarkTheme: '/assets/branding/monogram-transparent-light.png',
    // For Light Theme: Use charcoal/black monogram
    forLightTheme: '/assets/branding/monogram-transparent.png',

    // Backwards-compatible aliases
    dark: '/assets/branding/monogram-transparent-light.png',
    light: '/assets/branding/monogram-transparent.png',
    transparent: '/assets/branding/monogram-transparent-light.png',
  },
  mark: {
    darkBg: '/assets/branding/logo-dark-bg.png',
    lightBg: '/assets/branding/logo-light-bg.png',
    transparentForDark: '/assets/branding/logo-transparent-dark-mode.png',
    transparentForLight: '/assets/branding/logo-transparent-light-mode.png',
  },
  // Generated artwork paths
  generated: {
    heroCinema: '/assets/generated/hero-cinema.png',
    serviceAi: '/assets/generated/service-ai.png',
    serviceCloud: '/assets/generated/service-cloud.png',
    serviceSoftware: '/assets/generated/service-software.png',
    productsBusiness: '/assets/generated/products-business.png',
    productsMobile: '/assets/generated/products-mobile.png',
    academyHero: '/assets/generated/academy-hero.png',
    aboutStudio: '/assets/generated/about-studio.png',
    ogBanner: '/assets/generated/og-banner.png',
    posTerminal: '/assets/generated/pos-terminal.png',
    cicdPipeline: '/assets/generated/cicd-pipeline.png',
    inventoryWarehouse: '/assets/generated/inventory-warehouse.png',
    clinicEmr: '/assets/generated/clinic-emr.png',
    internshipStudio: '/assets/generated/internship-studio.png',
    projectGoCart: '/assets/generated/project-gocart.png',

    // Commercial Products
    productSchool: '/assets/generated/product-school.png',
    productLms: '/assets/generated/product-lms.png',
    productAttendance: '/assets/generated/product-attendance.png',
    productRestaurant: '/assets/generated/product-restaurant.png',
    productLibrary: '/assets/generated/product-library.png',
    productOffice: '/assets/generated/product-office.png',
    productBilling: '/assets/generated/product-billing.png',

    // Studio Services & Capabilities
    serviceWhatsapp: '/assets/generated/service-whatsapp.png',
    serviceWebDev: '/assets/generated/service-web-dev.png',
    serviceMobileApp: '/assets/generated/service-mobile-app.png',
    serviceDesktop: '/assets/generated/service-desktop.png',
    serviceAiAgents: '/assets/generated/service-ai-agents.png',
    serviceAiChatbots: '/assets/generated/service-ai-chatbots.png',
    serviceCloudAws: '/assets/generated/service-cloud-aws.png',
    serviceUiux: '/assets/generated/service-uiux.png',
    serviceSocial: '/assets/generated/service-social.png',
    serviceSeoGeo: '/assets/generated/service-seo-geo.png',
    serviceAutomation: '/assets/generated/service-automation.png',

    // Academy Courses
    courseAi: '/assets/generated/course-ai.png',
    courseWeb: '/assets/generated/course-web.png',
    courseMobile: '/assets/generated/course-mobile.png',
    courseDevops: '/assets/generated/course-devops.png',
    courseCloud: '/assets/generated/course-cloud.png',
    courseLinux: '/assets/generated/course-linux.png',
    courseNetworking: '/assets/generated/course-networking.png',
    courseGit: '/assets/generated/course-git.png',
    courseManagement: '/assets/generated/course-management.png',
  },
} as const;

export const COMPANY_INFO = {
  name: 'AREVEX TECH STUDIO',
  shortName: 'AREVEX',
  tagline: "We Build What's Next.",
  subheadline:
    'Intelligent software, meaningful digital experiences, and reliable cloud infrastructure — designed, engineered and delivered by Arevex Tech Studio.',
  introStatement: 'Technology built around real possibilities.',
  founders: [
    {
      name: 'Muhammad Rayyan',
      role: 'Co-Founder & Principal Systems Architect',
      focus: 'Distributed Systems, POS Hardware Engineering & Cloud Architecture',
      bio: 'Leading technical strategy and low-level hardware-synchronized architectures across retail POS, multi-branch attendance, and cloud infrastructure.',
      github: 'https://github.com/arevex',
      linkedin: 'https://linkedin.com',
    },
    {
      name: 'Muhammad Uzair',
      role: 'Co-Founder & Head of Product Engineering',
      formerCompany: 'Ex-Amazon',
      focus: 'Full-Stack Next.js Systems, Desktop Electron & Enterprise MIS',
      bio: 'Directing full-stack web and desktop product lifecycles. Formerly a Software Development Engineer at Amazon, bringing high-scale distributed architectural discipline, zero-latency state machines, and enterprise reliability to Arevex client codebases.',
      github: 'https://github.com/arevex',
      linkedin: 'https://linkedin.com',
    },
    {
      name: 'Aqsa Wadood',
      role: 'Co-Founder & Lead AI Research Architect',
      focus: 'Autonomous AI Agents, Multi-Agent Graphs & RAG Vector Systems',
      bio: 'Spearheading intelligent workflow automation, generative search engines (GEO), and production-grade LLM tool orchestration with deterministic safeguards.',
      github: 'https://github.com/arevex',
      linkedin: 'https://linkedin.com',
    },
  ],
  locations: {
    primary: 'Pakistan',
    serviceReach: 'International Clients & Regional Enterprises',
  },
  contact: {
    email: 'contact@arevex.tech',
    supportEmail: 'support@arevex.tech',
    phone: '+92 (300) 000-0000',
  },
  socials: {
    x: 'https://x.com/arevextech',
    twitter: 'https://x.com/arevextech',
    facebook: 'https://facebook.com/arevextech',
    instagram: 'https://instagram.com/arevextech',
    tiktok: 'https://tiktok.com/@arevextech',
    github: 'https://github.com/arevex',
    linkedin: 'https://linkedin.com/company/arevex',
    whatsapp: 'https://wa.me/923000000000?text=Hello%20Arevex%20Tech%20Studio%2C%20I%20would%20like%20to%20discuss%20a%20project',
  },
  metrics: [
    { label: 'System Uptime Guarantee', value: '99.98%' },
    { label: 'Edge Query Latency', value: '<45ms' },
    { label: 'Active Commercial Products', value: '10+' },
    { label: 'Core Technical Capabilities', value: '12' },
    { label: 'Academy Cohorts', value: '9' },
    { label: 'Zero-Downtime Deployments', value: '100%' },
  ],
  workingPractices: [
    {
      title: 'Practical Engineering',
      desc: 'No unnecessary abstraction. We build battle-tested, maintainable systems focused on business impact and durability.',
    },
    {
      title: 'Design-Minded Execution',
      desc: 'Architectural precision meets refined interaction. Every layout, transition, and control is crafted for clarity.',
    },
    {
      title: 'Product-Focused Thinking',
      desc: 'We treat every system like a living commercial product with clear workflows, responsive states, and operational resilience.',
    },
    {
      title: 'Security-Conscious Development',
      desc: 'DevSecOps by default. Automated vulnerability scanning, credential isolation, and least-privilege cloud architecture.',
    },
    {
      title: 'Clear Communication',
      desc: 'Direct, honest collaboration without agency jargon or misleading project timelines.',
    },
    {
      title: 'Long-Term Maintainability',
      desc: 'Clean codebases, complete documentation, and reproducible deployments that your internal team can proudly maintain.',
    },
  ],
  developmentPhilosophy: [
    {
      step: '01',
      title: 'Discover',
      description: 'Deep technical analysis of operational bottlenecks, system constraints, user workflows, and core business goals.',
    },
    {
      step: '02',
      title: 'Design',
      description: 'Architectural modeling, database schema specification, wireframing, and interactive UI prototypes in high fidelity.',
    },
    {
      step: '03',
      title: 'Engineer',
      description: 'Production-grade software engineering, type-safe APIs, automated CI/CD pipelines, and clean modular codebases.',
    },
    {
      step: '04',
      title: 'Validate',
      description: 'Rigorous unit, integration, and security stress tests across devices, operating systems, and network conditions.',
    },
    {
      step: '05',
      title: 'Launch',
      description: 'Zero-downtime deployment, infrastructure provisioning on AWS/GCP, automated DNS, and continuous telemetry monitoring.',
    },
    {
      step: '06',
      title: 'Improve',
      description: 'Performance benchmarking, generative AI enhancement, automated bug tracking, and progressive roadmap evolution.',
    },
  ],
} as const;
