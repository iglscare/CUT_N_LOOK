'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const PRESETS = [
  {
    id: 'balayage',
    title: 'Honey Melt Balayage',
    category: 'Hair Architecture',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1200&auto=format&fit=crop',
    description: 'Transforming dull, flat tones into dimensional honey balayage with high-luster bond glossing.',
  },
  {
    id: 'bob',
    title: 'Precision Architectural Cut',
    category: 'Styling',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=1200&auto=format&fit=crop',
    description: 'Custom face-framing precision cut crafted for bone structure and maximum fluid movement.',
  },
  {
    id: 'gloss',
    title: 'Silk Gloss Treatment',
    category: 'Haute Coloration',
    image: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=1200&auto=format&fit=crop',
    description: 'Deep hydration and mirror gloss finish unlocking vibrant hair vitality.',
  },
];

export const BeforeAfter: React.FC = () => {
  const [activePreset, setActivePreset] = useState(PRESETS[0]);
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percent = Math.min(100, Math.max(0, (x / rect.width) * 100));
    setSliderPosition(percent);
  };

  return (
    <section id="before-after" className="py-28 px-4 sm:px-8 bg-surface text-primary border-y border-border">
      <div className="max-w-[1440px] mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent mb-3 block">
            Real Transformations
          </span>
          <h2 className="text-4xl sm:text-6xl font-display font-bold text-primary tracking-tight mb-6">
            Before & After Precision
          </h2>
          <p className="text-secondary text-base sm:text-lg leading-relaxed font-normal">
            Drag your cursor across the visual slider below to experience the subtle magic of our master colorists and stylists.
          </p>
        </div>

        {/* Preset Selector Tabs */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {PRESETS.map((preset) => {
            const isActive = activePreset.id === preset.id;
            return (
              <button
                key={preset.id}
                onClick={() => setActivePreset(preset)}
                className={`relative px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  isActive ? 'text-primary font-bold' : 'text-secondary hover:text-primary'
                }`}
              >
                <span className="relative z-10">{preset.title}</span>
                {isActive && (
                  <motion.div
                    layoutId="activePresetBg"
                    className="absolute inset-0 bg-background border border-accent/40 rounded-full shadow-subtle"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Interactive Image Comparison Slider */}
        <motion.div
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.3 }}
          onMouseMove={handleMouseMove}
          className="relative max-w-4xl mx-auto h-[400px] sm:h-[550px] rounded-3xl overflow-hidden border border-border shadow-hover cursor-ew-resize select-none"
        >
          {/* After Image (Full Color & High Luster Background) */}
          <img
            src={activePreset.image}
            alt={`${activePreset.title} - After`}
            className="absolute inset-0 w-full h-full object-cover object-center filter contrast-110 saturate-110"
          />

          {/* Before Image (Same Subject, Flat/Grayscale Pre-Transformation Foreground) */}
          <div
            className="absolute inset-0 z-10 overflow-hidden"
            style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
          >
            <img
              src={activePreset.image}
              alt={`${activePreset.title} - Before`}
              className="w-full h-full object-cover object-center filter grayscale contrast-125 brightness-95"
            />
          </div>

          {/* Vertical Slider Handle Line */}
          <div
            className="absolute top-0 bottom-0 w-1 bg-accent z-20 pointer-events-none shadow-2xl"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-surface border-2 border-accent shadow-hover flex items-center justify-center text-accent">
              <Sparkles className="w-5 h-5" />
            </div>
          </div>

          {/* Badges */}
          <div className="absolute top-6 left-6 px-4 py-1.5 rounded-full bg-primary/80 text-background text-xs font-bold uppercase tracking-widest z-10 backdrop-blur-md">
            Before
          </div>
          <div className="absolute top-6 right-6 px-4 py-1.5 rounded-full bg-accent text-primary text-xs font-bold uppercase tracking-widest z-10 shadow-md">
            After Transformation
          </div>
        </motion.div>

        <p className="text-center text-secondary text-xs sm:text-sm max-w-md mx-auto mt-6 font-medium">
          {activePreset.description}
        </p>
      </div>
    </section>
  );
};
