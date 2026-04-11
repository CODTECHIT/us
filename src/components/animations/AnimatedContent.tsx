"use client";

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface AnimatedContentProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale';
  distance?: number;
  duration?: number;
  threshold?: number;
  once?: boolean;
}

const AnimatedContent: React.FC<AnimatedContentProps> = ({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  distance = 40,
  duration = 0.6,
  threshold = 0.1,
  once = true,
}) => {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (once) observer.unobserve(ref.current!);
        } else if (!once) {
          setInView(false);
        }
      },
      { threshold }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold, once]);

  const initialProps = {
    up: { opacity: 0, y: distance },
    down: { opacity: 0, y: -distance },
    left: { opacity: 0, x: distance },
    right: { opacity: 0, x: -distance },
    scale: { opacity: 0, scale: 0.85 },
  }[direction];

  const animateProps = {
    up: { opacity: 1, y: 0 },
    down: { opacity: 1, y: 0 },
    left: { opacity: 1, x: 0 },
    right: { opacity: 1, x: 0 },
    scale: { opacity: 1, scale: 1 },
  }[direction];

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={initialProps}
      animate={inView ? animateProps : initialProps}
      transition={{ duration, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedContent;
