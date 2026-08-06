'use client';

import React, { useEffect, useRef } from 'react';

const DESKTOP_BG_1 =
  'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260802_074534_f0d9d476-3f86-4c67-9b12-dfc63d99da41.png&w=1920&q=85';

const DESKTOP_BG_2 =
  'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260802_075145_1b557479-775b-43af-8270-f45d79d97d5a.png&w=1920&q=85';

const MOBILE_BG_1 =
  'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1200&auto=format&fit=crop';

const MOBILE_BG_2 =
  'https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=1200&auto=format&fit=crop';

export const ImageRevealBackground: React.FC = () => {
  const revealRef = useRef<HTMLDivElement>(null);
  const mobileRevealRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const smoothRef = useRef({ x: 0, y: 0 });
  const animFrameRef = useRef<number | null>(null);

  useEffect(() => {
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 1024;
    const defaultX = typeof window !== 'undefined' ? (isMobile ? window.innerWidth * 0.5 : window.innerWidth * 0.72) : 400;
    const defaultY = typeof window !== 'undefined' ? (isMobile ? window.innerHeight * 0.55 : window.innerHeight * 0.45) : 400;

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
      smoothRef.current.x += (mouseRef.current.x - smoothRef.current.x) * 0.14;
      smoothRef.current.y += (mouseRef.current.y - smoothRef.current.y) * 0.14;

      const cx = Math.round(smoothRef.current.x);
      const cy = Math.round(smoothRef.current.y);
      const width = typeof window !== 'undefined' ? window.innerWidth : 1200;

      const radiusDesktop = Math.round(Math.min(240, Math.max(120, width * 0.12)));
      const maskCssDesktop = `radial-gradient(circle ${radiusDesktop}px at ${cx}px ${cy}px, rgba(0,0,0,1) 0%, rgba(0,0,0,0.85) 50%, rgba(0,0,0,0.3) 80%, rgba(0,0,0,0) 100%)`;

      if (revealRef.current) {
        revealRef.current.style.webkitMaskImage = maskCssDesktop;
        revealRef.current.style.maskImage = maskCssDesktop;
      }

      const radiusMobile = Math.round(Math.min(300, Math.max(180, width * 0.50)));
      const maskCssMobile = `radial-gradient(circle ${radiusMobile}px at ${cx}px ${cy}px, rgba(0,0,0,1) 0%, rgba(0,0,0,0.85) 50%, rgba(0,0,0,0.3) 80%, rgba(0,0,0,0) 100%)`;

      if (mobileRevealRef.current) {
        mobileRevealRef.current.style.webkitMaskImage = maskCssMobile;
        mobileRevealRef.current.style.maskImage = maskCssMobile;
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
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden bg-[#FAFAF8]">
      {/* DESKTOP BACKGROUND VIEW (lg:block) */}
      <div className="hidden lg:block absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-no-repeat bg-[calc(50%+380px)_center]"
          style={{ backgroundImage: `url("${DESKTOP_BG_1}")` }}
        />
        <div
          ref={revealRef}
          className="absolute inset-0 bg-cover bg-no-repeat bg-[calc(50%+380px)_center]"
          style={{
            backgroundImage: `url("${DESKTOP_BG_2}")`,
            WebkitMaskRepeat: 'no-repeat',
            maskRepeat: 'no-repeat',
          }}
        />
      </div>

      {/* MOBILE & TABLET DEDICATED BACKGROUND VIEW (lg:hidden) */}
      <div className="block lg:hidden absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-no-repeat bg-[center_top_12%]"
          style={{ backgroundImage: `url("${MOBILE_BG_1}")` }}
        />
        <div
          ref={mobileRevealRef}
          className="absolute inset-0 bg-cover bg-no-repeat bg-[center_top_12%]"
          style={{
            backgroundImage: `url("${MOBILE_BG_2}")`,
            WebkitMaskRepeat: 'no-repeat',
            maskRepeat: 'no-repeat',
          }}
        />
        {/* Soft Warm Mobile Overlay Blend */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#FAFAF8]/80 via-[#FAFAF8]/35 to-[#FAFAF8]/90 pointer-events-none" />
      </div>
    </div>
  );
};

