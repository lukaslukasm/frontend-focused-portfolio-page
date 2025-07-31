'use client';
import { useRef } from 'react';
import DisplayMsg from './DisplayMsg';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import StatsSubSection from './StatsSubSection';
import UsedTechSubSection from './UsedTechSubSection';

/**
 * Section component for displaying experience with technologies.
 *
 * Renders static content and dynamic contnent from /data/technologiesUsage.json with layout, styling, and animations.
 */

function Experience() {
  const experienceRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // pin the heading
      gsap.timeline({
        scrollTrigger: {
          trigger: '#experience > .heading-pin',
          pin: true,
          start: 'bottom top+=100',
          end: '+=3000',
        },
      });

      // animate the heading
      gsap
        .timeline({
          scrollTrigger: {
            trigger: experienceRef.current,
            start: 'top bottom-=200',
            toggleActions: 'play none none reset',
          },
        })
        .to('.experience .heading', {
          y: 0,
          duration: 0.75,
          opacity: 1,
          stagger: 0.2,
        });
    },
    { scope: experienceRef },
  );

  return (
    <section
      id="experience"
      ref={experienceRef}
      className="experience relative w-full max-w-full gap-0 overflow-x-visible max-sm:px-0"
    >
      <div className="heading-pin">
        <DisplayMsg
          className="heading z-50 flex translate-y-8 opacity-0 max-sm:ml-[var(--responsive-gutter-width)]"
          categoryClassName="text-orange-400"
          category="Experience"
        >
          <h2>Technologies</h2>
        </DisplayMsg>
      </div>

      <div className="">
        <UsedTechSubSection />
      </div>
      <div className="">
        <StatsSubSection />
      </div>
    </section>
  );
}
export default Experience;
