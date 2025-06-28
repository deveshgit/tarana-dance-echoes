
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-red-50 to-blue-50"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-red-200 rounded-full opacity-20 dance-float"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-200 rounded-full opacity-20 dance-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-20 w-16 h-16 bg-amber-200 rounded-full opacity-20 dance-float" style={{ animationDelay: '4s' }}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="dance-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg mb-6">
            <Star className="w-4 h-4 text-yellow-500 mr-2" fill="currentColor" />
            <span className="text-sm font-medium text-gray-700">Preserving Indian Classical Dance Culture</span>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="block text-gray-800">Welcome to</span>
            <span className="block dance-text-gradient">Tarana Dance Academy</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Discover the grace and beauty of Kathak - India's most elegant classical dance form. 
            Join us in celebrating centuries of rich cultural heritage.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/about"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-full font-semibold text-lg hover:from-red-700 hover:to-red-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Learn About Kathak
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full font-semibold text-lg hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl border border-gray-200"
            >
              Start Your Journey
            </Link>
          </div>
        </div>

        {/* Feature highlights */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="dance-slide-up text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg" style={{ animationDelay: '0.2s' }}>
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🎭</span>
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Classical Kathak</h3>
            <p className="text-gray-600 text-sm">Traditional techniques and authentic movements</p>
          </div>
          
          <div className="dance-slide-up text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg" style={{ animationDelay: '0.4s' }}>
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">👑</span>
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Cultural Heritage</h3>
            <p className="text-gray-600 text-sm">Rich traditions passed down through generations</p>
          </div>
          
          <div className="dance-slide-up text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg" style={{ animationDelay: '0.6s' }}>
            <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">✨</span>
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Expert Guidance</h3>
            <p className="text-gray-600 text-sm">Professional instruction and personalized attention</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
