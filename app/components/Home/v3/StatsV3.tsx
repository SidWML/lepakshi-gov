// app/components/Home/v3/StatsV3.tsx
"use client";

import { motion } from "framer-motion";

const stats = [
  {
    value: "10,000+",
    label: "Elderly Artisans",
    description: "Supporting experienced artisans from various crafts traditions",
  },
  {
    value: "13",
    label: "Partners Onboard",
    description: "Strategic collaborations across various craft clusters",
  },
  {
    value: "50+",
    label: "Panchayats",
    description: "Reaching the farthest corners to support artisan families",
  },
  {
    value: "5,000+",
    label: "Products/Artworks",
    description: "Diverse collection representing Andhra Pradesh's cultural wealth",
  },
];

export default function StatsV3() {
  return (
    <section className="relative bg-[#F5ECE3] overflow-hidden">
      {/* Subtle Heritage Pattern */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23103248' stroke-width='0.5'%3E%3Cpath d='M30 10v40M10 30h40'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 w-[98%] mx-auto px-6 lg:px-12 py-24">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <span className="inline-block text-[#0f766e] text-xs tracking-[0.4em] uppercase font-semibold mb-4">
            OUR LEGACY
          </span>

          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-[family-name:var(--font-playfair)] text-[#1f2937] mb-6">
            Empowering <span className="text-[#d97706]">Artisans</span>
          </h2>

          <p className="text-[#64748b] text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            For over five decades, we have been the bridge between traditional craftsmen and
            the modern world — preserving heritage while creating sustainable livelihoods.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#FAF8F3] px-8 py-10 text-center border border-[#E5DCC8]/50 hover:shadow-lg transition-all duration-300"
            >
              {/* Value */}
              <div className="text-5xl md:text-6xl font-bold font-[family-name:var(--font-playfair)] text-[#1f2937] mb-3">
                {stat.value}
              </div>

              {/* Label */}
              <h3 className="text-base md:text-lg font-bold text-[#1f2937] mb-3">
                {stat.label}
              </h3>

              {/* Description */}
              <p className="text-[#64748b] text-sm leading-relaxed">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
