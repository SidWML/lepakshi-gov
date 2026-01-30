// app/components/layout/v3/NavbarV3.tsx
"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown, Phone, Mail, Search, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "/" },
  {
    name: "About Us",
    href: "/aboutus",
    submenu: [
      { name: "Our Heritage", href: "/our-heritage" },
      { name: "Artisan Stories", href: "/artisan-stories" },
      { name: "Cluster Map", href: "/cluster-map" },
      { name: "Corporate Profile", href: "/corporate-profile" },
    ],
  },
  { name: "News & Events", href: "/news-events" },
  {
    name: "Downloads",
    href: "/downloads",
    submenu: [
      { name: "Tenders", href: "/tenders" },
      { name: "Reports", href: "/reports" },
    ],
  },
  { name: "Contact Us", href: "/contact-us" },
];

// Custom social icons as SVG components
const FacebookIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const TwitterIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const YoutubeIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
  </svg>
);

const socialLinks = [
  { icon: FacebookIcon, href: "https://facebook.com", label: "Facebook" },
  { icon: TwitterIcon, href: "https://twitter.com", label: "Twitter" },
  { icon: InstagramIcon, href: "https://instagram.com", label: "Instagram" },
  { icon: YoutubeIcon, href: "https://youtube.com", label: "YouTube" },
];

export default function NavbarV3() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(pathname !== '/');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (pathname !== '/') {
        // On non-homepage pages, always keep the background
        setIsScrolled(true);
      } else {
        // On homepage, toggle based on scroll position
        setIsScrolled(window.scrollY > 60);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Top Info Bar */}


      {/* Logo Bar */}
      <div
        className={`relative transition-all duration-500 backdrop-blur-3xl ${
          isScrolled || isHovered ? "bg-[#F5ECE3]" : "bg-slate-100/5"
        }`}
      >


        <div className="relative w-[98%] max-w-none mx-auto px-6 lg:px-12 py-2 lg:py-1.5">
          <div className="flex items-center justify-between ">
            {/* Mobile - Lepakshi Logo Only */}
            <Link href="/" className="lg:hidden">
              <Image
                src="/logos/logos/lep-col.png"
                alt="Lepakshi Logo"
                width={80}
                height={80}
                className={`transition-all duration-300 ${
                  isScrolled || isHovered ? "" : "invert brightness-0"
                } h-10 w-auto object-contain`}
                quality={100}
                priority
              />
            </Link>

            {/* Desktop - Government Emblem & Text */}
            <div className="hidden lg:flex items-center gap-3 lg:gap-4">
              <Image
                src="/AP-emblem-logo.png"
                alt="AP Government Emblem"
                width={120}
                height={120}
                className={`transition-all duration-300 ${
                  isScrolled ? "h-[50px]" : "h-[60px]"
                } w-auto object-contain`}
                quality={100}
                priority
              />
              <div>
                <h1 className={`text-[11px] lg:text-[13px] font-bold tracking-tight leading-tight transition-colors duration-300 ${
                  isScrolled || isHovered ? "text-[#0f766e]" : "text-[#E0AE31]"
                }`}>
                  Andhra Pradesh Handicrafts
                </h1>
                <p className={`text-[10px] lg:text-[11px] font-semibold leading-tight transition-colors duration-300 ${
                  isScrolled || isHovered ? "text-[#1f2937]" : "text-white/70"
                }`}>
                  Development Corporation Ltd.
                </p>
                <p className={`text-[8px] lg:text-[9px] tracking-wide leading-tight mt-0.5 transition-colors duration-300 ${
                  isScrolled || isHovered ? "text-[#d97706]" : "text-[#E0AE31]/80"
                }`}>
                  (A State Government Undertaking)
                </p>
              </div>
            </div>

            {/* Center - Main Logos & Ministers */}
            <div className="hidden lg:flex items-center gap-4 xl:gap-6 ">
              <div className={` transition-all duration-300 ${isScrolled ? "h-[65px] w-[65px]" : "h-[95px] w-[95px]"} flex items-end justify-center border-2 border-[#E0AE31]/30 rounded-full overflow-hidden`}>
                <Image
                src="/cbn.png"
                alt="Chief Minister"
                width={100}
                height={100}
                className={`transition-all duration-300   ${
                  isScrolled ? "h-[55px]" : "h-[85px]"
                } w-auto object-contain`}
                quality={100}
              />
              </div>
              <Link href="/" className="group">
                <Image
                  src="/logos/logos/lep-col.png"
                  alt="Lepakshi Logo"
                  width={100}
                  height={100}
                  className={`transition-all duration-300 ${
                    isScrolled || isHovered ? "" : "invert brightness-0"
                  } ${
                    isScrolled ? "h-[45px]" : "h-[65px]"
                  } w-auto object-contain hover:scale-110`}
                  quality={100}
                />
              </Link>
              <div className={` transition-all duration-300 ${isScrolled ? "h-[65px] w-[65px]" : "h-[95px] w-[95px]"} flex items-end justify-center border-2 border-[#E0AE31]/30 rounded-full overflow-hidden`}>
                  <Image
                src="/savitha.png"
                alt="Minister"
                width={100}
                height={100}
                className={`transition-all duration-300  ${
                  isScrolled ? "h-[55px]" : "h-[85px]"
                } w-auto object-contain`}
                quality={100}
              />
              </div>
            
            </div>

                        {/* CTA Button - Outline style */}
            <div className="hidden lg:block">
              <Link
                href="https://lepakshihandicrafts.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 text-sm font-semibold border-2 border-[#E0AE31] text-[#E0AE31] hover:bg-[#E0AE31] hover:text-[#1a1a1a] transition-all duration-300"
              >
                Shop Now
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 transition-colors ${
                isScrolled || isHovered ? "text-[#1f2937]" : "text-white"
              }`}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Menu Bar - Desktop Only */}
      <nav className={`hidden lg:block relative border-y border-[#E0AE31]/20 transition-all duration-500 ${
        isScrolled || isHovered ? "bg-white" : ""
      }`}>
        <div className="w-[98%] max-w-none mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between py-2">
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1 flex-1 justify-center">
              {navLinks.map((link) => (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => link.submenu && setActiveDropdown(link.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={link.href}
                    className={`flex items-center gap-1 px-4 py-3 text-sm font-medium transition-all duration-300 ${
                      isScrolled || isHovered
                        ? "text-[#0f766e] hover:text-[#d97706]"
                        : "text-white/80 hover:text-[#E0AE31]"
                    }`}
                  >
                    {link.name}
                    {link.submenu && <ChevronDown size={14} className="ml-1" />}
                  </Link>

                  {/* Active indicator */}
                  {link.submenu && activeDropdown === link.name && (
                    <div className="absolute bottom-[-5px] left-1/2 -translate-x-1/2 w-2 h-2 rotate-45 bg-[#F5E8C8] border-t border-l border-[#E0AE31]/30" />
                  )}

                  {/* Dropdown - Cream/White style */}
                  {link.submenu && (
                    <AnimatePresence>
                      {activeDropdown === link.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-0 w-56 bg-[#F5E8C8] shadow-xl overflow-hidden"
                        >
                          {link.submenu.map((sublink, index) => (
                            <Link
                              key={sublink.name}
                              href={sublink.href}
                              className={`block px-5 py-3.5 text-sm text-[#1a1a1a] hover:bg-[#E0AE31]/20 hover:text-[#1a1a1a] transition-colors ${
                                index !== link.submenu!.length - 1 ? "border-b border-[#E0AE31]/20" : ""
                              }`}
                            >
                              {sublink.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </div>


          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#1a1a1a] border-t border-[#E0AE31]/20"
          >
            <div className="px-6 py-4 space-y-1">
              {navLinks.map((link) => (
                <div key={link.name}>
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block py-3 text-white font-medium hover:text-[#E0AE31] transition-colors"
                  >
                    {link.name}
                  </Link>
                  {link.submenu && (
                    <div className="pl-4 space-y-1 border-l border-[#E0AE31]/20 ml-2">
                      {link.submenu.map((sublink) => (
                        <Link
                          key={sublink.name}
                          href={sublink.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block py-2 text-sm text-white/60 hover:text-[#E0AE31] transition-colors"
                        >
                          {sublink.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 flex flex-col gap-3">
                <Link
                  href="https://lepakshihandicrafts.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-6 py-3 border-2 border-[#E0AE31] text-[#E0AE31] text-center font-semibold"
                >
                  Shop Now
                </Link>
              </div>
              {/* Mobile Contact Info */}
              <div className="pt-4 border-t border-white/10 mt-4">
                <a href="tel:+919000000000" className="flex items-center gap-2 py-2 text-sm text-white/60 hover:text-[#E0AE31]">
                  <Phone size={14} />
                  <span>+91 90000 00000</span>
                </a>
                <a href="mailto:info@lepakshihandicrafts.com" className="flex items-center gap-2 py-2 text-sm text-white/60 hover:text-[#E0AE31]">
                  <Mail size={14} />
                  <span>info@lepakshihandicrafts.com</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
