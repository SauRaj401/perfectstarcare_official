
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import NDISSection from '@/components/NDISSection';

const NDIS = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <div className="py-20 bg-gradient-to-br from-trust-50 to-compassion-50">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              <span className="text-compassion-600">NDIS</span> Information
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Navigate the NDIS with confidence. GDC is here to help you understand the process and make the most of your funding.
            </p>
          </div>
        </div>
        <NDISSection />
      </main>
      <Footer />
    </div>
  );
};

export default NDIS;
