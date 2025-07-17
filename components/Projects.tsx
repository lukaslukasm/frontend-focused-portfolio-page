import '@splidejs/react-splide/css';
import DisplayMsg from './DisplayMsg';
import Carousel from './Carousel';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';
import Image from 'next/image';
import ExpandableCarouselSlide from './ExpandableCarouselSlide';
import * as Dialog from '@radix-ui/react-dialog';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import CarouselSlide from './CarouselSlide';

/**
 * Section component for displaying the other selected work.
 *
 * Renders static content with layout, styling, and animations.
 */

function Projects() {
  const otherProjectsRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: otherProjectsRef.current,
            start: 'top bottom+=50',
            toggleActions: 'restart none none none',
          },
        })
        .to('.carousel-slide, .carousel-arrows-nav, .heading', {
          y: 0,
          duration: 0.75,
          opacity: 1,
          stagger: 0.2,
        });
    },
    { scope: otherProjectsRef },
  );

  return (
    <section
      id="portfolio"
      ref={otherProjectsRef}
      className="flex-center col w-full items-start justify-start overflow-x-visible px-0"
    >
      <DisplayMsg
        className="heading mb-4 ml-[var(--responsive-gutter-width)] translate-y-8 opacity-0"
        category="Portfolio"
        categoryClassName="text-green-600"
      >
        <h2>Selected Work</h2>
      </DisplayMsg>
      <Carousel className="[&_.carousel-arrows-nav]:translate-y-8 [&_.carousel-arrows-nav]:opacity-0 [&_.carousel-slide]:translate-y-8 [&_.carousel-slide]:opacity-0">
        <ExpandableCarouselSlide
          expandedContent={
            <div className="col flex">
              <VisuallyHidden>
                <Dialog.Title>Hello world</Dialog.Title>
                <Dialog.Description>Hello world</Dialog.Description>
              </VisuallyHidden>
              <h1>this is the content of expanded carousel slide</h1>
              <button>button</button>
            </div>
          }
          btnClassName="bg-green-600 text-bg/80"
        >
          <div className="absolute inset-0 -right-10 -z-10 size-full overflow-hidden rounded-3xl">
            <Image
              src="/images/reservation-system-poster.png"
              alt=""
              width={460}
              height={700}
              className="scale-110 object-cover blur-xs"
            />
          </div>
          <div className="col flex">
            <DisplayMsg
              category="Engineered for zero friction"
              categoryClassName="text-green-600"
            >
              <h3 className="text-highlight text-left text-[1.4rem] sm:text-[1.8rem]">
                Reservation System
              </h3>
            </DisplayMsg>
            <p className="text-highlight mt-2 text-sm opacity-70 sm:text-base">
              A simple reservation system made using the finest frontend
              practices used by the industry.
            </p>
          </div>
        </ExpandableCarouselSlide>
        <ExpandableCarouselSlide
          expandedContent={
            <div className="col flex">
              <VisuallyHidden>
                <Dialog.Title>Hello world</Dialog.Title>
                <Dialog.Description>Hello world</Dialog.Description>
              </VisuallyHidden>
              <h1>this is the content of expanded carousel slide</h1>
              <button>button</button>
            </div>
          }
          btnClassName="bg-green-600 text-bg/80"
        >
          <div className="absolute inset-0 -right-10 -z-10 size-full overflow-hidden rounded-3xl">
            <Image
              src="/images/wordel-poster.png"
              alt=""
              width={460}
              height={700}
              className="scale-110 object-cover blur-xs brightness-50"
            />
          </div>
          <div className="col flex">
            <DisplayMsg
              category="Beware, highly addictive!"
              categoryClassName="text-green-600"
            >
              <h3 className="text-bg text-left">Wordeľ</h3>
            </DisplayMsg>
            <p className="mt-2 text-sm text-white opacity-70 sm:text-base">
              Visually polished version of the Wordle game with added support
              for Slovak language.
            </p>
          </div>
        </ExpandableCarouselSlide>
        <ExpandableCarouselSlide
          expandedContent={
            <div className="col flex">
              <VisuallyHidden>
                <Dialog.Title>Klenotnicky Radca</Dialog.Title>
                <Dialog.Description></Dialog.Description>
              </VisuallyHidden>
              <h1>this is the content of expanded carousel slide</h1>
              <button>button</button>
            </div>
          }
          btnClassName="bg-green-600 text-bg/80"
        >
          <div className="absolute top-0 bottom-0 left-0 -z-10 size-full overflow-hidden rounded-3xl">
            <Image
              src="/images/amawell-poster.png"
              alt="Jewerly Wizard poster"
              fill
              className="scale-105 object-cover blur-xs"
            />
          </div>
          <DisplayMsg
            category="Advanced gestures"
            categoryClassName="text-green-600"
          >
            <h3 className="text-highlight text-left">Jewelry Wizard</h3>
          </DisplayMsg>
          <p className="text-text mt-2 text-sm opacity-70 sm:text-base">
            A multi-step, input-driven branching wizard with navigation and
            granular gestures handling.
          </p>
        </ExpandableCarouselSlide>
        <ExpandableCarouselSlide
          expandedContent={
            <div className="col flex">
              <VisuallyHidden>
                <Dialog.Title>Klenotnicky Radca</Dialog.Title>
                <Dialog.Description></Dialog.Description>
              </VisuallyHidden>
              <h1>this is the content of expanded carousel slide</h1>
              <button>button</button>
            </div>
          }
          btnClassName="bg-green-600 text-bg/80"
        >
          <div className="from-highlight absolute top-0 bottom-0 left-0 -z-10 size-full overflow-hidden rounded-3xl bg-gradient-to-br to-cyan-500"></div>
          <DisplayMsg
            category="Me 🤝 Self-torture"
            categoryClassName="text-green-600"
          >
            <h3 className="text-bg text-left">Portfolio Page</h3>
          </DisplayMsg>
          <p className="text-bg mt-2 text-sm opacity-90 sm:text-base">
            The very one you&apos;re scrolling right now. My work includes
            design, animations, copywriting and development. I&apos;m sure
            specialists from those fields can tell.
          </p>
        </ExpandableCarouselSlide>
        <CarouselSlide>
          <button
            className="col flex size-full cursor-pointer text-left"
            onClick={() => {
              gsap.to(window, { duration: 1, scrollTo: '#showcase' });
            }}
          >
            <DisplayMsg
              category="Latest Work"
              categoryClassName="text-green-600"
            >
              <h3 className="text-highlight">Skill Showcase</h3>
            </DisplayMsg>
            <p className="text-text mt-2 text-sm opacity-90 sm:text-base">
              Coming soon.
            </p>
            <div className="text-bg/80 absolute right-6 bottom-6 rounded-full bg-green-600 p-1.5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={4}
                stroke="currentColor"
                className="w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </div>
          </button>
        </CarouselSlide>
      </Carousel>
    </section>
  );
}
export default Projects;
