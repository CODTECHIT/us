"use client";

import { useEffect, useRef } from 'react';

interface AuroraProps {
  colorStops?: string[];
  amplitude?: number;
  blend?: number;
  speed?: number;
  className?: string;
}

const Aurora: React.FC<AuroraProps> = ({
  colorStops = ['#C6093C', '#1a1a2e', '#C6093C55'],
  amplitude = 1.0,
  blend = 0.5,
  speed = 0.5,
  className = '',
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const timeRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const parseColor = (hex: string) => {
      const r = parseInt(hex.slice(1, 3), 16);
      const g = parseInt(hex.slice(3, 5), 16);
      const b = parseInt(hex.slice(5, 7), 16);
      return { r, g, b };
    };

    const waves = colorStops.map((color, i) => ({
      color: parseColor(color.padEnd(9, '0').substring(0, 7)),
      offset: (i / colorStops.length) * Math.PI * 2,
      speed: speed * (0.5 + i * 0.3),
    }));

    const draw = (time: number) => {
      timeRef.current = time * 0.001;
      const { width, height } = canvas;
      ctx.clearRect(0, 0, width, height);

      waves.forEach((wave) => {
        const gradient = ctx.createRadialGradient(
          width * 0.5 + Math.sin(timeRef.current * wave.speed + wave.offset) * width * 0.3 * amplitude,
          height * 0.5 + Math.cos(timeRef.current * wave.speed * 0.7 + wave.offset) * height * 0.3 * amplitude,
          0,
          width / 2,
          height / 2,
          Math.max(width, height) * 0.8
        );
        const { r, g, b } = wave.color;
        gradient.addColorStop(0, `rgba(${r},${g},${b},${0.6 * blend})`);
        gradient.addColorStop(0.5, `rgba(${r},${g},${b},${0.2 * blend})`);
        gradient.addColorStop(1, `rgba(${r},${g},${b},0)`);

        ctx.globalCompositeOperation = 'screen';
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, width, height);
      });

      animRef.current = requestAnimationFrame(draw);
    };

    animRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener('resize', resize);
    };
  }, [colorStops, amplitude, blend, speed]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
    />
  );
};

export default Aurora;
