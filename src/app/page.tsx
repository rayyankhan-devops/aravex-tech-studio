import React from 'react';
import { HeroSection } from '@/components/home/HeroSection';
import { IntroStatement } from '@/components/home/IntroStatement';
import { ServicesSection } from '@/components/home/ServicesSection';
import { FeaturedProducts } from '@/components/home/FeaturedProducts';
import { PhilosophySection } from '@/components/home/PhilosophySection';
import { SelectedWork } from '@/components/home/SelectedWork';
import { AboutSection } from '@/components/home/AboutSection';
import { WhySection } from '@/components/home/WhySection';
import { AcademySection } from '@/components/home/AcademySection';
import { FinalCTA } from '@/components/home/FinalCTA';

export default function HomePage() {
  return (
    <main className="flex flex-col min-h-screen">
      <HeroSection />
      <IntroStatement />
      <ServicesSection />
      <FeaturedProducts />
      <PhilosophySection />
      <SelectedWork />
      <AboutSection />
      <WhySection />
      <AcademySection />
      <FinalCTA />
    </main>
  );
}
