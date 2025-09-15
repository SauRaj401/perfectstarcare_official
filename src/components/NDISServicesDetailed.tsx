import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Home, 
  Users, 
  FileText, 
  Heart, 
  Clock, 
  Briefcase,
  Activity,
  Shield,
  Stethoscope
} from 'lucide-react';

const NDISServicesDetailed = () => {
  const serviceCategories = [
    {
      title: "Daily Living & Personal Care",
      icon: Users,
      color: 'blue',
      description: "Comprehensive support for personal care and daily living activities"
    },
    {
      title: "Living Arrangements", 
      icon: Home,
      color: 'green',
      description: "Housing and accommodation support services"
    },
    {
      title: "Transport & Access",
      icon: Briefcase,
      color: 'purple',
      description: "Transportation and accessibility support"
    },
    {
      title: "Health & Nursing",
      icon: Stethoscope,
      color: 'red',
      description: "Clinical and health-related support services"
    },
    {
      title: "Skills & Independence",
      icon: Activity,
      color: 'indigo',
      description: "Building skills for independent living and employment"
    },
    {
      title: "Social & Community",
      icon: Users,
      color: 'green',
      description: "Community engagement and social participation"
    },
    {
      title: "Household Support",
      icon: Home,
      color: 'blue',
      description: "Domestic and household management assistance"
    }
  ];

  const classesOfSupport = [
    'Accommodation/Tenancy',
    'Assist Access/Maintain Employ', 
    'Assist Personal Activities High',
    'Assist-Life Stage, Transition',
    'Assist-Personal Activities',
    'Assist-Travel/Transport',
    'Community Nursing Care',
    'Daily Tasks/Shared Living',
    'Innov Community Participation', 
    'Development-Life Skills',
    'Household Tasks',
    'Participate Community',
    'Specialised Disability Accommodation',
    'Group/Centre Activities'
  ];

  const highIntensitySupports = [
    'Complex Bowel Care',
    'Enteral Feeding (NG/Jejunum/Duodenum)', 
    'Tracheostomy Management',
    'Urinary Catheter Management',
    'Ventilator Management',
    'Subcutaneous Injections',
    'Complex Wound Management',
    'Severe Dysphagia Management'
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'border-blue-200 bg-blue-50 text-blue-700',
      green: 'border-green-200 bg-green-50 text-green-700',
      purple: 'border-purple-200 bg-purple-50 text-purple-700',
      indigo: 'border-indigo-200 bg-indigo-50 text-indigo-700',
      red: 'border-red-200 bg-red-50 text-red-700'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-compassion-100 text-compassion-700 rounded-full text-sm font-semibold mb-6">
            NDIS Registered Provider
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-compassion-600 to-hope-500">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            As a Registered NDIS Provider, we are approved to deliver a wide range of supports:
          </p>
        </div>

        {/* Service Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {serviceCategories.map((category, index) => {
            const IconComponent = category.icon;
            const colorClasses = getColorClasses(category.color);
            
            return (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-xl ${colorClasses} border-2`}>
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-compassion-600 transition-colors">
                      {category.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">{category.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Classes of Support */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Classes of <span className="text-compassion-600">Support</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {classesOfSupport.map((support, index) => (
              <div key={index} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="w-2 h-2 rounded-full bg-compassion-500"></div>
                <span className="text-gray-700 font-medium">{support}</span>
              </div>
            ))}
          </div>
        </div>

        {/* High Intensity Daily Personal Activities */}
        <div className="bg-gradient-to-r from-red-50 to-pink-50 rounded-3xl p-8 mb-16 border border-red-100">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-100 text-red-700 rounded-full text-sm font-semibold mb-4">
              <Activity className="h-4 w-4" />
              Registration Group 0104
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              High Intensity Daily Personal Activities
            </h3>
            <p className="text-gray-600 max-w-3xl mx-auto mb-6">
              Perfect Star Care Solution Pty Ltd is registered to provide supports under Registration Group 0104 
              (High Intensity Daily Personal Activities) and is limited to the following specialized supports.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {highIntensitySupports.map((support) => (
              <div 
                key={support}
                className="bg-white p-4 rounded-xl border border-red-200 hover:border-red-300 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-red-100 rounded-lg group-hover:bg-red-200 transition-colors">
                    <Heart className="h-4 w-4 text-red-600" />
                  </div>
                  <span className="text-sm font-medium text-gray-900">
                    {support}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Approvals */}
          <div className="bg-white rounded-2xl p-6 border border-red-200">
            <h4 className="text-xl font-bold text-gray-900 mb-4 text-center">
              Additional Approved Services
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-3 rounded-lg bg-red-50">
                <div className="p-2 bg-red-100 rounded-lg">
                  <Shield className="h-4 w-4 text-red-600" />
                </div>
                <span className="text-sm font-medium text-gray-900">
                  Supporting participants with day-to-day management of medication
                </span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg bg-red-50">
                <div className="p-2 bg-red-100 rounded-lg">
                  <Shield className="h-4 w-4 text-red-600" />
                </div>
                <span className="text-sm font-medium text-gray-900">
                  Disposal of waste, infectious or hazardous substances
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-compassion-600 to-hope-500 rounded-3xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Get Started?</h3>
          <p className="text-xl text-compassion-100 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss how our NDIS registered services can support you or your loved one.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-white text-compassion-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
            >
              Request Service Information
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white hover:text-compassion-600 px-8 py-4 text-lg font-semibold"
            >
              Schedule Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NDISServicesDetailed;