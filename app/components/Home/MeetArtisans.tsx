"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Quote, MapPin } from 'lucide-react';

const featuredArtisans = [
  {
    id: 1,
    name: "Sri Y. Veerabhadra Prasad",
    craft: "Tholu Bommalata",
    village: "Nimmalakunta",
    image: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=800&q=80",
    quote: "This craft fed my family for six generations. Every shadow puppet I carve carries the stories of my ancestors.",
    slug: "veeraprasad-tholu-bommalata"
  },
  {
    id: 2,
    name: "Smt. Janaki Devi",
    craft: "Uppada Jamdani",
    village: "Uppada",
    image: "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?w=800&q=80",
    quote: "Each thread I weave is a prayer. The loom sings the songs my grandmother taught me.",
    slug: "janaki-uppada-jamdani"
  },
  {
    id: 3,
    name: "Sri V. Venkata Rao",
    craft: "Budithi Brassware",
    village: "Budithi",
    image: "https://images.unsplash.com/photo-1592833159155-c62df1b65634?w=800&q=80",
    quote: "Bronze and brass remember everything. I shape metal the way my father did, and his father before him.",
    slug: "venkata-budithi-brass"
  }
];

export default function MeetArtisans() {
  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-br from-[#3B2A1A] via-[#5A3523] to-[#8C4A2F] overflow-hidden">
      {/* Subtle Heritage Texture */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.4'%3E%3Cpath d='M40 40m-10 0a10 10 0 1 0 20 0a10 10 0 1 0 -20 0'/%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Top divider */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#C9A24D]/40 to-transparent" />

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
            <div className="w-14 h-[1px] bg-[#C9A24D]/70" />
            <span className="text-[#C9A24D] text-xs tracking-[0.35em] uppercase font-bold">
              The Heart of Our Craft
            </span>
            <div className="w-14 h-[1px] bg-[#C9A24D]/70" />
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white font-[family-name:var(--font-playfair)] mb-6 leading-tight">
            Meet the{" "}
            <span className="text-[#C9A24D]">
              Artisans
            </span>
          </h2>
          <p className="text-white/85 text-lg max-w-2xl mx-auto font-medium leading-relaxed">
            Behind every craft is a person. Behind every tradition is a family. These are their stories.
          </p>
        </motion.div>

        {/* Artisans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 mb-16">
          {featuredArtisans.map((artisan, index) => (
            <motion.div
              key={artisan.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
            >
              <Link href={`/artisan-stories/${artisan.slug}`} className="group block h-full">
                <div className="relative bg-white h-full flex flex-col overflow-hidden border border-[#E0D0B8] hover:shadow-2xl hover:shadow-[#3B2A1A]/20 transition-all duration-500">

                  {/* Portrait Image */}
                  <div className="relative h-80 overflow-hidden bg-[#E8DCC8]">
                    <Image
                      src={artisan.image}
                      alt={artisan.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#3B2A1A]/90 via-[#3B2A1A]/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

                    {/* Location on image */}
                    <div className="absolute top-6 left-6 flex items-center gap-2 bg-[#3B2A1A]/80 px-3 py-1.5">
                      <MapPin size={14} className="text-[#C9A24D]" />
                      <p className="text-white/90 text-xs font-medium uppercase tracking-wider">
                        {artisan.village}
                      </p>
                    </div>

                    {/* Name and craft on image */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <p className="text-[#C9A24D] text-xs tracking-[0.25em] uppercase mb-2 font-bold">
                        {artisan.craft}
                      </p>
                      <h3 className="text-white text-2xl md:text-3xl font-bold font-[family-name:var(--font-playfair)]">
                        {artisan.name}
                      </h3>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 md:p-8 bg-white flex-1 flex flex-col">
                    {/* Quote */}
                    <div className="relative mb-6 flex-1">
                      <Quote size={20} className="text-[#C9A24D]/30 mb-2" />
                      <p className="text-[#6F6257] text-base leading-relaxed italic">
                        "{artisan.quote}"
                      </p>
                    </div>

                    {/* Accent Line */}
                    <div className="w-12 h-[2px] bg-[#C9A24D] mb-4" />

                    {/* Read Story CTA */}
                    <div className="flex items-center gap-3 text-[#8C4A2F] font-semibold group-hover:text-[#C9A24D] transition-colors">
                      <span className="text-sm tracking-wide">Read Their Story</span>
                      <div className="w-8 h-[2px] bg-[#C9A24D] transform group-hover:w-12 transition-all duration-300" />
                    </div>
                  </div>

                  {/* Hover accent border */}
                  <div className="absolute inset-x-0 bottom-0 h-[2px] bg-[#C9A24D] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All Artisans CTA */}
        <div className="text-center">
          <Link
            href="/artisan-stories"
            className="inline-flex items-center gap-2 px-10 py-4
              bg-[#C9A24D] text-[#3B2A1A] font-bold text-lg
              hover:bg-white transition-all duration-300 shadow-xl"
          >
            Meet All Artisans →
          </Link>
        </div>
      </div>

      {/* Bottom divider */}
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#C9A24D]/40 to-transparent" />
    </section>
  );
}
