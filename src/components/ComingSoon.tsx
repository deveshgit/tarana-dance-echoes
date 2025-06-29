
import React from 'react';
import { Clock, Heart } from 'lucide-react';

const ComingSoon = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-red-50 to-orange-50 flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="dance-fade-in">
          {/* Logo/Title */}
          <div className="mb-8">
            <h1 className="text-5xl md:text-6xl font-bold dance-text-gradient mb-4">
              Tarana Dance Academy
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-amber-500 mx-auto rounded-full"></div>
          </div>

          {/* Coming Soon Message */}
          <div className="mb-12">
            <div className="flex items-center justify-center mb-6">
              <Clock className="w-8 h-8 text-red-600 mr-3" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                Coming Soon
              </h2>
            </div>
            <p className="text-xl text-gray-600 leading-relaxed mb-6">
              We're preparing something beautiful for you. Our new website showcasing the grace and beauty of Kathak dance will be launching soon.
            </p>
            <p className="text-lg text-gray-500">
              Experience the rich cultural heritage of Indian classical dance with professional instruction for all ages.
            </p>
          </div>

          {/* Features Preview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-6 h-6 bg-red-600 rounded-full"></div>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Expert Instruction</h3>
              <p className="text-sm text-gray-600">Learn from experienced Kathak instructors</p>
            </div>
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-6 h-6 bg-amber-600 rounded-full"></div>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">All Ages Welcome</h3>
              <p className="text-sm text-gray-600">Classes for children, teens, and adults</p>
            </div>
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-6 h-6 bg-orange-600 rounded-full"></div>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Cultural Heritage</h3>
              <p className="text-sm text-gray-600">Preserving Indian classical dance traditions</p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Get Notified When We Launch</h3>
            <p className="text-gray-600 mb-6">
              Stay tuned for updates about our grand opening and special launch offers.
            </p>
            <div className="text-sm text-gray-500">
              Follow us for updates and behind-the-scenes content of our dance academy.
            </div>
          </div>

          {/* Footer */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-gray-500 flex items-center justify-center space-x-2">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-400" fill="currentColor" />
              <span>for preserving Indian classical dance culture</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
