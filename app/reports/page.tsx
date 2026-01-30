"use client";

import { useState } from "react";
import { Download, FileText, Search, X, Filter, Calendar, File } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

// Sample downloads data
const downloadsData = [
  {
    id: 1,
    title: "Exhibition Stall Setup Tender Notice",
    category: "Tenders",
    date: "2025-01-15",
    fileSize: "2.4 MB",
    fileType: "PDF",
    description: "Tender notice for exhibition stall setup at Lepakshi Handicrafts Emporium, Gandhi Nagar, Vijayawada.",
    downloadUrl: "#",
    featured: true,
  },
  {
    id: 2,
    title: "GSB State Design Competition Awards Tender Document RFP",
    category: "Tenders",
    date: "2025-01-10",
    fileSize: "3.1 MB",
    fileType: "PDF",
    description: "Request for Proposal for GSB State Design Competition Awards at Amma Kalyana Mandapam.",
    downloadUrl: "#",
    featured: true,
  },
  {
    id: 3,
    title: "Annual Report 2024-2025",
    category: "Reports",
    date: "2024-12-20",
    fileSize: "8.5 MB",
    fileType: "PDF",
    description: "Comprehensive annual report covering achievements, financial statements, and future initiatives.",
    downloadUrl: "#",
  },
  {
    id: 4,
    title: "Artisan Registration Form",
    category: "Forms",
    date: "2024-11-15",
    fileSize: "450 KB",
    fileType: "PDF",
    description: "Application form for artisan registration with Lepakshi Handicrafts Development Corporation.",
    downloadUrl: "#",
  },
  {
    id: 5,
    title: "Product Catalog 2025",
    category: "Catalogs",
    date: "2025-01-05",
    fileSize: "12.3 MB",
    fileType: "PDF",
    description: "Complete product catalog featuring traditional handicrafts from across Andhra Pradesh.",
    downloadUrl: "#",
    featured: true,
  },
  {
    id: 6,
    title: "Handicrafts Price List",
    category: "Price Lists",
    date: "2024-12-01",
    fileSize: "1.8 MB",
    fileType: "PDF",
    description: "Updated price list for all handicraft products available at Lepakshi showrooms.",
    downloadUrl: "#",
  },
  {
    id: 7,
    title: "Store Locations Directory",
    category: "Guides",
    date: "2024-10-25",
    fileSize: "980 KB",
    fileType: "PDF",
    description: "Directory of all Lepakshi Handicrafts showrooms and outlets across India.",
    downloadUrl: "#",
  },
  {
    id: 8,
    title: "Craft Training Workshop Schedule",
    category: "Schedules",
    date: "2024-11-20",
    fileSize: "620 KB",
    fileType: "PDF",
    description: "Schedule of upcoming craft training workshops and skill development programs for artisans.",
    downloadUrl: "#",
  },
  {
    id: 9,
    title: "Financial Assistance Scheme Guidelines",
    category: "Guidelines",
    date: "2024-09-15",
    fileSize: "1.5 MB",
    fileType: "PDF",
    description: "Guidelines for financial assistance and support schemes available for registered artisans.",
    downloadUrl: "#",
  },
];

const categories = ["All", "Tenders", "Reports", "Forms", "Catalogs", "Price Lists", "Guides", "Schedules", "Guidelines"];

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

export default function DownloadsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredDownloads = downloadsData.filter((item) => {
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
    const matchesSearch =
      searchQuery === "" ||
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleClearSearch = () => {
    setSearchQuery("");
    setSelectedCategory("All");
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
                  Resources & Documents
                </span>
                <div className="w-12 h-[2px] bg-[#c9a227]" />
              </div>

              {/* Title */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white font-[family-name:var(--font-playfair)] mb-4">
                Downloads
              </h1>

              {/* Subtitle */}
              <p className="text-white/80 text-base sm:text-lg md:text-xl font-[family-name:var(--font-montserrat)] max-w-3xl mx-auto mb-6">
                Access important documents, forms, tenders, reports, and catalogs
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
                  Downloads
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
            Available Documents
          </p>
          <h2 className="text-2xl font-bold text-[#3d3428] font-[family-name:var(--font-cormorant)]">
            {filteredDownloads.length} {filteredDownloads.length === 1 ? "Document" : "Documents"} Found
          </h2>
          <div className="w-12 h-[2px] bg-[#c9a227] mt-2"></div>
        </div>

        {/* Downloads Grid */}
        <div className="pb-8">
          {filteredDownloads.length > 0 ? (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            >
              {filteredDownloads.map((item) => (
                <motion.div key={item.id} variants={itemVariants}>
                  <article
                    className={`group bg-white border-2 hover:border-[#c9a227] transition-all duration-300 hover:shadow-xl overflow-hidden h-full flex flex-col ${
                      item.featured ? "border-[#c9a227]" : "border-[#c9a227]/30"
                    }`}
                  >
                    {/* Icon Header */}
                    <div className="relative bg-gradient-to-br from-[#3d3428] to-[#5a4d3a] p-8 flex items-center justify-center">
                      <div className="relative">
                        <FileText size={64} className="text-[#c9a227]" strokeWidth={1.5} />
                        {/* File Type Badge */}
                        <div className="absolute -bottom-2 -right-2">
                          <span className="px-2 py-1 text-[10px] font-bold bg-[#c9a227] text-white font-[family-name:var(--font-montserrat)] uppercase">
                            {item.fileType}
                          </span>
                        </div>
                      </div>
                      {/* Category Badge */}
                      <div className="absolute top-3 left-3">
                        <span className="px-2 py-1 text-[10px] font-semibold bg-white/20 backdrop-blur-sm text-white font-[family-name:var(--font-montserrat)] uppercase tracking-wider border border-white/30">
                          {item.category}
                        </span>
                      </div>
                      {/* Featured Badge */}
                      {item.featured && (
                        <div className="absolute top-3 right-3">
                          <span className="px-2 py-1 text-[10px] font-semibold bg-[#c9a227] text-white font-[family-name:var(--font-montserrat)]">
                            Featured
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-5 flex flex-col flex-1">
                      {/* Title */}
                      <h3 className="text-lg font-bold text-[#3d3428] mb-3 group-hover:text-[#c9a227] transition-colors font-[family-name:var(--font-cormorant)] line-clamp-2">
                        {item.title}
                      </h3>

                      {/* Description */}
                      <p className="text-sm text-[#666666] font-[family-name:var(--font-montserrat)] line-clamp-3 mb-4 leading-relaxed flex-1">
                        {item.description}
                      </p>

                      {/* Meta Information */}
                      <div className="flex items-center gap-4 mb-4 text-xs text-[#666666] font-[family-name:var(--font-montserrat)]">
                        <div className="flex items-center gap-1">
                          <Calendar size={12} className="text-[#c9a227]" />
                          <span>{new Date(item.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <File size={12} className="text-[#c9a227]" />
                          <span>{item.fileSize}</span>
                        </div>
                      </div>

                      {/* Download Button */}
                      <a
                        href={item.downloadUrl}
                        download
                        className="w-full bg-[#3d3428] text-white py-3 px-4 font-semibold hover:bg-[#c9a227] transition-all duration-300 font-[family-name:var(--font-montserrat)] text-sm flex items-center justify-center gap-2 group/btn"
                      >
                        <Download size={16} className="group-hover/btn:animate-bounce" />
                        Download {item.fileType}
                      </a>
                    </div>
                  </article>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <div className="text-center py-16 bg-white border-2 border-[#c9a227]/20">
              <FileText size={48} className="mx-auto text-[#c9a227]/50 mb-4" />
              <h3 className="text-xl font-bold text-[#3d3428] mb-2 font-[family-name:var(--font-cormorant)]">
                No Documents Found
              </h3>
              <p className="text-[#666666] font-[family-name:var(--font-montserrat)] mb-4">
                No documents match your search criteria. Try adjusting your filters.
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

        {/* Help Section */}
        <div className="mt-12 bg-white border-2 border-[#c9a227]/20 p-6 md:p-8">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#c9a227]/10 flex items-center justify-center">
              <FileText size={24} className="text-[#c9a227]" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#3d3428] mb-2 font-[family-name:var(--font-cormorant)]">
                Need Help?
              </h3>
              <p className="text-[#666666] font-[family-name:var(--font-montserrat)] mb-4 leading-relaxed">
                If you're unable to find the document you're looking for or need assistance with downloads, please feel free to contact us.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#3d3428] text-white font-semibold hover:bg-[#c9a227] transition-colors font-[family-name:var(--font-montserrat)] text-sm"
              >
                Contact Support
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
