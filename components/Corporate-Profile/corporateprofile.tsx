"use client";
import { Metadata } from "next";
import { motion } from "framer-motion";
import {
  TargetIcon,
  PenIcon,
  HandshakeIcon,
  PaletteIcon,
  DiamondIcon,
  TempleIcon,
  SparklesIcon,
} from "../../app/components/icons/HeritageIcons";
import Link from "next/link";

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

const objectives = [
  "Develop and promote handicrafts",
  "Undertake marketing of handicrafts",
  "Promote and establish showrooms, organize exhibitions, cause wide publicity of Handicrafts",
  "Undertake welfare activities for the benefit of the artisans",
];

const marketingActivities = [
  "Lepakshi Retail Showrooms",
  "Craft Bazaars, Exhibitions, Craft Melas and EXPOs",
  "Participation in Domestic & International Trade Fairs",
  "Opening of new sales outlets etc.",
  "Reciprocal arrangements with other State Handicrafts Development Corporations",
];

const promotionActivities = [
  {
    title: "Artisan Training",
    description:
      "Training of artisans for upgrading their skills, increasing production base and revival of languishing crafts.",
  },
  {
    title: "Common Facility Service Centers",
    description:
      "CFSCs at Cheparta, Kadapa District & Bobbili, Vizianagaram District. To Provide infrastructural facilities, Tools, Machinery & Design inputs to the artisans.",
  },
  {
    title: "Design & Technical Workshops",
    description:
      "Design and Technical Workshops to Provide design and technological inputs to the artisans.",
  },
  {
    title: "Publicity & Marketing",
    description:
      "Publicity through Electronic and Print Media, Brochures, Hoardings, Ad Films, Website, etc.",
  },
];

const welfareActivities = [
  "Pensions are sanctioned to the old & economically poor artisans above 60 years, from out of internal resources.",
  "State Level Excellence Awards to the outstanding artisans.",
];

const leadership = [
  {
    designation: "VC & Managing Director",
    name: "Sri. Vishwa M",
    number: "08662578099",
    email: "md.aphdcl@gmail.com",
  },
  {
    designation: "Jt. Manager (Administration & Technical)",
    name: "Sri M Dileswara Rao",
    number: "9010182307",
    email: "apadin.lepakshi@gmail.com",
  },
  {
    designation: "Jt. Manager (Marketing & Accounts)",
    name: "Sri SVNJ Sridharanaryulu",
    number: "9848096021",
    email: "accounts.aphdcl@yahoo.com",
  },
  {
    designation: "Jt. Manager (Finance & development)",
    name: "Sri B P Venkatesam",
    number: "9059981048",
    email: "finance.ger2024@yahoo.com",
  },
  {
    designation: "Jt. Manager (Training & Exhibitions)",
    name: "Sri Ch. Veera Babu",
    number: "9849034970",
    email: "secl.aphdcl@yahoo.com",
  },
];

export default function CorporateProfilePage() {
  return (
    <div className="min-h-screen bg-[#f8f6f1]">
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
              className="text-center"
              initial="initial"
              animate="animate"
              variants={staggerContainer}
            >
              {/* Decorative Element */}
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-12 h-[2px] bg-[#c9a227]" />
                <span className="text-[#c9a227] text-xs tracking-[0.3em] uppercase font-[family-name:var(--font-montserrat)]">
                  About Us
                </span>
                <div className="w-12 h-[2px] bg-[#c9a227]" />
              </div>

              {/* Title */}
              <motion.h1
                variants={fadeInUp}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white font-[family-name:var(--font-playfair)] mb-4"
              >
                Corporate Profile
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                variants={fadeInUp}
                className="text-white/80 text-base sm:text-lg md:text-xl font-[family-name:var(--font-montserrat)] max-w-3xl mx-auto mb-6"
              >
                A.P. Handicrafts Development Corporation Limited
              </motion.p>

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
                  Corporate Profile
                </span>
              </nav>
            </motion.div>
          </div>
        </div>

        {/* Bottom decorative border */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#c9a227] via-[#f7d794] to-[#c9a227]" />
      </section>

      {/* Vision & Mission Section */}
      <section className="py-16 md:py-24 lg:py-32 bg-[#f5f2eb]">
        <div className="w-[90%] md:w-[85%] max-w-[1400px] mx-auto">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {/* Vision */}
            <motion.div
              variants={fadeInUp}
              className="bg-white p-6 sm:p-8 md:p-10 border border-[#c9a227]/20 relative group hover:shadow-xl transition-shadow duration-500"
            >
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#3d3428] via-[#c9a227] to-[#3d3428]"></div>
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#3d3428]/10 flex items-center justify-center mb-5 group-hover:bg-[#3d3428] transition-colors duration-300">
                <PenIcon className="w-6 h-6 sm:w-7 sm:h-7 text-[#3d3428] group-hover:text-white transition-colors duration-300" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-semibold text-[#3d3428] font-[family-name:var(--font-playfair)] mb-4">
                Our Vision
              </h2>
              <p className="text-[#666666] font-[family-name:var(--font-montserrat)] leading-relaxed text-sm sm:text-base">
                An Empowered Artisan Community Thriving in an Enabling Environment
              </p>
            </motion.div>

            {/* Mission Placeholder - Can be added if needed */}
            <motion.div
              variants={fadeInUp}
              className="bg-gradient-to-br from-[#3d3428] via-[#2a2520] to-[#1a1610] p-6 sm:p-8 md:p-10 border border-[#c9a227]/20 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-[url('/patterns/pattern-dark.svg')] opacity-5"></div>
              <div className="relative">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#c9a227]/20 flex items-center justify-center mb-5 group-hover:bg-[#c9a227] transition-colors duration-300">
                  <TargetIcon className="w-6 h-6 sm:w-7 sm:h-7 text-[#c9a227] group-hover:text-white transition-colors duration-300" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-semibold text-white font-[family-name:var(--font-playfair)] mb-4">
                  Our Commitment
                </h2>
                <p className="text-[#f8f6f1]/80 font-[family-name:var(--font-montserrat)] leading-relaxed text-sm sm:text-base">
                  Dedicated to preserving traditional crafts while creating sustainable livelihoods
                  for artisans across Andhra Pradesh.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Objectives Section */}
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
              What We Do
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-[#3d3428] font-[family-name:var(--font-playfair)] mb-5">
              Our Objectives
            </h2>
            <div className="flex items-center justify-center gap-3">
              <span className="w-12 md:w-16 h-px bg-gradient-to-r from-transparent to-[#c9a227]"></span>
              <span className="w-2 h-2 bg-[#c9a227] rotate-45"></span>
              <span className="w-12 md:w-16 h-px bg-gradient-to-l from-transparent to-[#c9a227]"></span>
            </div>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {objectives.map((objective, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white p-6 sm:p-8 border-l-4 border-[#c9a227] shadow-sm hover:shadow-md transition-shadow duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#c9a227]/10 group-hover:bg-[#c9a227] flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                    <span className="text-[#c9a227] group-hover:text-white font-bold font-[family-name:var(--font-playfair)] text-lg transition-colors duration-300">
                      {index + 1}
                    </span>
                  </div>
                  <p className="text-[#666666] font-[family-name:var(--font-montserrat)] leading-relaxed text-sm sm:text-base">
                    {objective}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Marketing Section */}
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
              Our Reach
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-[#3d3428] font-[family-name:var(--font-playfair)] mb-5">
              Marketing Activities
            </h2>
            <div className="flex items-center justify-center gap-3">
              <span className="w-12 md:w-16 h-px bg-gradient-to-r from-transparent to-[#c9a227]"></span>
              <span className="w-2 h-2 bg-[#c9a227] rotate-45"></span>
              <span className="w-12 md:w-16 h-px bg-gradient-to-l from-transparent to-[#c9a227]"></span>
            </div>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {marketingActivities.map((activity, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white p-6 border border-[#c9a227]/20 hover:border-[#c9a227]/50 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 bg-[#c9a227] group-hover:bg-[#3d3428] flex items-center justify-center transition-colors duration-300">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-[#3d3428] font-[family-name:var(--font-playfair)]">
                    {activity.split(",")[0]}
                  </h3>
                </div>
                <p className="text-[#666666] font-[family-name:var(--font-montserrat)] text-sm leading-relaxed">
                  {activity}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Promotion & Development Section */}
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
              Growth & Innovation
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-[#3d3428] font-[family-name:var(--font-playfair)] mb-5">
              Promotion & Development
            </h2>
            <div className="flex items-center justify-center gap-3">
              <span className="w-12 md:w-16 h-px bg-gradient-to-r from-transparent to-[#c9a227]"></span>
              <span className="w-2 h-2 bg-[#c9a227] rotate-45"></span>
              <span className="w-12 md:w-16 h-px bg-gradient-to-l from-transparent to-[#c9a227]"></span>
            </div>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {promotionActivities.map((activity, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white p-6 sm:p-8 border border-[#c9a227]/20 relative group hover:shadow-xl transition-all duration-500"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#c9a227] to-[#3d3428]"></div>
                <h3 className="text-xl sm:text-2xl font-semibold text-[#3d3428] font-[family-name:var(--font-playfair)] mb-4">
                  {activity.title}
                </h3>
                <p className="text-[#666666] font-[family-name:var(--font-montserrat)] leading-relaxed text-sm sm:text-base">
                  {activity.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Welfare Section */}
      <section className="py-16 md:py-24 lg:py-32 bg-gradient-to-br from-[#0f0f0f] via-[#1a1610] to-[#0f0f0f] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/patterns/pattern-dark.svg')] opacity-5"></div>
        <div className="w-[90%] md:w-[85%] max-w-[1400px] mx-auto relative">
          <motion.div
            className="text-center mb-12 md:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-[#c9a227] font-semibold mb-4 font-[family-name:var(--font-montserrat)]">
              Social Responsibility
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white font-[family-name:var(--font-playfair)] mb-5">
              Welfare Activities
            </h2>
            <div className="flex items-center justify-center gap-3">
              <span className="w-12 md:w-16 h-px bg-gradient-to-r from-transparent to-[#c9a227]"></span>
              <SparklesIcon className="w-4 h-4 text-[#c9a227]" />
              <span className="w-12 md:w-16 h-px bg-gradient-to-l from-transparent to-[#c9a227]"></span>
            </div>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {welfareActivities.map((activity, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white/5 backdrop-blur-sm p-6 sm:p-8 border border-[#c9a227]/20 hover:border-[#c9a227]/50 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#c9a227] flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  </div>
                  <p className="text-[#f8f6f1]/90 font-[family-name:var(--font-montserrat)] leading-relaxed text-sm sm:text-base">
                    {activity}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Leadership Team Section */}
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
              Our Team
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-[#3d3428] font-[family-name:var(--font-playfair)] mb-5">
              Leadership
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
            {leadership.map((member, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white p-6 sm:p-8 border border-[#c9a227]/20 hover:border-[#c9a227]/50 hover:shadow-xl transition-all duration-500 group"
              >
                <div className="mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#c9a227] to-[#3d3428] mx-auto mb-4 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    <span className="text-white font-bold text-2xl font-[family-name:var(--font-playfair)]">
                      {member.name.split(" ")[1]?.charAt(0) || member.name.charAt(0)}
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-[#3d3428] font-[family-name:var(--font-playfair)] mb-2 text-center">
                    {member.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#c9a227] font-[family-name:var(--font-montserrat)] text-center mb-4">
                    {member.designation}
                  </p>
                </div>
                <div className="space-y-3 pt-4 border-t border-[#c9a227]/20">
                  <div className="flex items-center gap-3 text-sm">
                    <svg
                      className="w-4 h-4 text-[#c9a227] flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    <span className="text-[#666666] font-[family-name:var(--font-montserrat)]">
                      {member.number}
                    </span>
                  </div>
                  <div className="flex items-start gap-3 text-sm">
                    <svg
                      className="w-4 h-4 text-[#c9a227] flex-shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <span className="text-[#666666] font-[family-name:var(--font-montserrat)] break-all">
                      {member.email}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Organization Chart Section */}
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
              Structure
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-[#3d3428] font-[family-name:var(--font-playfair)] mb-5">
              Organization Chart
            </h2>
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="w-12 md:w-16 h-px bg-gradient-to-r from-transparent to-[#c9a227]"></span>
              <span className="w-2 h-2 bg-[#c9a227] rotate-45"></span>
              <span className="w-12 md:w-16 h-px bg-gradient-to-l from-transparent to-[#c9a227]"></span>
            </div>
            <p className="text-sm text-[#666666] font-[family-name:var(--font-montserrat)]">
              A.P. HANDICRAFTS DEVELOPMENT CORPORATION LTD., VIJAYAWADA
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="bg-white p-6 sm:p-8 md:p-12 border border-[#c9a227]/20 shadow-lg"
          >
            {/* Chairman */}
            <div className="flex justify-center mb-8">
              <div className="bg-gradient-to-r from-[#3d3428] to-[#c9a227] text-white px-8 py-4 text-center font-[family-name:var(--font-playfair)] font-semibold">
                Chairman
              </div>
            </div>

            {/* Managing Director */}
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-px h-4 bg-[#c9a227]"></div>
                <div className="bg-white border-2 border-[#c9a227] text-[#3d3428] px-8 py-4 text-center font-[family-name:var(--font-playfair)] font-semibold">
                  Managing Director
                </div>
              </div>
            </div>

            {/* Departments */}
            <div className="relative">
              <div className="absolute top-0 left-0 right-0 h-px bg-[#c9a227] hidden lg:block"></div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-4 pt-8">
                {[
                  "Administration & Legal",
                  "Finance, Accounts & Audit",
                  "Marketing",
                  "Development & Technical",
                  "Training & Exhibitions",
                ].map((dept, index) => (
                  <div key={index} className="relative">
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-px h-8 bg-[#c9a227] hidden lg:block"></div>
                    <div className="bg-[#f5f2eb] border border-[#c9a227]/30 text-[#3d3428] px-4 py-3 text-center font-[family-name:var(--font-montserrat)] text-sm hover:bg-[#c9a227] hover:text-white transition-colors duration-300">
                      {dept}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
