import { cn } from '@/utils/cn';
import * as Dialog from '@radix-ui/react-dialog';
import { ReactNode, useRef } from 'react';
import CarouselSlide from './CarouselSlide';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

type ExpandableCarouselSlideProps = {
  children: ReactNode;
  expandedContent: ReactNode;
  btnClassName?: string;
  className?: string;
};

const ExpandableCarouselSlide2 = ({
  children,
  btnClassName = '',
  className = '',
  expandedContent,
}: ExpandableCarouselSlideProps) => {
  const expandableCarouselSlideRef = useRef<HTMLLIElement>(null);

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
      <Dialog.Root>
        <Dialog.Trigger className="focus-visible:custom-focus-visible col flex h-full w-full cursor-pointer rounded-3xl p-4 text-left sm:p-8">
          {children}
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="bg-blackA6 data-[state=open]:animate-overlayShow fixed inset-0" />
          <Dialog.Content className="bg-gray1 data-[state=open]:animate-contentShow fixed top-1/2 left-1/2 max-h-[85vh] w-[90vw] max-w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-md p-[25px] shadow-[var(--shadow-6)] focus:outline-none">
            <Dialog.Close asChild>
              <button className="bg-text text-bg/70 hover:text-bg sticky top-4 cursor-pointer self-end rounded-full p-1.5 transition-colors sm:top-6 sm:-mr-6">
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
              </button>
            </Dialog.Close>
          </Dialog.Content>
          {expandedContent}
        </Dialog.Portal>
      </Dialog.Root>
      <div
        className={cn(
          'bg-text',
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

export default ExpandableCarouselSlide2;
