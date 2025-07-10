
import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Eye, Play, Image as ImageIcon, Video, Calendar, MapPin, Users } from 'lucide-react';

const Performances = () => {
  // Events with their own images and videos
  const events = [
    {
      id: 1,
      title: 'Annual Cultural Festival 2024',
      date: 'November 15, 2024',
      time: '6:00 PM - 9:00 PM',
      location: 'City Convention Center, Main Hall',
      participants: 45,
      description: 'A grand celebration of Kathak dance featuring performances by students of all levels, showcasing traditional and contemporary interpretations.',
      images: [
        {
          id: 1,
          src: './assets/01.jpeg',
          alt: 'Cultural festival opening ceremony',
          title: 'Opening Ceremony',
          description: 'Students performing the traditional invocation dance'
        },
        {
          id: 2,
          src: './assets/02.jpg',
          alt: 'Traditional costumes display',
          title: 'Traditional Attire',
          description: 'Beautiful costumes and jewelry used in authentic performances'
        },
        {
          id: 3,
          src: './assets/03.jpeg',
          alt: 'Group performance finale',
          title: 'Grand Finale',
          description: 'All participants coming together for the closing performance'
        }
      ],
      videos: [
        {
          id: 1,
          videoId: 'dQw4w9WgXcQ', // Replace with actual YouTube video ID
          title: 'Cultural Festival Highlights',
          description: 'Best moments from the annual cultural festival'
        },
        {
          id: 2,
          videoId: 'dQw4w9WgXcQ', // Replace with actual YouTube video ID
          title: 'Student Solo Performances',
          description: 'Individual performances by our talented students'
        }
      ]
    },
    {
      id: 2,
      title: 'Diwali Celebration 2024',
      date: 'October 28, 2024',
      time: '5:30 PM - 8:00 PM',
      location: 'Community Park Amphitheater',
      participants: 32,
      description: 'A magical evening celebrating the festival of lights with traditional Kathak performances and cultural storytelling.',
      images: [
        {
          id: 4,
          src: './assets/04.jpeg',
          alt: 'Diwali dance performance',
          title: 'Festival of Lights',
          description: 'Mesmerizing performance celebrating Diwali traditions'
        },
        {
          id: 5,
          src: './assets/05.jpeg',
          alt: 'Stage with traditional decorations',
          title: 'Decorated Stage',
          description: 'Beautiful stage setup with traditional Diwali decorations'
        }
      ],
      videos: [
        {
          id: 3,
          videoId: 'dQw4w9WgXcQ', // Replace with actual YouTube video ID
          title: 'Diwali Dance Celebration',
          description: 'Traditional Kathak performance for Diwali festival'
        }
      ]
    },
    {
      id: 3,
      title: 'Student Recital 2024',
      date: 'September 12, 2024',
      time: '4:00 PM - 7:00 PM',
      location: 'Tarana Dance Studio',
      participants: 28,
      description: 'An intimate showcase where our students demonstrate their progress and skills learned throughout the year.',
      images: [
        {
          id: 6,
          src: './assets/01.jpeg',
          alt: 'Student recital performance',
          title: 'Student Showcase',
          description: 'Young dancers displaying their learned techniques'
        },
        {
          id: 7,
          src: './assets/02.jpg',
          alt: 'Award ceremony',
          title: 'Recognition Ceremony',
          description: 'Celebrating student achievements and progress'
        }
      ],
      videos: [
        {
          id: 4,
          videoId: 'dQw4w9WgXcQ', // Replace with actual YouTube video ID
          title: 'Student Recital Highlights',
          description: 'Best performances from our annual student recital'
        },
        {
          id: 5,
          videoId: 'dQw4w9WgXcQ', // Replace with actual YouTube video ID
          title: 'Beginner Level Performances',
          description: 'Inspiring performances by our newest students'
        }
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
              Our <span className="dance-text-gradient">Performances</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Experience the magic of our Kathak performances through captivating photos and videos. 
              Witness the grace, passion, and cultural richness of our students' artistic journey.
            </p>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {events.map((event, eventIndex) => (
              <div key={event.id}>
                <div 
                  className="dance-slide-up"
                  style={{ animationDelay: `${eventIndex * 0.2}s` }}
                >
                {/* Event Header */}
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                    {event.title}
                  </h2>
                  <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">
                    {event.description}
                  </p>
                  
                  {/* Event Details */}
                  <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-red-600" />
                      <span className="font-medium">{event.date}</span>
                      <span>•</span>
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-red-600" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-red-600" />
                      <span>{event.participants} participants</span>
                    </div>
                  </div>
                </div>

                {/* Images Section */}
                <div className="mb-16">
                  <div className="flex items-center justify-center gap-3 mb-8">
                    <ImageIcon className="w-6 h-6 text-red-600" />
                    <h3 className="text-2xl font-bold text-gray-800">Event Gallery</h3>
                  </div>

                  <Carousel className="w-full">
                    <CarouselContent className="-ml-2 md:-ml-4">
                      {event.images.map((image) => (
                        <CarouselItem key={image.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                          <Dialog>
                            <DialogTrigger asChild>
                              <div className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer h-full">
                                <div className="relative overflow-hidden">
                                  <img
                                    src={image.src}
                                    alt={image.alt}
                                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                                  />
                                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="absolute bottom-4 left-4 right-4">
                                      <div className="flex items-center space-x-2 text-white">
                                        <Eye className="w-4 h-4" />
                                        <span className="text-sm">View Full Image</span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                
                                <div className="p-6">
                                  <h4 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-red-600 transition-colors">
                                    {image.title}
                                  </h4>
                                  <p className="text-gray-600 leading-relaxed text-sm">
                                    {image.description}
                                  </p>
                                </div>
                              </div>
                            </DialogTrigger>
                            
                            <DialogContent className="max-w-4xl w-full max-h-[90vh] p-0">
                              <div className="relative">
                                <img
                                  src={image.src}
                                  alt={image.alt}
                                  className="w-full h-auto max-h-[80vh] object-contain"
                                />
                                <div className="p-6 bg-white">
                                  <h4 className="text-2xl font-bold text-gray-800 mb-2">
                                    {image.title}
                                  </h4>
                                  <p className="text-gray-600 leading-relaxed">
                                    {image.description}
                                  </p>
                                </div>
                              </div>
                            </DialogContent>
                          </Dialog>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="left-4" />
                    <CarouselNext className="right-4" />
                  </Carousel>
                </div>

                {/* Videos Section */}
                <div className="p-8 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 rounded-3xl">
                  <div className="flex items-center justify-center gap-3 mb-8">
                    <Video className="w-6 h-6 text-red-600" />
                    <h3 className="text-2xl font-bold text-gray-800">Performance Videos</h3>
                  </div>

                  <Carousel className="w-full">
                    <CarouselContent className="-ml-2 md:-ml-4">
                      {event.videos.map((video) => (
                        <CarouselItem key={video.id} className="pl-2 md:pl-4 md:basis-1/1 lg:basis-1/2">
                          <div className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 h-full">
                            <div className="relative">
                              <div className="aspect-video">
                                <iframe
                                  src={`https://www.youtube.com/embed/${video.videoId}`}
                                  title={video.title}
                                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                  allowFullScreen
                                  className="w-full h-full rounded-t-2xl"
                                ></iframe>
                              </div>
                            </div>
                            
                            <div className="p-6">
                              <h4 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-red-600 transition-colors">
                                {video.title}
                              </h4>
                              <p className="text-gray-600 leading-relaxed text-sm">
                                {video.description}
                              </p>
                            </div>
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="left-4" />
                    <CarouselNext className="right-4" />
                  </Carousel>
                </div>

                </div>

                {/* Decorative Divider between events */}
                {eventIndex < events.length - 1 && (
                  <div className="mt-16 mb-4">
                    <div className="flex items-center justify-center space-x-4">
                      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-red-300 to-transparent"></div>
                      <div className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-red-50 to-amber-50 rounded-full border border-red-200">
                        <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
                        <span className="text-red-600 font-medium text-sm">❖</span>
                        <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
                      </div>
                      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-red-300 to-transparent"></div>
                    </div>
                  </div>
                )}
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
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-red-600 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Join Our Academy
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Performances;
