"use client";

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Calendar, MapPin, ChevronRight as ArrowRight } from 'lucide-react';
import newsEventsData from "@/app/News.json";

interface NewsEvent {
  id: number;
  title: string;
  category: string;
  date: string;
  detailedDate: string;
  location: string;
  image: string;
  excerpt: string;
  featured: boolean;
  url: string;
  content: string;
  images: string[];
}

export default function NewsEventsDetailPage() {
  const params = useParams();
  const [currentEvent, setCurrentEvent] = useState<NewsEvent | null>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (params.id) {
      const id = parseInt(params.id as string);
      const event = newsEventsData.find(item => item.id === id) as NewsEvent;
      setCurrentEvent(event);
      setLoading(false);
    }
  }, [params.id]);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (!currentEvent) return;
    
    if (direction === 'prev') {
      setCurrentImageIndex(prev => 
        prev === 0 ? currentEvent.images.length - 1 : prev - 1
      );
    } else {
      setCurrentImageIndex(prev => 
        prev === currentEvent.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#c9a227]"></div>
      </div>
    );
  }

  if (!currentEvent) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-[#3d3428] mb-4">Event not found</h2>
          <p className="text-[#666666]">The requested news event could not be found.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f8f6f1] to-white">
      {/* Lightbox Modal */}
      {lightboxOpen && currentEvent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90">
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white text-2xl hover:text-[#c9a227] transition-colors"
          >
            ✕
          </button>
          
          <button
            onClick={() => navigateImage('prev')}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-[#c9a227] transition-colors"
          >
            <ChevronLeft size={32} />
          </button>
          
          <div className="relative max-w-4xl max-h-[80vh]">
            <img
              src={currentEvent.images[currentImageIndex]}
              alt={`Gallery image ${currentImageIndex + 1}`}
              className="max-w-full max-h-[80vh] object-contain"
            />
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white bg-black bg-opacity-50 px-4 py-2 rounded">
              {currentImageIndex + 1} / {currentEvent.images.length}
            </div>
          </div>
          
          <button
            onClick={() => navigateImage('next')}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-[#c9a227] transition-colors"
          >
            <ChevronRight size={32} />
          </button>
        </div>
      )}

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Breadcrumbs */}
        <nav className="mb-8 text-sm text-[#666666] font-montserrat">
          <span className="hover:text-[#c9a227] transition-colors">
            <a href="/">Home</a>
          </span>
          <span className="mx-2">/</span>
          <span className="hover:text-[#c9a227] transition-colors">
            <a href="/news-events">News & Events</a>
          </span>
          <span className="mx-2">/</span>
          <span className="text-[#3d3428]">{currentEvent.title}</span>
        </nav>

        {/* Featured Image */}
        <div className="relative h-96 rounded-xl overflow-hidden mb-8 shadow-lg">
          <img
            src={currentEvent.image}
            alt={currentEvent.title}
            // fill
            className="object-cover transition-transform duration-500 hover:scale-105"
            // priority
          />
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 text-xs font-bold bg-[#c9a227] text-white font-montserrat uppercase tracking-wider">
              {currentEvent.category}
            </span>
          </div>
          {currentEvent.featured && (
            <div className="absolute top-4 right-4">
              <span className="px-2 py-1 text-xs font-semibold bg-white text-[#3d3428] font-montserrat">
                Featured
              </span>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>

        {/* Event Details */}
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-[#3d3428] mb-6 font-cormorant">
            {currentEvent.title}
          </h1>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-6 mb-8 text-[#666666] font-montserrat">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-[#c9a227]" />
              <span>{currentEvent.date}</span>
              {currentEvent.detailedDate && (
                <span className="ml-2 text-sm opacity-75">
                  ({currentEvent.detailedDate})
                </span>
              )}
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#c9a227]" />
              <span>{currentEvent.location}</span>
            </div>
          </div>

          {/* Excerpt */}
          <div className="mb-8 p-6 bg-white rounded-lg border border-[#c9a227]/20 shadow-sm">
            <p className="text-lg text-[#666666] font-montserrat leading-relaxed">
              {currentEvent.excerpt}
            </p>
          </div>

          {/* Content */}
          <article 
            className="prose prose-lg max-w-none mb-12"
            dangerouslySetInnerHTML={{ __html: currentEvent.content }}
          />

          {/* Image Gallery */}
          {currentEvent.images && currentEvent.images.length > 0 && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-[#3d3428] mb-6 font-cormorant border-b border-[#c9a227]/30 pb-2">
                Event Gallery
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {currentEvent.images.map((image, index) => (
                  <div
                    key={index}
                    className="relative aspect-square rounded-lg overflow-hidden cursor-pointer group"
                    onClick={() => openLightbox(index)}
                  >
                    <img
                      src={image}
                      alt={`Gallery image ${index + 1}`}
                    //   fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                      sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Related Events */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-[#3d3428] mb-6 font-cormorant border-b border-[#c9a227]/30 pb-2">
              Related Events
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {newsEventsData
                .filter(event => event.id !== currentEvent.id && event.category === currentEvent.category)
                .slice(0, 3)
                .map((event: any) => (
                  <a
                    key={event.id}
                    href={`/news-events/${event.id}`}
                    className="group bg-white border-2 border-[#c9a227]/30 hover:border-[#c9a227] transition-all duration-300 hover:shadow-xl rounded-xl overflow-hidden"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={event.image}
                        alt={event.title}
                        // fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="px-2 py-1 text-xs font-bold bg-[#c9a227] text-white font-montserrat uppercase tracking-wider">
                          {event.category}
                        </span>
                      </div>
                      {event.featured && (
                        <div className="absolute top-3 right-3">
                          <span className="px-2 py-1 text-xs font-semibold bg-white text-[#3d3428] font-montserrat">
                            Featured
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-[#3d3428] mb-2 group-hover:text-[#c9a227] transition-colors font-cormorant line-clamp-2">
                        {event.title}
                      </h3>
                      <div className="flex items-center gap-4 text-xs text-[#666666] font-montserrat mb-2">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3 text-[#c9a227]" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-[#c9a227]" />
                          <span>{event.location}</span>
                        </div>
                      </div>
                      <p className="text-sm text-[#666666] font-montserrat line-clamp-2 mb-3">
                        {event.excerpt}
                      </p>
                      <div className="flex items-center gap-1 text-sm font-semibold text-[#3d3428] group-hover:text-[#c9a227] transition-colors font-montserrat">
                        Read More
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </a>
                ))}
            </div>
          </div>

          {/* Back Button */}
          <div className="flex justify-center">
            <a
              href="/news-events"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#c9a227] text-white font-montserrat font-semibold rounded-lg hover:bg-[#b4921e] transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
              Back to News & Events
            </a>
          </div>
        </div>
      </main>

      {/* Font styles */}
      <style jsx global>{`
        .font-cormorant {
          font-family: var(--font-cormorant), serif;
        }
        .font-montserrat {
          font-family: var(--font-montserrat), sans-serif;
        }
        
        /* Rich text content styling */
        article.prose h2 {
          color: #3d3428;
          font-size: 1.75rem;
          font-weight: bold;
          margin-top: 2rem;
          margin-bottom: 1rem;
          font-family: var(--font-cormorant), serif;
        }
        
        article.prose h3 {
          color: #3d3428;
          font-size: 1.5rem;
          font-weight: bold;
          margin-top: 1.5rem;
          margin-bottom: 0.75rem;
          font-family: var(--font-cormorant), serif;
        }
        
        article.prose p {
          color: #666666;
          font-size: 1.125rem;
          line-height: 1.75;
          margin-bottom: 1.5rem;
          font-family: var(--font-montserrat), sans-serif;
        }
        
        article.prose ul {
          color: #666666;
          margin-bottom: 1.5rem;
          padding-left: 1.5rem;
          font-family: var(--font-montserrat), sans-serif;
        }
        
        article.prose li {
          margin-bottom: 0.5rem;
          line-height: 1.6;
        }
        
        article.prose b {
          color: #3d3428;
          font-weight: bold;
        }
      `}</style>
    </div>
  );
}