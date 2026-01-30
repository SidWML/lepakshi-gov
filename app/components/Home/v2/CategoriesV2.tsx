// app/components/Home/v2/CategoriesV2.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Grid2X2 } from "lucide-react";

const categories = [
  {
    id: 1,
    title: "Wood Crafts & Toys",
    image: "/etikoppaka.jpg",
    href: "/products/wood",
  },
  {
    id: 2,
    title: "Textiles & Weaves",
    image: "/hand-knotted.jpg",
    href: "/products/textiles",
  },
  {
    id: 3,
    title: "Metal Crafts",
    image: "/bronze-casting.jpg",
    href: "/products/metal",
  },
  {
    id: 4,
    title: "Paintings",
    image: "/adivasi-paintings.jpg",
    href: "/products/paintings",
  },
  {
    id: 5,
    title: "Traditional Jewelry",
    image: "/imitation_jewellery.jpg",
    href: "/products/jewelry",
  },
  {
    id: 6,
    title: "Stone Carvings",
    image: "/bronze-casting.jpg",
    href: "/products/stone",
  },
  {
    id: 7,
    title: "Natural Fibres",
    image: "/hand-knotted.jpg",
    href: "/products/fibres",
  },
  {
    id: 8,
    title: "Carpets & Rugs",
    image: "/hand-knotted.jpg",
    href: "/products/carpets",
  },
];

export default function CategoriesV2() {
  return (
    <section className="relative py-20 md:py-28 bg-[#F5E8C8] overflow-hidden">
      {/* Subtle Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.15]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23c9a24d' stroke-width='0.5' stroke-opacity='0.3'%3E%3Cpath d='M30 10v40M10 30h40M20 20l20 20M40 20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
        backgroundSize: '60px 60px'
      }} />

      <div className="relative z-10 w-[98%] max-w-none mx-auto px-6 lg:px-16">
        {/* Clean Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          {/* Icon */}
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-12 h-px bg-[#E0AE31]" />
            <Grid2X2 size={24} className="text-[#E0AE31]" />
            <div className="w-12 h-px bg-[#E0AE31]" />
          </div>

          <span className="text-[#A53430] text-xs tracking-[0.3em] uppercase font-semibold block mb-4">
            Collections
          </span>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#242424] font-[family-name:var(--font-playfair)] mb-4">
            Explore Our{" "}
            <span className="text-[#E0AE31] italic">Crafts</span>
          </h2>

          <p className="text-[#64748b] text-base max-w-xl mx-auto">
            Discover authentic handcrafted treasures from Andhra Pradesh's finest artisan traditions.
          </p>
        </motion.div>

        {/* Clean Grid Layout */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <Link href={category.href} className="group block">
                {/* Image Container */}
                <div className="relative aspect-square overflow-hidden rounded-lg bg-white shadow-sm mb-4">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Title Card */}
                <div className="bg-white rounded-lg py-4 px-5 shadow-sm text-center group-hover:shadow-md transition-shadow">
                  <h3 className="text-[#242424] font-semibold text-base font-[family-name:var(--font-playfair)]">
                    {category.title}
                  </h3>
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
            href="/heritage"
            className="inline-flex items-center gap-2 text-[#103248] font-semibold hover:text-[#E0AE31] transition-colors"
          >
            <span>View All Collections</span>
            <span className="text-lg">→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
