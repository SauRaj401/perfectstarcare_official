
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ParticipantsSection from '@/components/ParticipantsSection';

const Participants = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <div className="py-20 bg-gradient-to-br from-hope-50 to-compassion-50">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              For <span className="text-hope-600">Participants</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Resources, guides, and support tools designed to help you navigate your disability support journey with PSC.
            </p>
          </div>
        </div>
        <ParticipantsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Participants;
