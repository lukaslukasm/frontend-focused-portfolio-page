import { Tooltip } from 'react-tooltip';
import '../styles/react-tooltip.css';
import StatsBubblesView from './StatsBubblesView';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import gsap from 'gsap';
import DisplayMsg from './DisplayMsg';

/**
 * Sub-Section component for displaying experience with technologies in numbers.
 *
 * Renders static content and dynamic contnent from /data/technologiesUsage.json with layout, styling, and animations.
 */
function StatsSubSection() {
  const statsSubsectionRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: statsSubsectionRef.current,
            start: 'top center',
          },
        })
        .to('.statsSubsection > div', {
          y: 0,
          delay: 0.5,
          duration: 0.75,
          opacity: 1,
          stagger: 0.2,
        });
    },
    { scope: statsSubsectionRef },
  );

  return (
    <div
      ref={statsSubsectionRef}
      className="statsSubsection max-lg:flex-center mt-24 grid-cols-2 flex-col gap-12 sm:mt-48 lg:grid lg:gap-32"
    >
      <DisplayMsg
        className="z-50 flex translate-y-8 opacity-0 max-lg:w-full lg:col-span-2"
        categoryClassName="text-orange-400"
        category="Experience"
      >
        <h2>In numbers</h2>
      </DisplayMsg>
      <div className="w-screen translate-y-8 opacity-0 max-lg:order-1 max-lg:mt-12 sm:w-full">
        <StatsBubblesView />
      </div>
      <div className="translate-y-8 opacity-0 lg:mt-10">
        <Tooltip id="my-tooltip" />
        <p className="text-text text-xl font-bold sm:text-3xl">
          Rather than labelling my skills with vague terms like
          &apos;intermediate&apos; or &apos;advanced&apos;, here is the number
          of{' '}
          <span
            data-tooltip-id="my-tooltip"
            data-tooltip-content="A small project, contribution, or research that produced a usable result."
            className='relative mr-2 after:absolute after:top-0 after:text-base after:text-orange-500 after:content-["?"]'
          >
            deliverables
          </span>{' '}
          I’ve shipped using each technology.
        </p>
        <p className="text-text mt-4 text-xl font-bold sm:mt-16 sm:text-3xl">
          Deliverables shipped to date:{' '}
          <span className="text-orange-400">53</span>
        </p>
      </div>
    </div>
  );
}
export default StatsSubSection;
