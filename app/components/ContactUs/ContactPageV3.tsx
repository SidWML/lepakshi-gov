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
    <div className="min-h-screen bg-[#F5ECE3] py-16 md:py-24">
      <div className="w-[98%] max-w-3xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-[#E0AE31] text-xs tracking-[0.3em] uppercase font-semibold mb-4">
            GET IN TOUCH
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-[family-name:var(--font-playfair)]">
            Contact Us
          </h1>
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-8 h-px bg-[#E0AE31]" />
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#E0AE31]">
              <path d="M12 2L14 8L20 10L14 12L12 18L10 12L4 10L10 8L12 2Z" fill="currentColor" />
            </svg>
            <div className="w-8 h-px bg-[#E0AE31]" />
          </div>
          <p className="text-gray-600 max-w-xl mx-auto">
            We're here to help you discover the finest Indian handicrafts. Reach out to us for any inquiries, feedback, or assistance.
          </p>
        </div>

        {/* Contact Form */}
        <div className="bg-white  p-8 md:p-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center font-[family-name:var(--font-playfair)]">
            Send Us a Message
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name Fields */}
            <div className="grid md:grid-cols-2 gap-5">
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
                  className="w-full px-4 py-2.5 border border-gray-300 rounded focus:border-[#E0AE31] focus:outline-none focus:ring-1 focus:ring-[#E0AE31] transition-colors"
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
                  className="w-full px-4 py-2.5 border border-gray-300 rounded focus:border-[#E0AE31] focus:outline-none focus:ring-1 focus:ring-[#E0AE31] transition-colors"
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
                className="w-full px-4 py-2.5 border border-gray-300 rounded focus:border-[#E0AE31] focus:outline-none focus:ring-1 focus:ring-[#E0AE31] transition-colors"
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
                className="w-full px-4 py-2.5 border border-gray-300 rounded focus:border-[#E0AE31] focus:outline-none focus:ring-1 focus:ring-[#E0AE31] transition-colors"
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
                className="w-full px-4 py-2.5 border border-gray-300 rounded focus:border-[#E0AE31] focus:outline-none focus:ring-1 focus:ring-[#E0AE31] transition-colors bg-white"
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
                className="w-full px-4 py-2.5 border border-gray-300 rounded focus:border-[#E0AE31] focus:outline-none focus:ring-1 focus:ring-[#E0AE31] transition-colors"
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
                rows={5}
                placeholder="Your Message"
                className="w-full px-4 py-2.5 border border-gray-300 rounded focus:border-[#E0AE31] focus:outline-none focus:ring-1 focus:ring-[#E0AE31] transition-colors resize-none"
              />
            </div>

            {/* Captcha */}
            <div>
              <label htmlFor="captcha" className="block text-sm font-medium text-gray-700 mb-2">
                Captcha*
              </label>
              <div className="flex gap-3 items-center mb-3">
                <div className="bg-gray-50 px-5 py-2.5 rounded border border-gray-300 font-mono text-lg font-bold tracking-widest select-none">
                  SNVHFC
                </div>
                <button
                  type="button"
                  className="p-2.5 text-gray-600 hover:text-[#E0AE31] transition-colors"
                  aria-label="Refresh captcha"
                >
                  <RefreshCw size={18} />
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
                className="w-full px-4 py-2.5 border border-gray-300 rounded focus:border-[#E0AE31] focus:outline-none focus:ring-1 focus:ring-[#E0AE31] transition-colors"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#6B4423] text-white py-3.5 rounded font-semibold hover:bg-[#563619] transition-colors flex items-center justify-center gap-2 text-sm"
            >
              <Send size={18} />
              Send Enquiry
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
