
import React from 'react';
import { Users, Star, Calendar, Award } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Expert Instruction",
      description: "Learn from a professional Kathak dancer with years of experience in teaching and performance."
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Cultural Heritage",
      description: "Immerse yourself in the rich traditions of Indian classical dance and connect with centuries of history."
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Flexible Classes",
      description: "Choose from various class schedules designed to fit different age groups and skill levels."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Performance Opportunities",
      description: "Showcase your skills at cultural events and festivals throughout the year."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Why Choose <span className="dance-text-gradient">Tarana Dance Academy</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience the perfect blend of traditional authenticity and modern teaching excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="dance-slide-up bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 dance-gradient rounded-full flex items-center justify-center mx-auto mb-4 text-white group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
