'use client';
import { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import SwiperCore from 'swiper';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/navigation';

const categories = [
  { id: 1, title: 'Jewelry', image: '/imitation_jewellery.jpg', link: '/category/jewelry' },
  { id: 2, title: 'Paintings', image: '/adivasi-paintings.jpg', link: '/category/paintings' },
  { id: 3, title: 'Textile / Weaves', image: '/hand-knotted.jpg', link: '/category/textile-weaves' },
  { id: 4, title: 'Other States', image: '/silver-filigree.jpg', link: '/category/paintings' },
  { id: 5, title: 'Natural Fibers', image: '/bamboo.jpg', link: '/category/natural-fibers' },
  { id: 6, title: 'Jewelry', image: '/imitation_jewellery.jpg', link: '/category/jewelry' },
  { id: 7, title: 'Metal Crafts', image: '/bronze-casting.jpg', link: '/category/metal-crafts' },
  { id: 8, title: 'Wood Crafts', image: '/etikoppaka.jpg', link: '/category/wood-crafts' }
];

export default function CategoriesCarousel() {
  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);
  const swiperRef = useRef<SwiperCore | null>(null);

  useEffect(() => {
    if (swiperRef.current && prevRef.current && nextRef.current) {
      const swiper = swiperRef.current;
      
      // Wait for next tick to ensure Swiper is fully initialized
      setTimeout(() => {
        if (swiper.params.navigation && typeof swiper.params.navigation !== 'boolean') {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }
        swiper.navigation.destroy();
        swiper.navigation.init();
        swiper.navigation.update();
      }, 0);
    }
  }, []);

  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-4">

        {/* Section Title */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-900 uppercase">
            Categories
          </h2>
        </div>

        <div className="relative">
          <Swiper
            modules={[Autoplay, Navigation]}
            loop={true}
            slidesPerView={1}
            spaceBetween={24}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            onBeforeInit={(swiper) => {
              if (typeof swiper.params.navigation !== 'boolean') {
                swiper.params.navigation = {
                  prevEl: prevRef.current,
                  nextEl: nextRef.current,
                };
              }
            }}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
            }}
            className="!pb-8"
          >
            {categories.map((category) => (
              <SwiperSlide key={category.id}>
                <Link href={category.link} className="block">
                  <div className="rounded-lg overflow-hidden shadow-md">
                    <div className="relative h-[240px] md:h-[300px]">
                      <Image
                        src={category.image}
                        alt={category.title}
                        fill
                        className="object-cover"
                        priority
                      />
                    </div>
                  </div>
                  <p className="mt-4 text-center text-base md:text-lg font-medium text-gray-900">
                    {category.title}
                  </p>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Chevron Arrows */}
          <div
            ref={prevRef}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10 cursor-pointer p-04 bg-white rounded-full shadow-md hover:bg-gray-100 transition"
          >
            <ChevronLeft size={24} />
          </div>
          <div
            ref={nextRef}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10 cursor-pointer p-04 bg-white rounded-full shadow-md hover:bg-gray-100 transition"
          >
            <ChevronRight size={24} />
          </div>
        </div>
      </div>
    </section>
  );
}