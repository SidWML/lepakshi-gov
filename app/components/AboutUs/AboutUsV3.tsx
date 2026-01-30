'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import AboutUsTabV3 from './tabs/About-us-pageV3';
import HeritageTabV3 from './tabs/OurHeritageV3';
import CorporateTabV3 from './tabs/Corporate-ProfileV3';
import ClusterMapTabV3 from './tabs/Cluster-MapV3';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

type TabType = 'about-us' | 'heritage' | 'corporate' | 'cluster-map';

interface TabContent {
  id: TabType;
  label: string;
}

const tabs: TabContent[] = [
  { id: 'about-us', label: 'About Us' },
  { id: 'heritage', label: 'Our Heritage' },
  { id: 'corporate', label: 'Corporate Profile' },
  { id: 'cluster-map', label: 'Cluster Map' },
];

export default function AboutUsV3() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState<TabType>('about-us');

  // Get tab from URL on initial load
  useEffect(() => {
    const tabFromUrl = searchParams.get('tab') as TabType;
    if (tabFromUrl && tabs.some(tab => tab.id === tabFromUrl)) {
      setActiveTab(tabFromUrl);
    }
  }, [searchParams]);

  const getActiveTabLabel = () => {
    return tabs.find(tab => tab.id === activeTab)?.label || 'About Us';
  };

  const handleTabClick = (tabId: TabType) => {
    setActiveTab(tabId);
    // Update URL with the tab parameter
    router.push(`/aboutus?tab=${tabId}`, { scroll: false });
  };

  return (
    <div className="min-h-screen bg-[#F5ECE3]">
      {/* Hero Section */}
      <div
        className="w-full h-[400px] md:h-[500px] relative flex flex-col items-center justify-center"
        style={{
          backgroundImage: "url('/Aboutus/bg.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#103248]/95 via-[#103248]/80 to-[#103248]/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#103248]/90 via-transparent to-[#103248]/50" />

        {/* Content */}
        <div className="relative z-10 text-center px-6 mt-20 md:mt-0">
          {/* Small Badge */}
          <div className="inline-flex items-center gap-3 text-[#E0AE31] text-xs tracking-[0.3em] uppercase font-semibold mb-4">
            <span className="w-12 h-px bg-[#E0AE31]" />
            Andhra Pradesh Handicrafts
            <span className="w-12 h-px bg-[#E0AE31]" />
          </div>

          {/* Page Title */}
          <h1 className="text-white text-5xl md:text-7xl font-bold mb-6 font-[family-name:var(--font-playfair)]">
            {getActiveTabLabel()}
          </h1>

          {/* Breadcrumb */}
          <div className="flex items-center justify-center gap-2 text-base">
            <Link
              href="/"
              className="text-white/80 hover:text-[#E0AE31] transition-colors flex items-center gap-1"
            >
              <Home size={16} />
              Home
            </Link>
            <ChevronRight size={16} className="text-white/50" />
            <span className="text-[#E0AE31] font-medium">
              {getActiveTabLabel()}
            </span>
          </div>
        </div>

        {/* Decorative Border */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#E0AE31] via-[#d97706] to-[#E0AE31]" />
      </div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Tabs */}
          <aside className="lg:w-1/4">
            <div className="bg-white rounded-lg border-2 border-[#8B7355]/30 overflow-hidden sticky top-24">
              {/* Sidebar Header */}
              <div className="bg-gradient-to-r from-[#0f766e] to-[#0d9488] px-6 py-4">
                <h3 className="text-xl font-bold text-white font-[family-name:var(--font-playfair)]">
                  About Us
                </h3>
              </div>

              {/* Navigation */}
              <nav className="p-4 space-y-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => handleTabClick(tab.id)}
                    className={`w-full text-left px-5 py-3.5 rounded-lg transition-all duration-300 flex items-center justify-between group ${
                      activeTab === tab.id
                        ? 'bg-[#E0AE31] text-white font-semibold shadow-md'
                        : 'text-gray-700 hover:bg-[#F5ECE3] border border-transparent hover:border-[#8B7355]/20'
                    }`}
                  >
                    <span>{tab.label}</span>
                    <ChevronRight
                      size={18}
                      className={`transition-transform ${
                        activeTab === tab.id ? 'translate-x-1' : 'group-hover:translate-x-1'
                      }`}
                    />
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* Content Area */}
          <main className="lg:w-3/4">
            <div className="bg-white rounded-lg border-2 border-[#8B7355]/30 p-8 md:p-10 shadow-sm">
              {activeTab === 'about-us' && <AboutUsTabV3 />}
              {activeTab === 'heritage' && <HeritageTabV3 />}
              {activeTab === 'corporate' && <CorporateTabV3 />}
              {activeTab === 'cluster-map' && <ClusterMapTabV3 />}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
