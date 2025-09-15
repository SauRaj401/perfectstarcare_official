
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Home, Users, FileText, Heart, Clock, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesOverview = () => {
  const services = [
    {
      icon: Home,
      title: 'NDIS Core Supports',
      description: 'Essential daily living support including personal care, household tasks, and community access.',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600',
      code: '0107, 0115, 0120, 0125'
    },
    {
      icon: Users,
      title: 'Community Participation',
      description: 'Innovative community participation programs and group activities to build social connections.',
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600',
      code: '0116, 0136'
    },
    {
      icon: FileText,
      title: 'Accommodation Support',
      description: 'Specialised disability accommodation and assistance with tenancy management.',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-600',
      code: '0101, 0131'
    },
    {
      icon: Heart,
      title: 'High Intensity Supports',
      description: 'Complex medical care including tracheostomy, ventilator management, and specialized nursing.',
      color: 'from-pink-500 to-pink-600',
      bgColor: 'bg-pink-50',
      iconColor: 'text-pink-600',
      code: 'Complex Care'
    },
    {
      icon: Clock,
      title: 'Personal Care Services',
      description: 'High-intensity personal activities support and daily living assistance.',
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50',
      iconColor: 'text-orange-600',
      code: '0104, 0107'
    },
    {
      icon: Briefcase,
      title: 'Employment & Life Skills',
      description: 'Employment support, life skills development, and transition assistance programs.',
      color: 'from-indigo-500 to-indigo-600',
      bgColor: 'bg-indigo-50',
      iconColor: 'text-indigo-600',
      code: '0102, 0106, 0117'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-2 bg-compassion-100 text-compassion-700 rounded-full text-sm font-semibold mb-6">
            Our Services
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
            Comprehensive <span className="text-transparent bg-clip-text bg-gradient-to-r from-compassion-600 to-hope-500">Care Solutions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Perfect Star Care Solution offers a full spectrum of NDIS disability support services designed to enhance independence, 
            promote inclusion, and improve quality of life for every participant.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={service.title} 
                className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg bg-white overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8 relative">
                  <div className={`absolute top-0 right-0 w-24 h-24 ${service.bgColor} rounded-bl-3xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`h-8 w-8 ${service.iconColor}`} />
                  </div>
                  <div className="pt-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-mono text-gray-500 bg-gray-100 px-2 py-1 rounded">
                        {service.code}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-compassion-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <div className={`w-full h-1 bg-gradient-to-r ${service.color} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}></div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Link to="/services">
            <Button 
              size="lg" 
              className="group bg-gradient-to-r from-compassion-600 to-hope-500 hover:from-compassion-700 hover:to-hope-600 text-white px-12 py-4 text-xl font-semibold rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              View All Services
              <div className="ml-3 w-6 h-6 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                <div className="w-2 h-2 bg-white rounded-full group-hover:translate-x-0.5 transition-transform"></div>
              </div>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
