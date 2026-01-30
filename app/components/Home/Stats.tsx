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
    description:
      "Families sustained through craft, preserving generational knowledge and dignity",
    icon: Users,
  },
  {
    id: 2,
    value: 40,
    suffix: "+",
    label: "Years of Heritage",
    description:
      "Four decades of protecting Andhra's cultural identity and craft ecosystem",
    icon: Award,
  },
  {
    id: 3,
    value: 100,
    suffix: "+",
    label: "Craft Traditions",
    description:
      "From Kalamkari to Kondapalli — living art forms defining regional identity",
    icon: Heart,
  },
  {
    id: 4,
    value: 50,
    suffix: "+",
    label: "Award-Winning Artisans",
    description:
      "National and international recognition for masters of timeless skills",
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

export default function Stats() {
  return (
    <section className="relative py-24 md:py-32 bg-[#F7EFE4] overflow-hidden">

      {/* Subtle Heritage Pattern */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.4'%3E%3Cpath d='M40 40m-10 0a10 10 0 1 0 20 0a10 10 0 1 0 -20 0'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Top Divider */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#C9A24D]/40 to-transparent" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-14 h-[1px] bg-[#C9A24D]/70" />
            <span className="text-[#8C4A2F] text-xs tracking-[0.35em] uppercase font-bold">
              Our Impact
            </span>
            <div className="w-14 h-[1px] bg-[#C9A24D]/70" />
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold
            text-[#3B2A1A] font-[family-name:var(--font-playfair)] mb-6 leading-tight">
            Preserving Heritage,
            <span className="block md:inline text-[#8C4A2F]">
              {" "}Empowering Lives
            </span>
          </h2>

          <p className="text-[#6F6257] text-lg max-w-2xl mx-auto leading-relaxed font-medium">
            More than numbers — these are families sustained, traditions preserved,
            and communities thriving
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              className="group h-full"
            >
              <div className="relative bg-white p-8 md:p-10 h-full flex flex-col
                border border-[#E0D0B8]
                hover:shadow-xl hover:shadow-[#3B2A1A]/15
                transition-all duration-500">

                {/* Icon */}
                <div className="mb-6">
                  <div className="w-18 h-18 bg-[#3B2A1A]
                    flex items-center justify-center
                    transition-colors duration-300
                    group-hover:bg-[#8C4A2F]">
                    <stat.icon size={30} className="text-white" strokeWidth={2} />
                  </div>
                </div>

                {/* Value */}
                <div className="text-5xl md:text-6xl font-bold text-[#3B2A1A]
                  font-[family-name:var(--font-playfair)] tracking-tight mb-3">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>

                {/* Label */}
                <h3 className="text-lg font-semibold text-[#3B2A1A] mb-3 tracking-wide">
                  {stat.label}
                </h3>

                {/* Accent Line */}
                <div className="w-12 h-[2px] bg-[#C9A24D] mb-4" />

                {/* Description */}
                <p className="text-base text-[#6F6257] leading-relaxed flex-1">
                  {stat.description}
                </p>

                {/* Hover Accent */}
                <div className="absolute inset-x-0 bottom-0 h-[2px]
                  bg-[#C9A24D]
                  transform scale-x-0 group-hover:scale-x-100
                  transition-transform duration-500 origin-left" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom Divider */}
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#C9A24D]/40 to-transparent" />
    </section>
  );
}
