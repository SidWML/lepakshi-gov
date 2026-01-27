'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import AboutUsTab from './tabs/About-us-page';
import HeritageTab from './tabs/OurHeritage';
import CorporateTab from './tabs/Corporate-Profile';
import ClusterMapTab from './tabs/Cluster-Map';
import Image from 'next/image';
import Link from 'next/link';

type TabType = 'about-us' | 'heritage' | 'corporate' | 'cluster-map';

interface TabContent {
  id: TabType;
  label: string;
}

const tabs: TabContent[] = [
  { id: 'heritage', label: 'Our Heritage' },
  { id: 'about-us', label: 'About us' },
  { id: 'corporate', label: 'Corporate Profile' },
  { id: 'cluster-map', label: 'Cluster Map' },
];

export default function AboutUsPage() {
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
    <div className="min-h-screen bg-white">
      {/* Hero Section with Breadcrumb */}
      <div
        className="w-full h-[300px] relative flex flex-col items-center justify-center"
        style={{
          backgroundImage: "url('/Aboutus/bg.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Page Title in center of hero */}
        <div className="text-center">
          <h1 className="text-white text-7xl font-semibold">{getActiveTabLabel()}</h1>
        </div>
        <div>
          <div className="flex items-center gap-2 text-lg backdrop-blur-sm px-4 py-2 rounded-lg">
            <Link
              href="/"
              className="text-white/90 hover:text-white transition-colors"
            >
              Home
            </Link>
            <span className="text-white/70">/</span>
            <span className="text-white font-large">
              {getActiveTabLabel()}
            </span>
          </div>
        </div>
      </div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Tabs */}
          <aside className="lg:w-1/4">
            <h3 className="text-xl font-bold mb-3 text-gray-800">About Us</h3>
            <div className="rounded-lg p-6 border border-gray-50">
              <nav className="space-y-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => handleTabClick(tab.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${activeTab === tab.id
                        ? 'bg-white text-black font-medium border border-gray-200 shadow-sm'
                        : 'text-gray-700 hover:bg-gray-100 hover:border hover:border-gray-200'
                      }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* Content Area */}
          <main className="lg:w-3/4">
            {activeTab === 'about-us' && <AboutUsTab />}
            {activeTab === 'heritage' && <HeritageTab />}
            {activeTab === 'corporate' && <CorporateTab />}
            {activeTab === 'cluster-map' && <ClusterMapTab />}
          </main>
        </div>
      </div>
    </div>
  );
}