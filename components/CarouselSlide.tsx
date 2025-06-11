import { cn } from '@/utils/cn';
import { ReactNode } from 'react';

type CarouselSlideProps = {
  children: ReactNode;
  className?: string;
};

/**
 * A wrapper component for individual carousel slides.
 *
 * @param children - Content to render inside the slide.
 * @param className - Optional additional class names for styling.
 */

function CarouselSlide({ children, className = '' }: CarouselSlideProps) {
  return (
    <li
      className={cn(
        'aspect-[3/5]',
        'h-full',
        'snap-start',
        'rounded-3xl',
        'bg-white',
        'drop-shadow-lg',
        'sm:aspect-[1/2]',
        className,
      )}
    >
      {children}
    </li>
  );
}

export default CarouselSlide;
