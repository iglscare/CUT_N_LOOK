'use client';

import React, { useEffect, useRef } from 'react';

const BG_IMAGE_1 =
  'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260802_074534_f0d9d476-3f86-4c67-9b12-dfc63d99da41.png&w=1920&q=85';

const BG_IMAGE_2 =
  'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260802_075145_1b557479-775b-43af-8270-f45d79d97d5a.png&w=1920&q=85';

export const ImageRevealBackground: React.FC = () => {
  const revealRef = useRef<HTMLDivElement>(null);
  const bg1Ref = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const smoothRef = useRef({ x: 0, y: 0 });
  const animFrameRef = useRef<number | null>(null);

  useEffect(() => {
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 1024;
    const defaultX = typeof window !== 'undefined' ? (isMobile ? window.innerWidth * 0.5 : window.innerWidth * 0.72) : 400;
    const defaultY = typeof window !== 'undefined' ? (isMobile ? window.innerHeight * 0.70 : window.innerHeight * 0.45) : 400;

    mouseRef.current = { x: defaultX, y: defaultY };
    smoothRef.current = { x: defaultX, y: defaultY };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleTouch = (e: TouchEvent) => {
      if (e.touches[0]) {
        mouseRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouch, { passive: true });
    window.addEventListener('touchstart', handleTouch, { passive: true });

    const updateSpotlight = () => {
      if (revealRef.current) {
        smoothRef.current.x += (mouseRef.current.x - smoothRef.current.x) * 0.14;
        smoothRef.current.y += (mouseRef.current.y - smoothRef.current.y) * 0.14;

        const cx = Math.round(smoothRef.current.x);
        const cy = Math.round(smoothRef.current.y);
        const width = typeof window !== 'undefined' ? window.innerWidth : 1200;
        const radius = Math.round(Math.min(220, Math.max(100, width * (width < 768 ? 0.28 : 0.10))));

        const maskCss = `radial-gradient(circle ${radius}px at ${cx}px ${cy}px, rgba(0,0,0,1) 0%, rgba(0,0,0,0.85) 45%, rgba(0,0,0,0.35) 75%, rgba(0,0,0,0) 100%)`;

        revealRef.current.style.webkitMaskImage = maskCss;
        revealRef.current.style.maskImage = maskCss;
      }

      animFrameRef.current = requestAnimationFrame(updateSpotlight);
    };

    animFrameRef.current = requestAnimationFrame(updateSpotlight);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouch);
      window.removeEventListener('touchstart', handleTouch);
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Base Layer: BG_IMAGE_1 */}
      <div
        ref={bg1Ref}
        className="absolute inset-0 bg-cover bg-no-repeat transition-all duration-300 bg-[center_bottom_8%] sm:bg-[center_center] lg:bg-[calc(50%+380px)_center]"
        style={{
          backgroundImage: `url("${BG_IMAGE_1}")`,
        }}
      />

      {/* Spotlight Reveal Layer: BG_IMAGE_2 */}
      <div
        ref={revealRef}
        className="absolute inset-0 bg-cover bg-no-repeat transition-all duration-300 bg-[center_bottom_8%] sm:bg-[center_center] lg:bg-[calc(50%+380px)_center]"
        style={{
          backgroundImage: `url("${BG_IMAGE_2}")`,
          WebkitMaskRepeat: 'no-repeat',
          maskRepeat: 'no-repeat',
        }}
      />

      {/* Subtle Parallax Grid Overlay */}
      <svg className="absolute inset-0 w-full h-full opacity-10 pointer-events-none stroke-[#64748b]" strokeWidth="0.6">
        <pattern id="futuristicGrid" width="48" height="48" patternUnits="userSpaceOnUse">
          <path d="M 48 0 L 0 0 0 48" fill="none" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#futuristicGrid)" />
      </svg>
    </div>
  );
};

