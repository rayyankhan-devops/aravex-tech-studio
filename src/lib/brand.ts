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
  // Official Logos
  horizontal: {
    dark: '/assets/branding/logo-horizontal-dark.png',
    light: '/assets/branding/logo-horizontal-light.png',
    transparentDark: '/assets/branding/logo-horizontal-transparent.png',
  },
  vertical: {
    dark: '/assets/branding/logo-vertical-dark.png',
    light: '/assets/branding/logo-vertical-light.png',
    transparent: '/assets/branding/logo-vertical-transparent.png',
  },
  monogram: {
    dark: '/assets/branding/monogram-dark.png',
    light: '/assets/branding/monogram-light.png',
    transparent: '/assets/branding/monogram-transparent.png',
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
    { name: 'Muhammad Rayyan' },
    { name: 'Muhammad Uzair' },
    { name: 'Aqsa Wadood' },
  ],
  locations: {
    primary: 'Pakistan',
    serviceReach: 'International Clients & Regional Enterprises',
  },
  contact: {
    email: 'contact@arevex.tech',
    supportEmail: 'support@arevex.tech',
    phone: '+92 (300) 000-0000', // Configurable in production
  },
  socials: {
    github: 'https://github.com/arevex',
    linkedin: 'https://linkedin.com/company/arevex',
    twitter: 'https://x.com/arevextech',
  },
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
