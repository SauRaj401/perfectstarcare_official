
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import NDISServicesDetailed from '@/components/NDISServicesDetailed';

const Services = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <div className="py-20 bg-gradient-to-br from-compassion-50 to-hope-50">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Our <span className="text-compassion-600">NDIS Services</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive disability support services delivered by qualified professionals. 
              We're registered across multiple NDIS service categories to meet your unique needs.
            </p>
          </div>
        </div>
        <NDISServicesDetailed />
      </main>
      <Footer />
    </div>
  );
};

export default Services;
