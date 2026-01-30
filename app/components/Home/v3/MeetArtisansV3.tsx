// app/components/Home/v3/MeetArtisansV3.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Quote, MapPin, ArrowRight } from "lucide-react";

const featuredArtisans = [
  {
    id: 1,
    name: "Sri Y. Veerabhadra Prasad",
    craft: "Tholu Bommalata",
    village: "Nimmalakunta",
    image: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=800&q=80",
    quote: "This craft fed my family for six generations. Every shadow puppet I carve carries the stories of my ancestors.",
    slug: "veeraprasad-tholu-bommalata",
  },
  {
    id: 2,
    name: "Smt. Janaki Devi",
    craft: "Uppada Jamdani",
    village: "Uppada",
    image: "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?w=800&q=80",
    quote: "Each thread I weave is a prayer. The loom sings the songs my grandmother taught me.",
    slug: "janaki-uppada-jamdani",
  },
  {
    id: 3,
    name: "Sri V. Venkata Rao",
    craft: "Budithi Brassware",
    village: "Budithi",
    image: "https://images.unsplash.com/photo-1592833159155-c62df1b65634?w=800&q=80",
    quote: "Bronze and brass remember everything. I shape metal the way my father did, and his father before him.",
    slug: "venkata-budithi-brass",
  },
];

export default function MeetArtisansV3() {
  return (
    <section className="relative py-24 bg-[#F5ECE3] overflow-hidden">
      {/* Subtle Pattern */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M40 20 L42 25 L47 26 L43 30 L44 35 L40 32 L36 35 L37 30 L33 26 L38 25 Z' fill='%23d97706'/%3E%3C/svg%3E")`,
          backgroundSize: "120px 120px",
        }}
      />

      <div className="relative z-10 w-[98%] max-w-none mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-[#0f766e] text-xs tracking-[0.4em] uppercase font-semibold mb-4">
            THEIR STORIES
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#1f2937] font-[family-name:var(--font-playfair)] mb-6">
            Meet the <span className="text-[#d97706]">Artisans</span>
          </h2>
        </motion.div>

        {/* Artisans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {featuredArtisans.map((artisan, index) => (
            <motion.div
              key={artisan.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <Link
                href={`/artisan-stories/${artisan.slug}`}
                className="group block h-full"
              >
                <div className="relative bg-white h-full flex flex-col overflow-hidden border-2 border-[#8B7355] hover:shadow-xl transition-all duration-500">
                  {/* Portrait Image */}
                  <div className="relative h-80 overflow-hidden">
                    <Image
                      src={artisan.image}
                      alt={artisan.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    {/* Badge */}
                    <div className="absolute top-4 left-4 bg-white px-4 py-2">
                      <p className="text-[#1f2937] text-xs font-bold uppercase">
                        Featured
                      </p>
                    </div>

                    {/* Name and Location */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <p className="text-[#d97706] text-xs tracking-[0.2em] uppercase mb-2 font-semibold">
                        {artisan.craft} • {artisan.village}
                      </p>
                      <h3 className="text-white text-2xl md:text-3xl font-bold font-[family-name:var(--font-playfair)]">
                        {artisan.name}
                      </h3>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col bg-white">
                    {/* Quote */}
                    <div className="flex-1 mb-4">
                      <p className="text-[#64748b] text-sm leading-relaxed">
                        {artisan.quote}
                      </p>
                    </div>

                    {/* CTA */}
                    <div className="flex items-center gap-2 text-[#1f2937] font-semibold text-sm group-hover:text-[#d97706] transition-colors">
                      <span>Read Their Story</span>
                      <ArrowRight
                        size={14}
                        className="transform group-hover:translate-x-1 transition-transform"
                      />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link
            href="/artisans"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#d97706] text-white font-bold border-2 border-[#d97706] hover:bg-transparent hover:text-[#d97706] transition-all duration-300"
          >
            Meet All Artisans
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
