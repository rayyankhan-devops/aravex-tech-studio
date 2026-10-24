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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://arevex.tech';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'AREVEX TECH STUDIO — Premium Software & AI Engineering',
    template: '%s | AREVEX TECH STUDIO',
  },
  description:
    'Intelligent software, meaningful digital experiences, and reliable cloud infrastructure. Specialized in Next.js web applications, mobile apps, POS systems, AI agents, and practical technology education.',
  keywords: [
    'Arevex Tech Studio',
    'Software Engineering Studio',
    'Custom POS Software',
    'AI Agents Development',
    'DevOps & DevSecOps',
    'Cloud Engineering AWS GCP',
    'WhatsApp Business Automation',
    'Full-Stack Next.js Studio',
    'Tech Academy Pakistan',
  ],
  authors: [{ name: 'AREVEX TECH STUDIO' }],
  creator: 'AREVEX TECH STUDIO',
  publisher: 'AREVEX TECH STUDIO',
  icons: {
    icon: '/icon.png',
    apple: '/icon.png',
  },
  openGraph: {
    title: 'AREVEX TECH STUDIO — We Build What’s Next.',
    description:
      'Intelligent software, meaningful digital experiences, and reliable cloud infrastructure — designed, engineered and delivered by Arevex Tech Studio.',
    url: siteUrl,
    siteName: 'AREVEX TECH STUDIO',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'AREVEX TECH STUDIO',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AREVEX TECH STUDIO — We Build What’s Next.',
    description:
      'Intelligent software, meaningful digital experiences, and reliable cloud infrastructure.',
    images: ['/og-image.png'],
    creator: '@arevextech',
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
    '@type': 'ProfessionalService',
    name: 'AREVEX TECH STUDIO',
    url: siteUrl,
    logo: `${siteUrl}/assets/branding/logo-horizontal-dark.png`,
    image: `${siteUrl}/og-image.png`,
    description:
      'Premium technology studio delivering custom software engineering, AI agents, cloud infrastructure, POS systems, and practical tech education.',
    founders: COMPANY_INFO.founders.map((f) => ({
      '@type': 'Person',
      name: f.name,
    })),
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'PK',
    },
    knowsAbout: [
      'Web Development',
      'Mobile Applications',
      'Point of Sale Software',
      'Artificial Intelligence',
      'Cloud Architecture',
      'DevOps Engineering',
    ],
  };

  return (
    <html lang="en" className={`dark ${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
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
