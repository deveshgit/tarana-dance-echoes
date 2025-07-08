
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

          {/* Professional Experience */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">
              <span className="dance-text-gradient tracking-wider">PROFESSIONAL EXPERIENCE</span>
            </h2>
            <div className="w-20 h-1 dance-gradient mx-auto rounded-full mb-12"></div>
            
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 dance-slide-up">
              <div className="space-y-6">
                <div className="border-l-4 border-red-500 pl-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Founder & Artistic Director</h3>
                  <p className="text-red-600 font-semibold mb-2">Tarana Kathak Dance Academy (2019 - Present)</p>
                  <p className="text-gray-600">Affiliated with Akhil Bharatiya Gandharva Mahavidyalaya</p>
                </div>
                
                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Current Teaching Positions</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Dance Teacher at Fortune High School</li>
                    <li>• Dance Teacher at Revachand Bhojwani High School, Pune (Past 5 Years)</li>
                    <li>• Over 9 years of total teaching experience</li>
                  </ul>
                </div>
                
                <div className="border-l-4 border-amber-500 pl-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Professional Experience</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Served as External Faculty for classical dance exams and certification boards</li>
                    <li>• Performing Kathak for 19 years in various events and dance troupes</li>
                    <li>• Part of renowned dance troupes in Assam, Bangalore and Pune</li>
                    <li>• Trained from the reputed Sur Taal school of Dance, Assam</li>
                  </ul>
                </div>
                
                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Current Impact</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Training 50+ students regularly in Kathak and semi-classical forms</li>
                    <li>• Structured batches and individualized mentoring</li>
                    <li>• Organized multiple workshops with 200+ participants</li>
                    <li>• Fostering cultural awareness and dance education</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Achievements */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">
              <span className="dance-text-gradient tracking-wider">ACHIEVEMENTS</span>
            </h2>
            <div className="w-20 h-1 dance-gradient mx-auto rounded-full mb-12"></div>
            
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 dance-slide-up">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="border-l-4 border-yellow-500 pl-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Awards & Recognition</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• <span className="font-semibold">SurTaal Award (2010)</span> - Assam</li>
                      <li>• <span className="font-semibold">2nd Position</span> - State-Level Rabindra Nritya Competition, Assam (2008)</li>
                    </ul>
                  </div>
                  
                  <div className="border-l-4 border-purple-500 pl-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Professional Recognition</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Invited as Judge & Mentor in various Kathak dance competitions</li>
                      <li>• Guided students to achieve national-level awards in Kathak competitions</li>
                    </ul>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="border-l-4 border-red-500 pl-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Prestigious Performances</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Featured performer at <span className="font-semibold">Pune Festival 2023</span></li>
                      <li>• Featured performer at <span className="font-semibold">Bagrumba Festival</span>, Assam</li>
                    </ul>
                  </div>
                  
                  <div className="border-l-4 border-blue-500 pl-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Regular Performances</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Regular performer in cultural programs across Assam, Bengaluru, and Pune</li>
                      <li>• Consistent participation in major cultural events and festivals</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Education & Training */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">
              <span className="dance-text-gradient tracking-wider">EDUCATION & TRAINING</span>
            </h2>
            <div className="w-20 h-1 dance-gradient mx-auto rounded-full mb-12"></div>
            
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 dance-slide-up">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="border-l-4 border-red-500 pl-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Formal Education</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• <span className="font-semibold">Visharad in Kathak</span> from Bhatkhande Sangeet Vidyapith, Lucknow</li>
                      <li>• <span className="font-semibold">Diploma in Rabindra Nritya</span></li>
                    </ul>
                  </div>
                  
                  <div className="border-l-4 border-blue-500 pl-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Trained by Renowned Gurus</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• <span className="font-semibold">Guru Smt. Mitali Rudra</span></li>
                    </ul>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="border-l-4 border-amber-500 pl-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Inspired by Legendary Masters</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• <span className="font-semibold">Guru Bipul Das</span></li>
                      <li>• <span className="font-semibold">Padma Vibhushan Pt. Birju Maharaj ji</span></li>
                    </ul>
                  </div>
                  
                  <div className="border-l-4 border-green-500 pl-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Training Legacy</h3>
                    <p className="text-gray-600">
                      A rich foundation built on formal education from prestigious institutions 
                      and direct training from accomplished masters of Kathak tradition.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Dance Style & Expertise */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">
              <span className="dance-text-gradient tracking-wider">DANCE STYLE & EXPERTISE</span>
            </h2>
            <div className="w-20 h-1 dance-gradient mx-auto rounded-full mb-12"></div>
            
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 dance-slide-up">
              <div className="text-center text-gray-600">
                <p>Content coming soon...</p>
              </div>
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
