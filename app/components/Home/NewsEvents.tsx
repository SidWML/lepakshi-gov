// app/components/Home/NewsEvents.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';

const newsEvents = [
  {
    id: 1,
    title: 'Handicrafts Exhibition and Design Competition, Vijayawada',
    date: 'September 2025',
    location: 'Vijayawada, Andhra Pradesh',
    image: '/Event1.png',
    link: '/news/handicrafts-exhibition-vijayawada-sept-2025',
    category: 'Exhibition',
  },
  {
    id: 2,
    title: 'Craft Bazaar at Gohar Mahal, Bhopal',
    date: 'June 2023',
    location: 'Bhopal, Madhya Pradesh',
    image: '/Event2.png',
    link: '/news/craft-bazaar-bhopal-june-2023',
    category: 'Bazaar',
  },
  {
    id: 3,
    title: 'Craft Bazaar at Siddhartha College Ground, Vijayawada',
    date: 'February 2023',
    location: 'Vijayawada, Andhra Pradesh',
    image: '/Event3.png',
    link: '/news/craft-bazaar-vijayawada-feb-2023',
    category: 'Bazaar',
  },
];

export default function NewsEvents() {
  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-b from-[#f8f5ef] via-[#f5f1e8] to-[#f8f5ef] overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0">
        {/* Decorative Elements */}
        <div className="absolute top-40 right-10 w-72 h-72 opacity-[0.03]">
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <polygon points="100,10 190,60 190,140 100,190 10,140 10,60" fill="none" stroke="#1a1410" strokeWidth="1" />
            <polygon points="100,30 170,70 170,130 100,170 30,130 30,70" fill="none" stroke="#1a1410" strokeWidth="0.5" />
          </svg>
        </div>
        <div className="absolute bottom-20 left-10 w-56 h-56 opacity-[0.03]">
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <circle cx="100" cy="100" r="80" fill="none" stroke="#1a1410" strokeWidth="1" />
            <circle cx="100" cy="100" r="50" fill="none" stroke="#1a1410" strokeWidth="0.5" />
          </svg>
        </div>
      </div>

      {/* Top Border */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#c9a962]/40 to-transparent" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-16 h-[1px] bg-gradient-to-r from-transparent to-[#2c2c2c]" />
            <span className="text-[#2c2c2c] text-sm tracking-[0.3em] uppercase font-[family-name:var(--font-montserrat)]">
              Stay Updated
            </span>
            <div className="w-16 h-[1px] bg-gradient-to-l from-transparent to-[#2c2c2c]" />
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#1a1410] font-[family-name:var(--font-playfair)] mb-6">
            News &{" "}
            <span className="bg-gradient-to-r from-[#2c2c2c] via-[#a91d3a] to-[#2c2c2c] bg-clip-text text-transparent">
              Events
            </span>
          </h2>
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-12 h-[2px] bg-gradient-to-r from-[#c9a962] to-[#2c2c2c]" />
            <div className="w-2 h-2 rotate-45 border border-[#2c2c2c]" />
            <div className="w-12 h-[2px] bg-gradient-to-l from-[#c9a962] to-[#2c2c2c]" />
          </div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto font-[family-name:var(--font-montserrat)]">
            Exhibitions, bazaars, and cultural celebrations showcasing our artisans
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsEvents.map((item, index) => (
            <Link
              key={item.id}
              href={item.link}
              className="group relative h-full flex"
            >
              <div className="relative bg-white border border-[#1a1410]/10 hover:border-[#2c2c2c]/30 transition-all duration-500 overflow-hidden shadow-lg hover:shadow-xl flex flex-col w-full">
                {/* Corner Accents */}
                <div className="absolute -top-[1px] -left-[1px] w-6 h-6 border-t border-l border-[#2c2c2c] z-10" />
                <div className="absolute -top-[1px] -right-[1px] w-6 h-6 border-t border-r border-[#2c2c2c] z-10" />
                <div className="absolute -bottom-[1px] -left-[1px] w-6 h-6 border-b border-l border-[#2c2c2c] z-10" />
                <div className="absolute -bottom-[1px] -right-[1px] w-6 h-6 border-b border-r border-[#2c2c2c] z-10" />

                {/* Image */}
                <div className="relative h-56 md:h-64 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a1410]/80 via-[#1a1410]/30 to-transparent" />

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 px-4 py-1.5 bg-[#2c2c2c] text-white text-xs tracking-wider uppercase font-[family-name:var(--font-montserrat)]">
                    {item.category}
                  </div>

                  {/* Number Badge */}
                  <div className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center bg-white/90 border border-[#c9a962] text-[#2c2c2c] text-lg font-bold font-[family-name:var(--font-playfair)]">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 bg-white flex flex-col flex-grow">
                  {/* Meta Info */}
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <div className="flex items-center text-[#2c2c2c] text-sm font-[family-name:var(--font-montserrat)]">
                      <Calendar size={14} className="mr-2" />
                      {item.date}
                    </div>
                    <div className="flex items-center text-gray-500 text-sm font-[family-name:var(--font-montserrat)]">
                      <MapPin size={14} className="mr-2" />
                      {item.location.split(',')[0]}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-[#1a1410] group-hover:text-[#2c2c2c] transition-colors duration-300 line-clamp-2 font-[family-name:var(--font-playfair)] mb-4 flex-grow">
                    {item.title}
                  </h3>

                  {/* Read More */}
                  <div className="flex items-center text-[#2c2c2c] text-sm font-medium opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 font-[family-name:var(--font-montserrat)] mt-auto">
                    Read More
                    <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>

                {/* Bottom Accent Line */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#c9a962] via-[#2c2c2c] to-[#c9a962] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </div>
            </Link>
          ))}
        </div>

        {/* More Events Button */}
        <div className="text-center mt-16">
          <Link
            href="/news-events"
            className="group relative inline-flex items-center justify-center px-10 py-4 text-base font-semibold overflow-hidden font-[family-name:var(--font-montserrat)] transition-all duration-500 border-2 border-[#1a1410]"
          >
            <span className="absolute inset-0 bg-[#1a1410]" />
            <span className="absolute inset-0 bg-gradient-to-r from-[#c9a962] to-[#e8d5a3] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            <span className="relative z-10 flex items-center text-white group-hover:text-[#1a1410] transition-colors duration-500">
              View All Events
              <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </Link>
        </div>
      </div>

      {/* Bottom Border */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#c9a962]/40 to-transparent" />
    </section>
  );
}
