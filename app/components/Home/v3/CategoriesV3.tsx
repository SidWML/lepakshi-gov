// app/components/Home/v3/CategoriesV3.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const categories = [
  {
    id: 1,
    title: "Wood Crafts",
    description: "Etikoppaka & Kondapalli traditions",
    image: "/Images/wood.png",
    href: "/products/wood",
  },
  {
    id: 2,
    title: "Textiles",
    description: "Mangalagiri & Uppada weaves",
    image: "/Images/textile.png",
    href: "/products/textiles",
  },
  {
    id: 3,
    title: "Metal Arts",
    description: "Budithi brassware legacy",
    image: "/Images/metals.png",
    href: "/products/metal",
  },
  {
    id: 4,
    title: "Paintings",
    description: "Kalamkari & Cheriyal scrolls",
    image: "/Images/paintings (1).png",
    href: "/products/paintings",
  },
  {
    id: 5,
    title: "Spiritual",
    description: "Sacred art & crafts",
    image: "/Images/spiritual.png",
    href: "/products/spiritual",
  },
  {
    id: 6,
    title: "Natural Mineral Crafts",
    description: "Stone & mineral artistry",
    image: "/Images/natural minaral crafts.png",
    href: "/products/stone",
  },
  {
    id: 7,
    title: "Natural Fibres",
    description: "Palm leaf & bamboo crafts",
    image: "/Images/fibres.png",
    href: "/products/fibres",
  },
  {
    id: 8,
    title: "Carpets & Rugs",
    description: "Hand-knotted excellence",
    image: "/Images/carpets.png",
    href: "/products/carpets",
  },
  {
    id: 9,
    title: "ODOP Products",
    description: "One District One Product",
    image: "/Images/odop.png",
    href: "/products/odop",
  },
];

export default function CategoriesV3() {
  return (
    <section className="relative py-24 overflow-hidden bg-[#4a3728]">
      <div className="relative z-10 w-[98%] max-w-none mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-[family-name:var(--font-playfair)]">
              Explore Our <span className="text-[#d97706]">Crafts</span>
            </h2>
          </motion.div>
        </div>

        {/* Horizontal Scroll Categories */}
        <div
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
              <Link href={category.href} className="group block">
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
