'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Star, UserCheck, Award, ArrowRight, Play, X, Sparkles } from 'lucide-react';
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

      {/* Tour Video Modal */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl">
          <div className="relative w-full max-w-md bg-[#181C24] border border-white/20 rounded-3xl p-6 sm:p-8 shadow-2xl flex flex-col items-center text-center text-white">
            <button
              onClick={() => setIsVideoModalOpen(false)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-14 h-14 rounded-full bg-[#C8A86B]/20 flex items-center justify-center mb-4 text-[#C8A86B]">
              <Sparkles className="w-7 h-7 text-[#C8A86B]" />
            </div>

            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#C8A86B] mb-1">
              INSTAGRAM SHOWCASE REELS
            </span>
            <h3 className="text-2xl font-serif font-bold text-white mb-2">
              @cut_n_looks_ Official
            </h3>
            <p className="text-xs text-white/70 leading-relaxed mb-6">
              Watch live hair transformations, bridal suites, and balayage reels directly on our Instagram profile.
            </p>

            <a
              href="https://www.instagram.com/cut_n_looks_/?hl=en"
              target="_blank"
              rel="noreferrer"
              className="w-full py-4 rounded-full bg-[#C8A86B] text-[#181C24] font-bold text-xs uppercase tracking-wider hover:bg-[#D4B579] transition-colors shadow-md flex items-center justify-center gap-2"
            >
              <span>Watch @cut_n_looks_ Reels ↗</span>
            </a>
          </div>
        </div>
      )}
    </section>
  );
};
