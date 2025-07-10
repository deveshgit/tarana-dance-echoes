
import React from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-amber-900 to-red-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Academy Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Tarana Dance Academy</h3>
            <p className="text-gray-200 leading-relaxed">
              Preserving and promoting the beautiful art of Kathak dance. 
              Inspiring young minds to connect with Indian classical dance culture.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/" className="block text-gray-200 hover:text-white transition-colors">Home</Link>
              <Link to="/about" className="block text-gray-200 hover:text-white transition-colors">About Us</Link>
              <Link to="/performances" className="block text-gray-200 hover:text-white transition-colors">Performances</Link>
              <Link to="/contact" className="block text-gray-200 hover:text-white transition-colors">Contact Us</Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Get In Touch</h3>
            <div className="space-y-2 text-gray-200">
              <p>Start your Kathak journey today</p>
              <p>Experience the grace of Indian classical dance</p>
            </div>
          </div>
        </div>

        <div className="border-t border-red-800 mt-8 pt-8 text-center">
          <p className="text-gray-200 flex items-center justify-center space-x-2">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-400" fill="currentColor" />
            <span>for preserving Indian classical dance culture</span>
          </p>
          <p className="text-gray-300 text-sm mt-2">
            © 2024 Tarana Dance Academy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
