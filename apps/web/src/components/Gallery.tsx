'use client';

import React from 'react';
import { motion } from 'framer-motion';

const GALLERY_ITEMS = [
  {
    id: 1,
    title: 'Honey Balayage Gloss',
    category: 'Haute Coloration',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=800&auto=format&fit=crop',
    span: 'col-span-1 md:col-span-2 row-span-2',
  },
  {
    id: 2,
    title: 'Architectural Bob',
    category: 'Haircut',
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=800&auto=format&fit=crop',
    span: 'col-span-1 row-span-1',
  },
  {
    id: 3,
    title: 'Dewy Skin Contour',
    category: 'Skincare Spa',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=800&auto=format&fit=crop',
    span: 'col-span-1 row-span-1',
  },
  {
    id: 4,
    title: 'Royal Bridal Glow',
    category: 'Bridal Suite',
    image: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=800&auto=format&fit=crop',
    span: 'col-span-1 md:col-span-2 row-span-1',
  },
  {
    id: 5,
    title: 'Scalp Steam Spa Ritual',
    category: 'Treatment',
    image: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?q=80&w=800&auto=format&fit=crop',
    span: 'col-span-1 row-span-1',
  },
];

export const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-28 px-4 sm:px-8 bg-background text-primary">
      <div className="max-w-[1440px] mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent mb-3 block">
            Visual Craftsmanship
          </span>
          <h2 className="text-4xl sm:text-6xl font-display font-bold text-primary tracking-tight mb-6">
            Editorial Gallery
          </h2>
          <p className="text-secondary text-base sm:text-lg leading-relaxed font-normal">
            A curated portfolio of precision cuts, sun-kissed balayage, and couture bridal transformations.
          </p>
        </div>

        {/* Gallery Grid with Framer Motion Image Zoom & Lift */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[280px]">
          {GALLERY_ITEMS.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ y: -6, scale: 1.015 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] as const }}
              className={`group relative rounded-3xl overflow-hidden bg-surface border border-border shadow-subtle cursor-pointer ${item.span}`}
            >
              <motion.img
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover object-center filter grayscale contrast-110 group-hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8 text-background">
                <span className="text-xs font-semibold uppercase tracking-widest text-accent mb-1">
                  {item.category}
                </span>
                <h3 className="text-2xl font-display font-bold text-background">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
