'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Star, UserCheck, Award, ArrowRight, Play, X, Sparkles, Instagram } from 'lucide-react';
import { ImageRevealBackground } from './ImageRevealBackground';

interface HeroProps {
  onBookClick?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBookClick }) => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <section id="home" className="relative min-h-screen w-full flex items-center pt-20 sm:pt-28 pb-12 sm:pb-16 px-4 sm:px-12 bg-[#F4F1EA] overflow-hidden">
      {/* Full-Bleed Interactive Dual-Image Spotlight Reveal Background */}
      <ImageRevealBackground />

      <div className="relative z-10 max-w-[1400px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[calc(100vh-140px)]">
        {/* Left Column: Premium Liquid Glass Editorial Content Card */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-6 max-w-xl bg-gradient-to-br from-white/80 via-white/65 to-white/50 backdrop-blur-2xl backdrop-saturate-150 rounded-[32px] sm:rounded-[50px] p-6 sm:p-12 border border-white/90 shadow-[inset_0_1.5px_0px_rgba(255,255,255,0.9),0_25px_60px_rgba(0,0,0,0.08)] flex flex-col justify-between"
        >
          <div>
            {/* Tagline Header & Instagram Profile Link */}
            <a
              href="https://www.instagram.com/cut_n_looks_/?hl=en"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 mb-4 sm:mb-6 hover:opacity-80 transition-opacity group"
            >
              <span className="w-8 h-[2px] bg-[#C8A86B]" />
              <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.2em] sm:tracking-[0.25em] text-[#C8A86B] uppercase flex items-center gap-1.5">
                @CUT_N_LOOKS_ • HAUTE BEAUTY
              </span>
            </a>

            {/* Main Editorial Headline */}
            <h1 className="text-4xl sm:text-7xl lg:text-8xl font-serif tracking-tight text-[#1F1F1F] leading-[0.95] mb-6 sm:mb-8 select-none">
              Beauty.<br />
              <span className="italic font-normal text-[#C8A86B] font-serif">Perfected.</span>
            </h1>

            {/* Subtext */}
            <p className="text-[#3A3A3A] text-xs sm:text-base font-normal leading-relaxed mb-8 sm:mb-10 max-w-md">
              Where expertise meets artistry. Every appointment is crafted to bring out your most confident self.
            </p>

            {/* Action Buttons Row */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-8 sm:mb-10">
              <Link href="/book" onClick={onBookClick}>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-[#C8A86B] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#B8975B] transition-colors shadow-[0_8px_20px_rgba(200,168,107,0.3)] flex items-center gap-2.5 cursor-pointer"
                >
                  <span>Book Experience</span>
                  <ArrowRight className="w-4 h-4 text-white" />
                </motion.button>
              </Link>

              <Link href="/services">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-white/70 backdrop-blur-md border border-white/90 text-[#1F1F1F] font-bold text-xs uppercase tracking-wider hover:bg-white hover:border-black/20 transition-all cursor-pointer shadow-sm"
                >
                  Explore Services
                </motion.button>
              </Link>

              {/* Round Video Button */}
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsVideoModalOpen(true)}
                className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/70 backdrop-blur-md border border-white/90 flex items-center justify-center text-[#1F1F1F] hover:bg-white transition-all cursor-pointer shadow-sm"
                aria-label="Play tour video"
              >
                <Play className="w-4 h-4 fill-[#1F1F1F] ml-0.5" />
              </motion.button>
            </div>
          </div>

          {/* Bottom Stats Row */}
          <div className="pt-6 border-t border-black/8 grid grid-cols-3 gap-2 sm:gap-3">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#C8A86B]/15 flex items-center justify-center text-[#C8A86B] shrink-0">
                <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-[#C8A86B]" />
              </div>
              <div>
                <span className="text-xs sm:text-base font-bold text-[#1F1F1F] block leading-tight">4.9/5</span>
                <span className="text-[9px] sm:text-[11px] text-[#8E8E8E] font-medium block">Google</span>
              </div>
            </div>

            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#C8A86B]/15 flex items-center justify-center text-[#C8A86B] shrink-0">
                <UserCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </div>
              <div>
                <span className="text-xs sm:text-base font-bold text-[#1F1F1F] block leading-tight">3K+</span>
                <span className="text-[9px] sm:text-[11px] text-[#8E8E8E] font-medium block">Clients</span>
              </div>
            </div>

            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#C8A86B]/15 flex items-center justify-center text-[#C8A86B] shrink-0">
                <Award className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </div>
              <div>
                <span className="text-xs sm:text-base font-bold text-[#1F1F1F] block leading-tight">15+</span>
                <span className="text-[9px] sm:text-[11px] text-[#8E8E8E] font-medium block">Years</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Empty grid space allowing full-bleed background model to shine through on the far right */}
        <div className="lg:col-span-6 hidden lg:block" />
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 hidden sm:flex flex-col items-center gap-2 pointer-events-none">
        <span className="text-[9px] font-bold tracking-[0.25em] text-[#8E8E8E] uppercase">
          SCROLL TO DISCOVER
        </span>
        <div className="w-5 h-8 rounded-full border-2 border-[#C8A86B] flex justify-center p-1">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
            className="w-1.5 h-1.5 rounded-full bg-[#C8A86B]"
          />
        </div>
      </div>

      {/* Tour Instagram Showcase Video Modal */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md">
          <div className="relative w-full max-w-lg bg-[#FAFAF8] border border-black/10 rounded-[36px] p-6 sm:p-8 shadow-[0_30px_90px_rgba(0,0,0,0.2)] flex flex-col items-center text-center text-[#1F1F1F] overflow-hidden">
            {/* Ambient Gold Glow */}
            <div className="absolute -top-16 -left-16 w-64 h-64 bg-[#C8A86B]/15 blur-[80px] rounded-full pointer-events-none" />

            {/* Close Button */}
            <button
              onClick={() => setIsVideoModalOpen(false)}
              className="absolute top-5 right-5 z-20 w-9 h-9 rounded-full bg-white border border-black/10 shadow-sm flex items-center justify-center text-[#1F1F1F] hover:bg-[#1F1F1F] hover:text-white transition-all cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header Handle Badge */}
            <div className="flex items-center gap-2 mb-4 relative z-10">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#F56040] via-[#E1306C] to-[#C13584] text-white flex items-center justify-center shadow-sm">
                <Instagram className="w-4.5 h-4.5" />
              </div>
              <div className="text-left">
                <div className="flex items-center gap-1">
                  <span className="text-xs font-bold text-[#1F1F1F]">@cut_n_looks_</span>
                  <span className="w-3.5 h-3.5 rounded-full bg-[#0095F6] text-white flex items-center justify-center text-[8px] font-bold">✓</span>
                </div>
                <span className="text-[10px] text-[#6B7280]">Official Instagram Studio</span>
              </div>
            </div>

            {/* Visual Reel Card Frame */}
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-5 border border-black/10 shadow-md group cursor-pointer">
              <img
                src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=800&auto=format&fit=crop"
                alt="Cut N Looks Instagram Reel"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors flex flex-col items-center justify-center text-white">
                <div className="w-14 h-14 rounded-full bg-white/30 backdrop-blur-md border border-white/50 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <Play className="w-6 h-6 text-white fill-white ml-0.5" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-white mt-2 bg-black/50 px-3 py-1 rounded-full backdrop-blur-sm">
                  Tap to Watch Reels
                </span>
              </div>
            </div>

            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#C8A86B] mb-1 block">
              COUTURE TRANSFORMATIONS & REELS
            </span>
            <h3 className="text-2xl font-serif font-bold text-[#1F1F1F] mb-2 tracking-tight">
              Watch Live Studio Reels
            </h3>
            <p className="text-xs text-[#6B7280] leading-relaxed mb-6 max-w-sm">
              Experience honey balayage glossing, royal bridal suites, and precision haircut transformations directly on our official Instagram.
            </p>

            <a
              href="https://www.instagram.com/cut_n_looks_/?hl=en"
              target="_blank"
              rel="noreferrer"
              className="w-full py-4 rounded-full bg-gradient-to-r from-[#E1306C] via-[#FD1D1D] to-[#F56040] text-white font-bold text-xs uppercase tracking-widest hover:opacity-95 transition-all shadow-md flex items-center justify-center gap-2"
            >
              <Instagram className="w-4 h-4" />
              <span>Watch @cut_n_looks_ Reels ↗</span>
            </a>
          </div>
        </div>
      )}
    </section>
  );
};
