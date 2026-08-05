'use client';

import React from 'react';
import { AnimatePresence, LayoutGroup } from 'framer-motion';

export interface PageStackProps {
  children: React.ReactNode;
  routeKey?: string;
}

export const PageStack: React.FC<PageStackProps> = ({ children, routeKey }) => {
  return (
    <LayoutGroup>
      <div className="min-h-screen bg-background text-primary selection:bg-accent selection:text-surface overflow-x-hidden">
        <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
          <React.Fragment key={routeKey}>
            {children}
          </React.Fragment>
        </AnimatePresence>
      </div>
    </LayoutGroup>
  );
};
