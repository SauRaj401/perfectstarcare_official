import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Mail, Phone, MapPin, Facebook, Linkedin, Instagram, ArrowUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Our Services', href: '/services' },
    { name: 'For Participants', href: '/participants' },
    { name: 'NDIS Info', href: '/ndis' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'Contact Us', href: '/contact' }
  ];

  const services = [
    'In-Home Support',
    'Community Access',
    'Plan Management',
    'Respite Care',
    'Day Programs',
    'Employment Support'
  ];

  const resources = [
    'NDIS Guide',
    'Participant Resources',
    'Career Opportunities',
    'Support Groups',
    'Emergency Support',
    'Privacy Policy'
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-compassion-600 to-hope-600 py-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">Stay Connected with Perfect Star</h3>
          <p className="text-compassion-100 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest updates on NDIS support services, 
            disability care news, and community events from Perfect Star Care Solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email address"
              className="bg-white text-gray-900 border-white"
            />
            <Button className="bg-white text-compassion-600 hover:bg-gray-100 px-6 font-semibold whitespace-nowrap">
              Subscribe
            </Button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-4">
                <img 
                  src="/lovable-uploads/7758da9e-8898-4c26-8dca-65ee9982ca71.png" 
                  alt="Perfect Star Care Solution logo" 
                  className="h-14 w-14 object-contain"
                />
                <div className="text-2xl font-bold text-white">
                  <span className="text-hope-400">Perfect Star</span>
                </div>
              </div>
              <p className="text-sm text-gray-400 mb-2">Perfect Star Care Solution Pty Ltd</p>
              <p className="text-xs text-gray-500 mb-4">ABN: 72683103880 • NDIS Registered Provider</p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Empowering lives through comprehensive NDIS disability support services. 
                We believe every person deserves dignity, respect, and the opportunity 
                to live their best life.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="h-4 w-4 text-compassion-400" />
                  <span className="text-gray-300">info@perfectstarcare.com.au</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-4 w-4 text-compassion-400" />
                  <span className="text-gray-300">Unit 103, 21 Elgar Road<br />Derrimut, VIC 3026</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.href} 
                      className="text-gray-300 hover:text-compassion-400 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Our Services</h4>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service}>
                    <Link 
                      to="/services" 
                      className="text-gray-300 hover:text-hope-400 transition-colors"
                    >
                      {service}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Resources</h4>
              <ul className="space-y-3">
                {resources.map((resource) => (
                  <li key={resource}>
                    <a 
                      href="#" 
                      className="text-gray-300 hover:text-trust-400 transition-colors"
                    >
                      {resource}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Separator className="bg-gray-700" />

      {/* Bottom Footer */}
      <div className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              © 2025 Perfect Star Care Solution Pty Ltd. All rights reserved.
            </div>

            {/* Social Media */}
            <div className="flex items-center space-x-4">
              <span className="text-gray-400 text-sm mr-4">Follow us:</span>
              <a 
                href="#" 
                className="p-2 bg-gray-800 rounded-full hover:bg-compassion-600 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a 
                href="#" 
                className="p-2 bg-gray-800 rounded-full hover:bg-compassion-600 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a 
                href="#" 
                className="p-2 bg-gray-800 rounded-full hover:bg-compassion-600 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>

            {/* Legal Links */}
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Accessibility</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 p-3 bg-compassion-600 hover:bg-compassion-700 text-white rounded-full shadow-lg transition-all hover:scale-110 z-50"
        aria-label="Back to top"
      >
        <ArrowUp className="h-5 w-5" />
      </button>
    </footer>
  );
};

export default Footer;
