'use client';
import DisplayMsg from './DisplayMsg';
import Carousel from './Carousel';
import CarouselSlide from './CarouselSlide';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';

/**
 * Section component for displaying the features of the first showcase project.
 *
 * Renders static content with layout, styling, and animations.
 */

function ShowcaseFeatures() {
  const featuresRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: featuresRef.current,
            start: 'top bottom-=100',
            toggleActions: 'play none none reset',
          },
        })
        .to('.carousel-slide, .carousel-arrows-nav, .heading', {
          y: 0,
          duration: 0.75,
          opacity: 1,
          stagger: 0.2,
        });
    },
    { scope: featuresRef },
  );

  return (
    <section
      ref={featuresRef}
      className="flex-center col w-full items-start justify-start overflow-x-visible px-0"
    >
      <DisplayMsg
        className="heading mb-4 ml-[var(--responsive-gutter-width)] translate-y-8 opacity-0"
        category="Skill Showcase"
      >
        <h2>Features</h2>
      </DisplayMsg>
      <Carousel className="[&_.carousel-arrows-nav]:translate-y-8 [&_.carousel-arrows-nav]:opacity-0 [&_.carousel-slide]:translate-y-8 [&_.carousel-slide]:opacity-0">
        {Array(5)
          .fill('')
          .map((e, i) => (
            <CarouselSlide key={`wipCarousel${i}`} className="">
              <p className="text-highlight/20 text-center text-xl font-black">
                Work In Progress
              </p>
            </CarouselSlide>
          ))}
      </Carousel>
    </section>
  );
}
export default ShowcaseFeatures;
