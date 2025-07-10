
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Mail, Phone, MapPin, CheckCircle, Facebook, Instagram, Twitter, Youtube, Linkedin } from 'lucide-react';

const Contact = () => {
  const socialMedia = [
    {
      icon: <Facebook className="w-8 h-8" />,
      name: "Facebook",
      handle: "@TaranaDanceAcademy",
      url: "https://facebook.com/taranadanceacademy",
      color: "from-blue-600 to-blue-700",
      hoverColor: "hover:from-blue-700 hover:to-blue-800"
    },
    {
      icon: <Instagram className="w-8 h-8" />,
      name: "Instagram",
      handle: "@tarana_dance",
      url: "https://instagram.com/tarana_dance",
      color: "from-pink-600 to-purple-600",
      hoverColor: "hover:from-pink-700 hover:to-purple-700"
    },
    {
      icon: <Twitter className="w-8 h-8" />,
      name: "X (Twitter)",
      handle: "@TaranaDance",
      url: "https://twitter.com/taranadance",
      color: "from-slate-800 to-black",
      hoverColor: "hover:from-slate-900 hover:to-slate-800"
    },
    {
      icon: <Youtube className="w-8 h-8" />,
      name: "YouTube",
      handle: "Tarana Dance Academy",
      url: "https://youtube.com/@taranadanceacademy",
      color: "from-red-600 to-red-700",
      hoverColor: "hover:from-red-700 hover:to-red-800"
    },
    {
      icon: <Linkedin className="w-8 h-8" />,
      name: "LinkedIn",
      handle: "Tarana Dance Academy",
      url: "https://linkedin.com/company/taranadanceacademy",
      color: "from-blue-700 to-blue-800",
      hoverColor: "hover:from-blue-800 hover:to-blue-900"
    }
  ];

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      content: "info@taranadanceacademy.com",
      description: "We'll respond within 24 hours"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      content: "+91 9876543210",
      description: "Available Mon-Sat, 10 AM - 7 PM"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Visit Us",
      content: "Cultural Arts District",
      description: "Schedule a visit to our studio"
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
              <span className="dance-text-gradient">Get In Touch</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Ready to begin your Kathak journey? We'd love to hear from you. 
              Whether you're a beginner or looking to refine your skills, let's start this beautiful journey together.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <div className="space-y-8">
                <div className="dance-slide-up">
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h2>
                  <div className="space-y-6">
                    {contactInfo.map((info, index) => (
                      <div 
                        key={index}
                        className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
                      >
                        <div className="w-12 h-12 dance-gradient rounded-full flex items-center justify-center text-white flex-shrink-0">
                          {info.icon}
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-800">{info.title}</h3>
                          <p className="text-gray-600 font-medium">{info.content}</p>
                          <p className="text-gray-500 text-sm">{info.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Why Choose Us */}
                <div className="dance-slide-up bg-white rounded-xl shadow-lg p-6" style={{ animationDelay: '0.2s' }}>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Why Learn With Us?</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-gray-600">Professional instruction</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-gray-600">Small class sizes</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-gray-600">All skill levels welcome</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-gray-600">Cultural learning experience</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media Section */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-xl p-8 dance-slide-up" style={{ animationDelay: '0.1s' }}>
                <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Connect With Us</h2>
                <p className="text-gray-600 text-center mb-8">
                  Follow us on social media to stay updated with our latest performances, classes, and cultural events.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-6">
                  {socialMedia.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group flex items-center p-6 bg-gradient-to-r ${social.color} ${social.hoverColor} rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105`}
                    >
                      <div className="text-white mr-4 group-hover:scale-110 transition-transform duration-300">
                        {social.icon}
                      </div>
                      <div className="text-white">
                        <h3 className="font-bold text-lg">{social.name}</h3>
                        <p className="text-sm opacity-90">{social.handle}</p>
                      </div>
                    </a>
                  ))}
                </div>
                
                <div className="mt-8 text-center">
                  <p className="text-gray-600 text-sm">
                    Join our growing community of Kathak enthusiasts and stay connected with our cultural journey.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
