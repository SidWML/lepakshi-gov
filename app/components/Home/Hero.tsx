// app/components/Home/Hero.tsx
"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

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

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full min-h-screen overflow-hidden pt-[100px]
      bg-gradient-to-br from-[#3B2A1A] via-[#5A3523] to-[#8C4A2F]">

      {/* Subtle Heritage Texture */}
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4z'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Floating Craft Image */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute right-0 top-1/4 w-1/3 h-1/2 opacity-25">
          <div
            className="h-full transition-transform duration-1000 ease-out relative"
            style={{ transform: `translateY(-${currentSlide * 100}%)` }}
          >
            {carouselImages.map((image, index) => (
              <div
                key={image.id}
                className="absolute inset-0"
                style={{ transform: `translateY(${index * 100}%)` }}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            ))}
          </div>
        </div>

        {/* Decorative Geometry (Muted Gold) */}
        <div className="absolute top-24 left-24 w-28 h-28 border border-[#C9A24D]/30 rotate-45" />
        <div className="absolute bottom-32 right-32 w-20 h-20 border border-[#C9A24D]/20" />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-12 py-20">
        <div className="max-w-3xl space-y-10">

          {/* Since Line */}
          <div className="flex items-center gap-4">
            <div className="w-14 h-[1px] bg-[#C9A24D]/70" />
            <span className="text-[#C9A24D] text-xs tracking-[0.35em] uppercase font-bold">
              Since 1982
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl
            font-bold leading-[0.95] tracking-tight text-white
            font-[family-name:var(--font-playfair)]">
            <span className="block">Andhra’s</span>
            <span className="block text-[#C9A24D]">Living</span>
            <span className="block">Heritage</span>
          </h1>

          {/* Tagline */}
          <p className="text-white/85 text-xl md:text-2xl leading-relaxed max-w-xl
            font-[family-name:var(--font-playfair)]">
            Where tradition meets artistry, and every craft tells a timeless story.
          </p>

          {/* Description */}
          <div className="space-y-2 text-white/80 text-lg max-w-xl">
            <p>
              Empowering <span className="text-[#C9A24D] font-semibold">2,05,000+ artisan families</span> across Andhra Pradesh.
            </p>
            <p className="text-white/70">
              Preserving centuries-old craft traditions through sustainable livelihoods.
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 pt-4">
            <Link
              href="/heritage"
              className="inline-flex items-center gap-2 px-10 py-4
                bg-[#C9A24D] text-[#3B2A1A] font-bold text-lg
                hover:bg-white transition-all duration-300 shadow-xl"
            >
              Explore Our Crafts →
            </Link>

            <Link
              href="/artisan-stories"
              className="inline-flex items-center px-10 py-4
                border border-white/60 text-white font-bold text-lg
                hover:bg-white hover:text-[#3B2A1A]
                transition-all duration-300"
            >
              Meet the Artisans
            </Link>
          </div>

          {/* Featured Craft */}
          <div className="pt-8">
            <p className="text-[#C9A24D] text-xs tracking-widest uppercase mb-2 font-semibold">
              Featured Craft
            </p>
            <h3 className="text-white text-2xl md:text-3xl font-bold font-[family-name:var(--font-playfair)]">
              {carouselImages[currentSlide].title}
            </h3>

            {/* Indicators */}
            <div className="flex gap-3 pt-4">
              {carouselImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-1.5 transition-all duration-500 ${
                    index === currentSlide
                      ? "w-14 bg-[#C9A24D]"
                      : "w-8 bg-white/30 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Divider */}
      <div className="absolute bottom-0 inset-x-0 h-px
        bg-gradient-to-r from-transparent via-[#C9A24D]/30 to-transparent" />
    </section>
  );
}
