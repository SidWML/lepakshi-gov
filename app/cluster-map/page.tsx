"use client";
import { Metadata } from "next";
import { motion } from "framer-motion";
import { useState } from "react";
import { SparklesIcon } from "../components/icons/HeritageIcons";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const clusters = [
  {
    id: 1,
    district: "Guntur District",
    name: "Guntur District-I",
    crafts: [
      "Mangalagiri Textiles",
      "Cotton Fabrics",
      "Handloom Sarees",
      "Durries",
      "Bed Covers",
    ],
    color: "#c9a227",
  },
  {
    id: 2,
    district: "Kurnool",
    name: "Kurnool District-II",
    crafts: [
      "Leather Puppets",
      "Stone Carving & Fine Miniature Painting",
      "Baskets making",
      "Paintings",
      "Bidriware",
      "Wood Carving",
    ],
    color: "#e0ae31",
  },
  {
    id: 3,
    district: "Anantapur",
    name: "Anantapur District-III",
    crafts: [
      "Leather Puppets",
      "Baskets making",
    ],
    color: "#596c45",
  },
  {
    id: 4,
    district: "Chittoor",
    name: "Chittoor District-IV",
    crafts: [
      "Brass & Bronze Ware",
      "Wood Carvings",
      "Dolls",
      "Stone Sculptures",
      "Brassware",
      "Sri Kalahasti Kalamkari",
    ],
    color: "#a53430",
  },
  {
    id: 5,
    district: "Krishna",
    name: "Krishna District-V",
    crafts: [
      "Bobbili Veena making",
      "Kondapalli Bommallu (Toys)",
      "Durries & Carpets",
    ],
    color: "#103248",
  },
  {
    id: 6,
    district: "Prakasam",
    name: "Prakasam District-VI",
    crafts: [
      "Brass & Bronze Ware",
      "Wood Carvings",
      "Toys",
      "Brassware",
    ],
    color: "#6c0c2c",
  },
  {
    id: 7,
    district: "East Godavari",
    name: "East Godavari District-VII",
    crafts: [
      "Basket Making",
      "Mats & Mattings",
      "Durries & Carpets",
      "Toys",
      "Metalware",
      "Wood Carvings & Painted Articles",
    ],
    color: "#c9a227",
  },
  {
    id: 8,
    district: "West Godavari",
    name: "West Godavari District-VIII",
    crafts: [
      "Basket Making",
      "Mats & Mattings",
      "Durries & Carpets",
      "Toys",
      "Metalware",
      "Wood Carvings & Painted Articles",
      "Etikoppaka Toys",
      "Lacquer Work",
    ],
    color: "#e0ae31",
  },
  {
    id: 9,
    district: "Srikakulam",
    name: "Srikakulam District-IX",
    crafts: [
      "Basket Making",
      "Mats & Mattings",
      "Durries & Carpets",
      "Palm Leaf Products",
      "Bell Metal",
      "Brassware",
    ],
    color: "#596c45",
  },
  {
    id: 10,
    district: "Vizianagaram",
    name: "Vizianagaram District-X",
    crafts: [
      "Basket Making",
      "Mats & Mattings",
      "Durries & Carpets",
      "Palm Leaf Products",
      "Bell Metal",
      "Brassware",
    ],
    color: "#a53430",
  },
  {
    id: 11,
    district: "Visakhapatnam",
    name: "Visakhapatnam District-XI",
    crafts: [
      "Basket Making",
      "Mats & Mattings",
      "Durries & Carpets",
      "Palm Leaf Products",
      "Bell Metal",
      "Brassware",
      "Tribal Handicrafts",
      "Dokra Craft",
    ],
    color: "#103248",
  },
];

export default function ClusterMapPage() {
  const [selectedCluster, setSelectedCluster] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-[#f8f6f1]">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-br from-[#3d3428] via-[#2a2520] to-[#1a1610]">
        <div className="absolute inset-0 bg-[url('/patterns/pattern-dark.svg')] opacity-5"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#c9a227]/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#c9a227]/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

        <div className="w-[90%] md:w-[85%] max-w-[1400px] mx-auto relative">
          <motion.div
            className="text-center"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <motion.p
              variants={fadeInUp}
              className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-[#c9a227] font-semibold mb-4 font-[family-name:var(--font-montserrat)]"
            >
              Craft Heritage
            </motion.p>
            <motion.h1
              variants={fadeInUp}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white font-[family-name:var(--font-playfair)] mb-6 leading-tight"
            >
              Andhra Pradesh
              <br />
              Handicrafts Cluster Map
            </motion.h1>
            <motion.div variants={fadeInUp} className="flex items-center justify-center gap-3 mb-6">
              <span className="w-12 md:w-16 h-[1px] bg-gradient-to-r from-transparent to-[#c9a227]"></span>
              <SparklesIcon className="w-4 h-4 text-[#c9a227]" />
              <span className="w-12 md:w-16 h-[1px] bg-gradient-to-l from-transparent to-[#c9a227]"></span>
            </motion.div>
            <motion.p
              variants={fadeInUp}
              className="text-base sm:text-lg text-[#f8f6f1]/80 font-[family-name:var(--font-montserrat)] max-w-3xl mx-auto leading-relaxed"
            >
              Discover the rich diversity of traditional crafts across Andhra Pradesh&apos;s districts
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 md:py-24 bg-[#f5f2eb]">
        <div className="w-[90%] md:w-[85%] max-w-[1400px] mx-auto">
          <motion.div
            className="text-center max-w-4xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white p-8 sm:p-10 md:p-12 border border-[#c9a227]/20 shadow-lg">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#3d3428] font-[family-name:var(--font-playfair)] mb-6">
                Andhra Pradesh Handicrafts Development Corporation Ltd.
              </h2>
              <div className="flex items-center justify-center gap-3 mb-6">
                <span className="w-12 h-px bg-[#c9a227]"></span>
                <span className="w-2 h-2 bg-[#c9a227] rotate-45"></span>
                <span className="w-12 h-px bg-[#c9a227]"></span>
              </div>
              <p className="text-[#666666] font-[family-name:var(--font-montserrat)] leading-relaxed text-sm sm:text-base mb-4">
                (A State Government Undertaking)
              </p>
              <p className="text-[#666666] font-[family-name:var(--font-montserrat)] leading-relaxed text-sm sm:text-base">
                Andhra Pradesh is home to a vibrant tapestry of traditional handicrafts, each region
                specializing in unique art forms passed down through generations. Our cluster map
                highlights the geographical distribution of these exceptional crafts across the state.
              </p>
            </div>
          </motion.div>

          {/* Map Image */}
          <motion.div
            className="max-w-5xl mx-auto"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white p-4 sm:p-6 md:p-8 border-2 border-[#c9a227]/30 shadow-2xl relative group">
              <div className="absolute -top-1 -left-1 w-20 h-20 border-t-4 border-l-4 border-[#c9a227]"></div>
              <div className="absolute -bottom-1 -right-1 w-20 h-20 border-b-4 border-r-4 border-[#c9a227]"></div>

              <div className="relative overflow-hidden rounded-lg">
                <img
                  src="https://lepakshihandicrafts.gov.in/wp-content/uploads/2024/11/cluster-map.jpg"
                  alt="Andhra Pradesh Handicrafts Cluster Map"
                  className="w-full h-auto group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3d3428]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              <div className="mt-6 text-center">
                <p className="text-xs sm:text-sm text-[#666666] font-[family-name:var(--font-montserrat)] italic">
                  Interactive map showing craft clusters across all districts of Andhra Pradesh
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Cluster Districts Grid */}
      <section className="py-16 md:py-24 lg:py-32 bg-[#f8f6f1]">
        <div className="w-[90%] md:w-[85%] max-w-[1400px] mx-auto">
          <motion.div
            className="text-center mb-12 md:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-[#c9a227] font-semibold mb-4 font-[family-name:var(--font-montserrat)]">
              Craft Regions
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-[#3d3428] font-[family-name:var(--font-playfair)] mb-5">
              District-wise Craft Clusters
            </h2>
            <div className="flex items-center justify-center gap-3">
              <span className="w-12 md:w-16 h-px bg-gradient-to-r from-transparent to-[#c9a227]"></span>
              <span className="w-2 h-2 bg-[#c9a227] rotate-45"></span>
              <span className="w-12 md:w-16 h-px bg-gradient-to-l from-transparent to-[#c9a227]"></span>
            </div>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {clusters.map((cluster, index) => (
              <motion.div
                key={cluster.id}
                variants={fadeInUp}
                className={`bg-white border-2 transition-all duration-500 cursor-pointer group ${
                  selectedCluster === cluster.id
                    ? "border-[#c9a227] shadow-2xl scale-105"
                    : "border-[#c9a227]/20 hover:border-[#c9a227]/50 hover:shadow-xl"
                }`}
                onClick={() =>
                  setSelectedCluster(selectedCluster === cluster.id ? null : cluster.id)
                }
              >
                {/* Header */}
                <div
                  className="p-6 relative overflow-hidden"
                  style={{
                    background: `linear-gradient(135deg, ${cluster.color}15 0%, ${cluster.color}05 100%)`,
                  }}
                >
                  <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
                    <div
                      className="w-full h-full rounded-full"
                      style={{ backgroundColor: cluster.color }}
                    ></div>
                  </div>
                  <div className="relative">
                    <div
                      className="w-12 h-12 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                      style={{ backgroundColor: cluster.color }}
                    >
                      <span className="text-white font-bold text-xl font-[family-name:var(--font-playfair)]">
                        {cluster.id}
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-[#3d3428] font-[family-name:var(--font-playfair)] mb-2">
                      {cluster.name}
                    </h3>
                    <p
                      className="text-sm font-[family-name:var(--font-montserrat)] font-semibold uppercase tracking-wide"
                      style={{ color: cluster.color }}
                    >
                      {cluster.district}
                    </p>
                  </div>
                </div>

                {/* Crafts List */}
                <div className="p-6">
                  <h4 className="text-sm font-semibold text-[#3d3428] font-[family-name:var(--font-montserrat)] uppercase tracking-wide mb-4">
                    Traditional Crafts:
                  </h4>
                  <ul className="space-y-2">
                    {cluster.crafts.map((craft, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-sm text-[#666666] font-[family-name:var(--font-montserrat)]"
                      >
                        <span
                          className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
                          style={{ backgroundColor: cluster.color }}
                        ></span>
                        {craft}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer */}
                <div className="px-6 pb-6">
                  <div className="pt-4 border-t border-[#c9a227]/20">
                    <p className="text-xs text-[#666666] font-[family-name:var(--font-montserrat)] text-center">
                      Click to {selectedCluster === cluster.id ? "collapse" : "explore"} details
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#0f0f0f] via-[#1a1610] to-[#0f0f0f] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/patterns/pattern-dark.svg')] opacity-5"></div>
        <div className="w-[90%] md:w-[85%] max-w-[1400px] mx-auto relative">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {[
              { number: "11", label: "Districts", suffix: "" },
              { number: "50+", label: "Craft Forms", suffix: "" },
              { number: "5000+", label: "Artisans", suffix: "" },
              { number: "100+", label: "Years of Heritage", suffix: "" },
            ].map((stat, index) => (
              <motion.div key={index} variants={fadeInUp} className="text-center group">
                <div className="w-14 h-14 md:w-16 md:h-16 mx-auto mb-4 flex items-center justify-center border border-[#c9a227]/30 group-hover:border-[#c9a227]/60 transition-colors duration-300">
                  <span className="text-[#c9a227] text-2xl">
                    {index === 0 ? "🗺️" : index === 1 ? "🎨" : index === 2 ? "👥" : "⏳"}
                  </span>
                </div>
                <p className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white font-[family-name:var(--font-playfair)] mb-2">
                  {stat.number}
                </p>
                <p className="text-xs sm:text-sm text-[#f8f6f1]/70 font-[family-name:var(--font-montserrat)] tracking-wide">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Crafts Section */}
      <section className="py-16 md:py-24 lg:py-32 bg-[#f5f2eb]">
        <div className="w-[90%] md:w-[85%] max-w-[1400px] mx-auto">
          <motion.div
            className="text-center mb-12 md:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-[#c9a227] font-semibold mb-4 font-[family-name:var(--font-montserrat)]">
              Signature Crafts
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-[#3d3428] font-[family-name:var(--font-playfair)] mb-5">
              Iconic Andhra Pradesh Handicrafts
            </h2>
            <div className="flex items-center justify-center gap-3">
              <span className="w-12 md:w-16 h-px bg-gradient-to-r from-transparent to-[#c9a227]"></span>
              <span className="w-2 h-2 bg-[#c9a227] rotate-45"></span>
              <span className="w-12 md:w-16 h-px bg-gradient-to-l from-transparent to-[#c9a227]"></span>
            </div>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {[
              {
                name: "Kondapalli Toys",
                district: "Krishna",
                description: "Vibrant wooden toys with traditional designs",
              },
              {
                name: "Kalamkari",
                district: "Chittoor",
                description: "Hand-painted textile art with natural dyes",
              },
              {
                name: "Etikoppaka Lacquerware",
                district: "West Godavari",
                description: "Eco-friendly wooden toys with lacquer coating",
              },
              {
                name: "Budithi Brass",
                district: "Srikakulam",
                description: "Traditional bell metal craft",
              },
            ].map((craft, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white p-6 border border-[#c9a227]/20 hover:border-[#c9a227]/50 hover:shadow-xl transition-all duration-500 group"
              >
                <div className="w-12 h-12 bg-[#c9a227]/10 group-hover:bg-[#c9a227] flex items-center justify-center mb-4 transition-colors duration-300">
                  <SparklesIcon className="w-6 h-6 text-[#c9a227] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-[#3d3428] font-[family-name:var(--font-playfair)] mb-2">
                  {craft.name}
                </h3>
                <p className="text-xs text-[#c9a227] font-[family-name:var(--font-montserrat)] uppercase tracking-wide mb-3">
                  {craft.district} District
                </p>
                <p className="text-sm text-[#666666] font-[family-name:var(--font-montserrat)] leading-relaxed">
                  {craft.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-[#f8f6f1] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-[#c9a227]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#3d3428]/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

        <motion.div
          className="w-[90%] md:w-[85%] max-w-[900px] mx-auto text-center relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#3d3428] font-[family-name:var(--font-playfair)] mb-6 leading-tight">
            Explore Authentic Crafts from Every District
          </h2>
          <p className="text-sm sm:text-base text-[#666666] font-[family-name:var(--font-montserrat)] mb-10 leading-relaxed max-w-2xl mx-auto">
            Visit our showrooms across Andhra Pradesh or browse our online collection to discover
            handcrafted treasures from each district.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/store-locator"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#3d3428] text-white font-semibold font-[family-name:var(--font-montserrat)] text-sm hover:bg-[#c9a227] transition-all duration-300"
            >
              Find Nearest Store
            </a>
            <a
              href="/products"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-[#3d3428] text-[#3d3428] font-semibold font-[family-name:var(--font-montserrat)] text-sm hover:bg-[#3d3428] hover:text-white transition-all duration-300"
            >
              Browse Products
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
