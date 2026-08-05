import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'gold' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  isLoading = false,
  className,
  disabled,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-skygold-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer active:scale-95';

  const variants = {
    primary: 'bg-obsidian-700 text-white hover:bg-obsidian-600 border border-obsidian-600 shadow-md',
    gold: 'bg-gradient-to-r from-skygold-500 via-skygold-400 to-skygold-600 text-obsidian-900 font-semibold shadow-lg hover:shadow-skygold-500/30 hover:brightness-105 border border-skygold-300',
    secondary: 'bg-obsidian-800 text-slate-200 hover:bg-obsidian-700 border border-obsidian-700',
    outline: 'border-2 border-skygold-500/50 text-skygold-400 hover:bg-skygold-500/10 hover:border-skygold-400',
    ghost: 'text-slate-300 hover:bg-white/10 hover:text-white',
    danger: 'bg-red-600 text-white hover:bg-red-700 shadow'
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-xs gap-1.5',
    md: 'px-4 py-2.5 text-sm gap-2',
    lg: 'px-6 py-3.5 text-base gap-3 font-semibold'
  };

  return (
    <button
      className={twMerge(clsx(baseStyles, variants[variant], sizes[size], className))}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading && (
        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-current" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
        </svg>
      )}
      {children}
    </button>
  );
};
