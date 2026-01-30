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

type MegaMenuItem = {
  label: string;
  href: string;
  location?: string;
  arrow?: boolean;
};

type MegaMenuGroup = {
  title: string;
  col: number;
  items: MegaMenuItem[];
};

type NavItem = {
  label: string;
  href: string;
  hasDropdown?: boolean;
  isMegaMenu?: boolean;
  children?: MegaMenuGroup[] | Array<{  
    label: string;
    href: string;
  }>;
};


export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [expandedMobileItem, setExpandedMobileItem] = useState<string | null>(null);
  const lastScrollY = useRef(0);

  const navItems: NavItem[] = [
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
      ],
    },

    {
      label: "PRODUCTS",
      href: "/products",
      hasDropdown: true,
      isMegaMenu: true,
      children: [
        {
          title: "Textile / Weaves",
          col: 1,
          items: [
            {
              label: "Kalamkari Prints",
              location: "Machilipatnam, Pedana",
              href: "/products/textiles/kalamkari",
            },
            {
              label: "Crochet",
              location: "Narasapur",
              href: "/products/textiles/crochet",
              arrow: true,
            },
            {
              label: "Applique / Embroidery Work",
              location: "Madanapalli",
              href: "/products/textiles/applique",
              arrow: true,
            },
          ],
        },
        {
          title: "Metal Crafts",
          col: 1,
          items: [
            {
              label: "Brassware",
              location: "Budithi",
              href: "/products/metal/brassware-budithi",
            },
            {
              label: "Bronze Castings",
              location: "Tirupati",
              href: "/products/metal/bronze",
              arrow: true,
            },
          ],
        },

        {
          title: "Paintings",
          col: 2,
          items: [
            {
              label: "Kalamkari Paintings",
              location: "Srikalahasti, Banganapalli",
              href: "/products/paintings/kalamkari",
            },
            {
              label: "Adivasi Paintings",
              location: "Seethampeta",
              href: "/products/paintings/adivasi",
              arrow: true,
            },
            {
              label: "Leather Paintings",
              location: "Nimmalakunta, Dharmavaram",
              href: "/products/paintings/leather",
            },
          ],
        },
        {
          title: "Natural Fibres",
          col: 2,
          items: [
            {
              label: "Palm Leaf",
              location: "Tuni, Rampachodavaram, Gokavaram, Devipatnam",
              href: "/products/fibres/palm-leaf",
              arrow: true,
            },
            {
              label: "Walking Sticks",
              location: "Rajahmundry",
              href: "/products/fibres/walking-sticks",
              arrow: true,
            },
          ],
        },

        {
          title: "Wood Crafts",
          col: 3,
          items: [
            {
              label: "Wooden Painted Toys",
              location: "Kondapalli",
              href: "/products/wood/painted-toys",
            },
            {
              label: "Lacquerware Toys",
              location: "Etikoppaka",
              href: "/products/wood/lacquerware",
            },
            {
              label: "White Wood Birds",
              location: "Rajahmundry",
              href: "/products/wood/white-wood-birds",
              arrow: true,
            },
            {
              label: "Wooden Statues",
              location: "Tirupati / Settigunta",
              href: "/products/wood/statues",
              arrow: true,
            },
            {
              label: "Wall Panels",
              location: "Tirupati",
              href: "/products/wood/wall-panels",
              arrow: true,
            },
            {
              label: "Musical Instruments",
              location: "Bobbili",
              href: "/products/wood/instruments",
            },
            {
              label: "Wooden Cutlery",
              location: "Udayagiri",
              href: "/products/wood/cutlery",
            },
            {
              label: "Red Sander",
              location: "Lakshmigiripalli",
              href: "/products/wood/red-sander",
              arrow: true,
            },
          ],
        },

        {
          title: "Jewelry",
          col: 4,
          items: [
            {
              label: "Imitation Jewellery",
              location: "Machilipatnam",
              href: "/products/jewelry/imitation",
              arrow: true,
            },
          ],
        },
        {
          title: "Natural Mineral",
          col: 4,
          items: [
            {
              label: "Stone Carvings",
              location: "Durgi, Allagadda",
              href: "/products/mineral/stone-carvings",
            },
            {
              label: "Pottery / Terracotta",
              location: "Madanapalle, Palamaneru",
              href: "/products/mineral/pottery",
              arrow: true,
            },
          ],
        },
        {
          title: "Carpets",
          col: 4,
          items: [
            {
              label: "Hand Knotted Carpets",
              location: "Eluru",
              href: "/products/carpets/hand-knotted",
              arrow: true,
            },
          ],
        },
      ],
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

  // Toggle mobile menu item expansion
  const toggleMobileItem = (label: string) => {
    setExpandedMobileItem(expandedMobileItem === label ? null : label);
  };

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-300 ${
          isScrolled || isMobileMenuOpen
            ? "bg-white shadow-lg shadow-gray-200/50"
            : "bg-white shadow-md"
        }`}
        initial={{ y: 0 }}
        animate={{ y: isHeaderVisible || isMobileMenuOpen ? 0 : -200 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        {/* Top Gold Border Accent */}
        <div
          className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#c9a962] to-transparent transition-opacity duration-300 ${
            isScrolled ? "opacity-100" : "opacity-0"
          }`}
        />
        
        {/* TOP HEADER SECTION */}
        <div
          className={`transition-all duration-300 ${
            isScrolled ? "py-2" : "py-3 sm:py-4"
          }`}
        >
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            {/* DESKTOP LAYOUT (1024px and up) */}
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
                <div
                  className="leading-relaxed transition-colors duration-300 font-[family-name:var(--font-montserrat)] text-[#1f2937]"
                >
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
                    className={`font-medium mt-1 leading-snug transition-all duration-300 text-[#d97706] ${
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
                    isScrolled ? "h-[50px]" : "h-[85px]"
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
                      isScrolled ? "h-[50px]" : "h-[65px]"
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
                    className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg
                      bg-gradient-to-br from-[#f8f5ef] to-white border-2 border-[#d97706]/20 text-[#0f766e] hover:border-[#d97706] hover:text-[#d97706] hover:bg-[#d97706]/5"
                  >
                    <Icon className="" />
                  </Link>
                ))}
              </div>
            </div>

            {/* TABLET LAYOUT (768px - 1023px) */}
            <div className="hidden md:flex lg:hidden items-center justify-between gap-4">
              <button
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`p-2 rounded transition-all duration-300 cursor-pointer flex-shrink-0 ${
                  isScrolled || isMobileMenuOpen
                    ? "text-[#1f2937] hover:text-[#d97706] hover:bg-[#d97706]/10"
                    : "text-[#1f2937] hover:text-[#d97706] hover:bg-white/10"
                }`}
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>

              <div className="flex items-center gap-3 flex-1 justify-center">
                <Image
                  src="/AP-emblem-logo.png"
                  alt="AP Government"
                  width={100}
                  height={100}
                  className={`transition-all duration-300 ${
                    isScrolled ? "h-[45px]" : "h-[55px]"
                  } w-auto object-contain cursor-pointer`}
                  quality={100}
                />
                <Image
                  src="/cbn.png"
                  alt="Chief Minister"
                  width={100}
                  height={100}
                  className={`transition-all duration-300 border rounded-full ${
                    isScrolled ? "h-[45px]" : "h-[55px]"
                  } w-auto object-contain cursor-pointer`}
                  quality={100}
                />
                <Link href="/">
                  <Image
                    src={isScrolled ? "/Logo-1.png" : "/logos/logos/lep-col.png"}
                    alt="Lepakshi Logo"
                    width={100}
                    height={100}
                    className={`transition-all duration-300 ${
                      isScrolled ? "h-[45px]" : "h-[55px] brightness-0 invert"
                    } w-auto object-contain cursor-pointer hover:scale-105`}
                    quality={100}
                  />
                </Link>
                <Image
                  src="/savitha.png"
                  alt="Minister"
                  width={100}
                  height={100}
                  className={`transition-all duration-300 border rounded-full ${
                    isScrolled ? "h-[45px]" : "h-[55px]"
                  } w-auto object-contain cursor-pointer`}
                  quality={100}
                />
              </div>

              {/* Tablet Social Icons - Compact */}
              <div className="flex items-center gap-1.5 flex-shrink-0">
                {socialLinks.slice(0, 3).map(({ name, href, aria, Icon }) => (
                  <Link
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    aria-label={aria}
                    className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 ${
                      isScrolled || isMobileMenuOpen
                        ? "bg-gradient-to-br from-[#f8f5ef] to-white border border-[#c9a962]/20 text-[#2c2c2c] hover:border-[#c9a962] hover:text-[#c9a962]"
                        : "bg-white/10 backdrop-blur-sm border border-white/30 text-white hover:bg-white/20"
                    }`}
                  >
                    <Icon />
                  </Link>
                ))}
              </div>
            </div>

            {/* MOBILE LAYOUT (below 768px) */}
            <div className="flex md:hidden items-center justify-between">
              <button
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`p-2 rounded transition-all duration-300 cursor-pointer flex-shrink-0 ${
                  isScrolled || isMobileMenuOpen
                    ? "text-[#2c2c2c] hover:text-[#c9a962] hover:bg-[#c9a962]/10"
                    : "text-white hover:text-[#c9a962] hover:bg-white/10"
                }`}
              >
                {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>

              <div className="flex items-center gap-2 flex-1 justify-center">
                <Image
                  src="/cbn.png"
                  alt="Chief Minister"
                  width={80}
                  height={80}
                  className={`transition-all duration-300 border rounded-full ${
                    isScrolled ? "h-[38px]" : "h-[42px]"
                  } w-auto object-contain cursor-pointer`}
                  quality={100}
                />
                <Link href="/">
                  <Image
                    src="/Logo-1.png"
                    alt="Lepakshi Logo"
                    width={80}
                    height={80}
                    className={`transition-all duration-300 ${
                      isScrolled ? "h-[38px]" : "h-[42px]"
                    } w-auto object-contain cursor-pointer`}
                    quality={100}
                  />
                </Link>
                <Image
                  src="/savitha.png"
                  alt="Minister"
                  width={80}
                  height={80}
                  className={`transition-all duration-300 border rounded-full ${
                    isScrolled ? "h-[38px]" : "h-[42px]"
                  } w-auto object-contain cursor-pointer`}
                  quality={100}
                />
              </div>

              {/* Mobile placeholder for symmetry */}
              <div className="w-10 flex-shrink-0"></div>
            </div>
          </div>
        </div>

        {/* NAVIGATION MENU - Desktop Only */}
        <div
          className={`hidden lg:block border-y transition-colors duration-300 ${
            isScrolled || isMobileMenuOpen
              ? "border-[#c9a962]/20 bg-white/50 backdrop-blur-sm"
              : "border-white/10 bg-transparent"
          }`}
        >
          <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
            {/* DESKTOP NAVIGATION */}
            <div className="flex items-center justify-center">
              <nav className="flex items-center flex-1 justify-center">
                {navItems.map((item) => (
                  <div key={item.label} className="relative group/nav">
                    <Link
                      href={item.href}
                      className="group relative px-4 py-3 text-[13px] font-bold tracking-wider flex items-center gap-1.5 transition-all duration-200 font-[family-name:var(--font-montserrat)]
                        text-[#0f766e] hover:text-[#d97706]"
                    >
                      <span className="relative z-10">{item.label}</span>
                      {item.hasDropdown && (
                        <ChevronDown
                          size={12}
                          className="opacity-70 group-hover:opacity-100 transition-opacity mt-0.5"
                        />
                      )}
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#d97706] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                    </Link>

                    {/* Dropdown Menu */}
                    {item.hasDropdown && item.isMegaMenu && (
                      <div className="absolute left-1/2 top-full w-[1200px] -translate-x-1/2 opacity-0 invisible group-hover/nav:opacity-100 group-hover/nav:visible transition-all duration-300 pt-6 z-50">
                        <div className="bg-white shadow-2xl border border-gray-200 p-8">
                          <div className="grid grid-cols-4 gap-x-12">
                            {/* Create 4 columns dynamically */}
                            {[1, 2, 3, 4].map((colNumber) => {
                              const groupsInColumn = (item.children as MegaMenuGroup[]).filter(
                                (group) => group.col === colNumber
                              );
                              
                              return (
                                <div key={`col-${colNumber}`} className="space-y-8">
                                  {groupsInColumn.map((group: MegaMenuGroup) => (
                                    <div key={group.title}>
                                      <h3 className="text-[22px] font-medium text-[#444] mb-4">
                                        {group.title}
                                      </h3>
                                      <ul className="space-y-4">
                                        {group.items.map((child: MegaMenuItem) => (
                                          <li key={child.label}>
                                            <Link
                                              href={child.href}
                                              className="group flex items-start justify-between gap-4 hover:bg-gray-50 p-2 -m-2 rounded transition-colors"
                                            >
                                              <div>
                                                <div className="text-[16px] font-semibold text-[#5a0a0a] group-hover:text-[#c9a962] transition-colors">
                                                  {child.label}
                                                </div>
                                                {child.location && (
                                                  <div className="text-[14px] text-gray-500 mt-1">
                                                    {child.location}
                                                  </div>
                                                )}
                                              </div>
                                              {child.arrow && (
                                                <span className="text-[22px] text-gray-600 leading-none transition-transform group-hover:translate-x-1">
                                                  ›
                                                </span>
                                              )}
                                            </Link>
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                  ))}
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Simple Dropdown for non-mega menu items */}
                    {item.hasDropdown && !item.isMegaMenu && (
                      <div className="absolute left-0 top-full min-w-[220px] opacity-0 invisible group-hover/nav:opacity-100 group-hover/nav:visible transition-all duration-300 pt-2 z-50">
                        <div className="bg-white shadow-xl border border-gray-200 rounded-lg overflow-hidden">
                          {(item.children as Array<{ label: string; href: string }>)?.map((child) => (
                            <Link
                              key={child.label}
                              href={child.href}
                              className="block px-5 py-3 text-[14px] font-medium text-[#2c2c2c] hover:bg-[#c9a962]/10 hover:text-[#c9a962] transition-colors"
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

      {/* MOBILE & TABLET MENU FULL SCREEN OVERLAY */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="lg:hidden fixed inset-0 z-[9998] bg-gradient-to-br from-white via-[#faf8f5] to-[#f8f5ef] overflow-y-auto"
          style={{ paddingTop: "80px" }}
        >
          <nav className="max-w-[1400px] mx-auto px-4 sm:px-6 py-6 sm:py-8">
            {navItems.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className="border-b border-[#c9a962]/20 last:border-b-0"
              >
                {!item.hasDropdown ? (
                  <Link
                    href={item.href}
                    className="block px-4 py-4 text-[#2c2c2c] text-base sm:text-lg font-semibold hover:bg-[#c9a962]/10 hover:text-[#c9a962] transition-all cursor-pointer group font-[family-name:var(--font-montserrat)]"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span className="group-hover:translate-x-2 transition-transform duration-200 inline-block">
                      {item.label}
                    </span>
                  </Link>
                ) : (
                  <div>
                    <button
                      onClick={() => toggleMobileItem(item.label)}
                      className="w-full flex items-center justify-between px-4 py-4 text-[#2c2c2c] text-base sm:text-lg font-semibold hover:bg-[#c9a962]/10 hover:text-[#c9a962] transition-all font-[family-name:var(--font-montserrat)]"
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        size={18}
                        className={`transition-transform duration-300 ${
                          expandedMobileItem === item.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    
                    {/* Expanded Content */}
                    {expandedMobileItem === item.label && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="bg-[#f8f5ef]/50 overflow-hidden"
                      >
                        {item.isMegaMenu ? (
                          <div className="px-4 py-4 space-y-6">
                            {(item.children as MegaMenuGroup[]).map((group) => (
                              <div key={group.title}>
                                <h4 className="text-[#c9a962] font-bold text-sm sm:text-base mb-3 uppercase tracking-wide">
                                  {group.title}
                                </h4>
                                <ul className="space-y-2">
                                  {group.items.map((child) => (
                                    <li key={child.label}>
                                      <Link
                                        href={child.href}
                                        className="block py-2 px-3 hover:bg-white/50 rounded transition-colors"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                      >
                                        <div className="text-[#2c2c2c] font-medium text-sm sm:text-base">
                                          {child.label}
                                        </div>
                                        {child.location && (
                                          <div className="text-gray-500 text-xs sm:text-sm mt-0.5">
                                            {child.location}
                                          </div>
                                        )}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <div className="px-4 py-2">
                            {(item.children as Array<{ label: string; href: string }>)?.map((child) => (
                              <Link
                                key={child.label}
                                href={child.href}
                                className="block py-3 px-3 text-[#2c2c2c] text-sm sm:text-base hover:bg-white/50 rounded transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                              >
                                {child.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </motion.div>
                    )}
                  </div>
                )}
              </motion.div>
            ))}

            {/* Mobile/Tablet Social Links */}
            <div className="flex items-center justify-center gap-3 sm:gap-4 mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-[#c9a962]/20">
              {socialLinks.map(({ name, href, aria, Icon }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  aria-label={aria}
                  className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-[#f8f5ef] to-white border-2 border-[#c9a962]/30 flex items-center justify-center transition-all duration-300 hover:bg-[#c9a962]/10 hover:border-[#c9a962] hover:scale-110 hover:shadow-lg text-[#2c2c2c] hover:text-[#c9a962]"
                >
                  <Icon />
                </a>
              ))}
            </div>

            {/* Mobile Government Text */}
            <div className="text-center mt-8 px-4">
              <div className="text-[#2c2c2c] font-bold text-sm sm:text-base leading-relaxed font-[family-name:var(--font-montserrat)]">
                Andhra Pradesh Handicrafts
                <br />
                Development Corporation Ltd.
              </div>
              <div className="text-[#c9a962] font-medium text-xs sm:text-sm mt-2">
                (A State Government Undertaking)
              </div>
            </div>
          </nav>
        </motion.div>
      )}
    </>
  );
}