import { cn } from '@/utils/cn';
import { KeyboardEventHandler, ReactNode, Ref } from 'react';

type CarouselSlideProps = {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  onKeyDown?: KeyboardEventHandler<HTMLLIElement>;
  ref?: Ref<HTMLLIElement>;
  tabIndex?: number;
};

/**
 * A wrapper component for individual carousel slides.
 *
 * @param children - Content to render inside the slide.
 * @param className - Optional additional class names for styling.
 * @param onClick - Optional function to be run on click on the slide.
 * @param tabIndex - Optional wether or not and if, then at what priority should be the slide selectable by a tab key.
 * @param onKeyDown - Optional function to be run on key press wehn the slide is in focus.
 * @param ref - Optional react reference object.
 *
 */

function CarouselSlide({
  children,
  className = '',
  onClick,
  tabIndex,
  onKeyDown,
  ref,
}: CarouselSlideProps) {
  return (
    <li
      onClick={onClick}
      role="group"
      ref={ref}
      onKeyDown={onKeyDown}
      tabIndex={tabIndex}
      aria-roledescription="slide"
      aria-label="slide"
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
        '[&_img]:pointer-events-none',
        className,
      )}
    >
      {children}
    </li>
  );
}

export default CarouselSlide;
