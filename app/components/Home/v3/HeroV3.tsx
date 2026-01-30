// app/components/Home/v3/HeroV3.tsx
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";

const heroSlides = [
  {
    id: 1,
    image: "/banners/banner-1.png",
    title: "Crafted with",
    highlight: "Heritage",
    subtitle: "Discover the timeless artistry of Andhra Pradesh's master craftspeople.",
  },
  {
    id: 2,
    image: "/banners/banner-2.png",
    title: "Etikoppaka",
    highlight: "Traditions",
    subtitle: "Lacquer-coated wooden toys crafted with natural dyes for generations.",
  },
  {
    id: 3,
    image: "/banners/banner-3.png",
    title: "Woven with",
    highlight: "Pride",
    subtitle: "Exquisite handloom textiles from Mangalagiri, Uppada, and beyond.",
  },
  {
    id: 4,
    image: "/banners/banner-4.png",
    title: "Forged in",
    highlight: "Tradition",
    subtitle: "Budithi brassware and bronze casting that echoes through centuries.",
  },
];

export default function HeroV3() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-advance slides
  useEffect(() => {
    if (!isAutoPlaying) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    // Resume auto-play after 10 seconds of inactivity
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextSlide = () => {
    goToSlide((currentSlide + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    goToSlide((currentSlide - 1 + heroSlides.length) % heroSlides.length);
  };

  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  // Safety check to ensure currentSlide is within bounds
  const currentSlideData = heroSlides[currentSlide] || heroSlides[0];

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image Carousel */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src={currentSlideData.image}
            alt={currentSlideData.title}
            fill
            priority
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#103248]/90 via-[#103248]/60 to-[#103248]/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#103248]/70 via-transparent to-[#103248]/40" />

      {/* Content */}
      <div className="relative z-10 h-full w-[98%] max-w-none mx-auto px-6 lg:px-12 flex items-center pt-20 md:pt-0">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="inline-flex items-center gap-3 text-[#E0AE31] text-xs tracking-[0.3em] uppercase font-semibold mb-6">
              <span className="w-12 h-px bg-[#E0AE31]" />
              Andhra Pradesh Handicrafts
            </span>
          </motion.div>

          {/* Main Heading - Animated per slide */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white font-[family-name:var(--font-playfair)] leading-[1.1] mb-6">
                {currentSlideData.title}
                <br />
                <span className="text-[#E0AE31]">{currentSlideData.highlight}</span>
              </h1>
              <p className="text-white/80 text-lg md:text-xl max-w-xl mb-10 leading-relaxed">
                {currentSlideData.subtitle}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            <Link
            target="_blank"
              href="https://lepakshihandicrafts.com/"
              className="px-8 py-4 bg-[#E0AE31] text-[#103248] font-bold text-base hover:bg-white transition-all duration-300"
            >
              Explore Collection
            </Link>
            <Link
            target="_blank"
              href="/our-heritage"
              className="px-8 py-4 border-2 border-white/30 text-white font-semibold text-base hover:bg-white/10 hover:border-white transition-all duration-300"
            >
              Our Heritage
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Slide Navigation - Arrows */}
      <div className="absolute left-6 lg:left-12 top-1/2 -translate-y-1/2 z-20 hidden md:block">
        <button
          onClick={prevSlide}
          className="w-12 h-12 border border-white/30 flex items-center justify-center text-white hover:bg-white/10 hover:border-white transition-all duration-300"
          aria-label="Previous slide"
        >
          <ChevronLeft size={20} />
        </button>
      </div>
      <div className="absolute right-6 lg:right-12 top-1/2 -translate-y-1/2 z-20 hidden md:block">
        <button
          onClick={nextSlide}
          className="w-12 h-12 border border-white/30 flex items-center justify-center text-white hover:bg-white/10 hover:border-white transition-all duration-300"
          aria-label="Next slide"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 md:bottom-24 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-1 transition-all duration-500 ${
              index === currentSlide
                ? "w-12 bg-[#E0AE31]"
                : "w-6 bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Slide Counter */}
      <div className="absolute bottom-8 md:bottom-24 right-6 lg:right-12 z-20 hidden md:flex items-center gap-2 text-white/60 font-[family-name:var(--font-playfair)]">
        <span className="text-2xl text-white font-bold">
          {String(currentSlide + 1).padStart(2, "0")}
        </span>
        <span className="text-sm">/</span>
        <span className="text-sm">{String(heroSlides.length).padStart(2, "0")}</span>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={scrollToNext}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-[#E0AE31] transition-colors cursor-pointer z-20"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown size={32} />
        </motion.div>
      </motion.button>
    </section>
  );
}
