import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AboutSection from '@/components/AboutSection';

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <div className="py-20 bg-gradient-to-br from-compassion-50 to-hope-50">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              About <span className="text-compassion-600">Perfect Star Care Solution (PSC)</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Learn about Perfect Star Care Solution (PSC) and our commitment to empowering lives through compassionate disability support services.
            </p>
          </div>
        </div>
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
};

export default About;
