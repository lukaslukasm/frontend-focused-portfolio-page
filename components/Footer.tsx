'use client';
import { useGSAP } from '@gsap/react';
import DisplayMsg from './DisplayMsg';
import gsap from 'gsap';
import { useRef } from 'react';

/**
 * Footer component for displaying the website's contact section and story wrap.
 *
 * Renders static content with layout, styling, and animations.
 */
function Footer() {
  const footerRef = useRef<HTMLDivElement>(null);
  const tl = useRef<GSAPTimeline>(null);

  const { contextSafe } = useGSAP(
    () => {
      tl.current = gsap
        .timeline({ paused: true })
        .to('.checkmark', {
          opacity: 1,
          y: 0,
          duration: 0.3,
          ease: 'power4.out',
        })
        .to(
          '.text',
          {
            y: 24,
            opacity: 0,
            duration: 0.3,
            ease: 'power4.out',
          },
          '<',
        )
        .to(
          '.checkmark',
          {
            opacity: 0,
            y: -24,
            duration: 0.3,
            ease: 'power4.out',
          },
          '+=1',
        )
        .to(
          '.text',
          {
            y: 0,
            opacity: 1,
            duration: 0.3,
            ease: 'power4.out',
          },
          '<',
        );
    },
    { scope: footerRef },
  );

  useGSAP(
    () => {
      gsap
        .timeline({
          paused: true,
          scrollTrigger: {
            trigger: '.heading-footer',
            start: 'top bottom+=50',
            end: '+=200',
            toggleActions: 'restart none none none',
          },
        })
        .to('#contact > *', {
          opacity: 1,
          y: 0,
          duration: 0.75,
          stagger: 0.2,
        });
    },
    { scope: footerRef },
  );

  const toggleTimeline = contextSafe(() => {
    tl.current?.restart();
  });

  useGSAP(() => {
    gsap.fromTo(
      '.gradient-border',
      { rotateZ: 0 },
      { rotateZ: 360, ease: 'linear', repeat: -1, duration: 5 },
    );
  });

  return (
    <div
      id="contact"
      ref={footerRef}
      className="flex-center col text-text bg-bg relative h-[75svh] w-screen px-4 pb-40 sm:h-[50svh]"
    >
      <DisplayMsg
        className="heading-footer translate-y-8 text-center opacity-0 max-sm:text-6xl"
        category="And that's a wrap!"
      >
        Thanks for scrolling&nbsp;by.
      </DisplayMsg>
      <p className="mt-24 translate-y-8 text-center text-base opacity-0 sm:mt-12 sm:text-xl">
        Got some divs that need centering? <br className="sm:hidden" /> Feel
        free to reach out.
      </p>
      <div className="flex-center mt-3 translate-y-8 gap-4 rounded-full bg-gray-200 p-1 opacity-0">
        <address className="not-italic">
          <a
            href="mailto:mikula.luky@gmail.com"
            className="my-1.5 ml-4 text-xl font-bold underline"
          >
            mikula.luky@gmail.com
          </a>
        </address>
        <button
          type="button"
          aria-label="Scroll to contact section"
          onClick={() => {
            navigator.clipboard.writeText('mikula.luky@gmail.com');
            toggleTimeline();
          }}
          className="bg-text relative isolate cursor-pointer overflow-hidden rounded-full !opacity-100 hover:[&_.blue-bg]:opacity-100"
        >
          <div className="blue-bg bg-primary absolute inset-0 opacity-0 transition-opacity"></div>
          <div className="gradient-border from-primary to-primary absolute top-1/2 left-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 bg-conic-180 from-0% via-transparent blur-md"></div>
          <div className="relative z-10 rounded-full px-4 py-3 leading-none font-bold text-white">
            <div className="absolute-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={3}
                stroke="currentColor"
                className="checkmark size-7 -translate-y-7 opacity-0"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 12.75 6 6 9-13.5"
                />
              </svg>
            </div>
            <div className="text">Copy</div>
          </div>
        </button>
      </div>
    </div>
  );
}
export default Footer;
