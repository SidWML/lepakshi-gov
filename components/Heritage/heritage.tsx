"use client";
import { Metadata } from "next";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import {
  TrophyIcon,
  ArtisanIcon,
  StoreIcon,
  CustomersIcon,
  TargetIcon,
  PenIcon,
  HandshakeIcon,
  PaletteIcon,
  DiamondIcon,
  TempleIcon,
  BookIcon,
  StarIcon,
  GlobeIcon,
  LaptopIcon,
  GraduationIcon,
  SparklesIcon,
} from "../../app/components/icons/HeritageIcons";

function AnimatedCounter({
  value,
  suffix = "",
  duration = 4,
}: {
  value: number;
  suffix?: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      const easeInOutCubic =
        progress < 0.5
          ? 4 * progress * progress * progress
          : 1 - Math.pow(-2 * progress + 2, 3) / 2;
      setCount(Math.floor(easeInOutCubic * value));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, value, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

const milestones = [
  {
    year: "1981",
    title: "Foundation",
    description:
      "A.P. Handicrafts Development Corporation Limited was established by the Government of Andhra Pradesh to preserve and promote traditional handicrafts.",
  },
  {
    year: "1985",
    title: "First Emporium",
    description:
      "Opened the first Lepakshi Handicrafts Emporium, bringing authentic artisan products directly to customers.",
  },
  {
    year: "1995",
    title: "National Expansion",
    description:
      "Expanded presence across India with emporiums in major cities including New Delhi and Kolkata.",
  },
  {
    year: "2010",
    title: "Artisan Network Growth",
    description:
      "Established partnerships with over 5,000 artisans across Andhra Pradesh, ensuring fair trade practices.",
  },
  {
    year: "2020",
    title: "Digital Transformation",
    description:
      "Launched online platform to bring traditional handicrafts to customers worldwide.",
  },
  {
    year: "2025",
    title: "AI & Innovation",
    description:
      "Embracing artificial intelligence and modern technology to enhance customer experience while preserving traditional craftsmanship.",
  },
];

const stats = [
  { number: "45+", label: "Years of Heritage", icon: TrophyIcon, value: 45 },
  { number: "5000+", label: "Artisan Partners", icon: ArtisanIcon, value: 5000 },
  { number: "19+", label: "Emporiums Nationwide", icon: StoreIcon, value: 19 },
  { number: "1M+", label: "Happy Customers", icon: CustomersIcon, value: 1000000 },
];

const values = [
  {
    icon: HandshakeIcon,
    title: "Artisan Empowerment",
    description:
      "We believe in providing sustainable livelihoods to traditional craftsmen and their families, ensuring their skills are valued and compensated fairly.",
  },
  {
    icon: PaletteIcon,
    title: "Authentic Craftsmanship",
    description:
      "Every product is handcrafted using time-honored techniques passed down through generations, preserving the authenticity of Indian handicrafts.",
  },
  {
    icon: DiamondIcon,
    title: "Quality Assurance",
    description:
      "We maintain rigorous quality standards, ensuring each piece meets our high benchmarks before reaching our customers.",
  },
  {
    icon: TempleIcon,
    title: "Cultural Preservation",
    description:
      "We are committed to preserving and promoting the rich cultural heritage of Andhra Pradesh through traditional art forms.",
  },
];

const craftCategories = [
  "Kalamkari Paintings",
  "Kondapalli Toys",
  "Etikoppaka Lacquerware",
  "Bidri Metal Craft",
  "Pochampally Ikat",
  "Brass & Bronze Ware",
  "Wooden Handicrafts",
  "Handloom Textiles",
];

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

export default function HeritagePage() {
  return (
    <div className="min-h-screen bg-[#f8f6f1]">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 lg:py-36 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#3d3428]/5 via-transparent to-[#c9a227]/5"></div>
        <div className="absolute top-0 left-0 w-72 h-72 bg-[#c9a227]/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#3d3428]/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

        <div className="w-[90%] md:w-[85%] max-w-[1400px] mx-auto relative">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <motion.p
              variants={fadeInUp}
              className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-[#c9a227] font-semibold mb-4 font-[family-name:var(--font-montserrat)]"
            >
              Our Story
            </motion.p>
            <motion.h1
              variants={fadeInUp}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-[#3d3428] font-[family-name:var(--font-playfair)] mb-6 leading-[1.1]"
            >
              Preserving Heritage,
              <br />
              Empowering Artisans
            </motion.h1>
            <motion.div variants={fadeInUp} className="flex items-center justify-center gap-3 mb-8">
              <span className="w-12 md:w-16 h-[1px] bg-gradient-to-r from-transparent to-[#c9a227]"></span>
              <SparklesIcon className="w-4 h-4 text-[#c9a227]" />
              <span className="w-12 md:w-16 h-[1px] bg-gradient-to-l from-transparent to-[#c9a227]"></span>
            </motion.div>
            <motion.p
              variants={fadeInUp}
              className="text-base sm:text-lg md:text-xl text-[#666666] font-[family-name:var(--font-montserrat)] leading-relaxed max-w-3xl mx-auto"
            >
              For over four decades, Lepakshi Handicrafts has been the bridge between India&apos;s
              master craftsmen and those who appreciate the beauty of authentic, handcrafted
              artistry.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-14 md:py-20 bg-gradient-to-r from-[#0f0f0f] via-[#1a1610] to-[#0f0f0f] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/patterns/pattern-dark.svg')] opacity-5"></div>
        <div className="w-[90%] md:w-[85%] max-w-[1400px] mx-auto relative">
          <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              const suffix = stat.number.replace(/[0-9]/g, "");
              return (
                <motion.div key={index} variants={fadeInUp} className="text-center group">
                  <div className="w-14 h-14 md:w-16 md:h-16 mx-auto mb-4 flex items-center justify-center border border-[#c9a227]/30 group-hover:border-[#c9a227]/60 transition-colors duration-300">
                    <IconComponent className="w-7 h-7 md:w-8 md:h-8 text-[#c9a227]" />
                  </div>
                  <p className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white font-[family-name:var(--font-playfair)] mb-2 notranslate">
                    <AnimatedCounter value={stat.value} suffix={suffix} />
                  </p>
                  <p className="text-xs sm:text-sm text-[#f8f6f1]/70 font-[family-name:var(--font-montserrat)] tracking-wide">
                    {stat.label}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24 lg:py-32 bg-[#f5f2eb]">
        <div className="w-[90%] md:w-[85%] max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-[#c9a227] font-semibold mb-4 font-[family-name:var(--font-montserrat)]">
                Who We Are
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-[#3d3428] font-[family-name:var(--font-playfair)] mb-6 leading-tight">
                A.P. Handicrafts Development Corporation Limited
              </h2>
              <div className="flex items-center gap-3 mb-8">
                <span className="w-12 h-px bg-[#c9a227]"></span>
                <span className="w-2 h-2 bg-[#c9a227] rotate-45"></span>
              </div>

              <div className="space-y-5 text-[#666666] font-[family-name:var(--font-montserrat)] leading-relaxed text-sm sm:text-base">
                <p>
                  Established in 1981 by the Government of Andhra Pradesh,{" "}
                  <strong className="text-[#3d3428] font-semibold">Lepakshi Handicrafts</strong>{" "}
                  operates under the A.P. Handicrafts Development Corporation Limited. Our mission
                  is to preserve, promote, and propagate the rich tradition of Indian handicrafts
                  while providing sustainable livelihoods to thousands of artisan families.
                </p>
                <p>
                  Named after the historic Lepakshi temple, renowned for its magnificent
                  architecture and artistic excellence, we carry forward the legacy of exceptional
                  craftsmanship that has defined our region for centuries.
                </p>
                <p>
                  From the intricate Kalamkari paintings to the colorful Kondapalli toys, from the
                  elegant Pochampally weaves to the unique Etikoppaka lacquerware – we bring you the
                  finest expressions of Andhra Pradesh&apos;s artistic heritage.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="aspect-[4/3] bg-gradient-to-br from-[#3d3428] via-[#2a2520] to-[#1a1610] overflow-hidden relative group">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-6 sm:p-8">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-6 border border-[#c9a227]/40 flex items-center justify-center group-hover:border-[#c9a227]/70 transition-colors duration-500">
                      <SparklesIcon className="w-10 h-10 sm:w-12 sm:h-12 text-[#c9a227]" />
                    </div>
                    <p className="text-[#f8f6f1]/90 font-[family-name:var(--font-playfair)] text-xl sm:text-2xl md:text-3xl italic">
                      &ldquo;Where tradition meets artistry&rdquo;
                    </p>
                  </div>
                </div>
                <div className="absolute top-4 left-4 w-12 sm:w-16 h-12 sm:h-16 border-t border-l border-[#c9a227]/30"></div>
                <div className="absolute bottom-4 right-4 w-12 sm:w-16 h-12 sm:h-16 border-b border-r border-[#c9a227]/30"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-24 lg:py-32 bg-[#f8f6f1]">
        <div className="w-[90%] md:w-[85%] max-w-[1400px] mx-auto">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div
              variants={fadeInUp}
              className="bg-white p-6 sm:p-8 md:p-10 border border-[#c9a227]/20 relative group hover:shadow-xl transition-shadow duration-500"
            >
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#3d3428] via-[#c9a227] to-[#3d3428]"></div>
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#3d3428]/10 flex items-center justify-center mb-5 group-hover:bg-[#3d3428] transition-colors duration-300">
                <TargetIcon className="w-6 h-6 sm:w-7 sm:h-7 text-[#3d3428] group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-[#3d3428] font-[family-name:var(--font-playfair)] mb-4">
                Our Mission
              </h3>
              <p className="text-[#666666] font-[family-name:var(--font-montserrat)] leading-relaxed text-sm sm:text-base">
                To empower traditional artisans by providing them with a platform to showcase their
                exceptional skills, ensuring fair compensation and sustainable livelihoods while
                bringing authentic Indian handicrafts to discerning customers across the globe.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-white p-6 sm:p-8 md:p-10 border border-[#c9a227]/20 relative group hover:shadow-xl transition-shadow duration-500"
            >
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#c9a227] via-[#3d3428] to-[#c9a227]"></div>
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#c9a227]/10 flex items-center justify-center mb-5 group-hover:bg-[#c9a227] transition-colors duration-300">
                <PenIcon className="w-6 h-6 sm:w-7 sm:h-7 text-[#c9a227] group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-[#3d3428] font-[family-name:var(--font-playfair)] mb-4">
                Our Vision
              </h3>
              <p className="text-[#666666] font-[family-name:var(--font-montserrat)] leading-relaxed text-sm sm:text-base">
                To be the most trusted destination for authentic Indian handicrafts, preserving
                centuries-old traditions for future generations while adapting to the evolving needs
                of modern consumers through innovation and excellence.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Our Values */}
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
              What We Stand For
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-[#3d3428] font-[family-name:var(--font-playfair)] mb-5">
              Our Core Values
            </h2>
            <div className="flex items-center justify-center gap-3">
              <span className="w-12 md:w-16 h-px bg-gradient-to-r from-transparent to-[#c9a227]"></span>
              <span className="w-2 h-2 bg-[#c9a227] rotate-45"></span>
              <span className="w-12 md:w-16 h-px bg-gradient-to-l from-transparent to-[#c9a227]"></span>
            </div>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="bg-white p-5 sm:p-6 md:p-8 border border-[#c9a227]/20 hover:border-[#c9a227]/50 hover:shadow-xl transition-all duration-500 group"
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#3d3428]/10 group-hover:bg-[#3d3428] flex items-center justify-center mb-5 transition-colors duration-300">
                    <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 text-[#3d3428] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-[#3d3428] font-[family-name:var(--font-playfair)] mb-3">
                    {value.title}
                  </h3>
                  <p className="text-sm text-[#666666] font-[family-name:var(--font-montserrat)] leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Journey Timeline */}
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
              Our Journey
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white font-[family-name:var(--font-playfair)] mb-5">
              Milestones That Define Us
            </h2>
            <div className="flex items-center justify-center gap-3">
              <span className="w-12 md:w-16 h-px bg-gradient-to-r from-transparent to-[#c9a227]"></span>
              <SparklesIcon className="w-4 h-4 text-[#c9a227]" />
              <span className="w-12 md:w-16 h-px bg-gradient-to-l from-transparent to-[#c9a227]"></span>
            </div>
          </motion.div>

          <div className="relative">
            <div className="hidden lg:block absolute top-8 left-0 right-0 h-px bg-[#c9a227]/30"></div>

            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 lg:gap-4"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              {milestones.map((milestone, index) => (
                <motion.div key={index} className="relative" variants={fadeInUp}>
                  <div className="lg:hidden absolute left-6 top-14 bottom-0 w-px bg-[#c9a227]/30"></div>

                  <div className="flex lg:flex-col items-start lg:items-center gap-4 lg:gap-0">
                    <div className="relative z-10 w-12 h-12 lg:w-16 lg:h-16 bg-[#c9a227] flex items-center justify-center flex-shrink-0 group hover:scale-105 transition-transform duration-300">
                      <span className="text-xs sm:text-sm lg:text-base font-bold text-[#3d3428] font-[family-name:var(--font-montserrat)]">
                        {milestone.year}
                      </span>
                    </div>

                    <div className="lg:mt-6 lg:text-center flex-1">
                      <h3 className="text-base sm:text-lg font-semibold text-white font-[family-name:var(--font-playfair)] mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#f8f6f1]/70 font-[family-name:var(--font-montserrat)] leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Craft Categories */}
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
              Our Specialties
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-[#3d3428] font-[family-name:var(--font-playfair)] mb-5">
              Traditional Crafts We Celebrate
            </h2>
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="w-12 md:w-16 h-px bg-gradient-to-r from-transparent to-[#c9a227]"></span>
              <span className="w-2 h-2 bg-[#c9a227] rotate-45"></span>
              <span className="w-12 md:w-16 h-px bg-gradient-to-l from-transparent to-[#c9a227]"></span>
            </div>
            <p className="text-sm sm:text-base text-[#666666] font-[family-name:var(--font-montserrat)] max-w-2xl mx-auto leading-relaxed">
              Each craft tells a story of dedication, skill, and cultural heritage passed down
              through generations.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-wrap justify-center gap-3 md:gap-4"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {craftCategories.map((craft, index) => (
              <motion.span
                key={index}
                variants={fadeInUp}
                className="px-4 sm:px-6 py-2.5 sm:py-3 bg-white border border-[#c9a227]/30 text-[#3d3428] font-[family-name:var(--font-montserrat)] text-xs sm:text-sm hover:bg-[#3d3428] hover:text-white hover:border-[#3d3428] transition-all duration-300 cursor-default"
              >
                {craft}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 lg:py-32 bg-[#f5f2eb] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-[#c9a227]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#3d3428]/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

        <motion.div
          className="w-[90%] md:w-[85%] max-w-[900px] mx-auto text-center relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-[#3d3428] font-[family-name:var(--font-playfair)] mb-6 leading-tight">
            Experience the Magic of Indian Handicrafts
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[#666666] font-[family-name:var(--font-montserrat)] mb-10 leading-relaxed max-w-2xl mx-auto">
            Visit our emporiums or explore our online collection to discover authentic handcrafted
            treasures that bring the rich heritage of India into your home.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/store-locator"
              className="group inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-[#3d3428] text-white font-semibold font-[family-name:var(--font-montserrat)] text-sm sm:text-base hover:bg-[#c9a227] transition-all duration-300"
            >
              Find a Store Near You
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 border-2 border-[#3d3428] text-[#3d3428] font-semibold font-[family-name:var(--font-montserrat)] text-sm sm:text-base hover:bg-[#3d3428] hover:text-white transition-all duration-300"
            >
              Shop Online
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
