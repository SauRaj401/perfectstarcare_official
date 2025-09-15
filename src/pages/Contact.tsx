
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactSection from '@/components/ContactSection';

const Contact = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
