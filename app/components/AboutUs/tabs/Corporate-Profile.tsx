import Image from 'next/image';

export default function CorporateTab() {
  return (
    <div>
      <div className="mb-4">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
        <p className="text-gray-700 text-lg">
          An Empowered Artisan Community Thriving in an 'Enabling' Environment
        </p>
      </div>

      <div className='mb-4'>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Objectives</h3>
        <ul className="space-y-2 text-gray-700 leading-relaxed list-disc list-inside">
          <li>Develop and promote handicrafts.</li>
          <li>Undertake marketing of handicrafts.</li>
          <li>
            Promote and establish showrooms, organize exhibitions, cause wide publicity of
            Handicrafts and
          </li>
          <li>Undertake welfare activities for the benefit of the artisans.</li>
        </ul>
      </div>

      <div className='mb-4'>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Marketing</h3>
        <ul className="space-y-2 text-gray-700 leading-relaxed list-disc list-inside">
          <li>'Lepakshi' Retail Showrooms.</li>
          <li>Craft Bazaars, Exhibitions, Craft Melas and EXPOs</li>
          <li>Participation in Domestic & International Trade Fairs</li>
          <li>Opening of new sales outlets etc.</li>
          <li>Reciprocal arrangements with other State Handicrafts Developement Corporations.</li>
        </ul>
      </div>

      <div className='mb-4'>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Promotion & Development</h3>
        <ul className="space-y-2 text-gray-700 leading-relaxed list-disc list-inside">
          <li>
            Training of artisans for upgrading their skills, increasing production base and revival
            of languishing crafts.
          </li>
          <li>
            Common Facility Service Centres (CFSCs) at Onipenta, Kadapa District & Bobbili,
            Vijayanagaram District. To Provide infrastructural facilities, Tools, Machinery & Design
            inputs to the artisans.
          </li>
          <li>
            Design and Technical Workshops to Provide design and technological inputs to the
            artisans.
          </li>
          <li>
            Publicity through Electronic and Print Media, Brochures, Hoardings, Ad. Films, Website,
            etc.
          </li>
        </ul>
      </div>

      <div className='mb-4'>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Welfare</h3>
        <ul className="space-y-2 text-gray-700 leading-relaxed list-disc list-inside">
          <li>
            Pensions are sanctioned to the old & economically poor artisans above 60 years, from out
            of internal resources
          </li>
          <li>State Level Excellence Awards to the outstanding artisans.</li>
        </ul>
      </div>

      <div className='mb-4'>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Who's who</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-3 px-4 text-left border-b font-semibold text-gray-900">
                  Designation
                </th>
                <th className="py-3 px-4 text-left border-b font-semibold text-gray-900">Name</th>
                <th className="py-3 px-4 text-left border-b font-semibold text-gray-900">Number</th>
                <th className="py-3 px-4 text-left border-b font-semibold text-gray-900">Email</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-gray-50">
                <td className="py-3 px-4 border-b text-gray-700">VC & Managing Director</td>
                <td className="py-3 px-4 border-b text-gray-700">Sri. Vishwa.M</td>
                <td className="py-3 px-4 border-b text-gray-700">08662578099</td>
                <td className="py-3 px-4 border-b text-gray-700">md.aphdc@gmail.com</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-3 px-4 border-b text-gray-700">
                  I/c Manager(Administration & Technical)
                </td>
                <td className="py-3 px-4 border-b text-gray-700">Sri.M.Dhilleswara Rao</td>
                <td className="py-3 px-4 border-b text-gray-700">9010182307</td>
                <td className="py-3 px-4 border-b text-gray-700">apadmin.lepakshi@gmail.com</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-3 px-4 border-b text-gray-700">
                  I/c Manager(Marketing & Accounts)
                </td>
                <td className="py-3 px-4 border-b text-gray-700">Sri.SVNJ Sridharacharyulu</td>
                <td className="py-3 px-4 border-b text-gray-700">9848096021</td>
                <td className="py-3 px-4 border-b text-gray-700">accounts.aphdcltd@yahoo.com</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-3 px-4 border-b text-gray-700">
                  I/c Manager(Finance & development)
                </td>
                <td className="py-3 px-4 border-b text-gray-700">Sri.B.P.Venkatesam</td>
                <td className="py-3 px-4 border-b text-gray-700">9059981048</td>
                <td className="py-3 px-4 border-b text-gray-700">finance.gst2024@yahoo.com</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-3 px-4 border-b text-gray-700">
                  I/c Manager(Training & Exhibition)
                </td>
                <td className="py-3 px-4 border-b text-gray-700">Sri.Ch. Veera Babu</td>
                <td className="py-3 px-4 border-b text-gray-700">9849034970</td>
                <td className="py-3 px-4 border-b text-gray-700">secl.aphdcltd@yahoo.com</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Organization Chart</h3>
        <div className="p-8 rounded-lg text-center">
          <Image
            src="/Aboutus/organization-chart.png"
            alt="Organization Chart"
            width={800}
            height={600}
            className="mx-auto"
          />
        </div>
      </div>
    </div>
  );
}