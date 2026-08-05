'use client';

import React, { useEffect, useRef } from 'react';

interface AnimeScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  staggerChildren?: boolean;
}

export const AnimeScrollReveal: React.FC<AnimeScrollRevealProps> = ({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  staggerChildren = false,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let observer: IntersectionObserver;

    import('animejs').then((m) => {
      const anime = m.default || m;

      // Determine initial offset based on direction
      let initialTranslateX = 0;
      let initialTranslateY = 0;

      if (direction === 'up') initialTranslateY = 50;
      if (direction === 'down') initialTranslateY = -50;
      if (direction === 'left') initialTranslateX = 50;
      if (direction === 'right') initialTranslateX = -50;

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              if (staggerChildren) {
                const childElements = el.children;
                anime({
                  targets: childElements,
                  opacity: [0, 1],
                  translateY: direction === 'up' || direction === 'down' ? [initialTranslateY, 0] : 0,
                  translateX: direction === 'left' || direction === 'right' ? [initialTranslateX, 0] : 0,
                  scale: [0.96, 1],
                  delay: anime.stagger(120, { start: delay }),
                  duration: 1000,
                  easing: 'easeOutCubic',
                });
              } else {
                anime({
                  targets: el,
                  opacity: [0, 1],
                  translateY: direction === 'up' || direction === 'down' ? [initialTranslateY, 0] : 0,
                  translateX: direction === 'left' || direction === 'right' ? [initialTranslateX, 0] : 0,
                  scale: [0.98, 1],
                  delay: delay,
                  duration: 900,
                  easing: 'easeOutCubic',
                });
              }
              observer.disconnect();
            }
          });
        },
        { threshold: 0.15 }
      );

      observer.observe(el);
    });

    return () => {
      if (observer) observer.disconnect();
    };
  }, [delay, direction, staggerChildren]);

  return (
    <div ref={containerRef} className={`opacity-0 ${className}`}>
      {children}
    </div>
  );
};
