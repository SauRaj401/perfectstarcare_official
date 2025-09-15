
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Home, Users, FileText, Heart, Calendar, Briefcase } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Home,
      title: 'In-Home Support',
      description: 'Personalized care and assistance in the comfort of your own home, including personal care, domestic assistance, and daily living support.',
      features: ['Personal Care', 'Meal Preparation', 'Household Tasks', '24/7 Availability']
    },
    {
      icon: Users,
      title: 'Community Access',
      description: 'Helping you engage with your community through social activities, recreational programs, and skill development opportunities.',
      features: ['Social Activities', 'Recreation Programs', 'Skill Building', 'Transport Support']
    },
    {
      icon: FileText,
      title: 'Plan Management',
      description: 'Expert NDIS plan management services to help you get the most out of your funding and navigate the NDIS system with confidence.',
      features: ['Budget Management', 'Invoice Processing', 'Provider Liaison', 'Plan Reviews']
    },
    {
      icon: Heart,
      title: 'Respite Care',
      description: 'Temporary relief care for families and carers, providing peace of mind while ensuring continuous quality support.',
      features: ['Emergency Respite', 'Planned Breaks', 'Family Support', 'Flexible Scheduling']
    },
    {
      icon: Calendar,
      title: 'Day Programs',
      description: 'Structured daytime activities focused on skill development, social interaction, and meaningful engagement.',
      features: ['Life Skills Training', 'Social Programs', 'Educational Activities', 'Therapeutic Support']
    },
    {
      icon: Briefcase,
      title: 'Employment Support',
      description: 'Assistance with finding and maintaining employment, including job coaching, workplace support, and career development.',
      features: ['Job Coaching', 'Resume Building', 'Interview Preparation', 'Workplace Support']
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-compassion-600">Support Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive disability support services designed to enhance independence, 
            promote inclusion, and improve quality of life for all participants.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={service.title} 
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 p-4 bg-compassion-100 rounded-full w-16 h-16 flex items-center justify-center group-hover:bg-compassion-200 transition-colors">
                    <IconComponent className="h-8 w-8 text-compassion-600" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-compassion-600 transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 mb-4 leading-relaxed">
                    {service.description}
                  </CardDescription>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-gray-700">
                        <div className="w-2 h-2 bg-hope-500 rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-compassion-600 hover:bg-compassion-700 text-white px-8 py-3 text-lg font-semibold rounded-full"
          >
            Learn More About Our Services
          </Button>
          <p className="mt-4 text-gray-600">
            Not sure which service is right for you? 
            <a href="#contact" className="text-compassion-600 hover:underline ml-1">
              Contact us for a free consultation
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
