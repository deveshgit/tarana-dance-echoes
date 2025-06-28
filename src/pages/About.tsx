
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Award, Users, Calendar, Heart } from 'lucide-react';

const About = () => {
  const achievements = [
    {
      icon: <Award className="w-6 h-6" />,
      title: "20+ Years Experience",
      description: "Two decades of dedicated teaching and performance"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "500+ Students Trained",
      description: "Proud to have guided hundreds of students in their dance journey"
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "100+ Performances",
      description: "Showcased Kathak at numerous cultural events and festivals"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Cultural Ambassador",
      description: "Promoting Indian classical dance culture globally"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-red-50">
      <Navigation />
      
      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center mb-16 dance-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="dance-text-gradient">About Tarana Dance Academy</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A sanctuary where the ancient art of Kathak comes alive, bridging centuries of tradition with contemporary expression.
            </p>
          </div>

          {/* Story Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="dance-slide-up">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Tarana Dance Academy was born from a deep passion for preserving and promoting the beautiful art of Kathak dance. 
                  Founded with the vision of connecting young minds to India's rich classical dance heritage, we believe that dance 
                  is not just movement, but a language that speaks to the soul.
                </p>
                <p>
                  Our founder, a dedicated Kathak professional with years of training and performance experience, recognized the 
                  need to create a space where traditional techniques meet contemporary teaching methods. Every class is designed 
                  to honor the authenticity of this ancient art form while making it accessible to modern learners.
                </p>
                <p>
                  At Tarana, we don't just teach dance steps - we nurture artists, build confidence, and create a community 
                  that celebrates the timeless beauty of Indian classical dance culture.
                </p>
              </div>
            </div>
            
            <div className="dance-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                <div className="w-20 h-20 dance-gradient rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl text-white">🎭</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 text-center mb-4">What is Kathak?</h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  Kathak is one of the major classical dance forms of India, characterized by intricate footwork, 
                  spins, and expressive storytelling. Originating from North India, it beautifully combines 
                  technical precision with emotional depth, making it one of the most captivating dance forms in the world.
                </p>
              </div>
            </div>
          </div>

          {/* Achievements Grid */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Achievements</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <div 
                  key={index}
                  className="dance-slide-up bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 dance-gradient rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                    {achievement.icon}
                  </div>
                  <h3 className="font-bold text-gray-800 mb-2">{achievement.title}</h3>
                  <p className="text-gray-600 text-sm">{achievement.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Mission Section */}
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 dance-slide-up">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Mission</h2>
              <div className="w-20 h-1 dance-gradient mx-auto rounded-full"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🌟</span>
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Preserve Tradition</h3>
                <p className="text-gray-600 text-sm">Maintaining the authenticity and purity of classical Kathak techniques</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Inspire Youth</h3>
                <p className="text-gray-600 text-sm">Motivating young minds to connect with their cultural roots through dance</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🌍</span>
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Spread Culture</h3>
                <p className="text-gray-600 text-sm">Sharing the beauty of Indian classical dance with the world</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
