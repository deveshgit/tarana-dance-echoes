
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CTASection = () => {
  return (
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
  );
};

export default CTASection;
