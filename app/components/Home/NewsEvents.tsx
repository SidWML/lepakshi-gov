// app/components/Home/NewsEvents.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, MapPin } from 'lucide-react';

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
    <section className="relative py-24 md:py-32 bg-[#F7EFE4] overflow-hidden">
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7z' fill='%23000000' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`,
      }} />

      {/* Top divider */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#C9A24D]/40 to-transparent" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-14 h-[1px] bg-[#C9A24D]/70" />
            <span className="text-[#8C4A2F] text-xs tracking-[0.35em] uppercase font-bold">
              Stay Updated
            </span>
            <div className="w-14 h-[1px] bg-[#C9A24D]/70" />
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#3B2A1A] font-[family-name:var(--font-playfair)] mb-6 leading-tight">
            News &{" "}
            <span className="text-[#8C4A2F]">Events</span>
          </h2>
          <p className="text-[#6F6257] text-lg max-w-2xl mx-auto font-medium leading-relaxed">
            Exhibitions, bazaars, and cultural celebrations showcasing our artisans
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {newsEvents.map((item, index) => (
            <Link
              key={item.id}
              href={item.link}
              className="group relative bg-white border border-[#E0D0B8] overflow-hidden
                hover:shadow-2xl hover:shadow-[#3B2A1A]/20 transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden bg-[#E8DCC8]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#3B2A1A]/80 via-[#3B2A1A]/30 to-transparent" />

                {/* Category Badge */}
                <div className="absolute top-6 left-6 px-3 py-1.5 bg-[#C9A24D] text-[#3B2A1A] text-xs tracking-widest uppercase font-bold">
                  {item.category}
                </div>

                {/* Number Badge */}
                <div className="absolute top-6 right-6 w-12 h-12 bg-[#C9A24D] flex items-center justify-center">
                  <span className="text-[#3B2A1A] font-bold text-lg font-[family-name:var(--font-playfair)]">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 bg-white">
                {/* Meta Info */}
                <div className="flex flex-wrap items-center gap-4 mb-4">
                  <div className="flex items-center text-[#8C4A2F] text-sm font-medium">
                    <Calendar size={14} className="mr-2" />
                    {item.date}
                  </div>
                  <div className="flex items-center text-[#6F6257] text-sm font-medium">
                    <MapPin size={14} className="mr-2" />
                    {item.location.split(',')[0]}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-[#3B2A1A] mb-4 line-clamp-2 font-[family-name:var(--font-playfair)] leading-tight">
                  {item.title}
                </h3>

                {/* CTA */}
                <div className="flex items-center gap-3 text-[#8C4A2F] font-semibold group-hover:text-[#C9A24D] transition-colors">
                  <span className="text-sm tracking-wide">Read More</span>
                  <div className="w-8 h-[2px] bg-[#C9A24D] transform group-hover:w-12 transition-all duration-300" />
                </div>
              </div>

              {/* Hover accent border */}
              <div className="absolute inset-x-0 bottom-0 h-[2px] bg-[#C9A24D] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </Link>
          ))}
        </div>

        {/* View All Events Button */}
        <div className="text-center mt-16">
          <Link
            href="/news-events"
            className="inline-flex items-center gap-2 px-10 py-4
              bg-[#C9A24D] text-[#3B2A1A] font-bold text-lg
              hover:bg-[#3B2A1A] hover:text-white
              transition-all duration-300 shadow-xl"
          >
            View All Events →
          </Link>
        </div>
      </div>

      {/* Bottom divider */}
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#C9A24D]/40 to-transparent" />
    </section>
  );
}
