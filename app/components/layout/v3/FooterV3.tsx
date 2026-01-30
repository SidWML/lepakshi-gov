// app/components/layout/v3/FooterV3.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
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
  Store,
} from "lucide-react";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About us", href: "/aboutus" },
  { name: "Tenders", href: "/tenders" },
  { name: "News & Events", href: "/news-events" },
  { name: "Products", href: "/products" },
  { name: "Artisan Desk", href: "/artisans" },
];

const stores = [
  { name: "Vijayawada", href: "/stores/vijayawada" },
  { name: "Ananathapur", href: "/stores/ananathapur" },
  { name: "Guntur", href: "/stores/guntur" },
  { name: "Visakhapatnam", href: "/stores/visakhapatnam" },
  { name: "Rajahmundry", href: "/stores/rajahmundry" },
  { name: "Chittoor", href: "/stores/chittoor" },
  { name: "Kurnool", href: "/stores/kurnool" },
  { name: "Kadapa", href: "/stores/kadapa" },
  { name: "Tirupathi", href: "/stores/tirupathi" },
  { name: "Hyderabad", href: "/stores/hyderabad" },
  { name: "Kolkata", href: "/stores/kolkata" },
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
    <footer className="relative bg-gradient-to-br from-[#2C1810] via-[#1a1a1a] to-[#0f0f0f] text-white overflow-hidden">
      {/* Decorative Background Pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23E0AE31'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Decorative Top Border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#E0AE31] via-[#d97706] to-[#E0AE31]" />

      {/* Government Logos Section */}
      <div className="relative border-b border-[#E0AE31]/20">
        <div className="w-[98%] max-w-7xl mx-auto px-6 lg:px-12 py-10">
          <div className="flex flex-wrap items-center justify-center gap-12">
            <div className="group">
              <Image
                src="/AP-emblem-logo.png"
                alt="AP Government Emblem"
                width={100}
                height={100}
                className="h-20 w-auto object-contain opacity-90 group-hover:opacity-100 transition-opacity"
                quality={100}
              />
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-[#E0AE31]/20 rounded-full blur-xl group-hover:blur-2xl transition-all" />
              <Image
                src="/cbn.png"
                alt="Chief Minister"
                width={100}
                height={100}
                className="relative h-20 w-auto object-contain rounded-full border-2 border-[#E0AE31]/40 shadow-lg"
                quality={100}
              />
            </div>
            <div className="group">
              <Image
                src="/logos/logos/lep-col.png"
                alt="Lepakshi Logo"
                width={100}
                height={100}
                className="h-20 w-auto object-contain group-hover:scale-110 transition-transform"
                quality={100}
              />
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-[#E0AE31]/20 rounded-full blur-xl group-hover:blur-2xl transition-all" />
              <Image
                src="/savitha.png"
                alt="Minister"
                width={100}
                height={100}
                className="relative h-20 w-auto object-contain rounded-full border-2 border-[#E0AE31]/40 shadow-lg"
                quality={100}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="relative w-[98%] max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Address Column */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-[#E0AE31] to-[#d97706] rounded-lg flex items-center justify-center">
                <MapPin size={20} className="text-white" />
              </div>
              <h4 className="text-xl font-bold text-[#E0AE31] font-[family-name:var(--font-playfair)]">
                ADDRESS
              </h4>
            </div>
            <div className="space-y-4 pl-1">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-[#E0AE31] mt-1 flex-shrink-0" />
                <p className="text-white/80 text-sm leading-relaxed">
                  Lepakshi Handicrafts Emporium Gandhi Nagar, Vijayawada - 520003.
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-[#E0AE31] flex-shrink-0" />
                <div className="text-white/80 text-sm">
                  <a href="tel:+919184990935" className="hover:text-[#E0AE31] transition-colors">
                    Phone: +91 9184990935
                  </a>
                  <span className="mx-2">|</span>
                  <a href="tel:+919184990937" className="hover:text-[#E0AE31] transition-colors">
                    +91 9184990937
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-[#E0AE31] flex-shrink-0" />
                <a
                  href="mailto:info@lepakshihandicrafts.gov.in"
                  className="text-white/80 hover:text-[#E0AE31] transition-colors text-sm"
                >
                  Email: info@lepakshihandicrafts.gov.in
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-8">
              <h5 className="text-sm font-bold mb-4 text-white/90">Connect With Us</h5>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <Link
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    className="w-10 h-10 bg-white/5 border border-[#E0AE31]/30 rounded-lg flex items-center justify-center hover:bg-[#E0AE31] hover:border-[#E0AE31] hover:text-[#1a1a1a] hover:scale-110 transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon size={18} />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-1 h-8 bg-gradient-to-b from-[#E0AE31] to-[#d97706] rounded-full" />
              <h4 className="text-xl font-bold text-[#E0AE31] font-[family-name:var(--font-playfair)]">
                Quick Links
              </h4>
            </div>
            <ul className="space-y-3 pl-1">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-[#E0AE31] hover:translate-x-2 inline-flex items-center gap-2 transition-all text-sm group"
                  >
                    <span className="w-1.5 h-1.5 bg-[#E0AE31]/50 rounded-full group-hover:bg-[#E0AE31]" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Newsletter */}
            <div className="mt-8 p-4 bg-white/5 border border-[#E0AE31]/20 rounded-lg">
              <h5 className="text-sm font-bold mb-3 text-white/90">Newsletter</h5>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 bg-white/10 border border-white/20 rounded text-white placeholder-white/40 text-xs focus:outline-none focus:border-[#E0AE31] transition-colors"
                />
                <button className="px-3 py-2 bg-gradient-to-r from-[#E0AE31] to-[#d97706] text-white rounded hover:shadow-lg hover:scale-105 transition-all">
                  <Send size={14} />
                </button>
              </div>
            </div>
          </div>

          {/* Our Stores */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-[#0f766e] to-[#0d9488] rounded-lg flex items-center justify-center">
                <Store size={20} className="text-white" />
              </div>
              <h4 className="text-xl font-bold text-[#E0AE31] font-[family-name:var(--font-playfair)]">
                OUR STORES
              </h4>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 pl-1">
              {stores.map((store) => (
                <Link
                  key={store.name}
                  href={store.href}
                  className="group"
                >
                  <div className="px-4 py-3 bg-white/5 border border-[#E0AE31]/20 rounded-lg hover:bg-gradient-to-r hover:from-[#E0AE31]/10 hover:to-[#d97706]/10 hover:border-[#E0AE31] transition-all duration-300">
                    <p className="text-white/70 group-hover:text-[#E0AE31] text-sm font-medium transition-colors">
                      {store.name}
                    </p>
                  </div>
                </Link>
              ))}
            </div>

            {/* Government Links */}
            <div className="mt-8 p-4 bg-gradient-to-r from-[#E0AE31]/5 to-[#d97706]/5 border border-[#E0AE31]/20 rounded-lg">
              <h5 className="text-sm font-bold mb-3 text-white/90 flex items-center gap-2">
                <span className="w-2 h-2 bg-[#E0AE31] rounded-full" />
                Official Links
              </h5>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="https://www.ap.gov.in"
                  target="_blank"
                  className="text-white/60 hover:text-[#E0AE31] transition-colors text-xs underline underline-offset-2"
                >
                  AP Government Portal
                </Link>
                <Link
                  href="https://www.india.gov.in"
                  target="_blank"
                  className="text-white/60 hover:text-[#E0AE31] transition-colors text-xs underline underline-offset-2"
                >
                  National Portal of India
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-[#E0AE31]/20 bg-black/30">
        <div className="w-[98%] max-w-7xl mx-auto px-6 lg:px-12 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/50 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Lepakshi Handicrafts. All Rights Reserved
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="/privacy-policy"
                className="text-white/50 hover:text-[#E0AE31] transition-colors text-sm"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-white/50 hover:text-[#E0AE31] transition-colors text-sm"
              >
                Terms
              </Link>
              <button
                onClick={scrollToTop}
                className="w-10 h-10 bg-gradient-to-r from-[#E0AE31] to-[#d97706] text-white rounded-lg flex items-center justify-center hover:shadow-xl hover:scale-110 transition-all duration-300"
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
