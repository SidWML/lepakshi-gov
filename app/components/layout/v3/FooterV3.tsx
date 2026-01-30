// app/components/layout/v3/FooterV3.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  ArrowUp,
  Send,
} from "lucide-react";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "Heritage", href: "/heritage" },
  { name: "Products", href: "/products" },
  { name: "Artisans", href: "/artisans" },
  { name: "News & Events", href: "/news-events" },
  { name: "Contact", href: "/contact" },
];

const craftCategories = [
  { name: "Wood Crafts", href: "/products/wood" },
  { name: "Textiles & Weaves", href: "/products/textiles" },
  { name: "Metal Crafts", href: "/products/metal" },
  { name: "Paintings", href: "/products/paintings" },
  { name: "Spiritual", href: "/products/spiritual" },
  { name: "Natural Fibres", href: "/products/fibres" },
];

const socialLinks = [
  { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
];

export default function FooterV3() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#1a1a1a] text-white overflow-hidden">
      {/* Decorative Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23E0AE31'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Top Gold Border */}
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#E0AE31] to-transparent" />

      {/* Government Logos Section */}
      <div className="relative border-b border-white/10">
        <div className="w-[98%] max-w-none mx-auto px-6 lg:px-12 py-8">
          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12">
            <Image
              src="/AP-emblem-logo.png"
              alt="AP Government Emblem"
              width={80}
              height={80}
              className="h-16 w-auto object-contain opacity-90"
              quality={100}
            />
            <Image
              src="/cbn.png"
              alt="Chief Minister"
              width={80}
              height={80}
              className="h-16 w-auto object-contain rounded-full border-2 border-[#E0AE31]/30"
              quality={100}
            />
            <Image
              src="/logos/logos/lep-col.png"
              alt="Lepakshi Logo"
              width={80}
              height={80}
              className="h-16 w-auto object-contain"
              quality={100}
            />
            <Image
              src="/savitha.png"
              alt="Minister"
              width={80}
              height={80}
              className="h-16 w-auto object-contain rounded-full border-2 border-[#E0AE31]/30"
              quality={100}
            />
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="relative w-[98%] max-w-none mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <div className="mb-6">
              <h3 className="text-2xl font-bold font-[family-name:var(--font-playfair)] text-[#E0AE31] mb-2">
                Lepakshi Handicrafts
              </h3>
              <p className="text-xs tracking-[0.2em] uppercase text-white/60">
                Andhra Pradesh Handicrafts Development Corporation Ltd.
              </p>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Preserving traditional crafts and empowering artisans since 1961. We bridge
              the gap between master craftspeople and the modern world, celebrating the
              timeless artistry of Andhra Pradesh.
            </p>

            {/* Newsletter */}
            <div className="mb-6">
              <h4 className="text-sm font-bold mb-3 text-[#E0AE31]">
                Subscribe to Our Newsletter
              </h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-white/10 border border-white/20 text-white placeholder-white/50 text-sm focus:outline-none focus:border-[#E0AE31] transition-colors"
                />
                <button className="px-4 py-2 bg-[#E0AE31] text-[#1a1a1a] hover:bg-white transition-colors">
                  <Send size={18} />
                </button>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-sm font-bold mb-3 text-[#E0AE31]">Follow Us</h4>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <Link
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    className="w-10 h-10 bg-white/10 border border-white/20 flex items-center justify-center hover:bg-[#E0AE31] hover:border-[#E0AE31] hover:text-[#1a1a1a] transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon size={18} />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-lg font-bold mb-6 text-[#E0AE31] font-[family-name:var(--font-playfair)]">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-[#E0AE31] hover:translate-x-1 inline-block transition-all text-sm"
                  >
                    → {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Craft Categories */}
          <div className="lg:col-span-3">
            <h4 className="text-lg font-bold mb-6 text-[#E0AE31] font-[family-name:var(--font-playfair)]">
              Craft Categories
            </h4>
            <ul className="space-y-3">
              {craftCategories.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-[#E0AE31] hover:translate-x-1 inline-block transition-all text-sm"
                  >
                    → {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-3">
            <h4 className="text-lg font-bold mb-6 text-[#E0AE31] font-[family-name:var(--font-playfair)]">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 group">
                <MapPin size={18} className="text-[#E0AE31] mt-0.5 flex-shrink-0" />
                <span className="text-white/70 text-sm group-hover:text-white transition-colors">
                  APHDC Head Office,<br />
                  Vijayawada, Andhra Pradesh,<br />
                  India - 520001
                </span>
              </li>
              <li className="flex items-center gap-3 group">
                <Phone size={18} className="text-[#E0AE31] flex-shrink-0" />
                <a
                  href="tel:+918662436700"
                  className="text-white/70 hover:text-[#E0AE31] transition-colors text-sm"
                >
                  +91 866 243 6700
                </a>
              </li>
              <li className="flex items-center gap-3 group">
                <Mail size={18} className="text-[#E0AE31] flex-shrink-0" />
                <a
                  href="mailto:contact@aphandicrafts.gov.in"
                  className="text-white/70 hover:text-[#E0AE31] transition-colors text-sm"
                >
                  contact@aphandicrafts.gov.in
                </a>
              </li>
            </ul>

            {/* Government Links */}
            <div className="mt-6 pt-6 border-t border-white/10">
              <h5 className="text-sm font-bold mb-3 text-white/80">Official Links</h5>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="https://www.ap.gov.in"
                    target="_blank"
                    className="text-white/60 hover:text-[#E0AE31] transition-colors text-xs"
                  >
                    AP Government Portal
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.india.gov.in"
                    target="_blank"
                    className="text-white/60 hover:text-[#E0AE31] transition-colors text-xs"
                  >
                    National Portal of India
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-white/10 bg-black/20">
        <div className="w-[98%] max-w-none mx-auto px-6 lg:px-12 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/50 text-xs text-center md:text-left">
              &copy; {new Date().getFullYear()} Andhra Pradesh Handicrafts Development Corporation.
              All rights reserved. | A State Government Undertaking
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="/privacy-policy"
                className="text-white/50 hover:text-[#E0AE31] transition-colors text-xs"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-white/50 hover:text-[#E0AE31] transition-colors text-xs"
              >
                Terms of Service
              </Link>
              <Link
                href="/sitemap"
                className="text-white/50 hover:text-[#E0AE31] transition-colors text-xs"
              >
                Sitemap
              </Link>
              <button
                onClick={scrollToTop}
                className="w-10 h-10 bg-[#E0AE31] text-[#1a1a1a] flex items-center justify-center hover:bg-white transition-colors shadow-lg"
                aria-label="Scroll to top"
              >
                <ArrowUp size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
