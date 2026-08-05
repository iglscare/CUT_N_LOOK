'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export interface AnimatedImageProps {
  src: string;
  alt: string;
  className?: string;
  wrapperClassName?: string;
}

export const AnimatedImage: React.FC<AnimatedImageProps> = ({
  src,
  alt,
  className = '',
  wrapperClassName = '',
}) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className={`relative overflow-hidden ${wrapperClassName}`}>
      {/* Film Grain & Vignette Canvas Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/25 pointer-events-none z-10" />

      {/* Studio Light Flare Sweep Effect */}
      <motion.div
        initial={{ x: '-100%' }}
        whileInView={{ x: '100%' }}
        viewport={{ amount: 0.2, once: true }}
        transition={{ duration: 1.2, delay: 0.3, ease: 'easeInOut' }}
        className="absolute inset-0 z-20 bg-gradient-to-r from-transparent via-white/15 to-transparent pointer-events-none"
      />

      {/* Cinematic Image Reveal (Scale 1.12->1, Blur 16px->0, Brightness 92%->100%, Opacity 0->1, 1000ms) */}
      <motion.img
        src={src}
        alt={alt}
        initial={
          shouldReduceMotion
            ? { opacity: 0 }
            : {
                opacity: 0,
                scale: 1.12,
                filter: 'blur(16px) brightness(92%) contrast(108%) saturate(105%)',
              }
        }
        whileInView={
          shouldReduceMotion
            ? { opacity: 1 }
            : {
                opacity: 1,
                scale: 1,
                filter: 'blur(0px) brightness(100%) contrast(100%) saturate(100%)',
              }
        }
        viewport={{ amount: 0.2, once: true }}
        transition={{
          duration: 1.0,
          ease: [0.22, 1, 0.36, 1] as const,
        }}
        className={`w-full h-full object-cover filter ${className}`}
      />
    </div>
  );
};
