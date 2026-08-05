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
    mouseRef.current = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    smoothRef.current = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener('mousemove', handleMouseMove);

    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    const updateSpotlight = () => {
      if (!ctx || !revealRef.current) return;

      const width = window.innerWidth;
      const height = window.innerHeight;

      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
      }

      smoothRef.current.x += (mouseRef.current.x - smoothRef.current.x) * 0.1;
      smoothRef.current.y += (mouseRef.current.y - smoothRef.current.y) * 0.1;

      const cx = smoothRef.current.x;
      const cy = smoothRef.current.y;
      const radius = Math.round(Math.min(420, Math.max(160, width * 0.16)));

      ctx.clearRect(0, 0, width, height);

      const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, radius);
      grad.addColorStop(0, 'rgba(255, 255, 255, 1)');
      grad.addColorStop(0.4, 'rgba(255, 255, 255, 1)');
      grad.addColorStop(0.6, 'rgba(255, 255, 255, 0.75)');
      grad.addColorStop(0.75, 'rgba(255, 255, 255, 0.4)');
      grad.addColorStop(0.88, 'rgba(255, 255, 255, 0.12)');
      grad.addColorStop(1, 'rgba(255, 255, 255, 0)');

      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(cx, cy, radius, 0, Math.PI * 2);
      ctx.fill();

      const maskDataUrl = canvas.toDataURL();
      revealRef.current.style.maskImage = `url(${maskDataUrl})`;
      revealRef.current.style.webkitMaskImage = `url(${maskDataUrl})`;
      revealRef.current.style.maskSize = '100% 100%';
      revealRef.current.style.webkitMaskSize = '100% 100%';

      animFrameRef.current = requestAnimationFrame(updateSpotlight);
    };

    animFrameRef.current = requestAnimationFrame(updateSpotlight);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Base Layer: BG_IMAGE_1 full bleed wallpaper shifted calc(50% + 380px) to place girl in far right corner */}
      <div
        className="absolute inset-0 bg-cover bg-no-repeat transition-all duration-500"
        style={{
          backgroundImage: `url("${BG_IMAGE_1}")`,
          backgroundPosition: 'calc(50% + 380px) center',
        }}
      />

      {/* Spotlight Reveal Layer: BG_IMAGE_2 */}
      <div
        ref={revealRef}
        className="absolute inset-0 bg-cover bg-no-repeat transition-all duration-500 hidden lg:block"
        style={{
          backgroundImage: `url("${BG_IMAGE_2}")`,
          backgroundPosition: 'calc(50% + 380px) center',
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
