"use client";

import Image from "next/image";
import Link from "next/link";
import { Search, Menu, ChevronDown, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

type SocialLink = {
  name: string;
  href: string;
  aria: string;
  Icon: React.ElementType;
};

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const lastScrollY = useRef(0);

  const navItems = [
    { label: "HOME", href: "/" },
    {
      label: "ABOUT US",
      href: "/aboutus",
      hasDropdown: true,
      children: [
        { label: "Our Heritage", href: "/heritage" },
        { label: "Corporate Profile", href: "/corporate-profile" },
        { label: "Artisan Stories", href: "/artisan-stories" },
        { label: "Cluster Map", href: "/cluster-map" },
      ]
    },
    { label: "NEWS & EVENTS", href: "/news-events" },
    { label: "DOWNLOADS", href: "/downloads" },
    { label: "TENDERS", href: "/tenders" },
    { label: "CONTACT US", href: "/aboutus" },
  ];

  const socialLinks: SocialLink[] = [
    {
      name: "facebook",
      href: "https://www.facebook.com/lepakshihandicrafts",
      aria: "Facebook social link",
      Icon: () => (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
    },
    {
      name: "twitter",
      href: "https://x.com/lepakshiaphdc",
      aria: "X social link",
      Icon: () => (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      name: "instagram",
      href: "https://www.instagram.com/lepakshihandicrafts/",
      aria: "Instagram social link",
      Icon: () => (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
    },
    {
      name: "youtube",
      href: "https://www.youtube.com/channel/UCUj9ANy5MBFhdzK-yAloioA",
      aria: "YouTube social link",
      Icon: () => (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
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

  // Scroll behavior
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = lastScrollY.current;
    setIsScrolled(latest > 50);

    if (latest < 50) {
      setIsHeaderVisible(true);
    } else {
      if (latest < previous) {
        setIsHeaderVisible(true);
      } else if (latest > previous + 5) {
        setIsHeaderVisible(false);
      }
    }
    lastScrollY.current = latest;
  });

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-300 ${
          isScrolled || isMobileMenuOpen
            ? "bg-white shadow-2xl shadow-gray-300/50"
            : "bg-transparent"
        }`}
        initial={{ y: 0 }}
        animate={{ y: isHeaderVisible || isMobileMenuOpen ? 0 : -200 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        {/* Top Gold Border Accent */}
        <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#c9a962] to-transparent transition-opacity duration-300 ${
          isScrolled ? "opacity-100" : "opacity-0"
        }`} />
        {/* TOP HEADER SECTION */}
        <div
          className={`transition-all duration-300 ${
            isScrolled ? "py-2" : "py-4"
          }`}
        >
          <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
            {/* DESKTOP LAYOUT */}
            <div className="hidden lg:flex items-center justify-between gap-6">
              {/* LEFT SECTION - Government Logo & Text */}
              <div className="flex items-center gap-5 flex-shrink-0 min-w-[280px]">
                <Image
                  src="/AP-emblem-logo.png"
                  alt="AP Government Emblem"
                  width={150}
                  height={150}
                  className={`transition-all duration-300 ${
                    isScrolled ? "h-[60px]" : "h-[75px]"
                  } w-auto object-contain cursor-pointer`}
                  quality={100}
                  priority
                />
                <div className={`leading-relaxed transition-colors duration-300 font-[family-name:var(--font-montserrat)] ${
                  isScrolled ? "text-[#2c2c2c]" : "text-white"
                }`}>
                  <div
                    className={`font-bold leading-snug transition-all duration-300 ${
                      isScrolled ? "text-[15px]" : "text-[16px]"
                    }`}
                  >
                    Andhra Pradesh Handicrafts
                  </div>
                  <div
                    className={`font-bold leading-snug transition-all duration-300 ${
                      isScrolled ? "text-[15px]" : "text-[16px]"
                    }`}
                  >
                    Development Corporation Ltd.
                  </div>
                  <div
                    className={`text-[#c9a962] font-medium mt-1 leading-snug transition-all duration-300 ${
                      isScrolled ? "text-[13px]" : "text-[14px]"
                    }`}
                  >
                    (A State Government Undertaking)
                  </div>
                </div>
              </div>

              {/* CENTER SECTION - Main Logos */}
              <div className="flex items-center justify-center gap-6 flex-1">
                <Image
                  src="/cbn.png"
                  alt="Chief Minister"
                  width={130}
                  height={130}
                  className={`transition-all duration-300 border rounded-full ${
                    isScrolled ? "h-[50px]" : "h-[85px] "
                  } w-auto object-contain cursor-pointer`}
                  quality={100}
                />
                <Link href="/">
                  <Image
                    src="/logos/logos/lep-col.png"
                    alt="Lepakshi Logo"
                    width={130}
                    height={130}
                    className={`transition-all duration-300 ${
                      isScrolled ? "h-[50px]" : "h-[65px] brightness-0 invert"  
                    } w-auto object-contain cursor-pointer hover:scale-110`}
                    quality={100}
                  />
                </Link>

                <Image
                  src="/savitha.png"
                  alt="Minister"
                  width={130}
                  height={130}
                  className={`transition-all duration-300 border rounded-full ${
                    isScrolled ? "h-[50px]" : "h-[85px]"
                  } w-auto object-contain cursor-pointer`}
                  quality={100}
                />
              </div>

              {/* RIGHT SECTION - Social Media Icons */}
              <div className="flex items-center gap-2.5 flex-shrink-0 min-w-[280px] justify-end">
                {socialLinks.map(({ name, href, aria, Icon }) => (
                  <Link
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    aria-label={aria}
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg ${
                      isScrolled
                        ? "bg-gradient-to-br from-[#f8f5ef] to-white border-2 border-[#c9a962]/20 text-[#2c2c2c] hover:border-[#c9a962] hover:text-[#c9a962] hover:bg-[#c9a962]/5"
                        : "bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white/20 hover:border-white/50"
                    }`}
                  >
                    <Icon className="" />
                  </Link>
                ))}
              </div>
            </div>

            {/* MOBILE LAYOUT */}
            <div className="lg:hidden flex items-center justify-between">
              <button
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`p-2 rounded transition-all duration-300 cursor-pointer ${
                  isScrolled || isMobileMenuOpen
                    ? "text-[#2c2c2c] hover:text-[#c9a962] hover:bg-[#c9a962]/10"
                    : "text-white hover:text-[#c9a962] hover:bg-white/10"
                }`}
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>

              <div className="flex items-center gap-2">
                <Image
                  src="/cbn.png"
                  alt="CBN"
                  width={90}
                  height={90}
                  className="h-11 w-auto object-contain cursor-pointer"
                  quality={100}
                />
                <Link href="/">
                  <Image
                    src="/Logo-1.png"
                    alt="Lepakshi"
                    width={90}
                    height={90}
                    className="h-11 w-auto object-contain cursor-pointer"
                    quality={100}
                  />
                </Link>
                <Image
                  src="/savitha.png"
                  alt="Savitha"
                  width={90}
                  height={90}
                  className="h-11 w-auto object-contain cursor-pointer"
                  quality={100}
                />
              </div>
            </div>
          </div>
        </div>

        {/* NAVIGATION MENU */}
        <div className={`border-y transition-colors duration-300 ${
          isScrolled || isMobileMenuOpen
            ? "border-[#c9a962]/20 bg-white/50 backdrop-blur-sm"
            : "border-white/10 bg-transparent"
        }`}>
          <div className="max-w-[1400px] mx-auto px-6 lg:px-8 ">
            {/* DESKTOP NAVIGATION */}
            <div className="hidden lg:flex items-center justify-center ">
              <nav className="flex items-center flex-1 justify-center">
                {navItems.map((item) => (
                  <div key={item.label} className="relative group/nav">
                    <Link
                      href={item.href}
                      className={`group relative px-4 py-3 text-[13px] font-bold tracking-wider flex items-center gap-1.5 transition-all duration-200 font-[family-name:var(--font-montserrat)] ${
                        isScrolled
                          ? "text-[#2c2c2c] hover:text-[#c9a962]"
                          : "text-white hover:text-[#c9a962]"
                      }`}
                    >
                      <span className="relative z-10">{item.label}</span>
                      {item.hasDropdown && (
                        <ChevronDown
                          size={12}
                          className="opacity-70 group-hover:opacity-100 transition-opacity mt-0.5"
                        />
                      )}
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#c9a962] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                    </Link>

                    {/* Dropdown Menu */}
                    {item.hasDropdown && item.children && (
                      <div className="absolute top-full left-0 min-w-[220px] opacity-0 invisible group-hover/nav:opacity-100 group-hover/nav:visible transition-all duration-300 pt-2">
                        <div className="bg-white border-2 border-[#c9a962]/20 shadow-2xl shadow-gray-400/30 overflow-hidden">
                          {/* Gold top border */}
                          <div className="h-1 bg-gradient-to-r from-[#c9a962] via-[#e0ae31] to-[#c9a962]" />

                          {item.children.map((child, index) => (
                            <Link
                              key={child.label}
                              href={child.href}
                              className="block px-6 py-3 text-[13px] font-semibold text-[#2c2c2c] hover:text-[#c9a962] hover:bg-[#c9a962]/5 transition-all duration-200 font-[family-name:var(--font-montserrat)] border-b border-[#c9a962]/10 last:border-b-0"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </motion.header>

      {/* MOBILE MENU FULL SCREEN OVERLAY */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="lg:hidden fixed inset-0 z-[9998] bg-gradient-to-br from-white via-[#faf8f5] to-[#f8f5ef] overflow-y-auto"
          style={{ paddingTop: "80px" }}
        >
          <nav className="max-w-[1400px] mx-auto px-6 py-8">
            {navItems.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <Link
                  href={item.href}
                  className="block px-4 py-4 text-[#2c2c2c] text-base font-semibold border-b border-[#c9a962]/20 last:border-b-0 hover:bg-[#c9a962]/10 hover:text-[#c9a962] transition-all flex items-center justify-between cursor-pointer group font-[family-name:var(--font-montserrat)]"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="group-hover:translate-x-2 transition-transform duration-200">
                    {item.label}
                  </span>
                  {item.hasDropdown && (
                    <ChevronDown size={16} className="opacity-70" />
                  )}
                </Link>
              </motion.div>
            ))}

            {/* Mobile Social Links */}
            <div className="flex items-center justify-center gap-4 mt-12 pt-8 border-t border-[#c9a962]/20">
              {socialLinks.map(({ name, href, aria, Icon }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  aria-label={aria}
                  className="w-12 h-12 rounded-full bg-gradient-to-br from-[#f8f5ef] to-white border-2 border-[#c9a962]/30 flex items-center justify-center transition-all duration-300 hover:bg-[#c9a962]/10 hover:border-[#c9a962] hover:scale-110 hover:shadow-lg text-[#2c2c2c] hover:text-[#c9a962]"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </nav>
        </motion.div>
      )}
    </>
  );
}