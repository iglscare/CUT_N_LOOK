'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export interface CardPageProps {
  children: React.ReactNode;
  className?: string;
}

export const CardPage: React.FC<CardPageProps> = ({ children, className = '' }) => {
  const shouldReduceMotion = useReducedMotion();

  const cardVariants = {
    initial: shouldReduceMotion
      ? { opacity: 0 }
      : {
          opacity: 0,
          scale: 0.98,
          y: 20,
          filter: 'blur(8px)',
        },
    animate: shouldReduceMotion
      ? { opacity: 1 }
      : {
          opacity: 1,
          scale: 1,
          y: 0,
          filter: 'blur(0px)',
        },
    exit: shouldReduceMotion
      ? { opacity: 0 }
      : {
          opacity: 0,
          scale: 0.98,
          y: -20,
          filter: 'blur(8px)',
        },
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={cardVariants}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] as const,
      }}
      className={`relative w-full min-h-screen bg-background overflow-hidden ${className}`}
    >
      {children}
    </motion.div>
  );
};
