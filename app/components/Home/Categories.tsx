"use client";

import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    id: 1,
    title: "Jewelry",
    subtitle: "Traditional Ornaments",
    description: "Intricate metalwork passed through generations",
    image: "/imitation_jewellery.jpg",
  },
  {
    id: 2,
    title: "Paintings",
    subtitle: "Stories in Natural Dyes",
    description: "Ancient art on cloth telling timeless tales",
    image: "/adivasi-paintings.jpg",
  },
  {
    id: 3,
    title: "Textiles & Weaves",
    subtitle: "Handwoven Heritage",
    description: "Every thread carries 400 years of tradition",
    image: "/hand-knotted.jpg",
  },
  {
    id: 4,
    title: "Metal Crafts",
    subtitle: "Forged by Fire",
    description: "Bronze and brass shaped by ancient techniques",
    image: "/bronze-casting.jpg",
  },
  {
    id: 5,
    title: "Wood Crafts",
    subtitle: "Carved Traditions",
    description: "Lightweight wood transformed into living art",
    image: "/etikoppaka.jpg",
  },
];

export default function Categories() {
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
              Explore Our Crafts
            </span>
            <div className="w-14 h-[1px] bg-[#C9A24D]/70" />
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#3B2A1A] font-[family-name:var(--font-playfair)] mb-6 leading-tight">
            Traditional{" "}
            <span className="text-[#8C4A2F]">Artistry</span>
          </h2>
          <p className="text-[#6F6257] text-lg max-w-2xl mx-auto font-medium leading-relaxed">
            Discover the rich tapestry of traditional crafts from Andhra Pradesh
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {categories.map((category, index) => (
            <Link
              key={category.id}
              href="/heritage"
              className="group relative bg-white border border-[#E0D0B8] overflow-hidden
                hover:shadow-2xl hover:shadow-[#3B2A1A]/20 transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-80 overflow-hidden bg-[#E8DCC8]">
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  priority={index < 3}
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#3B2A1A]/90 via-[#3B2A1A]/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

                {/* Number badge */}
                <div className="absolute top-6 right-6 w-12 h-12 bg-[#C9A24D] flex items-center justify-center">
                  <span className="text-[#3B2A1A] font-bold text-lg font-[family-name:var(--font-playfair)]">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                {/* Content on image */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-[#C9A24D] text-xs tracking-[0.25em] uppercase mb-2 font-bold">
                    {category.subtitle}
                  </p>
                  <h3 className="text-white text-2xl md:text-3xl font-bold font-[family-name:var(--font-playfair)] mb-3">
                    {category.title}
                  </h3>
                </div>
              </div>

              {/* Description card */}
              <div className="p-6 bg-white">
                <p className="text-[#6F6257] text-base leading-relaxed mb-4">
                  {category.description}
                </p>

                {/* CTA */}
                <div className="flex items-center gap-3 text-[#8C4A2F] font-semibold group-hover:text-[#C9A24D] transition-colors">
                  <span className="text-sm tracking-wide">Explore Craft</span>
                  <div className="w-8 h-[2px] bg-[#C9A24D] transform group-hover:w-12 transition-all duration-300" />
                </div>
              </div>

              {/* Hover accent border */}
              <div className="absolute inset-x-0 bottom-0 h-[2px] bg-[#C9A24D] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-16">
          <Link
            href="/heritage"
            className="inline-flex items-center gap-2 px-10 py-4
              bg-[#C9A24D] text-[#3B2A1A] font-bold text-lg
              hover:bg-[#3B2A1A] hover:text-white
              transition-all duration-300 shadow-xl"
          >
            View All Crafts →
          </Link>
        </div>
      </div>

      {/* Bottom divider */}
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#C9A24D]/40 to-transparent" />
    </section>
  );
}
