'use client';
import { useGSAP } from '@gsap/react';
import Image from 'next/image';
import { useRef } from 'react';
import gsap from '../utils/registerGsap';
import DisplayMsg from './DisplayMsg';

/**
 * Section component for displaying the website's Introduction.
 *
 * Renders static content with layout, styling, and animations.
 */

function Intro() {
  const introRef = useRef(null);

  useGSAP(
    () => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: '.intro',
            start:
              window.innerWidth > 640 ? 'top center-=300' : 'top center-=100',
            end: '+=1500',
            scrub: 1,
            markers: false,
          },
        })
        .to('.intro > div', { opacity: 1, y: 0, duration: 1.5, stagger: 10 });
      gsap.timeline({
        scrollTrigger: {
          trigger: '.intro-pin',
          start:
            window.innerWidth > 640 ? 'top center-=300' : 'top center-=200',
          end: '+=2000',
          pin: true,
          markers: false,
        },
      });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: '.heading',
            start: 'top bottom+=100',
            toggleActions: 'restart none none none',
            markers: false,
          },
        })
        .to('.heading', { opacity: 1, y: 0, duration: 0.5 })
        .fromTo(
          '.dashboard',
          { y: '80vh' },
          { y: 0, duration: 0.7, ease: 'power4.out' },
          '<+=0.1',
        )
        .fromTo(
          '.dashboard',
          { scale: 0.75 },
          { scale: 1, duration: 0.7, ease: 'power4.out' },
          '<+=0.2',
        );
    },
    { scope: introRef },
  );

  return (
    <>
      <section className="" ref={introRef}>
        <div className="h-[360svh] sm:h-[210svh]">
          <div className="intro-pin">
            <div className="intro col mx-auto flex max-w-[900px] gap-8">
              <DisplayMsg className="translate-y-8 opacity-0 max-sm:text-3xl">
                After wearing the fullstack hat for 3 years now,
              </DisplayMsg>
              <DisplayMsg className="translate-y-8 opacity-0 max-sm:text-3xl">
                I&apos;ve decided to focus on the part that brings me the
                greatest joy.
              </DisplayMsg>
              <DisplayMsg className="text-primary translate-y-8 opacity-0 max-sm:text-3xl">
                The frontend development.
              </DisplayMsg>
            </div>
          </div>
        </div>
        <div
          id="showcase"
          className="col relative flex gap-10 overflow-x-visible overflow-y-hidden sm:gap-20"
        >
          <DisplayMsg
            category="Skill Showcase"
            className="heading translate-y-8 opacity-0"
          >
            <div className="flex items-center gap-4">
              <h2 className="">Coming Soon</h2>
              <a
                href="#"
                target="_blank"
                className="flex-center hover:bg-primary group border-primary text-primary outline- outline-bg mt-2 gap-2 rounded-full border-2 px-3 py-1 text-base ring-blue-500 transition-colors hover:text-white focus-visible:ring-6 focus-visible:outline-2"
              >
                Link
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={4}
                  className="stroke-primary size-4 transition-colors group-hover:stroke-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </a>
            </div>
          </DisplayMsg>
          <div className="dashboard flex-center relative translate-y-[80vh] scale-75">
            <div className="col flex w-full gap-4">
              <div className="relative aspect-video w-full">
                <Image
                  fill
                  src="/images/macbook-mockup.jpg"
                  alt="Macbook mockup"
                  className="object-contain"
                />
                <div className="absolute top-[2.9%] right-[12.3%] left-[12.3%] aspect-[16/10.41] overflow-hidden rounded-t-xl">
                  <Image
                    alt="dashboard"
                    className="h-full object-contain"
                    fill
                    src="/images/dashboard-placeholder.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Intro;
