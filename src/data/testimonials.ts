export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  location: string;
  projectTag: string;
  quote: string;
  rating: number;
  highlightMetric: string;
  avatarBg: string;
}

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 'test-1',
    name: 'Tariq Al-Mansoor',
    role: 'Director of Retail Operations',
    company: 'Al-Noor Hypermarket Group',
    location: 'Lahore, Pakistan',
    projectTag: 'Arevex POS & Distributed Sync',
    quote:
      'We rolled out Arevex POS across 14 supermarket branches. The offline-first architecture was a lifesaver — our cashier counters never stutter even during internet outages. Scanning speed and thermal receipt printing are instantaneous.',
    rating: 5,
    highlightMetric: '14 Stores • 0s Offline Downtime',
    avatarBg: 'from-blue-600 to-indigo-700',
  },
  {
    id: 'test-2',
    name: 'Julian Henderson',
    role: 'VP of Infrastructure & Security',
    company: 'CloudScale Logistics UK',
    location: 'London, United Kingdom',
    projectTag: 'AWS DevSecOps & Terraform IaC',
    quote:
      'Arevex overhauled our container deployment pipeline on AWS ECS with automated Trivy vulnerability scanning. Our deployment cycles dropped from 45 minutes of manual anxiety to 3 minutes of zero-downtime blue/green execution.',
    rating: 5,
    highlightMetric: '93% Faster CI/CD • 0 CVEs',
    avatarBg: 'from-emerald-600 to-teal-700',
  },
  {
    id: 'test-3',
    name: 'Dr. Fatima Zahra',
    role: 'Managing Director',
    company: 'MediFlow Specialty Clinics',
    location: 'Islamabad, Pakistan',
    projectTag: 'Arevex MediFlow EMR & Scheduling',
    quote:
      'The clinic appointment and electronic prescription system designed by Arevex eliminated our daily waiting room chaos. Patients receive automated WhatsApp reminders, and our doctors can pull complete visit histories in two clicks.',
    rating: 5,
    highlightMetric: '70% Reduced Patient Wait Times',
    avatarBg: 'from-purple-600 to-pink-700',
  },
  {
    id: 'test-4',
    name: 'Kenji Takahashi',
    role: 'Head of Digital Products',
    company: 'OmniVentures Global',
    location: 'Singapore',
    projectTag: 'Autonomous AI Agents & RAG',
    quote:
      'The multi-agent workflow engineered by Arevex handles 65% of our customer ticket resolutions without human escalation. What sets them apart is their obsession with schema validation — zero hallucinations, purely deterministic outputs.',
    rating: 5,
    highlightMetric: '65% Automated Ticket Resolution',
    avatarBg: 'from-amber-600 to-orange-700',
  },
  {
    id: 'test-5',
    name: 'Hamza Farooq',
    role: 'Group Operations Controller',
    company: 'Vendus Distribution Network',
    location: 'Karachi, Pakistan',
    projectTag: 'Inventory & MIS Suite',
    quote:
      'Tracking stock movements across 5 regional warehouses used to mean reconciling conflicting spreadsheets at 2 AM. Arevex MIS centralized our batch tracking, vendor purchase orders, and ledger reconciliation into one live screen.',
    rating: 5,
    highlightMetric: '5 Warehouses • 100% Audit Accuracy',
    avatarBg: 'from-cyan-600 to-blue-700',
  },
  {
    id: 'test-6',
    name: 'Sophie Arnault',
    role: 'Chief Technology Officer',
    company: 'GoCart Commerce',
    location: 'Dubai, UAE',
    projectTag: 'Resilient Next.js Architecture',
    quote:
      'During our Black Friday traffic spike of 40,000 concurrent sessions, the decoupled Next.js and Redis session architecture built by Arevex held steady without a single dropped cart. Truly architectural engineering.',
    rating: 5,
    highlightMetric: '40k Concurrent Users • <50ms TTFB',
    avatarBg: 'from-rose-600 to-red-700',
  },
];
