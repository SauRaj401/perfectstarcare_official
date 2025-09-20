
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { FileText, Users, DollarSign, CheckCircle } from 'lucide-react';

const NDISSection = () => {
  const ndisSteps = [
    {
      icon: FileText,
      title: 'Access Request',
      description: 'Submit your NDIS access request with required documentation and assessments.'
    },
    {
      icon: Users,
      title: 'Planning Meeting',
      description: 'Meet with an NDIS planner to discuss your goals and support needs.'
    },
    {
      icon: DollarSign,
      title: 'Plan Approval',
      description: 'Receive your NDIS plan with approved funding for various support categories.'
    },
    {
      icon: CheckCircle,
      title: 'Service Delivery',
      description: 'Connect with providers like us to start receiving your support services.'
    }
  ];

  const faqs = [
    {
      question: 'What is the NDIS?',
      answer: 'The National Disability Insurance Scheme (NDIS) provides funding for people with permanent and significant disabilities to access the supports and services they need to live an ordinary life.'
    },
    {
      question: 'Am I eligible for NDIS funding?',
      answer: 'To be eligible, you must be under 65 when you first access the scheme, live in Australia, and have a permanent disability that significantly affects your ability to participate in everyday activities.'
    },
    {
      question: 'How do I apply for NDIS?',
      answer: 'You can apply online through the NDIS website, call them directly, or visit a local office. You\'ll need to provide evidence of your disability and how it affects your daily life.'
    },
    {
      question: 'What supports can NDIS fund?',
      answer: 'NDIS can fund supports in three categories: Core (daily activities), Capital (assistive technology and home modifications), and Capacity Building (developing skills and independence).'
    },
    {
      question: 'How often is my NDIS plan reviewed?',
      answer: 'NDIS plans are typically reviewed every 12 months, but this can vary. You can request an earlier review if your circumstances change significantly.'
    },
    {
      question: 'Can I choose my own service providers?',
      answer: 'Yes! The NDIS gives you choice and control. You can choose which registered providers you want to work with, including us for your disability support needs.'
    }
  ];

  return (
    <section id="ndis" className="py-20 bg-gradient-to-br from-compassion-50 to-hope-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        {/* <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            <span className="text-compassion-600">NDIS</span> Information
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The NDIS is Australia's first national Scheme for people with disability. The NDIS provides funding to eligible people with disability to gain more time with family and friends, greater independence, access to new skills, jobs, or volunteering in their community, and an improved quality of life.
          </p>
        </div> */}

        {/* NDIS Process */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-12">
            How the NDIS Process Works
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {ndisSteps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <Card key={step.title} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="mx-auto mb-4 p-4 bg-compassion-100 rounded-full w-16 h-16 flex items-center justify-center relative">
                      <IconComponent className="h-8 w-8 text-compassion-600" />
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-hope-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                        {index + 1}
                      </div>
                    </div>
                    <CardTitle className="text-lg font-bold text-gray-900">
                      {step.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* How We Support NDIS Participants */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              About the <span className="text-compassion-600">NDIS</span>
            </h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-3 h-3 bg-hope-500 rounded-full mt-2"></div>
                <div>
                  <p className="text-gray-600">The NDIS also connects anyone with disability to services in their community. This includes connections to doctors, community groups, sporting clubs, support groups, libraries and schools, as well as providing information about what support is provided by each state and territory government.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-3 h-3 bg-hope-500 rounded-full mt-2"></div>
                <div>
                  <p className="text-gray-600">The NDIS now supports over 500,000 Australians with disability to access the services and supports they need.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-3 h-3 bg-hope-500 rounded-full mt-2"></div>
                <div>
                  <p className="text-gray-600">This includes supporting approximately 80,000 children with developmental delay, ensuring they receive supports early so that they achieve the best outcomes throughout their lives.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-3 h-3 bg-hope-500 rounded-full mt-2"></div>
                <div>
                  <p className="text-gray-600">For more information you can view the Participant Service Charter. Find more resources about applying to the NDIS in accessible formats on the booklets and factsheets page.</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="NDIS planning meeting with participant and support coordinator"
              className="rounded-2xl shadow-xl w-full h-96 object-cover"
            />
          </div>
        </div>

        {/* FAQs */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Frequently Asked Questions
          </h3>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white border border-gray-200 rounded-lg px-6"
              >
                <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-compassion-600">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button 
            size="lg" 
            className="bg-compassion-600 hover:bg-compassion-700 text-white px-8 py-3 text-lg font-semibold rounded-full"
          >
            Get Help with Your NDIS Journey
          </Button>
          <p className="mt-4 text-gray-600">
            Have questions about NDIS? 
            <a href="#contact" className="text-compassion-600 hover:underline ml-1">
              Contact our NDIS specialists
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default NDISSection;
