'use client';
import { cn } from '@/utils/cn';
import { useGSAP } from '@gsap/react';
import { ReactNode, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import CarouselSlide from './CarouselSlide';
import gsap from 'gsap';
import OverlayContainer from './OverlayContainer';

type ExpandableCarouselSlideProps = {
  children: ReactNode;
  btnClassName?: string;
  expandedContent: ReactNode;
};

/**
 * A wrapper component for individual carousel slides, which require more content.
 *
 * @param children - contains slide's face content
 * @param expandedContent - slide's expandable content, meant to be shown after click in the overlay.
 * @param btnClassName - optional classNames for a small plus button styling located in the corner of the slide's face. The icon uses `currentColor` as its stroke color.
 *
 * Returns a `CarouselSlide` component which upon click opens model overlay of `expandedContent`.
 *
 */
function ExpandableCarouselSlide({
  children,
  btnClassName = '',
  expandedContent,
}: ExpandableCarouselSlideProps) {
  const expandableCarouselSlideRef = useRef<HTMLLIElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  useGSAP(
    () => {
      const hoverAnimation = gsap
        .fromTo(
          expandableCarouselSlideRef.current,
          { scale: 1 },
          { scale: 1.03, duration: 0.3 },
        )
        .pause();

      expandableCarouselSlideRef.current?.addEventListener('mouseenter', () =>
        hoverAnimation.play(),
      );
      expandableCarouselSlideRef.current?.addEventListener('mouseleave', () =>
        hoverAnimation.reverse(),
      );

      return () => {
        expandableCarouselSlideRef.current?.removeEventListener(
          'mouseenter',
          () => hoverAnimation.play(),
        );
        expandableCarouselSlideRef.current?.removeEventListener(
          'mouseleave',
          () => hoverAnimation.reverse(),
        );
      };
    },
    { scope: expandableCarouselSlideRef },
  );

  return (
    <>
      <CarouselSlide
        ref={expandableCarouselSlideRef}
        className="focus-visible:custom-focus-visible cursor-pointer"
        onClick={() => setIsOpen(true)}
        tabIndex={0}
        onKeyDown={(e) =>
          (e.key === ' ' || e.key === 'Enter') && setIsOpen(true)
        }
      >
        {children}
        <div
          className={cn(
            'bg-text',
            'rounded-full',
            'p-1.5',
            'absolute',
            'bottom-6',
            'right-6',
            btnClassName,
          )}
          onClick={() => setIsOpen(true)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={4}
            stroke="currentColor"
            className="w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </div>
      </CarouselSlide>
      {isOpen &&
        createPortal(
          <OverlayContainer unMountFn={() => setIsOpen(false)}>
            {expandedContent}
          </OverlayContainer>,
          document.body,
        )}
    </>
  );
}
export default ExpandableCarouselSlide;
