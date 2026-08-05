import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, helperText, className, id, ...props }, ref) => {
    const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);

    return (
      <div className="w-full flex flex-col gap-1.5">
        {label && (
          <label htmlFor={inputId} className="text-xs font-medium uppercase tracking-wider text-slate-300">
            {label}
          </label>
        )}
        <input
          id={inputId}
          ref={ref}
          className={twMerge(
            clsx(
              'w-full px-4 py-2.5 bg-obsidian-900/90 border border-obsidian-600 rounded-lg text-slate-100 placeholder-slate-500 text-sm transition-all focus:outline-none focus:border-skygold-500 focus:ring-1 focus:ring-skygold-500/50',
              error && 'border-red-500 focus:border-red-500 focus:ring-red-500/50',
              className
            )
          )}
          {...props}
        />
        {error && <span className="text-xs text-red-400 mt-0.5">{error}</span>}
        {!error && helperText && <span className="text-xs text-slate-400 mt-0.5">{helperText}</span>}
      </div>
    );
  }
);

Input.displayName = 'Input';
