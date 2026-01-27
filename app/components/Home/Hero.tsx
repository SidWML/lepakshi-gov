// app/components/Home/Hero.tsx
"use client";
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
// Local images from public folder
const carouselImages = [
  {
    id: 1,
    src: '/Ganesh-1-768x512-removebg-preview.png',
    alt: 'Ganesh Handicraft'
  },
  {
    id: 2,
    src: '/Jar-768x512-removebg-preview.png',
    alt: 'Traditional Jar'
  },
  {
    id: 3,
    src: '/White-Wood-Birds-768x512-removebg-preview.png',
    alt: 'White Wood Birds'
  },
  {
    id: 4,
    src: '/Tulasi-Kota-768x512-removebg-preview.png',
    alt: 'Tulasi Kota'
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative w-full bg-white">
      <div className="container mx-auto px-4 py-8 md:py-12 lg:py-16">
        <div className="flex flex-col lg:flex-row items-center gap-6 md:gap-8 lg:gap-12">
          
          {/* Left Column - Image Carousel */}
          <div className="w-full lg:w-1/2">
            <div className="relative rounded-lg overflow-hidden">
              {/* Carousel Container */}
              <div className="relative h-[50px] sm:h-[300px] md:h-[350px] lg:h-[400px]">
                {/* Carousel Track */}
<div className="absolute inset-0 overflow-hidden">
  <div
    className="flex h-full transition-transform duration-700 ease-in-out"
    style={{
      transform: `translateX(-${currentSlide * 100}%)`,
    }}
  >
    {carouselImages.map((image) => (
      <div key={image.id} className="relative w-full flex-shrink-0">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          className="object-contain p-4"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />
      </div>
    ))}
  </div>
</div>

                
                {/* Carousel Navigation Dots */}
                <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-1.5 z-10">
                  {carouselImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-200 ${
                        index === currentSlide ? 'bg-blue-600 scale-110' : 'bg-gray-400 hover:bg-gray-500'
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
                
                {/* Navigation Arrows */}
               {/* Left Arrow */}
<button
  onClick={prevSlide}
  aria-label="Previous slide"
  className="absolute left-2 top-1/2 -translate-y-1/2 z-10 text-gray-300  transition-colors"
>
  <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" strokeWidth={1.8} />
</button>

{/* Right Arrow */}
<button
  onClick={nextSlide}
  aria-label="Next slide"
  className="absolute right-2 top-1/2 -translate-y-1/2 z-10 text-gray-300 transition-colors"
>
  <ChevronRight className="w-5 h-5 md:w-6 md:h-6" strokeWidth={1.8} />
</button>

              </div>
            </div>
          </div>
          
          {/* Right Column - Content */}
          <div className="w-full lg:w-1/2">
            <div className="text-center lg:text-left">
              {/* Title with underline */}
              <div className="mb-4 md:mb-6">
                <div className="inline-block">
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900 mb-1 md:mb-2">
                    <span className="relative inline-block">
                      LEPAKSHI HANDICRAFTS
                      <span className="absolute -bottom-1 left-0 w-full h-0.5 md:h-1"></span>
                    </span>
                  </h1>
                </div>
              </div>
              
              {/* Description */}
              <div className="mb-4 md:mb-6">
                <div className="text-gray-700 text-sm md:text-base lg:text-lg leading-relaxed space-y-3 md:space-y-4">
                  <p>
                    An Andhra Pradesh Government Undertaking, showcases a diverse range of traditional crafts and art forms, 
                    each unique in style, theme, and expression.
                  </p>
                  <p>
                    Established in 1982, A.P. Handicrafts Development Corporation Ltd. promotes and markets these exceptional 
                    products while supporting over 2,05,000 artisans across the state. Through various welfare schemes and 
                    financial assistance from the Government of India and Andhra Pradesh, we aim to preserve and uplift the 
                    regions rich craft heritage.
                  </p>
                </div>
              </div>
              
              
              
              {/* Read More Button */}
              <div className="mt-4 md:mt-6 flex justify-center">
                <Link 
                  href="/about-us"
                  className="inline-flex items-center justify-center px-6 py-2 md:px-8 md:py-3 text-sm md:text-base font-medium text-white bg-blue-900 hover:bg-red-950 rounded-md shadow-sm hover:shadow-md transition-all duration-200"
                >
                  <span className="mr-2">Read more</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}