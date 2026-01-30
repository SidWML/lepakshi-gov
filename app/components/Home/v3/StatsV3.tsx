// app/components/Home/v3/StatsV3.tsx
"use client";

import { motion } from "framer-motion";
import { Calendar, Users, Sparkles, MapPin, Award, CheckCircle, Leaf, Shield } from "lucide-react";

const values = [
  {
    icon: Award,
    title: "Authentic Heritage",
    description: "Centuries-old techniques",
  },
  {
    icon: Users,
    title: "Artisan First",
    description: "Fair trade partnerships",
  },
  {
    icon: CheckCircle,
    title: "GI Certified",
    description: "Protected authenticity",
  },
  {
    icon: Leaf,
    title: "Sustainable",
    description: "Eco-friendly practices",
  },
];

const stats = [
  {
    value: "45+",
    label: "YEARS OF LEGACY",
    description: "Since 1981",
    icon: Calendar,
    gradient: "from-[#E0AE31] to-[#d97706]",
  },
  {
    value: "5000+",
    label: "ARTISAN PARTNERS",
    description: "Across AP",
    icon: Users,
    gradient: "from-[#E0AE31] to-[#d97706]",
  },
  {
    value: "36+",
    secondValue: "100+",
    label: "CRAFT FORMS",
    description: "Across AP",
    secondDescription: "Across INDIA",
    hasTwoColumns: true,
    icon: Sparkles,
    gradient: "from-[#E0AE31] to-[#d97706]",
  },
  {
    value: "26",
    label: "DISTRICTS",
    description: "Statewide Reach",
    icon: MapPin,
    gradient: "from-[#E0AE31] to-[#d97706]",
  },
];

export default function StatsV3() {
  return (
    <section className="relative bg-white overflow-hidden">
      <div className="relative z-10 w-[98%] mx-auto px-6 lg:px-12 py-24">
        {/* Heritage & Promise Section */}
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
            OUR HERITAGE & PROMISE
          </span>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-[family-name:var(--font-playfair)] text-[#1f2937] mb-6">
            A Legacy of <span className="text-[#d97706]">Excellence</span>
          </h2>

          <p className="text-[#64748b] text-base md:text-lg max-w-3xl mx-auto leading-relaxed mb-16">
            For over four decades, Lepakshi has been the bridge between Andhra Pradesh's master artisans and the world.
          </p>

          {/* Values Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-[#1f2937] to-[#374151] p-8 border border-[#E0AE31]/20 hover:border-[#E0AE31] transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-[#E0AE31]/10 flex items-center justify-center mb-6 mx-auto group-hover:bg-[#E0AE31]/20 transition-colors">
                  <value.icon className="text-[#E0AE31]" size={24} />
                </div>
                <h3 className="text-white text-lg font-bold mb-2 font-[family-name:var(--font-playfair)]">
                  {value.title}
                </h3>
                <p className="text-gray-400 text-sm">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats Section with Light Background */}
        <div className="bg-gradient-to-br from-[#F5ECE3] to-[#FAF8F3] p-12 md:p-16 border border-[#E5DCC8]/50">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                {stat.hasTwoColumns ? (
                  <>
                    {/* Two columns for Craft Forms */}
                    <div className="flex items-center justify-center gap-6 mb-4">
                      <div className="flex-1 text-center">
                        <div className={`text-5xl md:text-6xl font-bold font-[family-name:var(--font-playfair)] bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2`}>
                          {stat.value}
                        </div>
                        <p className="text-[#64748b] text-xs uppercase tracking-wider">
                          {stat.description}
                        </p>
                      </div>

                      <div className="h-20 w-px bg-gradient-to-b from-transparent via-[#E0AE31]/30 to-transparent"></div>

                      <div className="flex-1 text-center">
                        <div className={`text-5xl md:text-6xl font-bold font-[family-name:var(--font-playfair)] bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2`}>
                          {stat.secondValue}
                        </div>
                        <p className="text-[#64748b] text-xs uppercase tracking-wider">
                          {stat.secondDescription}
                        </p>
                      </div>
                    </div>

                    <h3 className="text-sm font-bold text-[#E0AE31] uppercase tracking-[0.2em] mt-4">
                      {stat.label}
                    </h3>
                  </>
                ) : (
                  <>
                    <div className={`text-5xl md:text-6xl font-bold font-[family-name:var(--font-playfair)] bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-3`}>
                      {stat.value}
                    </div>

                    <h3 className="text-sm font-bold text-[#E0AE31] uppercase tracking-[0.2em] mb-2">
                      {stat.label}
                    </h3>

                    <p className="text-[#64748b] text-sm">
                      {stat.description}
                    </p>
                  </>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}