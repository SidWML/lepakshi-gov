"use client";

import { useState } from "react";
import { Calendar, Clock, MapPin, ChevronRight, Filter, Search, X } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

// Sample news and events data
const newsEventsData = [
  {
    id: 1,
    title: "Five Andhra Pradesh Artisans Honoured at National Handicrafts Awards for 2023 & 2024",
    category: "Awards",
    date: "2025-01-15",
    location: "New Delhi",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
    excerpt: "Five talented artisans from Andhra Pradesh have been honored with the prestigious National Handicrafts Awards, recognizing their exceptional contribution to preserving traditional crafts.",
    featured: true,
  },
  {
    id: 2,
    title: "A New Chapter Begins: Launch of Banantra & Hyaloom product at CII, Vizag 2025",
    category: "Product Launch",
    date: "2025-01-10",
    location: "Visakhapatnam",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80",
    excerpt: "Lepakshi Handicrafts unveils innovative eco-friendly product lines Banantra and Hyaloom at the CII conference in Vizag.",
  },
  {
    id: 3,
    title: "Handicrafts Exhibition & Competition at Amma Kalyana Mandapam, Vijayawada, Andhra Pradesh - Sept 2025",
    category: "Exhibition",
    date: "2025-09-05",
    location: "Vijayawada",
    image: "https://images.unsplash.com/photo-1561998338-13ad7883b21f?w=800&q=80",
    excerpt: "Annual handicrafts exhibition featuring master artisans from across Andhra Pradesh, showcasing traditional and contemporary crafts.",
  },
  {
    id: 4,
    title: "Craft Bazaar at Gohar Mahal, Bhopal, Madhya Pradesh, from 16th June to 25th June 2023",
    category: "Bazaar",
    date: "2023-06-16",
    location: "Bhopal",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
    excerpt: "Lepakshi Handicrafts participates in the prestigious Gohar Mahal Craft Bazaar, showcasing exquisite handcrafted products.",
  },
  {
    id: 5,
    title: "Craft Bazaar at the Siddhartha College Ground in Vijayawada from February 17th to February 26th, 2023",
    category: "Bazaar",
    date: "2023-02-17",
    location: "Vijayawada",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&q=80",
    excerpt: "Ten-day craft bazaar featuring artisans from across the state, offering handloom textiles, pottery, and traditional crafts.",
  },
  {
    id: 6,
    title: "Craft Bazaar at the Siddhartha College Ground in Vijayawada from February 17th to February 26th, 2023",
    category: "Bazaar",
    date: "2023-02-17",
    location: "Vijayawada",
    image: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=800&q=80",
    excerpt: "A grand celebration of Andhra Pradesh's rich craft heritage with live demonstrations and workshops.",
  },
  {
    id: 7,
    title: "Lepakshi Gandhi Smrip Bazaar, Vizag",
    category: "Bazaar",
    date: "2023-10-02",
    location: "Visakhapatnam",
    image: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=800&q=80",
    excerpt: "Special Gandhi Jayanti celebration with a dedicated bazaar showcasing khadi and handloom products.",
    featured: true,
  },
  {
    id: 8,
    title: "Traditional Craft Workshop Series - Kalamkari Painting",
    category: "Workshop",
    date: "2025-02-20",
    location: "Srikalahasti",
    image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800&q=80",
    excerpt: "Hands-on workshop with master Kalamkari artisans, learning the ancient art of hand-painting on cotton fabric.",
  },
];

const categories = ["All", "Awards", "Exhibition", "Bazaar", "Product Launch", "Workshop"];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function NewsEventsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredNews = newsEventsData.filter((item) => {
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
    const matchesSearch =
      searchQuery === "" ||
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleClearSearch = () => {
    setSearchQuery("");
    setSelectedCategory("All");
  };

  return (
    <div className="min-h-screen bg-[#f8f6f1]/30" style={{ paddingTop: "180px" }}>
      {/* Hero Banner */}
      <div className="relative w-full overflow-hidden bg-gradient-to-r from-[#3d3428] via-[#4a3f2f] to-[#5a4d3a]">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c9a227' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="relative w-full py-10 md:py-14 lg:py-16">
          <div className="w-[90%] md:w-[85%] max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              {/* Decorative Element */}
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-12 h-[2px] bg-[#c9a227]" />
                <span className="text-[#c9a227] text-xs tracking-[0.3em] uppercase font-[family-name:var(--font-montserrat)]">
                  Updates & Events
                </span>
                <div className="w-12 h-[2px] bg-[#c9a227]" />
              </div>

              {/* Title */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white font-[family-name:var(--font-playfair)] mb-4">
                News & Events
              </h1>

              {/* Subtitle */}
              <p className="text-white/80 text-base sm:text-lg md:text-xl font-[family-name:var(--font-montserrat)] max-w-3xl mx-auto mb-6">
                Stay updated with the latest happenings, exhibitions, awards, and initiatives
              </p>

              {/* Breadcrumb */}
              <nav className="flex items-center justify-center gap-2 text-sm text-white/70">
                <Link
                  href="/"
                  className="hover:text-[#c9a227] transition-colors font-[family-name:var(--font-montserrat)]"
                >
                  Home
                </Link>
                <span>/</span>
                <span className="text-[#c9a227] font-[family-name:var(--font-montserrat)]">
                  News & Events
                </span>
              </nav>
            </motion.div>
          </div>
        </div>

        {/* Bottom decorative border */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#c9a227] via-[#f7d794] to-[#c9a227]" />
      </div>

      {/* Main Content */}
      <div className="w-[90%] md:w-[85%] max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Search and Filter Bar */}
        <div className="mb-8">
          {/* Search Bar */}
          <div className="relative w-full md:max-w-xl mb-6">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[#666666]"
              size={20}
            />
            <input
              type="text"
              placeholder="Search news and events..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-12 py-3.5 border-2 border-[#c9a227]/30 focus:border-[#c9a227] outline-none text-[#3d3428] placeholder:text-[#666666]/60 font-[family-name:var(--font-montserrat)] transition-colors bg-white rounded-sm"
            />
            {searchQuery && (
              <button
                onClick={handleClearSearch}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-[#666666] hover:text-[#3d3428] transition-colors"
                aria-label="Clear search"
              >
                <X size={18} />
              </button>
            )}
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2 text-[#3d3428] font-[family-name:var(--font-montserrat)] font-semibold">
              <Filter size={18} />
              <span className="text-sm">Filter:</span>
            </div>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 text-sm font-semibold rounded-sm transition-all duration-300 font-[family-name:var(--font-montserrat)] ${
                  selectedCategory === category
                    ? "bg-[#c9a227] text-white shadow-md"
                    : "bg-white text-[#3d3428] border border-[#c9a227]/30 hover:border-[#c9a227] hover:bg-[#c9a227]/10"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Results count */}
        <div className="mb-6">
          <p className="text-xs uppercase tracking-[0.2em] text-[#c9a227] font-bold mb-1 font-[family-name:var(--font-montserrat)]">
            Latest Updates
          </p>
          <h2 className="text-2xl font-bold text-[#3d3428] font-[family-name:var(--font-cormorant)]">
            {filteredNews.length} {filteredNews.length === 1 ? "Item" : "Items"} Found
          </h2>
          <div className="w-12 h-[2px] bg-[#c9a227] mt-2"></div>
        </div>

        {/* News Grid */}
        <div className="pb-8">
          {filteredNews.length > 0 ? (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            >
              {filteredNews.map((item) => (
                <motion.div key={item.id} variants={itemVariants}>
                  <Link href={`/news-events/${item.id}`}>
                    <article
                      className={`group bg-white border-2 hover:border-[#c9a227] transition-all duration-300 hover:shadow-xl overflow-hidden h-full flex flex-col cursor-pointer ${
                        item.featured ? "border-[#c9a227]" : "border-[#c9a227]/30"
                      }`}
                    >
                      {/* Image */}
                      <div className="relative h-56 overflow-hidden bg-gradient-to-br from-[#f8f6f1] to-[#c9a227]/10">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        {/* Category Badge */}
                        <div className="absolute top-3 left-3">
                          <span className="px-3 py-1 text-[10px] font-bold bg-[#c9a227] text-white font-[family-name:var(--font-montserrat)] uppercase tracking-wider">
                            {item.category}
                          </span>
                        </div>
                        {/* Featured Badge */}
                        {item.featured && (
                          <div className="absolute top-3 right-3">
                            <span className="px-2 py-1 text-[10px] font-semibold bg-white text-[#3d3428] font-[family-name:var(--font-montserrat)]">
                              Featured
                            </span>
                          </div>
                        )}
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>

                      {/* Content */}
                      <div className="p-5 flex flex-col flex-1">
                        {/* Meta Information */}
                        <div className="flex items-center gap-4 mb-3 text-xs text-[#666666] font-[family-name:var(--font-montserrat)]">
                          <div className="flex items-center gap-1">
                            <Calendar size={12} className="text-[#c9a227]" />
                            <span>{new Date(item.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span>
                          </div>
                          {item.location && (
                            <div className="flex items-center gap-1">
                              <MapPin size={12} className="text-[#c9a227]" />
                              <span>{item.location}</span>
                            </div>
                          )}
                        </div>

                        {/* Title */}
                        <h3 className="text-lg font-bold text-[#3d3428] mb-3 group-hover:text-[#c9a227] transition-colors font-[family-name:var(--font-cormorant)] line-clamp-2">
                          {item.title}
                        </h3>

                        {/* Excerpt */}
                        <p className="text-sm text-[#666666] font-[family-name:var(--font-montserrat)] line-clamp-3 mb-4 leading-relaxed flex-1">
                          {item.excerpt}
                        </p>

                        {/* Divider and Read More */}
                        <div className="pt-3 border-t border-[#c9a227]/20 mt-auto">
                          <span className="inline-flex items-center gap-1 text-sm font-semibold text-[#3d3428] group-hover:text-[#c9a227] transition-colors font-[family-name:var(--font-montserrat)]">
                            Read More
                            <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                          </span>
                        </div>
                      </div>
                    </article>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <div className="text-center py-16 bg-white border-2 border-[#c9a227]/20">
              <Calendar size={48} className="mx-auto text-[#c9a227]/50 mb-4" />
              <h3 className="text-xl font-bold text-[#3d3428] mb-2 font-[family-name:var(--font-cormorant)]">
                No Items Found
              </h3>
              <p className="text-[#666666] font-[family-name:var(--font-montserrat)] mb-4">
                No news or events match your search criteria. Try adjusting your filters.
              </p>
              <button
                onClick={handleClearSearch}
                className="px-6 py-2.5 bg-[#3d3428] text-white font-semibold hover:bg-[#c9a227] transition-colors font-[family-name:var(--font-montserrat)]"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}