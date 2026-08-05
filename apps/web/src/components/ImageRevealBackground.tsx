'use client';

import React, { useEffect, useRef } from 'react';

const BG_IMAGE_1 =
  'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260802_074534_f0d9d476-3f86-4c67-9b12-dfc63d99da41.png&w=1920&q=85';

const BG_IMAGE_2 =
  'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260802_075145_1b557479-775b-43af-8270-f45d79d97d5a.png&w=1920&q=85';

export const ImageRevealBackground: React.FC = () => {
  const revealRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const smoothRef = useRef({ x: 0, y: 0 });
  const animFrameRef = useRef<number | null>(null);

  useEffect(() => {
    const defaultX = typeof window !== 'undefined' ? window.innerWidth * 0.72 : 800;
    const defaultY = typeof window !== 'undefined' ? window.innerHeight * 0.45 : 400;

    mouseRef.current = { x: defaultX, y: defaultY };
    smoothRef.current = { x: defaultX, y: defaultY };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches[0]) {
        mouseRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);

    const updateSpotlight = () => {
      if (revealRef.current) {
        smoothRef.current.x += (mouseRef.current.x - smoothRef.current.x) * 0.12;
        smoothRef.current.y += (mouseRef.current.y - smoothRef.current.y) * 0.12;

        const cx = Math.round(smoothRef.current.x);
        const cy = Math.round(smoothRef.current.y);
        const width = typeof window !== 'undefined' ? window.innerWidth : 1200;
        const radius = Math.round(Math.min(220, Math.max(120, width * 0.10)));

        const maskCss = `radial-gradient(circle ${radius}px at ${cx}px ${cy}px, rgba(0,0,0,1) 0%, rgba(0,0,0,0.85) 45%, rgba(0,0,0,0.35) 75%, rgba(0,0,0,0) 100%)`;

        revealRef.current.style.WebkitMaskImage = maskCss;
        revealRef.current.style.maskImage = maskCss;
      }

      animFrameRef.current = requestAnimationFrame(updateSpotlight);
    };

    animFrameRef.current = requestAnimationFrame(updateSpotlight);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Base Layer: BG_IMAGE_1 */}
      <div
        className="absolute inset-0 bg-cover bg-no-repeat transition-all duration-300"
        style={{
          backgroundImage: `url("${BG_IMAGE_1}")`,
          backgroundPosition: 'calc(50% + 380px) center',
        }}
      />

      {/* Spotlight Reveal Layer: BG_IMAGE_2 */}
      <div
        ref={revealRef}
        className="absolute inset-0 bg-cover bg-no-repeat transition-all duration-300"
        style={{
          backgroundImage: `url("${BG_IMAGE_2}")`,
          backgroundPosition: 'calc(50% + 380px) center',
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

