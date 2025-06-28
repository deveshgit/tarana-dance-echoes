
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Eye } from 'lucide-react';

const FeaturedMediaSection = () => {
  const featuredMedia = [
    {
      id: 1,
      type: 'image',
      src: '/api/placeholder/400/300',
      alt: 'Kathak performance at cultural festival',
      title: 'Annual Cultural Festival 2024',
      description: 'Students performing classical Kathak at the city cultural festival'
    },
    {
      id: 2,
      type: 'image',
      src: '/api/placeholder/400/300',
      alt: 'Traditional Kathak costume and jewelry',
      title: 'Traditional Attire',
      description: 'Beautiful costumes and jewelry used in authentic Kathak performances'
    },
    {
      id: 3,
      type: 'image',
      src: '/api/placeholder/400/300',
      alt: 'Group of students in dance pose',
      title: 'Student Showcase',
      description: 'Our talented students demonstrating perfect form and technique'
    },
    {
      id: 4,
      type: 'image',
      src: '/api/placeholder/400/300',
      alt: 'Instructor teaching classical moves',
      title: 'Expert Instruction',
      description: 'Professional guidance in traditional Kathak techniques'
    },
    {
      id: 5,
      type: 'image',
      src: '/api/placeholder/400/300',
      alt: 'Stage performance with dramatic lighting',
      title: 'Stage Performance',
      description: 'Mesmerizing stage performance showcasing the beauty of Kathak'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Featured <span className="dance-text-gradient">Media</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Glimpse into our vibrant community of dancers and the beautiful art of Kathak in action.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredMedia.map((media, index) => (
            <div 
              key={media.id}
              className="dance-slide-up group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={media.src}
                  alt={media.alt}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center space-x-2 text-white">
                      <Eye className="w-4 h-4" />
                      <span className="text-sm">View Details</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-red-600 transition-colors">
                  {media.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {media.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/performances"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-full font-semibold text-lg hover:from-red-700 hover:to-red-800 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            View All Performances
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedMediaSection;
