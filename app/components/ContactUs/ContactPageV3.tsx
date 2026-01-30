'use client';

import { useState } from 'react';
import { Send, RefreshCw } from 'lucide-react';

export default function ContactPageV3() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    category: '',
    subject: '',
    message: '',
    captcha: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-[#F5ECE3]">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#0f766e] to-[#0d9488] py-20">
        <div className="w-[98%] max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <span className="inline-block text-[#E0AE31] text-xs tracking-[0.3em] uppercase font-semibold mb-4">
            GET IN TOUCH
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-[family-name:var(--font-playfair)]">
            Contact Us
          </h1>
          <p className="text-white/90 text-lg max-w-2xl mx-auto">
            We're here to help you discover the finest Indian handicrafts. Reach out to us for any inquiries, feedback, or assistance.
          </p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="w-[98%] max-w-3xl mx-auto px-6 py-16">
        <div className="bg-white rounded-xl shadow-xl p-8 md:p-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center font-[family-name:var(--font-playfair)]">
            Send Us a Message
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Fields */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                  First Name*
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  placeholder="First Name"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#0f766e] focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                  Last Name*
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  placeholder="Last Name"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#0f766e] focus:outline-none transition-colors"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email*
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Email"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#0f766e] focus:outline-none transition-colors"
              />
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number*
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="Phone Number"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#0f766e] focus:outline-none transition-colors"
              />
            </div>

            {/* Category */}
            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                Category*
              </label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#0f766e] focus:outline-none transition-colors bg-white"
              >
                <option value="">Select Category</option>
                <option value="general">General Inquiry</option>
                <option value="products">Product Information</option>
                <option value="artisan">Artisan Support</option>
                <option value="partnership">Partnership</option>
                <option value="feedback">Feedback</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Subject */}
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                Subject*
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="Subject"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#0f766e] focus:outline-none transition-colors"
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Message*
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                placeholder="Your Message"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#0f766e] focus:outline-none transition-colors resize-none"
              />
            </div>

            {/* Captcha */}
            <div>
              <label htmlFor="captcha" className="block text-sm font-medium text-gray-700 mb-2">
                Captcha*
              </label>
              <div className="flex gap-4 items-center">
                <div className="bg-gray-100 px-6 py-3 rounded-lg border-2 border-gray-200 font-mono text-xl font-bold tracking-wider select-none">
                  6FUPOS
                </div>
                <button
                  type="button"
                  className="p-3 text-gray-600 hover:text-[#0f766e] transition-colors"
                  aria-label="Refresh captcha"
                >
                  <RefreshCw size={20} />
                </button>
              </div>
              <input
                type="text"
                id="captcha"
                name="captcha"
                value={formData.captcha}
                onChange={handleChange}
                required
                placeholder="Enter the captcha text"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#0f766e] focus:outline-none transition-colors mt-3"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#2C1810] text-white py-4 rounded-lg font-semibold hover:bg-[#1a1a1a] transition-colors flex items-center justify-center gap-2"
            >
              <Send size={20} />
              Send Enquiry
            </button>
          </form>
        </div>
      </div>

      {/* Contact Information */}
      <div className="w-[98%] max-w-7xl mx-auto px-6 lg:px-12 pb-16">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-[#E0AE31] to-[#d97706] rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Visit Us</h3>
            <p className="text-gray-600 text-sm">
              Lepakshi Handicrafts Emporium<br />
              Gandhi Nagar, Vijayawada - 520003
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-[#0f766e] to-[#0d9488] rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Call Us</h3>
            <p className="text-gray-600 text-sm">
              +91 9184990935<br />
              +91 9184990937
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-[#d97706] to-[#E0AE31] rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Email Us</h3>
            <p className="text-gray-600 text-sm">
              info@lepakshihandicrafts.gov.in
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
