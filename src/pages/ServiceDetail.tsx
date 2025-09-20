import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, CheckCircle2, Phone, Mail } from 'lucide-react';

const ServiceDetail = () => {
  const { serviceSlug } = useParams();

  const serviceData = {
    'daily-living-and-personal-care': {
      title: 'Daily Living & Personal Care',
      description: 'We Care Plus offers extensive household task support for individuals with disabilities, including:',
      services: [
        'Assist-Personal Activities',
        'Assist Personal Activities High',
        'Development-Life Skills',
      ],
      details: [
        'Personal hygiene assistance and bathing support',
        'Meal preparation and feeding assistance',
        'Medication management and reminders',
        'Mobility assistance and transfers',
        'Toileting and continence support',
        'Grooming and dressing assistance',
        'Communication support and advocacy'
      ],
      image: '/perfect-images/66406ded-2444-4ac2-bf9d-b70b087b35ba.png'
    },
    'living-arrangements': {
      title: 'Living Arrangements',
      description: 'We Care Plus offers comprehensive living arrangement support for individuals with disabilities, including:',
      services: [
        'Accommodation/Tenancy',
        'Daily Tasks/Shared Living', 
        'Specialised Disability Accommodation',
      ],
      details: [
        'Assistance finding suitable accommodation',
        'Support with tenancy applications and agreements',
        'Shared living arrangement coordination',
        'Household management and organization',
        'Budgeting and financial planning support',
        'Furniture and equipment setup',
        'Neighbour and community relationship building'
      ],
      image: '/perfect-images/66406ded-2444-4ac2-bf9d-b70b087b35ba.png'
    },
    'transport-and-access': {
      title: 'Transport & Access',
      description: 'We Care Plus offers transport and access support for individuals with disabilities, including:',
      services: [
        'Assist-Travel/Transport',
      ],
      details: [
        'Transportation to medical appointments',
        'Community access and participation support',
        'Public transport training and assistance',
        'Vehicle modification consultation',
        'Accessible parking assistance',
        'Travel planning and coordination',
        'Emergency transport arrangements'
      ],
      image: '/perfect-images/66406ded-2444-4ac2-bf9d-b70b087b35ba.png'
    },
    'health-and-nursing': {
      title: 'Health & Nursing',
      description: 'We Care Plus offers specialized health and nursing care for individuals with disabilities, including:',
      services: [
        'Community Nursing Care',
      ],
      details: [
        'Medication administration and management',
        'Wound care and dressing changes',
        'Health monitoring and vital signs',
        'Complex medical equipment management',
        'Coordination with healthcare professionals',
        'Health education and support',
        'Emergency medical response'
      ],
      image: '/perfect-images/66406ded-2444-4ac2-bf9d-b70b087b35ba.png'
    },
    'skills-and-independence': {
      title: 'Skills & Independence',
      description: 'We Care Plus offers skills development and independence support for individuals with disabilities, including:',
      services: [
        'Assist Access/Maintain Employ',
        'Assist-Life Stage, Transition',
      ],
      details: [
        'Employment skills training and support',
        'Job search assistance and interview preparation',
        'Workplace accommodation advocacy',
        'Life skills development programs',
        'Independent living skills training',
        'Educational support and tutoring',
        'Transition planning and coordination'
      ],
      image: '/perfect-images/66406ded-2444-4ac2-bf9d-b70b087b35ba.png'
    },
    'social-and-community': {
      title: 'Social & Community',
      description: 'We Care Plus offers social and community participation support for individuals with disabilities, including:',
      services: [
        'Participate Community',
        'Innov Community Participation',
        'Group/Centre Activities',
      ],
      details: [
        'Community event participation',
        'Social skills development',
        'Group activity coordination',
        'Volunteer work opportunities',
        'Cultural and recreational activities',
        'Peer support group facilitation',
        'Community advocacy and representation'
      ],
      image: '/perfect-images/66406ded-2444-4ac2-bf9d-b70b087b35ba.png'
    },
    'household-support': {
      title: 'Household Support',
      description: 'We Care Plus offers extensive household task support for individuals with disabilities, including:',
      services: [
        'Household Tasks',
      ],
      details: [
        'Vacuuming, sweeping, dusting, and mopping',
        'Managing laundry and other demanding household chores',
        'Cleaning bathrooms and kitchens',
        'Garden maintenance',
        'Emptying and disposing of bins'
      ],
      image: '/perfect-images/66406ded-2444-4ac2-bf9d-b70b087b35ba.png'
    }
  };

  const service = serviceData[serviceSlug as keyof typeof serviceData];

  if (!service) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Service Not Found</h1>
          <Link to="/services" className="text-compassion-600 hover:underline">
            Return to Services
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section with Breadcrumb */}
      <section className="bg-gradient-to-r from-compassion-600 to-hope-500 text-white py-16">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <nav className="flex items-center space-x-2 text-sm text-compassion-100 mb-6">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link to="/services" className="hover:text-white transition-colors">Services</Link>
            <span>/</span>
            <span className="text-white">{service.title}</span>
          </nav>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{service.title}</h1>
        </div>
      </section>

      {/* Service Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Content */}
            <div>
              <p className="text-lg text-gray-700 mb-8">{service.description}</p>
              
              <div className="space-y-4 mb-8">
                {service.details.map((detail, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-compassion-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{detail}</span>
                  </div>
                ))}
              </div>

              {/* NDIS Codes */}
              <Card className="mb-8">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Available NDIS Services</h3>
                  <div className="space-y-2">
                    {service.services.map((serviceItem, index) => (
                      <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                        <div className="w-2 h-2 rounded-full bg-compassion-500"></div>
                        <span className="text-gray-700 font-medium">{serviceItem}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Call to Action */}
              <div className="bg-gradient-to-r from-compassion-600 to-hope-500 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
                <p className="text-compassion-100 mb-6">
                  Contact us today to discuss how our {service.title.toLowerCase()} services can support you or your loved one.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    size="lg"
                    className="bg-white text-compassion-600 hover:bg-gray-100 font-semibold"
                  >
                    <Phone className="h-4 w-4 mr-2" />
                    Call Now
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-white text-white hover:bg-white hover:text-compassion-600 font-semibold"
                  >
                    <Mail className="h-4 w-4 mr-2" />
                    Email Us
                  </Button>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="lg:sticky lg:top-8">
              <img 
                src={service.image} 
                alt={service.title}
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>

          {/* Back to Services */}
          <div className="mt-12 text-center">
            <Link 
              to="/services"
              className="inline-flex items-center text-compassion-600 hover:text-compassion-700 font-medium transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to All Services
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServiceDetail;