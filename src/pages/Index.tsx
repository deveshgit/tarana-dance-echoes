
import React from 'react';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Star, Calendar, Award } from 'lucide-react';

const Index = () => {
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
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      
      {/* Features Section */}
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

      {/* About Preview Section */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="dance-slide-up">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Preserving the Art of <span className="dance-text-gradient">Kathak</span>
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Kathak is more than just a dance form - it's a storytelling tradition that has captivated audiences 
                  for centuries. At Tarana Dance Academy, we believe in preserving this beautiful art while making 
                  it accessible to students of all ages.
                </p>
                <p>
                  Our approach combines traditional techniques with contemporary teaching methods, ensuring that 
                  every student not only learns the movements but also understands the cultural significance and 
                  emotional depth of this classical dance form.
                </p>
              </div>
              <Link
                to="/about"
                className="inline-flex items-center mt-6 px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-full font-semibold hover:from-red-700 hover:to-red-800 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Learn More About Us
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
            
            <div className="dance-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 dance-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl text-white">🏆</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">Our Achievements</h3>
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="p-4 bg-red-50 rounded-lg">
                    <div className="text-2xl font-bold text-red-600">20+</div>
                    <div className="text-sm text-gray-600">Years Experience</div>
                  </div>
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">500+</div>
                    <div className="text-sm text-gray-600">Students Trained</div>
                  </div>
                  <div className="p-4 bg-amber-50 rounded-lg">
                    <div className="text-2xl font-bold text-amber-600">100+</div>
                    <div className="text-sm text-gray-600">Performances</div>
                  </div>
                  <div className="p-4 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">15+</div>
                    <div className="text-sm text-gray-600">Awards Won</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="dance-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your Kathak Journey?
            </h2>
            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              Join our community of passionate dancers and discover the grace, beauty, and cultural richness of Indian classical dance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-red-600 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-full font-semibold text-lg hover:bg-white hover:text-red-600 transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
