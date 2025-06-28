
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const AboutPreviewSection = () => {
  return (
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
  );
};

export default AboutPreviewSection;
