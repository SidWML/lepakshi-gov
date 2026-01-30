// app/components/Home/v3/NewsEventsV3.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Calendar, MapPin, ArrowRight, Sparkles } from "lucide-react";

const newsEvents = [
  {
    id: 1,
    title: "Handicrafts Exhibition and Design Competition, Vijayawada",
    date: "September 2025",
    location: "Vijayawada, Andhra Pradesh",
    image: "/Event1.png",
    link: "/news/handicrafts-exhibition-vijayawada-sept-2025",
    category: "Exhibition",
  },
  {
    id: 2,
    title: "Craft Bazaar at Gohar Mahal, Bhopal",
    date: "June 2023",
    location: "Bhopal, Madhya Pradesh",
    image: "/Event2.png",
    link: "/news/craft-bazaar-bhopal-june-2023",
    category: "Bazaar",
  },
  {
    id: 3,
    title: "Craft Bazaar at Siddhartha College Ground, Vijayawada",
    date: "February 2023",
    location: "Vijayawada, Andhra Pradesh",
    image: "/Event3.png",
    link: "/news/craft-bazaar-vijayawada-feb-2023",
    category: "Bazaar",
  },
];

export default function NewsEventsV3() {
  return (
    <section className="relative min-h-screen flex items-center bg-white overflow-hidden">
      <div className="relative z-10 w-[98%] max-w-none mx-auto px-6 lg:px-12 py-24">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-6xl mx-auto mb-16"
        >
          {/* Header with star divider */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-12 bg-[#E0AE31]"></div>
            <Sparkles className="text-[#E0AE31]" size={20} />
            <div className="h-px w-12 bg-[#E0AE31]"></div>
          </div>

          <span className="inline-block text-[#E0AE31] text-xs tracking-[0.3em] uppercase font-semibold mb-4">
            STAY UPDATED
          </span>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-[family-name:var(--font-playfair)] text-[#1f2937] mb-6">
            News & <span className="text-[#d97706]">Events</span>
          </h2>

          <p className="text-[#64748b] text-base md:text-lg max-w-3xl mx-auto leading-relaxed mb-8">
            Exhibitions, bazaars, and cultural celebrations showcasing our artisans and their crafts.
          </p>

          <Link
            href="/news-events"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[#103248] text-[#103248] font-semibold hover:bg-[#103248] hover:text-white transition-all duration-300"
          >
            View All Events
            <ArrowRight size={18} />
          </Link>
        </motion.div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsEvents.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link href={item.link} className="group block h-full">
                <div className="relative bg-[#F5E8C8] h-full flex flex-col overflow-hidden hover:shadow-xl transition-shadow duration-500">
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#103248]/70 via-transparent to-transparent" />

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4 px-3 py-1.5 bg-[#E0AE31] text-[#103248] text-xs tracking-wider uppercase font-bold">
                      {item.category}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col bg-white">
                    {/* Meta */}
                    <div className="flex flex-wrap items-center gap-4 mb-4 text-sm">
                      <div className="flex items-center text-[#A53430] font-medium">
                        <Calendar size={14} className="mr-2" />
                        {item.date}
                      </div>
                      <div className="flex items-center text-[#64748b]">
                        <MapPin size={14} className="mr-2" />
                        {item.location.split(",")[0]}
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-[#103248] mb-4 line-clamp-2 font-[family-name:var(--font-playfair)] leading-tight flex-1 group-hover:text-[#E0AE31] transition-colors">
                      {item.title}
                    </h3>

                    {/* CTA */}
                    <div className="flex items-center gap-2 text-[#103248] font-semibold text-sm group-hover:text-[#E0AE31] transition-colors">
                      <span>Read More</span>
                      <ArrowRight
                        size={14}
                        className="transform group-hover:translate-x-1 transition-transform"
                      />
                    </div>
                  </div>

                  {/* Hover Border */}
                  <div className="absolute inset-x-0 bottom-0 h-1 bg-[#E0AE31] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
