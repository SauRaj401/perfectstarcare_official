
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Heart, Shield, Users } from 'lucide-react';

const AboutSection = () => {
  const values = [
    {
      icon: Heart,
      title: 'Respect & Dignity',
      description: 'Every participant deserves to be treated with kindness and equality.'
    },
    {
      icon: Shield,
      title: 'Safety & Quality',
      description: 'Delivering safe, reliable, and high-quality care in compliance with NDIS standards.'
    },
    {
      icon: Users,
      title: 'Empowerment',
      description: 'Supporting you to make choices and live life on your terms.'
    }
  ];

  const stats = [
    { number: '500+', label: 'Participants Supported' },
    { number: '15+', label: 'Years Experience' },
    { number: '98%', label: 'Satisfaction Rate' },
    { number: '24/7', label: 'Support Available' }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <div className="mb-8">
              <Badge className="bg-hope-100 text-hope-700 mb-4">About Us</Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Dedicated to <span className="text-compassion-600">Empowering Lives</span>
              </h2>
              
              {/* Who We Are */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Who We Are</h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-4">
                  Perfect Star Care Solution is built on compassion, trust, and professionalism. We work closely with participants, families, and carers to deliver high-quality and safe disability support services.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed mb-4">
                  At Perfect Star Care, we believe every person deserves dignity, respect, and the opportunity to live their best life. Experience compassionate care that adapts to your unique needs and goals.
                </p>
                <p className="text-xl font-semibold text-compassion-600 text-center italic">
                  Your Choice. Your Control. Your Future.
                </p>
              </div>

              {/* Our Mission */}
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  To provide personalised support that enhances independence, promotes inclusion, and ensures every participant can achieve their goals under the NDIS.
                </p>
              </div>
            </div>

            {/* Our Values */}
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Values</h3>
              <div className="grid grid-cols-1 gap-6">
              {values.map((value) => {
                const IconComponent = value.icon;
                return (
                  <div key={value.title} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 p-2 bg-compassion-100 rounded-lg">
                      <IconComponent className="h-5 w-5 text-compassion-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{value.title}</h3>
                      <p className="text-sm text-gray-600">{value.description}</p>
                    </div>
                  </div>
                );
              })}
              </div>
            </div>
          </div>

          {/* Image and Stats */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Professional disability support team member assisting a participant"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-compassion-900/20 to-transparent"></div>
            </div>

            {/* Stats Card */}
            <Card className="absolute -bottom-8 -left-8 bg-white shadow-xl border-0">
              <CardContent className="p-6">
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat) => (
                    <div key={stat.label} className="text-center">
                      <div className="text-2xl font-bold text-compassion-600 mb-1">
                        {stat.number}
                      </div>
                      <div className="text-xs text-gray-600 font-medium">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Our Leadership Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                name: 'Sarah Johnson',
                role: 'Founder & CEO',
                image: 'https://images.unsplash.com/photo-1494790108755-2616b612b47c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
              },
              {
                name: 'Michael Chen',
                role: 'Clinical Director',
                image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
              },
              {
                name: 'Emma Williams',
                role: 'Operations Manager',
                image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
              }
            ].map((member) => (
              <div key={member.name} className="text-center">
                <img 
                  src={member.image}
                  alt={`${member.name}, ${member.role}`}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover shadow-lg"
                />
                <h4 className="font-semibold text-gray-900">{member.name}</h4>
                <p className="text-compassion-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
