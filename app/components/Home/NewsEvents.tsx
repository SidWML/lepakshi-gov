// app/components/Home/NewsEvents.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// News & Events data
const newsEvents = [
  {
    id: 1,
    title: 'Handicrafts Exhibition and Design Competition, Vijayawada – Sept, 2025',
    date: 'September 2025',
    location: 'Vijayawada, Andhra Pradesh',
    image: '/Event1.png',
    link: '/news/handicrafts-exhibition-vijayawada-sept-2025',
    featured: true,
  },
  {
    id: 2,
    title:
      'Craft Bazaar at Gohar Mahal, Bhopal, Madhya Pradesh, from 16th June to 25th June 2023.',
    date: 'June 2023',
    location: 'Bhopal, Madhya Pradesh',
    image: '/Event2.png',
    link: '/news/craft-bazaar-bhopal-june-2023',
    featured: true,
  },
  {
    id: 3,
    title:
      'Craft Bazaar at the Siddhartha College Ground in Vijayawada from February 17th to February 26th, 2023.',
    date: 'February 2023',
    location: 'Vijayawada, Andhra Pradesh',
    image: '/Event3.png',
    link: '/news/craft-bazaar-vijayawada-feb-2023',
    featured: true,
  },
];

export default function NewsEvents() {
  return (
    <section className="py-8 md:py-12 lg:py-16 bg-gray-50">
      <div className="container mx-auto px-4">

        {/* Section Title */}
        <div className="mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 uppercase tracking-wide">
            <span className="relative inline-block pb-2">
              NEWS & EVENTS
            </span>
          </h2>
        </div>

        {/* News & Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {newsEvents.map((item) => (
            <Link
              key={item.id}
              href={item.link}
              className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative h-48 md:h-56 lg:h-64 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                
              </div>

              {/* Content */}
              <div className="p-5 md:p-6">
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors duration-300 line-clamp-3">
                  {item.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>

        {/* More Events Button */}
        <div className="text-center mt-8 md:mt-12">
          <Link
            href="/news-events"
            className="inline-flex items-center px-6 py-2 md:px-8 md:py-3 text-sm md:text-base font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md shadow-sm hover:shadow-md transition-all duration-200"
          >
            MORE EVENTS
            <svg
              className="w-4 h-4 md:w-5 md:h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

      </div>
    </section>
  );
}
