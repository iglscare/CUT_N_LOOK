'use client';

import React, { useEffect, useRef } from 'react';

const BG_IMAGE_1 =
  'https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=1920&auto=format&fit=crop';
const BG_IMAGE_2 =
  'https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1920&auto=format&fit=crop';

export const ImageRevealBackground: React.FC = () => {
  const revealRef = useRef<HTMLDivElement>(null);
  const spotlightRingRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const smoothRef = useRef({ x: 0, y: 0 });
  const animFrameRef = useRef<number | null>(null);

  useEffect(() => {
    // Initial center-right focus position
    const initialX = window.innerWidth * 0.7;
    const initialY = window.innerHeight * 0.45;
    mouseRef.current = { x: initialX, y: initialY };
    smoothRef.current = { x: initialX, y: initialY };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener('mousemove', handleMouseMove);

    const updateSpotlight = () => {
      if (!revealRef.current) return;

      const width = window.innerWidth;

      // Smooth lerp for fluid tracking
      smoothRef.current.x += (mouseRef.current.x - smoothRef.current.x) * 0.12;
      smoothRef.current.y += (mouseRef.current.y - smoothRef.current.y) * 0.12;

      const cx = Math.round(smoothRef.current.x);
      const cy = Math.round(smoothRef.current.y);
      const radius = Math.round(Math.min(420, Math.max(180, width * 0.18)));

      // Hardware accelerated radial gradient mask (no dataURL overhead)
      const maskGradient = `radial-gradient(circle ${radius}px at ${cx}px ${cy}px, black 0%, black 45%, rgba(0, 0, 0, 0.75) 65%, rgba(0, 0, 0, 0.35) 82%, transparent 100%)`;

      revealRef.current.style.maskImage = maskGradient;
      revealRef.current.style.webkitMaskImage = maskGradient;

      if (spotlightRingRef.current) {
        spotlightRingRef.current.style.transform = `translate3d(${cx}px, ${cy}px, 0) translate(-50%, -50%)`;
        spotlightRingRef.current.style.width = `${radius * 2}px`;
        spotlightRingRef.current.style.height = `${radius * 2}px`;
      }

      animFrameRef.current = requestAnimationFrame(updateSpotlight);
    };

    animFrameRef.current = requestAnimationFrame(updateSpotlight);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden select-none">
      {/* Base Layer Image */}
      <div
        className="absolute inset-0 bg-cover bg-no-repeat bg-center transition-all duration-500"
        style={{
          backgroundImage: `url("${BG_IMAGE_1}")`,
          backgroundPosition: 'calc(50% + 300px) center',
        }}
      />

      {/* Soft gradient blend on the left to preserve text legibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#F4F1EA] via-[#F4F1EA]/80 to-transparent" />

      {/* Revealed Image Layer (Spotlight) */}
      <div
        ref={revealRef}
        className="absolute inset-0 bg-cover bg-no-repeat transition-all duration-300 hidden lg:block"
        style={{
          backgroundImage: `url("${BG_IMAGE_2}")`,
          backgroundPosition: 'calc(50% + 300px) center',
          filter: 'contrast(1.08) brightness(1.05)',
        }}
      />

      {/* Interactive Spotlight Glowing Ring */}
      <div
        ref={spotlightRingRef}
        className="absolute top-0 left-0 rounded-full border border-[#C8A86B]/40 shadow-[0_0_60px_rgba(200,168,107,0.3)] pointer-events-none hidden lg:block"
      />

      {/* Parallax Grid Overlay */}
      <svg className="absolute inset-0 w-full h-full opacity-10 pointer-events-none stroke-[#64748b]" strokeWidth="0.6">
        <pattern id="futuristicGrid" width="48" height="48" patternUnits="userSpaceOnUse">
          <path d="M 48 0 L 0 0 0 48" fill="none" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#futuristicGrid)" />
      </svg>
    </div>
  );
};

