import { ReactElement, useEffect, useRef, useState } from 'react';
import CarouselSlide from './CarouselSlide';
import { cn } from '@/utils/cn';

type CarouselProps = {
  children:
    | ReactElement<typeof CarouselSlide>[]
    | ReactElement<typeof CarouselSlide>;
  className?: string;
};

/**
 * A horizontal scrollable carousel component with drag and  scroll support and arrow navigation.
 *
 * Expects children to be one or more `<CarouselSlide />` or `<ExpandableCarouselSlide />` components.
 * Handles mouse dragging, arrow button scrolling, and disables arrows
 * when scrolling reaches either end.
 *
 * Example usage:
 * ```tsx
 * <Carousel>
 *   <CarouselSlide>...</CarouselSlide>
 *   <ExpandableCarouselSlide expandedContent={...}>...</ExpandableCarouselSlide>
 * </Carousel>
 * ```
 *
 * @param children - One or more `CarouselSlide` components.
 * @param className - additional class names for styling.
 *
 */

function Carousel({ children, className = '' }: CarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [disabledArrow, setDisabledArrow] = useState<'prev' | 'next' | null>(
    'prev',
  );

  // drag functionality
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let isDown = false;
    let startX: number;
    let scrollLeft: number;

    const onMouseDown = (e: MouseEvent) => {
      isDown = true;
      startX = e.pageX - el.offsetLeft;
      scrollLeft = el.scrollLeft;
      el.classList.add('cursor-grabbing');
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDown || !el) return;
      e.preventDefault();

      const x = e.pageX - el.offsetLeft;
      const walk = (x - startX) * 1.5; // scroll speed
      el.scrollLeft = scrollLeft - walk;
    };

    const onMouseUp = () => {
      isDown = false;
      el.classList.remove('cursor-grabbing');
    };

    const handleScroll = () => {
      const maxScrollLeft = el.scrollWidth - el.clientWidth;

      if (el.scrollLeft <= 0) {
        setDisabledArrow('prev');
      } else if (el.scrollLeft >= maxScrollLeft - 1) {
        setDisabledArrow('next');
      } else {
        setDisabledArrow(null);
      }
    };

    el.addEventListener('scroll', handleScroll);

    el.addEventListener('mousedown', onMouseDown);
    el.addEventListener('mousemove', onMouseMove);
    el.addEventListener('mouseup', onMouseUp);
    el.addEventListener('mouseleave', onMouseUp);

    return () => {
      el.removeEventListener('mousedown', onMouseDown);
      el.removeEventListener('mousemove', onMouseMove);
      el.removeEventListener('mouseup', onMouseUp);
      el.removeEventListener('mouseleave', onMouseUp);
      el.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // programatic scroll
  const scrollByCard = (direction: 'left' | 'right') => {
    const el = scrollRef.current;
    if (!el) return;
    const child = el.querySelector('li'); // assumes all li have same width
    if (!child) return;

    const scrollAmount = (child as HTMLElement).offsetWidth; // 32 = gap-8
    el.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <div
      className={cn(
        'carousel',
        'col',
        'pointer-events-none',
        'flex',
        'w-full',
        className,
      )}
    >
      {/* the carousel */}
      <div
        ref={scrollRef}
        tabIndex={-1}
        className="no-scrollbar pointer-events-auto flex w-full snap-x snap-mandatory scroll-px-[var(--responsive-gutter-width)] overflow-x-scroll scroll-smooth py-4 pb-10"
      >
        <ul
          role="region"
          aria-roledescription="carousel"
          aria-label="Feature highlights"
          className="carousel-track flex h-full w-max grid-cols-[repeat(5,260px)] items-stretch gap-4 px-[var(--responsive-gutter-width)] sm:gap-8"
        >
          {!!children && children}
        </ul>
      </div>

      {/* arrows navigation */}
      <div className="carousel-arrows-nav pointer-events-auto mr-[var(--responsive-gutter-width)] flex justify-center gap-4 self-end">
        <button
          type="button"
          aria-label="Previous slide"
          aria-controls="carousel-list"
          onClick={() => scrollByCard('left')}
          disabled={disabledArrow === 'prev'}
          className="rounded-full bg-gray-200 p-2 transition-all hover:bg-gray-300 disabled:opacity-50"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 -960 960 960"
            className="fill-highlight mr-px -ml-px size-7 scale-110"
          >
            <path d="m471-480 137 137q20 19 20 46.98 0 27.98-20 48.02-19 19-46.98 19-27.98 0-48.02-19L330-432q-9.91-9.71-15.45-22.21Q309-466.71 309-480q0-13.57 5.55-26.32Q320.09-519.07 330-529l183-184q20.04-19 48.02-19Q589-732 608-713q20 20.04 20 48.02Q628-637 608-618L471-480Z" />
          </svg>
        </button>
        <button
          type="button"
          aria-label="Next slide"
          aria-controls="carousel-list"
          onClick={() => scrollByCard('right')}
          disabled={disabledArrow === 'next'}
          className="rounded-full bg-gray-200 p-2 transition-all hover:bg-gray-300 disabled:opacity-50"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 -960 960 960"
            className="fill-highlight -mr-px ml-px size-7 scale-110 rotate-z-180"
          >
            <path d="m471-480 137 137q20 19 20 46.98 0 27.98-20 48.02-19 19-46.98 19-27.98 0-48.02-19L330-432q-9.91-9.71-15.45-22.21Q309-466.71 309-480q0-13.57 5.55-26.32Q320.09-519.07 330-529l183-184q20.04-19 48.02-19Q589-732 608-713q20 20.04 20 48.02Q628-637 608-618L471-480Z" />
          </svg>
        </button>
      </div>
    </div>
  );
}
export default Carousel;
