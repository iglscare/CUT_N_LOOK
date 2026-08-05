'use client';

import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { PageTransition } from './PageTransition';

export interface TransitionProviderProps {
  children: React.ReactNode;
  routeKey?: string;
}

export const TransitionProvider: React.FC<TransitionProviderProps> = ({ children, routeKey }) => {
  return (
    <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
      <PageTransition key={routeKey}>
        {children}
      </PageTransition>
    </AnimatePresence>
  );
};
