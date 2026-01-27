// app/components/Home/Video.tsx
'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Video data
const videos = [
  {
    id: 1,
    title: "Lepakshi Handicrafts | Voices of Andhra's Craft Legacy – A Tribute to Timeless Traditions",
    thumbnail: '/lepakshihandi.jpg',
    youtubeId: 'bxjnoKLH7pM',
    duration: '5:24',
    views: '2.5K',
    date: '2 weeks ago',
  },
  {
    id: 2,
    title: "Pen Kalamkari | Srikalahasti's Hand-Painted Legacy | Lepakshi",
    thumbnail: '/pen.jpg',
    youtubeId: 'xaTLbS_A_QQ',
    duration: '4:15',
    views: '1.8K',
    date: '3 weeks ago',
  },
  {
    id: 3,
    title:
      'Udayagiri Wooden Cutlery | Fretwork Elegance from SPS Nellore District | Lepakshi Handicrafts',
    thumbnail: '/udayagiri.jpg',
    youtubeId: 'e0XVjIbvqBg',
    duration: '6:42',
    views: '3.2K',
    date: '1 month ago',
  },
  {
    id: 4,
    title:
      'Budithi Brassware | The Golden Glow of Tradition | Srikakulam District | Lepakshi Handicrafts',
    thumbnail: '/brassware.jpg',
    youtubeId: 'wRgQcBINVyE',
    duration: '5:10',
    views: '2.1K',
    date: '1 month ago',
  },
  {
    id: 5,
    title: 'Explore the Timeless Art of Terracotta | Chittoor District | Lepakshi Handicrafts',
    thumbnail: '/timeless.jpg',
    youtubeId: 'VG3xpT5ux-s',
    duration: '7:30',
    views: '4.5K',
    date: '2 months ago',
  },
  {
    id: 6,
    title: 'Wood Carving | Tirupati District | Lepakshi Handicrafts',
    thumbnail: '/woodcarving.jpg',
    youtubeId: '97Nhrww9Izc',
    duration: '4:55',
    views: '3.8K',
    date: '2 months ago',
  },
  {
    id: 7,
    title:
      'Raja Rani Dolls | Royal Symbols of Tradition | Annamayya District | Lepakshi Handicrafts',
    thumbnail: '/rajarani.jpg',
    youtubeId: 'uspvrl1966w',
    duration: '6:20',
    views: '2.9K',
    date: '3 months ago',
  },
  {
    id: 8,
    title:
      'Tholu Bommalata | Leather Puppetry | A Living Epic in Shadow | Lepakshi Handicrafts',
    thumbnail: '/tholubommalu.jpg',
    youtubeId: 'PpCJiidEgWY',
    duration: '8:15',
    views: '5.2K',
    date: '3 months ago',
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
    <section className="py-8 md:py-12 lg:py-16 bg-white">
      <div className="container mx-auto px-4">

        {/* Section Title */}
        <div className="mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-900 uppercase tracking-wide mb-2">
            <span className="relative inline-block">
              LATEST VIDEOS
              <span className="absolute -bottom-2 left-0 w-full h-1"></span>
            </span>
          </h2>
          <p className="text-gray-600 text-sm md:text-base mt-4 max-w-2xl">
            Watch our latest videos showcasing traditional crafts, artisans, and cultural heritage
          </p>
        </div>

        {/* Video Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Main Player */}
          <div className="lg:col-span-2">
            <div className="bg-gray-900 rounded-xl overflow-hidden shadow-xl">
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
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute bottom-4 right-4 bg-black/75 text-white px-2 py-1 rounded text-sm">
                    {selectedVideo.duration}
                  </div>
                </div>
              )}

              <div className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-bold text-white mb-2 line-clamp-2">
                  {selectedVideo.title}
                </h3>
                <div className="text-gray-300 text-sm">
                  {selectedVideo.views} views • {selectedVideo.date}
                </div>
              </div>
            </div>
          </div>

          {/* Playlist */}
          <div>
            <div className="bg-gray-50 rounded-xl p-4 shadow-lg h-full">
              

              <div className="space-y-3 max-h-[500px] overflow-y-auto pr-2">
                {videos.map((video) => (
                  <div
                    key={video.id}
                    onClick={() => playVideo(video)}
                    className={`flex p-3 rounded-lg cursor-pointer border transition ${
                      selectedVideo.id === video.id
                        ? 'bg-blue-50 border-blue-200'
                        : 'bg-white border-gray-200 hover:bg-gray-100'
                    }`}
                  >
                    <div className="relative w-24 h-16 flex-shrink-0 rounded overflow-hidden">
                      <Image src={video.thumbnail} alt={video.title} fill className="object-cover" />
                      <div className="absolute bottom-1 right-1 bg-black/75 text-white text-xs px-1 rounded">
                        {video.duration}
                      </div>
                    </div>

                    <div className="ml-3">
                      <h4 className="text-sm font-medium line-clamp-2 mb-1 text-black">
                        {video.title}
                      </h4>
                      
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* More Videos */}
        <div className="text-right mt-10">
          <Link
            href="https://www.youtube.com/channel/UCUj9ANy5MBFhdzK-yAloioA"
            target="_blank"
            className="inline-flex items-center px-6 py-3 text-white bg-blue-900 hover:bg-red-950 rounded-md"
          >
            MORE VIDEOS
          </Link>
        </div>

      </div>
    </section>
  );
}
