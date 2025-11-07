
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TestimonialsSection from '@/components/TestimonialsSection';

const Testimonials = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <div className="py-20 bg-gradient-to-br from-hope-50 to-trust-50">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Client <span className="text-hope-600">Stories</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from our participants and their families about their experiences with PSC's disability support services.
            </p>
          </div>
        </div>
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Testimonials;
