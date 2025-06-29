
import React from 'react';
import { Clock, Sparkles } from 'lucide-react';

const ComingSoon = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute -bottom-8 left-40 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-700"></div>
      </div>

      <div className="max-w-2xl mx-auto text-center relative z-10">
        <div className="dance-fade-in">
          {/* Coming Soon Icon */}
          <div className="mb-8">
            <div className="relative mx-auto w-32 h-32 mb-6">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-ping opacity-75"></div>
              <div className="relative bg-gradient-to-r from-purple-500 to-pink-500 rounded-full w-32 h-32 flex items-center justify-center shadow-2xl">
                <Clock className="w-12 h-12 text-white" />
              </div>
            </div>
          </div>

          {/* Main Title */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
              Tarana Dance Academy
            </h1>
            <div className="flex items-center justify-center mb-8">
              <Sparkles className="w-6 h-6 text-yellow-400 mr-2" />
              <span className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Coming Soon
              </span>
              <Sparkles className="w-6 h-6 text-yellow-400 ml-2" />
            </div>
          </div>

          {/* Main Message */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-8 border border-white/20 shadow-2xl">
            <p className="text-xl md:text-2xl text-white leading-relaxed mb-4">
              Our beautiful new website will be
            </p>
            <p className="text-2xl md:text-3xl font-bold text-transparent bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 bg-clip-text mb-4">
              live in a few days!
            </p>
            <p className="text-lg text-gray-200">
              We're putting the finishing touches on something special for you.
            </p>
          </div>

          {/* Subtitle */}
          <p className="text-gray-300 text-lg">
            Experience the grace and beauty of Kathak dance
          </p>
        </div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full animate-ping delay-300"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-yellow-400 rounded-full animate-ping delay-700"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-pink-400 rounded-full animate-ping delay-1000"></div>
        <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-purple-400 rounded-full animate-ping delay-500"></div>
      </div>
    </div>
  );
};

export default ComingSoon;
