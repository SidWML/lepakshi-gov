// app/components/Home/v3/VideoV3.tsx
"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Play, Clock, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

const videos = [
  {
    id: 1,
    title: "Voices of Andhra's Craft Legacy",
    thumbnail: "/lepakshihandi.jpg",
    youtubeId: "bxjnoKLH7pM",
    duration: "5:24",
    craft: "Documentary",
  },
  {
    id: 2,
    title: "Pen Kalamkari | Hand-Painted Legacy",
    thumbnail: "/pen.jpg",
    youtubeId: "xaTLbS_A_QQ",
    duration: "4:15",
    craft: "Kalamkari",
  },
  {
    id: 3,
    title: "Udayagiri Wooden Cutlery",
    thumbnail: "/udayagiri.jpg",
    youtubeId: "e0XVjIbvqBg",
    duration: "6:42",
    craft: "Wood Craft",
  },
  {
    id: 4,
    title: "Budithi Brassware | Golden Tradition",
    thumbnail: "/brassware.jpg",
    youtubeId: "wRgQcBINVyE",
    duration: "5:10",
    craft: "Brassware",
  },
  {
    id: 5,
    title: "The Timeless Art of Terracotta",
    thumbnail: "/timeless.jpg",
    youtubeId: "VG3xpT5ux-s",
    duration: "7:30",
    craft: "Terracotta",
  },
];

export default function VideoV3() {
  const [selectedVideo, setSelectedVideo] = useState(videos[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const playVideo = (video: (typeof videos)[number]) => {
    setSelectedVideo(video);
    setIsPlaying(true);
  };

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
    <section className="relative min-h-screen flex items-center bg-[#123142] overflow-hidden">
      {/* Subtle Pattern */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='50' cy='50' r='2' fill='%23103248'/%3E%3C/svg%3E")`,
          backgroundSize: "50px 50px",
        }}
      />

      <div className="relative z-10 w-[98%] max-w-none mx-auto px-6 lg:px-12 py-24">
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
            WATCH & LEARN
          </span>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-[family-name:var(--font-playfair)] text-white mb-6">
            Artisan <span className="text-[#d97706]">Stories</span>
          </h2>

          <p className="text-white/80 text-base md:text-lg max-w-3xl mx-auto leading-relaxed mb-16">
            Discover the stories behind our artisans and their timeless crafts.
          </p>
        </motion.div>

        {/* Main Video Player */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <div className="relative bg-[#103248] overflow-hidden shadow-2xl max-w-5xl mx-auto">
            {isPlaying ? (
              <div className="relative pt-[56.25%]">
                <iframe
                  src={`https://www.youtube.com/embed/${selectedVideo.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
                  className="absolute inset-0 w-full h-full"
                  title={selectedVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ) : (
              <div
                className="relative pt-[56.25%] cursor-pointer group"
                onClick={() => setIsPlaying(true)}
              >
                <Image
                  src={selectedVideo.thumbnail}
                  alt={selectedVideo.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#103248]/80 via-[#103248]/30 to-transparent" />

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-[#E0AE31] flex items-center justify-center hover:bg-white transition-colors duration-300">
                    <Play
                      className="w-8 h-8 text-[#103248] ml-1"
                      fill="currentColor"
                    />
                  </div>
                </div>

                {/* Duration */}
                <div className="absolute bottom-4 right-4 bg-[#103248]/90 text-white px-3 py-1.5 text-sm font-medium flex items-center gap-2">
                  <Clock size={14} />
                  {selectedVideo.duration}
                </div>

                {/* Title Overlay */}
                <div className="absolute bottom-4 left-4 right-20">
                  <span className="inline-block px-3 py-1 bg-[#E0AE31] text-[#103248] text-xs font-bold uppercase tracking-wider mb-2">
                    {selectedVideo.craft}
                  </span>
                  <h3 className="text-white text-xl md:text-2xl font-bold font-[family-name:var(--font-playfair)]">
                    {selectedVideo.title}
                  </h3>
                </div>
              </div>
            )}
          </div>
        </motion.div>

        {/* Video Carousel */}
        <div className="relative max-w-6xl mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={() => scroll("left")}
            className="absolute -left-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/90 backdrop-blur-sm shadow-lg flex items-center justify-center text-[#103248] hover:bg-[#E0AE31] hover:text-white transition-colors"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => scroll("right")}
            className="absolute -right-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/90 backdrop-blur-sm shadow-lg flex items-center justify-center text-[#103248] hover:bg-[#E0AE31] hover:text-white transition-colors"
          >
            <ChevronRight size={20} />
          </button>

          {/* Scrollable Video List */}
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto scrollbar-hide py-2"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {videos.map((video) => (
              <div
                key={video.id}
                onClick={() => playVideo(video)}
                className={`flex-shrink-0 w-64 cursor-pointer group ${
                  selectedVideo.id === video.id ? "ring-2 ring-[#E0AE31]" : ""
                }`}
              >
                <div className="relative aspect-video overflow-hidden bg-[#103248]">
                  <Image
                    src={video.thumbnail}
                    alt={video.title}
                    fill
                    className="object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />

                  {/* Duration Badge */}
                  <div className="absolute bottom-2 right-2 bg-[#103248]/90 text-white text-xs px-2 py-1">
                    {video.duration}
                  </div>

                  {/* Play Icon on Hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Play size={24} className="text-white" fill="currentColor" />
                  </div>

                  {/* Selected Indicator */}
                  {selectedVideo.id === video.id && (
                    <div className="absolute inset-0 flex items-center justify-center bg-[#103248]/60">
                      <Play
                        size={24}
                        className="text-[#E0AE31]"
                        fill="currentColor"
                      />
                    </div>
                  )}
                </div>
                <div className="bg-white p-3">
                  <p className="text-[#103248] text-sm font-medium line-clamp-1">
                    {video.title}
                  </p>
                  <p className="text-[#64748b] text-xs mt-1">{video.craft}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Visit Channel Button */}
        <div className="text-center mt-12">
          <Link
            href="https://www.youtube.com/channel/UCUj9ANy5MBFhdzK-yAloioA"
            target="_blank"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#103248] text-white font-bold hover:bg-[#E0AE31] hover:text-[#103248] transition-colors duration-300"
          >
            Visit Our Channel
          </Link>
        </div>
      </div>
    </section>
  );
}
