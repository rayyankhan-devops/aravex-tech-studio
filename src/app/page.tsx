import React from 'react';
import { HeroSection } from '@/components/home/HeroSection';
import { IntroStatement } from '@/components/home/IntroStatement';
import { ServicesSection } from '@/components/home/ServicesSection';
import { FeaturedProducts } from '@/components/home/FeaturedProducts';
import { SelectedWork } from '@/components/home/SelectedWork';
import { TestimonialsSection } from '@/components/home/TestimonialsSection';
import { WhySection } from '@/components/home/WhySection';
import { FinalCTA } from '@/components/home/FinalCTA';

export default function HomePage() {
  return (
    <main className="flex flex-col min-h-screen">
      <HeroSection />
      <IntroStatement />
      <ServicesSection />
      {/* FeaturedProducts section temporarily hidden per user request */}
      {/* SelectedWork section temporarily hidden per user request */}
      <TestimonialsSection />
      {/* TeamSection (Founders & Leadership) removed from home page per user request (dedicated /about page exists) */}
      <WhySection />
      {/* TrainingSection removed per user request (dedicated /training page exists) */}
      <FinalCTA />
    </main>
  );
}
