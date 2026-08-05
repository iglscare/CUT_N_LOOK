'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Menu, X } from 'lucide-react';

interface NavbarProps {
  onBookClick?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onBookClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Stylists', href: '/stylists' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Contact', href: '/book' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-8 pt-3 sm:pt-6">
      <div className="max-w-[1380px] mx-auto">
        <div
          className={`w-full rounded-full px-4 sm:px-10 h-14 sm:h-20 flex items-center justify-between transition-all duration-500 border ${
            isScrolled
              ? 'bg-white/95 backdrop-blur-md border-black/10 shadow-lg'
              : 'bg-white/90 backdrop-blur-sm border-black/5 shadow-sm'
          }`}
        >
          {/* Logo & Subtitle */}
          <Link href="/" className="flex items-center gap-2 sm:gap-3">
            <span className="text-lg sm:text-2xl font-serif font-bold tracking-tight text-[#1F1F1F]">
              Cut N Looks<span className="text-[#C8A86B]">.</span>
            </span>
            <span className="hidden lg:inline-block text-[9px] font-bold tracking-[0.2em] text-[#8E8E8E] uppercase border-l border-black/15 pl-3">
              HAIR & BEAUTY STUDIO
            </span>
          </Link>

          {/* Navigation Links (Desktop) */}
          <nav className="hidden md:flex items-center gap-8 text-xs font-medium text-[#4A4A4A]">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative py-1 transition-colors hover:text-[#1F1F1F]"
                >
                  <span className={isActive ? 'text-[#1F1F1F] font-bold' : ''}>
                    {link.label}
                  </span>
                  {isActive && (
                    <motion.div
                      layoutId="referenceNavUnderline"
                      className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#1F1F1F]"
                      transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Book Experience CTA & Mobile Toggle */}
          <div className="flex items-center gap-2 sm:gap-3">
            <Link href="/book" onClick={onBookClick}>
              <button className="px-3.5 sm:px-6 py-2 sm:py-3 rounded-full bg-[#C8A86B] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#B8975B] transition-colors duration-300 shadow-sm flex items-center gap-1.5 sm:gap-2 cursor-pointer">
                <Calendar className="w-3.5 h-3.5 text-white shrink-0" />
                <span>
                  <span className="hidden sm:inline">Book Experience</span>
                  <span className="sm:hidden text-[11px]">Book</span>
                </span>
              </button>
            </Link>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-1.5 rounded-full bg-black/5 text-[#1F1F1F] hover:text-[#C8A86B] transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Glass Slide-Down Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -15, scale: 0.98 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="md:hidden max-w-md mx-auto mt-2 bg-white/98 backdrop-blur-xl border border-black/10 rounded-3xl p-6 shadow-2xl flex flex-col gap-3 text-xs font-semibold uppercase tracking-widest text-[#1F1F1F] z-50"
          >
            <div className="flex items-center justify-between pb-3 border-b border-black/5 text-[10px] text-[#8E8E8E] tracking-widest">
              <span>NAVIGATION MENU</span>
              <span>CUT N LOOKS STUDIO</span>
            </div>

            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`py-3 px-4 rounded-2xl flex items-center justify-between transition-colors ${
                    isActive ? 'bg-[#F4F1EA] text-[#C8A86B] font-bold' : 'hover:bg-black/5'
                  }`}
                >
                  <span className="text-sm font-serif normal-case tracking-normal">{link.label}</span>
                  <span className="text-[10px] text-[#8E8E8E] uppercase tracking-widest">Explore →</span>
                </Link>
              );
            })}

            <Link
              href="/book"
              onClick={() => { setMobileMenuOpen(false); onBookClick?.(); }}
              className="py-3.5 bg-[#C8A86B] text-white rounded-full font-bold text-center uppercase tracking-wider mt-2 shadow-md hover:bg-[#B8975B] transition-colors text-xs"
            >
              Book Your Appointment
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
