
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ServicesOverview from '@/components/ServicesOverview';
import WhyChooseUs from '@/components/WhyChooseUs';
import QuickStats from '@/components/QuickStats';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <ServicesOverview />
        <WhyChooseUs />
        <QuickStats />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
