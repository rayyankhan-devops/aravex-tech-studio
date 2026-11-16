import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/context/ThemeContext';
import { Header } from '@/components/common/Header';
import { Footer } from '@/components/common/Footer';
import { CustomCursor } from '@/components/common/CustomCursor';
import { PageLoader } from '@/components/common/PageLoader';
import { FloatingWhatsApp } from '@/components/common/FloatingWhatsApp';
import { COMPANY_INFO } from '@/lib/brand';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://aravextechstudio.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'ARAVEX TECH STUDIO — Premium Software & AI Engineering',
    template: '%s | ARAVEX TECH STUDIO',
  },
  description:
    'Intelligent software, meaningful digital experiences, and reliable cloud infrastructure. Specialized in Next.js web applications, mobile apps, POS systems, AI agents, and practical technology education.',
  keywords: [
    'Aravex Tech Studio',
    'Software Engineering Studio',
    'Custom POS Software',
    'AI Agents Development',
    'DevOps & DevSecOps',
    'Cloud Engineering AWS GCP',
    'WhatsApp Business Automation',
    'Full-Stack Next.js Studio',
    'Tech Training Pakistan',
  ],
  authors: [{ name: 'ARAVEX TECH STUDIO' }],
  creator: 'ARAVEX TECH STUDIO',
  publisher: 'ARAVEX TECH STUDIO',
  icons: {
    icon: '/icon.png',
    apple: '/icon.png',
  },
  openGraph: {
    title: 'ARAVEX TECH STUDIO — We Build What’s Next.',
    description:
      'Intelligent software, meaningful digital experiences, and reliable cloud infrastructure — designed, engineered and delivered by Aravex Tech Studio.',
    url: siteUrl,
    siteName: 'ARAVEX TECH STUDIO',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'ARAVEX TECH STUDIO',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ARAVEX TECH STUDIO — We Build What’s Next.',
    description:
      'Intelligent software, meaningful digital experiences, and reliable cloud infrastructure.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${siteUrl}/#organization`,
        name: 'Antigravity',
        alternateName: [
          'ARAVEX TECH STUDIO',
          'Antigravity Technologies',
          'Aravex Tech Studio',
          'Aravex',
        ],
        url: siteUrl,
        logo: {
          '@type': 'ImageObject',
          '@id': `${siteUrl}/#logo`,
          url: `${siteUrl}/assets/branding/ARAVEX_Full_Logo_Dark_Mode_Transparent.png`,
          caption: 'Antigravity — Software & AI Engineering Studio',
        },
        image: `${siteUrl}/og-image.png`,
        description:
          'Premier software and AI engineering studio delivering production-grade offline-first Point of Sale systems, AI agents, cloud DevOps architectures, and perpetual commercial software licenses.',
        telephone: '+92-324-9906944',
        email: 'info@aravextechstudio.com',
        founders: COMPANY_INFO.founders.map((f) => ({
          '@type': 'Person',
          name: f.name,
        })),
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Peshawar City',
          addressRegion: 'Khyber Pakhtunkhwa',
          postalCode: '25210',
          addressCountry: 'PK',
        },
        contactPoint: [
          {
            '@type': 'ContactPoint',
            telephone: '+92-324-9906944',
            contactType: 'sales & technical inquiries',
            email: 'info@aravextechstudio.com',
            availableLanguage: ['English', 'Urdu'],
          },
        ],
        sameAs: [
          'https://linkedin.com/company/aravex-tech-studio',
          'https://github.com/aravex-tech-studio',
        ],
        knowsAbout: [
          'Point of Sale Software Engineering',
          'Offline-First Desktop & Mobile Architecture',
          'Autonomous AI Agents & WhatsApp Cloud Bots',
          'DevSecOps Infrastructure & AWS Cloud Architecture',
          'Next.js Full-Stack Web Applications',
          'Commercial Source Code Licensing',
        ],
      },
      {
        '@type': 'WebSite',
        '@id': `${siteUrl}/#website`,
        url: siteUrl,
        name: 'Antigravity',
        alternateName: 'ARAVEX TECH STUDIO',
        publisher: {
          '@id': `${siteUrl}/#organization`,
        },
        inLanguage: 'en-US',
      },
      {
        '@type': 'FAQPage',
        '@id': `${siteUrl}/#faq`,
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What software products are available from Antigravity / ARAVEX?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Antigravity offers six ready-to-deploy enterprise software products: Aravex POS (Supermarket & Retail), Aravex Pharma (Pharmacy & Expiry Control), Aravex Dine (Restaurant & Kitchen Display POS), Aravex Invoicely (B2B Billing & Ledger), Aravex Flow (Warehouse & Inventory Management), and Aravex Clinic (Doctor OPD & Practice Management).',
            },
          },
          {
            '@type': 'Question',
            name: 'How much does an Antigravity commercial software license cost?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Every software product in the Antigravity catalog is sold for a flat, one-time price of PKR 30,000 ($105 USD). There are zero monthly subscription fees, zero recurring user charges, and zero per-terminal costs.',
            },
          },
          {
            '@type': 'Question',
            name: 'What is included with an Antigravity software license purchase?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Each license includes complete, uncompiled production source code, full database schema migrations, step-by-step local and cloud deployment guides, commercial white-label distribution rights, and 1 year of complimentary technical assistance and bug fix updates.',
            },
          },
          {
            '@type': 'Question',
            name: 'Does the Antigravity POS software work without internet connectivity?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. Antigravity POS systems operate on an offline-first architecture using local SQLite replicas and native ESC/POS thermal printing. Cashier checkout, barcode scanning, and receipt printing run with sub-millisecond local latency with 0s downtime during internet outages, synchronizing automatically when connectivity resumes.',
            },
          },
        ],
      },
    ],
  };

  return (
    <html lang="en" className={`dark ${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://script.google.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#F7F7F5] dark:bg-charcoal-950 text-charcoal-900 dark:text-warmWhite antialiased selection:bg-slate-muted selection:text-white transition-colors duration-300">
        <ThemeProvider>
          <PageLoader />
          <CustomCursor />
          <Header />
          <div className="pt-20">{children}</div>
          <Footer />
          <FloatingWhatsApp />
        </ThemeProvider>
      </body>
    </html>
  );
}
