// app/components/Home/v2/StatsV2.tsx
"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Users, Award, Heart, Sparkles } from "lucide-react";

const stats = [
  {
    id: 1,
    value: 205000,
    suffix: "+",
    label: "Artisan Families",
    description: "Families sustained through craft, preserving generational knowledge and dignity",
    icon: Users,
  },
  {
    id: 2,
    value: 40,
    suffix: "+",
    label: "Years of Heritage",
    description: "Four decades of protecting Andhra's cultural identity and craft ecosystem",
    icon: Award,
  },
  {
    id: 3,
    value: 100,
    suffix: "+",
    label: "Craft Traditions",
    description: "From Kalamkari to Kondapalli — living art forms defining regional identity",
    icon: Heart,
  },
  {
    id: 4,
    value: 50,
    suffix: "+",
    label: "Award-Winning Artisans",
    description: "National and international recognition for masters of timeless skills",
    icon: Sparkles,
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
        setCount(Math.floor(value * (1 - Math.pow(1 - progress, 4))));
        requestAnimationFrame(animateCount);
      } else {
        setCount(value);
      }
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

export default function StatsV2() {
  return (
    <section className="relative py-28 md:py-36 bg-gradient-to-b from-[#F5E8C8] via-[#faf6ed] to-[#F5E8C8] overflow-hidden">

      {/* Elegant Pattern */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M40 20 L42 25 L47 26 L43 30 L44 35 L40 32 L36 35 L37 30 L33 26 L38 25 Z' fill='%23E0AE31' fill-opacity='0.2'/%3E%3C/svg%3E")`,
        backgroundSize: '120px 120px'
      }} />

      {/* Top Accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#E0AE31] to-transparent" />

      <div className="relative z-10 w-[98%] max-w-none mx-auto px-6 lg:px-16">

        {/* Professional Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 md:mb-24"
        >
          <div className="flex items-center justify-center gap-6 mb-8">
            <div className="w-20 h-px bg-[#103248]" />
            <span className="text-[#103248] text-sm tracking-[0.35em] uppercase font-bold">
              Our Impact & Legacy
            </span>
            <div className="w-20 h-px bg-[#103248]" />
          </div>

          <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold text-[#103248] font-[family-name:var(--font-playfair)] mb-8 leading-tight">
            Empowering Heritage
            <span className="block mt-3 text-[#E0AE31]">
              Through Generations
            </span>
          </h2>

          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-16 h-1 bg-[#E0AE31]" />
            <div className="w-2 h-2 bg-[#E0AE31] rotate-45" />
            <div className="w-16 h-1 bg-[#E0AE31]" />
          </div>

          <p className="text-[#475569] text-xl max-w-3xl mx-auto leading-relaxed font-light">
            Four decades of commitment to preserving traditional craftsmanship,
            <span className="block mt-2">empowering artisan families, and sustaining cultural heritage</span>
          </p>
        </motion.div>

        {/* Professional Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group h-full"
            >
              <div className="relative bg-white p-10 md:p-12 h-full flex flex-col
                border-2 border-[#103248]/20
                hover:border-[#103248]
                hover:shadow-2xl hover:shadow-[#103248]/10
                transition-all duration-500 overflow-hidden">

                {/* Decorative Corner Accents */}
                <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#E0AE31]" />
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[#E0AE31]" />

                {/* Icon */}
                <div className="mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#103248] to-[#1a4a5e]
                    flex items-center justify-center
                    transition-all duration-500
                    group-hover:scale-110 group-hover:rotate-3
                    shadow-lg shadow-[#103248]/30">
                    <stat.icon size={36} className="text-white" strokeWidth={2.5} />
                  </div>
                </div>

                {/* Value */}
                <div className="text-6xl md:text-7xl font-bold text-[#103248]
                  font-[family-name:var(--font-playfair)] tracking-tight mb-4">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>

                {/* Label */}
                <h3 className="text-xl font-bold text-[#103248] mb-6 leading-tight">
                  {stat.label}
                </h3>

                {/* Accent Line */}
                <div className="w-16 h-1 bg-gradient-to-r from-[#E0AE31] to-transparent mb-6" />

                {/* Description */}
                <p className="text-base text-[#64748b] leading-relaxed flex-1 font-light">
                  {stat.description}
                </p>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500
                  bg-gradient-to-br from-[#103248]/5 to-transparent pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom Accent */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#E0AE31] to-transparent" />
    </section>
  );
}
