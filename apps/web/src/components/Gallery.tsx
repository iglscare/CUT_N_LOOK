'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Maximize2, X, Heart, Eye } from 'lucide-react';

const GALLERY_CATEGORIES = ['All', 'Hair Architecture', 'Coloring', 'Bridal Suite', 'Skincare Spa', 'Nail Art'];

const GALLERY_ITEMS = [
  {
    id: 1,
    title: 'Signature Honey Balayage & Blowout',
    category: 'Coloring',
    image: '/gallery/gallery_1.png',
    gridSpan: 'lg:col-span-8 lg:row-span-2 min-h-[380px] sm:min-h-[460px]',
    likes: '4.8k'
  },
  {
    id: 2,
    title: 'Royal Indian Bridal Couture',
    category: 'Bridal Suite',
    image: '/gallery/gallery_2.png',
    gridSpan: 'lg:col-span-4 lg:row-span-2 min-h-[380px] sm:min-h-[460px]',
    likes: '5.2k'
  },
  {
    id: 3,
    title: 'Dwarka Luxury Studio Interior',
    category: 'Hair Architecture',
    image: '/gallery/gallery_3.png',
    gridSpan: 'lg:col-span-4 lg:row-span-1 min-h-[280px]',
    likes: '3.1k'
  },
  {
    id: 4,
    title: 'Precision Cut & Sculpting Session',
    category: 'Hair Architecture',
    image: '/gallery/gallery_4.png',
    gridSpan: 'lg:col-span-4 lg:row-span-1 min-h-[280px]',
    likes: '3.9k'
  },
  {
    id: 5,
    title: 'Botanical Scalp Steam & Massage Spa',
    category: 'Skincare Spa',
    image: '/gallery/gallery_5.png',
    gridSpan: 'lg:col-span-4 lg:row-span-1 min-h-[280px]',
    likes: '2.7k'
  },
  {
    id: 6,
    title: 'Gold Foil Geometric Nail Art Spa',
    category: 'Nail Art',
    image: '/gallery/gallery_6.png',
    gridSpan: 'lg:col-span-12 lg:row-span-1 min-h-[320px] sm:min-h-[400px]',
    likes: '4.2k'
  },
];

export const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<typeof GALLERY_ITEMS[0] | null>(null);

  const filteredItems = activeCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section id="gallery" className="pt-12 sm:pt-16 pb-20 px-4 sm:px-8 bg-[#FAFAF8] text-[#1F1F1F] select-none">
      <div className="max-w-[1440px] mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#C8A86B] mb-3 block">
            HIGH FASHION EDITORIAL PORTFOLIO
          </span>
          <h2 className="text-4xl sm:text-6xl font-serif font-bold text-[#1F1F1F] tracking-tight mb-4">
            Couture Masterpiece Gallery
          </h2>
          <p className="text-[#6B7280] text-sm sm:text-base max-w-xl mx-auto font-normal leading-relaxed">
            An interactive showcase of precision haircuts, honey balayage transformations, royal bridal styling, and organic spa rituals.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {GALLERY_CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`relative px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'bg-[#1F1F1F] text-white shadow-md'
                    : 'bg-white border border-black/10 text-[#6B7280] hover:text-[#1F1F1F] hover:border-black/20'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* High-Fashion Masonry Collage Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                onClick={() => setSelectedImage(item)}
                className={`group relative rounded-[32px] overflow-hidden bg-white border border-black/8 shadow-[0_15px_45px_rgba(0,0,0,0.06)] cursor-pointer flex flex-col justify-end ${item.gridSpan}`}
              >
                {/* Image Asset */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 group-hover:brightness-105 transition-all duration-700 ease-out"
                />

                {/* Subtle Gradient Shadow Base */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent opacity-85 group-hover:opacity-95 transition-opacity duration-300" />

                {/* Category Glass Pill Top Right */}
                <div className="absolute top-5 right-5 z-10 flex items-center gap-2">
                  <span className="px-3.5 py-1.5 rounded-full bg-white/85 backdrop-blur-md border border-white/90 text-[#1F1F1F] text-[10px] font-bold uppercase tracking-widest shadow-sm flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3 text-[#C8A86B]" /> {item.category}
                  </span>
                </div>

                {/* Content Overlay Bottom Left */}
                <div className="relative z-10 p-6 sm:p-8 text-white flex justify-between items-end">
                  <div>
                    <h3 className="font-serif text-xl sm:text-3xl font-bold leading-tight mb-2 text-white">
                      {item.title}
                    </h3>
                    <div className="flex items-center gap-3 text-xs text-white/80 font-medium">
                      <span className="flex items-center gap-1"><Heart className="w-3.5 h-3.5 text-[#C8A86B] fill-[#C8A86B]" /> {item.likes}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1"><Eye className="w-3.5 h-3.5" /> Tap to Preview</span>
                    </div>
                  </div>

                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-white group-hover:bg-[#C8A86B] group-hover:border-[#C8A86B] transition-all cursor-pointer shrink-0">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox Preview Modal */}
        {selectedImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl">
            <div className="relative w-full max-w-4xl bg-[#181C24] border border-white/20 rounded-3xl overflow-hidden shadow-2xl flex flex-col">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/50 text-white hover:bg-white/20 transition-colors cursor-pointer border border-white/20"
                aria-label="Close modal"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="relative w-full aspect-video sm:aspect-[16/10] bg-black">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="p-6 sm:p-8 bg-[#181C24] text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-white/10">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#C8A86B] block mb-1">
                    {selectedImage.category}
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-white">
                    {selectedImage.title}
                  </h3>
                </div>

                <a
                  href="/book"
                  className="px-6 py-3.5 rounded-full bg-[#C8A86B] text-[#181C24] font-bold text-xs uppercase tracking-wider hover:bg-[#D4B579] transition-colors cursor-pointer shadow-md"
                >
                  Book This Look
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
