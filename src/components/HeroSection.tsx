
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Heart, Shield, Users, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroCareImage from '@/assets/hero-care-services.jpg';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const HeroSection = () => {
  const heroSlides = [
    {
      title: "Your partner in every stage of the NDIS process",
      subtitle: "TOP-RATED DISABILITY SERVICES",
      description: "Experience compassionate care tailored to your unique needs. We're here to support you every step of the way.",
      image: heroCareImage,
      cta: "Discover More"
    },
    {
      title: "Empowering Independence Through Quality Care",
      subtitle: "NDIS REGISTERED PROVIDER",
      description: "Building skills, creating connections, and fostering independence for people with disabilities across Melbourne.",
      image: heroCareImage,
      cta: "Our Services"
    },
    {
      title: "24/7 Support When You Need It Most",
      subtitle: "ALWAYS HERE FOR YOU",
      description: "Round-the-clock care and support services designed to give you and your family peace of mind.",
      image: heroCareImage,
      cta: "Contact Us"
    }
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50">
      <Carousel className="w-full h-screen">
        <CarouselContent>
          {heroSlides.map((slide, index) => (
            <CarouselItem key={index}>
              <div className="relative h-screen flex items-center">
                <div className="container mx-auto px-4">
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="space-y-8">
                      {/* Badge */}
                      <div className="inline-flex items-center px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full border border-purple-200/50 shadow-lg">
                        <Shield className="h-4 w-4 text-purple-600 mr-2" />
                        <span className="text-sm font-medium text-gray-700">{slide.subtitle}</span>
                      </div>

                      {/* Main Heading */}
                      <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                        {slide.title}
                      </h1>
                      
                      <p className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-lg">
                        {slide.description}
                      </p>

                      {/* CTA Button */}
                      <div className="flex justify-start">
                        {/* <Button 
                          asChild
                          size="lg" 
                          className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white px-8 py-4 text-lg font-semibold rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                          onClick={() => console.log('Button clicked!')}
                        >
                          <Link to="/contact">
                            Book a Call
                            <ArrowRight className="ml-2 h-5 w-5" />
                          </Link>
                        </Button> */}
                      </div>

                      {/* Trust Indicators */}
                      <div className="grid grid-cols-3 gap-6 pt-8">
                        <div className="text-center">
                          <h3 className="text-2xl font-bold text-gray-900">500+</h3>
                          <p className="text-sm text-gray-600">Participants</p>
                        </div>
                        <div className="text-center">
                          <h3 className="text-2xl font-bold text-gray-900">98%</h3>
                          <p className="text-sm text-gray-600">Satisfaction</p>
                        </div>
                        <div className="text-center">
                          <h3 className="text-2xl font-bold text-gray-900">24/7</h3>
                          <p className="text-sm text-gray-600">Support</p>
                        </div>
                      </div>
                    </div>

                    {/* Right Content - Image */}
                    <div className="relative">
                      <div className="relative w-full h-[500px] lg:h-[600px]">
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"></div>
                        <div className="relative w-full h-full rounded-full overflow-hidden border-8 border-white/30 shadow-2xl">
                          <img 
                            src={slide.image} 
                            alt="Care support services" 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        {/* Decorative elements */}
                        <div className="absolute -top-4 -right-4 w-8 h-8 bg-purple-500 rounded-full animate-pulse"></div>
                        <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-pink-500 rounded-full animate-pulse delay-1000"></div>
                        <div className="absolute top-1/4 -left-8 w-6 h-6 bg-blue-400 rounded-full animate-bounce delay-500"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-8 bg-white/80 hover:bg-white border-0 shadow-lg" />
        <CarouselNext className="right-8 bg-white/80 hover:bg-white border-0 shadow-lg" />
      </Carousel>
    </section>
  );
};

export default HeroSection;
