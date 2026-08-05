'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface TrailCard {
  id: number;
  x: number;
  y: number;
  image: string;
  title: string;
  category: string;
  rotation: number;
}

const CUT_N_LOOKS_DOMINO_IMAGES = [
  {
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=800',
    title: 'Honey Melt Balayage',
    category: 'Haute Coloration',
  },
  {
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=800',
    title: 'Precision Bob Architecture',
    category: 'Hair Styling',
  },
  {
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=800',
    title: 'Dewy Glass Skin Spa',
    category: 'Skincare Spa',
  },
  {
    image: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&q=80&w=800',
    title: 'Royal Bridal Couture',
    category: 'Bridal Glamour',
  },
  {
    image: 'https://images.unsplash.com/photo-1607779097040-26e80aa78e66?auto=format&fit=crop&q=80&w=800',
    title: 'Minimal Nail Extensions',
    category: 'Nail Art',
  },
  {
    image: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&q=80&w=800',
    title: 'Botanical Steam Spa',
    category: 'Scalp Detox',
  },
  {
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=800',
    title: 'Platinum Gloss Tint',
    category: 'Hair Color',
  },
  {
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800',
    title: 'Silk Press Ritual',
    category: 'Styling',
  },
];

export const DominoTrailSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [cards, setCards] = useState<TrailCard[]>([]);
  const lastPosRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const lastScrollPosRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const indexRef = useRef(0);
  const countRef = useRef(0);

  const spawnCard = useCallback((x: number, y: number) => {
    const item = CUT_N_LOOKS_DOMINO_IMAGES[indexRef.current % CUT_N_LOOKS_DOMINO_IMAGES.length];
    indexRef.current++;
    countRef.current++;

    const newCard: TrailCard = {
      id: countRef.current,
      x,
      y,
      image: item.image,
      title: item.title,
      category: item.category,
      rotation: (Math.random() - 0.5) * 24,
    };

    setCards((prev) => {
      const updated = [...prev, newCard];
      if (updated.length > 7) {
        return updated.slice(updated.length - 7);
      }
      return updated;
    });
  }, []);

  // Automatic domino cascade when scrolling into section via GSAP ScrollTrigger
  useEffect(() => {
    if (!containerRef.current || typeof window === 'undefined') return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top 75%',
        end: 'bottom 25%',
        onUpdate: (self) => {
          const progress = self.progress; // 0 to 1
          const rect = containerRef.current?.getBoundingClientRect();
          if (!rect) return;

          const width = rect.width;
          const height = rect.height;

          // Sweeping wave trajectory across container
          const x = 120 + progress * (width - 240);
          const y = height / 2 + Math.sin(progress * Math.PI * 2.5) * (height * 0.22);

          const dx = x - lastScrollPosRef.current.x;
          const dy = y - lastScrollPosRef.current.y;

          if (Math.hypot(dx, dy) > 55) {
            lastScrollPosRef.current = { x, y };
            spawnCard(x, y);
          }
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, [spawnCard]);

  // Mouse move domino interaction
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const dx = x - lastPosRef.current.x;
    const dy = y - lastPosRef.current.y;
    const dist = Math.hypot(dx, dy);

    if (dist > 55) {
      lastPosRef.current = { x, y };
      spawnCard(x, y);
    }
  }, [spawnCard]);

  // Touch move domino interaction for mobile devices
  const handleTouchMove = useCallback((e: React.TouchEvent<HTMLDivElement>) => {
    if (!containerRef.current || !e.touches[0]) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.touches[0].clientX - rect.left;
    const y = e.touches[0].clientY - rect.top;

    const dx = x - lastPosRef.current.x;
    const dy = y - lastPosRef.current.y;
    const dist = Math.hypot(dx, dy);

    if (dist > 45) {
      lastPosRef.current = { x, y };
      spawnCard(x, y);
    }
  }, [spawnCard]);

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      onTouchStart={handleTouchMove}
      className="relative h-[70vh] sm:h-[85vh] w-full bg-primary text-background overflow-hidden flex flex-col items-center justify-center cursor-crosshair select-none border-y border-accent/20"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(200,168,107,0.15)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      {/* Center Static Header */}
      <div className="relative z-10 text-center px-6 pointer-events-none max-w-4xl mx-auto">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-accent text-[10px] sm:text-xs uppercase tracking-[0.3em] sm:tracking-[0.6em] block mb-4 sm:mb-6 font-semibold"
        >
          Interactive Domino Portfolio
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="font-display text-4xl sm:text-7xl lg:text-8xl text-background leading-tight tracking-tight mb-4 sm:mb-8"
        >
          The Art of <br />
          <span className="font-serif italic font-extralight text-accent">Fluid Motion</span>
        </motion.h2>
        <p className="text-secondary/80 text-xs sm:text-sm tracking-widest uppercase font-medium">
          Swipe or move cursor across the canvas to trigger the domino trail
        </p>
      </div>

      {/* Interactive Domino Cards */}
      <div className="absolute inset-0 pointer-events-none z-20 overflow-hidden">
        <AnimatePresence>
          {cards.map((card) => (
            <motion.div
              key={card.id}
              initial={{
                opacity: 0,
                scale: 0.2,
                rotate: card.rotation - 20,
                x: card.x - 85,
                y: card.y - 110
              }}
              animate={{
                opacity: 1,
                scale: 1,
                rotate: card.rotation,
                x: card.x - 85,
                y: card.y - 110
              }}
              exit={{
                opacity: 0,
                scale: 0.3,
                rotate: card.rotation + 25,
                y: card.y - 80,
                transition: { duration: 0.5, ease: 'easeIn' }
              }}
              transition={{
                type: 'spring',
                stiffness: 280,
                damping: 22
              }}
              className="absolute w-[170px] sm:w-[210px] md:w-[240px] aspect-[4/5] rounded-2xl overflow-hidden bg-primary/95 border border-accent/40 shadow-[0_25px_60px_rgba(0,0,0,0.8)] backdrop-blur-xl"
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-full object-cover opacity-90 filter grayscale contrast-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4">
                <span className="text-accent text-[8px] sm:text-[9px] uppercase tracking-[0.2em] font-semibold block mb-0.5 sm:mb-1">
                  {card.category}
                </span>
                <h4 className="font-display text-sm sm:text-lg text-background font-bold leading-tight">
                  {card.title}
                </h4>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
};
