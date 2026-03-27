'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import {
  HTMLMotionProps,
  motion,
  MotionValue,
  useScroll,
  useTransform,
} from 'framer-motion';

interface ScrollXCarouselContextValue {
  scrollYProgress: MotionValue<number>;
}

const ScrollXCarouselContext =
  React.createContext<ScrollXCarouselContextValue | null>(null);

function useScrollXCarousel() {
  const context = React.useContext(ScrollXCarouselContext);
  if (!context) {
    throw new Error('useScrollXCarousel must be used within a ScrollXCarousel');
  }
  return context;
}

export function ScrollXCarousel({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const carouselRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: carouselRef,
  });

  return (
    <ScrollXCarouselContext.Provider value={{ scrollYProgress }}>
      <div ref={carouselRef} className={cn('relative', className)} {...props}>
        {children}
      </div>
    </ScrollXCarouselContext.Provider>
  );
}

export function ScrollXCarouselContainer({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn('sticky top-0 overflow-hidden', className)}
      {...props}
    />
  );
}

export function ScrollXCarouselWrap({
  className,
  style,
  xRange = ['-0%', '-80%'],
  ...props
}: HTMLMotionProps<'div'> & { xRange?: string[] }) {
  const { scrollYProgress } = useScrollXCarousel();
  const x = useTransform(scrollYProgress, [0, 1], xRange);

  return (
    <motion.div
      className={cn('w-fit', className)}
      style={{ x, ...style }}
      {...props}
    />
  );
}

export function ScrollXCarouselProgress({
  className,
  style,
  progressStyle,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & {
  progressStyle?: React.CSSProperties;
}) {
  const { scrollYProgress } = useScrollXCarousel();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div className={cn('h-0.5 w-full bg-border', className)} style={style} {...props}>
      <motion.div
        className="h-full origin-left bg-primary"
        style={{ scaleX, ...progressStyle }}
      />
    </div>
  );
}
