"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Users, Award, Building2, MapPin } from "lucide-react";

const stats = [
  {
    id: 1,
    value: 205000,
    suffix: "+",
    label: "Artisans Supported",
    description: "Empowering craftsmen across the state",
    icon: Users,
  },
  {
    id: 2,
    value: 40,
    suffix: "+",
    label: "Years of Legacy",
    description: "Preserving heritage since 1982",
    icon: Award,
  },
  {
    id: 3,
    value: 15,
    suffix: "+",
    label: "Showrooms",
    description: "Across Andhra Pradesh",
    icon: Building2,
  },
  {
    id: 4,
    value: 13,
    suffix: "",
    label: "Districts Covered",
    description: "Reaching every corner",
    icon: MapPin,
  },
];

function AnimatedCounter({
  value,
  suffix = "",
  duration = 2,
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

    let startTime: number | null = null;
    const animateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = (timestamp - startTime) / (duration * 1000);

      if (progress < 1) {
        setCount(Math.floor(value * easeOutQuart(progress)));
        requestAnimationFrame(animateCount);
      } else {
        setCount(value);
      }
    };

    const easeOutQuart = (x: number): number => {
      return 1 - Math.pow(1 - x, 4);
    };

    requestAnimationFrame(animateCount);
  }, [isInView, value, duration]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-b from-[#f8f5ef] via-[#f5f1e8] to-[#f8f5ef] overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0">
        {/* Decorative Pattern */}
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03]">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]">
            <svg viewBox="0 0 200 200" className="w-full h-full">
              <circle cx="100" cy="100" r="95" fill="none" stroke="#1a1410" strokeWidth="0.5" />
              <circle cx="100" cy="100" r="75" fill="none" stroke="#1a1410" strokeWidth="0.3" />
              <circle cx="100" cy="100" r="55" fill="none" stroke="#1a1410" strokeWidth="0.2" />
            </svg>
          </div>
        </div>
      </div>

      {/* Top Border */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#c9a962]/40 to-transparent" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-16 h-[1px] bg-gradient-to-r from-transparent to-[#2c2c2c]" />
            <span className="text-[#2c2c2c] text-sm tracking-[0.3em] uppercase font-[family-name:var(--font-montserrat)]">
              Our Impact
            </span>
            <div className="w-16 h-[1px] bg-gradient-to-l from-transparent to-[#2c2c2c]" />
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#1a1410] font-[family-name:var(--font-playfair)] mb-6">
            Making a{" "}
            <span className="bg-gradient-to-r from-[#2c2c2c] via-[#a91d3a] to-[#2c2c2c] bg-clip-text text-transparent">
              Difference
            </span>
          </h2>
          <div className="flex items-center justify-center gap-2">
            <div className="w-12 h-[2px] bg-gradient-to-r from-[#c9a962] to-[#2c2c2c]" />
            <div className="w-2 h-2 rotate-45 border border-[#2c2c2c]" />
            <div className="w-12 h-[2px] bg-gradient-to-l from-[#c9a962] to-[#2c2c2c]" />
          </div>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              className="relative group h-full"
            >
              <div className="relative bg-white p-8 md:p-10 text-center transition-all duration-500 border border-[#1a1410]/10 hover:border-[#2c2c2c]/30 shadow-lg hover:shadow-xl h-full flex flex-col justify-between">
                {/* Corner Accents */}
                <div className="absolute -top-[1px] -left-[1px] w-4 h-4 border-t border-l border-[#2c2c2c]" />
                <div className="absolute -top-[1px] -right-[1px] w-4 h-4 border-t border-r border-[#2c2c2c]" />
                <div className="absolute -bottom-[1px] -left-[1px] w-4 h-4 border-b border-l border-[#2c2c2c]" />
                <div className="absolute -bottom-[1px] -right-[1px] w-4 h-4 border-b border-r border-[#2c2c2c]" />

                <div className="flex flex-col h-full">
                  {/* Icon */}
                  <div className="mb-6 flex justify-center">
                    <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-[#2c2c2c] to-[#3a3a3a] group-hover:from-[#c9a962] group-hover:to-[#e0ae31] transition-all duration-300 shadow-md">
                      <stat.icon size={28} className="text-white group-hover:text-[#1a1410]" strokeWidth={1.5} />
                    </div>
                  </div>

                  {/* Value */}
                  <div className="text-4xl md:text-5xl font-bold text-[#2c2c2c] font-[family-name:var(--font-playfair)] mb-3">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </div>

                  {/* Label */}
                  <h3 className="text-[#1a1410] font-[family-name:var(--font-montserrat)] text-lg font-semibold mb-3">
                    {stat.label}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 font-[family-name:var(--font-montserrat)] text-sm mt-auto">
                    {stat.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom Border */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#c9a962]/40 to-transparent" />
    </section>
  );
}
