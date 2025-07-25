'use client';
import { Tooltip } from 'react-tooltip';
import '../styles/react-tooltip.css';
import StatsBubblesView from './StatsBubblesView';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import DisplayMsg from './DisplayMsg';

/**
 * Sub-Section component for displaying experience with technologies in numbers.
 *
 * Renders static content and dynamic contnent from /data/technologiesUsage.json with layout, styling, and animations.
 */
function StatsSubSection() {
  useGSAP(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: '.statsSubsection',
          start: 'top bottom-=150',
          toggleActions: 'play none none reset',
        },
      })
      .to('.statsSubsection > div', {
        y: 0,
        duration: 0.75,
        opacity: 1,
        stagger: 0.2,
      });
  });

  return (
    <div className="statsSubsection max-lg:flex-center mt-24 grid-cols-2 flex-col gap-12 sm:mt-48 lg:grid">
      <DisplayMsg
        className="z-50 flex translate-y-8 opacity-0 max-lg:w-full max-sm:px-[var(--responsive-gutter-width)] lg:col-span-2"
        categoryClassName="text-orange-400"
        category="Experience"
      >
        <h2>In numbers</h2>
      </DisplayMsg>
      <div className="relative w-screen translate-y-8 opacity-0 max-lg:order-1 max-lg:mt-12 sm:w-full">
        <StatsBubblesView />
      </div>
      <div className="translate-y-8 opacity-0 max-sm:px-[var(--responsive-gutter-width)] lg:mt-10">
        <Tooltip id="my-tooltip" />
        <p className="text-text leading-[1.2] font-bold tracking-wide sm:text-3xl">
          Rather than labelling my skills with vague terms like
          &apos;intermediate&apos; or &apos;advanced&apos;, here is{' '}
          <span className="text-highlight">
            {' '}
            the number of{' '}
            <span
              data-tooltip-id="my-tooltip"
              data-tooltip-content="A small project, contribution, or research that produced a usable result."
              className='relative mr-2 after:absolute after:top-0 after:text-xs after:text-orange-400 after:content-["?"] after:lg:text-base'
            >
              deliverables
            </span>{' '}
            I’ve shipped
          </span>{' '}
          using each technology over the past 3 years.
        </p>
        <p className="text-highlight mt-4 text-xl font-bold sm:mt-16 sm:text-3xl">
          Deliverables shipped to date:{' '}
          <span className="text-orange-400">53</span>
        </p>
      </div>
    </div>
  );
}
export default StatsSubSection;
