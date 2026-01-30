"use client";

import { useState } from "react";
import { Search, X, MapPin, Award, ChevronRight, Users, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

// Sample artisan data - showcasing master craftspeople of Andhra Pradesh
const artisansData = [
  {
    id: 1,
    slug: "veeraprasad-tholu-bommalata",
    name: "Sri Y. Veerabhadra Prasad",
    craft_type: "Tholu Bommalata (Leather Puppetry)",
    location: "Nimmalakunta",
    district: "Palnadu",
    state: "Andhra Pradesh",
    featured_image: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=800&q=80",
    is_featured: true,
    biography: "A sixth-generation master of Tholu Bommalata, preserving the ancient art of shadow puppetry with intricate leather craftsmanship.",
    awards: [
      { id: 1, name: "Padma Shri", year: 2010 },
      { id: 2, name: "National Award", year: 2007 }
    ]
  },
  {
    id: 2,
    slug: "lakshmi-kalamkari",
    name: "Smt. Lakshmi Devi",
    craft_type: "Kalamkari",
    location: "Srikalahasti",
    district: "Tirupati",
    state: "Andhra Pradesh",
    featured_image: "https://images.unsplash.com/photo-1610563166150-b34df4f3bcd6?w=800&q=80",
    biography: "Master artisan specializing in Srikalahasti style Kalamkari, creating intricate hand-painted textiles using natural dyes.",
    awards: [
      { id: 3, name: "State Award", year: 2018 }
    ]
  },
  {
    id: 3,
    slug: "ramaiah-kondapalli-toys",
    name: "Sri K. Ramaiah",
    craft_type: "Kondapalli Toys",
    location: "Kondapalli",
    district: "Krishna",
    state: "Andhra Pradesh",
    featured_image: "https://images.unsplash.com/photo-1515488764276-beab7607c1e6?w=800&q=80",
    biography: "Fourth-generation craftsman creating vibrant wooden toys from lightweight Tella Poniki wood, continuing a 400-year tradition.",
    awards: []
  },
  {
    id: 4,
    slug: "venkata-budithi-brass",
    name: "Sri V. Venkata Rao",
    craft_type: "Budithi Brassware",
    location: "Budithi",
    district: "Srikakulam",
    state: "Andhra Pradesh",
    featured_image: "https://images.unsplash.com/photo-1592833159155-c62df1b65634?w=800&q=80",
    is_featured: true,
    biography: "Renowned for bell metal craft, creating exquisite brassware using ancient lost-wax casting techniques.",
    awards: [
      { id: 4, name: "National Award", year: 2015 },
      { id: 5, name: "UNESCO Recognition", year: 2019 }
    ]
  },
  {
    id: 5,
    slug: "prabhavathi-etikoppaka",
    name: "Smt. Prabhavathi",
    craft_type: "Etikoppaka Toys",
    location: "Etikoppaka",
    district: "Visakhapatnam",
    state: "Andhra Pradesh",
    featured_image: "https://images.unsplash.com/photo-1587731556938-38755b4803a6?w=800&q=80",
    biography: "One of few women master artisans in Etikoppaka lacquerware, creating eco-friendly toys using natural dyes.",
    awards: [
      { id: 6, name: "State Award", year: 2020 }
    ]
  },
  {
    id: 6,
    slug: "narayana-mangalagiri-sarees",
    name: "Sri N. Narayana Murthy",
    craft_type: "Mangalagiri Handloom",
    location: "Mangalagiri",
    district: "Guntur",
    state: "Andhra Pradesh",
    featured_image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800&q=80",
    biography: "Master weaver of Mangalagiri cotton sarees, known for their unique zari border and temple designs.",
    awards: []
  },
  {
    id: 7,
    slug: "rama-dhokra-art",
    name: "Sri Rama Krishna",
    craft_type: "Dhokra Metal Craft",
    location: "Nandavaram",
    district: "Vizianagaram",
    state: "Andhra Pradesh",
    featured_image: "https://images.unsplash.com/photo-1565688534245-05d6b5be184a?w=800&q=80",
    biography: "Expert in Dhokra art, creating tribal-style metal figurines using 4000-year-old lost-wax technique.",
    awards: [
      { id: 7, name: "National Handicraft Award", year: 2016 }
    ]
  },
  {
    id: 8,
    slug: "janaki-uppada-jamdani",
    name: "Smt. Janaki Devi",
    craft_type: "Uppada Jamdani",
    location: "Uppada",
    district: "Kakinada",
    state: "Andhra Pradesh",
    featured_image: "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?w=800&q=80",
    is_featured: true,
    biography: "Renowned weaver of Uppada Jamdani sarees with GI tag, famous for intricate gold thread work and lightweight silk.",
    awards: [
      { id: 8, name: "Padma Shri", year: 2021 },
      { id: 9, name: "President's Award", year: 2019 }
    ]
  },
];

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

// Artisan Card Component
function ArtisanCard({ artisan }: { artisan: typeof artisansData[0] }) {
  const fullLocation = [artisan.location, artisan.district, artisan.state]
    .filter(Boolean)
    .join(", ");

  const hasAwards = artisan.awards && artisan.awards.length > 0;

  return (
    <Link href={`/artisan-stories/${artisan.slug}`}>
      <article className="group relative bg-white transition-all duration-500 hover:shadow-2xl hover:shadow-gray-400/30 cursor-pointer overflow-hidden h-full flex flex-col">
        {/* Decorative top border */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#c9a962] via-[#e0ae31] to-[#c9a962] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

        {/* Featured Image */}
        <div className="relative h-72 md:h-80 overflow-hidden bg-gradient-to-br from-[#faf8f5] to-[#f8f5ef]">
          <img
            src={artisan.featured_image}
            alt={artisan.name}
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#2c2c2c]/90 via-[#2c2c2c]/30 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

          {/* Featured Badge */}
          {artisan.is_featured && (
            <div className="absolute top-4 right-4">
              <div className="px-3 py-1.5 bg-gradient-to-r from-[#c9a962] to-[#e0ae31] text-white font-semibold font-[family-name:var(--font-montserrat)] flex items-center gap-1.5 shadow-lg text-xs tracking-wider">
                <Sparkles size={12} />
                FEATURED
              </div>
            </div>
          )}

          {/* Content Overlay on Image */}
          <div className="absolute bottom-0 left-0 right-0 p-5">
            <p className="text-[#c9a962] text-xs tracking-[0.2em] uppercase mb-2 font-[family-name:var(--font-montserrat)] font-semibold">
              {artisan.craft_type}
            </p>
            <h3 className="text-white text-xl md:text-2xl font-bold font-[family-name:var(--font-playfair)] mb-2 line-clamp-2">
              {artisan.name}
            </h3>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 flex flex-col flex-1 border-l-2 border-r-2 border-b-2 border-[#c9a962]/10 group-hover:border-[#c9a962]/30 transition-colors">
          {/* Location */}
          {fullLocation && (
            <div className="flex items-start gap-2 mb-4">
              <MapPin size={16} className="text-[#c9a962] flex-shrink-0 mt-0.5" />
              <p className="text-sm text-gray-600 font-[family-name:var(--font-montserrat)] line-clamp-2 leading-relaxed">
                {fullLocation}
              </p>
            </div>
          )}

          {/* Biography or Awards */}
          <div className="flex-1 mb-4">
            {hasAwards ? (
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Award size={14} className="text-[#c9a962]" />
                  <p className="text-xs text-[#c9a962] font-semibold font-[family-name:var(--font-montserrat)] uppercase tracking-wider">
                    Recognized Artisan
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {artisan.awards.slice(0, 2).map((award, index) => (
                    <span
                      key={award.id || index}
                      className="px-3 py-1 text-xs bg-gradient-to-br from-[#faf8f5] to-[#f8f5ef] text-[#2c2c2c] font-[family-name:var(--font-montserrat)] border border-[#c9a962]/20 font-medium"
                    >
                      {award.name}
                    </span>
                  ))}
                  {artisan.awards.length > 2 && (
                    <span className="px-3 py-1 text-xs bg-[#c9a962]/10 text-[#c9a962] font-[family-name:var(--font-montserrat)] font-semibold">
                      +{artisan.awards.length - 2} more
                    </span>
                  )}
                </div>
              </div>
            ) : (
              <p className="text-sm text-gray-700 font-[family-name:var(--font-montserrat)] line-clamp-4 leading-relaxed">
                {artisan.biography}
              </p>
            )}
          </div>

          {/* Divider and Read More */}
          <div className="pt-4 border-t border-[#c9a962]/20">
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#2c2c2c] group-hover:text-[#c9a962] transition-colors font-[family-name:var(--font-montserrat)]">
                Read Full Story
                <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="w-8 h-[2px] bg-[#c9a962] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}

export default function ArtisanStoriesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredArtisans, setFilteredArtisans] = useState(artisansData);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (!query.trim()) {
      setFilteredArtisans(artisansData);
      return;
    }

    const filtered = artisansData.filter(
      (artisan) =>
        artisan.name.toLowerCase().includes(query.toLowerCase()) ||
        artisan.craft_type.toLowerCase().includes(query.toLowerCase()) ||
        artisan.location.toLowerCase().includes(query.toLowerCase()) ||
        artisan.district.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredArtisans(filtered);
  };

  const handleClearSearch = () => {
    setSearchQuery("");
    setFilteredArtisans(artisansData);
  };

  return (
    <div className="min-h-screen bg-[#faf8f5]">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#3d3428] via-[#4a3f2f] to-[#5a4d3a]">
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
                  Master Craftsmen
                </span>
                <div className="w-12 h-[2px] bg-[#c9a227]" />
              </div>

              {/* Title */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white font-[family-name:var(--font-playfair)] mb-4">
                Artisan Stories
              </h1>

              {/* Subtitle */}
              <p className="text-white/80 text-base sm:text-lg md:text-xl font-[family-name:var(--font-montserrat)] max-w-3xl mx-auto mb-6">
                Discover the remarkable journeys of master craftsmen preserving traditional handicrafts of Andhra Pradesh
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
                  Artisan Stories
                </span>
              </nav>
            </motion.div>
          </div>
        </div>

        {/* Bottom decorative border */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#c9a227] via-[#f7d794] to-[#c9a227]" />
      </section>

      {/* Main Content */}
      <section className="relative py-16 md:py-24">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 overflow-hidden opacity-[0.03]">
          <div className="absolute top-40 right-40 w-64 h-64">
            <svg viewBox="0 0 200 200" className="w-full h-full">
              <circle cx="100" cy="100" r="80" fill="none" stroke="#c9a962" strokeWidth="1" />
              <circle cx="100" cy="100" r="60" fill="none" stroke="#c9a962" strokeWidth="0.5" />
            </svg>
          </div>
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
          {/* Search Bar */}
          <div className="mb-12">
            <div className="relative max-w-2xl mx-auto">
              <Search
                className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500"
                size={20}
              />
              <input
                type="text"
                placeholder="Search by artisan name, craft, or location..."
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                className="w-full pl-14 pr-14 py-4 border-2 border-[#c9a962]/30 focus:border-[#c9a962] outline-none text-[#2c2c2c] placeholder:text-gray-500 font-[family-name:var(--font-montserrat)] transition-all bg-white shadow-sm focus:shadow-lg"
              />
              {searchQuery && (
                <button
                  onClick={handleClearSearch}
                  className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-500 hover:text-[#2c2c2c] transition-colors"
                  aria-label="Clear search"
                >
                  <X size={20} />
                </button>
              )}
            </div>
          </div>

          {/* Results Header */}
          <div className="mb-10">
            <div className="text-center">
              <p className="text-[#c9a962] text-sm tracking-[0.2em] uppercase mb-2 font-[family-name:var(--font-montserrat)] font-semibold">
                Master Artisans
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#2c2c2c] font-[family-name:var(--font-playfair)] mb-3">
                {filteredArtisans.length} {filteredArtisans.length === 1 ? "Story" : "Stories"} Found
              </h2>
              <div className="flex items-center justify-center gap-2">
                <div className="w-12 h-[2px] bg-gradient-to-r from-transparent to-[#c9a962]" />
                <div className="w-2 h-2 rotate-45 border border-[#c9a962]" />
                <div className="w-12 h-[2px] bg-gradient-to-l from-transparent to-[#c9a962]" />
              </div>
            </div>
          </div>

          {/* Artisan Grid */}
          {filteredArtisans.length > 0 ? (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
            >
              {filteredArtisans.map((artisan) => (
                <motion.div key={artisan.id} variants={itemVariants}>
                  <ArtisanCard artisan={artisan} />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <div className="text-center py-20 bg-gradient-to-br from-white via-[#faf8f5] to-white border-2 border-[#c9a962]/20 shadow-lg">
              <Users size={56} className="mx-auto text-[#c9a962]/40 mb-6" />
              <h3 className="text-2xl font-bold text-[#2c2c2c] mb-3 font-[family-name:var(--font-playfair)]">
                No Stories Found
              </h3>
              <p className="text-gray-600 font-[family-name:var(--font-montserrat)] mb-6 max-w-md mx-auto">
                No artisan stories match your search criteria. Try adjusting your search.
              </p>
              <button
                onClick={handleClearSearch}
                className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-semibold overflow-hidden font-[family-name:var(--font-montserrat)] transition-all duration-500"
              >
                <span className="absolute inset-0 bg-[#c9a962]" />
                <span className="absolute inset-0 bg-[#2c2c2c] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                <span className="relative z-10 text-white">
                  Clear Search
                </span>
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
