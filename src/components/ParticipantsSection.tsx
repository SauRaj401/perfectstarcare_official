
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FileText, Video, Users, Phone, Calendar, Download } from 'lucide-react';

const ParticipantsSection = () => {
  const resources = [
    {
      icon: FileText,
      title: 'Participant Handbook',
      description: 'Complete guide to our services, policies, and your rights as a participant.',
      type: 'PDF Guide',
      downloadSize: '2.3 MB'
    },
    {
      icon: Video,
      title: 'Getting Started Videos',
      description: 'Step-by-step video tutorials on how to access and use our services.',
      type: 'Video Series',
      duration: '15 min'
    },
    {
      icon: Users,
      title: 'Support Group Directory',
      description: 'Find local support groups and peer networks in your area.',
      type: 'Directory',
      locations: '50+ Groups'
    },
    {
      icon: Calendar,
      title: 'Activity Calendar',
      description: 'Monthly calendar of community events, workshops, and social activities.',
      type: 'Calendar',
      frequency: 'Updated Monthly'
    }
  ];

  const steps = [
    {
      number: '01',
      title: 'Initial Contact',
      description: 'Reach out to us via phone, email, or our online form. We\'ll schedule a convenient time to discuss your needs.',
      action: 'Call 0452100305'
    },
    {
      number: '02',
      title: 'Assessment & Planning',
      description: 'We\'ll meet with you to understand your goals, assess your needs, and develop a personalized support plan.',
      action: 'Book Assessment'
    },
    {
      number: '03',
      title: 'Service Agreement',
      description: 'Review and sign your service agreement outlining the supports we\'ll provide and how we\'ll work together.',
      action: 'Review Terms'
    },
    {
      number: '04',
      title: 'Start Your Journey',
      description: 'Begin receiving your supports with regular check-ins to ensure everything is working well for you.',
      action: 'Begin Services'
    }
  ];

  return (
    <section id="participants" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="bg-hope-100 text-hope-700 mb-4">For Participants</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Your Journey <span className="text-compassion-600">Starts Here</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Access resources, guides, and support tools designed to help you navigate 
            your disability support journey with confidence and independence.
          </p>
        </div>

        {/* Resources */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-12">
            Helpful Resources & Guides
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.map((resource) => {
              const IconComponent = resource.icon;
              return (
                <Card key={resource.title} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-lg">
                  <CardHeader className="text-center pb-4">
                    <div className="mx-auto mb-4 p-3 bg-compassion-100 rounded-lg w-14 h-14 flex items-center justify-center group-hover:bg-compassion-200 transition-colors">
                      <IconComponent className="h-7 w-7 text-compassion-600" />
                    </div>
                    <CardTitle className="text-lg font-bold text-gray-900">
                      {resource.title}
                    </CardTitle>
                    <Badge variant="outline" className="w-fit mx-auto text-xs">
                      {resource.type}
                    </Badge>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                      {resource.description}
                    </p>
                    <div className="flex items-center justify-center space-x-2 text-xs text-gray-500 mb-4">
                      <Download className="h-3 w-3" />
                      <span>
                        {resource.downloadSize || resource.duration || resource.locations || resource.frequency}
                      </span>
                    </div>
                    <Button variant="outline" size="sm" className="w-full">
                      Access Resource
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Getting Started Steps */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-12">
            How to Get Started
          </h3>
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <div key={step.number} className="relative">
                  {/* Connection Line */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-compassion-300 to-hope-300 z-0"></div>
                  )}
                  
                  <Card className="relative z-10 text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
                    <CardHeader>
                      <div className="mx-auto mb-4 w-16 h-16 bg-gradient-to-br from-compassion-500 to-hope-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                        {step.number}
                      </div>
                      <CardTitle className="text-lg font-bold text-gray-900">
                        {step.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                        {step.description}
                      </p>
                      <Button variant="outline" size="sm" className="text-compassion-600 border-compassion-600 hover:bg-compassion-50">
                        {step.action}
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Intake Form CTA */}
        <div className="bg-gradient-to-r from-compassion-600 to-hope-600 rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Begin Your Journey?</h3>
          <p className="text-xl mb-8 text-compassion-100 max-w-2xl mx-auto">
            Complete our simple intake form to start the process. It takes just 5 minutes 
            and helps us understand how we can best support you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-white text-compassion-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold rounded-full"
            >
              Complete Intake Form
            </Button>
            <div className="flex items-center space-x-2 text-compassion-100">
              <Phone className="h-5 w-5" />
              <span>Or call us at 0452100305</span>
            </div>
          </div>
        </div>

        {/* Emergency Support */}
        <div className="mt-12 text-center p-6 bg-red-50 rounded-lg border border-red-200">
          <h4 className="font-bold text-red-800 mb-2">Need Immediate Support?</h4>
          <p className="text-red-700 mb-4">
            If you're experiencing a crisis or emergency, please contact our 24/7 support line.
          </p>
          <Button className="bg-red-600 hover:bg-red-700 text-white">
            Emergency Support: 1800 123 456
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ParticipantsSection;
