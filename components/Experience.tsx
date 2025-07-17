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
          .to('.line2', {
            bottom: '-30svh',
            ease: 'power4.out',
            marginBottom: 0,
          })
          .to('.wheels', { top: '30vh', y: 0 }, '<')
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
              start: 'center bottom',
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
      className="experience relative h-auto gap-0 overflow-x-visible"
    >
      <DisplayMsg
        className="heading z-50 flex translate-y-8 opacity-0"
        categoryClassName="text-orange-400"
        category="Experience"
      >
        <h2>Technologies</h2>
      </DisplayMsg>
      <div className="relative min-h-[90vh] sm:min-h-[70vh]">
        <div className="col absolute-center z-10 flex w-11/12 sm:mt-24">
          <DisplayMsg className="line1 translate-y-10 -rotate-x-45 opacity-0">
            <h2 className="my-32 bg-radial from-cyan-50 from-50% to-transparent to-70% text-center text-5xl max-sm:text-3xl">
              Over the past few years, I&apos;ve worked <br /> with a wide range
              of technologies
            </h2>
          </DisplayMsg>
          <DisplayMsg className="line2 absolute translate-y-8 opacity-0 xl:top-1/4 xl:max-w-96">
            <h2 className="bg-radial from-cyan-50 from-50% to-transparent to-70% text-5xl max-xl:my-32 max-xl:text-center max-sm:text-3xl xl:text-4xl">
              Some of them truly stuck with me - and those are the ones I&apos;m
              taking along.
            </h2>
          </DisplayMsg>
        </div>
        <div className="wheels absolute-center col-span-2 row-span-2 w-[min(100%,60rem)] overflow-hidden">
          <SmallWheelLogos />
          <BigWheelLogos />
        </div>
      </div>
      <StatsSubSection />
    </section>
  );
}
export default Experience;
