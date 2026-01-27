// app/components/Home/Hero.tsx
"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const carouselImages = [
  {
    id: 1,
    src: '/Ganesh-1-768x512-removebg-preview.png',
    alt: 'Ganesh Handicraft',
    title: 'Bidriware Art'
  },
  {
    id: 2,
    src: '/Jar-768x512-removebg-preview.png',
    alt: 'Traditional Jar',
    title: 'Etikoppaka Craft'
  },
  {
    id: 3,
    src: '/White-Wood-Birds-768x512-removebg-preview.png',
    alt: 'White Wood Birds',
    title: 'Kondapalli Toys'
  },
  {
    id: 4,
    src: '/Tulasi-Kota-768x512-removebg-preview.png',
    alt: 'Tulasi Kota',
    title: 'Traditional Decor'
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative w-full min-h-screen overflow-hidden pt-[100px]">
      {/* Background Carousel */}
      <div className="absolute inset-0">
        <div
          className="flex h-full transition-transform duration-1000 ease-out"
          style={{
            transform: `translateX(-${currentSlide * 100}%)`,
          }}
        >
          {carouselImages.map((image) => (
            <div key={image.id} className="relative w-full flex-shrink-0 h-full">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                sizes="100vw"
                priority
              />
            </div>
          ))}
        </div>
        {/* Charcoal Overlay for text readability */}
        <div className="absolute inset-0 bg-black/70" />

        {/* Decorative Gold Pattern Overlay */}
        <div className="absolute inset-0 overflow-hidden opacity-[0.04]">
          <div className="absolute top-20 right-20 w-96 h-96">
            <svg viewBox="0 0 200 200" className="w-full h-full">
              <defs>
                <pattern id="mandala" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                  <circle cx="20" cy="20" r="2" fill="#c9a962" />
                  <circle cx="20" cy="20" r="8" fill="none" stroke="#c9a962" strokeWidth="0.5" />
                  <circle cx="20" cy="20" r="15" fill="none" stroke="#c9a962" strokeWidth="0.3" />
                </pattern>
              </defs>
              <rect width="200" height="200" fill="url(#mandala)" />
            </svg>
          </div>
          <div className="absolute bottom-20 left-20 w-96 h-96">
            <svg viewBox="0 0 200 200" className="w-full h-full">
              <circle cx="100" cy="100" r="80" fill="none" stroke="#c9a962" strokeWidth="1" />
              <circle cx="100" cy="100" r="60" fill="none" stroke="#c9a962" strokeWidth="0.5" />
            </svg>
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-12 py-12 md:py-16 lg:py-20">
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)] text-center">

          {/* Centered Content */}
          <div className="max-w-4xl space-y-8">
            {/* Decorative Line */}
            <div className="flex items-center justify-center gap-4">
              <div className="w-16 h-[1px] bg-gradient-to-r from-transparent to-[#c9a962]" />
              <span className="text-[#c9a962] text-sm tracking-[0.3em] uppercase font-[family-name:var(--font-montserrat)]">
                Since 1982
              </span>
              <div className="w-16 h-[1px] bg-gradient-to-l from-transparent to-[#c9a962]" />
            </div>

            {/* Main Title */}
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[0.95] font-[family-name:var(--font-playfair)] tracking-tight">
                <span className="block">LEPAKSHI</span>
                <span className="block bg-gradient-to-r from-[#c9a962] via-[#e0ae31] to-[#c9a962] bg-clip-text text-transparent">
                  HANDICRAFTS
                </span>
              </h1>
              <div className="flex items-center justify-center gap-2 pt-2">
                <div className="w-16 h-[2px] bg-[#c9a962]" />
                <div className="w-3 h-3 rotate-45 border border-[#c9a962]" />
                <div className="w-16 h-[2px] bg-[#c9a962]" />
              </div>
            </div>

            {/* Subtitle */}
            <p className="text-gray-300 text-lg md:text-xl font-medium tracking-wide font-[family-name:var(--font-montserrat)]">
              An Andhra Pradesh Government Undertaking
            </p>

            {/* Description */}
            <div className="space-y-4 text-gray-400 leading-relaxed font-[family-name:var(--font-montserrat)] max-w-2xl mx-auto">
              <p className="text-base md:text-lg">
                Showcasing a diverse range of traditional crafts and art forms,
                each unique in style, theme, and expression.
              </p>
              <p className="text-base md:text-lg">
                Supporting over <span className="text-[#c9a962] font-semibold">2,05,000 artisans</span> across
                the state, preserving and uplifting the region&apos;s rich craft heritage.
              </p>
            </div>

            {/* Stats Row */}
            {/* <div className="flex flex-wrap items-center justify-center gap-8 pt-4">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white font-[family-name:var(--font-playfair)]">40+</div>
                <div className="text-sm text-gray-400 font-[family-name:var(--font-montserrat)]">Years of Legacy</div>
              </div>
              <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-[#c9a962]/50 to-transparent" />
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white font-[family-name:var(--font-playfair)]">2L+</div>
                <div className="text-sm text-gray-400 font-[family-name:var(--font-montserrat)]">Artisans Supported</div>
              </div>
              <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-[#c9a962]/50 to-transparent" />
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white font-[family-name:var(--font-playfair)]">100+</div>
                <div className="text-sm text-gray-400 font-[family-name:var(--font-montserrat)]">Craft Categories</div>
              </div>
            </div> */}

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
              <Link
                href="/aboutus"
                className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-semibold overflow-hidden font-[family-name:var(--font-montserrat)] transition-all duration-500"
              >
                <span className="absolute inset-0 bg-[#c9a962]" />
                <span className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                <span className="relative z-10 flex items-center text-white group-hover:text-[#2c2c2c] transition-colors duration-500">
                  Discover Our Story
                  <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
              <Link
                href="/heritage"
                className="group inline-flex items-center justify-center px-8 py-4 text-base font-semibold border-2 border-[#c9a962] text-[#c9a962] hover:bg-[#c9a962] hover:text-white font-[family-name:var(--font-montserrat)] transition-all duration-300"
              >
                Explore Collection
              </Link>
            </div>

            {/* Carousel Indicators */}
            <div className="flex items-center justify-center gap-3 pt-8">
              {carouselImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`transition-all duration-500 ${
                    index === currentSlide
                      ? 'w-12 h-1 bg-[#c9a962]'
                      : 'w-8 h-1 bg-gray-600 hover:bg-gray-500'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Current Craft Title */}
            <div className="pt-4">
              <p className="text-[#c9a962] text-xs tracking-[0.2em] uppercase mb-1 font-[family-name:var(--font-montserrat)]">
                Featured Craft
              </p>
              <h3 className="text-white text-xl md:text-2xl font-semibold font-[family-name:var(--font-playfair)]">
                {carouselImages[currentSlide].title}
              </h3>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Decorative Border */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#c9a962]/30 to-transparent" />
    </section>
  );
}
