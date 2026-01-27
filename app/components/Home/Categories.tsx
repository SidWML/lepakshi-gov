import Image from 'next/image';
import Link from 'next/link';

const categories = [
  { id: 1, title: 'Jewelry', subtitle: 'Traditional Ornaments', image: '/imitation_jewellery.jpg', link: '/heritage' },
  { id: 2, title: 'Paintings', subtitle: 'Artistic Heritage', image: '/adivasi-paintings.jpg', link: '/heritage' },
  { id: 3, title: 'Textile / Weaves', subtitle: 'Handwoven Excellence', image: '/hand-knotted.jpg', link: '/heritage' },
  { id: 4, title: 'Other States', subtitle: 'Pan-Indian Crafts', image: '/silver-filigree.jpg', link: '/heritage' },
  { id: 5, title: 'Natural Fibers', subtitle: 'Eco-Friendly Crafts', image: '/bamboo.jpg', link: '/heritage' },
  { id: 6, title: 'Metal Crafts', subtitle: 'Forged Traditions', image: '/bronze-casting.jpg', link: '/heritage' },
  { id: 7, title: 'Wood Crafts', subtitle: 'Carved Masterpieces', image: '/etikoppaka.jpg', link: '/heritage' }
];

export default function Categories() {
  return (
    <section className="relative py-24 md:py-32 bg-[#f8f5ef] overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#faf8f5] via-[#f8f5ef] to-[#faf8f5]" />
        {/* Subtle Pattern */}
        <div className="absolute top-20 right-20 w-64 h-64 opacity-[0.08]">
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <circle cx="100" cy="100" r="80" fill="none" stroke="#c9a962" strokeWidth="1" />
            <circle cx="100" cy="100" r="60" fill="none" stroke="#c9a962" strokeWidth="0.5" />
          </svg>
        </div>
        <div className="absolute bottom-20 left-20 w-48 h-48 opacity-[0.08]">
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <rect x="20" y="20" width="160" height="160" fill="none" stroke="#c9a962" strokeWidth="1" />
            <rect x="40" y="40" width="120" height="120" fill="none" stroke="#c9a962" strokeWidth="0.5" />
          </svg>
        </div>
      </div>

      {/* Top Border */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#c9a962]/40 to-transparent" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-16 h-[1px] bg-gradient-to-r from-transparent to-[#c9a962]" />
            <span className="text-[#c9a962] text-sm tracking-[0.3em] uppercase font-[family-name:var(--font-montserrat)]">
              Explore
            </span>
            <div className="w-16 h-[1px] bg-gradient-to-l from-transparent to-[#c9a962]" />
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#2c2416] font-[family-name:var(--font-playfair)] mb-6">
            Craft{" "}
            <span className="bg-gradient-to-r from-[#c9a962] via-[#e0ae31] to-[#c9a962] bg-clip-text text-transparent">
              Categories
            </span>
          </h2>
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-12 h-[2px] bg-gradient-to-r from-[#2c2c2c] to-[#c9a962]" />
            <div className="w-2 h-2 rotate-45 border border-[#c9a962]" />
            <div className="w-12 h-[2px] bg-gradient-to-l from-[#2c2c2c] to-[#c9a962]" />
          </div>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto font-[family-name:var(--font-montserrat)]">
            Discover the rich tapestry of traditional crafts from Andhra Pradesh
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {categories.map((category) => (
            <Link key={category.id} href={category.link} className="block group">
              <div className="relative overflow-hidden bg-white transition-all duration-500">
                {/* Main Image Container */}
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    priority
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2c2c2c]/95 via-[#2c2c2c]/20 to-transparent" />

                  {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-[#c9a962] text-xs tracking-[0.2em] uppercase mb-2 font-[family-name:var(--font-montserrat)]">
                      {category.subtitle}
                    </p>
                    <h3 className="text-white text-2xl md:text-3xl font-bold font-[family-name:var(--font-playfair)] mb-3">
                      {category.title}
                    </h3>
                    <div className="flex items-center text-[#c9a962] opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                      <span className="text-sm font-medium font-[family-name:var(--font-montserrat)]">Explore Collection</span>
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Border Accents */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#c9a962] via-[#2c2c2c] to-[#c9a962] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </div>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-16">
          <Link
            href="/heritage"
            className="group relative inline-flex items-center justify-center px-10 py-4 text-base font-semibold overflow-hidden font-[family-name:var(--font-montserrat)] transition-all duration-500 border-2 border-[#c9a962]"
          >
            <span className="absolute inset-0 bg-transparent" />
            <span className="absolute inset-0 bg-gradient-to-r from-[#c9a962] to-[#e0ae31] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            <span className="relative z-10 flex items-center text-[#c9a962] group-hover:text-white transition-colors duration-500">
              View All Categories
              <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </Link>
        </div>
      </div>

      {/* Bottom Border */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#c9a962]/40 to-transparent" />
    </section>
  );
}