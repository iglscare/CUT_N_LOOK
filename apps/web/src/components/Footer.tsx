'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter, MessageCircle } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#FAF8F5] text-[#202A36] border-t border-black/10 pt-20 pb-12 px-4 sm:px-8">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <span className="text-2xl font-serif font-bold text-[#202A36] tracking-tight">
                Cut N Looks<span className="text-[#C8A86B]">.</span>
              </span>
            </Link>
            <p className="text-[#6B7280] text-xs sm:text-sm leading-relaxed font-normal">
              A world-class luxury salon dedicated to precision hair architecture, balayage coloring, and organic skincare spa.
            </p>

            {/* Social Icons with 6° Rotation on Hover */}
            <div className="flex items-center gap-3 pt-2">
              {[
                { icon: Instagram, href: 'https://instagram.com' },
                { icon: Facebook, href: 'https://facebook.com' },
                { icon: Twitter, href: 'https://twitter.com' },
                { icon: MessageCircle, href: 'https://whatsapp.com' },
              ].map((item, idx) => (
                <motion.a
                  key={idx}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.1, rotate: 6 }}
                  transition={{ duration: 0.2 }}
                  className="w-9 h-9 rounded-full bg-white border border-black/10 flex items-center justify-center text-[#202A36] hover:text-[#C8A86B] hover:border-[#C8A86B]/50 transition-colors shadow-sm"
                >
                  <item.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Hours Column */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#C8A86B]">Studio Hours</h4>
            <div className="space-y-2 text-xs text-[#6B7280] font-medium">
              <div className="flex justify-between py-1.5 border-b border-black/8">
                <span>Monday - Friday</span>
                <span className="text-[#202A36] font-bold">9:00 AM - 8:00 PM</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-black/8">
                <span>Saturday</span>
                <span className="text-[#202A36] font-bold">8:00 AM - 7:00 PM</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-black/8">
                <span>Sunday</span>
                <span className="text-[#202A36] font-bold">10:00 AM - 6:00 PM</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#C8A86B]">Navigation</h4>
            <ul className="space-y-2.5 text-xs text-[#6B7280] font-medium">
              <li><Link href="/services" className="hover:text-[#202A36] transition-colors">Services & Pricing</Link></li>
              <li><Link href="/gallery" className="hover:text-[#202A36] transition-colors">Editorial Gallery</Link></li>
              <li><Link href="/stylists" className="hover:text-[#202A36] transition-colors">Master Stylists</Link></li>
              <li><Link href="/pricing" className="hover:text-[#202A36] transition-colors">Curated Packages</Link></li>
              <li><a href="http://localhost:3001" target="_blank" rel="noreferrer" className="text-[#C8A86B] hover:underline font-bold">Salon Owner Portal ↗</a></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#C8A86B]">Fifth Ave Studio</h4>
            <div className="space-y-3 text-xs text-[#6B7280] font-medium">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#C8A86B] shrink-0 mt-0.5" />
                <span className="text-[#202A36]">740 Fifth Avenue, Suite 1200<br />New York, NY 10019</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#C8A86B] shrink-0" />
                <span className="text-[#202A36]">+1 (212) 555-0192</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#C8A86B] shrink-0" />
                <span className="text-[#202A36]">concierge@cutnlooks.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 border-t border-black/10 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#6B7280] font-medium gap-4">
          <p>© {new Date().getFullYear()} Cut N Looks Studio. All Rights Reserved.</p>
          <div className="flex gap-6">
            <span className="hover:text-[#202A36] transition-colors cursor-pointer">Privacy Policy</span>
            <span className="hover:text-[#202A36] transition-colors cursor-pointer">Terms of Service</span>
            <span className="hover:text-[#202A36] transition-colors cursor-pointer">Accessibility</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
