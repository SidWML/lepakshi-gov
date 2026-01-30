import { Sparkles, Users, Store, Globe } from 'lucide-react';

export default function HeritageTabV3() {
  return (
    <div className="space-y-10">
      {/* Header */}
      <div className="text-center pb-8 border-b-2 border-[#E0AE31]/30">
        <h1 className="text-3xl md:text-4xl font-bold text-[#0f766e] mb-4 font-[family-name:var(--font-playfair)]">
          A Timeless Tapestry
        </h1>
        <p className="text-xl text-[#d97706] italic font-[family-name:var(--font-playfair)]">
          Weaving Heritage into the Future
        </p>
      </div>

      {/* Introduction */}
      <div className="bg-gradient-to-br from-[#F5ECE3] to-[#FAF8F3] p-8 rounded-lg border-l-4 border-[#E0AE31]">
        <p className="text-gray-700 leading-relaxed text-lg">
          In the year 1982, an ambitious endeavour was launched by the Andhra Pradesh Government:
          the establishment of Lepakshi Corporation. This visionary institution was tasked with the
          promotion, development, and marketing of India's rich tapestry of handicrafts, while also
          implementing welfare schemes for the dedicated artisans who bring these creations to life.
        </p>
      </div>

      {/* Symphony of Tradition */}
      <div className="grid md:grid-cols-[80px_1fr] gap-6 bg-white p-6 rounded-lg border-2 border-[#8B7355]/20">
        <div className="flex items-center justify-center">
          <div className="w-16 h-16 bg-gradient-to-br from-[#0f766e] to-[#0d9488] rounded-full flex items-center justify-center">
            <Sparkles className="text-white" size={32} />
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-[#0f766e] mb-4 font-[family-name:var(--font-playfair)]">
            A Symphony of Tradition and Innovation
          </h3>
          <p className="text-gray-700 leading-relaxed text-lg">
            Lepakshi's guiding principle, "An Empowered Artisan Community Thriving in an 'Enabling'
            Environment," has propelled the organization forward. With a network of 12+2 showrooms
            strategically located across Andhra Pradesh, Kolkata, and New Delhi, Lepakshi offers a
            captivating glimpse into India's artistic heritage.
          </p>
        </div>
      </div>

      {/* Guardians of Heritage */}
      <div className="grid md:grid-cols-[80px_1fr] gap-6 bg-gradient-to-r from-[#E0AE31]/10 to-[#d97706]/10 p-6 rounded-lg border-2 border-[#E0AE31]/30">
        <div className="flex items-center justify-center">
          <div className="w-16 h-16 bg-gradient-to-br from-[#E0AE31] to-[#d97706] rounded-full flex items-center justify-center">
            <Store className="text-white" size={32} />
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-[#0f766e] mb-4 font-[family-name:var(--font-playfair)]">
            Guardians of Heritage
          </h3>
          <p className="text-gray-700 leading-relaxed text-lg">
            Brand Lepakshi has become synonymous with the cultural and artistic heritage of Andhra
            Pradesh. True to its vision, Lepakshi has been at the forefront of promoting arts and
            crafts through its retail showrooms and expos. This unwavering commitment has earned the
            brand a distinct identity, making it a cherished destination for art and craft enthusiasts.
          </p>
        </div>
      </div>

      {/* Timeless Tapestry Card */}
      <div className="bg-white p-8 rounded-lg border-2 border-[#8B7355]/30 shadow-lg">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-gradient-to-br from-[#0f766e] to-[#0d9488] rounded-lg flex items-center justify-center flex-shrink-0">
            <Globe className="text-white" size={24} />
          </div>
          <h3 className="text-2xl font-bold text-[#0f766e] font-[family-name:var(--font-playfair)]">
            A Timeless Tapestry
          </h3>
        </div>
        <p className="text-gray-700 leading-relaxed text-lg">
          Lepakshi showcases a mesmerizing array of intricate designs, exquisite carvings, and
          unparalleled craftsmanship. From the vibrant hues of Kalamkari paintings to the delicate
          intricacies of Kondapalli toys, each creation is a testament to the skill and artistry of
          Andhra Pradesh's artisans.
        </p>
      </div>

      {/* Empowering Artisans */}
      <div className="grid md:grid-cols-[80px_1fr] gap-6 bg-gradient-to-br from-[#0f766e]/5 to-[#d97706]/5 p-6 rounded-lg border-2 border-[#8B7355]/20">
        <div className="flex items-center justify-center">
          <div className="w-16 h-16 bg-gradient-to-br from-[#d97706] to-[#E0AE31] rounded-full flex items-center justify-center">
            <Users className="text-white" size={32} />
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-[#0f766e] mb-4 font-[family-name:var(--font-playfair)]">
            Empowering Artisans, Enriching Lives
          </h3>
          <p className="text-gray-700 leading-relaxed text-lg">
            For over three decades, Lepakshi has been dedicated to empowering artisans and enriching
            lives. By creating a market for their exquisite creations, Lepakshi has not only uplifted
            countless individuals but has also contributed to the economic growth of the region.
          </p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-[#0f766e] to-[#0d9488] p-10 rounded-lg text-center text-white shadow-xl">
        <h3 className="text-2xl md:text-3xl font-bold mb-4 font-[family-name:var(--font-playfair)]">
          A Heritage Reborn
        </h3>
        <p className="text-white/95 leading-relaxed text-lg max-w-4xl mx-auto">
          Lepakshi invites you to immerse yourself in the beauty of Indian handicrafts. Explore a
          world of musical instruments, paintings, jewelry, and home decor items, each a masterpiece
          crafted with passion and precision. As you step into a Lepakshi showroom, you embark on a
          journey through time, witnessing the timeless beauty of India's art and culture.
        </p>
      </div>
    </div>
  );
}
