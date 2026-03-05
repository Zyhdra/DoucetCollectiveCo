"use client";

import { useState } from "react";
import Link from "next/link";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Connect to a form service like Formspree, Resend, or your own API route
    console.log("Form submitted:", formData);
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Navigation */}
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 bg-[#0a0a0a]/70 backdrop-blur-md border border-white/5 rounded-full px-6 py-2 flex items-center gap-8">
        <Link href="/" className="font-display text-lg tracking-[0.35em] uppercase text-[#c9a96e]">
          Doucet Collective
        </Link>
        <div className="hidden md:flex items-center gap-6">
          <Link href="/shop" className="text-xs tracking-[0.2em] uppercase text-white/60 hover:text-[#c9a96e] transition-colors duration-300">
            Shop
          </Link>
          <Link href="/about" className="text-xs tracking-[0.2em] uppercase text-white/60 hover:text-[#c9a96e] transition-colors duration-300">
            About
          </Link>
          <Link href="/contact" className="text-xs tracking-[0.2em] uppercase text-white/60 hover:text-[#c9a96e] transition-colors duration-300">
            Contact
          </Link>
          <h1>HELLO FROM UPDATED SITE</h1>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-36 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-xs tracking-[0.4em] uppercase text-[#c9a96e]/50 block mb-4">Get in Touch</span>
          <h1 className="font-display text-4xl md:text-6xl tracking-[0.1em] uppercase text-white/90 mb-6">
            Contact Us
          </h1>
          <p className="text-white/30 text-lg max-w-2xl mx-auto leading-relaxed font-light">
            Have a question about a piece, need help with an order, or just want to say hello? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="pb-32 px-6">
        <div className="max-w-xl mx-auto">
          {submitted ? (
            <div className="text-center py-20 border border-white/5 bg-white/[0.02]">
              <div className="w-16 h-16 mx-auto mb-6 border border-[#c9a96e]/30 rounded-full flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#c9a96e" strokeWidth="1.5">
                  <path d="M20 6L9 17L4 12" />
                </svg>
              </div>
              <h2 className="font-display text-2xl tracking-[0.1em] uppercase text-white/90 mb-3">
                Message Sent
              </h2>
              <p className="text-white/30 text-sm mb-8">
                Thank you for reaching out. We'll get back to you as soon as possible.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ name: "", email: "", subject: "", message: "" });
                }}
                className="text-xs tracking-[0.2em] uppercase text-[#c9a96e]/60 hover:text-[#c9a96e] transition-colors duration-300"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs tracking-[0.2em] uppercase text-white/40 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-white/[0.03] border border-white/10 px-4 py-3 text-sm text-white/80 placeholder-white/20 focus:outline-none focus:border-[#c9a96e]/30 transition-colors duration-300"
                  placeholder="Your name"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-xs tracking-[0.2em] uppercase text-white/40 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-white/[0.03] border border-white/10 px-4 py-3 text-sm text-white/80 placeholder-white/20 focus:outline-none focus:border-[#c9a96e]/30 transition-colors duration-300"
                  placeholder="your@email.com"
                />
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="subject"
                  className="block text-xs tracking-[0.2em] uppercase text-white/40 mb-2"
                >
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-white/[0.03] border border-white/10 px-4 py-3 text-sm text-white/80 focus:outline-none focus:border-[#c9a96e]/30 transition-colors duration-300 cursor-pointer"
                >
                  <option value="" className="bg-[#0a0a0a]">Select a subject</option>
                  <option value="general" className="bg-[#0a0a0a]">General Inquiry</option>
                  <option value="order" className="bg-[#0a0a0a]">Order Question</option>
                  <option value="custom" className="bg-[#0a0a0a]">Custom Request</option>
                  <option value="wholesale" className="bg-[#0a0a0a]">Wholesale Inquiry</option>
                  <option value="other" className="bg-[#0a0a0a]">Other</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-xs tracking-[0.2em] uppercase text-white/40 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-white/[0.03] border border-white/10 px-4 py-3 text-sm text-white/80 placeholder-white/20 focus:outline-none focus:border-[#c9a96e]/30 transition-colors duration-300 resize-none"
                  placeholder="Tell us what's on your mind..."
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="group relative w-full inline-flex items-center justify-center px-10 py-4 text-sm tracking-[0.25em] uppercase overflow-hidden border border-[#c9a96e] text-[#c9a96e] hover:text-[#0a0a0a] transition-colors duration-500"
              >
                <span className="absolute inset-0 bg-[#c9a96e] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                <span className="relative">Send Message</span>
              </button>
            </form>
          )}

          {/* Additional info */}
          <div className="mt-16 pt-12 border-t border-white/5 text-center">
            <p className="text-white/25 text-sm mb-2">Prefer to shop directly?</p>
            <a
              href="https://www.etsy.com/shop/DoucetCollectiveCo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-[#c9a96e]/60 hover:text-[#c9a96e] transition-colors duration-300"
            >
              Message us on Etsy
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h3 className="font-display text-lg tracking-[0.3em] uppercase text-[#c9a96e] mb-4">
                Doucet Collective
              </h3>
              <p className="text-white/25 text-sm leading-relaxed">
                Curated crystals and rare minerals for the discerning collector.
              </p>
            </div>
            <div>
              <h4 className="text-xs tracking-[0.3em] uppercase text-white/40 mb-4">Navigate</h4>
              <div className="flex flex-col gap-2">
                <Link href="/shop" className="text-sm text-white/25 hover:text-[#c9a96e] transition-colors duration-300">Shop</Link>
                <Link href="/about" className="text-sm text-white/25 hover:text-[#c9a96e] transition-colors duration-300">About</Link>
                <Link href="/contact" className="text-sm text-white/25 hover:text-[#c9a96e] transition-colors duration-300">Contact</Link>
              </div>
            </div>
            <div>
              <h4 className="text-xs tracking-[0.3em] uppercase text-white/40 mb-4">Connect</h4>
              <div className="flex flex-col gap-2">
                <a href="https://www.etsy.com/shop/DoucetCollectiveCo" target="_blank" rel="noopener noreferrer" className="text-sm text-white/25 hover:text-[#c9a96e] transition-colors duration-300">
                  Etsy
                </a>
              </div>
            </div>
          </div>
          <div className="mt-16 pt-8 border-t border-white/5 text-center">
            <p className="text-white/15 text-xs tracking-widest">
              © {new Date().getFullYear()} Doucet Collective. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
