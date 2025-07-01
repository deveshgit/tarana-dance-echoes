import React from 'react';
import { Star } from 'lucide-react';

const TitleSection = () => {
  return (
    <section className="py-8 bg-gradient-to-br from-amber-50 via-red-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="dance-fade-in">
          <div className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg">
            <Star className="w-5 h-5 text-yellow-500 mr-3" fill="currentColor" />
            <span className="text-lg font-medium text-gray-700">Preserving Indian Classical Dance Culture</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TitleSection;