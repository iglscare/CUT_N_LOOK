'use client';

import React from 'react';
import { motion, useReducedMotion, HTMLMotionProps } from 'framer-motion';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export interface AnimatedCardProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  className?: string;
}

export const AnimatedCard: React.FC<AnimatedCardProps> = ({ children, className, ...props }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      whileHover={
        shouldReduceMotion
          ? undefined
          : {
              y: -6,
              scale: 1.015,
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.06)',
            }
      }
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] as const }}
      className={twMerge(
        clsx(
          'group rounded-3xl bg-surface border border-border shadow-subtle p-8 transition-all duration-350 cursor-pointer overflow-hidden',
          className
        )
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
};
