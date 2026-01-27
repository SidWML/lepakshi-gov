'use client';

import React from 'react';
import Link from 'next/link';
import { MapPin, Phone, Mail, ChevronUp } from 'lucide-react';

// Main Footer Component
const Footer: React.FC = () => {
  return (
    <>
      <footer className="bg-[#ffecce]">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-40 py-8 sm:py-10 lg:py-12">
          {/* Desktop Layout - Side by Side */}
          <div className="hidden lg:grid lg:grid-cols-12 gap-12">
            {/* Address Section - Left Column */}
            <div className="lg:col-span-5">
              <h4 className="text-[14px] font-semibold text-gray-900 mb-6 uppercase tracking-[0.05em]">
                ADDRESS
              </h4>
              
              <ul className="space-y-4">
                {/* Location */}
                <li>
                  <Link 
                    href="https://g.co/kgs/JtbmXd4" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 no-underline group"
                  >
                    <div className="flex-shrink-0 mt-0.5">
                      <MapPin className="w-[18px] h-[18px] text-gray-800" />
                    </div>
                    <span className="text-[14px] text-gray-700 leading-[1.6] group-hover:text-gray-900 transition-colors">
                      Lepakshi Handicrafts Emporium Gandhi Nagar, Vijayawada - 520003.
                    </span>
                  </Link>
                </li>

                {/* Phone */}
                <li>
                  <Link 
                    href="tel:+919849900935"
                    className="flex items-start gap-3 no-underline group"
                  >
                    <div className="flex-shrink-0 mt-0.5">
                      <Phone className="w-[18px] h-[18px] text-gray-800" />
                    </div>
                    <span className="text-[14px] text-gray-700 leading-[1.6] group-hover:text-gray-900 transition-colors">
                      Phone: +91 9849900935 | +91 9849900937
                    </span>
                  </Link>
                </li>

                {/* Email */}
                <li>
                  <Link 
                    href="mailto:info@lepakshihandicrafts.gov.in"
                    className="flex items-start gap-3 no-underline group"
                  >
                    <div className="flex-shrink-0 mt-0.5">
                      <Mail className="w-[18px] h-[18px] text-gray-800" />
                    </div>
                    <span className="text-[14px] text-gray-700 leading-[1.6] group-hover:text-gray-900 transition-colors">
                      Email: info@lepakshihandicrafts.gov.in
                    </span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Navigation & Stores Section - Right Column */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-3 gap-8">
                {/* Main Navigation Links - Column 1 */}
                <div>
                  <ul className="space-y-2">
                    <li>
                      <Link 
                        href="/" 
                        className="text-[14px] text-gray-700 hover:text-gray-900 transition-colors leading-[1.6] no-underline block"
>
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/about-us" 
                        className="text-[14px] text-gray-700 hover:text-gray-900 transition-colors leading-[1.6] no-underline block"
                      >
                        About us
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/tenders" 
                        className="text-[14px] text-gray-700 hover:text-gray-900 transition-colors leading-[1.6] no-underline block"
                      >
                        Tenders
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/news-events" 
                        className="text-[14px] text-gray-700 hover:text-gray-900 transition-colors leading-[1.6] no-underline block"
                      >
                        News &amp; Events
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/shop" 
                        className="text-[14px] text-gray-700 hover:text-gray-900 transition-colors leading-[1.6] no-underline block"
                      >
                        Products
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/artisan-info" 
                        className="text-[14px] text-gray-700 hover:text-gray-900 transition-colors leading-[1.6] no-underline block"
                      >
                        Artisan Desk
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Our Stores - Column 2 */}
                <div>
                  <h4 className="text-[14px] font-semibold text-gray-900 uppercase tracking-[0.05em] mb-2">
                    OUR STORES
                  </h4>
                  <ul className="space-y-2">
                    <li>
                      <Link 
                        href="/contact-us" 
                        className="text-[14px] text-gray-700 hover:text-gray-900 transition-colors leading-[1.6] no-underline block"
                      >
                        Vijayawada
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/contact-us" 
                        className="text-[14px] text-gray-700 hover:text-gray-900 transition-colors leading-[1.6] no-underline block"
                      >
                        Ananathapur
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/contact-us" 
                        className="text-[14px] text-gray-700 hover:text-gray-900 transition-colors leading-[1.6] no-underline block"
                      >
                        Guntur
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/contact-us" 
                        className="text-[14px] text-gray-700 hover:text-gray-900 transition-colors leading-[1.6] no-underline block"
                      >
                        Visakhapatnam
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/contact-us" 
                        className="text-[14px] text-gray-700 hover:text-gray-900 transition-colors leading-[1.6] no-underline block"
                      >
                        Rajahmundry
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Our Stores - Column 3 */}
                <div>
                  <ul className="space-y-2">
                    <li>
                      <Link 
                        href="/contact-us" 
                        className="text-[14px] text-gray-700 hover:text-gray-900 transition-colors leading-[1.6] no-underline block"
                      >
                        Chittoor
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/contact-us" 
                        className="text-[14px] text-gray-700 hover:text-gray-900 transition-colors leading-[1.6] no-underline block"
                      >
                        Kurnool
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/contact-us" 
                        className="text-[14px] text-gray-700 hover:text-gray-900 transition-colors leading-[1.6] no-underline block"
                      >
                        Kadapa
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/contact-us" 
                        className="text-[14px] text-gray-700 hover:text-gray-900 transition-colors leading-[1.6] no-underline block"
                      >
                        Tirupathi
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/contact-us" 
                        className="text-[14px] text-gray-700 hover:text-gray-900 transition-colors leading-[1.6] no-underline block"
                      >
                        Hyderabad
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/contact-us" 
                        className="text-[14px] text-gray-700 hover:text-gray-900 transition-colors leading-[1.6] no-underline block"
                      >
                        Kolkata
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Layout - Stacked Vertically */}
          <div className="lg:hidden">
            {/* Address Section */}
            <div className="mb-6">
              <h4 className="text-[14px] font-semibold text-gray-900 mb-3 uppercase tracking-[0.05em]">
                ADDRESS
              </h4>
              
              <ul className="space-y-2.5">
                {/* Location */}
                <li>
                  <Link 
                    href="https://g.co/kgs/JtbmXd4" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-2.5 no-underline group"
                  >
                    <div className="flex-shrink-0 mt-0.5">
                      <MapPin className="w-[17px] h-[17px] text-gray-800" />
                    </div>
                    <span className="text-[13.5px] text-gray-700 leading-[1.5] group-hover:text-gray-900 transition-colors">
                      Lepakshi Handicrafts Emporium Gandhi Nagar, Vijayawada - 520003.
                    </span>
                  </Link>
                </li>

                {/* Phone */}
                <li>
                  <Link 
                    href="tel:+919849900935"
                    className="flex items-start gap-2.5 no-underline group"
                  >
                    <div className="flex-shrink-0 mt-0.5">
                      <Phone className="w-[17px] h-[17px] text-gray-800" />
                    </div>
                    <span className="text-[13.5px] text-gray-700 leading-[1.5] group-hover:text-gray-900 transition-colors">
                      Phone: +91 9849900935 | +91 9849900937
                    </span>
                  </Link>
                </li>

                {/* Email */}
                <li>
                  <Link 
                    href="mailto:info@lepakshihandicrafts.gov.in"
                    className="flex items-start gap-2.5 no-underline group"
                  >
                    <div className="flex-shrink-0 mt-0.5">
                      <Mail className="w-[17px] h-[17px] text-gray-800" />
                    </div>
                    <span className="text-[13.5px] text-gray-700 leading-[1.5] group-hover:text-gray-900 transition-colors">
                      Email: info@lepakshihandicrafts.gov.in
                    </span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Main Navigation Links */}
            <div className="mb-6">
              <ul className="space-y-1.5">
                <li>
                  <Link 
                    href="/" 
                    className="text-[13.5px] text-gray-700 hover:text-gray-900 transition-colors leading-[1.5] no-underline block py-0.5"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/about-us" 
                    className="text-[13.5px] text-gray-700 hover:text-gray-900 transition-colors leading-[1.5] no-underline block py-0.5"
                  >
                    About us
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/tenders" 
                    className="text-[13.5px] text-gray-700 hover:text-gray-900 transition-colors leading-[1.5] no-underline block py-0.5"
                  >
                    Tenders
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/news-events" 
                    className="text-[13.5px] text-gray-700 hover:text-gray-900 transition-colors leading-[1.5] no-underline block py-0.5"
                  >
                    News &amp; Events
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/shop" 
                    className="text-[13.5px] text-gray-700 hover:text-gray-900 transition-colors leading-[1.5] no-underline block py-0.5"
                  >
                    Products
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/artisan-info" 
                    className="text-[13.5px] text-gray-700 hover:text-gray-900 transition-colors leading-[1.5] no-underline block py-0.5"
                  >
                    Artisan Desk
                  </Link>
                </li>
              </ul>
            </div>

            {/* Our Stores Section */}
            <div>
              <h4 className="text-[14px] font-semibold text-gray-900 mb-3 uppercase tracking-[0.05em]">
                OUR STORES
              </h4>
              <div className="grid grid-cols-3 gap-x-4 gap-y-1.5">
                <div>
                  <ul className="space-y-1.5">
                    <li>
                      <Link 
                        href="/contact-us" 
                        className="text-[13.5px] text-gray-700 hover:text-gray-900 transition-colors leading-[1.5] no-underline block py-0.5"
                      >
                        Vijayawada
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/contact-us" 
                        className="text-[13.5px] text-gray-700 hover:text-gray-900 transition-colors leading-[1.5] no-underline block py-0.5"
                      >
                        Ananathapur
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/contact-us" 
                        className="text-[13.5px] text-gray-700 hover:text-gray-900 transition-colors leading-[1.5] no-underline block py-0.5"
                      >
                        Guntur
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/contact-us" 
                        className="text-[13.5px] text-gray-700 hover:text-gray-900 transition-colors leading-[1.5] no-underline block py-0.5"
                      >
                        Visakhapatnam
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/contact-us" 
                        className="text-[13.5px] text-gray-700 hover:text-gray-900 transition-colors leading-[1.5] no-underline block py-0.5"
                      >
                        Rajahmundry
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="space-y-1.5">
                    <li>
                      <Link 
                        href="/contact-us" 
                        className="text-[13.5px] text-gray-700 hover:text-gray-900 transition-colors leading-[1.5] no-underline block py-0.5"
                      >
                        Chittoor
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/contact-us" 
                        className="text-[13.5px] text-gray-700 hover:text-gray-900 transition-colors leading-[1.5] no-underline block py-0.5"
                      >
                        Kurnool
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/contact-us" 
                        className="text-[13.5px] text-gray-700 hover:text-gray-900 transition-colors leading-[1.5] no-underline block py-0.5"
                      >
                        Kadapa
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/contact-us" 
                        className="text-[13.5px] text-gray-700 hover:text-gray-900 transition-colors leading-[1.5] no-underline block py-0.5"
                      >
                        Tirupathi
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="space-y-1.5">
                    <li>
                      <Link 
                        href="/contact-us" 
                        className="text-[13.5px] text-gray-700 hover:text-gray-900 transition-colors leading-[1.5] no-underline block py-0.5"
                      >
                        Hyderabad
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/contact-us" 
                        className="text-[13.5px] text-gray-700 hover:text-gray-900 transition-colors leading-[1.5] no-underline block py-0.5"
                      >
                        Kolkata
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="bg-[#e8d9c0] py-3 sm:py-4">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="text-gray-700 text-[12px] sm:text-[13px] leading-[1.6] m-0">
                &copy; 2024 Lepakshi Handicrafts. All Rights Reserved
              </p>
            </div>
          </div>
        </div>

        {/* Scroll to Top Button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow z-50"
          aria-label="Scroll to top"
        >
          <ChevronUp className="w-5 h-5 text-gray-800" />
        </button>
      </footer>
    </>
  );
};

export default Footer;