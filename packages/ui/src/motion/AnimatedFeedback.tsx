'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, AlertCircle } from 'lucide-react';

export const AnimatedSuccess: React.FC<{ message?: string; className?: string }> = ({ message, className }) => {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className={`flex items-center gap-2 text-success ${className || ''}`}
    >
      <CheckCircle2 className="w-5 h-5 text-success shrink-0" />
      {message && <span className="text-xs font-semibold">{message}</span>}
    </motion.div>
  );
};

export const AnimatedError: React.FC<{ message?: string; className?: string }> = ({ message, className }) => {
  return (
    <motion.div
      initial={{ x: 0 }}
      animate={{ x: [-8, 8, -4, 4, 0] }}
      transition={{ duration: 0.25, ease: 'easeInOut' }}
      className={`flex items-center gap-2 text-red-500 ${className || ''}`}
    >
      <AlertCircle className="w-5 h-5 text-red-500 shrink-0" />
      {message && <span className="text-xs font-semibold">{message}</span>}
    </motion.div>
  );
};
