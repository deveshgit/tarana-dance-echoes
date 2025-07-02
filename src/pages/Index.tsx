
import React from 'react';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';
import FeaturedMediaSection from '../components/FeaturedMediaSection';
import FeaturesSection from '../components/FeaturesSection';
import AboutPreviewSection from '../components/AboutPreviewSection';
import TestimonialsSection from '../components/TestimonialsSection';
import CTASection from '../components/CTASection';
import TitleSection from '../components/TitleSection';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <FeaturedMediaSection />
      <HeroSection />
      <TitleSection />
      <FeaturesSection />
      <AboutPreviewSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
