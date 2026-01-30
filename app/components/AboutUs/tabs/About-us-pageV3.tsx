import Image from 'next/image';
import { Award, Users, Building2, TrendingUp, Target } from 'lucide-react';

export default function AboutUsPageV3() {
  return (
    <section className="w-full space-y-12">
      {/* Intro Section */}
      <div className="grid md:grid-cols-[300px_1fr] gap-8 items-start">
        <div className="bg-white p-4 rounded-lg border-2 border-[#8B7355]/20 shadow-lg">
          <Image
            src="/Aboutus/lord-balaji-wood-carving.png"
            alt="Lord Balaji Wood Carving"
            width={300}
            height={450}
            className="object-contain rounded"
          />
        </div>

        <div className="space-y-6">
          <div>
            <span className="inline-flex items-center gap-3 text-[#E0AE31] text-xs tracking-[0.3em] uppercase font-semibold mb-4">
              <span className="w-12 h-px bg-[#E0AE31]" />
              About Us
              <span className="w-12 h-px bg-[#E0AE31]" />
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 font-[family-name:var(--font-playfair)] mt-4 mb-6">
              Lepakshi Handicrafts
            </h2>
            <p className="text-lg text-gray-600 mb-2">Empowering Artisans Since 1982</p>
          </div>

          <p className="text-gray-700 leading-relaxed">
            Lepakshi Handicrafts, a proud undertaking of the Andhra Pradesh Government, stands as a beacon of artistic excellence and cultural preservation. Established in 1982 as A.P. Handicrafts Development Corporation Limited, we have dedicated ourselves to showcasing and nurturing the rich tapestry of Andhra Pradesh&apos;s artistic heritage.
          </p>
        </div>
      </div>

      {/* Our Heritage */}
      <div className="bg-gradient-to-br from-[#F5ECE3] to-[#FAF8F3] p-8 rounded-lg border-l-4 border-[#E0AE31]">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-gradient-to-br from-[#E0AE31] to-[#d97706] rounded-lg flex items-center justify-center">
            <Building2 className="text-white" size={24} />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-[#0f766e] font-[family-name:var(--font-playfair)]">
            Our Heritage
          </h3>
        </div>
        <p className="text-gray-700 leading-relaxed">
          Rooted in the lush forests and vibrant traditions of Andhra Pradesh, Lepakshi Handicrafts is a treasure trove of fascinating art forms and traditional crafts. Each piece in our collection tells a story, unique in style, concept, theme, and form. From the intricate woodcarvings that harness the state&apos;s abundant forest resources to the vibrant Kalamkari textiles, our products embody the innate creativity and durability that have been hallmarks of Andhra Pradesh&apos;s artistic legacy for generations.
        </p>
      </div>

      {/* Our Collection */}
      <div>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-gradient-to-br from-[#0f766e] to-[#0d9488] rounded-lg flex items-center justify-center">
            <Award className="text-white" size={24} />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-[#0f766e] font-[family-name:var(--font-playfair)]">
            Our Collection
          </h3>
        </div>
        <p className="text-gray-600 mb-6 ml-1">
          Step into the world of Lepakshi, surrounded by an awe-inspiring array of handicrafts
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { name: 'Woodcarvings', desc: 'Exquisite idols and mythological forms, alongside practical utility items' },
            { name: 'Kalamkari', desc: 'Intricate hand-painted or block-printed cotton textiles' },
            { name: 'Udayagiri Crafts', desc: 'Known for their unique style and craftsmanship' },
            { name: 'Kondapalli Toys', desc: 'Charming wooden figurines that have delighted generations' },
            { name: 'Brassware', desc: 'Gleaming metalwork showcasing intricate designs' },
            { name: 'Red Sander Idols', desc: 'Crafted from the prized red sandalwood' },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white p-5 rounded-lg border-2 border-[#8B7355]/20 hover:border-[#E0AE31] transition-colors duration-300"
            >
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-gradient-to-br from-[#E0AE31] to-[#d97706] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">
                  {index + 1}
                </div>
                <div>
                  <h4 className="font-bold text-[#0f766e] mb-2">
                    {item.name}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Our Mission */}
      <div className="bg-white p-8 rounded-lg border-2 border-[#8B7355]/30 shadow-lg">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-gradient-to-br from-[#d97706] to-[#E0AE31] rounded-lg flex items-center justify-center">
            <Target className="text-white" size={24} />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-[#0f766e] font-[family-name:var(--font-playfair)]">
            Our Mission
          </h3>
        </div>

        <div className="space-y-4">
          {[
            { title: 'Development and Promotion', desc: 'We strive to develop and promote handicrafts, ensuring the survival and growth of traditional art forms.' },
            { title: 'Marketing Support', desc: 'Through our extensive network of showrooms, exhibitions, and online platforms, we provide crucial marketing support to artisans.' },
            { title: 'Skill Enhancement', desc: "We organize training programs and workshops to upgrade artisans' skills, helping them adapt to changing market demands." },
            { title: 'Revival of Languishing Crafts', desc: 'We are committed to breathing new life into forgotten or declining craft forms.' },
            { title: 'Welfare Activities', desc: 'We undertake various initiatives to improve the lives of approximately 200,000 artisans across the state.' },
          ].map((item, index) => (
            <div key={index} className="flex gap-4 bg-gradient-to-r from-[#F5ECE3]/50 to-transparent p-4 rounded-lg">
              <div className="w-2 bg-gradient-to-b from-[#E0AE31] to-[#d97706] rounded-full flex-shrink-0" />
              <div>
                <h4 className="font-bold text-[#0f766e] mb-2">
                  {item.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Our Impact */}
      <div className="bg-gradient-to-br from-[#F5ECE3] to-[#FAF8F3] p-8 rounded-lg border-l-4 border-[#0f766e]">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-gradient-to-br from-[#0f766e] to-[#0d9488] rounded-lg flex items-center justify-center">
            <TrendingUp className="text-white" size={24} />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-[#0f766e] font-[family-name:var(--font-playfair)]">
            Our Impact
          </h3>
        </div>
        <p className="text-gray-700 leading-relaxed">
          Through our efforts, Lepakshi products have gained immense popularity, enjoying impressive customer patronage and demand. We&apos;ve successfully leveraged our unique strengths to deliver greater value for the arts and crafts of Andhra Pradesh. Working in tandem with the government, we&apos;re realizing the full potential of these traditional products in the modern market.
        </p>
      </div>

      {/* GI Registration */}
      <div className="bg-white p-8 rounded-lg border-2 border-[#8B7355]/30 shadow-lg">
        <div className="grid md:grid-cols-[200px_1fr] gap-8 items-start">
          <div className="bg-gradient-to-br from-[#FAF8F3] to-[#F5ECE3] p-4 rounded-lg">
            <Image
              src="/Aboutus/gi-tag.jpg"
              alt="Geographical Indication Tag"
              width={200}
              height={200}
              className="object-contain rounded"
            />
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-[#0f766e] font-[family-name:var(--font-playfair)] mb-4">
              Geographical Indication Registration
            </h3>
            <p className="text-gray-700 leading-relaxed">
              The A.P. Handicrafts Development Corporation has achieved a significant milestone in preserving and promoting the rich cultural heritage of Andhra Pradesh. By securing Geographical Indication (GI) Registration for 11 prominent and traditional crafts, the corporation has ensured legal protection and recognition for these unique art forms. This achievement not only safeguards these traditional crafts but also provides a boost to local artisans, ensuring the continuation of Andhra Pradesh&apos;s artistic legacy for generations to come.
            </p>
          </div>
        </div>
      </div>

      {/* Leaders */}
      <div>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-gradient-to-br from-[#E0AE31] to-[#d97706] rounded-lg flex items-center justify-center">
            <Users className="text-white" size={24} />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-[#0f766e] font-[family-name:var(--font-playfair)]">
            Leadership
          </h3>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              image: '/Aboutus/cbn.jpeg',
              name: 'Sri. Nara Chandrababu Naidu Garu',
              designation: "Hon'ble Chief Minister of Andhra Pradesh",
            },
            {
              image: '/Aboutus/savitha.png',
              name: 'Smt. S. Savitha Garu',
              designation:
                "Hon'ble Minister of BC Welfare, Economically Weaker Sections Welfare, Handlooms & Textiles",
            },
          ].map((leader, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden border-2 border-[#8B7355]/30 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative h-80">
                <Image
                  src={leader.image}
                  alt={leader.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 bg-gradient-to-r from-[#0f766e] to-[#0d9488]">
                <h4 className="font-bold text-lg text-white mb-2 font-[family-name:var(--font-playfair)]">
                  {leader.name}
                </h4>
                <p className="text-sm text-white/90 leading-relaxed">
                  {leader.designation}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
