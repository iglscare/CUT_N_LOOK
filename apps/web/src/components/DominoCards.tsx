'use client';

import React, { useEffect, useRef, useState } from 'react';
import anime from 'animejs';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Scissors, Eye, ArrowRight } from 'lucide-react';

export const DominoCards: React.FC<{ onBookClick: () => void }> = ({ onBookClick }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeCards, setActiveCards] = useState<number[]>([0, 1, 2, 3, 4]);

  const cardsData = [
    {
      id: 0,
      title: 'Haute Balayage',
      category: 'Coloring',
      url: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=800&auto=format&fit=crop',
      rotate: -14,
      offsetY: 20
    },
    {
      id: 1,
      title: 'Precision Bob',
      category: 'Haircut',
      url: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=800&auto=format&fit=crop',
      rotate: -7,
      offsetY: 0
    },
    {
      id: 2,
      title: 'Dewy Skin Spa',
      category: 'Facial',
      url: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=800&auto=format&fit=crop',
      rotate: 0,
      offsetY: -15
    },
    {
      id: 3,
      title: 'Royal Bridal',
      category: 'Couture',
      url: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=800&auto=format&fit=crop',
      rotate: 7,
      offsetY: 0
    },
    {
      id: 4,
      title: 'Botanical Steam Spa',
      category: 'Treatment',
      url: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?q=80&w=800&auto=format&fit=crop',
      rotate: 14,
      offsetY: 20
    }
  ];

  // Handle cursor hover over individual domino card -> Trigger Anime.js disappearance
  const handleCardCursorApproach = (id: number, cardEl: HTMLDivElement) => {
    import('animejs').then((m) => {
      const anime = m.default || m;

      // Domino collapse animation
      anime({
        targets: cardEl,
        translateY: [-20, -120],
        rotateZ: anime.random(-30, 30),
        scale: [1, 0.4],
        opacity: [1, 0],
        duration: 650,
        easing: 'easeOutExpo',
        complete: () => {
          // Remove card from active cards
          setActiveCards(prev => prev.filter(cardId => cardId !== id));
        }
      });
    });
  };

  const handleResetDominoes = () => {
    setActiveCards([0, 1, 2, 3, 4]);

    if (containerRef.current) {
      import('animejs').then((m) => {
        const anime = m.default || m;
        const domCards = containerRef.current?.querySelectorAll('.domino-card-item');
        if (domCards) {
          anime({
            targets: domCards,
            opacity: [0, 1],
            translateY: [60, 0],
            scale: [0.8, 1],
            delay: anime.stagger(100),
            duration: 800,
            easing: 'easeOutBack'
          });
        }
      });
    }
  };

  return (
    <section className="py-28 bg-accent-light border-y border-accent/20 text-center px-4 sm:px-8 relative overflow-hidden select-none">
      <div className="max-w-5xl mx-auto relative z-10">
        <span className="text-xs font-semibold uppercase tracking-widest text-accent mb-3 block">
          Interactive Domino Portfolio
        </span>

        <h2 className="text-4xl sm:text-6xl font-display font-bold text-primary tracking-tight mb-4">
          Experience the Art of Perfection
        </h2>

        <p className="text-secondary text-base sm:text-lg mb-12 leading-relaxed font-normal max-w-xl mx-auto">
          Hover your cursor over the domino cards below to tumble them into place.
        </p>

        {/* Domino Cards Interactive Fan */}
        <div
          ref={containerRef}
          className="relative h-[320px] sm:h-[380px] w-full max-w-3xl mx-auto flex items-center justify-center mb-10"
        >
          {cardsData.map((card, index) => {
            const isVisible = activeCards.includes(card.id);
            if (!isVisible) return null;

            return (
              <div
                key={card.id}
                onMouseEnter={(e) => handleCardCursorApproach(card.id, e.currentTarget)}
                style={{
                  transform: `rotate(${card.rotate}deg) translateY(${card.offsetY}px)`,
                  zIndex: 10 + index
                }}
                className="domino-card-item absolute w-48 sm:w-56 h-64 sm:h-72 rounded-3xl bg-surface border-2 border-accent/30 shadow-hover overflow-hidden cursor-pointer transition-all duration-300 hover:border-accent hover:shadow-2xl"
              >
                <div className="relative w-full h-full">
                  <img
                    src={card.url}
                    alt={card.title}
                    className="w-full h-full object-cover object-center filter grayscale contrast-110 hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent flex flex-col justify-end p-4 text-left">
                    <span className="text-[10px] uppercase font-bold text-accent tracking-widest block">
                      {card.category}
                    </span>
                    <span className="text-sm font-display font-bold text-background">
                      {card.title}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}

          {activeCards.length === 0 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center gap-4 py-12"
            >
              <p className="text-sm font-serif font-bold text-primary">All domino cards tumbled!</p>
              <button
                onClick={handleResetDominoes}
                className="px-6 py-2.5 rounded-full bg-surface border border-accent text-accent text-xs font-semibold uppercase tracking-wider hover:bg-accent hover:text-surface transition-all cursor-pointer shadow-subtle"
              >
                Reset Domino Cards ↺
              </button>
            </motion.div>
          )}
        </div>

        {/* CTA Button */}
        <button
          onClick={onBookClick}
          className="px-10 py-5 rounded-full bg-primary text-background font-medium text-xs sm:text-sm tracking-wider uppercase hover:bg-primary/95 shadow-hover hover:-translate-y-1 transition-all cursor-pointer"
        >
          Book Your Appointment
        </button>
      </div>
    </section>
  );
};
