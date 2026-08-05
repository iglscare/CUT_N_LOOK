import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'glass' | 'gold' | 'bordered';
  glow?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  variant = 'default',
  glow = false,
  className,
  ...props
}) => {
  const base = 'rounded-xl p-6 transition-all duration-300 relative overflow-hidden';
  const variants = {
    default: 'bg-obsidian-800/80 border border-obsidian-700 text-slate-100 shadow-xl backdrop-blur-md',
    glass: 'bg-obsidian-900/60 border border-white/10 text-white backdrop-blur-xl shadow-2xl',
    gold: 'bg-gradient-to-br from-obsidian-800 via-obsidian-900 to-obsidian-800 border border-skygold-500/40 text-slate-100 shadow-skygold-500/5',
    bordered: 'bg-obsidian-900 border-2 border-obsidian-700 text-slate-100'
  };

  return (
    <div
      className={twMerge(
        clsx(
          base,
          variants[variant],
          glow && 'before:absolute before:inset-0 before:-z-10 before:bg-skygold-500/10 before:blur-xl',
          className
        )
      )}
      {...props}
    >
      {children}
    </div>
  );
};
