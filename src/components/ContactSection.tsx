import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { Phone, Mail, MapPin, Clock, Shield, Users, Heart } from 'lucide-react';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    servicesInterested: '',
    helpDescription: '',
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    postalCode: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Form Submitted!",
      description: "Thank you for your interest. One of our local care experts will be in touch soon.",
    });
    setFormData({
      servicesInterested: '',
      helpDescription: '',
      firstName: '',
      lastName: '',
      phoneNumber: '',
      email: '',
      postalCode: ''
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const serviceOptions = [
    'Personal Care',
    'Household Tasks',
    'Community Support',
    'Transport Services',
    'Social Support',
    'NDIS Support Coordination',
    'Daily Living Skills',
    'Respite Care'
  ];

  const helpDescriptions = [
    'I need help with daily activities',
    'I want to live more independently',
    'I need support with household tasks',
    'I want to engage more in my community',
    'I need assistance with transport',
    'I want help managing my NDIS plan',
    'I need respite care services',
    'I want to develop new skills'
  ];

  return (
    <>
      {/* Contact Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Get In <span className="text-cyan-400">Touch</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Ready to start your care journey? Our team of experts is here to help you every step of the way.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-gray-300">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-cyan-400" />
                <span>24/7 Support</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-cyan-400" />
                <span>NDIS Registered</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-cyan-400" />
                <span>Expert Team</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Phone Card */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center group">
              <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-cyan-200 transition-colors">
                <Phone className="w-8 h-8 text-cyan-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Call Us</h3>
              <p className="text-gray-600 mb-4">Ready to talk? Give us a call</p>
              <a 
                href="tel:0452100305" 
                className="text-cyan-600 hover:text-cyan-700 font-semibold text-lg transition-colors"
              >
                0452 100 305
              </a>
            </div>

            {/* Email Card */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center group">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors">
                <Mail className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Email Us</h3>
              <p className="text-gray-600 mb-4">Send us an email anytime</p>
              <a 
                href="mailto:info@perfectstarcare.com.au" 
                className="text-blue-600 hover:text-blue-700 font-semibold transition-colors"
              >
                info@perfectstarcare.com.au
              </a>
            </div>

            {/* Location Card */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center group">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 transition-colors">
                <MapPin className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Visit Us</h3>
              <p className="text-gray-600 mb-4">Come see us in person</p>
              <p className="text-green-600 font-semibold">
                Melbourne, VIC<br />
                Australia
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Contact Form Section */}
      <section className="py-20 bg-gradient-to-br from-slate-800 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 bg-white rounded-3xl shadow-2xl overflow-hidden">
              {/* Left side - Enhanced content */}
              <div className="bg-gradient-to-br from-slate-700 to-slate-800 p-12 lg:p-16 flex flex-col justify-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-400/10 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-400/10 rounded-full translate-y-12 -translate-x-12"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <Heart className="w-8 h-8 text-cyan-400" />
                    <span className="text-cyan-400 font-semibold text-lg">Care That Matters</span>
                  </div>
                  
                  <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-8">
                    Let's Talk About The Care You Need
                  </h2>
                  
                  <div className="space-y-6 mb-8">
                    <p className="text-white text-lg leading-relaxed">
                      We're here to listen, answer your questions and help you understand your options.
                    </p>
                    <p className="text-gray-300 text-lg leading-relaxed">
                      Just leave your details and one of your local care experts will be in touch within 24 hours.
                    </p>
                  </div>

                  {/* Trust indicators */}
                  <div className="grid grid-cols-2 gap-6">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-cyan-400/20 rounded-full flex items-center justify-center">
                        <Shield className="w-6 h-6 text-cyan-400" />
                      </div>
                      <div>
                        <p className="text-white font-semibold">NDIS Registered</p>
                        <p className="text-gray-400 text-sm">Fully compliant</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-blue-400/20 rounded-full flex items-center justify-center">
                        <Users className="w-6 h-6 text-blue-400" />
                      </div>
                      <div>
                        <p className="text-white font-semibold">Expert Team</p>
                        <p className="text-gray-400 text-sm">5+ years experience</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right side - Enhanced Form */}
              <div className="bg-gradient-to-br from-cyan-400 to-cyan-500 p-12 lg:p-16 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-40 h-40 bg-white/5 rounded-full -translate-y-20 -translate-x-20"></div>
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/5 rounded-full translate-y-16 translate-x-16"></div>
                
                <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">Start Your Journey</h3>
                    <p className="text-white/80">Fill out the form below and we'll get back to you soon.</p>
                  </div>

                  {/* Services interested */}
                  <div className="group">
                    <Label htmlFor="services" className="text-white font-medium mb-3 block text-sm">
                      What services are you interested in?*
                    </Label>
                    <Select 
                      value={formData.servicesInterested} 
                      onValueChange={(value) => handleInputChange('servicesInterested', value)}
                    >
                      <SelectTrigger className="bg-white/95 border-0 h-12 text-gray-600 font-normal shadow-lg hover:bg-white transition-all duration-200 focus:ring-2 focus:ring-white/50">
                        <SelectValue placeholder="Please Select" />
                      </SelectTrigger>
                      <SelectContent className="bg-white border-0 shadow-xl">
                        {serviceOptions.map((service) => (
                          <SelectItem key={service} value={service} className="text-gray-700 hover:bg-cyan-50">
                            {service}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Help description */}
                  <div className="group">
                    <Label htmlFor="help" className="text-white font-medium mb-3 block text-sm">
                      What sentence best describes how we can help you?*
                    </Label>
                    <Select 
                      value={formData.helpDescription} 
                      onValueChange={(value) => handleInputChange('helpDescription', value)}
                    >
                      <SelectTrigger className="bg-white/95 border-0 h-12 text-gray-600 font-normal shadow-lg hover:bg-white transition-all duration-200 focus:ring-2 focus:ring-white/50">
                        <SelectValue placeholder="Please Select" />
                      </SelectTrigger>
                      <SelectContent className="bg-white border-0 shadow-xl">
                        {helpDescriptions.map((description) => (
                          <SelectItem key={description} value={description} className="text-gray-700 hover:bg-cyan-50">
                            {description}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Name fields in grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="group">
                      <Label htmlFor="firstName" className="text-white font-medium mb-3 block text-sm">
                        First name*
                      </Label>
                      <Input
                        id="firstName"
                        type="text"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange('firstName', e.target.value)}
                        className="bg-white/95 border-0 h-12 text-gray-700 shadow-lg hover:bg-white transition-all duration-200 focus:ring-2 focus:ring-white/50"
                        required
                      />
                    </div>

                    <div className="group">
                      <Label htmlFor="lastName" className="text-white font-medium mb-3 block text-sm">
                        Last name*
                      </Label>
                      <Input
                        id="lastName"
                        type="text"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange('lastName', e.target.value)}
                        className="bg-white/95 border-0 h-12 text-gray-700 shadow-lg hover:bg-white transition-all duration-200 focus:ring-2 focus:ring-white/50"
                        required
                      />
                    </div>
                  </div>

                  {/* Contact fields in grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="group">
                      <Label htmlFor="phoneNumber" className="text-white font-medium mb-3 block text-sm">
                        Phone number*
                      </Label>
                      <Input
                        id="phoneNumber"
                        type="tel"
                        value={formData.phoneNumber}
                        onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
                        className="bg-white/95 border-0 h-12 text-gray-700 shadow-lg hover:bg-white transition-all duration-200 focus:ring-2 focus:ring-white/50"
                        required
                      />
                    </div>

                    <div className="group">
                      <Label htmlFor="postalCode" className="text-white font-medium mb-3 block text-sm">
                        Postal code*
                      </Label>
                      <Input
                        id="postalCode"
                        type="text"
                        value={formData.postalCode}
                        onChange={(e) => handleInputChange('postalCode', e.target.value)}
                        className="bg-white/95 border-0 h-12 text-gray-700 shadow-lg hover:bg-white transition-all duration-200 focus:ring-2 focus:ring-white/50"
                        required
                      />
                    </div>
                  </div>

                  {/* Email field full width */}
                  <div className="group">
                    <Label htmlFor="email" className="text-white font-medium mb-3 block text-sm">
                      Email*
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="bg-white/95 border-0 h-12 text-gray-700 shadow-lg hover:bg-white transition-all duration-200 focus:ring-2 focus:ring-white/50"
                      required
                    />
                  </div>

                  {/* Submit button */}
                  <div className="pt-6">
                    <Button 
                      type="submit" 
                      className="w-full bg-slate-800 hover:bg-slate-900 text-white px-8 py-4 h-14 rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                    >
                      Send My Request
                    </Button>
                    <p className="text-white/70 text-sm mt-3 text-center">
                      We'll respond within 24 hours
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Perfect Star Care Solution?
            </h2>
            <p className="text-xl text-gray-600">
              We're committed to providing exceptional care services that make a real difference in people's lives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-cyan-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">NDIS Registered</h3>
              <p className="text-gray-600">Fully registered and compliant with NDIS standards</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Team</h3>
              <p className="text-gray-600">Experienced professionals dedicated to your care</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">24/7 Support</h3>
              <p className="text-gray-600">Round-the-clock support when you need it most</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Personalized Care</h3>
              <p className="text-gray-600">Tailored services that meet your unique needs</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactSection;