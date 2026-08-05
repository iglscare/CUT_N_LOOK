'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const PRESETS = [
  {
    id: 'balayage',
    title: 'Honey Melt Balayage',
    category: 'Hair Architecture',
    before: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=1200',
    after: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&q=80&w=1200',
    description: 'Transforming natural unstyled hair into dimensional golden honey balayage with high-luster glossing.',
  },
  {
    id: 'bob',
    title: 'Precision Architectural Cut',
    category: 'Styling',
    before: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=1200',
    after: 'https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&q=80&w=1200',
    description: 'Custom face-framing precision bob crafted for bone structure and maximum movement.',
  },
  {
    id: 'skin',
    title: 'Radiant Glass Skin Spa',
    category: 'Skincare Spa',
    before: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=1200',
    after: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&q=80&w=1200',
    description: 'Deep cellular hydration facial paired with luminous glass skin glow treatment.',
  },
];

export const BeforeAfter: React.FC = () => {
  const [activePreset, setActivePreset] = useState(PRESETS[0]);
  const [sliderPosition, setSliderPosition] = useState(50);

  const updateSlider = (clientX: number, container: HTMLDivElement) => {
    const rect = container.getBoundingClientRect();
    const x = clientX - rect.left;
    const percent = Math.min(100, Math.max(0, (x / rect.width) * 100));
    setSliderPosition(percent);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    updateSlider(e.clientX, e.currentTarget);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (e.touches[0]) {
      updateSlider(e.touches[0].clientX, e.currentTarget);
    }
  };

  return (
    <section id="before-after" className="py-24 px-4 sm:px-8 bg-[#F4F1EA] text-[#1F1F1F] border-y border-black/8">
      <div className="max-w-[1440px] mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-[2px] bg-[#C8A86B]" />
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#C8A86B]">
              Real Transformations
            </span>
            <span className="w-8 h-[2px] bg-[#C8A86B]" />
          </div>
          <h2 className="text-4xl sm:text-6xl font-serif text-[#1F1F1F] tracking-tight mb-6">
            Before & After Precision
          </h2>
          <p className="text-[#5A5A5A] text-base sm:text-lg leading-relaxed font-normal max-w-2xl mx-auto">
            Drag your cursor across the visual slider below to experience the dramatic results of our master colorists and stylists.
          </p>
        </div>

        {/* Preset Selector Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {PRESETS.map((preset) => {
            const isActive = activePreset.id === preset.id;
            return (
              <button
                key={preset.id}
                onClick={() => setActivePreset(preset)}
                className={`relative px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  isActive ? 'text-white bg-[#C8A86B] shadow-md' : 'text-[#5A5A5A] bg-white border border-black/10 hover:border-black/30 hover:text-[#1F1F1F]'
                }`}
              >
                <span className="relative z-10">{preset.title}</span>
              </button>
            );
          })}
        </div>

        {/* Interactive Image Comparison Slider */}
        <motion.div
          whileHover={{ scale: 1.005 }}
          transition={{ duration: 0.3 }}
          onMouseMove={handleMouseMove}
          onTouchMove={handleTouchMove}
          onClick={(e) => updateSlider(e.clientX, e.currentTarget)}
          className="relative max-w-4xl mx-auto h-[420px] sm:h-[580px] rounded-[36px] overflow-hidden border border-black/10 shadow-[0_20px_60px_rgba(0,0,0,0.12)] cursor-ew-resize select-none bg-white"
        >
          {/* After Image (Background - Full Color) */}
          <img
            src={activePreset.after}
            alt="After Transformation"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />

          {/* Before Image (Clipped Foreground Layer) */}
          <div
            className="absolute inset-0 z-10 overflow-hidden"
            style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
          >
            <img
              src={activePreset.before}
              alt="Before Transformation"
              className="w-full h-full object-cover object-center filter brightness-95 contrast-105"
            />
          </div>

          {/* Vertical Slider Divider Line */}
          <div
            className="absolute top-0 bottom-0 w-[3px] bg-[#C8A86B] z-20 pointer-events-none shadow-[0_0_12px_rgba(0,0,0,0.4)]"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-11 h-11 rounded-full bg-white border-2 border-[#C8A86B] shadow-lg flex items-center justify-center text-[#C8A86B]">
              <Sparkles className="w-5 h-5 fill-[#C8A86B]" />
            </div>
          </div>

          {/* Floating Badges */}
          <div className="absolute top-6 left-6 px-4 py-2 rounded-full bg-black/75 text-white text-[11px] font-bold uppercase tracking-widest z-30 backdrop-blur-md border border-white/20">
            Before
          </div>
          <div className="absolute top-6 right-6 px-4 py-2 rounded-full bg-[#C8A86B] text-white text-[11px] font-bold uppercase tracking-widest z-30 shadow-md">
            After Transformation
          </div>
        </motion.div>

        <p className="text-center text-[#5A5A5A] text-xs sm:text-sm max-w-md mx-auto mt-6 font-medium">
          {activePreset.description}
        </p>
      </div>
    </section>
  );
};

