
import React from 'react';
import { Star } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Parent",
      text: "My daughter has been learning Kathak here for 2 years. The improvement in her confidence and cultural awareness is remarkable.",
      rating: 5
    },
    {
      name: "Arjun Patel",
      role: "Adult Student",
      text: "As a working professional, I appreciate the flexible timing and the authentic teaching methods. Highly recommended!",
      rating: 5
    },
    {
      name: "Meera Gupta",
      role: "Teen Student",
      text: "Learning Kathak has been an amazing journey. The classes are fun and I love performing at cultural events.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            What Our <span className="dance-text-gradient">Students Say</span>
          </h2>
          <p className="text-xl text-gray-600">
            Hear from our wonderful community of dancers and their families.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="dance-slide-up bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" />
                ))}
              </div>
              <p className="text-gray-600 mb-4 leading-relaxed">"{testimonial.text}"</p>
              <div>
                <div className="font-semibold text-gray-800">{testimonial.name}</div>
                <div className="text-sm text-gray-500">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
