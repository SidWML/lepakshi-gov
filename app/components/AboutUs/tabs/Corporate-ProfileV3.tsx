import Image from 'next/image';
import { Target, TrendingUp, Award, Heart, Users } from 'lucide-react';

export default function CorporateTabV3() {
  return (
    <div className="space-y-10">
      {/* Vision */}
      <div className="bg-gradient-to-r from-[#0f766e] to-[#0d9488] p-8 md:p-10 rounded-lg text-center text-white shadow-xl">
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
            <Target className="text-white" size={32} />
          </div>
        </div>
        <h3 className="text-3xl md:text-4xl font-bold mb-4 font-[family-name:var(--font-playfair)]">
          Our Vision
        </h3>
        <p className="text-white/95 text-xl md:text-2xl font-medium max-w-3xl mx-auto">
          An Empowered Artisan Community Thriving in an 'Enabling' Environment
        </p>
      </div>

      {/* Objectives */}
      <div>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-gradient-to-br from-[#E0AE31] to-[#d97706] rounded-lg flex items-center justify-center">
            <Award className="text-white" size={24} />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-[#0f766e] font-[family-name:var(--font-playfair)]">
            Objectives
          </h3>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            'Develop and promote handicrafts.',
            'Undertake marketing of handicrafts.',
            'Promote and establish showrooms, organize exhibitions, cause wide publicity of Handicrafts.',
            'Undertake welfare activities for the benefit of the artisans.',
          ].map((objective, index) => (
            <div key={index} className="bg-white p-5 rounded-lg border-2 border-[#8B7355]/20 hover:border-[#E0AE31] transition-colors duration-300 flex gap-4">
              <div className="w-8 h-8 bg-gradient-to-br from-[#0f766e] to-[#0d9488] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">
                {index + 1}
              </div>
              <p className="text-gray-700">{objective}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Marketing */}
      <div className="bg-gradient-to-br from-[#F5ECE3] to-[#FAF8F3] p-8 rounded-lg border-l-4 border-[#E0AE31]">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-gradient-to-br from-[#0f766e] to-[#0d9488] rounded-lg flex items-center justify-center">
            <TrendingUp className="text-white" size={24} />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-[#0f766e] font-[family-name:var(--font-playfair)]">
            Marketing
          </h3>
        </div>
        <ul className="space-y-3">
          {[
            "'Lepakshi' Retail Showrooms.",
            'Craft Bazaars, Exhibitions, Craft Melas and EXPOs',
            'Participation in Domestic & International Trade Fairs',
            'Opening of new sales outlets etc.',
            'Reciprocal arrangements with other State Handicrafts Development Corporations.',
          ].map((item, index) => (
            <li key={index} className="flex gap-3 text-gray-700 text-lg">
              <span className="text-[#E0AE31] font-bold">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Promotion & Development */}
      <div className="bg-white p-8 rounded-lg border-2 border-[#8B7355]/30 shadow-lg">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-gradient-to-br from-[#d97706] to-[#E0AE31] rounded-lg flex items-center justify-center">
            <Users className="text-white" size={24} />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-[#0f766e] font-[family-name:var(--font-playfair)]">
            Promotion & Development
          </h3>
        </div>
        <div className="space-y-4">
          {[
            'Training of artisans for upgrading their skills, increasing production base and revival of languishing crafts.',
            'Common Facility Service Centres (CFSCs) at Onipenta, Kadapa District & Bobbili, Vijayanagaram District. To Provide infrastructural facilities, Tools, Machinery & Design inputs to the artisans.',
            'Design and Technical Workshops to Provide design and technological inputs to the artisans.',
            'Publicity through Electronic and Print Media, Brochures, Hoardings, Ad. Films, Website, etc.',
          ].map((item, index) => (
            <div key={index} className="flex gap-4 bg-gradient-to-r from-[#F5ECE3]/50 to-transparent p-4 rounded-lg">
              <div className="w-2 bg-gradient-to-b from-[#E0AE31] to-[#d97706] rounded-full flex-shrink-0" />
              <p className="text-gray-700">{item}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Welfare */}
      <div className="bg-gradient-to-r from-[#E0AE31]/10 to-[#d97706]/10 p-8 rounded-lg border-2 border-[#E0AE31]/30">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-gradient-to-br from-[#E0AE31] to-[#d97706] rounded-lg flex items-center justify-center">
            <Heart className="text-white" size={24} />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-[#0f766e] font-[family-name:var(--font-playfair)]">
            Welfare
          </h3>
        </div>
        <ul className="space-y-4">
          {[
            'Pensions are sanctioned to the old & economically poor artisans above 60 years, from out of internal resources',
            'State Level Excellence Awards to the outstanding artisans.',
          ].map((item, index) => (
            <li key={index} className="flex gap-4 bg-white p-5 rounded-lg shadow-sm">
              <div className="w-8 h-8 bg-gradient-to-br from-[#0f766e] to-[#0d9488] rounded-full flex items-center justify-center flex-shrink-0">
                <Heart className="text-white" size={16} />
              </div>
              <p className="text-gray-700 text-lg">{item}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Who's who */}
      <div>
        <h3 className="text-2xl md:text-3xl font-bold text-[#0f766e] mb-6 font-[family-name:var(--font-playfair)]">
          Who's Who
        </h3>
        <div className="overflow-x-auto rounded-lg border-2 border-[#8B7355]/30 shadow-lg">
          <table className="min-w-full bg-white">
            <thead>
              <tr className="bg-gradient-to-r from-[#0f766e] to-[#0d9488] text-white">
                <th className="py-4 px-6 text-left font-bold">Designation</th>
                <th className="py-4 px-6 text-left font-bold">Name</th>
                <th className="py-4 px-6 text-left font-bold">Number</th>
                <th className="py-4 px-6 text-left font-bold">Email</th>
              </tr>
            </thead>
            <tbody>
              {[
                { designation: 'VC & Managing Director', name: 'Sri. Vishwa.M', number: '08662578099', email: 'md.aphdc@gmail.com' },
                { designation: 'I/c Manager(Administration & Technical)', name: 'Sri.M.Dhilleswara Rao', number: '9010182307', email: 'apadmin.lepakshi@gmail.com' },
                { designation: 'I/c Manager(Marketing & Accounts)', name: 'Sri.SVNJ Sridharacharyulu', number: '9848096021', email: 'accounts.aphdcltd@yahoo.com' },
                { designation: 'I/c Manager(Finance & development)', name: 'Sri.B.P.Venkatesam', number: '9059981048', email: 'finance.gst2024@yahoo.com' },
                { designation: 'I/c Manager(Training & Exhibition)', name: 'Sri.Ch. Veera Babu', number: '9849034970', email: 'secl.aphdcltd@yahoo.com' },
              ].map((person, index) => (
                <tr key={index} className={`border-b border-[#8B7355]/10 hover:bg-[#F5ECE3]/50 transition-colors ${index % 2 === 0 ? 'bg-white' : 'bg-[#FAF8F3]'}`}>
                  <td className="py-4 px-6 text-gray-700 font-medium">{person.designation}</td>
                  <td className="py-4 px-6 text-gray-700">{person.name}</td>
                  <td className="py-4 px-6 text-gray-700">{person.number}</td>
                  <td className="py-4 px-6 text-[#0f766e] hover:text-[#d97706] transition-colors">
                    <a href={`mailto:${person.email}`}>{person.email}</a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Organization Chart */}
      <div className="bg-white p-8 rounded-lg border-2 border-[#8B7355]/30 shadow-lg">
        <h3 className="text-2xl md:text-3xl font-bold text-[#0f766e] mb-6 font-[family-name:var(--font-playfair)] text-center">
          Organization Chart
        </h3>
        <div className="flex justify-center">
          <Image
            src="/Aboutus/organization-chart.png"
            alt="Organization Chart"
            width={800}
            height={600}
            className="max-w-full h-auto rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
