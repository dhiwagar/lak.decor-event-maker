import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface FadeContentProps {
  children: ReactNode;
  blur?: boolean;
  duration?: number;
  easing?: string;
  delay?: number;
  initialOpacity?: number;
  className?: string;
}

export const FadeContent: React.FC<FadeContentProps> = ({
  children,
  blur = false,
  duration = 0.8,
  delay = 0,
  initialOpacity = 0,
  className = '',
}) => {
  return (
    <motion.div
      initial={{
        opacity: initialOpacity,
        filter: blur ? 'blur(8px)' : 'none',
        y: 20,
      }}
      whileInView={{
        opacity: 1,
        filter: 'blur(0px)',
        y: 0,
      }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
