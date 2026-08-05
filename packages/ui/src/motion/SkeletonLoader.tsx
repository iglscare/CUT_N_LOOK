'use client';

import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  width?: string | number;
  height?: string | number;
  borderRadius?: string;
}

export const SkeletonLoader: React.FC<SkeletonProps> = ({
  className,
  width,
  height,
  borderRadius = '0.75rem',
  style,
  ...props
}) => {
  return (
    <div
      className={twMerge(
        clsx('relative overflow-hidden bg-border/60 animate-pulse', className)
      )}
      style={{
        width,
        height,
        borderRadius,
        ...style,
      }}
      {...props}
    >
      <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer" />
    </div>
  );
};
