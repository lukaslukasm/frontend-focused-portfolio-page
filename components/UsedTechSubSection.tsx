import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import DisplayMsg from './DisplayMsg';
import SmallWheelLogos from './SmallWheelLogos';
import BigWheelLogos from './BigWheelLogos';
import { useRef } from 'react';

function UsedTechSubSection() {
  const usedTechRef = useRef(null);

  useGSAP(
    () => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: usedTechRef.current,
            start: 'top top+=100',
            pin: true,
            scrub: 1,
            snap: { snapTo: 'labels', duration: 1 },
            end: '+=3000',
            onToggle: () => {
              document.querySelector('._2MD0k')?.scrollTo({ top: 0 });
            },
          },
        })
        .to('.line1', {
          opacity: 1,
          y: 0,
        })
        .addLabel('a')
        .to(
          '.line1',
          { opacity: 0, x: -200, duration: 1, filter: 'blur(20px)' },
          '>+=1',
        )
        .to(
          '.line2',
          {
            opacity: 1,
            x: 0,
            filter: 'blur(0px)',
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
          '<',
        )
        .to(
          '.fav',
          {
            opacity: 1,
            filter: 'grayscale(0)',
          },
          '<',
        )
        .addLabel('b')
        .fromTo(
          document.body,
          { objectFit: 'contain' },
          { objectFit: 'contain', duration: 1 },
        );
    },
    { scope: usedTechRef },
  );

  return (
    <div
      ref={usedTechRef}
      className="first-subsection relative min-h-[95svh] w-full sm:min-h-[70vh]"
    >
      <div className="col sm:absolute-center z-10 flex w-full max-sm:absolute max-sm:bottom-20">
        <DisplayMsg className="line1 translate-y-10 opacity-0">
          <p className="bg-linear-to-t from-transparent via-cyan-50 to-transparent text-5xl leading-[1.2] font-bold max-sm:px-[var(--responsive-gutter-width)] max-sm:text-3xl sm:py-32 xl:text-center">
            Over the past few years, I&apos;ve worked <br /> with a wide range
            of technologies
          </p>
        </DisplayMsg>
        <DisplayMsg className="line2 absolute translate-x-8 opacity-0 blur-lg max-sm:px-[var(--responsive-gutter-width)] lg:top-1/4 lg:max-w-96">
          <p className="text-text bg-linear-to-t from-transparent via-cyan-50 to-transparent text-5xl leading-[1.2] max-sm:text-3xl sm:max-lg:py-32 sm:max-lg:text-center lg:text-4xl">
            <span className="text-highlight">
              Some of them truly stuck with me,
            </span>{' '}
            so those are the ones I&apos;m taking along.
          </p>
        </DisplayMsg>
      </div>
      <div className="wheels sm:absolute-center relative col-span-2 row-span-2 w-[min(100%,43rem)] overflow-hidden max-sm:-translate-y-16">
        <SmallWheelLogos />
        <BigWheelLogos />
      </div>
    </div>
  );
}
export default UsedTechSubSection;
