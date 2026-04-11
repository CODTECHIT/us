"use client";

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface TrueFocusProps {
  text?: string;
  color?: string;
  borderColor?: string;
  glowColor?: string;
  animationDuration?: number;
  pauseBetweenAnimations?: number;
  className?: string;
}

const TrueFocus: React.FC<TrueFocusProps> = ({
  text = 'True Focus',
  color = 'white',
  borderColor = '#00ff00',
  glowColor = 'rgba(0, 255, 0, 0.6)',
  animationDuration = 0.5,
  pauseBetweenAnimations = 1,
  className = '',
}) => {
  const words = text.split(' ');
  const [activeIndex, setActiveIndex] = useState(0);
  const [focusRect, setFocusRect] = useState({ x: 0, y: 0, width: 0, height: 0 });
  const wordRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const wordElement = wordRefs.current[activeIndex];
    if (wordElement) {
      const { offsetLeft, offsetTop, offsetWidth, offsetHeight } = wordElement;
      setFocusRect({ x: offsetLeft, y: offsetTop, width: offsetWidth, height: offsetHeight });
    }
  }, [activeIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % words.length);
    }, (animationDuration + pauseBetweenAnimations) * 1000);
    return () => clearInterval(interval);
  }, [words.length, animationDuration, pauseBetweenAnimations]);

  return (
    <div className={`true-focus-container ${className}`}>
      {words.map((word, index) => (
        <span
          key={index}
          ref={(el) => {
            wordRefs.current[index] = el;
          }}
          className={`true-focus-word ${index === activeIndex ? 'active' : ''}`}
          style={{ 
            '--active-color': color 
          } as React.CSSProperties}
        >
          {word}
        </span>
      ))}
      <motion.div
        className="focus-frame"
        animate={{ 
          x: focusRect.x, 
          y: focusRect.y, 
          width: focusRect.width, 
          height: focusRect.height, 
          opacity: 1 
        }}
        initial={{ opacity: 0 }}
        transition={{ duration: animationDuration }}
        style={{ 
          '--border-color': borderColor, 
          '--glow-color': glowColor 
        } as React.CSSProperties}
      >
        <span className="corner top-left"></span>
        <span className="corner top-right"></span>
        <span className="corner bottom-left"></span>
        <span className="corner bottom-right"></span>
      </motion.div>
    </div>
  );
};

export default TrueFocus;
