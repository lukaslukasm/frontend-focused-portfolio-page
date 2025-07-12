import '@splidejs/react-splide/css';
import DisplayMsg from './DisplayMsg';
import Carousel from './Carousel';
import CarouselSlide from './CarouselSlide';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';
import Image from 'next/image';
import ExpandableCarouselSlide from './ExpandableCarouselSlide';
import * as Dialog from '@radix-ui/react-dialog';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';

/**
 * Section component for displaying the other selected work.
 *
 * Renders static content with layout, styling, and animations.
 */

function OtherProjects() {
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
      ref={otherProjectsRef}
      className="flex-center col w-full items-start justify-start overflow-x-visible px-0"
    >
      <DisplayMsg
        className="heading mb-4 ml-[var(--responsive-gutter-width)] translate-y-8 opacity-0"
        category="Selected Work"
        categoryClassName="text-green-500"
      >
        <h2>Other Projects</h2>
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
          <Image
            src="/images/wordel-poster.png"
            alt=""
            width={360}
            height={600}
            className="absolute inset-0 -z-10 object-cover"
          />
          <DisplayMsg
            category="Going strong for 3yrs 💪"
            categoryClassName="text-green-700"
          >
            <h3 className="text-bg text-left">Wordel</h3>
          </DisplayMsg>
        </ExpandableCarouselSlide>
        <ExpandableCarouselSlide
          expandedContent={
            <div className="col flex">
              <VisuallyHidden>
                <Dialog.Title>Hello world</Dialog.Title>
                <Dialog.Description>Hello world</Dialog.Description>
              </VisuallyHidden>
              <h1>the second slide expandable</h1>
              <button>button</button>
            </div>
          }
          btnClassName="bg-green-600 text-bg/80"
        >
          <Image
            src="/images/wordel-poster.png"
            alt=""
            width={360}
            height={600}
            className="absolute inset-0 -z-10 object-cover"
          />
          <DisplayMsg
            category="Going strong for 3yrs 💪"
            categoryClassName="text-green-700"
          >
            <h3 className="text-bg text-left">Wordel</h3>
          </DisplayMsg>
        </ExpandableCarouselSlide>
        <CarouselSlide className="bg-yellow-300">
          <DisplayMsg
            category="Entertainment"
            categoryClassName=" text-white/50"
          >
            <h3 className="text-white">Traumatised kids</h3>
          </DisplayMsg>
          <div className="flex-grow"></div>
          <img
            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/afafe003-d161-4420-b1f0-57deb451cc3c/d735xq8-c61f2304-d3dc-460f-80fc-413be8f3fe10.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2FmYWZlMDAzLWQxNjEtNDQyMC1iMWYwLTU3ZGViNDUxY2MzY1wvZDczNXhxOC1jNjFmMjMwNC1kM2RjLTQ2MGYtODBmYy00MTNiZThmM2ZlMTAucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.NZ-6qMMJ-882FkNtjicibaSDdweXwDWkb6Uwjo8URgA"
            alt=""
          />
        </CarouselSlide>
        <CarouselSlide className="isolate justify-end">
          <img
            src="https://www.petrolissimo.sk/www/files/news/23/detail_porsche-911-gt3-992-13_132506a4c.jpg"
            alt=""
            className="absolute inset-0 h-full object-cover"
          />
          <DisplayMsg
            category="Precision"
            className="relative z-10"
            categoryClassName=" text-white/50"
          >
            <h3 className="text-white">Reach Top Speeds</h3>
          </DisplayMsg>
        </CarouselSlide>
        <CarouselSlide>
          <DisplayMsg
            category="Security"
            className="relative z-10"
            categoryClassName="text-emerald-600/50"
          >
            <h3>Maximum Safety</h3>
          </DisplayMsg>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos
            incidunt, autem nesciunt tempore sint amet vero libero et illo
            blanditiis?
          </p>
          <div className="flex-grow"></div>
          <img
            src="https://www.pngplay.com/wp-content/uploads/8/Padlock-PNG-Clipart-Background.png"
            alt=""
            className="w-4/5"
          />
        </CarouselSlide>
      </Carousel>
    </section>
  );
}
export default OtherProjects;
