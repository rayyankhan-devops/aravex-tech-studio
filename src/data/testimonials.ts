export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  location: string;
  countryCode: string;
  projectTag: string;
  quote: string;
  rating: number;
  highlightMetric: string;
  avatarBg: string;
  clientType: 'Enterprise' | 'Retail Group' | 'Healthcare' | 'SaaS Startup' | 'Logistics';
}

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 'test-1',
    name: 'Tariq Al-Mansoor',
    role: 'Director of Retail Operations',
    company: 'Al-Noor Hypermarket Group',
    location: 'Lahore, Pakistan',
    countryCode: 'PK',
    projectTag: 'Aravex POS & Distributed Sync',
    clientType: 'Retail Group',
    quote:
      'We rolled out Aravex POS across 14 supermarket branches. The offline-first architecture was a lifesaver — our cashier counters never stutter even during internet outages. Scanning speed and thermal receipt printing are instantaneous.',
    rating: 5,
    highlightMetric: '14 Stores • 0s Offline Downtime',
    avatarBg: 'from-emerald-600 to-teal-800',
  },
  {
    id: 'test-2',
    name: 'Julian Henderson',
    role: 'VP of Infrastructure & Security',
    company: 'CloudScale Logistics UK',
    location: 'London, United Kingdom',
    countryCode: 'UK',
    projectTag: 'AWS DevSecOps & Terraform IaC',
    clientType: 'Logistics',
    quote:
      'Aravex overhauled our container deployment pipeline on AWS ECS with automated Trivy vulnerability scanning. Our deployment cycles dropped from 45 minutes of manual anxiety to 3 minutes of zero-downtime blue/green execution.',
    rating: 5,
    highlightMetric: '93% Faster CI/CD • 0 CVEs',
    avatarBg: 'from-slate-700 to-charcoal-900',
  },
  {
    id: 'test-3',
    name: 'Dr. Fatima Zahra',
    role: 'Managing Director',
    company: 'MediFlow Specialty Clinics',
    location: 'Islamabad, Pakistan',
    countryCode: 'PK',
    projectTag: 'Aravex MediFlow EMR & Scheduling',
    clientType: 'Healthcare',
    quote:
      'The clinic appointment and electronic prescription system designed by Aravex eliminated our daily waiting room chaos. Patients receive automated WhatsApp reminders, and our doctors can pull complete visit histories in two clicks.',
    rating: 5,
    highlightMetric: '70% Reduced Patient Wait Times',
    avatarBg: 'from-teal-700 to-cyan-900',
  },
  {
    id: 'test-4',
    name: 'Daniel Wong',
    role: 'Head of Digital Products',
    company: 'OmniVentures Global',
    location: 'Singapore',
    countryCode: 'SG',
    projectTag: 'Autonomous AI Agents & RAG',
    clientType: 'Enterprise',
    quote:
      'The multi-agent workflow engineered by Aravex handles 65% of our customer ticket resolutions without human escalation. What sets them apart is their obsession with schema validation — zero hallucinations, purely deterministic outputs.',
    rating: 5,
    highlightMetric: '65% Automated Ticket Resolution',
    avatarBg: 'from-blue-700 to-indigo-900',
  },
  {
    id: 'test-5',
    name: 'Asad Rehman',
    role: 'Group Operations Controller',
    company: 'Vendus Distribution Network',
    location: 'Karachi, Pakistan',
    countryCode: 'PK',
    projectTag: 'Inventory & MIS Suite',
    clientType: 'Enterprise',
    quote:
      'Tracking stock movements across 5 regional warehouses used to mean reconciling conflicting spreadsheets at 2 AM. Aravex MIS centralized our batch tracking, vendor purchase orders, and ledger reconciliation into one live screen.',
    rating: 5,
    highlightMetric: '5 Warehouses • 100% Audit Accuracy',
    avatarBg: 'from-cyan-700 to-teal-900',
  },
  {
    id: 'test-6',
    name: 'Sophie Arnault',
    role: 'Chief Technology Officer',
    company: 'GoCart Commerce',
    location: 'Dubai, UAE',
    countryCode: 'AE',
    projectTag: 'Resilient Next.js Architecture',
    clientType: 'SaaS Startup',
    quote:
      'During our Black Friday traffic spike of 40,000 concurrent sessions, the decoupled Next.js and Redis session architecture built by Aravex held steady without a single dropped cart. Truly architectural engineering.',
    rating: 5,
    highlightMetric: '40k Concurrent Users • <50ms TTFB',
    avatarBg: 'from-emerald-700 to-slate-900',
  },
];
