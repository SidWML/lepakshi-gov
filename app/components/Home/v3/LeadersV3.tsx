'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const leaders = [
  {
    name: 'Sri Nara Chandrababu Naidu',
    designation: "Hon'ble Chief Minister",
    location: 'Andhra Pradesh',
    image: '/cbn.png',
  },
  {
    name: 'Smt. S. Savitha',
    designation: "Hon'ble Minister of BC Welfare",
    location: 'Economically Weaker Sections Welfare',
    extraInfo: 'Handlooms & Textiles',
    image: '/savitha.png',
  },
  {
    name: 'Ms. Suchitra Ella',
    designation: 'Honorary Advisor',
    location: 'Handloom & Textiles',
    extraInfo: 'Govt. of Andhra Pradesh',
    image: 'https://lepakshihandicrafts.com/about-us/advisor-white-bg-image_1.png',
  },
  {
    name: 'Dr. Pasupuleti Hariprasad',
    designation: "Hon'ble Chairman, APHDCL",
    location: '',
    image: 'https://lepakshihandicrafts.com/about-us/chariman-image.png',
  },
];

export default function LeadersV3() {
  return (
    <section className="w-full bg-[#fff] py-16 md:py-24">
      <div className="w-[98%] max-w-7xl mx-auto px-6 lg:px-12">
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
            LEADERSHIP
          </span>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-[family-name:var(--font-playfair)] text-[#1f2937] mb-6">
            Guiding <span className="text-[#d97706]">Vision</span>
          </h2>

          <p className="text-[#64748b] text-base md:text-lg max-w-3xl mx-auto leading-relaxed mb-16">
            Meet the visionary leaders empowering artisans and preserving our heritage.
          </p>
        </motion.div>

        {/* Leaders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {leaders.map((leader, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              {/* Image Container */}
              <div className="relative mb-6 group">
                {/* Decorative ring */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#E0AE31] to-[#d97706] rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 scale-105" />

                {/* Image with border */}
                <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full border-4 border-white shadow-xl overflow-hidden bg-white">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    fill
                    className="object-cover object-top"
                  />
                </div>

                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-t from-[#0f766e]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Info */}
              <div className="space-y-2">
                <h3 className="text-base md:text-lg font-bold text-gray-900 font-[family-name:var(--font-playfair)]">
                  {leader.name}
                </h3>
                <p className="text-sm text-[#0f766e] font-semibold">
                  {leader.designation}
                </p>
                {leader.location && (
                  <p className="text-xs text-gray-600">
                    {leader.location}
                  </p>
                )}
                {leader.extraInfo && (
                  <p className="text-xs text-gray-600">
                    {leader.extraInfo}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Decorative Bottom Border */}
        <div className="mt-16 flex justify-center">
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#E0AE31] to-transparent rounded-full" />
        </div>
      </div>
    </section>
  );
}
