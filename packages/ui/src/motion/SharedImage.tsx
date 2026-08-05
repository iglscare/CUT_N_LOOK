'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export interface SharedImageProps {
  layoutId: string;
  src: string;
  alt: string;
  className?: string;
}

export const SharedImage: React.FC<SharedImageProps> = ({
  layoutId,
  src,
  alt,
  className = '',
}) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div layoutId={`wrapper-${layoutId}`} className="relative overflow-hidden w-full h-full">
      <motion.img
        layoutId={layoutId}
        src={src}
        alt={alt}
        initial={
          shouldReduceMotion
            ? { opacity: 0 }
            : { opacity: 0, scale: 1.08, filter: 'blur(8px)' }
        }
        animate={
          shouldReduceMotion
            ? { opacity: 1 }
            : { opacity: 1, scale: 1, filter: 'blur(0px)' }
        }
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1] as const,
        }}
        className={`w-full h-full object-cover filter contrast-[105%] saturate-[105%] ${className}`}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/20 pointer-events-none" />
    </motion.div>
  );
};
