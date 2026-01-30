"use client";

import { useState } from "react";
import { Download, FileText, Search, X, Filter, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

// Sample tenders data
const tendersData = [
  {
    id: 1,
    name: "Request for proposal for Improvements, Renovation and Modernization of Lepakshi Handicrafts Showroom at Visakhapatnam, Andhra Pradesh",
    date: "2025-01-20",
    deadline: "2025-02-15",
    status: "Active",
    downloadUrl: "#",
    featured: true,
  },
  {
    id: 2,
    name: "Request for proposal for Improvements, Renovation and Modernization of Lepakshi Handicrafts Showroom at Guntur, Andhra Pradesh",
    date: "2025-01-18",
    deadline: "2025-02-12",
    status: "Active",
    downloadUrl: "#",
    featured: true,
  },
  {
    id: 3,
    name: "Request for proposal for Improvements, Renovation and Modernization of Lepakshi Handicrafts Showroom at Kadapa, Andhra Pradesh",
    date: "2025-01-15",
    deadline: "2025-02-10",
    status: "Active",
    downloadUrl: "#",
  },
  {
    id: 4,
    name: "EOI for Hiring of Plug and Play office space for Head office",
    date: "2025-01-12",
    deadline: "2025-02-05",
    status: "Active",
    downloadUrl: "#",
  },
  {
    id: 5,
    name: "Request for proposal for Improvements, Renovation and Modernization of Lepakshi Handicrafts Showroom at Kakinada, Andhra Pradesh",
    date: "2025-01-10",
    deadline: "2025-02-01",
    status: "Active",
    downloadUrl: "#",
  },
  {
    id: 6,
    name: "Request for proposal for Designing and Setting up of Octornum Stalls for Gandhi Shilp Bazaar Exhibition (15th – 21st Dec 2025)",
    date: "2024-12-01",
    deadline: "2024-12-10",
    status: "Closed",
    downloadUrl: "#",
  },
  {
    id: 7,
    name: "Request for Proposal for Improved Toolkits (ITP) to Handicrafts Artisans",
    date: "2024-11-20",
    deadline: "2024-12-15",
    status: "Closed",
    downloadUrl: "#",
  },
  {
    id: 8,
    name: "Designing and Setting up of Octornum Stalls for Gandhi Shilp Bazaar Exhibition",
    date: "2024-11-10",
    deadline: "2024-11-25",
    status: "Closed",
    downloadUrl: "#",
  },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
    },
  },
};

export default function TendersPage() {
  const [selectedStatus, setSelectedStatus] = useState("Active");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredTenders = tendersData.filter((item) => {
    const matchesStatus = selectedStatus === "All" || item.status === selectedStatus;
    const matchesSearch =
      searchQuery === "" ||
      item.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  const handleClearSearch = () => {
    setSearchQuery("");
    setSelectedStatus("Active");
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
                  Business Opportunities
                </span>
                <div className="w-12 h-[2px] bg-[#c9a227]" />
              </div>

              {/* Title */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white font-[family-name:var(--font-playfair)] mb-4">
                Active Tenders
              </h1>

              {/* Subtitle */}
              <p className="text-white/80 text-base sm:text-lg md:text-xl font-[family-name:var(--font-montserrat)] max-w-3xl mx-auto mb-6">
                Current tender notifications and proposals from Lepakshi Handicrafts
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
                  Tenders
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

        {/* Results count */}
        <div className="mb-6">
          <p className="text-xs uppercase tracking-[0.2em] text-[#c9a227] font-bold mb-1 font-[family-name:var(--font-montserrat)]">
            {selectedStatus} Tenders
          </p>
          <h2 className="text-2xl font-bold text-[#3d3428] font-[family-name:var(--font-cormorant)]">
            {filteredTenders.length} {filteredTenders.length === 1 ? "Tender" : "Tenders"} Found
          </h2>
          <div className="w-12 h-[2px] bg-[#c9a227] mt-2"></div>
        </div>

        {/* Tenders List */}
        <div className="pb-8">
          {filteredTenders.length > 0 ? (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-4"
            >
              {filteredTenders.map((tender) => (
                <motion.div key={tender.id} variants={itemVariants}>
                  <article
                    className={`group bg-white border-2 hover:border-[#c9a227] transition-all duration-300 hover:shadow-xl overflow-hidden ${
                      tender.featured ? "border-[#c9a227]" : "border-[#c9a227]/30"
                    }`}
                  >
                    <div className="p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-6">
                      {/* Icon */}
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#3d3428] to-[#5a4d3a] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <FileText size={32} className="text-[#c9a227]" strokeWidth={1.5} />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        {/* Status and Featured Badge */}
                        <div className="flex items-center gap-3 mb-3">
                          <span
                            className={`px-3 py-1 text-[10px] font-bold uppercase tracking-wider font-[family-name:var(--font-montserrat)] ${
                              tender.status === "Active"
                                ? "bg-green-500/10 text-green-700 border border-green-500/30"
                                : "bg-gray-500/10 text-gray-600 border border-gray-500/30"
                            }`}
                          >
                            {tender.status}
                          </span>
                          {tender.featured && (
                            <span className="px-2 py-1 text-[10px] font-bold bg-[#c9a227] text-white font-[family-name:var(--font-montserrat)] uppercase tracking-wider">
                              Featured
                            </span>
                          )}
                        </div>

                        {/* Title */}
                        <h3 className="text-lg md:text-xl font-bold text-[#3d3428] mb-3 group-hover:text-[#c9a227] transition-colors font-[family-name:var(--font-cormorant)] leading-tight">
                          {tender.name}
                        </h3>

                        {/* Meta Information */}
                        <div className="flex flex-wrap items-center gap-4 text-xs text-[#666666] font-[family-name:var(--font-montserrat)]">
                          <div className="flex items-center gap-1.5">
                            <Calendar size={14} className="text-[#c9a227]" />
                            <span>
                              <span className="font-semibold">Published:</span>{" "}
                              {new Date(tender.date).toLocaleDateString("en-US", {
                                month: "short",
                                day: "numeric",
                                year: "numeric",
                              })}
                            </span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <Calendar size={14} className="text-red-500" />
                            <span>
                              <span className="font-semibold">Deadline:</span>{" "}
                              {new Date(tender.deadline).toLocaleDateString("en-US", {
                                month: "short",
                                day: "numeric",
                                year: "numeric",
                              })}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Download Button */}
                      <div className="flex-shrink-0">
                        <a
                          href={tender.downloadUrl}
                          download
                          className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#3d3428] text-white font-semibold hover:bg-[#c9a227] transition-all duration-300 font-[family-name:var(--font-montserrat)] text-sm group/btn min-w-[140px]"
                        >
                          <Download size={18} className="group-hover/btn:animate-bounce" />
                          <span>Download</span>
                        </a>
                      </div>
                    </div>
                  </article>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <div className="text-center py-16 bg-white border-2 border-[#c9a227]/20">
              <FileText size={48} className="mx-auto text-[#c9a227]/50 mb-4" />
              <h3 className="text-xl font-bold text-[#3d3428] mb-2 font-[family-name:var(--font-cormorant)]">
                No Tenders Found
              </h3>
              <p className="text-[#666666] font-[family-name:var(--font-montserrat)] mb-4">
                No tenders match your search criteria. Try adjusting your filters.
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

        {/* Information Section */}
        <div className="mt-12 bg-gradient-to-br from-[#3d3428] to-[#5a4d3a] text-white p-6 md:p-8 border-2 border-[#c9a227]">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#c9a227]/20 flex items-center justify-center">
              <FileText size={24} className="text-[#c9a227]" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3 font-[family-name:var(--font-cormorant)]">
                Tender Submission Guidelines
              </h3>
              <ul className="space-y-2 text-sm font-[family-name:var(--font-montserrat)] text-white/90 leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a227] mt-1">•</span>
                  <span>Download the tender document carefully and read all terms and conditions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a227] mt-1">•</span>
                  <span>Submit your proposal before the deadline mentioned in the tender</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a227] mt-1">•</span>
                  <span>All submissions must be in the format specified in the tender document</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a227] mt-1">•</span>
                  <span>For queries, contact the office during working hours: 10:00 AM - 5:00 PM</span>
                </li>
              </ul>
              <div className="mt-6">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#c9a227] text-white font-semibold hover:bg-white hover:text-[#3d3428] transition-colors font-[family-name:var(--font-montserrat)] text-sm"
                >
                  Contact for Queries
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
