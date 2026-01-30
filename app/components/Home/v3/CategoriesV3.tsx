// app/components/Home/v3/CategoriesV3.tsx
"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, ChevronLeft, Sparkles } from "lucide-react";

const categories = [
  {
    id: 1,
    title: "Wood Crafts & Toys",
    description: "Etikoppaka & Kondapalli traditions",
    image: "/Images/wood.png",
    href: "https://lepakshihandicrafts.com/wood-crafts-toys",
  },
  {
    id: 2,
    title: "Textiles & Weaves",
    description: "Mangalagiri & Uppada weaves",
    image: "/Images/textile.png",
    href: "https://lepakshihandicrafts.com/textile-weaves",
  },
  {
    id: 3,
    title: "Spirutal Section",
    description: "Sacred art & crafts",
    image: "/Images/spiritual.png",
    href: "https://lepakshihandicrafts.com/spiritual-section",
  },
  {
    id: 4,
    title: "Paintings",
    description: "Kalamkari & Cheriyal scrolls",
    image: "/Images/paintings (1).png",
    href: "https://lepakshihandicrafts.com/paintings",
  },
  {
    id: 5,
    title: "Natural Mineral Crafts",
    description: "Stone & mineral artistry",
    image: "/Images/natural minaral crafts.png",
    href: "https://lepakshihandicrafts.com/natural-mineral-crafts",
  },
  {
    id: 6,
    title: "Natural Fibers",
    description: "Palm leaf & bamboo crafts",
    image: "/Images/fibres.png",
    href: "https://lepakshihandicrafts.com/natural-fibers",
  },
  {
    id: 7,
    title: "Metal Arts",
    description: "Budithi brassware legacy",
    image: "/Images/metals.png",
    href: "https://lepakshihandicrafts.com/metal-crafts",
  },
  {
    id: 8,
    title: "Carpets",
    description: "Hand-knotted excellence",
    image: "/Images/carpets.png",
    href: "https://lepakshihandicrafts.com/carpets",
  },
]

export default function CategoriesV3() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative py-24 overflow-hidden bg-[#4a3728]">
      <div className="relative z-10 w-[98%] max-w-none mx-auto px-6 lg:px-12">
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
            CRAFT COLLECTIONS
          </span>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-[family-name:var(--font-playfair)] text-white mb-6">
            Explore Our <span className="text-[#d97706]">Crafts</span>
          </h2>

          <p className="text-white/80 text-base md:text-lg max-w-3xl mx-auto leading-relaxed mb-16">
            Discover the rich heritage of Andhra Pradesh through our diverse collection of traditional crafts.
          </p>
        </motion.div>

        {/* Horizontal Scroll Categories */}
        <div className="relative">
          {/* Navigation Buttons - Hidden on Mobile */}
          <button
            onClick={() => scroll("left")}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/90 backdrop-blur-sm items-center justify-center text-[#4a3728] hover:bg-[#E0AE31] hover:text-white transition-colors"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => scroll("right")}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/90 backdrop-blur-sm items-center justify-center text-[#4a3728] hover:bg-[#E0AE31] hover:text-white transition-colors"
          >
            <ChevronRight size={20} />
          </button>

          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide -mx-6 px-6 lg:-mx-12 lg:px-12"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="flex-shrink-0 w-[280px]"
            >
              <Link target="_blank" href={category.href} className="group block">
                <div className="relative h-[350px] bg-[#FAF8F3] border-2 border-[#8B7355] overflow-hidden hover:border-[#d97706] transition-all duration-300">
                  {/* Image */}
                  <div className="relative h-[250px]">
                    <Image
                      src={category.image}
                      alt={category.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-5 bg-[#FAF8F3]">
                    <h3 className="text-[#1f2937] text-xl font-bold font-[family-name:var(--font-playfair)] mb-2">
                      {category.title}
                    </h3>
                    <p className="text-[#64748b] text-sm leading-relaxed">
                      {category.description}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
          </div>
        </div>

        {/* View All Link - Mobile */}
        <div className="mt-8 text-center sm:hidden">
          <Link
            href="/heritage"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#103248] text-white font-semibold text-sm"
          >
            View All Collections
            <ChevronRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
