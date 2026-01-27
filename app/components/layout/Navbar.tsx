"use client";

import Image from "next/image";
import {
  Search,
  Menu,
  ChevronDown,
} from "lucide-react";
import { useState } from "react";

type SocialLink = {
  name: string;
  href: string;
  aria: string;
  Icon: React.ElementType;
};

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "HOME", href: "/" },
    { label: "ABOUT US", href: "/about", hasDropdown: true },
    { label: "PRODUCTS", href: "/products", hasDropdown: true },
    { label: "ARTISAN DESK", href: "/artisan-desk", hasDropdown: true },
    { label: "NEWS & EVENTS", href: "/news-events" },
    { label: "DOWNLOADS", href: "/downloads" },
    { label: "TENDERS", href: "/tenders" },
    { label: "E-SHOP", href: "/e-shop", hasDropdown: true },
    { label: "CONTACT US", href: "/contact" },
  ];

  const socialLinks: SocialLink[] = [
    {
      name: "facebook",
      href: "https://www.facebook.com/lepakshihandicrafts",
      aria: "Facebook social link",
      Icon: () => (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
    },
    {
      name: "twitter",
      href: "https://x.com/lepakshiaphdc",
      aria: "X social link",
      Icon: () => (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ),
    },
    {
      name: "instagram",
      href: "https://www.instagram.com/lepakshihandicrafts/",
      aria: "Instagram social link",
      Icon: () => (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      ),
    },
    {
      name: "youtube",
      href: "https://www.youtube.com/channel/UCUj9ANy5MBFhdzK-yAloioA",
      aria: "YouTube social link",
      Icon: () => (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      ),
    },
    {
      name: "pinterest",
      href: "https://in.pinterest.com/LepakshiHandicrafts/",
      aria: "Pinterest social link",
      Icon: () => (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
        </svg>
      ),
    },
  ];

  return (
    <header className="w-full sticky top-0 z-50 shadow-lg">
      {/* TOP HEADER SECTION */}
      <div className="bg-gradient-to-r from-[#480707] via-[#742222] to-[#470606]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8 py-1">
          {/* DESKTOP LAYOUT */}
          <div className="hidden lg:flex items-center justify-between gap-6">
            {/* LEFT SECTION - Government Logo & Text */}
            <div className="flex items-center gap-5 flex-shrink-0 min-w-[280px]">
              <Image
                src="/AP-emblem-logo.png"
                alt="AP Government Emblem"
                width={85}
                height={85}
                className="h-[85px] w-auto object-contain cursor-pointer"
                priority
              />
              <div className="text-white leading-relaxed">
                <div className="text-[14px] font-medium leading-snug">
                  Andhra Pradesh Handicrafts
                </div>
                <div className="text-[14px] font-medium leading-snug">
                  Development Corporation Ltd.
                </div>
                <div className="text-[12px] opacity-90 mt-1.5 leading-snug">
                  (A State Government Undertaking)
                </div>
              </div>
            </div>

            {/* CENTER SECTION - Main Logos */}
            <div className="flex items-center justify-center gap-6 flex-1">
              <Image
                src="/cbn.png"
                alt="Chief Minister"
                width={75}
                height={75}
                className="h-[75px] w-auto object-contain cursor-pointer"
              />
              <Image
                src="/Logo-1.png"
                alt="Lepakshi Logo"
                width={75}
                height={75}
                className="h-[75px] w-auto object-contain cursor-pointer"
              />
              <Image
                src="/logo.png"
                alt="Government Seal"
                width={75}
                height={75}
                className="h-[75px] w-auto object-contain cursor-pointer"
              />
              <Image
                src="/savitha.png"
                alt="Minister"
                width={75}
                height={75}
                className="h-[75px] w-auto object-contain cursor-pointer"
              />
            </div>

            {/* RIGHT SECTION - Social Media Icons */}
            <div className="flex items-center gap-2.5 flex-shrink-0 min-w-[280px] justify-end">
              {socialLinks.map(({ name, href, aria, Icon }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  aria-label={aria}
                  className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:bg-white/30 hover:scale-110 hover:shadow-lg border border-white/30"
                >
                  <Icon className="text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* MOBILE LAYOUT */}
          <div className="lg:hidden flex items-center justify-between py-2">
            <button
              aria-label="Open menu"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white p-2 hover:bg-white/10 rounded transition-colors cursor-pointer"
            >
              <Menu size={24} />
            </button>

            <div className="flex items-center gap-3">
              <Image
                src="/cbn.png"
                alt="CBN"
                width={50}
                height={50}
                className="h-12 w-auto object-contain cursor-pointer"
              />
              <Image
                src="/Logo-1.png"
                alt="Lepakshi"
                width={50}
                height={50}
                className="h-12 w-auto object-contain cursor-pointer"
              />
              <Image
                src="/savitha.png"
                alt="Savitha"
                width={50}
                height={50}
                className="h-12 w-auto object-contain cursor-pointer"
              />
            </div>

            <button
              aria-label="Search"
              className="text-white p-2 hover:bg-white/10 rounded transition-colors cursor-pointer"
            >
              <Search size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* NAVIGATION MENU */}
      <div className="bg-[#460505] border-t border-white/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          {/* DESKTOP NAVIGATION */}
          <div className="hidden lg:flex items-center justify-between">
            <nav className="flex items-center flex-1">
              {navItems.map((item, index) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="group relative px-5 py-3 text-white text-[12px] font-semibold tracking-wide flex items-center gap-1.5 transition-all duration-200 hover:text-white/80 cursor-pointer"
                >
                  <span className="relative z-10">{item.label}</span>
                  {item.hasDropdown && (
                    <ChevronDown
                      size={13}
                      className="opacity-80 group-hover:opacity-100 transition-opacity mt-0.5"
                    />
                  )}
                </a>
              ))}
            </nav>

            {/* SEARCH BUTTON */}
            <button
              aria-label="Search"
              className="text-white p-4 hover:text-white/80 rounded transition-colors flex-shrink-0 cursor-pointer"
            >
              <Search size={18} strokeWidth={2} />
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#5a0909] border-t border-white/10">
          <nav className="max-w-[1400px] mx-auto px-4 py-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block px-4 py-3 text-white text-sm font-medium border-b border-white/10 last:border-b-0 hover:bg-white/10 transition-colors flex items-center justify-between cursor-pointer"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span>{item.label}</span>
                {item.hasDropdown && (
                  <ChevronDown size={14} className="opacity-70" />
                )}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}