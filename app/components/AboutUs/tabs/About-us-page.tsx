import Image from 'next/image';

export default function AboutUsPage() {
  return (
    <section className="w-full">

      {/* Content Section */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Intro */}
        <div className="grid md:grid-cols-[300px_1fr] gap-10 items-start">
          <Image
            src="/Aboutus/lord-balaji-wood-carving.png"
            alt="Lord Balaji Wood Carving"
            width={280}
            height={420}
            className="object-contain"
          />

          <div className='text-center'>
            <div className="flex justify-center mb-4">
              <Image
                src="/Aboutus/food-image-rosemary.png"
                alt="Rosemary Decorative Element"
                width={93}
                height={65}
                className="object-contain"
              />
            </div>
            <p className="text-blue-600 text-3xl italic mb-1">Welcome to Lepakshi Handicrafts</p>
            <h2 className="text-5xl font-semibold mb-3 text-black">
              Empowering Artisans <span className="font-normal">Since 1982</span>
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Lepakshi Handicrafts, a proud undertaking of the Andhra Pradesh Government, stands as a beacon of artistic excellence and cultural preservation. Established in 1982 as A.P. Handicrafts Development Corporation Limited, we have dedicated ourselves to showcasing and nurturing the rich tapestry of Andhra Pradesh's artistic heritage.
            </p>
          </div>
        </div>

        {/* Our Heritage - Updated with full text */}
        <div className="mt-12">
          <h3 className="text-xl font-semibold mb-3 text-black">Our Heritage:</h3>
          <p className="text-gray-700 leading-relaxed">
            Rooted in the lush forests and vibrant traditions of Andhra Pradesh, Lepakshi Handicrafts is a treasure trove of fascinating art forms and traditional crafts. Each piece in our collection tells a story, unique in style, concept, theme, and form. From the intricate woodcarvings that harness the state's abundant forest resources to the vibrant Kalamkari textiles, our products embody the innate creativity and durability that have been hallmarks of Andhra Pradesh's artistic legacy for generations.
          </p>
        </div>

        {/* Our Collection - Updated with detailed list */}
        <div className="mt-10">
          <h3 className="text-xl font-semibold mb-3 text-black">Our Collection:</h3>
          <p className="text-gray-700 mb-4">
            Step into the world of Lepakshi, and you'll find yourself surrounded by an awe-inspiring array of handicrafts:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 pl-4">
            <li><span className="font-medium">Woodcarvings:</span> Exquisite idols and mythological forms, alongside practical utility items</li>
            <li><span className="font-medium">Kalamkari:</span> Intricate hand-painted or block-printed cotton textiles</li>
            <li><span className="font-medium">Udayagiri Crafts:</span> Known for their unique style and craftsmanship</li>
            <li><span className="font-medium">Kondapalli Toys:</span> Charming wooden figurines that have delighted generations</li>
            <li><span className="font-medium">Brassware:</span> Gleaming metalwork showcasing intricate designs</li>
            <li><span className="font-medium">Red Sander Idols:</span> Crafted from the prized red sandalwood</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mt-4">
            From tiny trinkets to large life-sized idols, Lepakshi offers a comprehensive range that captures the essence of Andhra Pradesh's rich artistic tradition.
          </p>
        </div>

        {/* Our Mission - Updated with full details */}
        <div className="mt-10">
          <h3 className="text-xl font-semibold mb-3 text-black">Our Mission:</h3>
          <p className="text-gray-700 mb-4">
            At Lepakshi, we are driven by a multifaceted mission:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 pl-4">
            <li><span className="font-medium">Development and Promotion:</span> We strive to develop and promote handicrafts, ensuring the survival and growth of traditional art forms.</li>
            <li><span className="font-medium">Marketing Support:</span> Through our extensive network of showrooms, exhibitions, and online platforms, we provide crucial marketing support to artisans.</li>
            <li><span className="font-medium">Skill Enhancement:</span> We organize training programs and workshops to upgrade artisans' skills, helping them adapt to changing market demands.</li>
            <li><span className="font-medium">Revival of Languishing Crafts:</span> We are committed to breathing new life into forgotten or declining craft forms.</li>
            <li><span className="font-medium">Welfare Activities:</span> We undertake various initiatives to improve the lives of approximately 200,000 artisans across the state.</li>
          </ul>
        </div>

        {/* NEW SECTION: Our Approach */}
        <div className="mt-10">
          <h3 className="text-xl font-semibold mb-3 text-black">Our Approach:</h3>
          <p className="text-gray-700 mb-4">
            To achieve our objectives, we employ a comprehensive strategy:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 pl-4">
            <li><span className="font-medium">Retail Network:</span> We operate Lepakshi Retail Showrooms across the state, providing a direct market for artisans' products.</li>
            <li><span className="font-medium">Exhibitions and Craft Bazaars:</span> We organize and participate in numerous events, including Craft Melas and EXPOS, to showcase our products to a wider audience.</li>
            <li><span className="font-medium">Collaborations:</span> We have reciprocal arrangements with other State Handicrafts Development Corporations, expanding our reach and product diversity.</li>
            <li><span className="font-medium">Technical Workshops:</span> We provide design and technological inputs to artisans through specialized workshops.</li>
            <li><span className="font-medium">Infrastructure Support:</span> We offer tools, machinery, and design inputs to artisans, helping them improve their craft.</li>
            <li><span className="font-medium">Marketing Initiatives:</span> We leverage various marketing channels, including electronic and print media, brochures, hoardings, and ad films.</li>
            <li><span className="font-medium">Digital Presence:</span> We're embracing technology to showcase and sell our products, making Lepakshi more accessible in the digital era.</li>
          </ul>
        </div>

        {/* NEW SECTION: Our Impact */}
        <div className="mt-10">
          <h3 className="text-xl font-semibold mb-3 text-black">Our Impact:</h3>
          <p className="text-gray-700 leading-relaxed">
            Through our efforts, Lepakshi products have gained immense popularity, enjoying impressive customer patronage and demand. We've successfully leveraged our unique strengths to deliver greater value for the arts and crafts of Andhra Pradesh. Working in tandem with the government, we're realizing the full potential of these traditional products in the modern market.
          </p>
        </div>

        {/* GI Section - Updated with full text */}
        <div className="mt-12 grid md:grid-cols-[200px_1fr] gap-8 items-start">
          <Image
            src="/Aboutus/gi-tag.jpg"
            alt="Geographical Indication Tag"
            width={180}
            height={180}
            className="object-contain"
          />
          <div>
            <h3 className="text-xl font-semibold mb-3 text-black">Geographical Indication Registration</h3>
            <p className="text-gray-700 leading-relaxed">
              The A.P. Handicrafts Development Corporation has achieved a significant milestone in preserving and promoting the rich cultural heritage of Andhra Pradesh. By securing Geographical Indication (GI) Registration for 11 prominent and traditional crafts, the corporation has ensured legal protection and recognition for these unique art forms. This impressive list includes a diverse range of crafts, from the intricate Allagadda Stone Carving and the mesmerizing Leather Puppetry to the melodious Bobbili Veena and the lustrous Budithi Brass work. The GI status also covers the delicate Durgi Stone Carvings, colorful Etikoppaka Toys, and the beloved Kondapalli Bommalu (dolls). The exquisite textile arts of Machilipatnam and Srikalahasti Kalamkari, along with the elegant Uppada Jamdani Sarees and the intricate Croched Lace, round out this remarkable collection. This achievement not only safeguards these traditional crafts but also provides a boost to local artisans, ensuring the continuation of Andhra Pradesh's artistic legacy for generations to come.
            </p>
          </div>
        </div>

        {/* Leaders */}
        <div className="mt-16 grid md:grid-cols-2 gap-12 text-center">
          <div className='shadow-lg'>
            <Image
              src="/Aboutus/cbn.jpeg"
              alt="Sri. Nara Chandrababu Naidu Garu"
              width={220}
              height={320}
              className="mx-auto rounded-lg object-cover"
            />
            <h4 className="mt-4 font-semibold text-lg text-black">Sri. Nara Chandrababu Naidu Garu</h4>
            <p className="text-sm text-gray-600">Hon'ble Chief Minister of Andhra Pradesh</p>
          </div>

          <div className='shadow-lg'>
            <Image
              src="/Aboutus/savitha.png"
              alt="Smt. S. Savitha Garu"
              width={220}
              height={320}
              className="mx-auto rounded-lg object-cover"
            />
            <h4 className="mt-4 font-semibold text-lg text-black">Smt. S. Savitha Garu</h4>
            <p className="text-sm text-gray-600">
              Hon'ble Minister of BC Welfare, Economically Weaker Sections Welfare, Handlooms & Textiles
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}