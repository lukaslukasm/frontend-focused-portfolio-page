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
        'carousel-slide',
        'sm:aspect-[3/5]',
        'relative',
        'sm:w-88',
        'w-64',
        'flex',
        'col',
        'sm:p-8',
        'p-4',
        'sm:gap-4',
        'gap-3',
        'snap-start',
        'select-none',
        'overflow-hidden',
        'rounded-3xl',
        'bg-white',
        'drop-shadow-lg',
        className,
      )}
    >
      {children}
    </li>
  );
}

export default CarouselSlide;
