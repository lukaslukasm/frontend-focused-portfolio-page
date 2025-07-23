import { useRef } from 'react';
import DisplayMsg from './DisplayMsg';
import { useGSAP } from '@gsap/react';
import SmallWheelLogos from './SmallWheelLogos';
import BigWheelLogos from './BigWheelLogos';
import gsap from 'gsap';
import StatsSubSection from './StatsSubSection';

/**
 * Section component for displaying experience with technologies.
 *
 * Renders static content and dynamic contnent from /data/technologiesUsage.json with layout, styling, and animations.
 */

function Experience() {
  const experienceRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add('(max-width:640px)', () => {
        gsap
          .timeline({
            scrollTrigger: {
              trigger: experienceRef.current,
              start: 'top center',
            },
          })
          .to('.heading', {
            y: 0,
            duration: 0.75,
            opacity: 1,
            stagger: 0.2,
          })
          .to('.line1', {
            opacity: 1,
            y: 0,
            rotateX: 0,
            delay: 3,
            ease: 'power4.out',
          })
          .to(
            '.line1',
            { opacity: 0, y: -36, ease: 'power4.out', rotateX: -80 },
            '>+=3',
          )
          .to(
            '.line2',
            {
              opacity: 1,
              y: 0,
              rotateX: 0,
              ease: 'power4.out',
            },
            '<',
          )
          // .to('.wheels', { top: '30vh', y: 0 }, '<')
          .fromTo(
            '.card',
            { opacity: 0.5 },
            {
              opacity: 0.05,
              filter: 'grayscale(100)',
            },
          )
          .to(
            '.fav',
            {
              opacity: 1,
              filter: 'grayscale(0)',
            },
            '<',
          );
      });

      mm.add('(min-width:641px)', () => {
        gsap
          .timeline({
            scrollTrigger: {
              trigger: experienceRef.current,
              start: 'center-=200 bottom',
            },
          })
          .to('.heading', {
            y: 0,
            duration: 0.75,
            opacity: 1,
            stagger: 0.2,
          })
          .to('.line1', {
            opacity: 1,
            y: 0,
            rotateX: 0,
            delay: 1,
            ease: 'power4.out',
          })
          .to(
            '.line1',
            { opacity: 0, y: -36, ease: 'power4.out', rotateX: -80 },
            '>+=3',
          )
          .to(
            '.line2',
            {
              opacity: 1,
              y: 0,
              rotateX: 0,
              ease: 'power4.out',
            },
            '<',
          )
          .to('.wheels', { right: 0, x: 0 }, '<')
          .fromTo(
            '.card',
            { opacity: 0.5 },
            {
              opacity: 0.05,
              filter: 'grayscale(100)',
            },
          )
          .to(
            '.fav',
            {
              opacity: 1,
              filter: 'grayscale(0)',
            },
            '<',
          );
      });
    },
    { scope: experienceRef },
  );

  return (
    <section
      id="experience"
      ref={experienceRef}
      className="experience relative h-auto w-full max-w-full gap-0 overflow-x-visible max-sm:px-0"
    >
      <DisplayMsg
        className="heading z-50 flex translate-y-8 opacity-0 max-sm:ml-[var(--responsive-gutter-width)]"
        categoryClassName="text-orange-400"
        category="Experience"
      >
        <h2>Technologies</h2>
      </DisplayMsg>
      <div className="relative min-h-[95svh] w-full sm:min-h-[70vh]">
        <div className="col sm:absolute-center z-10 flex w-full max-sm:absolute max-sm:bottom-0">
          <DisplayMsg className="line1 translate-y-10 -rotate-x-45 opacity-0">
            <p className="bg-linear-to-t from-transparent via-cyan-50 to-transparent text-5xl leading-[1.2] font-bold max-sm:px-[var(--responsive-gutter-width)] max-sm:text-3xl sm:py-32">
              Over the past few years, I&apos;ve worked <br /> with a wide range
              of technologies
            </p>
          </DisplayMsg>
          <DisplayMsg className="line2 absolute translate-y-8 opacity-0 max-sm:px-[var(--responsive-gutter-width)] lg:top-1/4 lg:max-w-96">
            <p className="text-text bg-linear-to-t from-transparent via-cyan-50 to-transparent text-5xl leading-[1.2] max-sm:text-3xl sm:max-lg:py-32 sm:max-lg:text-center lg:text-4xl">
              <span className="text-highlight">
                Some of them truly stuck with me,
              </span>{' '}
              so those are the ones I&apos;m taking along.
            </p>
          </DisplayMsg>
        </div>
        <div className="wheels sm:absolute-center relative col-span-2 row-span-2 w-[min(100%,43rem)] overflow-hidden max-sm:-mt-16">
          <SmallWheelLogos />
          <BigWheelLogos />
        </div>
      </div>
      <StatsSubSection />
    </section>
  );
}
export default Experience;
