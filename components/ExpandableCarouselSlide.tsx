import { cn } from '@/utils/cn';
import * as Dialog from '@radix-ui/react-dialog';
import { ReactNode, useEffect, useRef, useState } from 'react';
import CarouselSlide from './CarouselSlide';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

type ExpandableCarouselSlideProps = {
  children: ReactNode;
  expandedContent: ReactNode;
  btnClassName?: string;
  className?: string;
};

/**
 * A wrapper component for individual carousel slides that supports overlay content display on click.
 * Fully accessible, responsive, animated.
 *
 * @param children - the content of the slide
 * @param expandedContent - the content of the overlay.
 * @param btnClassName - (optional) classname for changing the plus button styles. The icon uses `currentColor`.
 * @param className - (optional) classes for altering slide's styling.
 *
 *
 *
 * @returns a carousel slide with the `children` param on the slide, plus icon in a circle in the right bottom corner.
 *
 */
const ExpandableCarouselSlide = ({
  children,
  btnClassName = '',
  className = '',
  expandedContent,
}: ExpandableCarouselSlideProps) => {
  const expandableCarouselSlideRef = useRef<HTMLLIElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false); // mounting/unmounting of the modal
  const [open, setOpen] = useState(false); // graceful opening closing, with animation

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

  useEffect(() => {
    if (open) setMounted(true);
  }, [open]);

  useGSAP(
    () => {
      if (!open && !!overlayRef.current)
        gsap
          .timeline({ onComplete: () => setMounted(false) })
          .fromTo(
            overlayRef.current,
            { opacity: 1 },
            { opacity: 0, duration: 0.4 },
          )
          .play();
    },
    {
      scope: expandableCarouselSlideRef,
      dependencies: [open],
    },
  );

  return (
    <CarouselSlide
      ref={expandableCarouselSlideRef}
      className={cn(
        'focus-visible:custom-focus-visible',
        'cursor-pointer',
        'overflow-visible',
        '!p-0',
        className,
      )}
    >
      <Dialog.Root open={mounted} onOpenChange={setOpen}>
        <Dialog.Trigger className="focus-visible:custom-focus-visible col relative flex h-full w-full cursor-pointer rounded-3xl p-4 text-left sm:p-8">
          {children}
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay
            ref={overlayRef}
            className={cn(
              'fixed inset-0 isolate z-50 flex w-screen justify-center overflow-auto bg-black/30 backdrop-blur-xl',
              open && 'animate-opacityy',
            )}
          >
            <Dialog.Content className="focus-visible:custom-focus-visible bg-bg col mx-4 my-4 flex h-max w-full max-w-[60rem] rounded-xl p-4 pt-4 sm:my-12 sm:rounded-3xl sm:p-12 sm:pt-6 lg:p-18">
              <Dialog.Close className="bg-highlight text-bg/70 hover:text-bg focus-visible:custom-focus-visible sticky top-4 z-50 cursor-pointer self-end rounded-full p-1.5 transition-colors sm:top-6 sm:-mr-6 lg:top-6 lg:-mt-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={3}
                  stroke="currentColor"
                  className="w-6 rotate-z-45"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              </Dialog.Close>
              {expandedContent}
            </Dialog.Content>
          </Dialog.Overlay>
        </Dialog.Portal>
      </Dialog.Root>
      <div
        className={cn(
          'bg-highlight',
          'text-bg/80',
          'rounded-full',
          'p-1.5',
          'absolute',
          'bottom-6',
          'right-6',
          btnClassName,
        )}
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
  );
};

export default ExpandableCarouselSlide;
