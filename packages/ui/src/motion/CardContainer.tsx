'use client';

import React from 'react';
import { motion, useMotionValue, useTransform, useReducedMotion } from 'framer-motion';

export interface CardContainerProps {
  children: React.ReactNode;
  className?: string;
  tiltAmount?: number;
}

export const CardContainer: React.FC<CardContainerProps> = ({
  children,
  className = '',
  tiltAmount = 3,
}) => {
  const shouldReduceMotion = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [tiltAmount, -tiltAmount]);
  const rotateY = useTransform(x, [-100, 100], [-tiltAmount, tiltAmount]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (shouldReduceMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      style={shouldReduceMotion ? undefined : { rotateX, rotateY, transformStyle: 'preserve-3d' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={
        shouldReduceMotion
          ? undefined
          : {
              y: -10,
              scale: 1.015,
              boxShadow: '0 25px 70px rgba(0, 0, 0, 0.12)',
            }
      }
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] as const }}
      className={`relative rounded-3xl bg-surface border border-border/80 p-8 shadow-[0_20px_60px_rgba(0,0,0,0.06)] transition-all duration-300 hover:border-accent/60 ${className}`}
    >
      {children}
    </motion.div>
  );
};
