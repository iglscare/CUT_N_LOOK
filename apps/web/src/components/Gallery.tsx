'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Maximize2, X, Heart, Eye, ChevronLeft, ChevronRight, LayoutGrid, Sliders } from 'lucide-react';

const GALLERY_CATEGORIES = ['All', 'Hair Architecture', 'Coloring', 'Bridal Suite', 'Skincare Spa', 'Nail Art'];

const GALLERY_ITEMS = [
  {
    id: 1,
    title: 'Signature Honey Balayage & Blowout',
    category: 'Coloring',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1200&auto=format&fit=crop',
    gridSpan: 'lg:col-span-8 lg:row-span-2 min-h-[380px] sm:min-h-[460px]',
    likes: '4.8k',
    subtitle: 'Luminous multi-dimensional balayage glossing'
  },
  {
    id: 2,
    title: 'Royal Indian Bridal Couture',
    category: 'Bridal Suite',
    image: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=1200&auto=format&fit=crop',
    gridSpan: 'lg:col-span-4 lg:row-span-2 min-h-[380px] sm:min-h-[460px]',
    likes: '5.2k',
    subtitle: 'Handcrafted bridal updos & HD airbrush glam'
  },
  {
    id: 3,
    title: 'Dwarka Luxury Studio Interior',
    category: 'Hair Architecture',
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1200&auto=format&fit=crop',
    gridSpan: 'lg:col-span-4 lg:row-span-1 min-h-[280px]',
    likes: '3.1k',
    subtitle: 'Gold illuminated LED arches & marble stations'
  },
  {
    id: 4,
    title: 'Precision Cut & Sculpting Session',
    category: 'Hair Architecture',
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=1200&auto=format&fit=crop',
    gridSpan: 'lg:col-span-4 lg:row-span-1 min-h-[280px]',
    likes: '3.9k',
    subtitle: 'Architectural hair sculpting & face contouring'
  },
  {
    id: 5,
    title: 'Botanical Scalp Steam & Massage Spa',
    category: 'Skincare Spa',
    image: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?q=80&w=1200&auto=format&fit=crop',
    gridSpan: 'lg:col-span-4 lg:row-span-1 min-h-[280px]',
    likes: '2.7k',
    subtitle: 'Organic herbal infusion & relaxing scalp steam'
  },
  {
    id: 6,
    title: 'Gold Foil Geometric Nail Art Spa',
    category: 'Nail Art',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=1200&auto=format&fit=crop',
    gridSpan: 'lg:col-span-12 lg:row-span-1 min-h-[320px] sm:min-h-[400px]',
    likes: '4.2k',
    subtitle: '24k gold leaf accents & couture gel manicures'
  },
];

export const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [viewMode, setViewMode] = useState<'3d' | 'grid'>('3d');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState<typeof GALLERY_ITEMS[0] | null>(null);

  const filteredItems = activeCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredItems.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
  };

  return (
    <section id="gallery" className="pt-12 sm:pt-16 pb-20 px-4 sm:px-8 bg-[#FAFAF8] text-[#1F1F1F] select-none">
      <div className="max-w-[1440px] mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#C8A86B] mb-3 block">
            HIGH FASHION EDITORIAL PORTFOLIO
          </span>
          <h2 className="text-4xl sm:text-6xl font-serif font-bold text-[#1F1F1F] tracking-tight mb-4">
            Couture Masterpiece Gallery
          </h2>
          <p className="text-[#6B7280] text-sm sm:text-base max-w-xl mx-auto font-normal leading-relaxed">
            An interactive 3D showcase of precision haircuts, honey balayage transformations, royal bridal styling, and organic spa rituals.
          </p>
        </div>

        {/* View Switcher & Category Filter Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-black/10">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {GALLERY_CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => {
                    setActiveCategory(cat);
                    setCurrentIndex(0);
                  }}
                  className={`relative px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
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

          {/* View Mode Toggle Switch (3D Showcase vs Grid) */}
          <div className="flex items-center gap-1.5 bg-white border border-black/10 p-1 rounded-full shadow-sm">
            <button
              onClick={() => setViewMode('3d')}
              className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-all cursor-pointer ${
                viewMode === '3d'
                  ? 'bg-[#C8A86B] text-[#1F1F1F] shadow-sm'
                  : 'text-[#6B7280] hover:text-[#1F1F1F]'
              }`}
            >
              <Sliders className="w-3.5 h-3.5" /> 3D Swiper Showcase
            </button>
            <button
              onClick={() => setViewMode('grid')}
              className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-all cursor-pointer ${
                viewMode === 'grid'
                  ? 'bg-[#C8A86B] text-[#1F1F1F] shadow-sm'
                  : 'text-[#6B7280] hover:text-[#1F1F1F]'
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" /> Grid Collage
            </button>
          </div>
        </div>

        {/* 3D INTERACTIVE CARD SWIPER SHOWCASE MODE (From User Screenshot) */}
        {viewMode === '3d' ? (
          <div className="relative w-full max-w-5xl mx-auto py-6 sm:py-10">
            {/* Outer Glowing Glass Frame Container */}
            <div className="relative rounded-[40px] bg-[#181C24] p-4 sm:p-8 border border-[#C8A86B]/40 shadow-[0_30px_90px_rgba(0,0,0,0.35)] overflow-hidden">
              {/* Subtle Animated Gold Ambient Backdrop Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#C8A86B]/15 blur-[120px] rounded-full pointer-events-none" />

              <div className="relative min-h-[420px] sm:min-h-[500px] flex items-center justify-center">
                <AnimatePresence mode="wait">
                  {filteredItems[currentIndex] && (
                    <motion.div
                      key={filteredItems[currentIndex].id}
                      initial={{ opacity: 0, scale: 0.9, rotateY: -15, x: 100 }}
                      animate={{ opacity: 1, scale: 1, rotateY: 0, x: 0 }}
                      exit={{ opacity: 0, scale: 0.9, rotateY: 15, x: -100 }}
                      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                      onClick={() => setSelectedImage(filteredItems[currentIndex])}
                      className="relative w-full grid grid-cols-1 md:grid-cols-12 rounded-[32px] overflow-hidden bg-white border border-white/20 shadow-2xl cursor-pointer group"
                    >
                      {/* Left Info Panel */}
                      <div className="md:col-span-5 p-8 sm:p-12 flex flex-col justify-between bg-gradient-to-br from-[#FAFAF8] to-[#F2EFE8] text-[#1F1F1F]">
                        <div>
                          <div className="flex items-center gap-2 mb-4">
                            <span className="px-3.5 py-1 rounded-full bg-[#C8A86B] text-[#1F1F1F] text-[10px] font-bold uppercase tracking-widest flex items-center gap-1">
                              <Sparkles className="w-3 h-3" /> {filteredItems[currentIndex].category}
                            </span>
                            <span className="text-xs text-[#6B7280] font-medium flex items-center gap-1">
                              <Heart className="w-3.5 h-3.5 text-[#C8A86B] fill-[#C8A86B]" /> {filteredItems[currentIndex].likes}
                            </span>
                          </div>

                          <h3 className="font-serif text-3xl sm:text-4xl font-bold leading-tight mb-3 text-[#1F1F1F]">
                            {filteredItems[currentIndex].title}
                          </h3>
                          <p className="text-xs sm:text-sm text-[#6B7280] leading-relaxed mb-6 font-normal">
                            {filteredItems[currentIndex].subtitle}
                          </p>
                        </div>

                        <div className="pt-6 border-t border-black/10 flex items-center justify-between">
                          <span className="text-xs font-bold uppercase tracking-wider text-[#C8A86B] flex items-center gap-1.5">
                            <Eye className="w-4 h-4" /> Tap To Expand 3D View
                          </span>
                          <div className="w-10 h-10 rounded-full bg-[#1F1F1F] text-white flex items-center justify-center group-hover:bg-[#C8A86B] group-hover:text-[#1F1F1F] transition-all shadow-md">
                            <Maximize2 className="w-4 h-4" />
                          </div>
                        </div>
                      </div>

                      {/* Right High-Fashion Photo Frame */}
                      <div className="md:col-span-7 relative min-h-[300px] sm:min-h-[440px] overflow-hidden bg-black">
                        <img
                          src={filteredItems[currentIndex].image}
                          alt={filteredItems[currentIndex].title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-[#FAFAF8] via-transparent to-transparent hidden md:block opacity-30" />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Navigation Arrow Controls & Progress Dots */}
              <div className="relative z-20 flex items-center justify-between mt-8 pt-4 border-t border-white/10">
                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePrev}
                    className="p-3 rounded-full bg-white/10 text-white hover:bg-[#C8A86B] hover:text-[#1F1F1F] transition-all cursor-pointer border border-white/20"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="p-3 rounded-full bg-white/10 text-white hover:bg-[#C8A86B] hover:text-[#1F1F1F] transition-all cursor-pointer border border-white/20"
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>

                {/* Progress Indicators */}
                <div className="flex items-center gap-2">
                  {filteredItems.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentIndex(idx)}
                      className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                        currentIndex === idx ? 'w-8 bg-[#C8A86B]' : 'w-2 bg-white/30 hover:bg-white/50'
                      }`}
                    />
                  ))}
                </div>

                <span className="text-xs font-mono text-white/70">
                  0{currentIndex + 1} / 0{filteredItems.length}
                </span>
              </div>
            </div>
          </div>
        ) : (
          /* MASONRY COLLAGE GRID MODE */
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
                  <img
                    src={item.image}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 group-hover:brightness-105 transition-all duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent opacity-85 group-hover:opacity-95 transition-opacity duration-300" />
                  <div className="absolute top-5 right-5 z-10 flex items-center gap-2">
                    <span className="px-3.5 py-1.5 rounded-full bg-white/85 backdrop-blur-md border border-white/90 text-[#1F1F1F] text-[10px] font-bold uppercase tracking-widest shadow-sm flex items-center gap-1.5">
                      <Sparkles className="w-3 h-3 text-[#C8A86B]" /> {item.category}
                    </span>
                  </div>
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
        )}

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
