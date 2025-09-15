
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const QuickStats = () => {
  const stats = [
    { 
      number: '500+', 
      label: 'Participants Supported', 
      gradient: 'from-blue-500 to-cyan-500',
      description: 'Across all service categories'
    },
    { 
      number: '15+', 
      label: 'Years Experience', 
      gradient: 'from-green-500 to-emerald-500',
      description: 'In disability support services'
    },
    { 
      number: '98%', 
      label: 'Satisfaction Rate', 
      gradient: 'from-purple-500 to-pink-500',
      description: 'From participants and families'
    },
    { 
      number: '24/7', 
      label: 'Support Available', 
      gradient: 'from-orange-500 to-red-500',
      description: 'Emergency and ongoing care'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-32 h-32 bg-compassion-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-hope-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="text-center mb-20 relative z-10">
          <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-full text-sm font-semibold mb-6">
            Our Impact
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            GDC by the <span className="text-transparent bg-clip-text bg-gradient-to-r from-compassion-400 to-hope-400">Numbers</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Our commitment to excellence is reflected in the meaningful outcomes we achieve 
            together with our participants and their families.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
          {stats.map((stat, index) => (
            <Card 
              key={stat.label} 
              className="group bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105 hover:bg-white/10"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardContent className="p-8 text-center relative overflow-hidden">
                {/* Background Glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                <div className="relative z-10">
                  <div className={`text-6xl md:text-7xl font-black mb-4 text-transparent bg-clip-text bg-gradient-to-br ${stat.gradient} group-hover:scale-110 transition-transform duration-300`}>
                    {stat.number}
                  </div>
                  <div className="text-xl font-bold text-white mb-2 group-hover:text-gray-100 transition-colors">
                    {stat.label}
                  </div>
                  <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                    {stat.description}
                  </div>
                  
                  {/* Animated Line */}
                  <div className="mt-6 flex justify-center">
                    <div className={`w-16 h-1 bg-gradient-to-r ${stat.gradient} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickStats;
