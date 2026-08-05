'use client';

import React from 'react';
import { motion, useReducedMotion, HTMLMotionProps } from 'framer-motion';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export interface AnimatedButtonProps extends HTMLMotionProps<'button'> {
  variant?: 'primary' | 'secondary' | 'outline' | 'gold' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className,
  ...props
}) => {
  const shouldReduceMotion = useReducedMotion();

  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-full transition-colors cursor-pointer select-none border focus:outline-none';

  const variants = {
    primary: 'bg-primary text-background border-primary hover:bg-primary/95 shadow-subtle',
    gold: 'bg-accent text-primary border-accent hover:bg-accent-hover font-semibold shadow-subtle',
    secondary: 'bg-surface text-primary border-border hover:border-accent/40 shadow-subtle',
    outline: 'bg-transparent text-primary border-border hover:border-accent/40',
    ghost: 'bg-transparent text-secondary hover:text-primary border-transparent'
  };

  const sizes = {
    sm: 'px-4 py-2 text-xs gap-1.5',
    md: 'px-6 py-3 text-xs sm:text-sm tracking-wide gap-2',
    lg: 'px-8 py-4 text-xs sm:text-sm tracking-wider uppercase gap-2.5 font-semibold'
  };

  return (
    <motion.button
      whileHover={shouldReduceMotion ? undefined : { y: -2, scale: 1.02 }}
      whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
      transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] as const }}
      className={twMerge(clsx(baseStyles, variants[variant], sizes[size], className))}
      {...props}
    >
      {children}
    </motion.button>
  );
};
