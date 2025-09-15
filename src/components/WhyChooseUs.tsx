
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Award, Users, Clock, Heart, Shield } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Award,
      title: 'Registered NDIS Provider',
      description: 'Fully accredited with the NDIS Quality & Safeguards Commission, ensuring compliance and quality care.',
      gradient: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Users,
      title: 'Wide Range of Supports',
      description: 'From daily living to high-intensity care, we\'ve got you covered with comprehensive support services.',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: Shield,
      title: 'Qualified & Experienced Staff',
      description: 'Skilled support workers and registered nurses who put your safety first with proven expertise.',
      gradient: 'from-purple-500 to-violet-500'
    },
    {
      icon: Heart,
      title: 'Person-Centred Care',
      description: 'Your needs, goals, and choices are always our top priority in everything we do.',
      gradient: 'from-pink-500 to-rose-500'
    },
    {
      icon: Clock,
      title: 'Flexible & Reliable Services',
      description: 'We adapt our support to suit your lifestyle and schedule with dependable care.',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: CheckCircle,
      title: 'Culturally Inclusive Team',
      description: 'Respecting diversity and providing care for all cultural backgrounds with commitment to quality & safety.',
      gradient: 'from-indigo-500 to-blue-500'
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-2 bg-hope-100 text-hope-700 rounded-full text-sm font-semibold mb-6">
            Why Choose Us?
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
            Excellence in <span className="text-transparent bg-clip-text bg-gradient-to-r from-compassion-600 to-hope-500">Disability Care</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            As a registered NDIS provider, we understand that every person's journey is unique. That's why we work closely with participants, families, and support networks to create personalized care plans that truly make a difference.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const IconComponent = reason.icon;
            return (
              <Card 
                key={reason.title} 
                className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg bg-white overflow-hidden"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-8 text-center relative">
                  <div className="relative mb-6">
                    <div className={`mx-auto w-20 h-20 bg-gradient-to-br ${reason.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                      <IconComponent className="h-10 w-10 text-white" />
                    </div>
                    <div className={`absolute inset-0 mx-auto w-20 h-20 bg-gradient-to-br ${reason.gradient} rounded-2xl opacity-20 blur-xl group-hover:blur-2xl transition-all duration-300`}></div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-compassion-600 transition-colors">
                    {reason.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {reason.description}
                  </p>
                  <div className="mt-6 flex justify-center">
                    <div className={`w-16 h-1 bg-gradient-to-r ${reason.gradient} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
