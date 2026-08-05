'use client';

import React, { useEffect, useRef } from 'react';
import anime from 'animejs';
import { Instagram, Heart } from 'lucide-react';

export const InstagramFeed: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && gridRef.current) {
            anime({
              targets: gridRef.current.querySelectorAll('.insta-card'),
              opacity: [0, 1],
              scale: [0.85, 1],
              translateY: [40, 0],
              delay: anime.stagger(90, { grid: [5, 1], from: 'center' }),
              duration: 800,
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

  const handleCardMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const icon = e.currentTarget.querySelector('.insta-icon');
    if (icon) {
      anime({
        targets: icon,
        scale: [0.7, 1.2, 1],
        rotate: [-10, 10, 0],
        duration: 500,
        easing: 'easeOutBack'
      });
    }
  };

  const posts = [
    { url: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=800&auto=format&fit=crop', title: 'Hair Architecture', likes: '3.4k' },
    { url: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=800&auto=format&fit=crop', title: 'Balayage & Glossing', likes: '4.8k' },
    { url: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=800&auto=format&fit=crop', title: 'Royal Bridal Suite', likes: '5.2k' },
    { url: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=800&auto=format&fit=crop', title: 'Nail Art & Spa', likes: '2.9k' },
    { url: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=800&auto=format&fit=crop', title: 'Dewy Glass Skin', likes: '4.1k' },
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-background border-t border-border overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 text-center mb-10">
        <a
          href="https://www.instagram.com/cut_n_looks_/?hl=en"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent hover:text-primary transition-colors group"
        >
          <Instagram className="w-4 h-4 group-hover:rotate-12 transition-transform" /> Follow @cut_n_looks_ On Instagram ↗
        </a>
      </div>

      <div ref={gridRef} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-4 px-2 sm:px-4">
        {posts.map((post, idx) => (
          <a
            key={idx}
            href="https://www.instagram.com/cut_n_looks_/?hl=en"
            target="_blank"
            rel="noreferrer"
            onMouseEnter={handleCardMouseEnter}
            className="insta-card opacity-0 group relative h-64 sm:h-80 overflow-hidden rounded-2xl bg-surface border border-border shadow-subtle hover:shadow-hover"
          >
            <img
              src={post.url}
              alt="Cut N Looks Instagram Post"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-primary/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-background gap-2 text-xs font-semibold p-4 text-center">
              <Instagram className="insta-icon w-7 h-7 text-accent" />
              <span className="text-white font-bold">{post.title}</span>
              <span className="flex items-center gap-1 text-[11px] text-white/90"><Heart className="w-3.5 h-3.5 text-accent fill-accent" /> {post.likes}</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};
