import React from 'react';
import { HeroSection } from '@/components/home/HeroSection';
import { IntroStatement } from '@/components/home/IntroStatement';
import { GlimpseSection } from '@/components/home/GlimpseSection';
import { ServicesSection } from '@/components/home/ServicesSection';
import { FeaturedProducts } from '@/components/home/FeaturedProducts';
import { PhilosophySection } from '@/components/home/PhilosophySection';
import { SelectedWork } from '@/components/home/SelectedWork';
import { TestimonialsSection } from '@/components/home/TestimonialsSection';
import { TeamSection } from '@/components/home/TeamSection';
import { WhySection } from '@/components/home/WhySection';
import { TrainingSection } from '@/components/home/TrainingSection';
import { FinalCTA } from '@/components/home/FinalCTA';

export default function HomePage() {
  return (
    <main className="flex flex-col min-h-screen">
      <HeroSection />
      <IntroStatement />
      <GlimpseSection />
      <ServicesSection />
      <FeaturedProducts />
      <PhilosophySection />
      <SelectedWork />
      <TestimonialsSection />
      <TeamSection />
      <WhySection />
      <TrainingSection />
      <FinalCTA />
    </main>
  );
}
