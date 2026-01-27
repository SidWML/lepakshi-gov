// app/components/Home/Video.tsx
'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Play, Clock, Eye } from 'lucide-react';

const videos = [
  {
    id: 1,
    title: "Voices of Andhra's Craft Legacy – A Tribute to Timeless Traditions",
    thumbnail: '/lepakshihandi.jpg',
    youtubeId: 'bxjnoKLH7pM',
    duration: '5:24',
    views: '2.5K',
    craft: 'Documentary',
  },
  {
    id: 2,
    title: "Pen Kalamkari | Srikalahasti's Hand-Painted Legacy",
    thumbnail: '/pen.jpg',
    youtubeId: 'xaTLbS_A_QQ',
    duration: '4:15',
    views: '1.8K',
    craft: 'Kalamkari',
  },
  {
    id: 3,
    title: 'Udayagiri Wooden Cutlery | Fretwork Elegance',
    thumbnail: '/udayagiri.jpg',
    youtubeId: 'e0XVjIbvqBg',
    duration: '6:42',
    views: '3.2K',
    craft: 'Wood Craft',
  },
  {
    id: 4,
    title: 'Budithi Brassware | The Golden Glow of Tradition',
    thumbnail: '/brassware.jpg',
    youtubeId: 'wRgQcBINVyE',
    duration: '5:10',
    views: '2.1K',
    craft: 'Brassware',
  },
  {
    id: 5,
    title: 'The Timeless Art of Terracotta | Chittoor District',
    thumbnail: '/timeless.jpg',
    youtubeId: 'VG3xpT5ux-s',
    duration: '7:30',
    views: '4.5K',
    craft: 'Terracotta',
  },
  {
    id: 6,
    title: 'Wood Carving Excellence | Tirupati District',
    thumbnail: '/woodcarving.jpg',
    youtubeId: '97Nhrww9Izc',
    duration: '4:55',
    views: '3.8K',
    craft: 'Carving',
  },
  {
    id: 7,
    title: 'Raja Rani Dolls | Royal Symbols of Tradition',
    thumbnail: '/rajarani.jpg',
    youtubeId: 'uspvrl1966w',
    duration: '6:20',
    views: '2.9K',
    craft: 'Dolls',
  },
  {
    id: 8,
    title: 'Tholu Bommalata | A Living Epic in Shadow',
    thumbnail: '/tholubommalu.jpg',
    youtubeId: 'PpCJiidEgWY',
    duration: '8:15',
    views: '5.2K',
    craft: 'Puppetry',
  },
];

export default function Video() {
  const [selectedVideo, setSelectedVideo] = useState(videos[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const playVideo = (video: typeof videos[number]) => {
    setSelectedVideo(video);
    setIsPlaying(true);
  };

  const getYouTubeEmbedUrl = (youtubeId: string) =>
    `https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0&modestbranding=1`;

  return (
    <section className="relative py-24 md:py-32 bg-[#faf8f5] overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#f8f5ef] via-[#faf8f5] to-[#f8f5ef]" />
        <div className="absolute top-1/4 right-0 w-96 h-96 opacity-[0.08]">
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <circle cx="100" cy="100" r="90" fill="none" stroke="#c9a962" strokeWidth="1" />
            <circle cx="100" cy="100" r="70" fill="none" stroke="#c9a962" strokeWidth="0.5" />
            <circle cx="100" cy="100" r="50" fill="none" stroke="#c9a962" strokeWidth="0.3" />
          </svg>
        </div>
        <div className="absolute bottom-1/4 left-0 w-72 h-72 opacity-[0.08]">
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <rect x="20" y="20" width="160" height="160" fill="none" stroke="#c9a962" strokeWidth="1" />
            <rect x="50" y="50" width="100" height="100" fill="none" stroke="#c9a962" strokeWidth="0.5" />
          </svg>
        </div>
      </div>

      {/* Top Border */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#c9a962]/40 to-transparent" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-16 h-[1px] bg-gradient-to-r from-transparent to-[#c9a962]" />
            <span className="text-[#c9a962] text-sm tracking-[0.3em] uppercase font-[family-name:var(--font-montserrat)]">
              Watch & Learn
            </span>
            <div className="w-16 h-[1px] bg-gradient-to-l from-transparent to-[#c9a962]" />
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#2c2416] font-[family-name:var(--font-playfair)] mb-6">
            Craft{" "}
            <span className="bg-gradient-to-r from-[#c9a962] via-[#e0ae31] to-[#c9a962] bg-clip-text text-transparent">
              Stories
            </span>
          </h2>
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-12 h-[2px] bg-gradient-to-r from-[#2c2c2c] to-[#c9a962]" />
            <div className="w-2 h-2 rotate-45 border border-[#c9a962]" />
            <div className="w-12 h-[2px] bg-gradient-to-l from-[#2c2c2c] to-[#c9a962]" />
          </div>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto font-[family-name:var(--font-montserrat)]">
            Discover the stories behind our artisans and their timeless crafts
          </p>
        </div>

        {/* Video Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Player */}
          <div className="lg:col-span-2">
            <div className="relative">
              {/* Decorative Frame */}
              <div className="absolute -inset-3 border-2 border-[#c9a962]/30 hidden lg:block rounded-sm" />
              <div className="absolute -inset-6 border border-[#c9a962]/10 hidden xl:block rounded-sm" />

              <div className="relative bg-gradient-to-br from-white via-[#faf8f5] to-white overflow-hidden shadow-2xl shadow-gray-400/40 rounded-sm">
                {/* Gold Border Accent */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#c9a962] to-transparent z-10" />

                {isPlaying ? (
                  <div className="relative pt-[56.25%]">
                    <iframe
                      ref={iframeRef}
                      src={getYouTubeEmbedUrl(selectedVideo.youtubeId)}
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
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2c2c2c]/90 via-[#2c2c2c]/20 to-transparent" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 border-2 border-[#e0ae31] flex items-center justify-center group-hover:bg-[#e0ae31] transition-all duration-300">
                        <Play className="w-8 h-8 text-[#e0ae31] group-hover:text-[#2c2c2c] ml-1 transition-colors" fill="currentColor" />
                      </div>
                    </div>
                    <div className="absolute bottom-4 right-4 bg-[#2c2c2c]/95 text-[#e0ae31] px-3 py-1.5 text-sm font-semibold font-[family-name:var(--font-montserrat)] flex items-center">
                      <Clock size={14} className="mr-1.5" />
                      {selectedVideo.duration}
                    </div>
                  </div>
                )}

                {/* Video Info */}
                <div className="relative p-6 md:p-8 bg-gradient-to-br from-[#f8f5ef] via-white to-[#faf8f5]">
                  {/* Decorative accent */}
                  <div className="absolute top-0 left-0 w-16 h-1 bg-gradient-to-r from-[#c9a962] to-transparent" />

                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-4 py-1.5 bg-gradient-to-r from-[#2c2c2c] to-[#3a3a3a] text-white text-xs tracking-wider uppercase font-[family-name:var(--font-montserrat)] shadow-sm">
                      {selectedVideo.craft}
                    </span>
                    <span className="flex items-center text-gray-600 text-sm font-medium font-[family-name:var(--font-montserrat)]">
                      <Eye size={14} className="mr-1.5 text-[#c9a962]" />
                      {selectedVideo.views} views
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-[#2c2c2c] line-clamp-2 font-[family-name:var(--font-playfair)] leading-tight">
                    {selectedVideo.title}
                  </h3>
                </div>

                {/* Gold Border Accent - Bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#c9a962] to-transparent" />
              </div>

              {/* Corner Accents */}
              <div className="absolute -top-1 -left-1 w-6 h-6 border-t-2 border-l-2 border-[#c9a962] hidden lg:block" />
              <div className="absolute -top-1 -right-1 w-6 h-6 border-t-2 border-r-2 border-[#c9a962] hidden lg:block" />
              <div className="absolute -bottom-1 -left-1 w-6 h-6 border-b-2 border-l-2 border-[#c9a962] hidden lg:block" />
              <div className="absolute -bottom-1 -right-1 w-6 h-6 border-b-2 border-r-2 border-[#c9a962] hidden lg:block" />
            </div>
          </div>

          {/* Playlist */}
          <div>
            <div className="relative bg-gradient-to-br from-white via-[#faf8f5] to-white p-5 h-full border-2 border-[#c9a962]/30 shadow-xl overflow-hidden">
              {/* Corner Accents */}
              <div className="absolute -top-[1px] -left-[1px] w-5 h-5 border-t-2 border-l-2 border-[#c9a962]" />
              <div className="absolute -top-[1px] -right-[1px] w-5 h-5 border-t-2 border-r-2 border-[#c9a962]" />
              <div className="absolute -bottom-[1px] -left-[1px] w-5 h-5 border-b-2 border-l-2 border-[#c9a962]" />
              <div className="absolute -bottom-[1px] -right-[1px] w-5 h-5 border-b-2 border-r-2 border-[#c9a962]" />

              {/* Header */}
              <div className="flex items-center justify-between mb-4 pb-4 border-b-2 border-[#c9a962]/20">
                <div className="flex items-center gap-2">
                  <div className="w-1 h-6 bg-[#c9a962]" />
                  <h4 className="text-[#2c2c2c] text-base font-bold tracking-[0.1em] uppercase font-[family-name:var(--font-montserrat)]">
                    Playlist
                  </h4>
                </div>
                <span className="px-3 py-1 bg-[#c9a962]/10 text-[#c9a962] text-xs font-semibold rounded-full font-[family-name:var(--font-montserrat)]">
                  {videos.length} videos
                </span>
              </div>

              <div className="space-y-2 max-h-[480px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-[#c9a962]/40 scrollbar-track-[#f8f5ef]">
                {videos.map((video, index) => (
                  <div
                    key={video.id}
                    onClick={() => playVideo(video)}
                    className={`relative flex gap-3 p-3 cursor-pointer transition-all duration-300 border rounded-sm ${
                      selectedVideo.id === video.id
                        ? 'bg-gradient-to-r from-[#c9a962]/15 to-[#e0ae31]/10 border-[#c9a962] shadow-md'
                        : 'border-gray-200 hover:bg-[#f8f5ef] hover:border-[#c9a962]/40 hover:shadow-sm'
                    }`}
                  >
                    {/* Number */}
                    <div className="flex-shrink-0 w-6 text-center">
                      <span className={`text-sm font-[family-name:var(--font-playfair)] ${
                        selectedVideo.id === video.id ? 'text-[#c9a962]' : 'text-gray-500'
                      }`}>
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>

                    {/* Thumbnail */}
                    <div className="relative w-24 h-14 flex-shrink-0 overflow-hidden">
                      <Image src={video.thumbnail} alt={video.title} fill className="object-cover" />
                      <div className="absolute inset-0 bg-black/20" />
                      <div className="absolute bottom-1 right-1 bg-[#2c2c2c]/95 text-white text-[10px] px-1.5 py-0.5 font-[family-name:var(--font-montserrat)]">
                        {video.duration}
                      </div>
                      {selectedVideo.id === video.id && (
                        <div className="absolute inset-0 flex items-center justify-center bg-[#2c2c2c]/60">
                          <Play size={16} className="text-[#e0ae31]" fill="currentColor" />
                        </div>
                      )}
                    </div>

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <h5 className={`text-sm font-medium line-clamp-2 font-[family-name:var(--font-montserrat)] ${
                        selectedVideo.id === video.id ? 'text-[#c9a962]' : 'text-gray-800'
                      }`}>
                        {video.title}
                      </h5>
                      <span className="text-xs text-gray-500 mt-1 block font-[family-name:var(--font-montserrat)]">
                        {video.craft}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* More Videos Button */}
        <div className="text-center mt-16">
          <Link
            href="https://www.youtube.com/channel/UCUj9ANy5MBFhdzK-yAloioA"
            target="_blank"
            className="group relative inline-flex items-center justify-center px-10 py-4 text-base font-semibold overflow-hidden font-[family-name:var(--font-montserrat)] transition-all duration-500 border-2 border-[#c9a962]"
          >
            <span className="absolute inset-0 bg-transparent" />
            <span className="absolute inset-0 bg-gradient-to-r from-[#c9a962] to-[#e0ae31] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            <span className="relative z-10 flex items-center text-[#c9a962] group-hover:text-white transition-colors duration-500">
              Visit Our Channel
              <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </span>
          </Link>
        </div>
      </div>

      {/* Bottom Border */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#c9a962]/40 to-transparent" />
    </section>
  );
}
