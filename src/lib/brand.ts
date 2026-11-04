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
    concurrencySystems: '/assets/generated/concurrency-systems.jpg',
    categoryIcons: {
      softwareEng: '/assets/generated/icons/software-eng.jpg',
      aiIntelligence: '/assets/generated/icons/ai-intelligence.jpg',
      cloudInfra: '/assets/generated/icons/cloud-infra.jpg',
      commercialProducts: '/assets/generated/icons/commercial-products.jpg',
      practicalEdu: '/assets/generated/icons/practical-edu.jpg',
    },
    serviceAi: '/assets/generated/service-ai.png',
    serviceCloud: '/assets/generated/service-cloud.png',
    serviceSoftware: '/assets/generated/service-software.png',
    productsBusiness: '/assets/generated/products-business.png',
    productsMobile: '/assets/generated/products-mobile.png',
    trainingHero: '/assets/generated/academy-hero.png',
    academyHero: '/assets/generated/academy-hero.png',
    aboutStudio: '/assets/generated/about-studio-v2.png',
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
      focus: 'Distributed Systems, POS Hardware & Cloud Architecture',
      bio: 'Directs studio systems architecture, low-level POS hardware sync, and resilient multi-region cloud backends.',
      github: 'https://github.com/Aravex-Tech-Studio',
      linkedin: 'https://www.linkedin.com/company/aravex-tech-studio/',
    },
    {
      name: 'Muhammad Uzair',
      role: 'Co-Founder & Head of Product Engineering',
      formerCompany: 'Amazon Technical Head',
      focus: 'Full-Stack Next.js, Desktop Apps & Enterprise MIS',
      bio: 'Directs full-stack product lifecycles across web and desktop. Amazon Technical Head bringing high-scale systems rigor to ARAVEX client codebases.',
      github: 'https://github.com/Aravex-Tech-Studio',
      linkedin: 'https://www.linkedin.com/company/aravex-tech-studio/',
    },
    {
      name: 'Aqsa Wadood',
      role: 'Co-Founder & Lead AI Research Architect',
      focus: 'Autonomous AI Agents, Vector RAG & Multi-Agent Graphs',
      bio: 'Leads AI systems research, autonomous multi-agent orchestration, and enterprise RAG pipelines with deterministic accuracy.',
      github: 'https://github.com/Aravex-Tech-Studio',
      linkedin: 'https://www.linkedin.com/company/aravex-tech-studio/',
    },
  ],
  locations: {
    primary: '100% Remote, Global',
    serviceReach: 'International Clients & Regional Enterprises',
  },
  contact: {
    email: 'info@aravextechstudio.com',
    supportEmail: 'info@aravextechstudio.com',
  },
  socials: {
    facebook: 'https://www.facebook.com/profile.php?id=61596224602120',
    instagram: 'https://www.instagram.com/aravextechstudio',
    github: 'https://github.com/Aravex-Tech-Studio',
    linkedin: 'https://www.linkedin.com/company/aravex-tech-studio/',
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
      desc: 'Battle-tested, maintainable systems focused on business impact, speed, and durability.',
    },
    {
      title: 'Design-Minded Execution',
      desc: 'Architectural precision meets refined interaction. Every layout and transition is crafted with intent.',
    },
    {
      title: 'Product-Focused Thinking',
      desc: 'We engineer living commercial products with responsive states and operational resilience.',
    },
    {
      title: 'Security by Default',
      desc: 'DevSecOps standards, automated vulnerability scans, and isolated credential management.',
    },
    {
      title: 'Direct Communication',
      desc: 'Honest, developer-to-developer collaboration without agency jargon or inflated timelines.',
    },
    {
      title: 'Long-Term Maintainability',
      desc: 'Clean codebases, complete documentation, and reproducible deployments your team can easily run.',
    },
  ],
  developmentPhilosophy: [
    {
      step: '01',
      title: 'Discover',
      description: 'Technical analysis of system constraints, user workflows, and business goals.',
    },
    {
      step: '02',
      title: 'Design',
      description: 'Database schema design, system architecture, and high-fidelity interactive UI models.',
    },
    {
      step: '03',
      title: 'Engineer',
      description: 'Type-safe production code, modular services, and automated CI/CD deployment pipelines.',
    },
    {
      step: '04',
      title: 'Validate',
      description: 'Integration stress testing, offline failovers, and multi-device cross-browser validation.',
    },
    {
      step: '05',
      title: 'Launch',
      description: 'Zero-downtime release, automated DNS, cloud provisioning, and telemetry monitoring.',
    },
    {
      step: '06',
      title: 'Improve',
      description: 'Continuous benchmarking, performance optimization, and roadmap enhancements.',
    },
  ],
} as const;
