import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'gold' | 'success' | 'warning' | 'danger' | 'info' | 'outline';
}

export const Badge: React.FC<BadgeProps> = ({ children, variant = 'gold', className, ...props }) => {
  const base = 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors';
  const variants = {
    gold: 'bg-skygold-500/20 text-skygold-400 border border-skygold-500/40',
    success: 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40',
    warning: 'bg-amber-500/20 text-amber-400 border border-amber-500/40',
    danger: 'bg-red-500/20 text-red-400 border border-red-500/40',
    info: 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/40',
    outline: 'border border-slate-600 text-slate-300'
  };

  return (
    <span className={twMerge(clsx(base, variants[variant], className))} {...props}>
      {children}
    </span>
  );
};
