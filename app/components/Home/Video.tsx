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
    <section className="relative py-24 md:py-32 bg-[#F7EFE4] overflow-hidden">
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7z' fill='%23000000' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`,
      }} />

      {/* Top divider */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#C9A24D]/40 to-transparent" />

      <div className="relative z-10 w-[98%] max-w-none mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-14 h-[1px] bg-[#C9A24D]/70" />
            <span className="text-[#8C4A2F] text-xs tracking-[0.35em] uppercase font-bold">
              Watch & Learn
            </span>
            <div className="w-14 h-[1px] bg-[#C9A24D]/70" />
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#3B2A1A] font-[family-name:var(--font-playfair)] mb-6 leading-tight">
            Craft{" "}
            <span className="text-[#8C4A2F]">Stories</span>
          </h2>
          <p className="text-[#6F6257] text-lg max-w-2xl mx-auto font-medium leading-relaxed">
            Discover the stories behind our artisans and their timeless crafts
          </p>
        </div>

        {/* Video Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Player */}
          <div className="lg:col-span-2">
            <div className="relative bg-white border border-[#E0D0B8] overflow-hidden shadow-xl">
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
                  <div className="absolute inset-0 bg-gradient-to-t from-[#3B2A1A]/80 via-[#3B2A1A]/30 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-[#C9A24D] flex items-center justify-center hover:bg-[#3B2A1A] transition-all duration-300 group">
                      <Play className="w-8 h-8 text-[#3B2A1A] group-hover:text-white ml-1 transition-colors" fill="currentColor" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 right-4 bg-[#3B2A1A]/90 text-[#C9A24D] px-3 py-1.5 text-sm font-semibold flex items-center">
                    <Clock size={14} className="mr-1.5" />
                    {selectedVideo.duration}
                  </div>
                </div>
              )}

              {/* Video Info */}
              <div className="relative p-6 md:p-8 bg-white">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-4 py-1.5 bg-[#3B2A1A] text-white text-xs tracking-wider uppercase font-bold">
                    {selectedVideo.craft}
                  </span>
                  <span className="flex items-center text-[#6F6257] text-sm font-medium">
                    <Eye size={14} className="mr-1.5 text-[#8C4A2F]" />
                    {selectedVideo.views} views
                  </span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-[#3B2A1A] line-clamp-2 font-[family-name:var(--font-playfair)] leading-tight">
                  {selectedVideo.title}
                </h3>
              </div>

              {/* Hover accent border */}
              <div className="absolute inset-x-0 bottom-0 h-[2px] bg-[#C9A24D]" />
            </div>
          </div>

          {/* Playlist */}
          <div>
            <div className="relative bg-white p-5 h-full border border-[#E0D0B8] shadow-xl overflow-hidden">
              {/* Header */}
              <div className="flex items-center justify-between mb-4 pb-4 border-b-2 border-[#C9A24D]/30">
                <div className="flex items-center gap-2">
                  <div className="w-1 h-6 bg-[#C9A24D]" />
                  <h4 className="text-[#3B2A1A] text-base font-bold tracking-[0.1em] uppercase">
                    Playlist
                  </h4>
                </div>
                <span className="px-3 py-1 bg-[#C9A24D]/10 text-[#8C4A2F] text-xs font-semibold">
                  {videos.length} videos
                </span>
              </div>

              <div className="space-y-2 max-h-[480px] overflow-y-auto pr-2">
                {videos.map((video, index) => (
                  <div
                    key={video.id}
                    onClick={() => playVideo(video)}
                    className={`relative flex gap-3 p-3 cursor-pointer transition-all duration-300 border ${
                      selectedVideo.id === video.id
                        ? 'bg-[#C9A24D]/10 border-[#C9A24D] shadow-md'
                        : 'border-[#E0D0B8] hover:bg-[#F7EFE4] hover:border-[#C9A24D]/40 hover:shadow-sm'
                    }`}
                  >
                    {/* Number */}
                    <div className="flex-shrink-0 w-6 text-center">
                      <span className={`text-sm font-bold font-[family-name:var(--font-playfair)] ${
                        selectedVideo.id === video.id ? 'text-[#C9A24D]' : 'text-[#6F6257]'
                      }`}>
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>

                    {/* Thumbnail */}
                    <div className="relative w-24 h-14 flex-shrink-0 overflow-hidden">
                      <Image src={video.thumbnail} alt={video.title} fill className="object-cover" />
                      <div className="absolute inset-0 bg-black/20" />
                      <div className="absolute bottom-1 right-1 bg-[#3B2A1A]/90 text-white text-[10px] px-1.5 py-0.5">
                        {video.duration}
                      </div>
                      {selectedVideo.id === video.id && (
                        <div className="absolute inset-0 flex items-center justify-center bg-[#3B2A1A]/60">
                          <Play size={16} className="text-[#C9A24D]" fill="currentColor" />
                        </div>
                      )}
                    </div>

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <h5 className={`text-sm font-medium line-clamp-2 ${
                        selectedVideo.id === video.id ? 'text-[#8C4A2F]' : 'text-[#3B2A1A]'
                      }`}>
                        {video.title}
                      </h5>
                      <span className="text-xs text-[#6F6257] mt-1 block">
                        {video.craft}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Visit Channel Button */}
        <div className="text-center mt-16">
          <Link
            href="https://www.youtube.com/channel/UCUj9ANy5MBFhdzK-yAloioA"
            target="_blank"
            className="inline-flex items-center gap-2 px-10 py-4
              bg-[#C9A24D] text-[#3B2A1A] font-bold text-lg
              hover:bg-[#3B2A1A] hover:text-white
              transition-all duration-300 shadow-xl"
          >
            Visit Our Channel →
          </Link>
        </div>
      </div>

      {/* Bottom divider */}
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#C9A24D]/40 to-transparent" />
    </section>
  );
}
