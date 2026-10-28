/**
 * ARAVEX TECH STUDIO — Official Brand Registry & Palette
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
    // For Dark Theme (dark background): Use official transparent logo
    forDarkTheme: '/assets/branding/ARAVEX_Full_Logo_Dark_Mode_Transparent.png',
    // For Light Theme (light background): Use charcoal transparent logo
    forLightTheme: '/assets/branding/ARAVEX_Full_Logo_Light_Mode_Transparent.png',
    withBgDark: '/assets/branding/ARAVEX_Full_Logo_Dark_Mode_With_Background.png',
    withBgLight: '/assets/branding/ARAVEX_Full_Logo_Light_Mode_With_Background.png',
    
    // Backwards-compatible aliases
    dark: '/assets/branding/ARAVEX_Full_Logo_Dark_Mode_Transparent.png',
    light: '/assets/branding/ARAVEX_Full_Logo_Light_Mode_Transparent.png',
    transparentDark: '/assets/branding/ARAVEX_Full_Logo_Dark_Mode_Transparent.png',
    transparentLight: '/assets/branding/ARAVEX_Full_Logo_Light_Mode_Transparent.png',
    officialUpload: '/assets/branding/ARAVEX_Full_Logo_Dark_Mode_With_Background.png',
  },
  vertical: {
    dark: '/assets/branding/ARAVEX_Full_Logo_Dark_Mode_With_Background.png',
    light: '/assets/branding/ARAVEX_Full_Logo_Light_Mode_With_Background.png',
    transparent: '/assets/branding/ARAVEX_Full_Logo_Dark_Mode_Transparent.png',
  },
  monogram: {
    // For Dark Theme: Use off-white monogram
    forDarkTheme: '/assets/branding/ARAVEX_Monogram_Dark_Mode_Transparent.png',
    // For Light Theme: Use charcoal monogram
    forLightTheme: '/assets/branding/ARAVEX_Monogram_Light_Mode_Transparent.png',
    withBgDark: '/assets/branding/ARAVEX_Monogram_Dark_Mode_With_Background.png',
    withBgLight: '/assets/branding/ARAVEX_Monogram_Light_Mode_With_Background.png',

    // Backwards-compatible aliases
    dark: '/assets/branding/ARAVEX_Monogram_Dark_Mode_Transparent.png',
    light: '/assets/branding/ARAVEX_Monogram_Light_Mode_Transparent.png',
    transparent: '/assets/branding/ARAVEX_Monogram_Dark_Mode_Transparent.png',
  },
  mark: {
    darkBg: '/assets/branding/ARAVEX_Full_Logo_Dark_Mode_With_Background.png',
    lightBg: '/assets/branding/ARAVEX_Full_Logo_Light_Mode_With_Background.png',
    transparentForDark: '/assets/branding/ARAVEX_Full_Logo_Dark_Mode_Transparent.png',
    transparentForLight: '/assets/branding/ARAVEX_Full_Logo_Light_Mode_Transparent.png',
  },
  // Generated artwork paths
  generated: {
    heroCinema: '/assets/generated/hero-cinema.png',
    serviceAi: '/assets/generated/service-ai.png',
    serviceCloud: '/assets/generated/service-cloud.png',
    serviceSoftware: '/assets/generated/service-software.png',
    productsBusiness: '/assets/generated/products-business.png',
    productsMobile: '/assets/generated/products-mobile.png',
    trainingHero: '/assets/generated/academy-hero.png',
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

    // Technology Training Courses
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
  name: 'ARAVEX TECH STUDIO',
  shortName: 'ARAVEX',
  tagline: "We Build What's Next.",
  subheadline:
    'Intelligent software, meaningful digital experiences, and reliable cloud infrastructure — designed, engineered and delivered by Aravex Tech Studio.',
  introStatement: 'Technology built around real possibilities.',
  founders: [
    {
      name: 'Muhammad Rayyan',
      role: 'Co-Founder & Principal Systems Architect',
      focus: 'Distributed Systems, POS Hardware Engineering & Cloud Architecture',
      bio: 'Leading technical strategy and low-level hardware-synchronized architectures across retail POS, multi-branch attendance, and cloud infrastructure.',
      github: 'https://github.com/aravex',
      linkedin: 'https://linkedin.com',
    },
    {
      name: 'Muhammad Uzair',
      role: 'Co-Founder & Head of Product Engineering',
      formerCompany: 'Ex-Amazon',
      focus: 'Full-Stack Next.js Systems, Desktop Electron & Enterprise MIS',
      bio: 'Directing full-stack web and desktop product lifecycles. Formerly a Software Development Engineer at Amazon, bringing high-scale distributed architectural discipline, zero-latency state machines, and enterprise reliability to Aravex client codebases.',
      github: 'https://github.com/aravex',
      linkedin: 'https://linkedin.com',
    },
    {
      name: 'Aqsa Wadood',
      role: 'Co-Founder & Lead AI Research Architect',
      focus: 'Autonomous AI Agents, Multi-Agent Graphs & RAG Vector Systems',
      bio: 'Spearheading intelligent workflow automation, generative search engines (GEO), and production-grade LLM tool orchestration with deterministic safeguards.',
      github: 'https://github.com/aravex',
      linkedin: 'https://linkedin.com',
    },
  ],
  locations: {
    primary: '100% Remote, Global',
    serviceReach: 'International Clients & Regional Enterprises',
  },
  contact: {
    email: 'contact@aravex.tech',
    supportEmail: 'support@aravex.tech',

  },
  socials: {
    x: 'https://x.com/aravextech',
    twitter: 'https://x.com/aravextech',
    facebook: 'https://facebook.com/aravextech',
    instagram: 'https://instagram.com/aravextech',
    tiktok: 'https://tiktok.com/@aravextech',
    github: 'https://github.com/aravex',
    linkedin: 'https://linkedin.com/company/aravex',
    whatsapp: 'https://wa.me/923000000000?text=Hello%20Aravex%20Tech%20Studio%2C%20I%20would%20like%20to%20discuss%20a%20project',
  },
  metrics: [
    { label: 'System Uptime Guarantee', value: '99.98%' },
    { label: 'Edge Query Latency', value: '<45ms' },
    { label: 'Active Commercial Products', value: '10+' },
    { label: 'Core Technical Capabilities', value: '12' },
    { label: 'Training Cohorts', value: '9' },
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
