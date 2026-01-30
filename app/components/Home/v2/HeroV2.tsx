// app/components/Home/v2/HeroV2.tsx
"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Crown } from "lucide-react";

const carouselImages = [
  {
    id: 1,
    src: "/Ganesh-1-768x512-removebg-preview.png",
    alt: "Ganesh Handicraft",
    title: "Bidriware Art",
  },
  {
    id: 2,
    src: "/Jar-768x512-removebg-preview.png",
    alt: "Traditional Jar",
    title: "Etikoppaka Craft",
  },
  {
    id: 3,
    src: "/White-Wood-Birds-768x512-removebg-preview.png",
    alt: "White Wood Birds",
    title: "Kondapalli Toys",
  },
  {
    id: 4,
    src: "/Tulasi-Kota-768x512-removebg-preview.png",
    alt: "Tulasi Kota",
    title: "Traditional Decor",
  },
];

export default function HeroV2() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full min-h-screen overflow-hidden pt-[100px]
      bg-gradient-to-br from-[#103248] via-[#1a4a5e] to-[#103248]">

      {/* Elegant Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.05]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 15 L32 20 L37 21 L33 25 L34 30 L30 27 L26 30 L27 25 L23 21 L28 20 Z' fill='%23c9a24d' fill-opacity='0.3'/%3E%3C/svg%3E")`,
        backgroundSize: '120px 120px'
      }} />

      {/* Top Accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#E0AE31] to-transparent" />

      {/* Floating Craft Image */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute right-[5%] top-1/4 w-[45%] h-[50%] opacity-20">
          <div className="relative h-full w-full">
            {carouselImages.map((image, index) => (
              <div
                key={image.id}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-contain drop-shadow-[0_0_40px_rgba(201,162,77,0.3)]"
                  priority={index === 0}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-40 left-16 w-24 h-24 border border-[#E0AE31]/15 rotate-45" />
        <div className="absolute bottom-32 right-24 w-32 h-32 border-2 border-white/10" />
      </div>

      <div className="relative z-10 w-[98%] max-w-none mx-auto px-6 lg:px-16 py-24">
        <div className="max-w-4xl space-y-12">

          {/* Professional Badge */}
          <div className="flex items-center gap-4">
            <div className="h-px w-16 bg-[#E0AE31]" />
            <span className="text-[#E0AE31] text-sm tracking-[0.35em] uppercase font-semibold">
              Established 1982
            </span>
            <div className="h-px w-16 bg-[#E0AE31]" />
          </div>

          {/* Professional Heading */}
          <div className="space-y-8">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl
              font-bold leading-[1.1] tracking-tight
              font-[family-name:var(--font-playfair)]">
              <span className="block text-white drop-shadow-lg">Andhra Pradesh</span>
              <span className="block text-[#E0AE31] drop-shadow-lg">
                Handicrafts Development
              </span>
              <span className="block text-white/90 text-5xl sm:text-6xl md:text-7xl lg:text-7xl mt-2">
                Corporation Limited
              </span>
            </h1>

            {/* Elegant Accent Line */}
            <div className="flex items-center gap-3">
              <div className="w-20 h-1 bg-[#E0AE31]" />
              <div className="w-2 h-2 bg-[#E0AE31] rotate-45" />
              <div className="w-12 h-px bg-white/30" />
            </div>
          </div>

          {/* Professional Tagline */}
          <p className="text-xl md:text-2xl text-white/95 leading-relaxed max-w-3xl font-light">
            <span className="block mb-3 text-[#E0AE31] font-medium">
              A Government of Andhra Pradesh Undertaking
            </span>
            Preserving centuries-old heritage through sustainable artisan empowerment
            and traditional craft excellence since 1982.
          </p>

          {/* Professional Description */}
          <div className="space-y-5 text-lg text-white/90 max-w-2xl border-l-2 border-[#E0AE31] pl-8">
            <p className="flex items-start gap-3">
              <span className="text-[#E0AE31] text-2xl leading-none">•</span>
              <span>Supporting over <span className="text-[#E0AE31] font-semibold">2,05,000 artisan families</span> across Andhra Pradesh</span>
            </p>
            <p className="flex items-start gap-3">
              <span className="text-[#E0AE31] text-2xl leading-none">•</span>
              <span>Promoting traditional handicrafts through sustainable livelihood programs</span>
            </p>
            <p className="flex items-start gap-3">
              <span className="text-[#E0AE31] text-2xl leading-none">•</span>
              <span>Preserving cultural heritage and empowering rural communities</span>
            </p>
          </div>

          {/* Professional CTAs */}
          <div className="flex flex-wrap gap-6 pt-8">
            <Link
              href="/heritage"
              className="group relative inline-flex items-center gap-3 px-12 py-5
                bg-[#E0AE31] text-white font-bold text-base
                hover:bg-[#c99a28] transition-all duration-300
                shadow-xl shadow-black/20 overflow-hidden"
            >
              <span className="relative z-10">Explore Heritage Crafts</span>
              <ChevronRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/artisan-stories"
              className="group inline-flex items-center gap-3 px-12 py-5
                border-2 border-white/30 text-white font-bold text-base
                hover:bg-white/10 hover:border-white
                transition-all duration-300 shadow-lg backdrop-blur-sm"
            >
              <span>Meet Our Artisans</span>
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Featured Craft Showcase */}
          <div className="pt-16 border-t border-white/10">
            <div className="flex items-center gap-4 mb-5">
              <div className="w-12 h-px bg-[#E0AE31]" />
              <p className="text-[#E0AE31] text-xs tracking-[0.3em] uppercase font-bold">
                Featured Heritage Craft
              </p>
            </div>
            <h3 className="text-white text-3xl md:text-4xl font-bold font-[family-name:var(--font-playfair)] mb-8 drop-shadow-lg">
              {carouselImages[currentSlide].title}
            </h3>

            {/* Elegant Indicators */}
            <div className="flex gap-4 items-center">
              {carouselImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`relative transition-all duration-500 ${
                    index === currentSlide
                      ? "w-16 h-1 bg-[#E0AE31]"
                      : "w-10 h-1 bg-white/20 hover:bg-white/40"
                  }`}
                >
                  {index === currentSlide && (
                    <span className="absolute -top-1 -bottom-1 -left-1 -right-1 border border-[#E0AE31]/50" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Professional Bottom Border */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#E0AE31] to-transparent" />
    </section>
  );
}
