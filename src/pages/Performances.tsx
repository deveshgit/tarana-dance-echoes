
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Users, Video, Image as ImageIcon } from 'lucide-react';

const Performances = () => {
  const performances = [
    {
      id: 1,
      title: 'Diwali Cultural Festival 2024',
      date: 'October 15, 2024',
      location: 'Community Center, Downtown',
      description: 'A mesmerizing Kathak performance celebrating the festival of lights with traditional music and dance.',
      type: 'Festival',
      audience: '500+',
      images: [
        'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=600&fit=crop'
      ],
      videos: [
        'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&h=600&fit=crop'
      ]
    },
    {
      id: 2,
      title: 'Annual Recital 2024',
      date: 'September 20, 2024',
      location: 'Grand Theater, Arts District',
      description: 'Our students showcased their year-long journey in Kathak with solo and group performances.',
      type: 'Recital',
      audience: '300+',
      images: [
        'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=800&h=600&fit=crop'
      ],
      videos: [
        'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&h=600&fit=crop'
      ]
    },
    {
      id: 3,
      title: 'Heritage Day Celebration',
      date: 'August 15, 2024',
      location: 'City Park Amphitheater',
      description: 'A patriotic performance celebrating Indian heritage through classical Kathak dance forms.',
      type: 'Cultural Event',
      audience: '800+',
      images: [
        'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=600&fit=crop'
      ],
      videos: [
        'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&h=600&fit=crop'
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-50 to-red-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="dance-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
              Recent <span className="dance-text-gradient">Performances</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Experience the magic of our Kathak performances through captivating photos and videos. 
              Witness the grace, passion, and cultural richness of our students' artistic journey.
            </p>
          </div>
        </div>
      </section>

      {/* Performances Gallery */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {performances.map((performance, index) => (
              <div 
                key={performance.id}
                className="dance-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <Card className="overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
                  <CardHeader className="bg-gradient-to-r from-amber-50 to-red-50">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                      <div>
                        <CardTitle className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                          {performance.title}
                        </CardTitle>
                        <CardDescription className="text-lg text-gray-600">
                          {performance.description}
                        </CardDescription>
                      </div>
                      <Badge 
                        variant="secondary" 
                        className="w-fit bg-gradient-to-r from-red-100 to-amber-100 text-red-700 border-red-200"
                      >
                        {performance.type}
                      </Badge>
                    </div>
                    
                    <div className="flex flex-wrap gap-4 mt-4 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{performance.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{performance.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        <span>{performance.audience} audience</span>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="p-8">
                    {/* Photos Section */}
                    <div className="mb-8">
                      <div className="flex items-center gap-2 mb-4">
                        <ImageIcon className="w-5 h-5 text-red-600" />
                        <h3 className="text-xl font-semibold text-gray-800">Photos</h3>
                      </div>
                      
                      <Carousel className="w-full">
                        <CarouselContent>
                          {performance.images.map((image, imageIndex) => (
                            <CarouselItem key={imageIndex} className="md:basis-1/2 lg:basis-1/3">
                              <div className="p-1">
                                <div className="aspect-[4/3] overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                                  <img
                                    src={image}
                                    alt={`${performance.title} - Photo ${imageIndex + 1}`}
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                  />
                                </div>
                              </div>
                            </CarouselItem>
                          ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                      </Carousel>
                    </div>

                    {/* Videos Section */}
                    <div>
                      <div className="flex items-center gap-2 mb-4">
                        <Video className="w-5 h-5 text-red-600" />
                        <h3 className="text-xl font-semibold text-gray-800">Performance Videos</h3>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {performance.videos.map((video, videoIndex) => (
                          <div key={videoIndex} className="aspect-video overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <div className="relative w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center group cursor-pointer">
                              <img
                                src={video}
                                alt={`${performance.title} - Video ${videoIndex + 1}`}
                                className="w-full h-full object-cover"
                              />
                              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center backdrop-blur-sm">
                                  <Video className="w-8 h-8 text-white" />
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="dance-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Want to Be Part of Our Next Performance?
            </h2>
            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              Join our academy and showcase your talent at cultural events and festivals. 
              Experience the joy of performing Kathak on stage.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-red-600 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Join Our Academy
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Performances;
