// app/components/layout/v3/FooterV3Reference.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  ShieldCheck,
  BadgeCheck,
} from "lucide-react";

const craftsLinks = [
  { name: "Etikoppaka Lacquer", href: "https://lepakshihandicrafts.com/wood-crafts-toys/etikoppaka-lacquerware-toys" },
  { name: "Pen Kalamkari", href: "https://lepakshihandicrafts.com/paintings/pen-kalamkari" },
  { name: "Kondapalli Toys", href: "https://lepakshihandicrafts.com/wood-crafts-toys/kondapalli-painted-toys" },
  { name: "Brassware", href: "https://lepakshihandicrafts.com/metal-crafts/brassware" },
  { name: "Bronze Castings", href: "https://lepakshihandicrafts.com/metal-crafts/bronze-casting" },
];

const collectionsLinks = [
  { name: "Featured Products", href: "https://lepakshihandicrafts.com/featured-products" },
  { name: "Spiritual & Pooja", href: "https://lepakshihandicrafts.com/spiritual-section" },
  { name: "ODOP", href: "https://lepakshihandicrafts.com/odop" },
];

const aboutLinks = [
  { name: "Our Heritage", href: "https://lepakshihandicrafts.com/our-heritage" },
  { name: "Store Locator", href: "https://lepakshihandicrafts.com/store-locator" },
  { name: "Blogs", href: "https://lepakshihandicrafts.com/blogs" },
  { name: "Gallery", href: "https://lepakshihandicrafts.com/gallery" },
  { name: "Lepakshi Handicrafts (Govt. Website)", href: "https://lepakshihandicrafts.com", target: "_blank" },
];

const supportLinks = [
  // { name: "Privacy Policy", href: "/privacy-policy" },
  // { name: "Terms of Use", href: "/terms" },
  // { name: "Terms of Sale", href: "/terms-of-sale" },
  // { name: "Shipping & Delivery Policy", href: "/shipping-delivery" },
  // { name: "Replacement Policy", href: "/replacement-policy" },
  { name: "Contact Us", href: "https://lepakshihandicrafts.com/contact-us" },

];

export function PinterestIcon({
  width = 20,
  height = 20,
  className = "",
}: {
  width?: number;
  height?: number;
  className?: string;
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* White circular background */}
      <circle cx="12" cy="12" r="12" fill="white" />

      {/* Pinterest logo */}
      <path
        d="M12.3 6.5c-3.1 0-4.7 2.2-4.7 4.1 0 1.1.4 2.1 1.3 2.5.1 0 .2 0 .2-.1l.3-.9c0-.1 0-.2-.1-.3-.3-.4-.5-.8-.5-1.4 0-1.8 1.4-3.4 3.6-3.4 2 0 3.1 1.2 3.1 2.8 0 2.1-1 3.9-2.4 3.9-.8 0-1.4-.7-1.2-1.5l.5-2c.2-.5.1-1-.2-1.3-.6-.6-1.7-.1-2 1-.2.6-.1 1.3.1 1.7l-1.1 4.3c-.3 1.1 0 2.4 0 2.5 0 .1.1.1.2 0 .1-.1.9-1.1 1.2-2.2l.6-2.2c.3.5 1.1.9 2 .9 2.6 0 4.3-2.4 4.3-5.5 0-2.4-2-4.6-5.1-4.6z"
        fill="#1f2937"
      />
    </svg>
  );
}


const socialLinks = [
  { icon: Facebook, href: "https://www.facebook.com/lepakshihandicrafts", label: "Facebook" },
  { icon: Twitter, href: "https://x.com/lepakshiaphdc", label: "Twitter" },
  { icon: Youtube, href: "https://www.youtube.com/@lepakshiaphdc", label: "YouTube" },
  { icon: Instagram, href: "https://www.instagram.com/lepakshi_handicrafts", label: "Instagram" },
  { icon: PinterestIcon, href: "https://www.pinterest.com/lepakshihandicrafts/", label: "Pinterest" },
];

export default function FooterV3Reference() {
  return (
    <footer className="relative bg-[#F5ECE3] text-gray-700 pt-16 pb-8">
      {/* Main Footer Content */}
      <div className="w-[98%] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Logo and Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/logos/logos/lep-col.png"
                alt="Lepakshi Handicrafts"
                width={120}
                height={80}
                className="h-16 w-auto object-contain"
              />
            </Link>
            <p className="text-sm text-gray-600 leading-relaxed mb-6">
              Andhra Pradesh Handicrafts Development Corporation Ltd.
            </p>
            <p className="text-xs text-gray-500 mb-6">
              Preserving heritage, empowering artisans since 1981.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  className="w-9 h-9 bg-white border border-gray-300 rounded-full flex items-center justify-center hover:bg-[#0f766e] hover:text-white hover:border-[#0f766e] transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={16} />
                </Link>
              ))}
            </div>
          </div>

          {/* Crafts */}
          <div>
            <h4 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wider">
              CRAFTS
            </h4>
            <ul className="space-y-2">
              {craftsLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 hover:text-[#0f766e] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Collections */}
          <div>
            <h4 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wider">
              COLLECTIONS
            </h4>
            <ul className="space-y-2">
              {collectionsLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 hover:text-[#0f766e] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About Us */}
          <div>
            <h4 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wider">
              ABOUT US
            </h4>
            <ul className="space-y-2">
              {aboutLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    target={link.target}
                    className="text-sm text-gray-600 hover:text-[#0f766e] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wider">
              SUPPORT
            </h4>
            <ul className="space-y-2">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 hover:text-[#0f766e] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="w-[98%] mx-auto px-6 lg:px-12">
        <div className="border-t border-gray-300 pt-8 pb-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Trust Badges */}
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <ShieldCheck size={18} className="text-green-600" />
                <span>Secure Payments</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <BadgeCheck size={18} className="text-blue-600" />
                <span>CI Certified Products</span>
              </div>
            </div>

            {/* Copyright */}
            <p className="text-sm text-gray-500 text-center">
              © {new Date().getFullYear()} Lepakshi - APHDCL. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
 