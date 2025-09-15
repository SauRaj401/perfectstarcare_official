
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: 'Anonymous Participant',
      role: 'NDIS Participant',
      location: 'VIC',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b47c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      rating: 5,
      content: 'Perfect Star Care has made such a difference in my daily life. The staff are kind, respectful, and always willing to help.',
      service: 'Daily Living Support'
    },
    {
      name: 'Anonymous Parent',
      role: 'Parent',
      location: 'Melbourne',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      rating: 5,
      content: 'We feel safe knowing our son has the right support team behind him. Thank you Perfect Star Care for being reliable and caring.',
      service: 'Community Support'
    },
    {
      name: 'Anonymous Family Member',
      role: 'Family Member',
      location: 'Melbourne',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      rating: 5,
      content: 'Perfect Star Care has given us peace of mind knowing our family member is safe and well supported. Thank you for your dedication.',
      service: 'Personal Care'
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentReview = testimonials[currentTestimonial];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-gray-50 to-compassion-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="bg-hope-100 text-hope-700 mb-4">Testimonials</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Stories of <span className="text-compassion-600">Empowerment</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from the people who matter most - our participants and their families 
            sharing their experiences and success stories.
          </p>
        </div>

        {/* Main Testimonial Carousel */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="border-0 shadow-2xl bg-white">
            <CardContent className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Profile Image */}
                <div className="flex-shrink-0">
                  <img 
                    src={currentReview.image}
                    alt={`${currentReview.name}, ${currentReview.role}`}
                    className="w-32 h-32 rounded-full object-cover shadow-lg"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 text-center md:text-left">
                  {/* Quote Icon */}
                  <Quote className="h-12 w-12 text-compassion-300 mb-4 mx-auto md:mx-0" />
                  
                  {/* Rating */}
                  <div className="flex justify-center md:justify-start mb-4">
                    {[...Array(currentReview.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-trust-400 fill-current" />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <blockquote className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6 italic">
                    "{currentReview.content}"
                  </blockquote>

                  {/* Author Info */}
                  <div className="space-y-2">
                    <div className="font-bold text-gray-900 text-lg">{currentReview.name}</div>
                    <div className="text-gray-600">{currentReview.role}</div>
                    <div className="text-gray-500 text-sm">{currentReview.location}</div>
                    <Badge variant="outline" className="text-compassion-600 border-compassion-600">
                      {currentReview.service}
                    </Badge>
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex justify-center items-center space-x-4 mt-8">
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={prevTestimonial}
                  className="p-2"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>

                <div className="flex space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === currentTestimonial 
                          ? 'bg-compassion-600' 
                          : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>

                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={nextTestimonial}
                  className="p-2"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          {[
            { number: '98%', label: 'Satisfaction Rate', color: 'text-hope-600' },
            { number: '500+', label: 'Lives Transformed', color: 'text-compassion-600' },
            { number: '24/7', label: 'Support Available', color: 'text-trust-600' },
            { number: '15+', label: 'Years Experience', color: 'text-purple-600' }
          ].map((stat, index) => (
            <div key={stat.label} className="text-center">
              <div className={`text-4xl font-bold ${stat.color} mb-2`}>
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Start Your Success Story?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join hundreds of participants who have achieved their goals with our support. 
            Your journey to independence and empowerment starts here.
          </p>
          <Button 
            size="lg" 
            className="bg-compassion-600 hover:bg-compassion-700 text-white px-8 py-3 text-lg font-semibold rounded-full"
          >
            Share Your Story
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
