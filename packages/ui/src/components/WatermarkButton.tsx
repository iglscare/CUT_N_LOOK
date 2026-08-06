'use client';

import React from 'react';

export interface WatermarkButtonProps {
  href?: string;
  className?: string;
}

export const WatermarkButton: React.FC<WatermarkButtonProps> = ({
  href = 'https://portfolio.techtipstool.com',
  className = '',
}) => {
  return (
    <div
      className={`fixed bottom-5 right-5 z-[9999] flex items-center pointer-events-auto select-none ${className}`}
    >
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="TechTipsTool Portfolio"
        className="group relative flex items-center justify-center cursor-pointer no-underline transition-all duration-300 transform hover:scale-110 active:scale-95"
      >
        {/* Outer Glowing Circle Badge */}
        <div className="relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white shadow-[0_0_20px_rgba(27,162,230,0.5)] border-2 border-[#1ba2e6]/80 transition-all duration-300 group-hover:shadow-[0_0_30px_rgba(27,162,230,0.85)] group-hover:border-[#1ba2e6] overflow-hidden p-1.5">
          {/* Subtle Pulse Glow Ring */}
          <div className="absolute inset-0 rounded-full bg-[#1ba2e6]/20 animate-ping opacity-25 group-hover:opacity-40 pointer-events-none" />

          {/* Exact Logo Image */}
          <img
            src="/techtipstool-logo.png"
            alt="TechTipsTool Portfolio Watermark"
            className="w-full h-full object-contain rounded-full relative z-10 transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </a>
    </div>
  );
};
