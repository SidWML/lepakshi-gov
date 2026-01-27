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
    <Link href={`/artisan-stories/${artisan.slug}`} passHref>
      <article className="group bg-white border-2 border-[#c9a227]/30 hover:border-[#c9a227] transition-all duration-300 hover:shadow-xl cursor-pointer overflow-hidden h-full flex flex-col">
        {/* Featured Image */}
        <div className="relative h-56 md:h-64 overflow-hidden bg-gradient-to-br from-[#f8f6f1] to-[#c9a227]/10">
          <img
            src={artisan.featured_image}
            alt={artisan.name}
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />

          {/* Featured Badge */}
          {artisan.is_featured && (
            <div className="absolute top-3 right-3">
              <span className="px-2 py-1 text-[10px] font-semibold bg-[#c9a227] text-white font-[family-name:var(--font-montserrat)] flex items-center gap-1">
                <Sparkles size={10} />
                Featured
              </span>
            </div>
          )}

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Content */}
        <div className="p-4 md:p-5 flex flex-col flex-1">
          {/* Name */}
          <h3 className="text-lg md:text-xl font-bold text-[#3d3428] mb-1.5 group-hover:text-[#c9a227] transition-colors font-[family-name:var(--font-cormorant)] line-clamp-1">
            {artisan.name}
          </h3>

          {/* Craft Type */}
          <p className="text-xs text-[#c9a227] font-semibold font-[family-name:var(--font-montserrat)] uppercase tracking-wider mb-2">
            {artisan.craft_type}
          </p>

          {/* Location */}
          {fullLocation && (
            <div className="flex items-start gap-1.5 mb-3">
              <MapPin size={14} className="text-[#c9a227] flex-shrink-0 mt-0.5" />
              <p className="text-xs text-[#666666] font-[family-name:var(--font-montserrat)] line-clamp-1">
                {fullLocation}
              </p>
            </div>
          )}

          {/* Content Section - Either Awards or Biography */}
          <div className="flex-1">
            {hasAwards ? (
              <div className="mb-3">
                <div className="flex items-center gap-1.5 mb-2">
                  <Award size={12} className="text-[#c9a227]" />
                  <p className="text-[10px] text-[#c9a227] font-semibold font-[family-name:var(--font-montserrat)] uppercase tracking-wider">
                    Recognized Artisan
                  </p>
                </div>
                <div className="flex flex-wrap gap-1">
                  {artisan.awards.slice(0, 2).map((award, index) => (
                    <span
                      key={award.id || index}
                      className="px-2 py-0.5 text-[10px] bg-[#f8f6f1] text-[#3d3428] font-[family-name:var(--font-montserrat)] border border-[#c9a227]/20 line-clamp-1"
                    >
                      {award.name.length > 20 ? `${award.name.substring(0, 20)}...` : award.name}
                    </span>
                  ))}
                  {artisan.awards.length > 2 && (
                    <span className="px-2 py-0.5 text-[10px] bg-[#c9a227]/10 text-[#c9a227] font-[family-name:var(--font-montserrat)]">
                      +{artisan.awards.length - 2}
                    </span>
                  )}
                </div>
              </div>
            ) : (
              <p className="text-xs text-[#666666] font-[family-name:var(--font-montserrat)] line-clamp-3 mb-3 leading-relaxed">
                {artisan.biography}
              </p>
            )}
          </div>

          {/* Divider and Read More */}
          <div className="pt-3 border-t border-[#c9a227]/20 mt-auto">
            <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#3d3428] group-hover:text-[#c9a227] transition-colors font-[family-name:var(--font-montserrat)]">
              Read Story
              <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </span>
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
    <div className="min-h-screen bg-[#f8f6f1]/30">
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
                  Heritage & Craft
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
      </div>

      {/* Main Content */}
      <div className="w-[90%] md:w-[85%] max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10">
        {/* Search Bar */}
        <div className="mb-6">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Bar */}
            <div className="relative w-full md:max-w-xl">
              <Search
                className="absolute left-4 top-1/2 -translate-y-1/2 text-[#666666]"
                size={20}
              />
              <input
                type="text"
                placeholder="Search by artisan name, craft, or location..."
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
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
          </div>
        </div>

        {/* Results count */}
        <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-[#c9a227] font-bold mb-1 font-[family-name:var(--font-montserrat)]">
              Master Artisans
            </p>
            <h2 className="text-2xl font-bold text-[#3d3428] font-[family-name:var(--font-cormorant)]">
              {filteredArtisans.length} {filteredArtisans.length === 1 ? "Story" : "Stories"} Found
            </h2>
            <div className="w-12 h-[2px] bg-[#c9a227] mt-2"></div>
          </div>
        </div>

        {/* Artisan Grid */}
        <div className="pb-8">
          {filteredArtisans.length > 0 ? (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8"
            >
              {filteredArtisans.map((artisan) => (
                <motion.div key={artisan.id} variants={itemVariants}>
                  <ArtisanCard artisan={artisan} />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <div className="text-center py-16 bg-white border-2 border-[#c9a227]/20">
              <Users size={48} className="mx-auto text-[#c9a227]/50 mb-4" />
              <h3 className="text-xl font-bold text-[#3d3428] mb-2 font-[family-name:var(--font-cormorant)]">
                No Stories Found
              </h3>
              <p className="text-[#666666] font-[family-name:var(--font-montserrat)] mb-4">
                No artisan stories match your search criteria. Try adjusting your search.
              </p>
              <button
                onClick={handleClearSearch}
                className="px-6 py-2.5 bg-[#3d3428] text-white font-semibold hover:bg-[#c9a227] transition-colors font-[family-name:var(--font-montserrat)]"
              >
                Clear Search
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
