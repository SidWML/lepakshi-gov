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
  { name: "Etikoppaka Lacquer", href: "/products/etikoppaka-lacquer" },
  { name: "Pen Kalamkari", href: "/products/pen-kalamkari" },
  { name: "Kondapalli Toys", href: "/products/kondapalli-toys" },
  { name: "Brassware", href: "/products/brassware" },
  { name: "Bronze Castings", href: "/products/bronze-castings" },
];

const collectionsLinks = [
  { name: "Featured Products", href: "/products/featured" },
  { name: "Spiritual & Pooja", href: "/products/spiritual-pooja" },
  { name: "ODOP", href: "/products/odop" },
];

const aboutLinks = [
  { name: "Our Heritage", href: "/heritage" },
  { name: "Store Locator", href: "/stores" },
  { name: "Blogs", href: "/blogs" },
  { name: "Gallery", href: "/gallery" },
  { name: "Lepakshi Handicrafts (Govt. Website)", href: "https://lepakshihandicrafts.com", target: "_blank" },
];

const supportLinks = [
  // { name: "Privacy Policy", href: "/privacy-policy" },
  // { name: "Terms of Use", href: "/terms" },
  // { name: "Terms of Sale", href: "/terms-of-sale" },
  // { name: "Shipping & Delivery Policy", href: "/shipping-delivery" },
  // { name: "Replacement Policy", href: "/replacement-policy" },
  { name: "Contact Us", href: "/contact-us" },
];

const socialLinks = [
  { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
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
