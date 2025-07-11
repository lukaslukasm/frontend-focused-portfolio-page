import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ReactNode, useRef, useState } from 'react';

type OverlayContainerProps = {
  children: ReactNode;
  unMountFn: () => void;
};

/**
 * Renders children as an overlay content. Includes mount and unmount animations, styling, resposnivity and some a11y. Does not include the portal.
 *
 * @param children - the content to be shown.
 * @param unMountFn - funciton to be called to unmount the component.
 *
 * @example
 * ```ts
 * createPortal(<OverlayContainer unMountFn={()=>setIsOpen(false)}>...</OverlayContainer>,document.body)
 *
 */
function OverlayContainer({ children, unMountFn }: OverlayContainerProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const [animateUnmount, setAnimateUnmount] = useState(false);

  useGSAP(
    () => {
      const overlayTL = gsap
        .timeline({ onReverseComplete: () => unMountFn() })
        .fromTo(
          overlayRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.4 },
        );

      if (!animateUnmount) overlayTL.play();
      else overlayTL.reverse(0);
    },
    {
      scope: overlayRef,
      dependencies: [animateUnmount],
    },
  );

  return (
    <div
      ref={overlayRef}
      onClick={(e) => e.target === e.currentTarget && setAnimateUnmount(true)}
      className="fixed top-0 left-0 isolate z-50 flex max-h-screen w-screen justify-center overflow-auto overscroll-none bg-black/30 opacity-0 backdrop-blur-xl"
    >
      <div className="content bg-bg relative z-10 mx-4 my-4 flex h-[150svh] w-full max-w-[60rem] flex-col rounded-xl p-4 pt-4 sm:my-12 sm:rounded-3xl sm:p-12 sm:pt-6">
        <button
          className="bg-text text-bg/70 hover:text-bg sticky top-4 cursor-pointer self-end rounded-full p-1.5 transition-colors sm:top-6 sm:-mr-6"
          onClick={() => setAnimateUnmount(true)}
        >
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
        {children}
      </div>
    </div>
  );
}
export default OverlayContainer;
