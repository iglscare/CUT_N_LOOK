'use client';

import React, { useEffect, useRef } from 'react';
import anime from 'animejs';
import { Star, Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && cardsRef.current) {
            // Anime.js entrance stagger
            anime({
              targets: cardsRef.current.querySelectorAll('.testimonial-card'),
              opacity: [0, 1],
              translateY: [50, 0],
              delay: anime.stagger(150),
              duration: 900,
              easing: 'easeOutCubic'
            });

            // Anime.js Star Twinkle Stagger
            anime({
              targets: cardsRef.current.querySelectorAll('.star-icon'),
              scale: [0.5, 1.2, 1],
              opacity: [0, 1],
              delay: anime.stagger(60, { start: 400 }),
              duration: 600,
              easing: 'easeOutBack'
            });

            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleCardMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    const quote = e.currentTarget.querySelector('.quote-icon');
    if (quote) {
      anime({
        targets: quote,
        rotate: [0, -15, 15, 0],
        scale: [1, 1.2, 1],
        duration: 700,
        easing: 'easeInOutSine'
      });
    }
  };

  const reviews = [
    {
      name: 'Victoria Stirling',
      role: 'Fashion Editor',
      text: 'Cut N Looks is hands-down the most refined salon experience in the city. Elena understood my hair texture instantly and delivered the crispest balayage I have ever had.',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop',
      rating: 5
    },
    {
      name: 'Alexander Vance',
      role: 'Creative Director',
      text: 'The razor shave and hot towel spa treatment with Marcus is an essential bi-weekly ritual. The ambiance feels like a private club. Flawless execution every single time.',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
      rating: 5
    },
    {
      name: 'Seraphina Chen',
      role: 'Architect',
      text: 'From the warm organic tea upon arrival to the serene hydra-facial spa with Sophia, every detail is intentional. I left looking radiant and completely restored.',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=200&auto=format&fit=crop',
      rating: 5
    }
  ];

  return (
    <section ref={sectionRef} id="reviews" className="py-24 sm:py-32 bg-background px-4 sm:px-8">
      <div className="max-w-[1440px] mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent mb-3 block">
            Client Words
          </span>
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-primary tracking-tight mb-4">
            Trusted by Connoisseurs
          </h2>
          <p className="text-secondary text-base">
            Read authentic reviews from clients who entrust their look to our studio.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, index) => (
            <div
              key={index}
              onMouseEnter={handleCardMouseEnter}
              className="testimonial-card opacity-0 p-8 rounded-3xl bg-surface border border-border shadow-subtle hover:shadow-hover hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between cursor-pointer"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex gap-1 text-accent">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="star-icon opacity-0 w-4 h-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <Quote className="quote-icon w-8 h-8 text-accent/30 transition-transform" />
                </div>

                <p className="text-primary/90 text-sm leading-relaxed font-normal mb-8 italic">
                  "{rev.text}"
                </p>
              </div>

              <div className="pt-6 border-t border-border flex items-center gap-4">
                <img
                  src={rev.avatar}
                  alt={rev.name}
                  className="w-12 h-12 rounded-full object-cover border border-accent/30"
                />
                <div>
                  <h3 className="text-sm font-display font-bold text-primary">{rev.name}</h3>
                  <span className="text-xs text-secondary">{rev.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
