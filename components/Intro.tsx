'use client';
import { useGSAP } from '@gsap/react';
import Image from 'next/image';
import { useRef } from 'react';
import gsap from '../utils/registerGsap';
import DisplayMsg from './DisplayMsg';
import LinkButton from './LinkButton';

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
            start: window.innerWidth > 640 ? 'top top+=200' : 'top top+=100',
            end: '+=2000',
            scrub: 1,
            pin: true,
            markers: false,
          },
        })
        .to('.intro > div', { opacity: 1, y: 0, duration: 1.5, stagger: 10 })
        .fromTo('.showcase', { opacity: 1 }, { opacity: 1, duration: 10 });
      // gsap.timeline({
      //   scrollTrigger: {
      //     trigger: '.intro-pin',
      //     start:
      //       window.innerWidth > 640 ? 'top center-=300' : 'top center-=200',
      //     end: '+=2000',
      //     pin: true,
      //     markers: false,
      //   },
      // });

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
      <section className="gap-40 lg:gap-60" ref={introRef}>
        <div className="intro-pin">
          <div className="intro col mx-auto flex max-w-[1000px] gap-8">
            <DisplayMsg className="translate-y-8 leading-[1.2] opacity-0 max-sm:text-3xl">
              After wearing the fullstack hat for 3 years now,
            </DisplayMsg>
            <DisplayMsg className="translate-y-8 leading-[1.2] opacity-0 max-sm:text-3xl">
              I&apos;ve decided to focus on the part that brings me the greatest
              joy.
            </DisplayMsg>
            <DisplayMsg className="text-primary eading-[1.2] translate-y-8 font-black opacity-0 max-sm:text-3xl">
              The frontend development.
            </DisplayMsg>
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
              <LinkButton href="#" className="mt-2" />
            </div>
          </DisplayMsg>
          <div className="dashboard flex-center relative translate-y-[80vh] scale-75">
            <div className="col flex w-full gap-4">
              <div className="relative aspect-video w-full">
                <Image
                  fill
                  src="/images/device-mockups/ntb.png"
                  alt="Notebook mockup"
                  className="object-contain"
                />
                <div className="absolute top-[2.5%] right-[13.1%] left-[13.1%] aspect-[16/10.41] overflow-hidden sm:rounded-t-xl">
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
