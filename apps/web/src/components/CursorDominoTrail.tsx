'use client';

import React, { useEffect, useRef } from 'react';

export const CursorDominoTrail: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const lastPos = useRef({ x: 0, y: 0 });
  const imageIndex = useRef(0);

  const images = [
    'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=400&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=400&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=400&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=400&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1607779097040-26e80aa78e66?q=80&w=400&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?q=80&w=400&auto=format&fit=crop',
  ];

  useEffect(() => {
    let animeModule: any = null;
    import('animejs').then((m) => {
      animeModule = m.default || m;
    });

    const handleMouseMove = (e: MouseEvent) => {
      const distance = Math.hypot(e.clientX - lastPos.current.x, e.clientY - lastPos.current.y);

      // Spawn a domino card every 60px of cursor movement
      if (distance > 60 && containerRef.current) {
        lastPos.current = { x: e.clientX, y: e.clientY };

        const imageUrl = images[imageIndex.current % images.length];
        imageIndex.current++;

        // Create domino card wrapper
        const card = document.createElement('div');
        card.className = 'fixed pointer-events-none z-40 rounded-2xl overflow-hidden border-2 border-accent/40 shadow-hover bg-surface';
        card.style.left = `${e.clientX}px`;
        card.style.top = `${e.clientY}px`;
        card.style.width = '120px';
        card.style.height = '150px';
        card.style.transform = 'translate(-50%, -50%)';

        const img = document.createElement('img');
        img.src = imageUrl;
        img.className = 'w-full h-full object-cover filter grayscale contrast-110';
        card.appendChild(img);

        containerRef.current.appendChild(card);

        // Anime.js domino card spawn & disappearance animation
        if (animeModule) {
          animeModule({
            targets: card,
            opacity: [0, 1, 0],
            scale: [0.5, 1, 0.3],
            translateY: [0, 50],
            rotateZ: animeModule.random(-25, 25),
            duration: 1100,
            easing: 'easeOutQuart',
            complete: () => {
              card.remove();
            }
          });
        } else {
          setTimeout(() => card.remove(), 1100);
        }
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return <div ref={containerRef} className="fixed inset-0 pointer-events-none z-40 overflow-hidden" />;
};
