import React from 'react';
import { HeroSection } from '@/components/home/HeroSection';
import { IntroStatement } from '@/components/home/IntroStatement';
import { ServicesSection } from '@/components/home/ServicesSection';
import { TestimonialsSection } from '@/components/home/TestimonialsSection';
import { WhySection } from '@/components/home/WhySection';
import { FinalCTA } from '@/components/home/FinalCTA';

export default function HomePage() {
  return (
    <main className="flex flex-col min-h-screen">
      <HeroSection />
      <IntroStatement />
      <ServicesSection />
      {/* FeaturedProducts section removed from home page per user request (dedicated /products page exists in navbar/footer) */}
      <TestimonialsSection />
      {/* TeamSection (Founders & Leadership) removed from home page per user request (dedicated /about page exists) */}
      <WhySection />
      {/* TrainingSection removed per user request (dedicated /training page exists) */}
      <FinalCTA />
    </main>
  );
}
