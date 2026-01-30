import Image from 'next/image';
import { Map } from 'lucide-react';

export default function ClusterMapTabV3() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="w-12 h-12 bg-gradient-to-br from-[#0f766e] to-[#0d9488] rounded-lg flex items-center justify-center">
            <Map className="text-white" size={24} />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-[#0f766e] font-[family-name:var(--font-playfair)]">
            Cluster Map
          </h3>
        </div>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          Explore the geographical distribution of Andhra Pradesh's rich handicraft clusters across the state
        </p>
      </div>

      {/* Map Container */}
      <div className="bg-white p-6 md:p-8 rounded-lg border-2 border-[#8B7355]/30 shadow-xl">
        <div className="relative">
          {/* Decorative corners */}
          <div className="absolute -top-2 -left-2 w-8 h-8 border-t-4 border-l-4 border-[#E0AE31] rounded-tl-lg" />
          <div className="absolute -top-2 -right-2 w-8 h-8 border-t-4 border-r-4 border-[#E0AE31] rounded-tr-lg" />
          <div className="absolute -bottom-2 -left-2 w-8 h-8 border-b-4 border-l-4 border-[#E0AE31] rounded-bl-lg" />
          <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-4 border-r-4 border-[#E0AE31] rounded-br-lg" />

          <Image
            src="/Aboutus/cluster-map.jpg"
            alt="Cluster Map of Andhra Pradesh Handicrafts"
            width={1200}
            height={800}
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>

      {/* Info Cards */}
      <div className="grid md:grid-cols-3 gap-6 mt-8">
        <div className="bg-gradient-to-br from-[#0f766e]/10 to-[#0d9488]/10 p-6 rounded-lg border-2 border-[#0f766e]/20 text-center">
          <div className="text-3xl font-bold text-[#0f766e] mb-2 font-[family-name:var(--font-playfair)]">
            200K+
          </div>
          <div className="text-gray-700 font-medium">Artisans</div>
        </div>
        <div className="bg-gradient-to-br from-[#E0AE31]/10 to-[#d97706]/10 p-6 rounded-lg border-2 border-[#E0AE31]/30 text-center">
          <div className="text-3xl font-bold text-[#d97706] mb-2 font-[family-name:var(--font-playfair)]">
            11+
          </div>
          <div className="text-gray-700 font-medium">GI Tagged Crafts</div>
        </div>
        <div className="bg-gradient-to-br from-[#F5ECE3] to-[#FAF8F3] p-6 rounded-lg border-2 border-[#8B7355]/20 text-center">
          <div className="text-3xl font-bold text-[#0f766e] mb-2 font-[family-name:var(--font-playfair)]">
            50+
          </div>
          <div className="text-gray-700 font-medium">Craft Clusters</div>
        </div>
      </div>

      {/* Legend Note */}
      <div className="bg-gradient-to-r from-[#E0AE31]/10 to-[#d97706]/10 p-6 rounded-lg border-l-4 border-[#E0AE31]">
        <p className="text-gray-700 text-lg">
          <span className="font-bold text-[#0f766e]">Note:</span> The cluster map showcases the diverse handicraft traditions
          spread across Andhra Pradesh, highlighting the geographical concentration of various craft forms
          and the artisan communities that preserve these traditional skills.
        </p>
      </div>
    </div>
  );
}
